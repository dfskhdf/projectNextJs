"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSelector } from "react-redux"

export const Redirect = () =>{
    const router = useRouter();
    const token = useSelector((state) => state.token.value);
    if(token == ''){
        return router.push('/auth')
    }
}
export const adminButt = () =>{
    const token = useSelector((state) => state.token.value);
    if(token != ''){
        return(<Link className="navigation" href='/admin'>Админка</Link>)
    }
}

