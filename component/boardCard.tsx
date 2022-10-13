import styled from "styled-components"
import Image from 'next/image'
import People from "../image/icons/people.png"
export default function BoardCard(){
  return (
    <Card>
      <Info>
        <Profile>
          <ImageDiv>
            <Image src={People}/>
          </ImageDiv>
          <span>익명</span>
        </Profile>
      </Info>
      <Content>
        <Text>안녕하세요</Text>
      </Content>
    </Card>
  )
}

const Card = styled.article`
  width: 80%;
  margin: 0 auto;
  height: 180px;
  border: 0.15rem solid #cccccc;
  border-radius: 10px;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30%;
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
const Content = styled.div`
  padding: 1rem;
`;
const Text = styled.div`

`;