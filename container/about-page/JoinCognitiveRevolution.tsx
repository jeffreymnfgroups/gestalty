"use client";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const benefits = [
	"Cognitive clarity that cuts through confusion",
	"Strategic discipline that replaces random effort",
	"A system that respects their mind as much as their syllabus",
];

export default function JoinCognitiveRevolution() {
	return (
		<section className="w-full bg-lightBeige py-20 lg:py-32 rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto px-8 lg:px-16">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12 text-center">
					<div className="flex justify-center mb-8">
						<Sparkles className="w-16 h-16 text-primaryYellow" />
					</div>
					<h2 className="text-4xl lg:text-5xl font-bold font-FoundersGrotesk text-darkBlue mb-6">
						Join the Cognitive Revolution
					</h2>
					<h3 className="text-3xl lg:text-4xl font-bold font-FoundersGrotesk text-darkBlue mb-8">
						Let's Redefine What It Means to Study Smart
					</h3>
					<p className="text-lg lg:text-xl text-grayBlue max-w-4xl mx-auto mb-12">
						Join us in empowering the next generation with:
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-8 lg:gap-10 mb-12">
					{benefits.map((benefit, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="bg-white border-2 border-primaryYellow/50 rounded-2xl p-8 hover:border-primaryYellow hover:shadow-lg transition-all duration-300">
							<div className="flex items-start gap-3">
								<CheckCircle2 className="w-8 h-8 text-primaryYellow flex-shrink-0 mt-1" />
								<p className="text-lg lg:text-xl text-darkBlue font-medium">
									{benefit}
								</p>
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12">
					<div className="bg-white border-2 border-darkBlue/10 rounded-2xl p-12 mb-12">
						<h3 className="text-3xl font-bold font-FoundersGrotesk text-darkBlue mb-5">
							Transform Your Learning
						</h3>
						<p className="text-xl text-grayBlue">
							Convert abstract learning traits into measurable improvements. Study like a cognitive scientist.
						</p>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center">
					<h3 className="text-3xl font-bold font-FoundersGrotesk text-darkBlue mb-8">
						Ready to Transform Preparation into Performance?
					</h3>
					<div className="flex flex-wrap justify-center gap-6">
						<Link
							href="/features"
							className="group flex items-center gap-2 bg-primaryYellow text-darkBlue px-10 py-5 rounded-full text-lg lg:text-xl font-bold font-FoundersGrotesk hover:shadow-2xl hover:scale-105 transition-all duration-300">
							<span>Explore Features</span>
							<ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
						</Link>
						<Link
							href="/contact"
							className="group flex items-center gap-2 bg-darkBlue text-offWhite px-10 py-5 rounded-full text-lg lg:text-xl font-bold font-FoundersGrotesk hover:shadow-2xl hover:scale-105 transition-all duration-300">
							<span>Schedule Demo</span>
							<ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
						</Link>
						<Link
							href="/signup"
							className="group flex items-center gap-2 bg-transparent border-2 border-primaryYellow text-darkBlue px-10 py-5 rounded-full text-lg lg:text-xl font-bold font-FoundersGrotesk hover:bg-primaryYellow hover:shadow-2xl hover:scale-105 transition-all duration-300">
							<span>Start Free Trial</span>
							<ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
						</Link>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

