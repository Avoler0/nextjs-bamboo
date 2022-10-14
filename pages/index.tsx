import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { getBoard } from '../lib/dataHandler'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const router = useRouter();
  router.push("/board")
  return (
    <div>홈</div>
  )
}

export default Home
