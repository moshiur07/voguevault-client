import Swal from 'sweetalert2'


const AddItems = () => {
    const handleAddProduct = e => {
        e.preventDefault()

        const form = e.target

        const name = form.name?.value
        const brand = form.brand?.value
        const url = form.url?.value
        const price = form.price?.value
        const rating = form.rating?.value
        const description = form.description?.value
        const category = form.category?.value
        

        const productDetails = { name, url, brand, price, rating, description, category }

        fetch('https://voguevault20-moshiur-rahmans-projects-36adf0df.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset()
                    Swal.fire({
                        title: 'Success!',
                        text: 'PRoduct Added Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })


    }
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
                <form onSubmit={handleAddProduct}>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div className="">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image url</label>
                            <input type="url" name="url" id="url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="image url" required=""></input>
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required=""></input>
                        </div>
                        <div className="w-full">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
                            <select type="text" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required="">
                                <option selected="">Select Brand</option>
                                <option value="Nike">Nike</option>
                                <option value="Adidas">Adidas</option>
                                <option value="Gucci">Gucci</option>
                                <option value="H&M">H&M</option>
                                <option value="ZARA">ZARA</option>
                                <option value="Levis">Levis</option>
                            </select>
                        </div>
                        <div className="w-full">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                            <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$299" required=""></input>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                            <select name="category" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option selected="">Select category</option>
                                <option value="Shirt">Shirt</option>
                                <option value="Pant">Pant</option>
                                <option value="T-Shirt">T-Shirt</option>
                                <option value="Shoes">Shoes</option>
                                <option value="Sunglass">Sunglass</option>
                                <option value="Wallet">Wallet</option>
                                <option value="Perfume">Perfume</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rating</label>
                            <input type="number" name="rating" id="item-weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="5" required="" min="1" max="5"></input>
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                            <textarea name="description" id="description" rows="5" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
                        </div>
                    </div>
                    <button type="submit" className="px-4 py-3  font-medium text-center text-white bg-gradient-to-r from-[#4e6a57] to-[#639566] rounded-lg">
                        Add product
                    </button>
                </form>
            </div>
        </section>
    );
};

export default AddItems;