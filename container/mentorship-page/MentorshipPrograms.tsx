"use client";
import { motion } from "framer-motion";
import { User, Users, Target, Calendar } from "lucide-react";
import Link from "next/link";

const programs = [
	{
		icon: User,
		title: "1-on-1 Mentorship",
		description: "Personalized guidance tailored to your specific needs, learning style, and goals. Weekly sessions with dedicated mentors.",
		features: ["Weekly 1-hour sessions", "Personalized study plans", "Progress tracking", "24/7 support"],
		price: "Starting at ₹5,000/month",
	},
	{
		icon: Users,
		title: "Group Mentorship",
		description: "Learn alongside peers in small groups with expert guidance. Perfect for collaborative learning and peer motivation.",
		features: ["Bi-weekly group sessions", "Peer learning", "Group study plans", "Community access"],
		price: "Starting at ₹2,500/month",
	},
	{
		icon: Target,
		title: "Intensive Bootcamp",
		description: "Focused preparation programs for specific exams with intensive mentorship and structured curriculum.",
		features: ["Daily mentorship", "Structured curriculum", "Mock exams", "Performance analysis"],
		price: "Starting at ₹15,000/month",
	},
];

export default function MentorshipPrograms() {
	return (
		<section className="w-full bg-offWhite padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-16 text-center">
					<h2 className="sub-heading font-bold font-FoundersGrotesk text-darkBlue mb-4">
						Choose Your Program
					</h2>
					<p className="paragraph text-grayBlue max-w-2xl mx-auto">
						Select the mentorship program that best fits your learning style and preparation needs.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-8">
					{programs.map((program, index) => {
						const Icon = program.icon;
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.2 }}
								whileHover={{ y: -5, scale: 1.02 }}
								className="science-card p-8 rounded-xl">
								<div className="mb-6">
									<Icon
										size={40}
										className="text-primaryYellow"
									/>
								</div>
								<h3 className="text-2xl font-semibold font-FoundersGrotesk text-darkBlue mb-3">
									{program.title}
								</h3>
								<p className="paragraph text-grayBlue mb-6">
									{program.description}
								</p>
								<ul className="space-y-2 mb-6">
									{program.features.map((feature, i) => (
										<li
											key={i}
											className="flex items-center gap-2 small-text text-grayBlue">
											<Calendar size={16} className="text-primaryYellow" />
											{feature}
										</li>
									))}
								</ul>
								<p className="paragraph font-semibold text-primaryYellow mb-4">
									{program.price}
								</p>
								<Link
									href="/contact"
									className="block w-full text-center px-6 py-3 bg-primaryYellow text-darkBlue font-semibold font-NeueMontreal rounded-full hover:scale-105 transition-transform duration-300">
									Get Started
								</Link>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

