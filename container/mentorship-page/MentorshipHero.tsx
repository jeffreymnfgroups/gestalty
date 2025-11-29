"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Users, Star, Shield } from "lucide-react";

export default function MentorshipHero() {
	return (
		<section className="w-full min-h-screen bg-offWhite relative overflow-hidden padding-y flex items-center neuron-pattern">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="max-w-5xl">
					{/* <motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="flex items-center justify-start gap-4 mb-8">
						<div className="bg-primaryYellow/10 rounded-full p-4">
							<Users size={48} className="text-primaryYellow" />
						</div>
						<div className="bg-primaryYellow/10 rounded-full p-4">
							<Star size={48} className="text-primaryYellow" />
						</div>
						<div className="bg-primaryYellow/10 rounded-full p-4">
							<Shield size={48} className="text-primaryYellow" />
						</div>
					</motion.div> */}
					<h1 className="heading font-bold font-FoundersGrotesk text-darkBlue mb-6">
						Expert Mentorship – Your Guide to Precision Success
					</h1>
					<p className="sub-paragraph text-primaryYellow font-semibold mb-4">
						Where Learning Psychology Meets Expert Guidance
					</p>
					<p className="sub-paragraph text-darkBlue/90 mb-6 font-semibold">
						Backed by peer-reviewed research. Guaranteed to improve performance.
					</p>
					<p className="sub-paragraph text-darkBlue/80 mb-8">
						Preparing for NEET, State PSC, or UPSC demands more than hard work—it requires strategic precision. Gestalty combines cutting-edge learning psychology with personalized mentorship to transform how you prepare, progress, and perform.
					</p>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}>
						<Link
							href="/contact"
							className="inline-flex items-center gap-2 px-8 py-4 bg-primaryYellow text-darkBlue font-semibold font-NeueMontreal rounded-full hover:scale-105 transition-transform duration-300 glow-yellow-hover shadow-lg">
							<span>Connect with a Mentor</span>
							<ArrowRight size={20} />
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}

