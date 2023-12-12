"use client"
import Link from "next/link"
import { FaUserLarge } from "react-icons/fa6";
import { FaRegClipboard } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector } from "react-redux"
import { useRouter } from 'next/navigation'


const Header = () =>{
    const token = useSelector((state) => state.token.value);
    const router = useRouter();
    if(token != ''){
        return(
            <header>
                <button onClick={() => router.back()}><IoIosArrowBack/></button>
                <Link href='/' className="label">
                    ItemShop
                </Link>
    
                <nav>
                    <Link className="navigation" href='/admin'><FaRegClipboard/> Админка</Link>
                    <Link className="navigation" href='/auth'><FaUserLarge/> Войти</Link>
                </nav>
            </header>
        )
    }
    else{
    return(
        <header>
            <button onClick={() => router.back()}><IoIosArrowBack/></button>
            <Link href='/' className="label">
                ItemShop
            </Link>

            <nav>

                <Link className="navigation" href='/auth'><FaUserLarge/> Войти</Link>
            </nav>
        </header>
    )
}
}

export default Header