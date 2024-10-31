// pages/profile/page.js
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "@/app/index.css"; // Ensure this includes Tailwind CSS setup
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Profile = () => {
  const [supporters, setSupporters] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState("");
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    const fetchCookiesData = async () => {
      try {
        const response = await axios.get("/api/protected", {
          withCredentials: true, // Allows sending cookies with request
        });
      } catch (error) {
        console.error("Failed to fetch protected data:", error);
        router.push("/login");
      }
    };

    if (sessionStatus === "unauthenticated") {
        fetchCookiesData();
    }
  }, [sessionStatus, router]);

  useEffect(() => {
    const fetchSupporters = async () => {
      try {
        const response = await axios.get("/api/getSupporters");
        const data = response.data;
        if (data && Array.isArray(data.supporters)) {
          setSupporters(data.supporters);
        } else {
          console.error("Fetched data is not an array:", data);
          setSupporters([]);
        }
      } catch (error) {
        console.error("Error fetching supporters:", error);
      }
    };
    fetchSupporters();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && message && amount) {
      const newSupporter = {
        name,
        message,
        amount: `$${amount}`,
      };
      try {
        const response = await axios.post("/api/saveSupporter", {
          name,
          message,
          amount: `$${amount}`,
        });
        if (response.status === 200) {
          setSupporters([newSupporter, ...supporters]);
          setName("");
          setMessage("");
          setAmount("");
        } else {
          alert("An error occurred while saving the supporter.");
        }
      } catch (error) {
        console.error("Error saving supporter:", error);
      }
    }
  };

  return (
    <>
      <div className="relative">
        <Image
          className="w-full h-[50vh] object-cover object-center"
          src="" // Vibrant Background Image
          alt="Background Image"
          width={1920}
          height={810}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center bg-black bg-opacity-50 p-5 rounded-lg shadow-lg">
          <Image
            src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/aa52624d1cef47ba91c357da4a7859cf/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/4.gif?token-time=1721952000&token-hash=K1x4QNfKdby2GOrqWVGFm-GowwJ08qZFEDvbeDfQdkc%3D"
            alt="Creator Public Page Avatar"
            width={150}
            height={150}
            className="w-36 h-36 rounded-full mb-4 border-4 border-blue-500 shadow-lg transform transition duration-500 hover:scale-105"
          />
          <h3 className="text-white text-3xl font-bold">@Subhan Ramzan</h3>
          <p className="text-white opacity-70">
            Creating Animated art For VITs
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-10 md:mt-20">
        <div className="flex flex-col md:flex-row w-[95vw] md:w-[80vw] overflow-hidden gap-6 mt-6">
          <div
            className="md:w-1/2 w-full p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #4e54c8 0%, #8f94fb 100%)", // Updated Gradient
            }}
          >
            <h3 className="text-center text-white text-2xl font-bold mb-4">
              Payment
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <input
                placeholder="Enter Name"
                className="bg-white text-gray-800 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                placeholder="Enter Message"
                className="bg-white text-gray-800 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <input
                placeholder="Enter Amount"
                className="bg-white text-gray-800 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <button className="bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-bold py-2 px-4 rounded-lg">
                Pay
              </button>
            </form>
          </div>
          <div
            className="md:w-1/2 w-full p-5 space-y-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #fc5c7d 0%, #6a82fb 100%)", // Updated Gradient
            }}
          >
            <h3 className="text-center text-white text-2xl font-bold">
              Supporters
            </h3>
            {supporters.map((supporter, index) => (
              <p key={index} className="text-white">
                <strong>{supporter.name}</strong> donated{" "}
                <span className="font-bold">{supporter.amount}</span> with a
                message: <em>{supporter.message}</em>
              </p>
            ))}
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-gray-400">9,1729 members . 82 posts . $15,450</p>
        </div>
      </div>
    </>
  );
};

export default Profile;
