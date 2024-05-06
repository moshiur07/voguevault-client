import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const loadedItems = useLoaderData()
    console.log(loadedItems);
    const [products , setProducts]=useState(loadedItems)
    return (
        <div className=''>
            My Name is Cristiano Ronaldo
            <div>
                {
                    products.map(product => <p key={product._id}>{product.category}</p>)
                }
            </div>
        </div>
    );
};

export default Home;