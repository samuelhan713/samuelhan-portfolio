import Footer from "./Footer";
import { useState } from 'react';

const MessagePage = () => {
    const [formData, setFormData] = useState({
        name: '',
        position: '',
        message: '',
    });

    // Event handler for input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Event handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform any necessary actions with the form data here
        console.log('Form submitted:', formData);
        // Reset form fields if needed
        setFormData({
            name: '',
            position: '',
            message: '',
        });
    };
    return (
        <div>
            <div class="flex flex-col items-center">
                <div class="flex flex-row items-center text-center text-6xl font-bold mt-16">
                    <span class="md:ml-1 xl:ml-4 ml-4">Message</span>
                </div>
                <form class="flex flex-col items-center mt-10 w-96 p-5 md:p-0" onSubmit={handleSubmit}>
                    <input class="p-4 w-full m-2 bg-gray-100 rounded-md border-0 outline-none text-base font-normal" placeholder="Name" name="name" value={formData.name} onChange={handleInputChange} required />
                    <input class="p-4 m-2 w-full border-0 bg-gray-100 rounded-md outline-none text-base font-normal" placeholder="Email" name="position" value={formData.position} onChange={handleInputChange} required />
                    <div class='flex flex-col relative max-w-sm w-full rounded-lg overflow-hidden mx-auto m-2'>
                        <textarea rows="4" maxLength="300" x-model="maximum" x-ref="maximum" placeholder="Say something nice..." name="message" value={formData.message} onChange={handleInputChange} required
                            className="block w-full mt-1 p-4 rounded-md shadow-sm focus:outline-none bg-gray-100 text-base font-normal z-0"></textarea>
                        <span className="absolute px-2 py-1 rounded right-2 bottom-2 text-xs font-normal text-gray-500 bg-gray-100 z-10">{formData.message.length}/300</span>
                    </div>
                    <input role="button" className="text-base font-normal relative gradient-border m-1 px-3 py-2 cursor-pointer rounded-xl flex items-center justify-center bg-black hover:bg-black hover:text-white opacity-95 hover:opacity-100 text-white disabled:cursor-not-allowed disabled:opacity-50" type="submit" />
                </form>
            </div>
            <Footer />
            {console.log("FORMDATA: ", formData)}
        </div>
    )
}

export default MessagePage;