import * as axios from "axios";

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      "API-KEY": "a353ec73-2e93-4f69-b2bd-8f5fca1a5df8"
   }
})

export const usersAPI = {
   getUsers(currentPage = 1, pageSize = 10 ){
      return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response =>{
         return response.data;
      })
   },
   getUserProfile(usersId) {
      return instance.get(`profile/${usersId}`).then(response =>{
         return response.data;
      })
   },
   deleteFollowUser(id){
      return instance.delete(`follow/${id}`).then(response => {
         return response.data;
      })
   },
   postFollowUser(id){
      return instance.post(`follow/${id}`).then(response => {
         return response.data;
      })
   }
}