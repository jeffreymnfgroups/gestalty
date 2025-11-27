"use client";
import { motion } from "framer-motion";
import { Users, Brain, Target, TrendingUp } from "lucide-react";

export default function MentorshipPowerOfGuidance() {
	return (
		<section className="w-full bg-offWhite padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-16 text-center">
					<h2 className="sub-heading font-bold font-FoundersGrotesk text-darkBlue mb-4">
						The Power of Expert Guidance
					</h2>
					<p className="paragraph text-grayBlue max-w-4xl mx-auto">
						Having someone who's walked the path makes the difference between struggling alone and achieving strategic success. Our mentors don't just motivate—they analyze your data to deliver precise interventions exactly when you need them.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-8 mb-12">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="science-card p-8 rounded-xl">
						<div className="mb-6">
							<Users size={40} className="text-primaryYellow mb-4" />
							<h3 className="text-2xl font-semibold font-FoundersGrotesk text-darkBlue mb-4">
								Battle-Tested Educators
							</h3>
							<p className="paragraph text-grayBlue">
								Connect with battle-tested educators who've navigated the challenges, overcome failures, and mastered the demands of competitive exams. They're ready to guide you to success in NEET, State PSC, and UPSC.
							</p>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="science-card p-8 rounded-xl">
						<div className="mb-6">
							<Brain size={40} className="text-primaryYellow mb-4" />
							<h3 className="text-2xl font-semibold font-FoundersGrotesk text-darkBlue mb-4">
								AI-Powered System
							</h3>
							<p className="paragraph text-grayBlue mb-4">
								Our AI-powered system delivers personalized learning paths and recommendations tailored to your unique style.
							</p>
							<ul className="space-y-3">
								<li className="flex items-start gap-3">
									<Target size={20} className="text-primaryYellow mt-1 flex-shrink-0" />
									<span className="small-text text-grayBlue">Personalized learning paths</span>
								</li>
								<li className="flex items-start gap-3">
									<TrendingUp size={20} className="text-primaryYellow mt-1 flex-shrink-0" />
									<span className="small-text text-grayBlue">Tailored recommendations</span>
								</li>
								<li className="flex items-start gap-3">
									<Brain size={20} className="text-primaryYellow mt-1 flex-shrink-0" />
									<span className="small-text text-grayBlue">Adaptive to your learning style</span>
								</li>
							</ul>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

