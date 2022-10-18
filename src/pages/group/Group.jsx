import { PlusCircleFilled } from "@ant-design/icons";
import { Row, Select } from "antd";
import styled from "styled-components";
import CrewInfo from "@components/cards/CrewInfo";
import styles from "./group_list.module.less";
import { useNavigate } from "react-router";
import ArrowButton from "@components/button/ArrowButton";
import React, { useEffect, useRef, useState } from "react";
import { getAllGroupList, getMyGroupList } from "@apis/group/group";
import { userApis } from "../../apis/auth";
import { useDispatch, useSelector } from "react-redux";
import { clearTag } from "../../redux/tags";
import useElementOnScreen from "@hooks/useElementOnScreen";
import SkeletonUI from "../../components/SkeletonUI";
// /group
const Group = () => {
  const [listPage, setListPage] = useState(0);
  const selectList = ["전체", "내 그룹", "인기순"];
  const [selected, setSelected] = useState("전체");
  const [crew, setCrew] = useState([]);
  const [tag, setTag] = useState([]);
  const tagSelect = useSelector((state) => state.tag.tag);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (tagSelect !== undefined) {
      setSelected(tagSelect);
    } else if (tagSelect === undefined) {
      setSelected("전체");
    }
  }, []);
  useEffect(() => {
    if (selected === "전체") {
      userApis
        .getGroupByPage(listPage)
        .then((res) => setCrew((prev) => [...prev, ...res]));
    } else if (selected === "내 그룹") {
      userApis.getmyGroup().then((res) => {
        if (res.data.code === "PARTICIPATION_NOT_FOUND") {
          return alert("참여중인 그룹이 없어요! 그룹에 가입해주세요 :)");
        } else {
          getMyGroupList()
            .then((res) => {
              setCrew(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    } else if (selected === "인기순") {
      getAllGroupList().then((res) => {
        const popular = res.data.sort((a, b) => b.memberCount - a.memberCount);
        setCrew(popular);
      });
    } else {
      if (tagSelect) {
        setTag(tagSelect);
        userApis.getByTag(tagSelect).then((res) => {
          setCrew(res.data);
          dispatch(clearTag());
        });
      } else {
        userApis.getByTag(tag).then((res) => {
          setCrew(res.data);
        });
      }
    }
  }, [listPage, tagSelect, selected, tag]);

  const handleSelect = (e) => {
    setSelected(e);
  };
  const onTagClick = (tagItem) => {
    setTag(tagItem);
    setSelected(tagItem);
  };

  // inf Scroll
  const [itemLists, setItemLists] = useState([]);
  const [target, isLoaded] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });
  const getMoreData = () => {
    setListPage((prev) => prev + 1);
  };
  useEffect(() => {
    if (isLoaded) {
      getMoreData();
    }
  }, [isLoaded]);
  //
  return (
    <StyledContainer id={"content"}>
      <Row>
        <Select
          className={styles.pop_radius}
          value={selected}
          onChange={handleSelect}
        >
          {selectList?.map((item) => (
            <Select.Option value={item} key={item}>
              {item}
            </Select.Option>
          ))}
        </Select>
      </Row>
      <Row>
        <StyledAddGroupContainer onClick={() => navigate("create")}>
          <PlusCircleFilled
            style={{
              color: "rgba(58,58,58,0.3)",
              fontSize: "2.25rem",
            }}
          />
          새 그룹 생성
        </StyledAddGroupContainer>
      </Row>
      {crew.length === 0 ? (
        <div>{crew}</div>
      ) : (
        crew?.map((item, idx) => (
          <CrewInfo
            type="list"
            {...item}
            key={idx}
            setTag={setTag}
            onTagClick={onTagClick}
            tag={tag}
          />
        ))
      )}
      {isLoaded ? <StyledBox>더이상 그룹이 없어요.</StyledBox> : <SkeletonUI />}
      <FixedButton>
        <ArrowButton />
      </FixedButton>
      <div ref={target}></div>
    </StyledContainer>
  );
};

export default React.memo(Group);

const StyledContainer = styled.div`
  flex-direction: column;
  display: flex;
  gap: 1rem 0;
`;

const StyledAddGroupContainer = styled.div`
  width: 100%;
  height: 162px;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1rem;
  justify-content: center;
  gap: 0.75rem 0;
  color: rgba(58, 58, 58, 0.3);
  flex-direction: column;
  border: 1px dashed rgba(58, 58, 58, 0.3);
  border-radius: 25px;
  transition: 250ms;
  &:hover {
    transform: scale(0.95);
  }
`;
const StyledBox = styled.div`
  position: relative;
  width: 100%;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #787878;
  font-size: 0.8rem;
`;
const FixedButton = styled.div`
  position: fixed;
  bottom: 7vh;
  right: 1vw;
`;
