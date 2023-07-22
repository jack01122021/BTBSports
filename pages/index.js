import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CategoryList from '../components/home/CategoryList'
import PhotoSlide from '../components/home/PhotoSlide'


export default function Home() {


    return (
      <div className={styles.container} >
        <h1 className="text-3xl font-bold ">
          <CategoryList/>       
           <PhotoSlide/>
   
 
        
      </h1>
      </div>
    )
  }