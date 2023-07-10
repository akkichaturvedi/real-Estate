import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"

const About = () => {
    return (
        <>
            <Navbar />

            <div className="w-full text-center ">
                <h1 className="mt-4 text-[40px] font-bold ">
                    About us
                </h1>
                <h3 className="mt-3  text-[20px]">
                    Driven by Science, Inspired by Patients
                </h3>
                <div className="w-full flex justify-center">
                    <p className="mt-3 text-[16px] w-[60%] sm:w-[80%] max-sm:w-[90%]">
                        At Lupin, we are guided at all times by our promise of caring for our customers’ health and well-being. To achieve this objective, we have invested in research, continuous learning and technology to develop high quality and affordable medicines to address unmet patient needs.
                    </p>
                </div>

            </div><br /><br />
            <div >
                <div className="py-2 bg-white border-2 m-6 rounded-lg">
                    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                            <div className="md:5/12 lg:w-5/12">
                                <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" width="" height="" />
                            </div>
                            <div className="md:7/12 lg:w-6/12">
                                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Nuxt development is carried out by passionate developers</h2>
                                <p className="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                                <p className="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default About