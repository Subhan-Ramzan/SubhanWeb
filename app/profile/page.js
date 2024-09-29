// pages/profile/page.js
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/app/index.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Image } from "lucide-react";

const Profile = () => {
  const [supporters, setSupporters] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState("");
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "unauthenticated") {
      router.push("/login");
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
          className="w-[100vw] h-[45vh] object-cover object-left-bottom"
          src="Background.png"
          alt="Background Image"
        />
      </div>
      <div className="absolute top-[42vh] md:top-[30vh] left-1/2 transform -translate-x-1/2 flex flex-col items-center text-center">
        <Image
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/aa52624d1cef47ba91c357da4a7859cf/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/4.gif?token-time=1721952000&amp;token-hash=K1x4QNfKdby2GOrqWVGFm-GowwJ08qZFEDvbeDfQdkc%3D"
          alt="Creator Public Page Avatar"
          data-tag="creator-public-page-avatar"
          className="w-[150px] h-[150px] rounded-full mb-4"
        />
        <h3>@Subhan Ramzan</h3>
        <p className="opacity-40">Creating Animated art For VITs</p>
      </div>
      <div className="flex flex-col items-center mt-[22vh] md:mt-[10vh]">
        <div className="flex flex-col md:flex-row w-[95vw] md:w-[80vw]  overflow-auto gap-3 mt-2">
          <div
            className="md:w-[50%] w-[98vw] p-5 rounded-lg"
            style={{
              background:
                "radial-gradient(125% 125% at 50% 10%, #444 40%, #63e 100%)",
            }}
          >
            <h3 className="text-center font-bold text-2xl mb-[2vh]">Payment</h3>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
              <input
                placeholder="Enter Name"
                className="bg-gray-600 text-white py-2 px-4 rounded-lg"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                placeholder="Enter Message"
                className="bg-gray-600 text-white py-2 px-4 rounded-lg"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <input
                placeholder="Enter Amount"
                className="bg-gray-600 text-white py-2 px-4 rounded-lg"
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <button className="bg-gradient-to-r from-purple-700 to-blue-600 hover:from-purple-800 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                Pay
              </button>
            </form>
          </div>
          <div
            className="md:w-[50%] w-[98vw] p-5 space-y-2 rounded-lg overflow-auto"
            style={{
              background:
                "radial-gradient(125% 125% at 50% 10%, #444 40%, #63e 100%)",
            }}
          >
            <h3 className="text-center font-bold text-2xl">Supporters</h3>
            {supporters.map((supporter, index) => (
              <p key={index}>
                {supporter.name} donated {supporter.amount} with a message `
                {supporter.message}`
              </p>
            ))}
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="opacity-40">9,1729 members . 82 posts . $15,450</p>
        </div>
      </div>
    </>
  );
};

export default Profile;
