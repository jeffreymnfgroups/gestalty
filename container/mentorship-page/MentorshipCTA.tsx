"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MentorshipCTA() {
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
						Your Success Story Starts Here
					</h2>
					<p className="paragraph text-grayBlue mb-8 max-w-3xl mx-auto">
						Join aspirants who've transformed their preparation from overwhelming to optimized. Experience mentorship that combines human expertise with technological precision.
					</p>
					<p className="sub-paragraph text-darkBlue font-semibold mb-8">
						Ready to elevate your preparation? Connect with a mentor who understands your journey and has the tools to guide you to success.
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						<Link
							href="/contact"
							className="inline-flex items-center gap-2 px-8 py-4 bg-primaryYellow text-darkBlue font-semibold font-NeueMontreal rounded-full hover:scale-105 transition-transform duration-300 glow-yellow-hover">
							<span>Connect with a Mentor</span>
							<ArrowRight size={20} />
						</Link>
						<Link
							href="/contact"
							className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primaryYellow text-darkBlue font-semibold font-NeueMontreal rounded-full hover:bg-primaryYellow hover:text-darkBlue transition-all hover:scale-105">
							<span>Book a Session</span>
							<ArrowRight size={20} />
						</Link>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

