"use client";
import { motion } from "framer-motion";
import { Users, BookOpen } from "lucide-react";
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
					className="max-w-4xl">
					<h1 className="heading font-bold font-FoundersGrotesk text-offWhite mb-6">
						Expert Mentorship Programs
					</h1>
					<p className="sub-paragraph text-offWhite/80 mb-8">
						Get personalized guidance from experienced educators and cognitive scientists who
						understand what it takes to excel in competitive exams. Our mentorship programs
						combine strategic planning, motivation, and proven study techniques.
					</p>
					<div className="flex gap-8 mb-8">
						<div className="flex items-center gap-3">
							<Users size={32} className="text-primaryYellow" />
							<div>
								<p className="text-2xl font-bold text-offWhite">50+</p>
								<p className="small-text text-offWhite/70">Expert Mentors</p>
							</div>
						</div>
						<div className="flex items-center gap-3">
							<BookOpen size={32} className="text-primaryYellow" />
							<div>
								<p className="text-2xl font-bold text-offWhite">50000+</p>
								<p className="small-text text-offWhite/70">Mentorship Hours</p>
							</div>
						</div>
					</div>
					<Link
						href="/contact"
						className="inline-flex items-center gap-2 px-8 py-4 bg-primaryYellow text-darkBlue font-semibold font-NeueMontreal rounded-full hover:scale-105 transition-transform duration-300 glow-yellow-hover">
						<span>Book a Session</span>
						<ArrowRight size={20} />
					</Link>
				</motion.div>
			</div>
		</section>
	);
}

