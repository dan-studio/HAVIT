import styled from "styled-components";
import React, { useEffect, useState, useRef } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import PrimaryButton from "../components/PrimaryButton";
import SubButton from "../components/SubButton";
import Location from "../components/layout/Location";
import axios from "axios";
import Uploader from "../components/input/Uploader";
import { Upload } from "antd";


import { IoLocationOutline } from 'react-icons/io5';

const Write = () => {
  // const register = console.log("등록완료");
  const [challengeTitle, setChallengeTitle]= useState("");

  const onChangeTitle = (e) => {
      setChallengeTitle(e.target.value);
    };

    // const register = axios.post("http://localhost:3000/api/auth/certify",
    // const register = ()=> {axios.post("http://localhost:3001/certify",
    // {
    //     imgUrl: "",
    //     challengeTitle: challengeTitle,
    //     challengeLocation: "",
    //     crewName: "",
    //     startDate: "",
    //     leaderName: "",
    // },
    // )};

    const [image, setImage] = useState({
      image_file: "",
      preview_URL: "",
    });
    let inputRef

    // const saveImage = (e) => {
    //   e.preventDefault();
    //   const fileReader = new FileReader();
      
    //   if(e.target.files[0]){

    //     fileReader.readAsDataURL(e.target.files[0])
    //   }
    //   fileReader.onload = () => {
    //     setImage(
    //       {
    //         image_file: e.target.files[0],
    //         preview_URL: fileReader.result,
    //         challengeTitle:challengeTitle
    //       }
    //     )
    //   }      
    // }
    const saveImage = (e) => {
      e.preventDefault();
      if(e.target.files[0]){
        // 새로운 이미지를 올리면 createObjectURL()을 통해 생성한 기존 URL을 폐기
        URL.revokeObjectURL(image.preview_URL);
        const preview_URL = URL.createObjectURL(e.target.files[0]);
        console.log("previewurl 조회",preview_URL)
        setImage(() => (
          {
            image_file: e.target.files[0],
            preview_URL: preview_URL,
            challengeTitle:challengeTitle
          }
        ))
      }
    }
    useEffect(()=> {
      // 컴포넌트가 언마운트되면 createObjectURL()을 통해 생성한 기존 URL을 폐기
      return () => {
        URL.revokeObjectURL(image.preview_URL)
      }
    }, [])
  
    const sendImageToServer = async () => {
      if(image.image_file){
        const formData = new FormData()
        formData.append('file', image.image_file);
        await axios.post("http://localhost:3001/certify", formData);
        alert("서버에 등록이 완료되었습니다!");
        console.log("image.image_file조회",image.image_file)
        console.log("formData조회",formData)
        console.log("image 조회",image)

        setImage({
          image_file: "",
          preview_URL: image.preview_URL,
          challengeTitle:challengeTitle
        });
        console.log("image 조회",image)

      }
      
      else{
        alert("사진을 등록하세요!")
      }
    }
    
  




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

  return (
    <div>
      <WriteBox>
        <AddPhoto>
          <IconBox>
            <AiOutlinePlusCircle size="60" color="lightgray" onClick={onCickImageUpload}/>
            <input type="file" style={{ display: "none" }} 
            ref={imageInput} 
            onChange={saveImage}
            onClick={(e)=>e.target.value = null}
            // ref={refParam => inputRef = refParam}
            />
              <div className="img-wrapper">
        <img src={image.preview_URL} style={{height:"160px"}} />
      </div>
          </IconBox>
        </AddPhoto>
        <div style={{display:'flex', flexDirection:'column', justifyContent:"space-between", alignItems:'center'}}>
          <InputTitle placeholder="제목입력" onChange={onChangeTitle} />  
          <AddLocation style={{marginTop:'10px', display:'flex', alignItems:'center',}} onClick={() => setShowLocationForm(true)}>
            {/* <LibraryAddIcon /> */}
            <IoLocationOutline style={{fontSize:'18px', color:'#DE4242', marginRight:'5px'}}/>
            위치추가
          </AddLocation>
        </div>
        {!!showLocationForm ? <Location /> : <> </>}
        <WriteBtn style={{marginTop:'5.625rem'}}>
          <PrimaryButton buttonName={"등록"} onClick={sendImageToServer} />
          <SubButton buttonName={"취소"} />
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
