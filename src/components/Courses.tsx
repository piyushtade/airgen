import React from 'react';

const CourseCard = ({ title, desc, delay, iconSvg }: { title: string, desc: string, delay: number, iconSvg: React.ReactNode }) => {
    return (
        <div className="card-neo flex flex-col group" style={{ animationDelay: `${delay}ms` }}>
            <div className="w-full h-48 bg-[var(--color-cream)] mb-6 border-2 border-black flex items-center justify-center relative overflow-hidden group-hover:bg-[var(--color-yellow)] transition-colors duration-300">
                <div className="absolute inset-0 pattern-grid opacity-10"></div>
                {iconSvg}
            </div>
            <h3 className="text-3xl font-display uppercase tracking-tight mb-4">{title}</h3>
            <p className="font-body text-md leading-relaxed text-[var(--color-black)]/80 mb-8 flex-1">
                {desc}
            </p>
            <div className="flex items-center justify-between mt-auto">
                <button className="btn-neo text-xs px-4 py-2 hover:bg-[var(--color-black)] hover:text-[var(--color-white)]">
                    VIEW DETAILS
                </button>
            </div>
        </div>
    );
};

export const Courses = () => {
    return (
        <section className="relative w-full min-h-screen bg-[var(--color-cream)] py-32 px-12 border-b-2 border-black">

            <div className="max-w-[1440px] mx-auto">
                <div className="mb-24 text-center relative">
                    <h2 className="text-7xl font-display text-[var(--color-black)] inline-block relative z-10 bg-[var(--color-cream)] px-8">
                        OUR PROGRAMS
                    </h2>
                    {/* Animated plane flying through letters using SVG path */}
                    <svg className="absolute top-1/2 left-0 w-full h-[150px] -translate-y-1/2 z-0 opacity-20 pointer-events-none" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path id="flight-path" d="M 0,50 Q 250,-50 500,50 T 1000,50" fill="none" stroke="#C1272D" strokeWidth="4" strokeDasharray="10 10" />
                        <path stroke="none" fill="none" d="M 0,50 Q 250,-50 500,50 T 1000,50">
                            <animateMotion dur="6s" repeatCount="indefinite" path="M 0,50 Q 250,-50 500,50 T 1000,50" />
                        </path>
                    </svg>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

                    <CourseCard
                        title="Private Pilot"
                        desc="The foundational license to take control of the skies. Fly single-engine aircraft confidently and build critical aviation mastery."
                        delay={100}
                        iconSvg={
                            <svg width="100" height="100" viewBox="0 0 200 200" className="group-hover:scale-110 transition-transform duration-300">
                                {/* Simplified Pilot Face SVG */}
                                <circle cx="100" cy="100" r="60" fill="#C1272D" stroke="#414042" strokeWidth="6" />
                                {/* Goggles */}
                                <path d="M 50,90 C 50,60 100,70 100,90 C 100,70 150,60 150,90 C 150,110 100,120 100,90 C 100,120 50,110 50,90 Z" fill="#FFFFFF" stroke="#414042" strokeWidth="6" strokeLinejoin="round" />
                                <circle cx="75" cy="85" r="8" fill="#414042" />
                                <circle cx="125" cy="85" r="8" fill="#414042" />
                                {/* Ear flaps */}
                                <rect x="35" y="90" width="15" height="40" rx="5" fill="#2A2A2A" stroke="#414042" strokeWidth="4" />
                                <rect x="150" y="90" width="15" height="40" rx="5" fill="#2A2A2A" stroke="#414042" strokeWidth="4" />
                            </svg>
                        }
                    />

                    <CourseCard
                        title="Instrument Rating"
                        desc="Master navigating entirely through the clouds. Essential training for professional flying and adverse weather condition safety."
                        delay={200}
                        iconSvg={
                            <svg width="100" height="100" viewBox="0 0 200 200" className="group-hover:scale-110 transition-transform duration-300">
                                {/* Simplified Instrument Panel */}
                                <circle cx="100" cy="100" r="70" fill="#FFFFFF" stroke="#414042" strokeWidth="6" />
                                <circle cx="100" cy="100" r="50" fill="none" stroke="#FFFFFF" strokeWidth="8" strokeDasharray="10 20" />
                                <line x1="100" y1="100" x2="60" y2="70" stroke="#C1272D" strokeWidth="6" strokeLinecap="round" />
                                <circle cx="100" cy="100" r="10" fill="#414042" />
                                <path d="M 40,100 L 20,100 M 160,100 L 180,100 M 100,40 L 100,20" stroke="#414042" strokeWidth="6" />
                            </svg>
                        }
                    />

                    <CourseCard
                        title="Commercial License"
                        desc="Take your career to commercial airlines. Complex aircraft training, advanced aerodynamics, and multi-engine competency."
                        delay={300}
                        iconSvg={
                            <svg width="100" height="100" viewBox="0 0 200 200" className="group-hover:scale-110 transition-transform duration-300">
                                {/* Epaulettes SVG */}
                                <rect x="40" y="80" width="120" height="60" rx="5" fill="#414042" />
                                <line x1="60" y1="80" x2="60" y2="140" stroke="#FFFFFF" strokeWidth="12" />
                                <line x1="100" y1="80" x2="100" y2="140" stroke="#FFFFFF" strokeWidth="12" />
                                <line x1="140" y1="80" x2="140" y2="140" stroke="#FFFFFF" strokeWidth="12" />
                            </svg>
                        }
                    />

                    <CourseCard
                        title="Flight Simulator"
                        desc="Log critical hours inside our immersive 6-axis, full-motion simulators. Available 24/7 for zero-risk procedural repetition."
                        delay={400}
                        iconSvg={
                            <svg width="100" height="100" viewBox="0 0 200 200" className="group-hover:scale-110 transition-transform duration-300">
                                <rect x="50" y="50" width="100" height="80" rx="10" fill="#2A2A2A" stroke="#414042" strokeWidth="6" />
                                {/* Screen */}
                                <rect x="65" y="65" width="70" height="40" fill="#FFFFFF" stroke="#414042" strokeWidth="4" />
                                {/* Joystick Base */}
                                <path d="M 80,130 L 120,130 L 110,160 L 90,160 Z" fill="#C1272D" stroke="#414042" strokeWidth="6" strokeLinejoin="round" />
                                {/* Joystick Grid */}
                                <line x1="100" y1="130" x2="100" y2="80" stroke="#414042" strokeWidth="6" strokeLinecap="round" />
                                <circle cx="100" cy="80" r="15" fill="#C1272D" stroke="#414042" strokeWidth="4" />
                            </svg>
                        }
                    />

                    <CourseCard
                        title="Ground School"
                        desc="Expert-led theoretical coursework. Meteorology, navigation, FAA regulations, and flight planning fundamentals in the classroom."
                        delay={500}
                        iconSvg={
                            <svg width="100" height="100" viewBox="0 0 200 200" className="group-hover:scale-110 transition-transform duration-300">
                                {/* Open Book SVG */}
                                <path d="M 100,160 L 100,50 Q 60,30 20,50 L 20,160 Q 60,130 100,160 Z" fill="#FFFFFF" stroke="#414042" strokeWidth="6" strokeLinejoin="round" />
                                <path d="M 100,160 L 100,50 Q 140,30 180,50 L 180,160 Q 140,130 100,160 Z" fill="#FFFFFF" stroke="#414042" strokeWidth="6" strokeLinejoin="round" />
                                <line x1="40" y1="70" x2="80" y2="70" stroke="#414042" strokeWidth="4" strokeLinecap="round" />
                                <line x1="40" y1="90" x2="80" y2="90" stroke="#414042" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                        }
                    />

                    <CourseCard
                        title="Aerobatics"
                        desc="Take flight to the extremes. Learn spin recoveries, loops, rolls, and advanced upset prevention and recovery techniques."
                        delay={600}
                        iconSvg={
                            <svg width="100" height="100" viewBox="0 0 200 200" className="group-hover:scale-110 transition-transform duration-300">
                                {/* Loop the loop */}
                                <path d="M 20,160 Q 50,70 100,70 A 30 30 0 1 1 100,130 A 30 30 0 0 1 100,70 Q 150,70 180,160" fill="none" stroke="#C1272D" strokeWidth="6" strokeLinecap="round" strokeDasharray="10 10" />
                                <circle cx="170" cy="140" r="10" fill="#414042" />
                                <path d="M 160,130 L 180,150 M 180,130 L 160,150" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                        }
                    />
                </div>
            </div>
        </section>
    );
};
