import { EventSourcePolyfill, NativeEventSource } from "event-source-polyfill";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getToken } from "../apis/config";
const useSse = () => {
  const dispatch = useDispatch();
  const [popUpData, setPopUpData] = useState("");
  const [popUp, setPopUp] = useState(false)
  const myInfo = useSelector((state) => state.auth.principal, shallowEqual);
  // const noti = useSelector((state) => state.notification.notification);
  const authId = myInfo?.memberId;
  const token = getToken().access_token;
  const url = process.env.REACT_APP_API_HOST + "/subscribe/" + authId; //authId=로그인한 사용자 ID

  const EventSource = EventSourcePolyfill || NativeEventSource;

  useEffect(() => {
    if (token) {
      const sse = new EventSource(url);
      sse.onmessage = (e) => {
        if (e.type === "message" && e.data.startsWith("{")) {
          setPopUpData((prev) => e.data);
          setPopUp(true)
        }
      };
      sse.onerror = (e) => {
        sse.close()
      }
      return () => {
        sse.close();
      };
    }
  }, []);

  return [popUpData, popUp]
};
export default useSse;
