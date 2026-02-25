import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';

export const Navbar = () => {
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.fromTo(navRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power4.out", delay: 0.2 }
        );
    }, []);

    return (
        <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 bg-[var(--color-cream)] border-b-2 border-black h-20 px-8 flex items-center justify-between">
            <div className="font-display text-4xl tracking-tighter cursor-pointer">
                AIRGEN
            </div>

            <div className="hidden md:flex gap-8 items-center font-body text-sm font-semibold uppercase tracking-widest">
                <NavLink to="#about" className="relative group overflow-hidden">
                    About
                    <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-black translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300"></div>
                </NavLink>
                <NavLink to="#courses" className="relative group overflow-hidden">
                    Programs
                    <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-black translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300"></div>
                </NavLink>
                <NavLink to="#instructors" className="relative group overflow-hidden">
                    Crew
                    <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-black translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300"></div>
                </NavLink>
            </div>

            <button className="btn-neo hidden md:inline-flex">
                ENROLL NOW
            </button>
        </nav>
    );
};
