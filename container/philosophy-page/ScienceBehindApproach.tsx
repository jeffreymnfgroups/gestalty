"use client";
import { motion } from "framer-motion";
import { Brain, BookOpen, Lightbulb, Target, Repeat, Heart } from "lucide-react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const foundations = [
	{
		id: "gestalt",
		icon: Brain,
		title: "Gestalt Psychology: The Organised Whole Is Greater Than the Sum of Its Parts",
		corePrinciple: "In Learning, it means connecting knowledge pieces into complete understanding where you're equipped to apply, analyze, and create.",
		whatGestaltyDoes: "Transforms fragmented study efforts—scattered notes, random revisions, disconnected practice—into unified mastery systems where every learning action contributes to deep understanding through pattern recognition and unit-based learning.",
	},
	{
		id: "andragogy",
		icon: BookOpen,
		title: "Andragogy: Adult Learning Theory",
		quote: '"You learn best when you\'re the driver—not a passenger."',
		description: "Self-directed learning powers intrinsic motivation in aspirants and how you can build autonomy into your tracking system.",
		pillars: [
			"Self-Direction – You choose your learning path",
			"Internal Motivation – You prepare because you want to succeed",
			"Problem-Centered – You don't memorize blindly; you solve",
		],
		whyItMatters: "High-stakes aspirants learn best when they feel ownership, control, and relevance—exactly what Andragogy provides.",
	},
	{
		id: "constructivism",
		icon: Lightbulb,
		title: "Constructivism: Active Knowledge Building",
		quote: '"You don\'t absorb knowledge. You build it, brick by brick."',
		keys: [
			"Learning = Active construction, not passive intake",
			"Prior knowledge affects what you learn next",
			"Reflection strengthens what you build",
		],
		whyItMatters: "When learners construct their own understanding, retention soars. Learning becomes meaningful, sticky, and transferable—critical for high-stakes exams where problem-solving is king.",
	},
	{
		id: "metacognitive",
		icon: Target,
		title: "Metacognitive Regulation: Thinking About Your Thinking",
		quote: '"Learning about your learning makes you unstoppable."',
		steps: [
			'Plan – "What will I study today? For how long?"',
			'Monitor – "Am I understanding this or just reading?"',
			'Evaluate – "What did I retain? What needs revision?"',
		],
		whyItMatters: "Metacognitive regulation turns you from a content consumer into a strategic learner through strategic adaptation and self-correction.",
	},
	{
		id: "deliberate",
		icon: Repeat,
		title: "Deliberate Practice: The Science of Mastery",
		quote: '"Practice doesn\'t make perfect. Perfect practice does."',
		conditions: [
			'Specific goals – "I will master Pulmonary Physiology MCQs today"',
			'Constant feedback – "Why did I get this wrong?"',
			"No autopilot – Practice should be mentally demanding",
		],
		whyItMatters: "If you want rank-worthy mastery, practice like a surgeon, not a scribbler. Analyze. Adapt. Refine. Repeat.",
	},
	{
		id: "self-determination",
		icon: Heart,
		title: "Self-Determination Theory: Your Psychological Foundation",
		quote: '"You become unstoppable when your learning is yours."',
		needs: [
			{
				need: "Autonomy",
				meaning: '"I control this"',
				inLearning: "Choose your methods, own your path",
			},
			{
				need: "Competence",
				meaning: '"I\'m improving"',
				inLearning: "Track progress, feel capable",
			},
			{
				need: "Relatedness",
				meaning: '"I\'m connected"',
				inLearning: "Study with mentors, build community",
			},
		],
		whyItMatters: "Toppers don't just have \"discipline\"—they're deeply self-determined. They act not out of fear or pressure, but out of purpose, mastery, and connectedness.",
	},
];

