import styles from '../styles/AdminPanel.module.css'
import { Redirect } from '../components/redirect'

const Admin = () =>{
    return(
        <div className={styles.body}>
            <Redirect/>
            <div className={styles.buttons}>
            <form action="/admin/AddItem">
                <button className={styles.butt}>Добавление товара</button>
            </form>
            <form action="/admin/ActionItem">
                <button className={styles.butt}>Удаление/Обновление товара</button>
            </form>
            </div>
            
        </div>
    )

}

export default Admin;