import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const Hero = () => {
    const ctaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Basic GSAP entry for hero
        gsap.fromTo(".hero-text-anim",
            { y: 50, opacity: 0, rotate: -2 },
            { y: 0, opacity: 1, rotate: 0, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.5 }
        );
    }, []);

    return (
        <section className="relative w-screen h-screen flex-shrink-0 bg-[var(--color-cream)] overflow-hidden flex flex-col pt-20 border-r-2 border-black">

            {/* Floating Cloud Background SVGs */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <svg className="absolute top-[15%] left-[10%] w-32 h-auto opacity-50 animate-float" viewBox="0 0 100 50">
                    <path d="M20,30 Q30,10 50,20 Q70,5 80,25 Q95,30 80,45 L20,45 Q5,40 20,30 Z" fill="#FFFFFF" stroke="#414042" strokeWidth="2" strokeLinejoin="round" />
                </svg>
                <svg className="absolute top-[40%] right-[10%] w-48 h-auto opacity-30 animate-float" style={{ animationDelay: '-2s' }} viewBox="0 0 100 50">
                    <path d="M20,30 Q30,10 50,20 Q70,5 80,25 Q95,30 80,45 L20,45 Q5,40 20,30 Z" fill="#FFFFFF" stroke="#414042" strokeWidth="2" strokeLinejoin="round" />
                </svg>
                <svg className="absolute bottom-[30%] left-[25%] w-24 h-auto opacity-40 animate-float" style={{ animationDelay: '-4s' }} viewBox="0 0 100 50">
                    <path d="M20,30 Q30,10 50,20 Q70,5 80,25 Q95,30 80,45 L20,45 Q5,40 20,30 Z" fill="#FFFFFF" stroke="#414042" strokeWidth="2" strokeLinejoin="round" />
                </svg>
            </div>

            <div className="flex-1 w-full max-w-[1440px] mx-auto flex">
                {/* LEFT: Text & CTA */}
                <div className="w-[55%] h-full flex flex-col justify-center px-12 z-10">
                    <h1 className="text-[7rem] leading-[0.85] tracking-tight uppercase font-display hero-text-anim text-[var(--color-black)] pb-6">
                        FLY BEYOND <br /> <span className="text-[var(--color-orange)]">LIMITS</span>
                    </h1>
                    <p className="text-lg max-w-lg mb-10 hero-text-anim text-[var(--color-black)]">
                        World-class flight training and certification for aspiring pilots. Your journey to the skies starts here at AirGen Aviation Academy.
                    </p>
                    <div className="hero-text-anim" ref={ctaRef}>
                        <button className="btn-neo bg-[var(--color-yellow)] text-black border-black border-4 px-10 py-5 text-lg">
                            START YOUR JOURNEY <span className="ml-3 font-body">→</span>
                        </button>
                    </div>
                </div>
                {/* RIGHT: Pilot Character Image */}
                <div className="w-[45%] h-full flex items-end justify-center pb-0 relative z-10">
                    <img
                        src="/pilot-character.png"
                        alt="AirGen Aviation Pilot"
                        className="w-[180%] max-w-[1400px] h-auto object-contain drop-shadow-[8px_8px_0px_#414042] animate-float translate-y-12 scale-[1.3] origin-bottom"
                    />
                </div>
            </div>

            {/* Marquee Ticker */}
            <div className="absolute bottom-0 left-0 w-full h-16 bg-black flex items-center border-t-2 border-black overflow-hidden whitespace-nowrap z-20">
                <div className="animate-marquee flex gap-4 text-white font-body text-sm font-bold tracking-[0.2em] uppercase">
                    <span className="shrink-0 px-4">PRIVATE PILOT  ★  INSTRUMENT RATING  ★  COMMERCIAL LICENSE  ★  FLIGHT SIMULATOR  ★  GROUND SCHOOL ★</span>
                    <span className="shrink-0 px-4">PRIVATE PILOT  ★  INSTRUMENT RATING  ★  COMMERCIAL LICENSE  ★  FLIGHT SIMULATOR  ★  GROUND SCHOOL ★</span>
                    <span className="shrink-0 px-4">PRIVATE PILOT  ★  INSTRUMENT RATING  ★  COMMERCIAL LICENSE  ★  FLIGHT SIMULATOR  ★  GROUND SCHOOL ★</span>
                    <span className="shrink-0 px-4">PRIVATE PILOT  ★  INSTRUMENT RATING  ★  COMMERCIAL LICENSE  ★  FLIGHT SIMULATOR  ★  GROUND SCHOOL ★</span>
                    <span className="shrink-0 px-4">PRIVATE PILOT  ★  INSTRUMENT RATING  ★  COMMERCIAL LICENSE  ★  FLIGHT SIMULATOR  ★  GROUND SCHOOL ★</span>
                </div>
            </div>

        </section>
    );
};
