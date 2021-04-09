import Head from 'next/head'
import Link from 'next/link'
import {useRouter} from 'next/router' 
import styles from '../../../styles/Home.module.css'

export default function SingleArticlePage({ article }) {

    const router=useRouter()
    const {id}=router.query
    return (
        <>
            <div className={styles.container}>
                <h1>{`This artcle has an id of ${id}`}</h1>
                <h3>{article.title}</h3>
                <p>{article.body}</p>

                <Link href="/">Go Back</Link>
            </div>
        </>
    )
}

export const getServerSideProps=async (context)=>{
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    const article=await res.json()

    return {
        props:{
            article
        }
    }
}