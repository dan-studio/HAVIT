import { PlusCircleFilled } from "@ant-design/icons";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { fileUrlHost } from "../../apis/config";

const MAX_PREVIEW = 5;

const PhotoList = ({groupId, list, isMember}) => {
    const navigate = useNavigate()
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
        <StyledContainer>
            {isMember?
            <div className="adder" onClick={()=>{navigate(`/group/${groupId}/write`)}}>
                <PlusCircleFilled/>
            </div>:
            <div className="adder">
                <PlusCircleFilled/>
            </div>
            }
            {
                previewList?.map((el)=>(<div key={el?.certifyId} onClick={()=>{
                    navigate(`/group/${groupId}/detail/${el?.certifyId}`);
                }}><CertifyImg alt="" src={fileUrlHost(el?.imageId)}></CertifyImg></div>))
            }
        </StyledContainer>
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
    }
`;
const CertifyImg = styled.img`
        width: 113px;
        height: 113px;
        border: 0.5px solid #eeeeee;
        object-fit: cover;
`

