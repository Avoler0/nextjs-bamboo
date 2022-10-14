import Link from 'next/link';
import styled from 'styled-components'

export default function Header(){
  return (
    <HeaderJSX>
      <Content>
        <Logo>
          <span>
            <Link href="/">
              대나무숲
            </Link>
          </span>
        </Logo>
        {/* <Account>
          <span>
            볼러<span style={{color:"black"}}>님</span>
          </span>
        </Account> */}
      </Content>
    </HeaderJSX>
  )
}

const HeaderJSX = styled.header`
  width: 100%;
  border: 1px solid #65c294;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: 0 auto;
  padding: 1.5rem 0;
`;
const Logo = styled.div`
  span{
    font-size: 1.2rem;
    font-weight: bold;
    color: #65c294;
  }
`;
const Account = styled.div`
  span{
    font-size: 1rem;
    font-weight: 600;
    color: #65c294;
  }
`;