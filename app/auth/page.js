"use client"
import styles from '../styles/Auth.module.css'
import  {useSelector, useDispatch } from "react-redux"
import { addToken } from '../../reduxStore/slices/tokenSlices'

const Auth = () =>{
    
    const tokens = useSelector((state) => state.token.value);
    const dispatch = useDispatch(null);
    
    const data = {
        'username': '',
        'password': '',
    }

    const authorization = async() =>{
        
        const res = await fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify(
                data
            ),
            headers:{
                'Content-Type': 'application/json'
            },
            
        });
        await handlerStatus(res.status);
        const result = await res.json();
        dispatch(addToken(result.token))

        
    }
    const handleReq = (e) =>{
        switch(e.target.name){
            case "username":
                data.username = e.target.value;
                
            break;
            case "password":
                data.password =  e.target.value;
            break;
        }
 
    }

    const handlerStatus = async (status) =>{
        switch(status){
            case 401:
                console.log("Неправильный логин или пароль!");
            break;
            case 400:
                console.log("Поля не могут быть пустыми!");
            break;
            case 200:
                console.log("Успешно! Вы вошли");
            break;
        }
    }
    if(tokens != ""){
        return(
            <div className={styles.body}>
                <div className={styles.elments}>
                    <h2 className={styles.text}>LOGIN</h2>
                    <button className={styles.butt} onClick={() => dispatch(addToken(""))}>Выйти</button>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className={styles.body}>
                <div className={styles.elments}>
                    <h2 className={styles.text}>LOGIN</h2>
                    <input className={styles.input} type="text" name="username" placeholder='Username' onBlur={handleReq}/>
                    <input className={styles.input} type="password" name="password" placeholder='Password' onBlur={handleReq}/>
                    <button className={styles.butt} onClick={authorization}>Войти</button>
                </div>
            </div>
        );
    }
}

export default Auth;
