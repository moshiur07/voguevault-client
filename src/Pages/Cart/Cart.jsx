import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = () => {
    const myCarts = useLoaderData()
    const [items, setItems] = useState(myCarts)


    const handleDelete = (_id) => {
        fetch(`https://voguevault20-moshiur-rahmans-projects-36adf0df.vercel.app/carts/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data?.deleteCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product deleted from cart Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    const remaining = myCarts.filter(cart => cart._id !== _id)
                    setItems(remaining)
                }
                else {
                    Swal.fire({
                        title: 'Failed!',
                        text: 'Could not delete the product!',
                        icon: 'error',
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
    }

    return (
        <div className="py-10 px-24 mx-auto">
            {
                items == 0 ? <h1 className="flex justify-center items-center mx-auto w-[90vh] h-[90vh] ">No Product has been added yet!</h1> : items.map(item => <div key={item._id} className="md:w-full flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-[250px] md:rounded-none md:rounded-s-lg" src={item.url} alt=""></img>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item?.name}</h5>
                        <div className="flex gap-2 my-2">
                            {/* Badge */}
                            <p className='rounded-lg px-3 py-1 bg-gradient-to-r from-[#355aec] to-[#24a5df] w-max font-semibold text-white'>{item?.brand}</p>
                            <p className='rounded-lg px-3 py-1 bg-gradient-to-r from-[#355aec] to-[#24a5df] w-max font-semibold text-white'>{item?.category}</p>
                        </div>
                        <p className="mb-3 font-medium text-2xl text-gray-700 dark:text-gray-400">{item?.price}</p>

                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item?.description}</p>
                        <div className="flex gap-3 border w-full">
                            <button className="btn btn-outline btn-primary  flex-1">
                                Buy Now
                            </button>
                            <button onClick={() => handleDelete(item._id)} className= " flex-1 text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                                <svg className="w-5 h-5 mr-1 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Cart;