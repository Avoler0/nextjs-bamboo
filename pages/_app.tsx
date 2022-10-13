import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../component/header'
import NavBar from '../component/navbar'
import styled from 'styled-components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header/>
      <NavBar />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  )
}
const Container = styled.div`
  width: 100%;
  padding: 3rem;
`;
export default MyApp
