import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CategoryList from '../components/home/categoryList'
export default function Home() {
    return (
      <div className={styles.container}>
        <h1 className="text-3xl font-bold ">
      <CategoryList/> 
        
      </h1>
      </div>
    )
  }