"use client";
import { motion } from "framer-motion";

export default function ValueProposition() {
	return (
		<section className="w-full bg-offWhite padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="max-w-4xl mx-auto text-center">
					<h2 className="sub-heading font-bold font-FoundersGrotesk text-darkBlue mb-6">
						Turn "I Feel Prepared" Into Quantifiable Mastery
					</h2>
					<p className="paragraph text-grayBlue mb-8">
						Gestalty transforms abstract study efforts into real-time analytics and strategic insights. No more guesswork—just measurable progress, intelligent interventions, and data-driven decisions for competitive exam success.
					</p>
					<div className="relative py-6">
						<div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-[60px] h-[2px] bg-primaryYellow"></div>
						<blockquote className="text-[24px] leading-[36px] lg:text-[22px] lg:leading-[34px] md:text-[20px] md:leading-[32px] sm:text-[18px] sm:leading-[28px] xm:text-[16px] xm:leading-[26px] font-semibold font-FoundersGrotesk text-darkBlue italic">
							"Real mastery isn't reading—it's recalling, revising, and relentlessly testing."
						</blockquote>
						<div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-[60px] h-[2px] bg-primaryYellow"></div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

