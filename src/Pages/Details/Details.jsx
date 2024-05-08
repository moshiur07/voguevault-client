import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const Details = () => {
    const loadedData = useLoaderData()
    const { url, price, rating, description, category, name, brand } = loadedData

    const handleCart = () =>{
        
        fetch('http://localhost:5000/carts',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(loadedData)
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            if (data.acknowledged) {
                Swal.fire({
                    title: 'Success!',
                    text: 'PRoduct Added to cart Successfully!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            }
        })
    }

    const params = useParams()
    return (
        <div className="md:flex">
            <img className='w-[50%] h-[500px]' src={url} alt="" />
            <div className="p-8">
            <h1>{name}</h1>
            <h1>{price}</h1>
            <button onClick={handleCart} className="px-4 py-3  font-medium text-center text-white bg-gradient-to-r from-[#4e6a57] to-[#639566] rounded-lg">
                Add to cart 
            </button>
            </div>
        </div>
    );
};

export default Details;