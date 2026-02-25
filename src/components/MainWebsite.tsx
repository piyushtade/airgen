import { useEffect, useRef } from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { About } from './About';
import { Courses } from './Courses';
import { Instructors } from './Instructors';
import { Journey } from './Journey';
import { Testimonials } from './Testimonials';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const MainWebsite = () => {
    const horizontalRef = useRef<HTMLDivElement>(null);

    // Setup Lenis Smooth Scroll & GSAP Horizontal Scroll
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        // Add horizontal scroll for the panels
        if (horizontalRef.current) {
            const panels = gsap.utils.toArray('.horizontal-panel');

            ScrollTrigger.create({
                trigger: horizontalRef.current,
                pin: true,
                start: 'top top',
                end: () => "+=" + (horizontalRef.current?.scrollWidth || 0),
                animation: gsap.to(panels, {
                    xPercent: -100 * (panels.length - 1),
                    ease: 'none',
                }),
                scrub: 1,
            });
        }

        return () => {
            lenis.destroy();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <main className="relative bg-[var(--color-cream)] text-[var(--color-black)] font-body overflow-x-hidden">
            <Navbar />

            {/* Horizontal Scroll Section */}
            <div ref={horizontalRef} className="w-full h-screen flex flex-nowrap overflow-hidden">
                <div className="horizontal-panel w-full h-full flex-shrink-0">
                    <Hero />
                </div>
                <div className="horizontal-panel w-full h-full flex-shrink-0 bg-[var(--color-orange)]">
                    <About />
                </div>
            </div>

            <Courses />
            <Instructors />
            <Journey />
            <Testimonials />

            <section className="relative w-full h-[100vh] bg-[var(--color-orange)] flex items-center justify-center overflow-hidden">
                {/* Contact Form and Footer */}
                <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
                    {/* Student Illustration */}
                    <div className="flex items-center justify-center bg-[var(--color-dark-brown)]">
                        <img src="/student.webp" alt="Student" className="w-3/4 h-auto object-contain animate-float" />
                    </div>
                    {/* Contact Form */}
                    <div className="flex flex-col items-center justify-center p-16">
                        <h2 className="text-5xl font-display text-white uppercase tracking-tighter mb-8 drop-shadow-[4px_4px_0px_#1A1A1A]">
                            Ready for Takeoff?
                        </h2>
                        <form className="w-full max-w-lg">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-white text-sm font-bold mb-2">Your Name</label>
                                <input type="text" id="name" className="shadow appearance-none border-2 border-black bg-[var(--color-cream)] w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[var(--color-yellow)]" placeholder="Enter your name" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-white text-sm font-bold mb-2">Your Email</label>
                                <input type="email" id="email" className="shadow appearance-none border-2 border-black bg-[var(--color-cream)] w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[var(--color-yellow)]" placeholder="Enter your email" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="course" className="block text-white text-sm font-bold mb-2">Interested In</label>
                                <select id="course" className="shadow border-2 border-black bg-[var(--color-cream)] w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[var(--color-yellow)]">
                                    <option value="">Select a course</option>
                                    <option value="private-pilot">Private Pilot</option>
                                    <option value="instrument-rating">Instrument Rating</option>
                                    <option value="commercial-license">Commercial License</option>
                                    <option value="flight-simulator">Flight Simulator</option>
                                    <option value="ground-school">Ground School</option>
                                    <option value="aerobatics">Aerobatics</option>
                                </select>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-white text-sm font-bold mb-2">Your Message</label>
                                <textarea id="message" rows={4} className="shadow appearance-none border-2 border-black bg-[var(--color-cream)] w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[var(--color-yellow)]" placeholder="Enter your message"></textarea>
                            </div>
                            <div className="flex items-center justify-center">
                                <button type="submit" className="btn-neo">
                                    Send Application
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* Footer */}
                <footer className="absolute bottom-0 left-0 right-0 w-full h-24 bg-[var(--color-black)] flex items-center justify-center text-white text-sm space-x-8">
                    <img src="/airgen-logo-white.svg" alt="Airgen Logo" className="h-10" />
                    <span>© 2024 AirGen Aviation Academy. All rights reserved.</span>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-float">
                        <path d="M16.7961 11.0997L12.0001 15.9997L7.20409 11.0997C6.81309 10.7087 6.18009 10.7087 5.78909 11.0997C5.40009 11.4907 5.40009 12.1237 5.78909 12.5147L11.2951 18.0207C11.6861 18.4117 12.3191 18.4117 12.7101 18.0207L18.2161 12.5147C18.6071 12.1237 18.6071 11.4907 18.2161 11.0997C17.8251 10.7087 17.1921 10.7087 16.7961 11.0997Z" fill="white" />
                    </svg>
                </footer>
            </section>
        </main>
    );
}
