"use client";
import { motion } from "framer-motion";
import {
	Brain,
	Target,
	TrendingUp,
	BookOpen,
	Users,
	Zap,
	BarChart3,
	Clock,
	CheckCircle2,
	Sparkles,
} from "lucide-react";
import { FeatureGrid } from "@/components";

const features = [
	{
		id: 1,
		icon: Brain,
		title: "AI-Guided Learning Paths",
		description: "Personalized study plans that adapt to your learning pace and optimize for maximum retention.",
	},
	{
		id: 2,
		icon: Target,
		title: "Performance Analytics",
		description: "Real-time tracking of your progress with detailed insights into strengths and areas for improvement.",
	},
	{
		id: 3,
		icon: TrendingUp,
		title: "Adaptive Assessments",
		description: "Smart tests that adjust difficulty based on your performance, ensuring optimal challenge level.",
	},
	{
		id: 4,
		icon: BookOpen,
		title: "Science-Based Curriculum",
		description: "Content structured using proven learning methodologies like spaced repetition and active recall.",
	},
	{
		id: 5,
		icon: Users,
		title: "Expert Mentorship",
		description: "Access to experienced educators and cognitive scientists who guide your preparation journey.",
	},
	{
		id: 6,
		icon: Zap,
		title: "Efficient Study Schedules",
		description: "Optimized timetables that balance all subjects while maximizing learning effectiveness.",
	},
	{
		id: 7,
		icon: BarChart3,
		title: "Progress Visualization",
		description: "Clear visual representations of your learning journey with actionable insights.",
	},
	{
		id: 8,
		icon: Clock,
		title: "Time Management Tools",
		description: "Smart scheduling and time tracking to help you make the most of every study session.",
	},
	{
		id: 9,
		icon: CheckCircle2,
		title: "Comprehensive Question Bank",
		description: "Extensive collection of questions aligned with NEET, JEE, and UPSC exam patterns.",
	},
	{
		id: 10,
		icon: Sparkles,
		title: "Cognitive Load Optimization",
		description: "Content presentation designed to minimize cognitive overload and enhance comprehension.",
	},
];

export default function FeaturesGridSection() {
	return (
		<section className="w-full bg-darkBlue padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-16 text-center">
					<h2 className="sub-heading font-bold font-FoundersGrotesk text-offWhite mb-4">
						Complete Feature Set
					</h2>
					<p className="paragraph text-offWhite/80 max-w-2xl mx-auto">
						Everything you need to excel in your exams, all in one intelligent platform.
					</p>
				</motion.div>

				<FeatureGrid features={features} columns={3} />
			</div>
		</section>
	);
}

