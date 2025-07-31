import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa"; 
function Home(props) {
  const [item, setItem] = useState(0);
  const [price, setPrice] = useState(0);

  const products = [
    { id: 1, name: "iPhone 12", price: 1000, img: "https://miro.medium.com/v2/resize:fit:1200/1*kOcWWQtqXlUfdMXqAOqdvg.png" },
    { id: 2, name: "iPhone 13", price: 1100, img: "https://miro.medium.com/v2/resize:fit:1200/1*kOcWWQtqXlUfdMXqAOqdvg.png" },
    { id: 3, name: "iPhone 14", price: 1200, img: "https://miro.medium.com/v2/resize:fit:1200/1*kOcWWQtqXlUfdMXqAOqdvg.png" },
    { id: 4, name: "iPhone 15", price: 1300, img: "https://miro.medium.com/v2/resize:fit:1200/1*kOcWWQtqXlUfdMXqAOqdvg.png" },
    { id: 5, name: "iPhone 15 Pro", price: 1500, img: "https://miro.medium.com/v2/resize:fit:1200/1*kOcWWQtqXlUfdMXqAOqdvg.png" },
    { id: 6, name: "Samsung S20 Ultra Pro", price: 1500, img: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/15dd888d-f922-4a37-87a9-306f9a36bc80._CR0,0,1200,628_SX810_CB1169409_QL70_.jpg" }
  ];

  return (
    <>
      {/* Cart Summary Bar */}
      <div className="bg-green-300 w-full md:w-2/3 lg:w-1/2 mx-auto my-4 px-4 py-3 rounded-lg shadow flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <FaShoppingCart size={28} className="text-blue-500" />
          <div>
            <p className="text-lg font-medium">{item} Items & Total Price $={price}</p>
            {/* <p className="text-md font-semibold">Total Price = </p> */}
          </div>
        </div>
      </div>

      {/* Product Cards */}
      <div className="p-4 md:p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Add to Cart React + Redux</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 transition transform "
            >
              <img
                className="object-cover w-full h-48"
                src={product.img}
                alt={product.name}
              />

              <div className="p-4 space-y-1 text-center">
                <span className="block font-bold text-gray-800 text-lg">{product.name}</span>
                <span className="text-gray-600 text-md">Price: ${product.price}</span>
              </div>

              <div className="">
                <button
                  className="w-full  bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-2 px-4 rounded flex justify-between items-center gap-5 text-center"
                  onClick={() => {
                    setItem(item + 1);
                    setPrice(price + product.price);
                    props.addTocartHandler(product);
                  }}
                >
                  Add to Cart
                  <FaShoppingCart size={28} className="text-yellow-500 " />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
