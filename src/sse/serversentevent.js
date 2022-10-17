import { userApis } from "../apis/auth";

export const ssehandler = () => {

const url = process.env.REACT_APP_API_HOST + "/api/auth/subscribe";

const token = localStorage.getItem(process.env.REACT_APP_TOKEN_SAVE_KEY);



const accessToken = JSON.parse(token).access_token;
// const sse = new EventSource(url, {
//   header: {
//     authorization: accessToken
//   },
//   withCredentials:true
// });

const sse = new EventSource(url, {
  header: {
    Authorization: accessToken
  },
  withCredentials: true
})
sse.addEventListener("message", (event)=>{
  const data = JSON.parse(event.data)
  console.log(event.data)
})
sse.addEventListener("open", (event)=>{
  const data = JSON.parse(event.data)
  console.log(data)
  console.log(event.data)
})
sse.addEventListener("error", (event)=>{
  const data = JSON.parse(event.data)
  console.log(data)
  console.log(event.data)
})

}