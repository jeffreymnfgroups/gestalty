"use client";
import { motion } from "framer-motion";
import { Brain, Sparkles } from "lucide-react";
import RoundButton from "@/components/RoundButton";
import Link from "next/link";

export default function PhilosophyHero() {
	return (
		<section className="w-full min-h-screen bg-offWhite relative overflow-hidden neuron-pattern padding-y flex items-center">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="max-w-5xl">
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="flex items-center justify-start gap-4 mb-8">
						
					</motion.div>
					<h1 className="heading font-bold font-FoundersGrotesk text-darkBlue mb-6">
						Learning Acumen System – Where Science Meets the Philosophy of Mastery for success
					</h1>
					<p className="sub-paragraph text-primaryYellow font-semibold mb-4">
						A Complete cognitive architecture built for serious learners preparing for NEET, UPSC, State PSC and competitive exams
					</p>
					<p className="sub-paragraph text-darkBlue/80 mb-8">
						Transform from an ambitious aspirant into a self-aware, outcome-driven performer through deliberate, disciplined, and scientifically optimized learning.
					</p>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="flex flex-wrap gap-4 mt-8">
						<RoundButton
							href="/signup"
							title="Start Free Trial"
							bgcolor="#fbc10d"
							style={{ color: "#19254c" }}
						/>
						<Link
							href="/philosophy#science"
							className="group flex items-center gap-2 border-2 border-primaryYellow text-darkBlue px-8 py-4 rounded-full font-semibold font-FoundersGrotesk hover:bg-primaryYellow hover:text-darkBlue transition-all hover:scale-105 shadow-sm hover:shadow-lg">
							<span>Explore the Science</span>
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}

