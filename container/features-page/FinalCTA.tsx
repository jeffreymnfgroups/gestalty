"use client";
import { motion } from "framer-motion";
import RoundButton from "@/components/RoundButton";
import Link from "next/link";

export default function FinalCTA() {
	return (
		<section className="w-full bg-primaryYellow padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="max-w-4xl mx-auto text-center">
					<h2 className="sub-heading font-bold font-FoundersGrotesk text-darkBlue mb-6">
						Experience the Complete Feature Suite
					</h2>
					<p className="text-[24px] leading-[34px] lg:text-[22px] lg:leading-[32px] md:text-[20px] md:leading-[30px] sm:text-[18px] sm:leading-[28px] xm:text-[16px] xm:leading-[26px] font-semibold font-FoundersGrotesk text-darkBlue mb-4">
						Ready to transform preparation into performance? See how science-driven tools revolutionize your exam preparation strategy.
					</p>
					<p className="paragraph text-darkBlue/90 mb-8">
						Start your free trial and discover the difference that evidence-based learning makes. No credit card required.
					</p>

					{/* Primary CTAs */}
					<div className="flex flex-wrap justify-center gap-4 mb-8">
						<RoundButton
							href="/signup"
							title="Start Free Trial"
							bgcolor="#19254c"
							style={{ color: "#fefefe" }}
						/>
						<Link
							href="/contact"
							className="group flex items-center gap-2 border-2 border-darkBlue text-darkBlue px-8 py-4 rounded-full font-semibold font-FoundersGrotesk hover:bg-darkBlue hover:text-offWhite transition-all hover:scale-105">
							<span>Schedule Feature Demo</span>
						</Link>
						<Link
							href="/pricing"
							className="group flex items-center gap-2 border-2 border-darkBlue text-darkBlue px-8 py-4 rounded-full font-semibold font-FoundersGrotesk hover:bg-darkBlue hover:text-offWhite transition-all hover:scale-105">
							<span>View Pricing</span>
						</Link>
					</div>

					{/* Alternative CTAs */}
					<div className="flex flex-wrap justify-center gap-4 mb-8">
						<Link
							href="/features"
							className="group flex items-center gap-2 text-darkBlue px-6 py-3 rounded-full font-medium font-FoundersGrotesk hover:bg-darkBlue/10 transition-all">
							<span>Explore All Features</span>
						</Link>
						<Link
							href="/how-it-works"
							className="group flex items-center gap-2 text-darkBlue px-6 py-3 rounded-full font-medium font-FoundersGrotesk hover:bg-darkBlue/10 transition-all">
							<span>See How It Works</span>
						</Link>
						<Link
							href="/contact"
							className="group flex items-center gap-2 text-darkBlue px-6 py-3 rounded-full font-medium font-FoundersGrotesk hover:bg-darkBlue/10 transition-all">
							<span>Talk to Our Team</span>
						</Link>
					</div>

					{/* Supporting Tagline */}
					<div className="relative py-6 mt-8">
						<div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-[60px] h-[2px] bg-darkBlue/30"></div>
						<p className="text-[20px] leading-[32px] lg:text-[18px] lg:leading-[30px] md:text-[17px] md:leading-[28px] sm:text-[16px] sm:leading-[26px] xm:text-[15px] xm:leading-[24px] font-medium font-NeueMontreal text-darkBlue/90 italic max-w-3xl mx-auto">
							Gestalty isn't just another LMS. It's a learning ecosystem—engineered for rigor, refined for clarity, and backed by cognitive science.
						</p>
						<div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-[60px] h-[2px] bg-darkBlue/30"></div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