export default function ScienceBehindApproach() {
	const [expanded, setExpanded] = useState<string | null>(null);

	const toggleExpanded = (id: string) => {
		setExpanded(expanded === id ? null : id);
	};

	return (
		<section className="w-full bg-darkBlue padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12 text-center">
					<h2 className="sub-heading font-bold font-FoundersGrotesk text-offWhite mb-6">
						The Science Behind Our Approach
					</h2>
					<h3 className="text-3xl font-bold font-FoundersGrotesk text-offWhite mb-4">
						Theoretical Foundations
					</h3>
				</motion.div>

				<div className="space-y-4 max-w-6xl mx-auto">
					{foundations.map((foundation, index) => {
						const Icon = foundation.icon;
						const isExpanded = expanded === foundation.id;
						return (
							<motion.div
								key={foundation.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="bg-offWhite/5 backdrop-blur-sm border border-primaryYellow/20 rounded-xl overflow-hidden hover:border-primaryYellow/50 transition-all duration-300">
								<button
									onClick={() => toggleExpanded(foundation.id)}
									className="w-full p-6 flex items-center justify-between text-left hover:bg-offWhite/5 transition-all">
									<div className="flex items-center gap-4 flex-1">
										<div className="flex-shrink-0">
											<Icon size={32} className="text-primaryYellow" />
										</div>
										<h3 className="text-xl font-semibold font-FoundersGrotesk text-offWhite">
											{foundation.title}
										</h3>
									</div>
									<ChevronDown
										size={24}
										className={`text-primaryYellow flex-shrink-0 transition-transform ${isExpanded ? "rotate-180" : ""}`}
									/>
								</button>
								{isExpanded && (
									<motion.div
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: "auto", opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.3 }}
										className="px-6 pb-6 border-t border-primaryYellow/20">
										<div className="pt-6 space-y-4">
											{foundation.quote && (
												<p className="paragraph text-primaryYellow font-semibold text-lg italic">
													{foundation.quote}
												</p>
											)}
											{foundation.corePrinciple && (
												<div>
													<h4 className="text-lg font-semibold font-FoundersGrotesk text-offWhite mb-2">
														Core Principle:
													</h4>
													<p className="paragraph text-offWhite/80">
														{foundation.corePrinciple}
													</p>
												</div>
											)}
											{foundation.whatGestaltyDoes && (
												<div>
													<h4 className="text-lg font-semibold font-FoundersGrotesk text-offWhite mb-2">
														What Gestalty Does:
													</h4>
													<p className="paragraph text-offWhite/80">
														{foundation.whatGestaltyDoes}
													</p>
												</div>
											)}
											{foundation.description && (
												<p className="paragraph text-offWhite/80">
													{foundation.description}
												</p>
											)}
											{foundation.pillars && (
												<div>
													<h4 className="text-lg font-semibold font-FoundersGrotesk text-offWhite mb-3">
														Three Pillars:
													</h4>
													<ul className="space-y-2">
														{foundation.pillars.map((pillar, i) => (
															<li key={i} className="flex items-start gap-2">
																<span className="text-primaryYellow mt-1.5">•</span>
																<span className="paragraph text-offWhite/80">{pillar}</span>
															</li>
														))}
													</ul>
												</div>
											)}
											{foundation.keys && (
												<div>
													<h4 className="text-lg font-semibold font-FoundersGrotesk text-offWhite mb-3">
														Three Keys:
													</h4>
													<ul className="space-y-2">
														{foundation.keys.map((key, i) => (
															<li key={i} className="flex items-start gap-2">
																<span className="text-primaryYellow mt-1.5">•</span>
																<span className="paragraph text-offWhite/80">{key}</span>
															</li>
														))}
													</ul>
												</div>
											)}
											{foundation.steps && (
												<div>
													<h4 className="text-lg font-semibold font-FoundersGrotesk text-offWhite mb-3">
														Three Steps:
													</h4>
													<ul className="space-y-2">
														{foundation.steps.map((step, i) => (
															<li key={i} className="flex items-start gap-2">
																<span className="text-primaryYellow mt-1.5">•</span>
																<span className="paragraph text-offWhite/80">{step}</span>
															</li>
														))}
													</ul>
												</div>
											)}
											{foundation.conditions && (
												<div>
													<h4 className="text-lg font-semibold font-FoundersGrotesk text-offWhite mb-3">
														Three Conditions:
													</h4>
													<ul className="space-y-2">
														{foundation.conditions.map((condition, i) => (
															<li key={i} className="flex items-start gap-2">
																<span className="text-primaryYellow mt-1.5">•</span>
																<span className="paragraph text-offWhite/80">{condition}</span>
															</li>
														))}
													</ul>
												</div>
											)}
											{foundation.needs && (
												<div>
													<h4 className="text-lg font-semibold font-FoundersGrotesk text-offWhite mb-3">
														Three Core Psychological Needs:
													</h4>
													<div className="overflow-x-auto">
														<table className="w-full border-collapse">
															<thead>
																<tr className="border-b border-primaryYellow/30">
																	<th className="text-left py-3 px-4 text-offWhite font-semibold">Psychological Need</th>
																	<th className="text-left py-3 px-4 text-offWhite font-semibold">What It Means</th>
																	<th className="text-left py-3 px-4 text-offWhite font-semibold">In Your Learning</th>
																</tr>
															</thead>
															<tbody>
																{foundation.needs.map((need, i) => (
																	<tr key={i} className="border-b border-primaryYellow/10">
																		<td className="py-3 px-4 text-offWhite font-medium">{need.need}</td>
																		<td className="py-3 px-4 text-offWhite/80">{need.meaning}</td>
																		<td className="py-3 px-4 text-offWhite/80">{need.inLearning}</td>
																	</tr>
																))}
															</tbody>
														</table>
													</div>
												</div>
											)}
											{foundation.whyItMatters && (
												<div className="mt-4 pt-4 border-t border-primaryYellow/20">
													<h4 className="text-lg font-semibold font-FoundersGrotesk text-offWhite mb-2">
														Why It Matters:
													</h4>
													<p className="paragraph text-offWhite/80">
														{foundation.whyItMatters}
													</p>
												</div>
											)}
										</div>
									</motion.div>
								)}
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

