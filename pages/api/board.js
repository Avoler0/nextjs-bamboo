import {createBoard, getBoard} from "../../lib/dataHandler"


const board = {
  get:async function(){
    try{
      return await getBoard();
    }
    catch(error){
      return error
    }
  },
  post:async function(query){
    try{
      return await createBoard(query)
    }
    catch(error){
      return error 
    }
  }
}

export default function getBoardHandler(req,res){
  if(req.method === "GET") {
    board.get()
    .then((_res)=>{
      res.status(200).json(_res) })
    .catch((_error)=>{
      res.status(500).json({status:"500",error:error}) })
  }else if(req.method === "POST") {
    board.post(req.body)
    .then((_res)=>{
      res.status(200).json(_res) })
    .catch((_error)=>{
      res.status(500).json({status:"500",error:_error}) })
  }
}

