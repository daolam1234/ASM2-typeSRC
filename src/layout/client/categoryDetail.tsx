import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Icategory } from '../../interface/category';
import { IProduct } from '../../interface/product';
import { useForm } from 'react-hook-form';

const CategoryDetail = () => {

    const { id } = useParams<{ id: string }>();
    const [categoryes, setCategory] = useState<Icategory[]>([])
    const [category, setCategorys] = useState<Icategory[]>([]);
    const [products, SetProducts] = useState<IProduct[]>([])

    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
    const onSubmit = (data: any) => {
        const { keyword } = data
        navigate(`/search?keyword=${keyword}`)

    }

    useEffect(() => {
        const get_Category_By_id = async () => {
            try {
                const { data } = await axios.get(`http://localhost:3000/category/${id}`)
                setCategory(data)
                console.log(data);

            } catch (error) {
                console.log(error);
            }
        };
        const get_Category = async () => {
            try {
                const { data } = await axios.get(`http://localhost:3000/category?parentId=${id}`);
                setCategorys(data);

            } catch (error) {
                console.log(error);
            }
        };

        const get_product_by_category = async () => {
            try {
                const { data } = await axios.get(`http://localhost:3000/products`)
                const filteredProducts = data.filter((product: IProduct) => product.categoryId === id);
                SetProducts(filteredProducts);

            } catch (error) {
                console.log(error);

            }
        }

        get_Category_By_id();
        get_Category();
        get_product_by_category();

    }, [id])



    return (
        <div>
            {/* header */}
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

            {/* Name */}

            <div id="banner2" className=" bg-[linear-gradient(90deg,_#B5DCB0_10%,_#FFFFFF_80%)] h-40 flex">
                <p className="px-20 py-14 text-3xl text-[#505F4E] font-bold ">{categoryes.name}</p>
            </div>


            {/* category */}

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-4 gap-8">
                    {category.slice(0, 4).map((category) => (
                        <Link to={`/chiTietDanhMUc/${category.id}`} key={category.id}>
                            <div key={category.id} className="flex items-center bg-[#b5dcb0] h-20 p-4 rounded-lg ">
                                <img src={category.image} alt="Eckige Töpfe" className="w-[66px] h-[48px] object-contain" />
                                <p className="text-gray-700 text-xl font-medium ml-4">{category.name}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* product */}
            <div>
                <div className="flex gap-20 ml-20 mb-10">
                    <div className="flex gap-2">
                        <p>Soft By:</p>
                        <input type="text" placeholder="Newest" className="px-2 border-2 " />
                    </div>
                    <div className="flex gap-2">
                        <p>Show:</p>
                        <input type="text" placeholder="Default" className="px-2 border-2 " />
                    </div>
                </div>
                <div className="  flex   mb-10 ml-20 ">
                    <div className="flex-[8]  ">
                        <div className="grid grid-cols-3 gap-3">
                            {products.map((product) => (
                                <Link to={`/chiTiet/${product.id}`} key={product.id}>
                                    <div className="relative p-4  group">
                                        <img src={product.image} className="ml-10 mt-8 w-52" />
                                        <div className="mt-5">
                                            <p className="text-[#665345] font-bold">{product.name}</p>
                                            <div className="flex gap-5">
                                                <p className="text-[#505F4E]">$1000</p>
                                                <s className="text-[#505F4E]">$963,95</s>
                                            </div>
                                        </div>
                                        <div className="absolute inset-0 flex items-center justify-center gap-3  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="bg-white p-2 rounded hover:bg-green-700">🔗</button>
                                            <button className="bg-white p-2 rounded hover:bg-green-700">🛒</button>
                                            <button className="bg-white p-2 rounded hover:bg-green-700">❤️</button>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                    </div>

                    <div className="flex-[2] flex-col text-center   mr-10 ml-10 ">
                        <p className="text-2xl text-[#505F4E] font-bold ">Kategorien</p>
                        <div className=" px-20 mt-5 ">
                            {category.map((category) => (
                                <div key={category.id} className="flex mb-5 gap-2 ">
                                    <input type="checkbox" />
                                    <p>{category.name}</p>
                                </div>
                            ))}
                        </div>
                        <div className="bg-gray-300 h-[300px] text-white bg-cover flex flex-col justify-between " style={{ backgroundImage: 'url("/img/annie-spratt-ncQ2sguVlgo-unsplash 1.png")' }}>
                            <p className="text-3xl font-bold  m-5 ">Grow your own favourite plant</p>
                            <a href="#" className="text-2xl font-semibold m-5"> Shop now</a>
                        </div>
                        <div className=" mt-20">
                            <div className="mb-10">
                                <h3 className="font-bold text-lg mb-2 flex ">Filter By Price</h3>
                                <div className="flex items-center justify-between">
                                    <input type="range" min={0} max={8000} defaultValue={4000} className="w-full appearance-none h-1 bg-green-700 rounded outline-none" />
                                </div>
                                <div className="flex justify-between text-gray-500 text-sm mt-2">
                                    <span>From $0 to $8000</span>
                                    <button className="text-gray-600">Filter</button>
                                </div>
                            </div>
                            <div className="mb-10">
                                <h3 className="font-bold text-lg mb-2 flex">Filter By Size</h3>
                                <div className="flex items-center justify-between">
                                    <input type="range" min={2} max={50} defaultValue={25} className="w-full appearance-none h-1 bg-green-700 rounded outline-none" />
                                </div>
                                <div className="flex justify-between text-gray-500 text-sm mt-2">
                                    <span>2 mm by 50</span>
                                    <button className="text-gray-600">Filter</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-8 bg-[linear-gradient(130deg,_#FFFFFF_60%,_#BCDEB7_100%)] flex justify-center ">
                <div className=" w-[1000px] h-[200px] flex justify-between gap-2  mt-10 mb-10">
                    <div className="flex-1">
                        <p className="text-3xl text-[#505F4E] font-extrabold">Etwas abonnieren*</p>
                        <p className="text-3xl text-[#505F4E] font-extrabold">_ Unser Newsletter</p>
                        <p className="mt-10 ml-10 w-[300px]">Get weekly update about our product on your email, no spam guaranteed
                            we promise ✌️</p>
                    </div>
                    <div className="flex items-end mb-5 ml-20 ">
                        <div className=" relative  h-[100px] w-[100%] flex justify-between">
                            <input type="email" placeholder="youremail123@gmail.com" className="mt-4 px-4 py-2 rounded-md text-black  w-[500px] h-16 " />
                            <button className="bg-[#656C66] text-white w-52 h-20 mt-3  absolute bottom-[-20px] right-0 px-4 py-2 ">ABONNIEREN</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <footer>
                <div className="p-8 bg-[#053D29] grid grid-cols-4 h-80 gap-10">
                    <div className="mt-10 ml-10 mr-20">
                        <p className=" text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua </p>
                        <div className="flex gap-10 mt-10">
                            <img src="img/Social.png" />
                            <img src="img/lucide_youtube.png" />
                            <img src="img/mdi_instagram.png" />
                        </div>
                    </div>
                    <div className=" text-white">
                        <p className="font-bold mb-5">Um</p>
                        <div className="font-thin space-y-4">
                            <p>Kontaktiere uns</p>
                            <p>Über uns</p>
                            <p>Karriere</p>
                            <p>Unternehmensinformationen</p>
                        </div>
                    </div>
                    <div className=" text-white">
                        <p className="font-bold mb-5">Hilfe</p>
                        <div className="font-thin  space-y-4">
                            <p>Unsere Produzenten</p>
                            <p>Zahlung</p>
                            <p>Versand</p>
                            <p>Stornierung &amp; Rückgabe</p>
                            <p>Verstoß melden</p>
                        </div>
                    </div>
                    <div className=" text-white">
                        <p className="font-bold mb-5">politik</p>
                        <div className="font-thin space-y-4 ">
                            <p>Rücknahmegarantie</p>
                            <p>Nutzungsbedingungen</p>
                            <p>Sicherheit</p>
                            <p>Privatsphäre</p>
                            <p>Seitenverzeichnis</p>
                        </div>
                    </div>
                </div>
                <div className="p-8 bg-[#062F21] text-white text-center  flex justify-between">
                    <p className="ml-10">© 2025 GardenShop. All rights reserved.</p>
                    <img src="/img/icons_payment 1.png" />
                    <p className="mr-20">Scrol to top </p>
                </div>
            </footer>




        </div>
    )
}
export default CategoryDetail