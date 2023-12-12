import Link from 'next/link'
import styles from "./styles/Items.module.css"


export default async function Home() {
  const getProducts = async () =>{
    const res = await fetch("https://fakestoreapi.com/products");
    const result = await res.json();
    return result;
  }

  const posts = await getProducts();
    return(
            <div className={styles.itemAll}>
                {posts.map(el =>(
                    <Link href={'/item/' + el.id} className={styles.links}>
                        <div id={el.id} className={styles.item}>
                            <img className={styles.imageCss} src={el.image} />
                            <div className={styles.blockInfo}>
                                <h2 className={styles.text} >{el.title}</h2>
                                <h3 className={styles.text}>Цена: {el.price}$<br/>Рейтинг: {el.rating.rate} ★<br/>Количество: {el.rating.count}<br/>Категория: {el.category}</h3>
                            </div>
                            
                            
                        
                        </div>
                    </Link>
                ))}
  
            </div>
        
    )
}
