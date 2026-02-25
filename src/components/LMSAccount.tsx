import { LogOut, ChevronDown } from 'lucide-react';

export const LMSAccount = () => {
    return (
        <div className="flex flex-col h-full bg-white text-[#414042] relative overflow-y-auto no-scrollbar">
            {/* Header */}
            <div className="flex justify-between items-center p-6 px-10">
                <div className="flex-1"></div>
                <h1 className="text-xl font-bold tracking-tight text-center flex-1">Account</h1>
                <div className="flex-1 flex justify-end">
                    <button className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-800 transition-colors">
                        <LogOut size={18} />
                        Sign Out
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="px-10 pb-10 flex flex-col gap-8 max-w-[1000px] mx-auto w-full">

                {/* Blue Hero Banner Card */}
                <div className="relative w-full h-[220px] bg-gradient-to-b from-[#77A3B7] to-[#8eb7cb] rounded-3xl overflow-hidden shadow-md flex items-center px-10 border border-[#77A3B7]/50">

                    {/* Decorative Clouds & Plane */}
                    <svg className="absolute top-4 left-20 opacity-80" width="80" height="40" viewBox="0 0 24 24" fill="white">
                        <path d="M17.5 19c-2.485 0-4.5-2.015-4.5-4.5 0-.466.071-.914.202-1.334C12.56 12.441 11.524 12 10.375 12 8.511 12 7 13.511 7 15.375c0 .351.054.69.155 1.009C5.378 16.538 4 18.113 4 20h13.5z" />
                        <circle cx="16" cy="14" r="3" fill="white" />
                    </svg>
                    <svg className="absolute bottom-4 right-1/4 opacity-90" width="100" height="50" viewBox="0 0 24 24" fill="white">
                        <path d="M17.5 19c-2.485 0-4.5-2.015-4.5-4.5 0-.466.071-.914.202-1.334C12.56 12.441 11.524 12 10.375 12 8.511 12 7 13.511 7 15.375c0 .351.054.69.155 1.009C5.378 16.538 4 18.113 4 20h13.5z" />
                    </svg>

                    {/* Fake 3D Plane */}
                    <div className="absolute -right-8 top-4">
                        <svg className="w-64 h-64 drop-shadow-2xl" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M150 100 Q180 100 180 110 Q180 120 150 120 L50 120 Q30 120 30 110 Q30 100 50 100 Z" fill="white" />
                            <path d="M40 105 L20 80 Q30 80 50 105 Z" fill="white" />
                            <path d="M110 110 L130 160 Q140 160 120 110 Z" fill="#E5E7EB" />
                            <path d="M110 110 L140 60 Q150 60 120 110 Z" fill="white" />
                            <path d="M160 105 Q170 105 170 110 Q170 115 160 115 L155 115 L155 105 Z" fill="#4B5563" />
                            <circle cx="80" cy="110" r="3" fill="#4B5563" />
                            <circle cx="100" cy="110" r="3" fill="#4B5563" />
                            <circle cx="120" cy="110" r="3" fill="#4B5563" />
                        </svg>
                    </div>

                    {/* Interactive Box */}
                    <div className="relative z-10 w-full max-w-[600px] grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold tracking-widest text-white/90 uppercase">License</label>
                            <div className="flex justify-between items-center bg-white rounded-xl p-4 cursor-pointer shadow-sm">
                                <span className="font-semibold text-gray-700">ATPL(A)</span>
                                <ChevronDown size={18} className="text-[#F6C94A]" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold tracking-widest text-white/90 uppercase">Examining Authority</label>
                            <div className="flex justify-between items-center bg-white rounded-xl p-4 cursor-pointer shadow-sm border-[2px] border-[#F6C94A]">
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
                                        <div className="w-3 h-3 bg-white rounded-full"></div>
                                    </div>
                                    <span className="font-bold text-gray-800 text-sm">All examining authorities</span>
                                </div>
                                <ChevronDown size={18} className="text-[#F6C94A]" />
                            </div>
                        </div>
                    </div>

                </div>

                {/* Profile Form */}
                <div className="flex flex-col gap-6 w-full">
                    <span className="text-[11px] font-bold tracking-widest text-gray-400 uppercase">Profile Information</span>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-semibold text-gray-600">First Name</label>
                            <input type="text" defaultValue="sai" className="w-full p-4 bg-gray-50/80 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C1272D] focus:ring-1 focus:ring-[#C1272D]/20 transition-all font-medium text-gray-800 shadow-sm" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-semibold text-gray-600">Last Name</label>
                            <input type="text" defaultValue="pendota" className="w-full p-4 bg-gray-50/80 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C1272D] focus:ring-1 focus:ring-[#C1272D]/20 transition-all font-medium text-gray-800 shadow-sm" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-semibold text-gray-600">Email</label>
                            <input type="email" defaultValue="pendotasaikumar08@gmail.com" className="w-full p-4 bg-gray-50/80 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C1272D] focus:ring-1 focus:ring-[#C1272D]/20 transition-all font-medium text-gray-800 shadow-sm" />
                            <div className="flex items-center gap-1 mt-1 pl-1">
                                <span className="text-[10px] text-gray-500 font-medium tracking-wide">Authorised via Google</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Disclaimer & Button */}
                <div className="flex flex-col items-center justify-center gap-8 mt-12 mb-8">
                    <p className="text-xs text-gray-500 font-medium text-center">
                        By proceeding to airhead I agree to receive informational emails. I can unsubscribe anytime on the Account page.
                    </p>
                    <button className="px-12 py-4 bg-[#F6C94A] hover:bg-[#F2C94C] text-[#414042] font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all w-max min-w-[300px]">
                        Save and Continue
                    </button>
                </div>

            </div>
        </div>
    );
};
