"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import RoundButton from "@/components/RoundButton";
import Link from "next/link";

export default function FeaturesHero() {
	return (
		<section className="w-full min-h-screen bg-offWhite relative overflow-hidden neuron-pattern padding-y flex items-center">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="max-w-5xl">
					
					<h1 className="heading font-bold font-FoundersGrotesk text-darkBlue mb-6">
						Gestalty – Empower Your Learning with Real-Time Analytics
					</h1>
					<p className="sub-paragraph text-grayBlue mb-8">
						Transform overwhelm into mastery with evidence-driven, personalized learning. Every feature validated by cognitive science research and proven through thousands of successful aspirants.
					</p>
					<div className="flex flex-wrap gap-4 mt-8">
						<div className="flex items-center justify-between bg-[#fbc10d] cursor-pointer rounded-full group">
							<RoundButton
								href="/signup"
								title="Start Free Trial"
								bgcolor="#fbc10d"
								style={{ color: "#19254c" }}
							/>
						</div>
						<Link
							href="/contact"
							className="group flex items-center gap-2 border-2 border-primaryYellow text-darkBlue px-8 py-4 rounded-full font-semibold font-FoundersGrotesk hover:bg-primaryYellow hover:text-darkBlue transition-all hover:scale-105">
							<span>Schedule Demo</span>
						</Link>
						<Link
							href="/pricing"
							className="group flex items-center gap-2 border-2 border-darkBlue text-darkBlue px-8 py-4 rounded-full font-semibold font-FoundersGrotesk hover:bg-darkBlue hover:text-offWhite transition-all hover:scale-105">
							<span>View Pricing</span>
						</Link>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

