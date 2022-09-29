import { PlusCircleFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { userApis } from "../../apis/auth";
import React, { useEffect } from "react";
import { useState } from "react";

const PhotoList = ({groupId}) => {
    const navigate = useNavigate()
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
    }
    & > div:first-of-type {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
    }
`;
const CertifyImg = styled.img`
        width: 113px;
        height: 113px;
        border: 0.5px solid #eeeeee;
`

