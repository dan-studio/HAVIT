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
  return (
    <StyledDiv>
      <h2>HAVIT 랭킹</h2>
      <div
        onClick={() => {
          setOpen(true);
        }}
      >
        asd
      </div>
      <Modal
        title="Modal 1000px width"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <StyledContent>여기 컨텐츠</StyledContent>
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