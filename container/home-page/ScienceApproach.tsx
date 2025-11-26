"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { 
	ArrowRight, 
	Microscope, 
	BookOpen, 
	BarChart3,
	Target,
	Focus,
	Lightbulb,
	TrendingUp,
	User,
	MessageCircle,
	RotateCcw
} from "lucide-react";

const principles = [
	{
		icon: Microscope,
		title: "Evidence-Based Methods",
		description: "Every feature is backed by cognitive science research and proven learning theories.",
	},
	{
		icon: BookOpen,
		title: "Spaced Repetition",
		description: "Optimized review schedules that enhance long-term memory retention.",
	},
	{
		icon: BarChart3,
		title: "Data-Driven Insights",
		description: "Track your progress with detailed analytics and personalized recommendations.",
	},
];

const transformationAreas = [
	{
		area: "Planning",
		icon: Target,
		before: {
			quote: "I feel lost...",
			description: "Random study hours with no clarity or control"
		},
		after: {
			quote: "I know exactly where I am.",
			description: "Data-driven stages convert feelings into facts, defining measurable goals and milestones"
		}
	},
	{
		area: "Self-Control",
		icon: Focus,
		before: {
			quote: "I can't stay on track...",
			description: "Distractions and scattered attention fragment study time; inconsistent routines lead to procrastination and burnout"
		},
		after: {
			quote: "I harness focus effortlessly.",
			description: "AI nudges and behavioral cues build resilience, forging steady habits for deep, uninterrupted learning"
		}
	},
	{
		area: "Strategy",
		icon: Lightbulb,
		before: {
			quote: "Wasting time guessing.",
			description: "Trial-and-error approaches dominate"
		},
		after: {
			quote: "Science-backed strategies.",
			description: "Predictive intelligence intervenes early, providing evidence-based paths for maximum efficiency"
		}
	},
	{
		area: "Progress",
		icon: TrendingUp,
		before: {
			quote: "Am I doing enough?",
			description: "Relying on subjective feelings of effort"
		},
		after: {
			quote: "I have completed Stage 3.",
			description: "Real-time analytics and blended scientific models show actual learning progress objectively"
		}
	},
	{
		area: "Personalization",
		icon: User,
		before: {
			quote: "Everyone studies the same way.",
			description: "One-size-fits-all structure"
		},
		after: {
			quote: "Built for me.",
			description: "Adaptive systems tailor schedules and focus areas, connecting cognitive patterns with optimal study flow"
		}
	},
	{
		area: "Support",
		icon: MessageCircle,
		before: {
			quote: "I am stuck.",
			description: "Limited help and inconsistent communication"
		},
		after: {
			quote: "Mentor feedback received.",
			description: "A transparent ecosystem connects students, mentors, and parents with continuous visibility and timely guidance"
		}
	},
];

export default function ScienceApproach() {
	return (
		<>
			<StrategicLayer />
		</>
	);
}

