const TestimonialCard = ({ name, cert, quote }: any) => {
    return (
        <div className="card-neo flex flex-col items-center text-center group break-inside-avoid mb-10 h-max">
            {/* Cartoon Avatar */}
            <div className="w-24 h-24 bg-[var(--color-yellow)] border-2 border-[var(--color-black)] flex-shrink-0 relative overflow-hidden group-hover:bg-[var(--color-orange)] transition-colors duration-300">
                <svg width="100%" height="100%" viewBox="0 0 100 100" className="pt-4">
                    <circle cx="50" cy="50" r="30" fill="#F5F5F5" stroke="#414042" strokeWidth="4" />
                    <circle cx="40" cy="45" r="4" fill="#414042" />
                    <circle cx="60" cy="45" r="4" fill="#414042" />
                    <path d="M 45,60 Q 50,65 55,60" fill="none" stroke="#414042" strokeWidth="3" strokeLinecap="round" />
                </svg>
            </div>

            {/* Quote */}
            <div className="mt-8 relative w-full px-4">
                <svg className="absolute -top-4 -left-2 w-8 h-8 opacity-20" viewBox="0 0 50 50">
                    <path d="M10,20 Q10,10 20,10 L30,10 Q40,10 40,20 L40,30 Q40,40 30,40 L20,40 Q10,40 10,30 Z" fill="#C1272D" />
                </svg>
                <p className="font-body italic text-lg text-[var(--color-black)]/90 leading-relaxed mb-8 relative z-10">
                    "{quote}"
                </p>
            </div>

            {/* Author & Stars */}
            <div className="mt-auto w-full border-t-2 border-black/10 pt-6">
                <h4 className="font-display text-xl uppercase tracking-wider mb-1">{name}</h4>
                <p className="font-body text-xs font-bold text-[var(--color-orange)] uppercase tracking-widest">{cert}</p>

                {/* Drawn Stars */}
                <div className="flex justify-center gap-1 mt-4 text-[var(--color-yellow)]">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" viewBox="0 0 24 24">
                            <polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" fill="#FFFFFF" stroke="#414042" strokeWidth="2" strokeLinejoin="round" />
                        </svg>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const Testimonials = () => {
    return (
        <section className="w-full bg-[var(--color-cream)] py-32 px-12 border-b-2 border-black min-h-screen relative overflow-hidden">

            {/* Decorative Wavy Divider BG */}
            <svg className="absolute -bottom-[20%] left-[-10%] w-[120%] h-auto opacity-10 pointer-events-none stroke-[#C1272D]" viewBox="0 0 1000 200" preserveAspectRatio="none">
                <path d="M0,100 C 200,-50 300,250 500,100 C 700,-50 800,250 1000,100" fill="none" strokeWidth="8" strokeLinecap="round" />
            </svg>

            <div className="max-w-[1440px] mx-auto relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-7xl font-display text-[var(--color-black)] uppercase tracking-tight">
                        WHAT OUR <br /> <span className="text-[var(--color-orange)]">PILOTS SAY</span>
                    </h2>
                </div>

                {/* Masonry Layout via CSS Columns */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-10">
                    <TestimonialCard
                        name="Sarah Jenkins"
                        cert="Private Pilot License"
                        quote="AirGen didn't just teach me how to operate a machine—they taught me how to truly understand the sky. The simulators are insanely realistic."
                        delay={100}
                    />
                    <TestimonialCard
                        name="Marcus Chen"
                        cert="Instrument Rating"
                        quote="The ground school curriculum is brutal but necessary. When I finally hit the clouds solo, I realized they had prepared me perfectly for zero-visibility scenarios."
                        delay={300}
                    />
                    <TestimonialCard
                        name="Elena Rostova"
                        cert="Commercial Airlines"
                        quote="From a scared high school kid to flying Boeing 737s. The instructors here are veteran captains who pass down generational flying knowledge."
                        delay={200}
                    />
                    <TestimonialCard
                        name="Jared Dunn"
                        cert="Aerobatics Endorsement"
                        quote="Wanted to learn loops, rolls, and upset recovery. The aerobatics program is a total adrenaline rush under total control."
                        delay={400}
                    />
                    <TestimonialCard
                        name="Lisa Morrison"
                        cert="Flight Simulator Vet"
                        quote="Logging hours in the 6-axis simulator saved me thousands of dollars while teaching me muscle memory I'll use forever."
                        delay={100}
                    />
                </div>
            </div>
        </section>
    );
};
