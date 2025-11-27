"use client";
import { motion } from "framer-motion";
import {
	BarChart3,
	TrendingUp,
	Target,
	RotateCcw,
	Brain,
	Lightbulb,
	Map,
	Layers,
	Users,
	Handshake,
} from "lucide-react";
import { FeatureGrid } from "@/components";

const features = [
	{
		id: 1,
		icon: BarChart3,
		title: "Learning Analytics Dashboard",
		description: "Track every learning stage in real-time. Monitor Reading, Learning, Revision, and Practice stages with visual progress indicators. Know exactly where you stand at every moment of your preparation journey. Key Benefit: Transform invisible effort into visible progress.",
	},
	{
		id: 2,
		icon: TrendingUp,
		title: "Quantified Learning Quality",
		description: "Measure depth, not just duration. Go beyond time tracking to measure understanding depth, application ability, and retention strength. Quality over quantity, every single time. Key Benefit: Focus effort where it creates maximum impact.",
	},
	{
		id: 3,
		icon: Target,
		title: "SMART Goal Framework",
		description: "Structure your preparation with precision. Set Specific, Measurable, Achievable, Relevant, Time-bound objectives. Break overwhelming targets into actionable daily milestones. Key Benefit: Replace anxiety with clarity and direction.",
	},
	{
		id: 4,
		icon: RotateCcw,
		title: "Retention & Revision System",
		description: "Never forget what you've learned. AI-powered reminders based on spaced repetition science and cognitive forgetting curves ensure optimal retention and review timing. Key Benefit: 80%+ revision compliance dramatically reduces forgetting.",
	},
	{
		id: 5,
		icon: Brain,
		title: "Psychology Integration",
		description: "Every tool validated by cognitive science. No random features—every intervention backed by proven psychological research and learning science principles. Key Benefit: Trust that your preparation methods actually work.",
	},
	{
		id: 6,
		icon: Lightbulb,
		title: "Metacognitive Tools",
		description: "Learn how to learn more effectively. Develop planning, self-monitoring, and reflection skills that transform you from passive student to strategic learner. Key Benefit: Build skills that serve you beyond just one exam.",
	},
	{
		id: 7,
		icon: Map,
		title: "Challenge Map",
		description: "Build mastery progressively. Interactive roadmap identifies weak spots with step-by-step leveling system. Know exactly what to tackle next for continuous improvement. Key Benefit: Eliminate blind spots and knowledge gaps systematically.",
	},
	{
		id: 8,
		icon: Layers,
		title: "Multi-Layer Dashboards",
		description: "Real-time visibility for everyone. Separate dashboards for students, mentors, and parents show progress, intervention needs, and accountability metrics in one unified system. Key Benefit: Connected support system with transparency at every level.",
	},
	{
		id: 9,
		icon: Users,
		title: "Expert Mentor Community",
		description: "Strategic guidance when you need it. Access 1:1 strategic sessions, customized study plans, answer-writing evaluation, and mock interview preparation from experienced mentors. Key Benefit: Personalized expertise tailored to your learning style.",
	},
	{
		id: 10,
		icon: Handshake,
		title: "Accountability Partnerships",
		description: "Maintain consistency with peer support. Peer-matching system with regular check-ins and momentum tracking keeps you accountable and motivated throughout your journey. Key Benefit: Stay consistent with built-in support and encouragement.",
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
						10 Science-Driven Tools for Exam Mastery
					</h2>
					<p className="paragraph text-offWhite/80 max-w-2xl mx-auto">
						Each feature backed by cognitive science research and validated through real aspirant success stories.
					</p>
				</motion.div>

				<FeatureGrid features={features} columns={3} />
			</div>
		</section>
	);
}

