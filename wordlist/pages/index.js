import Head from 'next/head'
import Article from '../components/Article'

import styles from '../styles/Home.module.css'

export default function Home({ articles }) {
  console.log(articles)

  return (
    <div className={styles.container}>
        <h1>WordList Application</h1>

        {
          articles.map(article=>{
            return <Article article={article}/>
          })
        }
    </div>
  )
}

export const getStaticProps=async ()=>{
  const res=await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)

  const articles=await res.json()

  return{
    props:{
      articles
    }
  }
}
