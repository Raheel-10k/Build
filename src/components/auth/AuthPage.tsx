import React, { useState } from "react";
import { Mail, Lock, User, Building } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/userStore";

interface AuthFormData {
    name?: string;
    username: string;
    email?: string;
    password: string;
    clubName?: string;
    clubRole?: string;
}

export default function AuthPage() {
    const navigate = useNavigate();
    const setUser = useUserStore((state) => state.setUser);
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState<AuthFormData>({
        name: "",
        username: "",
        email: "",
        password: "",
        clubName: "",
        clubRole: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Mock authentication - In a real app, this would be an API call
        const mockUser = {
            id: "1",
            name: formData.name || "John Doe",
            username: formData.username,
            email: formData.email || "john@example.com",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
            ...(formData.clubName &&
                formData.clubRole && {
                    clubDetails: {
                        name: formData.clubName,
                        role: formData.clubRole,
                    },
                }),
        };

        setUser(mockUser);
        navigate("/home");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#1A1A1D]" >
            <div className="flex w-full max-w-4xl shadow-lg rounded-lg overflow-hidden">
                {/* Left Panel - Welcome Text */}
                <div className="bg-indigo-600 text-white p-12 hidden md:flex md:w-1/2 flex-col justify-center">
                    <h1 className="text-4xl font-bold mb-6">
                        Welcome to Community Hub
                    </h1>
                    <p className="text-lg text-indigo-100">
                        Connect, collaborate, and create amazing experiences
                        together.
                    </p>
                </div>

                {/* Right Panel - Auth Form */}
                <div className="w-full md:w-1/2 bg-[#e5e7eb] p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800">
                            {isLogin ? "Welcome Back!" : "Create Account"}
                        </h2>
                        <div className="mt-4 flex justify-center gap-4">
                            <button
                                onClick={() => setIsLogin(true)}
                                className={`px-4 py-2 ${
                                    isLogin
                                        ? "text-indigo-600 border-b-2 border-indigo-600"
                                        : "text-gray-500"
                                }`}
                            >
                                Login
                            </button>
                            <button
                                onClick={() => setIsLogin(false)}
                                className={`px-4 py-2 ${
                                    !isLogin
                                        ? "text-indigo-600 border-b-2 border-indigo-600"
                                        : "text-gray-500"
                                }`}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {!isLogin && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Full Name
                                    </label>
                                    <div className="mt-1 relative">
                                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                        <input
                                            type="text"
                                            required
                                            className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                            placeholder="John Doe"
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    name: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Club Name
                                    </label>
                                    <div className="mt-1 relative">
                                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                        <input
                                            type="text"
                                            className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                            placeholder="Tech Club"
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    clubName: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Role in Club
                                    </label>
                                    <div className="mt-1 relative">
                                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                        <input
                                            type="text"
                                            className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                            placeholder="President, Member, etc."
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    clubRole: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                            </>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Username
                            </label>
                            <div className="mt-1 relative">
                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <input
                                    type="text"
                                    required
                                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="username"
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            username: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>

                        {!isLogin && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Email Address
                                </label>
                                <div className="mt-1 relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                    <input
                                        type="email"
                                        required
                                        className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="you@example.com"
                                        onChange={(e) => {
                                            if (
                                                e.target.value.split("@")[1] ===
                                                    "isu.ac.in" ||
                                                "itm.edu"
                                            ) {
                                                setFormData({
                                                    ...formData,
                                                    email: e.target.value,
                                                });
                                            } else {
                                                e.target.value = "";
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1 relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <input
                                    type="password"
                                    required
                                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="••••••••"
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            password: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200"
                        >
                            {isLogin ? "Sign In" : "Create Account"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
