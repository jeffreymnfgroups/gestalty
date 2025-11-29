"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Brain, Zap, BarChart3, Users, Check } from "lucide-react";

const pillars = [
	{
		number: 1,
		title: "Cognitive Science Foundation",
		description: "Leverages psychology and proven pedagogy for science-backed learning",
		icon: Brain,
		image: "/one.webp",
		bullets: [
			"Tracks learning with measurable metrics using metacognitive analytics and psychological theory",
			"Strengthened by advanced statistical tools",
			"Employs proven cognitive methods and strategic revision reminders",
			"Actively counters biases like Illusion of Fluency and Overconfidence Bias"
		]
	},
	{
		number: 2,
		title: "Adaptive Learning Experience",
		description: "Personalizes your journey using real-time feedback and smart algorithms",
		icon: Zap,
		image: "/two.webp",
		bullets: [
			"Delivers a personalized journey adapting in real-time to strengths, weaknesses, and learning pace",
			"Smart algorithms adjust content and schedules based on performance",
			"Keeps progress efficient and motivation consistently high"
		]
	},
	{
		number: 3,
		title: "Data-Driven Insights",
		description: "Uses data analytics and statistical models to optimize study efficiency",
		icon: BarChart3,
		image: "/three.webp",
		bullets: [
			"Provides real-time performance analytics and statistical scoring",
			"Mathematical models identify gaps between perceived and actual completion",
			"Compares actual vs. ideal performance, calibrating subjective effort to real progress with statistical precision"
		]
	},
	{
		number: 4,
		title: "Expert Mentorship",
		description: "Provides one-on-one guidance and accountability partnerships with experienced mentors",
		icon: Users,
		image: "/four.webp",
		bullets: [
			"Offers personalized guidance from NEET/UPSC achievers and academic experts",
			"Mentors leverage your dashboard for precise, data-driven interventions",
			"Builds strategic partnerships for planning and ongoing motivational support"
		]
	}
];

// StackedCard Component - Handles scroll animation
const StackedCard = ({
	pillar,
	index,
}: {
	pillar: typeof pillars[0];
	index: number;
}) => {
	const ref = useRef<HTMLDivElement>(null);

	// Track scroll progress for this specific card
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "start start"],
	});

	// Transform scroll progress (0-1) to vertical position
	// Each card starts at index * 200px offset and moves to 0
	// Spacing works well on all screen sizes
	const y = useTransform(scrollYProgress, [0, 1], [index * 200, 0]);
	const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.6, 0.9, 1]);

	return (
		<motion.div
			ref={ref}
			style={{
				y,
				opacity,
				zIndex: index + 1,
			}}
			className="sticky top-24 sm:top-32 md:top-40"
		>
			<PillarCard pillar={pillar} />
		</motion.div>
	);
};

// PillarCard Component - Individual card content
const PillarCard = ({ pillar }: { pillar: typeof pillars[0] }) => {
	const Icon = pillar.icon;

	return (
		<div
			className="relative h-[600px] w-full sm:h-[700px] md:h-[650px] lg:h-[600px] overflow-hidden rounded-3xl"
			style={{
				backgroundColor: "#EBEBE6",
				boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15), 0 0 20px rgba(0, 0, 0, 0.1)",
			}}
		>
			{/* Full Background Color Layer */}
			<div className="absolute inset-0 bg-lightBeige" />

			{/* Two Column Layout */}
			<div className="relative z-10 h-full flex flex-col lg:flex-row items-center">
				{/* Left Side - Content */}
				<div className="flex-1 h-full flex flex-col justify-center p-8 sm:p-10 md:p-12 lg:p-14 lg:pr-8">
					{/* Pillar Number Badge and Icon */}
					<div className="flex items-center gap-4 mb-6 sm:mb-8">
						<span className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primaryYellow flex items-center justify-center text-darkBlue font-bold font-FoundersGrotesk text-2xl sm:text-3xl shadow-lg">
							{pillar.number}
						</span>
						<div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-darkBlue/10 flex items-center justify-center">
							<Icon size={32} className="text-darkBlue" />
						</div>
					</div>

					{/* Title */}
					<h4 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold font-FoundersGrotesk text-darkBlue mb-4 sm:mb-5 leading-[1.1] tracking-tight">
						{pillar.title}
					</h4>

					{/* Description */}
					<p className="text-base sm:text-lg text-darkBlue/80 mb-6 sm:mb-7 font-NeueMontreal leading-relaxed font-normal">
						{pillar.description}
					</p>

					{/* Bullet Points */}
					<ul className="space-y-3 sm:space-y-3.5">
						{pillar.bullets.map((bullet, bulletIndex) => (
							<li key={bulletIndex} className="flex items-start gap-3">
								<div className="mt-1 flex-shrink-0">
									<Check size={18} className="text-primaryYellow" strokeWidth={2.5} />
								</div>
								<span className="text-sm sm:text-base text-darkBlue/70 leading-relaxed font-NeueMontreal">
									{bullet}
								</span>
							</li>
						))}
					</ul>
				</div>

				{/* Right Side - Image */}
				<div className="hidden lg:flex w-full lg:w-[45%] h-full items-center justify-center p-8">
					<div className="relative w-full h-[80%] overflow-hidden">
						<Image
							src={pillar.image}
							alt={pillar.title}
							fill
							className="object-cover opacity-100 mix-blend-multiply"
							priority={pillar.number <= 2}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default function ScienceFoundation() {
	const containerRef = useRef<HTMLDivElement>(null);

	return (
		<section className="w-full bg-darkBlue padding-y rounded-t-[20px] z-20 relative mt-[-15px] pt-48 sm:pt-56 md:pt-64 pb-32 sm:pb-40">
			<div className="max-w-[1600px] mx-auto padding-x">
				{/* Header Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-16 sm:mb-20 lg:mb-24 text-center">
					<h2 className="sub-heading font-bold font-FoundersGrotesk text-offWhite mb-4">
						A System Built on Science, Designed for Success
					</h2>
					<p className="text-lg sm:text-xl font-medium font-NeueMontreal text-primaryYellow mb-4">
						From Preparation to Mastery — Science Guides Your Path
					</p>
					<p className="paragraph text-offWhite/80 max-w-4xl mx-auto mb-8">
						Gestalty unites cognitive psychology, statistical analysis, and advanced pedagogy into a preparation system built around how your mind actually learns.
					</p>
					<h3 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold font-FoundersGrotesk text-offWhite">
						The Four Pillars of Gestalty
					</h3>
				</motion.div>

				{/* Stacked Cards Container */}
				<div
					ref={containerRef}
					className="relative mx-auto w-[90%] lg:max-w-[1200px] pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12"
					style={{ minHeight: "350vh" }}
				>
					{pillars.map((pillar, index) => (
						<StackedCard
							key={pillar.number}
							pillar={pillar}
							index={index}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

