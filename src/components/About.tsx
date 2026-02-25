
export const About = () => {
    return (
        <section className="relative w-screen h-screen flex-shrink-0 bg-[var(--color-dark-brown)] overflow-hidden flex flex-col pt-20 border-r-2 border-black text-[var(--color-cream)]">

            <div className="flex-1 w-full max-w-[1440px] mx-auto flex">
                {/* LEFT: SVG Tower & Orbiting Plane */}
                <div className="w-[40%] h-full flex items-center justify-center relative">

                    <svg width="300" height="400" viewBox="0 0 200 300" className="drop-shadow-[6px_6px_0px_#414042]">
                        {/* Tower Base */}
                        <path d="M 60,300 L 140,300 L 120,100 L 80,100 Z" fill="#F5F5F5" stroke="#414042" strokeWidth="4" strokeLinejoin="round" />
                        <path d="M 60,300 L 140,300 L 120,100 L 80,100 Z" fill="#FFFFFF" stroke="#414042" strokeWidth="4" strokeLinejoin="round" />
                        {/* Tower Cabin */}
                        <rect x="50" y="50" width="100" height="50" rx="4" fill="#C1272D" stroke="#414042" strokeWidth="4" />
                        <rect x="60" y="60" width="80" height="30" fill="#FFFFFF" stroke="#414042" strokeWidth="3" />
                        <path d="M 80,60 L 80,90 M 120,60 L 120,90" stroke="#414042" strokeWidth="3" />
                        {/* Tower Antenna */}
                        <line x1="100" y1="50" x2="100" y2="10" stroke="#414042" strokeWidth="4" />
                        <circle cx="100" cy="10" r="4" fill="#C1272D" />
                    </svg>

                    {/* Plane Orbit Path using CSS offset */}
                    <div className="absolute inset-0 flex items-center justify-center origin-center animate-[spin_10s_linear_infinite]">
                        <svg width="60" height="40" viewBox="0 0 100 50" className="absolute -top-12 drop-shadow-[4px_4px_0px_#414042]">
                            {/* Biplane SVG */}
                            <ellipse cx="50" cy="25" rx="40" ry="15" fill="#FFFFFF" stroke="#414042" strokeWidth="3" />
                            <rect x="30" y="5" width="20" height="10" fill="#C1272D" stroke="#414042" strokeWidth="3" />
                            <line x1="90" y1="15" x2="90" y2="35" stroke="#414042" strokeWidth="3" className="animate-[spin_1s_linear_infinite]" style={{ transformOrigin: '90px 25px' }} />
                            {/* Spinning Propeller Dash */}
                            <line x1="95" y1="5" x2="95" y2="45" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="5" className="animate-[spin_0.2s_linear_infinite]" style={{ transformOrigin: '95px 25px' }} />
                        </svg>
                    </div>

                </div>

                {/* RIGHT: Text & Stats */}
                <div className="w-[60%] h-full flex flex-col justify-center px-12 z-10">
                    <h2 className="text-[5rem] leading-[0.9] tracking-tight uppercase font-display text-[var(--color-cream)] mb-8">
                        BORN FROM A LOVE <br /> OF THE SKY
                    </h2>
                    <p className="text-xl max-w-xl mb-12 text-[var(--color-cream)]/90 leading-relaxed font-body">
                        Founded by a collective of passionate aviators, AirGen bridges the gap between dreams and altitude. Our academy focuses on hands-on experience, rigorous simulation, and fostering a deep respect for the craft of flight.
                    </p>

                    <div className="flex gap-16 mt-8">
                        <div>
                            <div className="text-5xl font-display text-[var(--color-cream)]">2,400+</div>
                            {/* Orange animated underline mimicking SVG draw */}
                            <div className="w-full h-1 bg-[var(--color-orange)] mt-2 rounded"></div>
                            <div className="mt-4 text-[var(--color-yellow)] font-bold tracking-widest text-sm uppercase">Graduates</div>
                        </div>
                        <div>
                            <div className="text-5xl font-display text-[var(--color-cream)]">98%</div>
                            <div className="w-full h-1 bg-[var(--color-orange)] mt-2 rounded"></div>
                            <div className="mt-4 text-[var(--color-yellow)] font-bold tracking-widest text-sm uppercase">Pass Rate</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Wavy Divider at bottom using custom Path SVG for brutalist feel */}
            <div className="absolute bottom-16 left-0 w-full overflow-hidden leading-none z-10">
                <svg fill="none" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-[200%] h-[20px] block relative left-[-50%] animate-[marquee_15s_linear_infinite]">
                    <path d="M0,60 C300,-60 900,180 1200,60 C1500,-60 2100,180 2400,60" stroke="#F5F5F5" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

        </section>
    );
};
