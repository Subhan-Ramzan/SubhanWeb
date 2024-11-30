"use client"
import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from "next/navigation";
import Link from 'next/link';
export default function VerifyPage() {
    const [value, setValue] = useState('');  // To store token value
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);  // To control button disable state
    const router = useRouter()

    const handleChange = (e) => {
        const token = e.target.value
        setValue(token)
        setIsButtonEnabled(token.length === 64 ? true : false)
    }

    const handleSubmit = async () => {
        try {
            if (isButtonEnabled) {
                const response = await axios.post('/api/verify', { token: value })
                console.log(response.data);
                router.push('/login')
            }
            else {
                alert('Enter a token value of your Gmail');
            }
        } catch (error) {
            console.error('Verification failed', error);
            alert('Verification failed');
        }
    }

    return (
        <div className="p-6 pt-24 max-w-sm mx-auto">
            <label htmlFor="token" className="block mb-2 text-lg text-center font-bold text-gray-100">
                Token
            </label>
            <input
                id="token"
                placeholder='Enter a Token Value'
                value={value}
                onChange={handleChange}
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                onClick={handleSubmit}
                className={`w-full p-3 text-white rounded-lg ${isButtonEnabled ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'
                    }`}
            >
                Click Verify
            </button>
            <p className="mt-6 text-center text-sm text-white">
                Verify With Otp ?{" "}
                <Link
                    href="/verify-otp"
                    className="font-semibold leading-6 text-blue-500 hover:text-blue-300 transition duration-200"
                >
                    Click Me
                </Link>
            </p>
        </div>
    );
}
