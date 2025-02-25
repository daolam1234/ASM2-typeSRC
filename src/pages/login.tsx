import React from 'react'
import { ILoginForm } from '../interface/user'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

type Props = {}

const Login = (props: Props) => {
    const {register,handleSubmit,formState:{errors},watch} = useForm<ILoginForm>()
    const navigate = useNavigate()
    const onSubmit = async (user:ILoginForm)=>{
        try {
            const {data} = await axios.post(`http://localhost:3000/login`,user)
            alert('Đăng nhập thành công')
            navigate('/')
        } catch (error:any) {
            alert(error.response.data??error.message)
            console.log(error);            
        }
    }
  return (
    <div className='max-w-2xl mx-auto p-20 bg-[linear-gradient(360deg,_#4E7C32_68%,_#F9F3EE_100%)] '>
        <h1 className='font-bold text-[24px] text-center'>Đăng nhập tài khoản</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 mt-4 [&_input]:border [&_input]:py-1 [&_input]:px-3'>
           <input className=' rounded-xl' type='text' placeholder='Email' {...register("email",{pattern:/^\S+\@+(\S+\.)+[a-zA-Z]{2,6}$/,required:true})}/>
           {(errors.email)&&<span className='text-red-600 text-[12px]'>Email không đúng định dạng</span>}
           <input className='rounded-xl' type='text' {...register("password")} placeholder='Mật khẩu'/>
            <div className='flex justify-end gap-2'>
            <button className='bg-green-900 text-white py-1 px-4 rounded-xl'>Đăng nhập</button>
            <Link to={`/register`}><button className='bg-green-900 text-white py-1 px-4 rounded-xl'>Đăng ký</button></Link>
            </div>
        </form>
    </div>
  )
}

export default Login