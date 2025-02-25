import React, { useEffect, useState } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { IProduct } from "../../interface/product";
import { useForm } from "react-hook-form";

const Search = () => {
    const [search] = useSearchParams();
    const [products, setProducts] = useState<IProduct[]>([]);
    const [keyword, setKeyword] = useState<string>("");

    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
    const onSubmit = (data: any) => {
        const { keyword } = data
        navigate(`/search?keyword=${keyword}`)

    }

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const keywordParam = search.get("keyword") || "";
                if (!keywordParam) return;

                const { data } = await axios.get(`http://localhost:3000/products?name_like=${keywordParam}`);
                setProducts(data);
                setKeyword(keywordParam);
            } catch (error) {
                console.error("Lỗi khi tìm kiếm sản phẩm:", error);
            }
        };
        fetchProducts();
    }, [search]); Z

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

            <div className=" bg-[linear-gradient(90deg,_#B5DCB0_10%,_#FFFFFF_80%)] text-center">
                <p className="px-20 py-14 text-3xl text-[#505F4E] font-thin flex gap-3">
                    <p>Kết quả tim kiếm theo từ khoá:</p>
                    <p className="font-bold">{keyword}</p>
                </p>
            </div>
            <section className="p-8 ml-20 mr-10">

                <div className="grid grid-cols-4 gap-4 mt-4">
                    {products.slice(0, 4).map((product) => (
                        <Link to={`/chiTiet/${product.id}`} key={product.id}>
                            <div key={product.id} className="bg-white p-4 ">
                                <img src={product.image} className="ml-16 mt-8 h-40 w-auto object-cover" alt={product.name} />
                                <div className="mt-5">
                                    <p className="text-[#665345] font-bold">{product.name}</p>
                                    <div>
                                        <p>{product.category}</p>
                                        <p>${product.price}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                    ))}
                </div>
            </section>
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
            <footer>
                <div className="p-8 bg-[#053D29] grid grid-cols-4 h-80 gap-10">
                    <div className="mt-10 ml-10 mr-20">
                        <p className="text-justify text-white">
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
                    <img src="img/icons_payment 1.png" />
                    <p className="mr-20">Scrol to top </p>
                </div>
            </footer>
        </div>
    );
};

export default Search;
