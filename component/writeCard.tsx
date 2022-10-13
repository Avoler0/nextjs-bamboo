import styled from "styled-components";

export default function WriteCard(){
  return (
    <Card>
     카드
    </Card>
  )
}

const Card = styled.article`
  width: 80%;
  height: 180px;
  border: 0.15rem solid #cccccc;
  border-radius: 10px;
`;