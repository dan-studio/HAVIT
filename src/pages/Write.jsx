import styled from "styled-components";
import React, { useEffect, useState, useRef } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import PrimaryButton from "../components/button/PrimaryButton";
import SubButton from "../components/button/SubButton";
import Location from "../components/layout/Location";
import axios from "axios";
import Uploader from "../components/input/Uploader";
import { Upload } from "antd";
import { userApis } from "../apis/auth";
import { IoLocationOutline } from 'react-icons/io5';
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Write = () => {
  const state =useLocation()
  const navigate = useNavigate()
  const [image, setImage] = useState("");
  const [challengeTitle, setChallengeTitle] = useState("");
  const challengeTitleInfo = (challengeTitle) => {
    setChallengeTitle(challengeTitle);
  };
  const imageInfo = (image) => {
    setImage(image);
  };
  const url = useParams()
  const addCertify = {
    groupId: url.groupId,
    title: challengeTitle,
    imgFile: image,
  };
  console.log("image조회", image);
  const handleChange = (e) => {
    setImage(e.target.files[0]);
    imageInfo(e.target.files[0]);
  };
  //textBox부분

  const textareaHandler = (e) => {
    setChallengeTitle(e.target.value);
    challengeTitleInfo(e.target.value);
    console.log("title", challengeTitle);
  };
  // contentInfo 부분
  const onChangeTitle = (e) => {
    setChallengeTitle(e.target.value);
  };

  const imageInput = useRef();

  // 버튼클릭시 input태그에 클릭이벤트를 걸어준다.
  const onCickImageUpload = () => {
    imageInput.current.click();
  };

  const locationRef = React.useRef();
  const [showLocationForm, setShowLocationForm] = useState(false);
  useEffect(() => {
    let handler = (e) => {
      if (!locationRef.current?.contains(e.target)) {
        setShowLocationForm(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  console.log("challengeTitle타입조회", typeof(challengeTitle))

  console.log("addcertify",addCertify);
  const addClickHandler = () => {
    let formData = new FormData();
    // formData.append(
    //   "data",
    //   new Blob([JSON.stringify(addCertify)], { type: "application/json" })
    // );
    formData.append("imgFile", image);
    formData.append("groupId",url.groupId );
    formData.append("title", challengeTitle);


    for (let i of formData.entries()) {
      console.log("i", i[1]);
      console.log("formdata반복문조회", formData);
    }

      // dispatch(_addPost(formData));
      // axios.post("http://localhost:3001/certify",formData)

      // await axios.post("http://localhost:3001/certify",addCertify)
      userApis
        .uploadImage(formData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      // userApis.uploadImage(addCertify)

      // console.log("formdata조회", formData);
      //이동할때 새로고침하고 들어가짐(위험?)
      // window.location.replace("/group/detail/write");
    };

    return (
      <div>
        <WriteBox>
          <AddPhoto>
            <IconBox>
              <AiOutlinePlusCircle
                size="60"
                color="lightgray"
                onClick={onCickImageUpload}
                onChange={handleChange}
              />
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                ref={imageInput}
                onChange={handleChange}

                // ref={refParam => inputRef = refParam}
              />
              <div className="img-wrapper">
                <img src={""} style={{ height: "160px" }} alt="" />
              </div>
            </IconBox>
          </AddPhoto>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <InputTitle placeholder="제목입력" onChange={textareaHandler} />
            <AddLocation
              style={{
                marginTop: "10px",
                display: "flex",
                alignItems: "center",
              }}
              onClick={() => setShowLocationForm(true)}
            >
              {/* <LibraryAddIcon /> */}
              <IoLocationOutline
                style={{
                  fontSize: "18px",
                  color: "#DE4242",
                  marginRight: "5px",
                }}
              />
              위치추가
            </AddLocation>
          </div>
          {!!showLocationForm ? <Location /> : <> </>}
          <WriteBtn style={{ marginTop: "5.625rem" }}>
            <PrimaryButton buttonName={"등록"} onClick={addClickHandler} />
            <SubButton buttonName={"뒤로가기"} 
             onClick={() => {
              navigate("/group/" + url.groupId, {state:'/group'});
            }}/>
          </WriteBtn>
        </WriteBox>
      </div>
    );
  
};

const WriteBox = styled.div`
  display: flex;
  flex-direction: column;
  /* @media screen and (max-width: 900px) {
  article {
    padding: 1rem 3rem;
  }
}
background-color:blue; */
  width: 390px;
  height: 844px;
  margin: 0 auto;
`;
const AddPhoto = styled.div`
  width: 350px;
  height: 350px;
  /* background-color:pink; */
  border: 0.5px solid #eaeaea;
  background-color: #ffffff;
  margin: 0 auto;
`;
const InputTitle = styled.input`
  width: 334px;
  border-color: transparent transparent gray transparent;
  margin: 100px auto 0 auto;
`;
const IconBox = styled.div`
  /* position: center; */
  margin: 120px 160px 100px 120px;
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
`;
const PostBtn = styled.button`
  margin: 50px 0 50px 0;
  border-radius: 25px;
  width: 50px;
  height: 30px;
  border-color: transparent;
  background-color: #5e43ff;
  color: white;
  font-size: small;
`;

const CancelBtn = styled.button`
  margin: 50px 0 50px 0;
  border-radius: 25px;
  width: 50px;
  height: 30px;
  border-color: transparent;
  background-color: transparent;
  color: #5e43ff;
  font-size: small;
`;

export default Write;
