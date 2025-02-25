import React, { useEffect, useState } from 'react'
import { IProduct } from '../../interface/product'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ClientBody = () => {

  const [products, SetProduct] = useState<IProduct[]>([])
  useEffect(() => {
    const get_Products = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/products`)
        SetProduct(data)
      } catch (error) {
        console.log(error);
      }
    }
    get_Products()
  }, [])


  return (
    <div>
      <section className="p-8 ml-20 mr-10">
        <h2 className="text-xl text-[#505F4E] font-bold ml-20">Best Sellers</h2>

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

      {/* Folder */}
      <section>
        <div className="flex justify-center">
          <div className="flex w-[800px]">
            <div className="flex-1  p-4 h-96 w-80 bg-cover mr-3  relative font-bold" style={{ backgroundImage: 'url("./img/OIP.jpg")' }}>
              <div className="absolute top-3 left-0 w-full bg-white bg-opacity-30 p-2">
                <p className=" text-black font-bold ">garten paten</p>

              </div>
            </div>
            <div className="flex-1  grid grid-cols-2 gap-2">
              <div className=" relative bg-cover p-4 font-bold" style={{ backgroundImage: 'url("./img/OIP\ \(1\).jpg")' }}>
                <div className="absolute top-3 left-0 w-full bg-white bg-opacity-30 p-2">
                  <p className=' '>sand</p>
                </div>
              </div>
              <div className=" relative bg-cover p-4 font-bold" style={{ backgroundImage: 'url("./img/images.jpg")' }}>
                <div className="absolute top-3 left-0 w-full bg-white bg-opacity-30 p-2">
                  <p className=' '>planzer</p>
                </div>
              </div>
              <div className=" relative bg-cover p-4 font-bold" style={{ backgroundImage: 'url("./img/download (1).jpg")' }}>
                <div className="absolute top-3 left-0 w-full bg-white bg-opacity-50 p-2">
                  <p className=' '>Schlammkuchen</p>
                </div>
              </div>
              <div className=" relative bg-cover p-4 font-bold" style={{ backgroundImage: 'url("./img/download (2).jpg")' }}>
                <div className="absolute top-3 left-0 w-full bg-white bg-opacity-70 p-2">
                  <p className=' '>Klemmen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>

  )
}

export default ClientBody