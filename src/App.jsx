import "./App.less";
import React from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import BasicLayout from "@pages/BasicLayout";
import WideScreen from "./pages/WideScreen";
import { me } from "@redux/auth";
import { notification } from "@redux/notification";
import RouteChangeTracker from "./RouteChangeTracker";
import ServerOnMaintenance from "./pages/ServerOnMaintenance";
import { useMediaQuery } from 'react-responsive'
const theme = {
  color: {
    primary_color: "#5E43FF",
    black: "#252224",
    red: "#D65353",
    indigo: "#2D4362",
    sky: "#82C3DE",
    white: "#FFFFFF",
    yellow: "#F7C45F",
    lightgray: "#EAEAEA",
    neongreen: "#2CDF3D",
    gray: "#B0B0B0",
  },
};

const Container = React.memo(() => {
  const [loading, setLoading] = React.useState(true);
  const dispatch = useDispatch();
  React.useEffect(() => {
    const loadData = async () => {
      await dispatch(me());
      await dispatch(notification());
    };
    loadData()
      .catch(console.warn)
      .then(() => setLoading(false));
  }, [dispatch]);
  RouteChangeTracker();
  return <BasicLayout loading={loading} />;
});

function App() {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 768 })
    return isDesktop ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
  return (<>
    <Desktop><WideScreen/></Desktop>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Mobile>
        <Container />
        </Mobile>
        {/* 서버 점검중일시 */}
        {/* <ServerOnMaintenance/> */}
      </BrowserRouter>
    </ThemeProvider>
    </>
  );
}

export default App;
