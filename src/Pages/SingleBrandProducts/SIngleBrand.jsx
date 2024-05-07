import { useLoaderData, useParams } from "react-router-dom";
import SingleCard from "../../Components/SingleCard/SingleCard";

const SIngleBrand = () => {
    const allProducts = useLoaderData()
    const params = useParams()
    console.log(allProducts, params);
    return (
        <div>
            <div className="w-full h-[80vh] mb-5 border-4 border-red-400">
                {params?.name} Brands AD!!!
            </div>
            <div>
                <h1 className="text-4xl font-bold text-center my-8 py-8 ">All Premium <span className="text-extrabold text-green-800">{params?.name}</span> Products</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {
                        allProducts?.map(product => <SingleCard key={product?._id} product={product} ></SingleCard> )
                    }
                </div>
            </div>
        </div>
    );
};

export default SIngleBrand;