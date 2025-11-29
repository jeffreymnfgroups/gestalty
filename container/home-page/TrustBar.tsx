"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { NTA, UPSC, JEE } from "@/public";

const examLogos = [
	{ name: "NTA", fullName: "National Testing Agency", logo: NTA },
	{ name: "UPSC", fullName: "Union Public Service Commission", logo: UPSC },
	{ name: "JEE", fullName: "Joint Entrance Examination", logo: JEE },
	{ name: "NEET", fullName: "National Eligibility cum Entrance Test", logo: null },
	{ name: "State PSC", fullName: "State Public Service Commission", logo: null },
];

export default function TrustBar() {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});

	const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
	const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -50]);

	return (
		<section
			ref={containerRef}
			className="w-full bg-offWhite relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
			<div className="w-full padding-x">
				<div className="max-w-[1600px] mx-auto">
					{/* Trust Text */}
					<motion.div
						style={{ opacity, y, willChange: "transform, opacity" }}
						className="text-center mb-8 sm:mb-10 lg:mb-12">
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
							className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] font-medium font-NeueMontreal text-darkBlue/90 leading-[1.6]">
							Built for India's Top Competitive Exams —{" "}
							<span className="font-semibold text-darkBlue">
								Trusted by NEET, State PSC, UPSC, and JEE Aspirants
							</span>
						</motion.p>
					</motion.div>

					{/* Scrolling Logos Container */}
					<motion.div
						style={{ opacity }}
						className="relative">
						{/* Gradient Overlays */}
						<div className="absolute left-0 top-0 bottom-0 w-32 sm:w-40 lg:w-48 z-10 bg-gradient-to-r from-offWhite to-transparent pointer-events-none" />
						<div className="absolute right-0 top-0 bottom-0 w-32 sm:w-40 lg:w-48 z-10 bg-gradient-to-l from-offWhite to-transparent pointer-events-none" />

						{/* Infinite Scrolling Logos */}
						<div className="overflow-hidden">
							<motion.div
								className="flex gap-8 sm:gap-12 lg:gap-16 items-center"
								animate={{
									x: ["0%", "-50%"],
								}}
								transition={{
									duration: 32,
									repeat: Infinity,
									ease: "linear",
									repeatType: "loop",
								}}
								style={{ willChange: "transform" }}>
								{/* Render logos twice for seamless infinite loop */}
								{Array.from({ length: 2 }).map((_, setIndex) => (
									<div key={`set-${setIndex}`} className="flex gap-8 sm:gap-12 lg:gap-16 items-center flex-shrink-0">
										{examLogos.map((logo, logoIndex) => (
											<motion.div
												key={`${logo.name}-${setIndex}-${logoIndex}`}
												className="flex items-center gap-3 sm:gap-4 group cursor-default">
												{/* Logo Badge */}
												<motion.div
													whileHover={{ scale: 1.05, y: -2 }}
													className="px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 rounded-2xl bg-gradient-to-br from-primaryYellow/10 to-primaryYellow/5 border-2 border-primaryYellow/20 backdrop-blur-sm transition-all duration-300 hover:border-primaryYellow/40 hover:shadow-lg flex items-center justify-center"
													style={{
														boxShadow: "0 4px 20px rgba(251, 193, 13, 0.1)",
														minWidth: "140px",
														minHeight: "100px",
													}}>
													{logo.logo ? (
														<div className="flex flex-col items-center gap-2 sm:gap-3">
															<div className="relative w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px] h-[60px] sm:h-[70px] md:h-[80px] lg:h-[90px]">
																<Image
																	src={logo.logo}
																	alt={logo.name}
																	fill
																	className="object-contain"
																	sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, (max-width: 1024px) 120px, 140px"
																	placeholder="empty"
																/>
															</div>
															{logo.fullName && (
																<span className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] font-NeueMontreal text-darkBlue/60 text-center max-w-[140px] sm:max-w-[160px] leading-tight">
																	{logo.fullName}
																</span>
															)}
														</div>
													) : (
														<div className="flex flex-col items-center gap-1 sm:gap-2">
															<motion.span
																className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-bold font-FoundersGrotesk text-darkBlue tracking-tight"
																style={{
																	fontFamily: "system-ui, -apple-system, sans-serif",
																	letterSpacing: "0.05em",
																	textShadow: "0 2px 4px rgba(25, 37, 76, 0.1)",
																}}>
																{logo.name}
															</motion.span>
															{logo.fullName && (
																<span className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] font-NeueMontreal text-darkBlue/60 text-center max-w-[120px] sm:max-w-[140px] leading-tight">
																	{logo.fullName}
																</span>
															)}
														</div>
													)}
												</motion.div>

												{/* Separator */}
												{logoIndex < examLogos.length - 1 && (
													<motion.div
														className="w-[2px] h-12 sm:h-16 bg-darkBlue/10 rounded-full"
														initial={{ scaleY: 0 }}
														animate={{ scaleY: 1 }}
														transition={{ delay: logoIndex * 0.1, duration: 0.5 }}
													/>
												)}
											</motion.div>
										))}
									</div>
								))}
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

