import { Link } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";


const Home = () => {
    const clothingBrands = [
        {
            "id": "1",
            "name": "Nike",
            "official_name": "Nike, Inc.",
            "logo_url": "https://i.ibb.co/2tJM3hv/NIKE-download.png"
        },
        {
            "id": "2",
            "name": "Adidas",
            "official_name": "Adidas AG",
            "logo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmvw7xpATQBp-DDynTb34g7SSBmVmv1qzRYg&usqp=CAU"
        },
        {
            "id": "3",
            "name": "Gucci",
            "official_name": "Guccio Gucci S.p.A.",
            "logo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMltN82fCJ70IS2v6IA-H-9CQ5OkJSIwbGfB7LaudAx8OzGw0QOI9eRYoex_rQKgOLdHU&usqp=CAU"
        },
        {
            "id": "4",
            "name": "Zara",
            "official_name": "Zara",
            "logo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-vQ3rWdXfp6ABIfEQEJ8Lg4gLIKzBJ7M13FgX8337rEP9G3R3_vq2MDrhTFarXkQVB5Q&usqp=CAU"
        },
        {
            "id": "5",
            "name": "H&M",
            "official_name": "H & M Hennes & Mauritz AB",
            "logo_url": "https://i.ibb.co/9WqgGhM/H-M-download-1.png"
        },
        {
            "id": "6",
            "name": "Levis",
            "official_name": "Levi Strauss & Co.",
            "logo_url": "https://i.ibb.co/NFmLJZV/Levi-s-download.png"
        }
    ];


    return (
        <div className=''>
            {/* Banner */}
            
            <div className="carousel  w-full h-[100vh] mb-5 ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/MhWsrn8/poster1.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/FJpMxSn/poster1.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/zF1JL0K/poster1.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/NL29YrJ/poster3.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            {/*  ALL Brands */}
            <div className="">
                <h1 className="text-4xl font-bold text-center my-8 py-8 ">  Our Exclusive Brands </h1>
                <div className=" p-8 grid grid-cols-1 md:grid-cols-3 gap-6 ">
                    {
                        clothingBrands.map(brand => <div key={brand.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="w-full h-[200px]" src={brand.logo_url} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{brand.official_name}</h5>
                                </a>
                                {/* <Link to={`/brand/${brand.id}`}> */}
                                <Link to={`/products/${brand.name}`}>
                                    <button className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-[#4e6a57] to-[#639566] rounded-lg" >View Products <GrLinkNext />
                                    </button>
                                </Link>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;