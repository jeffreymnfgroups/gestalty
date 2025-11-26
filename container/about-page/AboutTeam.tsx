"use client";
import { motion } from "framer-motion";
import { User } from "lucide-react";

const teamMembers = [
	{
		name: "Dr. Anjali Sharma",
		role: "Chief Learning Officer",
		expertise: "Cognitive Science & Educational Psychology",
	},
	{
		name: "Rajesh Kumar",
		role: "Head of Technology",
		expertise: "AI & Machine Learning",
	},
	{
		name: "Priya Mehta",
		role: "Head of Mentorship",
		expertise: "Exam Strategy & Student Success",
	},
	{
		name: "Amit Patel",
		role: "Head of Content",
		expertise: "Curriculum Design & Learning Systems",
	},
];

export default function AboutTeam() {
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
						Our Team
					</h2>
					<p className="paragraph text-grayBlue max-w-2xl mx-auto">
						Meet the experts behind Gestalty - a team of educators, scientists, and technologists
						dedicated to your success.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{teamMembers.map((member, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							whileHover={{ y: -5 }}
							className="science-card p-6 rounded-xl text-center">
							<div className="mb-4 flex justify-center">
								<div className="w-24 h-24 rounded-full bg-primaryYellow/20 flex items-center justify-center">
									<User size={40} className="text-primaryYellow" />
								</div>
							</div>
							<h3 className="text-xl font-semibold font-FoundersGrotesk text-darkBlue mb-2">
								{member.name}
							</h3>
							<p className="paragraph font-semibold text-primaryYellow mb-2">
								{member.role}
							</p>
							<p className="small-text text-grayBlue">
								{member.expertise}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

