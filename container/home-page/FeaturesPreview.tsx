"use client";
import { motion } from "framer-motion";
import { Calendar, BarChart2, Lightbulb, Puzzle, ArrowUp, Heart, ArrowDown, CheckCircle2 } from "lucide-react";

// Get icon container background color that complements beige (#dbd6cc)
const getIconBgColor = (color: string) => {
	const colorMap: { [key: string]: string } = {
		red: "#8B5A5A",      // Warm burgundy that complements beige
		orange: "#9B7A4A",   // Warm brown-orange
		yellow: "#8B7D5A",   // Olive brown
		amber: "#7A6B4A",    // Deep amber brown
		green: "#5A7A6B",    // Deep teal-green
	};
	return colorMap[color] || colorMap.yellow;
};

const solutions = [
	{
		problem: "Inadequate Study Planning",
		impact: "Underestimating syllabus size leads to rushed coverage and cramming",
		solution: "Split Syllabus Engine: Breaks down syllabi into daily/weekly custom chunks",
		color: "red",
		icon: Calendar,
	},
	{
		problem: "Lack of Focus & Consistency",
		impact: "Distractions and procrastination cause inconsistent study, leading to knowledge gaps, lower retention, and reduced productivity.",
		solution: "Progress Tracking: Real-time stage-wise analytics pinpoint your journey",
		color: "orange",
		icon: BarChart2,
	},
	{
		problem: "Weak Study Techniques & Retention",
		impact: "Passive learning leads to surface-level understanding and weak problem-solving",
		solution: "Strategic Revision Reminders: Scheduled by proven spaced-repetition models for maximum retention",
		color: "yellow",
		icon: Lightbulb,
	},
	{
		problem: "Fragmented & Unsystematic Learning",
		impact: "Fragmentation disrupts focused, organized, and efficient learning.",
		solution: "Consistency Mapping: Visual charts and heatmaps reveal time, effort, and deviations",
		color: "amber",
		icon: Puzzle,
	},
	{
		problem: "Misalignment Between Effort & Outcomes",
		impact: "Wasted effort results in slow improvement and discouraging outcomes",
		solution: "AI Feedback Loop: Statistical tools calibrate effort with actual outcomes",
		color: "yellow",
		icon: ArrowUp,
	},
	{
		problem: "Mental Health & Motivation Issues",
		impact: "Anxiety, burnout, and low motivation harm results",
		solution: "Cognitive Inertia Detector: ML algorithms spot resistance early and keep you on track",
		color: "green",
		icon: Heart,
	},
];

