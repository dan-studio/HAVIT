import jwt_decode from "jwt-decode"

const useDecodeToken = (token) => {
  if(token){
    const decode_token = jwt_decode(token)
    const memberId = decode_token.memberId;
    return memberId
  }else{
    return "member id"
  }
}

export default useDecodeToken;