import React, { useState } from "react";
import styled from "styled-components";
import { SearchOutlined, ToolOutlined } from "@ant-design/icons";
import Search from "@components/layout/Search";
import { useNavigate } from "react-router";
const Header = () => {
    const naviation = useNavigate();
    const [showSearchForm, setShowSearchForm] = useState(false);
    return (
        <>
            <Container id="header">
                <img alt="logo" src={require("@assets/havit.png")} />
                <Icons>
                    <SearchOutlined onClick={() => setShowSearchForm(true)} />
                    <ToolOutlined
                        onClick={() => {
                            naviation("mypage/edit");
                        }}
                    />
                </Icons>
            </Container>
            {!!showSearchForm ? <Search /> : <></>}
        </>
    );
};

const Container = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 128px;
    display: flex;
    align-items: center;
    padding: 20px;
    justify-content: space-between;
`;

const Icons = styled.div`
    & > * {
        margin: 0 0.25rem;
        &:hover {
            transform: scale(0.85);
        }
    }
`;

export default Header;
