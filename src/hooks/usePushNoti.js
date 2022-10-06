import { notification } from 'antd';
import { useRef } from 'react';

const usePushNoti = () => {
  const notiRef = useRef(null);

  // 'Notification'이 적용 안되는 브라우저를 위한 얼리 리턴
  if (!Notification) {
    return;
  }

  if (Notification.permission !== 'granted') {
    try {
      Notification.requestPermission().then(permission => {
        if (permission !== 'granted') return;
      });
    } catch (error) {
      if (error instanceof TypeError) {
        Notification.requestPermission().then(permission => {
          if (permission !== 'granted') return;
        });
      } else {
        console.log(error);
      }
    }
  }

  // 유저가 푸쉬알림 클릭시, 푸쉬이벤트 화면으로 이동
  const setNotificationClickEvent = () => {
    notiRef.current.onclick = e => {
      e.preventDefault();
      window.focus();
      notiRef.current.close();
    };
  };

  const fireNotification = (title, timeout, options = {}) => {
    if (Notification.permission !== 'granted') return;

    const newOption = {
      badge: 'https://www.dlf.pt/dfpng/middlepng/594-5944278_instagram-verified-badge-png-file-blue-tick-in.png',
      icon: 'https://www.dlf.pt/dfpng/middlepng/594-5944278_instagram-verified-badge-png-file-blue-tick-in.png',
      ...options,
    };

    notiRef.current = new Notification(title, newOption);

    setNotificationClickEvent();
  };
  return { fireNotification };
};

export default usePushNoti;
