import styles from '../../styles/Item.module.css'


const Item = async ({params: {id}}) =>{
  const getItem = async(idItem) =>{
    const res = await fetch('https://fakestoreapi.com/products/' + idItem);
    const result = await res.json();
    return result;
  }
  const Posts = await getItem(id);
  return(
    <div className={styles.body}>

      <div key={Posts.id} id={Posts.id} className={styles.item}>
        <img className={styles.imageCss} src={Posts.image}/>

        <div className={styles.info}>
          <h2>{Posts.title}</h2>
          <h3>Цена: {Posts.price}$<br/>Рейтинг: {Posts.rating.rate}★<br/>Количество: {Posts.rating.count}<br/>Категория: {Posts.category}</h3>
        </div> 

      </div>

      <div className={styles.descriptionItem}>
        <h2>Описание:</h2>
        <p><textarea className={styles.textArea} disabled readOnly type="text" name="description" defaultValue={Posts.description}/></p>
      </div>

    </div>
    
  )
}

export default Item;