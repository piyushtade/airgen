import { ArrowLeft, ChevronDown, Check, CheckSquare, XSquare, Clock, MoreVertical, Hourglass } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const LMSProgress = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-full bg-white text-[#414042] relative overflow-y-auto no-scrollbar">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100 flex-shrink-0">
                <button onClick={() => navigate('/generator')} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
                    <ArrowLeft size={24} />
                </button>
                <h1 className="text-xl font-bold tracking-tight">Supersonic Progress</h1>
                <div className="w-10"></div> {/* Spacer for centering */}
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">

                {/* Left Column - Controls */}
                <div className="w-full lg:w-[40%] p-8 lg:pr-4 overflow-y-auto no-scrollbar flex flex-col gap-6 border-r border-gray-50">

                    {/* Dropdowns */}
                    <div className="space-y-4">
                        <div className="flex flex-col gap-2">
                            <span className="text-xs font-bold text-gray-600 mb-1">Subjects</span>
                            <div className="flex justify-between items-center border border-gray-200 rounded-xl p-4 cursor-pointer hover:border-gray-300 transition-colors shadow-sm">
                                <span className="text-gray-800 font-medium">All Subjects</span>
                                <ChevronDown size={20} className="text-[#F6C94A]" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-xs font-bold text-gray-600 mb-1 mt-2">Topics</span>
                            <div className="flex justify-between items-center border border-gray-200 rounded-xl p-4 cursor-pointer hover:border-gray-300 transition-colors shadow-sm bg-gray-50/50">
                                <span className="text-gray-400 font-medium">All Topics</span>
                                <ChevronDown size={20} className="text-gray-400" />
                            </div>
                        </div>
                    </div>

                    {/* Filter Cards */}
                    <div className="space-y-3 mt-4">
                        {/* Selected Card */}
                        <div className="flex items-center justify-between p-4 rounded-xl bg-white text-gray-800 shadow-sm border border-yellow-400">
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 bg-[#F6C94A] rounded flex items-center justify-center">
                                    <Check size={14} className="text-white" />
                                </div>
                                <span className="font-semibold text-sm">Seen in last 90 days <span className="text-gray-400 font-normal ml-1">100</span></span>
                            </div>
                            <ChevronDown size={20} className="text-gray-400" />
                        </div>

                        {/* Unselected Cards */}
                        <div className="flex items-center justify-between p-4 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 cursor-pointer transition-colors shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 border border-gray-300 rounded"></div>
                                <span className="font-medium text-sm text-gray-600">Remaining last 300 <span className="text-gray-400 ml-1">300</span></span>
                            </div>
                            <ChevronDown size={20} className="text-gray-400" />
                        </div>

                        <div className="flex items-center justify-between p-4 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 cursor-pointer transition-colors shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 border border-gray-300 rounded"></div>
                                <span className="font-medium text-sm text-gray-600">Remaining all seen in exam <span className="text-gray-400 ml-1">2500</span></span>
                            </div>
                        </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center justify-between p-2 mt-4 border border-gray-200 rounded-xl shadow-sm">
                        <span className="pl-4 text-sm font-semibold text-gray-600">How many questions</span>
                        <div className="flex items-center gap-4 bg-gray-50 rounded-lg p-2">
                            <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-800 font-bold transition-colors">−</button>
                            <span className="font-bold w-10 text-center text-gray-800">100</span>
                            <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-800 font-bold transition-colors">+</button>
                        </div>
                    </div>
                </div>

                {/* Right Column - Results Dashboard */}
                <div className="w-full lg:w-[60%] p-8 overflow-y-auto no-scrollbar flex flex-col gap-8 bg-[#F8FAFC]/50 inset-shadow-sm">

                    {/* Summary Section */}
                    <div>
                        <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-4 block">Summary</span>

                        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col overflow-hidden relative">
                            {/* Blue top half */}
                            <div className="bg-[#78A4B6] h-36 flex flex-col items-center justify-center relative overflow-hidden">
                                <span className="text-5xl font-light text-[#F6C94A] drop-shadow-sm z-10 pt-2">88%</span>
                                <span className="text-gray-800 text-xs font-semibold z-10 mt-1">Average Score</span>

                                {/* Fake clouds */}
                                <div className="absolute -right-6 top-4 bg-white/20 w-24 h-12 rounded-full blur-xl"></div>
                                <div className="absolute right-10 -bottom-4 bg-white/40 w-32 h-20 rounded-t-full blur-md"></div>

                                {/* 3D CSS Mock Thumb */}
                                <div className="absolute left-10 bottom-0 flex z-10 drop-shadow-xl translate-y-3">
                                    <div className="text-[6rem] -scale-x-100 mb-0 leading-none">👍🏾</div>
                                </div>
                            </div>

                            {/* White bottom half stats */}
                            <div className="grid grid-cols-3 divide-x divide-gray-100 p-6">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center border border-green-100">
                                        <CheckSquare size={14} className="text-green-500" />
                                    </div>
                                    <span className="text-xs font-semibold text-gray-600 mt-2">10 tests passed</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center border border-red-100">
                                        <XSquare size={14} className="text-red-400" />
                                    </div>
                                    <span className="text-xs font-semibold text-gray-600 mt-2">10 tests failed</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-yellow-50 flex items-center justify-center border border-yellow-100">
                                        <Clock size={14} className="text-yellow-500" />
                                    </div>
                                    <span className="text-xs font-semibold text-gray-600 mt-2">20 tests in progress</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Time Spent Section */}
                    <div>
                        <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-4 block">Time Spent</span>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-[#78A4B6] text-white rounded-2xl p-4 flex items-center gap-4 shadow-md transform hover:-translate-y-1 transition-transform cursor-pointer">
                                <div className="border border-white/30 rounded-xl p-2 bg-white/10">
                                    <Hourglass size={18} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-lg">10h 32m</span>
                                    <span className="text-[10px] text-white/80 font-medium">Total</span>
                                </div>
                            </div>
                            <div className="bg-white border border-gray-100 text-gray-600 rounded-2xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                                <div className="bg-gray-50 border border-gray-100 text-[#78A4B6] rounded-xl p-2">
                                    <Hourglass size={18} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-gray-800 text-lg">1h 35m</span>
                                    <span className="text-[10px] text-gray-500 font-medium">Average Per Test</span>
                                </div>
                            </div>
                            <div className="bg-white border border-gray-100 text-gray-600 rounded-2xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                                <div className="bg-gray-50 border border-gray-100 text-[#78A4B6] rounded-xl p-2">
                                    <Hourglass size={18} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-gray-800 text-lg">1m 35s</span>
                                    <span className="text-[10px] text-gray-500 font-medium">Average Per Question</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tests History Section */}
                    <div className="pb-8">
                        <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-4 block">Tests History</span>

                        <div className="flex flex-col gap-3">
                            <div className="bg-white border border-gray-100 p-4 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="bg-yellow-50 border border-yellow-100 text-yellow-500 p-2 rounded-lg">
                                        <CheckSquare size={18} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-sm text-gray-800">010 Air Law</span>
                                        <span className="text-[10px] text-gray-400 font-medium mt-0.5">12 / 60 questions. Today</span>
                                    </div>
                                </div>
                                <button className="text-gray-400 hover:text-gray-800 transition-colors p-2">
                                    <MoreVertical size={18} />
                                </button>
                            </div>

                            <div className="bg-white border border-gray-100 p-4 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="bg-green-50 border border-green-100 text-green-500 p-2 rounded-lg">
                                        <CheckSquare size={18} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-sm text-gray-800">021 Aircraft General Knowledge</span>
                                        <span className="text-[10px] text-gray-400 font-medium mt-0.5">72 / 72 questions. 14 days ago</span>
                                    </div>
                                </div>
                                <button className="text-gray-400 hover:text-gray-800 transition-colors p-2">
                                    <MoreVertical size={18} />
                                </button>
                            </div>

                            <div className="bg-white border border-gray-100 p-4 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow cursor-pointer opacity-70">
                                <div className="flex items-center gap-4">
                                    <div className="bg-red-50 border border-red-100 text-red-500 p-2 rounded-lg">
                                        <XSquare size={18} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-sm text-gray-800">021 Aircraft General Knowledge</span>
                                        <span className="text-[10px] text-gray-400 font-medium mt-0.5">12 / 60 questions. 22 days ago</span>
                                    </div>
                                </div>
                                <button className="text-gray-400 hover:text-gray-800 transition-colors p-2">
                                    <MoreVertical size={18} />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};
