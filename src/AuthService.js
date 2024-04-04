
import axiosconfig from "./config/axios"; 


axiosconfig.defaults.withCredentials = true;

const USER_BASE_REST_API_URL = 'http://localhost:8080';

export const loginUser = (input) => {
     const response = axiosconfig.post(USER_BASE_REST_API_URL+'/auth/token'  ,input).catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          return error.response;
        }  });

      return response;
}

export const addNewUser = (input) => {
    return axiosconfig.post(USER_BASE_REST_API_URL+'/auth/register'  ,input);
}

export const validateToken = () => {
    return axiosconfig.get(USER_BASE_REST_API_URL+'/auth/validate');
}

export const getAllUsers = () => {
    return axiosconfig.get(USER_BASE_REST_API_URL+'/auth/all-users');
}

export const editUser = (input,Id) =>{

    const param ={
        id:Id
   }

    return axiosconfig.post(USER_BASE_REST_API_URL+'/auth/editUser',input,{params:param})
}


export const passwordReset = (input)=>{


    return axiosconfig.post(USER_BASE_REST_API_URL+'/auth/reset-password',input)
}



