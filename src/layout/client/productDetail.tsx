import React, { useEffect, useState } from 'react'
import { IProduct } from '../../interface/product'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const ProductDetail = () => {

    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
    const onSubmit = (data: any) => {
        const { keyword } = data
        navigate(`/search?keyword=${keyword}`)

    }

    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<IProduct | null>(null);

    useEffect(() => {
        const getProductById = async () => {
            try {
                const { data } = await axios.get(`http://localhost:3000/products/${id}`);
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };
        getProductById();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (

        <div >
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

            {/* prodcut */}

            <div>
                <div className="flex mt-10 mb-20">

                    <div className="flex-[5] flex flex-col items-center ml-20">
                        <div>
                            <img src={product.image} className='w-[400px]' />
                        </div>
                        <div className="grid grid-cols-3 w-96 gap-5 mt-10">
                            <img src={product.image} />
                            <img src={product.image} />
                            <img src={product.image} />
                        </div>
                    </div>

                    <div className="flex-[5] flex flex-col items-center ">
                        <div className=" w-[50%]">
                            <p className="text-[#4E7C32] mb-5">Plant</p>
                            <p className="text-3xl font-bold mb-5 ">{product.name}</p>
                            <p className="text-justify mb-5 text-[#68707D]">{product.description}</p>
                            <p className="text-2xl font-bold flex gap-5">
                                <p>${product.price}</p>
                                <p className='text-sm text-[#4E7C32] mt-2'>50%</p>
                            </p>
                            <s >$250.00</s>
                            <div className="flex mt-5 gap-10 ">
                                <div className="flex gap-10 ml-5">
                                    <button className="text-3xl text-[#505F4E]">-</button>
                                    <p className="mt-3">3</p>
                                    <button className="text-2xl mt-1 text-[#505F4E] ">+</button>
                                </div>
                                <button className=" border-2 bg-[#4E7C32] text-white rounded-xl w-40 h-10 flex  py-1 justify-center gap-5">
                                    <p>🛒</p>
                                    <p>Add to cart</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="ml-40  mr-40 mt-32 w-[70%]">
                    <p className="text-3xl text-[#4E7C32] mb-3">About </p>
                    <p>{product.descriptionDetail}</p>
                </div>
                <div className="ml-40  mr-40  mt-10 w-[70%]">
                    <p className="text-3xl text-[#4E7C32] mb-3">Discription </p>
                    <p>{product.descriptionDetail}</p>

                </div>
            </div>


            <div className="flex mt-20">
                <div className="flex-[6] flex flex-col items-center">
                    <div className='ml-10'>
                        <div className="flex ">
                            <img src={product.image} className="w-[200px] h-52 mr-10" />
                            <div className="mt-10 text-center ">
                                <p className="text-6xl">★★★★★</p>
                                <p className=" flex justify-center gap-2">
                                    <p className='text-[#4E7C32] text-5xl'>5.0</p>
                                    <p className='text-black text-3xl mt-2'>(388)</p>

                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col mt-5 ">
                            <div className="flex gap-3">
                                <p>1 ★</p>
                                <button className="w-[600px] h-4 bg-[#A2A0A0] rounded-sm mt-1" />
                                <p>(388)</p>
                            </div>
                            <div className="flex gap-3">
                                <p>2 ★</p>
                                <button className="w-[100px] h-4 bg-[#D9D9D9] rounded-sm mt-1" />
                            </div>
                            <div className="flex gap-3">
                                <p>3 ★</p>
                                <button className="w-[100px] h-4 bg-[#D9D9D9] rounded-sm mt-1" />
                            </div>
                            <div className="flex gap-3">
                                <p>4 ★</p>
                                <button className="w-[100px] h-4 bg-[#D9D9D9] rounded-sm mt-1" />
                            </div>
                            <div className="flex gap-3">
                                <p>5 ★</p>
                                <button className="w-[100px] h-4 bg-[#D9D9D9] rounded-sm mt-1" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-[4] flex-col  mt-5  ">
                    <button className=" border-2 bg-[#4E7C32] text-white rounded-xl w-40 h-10">Write review</button>
                </div>
            </div>


            <div className="grid grid-cols-2 ml-32 mr-32 mt-10 gap-10  ">
                <div>
                    <p className="text-3xl text-[#4E7C32] mb-3 flex gap-10">
                        <p>Aman gupta</p>
                        <p className='text-black'>★★★★★</p>
                    </p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled i</p>
                </div>
                <div>
                    <p className="text-3xl text-[#4E7C32] mb-3 flex gap-10">
                        <p>Aman gupta</p>
                        <p className='text-black'>★★★★★</p>
                    </p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled i</p>
                </div>
                <div>
                    <p className="text-3xl text-[#4E7C32] mb-3 flex gap-10">
                        <p>Aman gupta</p>
                        <p className='text-black'>★★★★★</p>
                    </p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled i</p>
                </div>

            </div>

            <div className="flex justify-center mt-10">
                <button className=" border-2 bg-[#4E7C32] text-white rounded-xl w-20 h-10 mb-10">See all</button>
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

export default ProductDetail