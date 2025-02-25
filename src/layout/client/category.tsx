import React, { useEffect, useState } from 'react'
import { Icategory } from '../../interface/category'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ClientCategory = () => {

    const [category, setCategory] = useState<Icategory[]>([])
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('http://localhost:3000/category')

                setCategory(data)
            } catch (error) {
                console.log(error);

            }

        })()
    }, [])



    return (

        <section className="p-8 ml-20 mr-10">
            <h2 className="text-xl text-[#505F4E] font-bold ml-20 mb-10">Kategorien</h2>
            <div className="grid grid-cols-4  mt-4 gap-3">
                {category.map((category) => (
                    <Link to={`/chiTietDanhMUc/${category.id}`} key={category.id}>
                        <div className="h-96 w-80 bg-cover" style={{ backgroundImage: `url(${category.image})` }}>
                            <div className="flex justify-end">
                                <div className="text-white flex-col m-3">
                                    <p className="font-bold text-2xl">{category.name}</p>
                                    <p>20 items</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

        </section>
    )
}

export default ClientCategory