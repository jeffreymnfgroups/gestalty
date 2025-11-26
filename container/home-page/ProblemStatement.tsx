"use client";
import { motion } from "framer-motion";
import { AlertTriangle, Brain, Target, Clock, TrendingDown, BarChart3, Zap, Repeat, ArrowRight } from "lucide-react";

const cognitiveBiases = [
	{
		name: "Illusion of Fluency",
		description: "Mistaking familiarity for mastery — \"I read it, so I know it\"",
		icon: Brain,
		color: "from-red-500/20 to-orange-500/10",
		borderColor: "border-red-500/30",
		iconColor: "text-red-500",
		// Row 1: Standard card
		className: "sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1"
	},
	{
		name: "Recency Bias",
		description: "Assuming recently reviewed topics are strong without true recall testing",
		icon: Clock,
		color: "from-orange-500/20 to-yellow-500/10",
		borderColor: "border-orange-500/30",
		iconColor: "text-orange-500",
		// Row 1: Wide card (spans 2 columns)
		className: "sm:col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2"
	},
	{
		name: "Planning Fallacy",
		description: "Underestimating effort and time needed — \"I'll finish this chapter in 1 hour\" (actually takes 4)",
		icon: Target,
		color: "from-yellow-500/20 to-amber-500/10",
		borderColor: "border-yellow-500/30",
		iconColor: "text-yellow-500",
		// Row 2: Wide card (spans 2 columns)
		className: "sm:col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2"
	},
	{
		name: "Overconfidence Bias",
		description: "Overrating ability and preparedness, leading to skipped revisions",
		icon: TrendingDown,
		color: "from-amber-500/20 to-primaryYellow/10",
		borderColor: "border-amber-500/30",
		iconColor: "text-amber-500",
		// Row 2: Standard card
		className: "sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1"
	},
	{
		name: "Illusion of Progress",
		description: "Feeling 100% complete after only partial work",
		icon: BarChart3,
		color: "from-primaryYellow/20 to-lime-500/10",
		borderColor: "border-primaryYellow/30",
		iconColor: "text-primaryYellow",
		// Row 3: Standard card
		className: "sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1"
	},
	{
		name: "Overestimation",
		description: "Believing more is accomplished than reality reflects",
		icon: Zap,
		color: "from-lime-500/20 to-green-500/10",
		borderColor: "border-lime-500/30",
		iconColor: "text-lime-500",
		// Row 3: Standard card
		className: "sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1"
	},
	{
		name: "Availability Bias",
		description: "Practicing only familiar or easy questions while ignoring difficult areas",
		icon: AlertTriangle,
		color: "from-green-500/20 to-teal-500/10",
		borderColor: "border-green-500/30",
		iconColor: "text-green-500",
		// Row 3: Standard card
		className: "sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1"
	},
	{
		name: "Consistency Gap",
		description: "Distractions and procrastination causing intermittent effort and knowledge gaps",
		icon: Repeat,
		color: "from-teal-500/20 to-cyan-500/10",
		borderColor: "border-teal-500/30",
		iconColor: "text-teal-500",
		// Row 4: Wide card (spans 2 columns)
		className: "sm:col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2"
	},
	{
		name: "Strategic Misalignment",
		description: "Logging many study hours but seeing little actual improvement due to poor alignment between effort and effective strategies",
		icon: Brain,
		color: "from-cyan-500/20 to-blue-500/10",
		borderColor: "border-cyan-500/30",
		iconColor: "text-cyan-500",
		// Row 4: Standard card
		className: "sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1"
	},
];

export default function ProblemStatement() {
	return (
		<section className="w-full bg-gradient-to-b from-offWhite via-beige/20 to-offWhite relative pt-24 sm:pt-28 lg:pt-32 pb-24 sm:pb-28 lg:pb-32 overflow-hidden">
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
						transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
						className="text-center mb-12 sm:mb-16 lg:mb-20">
						{/* Headline */}
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[64px] xl:text-[72px] font-bold font-FoundersGrotesk text-darkBlue tracking-[-0.02em] leading-[1.1] mb-4 sm:mb-6">
							Why Traditional Preparation Fails
						</motion.h2>

						{/* Sub-Headline */}
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] font-medium font-NeueMontreal text-darkBlue/80 leading-[1.6] max-w-4xl mx-auto">
							Most aspirants struggle not from lack of effort, but from fighting invisible cognitive barriers that traditional methods can't address.
						</motion.p>
					</motion.div>

					{/* Cognitive Biases Section - Bento Grid */}
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="mb-12 sm:mb-16">
						{/* Section Title */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="mb-8 sm:mb-10 lg:mb-12">
							<h3 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold font-FoundersGrotesk text-darkBlue mb-2">
								Cognitive Biases Aspirants Face
							</h3>
							<p className="text-[16px] sm:text-[18px] md:text-[20px] font-medium font-NeueMontreal text-primaryYellow italic">
								The Hidden Enemies of Exam Success:
							</p>
						</motion.div>

						{/* Biases Grid - Updated to Bento Layout */}
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-6">
							{cognitiveBiases.map((bias, index) => {
								const Icon = bias.icon;
								return (
									<motion.div
										key={index}
										initial={{ opacity: 0, y: 30 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true, margin: "-50px" }}
										transition={{
											duration: 0.5,
											delay: 0.1 * index,
											ease: [0.33, 1, 0.68, 1]
										}}
										whileHover={{ y: -5, scale: 1.01 }}
										className={`group relative ${bias.className}`}>
										{/* Card */}
										<div className={`relative p-6 sm:p-7 lg:p-8 rounded-2xl bg-gradient-to-br ${bias.color} border-2 ${bias.borderColor} backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:border-opacity-60 flex flex-col min-h-[200px]`}
											style={{
												boxShadow: "0 4px 20px rgba(25, 37, 76, 0.08)",
											}}>
											{/* Icon */}
											<div className="mb-4 sm:mb-5">
												<div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/80 backdrop-blur-sm ${bias.iconColor} group-hover:scale-110 transition-transform duration-300`}
													style={{
														boxShadow: "0 2px 10px rgba(25, 37, 76, 0.1)",
													}}>
													<Icon size={24} className="sm:w-7 sm:h-7" />
												</div>
											</div>

											{/* Content */}
											<div className="flex-grow">
												<h4 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold font-FoundersGrotesk text-darkBlue mb-3 sm:mb-4 leading-tight">
													{bias.name}
												</h4>
												<p className="text-[14px] sm:text-[15px] md:text-[16px] font-NeueMontreal text-darkBlue/70 leading-[1.6]">
													{bias.description}
												</p>
											</div>

											{/* Decorative Element */}
											<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
												<ArrowRight
													size={20}
													className={`${bias.iconColor} rotate-[-45deg]`}
												/>
											</div>
										</div>
									</motion.div>
								);
							})}
						</div>
					</motion.div>

					{/* Bottom CTA/Insight */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.8 }}
						className="mt-12 sm:mt-16 lg:mt-20 text-center">
						<div className="inline-block p-6 sm:p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-darkBlue/5 to-darkBlue/10 border-2 border-primaryYellow/30 backdrop-blur-sm max-w-3xl"
							style={{
								boxShadow: "0 8px 30px rgba(25, 37, 76, 0.1)",
							}}>
							<p className="text-[16px] sm:text-[18px] md:text-[20px] font-medium font-NeueMontreal text-darkBlue leading-[1.7]">
								<span className="font-semibold text-primaryYellow">The Solution:</span>{" "}
								A platform that identifies and counteracts these biases through data-driven insights,
								adaptive learning, and cognitive science principles.
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}