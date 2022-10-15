import styled from "styled-components"
import Image from 'next/image'
import People from "../image/icons/people.png"
import {daysCreateArray} from "../lib/daysHandler"

interface board {
  id:number,
  content:string
  date:any
}
interface props {
  board:board
}

export default function BoardCard({board}:props){
  console.log("카드 게시글",board);
  const newDate = daysCreateArray(new Date(board.date));
  console.log(newDate);
  
  return (
    <Card>
      <Content>
        <Info>
          <Profile>
            <ImageDiv>
              <Image src={People}/>
            </ImageDiv>
            <span>익명</span>
          </Profile>
          <div>
            시간
          </div>
        </Info>
        <WriteArea>
          <Text dangerouslySetInnerHTML={{__html:board.content}} />
        </WriteArea>
      </Content>
    </Card>
  )
}

const Card = styled.article`
  width: 80%;
  margin: 0 auto 3rem auto;
  height: 220px;
  border: 0.15rem solid #cccccc;
  border-radius: 10px;
  overflow: hidden;
`;
const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.9rem;
  border-bottom: 1px solid #cccccc;
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  span{
    margin-left: 10px;
    font-size: 1rem;
    font-weight: 300;
  }
`;
const ImageDiv = styled.div`
  width: 2rem;
  height: 2rem;
  border: 1px solid #cccccc;
  border-radius: 1.5rem;
  background-color: #cccccc;
`;
const WriteArea = styled.div`
  height: 100%;
  margin: 1rem;
  overflow: hidden;
`;
const Text = styled.div`
  height: 90%;
  overflow: hidden;
`;
