import styled from "styled-components";
import { EditFilled } from "@ant-design/icons";
import { Button, Col, Divider, Form, Input, Modal, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import styles from "./group_create.module.less";
import React from "react";
import Uploader from "@components/input/Uploader";
import TagInput from "@components/input/TagInput";
import useInputs from "@hooks/useInput";
import { useNavigate, useParams } from "react-router-dom";
import { userApis } from "../../apis/auth";

const GroupEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [form, onChange, reset, changeInitial] = useInputs();
  React.useEffect(() => {
    userApis.getGroupDetail(id)
      .then((res) => {
        changeInitial(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const submitHandler = () => {
    Modal.confirm({
      title: "확인",
      content: (
        <div>
          그룹을 <b>수정</b> 하시겠습니까?
        </div>
      ),
      okText: "확인",
      cancelText: "취소",
      onOk: () => {
        userApis.editGroup(id, form)
          .then((res) => {
            if (res.status === 200) {
              alert("그룹 수정이 완료되었습니다.");
              navigate(`/group/${res.data.groupId}`, {state:'/group'});
            }
          })
          .catch((err) => {
            alert("모든 항목을 입력해주세요!");
          });
      },
    });
  };
  const ModalCancel = () => {
    Modal.confirm({
      title: "안내",
      content: (
        <div>
          <div>모든 내용이 지워집니다.</div>
          <div>정말 취소하시겠습니까?</div>
        </div>
      ),
      okText: "확인",
      cancelText: "취소",
      onOk: () => {
        navigate(-1);
      },
    });
  };

  const ModalDelete = () => {
    Modal.confirm({
      title: "안내",
      content: (
        <div>
          <div>모든 내용이 지워집니다.</div>
          <div>정말 해산하시겠습니까?</div>
        </div>
      ),
      okText: "확인",
      cancelText: "취소",
      onOk: () => {
        userApis
          .deleteGroup(id)
          .then((res) => {
            console.log(res);
            navigate("/group");
          })
          .catch((err) => {
            console.log(err);
          });
      },
    });
  };

  return (
    <StyledContainer id="content">
      <Row>
        <Col span={6}>
          <Uploader
            className={styles.upload}
            value={form?.imageId}
            onChange={(e) => {
              form.imageId = e;
            }}
          ></Uploader>
        </Col>
        <Col span={18}>
          <Form.Item>
            <Input
              name="title"
              value={form?.title}
              onChange={onChange}
              className={styles.title_input}
              type="search"
              suffix={<EditFilled />}
              placeholder="크루명 입력"
            ></Input>
          </Form.Item>
          <Form.Item style={{ padding: "0 .5rem", overflowY: "auto" }}>
            <TagInput
              name="groupTag"
              title={"groupTag"}
              value={form?.groupTag}
              onChange={onChange}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item>
            <TextArea
              name="content"
              value={form?.content}
              onChange={onChange}
              placeholder="그룹을 소개 해주세요"
              className={styles.text_area}
              autoSize={{ minRows: 6, maxRows: 6 }}
            ></TextArea>
          </Form.Item>
        </Col>
      </Row>
      <Divider></Divider>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <StyledTitle>호칭 설정</StyledTitle>
        </Col>
        <Col span={11}>
          <Input
            name="leaderName"
            value={form?.leaderName}
            onChange={onChange}
            type="text"
            placeholder="크루장"
            className={styles.input_border}
          ></Input>
        </Col>
        <Col span={11} offset={2}>
          <Input
            name="crewName"
            value={form?.crewName}
            onChange={onChange}
            type="text"
            placeholder="크루원"
            className={styles.input_border}
          ></Input>
        </Col>
      </Row>
      <StyledDeleteGroup onClick={ModalDelete}>그룹 해산</StyledDeleteGroup>
      <Row
        justify="center"
        className={styles.button_group}
        style={{ top: "180px" }}
      >
        <Button type="primary" onClick={submitHandler}>
          수정
        </Button>
        <Button type="default" onClick={ModalCancel}>
          취소
        </Button>
      </Row>
    </StyledContainer>
  );
};

export default React.memo(GroupEdit);
const StyledContainer = styled.div``;
const StyledTitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.black};
`;
const StyledDeleteGroup = styled.div`
  margin-top: 30px;
  color: #8b8b8b;
  font-size: 12px;
  cursor: pointer;
`;
