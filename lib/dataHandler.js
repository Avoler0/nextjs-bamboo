import {AxiosServer} from "./axiosInstance"

export function getBoard(){
  try{
    return AxiosServer.get('/board').then((res)=>{
      return res.data;
    })
  } catch(e){
    console.error(e);
  }
}

export function createBoard(query){
  try{
    return AxiosServer.post('/board',query)
    .then((res)=>{
      return res.data;
    })
  } catch(e){
    console.error(e);
  }
}