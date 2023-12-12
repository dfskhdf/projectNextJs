"use client"
import styles from '../../../styles/Item.module.css'
import Link from 'next/link'
import { Redirect } from '../../../components/redirect'
import { useState } from 'react'
 


const ActionItem = ({params: {id}}) =>{
    
    const datas = {
        "title": "",
        "price": 0.0,
        "description": "",
        "image": "",
        "category": ""
    };  

    const getItem = async () =>{
        const res = await fetch("https://fakestoreapi.com/products/" + id);
        const result = await res.json();
        setItem(result);
    }

    const deletItem = async () =>{
        const res = await fetch('https://fakestoreapi.com/products/' + id,{
            method:"DELETE"
        })
        const result = await res.json();
        console.log("Товар удалён!");
        console.log(result);
        
    }

    const editItem =  async () =>{
        if(datas.title != "" && datas.price != "" && datas.description != "" && datas.image != "" && datas.category != ""){
        const res = await fetch('https://fakestoreapi.com/products/' + id,{
            method:"PUT",
            body:JSON.stringify(
                datas
            ),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const result = await res.json();
        console.log("Товар обновлён!");
        console.log(result);
        
        }
        else{
            console.log("Ошибка: поля не могут быть пустыми")
        }
    }

    const handleReq = (e) =>{
        switch(e.target.name){
            case "title":
                datas.title = e.target.value;
            break;
            case "price":
                datas.price = e.target.value;
            break;
            case "description":
                datas.description = e.target.value;
            break;
            case "image":
                datas.image = e.target.value;
                const imageEl = document.getElementById("imgElemetId");
                imageEl.src = datas.image;
            break;
            case "category":
                datas.category = e.target.value;
            break;
        }
    }
    const[item, setItem] = useState(getItem);
    datas.title = item.title;
    datas.price = item.price;
    datas.description = item.description;
    datas.image = item.image;
    datas.category = item.category



    return(
        <div className={styles.body}>
            <Redirect/>
            <div key={item.id} id={item.id} className={styles.item}>
                <img id="imgElemetId" className={styles.imageCss} src={item.image}/>
                <div className={styles.info}>
                    <h3>Имя товара: <input className={styles.input} type="text" name="title" onBlur={handleReq} defaultValue={item.title}/><br/>
                    Цена: <input className={styles.input} type="number" name="price" onBlur={handleReq}  defaultValue={item.price}/><br/>
                    Категория: <input className={styles.input}  type="text" name="category" onBlur={(handleReq)} defaultValue={item.category}/><br/>
                    Ссылка на фото товара:  <input  className={styles.input} type="url" name="image" onBlur={handleReq}  defaultValue={item.image}/><br/></h3>
                </div>
                
                
            </div>
            <div className={styles.descriptionItem}>
            <div>
                <h2>Описание:</h2>
                <p><textarea className={styles.textArea}  type="text" name="description" onBlur={handleReq} defaultValue={item.description}/></p>
            </div>

            <div >
                <button className={styles.butt} onClick={editItem}>Обновить данные о товаре</button>
                <Link href={"/admin/ActionItem"}>
                    <button className={styles.butt} onClick={deletItem}>Удалить товар</button>
                </Link>
                
            </div>
            </div>
           
      
        </div>
    )
}

export default ActionItem;