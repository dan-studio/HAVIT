import { PlusCircleFilled } from "@ant-design/icons";
import { Row, Select } from "antd";
import styled from "styled-components";
import CrewInfo from "@components/cards/CrewInfo";
import styles from "./group_list.module.less";
import { useNavigate } from "react-router";
import ArrowButton from "@components/button/ArrowButton";
import React, { useEffect, useState } from "react";
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
  const [allGroup, setAllGroup] = useState([]);
  const [popularGroup, setPopularGroup] = useState([]);
  const [myGroup, setMyGroup] = useState([]);
  const [tagGroup, setTagGroup] = useState([]);
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
        .then((res) => setAllGroup((prev) => [...prev, ...res]));
    } else if (selected === "내 그룹") {
      userApis.getMyGroup().then((res) => {
        if (res.data.code === "PARTICIPATION_NOT_FOUND") {
          return;
        } else {
          userApis.getMyGroup().then((res) => {
            setMyGroup(res.data);
          });
        }
      });
    } else if (selected === "인기순") {
      userApis.getGroupByPopularity(listPage).then((res) => {
        setPopularGroup((prev) => [...prev, ...res]);
      });
    } else {
      if (tagSelect) {
        setTag(tagSelect);
        userApis.getByTag(tagSelect).then((res) => {
          setTagGroup(res.data);
          dispatch(clearTag());
        });
      } else {
        userApis.getByTag(tag).then((res) => {
          setTagGroup(res.data);
        });
      }
    }
  }, [listPage, tagSelect, selected, tag]);

  const resetList = () => {
    setAllGroup([]);
      setPopularGroup([]);
    setListPage(0);
  }
  const handleSelect = (e) => {
    setSelected(e);
    resetList()
  };
  const onTagClick = (tagItem) => {
    setTag(tagItem);
    setSelected(tagItem);
  };

  // inf Scroll
  const [target, isLoaded] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: .7,
  });
  const getMoreData = () => {
    setListPage((prev) => prev + 1);
  };
  useEffect(() => {
    if (listPage === 0) {
      
    }
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
      {selected === "전체"
        ? allGroup?.map((item, idx) => (
            <CrewInfo
              type="list"
              {...item}
              key={idx}
              setTag={setTag}
              onTagClick={onTagClick}
              tag={tag}
            />
          ))
        : selected === "내 그룹"
        ? myGroup?.map((item, idx) => (
            <CrewInfo
              type="list"
              {...item}
              key={idx}
              setTag={setTag}
              onTagClick={onTagClick}
              tag={tag}
            />
          ))
        : selected === "인기순"
        ? popularGroup?.map((item, idx) => (
            <CrewInfo
              type="list"
              {...item}
              key={idx}
              setTag={setTag}
              onTagClick={onTagClick}
              tag={tag}
            />
          ))
        : selected === tag && tagGroup.length > 0
        ? tagGroup?.map((item, idx) => (
            <CrewInfo
              type="list"
              {...item}
              key={idx}
              setTag={setTag}
              onTagClick={onTagClick}
              tag={tag}
            />
          ))
        : null}
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
