"use client";
import { motion } from "framer-motion";
import { Heart, Target, Layers, Sparkles, CheckCircle2 } from "lucide-react";

const frameworkPoints = [
	"Reveals blind spots students never realize they have",
	"Encourages deliberate learning, not passive studying",
	"Promotes intrinsic excellence through structure and self-awareness",
	"Strengthens high-order behaviors, not just subject notes",
	"Captures invisible metrics that actually drive success",
	"Transforms preparation into a strategic, psychological, and behavioral discipline",
];

export default function WhatWeBuiltFor() {
	return (
		<section className="w-full bg-offWhite py-20 lg:py-28 rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto px-8 lg:px-16">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-16">
					<div className="flex items-center gap-5 mb-6">
						<Heart className="w-14 h-14 text-primaryYellow" />
						<h2 className="text-3xl lg:text-4xl font-bold font-FoundersGrotesk text-darkBlue">
							Our Core Purpose
						</h2>
					</div>
					<p className="text-lg lg:text-xl text-grayBlue leading-relaxed max-w-5xl">
						At our core, we exist to bring structure, clarity, and confidence to exam preparation—transforming aspirants into disciplined, deliberate, and resilient learners.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-16 bg-lightBeige border-2 border-primaryYellow/40 rounded-2xl p-10">
					<div className="flex items-center gap-5 mb-6">
						<Target className="w-14 h-14 text-primaryYellow" />
						<h2 className="text-3xl lg:text-4xl font-bold font-FoundersGrotesk text-darkBlue">
							How We Define Ourselves
						</h2>
					</div>
					<p className="text-lg lg:text-xl text-grayBlue leading-relaxed mb-4">
						A comprehensive platform that connects learners with mentors and parents, creating a closed-loop system for exam preparation.
					</p>
					<p className="text-lg text-grayBlue font-semibold mb-4">
						A system that makes:
					</p>
					<ul className="space-y-2 ml-6">
						<li className="flex items-start gap-3">
							<span className="text-xl text-primaryYellow font-bold">•</span>
							<p className="text-lg text-grayBlue">Learning measurable</p>
						</li>
						<li className="flex items-start gap-3">
							<span className="text-xl text-primaryYellow font-bold">•</span>
							<p className="text-lg text-grayBlue">Mentorship timely</p>
						</li>
						<li className="flex items-start gap-3">
							<span className="text-xl text-primaryYellow font-bold">•</span>
							<p className="text-lg text-grayBlue">Success predictable</p>
						</li>
					</ul>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-16">
					<div className="flex items-center gap-5 mb-6">
						<Layers className="w-14 h-14 text-primaryYellow" />
						<h2 className="text-3xl lg:text-4xl font-bold font-FoundersGrotesk text-darkBlue">
							Our Comprehensive Learning Framework
						</h2>
					</div>
					<p className="text-lg lg:text-xl text-grayBlue leading-relaxed mb-6 max-w-5xl">
						Gestalty represents one core belief:
					</p>
					<div className="bg-lightBeige border-l-4 border-primaryYellow p-10 rounded-r-2xl mb-8 max-w-4xl">
						<p className="text-xl lg:text-2xl text-grayBlue italic font-semibold leading-relaxed">
							"When students understand how learning truly works, they become unstoppable."
						</p>
					</div>
					<p className="text-lg lg:text-xl text-grayBlue leading-relaxed mb-4">
						We built a system that:
					</p>
					<ul className="space-y-3">
						{frameworkPoints.map((point, index) => (
							<li key={index} className="flex items-start gap-3">
								<CheckCircle2 className="w-7 h-7 text-primaryYellow flex-shrink-0 mt-1" />
								<p className="text-lg lg:text-xl text-grayBlue leading-relaxed">{point}</p>
							</li>
						))}
					</ul>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="bg-white border-2 border-darkBlue/10 rounded-2xl p-10 shadow-sm">
					<div className="flex items-center gap-5 mb-6">
						<Sparkles className="w-14 h-14 text-primaryYellow" />
						<h2 className="text-3xl lg:text-4xl font-bold font-FoundersGrotesk text-darkBlue">
							What Makes Us Different
						</h2>
					</div>
					<p className="text-lg lg:text-xl text-grayBlue leading-relaxed">
						In short, we built what conventional coaching could never offer: a cognitive, behavioral, and strategic operating system for students.
					</p>
				</motion.div>
			</div>
		</section>
	);
}

