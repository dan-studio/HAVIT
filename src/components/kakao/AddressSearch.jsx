import { Button, Col, Form, Input, Row } from "antd";
import React, { useEffect } from "react";
import DaumPostcodeEmbed, { useDaumPostcodePopup } from "react-daum-postcode";
import { kakaoApi } from "../../apis/config";
const handleComplete = (data, setAddress) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    kakaoApi.get("https://dapi.kakao.com/v2/local/search/address.json?analyze_type=similar&page=1&size=10&query=" + encodeURIComponent(fullAddress))
    .then(res=>{
        if(res.status === 200){
            const temp = res.data.documents[0];
            setAddress((prev)=>({
                ...prev, 
                main:temp.address_name,
                lng:temp.x,
                lat:temp.y 
            }));
        }
    })
    .catch((err)=>{console.log(err)})
    return fullAddress;
};

export const AddressSerachPopup = React.memo((props)=>{
    const open = useDaumPostcodePopup();
    const [address, setAddress] = React.useState({
        main:"",
        detail:"",
        lng:0,
        lat:0
    });
    React.useEffect(()=>{
        if(props?.onChange){
            props.onChange(address);
        }
    },[address])
    const DefaultJSX = ()=>{
        return <>
            <Row justify="start" style={{width:"100%"}}>
                <Col>
                    <Input type={"text"} value={address.main} disabled onChange={()=>{
                        if(props?.onChange){
                            props.onChange(address);
                        }
                    }}></Input>
                </Col>
                <Col offset={1}>
                    <Button type={"default"} onClick={handleClick}>찾기</Button>
                </Col>
            </Row>
            {/* <Row justify="start" style={{width:"100%"}}>
                <Col span={19}>
                    <Input type="text" value={address.detail} onChange={detailChange}></Input>
                </Col>
                <Col offset={1} span={3}>
                    <Button type={"primary"}>검색</Button>
                </Col>
            </Row> */}
        </>;
    }
    const handleClick = () => {
        open({ onComplete: (e)=>{
            handleComplete(e,setAddress);
        } });
      };
    return (
        <>
            {props?.children ? (props.children) : (<DefaultJSX />)}
        </>
    );
});

const AddressSearch = (props)=>{

    return <><DaumPostcodeEmbed onComplete={handleComplete} {...props} />;</>
}

export default React.memo(AddressSearch);