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
		<section className="w-full bg-gradient-to-br from-primaryYellow/10 via-beige/20 to-primaryYellow/5 padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12 text-center">
					<div className="flex justify-center mb-6">
						<Sparkles size={48} className="text-primaryYellow" />
					</div>
					<h2 className="sub-heading font-bold font-FoundersGrotesk text-darkBlue mb-6">
						Join the Cognitive Revolution
					</h2>
					<h3 className="text-3xl font-bold font-FoundersGrotesk text-darkBlue mb-8">
						Let's Redefine What It Means to Study Smart
					</h3>
					<p className="paragraph text-grayBlue max-w-3xl mx-auto mb-8">
						Join us in empowering the next generation with:
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 mb-12">
					{benefits.map((benefit, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="bg-offWhite p-6 rounded-xl border-2 border-primaryYellow/30 hover:border-primaryYellow transition-all">
							<div className="flex items-start gap-3">
								<CheckCircle2 size={24} className="text-primaryYellow flex-shrink-0 mt-1" />
								<p className="paragraph text-darkBlue font-medium">
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
					<div className="bg-darkBlue p-8 rounded-xl mb-8">
						<h3 className="text-2xl font-bold font-FoundersGrotesk text-offWhite mb-4">
							Transform Your Learning
						</h3>
						<p className="paragraph text-offWhite/80 mb-6">
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
					<h3 className="text-2xl font-bold font-FoundersGrotesk text-darkBlue mb-6">
						Ready to Transform Preparation into Performance?
					</h3>
					<div className="flex flex-wrap justify-center gap-4">
						<Link
							href="/features"
							className="group flex items-center gap-2 bg-primaryYellow text-darkBlue px-8 py-4 rounded-full font-semibold font-FoundersGrotesk hover:bg-primaryYellow/90 transition-all hover:scale-105">
							<span>Explore Features</span>
							<ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
						</Link>
						<Link
							href="/contact"
							className="group flex items-center gap-2 bg-darkBlue text-offWhite px-8 py-4 rounded-full font-semibold font-FoundersGrotesk hover:bg-darkBlue/90 transition-all hover:scale-105">
							<span>Schedule Demo</span>
							<ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
						</Link>
						<Link
							href="/signup"
							className="group flex items-center gap-2 border-2 border-primaryYellow text-darkBlue px-8 py-4 rounded-full font-semibold font-FoundersGrotesk hover:bg-primaryYellow transition-all hover:scale-105">
							<span>Start Free Trial</span>
							<ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
						</Link>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

