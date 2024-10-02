import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {
    const [form, setForm] = useState({ site: "", username: "", password: "" });
    const [passList, setPassList] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const getPasswords = async () => {
        try {
            const response = await fetch("http://localhost:3000/");
            const storedPassList = await response.json();
            setPassList(storedPassList);
        } catch (error) {
            console.error("Error fetching passwords:", error);
        }
    };

    useEffect(() => {
        getPasswords();
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        if (form.site && form.username && form.password) {
            try {
                if (editIndex !== null) {
                    await fetch("http://localhost:3000/", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ ...form, id: passList[editIndex]._id })
                    });
                    const updatedPassList = [...passList];
                    updatedPassList[editIndex] = { ...form, _id: passList[editIndex]._id };
                    setPassList(updatedPassList);
                    setEditIndex(null);
                } else {
                    const response = await fetch("http://localhost:3000/", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(form)
                    });
                    const result = await response.json();
                    setPassList([...passList, { ...form, _id: result.result.insertedId }]);
                }
                setForm({ site: "", username: "", password: "" });
                toast('Saved Successfully!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            } catch (error) {
                console.error("Error saving password:", error);
            }
        }
    };

    const handleDelete = async (index) => {
        try {
            await fetch("http://localhost:3000/", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: passList[index]._id })
            });
            const updatedPassList = [...passList];
            updatedPassList.splice(index, 1);
            setPassList(updatedPassList);
            toast('Password Deleted!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } catch (error) {
            console.error("Error deleting password:", error);
        }
    };


    const handleEdit = (index) => {
        setForm(passList[index]);
        setEditIndex(index);
    };

    return (
        <div className="min-h-[79.2vh] justify-center flex bg-green-300 p-8 bg-gradient-to-r from-blue-500 to-purple-600 overflow-auto">
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className="text-center w-[98vw] md:w-4/5 lg:w-4/5 xl:w-4/5 overflow-auto">
                <div className="text-2xl font-bold text-white">
                    <span className="text-green-400">&lt;</span>
                    <span>Safe</span>
                    <span className="text-green-400">Pass/&gt;</span>
                </div>
                <div className="text-lg text-white">
                    Your own Password Manager
                </div>
                <div className="gap-4 w-full mt-4 ">
                    <div className="mb-4 ">
                        <input
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
                            placeholder="Enter a Website Url"
                            type="url"
                            value={form.site}
                            onChange={handleChange}
                            name="site"
                            id="site"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row md:space-x-2">
                        <input
                            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
                            placeholder="Enter a Username"
                            type="text"
                            value={form.username}
                            onChange={handleChange}
                            name="username"
                            id="username"
                        />
                        <input
                            className="mt-2 md:mt-0 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
                            placeholder="Enter a Password"
                            type="password"
                            value={form.password}
                            onChange={handleChange}
                            name="password"
                            id="password"
                        />
                    </div>
                </div>
                <div className="flex justify-center mt-2">
                    <button
                        className={`font-bold mt-2 px-5 py-1 rounded-full flex justify-center items-center text-black ${form.site && form.username && form.password ? 'bg-green-400 hover:bg-green-500' : 'bg-gray-400 cursor-not-allowed'}`}
                        onClick={handleSubmit}
                        disabled={!form.site || !form.username || !form.password}
                    >
                        <lord-icon
                            src="https://cdn.lordicon.com/hqymfzvj.json"
                            trigger="hover"
                            className="w-6 h-6 ml-2">
                        </lord-icon>
                        {editIndex !== null ? "Update" : "Save"}
                    </button>
                </div>
                {passList.length > 0 && (
                    <div className="overflow-auto">
                        <table className="w-[80vw] mt-3 bg-white border border-gray-200 rounded-lg shadow-lg">
                            <thead className="bg-gray-800 text-white">
                                <tr>
                                    <th className="py-1 px-1 md:py-2 md:px-6 size-1 font-normal md:font-semibold uppercase tracking-wider">Website</th>
                                    <th className="py-1 px-1 md:py-2 md:px-6 size-1 font-normal md:font-semibold uppercase tracking-wider">Username</th>
                                    <th className="py-1 px-1 md:py-2 md:px-6 size-1 font-normal md:font-semibold uppercase tracking-wider">Password</th>
                                    <th className="py-1 px-1 md:py-2 md:px-6 size-1 font-normal md:font-semibold uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {passList.map((entry, index) => (
                                    <tr key={index} className="hover:bg-gray-50 transition duration-300">
                                        <td className="py-1 px-1 md:px-6">{entry.site}</td>
                                        <td className="py-1 px-1 md:px-6">{entry.username}</td>
                                        <td className="py-1 px-1 md:px-6">{entry.password}</td>
                                        <td className="py-1 px-1 md:px-6 space-x-2">
                                            <span className="cursor-pointer mx-1" onClick={() => { handleEdit(index) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/gwlusjdu.json"
                                                    trigger="hover"
                                                    style={{ width: "25px", height: "25px" }}>
                                                </lord-icon>
                                            </span>
                                            <span className="cursor-pointer mx-1" onClick={() => { handleDelete(index) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/skkahier.json"
                                                    trigger="hover"
                                                    style={{ width: "25px", height: "25px" }}>
                                                </lord-icon>
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Manager;

