"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cognitiveBiases = [
	{
		name: "Illusion of Fluency",
		description: "Mistaking familiarity for mastery — \"I read it, so I know it\"",
		src: "/problem1.webp"
	},
	{
		name: "Recency Bias",
		description: "Assuming recently reviewed topics are strong without true recall testing",
		src: "/problem2.webp"
	},
	{
		name: "Planning Fallacy",
		description: "Underestimating effort and time needed — \"I'll finish this chapter in 1 hour\" (actually takes 4)",
		src: "/problem3.webp"
	},
	{
		name: "Overconfidence Bias",
		description: "Overrating ability and preparedness, leading to skipped revisions",
		src: "/problem4.webp"
	},
	{
		name: "Illusion of Progress",
		description: "Feeling 100% complete after only partial work",
		src: "/problem5.webp"
	},
	{
		name: "Overestimation",
		description: "Believing more is accomplished than reality reflects",
		src: "/problem6.webp"
	},
	{
		name: "Availability Bias",
		description: "Practicing only familiar or easy questions while ignoring difficult areas",
		src: "/problem7.webp"
	},
	{
		name: "Consistency Gap",
		description: "Distractions and procrastination causing intermittent effort and knowledge gaps",
		src: "/problem8.webp"
	},
	{
		name: "Strategic Misalignment",
		description: "Logging many study hours but seeing little actual improvement due to poor alignment between effort and effective strategies",
		src: "/problem9.webp"
	},
];

