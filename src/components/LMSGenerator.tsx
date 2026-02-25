import { ArrowLeft, HelpCircle, ChevronDown, Check, PieChart } from 'lucide-react';
import { RadialChart } from './RadialChart';
import { useNavigate } from 'react-router-dom';

export const LMSGenerator = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-full bg-white text-[#414042]">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
                    <ArrowLeft size={24} />
                </button>
                <h1 className="text-xl font-bold tracking-tight">Supersonic</h1>
                <button
                    onClick={() => navigate('/progress')}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-full text-sm font-semibold transition-colors border border-gray-200 cursor-pointer"
                >
                    <PieChart size={16} className="text-[#A1C3D1]" />
                    Results
                </button>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">

                {/* Left Column - Controls */}
                <div className="w-full lg:w-[45%] p-8 lg:pr-4 overflow-y-auto no-scrollbar flex flex-col gap-6">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-bold tracking-widest text-gray-400">GENERATOR</span>
                        <HelpCircle size={18} className="text-[#77A3B7]" />
                    </div>

                    {/* Dropdowns */}
                    <div className="space-y-4">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-gray-600">Subjects</label>
                            <div className="flex justify-between items-center border border-gray-200 rounded-xl p-4 cursor-pointer hover:border-gray-300 transition-colors shadow-sm">
                                <span className="text-gray-800 font-medium">All Subjects</span>
                                <ChevronDown size={20} className="text-[#F6C94A]" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-gray-600">Topics</label>
                            <div className="flex justify-between items-center border border-gray-200 rounded-xl p-4 cursor-pointer hover:border-gray-300 transition-colors shadow-sm bg-gray-50/50">
                                <span className="text-gray-400 font-medium">All Topics</span>
                                <ChevronDown size={20} className="text-gray-400" />
                            </div>
                        </div>
                    </div>

                    {/* Filter Cards */}
                    <div className="space-y-3 mt-4">
                        {/* Selected Card */}
                        <div className="flex items-center justify-between p-4 rounded-xl bg-[#77A3B7] text-white shadow-md cursor-pointer transform hover:scale-[1.02] transition-transform">
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 bg-white rounded flex items-center justify-center">
                                    <Check size={14} className="text-[#77A3B7]" />
                                </div>
                                <span className="font-semibold text-sm">Seen in last 90 days <span className="opacity-75 font-normal ml-1">100</span></span>
                            </div>
                            <ChevronDown size={20} className="text-white opacity-80" />
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

                    {/* Action Button */}
                    <button className="mt-4 w-full py-4 rounded-xl bg-gray-100 text-gray-400 font-semibold uppercase tracking-wide opacity-80 cursor-not-allowed">
                        Choose a Subject to get started
                    </button>
                </div>

                {/* Right Column - Radial Chart Area */}
                <div className="w-full lg:w-[55%] p-8 lg:pl-12 flex flex-col justify-center relative">
                    <span className="text-xs font-bold tracking-widest text-[#77A3B7] mb-8 text-center uppercase">All Subjects / All Topics</span>

                    <div className="flex justify-center flex-1 items-center">
                        <RadialChart />
                    </div>

                    {/* Chart Legend */}
                    <div className="mt-auto grid grid-cols-2 lg:grid-cols-4 gap-4 px-8 pb-4">
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-gray-500 w-20">Not started:</span>
                            <div className="flex gap-2 items-center">
                                <div className="w-3 h-3 rounded-full bg-[#77A3B7]"></div>
                                <span className="text-[10px] text-gray-500 whitespace-nowrap">Seen in last 90 days</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#A1C3D1]"></div>
                            <span className="text-[10px] text-gray-500 whitespace-nowrap">Remaining last 300</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#DBEAFE]"></div>
                            <span className="text-[10px] text-gray-500 whitespace-nowrap">Remaining all seen</span>
                        </div>
                        {/* Offset row */}
                        <div className="col-span-full h-1"></div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-gray-500 w-20">Started:</span>
                            <div className="flex gap-2 items-center">
                                <div className="w-3 h-3 rounded-full bg-[#EF4444]"></div>
                                <span className="text-[10px] text-gray-500 whitespace-nowrap">0-35%</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#F59E0B]"></div>
                            <span className="text-[10px] text-gray-500 whitespace-nowrap">36-74%</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
                            <span className="text-[10px] text-gray-500 whitespace-nowrap">75-100%</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
