import { useRef } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { AxiosApi } from "../lib/axiosInstance";

export default function Write(){
  const router = useRouter();
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  
  
 // 글자수 제한 넣기
  function onSubmit(event:any){
    const date = new Date()
    const str = textRef.current?.value.replace(/(\n|\r\n)/g,'<br/>')
    AxiosApi.post("/api/board",{content:str , date:date})
    .then((res)=>{
      router.push("/")
    })
    .catch((error)=>{
      throw error;
    })
    event.preventDefault();
  }
  return (
    <Container>
      <Content>
        <Option>
          <span style={{color:"#cccccc"}}>게시글은 익명으로 게시됩니다.</span>
          <form onSubmit={onSubmit}>
            <ImageInput id="upload-image" type="file" />
            <InputLabel htmlFor="upload-image" style={{backgroundColor:"white" , color:"#65c294"}} >사진 등록</InputLabel>
            <Button>게시글 작성</Button>
          </form>
        </Option>
        <Card>
          <TextArea ref={textRef} maxLength={200}/>
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
  background-color: #65c294;
  font-size: 0.8rem;
  font-weight: bold;
  color: white;
  margin-left: 1rem;
  cursor: pointer;
`;
const InputLabel = styled.label`
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
const ImageInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
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
  overflow: hidden;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 300;
  :focus{
    outline: none;
  }
`;
