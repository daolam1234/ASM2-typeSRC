import React from 'react';

const ClientNewsletter = () => {
    return (

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
    );
};

export default ClientNewsletter;
