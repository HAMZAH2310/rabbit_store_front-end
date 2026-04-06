import React, { useState } from "react";
import { Link } from "react-router-dom";
import { User, Lock, Home, Phone, ArrowRight } from "lucide-react";
import rabbitAuth from "@/assets/rabbit-auth.png";

export default function Register() {
    const [formData, setFormData] = useState({
        username: "",
        fullName: "",
        address: "",
        phone: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Registering with:", formData);
    };

    return (
        <div className="min-h-screen grid lg:grid-cols-2">
            {/* Left Side: Branding */}
            <div className="hidden lg:flex flex-col items-center justify-center bg-orange-600 p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-400/20 rounded-full blur-3xl -ml-32 -mb-32 animate-pulse" />

                <div className="relative z-10 text-center space-y-6 max-w-md">
                    <img
                        src={rabbitAuth}
                        alt="Rabbit Store Illustration"
                        className="w-full max-w-xs mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500 rounded-full bg-white/10 p-4 backdrop-blur-sm"
                    />
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold tracking-tight px-4 py-2 bg-white/10 backdrop-blur-md rounded-2xl inline-block">
                            Join the <span className="text-orange-200 underline decoration-wavy underline-offset-8">Rabbit Clan</span>
                        </h1>
                        <p className="text-orange-100 text-lg font-medium">
                            Create an account and hop towards your first purchase with exclusive discounts!
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side: Form */}
            <div className="flex items-center justify-center p-6 md:p-12 bg-slate-50">
                <div className="w-full max-w-md space-y-6">
                    <div className="text-center lg:text-left space-y-2">
                        <h2 className="text-3xl font-bold text-slate-800">Create Account</h2>
                        <p className="text-slate-500 font-medium">Join us today to get started.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 ml-1">Username</label>
                                <div className="relative group">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500 transition-colors shadow-sm" size={18} />
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="e.g. bunny"
                                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium"
                                        value={formData.username}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                                <div className="relative group">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500 transition-colors shadow-sm" size={18} />
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="John Doe"
                                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700 ml-1">Address</label>
                            <div className="relative group">
                                <Home className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500 transition-colors" size={18} />
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Jl. Rabbit No. 7"
                                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium shadow-sm"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700 ml-1">Phone Number</label>
                            <div className="relative group">
                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500 transition-colors" size={18} />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="+62 812-3456-7890"
                                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium shadow-sm"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700 ml-1">Password</label>
                            <div className="relative group">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500 transition-colors transition-all duration-300 shadow-sm" size={18} />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="••••••••"
                                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-2xl shadow-lg shadow-orange-600/20 flex items-center justify-center gap-2 group transition-all"
                        >
                            Sign Up
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </button>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-slate-200"></span>
                        </div>
                    </div>

                    <p className="text-center text-slate-500 font-medium">
                        Already have an account?{" "}
                        <Link to="/login" className="text-orange-600 font-bold hover:underline transition underline-offset-4">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
