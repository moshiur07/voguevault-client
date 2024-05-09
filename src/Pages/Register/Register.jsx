import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";


const Register = () => {

    const { createUser,googleSignin } = useContext(AuthContext)
    const handleSignUpEmail = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
        if (passwordRegex.test(password)) {
            createUser(email, password)
                .then(res => {
                    console.log(res.user);
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Created Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                })
                .catch(error => {
                    const msg = error.message
                    Swal.fire({
                        title: 'Error!',
                        text: { msg },
                        icon: 'error',
                        confirmButtonText: 'Try Again'
                    })
                })
        } else {
            Swal.fire({
                title: 'Invalid!',
                text: 'Please set one uppercase,one lowercase,one number and at least 6 Character!',
                icon: 'error',
                confirmButtonText: 'Try Again'
            })
        }
    }
    const handleGoogle = ()=>{
        googleSignin()
        .then(res => {
            console.log(res.user);
            Swal.fire({
                title: 'Success!',
                text: 'User Created Successfully!',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
        })
        .catch(error => {
            const msg = error.message
            Swal.fire({
                title: 'Error!',
                text: { msg },
                icon: 'error',
                confirmButtonText: 'Try Again'
            })
        })
    }
    const handleGithub = ()=>{
        handleGithub()
        .then(res => {
            console.log(res.user);
            Swal.fire({
                title: 'Success!',
                text: 'User Created Successfully!',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
        })
        .catch(error => {
            const msg = error.message
            Swal.fire({
                title: 'Error!',
                text: { msg },
                icon: 'error',
                confirmButtonText: 'Try Again'
            })
        })
    }
    const handleFacebook = ()=>{
        googleSignin()
        .then(res => {
            console.log(res.user);
            Swal.fire({
                title: 'Success!',
                text: 'User Created Successfully!',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
        })
        .catch(error => {
            const msg = error.message
            Swal.fire({
                title: 'Error!',
                text: { msg },
                icon: 'error',
                confirmButtonText: 'Try Again'
            })
        })
    }

    return (
        <div className=" dark:bg-gray-900 my-10">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg  xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div className="space-y-2">
                            <button onClick={handleGoogle} className="btn btn-outline w-full"><FcGoogle /> Google</button>
                            <button onClick={handleGithub} className="btn btn-outline btn-primary w-full"><FaGithub /> GitHub</button>
                            <button onClick={handleFacebook} className="btn btn-outline btn-secondary w-full"><FaFacebook /> FaceBook</button>

                            <span className="mt-4 w-full flex items-center text-xl"><hr className="border w-[45%]" /> or <hr className="border w-[45%]" /></span>

                        </div>
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>

                        <form onSubmit={handleSignUpEmail} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name"></input>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""></input>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
                            </div>

                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""></input>
                                </div>
                                <div className="ml-3 text-sm">
                                    <label className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <button type="submit" className="w-full text-white bg-sky-600 hover:bg-sky-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-stone-300">Create an account</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <Link to='/login' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;