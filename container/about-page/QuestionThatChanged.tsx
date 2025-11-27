"use client";
import { motion } from "framer-motion";
import { HelpCircle, Sparkles, Quote } from "lucide-react";

export default function QuestionThatChanged() {
	return (
		<section className="w-full bg-gradient-to-br from-beige/30 via-primaryYellow/10 to-beige/20 padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12 text-center">
					<div className="flex justify-center gap-4 mb-6">
						<HelpCircle size={48} className="text-primaryYellow" />
						<Sparkles size={48} className="text-primaryYellow" />
					</div>
					<h2 className="sub-heading font-bold font-FoundersGrotesk text-darkBlue mb-8">
						Two Questions That Ignited Gestalty
					</h2>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-8 mb-12">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="science-card p-8 rounded-xl">
						<div className="flex items-start gap-4 mb-4">
							<HelpCircle size={40} className="text-primaryYellow flex-shrink-0" />
							<h3 className="text-2xl font-bold font-FoundersGrotesk text-darkBlue">
								What if learning could be made visible?
							</h3>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="science-card p-8 rounded-xl">
						<div className="flex items-start gap-4 mb-4">
							<HelpCircle size={40} className="text-primaryYellow flex-shrink-0" />
							<h3 className="text-2xl font-bold font-FoundersGrotesk text-darkBlue">
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
					<p className="paragraph text-grayBlue text-lg mb-6">
						These questions became our mission.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="max-w-4xl mx-auto">
					<div className="bg-darkBlue/5 border-l-4 border-primaryYellow p-8 rounded-r-xl">
						<div className="flex items-start gap-4">
							<Quote size={32} className="text-primaryYellow flex-shrink-0 mt-1" />
							<div>
								<h3 className="text-2xl font-bold font-FoundersGrotesk text-darkBlue mb-4">
									Our Discovery
								</h3>
								<p className="paragraph text-grayBlue italic text-lg mb-4">
									"The problem wasn't effort—the problem was the system."
								</p>
								<p className="paragraph text-grayBlue">
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

