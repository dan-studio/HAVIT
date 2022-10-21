import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { userApis } from "../../apis/auth";
import { Modal } from "antd";

const Rank = () => {
  const [open, setOpen] = useState(false);
  const [groups, setGroups] = useState();
  useEffect(() => {
    userApis.getGroup().then((res) => {
      setGroups(res.data);
    });
  }, []);
  console.log(groups)
  const byNumber = groups?.sort((a, b) =>  b.memberCount- a.memberCount);
  console.log(byNumber)

  return (
    <StyledDiv>
      <h2>HAVIT 랭킹</h2>
      <div
        onClick={() => {
          setOpen(true);
        }}
      >
        가장 많은 멤버 수
      </div>
      <Modal
        title="Modal 1000px width"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <div>
        <StyledContent>
          여기 컨텐츠
          {/* {byNumberTop5?.map((el)=>el.title)}  */}
          
          {groups?.map((el)=>
          <div key={el.groupId} >
          {el.title}
          </div>

          )} 

          </StyledContent>
          </div>
      </Modal>
    </StyledDiv>
  );
};

export default Rank;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledContent = styled.div`
  background-color: aliceblue;
  height: 700px;
`