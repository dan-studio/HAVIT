import { PlusCircleFilled } from "@ant-design/icons";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
<<<<<<< HEAD
import { fileUrlHost } from "../../apis/config";
=======
import { userApis } from "../../apis/auth";
import React, { useEffect } from "react";
import { useState } from "react";
>>>>>>> 3edcd34915b49fb3abca49f104132efd548373f6

const MAX_PREVIEW = 5;

const PhotoList = ({groupId, list}) => {
    const navigate = useNavigate()
<<<<<<< HEAD
    const [previewList, setPreviewList] = React.useState();
    useEffect(()=>{
        setPreview();
    },[list])
    const setPreview = ()=>{
        const length = list?.length < MAX_PREVIEW ? list?.length : MAX_PREVIEW;
        if(!list?.length) return;
        const previewTemp = [];
        for(let i=0; i < length; i++){
            previewTemp.push(list[i]);
        }
        setPreviewList(previewTemp)
    }
    return (
        <Container>
            <div className="adder" onClick={()=>{navigate(`/group/${groupId}/write`)}}>
                <PlusCircleFilled/>
            </div>
            {
                previewList?.map((el)=>(<div key={el?.certifyId} onClick={()=>{
                    navigate(`/group/${groupId}/detail/${el?.certifyId}`);
                }}><img alt="" src={fileUrlHost(el?.imageId)}></img></div>))
            }
        </Container>
=======
    const [certifyImg, setCertifyImg] = useState();

    useEffect(() => {
        userApis
          .getCertify(groupId)
          .then((res) => {
            console.log(res)
            setCertifyImg(res.data.data.certifyImgUrlList);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
    console.log("certifyImg",certifyImg)
    const imgMap = certifyImg?.map((el) => el)
    // const imgMap = certifyImg?.map((item, idx) => <CertifyImg {...item} key={idx} />)
    // {group?.map((item, idx) => ( <CrewInfo {...item} key={idx} /> ))}
      console.log(imgMap)
    return (
        <div>
        <StyledContainer>
            <div>
                <PlusCircleFilled style={{ color: "#eeeeee" }} onClick={()=>{navigate(`/group/${groupId}/write`)}}/>
            </div>
            {certifyImg?.map((item, idx) => <CertifyImg src= {item} key={idx} />)}
            {/* <CertifyImg src={imgMap}></CertifyImg> */}
            {/* // src= ["sdfasfsdf"] */}
            {/* <CertifyImg src={certifyImg?.[1]}></CertifyImg>
            <CertifyImg src={certifyImg?.[3]}></CertifyImg> */}

            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </StyledContainer>
        </div>
>>>>>>> 3edcd34915b49fb3abca49f104132efd548373f6
    );
};
export default PhotoList;

const StyledContainer = styled.div`
    width: 100%;
    gap: 5px;
    display: flex;
    flex-wrap: wrap;
    & > div {
        width: 113px;
        height: 113px;
        border: 0.5px solid #eeeeee;
        overflow:hidden;
        &>img{
            width:100%;
            height:100%;
            object-fit:cover;
        }
    }
    & > .adder {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        color: #eeeeee;
        &:hover{
            border:1px solid black;
            color:black;
        }
    }
`;
const CertifyImg = styled.img`
        width: 113px;
        height: 113px;
        border: 0.5px solid #eeeeee;
`

