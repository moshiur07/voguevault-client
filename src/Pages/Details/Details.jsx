import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthProvider";


const Details = () => {
    const loadedData = useLoaderData()
    const {user} =useContext(AuthContext)
    const { url, price, rating, description, category, name, brand } = loadedData
    const navigate= useNavigate()
    const handleCart = () => {
        


       user ? fetch('https://voguevault20-moshiur-rahmans-projects-36adf0df.vercel.app/carts', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(loadedData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'PRoduct Added to cart Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
            .catch(error => {
                const msg = error.message
                Swal.fire({
                    title: 'Error!',
                    text: { msg },
                    icon: 'error',
                    confirmButtonText: 'Try Again!'
                })
            })
            : navigate('/login')
    }
    return (
        <div className="md:flex    mt-8 p-10">
            <img className='w-[50%] h-[400px]' src={url} alt="" />
            <div className="p-10 space-y-4">
                <h1 className="text-2xl font-semibold">{name}</h1>

                <div>
                    <p className="text-xl  text-gray-400">Brand: <span className="text-black font-medium">{brand}</span></p>
                    <p className="text-xl  text-gray-400">Category: <span className="text-black font-medium">{category}</span> </p>
                    <p className="text-xl  text-gray-400">Rating: <span className="text-black font-medium">{rating}</span> </p>
                    <p className="text-xl  text-gray-400">Description: <span className="text-black text-base"> {description}</span></p>

                </div>

                <h1 className="text-2xl font-bold"><span className="text-xl text-gray-500">Price :  </span>$ {price}</h1>
                <button onClick={handleCart} className="px-4 py-3  font-medium text-center text-white bg-gradient-to-r from-[#4e6a57] to-[#639566] rounded-lg">
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default Details;