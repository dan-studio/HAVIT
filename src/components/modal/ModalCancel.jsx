import { Modal } from "antd"
import React from "react"

const ModalCancel = (reset)=>{
    Modal.confirm({
        title:"안내",
        content:<div><div>모든 내용이 지워집니다.</div><div>정말 취소하시겠습니까?</div></div>,
        okText:"확인",
        cancelText:"취소",
        onOk:()=>{
            reset();
        },
    })
}

export default ModalCancel;