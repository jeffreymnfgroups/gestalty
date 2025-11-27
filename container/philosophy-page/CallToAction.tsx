"use client";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import RoundButton from "@/components/RoundButton";

export default function CallToAction() {
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
						Call to Action: Redefine What It Means to Study Smart
					</h2>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12 max-w-4xl mx-auto">
					<div className="bg-darkBlue p-8 rounded-xl mb-8">
						<h3 className="text-2xl font-bold font-FoundersGrotesk text-offWhite mb-4">
							The Truth
						</h3>
						<p className="paragraph text-offWhite/80">
							The difference between aspirants who rank and aspirants who struggle isn't talent—it's system.
						</p>
					</div>
					<div className="bg-offWhite p-8 rounded-xl border-2 border-primaryYellow/30">
						<h3 className="text-2xl font-bold font-FoundersGrotesk text-darkBlue mb-4">
							Join the Cognitive Revolution
						</h3>
						<p className="paragraph text-grayBlue">
							Empower yourself with cognitive clarity, strategic discipline, and a system that respects your mind as much as your syllabus.
						</p>
						<p className="paragraph text-grayBlue mt-4 font-semibold">
							Every hour spent studying is a decision. Make it wisely.
						</p>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12">
					<div className="flex flex-wrap justify-center gap-4 mb-8">
						<RoundButton
							href="/signup"
							title="Start Your Free Trial"
							bgcolor="#fbc10d"
							style={{ color: "#19254c" }}
						/>
					</div>
					<div className="flex flex-wrap justify-center gap-4">
						<Link
							href="/philosophy#science"
							className="group flex items-center gap-2 border-2 border-primaryYellow text-darkBlue px-6 py-3 rounded-full font-semibold font-FoundersGrotesk hover:bg-primaryYellow transition-all hover:scale-105">
							<span>Dive Deeper into the Science</span>
							<ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
						</Link>
						<Link
							href="/features"
							className="group flex items-center gap-2 border-2 border-primaryYellow text-darkBlue px-6 py-3 rounded-full font-semibold font-FoundersGrotesk hover:bg-primaryYellow transition-all hover:scale-105">
							<span>See How It Works</span>
							<ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
						</Link>
						<Link
							href="/about"
							className="group flex items-center gap-2 border-2 border-primaryYellow text-darkBlue px-6 py-3 rounded-full font-semibold font-FoundersGrotesk hover:bg-primaryYellow transition-all hover:scale-105">
							<span>Read Success Stories</span>
							<ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
						</Link>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="max-w-4xl mx-auto text-center">
					<div className="bg-darkBlue/10 border border-primaryYellow/30 rounded-xl p-8">
						<p className="paragraph text-darkBlue text-lg font-semibold italic">
							Gestalty is not just a tool. It's a philosophy turned into a system.
						</p>
						<p className="paragraph text-grayBlue mt-4">
							Join us in transforming competitive exam preparation from chaotic effort into strategic mastery.
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

