import { getCollection } from 'astro:content';
import styles from '../styles/ArticleHome.module.css'
import { useEffect, useState } from "react";

export default function Article({ allArticles }) {
    const [articles, setArticles] = useState(allArticles)
    const [authors, setAuthors] = useState([])
    

    const getArticles = async () => {

        const currAuthors = []
        for (let i = 0; i < articles.length; i++) {
            for (let j = 0; j < articles[i].data.authors.length; j++) {
                if (!currAuthors.includes(articles[i].data.authors[j])) {
                    console.log(articles[i].data.authors[j])
                    currAuthors.push(articles[i].data.authors[j])
                }
            }
        }
        currAuthors.sort()
        currAuthors.unshift("All")
        setAuthors(currAuthors)
    }

    useEffect(() => {
        getArticles()
        
    }, [])


    const modifyContent = (e) => {
        // get the id of the selector button and then use that to then change the data
        

        if (e.target.id == "sortingselect") {
            console.log(e.target.value)
            if (e.target.value == "first") {
                const sorted = articles.sort((b,a) => new Date(a.data.date) - new Date(b.data.date));
                setArticles(articles.sort((a,b) => new Date(a.data.date) - new Date(b.data.date)))
            }
            if (e.target.value == "last") {
                console.log(articles.sort((b,a) => new Date(a.data.date) - new Date(b.data.date)))
                setArticles(articles.sort((b,a) => new Date(a.data.date) - new Date(b.data.date)))
            }
        }

        if (e.target.id == "authorsselect") {
            e.target.value != "All" ? setArticles(allArticles.filter(x => x.data.authors.includes(e.target.value))) : setArticles(allArticles);
        }
    }

    
    // Code to Add to the sorting menu:

    /*

                    <div className={styles.sortingdatectnr}>
                        <select id="sortingselect" className={styles.sortingbutton}>
                            <option value="last">latest articles</option>
                            <option value="first">earliest articles</option>
                        </select>
                    </div>



    */
   

    
    if (articles == null) return <p>loading</p>
    return (
        <div>
        <div className={styles.articlescontainer}>
            <div>
                <h2 className={styles.sidetextheader}>Latest articles</h2>
                <form onChange={modifyContent}>
                    <div>
                        <h3>Articles by Author</h3>
                        <select id="authorsselect" className={styles.sortingbutton}>
                            {authors.map(x =>
                                <option key={x} value={x}>
                                    {x}
                                </option>
                            )}
                        </select>
                    </div>
                </form>
            </div>
            <div>
                {articles.map(x =>
                    <div key={x.slug} className={styles.indivarticle}>
                        <img className={styles.articleimg} src={x.data.coverimg} alt="article image cover"/>
                        <a className="nolink" href={`/articles/${x.slug}`}>
                        <div className={styles.text}>
                            <p>{x.data.date}</p>
                            <h1>{x.data.title}</h1>
                            <p>{x.data.authors.map( y => y )}</p>
                        </div>
                        </a>
                    </div>
                )}
            </div>
        </div>
    </div> 
    )
}