export default function FeaturesPreview() {

	return (
		<section
			className="w-full bg-offWhite padding-y rounded-t-[20px] z-20 relative overflow-hidden"
			style={{
				background: "linear-gradient(135deg, #fefefe 0%, #f5f5f0 50%, #fefefe 100%)",
				backgroundSize: "200% 200%",
			}}>
			{/* Background Layers */}
			<div
				className="absolute inset-0 opacity-30 pointer-events-none"
				style={{
					background: "radial-gradient(circle at 20% 30%, rgba(251, 193, 13, 0.15) 0%, transparent 50%)",
				}}
			/>
			<div
				className="absolute inset-0 opacity-20 pointer-events-none"
				style={{
					background: "radial-gradient(circle at 80% 70%, rgba(106, 113, 136, 0.1) 0%, transparent 50%)",
				}}
			/>
			<div
				className="absolute inset-0 opacity-15 pointer-events-none"
				style={{
					background: "radial-gradient(circle at 50% 50%, rgba(216, 209, 178, 0.12) 0%, transparent 60%)",
				}}
			/>

			{/* Floating Geometric Shapes */}
			<div className="absolute inset-0 pointer-events-none overflow-hidden">
				<div
					className="absolute w-32 h-32 rounded-full bg-primaryYellow/10 blur-xl"
					style={{ top: "10%", left: "5%" }}
				/>
				<div
					className="absolute w-24 h-24 rounded-lg bg-darkBlue/5 blur-lg rotate-45"
					style={{ top: "60%", right: "10%" }}
				/>
				<div
					className="absolute w-40 h-40 rounded-full bg-grayBlue/8 blur-2xl"
					style={{ bottom: "20%", left: "15%" }}
				/>
				<div
					className="absolute w-20 h-20 rounded-lg bg-primaryYellow/8 blur-md rotate-12"
					style={{ top: "30%", right: "20%" }}
				/>
				<div
					className="absolute w-36 h-36 rounded-full bg-darkBlue/6 blur-xl"
					style={{ bottom: "40%", right: "5%" }}
				/>
			</div>

			<div className="max-w-[1600px] mx-auto padding-x relative z-10">
				{/* Header Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
					className="mb-16 md:mb-20 text-center">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[64px] xl:text-[72px] font-bold font-FoundersGrotesk text-darkBlue mb-4 tracking-[-0.02em] leading-[1.1]">
						The Gestalty Difference: From Guesswork to Precision
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
						className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-medium font-NeueMontreal text-grayBlue max-w-3xl mx-auto leading-[1.6]">
						Experience the transformation from chaotic learning to structured, science-driven preparation.
					</motion.p>
				</motion.div>

				{/* Sub-header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
					className="mb-12 text-center">
					<h3 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold font-FoundersGrotesk text-darkBlue mb-2">
						The Problems We Solve — From Chaos to Clarity
					</h3>
					<p className="text-[16px] sm:text-[18px] md:text-[20px] font-medium font-NeueMontreal text-primaryYellow italic">
						Mapping Aspirants' Challenges, Consequences, and Tailored Gestalty Solutions
					</p>
				</motion.div>

				{/* Cards Container */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
					{solutions.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{
								duration: 0.55,
								delay: 0.08 * index,
								ease: [0.33, 1, 0.68, 1]
							}}
							className="group relative"
							style={{ willChange: "transform, opacity" }}>
							{/* Card */}
							<div
								className="relative h-full rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
								style={{
									backgroundColor: "#dbd6cc",
									boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
								}}>
								{/* Problem Section */}
								<div className="mb-6">
									<div className="flex items-start gap-3 mb-3">
										<div 
											className="p-2 rounded-full flex items-center justify-center w-10 h-10 flex-shrink-0"
											style={{ backgroundColor: getIconBgColor(item.color) }}
										>
											<item.icon
												size={20}
												className="text-white transition-transform duration-300 group-hover:scale-110"
												strokeWidth={2}
											/>
										</div>
										<h4 className="text-xl md:text-2xl font-bold font-FoundersGrotesk text-darkBlue flex-1 leading-[1.3]">
											{item.problem}
										</h4>
									</div>
								</div>

								{/* Impact Section */}
								<div className="mb-6 relative">
									<div className="flex items-center gap-2 mb-3">
										<div 
											className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
											style={{ backgroundColor: "#6a7188" }}
										>
											<ArrowDown
												size={14}
												className="text-white transition-transform duration-300 group-hover:translate-x-1"
												strokeWidth={2}
											/>
										</div>
										<span className="text-sm uppercase tracking-wider font-semibold font-FoundersGrotesk text-darkBlue">
											Impact
										</span>
									</div>
									<p className="text-base md:text-lg font-NeueMontreal text-darkBlue/90 leading-[1.7] pl-6">
										{item.impact}
									</p>
								</div>

								{/* Solution Section - Highlighted */}
								<div className="relative pt-6 border-t" style={{ borderColor: "rgba(106, 113, 136, 0.2)" }}>
									<div className="flex items-start gap-3">
										<div 
											className="p-2 rounded-full flex items-center justify-center w-10 h-10 flex-shrink-0"
											style={{ backgroundColor: "#5A7A6B" }}
										>
											<CheckCircle2
												size={20}
												className="text-white transition-transform duration-300 group-hover:scale-110"
												strokeWidth={2}
											/>
										</div>
										<div className="flex-1">
											<span className="text-sm uppercase tracking-wider font-semibold font-FoundersGrotesk text-darkBlue mb-2 block">
												Gestalty Solution
											</span>
											<p className="text-base md:text-lg font-semibold font-FoundersGrotesk text-darkBlue leading-[1.6]">
												{item.solution}
											</p>
										</div>
									</div>
								</div>

							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
