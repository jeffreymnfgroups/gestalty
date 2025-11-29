"use client";
import { motion } from "framer-motion";
import { HelpCircle, Sparkles, Quote } from "lucide-react";

export default function QuestionThatChanged() {
	return (
		<section className="w-full bg-lightBeige py-20 lg:py-28 rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto px-8 lg:px-16">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12 text-center">
					<div className="flex justify-center gap-4 mb-8">
						<HelpCircle className="w-16 h-16 text-primaryYellow" />
						<Sparkles className="w-16 h-16 text-primaryYellow" />
					</div>
					<h2 className="text-4xl lg:text-5xl font-bold font-FoundersGrotesk text-darkBlue mb-8">
						Two Questions That Ignited Gestalty
					</h2>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-8 lg:gap-10 mb-12">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="bg-white border-2 border-primaryYellow/40 rounded-2xl p-12 shadow-sm hover:border-primaryYellow hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
						<div className="flex items-start gap-4 mb-4">
							<HelpCircle className="w-12 h-12 text-primaryYellow flex-shrink-0" />
							<h3 className="text-2xl lg:text-3xl font-bold font-FoundersGrotesk text-darkBlue leading-snug">
								What if learning could be made visible?
							</h3>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="bg-white border-2 border-primaryYellow/40 rounded-2xl p-12 shadow-sm hover:border-primaryYellow hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
						<div className="flex items-start gap-4 mb-4">
							<HelpCircle className="w-12 h-12 text-primaryYellow flex-shrink-0" />
							<h3 className="text-2xl lg:text-3xl font-bold font-FoundersGrotesk text-darkBlue leading-snug">
								What if preparation could be quantified, predicted, and improved—with clarity instead of confusion?
							</h3>
						</div>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-8">
					<p className="text-xl lg:text-2xl text-grayBlue mb-8">
						These questions became our mission.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="max-w-4xl mx-auto">
					<div className="bg-white border-l-4 border-primaryYellow p-10 rounded-r-2xl">
						<div className="flex items-start gap-4">
							<Quote className="w-10 h-10 text-primaryYellow flex-shrink-0 mt-1" />
							<div>
								<h3 className="text-3xl font-bold font-FoundersGrotesk text-darkBlue mb-5">
									Our Discovery
								</h3>
								<p className="text-xl italic text-grayBlue leading-relaxed mb-4">
									"The problem wasn't effort—the problem was the system."
								</p>
								<p className="text-lg lg:text-xl text-grayBlue leading-relaxed">
									We didn't just set out to create another study method. We set out to redesign the learner's journey from the ground up—from identifying a foundational crisis in exam preparation to crafting a robust, neuroscience-backed system.
								</p>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

