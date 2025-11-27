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
		<section className="w-full bg-offWhite padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-16">
					<div className="flex items-center gap-4 mb-6">
						<Heart size={40} className="text-primaryYellow" />
						<h2 className="text-3xl font-bold font-FoundersGrotesk text-darkBlue">
							Our Core Purpose
						</h2>
					</div>
					<p className="paragraph text-grayBlue max-w-4xl">
						At our core, we exist to bring structure, clarity, and confidence to exam preparation—transforming aspirants into disciplined, deliberate, and resilient learners.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-16 bg-beige/20 p-8 rounded-xl">
					<div className="flex items-center gap-4 mb-6">
						<Target size={40} className="text-primaryYellow" />
						<h2 className="text-3xl font-bold font-FoundersGrotesk text-darkBlue">
							How We Define Ourselves
						</h2>
					</div>
					<p className="paragraph text-grayBlue mb-4">
						A comprehensive platform that connects learners with mentors and parents, creating a closed-loop system for exam preparation.
					</p>
					<p className="paragraph text-grayBlue font-semibold mb-4">
						A system that makes:
					</p>
					<ul className="space-y-2 ml-6">
						<li className="flex items-start gap-3">
							<span className="text-primaryYellow font-bold">•</span>
							<p className="paragraph text-grayBlue">Learning measurable</p>
						</li>
						<li className="flex items-start gap-3">
							<span className="text-primaryYellow font-bold">•</span>
							<p className="paragraph text-grayBlue">Mentorship timely</p>
						</li>
						<li className="flex items-start gap-3">
							<span className="text-primaryYellow font-bold">•</span>
							<p className="paragraph text-grayBlue">Success predictable</p>
						</li>
					</ul>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-16">
					<div className="flex items-center gap-4 mb-6">
						<Layers size={40} className="text-primaryYellow" />
						<h2 className="text-3xl font-bold font-FoundersGrotesk text-darkBlue">
							Our Comprehensive Learning Framework
						</h2>
					</div>
					<p className="paragraph text-grayBlue mb-6 max-w-4xl">
						Gestalty represents one core belief:
					</p>
					<div className="bg-darkBlue/5 border-l-4 border-primaryYellow p-6 rounded-r-xl mb-6 max-w-4xl">
						<p className="paragraph text-grayBlue italic text-lg font-semibold">
							"When students understand how learning truly works, they become unstoppable."
						</p>
					</div>
					<p className="paragraph text-grayBlue mb-4">
						We built a system that:
					</p>
					<ul className="space-y-3">
						{frameworkPoints.map((point, index) => (
							<li key={index} className="flex items-start gap-3">
								<CheckCircle2 size={24} className="text-primaryYellow flex-shrink-0 mt-1" />
								<p className="paragraph text-grayBlue">{point}</p>
							</li>
						))}
					</ul>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="bg-darkBlue p-8 rounded-xl">
					<div className="flex items-center gap-4 mb-6">
						<Sparkles size={40} className="text-primaryYellow" />
						<h2 className="text-3xl font-bold font-FoundersGrotesk text-offWhite">
							What Makes Us Different
						</h2>
					</div>
					<p className="paragraph text-offWhite/80">
						In short, we built what conventional coaching could never offer: a cognitive, behavioral, and strategic operating system for students.
					</p>
				</motion.div>
			</div>
		</section>
	);
}

