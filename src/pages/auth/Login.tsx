import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, ArrowRight } from "lucide-react";
import rabbitAuth from "@/assets/rabbit-auth.png";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Login with:", email, password);
    };

    return (
        <div className="min-h-screen grid lg:grid-cols-2">
            {/* Left Side: Illustration & Branding */}
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
                            Welcome to <span className="text-orange-200">Rabbit Store.</span>
                        </h1>
                        <p className="text-orange-100 text-lg font-medium">
                            The fastest jumping store in the world. Hop in and start shopping!
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side: Form */}
            <div className="flex items-center justify-center p-6 md:p-12 bg-slate-50">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center lg:text-left space-y-2">
                        <h2 className="text-3xl font-bold text-slate-800">Login</h2>
                        <p className="text-slate-500 font-medium">Please enter your details to sign in.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                            <div className="relative group">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500 transition-colors" size={20} />
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-sm"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between ml-1">
                                <label className="text-sm font-semibold text-slate-700">Password</label>
                                <Link to="#" className="text-xs font-bold text-orange-600 hover:text-orange-700 transition">Forgot Password?</Link>
                            </div>
                            <div className="relative group">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500 transition-colors" size={20} />
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-sm"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-2xl shadow-lg shadow-orange-600/20 flex items-center justify-center gap-2 group transition-all"
                        >
                            Sign In
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </button>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-slate-200"></span>
                        </div>
                    </div>

                    <p className="text-center text-slate-500 font-medium">
                        Don't have an account?{" "}
                        <Link to="/register" className="text-orange-600 font-bold hover:underline transition underline-offset-4">
                            Create Account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}