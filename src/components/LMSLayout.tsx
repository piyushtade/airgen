import { Outlet, NavLink } from 'react-router-dom';

export const LMSLayout = () => {
    return (
        <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center p-4 lg:p-12 font-sans relative overflow-hidden">

            {/* Background Decoratives based on Image 5 & margins */}
            <div className="absolute top-10 right-20 opacity-30 pointer-events-none hidden lg:block">
                <svg width="200" height="100" viewBox="0 0 24 24" fill="#E5E7EB">
                    <path d="M17.5 19c-2.485 0-4.5-2.015-4.5-4.5 0-.466.071-.914.202-1.334C12.56 12.441 11.524 12 10.375 12 8.511 12 7 13.511 7 15.375c0 .351.054.69.155 1.009C5.378 16.538 4 18.113 4 20h13.5z" />
                </svg>
            </div>

            <div className="absolute bottom-10 left-20 opacity-40 pointer-events-none hidden lg:block">
                <svg width="300" height="150" viewBox="0 0 24 24" fill="#E5E7EB">
                    <path d="M17.5 19c-2.485 0-4.5-2.015-4.5-4.5 0-.466.071-.914.202-1.334C12.56 12.441 11.524 12 10.375 12 8.511 12 7 13.511 7 15.375c0 .351.054.69.155 1.009C5.378 16.538 4 18.113 4 20h13.5z" />
                </svg>
            </div>

            <div className="absolute bottom-10 right-10 opacity-20 pointer-events-none">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                    <path d="M0 100L50 50L100 100" stroke="#C1272D" strokeWidth="10" />
                </svg>
            </div>

            <div className="absolute top-1/4 right-0 transform translate-x-1/2 -rotate-12 opacity-80 pointer-events-none hidden lg:block">
                <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
                    <path d="M0 20 L20 20 L40 0 L100 0 L100 10 L45 10 L30 30 L0 30 Z" fill="#C1272D" />
                </svg>
                <line x1="80" y1="5" x2="300" y2="5" stroke="#C1272D" strokeWidth="1" opacity="0.5" />
            </div>

            {/* Main Application Window wrapper for horizontal scrolling if needed */}
            <div className="w-full h-full lg:h-[85vh] lg:min-h-[700px] overflow-x-auto no-scrollbar flex items-center justify-start lg:justify-center p-4">
                <div className="w-full min-w-[1000px] max-w-[1100px] h-[85vh] min-h-[700px] bg-white rounded-[40px] border-[3px] border-[#C1272D] shadow-2xl overflow-hidden relative z-10 flex flex-col shrink-0">
                    <Outlet />
                </div>
            </div>

            {/* Minimal Navigation Toggle (For Demo access between the two screenshot states) */}
            <div className="fixed bottom-6 bg-white border border-gray-200 shadow-lg rounded-full px-2 py-2 flex gap-2 z-50">
                <NavLink
                    to="/lms/generator"
                    className={({ isActive }) => `px-6 py-2 rounded-full text-sm font-semibold transition-all ${isActive ? 'bg-[#C1272D] text-white shadow-md' : 'text-gray-500 hover:bg-gray-100'}`}
                >
                    Generator
                </NavLink>
                <NavLink
                    to="/lms/progress"
                    className={({ isActive }) => `px-6 py-2 rounded-full text-sm font-semibold transition-all ${isActive ? 'bg-[#C1272D] text-white shadow-md' : 'text-gray-500 hover:bg-gray-100'}`}
                >
                    Progress
                </NavLink>
                <NavLink
                    to="/lms/account"
                    className={({ isActive }) => `px-6 py-2 rounded-full text-sm font-semibold transition-all ${isActive ? 'bg-[#C1272D] text-white shadow-md' : 'text-gray-500 hover:bg-gray-100'}`}
                >
                    Account
                </NavLink>
            </div>
        </div>
    );
};