export default function ProblemStatement() {
	const carouselRef = useRef<HTMLDivElement>(null);
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(true);
	const [isDragging, setIsDragging] = useState(false);
	const [dragStart, setDragStart] = useState({ x: 0, scrollLeft: 0 });
	const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

	const checkScrollability = () => {
		if (carouselRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
			setCanScrollLeft(scrollLeft > 0);
			setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
		}
	};

	useEffect(() => {
		const carousel = carouselRef.current;
		if (carousel) {
			checkScrollability();
			carousel.addEventListener("scroll", checkScrollability);
			return () => carousel.removeEventListener("scroll", checkScrollability);
		}
	}, []);

	// Drag handlers
	const handleMouseDown = (e: React.MouseEvent) => {
		if (!carouselRef.current) return;
		setIsDragging(true);
		const rect = carouselRef.current.getBoundingClientRect();
		setDragStart({
			x: e.pageX - rect.left,
			scrollLeft: carouselRef.current.scrollLeft,
		});
		setCursorPosition({ x: e.pageX, y: e.pageY });
		e.preventDefault();
	};

	// Global mouse move and up handlers
	useEffect(() => {
		if (!isDragging) return;

		const handleGlobalMouseMove = (e: MouseEvent) => {
			if (!carouselRef.current || !isDragging) return;
			e.preventDefault();
			const rect = carouselRef.current.getBoundingClientRect();
			const x = e.pageX - rect.left;
			const walk = (x - dragStart.x) * 2; // Scroll speed multiplier
			carouselRef.current.scrollLeft = dragStart.scrollLeft - walk;
			setCursorPosition({ x: e.pageX, y: e.pageY });
		};

		const handleGlobalMouseUp = () => {
			setIsDragging(false);
			if (carouselRef.current) {
				carouselRef.current.style.userSelect = "auto";
			}
		};

		document.addEventListener("mousemove", handleGlobalMouseMove);
		document.addEventListener("mouseup", handleGlobalMouseUp);
		document.body.style.userSelect = "none";
		document.body.style.cursor = "grabbing";

		return () => {
			document.removeEventListener("mousemove", handleGlobalMouseMove);
			document.removeEventListener("mouseup", handleGlobalMouseUp);
			document.body.style.userSelect = "auto";
			document.body.style.cursor = "auto";
		};
	}, [isDragging, dragStart]);

	const scroll = (direction: "left" | "right") => {
		if (carouselRef.current) {
			const scrollAmount = 360;
			carouselRef.current.scrollBy({
				left: direction === "left" ? -scrollAmount : scrollAmount,
				behavior: "smooth",
			});
		}
	};

	return (
		<section className="w-full bg-gradient-to-b from-offWhite via-beige/20 to-offWhite relative pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
			{/* Custom Drag Cursor */}
			{isDragging && (
				<div
					className="fixed pointer-events-none z-50"
					style={{
						left: `${cursorPosition.x + 20}px`,
						top: `${cursorPosition.y - 20}px`,
					}}>
					<div className="bg-darkBlue/80 text-offWhite px-3 py-1.5 rounded-full text-xs font-medium font-NeueMontreal whitespace-nowrap shadow-lg backdrop-blur-sm border border-primaryYellow/30">
						Drag
					</div>
				</div>
			)}
			{/* Background Pattern */}
			<div
				className="absolute inset-0 opacity-[0.03]"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2319254c' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
				}}
			/>

			<div className="w-full padding-x relative z-10">
				<div className="max-w-[1600px] mx-auto">
					{/* Header Section */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.65, ease: [0.33, 1, 0.68, 1] }}
						className="text-center mb-12 sm:mb-16 lg:mb-20"
						style={{ willChange: "transform, opacity" }}>
						{/* Headline */}
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.65, delay: 0.12 }}
							className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[64px] xl:text-[72px] font-bold font-FoundersGrotesk text-darkBlue tracking-[-0.02em] leading-[1.1] mb-4 sm:mb-6"
							style={{ willChange: "transform, opacity" }}>
							Why Traditional Preparation Fails
						</motion.h2>

						{/* Sub-Headline */}
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.65, delay: 0.22, ease: [0.33, 1, 0.68, 1] }}
							className="paragraph font-medium font-NeueMontreal text-darkBlue/80 max-w-4xl mx-auto"
							style={{ willChange: "transform, opacity" }}>
							Most aspirants struggle not from lack of effort, but from fighting invisible cognitive barriers that traditional methods can't address.
						</motion.p>
					</motion.div>

					{/* Cognitive Biases Section - Horizontal Scrollable Carousel */}
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.65, delay: 0.28, ease: [0.33, 1, 0.68, 1] }}
						className="mb-12 sm:mb-16"
						style={{ willChange: "opacity" }}>
						{/* Section Title with Navigation Buttons */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.65, delay: 0.35, ease: [0.33, 1, 0.68, 1] }}
							className="mb-8 sm:mb-10 lg:mb-12 flex items-center justify-between"
							style={{ willChange: "transform, opacity" }}>
							<div>
								<h3 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold font-FoundersGrotesk text-darkBlue mb-2">
									Cognitive Biases Aspirants Face
								</h3>
								<p className="small-text font-medium font-NeueMontreal text-primaryYellow italic">
									The Hidden Enemies of Exam Success:
								</p>
							</div>
							{/* Navigation Buttons */}
							<div className="flex gap-2">
								<button
									onClick={() => scroll("left")}
									disabled={!canScrollLeft}
									className="h-10 w-10 rounded-full border-2 border-darkBlue/30 bg-offWhite/80 backdrop-blur-sm hover:border-primaryYellow hover:bg-primaryYellow/10 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-darkBlue/30 disabled:hover:bg-offWhite/80 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
									aria-label="Scroll left">
									<ChevronLeft className="h-6 w-6 text-darkBlue" />
								</button>
								<button
									onClick={() => scroll("right")}
									disabled={!canScrollRight}
									className="h-10 w-10 rounded-full border-2 border-darkBlue/30 bg-offWhite/80 backdrop-blur-sm hover:border-primaryYellow hover:bg-primaryYellow/10 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-darkBlue/30 disabled:hover:bg-offWhite/80 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
									aria-label="Scroll right">
									<ChevronRight className="h-6 w-6 text-darkBlue" />
								</button>
							</div>
						</motion.div>

						{/* Carousel Container */}
						<div className="relative">
							<div
								ref={carouselRef}
								onMouseDown={handleMouseDown}
								className={`flex flex-row gap-4 overflow-x-scroll scroll-smooth py-4 md:py-6 overscroll-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
								style={{ userSelect: isDragging ? "none" : "auto" }}>
								{cognitiveBiases.map((bias, index) => {
									return (
										<motion.div
											key={index}
											initial={{ opacity: 0, y: 30 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true, margin: "-50px" }}
											transition={{
												duration: 0.55,
												delay: 0.09 * index,
												ease: [0.33, 1, 0.68, 1]
											}}
											className="group relative flex-shrink-0"
											style={{ willChange: "transform, opacity" }}>
											{/* Card Container - Portrait */}
											<div className="science-card relative flex h-[28rem] w-80 flex-shrink-0 flex-col items-start justify-end overflow-hidden rounded-3xl bg-beige/20 md:h-[42rem] md:w-96 hover:scale-[1.02] transition-all duration-300"
												style={{ willChange: "transform" }}>
												{/* Background Image */}
												<Image
													src={bias.src}
													alt={bias.name}
													fill
													className="absolute inset-0 z-10 object-cover transition-transform duration-300 group-hover:scale-105"
													unoptimized={true}
													loading={index < 3 ? "eager" : "lazy"}
												/>

												{/* Primary Gradient Overlay */}
												<div className="absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-darkBlue/70 via-darkBlue/30 to-darkBlue/10 pointer-events-none transition-opacity duration-300 group-hover:from-darkBlue/80" />

								{/* Content Overlay */}
								<div className="relative z-40 p-6 bg-gradient-to-b from-darkBlue/50 via-darkBlue/30 to-darkBlue/10 rounded-b-3xl w-full transition-all duration-300 group-hover:from-darkBlue/60">
									<h3 className="text-left font-FoundersGrotesk text-lg md:text-xl font-semibold [text-wrap:balance] text-offWhite drop-shadow-lg">
										{bias.name}
									</h3>
									<p className="mt-2 text-left font-NeueMontreal text-xs md:text-sm font-medium text-offWhite/90 drop-shadow-lg">
										{bias.description}
									</p>
								</div>
											</div>
										</motion.div>
									);
								})}
							</div>
						</div>
					</motion.div>

					{/* Solution Section - Elegant Box */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.65, delay: 0.7, ease: [0.33, 1, 0.68, 1] }}
						className="mt-8 sm:mt-10 lg:mt-12 text-center"
						style={{ willChange: "transform, opacity" }}>
						<div className="relative inline-block max-w-2xl mx-auto">
							{/* Main Card */}
							<div className="relative science-card p-6 sm:p-8 lg:p-10 rounded-3xl bg-lightBeige border border-grayBlue/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
								style={{
									boxShadow: "0 4px 24px rgba(25, 37, 76, 0.08)",
								}}>
								{/* Background Noise Texture */}
								<div 
									className="absolute inset-0 opacity-[0.4] pointer-events-none"
									style={{
										backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
										backgroundSize: '200px 200px',
									}}
								/>
								
								{/* Content */}
								<div className="relative z-10">
									<h3 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-bold font-FoundersGrotesk text-darkBlue tracking-[-0.03em] leading-[1.15] mb-4 sm:mb-5">
										<span className="text-primaryYellow font-semibold">The Solution:</span> A Platform That Transforms Preparation
									</h3>
									<p className="text-[14px] sm:text-[15px] md:text-[16px] font-normal font-NeueMontreal text-darkBlue/75 leading-[1.6]">
										A platform that identifies and counteracts these biases through{" "}
										<span className="font-semibold text-darkBlue">data-driven insights</span>,{" "}
										<span className="font-semibold text-darkBlue">adaptive learning</span>, and{" "}
										<span className="font-semibold text-darkBlue">cognitive science principles</span>.
									</p>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}