import styled from "styled-components";

export default function Write(){
  return (
    <Container>
      <Content>
        <Option>
          <span style={{color:"#cccccc"}}>게시글은 익명으로 게시됩니다.</span>
          <div>
            <Button style={{backgroundColor:"white" , color:"#65c294"}}>사진 등록</Button>
            <Button>게시글 작성</Button>
          </div>
        </Option>
        <Card>
          <TextArea />
        </Card>
      </Content>
    </Container>
  )
}
const Container = styled.div`
  width: 50%;
  margin: 0 auto;
`;
const Content = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const Option = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;
const Button = styled.button`
  padding: 0.6rem 1.2rem;
  border: 1px solid #65c294;
  border-radius: 0.2rem;
  background-color: #72e4ab;
  font-size: 0.8rem;
  font-weight: bold;
  color: white;
  margin-left: 1rem;
  cursor: pointer;
`;
const Card = styled.article`
  
  height: 180px;
  border: 0.15rem solid #cccccc;
  border-radius: 10px;
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 10px;
  resize: none;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 300;
  :focus{
    outline: none;
  }
`;