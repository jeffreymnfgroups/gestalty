"use client";
import { motion } from "framer-motion";
import { Brain, Target } from "lucide-react";

export default function AboutHero() {
	return (
		<section className="w-full min-h-screen bg-offWhite relative overflow-hidden neuron-pattern padding-y flex items-center">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="max-w-4xl">
					<h1 className="heading font-bold font-FoundersGrotesk text-darkBlue mb-6">
						About Gestalty
					</h1>
					<p className="sub-paragraph text-grayBlue mb-8">
						We're on a mission to revolutionize exam preparation by combining cutting-edge
						cognitive science with intelligent technology. Our platform is designed for
						serious aspirants who refuse to settle for traditional study methods.
					</p>
					<div className="flex gap-8">
						<div className="flex items-center gap-3">
							<Brain size={32} className="text-primaryYellow" />
							<div>
								<p className="text-2xl font-bold text-darkBlue">10,000+</p>
								<p className="small-text text-grayBlue">Active Students</p>
							</div>
						</div>
						<div className="flex items-center gap-3">
							<Target size={32} className="text-primaryYellow" />
							<div>
								<p className="text-2xl font-bold text-darkBlue">95%</p>
								<p className="small-text text-grayBlue">Success Rate</p>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

