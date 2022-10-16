import { useState } from "react";
import styled from "styled-components"


export default function Admin(){
  const [account,setAccount] = useState({
    id:null,
    pw:null
  });
  
  function idOnChange(event:any){
    const id = event.target.value;
    setAccount({...account , id:id})
  }
  function pwOnChange(event:any){
    const pw = event.target.value;
    setAccount({...account , pw:pw})
  }
  return <Container>
    어드민 로그인
    <input type="text" onChange={idOnChange} />
    <input type="password" onChange={pwOnChange}/>
  </Container>
}

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
`;
const Content = styled.div`

`;