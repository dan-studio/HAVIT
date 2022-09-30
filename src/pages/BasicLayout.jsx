import React from "react";
import { Route, Routes, useLocation, useNavigate, useResolvedPath } from "react-router-dom";
import { useCustomRoute } from "@hooks/useRoute";
import styled from "styled-components";
import Header from "@components/layout/Header";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Loading from "./start/Loading";
import { me } from "../redux/auth";

const childRenderer = (page) => {
  const args = {
    path: page?.path,
  };
  if (page.screen) {
    const Elem = page.screen;
    args.element = < Elem />;
  }
  return <Route key={page.path} {...args} />;
};

const BasicLayout = ({ childrens, loading }) => {
  const { routes } = useCustomRoute();
  const naviate = useNavigate();
  const dispatch = useDispatch();
  const principal = useSelector((store)=>store.auth.principal);
  const location = useLocation();
  const layout = useSelector((state) => state.layout, shallowEqual);
  
  React.useEffect(()=>{
    if(location.pathname.substring(0,5)!=="/auth"){
      dispatch(me);
      // if(!principal)naviate("/auth");
    }
  },[location.pathname])
  return (
    <>
      {!!loading ? (
        <Cover>
          <Loading></Loading>
        </Cover>
      ) : (
        <>
          {!!layout.showHeader ? <Header></Header> : <></>}
          <Routes>{routes?.map((page) => childRenderer(page))}</Routes>
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
