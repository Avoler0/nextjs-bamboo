import React, { useEffect } from "react";
import styled from "styled-components"
import BoardCard from "../component/boardCard";
import { AxiosApi } from "../lib/axiosInstance";

interface board {
  id:number,
  content:string
  date:Date
}

export default function Board(){
  const [boardArr,setBoardArr] = React.useState<board[] | null>(null);

  useEffect(()=>{
    AxiosApi.get('api/board')
    .then((res)=>{
      setBoardArr(res.data);
    })
    .catch((error)=>{
      console.error(error);
    })
  },[])
  
  console.log("게시글",boardArr);
  
  return (
      <Content>
        {boardArr?.map((board)=>{
          return <BoardCard key={board.id} board={board} />
        })}
      </Content>
  )
}

const Container = styled.div`
  
`;
const Content = styled.div`
  width: 50%;
  margin: 0 auto;
`;