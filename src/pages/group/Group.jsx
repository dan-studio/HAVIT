import { PlusCircleFilled } from "@ant-design/icons";
import { Row, Select } from "antd";
import styled from "styled-components";
import CrewInfo from "@components/cards/CrewInfo";
import styles from "./group_list.module.less";
import { useNavigate } from "react-router";
import ArrowButton from "@components/button/ArrowButton";
import React, { useEffect, useState } from "react";
import { getAllGroupList, getMyGroupList } from "@apis/group/group";
import { userApis } from "../../apis/auth";
// /group
const Group = () => {
  const selectList = ["전체", "내 그룹", "인기순", "태그별"]
  const [selected, setSelected] = useState("전체");
  const [crew, setCrew] = useState([]);
  const [tag, setTag] = useState([])
  const navigate = useNavigate();
  useEffect(() => {
    if (selected === "전체") {
      getAllGroupList()
        .then((res) => {
          setCrew(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (selected === "내 그룹") {
      getMyGroupList()
        .then((res) => {
          console.log(res)
          setCrew(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }else if (selected === "인기순"){
      getAllGroupList().then(res=>{
        const popular = res.data.sort((a,b)=>b.memberCount-a.memberCount)
        setCrew(popular)
      })
    }else if (selected === "태그별"){
      userApis.getByTag(tag).then(res=>{
        setCrew(res.data)
      })
    }
  }, [selected, tag]);
  const handleSelect = (e) => {
    setSelected(e);
  };
  const onTagClick = tagItem => {
    setTag(tagItem)
    setSelected("태그별")
  }
  return (
    <StyledContainer id={"content"}>
      <Row>
        <Select
          className={styles.pop_radius}
          value={selected}
          onChange={handleSelect}
        >
          {selectList.map(item=>
          item==="태그별"?
          <Select.Option value={item} key={item} disabled>{item}</Select.Option>:
          <Select.Option value={item} key={item}>{item}</Select.Option>
        
          )}
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
      {crew?.map((item, idx) => (
        <CrewInfo type="list" {...item} key={idx} setTag={setTag} onTagClick={onTagClick}tag={tag}/>
      ))}
      <StyledBox>
        더이상 그룹이 없어요.
        <ArrowButton />
      </StyledBox>
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
