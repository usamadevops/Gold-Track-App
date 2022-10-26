import axios from "axios";

const BASE_URL='https://www.goldapi.io/api';
const options = {
    url: BASE_URL,
    headers: {
      'x-access-token': 'goldapi-4xgaq1al6fdkzsd-io',
      'Content-Type': 'application/json'
    }
  };
  
  export const fetchFromAPI=async(url)=>{
    console.log('goldapi-4xgaq1al6fdkzsd-io')
   const {data}= await axios.get(`${BASE_URL}/${url}`,options);
   return data;
  }