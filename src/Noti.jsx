import React, { useEffect, useState } from 'react';
import { userApis } from './apis/auth';

const Noti = () => {
  const [listening, setListening] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState(null);
  const [profile, setProfile] = useState('');

  const [alertSource, setAlertSource] = useState(undefined);

  useEffect(() => {
    let source = undefined;
    userApis.myProfile().then(res => {
      setProfile(res.memberId);
      console.log('🚀 ⁝ userApis.myProfile ⁝ setProfile', setProfile)
    });

    userApis.connectSSE().then(res => {
      console.log('알람좀;ㅋ');
      if (res.status === 200) {
        const token = { access_token: res.headers.authorization };
        const eventSource = new EventSource('https://namuneo.shop/api/auth/subscribe' + '?token=' + token, { withCredentials: true });
      }
    });

    source.onmessage = e => {
      setData(JSON.parse(e.data));
    };
    // }
  }, []);
  
  return (
    <>
      <h1>하이</h1>
    </>
  );
};

export default Noti;
