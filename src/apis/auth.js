import axios from "axios"
import { authApi, restApi } from "./config"


export const userApis = {
  signup: async (data) => {
      const response = await restApi.post('/api/signup',data)
      return response.data
  },
  signin: async (email, password) => {
      const response = await authApi.post('/api/signin',{
          email, password
      })
      return response.data
  },
}