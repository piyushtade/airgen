
const TimelineNode = ({ num, title, desc, reverse }: { num: string, title: string, desc: string, reverse?: boolean }) => {
    return (
        <div className={`relative flex items-center justify-${reverse ? 'end' : 'start'} w-1/2 ${reverse ? 'ml-auto text-right pr-16' : 'mr-auto text-left pl-16'} pb-32 group`}>
            {/* Node Graphic Point */}
            <div className={`absolute top-0 ${reverse ? '-left-[20px]' : '-right-[20px]'} w-10 h-10 rounded-full bg-[var(--color-cream)] border-[4px] border-[var(--color-black)] z-10 drop-shadow-[4px_4px_0px_#C1272D] group-hover:scale-125 transition-transform duration-300`}></div>

            {/* Content wrapper with popup animation */}
            <div className="relative animate-pop-in z-20" style={{ animationDelay: `${parseInt(num) * 150}ms` }}>
                <h4 className="font-display text-5xl tracking-tighter mb-2 text-[var(--color-black)]">
                    <span className="text-[var(--color-orange)] mr-4">0{num}</span>{title}
                </h4>
                <p className="font-body text-md max-w-sm text-[var(--color-black)]/80 leading-relaxed mx-0">
                    {desc}
                </p>
            </div>

            {/* Connection loop SVG (decorative) */}
            <svg className={`absolute top-0 ${reverse ? 'left-[-80px]' : 'right-[-80px]'} w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0`}>
                <path d="M 50,10 A 40,40 0 1,1 10,50" fill="none" stroke="#C1272D" strokeWidth="4" strokeDasharray="5 5" strokeLinecap="round" />
            </svg>
        </div>
    );
};

export const Journey = () => {
    return (
        <section className="relative w-full py-32 bg-[var(--color-yellow)] min-h-screen border-b-2 border-black overflow-hidden">

            <div className="text-center mb-24 relative z-20">
                <h2 className="text-7xl font-display text-[var(--color-black)] uppercase tracking-tight drop-shadow-[4px_4px_0px_#FFFFFF]">
                    YOUR PATH TO<br />THE SKIES
                </h2>
            </div>

            <div className="max-w-[1000px] mx-auto relative relative z-10 pt-10">

                {/* Central Winding Path SVG - Animates draw via stroke-dashoffset on scroll */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-full z-0 overflow-visible mt-6">
                    <svg height="100%" width="8" viewBox="0 0 8 1000" preserveAspectRatio="none">
                        <line x1="4" y1="0" x2="4" y2="1000" stroke="#414042" strokeWidth="6" strokeDasharray="20 20" className="animate-[marquee_2s_linear_infinite]" />
                    </svg>
                </div>

                {/* Path Nodes */}
                <div className="flex flex-col relative w-full pt-8">
                    <TimelineNode
                        num="1"
                        title="ENROLLMENT"
                        desc="Complete your ground evaluation and medical clearance. Meet your dedicated flight instructor and chart your specific career trajectory."
                    />
                    <TimelineNode
                        num="2"
                        title="GROUND SCHOOL"
                        desc="Master aerodynamics, meteorology, and FAA flight regulations in our state-of-the-art cinematic classrooms."
                        reverse
                    />
                    <TimelineNode
                        num="3"
                        title="SIMULATOR LOGS"
                        desc="Train hazard scenarios, instrument failures, and severe weather landings in our zero-risk, full-motion simulator bays."
                    />
                    <TimelineNode
                        num="4"
                        title="SOLO FLIGHT"
                        desc="The ultimate milestone. Take the yolk without your instructor. Your first true moment as captain of an aircraft."
                        reverse
                    />
                    <TimelineNode
                        num="5"
                        title="GRADUATION"
                        desc="Earn your wings, pass your checkride, and receive your FAA certification. The skies are officially yours to command."
                    />
                </div>

            </div>
        </section>
    );
};
