import styled from "styled-components"
import BoardCard from "../component/boardCard";

export default function Board(){
  return (
      <Content>
        <BoardCard />
      </Content>
  )
}

const Container = styled.div`
  
`;
const Content = styled.div`
  width: 50%;
  margin: 0 auto;
`;