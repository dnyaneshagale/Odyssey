import React from 'react';
import { Link } from 'react-router-dom';
import { Target, TrendingUp, Brain, Zap, CheckCircle, Calendar } from 'lucide-react';

const LandingPage = () => {
    const NavLink = ({ children, href }) => (
        <a href={href} className="text-gray-600 hover:text-gray-900 transition duration-150 font-medium text-lg">
            {children}
        </a>
    );

    const Header = () => (
        <div className="pt-8 px-4 sm:px-6 lg:px-8 bg-[#f6f5f1]">
            <div className="max-w-6xl mx-auto bg-white rounded-[50px] shadow-sm px-8 py-4">
                <header className="flex justify-between items-center w-full flex-wrap gap-4">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                            <Target className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-extrabold tracking-tight text-gray-900">
                            Odyssey
                        </span>
                    </div>

                    <nav className="flex items-center space-x-6">
                        <div className="hidden md:flex space-x-8">
                            <NavLink href="#benefits">Benefits</NavLink>
                            <NavLink href="#features">Features</NavLink>
                            <NavLink href="#how-it-works">How it works</NavLink>
                        </div>

                        <Link
                            to="/sign-in"
                            className="max-sm:hidden flex items-center space-x-2 bg-black text-white font-semibold py-3 px-6 rounded-full shadow-xl hover:bg-gray-800 transition-all transform hover:scale-95"
                        >
                            <span>Go To App</span>
                        </Link>
                    </nav>
                </header>
            </div>
        </div>
    );

    const HeroSection = () => (
        <main className="text-center pt-20 pb-0 px-4 sm:px-6 lg:px-8 bg-[#f6f5f1]">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-semibold tracking-tighter text-gray-900 max-w-4xl mx-auto leading-none">
                Master Your Habits, <br /> Transform Your Life
            </h1>

            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
                Experience a smarter approach to personal growth. <br/>
                Track your progress, build consistency, and unlock your full potential.
            </p>

            <div className="mt-10">
                <Link
                    to="/sign-in"
                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-lg font-semibold rounded-full shadow-xl text-black bg-yellow-400 hover:bg-yellow-500 transition-all transform hover:scale-95"
                >
                    Start Your Journey
                </Link>
            </div>

            <div className="flex justify-center items-center mt-16">
                <div className="relative w-full max-w-4xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-3xl opacity-20"></div>
                    <div className="relative bg-white rounded-3xl shadow-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-2xl flex items-center justify-center mb-3">
                                <Target className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900">Goal Setting</h3>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-green-100 rounded-2xl flex items-center justify-center mb-3">
                                <TrendingUp className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900">Track Progress</h3>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-purple-100 rounded-2xl flex items-center justify-center mb-3">
                                <Brain className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900">Study Smart</h3>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-orange-100 rounded-2xl flex items-center justify-center mb-3">
                                <Zap className="w-8 h-8 text-orange-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900">Stay Motivated</h3>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );

    const DecisionSection = () => (
        <section id="features" className="max-w-[1200px] px-4 sm:px-6 lg:px-24 py-24 mx-auto bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-5xl font-semibold font-sans text-gray-900 leading-tight">
                        Your Progress <br /> Perfectly Tracked
                    </h2>
                    <p className="mt-6 text-lg text-gray-600 max-w-md">
                        Odyssey makes building habits simple and rewarding, helping you understand your patterns and make consistent progress toward your goals.
                    </p>

                    <Link to="/sign-in" className="mt-10 inline-flex items-center bg-black text-white font-semibold py-3 px-6 rounded-full shadow-xl hover:bg-gray-800 transition-all transform hover:scale-95">
                        Get Started Free
                    </Link>
                </div>

                <div className="relative flex justify-center">
                    <div className="max-sm:w-4/5 w-full rounded-[40px] overflow-hidden shadow-xl bg-gradient-to-br from-blue-50 to-purple-50 p-8">
                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Today's Progress</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="w-6 h-6 text-green-600" />
                                        <span className="font-medium text-gray-900">Morning Workout</span>
                                    </div>
                                    <span className="text-sm font-semibold text-green-600">Completed</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                                    <div className="flex items-center space-x-3">
                                        <Brain className="w-6 h-6 text-blue-600" />
                                        <span className="font-medium text-gray-900">Study Session</span>
                                    </div>
                                    <span className="text-sm font-semibold text-blue-600">2h 30m</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                                    <div className="flex items-center space-x-3">
                                        <Calendar className="w-6 h-6 text-purple-600" />
                                        <span className="font-medium text-gray-900">Daily Goal</span>
                                    </div>
                                    <span className="text-sm font-semibold text-purple-600">8/10</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-[-30px] lg:-left-20 lg:bottom-[30px] bg-white/95 backdrop-blur-sm border shadow-2xl rounded-2xl p-6 w-[280px]">
                        <h4 className="text-sm font-semibold text-gray-900 mb-4">🔥 Current Streak</h4>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                                21
                            </div>
                            <p className="text-sm text-gray-600 mt-2">Days in a row!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    const BenefitsSection = () => (
        <section id="benefits" className="max-w-[1200px] px-4 sm:px-6 lg:px-24 py-24 mx-auto bg-gradient-to-b from-white to-gray-50">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Why Choose Odyssey?
                </h2>
                <p className="text-xl text-gray-600">
                    Everything you need to build lasting habits
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                        <Target className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Goal Setting</h3>
                    <p className="text-gray-600">
                        Set realistic goals and break them down into manageable daily tasks.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                        <TrendingUp className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Progress Analytics</h3>
                    <p className="text-gray-600">
                        Visualize your journey with detailed statistics and insights.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                        <Brain className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Study Management</h3>
                    <p className="text-gray-600">
                        Organize your learning schedule and track study sessions effectively.
                    </p>
                </div>
            </div>
        </section>
    );

    const DarkHero = () => (
        <section id="how-it-works" className="w-full bg-[#171706] text-white pt-24 pb-16 px-6">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl lg:text-5xl font-semibold leading-tight">
                        Build consistency, <br /> achieve greatness, <br /> stay motivated every day.
                    </h2>
                    <p className="mt-6 text-lg text-gray-300 max-w-md">
                        Join thousands of users who transformed their lives with Odyssey's simple yet powerful habit tracking system.
                    </p>

                    <Link to="/sign-up" className="mt-10 inline-flex items-center bg-yellow-400 text-black font-semibold py-3 px-8 rounded-full shadow-xl hover:bg-yellow-500 transition-all transform hover:scale-95">
                        Start Free Today
                    </Link>
                </div>

                <div className="flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur-2xl opacity-30"></div>
                        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl">
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4 p-4 bg-gray-700/50 rounded-xl">
                                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                                        <CheckCircle className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium">Track Daily Tasks</p>
                                        <p className="text-gray-400 text-sm">Never miss a beat</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 p-4 bg-gray-700/50 rounded-xl">
                                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                                        <TrendingUp className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium">Monitor Progress</p>
                                        <p className="text-gray-400 text-sm">See your growth</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 p-4 bg-gray-700/50 rounded-xl">
                                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                                        <Zap className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium">Earn Achievements</p>
                                        <p className="text-gray-400 text-sm">Unlock rewards</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    const Footer = () => (
        <footer className="w-full bg-white py-12 px-6 border-t">
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                        <Target className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xl font-semibold text-gray-900">Odyssey</span>
                </div>

                <div className="flex flex-wrap justify-center gap-6 text-gray-600 text-lg">
                    <a href="#benefits" className="hover:text-black">Benefits</a>
                    <a href="#features" className="hover:text-black">Features</a>
                    <a href="#how-it-works" className="hover:text-black">How it works</a>
                    <Link to="/sign-in" className="hover:text-black">Sign In</Link>
                </div>

                <div className="text-gray-500 text-sm">
                    © 2026 Odyssey. All rights reserved.
                </div>
            </div>
        </footer>
    );

    return (
        <div className="min-h-screen font-sans overflow-x-hidden">
            <Header />
            <HeroSection />
            <DecisionSection />
            <BenefitsSection />
            <DarkHero />
            <Footer />
        </div>
    );
};

export default LandingPage;
