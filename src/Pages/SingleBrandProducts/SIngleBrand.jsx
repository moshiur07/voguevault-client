import { useLoaderData, useParams } from "react-router-dom";
import SingleCard from "../../Components/SingleCard/SingleCard";

const SIngleBrand = () => {
    const allProducts = useLoaderData()
    const params = useParams()
    console.log(allProducts, params);
    return (
        <div>
            {
                allProducts.length === 0 ? <h1 className="flex col-span-3 text-3xl font-medium   justify-center items-center mx-auto w-full h-[90vh] ">No   <span className='text-red-600 font-semibold'>  Available   </span>  Products!</h1>
                    :
                    <div>
                        < div className="carousel  w-full h-[80vh] mb-5 border-4">
                            <div id="slide1" className="carousel-item relative w-full">
                                <img src={allProducts?.slider_1} className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide4" className="btn btn-circle">❮</a>
                                    <a href="#slide2" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide2" className="carousel-item relative w-full">
                                <img src={allProducts?.slider_2} className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" className="btn btn-circle">❮</a>
                                    <a href="#slide3" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide3" className="carousel-item relative w-full">
                                <img src={allProducts?.slider_3} className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" className="btn btn-circle">❮</a>
                                    <a href="#slide4" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide4" className="carousel-item relative w-full">
                                <img src={allProducts?.slider_4} className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide3" className="btn btn-circle">❮</a>
                                    <a href="#slide1" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold text-center my-8 py-8 ">All Premium <span className="text-extrabold text-green-800">{params?.name}</span> Products</h1>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
                                {
                                    allProducts?.map(product => <SingleCard key={product?._id} product={product} ></SingleCard>)
                                }
                            </div>
                        </div>
                    </div>
            }
        </div >
        //  
    );
};

export default SIngleBrand;