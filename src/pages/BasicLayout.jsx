import React, { useEffect } from "react";
import { Spin } from "antd";
import { Route, Routes } from "react-router-dom";
import { useCustomRoute } from "../hooks/useRoute";
import styled from "styled-components";
import Header from "@components/layout/Header";
import { shallowEqual, useSelector } from "react-redux";
const childRenderer = (page) => {
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
    const layout = useSelector((state) => state.layout, shallowEqual);

    return (
        <>
            {!!loading ? (
                <Cover>
                    <Spin></Spin>
                </Cover>
            ) : (
                <>
                    {!!layout.showHeader ? <Header></Header> : <></>}
                    <Routes>
                        {routes?.map((page) => childRenderer(page))}
                    </Routes>
                </>
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
