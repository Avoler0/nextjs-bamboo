import Link from "next/link"
import styled from "styled-components"

export default function NavBar(){
  const navItems = ["게시글","작성하기","어드민"]
  const navLink:any = {
    게시글: "board",
    작성하기: "write",
    어드민: "admin"
  }
  return(
    <Nav>
      <Content>
        <NavItems>
          {navItems.map((item:string)=> {
            return (
              <Item key={item}>
                <Link href={`/${navLink[item]}`}>{item}</Link>
              </Item>
            )
          })}
        </NavItems>
      </Content>
    </Nav>
  )
}

const Nav = styled.nav`
  width: 100%;
  border-bottom: 1px solid #65c294;
`;
const Content = styled.div`
  width: 60%;
  margin: 1rem auto;
`;
const NavItems = styled.ul`
  list-style: none;
  padding: 0;
`;
const Item = styled.li`
  display: inline-block;
  margin-right: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: #a8a7a7;
  cursor: pointer;
`;