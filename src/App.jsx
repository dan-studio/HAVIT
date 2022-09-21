import '@/App.less';
import store from '@redux/store';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import BasicLayout from '@pages/BasicLayout';

const theme = {
  color: {
    primary_color: '#5E43FF',
    black: '#252224',
    red: '#D65353',
    indigo: '#2D4362',
    sky: '#82C3DE',
    white: '#FFFFFF',
    yellow: '#F7C45F',
    lightgray: '#EAEAEA',
    neongreen: '#2CDF3D',
    gray: '#B0B0B0',
  },
};

const Container = React.memo(() => {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const loadData = async () => {
      // 이곳에 앱(사이트) 처음 실행시 해줄 dispatch를 넣어주세요~
    };

    loadData()
      .catch(console.warn)
      .then(() => setLoading(false));
  }, []);

  return <BasicLayout loading={loading} />;
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Container />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
