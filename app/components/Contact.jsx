"use client";
import { useState } from "react";
import emailjs from 'emailjs-com'; 
import { toast } from 'react-toastify'; 
import { Toaster } from "react-hot-toast";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [isSending, setIsSending] = useState(false);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        let errors = {};
        if (!formData.name) errors.name = "Nama dibutuhkan";
        if (!formData.email) {
            errors.email = "Email dibutuhkan";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email tidak valid";
        }
        if (!formData.message) errors.message = "Pesan dibutuhkan";
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validateErrors = validate();
        if (Object.keys(validateErrors).length > 0) {
            setErrors(validateErrors);
        } else {
            setErrors({});
            setIsSending(true);

            try {
                const response = await emailjs.send(
                    "service_3r9kwqb",
                    "template_vh4by8r",
                    formData,
                    "My2KpOLOD5TzXB-54"
                );
                console.log("SUKSES", response.status, response.text);
                toast.success("Pesan berhasil dikirim");
                setFormData({ name: "", email: "", message: "" });
            } catch (error) {
                console.log("GAGAL", error);
                toast.error("Gagal mengirim pesan. Dimohon untuk mencoba nanti");
            } finally {
                setIsSending(false);
            }
        }
    };

    return (
        <>
            <Toaster />
            <div className="my-24">
                <div className="line-container relative flex justify-center items-center">
                    <div className="line w-full h-[2px] bg-neutral-900"></div> {/* Garis */}
                    <div className="circle w-8 h-8 rounded-full bg-[#00b894] absolute"></div> {/* Lingkaran */}
                </div>
            </div>

            <h2 className="articles-text my-12 text-center text-2xl font-semibold tracking-wide text-slate-100">
                Kontak
            </h2>
            <form onSubmit={handleSubmit} className="mx-auto max-w-xl p-4 space-y-4">
                <div>
                    <input 
                        type='text' 
                        id="name"
                        name="name"
                        value={formData.name} 
                        placeholder="Nama"
                        onChange={handleChange}
                        className="w-full appearance-none rounded-lg border border-slate-800 bg-transparent px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                    />
                    {errors.name && (
                        <p className="text-sm text-pink-700">{errors.name}</p>
                    )}
                </div>
                <div>
                    <input 
                        type='email' 
                        id="email"
                        name="email"
                        value={formData.email} 
                        placeholder="Masukkan Email"
                        onChange={handleChange}
                        className="w-full appearance-none rounded-lg border border-slate-800 bg-transparent px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                    />
                    {errors.email && (
                        <p className="text-sm text-pink-700">{errors.email}</p>
                    )}
                </div>
                <div>
                    <textarea 
                        id="message"
                        name="message"
                        value={formData.message} 
                        placeholder="Masukkan Pesan Disini"
                        onChange={handleChange}
                        rows={4}
                        className="w-full appearance-none rounded-lg border border-slate-800 bg-transparent px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                    />
                    {errors.message && (
                        <p className="text-sm text-pink-700">{errors.message}</p>
                    )}
                </div>
                <button 
                    type="submit" 
                    disabled={isSending} 
                    className={`w-full rounded-lg bg-blue-600 text-white px-4 py-2 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}>
                    {isSending ? 'Mengirim...' : 'Kirim Pesan'}
                </button>
            </form>
        </>
    );
};

export default Contact;
