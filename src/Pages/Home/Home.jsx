

const Home = () => {
    const clothingBrands =  [
        {
          "name": "Nike",
          "official_name": "Nike, Inc.",
          "logo_url": "https://i.ibb.co/2tJM3hv/NIKE-download.png"
        },
        {
          "name": "Adidas",
          "official_name": "Adidas AG",
          "logo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmvw7xpATQBp-DDynTb34g7SSBmVmv1qzRYg&usqp=CAU"
        },
        {
          "name": "Gucci",
          "official_name": "Guccio Gucci S.p.A.",
          "logo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMltN82fCJ70IS2v6IA-H-9CQ5OkJSIwbGfB7LaudAx8OzGw0QOI9eRYoex_rQKgOLdHU&usqp=CAU"
        },
        {
          "name": "Zara",
          "official_name": "Zara",
          "logo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-vQ3rWdXfp6ABIfEQEJ8Lg4gLIKzBJ7M13FgX8337rEP9G3R3_vq2MDrhTFarXkQVB5Q&usqp=CAU"
        },
        {
          "name": "H&M (Hennes & Mauritz)",
          "official_name": "H & M Hennes & Mauritz AB",
          "logo_url": "https://i.ibb.co/9WqgGhM/H-M-download-1.png"
        },
        {
          "name": "Levi's",
          "official_name": "Levi Strauss & Co.",
          "logo_url": "https://i.ibb.co/NFmLJZV/Levi-s-download.png"
        }
      ];
      
      
    return (
        <div className=''>
            {/* Banner */}
            <div className="w-full h-[80vh] mb-5 border-4 border-red-400">
                ALL Brands AD!!!
            </div>

            {/*  ALL Brands */}
            <div className="">
                <h1 className="text-4xl font-bold text-center my-8 py-8 ">  Our Exclusive Brands </h1>
                <div className=" p-8 grid grid-cols-1 md:grid-cols-3 gap-6 ">
                    {
                        clothingBrands.map((brand,idx) => <div key={idx} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="w-full h-[200px]" src={brand.logo_url} alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{brand.official_name}</h5>
                            </a>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-[#4e6a57] to-[#639566] rounded-lg hover:bg-red-500   ">
                                View Products
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>)
                    }

                    
                    
 
                </div>
            </div>
        </div>
    );
};

export default Home;