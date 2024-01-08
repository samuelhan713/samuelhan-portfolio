const About = () => {
    return (
        <div className="mt-20">
            <div className="p-2 md:p-0 flex flex-col items-center">
                <div className="mt-10 hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div class="relative p-16 col-span-3 row-span-2 items-center bg-gray-50 rounded-2xl m-2 overflow-hidden hidden lg:flex">
                        <div class="flex flex-col gap-y-4 text-left w-2/6">
                            <h1 class="text-4xl font-semibold">About me</h1>
                            <p class="text-sm text-gray-500">Superpoll offers an elegant and smooth interface that makes creating and sharing polls a breeze. With superpoll advanced features, including customizable templates, real-time results, and detailed analytics, you can create beautiful polls that engage your audienceand provide valuable insights.</p>
                            <div className="relative z-10 text-black top-6 flex flex-col items-start rounded-xl w-44 bg-white r shadow-lg shadow-sky-500">
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
                                </div>
                                <button class="relative gradient-border px-3 py-2 rounded-xl flex items-center justify-center bg-black hover:bg-white hover:text-black opacity-95 hover:opacity-100 text-white w-full text-2xl font-normal">Check it out</button>
                            </div>
                        </div>
                        <img src="assets/profile_pic.png" className="absolute rounded-lg scale-50 left-48" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;