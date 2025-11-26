"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { heroAnimations } from "@/animation";
import {
	DashboardPreview,
	SocialProofTicker,
} from "@/components";

export default function Hero() {
	return (
		<section className="w-full bg-offWhite relative pt-20 sm:pt-22 pb-16 sm:pb-20">
			<div className="w-full padding-x py-6 sm:py-7">
				<div className="max-w-[1600px] mx-auto">
					{/* Rounded Corner Card - Minimal Design */}
					<motion.div
						variants={heroAnimations.backgroundFade}
						initial="initial"
						animate="animate"
						className="w-full rounded-[40px] overflow-hidden relative shadow-2xl"
						style={{
							background: 'linear-gradient(135deg, #fbc10d 0%, #ffd700 50%, #fbc10d 100%)',
							boxShadow: '0 20px 60px rgba(25, 37, 76, 0.15), 0 0 0 1px rgba(251, 193, 13, 0.1)',
						}}
						data-scroll
						data-scroll-speed="-.3">
						<div 
							className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
							style={{
								backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
							}}
						/>
						<div className="w-full h-full padding-x py-[50px] xm:py-[60px] md:py-[70px] lg:py-[80px] relative z-10">
							<div className="max-w-[1600px] mx-auto h-full flex flex-col lg:flex-row gap-8 lg:gap-12">
								{/* Left Side - 60% */}
								<motion.div
									className="flex-1 lg:w-[60%] flex flex-col justify-center gap-5 sm:gap-6 lg:gap-7 z-10"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.5 }}>
									{/* Primary Headline */}
									<motion.h1
										variants={heroAnimations.headlineWord}
										custom={0}
										initial="initial"
										animate="animate"
										className="text-[28px] xm:text-[32px] sm:text-[42px] md:text-[52px] lg:text-[64px] xl:text-[72px] font-bold font-FoundersGrotesk text-darkBlue tracking-[-0.02em] leading-[1.15] mb-2 sm:mb-3">
										The Only Exam Prep Platform That Puts You in the Top 5% of Successful Aspirants
									</motion.h1>

									{/* Secondary Headline */}
									<motion.h2
										variants={heroAnimations.secondaryText}
										initial="initial"
										animate="animate"
										className="text-[16px] xm:text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] xl:text-[36px] font-medium font-NeueMontreal text-darkBlue leading-[1.4] mb-1 sm:mb-2">
										A System That Thinks with You — Scientifically, Strategically, Psychologically, and Statistically
									</motion.h2>

									{/* Value Proposition */}
									<motion.p
										variants={heroAnimations.valueProp}
										initial="initial"
										animate="animate"
										className="text-[15px] xm:text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-NeueMontreal text-darkBlue/90 leading-[1.6] mb-1 sm:mb-2">
										A cognitive precision learning platform engineered to master competitive exam preparation with structure, clarity, control, and confidence.
									</motion.p>

									{/* Sub-Headline */}
									<motion.p
										variants={heroAnimations.valueProp}
										initial="initial"
										animate="animate"
										className="text-[13px] xm:text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-NeueMontreal text-grayBlue leading-[1.65]">
										A science-driven learning platform revolutionizing competitive exam preparation (NEET, UPSC, State PSC, JEE) through cognitive psychology, data analytics, and expert mentorship.
									</motion.p>

									{/* Core Promise - Highlighted Card */}
									<motion.div
										variants={heroAnimations.valueProp}
										initial="initial"
										animate="animate"
										className="mt-4 sm:mt-5 p-5 sm:p-6 lg:p-7 rounded-2xl bg-offWhite/98 backdrop-blur-md border-2 border-primaryYellow/60 shadow-2xl transition-all duration-300 hover:border-primaryYellow/80 hover:shadow-[0_25px_50px_rgba(25,37,76,0.15)]"
										style={{
											boxShadow: '0 10px 40px rgba(25, 37, 76, 0.12), 0 0 0 1px rgba(251, 193, 13, 0.2)',
										}}>
										<p className="text-[15px] xm:text-[16px] sm:text-[18px] md:text-[20px] font-medium font-NeueMontreal text-darkBlue leading-[1.65]">
											Gestalty isn't just a learning tool—it's a cognitive scaffolding system grounded in proven educational science.
										</p>
									</motion.div>

									{/* Tagline */}
									<motion.p
										variants={heroAnimations.valueProp}
										initial="initial"
										animate="animate"
										className="text-[13px] xm:text-[14px] sm:text-[16px] lg:text-[18px] font-NeueMontreal italic text-grayBlue mt-3 sm:mt-4 leading-[1.6]">
										A learning ecosystem where progress is visible, study is scientific, and accountability is shared.
									</motion.p>

									{/* Dual CTA Buttons */}
									<motion.div
										variants={heroAnimations.ctaButton}
										custom={0}
										initial="initial"
										animate="animate"
										className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8 lg:mt-10">
										<Link
											href="/contact"
											className="group relative px-6 xm:px-7 sm:px-9 py-3 xm:py-3.5 sm:py-4.5 bg-offWhite text-darkBlue text-xs xm:text-sm sm:text-base font-semibold font-NeueMontreal rounded-full overflow-hidden transition-all duration-300 hover:scale-105 glow-yellow-hover shadow-xl"
											style={{
												boxShadow: '0 4px 20px rgba(25, 37, 76, 0.15)',
											}}>
											<span className="relative z-10">Get Started</span>
											<motion.div
												className="absolute inset-0 bg-beige opacity-0 group-hover:opacity-100 transition-opacity duration-300"
												initial={false}
											/>
										</Link>
										<Link
											href="/contact"
											className="group flex items-center gap-2 px-6 xm:px-7 sm:px-9 py-3 xm:py-3.5 sm:py-4.5 border-2 border-darkBlue/40 bg-darkBlue/5 backdrop-blur-sm text-darkBlue text-xs xm:text-sm sm:text-base font-semibold font-NeueMontreal rounded-full hover:border-darkBlue hover:bg-darkBlue/15 transition-all duration-300 hover:scale-105 shadow-xl"
											style={{
												boxShadow: '0 4px 20px rgba(25, 37, 76, 0.12)',
											}}>
											<span>Schedule a Demo</span>
											<ArrowUpRight
												size={16}
												className="xm:w-[18px] xm:h-[18px] sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
											/>
										</Link>
									</motion.div>
								</motion.div>

								{/* Right Side - 40% */}
								<motion.div
									className="flex-1 lg:w-[40%] flex items-center justify-center z-10 sm:mt-8 xm:mt-8 hidden sm:flex">
									<div className="w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px]">
										<DashboardPreview />
									</div>
								</motion.div>
							</div>

							{/* Social Proof Ticker */}
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 2.5, duration: 0.6 }}
								className="mt-8 lg:mt-12">
								<SocialProofTicker />
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
