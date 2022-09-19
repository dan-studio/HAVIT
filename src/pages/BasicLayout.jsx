import React from "react";
import { Spin } from "antd";
import { Route, Routes } from "react-router-dom";
import { useCustomRoute } from "../hooks/useRoute";
import styled from "styled-components";
const childRenderer = (page, parent) => {
    const args = {
        path: page.path,
    };
    if (page.screen) {
        const Elem = page.screen;
        args.element = <Elem />;
    }
    return <Route key={page.path} {...args} />;
};

const BasicLayout = ({ children, loading }) => {
    const { routes } = useCustomRoute();

    return (
        <>
            {/* 열심히 코딩하세영 ( 해당 텍스트는 @pages/BasicLayout.jsx에
            있습니다.) */}
            {!!loading ? (
                <Cover>
                    <Spin></Spin>
                </Cover>
            ) : (
                <Routes>
                    {routes?.map((page) => childRenderer(page, undefined))}
                </Routes>
            )}
        </>
    );
};

export default React.memo(BasicLayout);

const Cover = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