function StrategicLayer() {
	return (
		<section className="w-full bg-gradient-to-b from-offWhite via-beige/10 to-offWhite padding-y relative overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 neuron-pattern opacity-30" />
			
			<div className="max-w-[1600px] mx-auto padding-x relative z-10">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-8 sm:mb-10 lg:mb-12 text-center">
					<h2 className="sub-heading font-bold font-FoundersGrotesk text-darkBlue mb-3 sm:mb-4">
						Strategic Layer That Anchors Your Learning
					</h2>
					<p className="paragraph text-grayBlue max-w-4xl mx-auto">
						Enabling deep work, strategic effort, and habit-driven progress through a scientific approach to learning.
					</p>
				</motion.div>

				{/* Path to Excellence Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mb-8">
					<h3 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px] font-bold font-FoundersGrotesk text-darkBlue mb-6 sm:mb-8 text-center leading-tight px-2">
						Aspirant Transformation: Journey from Confusion to Clarity with Gestalty
					</h3>

					{/* Flip Cards Grid - Compact & Responsive */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-2.5 lg:gap-2 xl:gap-2.5">
						{transformationAreas.map((item, index) => (
							<TransformationCard key={index} item={item} index={index} />
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}

function TransformationCard({ item, index }: { item: typeof transformationAreas[0]; index: number }) {
	const [isFlipped, setIsFlipped] = useState(false);
	const Icon = item.icon;

	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: index * 0.06 }}
			className="h-[360px] sm:h-[380px] lg:h-[400px] xl:h-[420px] perspective-1000"
			style={{ perspective: "1000px" }}
			onClick={() => setIsFlipped(!isFlipped)}
			onMouseEnter={() => setIsFlipped(true)}
			onMouseLeave={() => setIsFlipped(false)}>
			<div className="relative w-full h-full preserve-3d" style={{ transformStyle: "preserve-3d" }}>
				{/* Card Container with 3D Flip */}
				<motion.div
					animate={{ rotateY: isFlipped ? 180 : 0 }}
					transition={{ duration: 0.6, ease: "easeInOut" }}
					className="relative w-full h-full"
					style={{ transformStyle: "preserve-3d" }}>
					
					{/* Before Side (Front) */}
					<div
						className="absolute inset-0 w-full h-full backface-hidden rounded-lg p-4 sm:p-5 flex flex-col cursor-pointer"
						style={{ 
							backfaceVisibility: "hidden",
							transform: "rotateY(0deg)"
						}}>
						<div className="bg-offWhite border border-grayBlue/20 rounded-lg p-4 sm:p-5 h-full flex flex-col hover:border-grayBlue/40 hover:shadow-lg transition-all duration-300">
							{/* Badge & Icon */}
							<div className="flex items-center justify-between mb-3">
								<span className="px-2.5 py-1 bg-grayBlue/10 text-grayBlue text-[10px] sm:text-xs font-semibold font-NeueMontreal rounded uppercase tracking-wide">
									Before
								</span>
								<div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-grayBlue/5 flex items-center justify-center">
									<Icon size={18} className="sm:w-5 sm:h-5 text-grayBlue/60" />
								</div>
							</div>
							
							{/* Area Title */}
							<h4 className="text-lg sm:text-xl font-bold font-FoundersGrotesk text-darkBlue mb-3">
								{item.area}
							</h4>
							
							{/* Quote */}
							<div className="mb-3 flex-1">
								<p className="text-base sm:text-lg font-semibold font-NeueMontreal text-darkBlue mb-2.5 italic">
									"{item.before.quote}"
								</p>
								<p className="text-sm sm:text-base text-grayBlue leading-relaxed">
									{item.before.description}
								</p>
							</div>
							
							{/* Flip Indicator */}
							<div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-grayBlue/60 mt-auto pt-3 border-t border-grayBlue/10">
								<RotateCcw size={12} />
								<span className="font-NeueMontreal">Hover to flip</span>
							</div>
						</div>
					</div>

					{/* After Side (Back) */}
					<div
						className="absolute inset-0 w-full h-full backface-hidden rounded-lg p-4 sm:p-5 flex flex-col cursor-pointer"
						style={{ 
							backfaceVisibility: "hidden",
							transform: "rotateY(180deg)"
						}}>
						<div className="bg-darkBlue border-2 border-primaryYellow rounded-lg p-4 sm:p-5 h-full flex flex-col hover:border-primaryYellow hover:shadow-xl transition-all duration-300">
							{/* Badge & Icon */}
							<div className="flex items-center justify-between mb-3">
								<span className="px-2.5 py-1 bg-primaryYellow text-darkBlue text-[10px] sm:text-xs font-semibold font-NeueMontreal rounded uppercase tracking-wide">
									With Gestalty
								</span>
								<div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primaryYellow/20 flex items-center justify-center">
									<Icon size={18} className="sm:w-5 sm:h-5 text-primaryYellow" />
								</div>
							</div>
							
							{/* Area Title */}
							<h4 className="text-lg sm:text-xl font-bold font-FoundersGrotesk text-offWhite mb-3">
								{item.area}
							</h4>
							
							{/* Quote */}
							<div className="mb-3 flex-1">
								<p className="text-base sm:text-lg font-semibold font-NeueMontreal text-offWhite mb-2.5 italic">
									"{item.after.quote}"
								</p>
								<p className="text-sm sm:text-base text-offWhite/80 leading-relaxed">
									{item.after.description}
								</p>
							</div>
							
							{/* Success Indicator */}
							<div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-offWhite/70 mt-auto pt-3 border-t border-primaryYellow/30">
								<TrendingUp size={12} />
								<span className="font-NeueMontreal">Transformation achieved</span>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
}

