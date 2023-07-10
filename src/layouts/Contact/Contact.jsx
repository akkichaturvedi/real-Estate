import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="w-full text-center">
                <h1 className="mt-4 text-[40px] font-bold capitalize">
                    Get in touch
                </h1>
                <h3 className="mt-3  text-[20px]">
                    Write to us
                </h3>
                <div className="w-full mt-6 flex justify-evenly items-center max-sm:flex flex-wrap">
                    <div className="text-center py-4 px-8 border rounded-lg shadow-2xl m-1">
                        <h3 className="mb-2 font-bold text-[20px]">Enquiries</h3>
                        <h5 className="">mailAddress</h5>
                    </div>
                    <div className="text-center py-4 px-8 border rounded-lg shadow-2xl m-1">
                        <h3 className="mb-2 font-bold text-[20px]">Enquiries</h3>
                        <h5 className="">mailAddress</h5>
                    </div>
                    <div className="text-center py-4 px-8 border rounded-lg shadow-2xl m-1">
                        <h3 className="mb-2 font-bold text-[20px]">Enquiries</h3>
                        <h5 className="">mailAddress</h5>
                    </div>
                </div>
            </div>

            <div className="w-full bg-orange-300 text-center flex items-center flex-col mt-8">
                <h1 className="mt-4 text-[40px] font-bold ">Find us</h1>
                <div className="md:w-[60%] sm:w-[75%] max-sm:w-[90%] flex items-center p-6 m-6 bg-white border rounded-lg max-sm:flex-col">
                    <div className="w-[40%] h-full max-sm:w-full max-sm:h-[300px] max-sm:mb-4">
                        comapny image here
                    </div>
                    <div className="w-[60%] h-full ml-4 max-sm:m-0  max-sm:w-full">
                        <p>company address</p>
                        <p>company address</p>
                        <p>company address</p>
                        <p>company address</p>
                        <p>company address</p>
                        <p>company address</p>
                        <p>company address</p>
                        <p>company address</p>
                    </div>
                </div>
            </div>

            <div className="flex mt-10 mb-10 p-2 items-center justify-start bg-white">
                <div className="mx-auto w-full max-w-lg  border rounded-lg px-12 py-6 max-sm:px-4 shadow-lg">
                    <h1 className="text-4xl font-bold">Contact us</h1>
                    <p className="mt-3">Email us at help@domain.com or message us here:</p>

                    <form className="mt-10">



                        <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="relative z-0">
                                <input type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your name</label>
                            </div>
                            <div className="relative z-0">
                                <input type="text" name="email" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your email</label>
                            </div>
                            <div className="relative z-0 col-span-2">
                                <textarea name="message" rows="5" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your message</label>
                            </div>
                        </div>
                        <button type="submit" className="mt-5 rounded-md bg-black px-10 py-2 text-white">Send Message</button>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Contact