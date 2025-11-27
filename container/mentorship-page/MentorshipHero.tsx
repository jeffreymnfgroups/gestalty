"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MentorshipHero() {
	return (
		<section className="w-full min-h-screen bg-darkBlue relative overflow-hidden padding-y flex items-center">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="max-w-5xl">
					<h1 className="heading font-bold font-FoundersGrotesk text-offWhite mb-6">
						Expert Mentorship – Your Guide to Precision Success
					</h1>
					<p className="sub-paragraph text-primaryYellow font-semibold mb-4">
						Where Learning Psychology Meets Expert Guidance
					</p>
					<p className="sub-paragraph text-offWhite/90 mb-6 font-semibold">
						Backed by peer-reviewed research. Guaranteed to improve performance.
					</p>
					<p className="sub-paragraph text-offWhite/80 mb-8">
						Preparing for NEET, State PSC, or UPSC demands more than hard work—it requires strategic precision. Gestalty combines cutting-edge learning psychology with personalized mentorship to transform how you prepare, progress, and perform.
					</p>
					<Link
						href="/contact"
						className="inline-flex items-center gap-2 px-8 py-4 bg-primaryYellow text-darkBlue font-semibold font-NeueMontreal rounded-full hover:scale-105 transition-transform duration-300 glow-yellow-hover">
						<span>Connect with a Mentor</span>
						<ArrowRight size={20} />
					</Link>
				</motion.div>
			</div>
		</section>
	);
}

