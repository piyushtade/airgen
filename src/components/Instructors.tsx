
const InstructorCard = ({ name, role, color, delay }: { name: string, role: string, color: string, delay: number }) => {
    return (
        <div className="shrink-0 w-[320px] h-[480px] bg-[var(--color-black)] border-r-2 border-[var(--color-black)] relative overflow-hidden group" style={{ animationDelay: `${delay}ms` }}>
            {/* Background illustration */}
            <div className={`absolute bottom-0 left-0 w-full h-[70%] bg-[${color}] border-t-2 border-[var(--color-black)] transition-transform duration-500 group-hover:scale-105 origin-bottom`}>
                {/* Abstract shape SVG */}
                <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#414042" strokeWidth="4" />
                </svg>
            </div>

            {/* SVG Cartoon Portrait */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 h-48 drop-shadow-[4px_4px_0px_#414042]">
                <svg width="100%" height="100%" viewBox="0 0 200 200">
                    {/* Shoulders */}
                    <path d="M 40,200 L 40,150 Q 100,100 160,150 L 160,200 Z" fill="#F5F5F5" stroke="#414042" strokeWidth="6" strokeLinejoin="round" />
                    {/* Head */}
                    <circle cx="100" cy="80" r="50" fill={color === '#C1272D' ? '#FFFFFF' : '#FFFFFF'} stroke="#414042" strokeWidth="6" />
                    {/* Eyes (Animated blink) */}
                    <g className="animate-[blink_4s_infinite]">
                        <style>{`
               @keyframes blink {
                 0%, 96%, 100% { transform: scaleY(1); }
                 98% { transform: scaleY(0.1); }
               }
             `}</style>
                        <circle cx="80" cy="75" r="5" fill="#414042" />
                        <circle cx="120" cy="75" r="5" fill="#414042" />
                    </g>
                    {/* Sunglasses alternative */}
                    {color === '#FFFFFF' && (
                        <path d="M 60,75 L 140,75 L 130,90 L 70,90 Z" fill="#414042" />
                    )}
                    {/* Smile */}
                    <path d="M 85,100 Q 100,110 115,100" fill="none" stroke="#414042" strokeWidth="4" strokeLinecap="round" />
                </svg>
            </div>

            <div className="absolute bottom-0 left-0 w-full bg-white p-6 border-t-2 border-[var(--color-black)] text-center shadow-inner">
                <h4 className="font-display text-2xl uppercase tracking-tighter mb-1">{name}</h4>
                <p className="font-body text-sm font-bold tracking-widest text-[var(--color-orange)] uppercase">{role}</p>
            </div>
        </div>
    );
};

export const Instructors = () => {
    return (
        <section className="relative w-full py-32 bg-[var(--color-dark-brown)] overflow-hidden border-b-2 border-black">

            <div className="max-w-[1440px] mx-auto px-12 mb-16 flex justify-between items-end">
                <div>
                    <h2 className="text-7xl font-display text-[var(--color-yellow)] uppercase leading-none tracking-tight">
                        MEET YOUR <br /> CREW
                    </h2>
                    <p className="font-body text-[var(--color-cream)]/80 max-w-sm mt-6">
                        15,000+ combined flight hours. Former military pilots, commercial captains, and aerobatics champions.
                    </p>
                </div>

                {/* Fun Badge SVG */}
                <div className="hidden md:block transform rotate-12 drop-shadow-[4px_4px_0px_#414042]">
                    <svg width="120" height="120" viewBox="0 0 100 100">
                        <polygon points="50,5 65,40 100,45 75,70 80,100 50,85 20,100 25,70 0,45 35,40" fill="#C1272D" stroke="#414042" strokeWidth="4" strokeLinejoin="round" />
                        <text x="50" y="55" fontFamily="Anton, sans-serif" fontSize="20" fill="#FFFFFF" textAnchor="middle" alignmentBaseline="middle">PRO</text>
                    </svg>
                </div>
            </div>

            {/* Horizontal Scroll Track */}
            <div className="w-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-12 gap-8 pb-8">
                <div className="flex gap-0 border-2 border-black drop-shadow-[8px_8px_0px_#414042]">
                    <InstructorCard name="Capt. Miller" role="Chief Instructor" color="#C1272D" delay={0} />
                    <InstructorCard name="Sarah Jenkins" role="Aerobatics Specialist" color="#FFFFFF" delay={100} />
                    <InstructorCard name="David Chen" role="Simulator Lead" color="#FFFFFF" delay={200} />
                    <InstructorCard name="Elena Rostova" role="Commercial Trainer" color="#C1272D" delay={300} />
                </div>
            </div>

        </section>
    );
};
