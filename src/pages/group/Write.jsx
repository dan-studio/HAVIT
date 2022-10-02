import styled from "styled-components";
import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import PrimaryButton from "@components/button/PrimaryButton";
import SubButton from "@components/button/SubButton";
import Uploader from "@components/input/Uploader";
import { IoLocationOutline } from 'react-icons/io5';
import styles from "./group_post.module.less";
import KakaoMap from "@components/kakao/Map";
import { AddressSerachPopup } from "@components/kakao/AddressSearch";
import { Collapse, Modal } from "antd";
import useInputs from "@hooks/useInput";
import { createCertify } from "@apis/group/certify";
import { useParams } from "react-router-dom";
const Write = () => {
    const {groupId} = useParams();
    const [form, onChange, reset] = useInputs({
      groupId:groupId,
      longitude:null,
      latitude:null,
      title:"",
      imageId:null
    });
    const [pos, setPos] = React.useState({lat:0, lng:0});
    const onComplete = ()=>{
      Modal.confirm({
        title:"확인",
        content:<div>게시물을 생성 하시겠습니까?</div>,
        okText:"확인",
        cancelText:"취소",
        onOk:()=>{
          createCertify(form).then((res)=>{
                if(res.status === 200){
                    alert("게시물 생성이 완료되었습니다.");
                }
            }).catch((err)=>{
                console.log(err);
                alert("Post Create Fail error:",err);
            })
        },
    })
    }
    return (
      <div>
        <WriteBox>
          <Uploader className={styles.add_photo} name="imageId" value={form?.imageId} onChange={(e)=>{form.imageId = e}} children={
            <AiOutlinePlusCircle style={{"fontSize":"5rem", "color":"lightgray"}}/>
          }/>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <InputTitle placeholder="제목입력" name="title" value={form?.title} onChange={onChange} />
            <Collapse ghost >
                <Collapse.Panel showArrow={false} key={1} header={<AddLocation
              style={{
                marginTop: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <IoLocationOutline
                style={{
                  fontSize: "18px",
                  color: "#DE4242",
                  marginRight: "5px",
                }}
              />
              위치추가
            </AddLocation>}>
              <AddressSerachPopup onChange={(e)=>{
                const {lat, lng} = e;
                setPos({lat,lng})
                form.longitude = lng;
                form.latitude = lat;
                }}/>
              <KakaoMap pos={pos}></KakaoMap>
            </Collapse.Panel>
            </Collapse>
          </div>
          <WriteBtn style={{ marginTop: "5.625rem" }}>
            <PrimaryButton buttonName={"등록"} onClick={onComplete} />
            <SubButton buttonName={"취소"} onClick={reset}/>
          </WriteBtn>
        </WriteBox>
      </div>
    );
};

const WriteBox = styled.div`
  display: flex;
  flex-direction: column;
  padding:0 1.5rem;
  article {
    padding: 1rem 3rem;
  }
  width: 390px;
  margin: 0 auto;
`;
const InputTitle = styled.input`
  width: 334px;
  border:none;
  border-bottom:3px solid lightgray;
  margin: 45px auto 0 auto;
  :focus{
    outline:none;
    border-bottom:3px ${({theme})=>(theme.color.primary_color)} solid;
  }
`;

const AddLocation = styled.button`
  width: 350px;
  border-color: transparent;
  background-color: transparent;
  margin-right: 0;
  font-weight: bold;
  font-size: 15px;
  margin-top: 10px 20px 0 20px;
  text-align: left;
`;
const WriteBtn = styled.div`
  display: flex;
  flex-direction: row;
  /* position: center; */
  margin: 0 auto;
  padding-bottom:3rem;
`;

export default Write;
