import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useCustomRoute } from "@hooks/useRoute";
import styled from "styled-components";
import Header from "@components/layout/Header";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Loading from "./start/Loading";
import { me } from "../redux/auth";
import { AnimatePresence, motion } from "framer-motion";

const childRenderer = (page) => {
  const args = {
    path: page?.path,
  };
  if (page.screen) {
    const Elem = page.screen;
    args.element = <RootDiv key={page.path}>< Elem /></RootDiv>;
  }
  return <Route key={page.path} {...args} />;
};

const BasicLayout = ({ childrens, loading }) => {
  const { routes } = useCustomRoute();
  const naviate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const layout = useSelector((state) => state.layout, shallowEqual);
  console.log(layout);
  React.useEffect(()=>{
    dispatch(me()).then((result)=>{
      const principal = result.payload?.principal;
      if(!principal){
        if(location.pathname.substring(0,5)!=="/auth"){
          naviate("/auth");
        } 
      }
    })
  },[location.pathname, dispatch, naviate])

  return (
    <>
      {!!loading ? (
        <Cover>
          <Loading></Loading>
        </Cover>
      ) : (
        <>
          {!!layout.showHeader ? <Header></Header> : <></>}
          <AnimatePresence mode="wait">
            <Routes key={location.pathname} location={location}>{routes?.map((page) => childRenderer(page))}</Routes>
          </AnimatePresence>
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
export const RootDiv =({key,children})=>{
  return (
    <motion.div
        key={key}
        initial={{x:-100, opacity:0}}
        animate={{x:0,opacity:1}}
        exit={{x:100,opacity:0}}
        transition={{ duration: 0.5 }}
    >
        {children}
    </motion.div>
);}