import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const ClientHeader = () => {

  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  const onSubmit = (data: any) => {
    const { keyword } = data
    navigate(`/search?keyword=${keyword}`)

  }
  return (
    <div>
      <header className="bg-[linear-gradient(90deg,_#4E7C32_65%,_#F9F3EE_120%)]  text-white p-4 flex flex-col items-center">
        <div className="w-full max-w-6xl flex justify-between items-center">
          <div className="text-lg font-bold" />
          <form className="relative w-1/2" onSubmit={handleSubmit(onSubmit)}>
            <input {...register('keyword')} type="text" placeholder="Suchen Sie nach Produkten, Marken und mehr" className="w-full px-4 py-2 rounded-md text-black" />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>

            </button>
          </form>
          <div className="flex gap-5 items-center">
            <a href="#" className="hover:underline mr-20">En </a>
            <Link to={`/login`} className='flex gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>

              <p>Account</p>
            </Link>

            <a href="#" className="hover:underline flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <p>Cart</p></a>
          </div>
        </div>
        <nav className="w-full max-w-6xl mt-4">
          <ul className="flex justify-between text-sm">
            <li><a href="/" className="hover:underline">Beleuchtung </a></li>
            <li><a href="#" className="hover:underline">Growbox</a></li>
            <li className="relative group hover:underline">
              <a href="#">Töpfe &amp; Behälter</a>
              {/* Menu con */}
              <ul className="absolute left-0 mt-2 w-40 bg-white text-black rounded-lg hidden group-hover:block">
                <li className="p-2 hover:bg-gray-600">Tùy chọn 1</li>
                <li className="p-2 hover:bg-gray-600">Tùy chọn 2</li>
                <li className="p-2 hover:bg-gray-600">Tùy chọn 3</li>
              </ul>
            </li>
            <li className="relative group hover:underline">
              <a href="#">Bewässerung</a>
              {/* Menu con */}
              <ul className="absolute left-0 mt-2 w-40 bg-white text-black rounded-lg hidden group-hover:block">
                <li className="p-2 hover:bg-gray-600">Tùy chọn 1</li>
                <li className="p-2 hover:bg-gray-600">Tùy chọn 2</li>
                <li className="p-2 hover:bg-gray-600">Tùy chọn 3</li>
              </ul>
            </li>

            <li><a href="#" className="hover:underline">Pflanzen &amp; Gärtnern </a></li>
            <li><a href="#" className="hover:underline">Lüftung &amp; Klimaanlage </a></li>
          </ul>
        </nav>
      </header>

      <div>
        <div className="border-2  flex   mb-10 bg-[linear-gradient(90deg,_#B5DCB0_48%,_#F9F3EE_100%)] ">
          <div className="flex-[1]  flex items-center justify-center">
            <p className="text-7xl">&lt;</p>
          </div>
          <div className="flex-[9]  ml-10 flex  justify-center h-[600px] bg-cover bg-no-repeat flex-col " style={{ backgroundImage: 'url("./img/fwfqq\ 1.png")' }}>
            <h1 className="text-3xl font-bold text-green-900 text-justify w-96">Wir kümmern uns um Ihre schöner Garten und Haus</h1>
            <p className="mt-4 text-gray-700 text-justify w-96">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <button className="mt-6 px-6 py-3 w-52 border border-green-900 text-green-900 rounded-md hover:bg-green-900 hover:text-white transition">Lern
              mehr</button>
          </div>
        </div>
      </div>

    </div>

  );
};

export default ClientHeader;
