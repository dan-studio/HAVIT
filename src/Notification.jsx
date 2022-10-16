import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getToken } from './apis/config';

const Notification = () => {
  const [notification, setNotification] = useState([])
  const token = getToken()
// useEffect(()=>{
//   const source = new EventSource(process.env.REACT_APP_API_HOST+"/api/auth/subscribe", 
//   {
//     headers: {
//       // Authorization: token
//       Authorization: token.access_token
//     }
//   })
//   console.log(source)
//   source.onmessage = (e) => {
//     setNotification((prev)=>[JSON.parse(e.data)])
//   }
//   console.log(notification)
// },[])

  return (
    <div>
      
    </div>
  );
};

export default Notification;