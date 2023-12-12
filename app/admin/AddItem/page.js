"use client"
import styles from '../../styles/Item.module.css'
import { Redirect } from '../../components/redirect'

const AddItem = () =>{
    const datas = {
        "title": "",
        "price": "0.0",
        "description": "",
        "image": "",
        "category": ""
    };

    const addProduct = async () =>{
        if(datas.title != "" && datas.price != "" && datas.description != "" && datas.image != "" && datas.category != ""){
        const res = await fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                datas     
            ),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const result = await res.json();
        console.log("Товар добавлен!");
        console.log(result);
        document.getElementById('titleId').value = '';
        document.getElementById('priceId').value = '';
        document.getElementById('descriptionId').value = '';
        document.getElementById('imageId').value = '';
        document.getElementById('categoryId').value = '';
        document.getElementById("imgElemetId").src = "";
        datas.title = "";
        datas.price = "";
        datas.description = "";
        datas.image = "";
        datas.category = "";

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
    


    return(
        <div className={styles.body}>
            <Redirect/>
            <div className={styles.item}>
            <img id="imgElemetId" className={styles.imageCss} src={datas.image}/>
                <h3 className={styles.info}>Имя товара: <input type="text" id='titleId' name="title" onBlur={handleReq}/> <br/>
                Цена: <input type="number" step="0.1" id="priceId" name="price" onBlur={handleReq}/><br/>
                Категория: <input type="text" id="categoryId" name="category" onBlur={(handleReq)}/><br/>
                Ссылка на фото товара:  <input type="url" id='imageId'  name="image" onBlur={handleReq}/><br/></h3>
    
            </div>
            <div className={styles.descriptionItem}>
            <div>
                <h2>Описание:</h2>
                <p><textarea className={styles.textArea} type="text" id='descriptionId' name="description" onBlur={handleReq}/></p>
            </div>
            <div>
                <button className={styles.butt} onClick={addProduct}>Добавить товар</button>
            </div>
            </div>
            
      
        </div>
    )
}

export default AddItem;