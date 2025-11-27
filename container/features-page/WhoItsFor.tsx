"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
	GraduationCap,
	Users,
	Heart,
	BarChart3,
	TrendingUp,
	LayoutDashboard,
	BookOpen,
	RotateCcw,
	Brain,
	Calendar,
	FileText,
	CheckCircle2,
	Eye,
	Target,
	Handshake,
	UserCheck,
	Upload,
	MessageSquare,
	Settings,
} from "lucide-react";

const studentFeatures = [
	{ name: "Learning Analytics", icon: BarChart3 },
	{ name: "Progress Tracking", icon: TrendingUp },
	{ name: "Personal Dashboard", icon: LayoutDashboard },
	{ name: "Smart Syllabus Manager", icon: BookOpen },
	{ name: "Strategic Revision System", icon: RotateCcw },
	{ name: "Cognitive Tracking", icon: Brain },
	{ name: "Consistency Mapping", icon: Calendar },
	{ name: "AI-Based Feedback Loop", icon: CheckCircle2 },
	{ name: "Cognitive Inertia Detector", icon: Eye },
	{ name: "Master Revision List", icon: FileText },
];

const mentorFeatures = [
	{ name: "Bookable Session Management", icon: Calendar },
	{ name: "Student Progress Tracker", icon: TrendingUp },
	{ name: "Content Upload System", icon: Upload },
	{ name: "Feedback Dashboard", icon: MessageSquare },
	{ name: "Tailored Guidance Tools", icon: Settings },
];

const parentFeatures = [
	{ name: "Dashboard Overview", icon: LayoutDashboard },
	{ name: "Goal Collaboration", icon: Target },
	{ name: "Mentor Sync Access", icon: UserCheck },
	{ name: "Accountability Partnership", icon: Handshake },
];

const sections = [
	{
		id: "students",
		title: "For Students",
		icon: GraduationCap,
		features: studentFeatures,
	},
	{
		id: "mentors",
		title: "For Mentors",
		icon: Users,
		features: mentorFeatures,
	},
	{
		id: "parents",
		title: "For Parents",
		icon: Heart,
		features: parentFeatures,
	},
];

export default function WhoItsFor() {
	const [activeSection, setActiveSection] = useState("students");

	const activeData = sections.find((s) => s.id === activeSection) || sections[0];

	return (
		<section className="w-full bg-offWhite padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12 text-center">
					<h2 className="sub-heading font-bold font-FoundersGrotesk text-darkBlue mb-4">
						WHO IT'S FOR:
					</h2>
				</motion.div>

				{/* Tab Navigation */}
				<div className="flex flex-wrap justify-center gap-4 mb-12">
					{sections.map((section) => {
						const Icon = section.icon;
						return (
							<button
								key={section.id}
								onClick={() => setActiveSection(section.id)}
								className={`flex items-center gap-3 px-6 py-4 rounded-full font-semibold font-FoundersGrotesk transition-all duration-300 ${
									activeSection === section.id
										? "bg-primaryYellow text-darkBlue shadow-lg scale-105"
										: "bg-offWhite border-2 border-darkBlue/20 text-darkBlue hover:border-primaryYellow/50"
								}`}>
								<Icon size={24} />
								<span>{section.title}</span>
							</button>
						);
					})}
				</div>

				{/* Active Section Content */}
				<motion.div
					key={activeSection}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="mb-8">
					<div className="p-8 rounded-2xl bg-offWhite border-2 border-grayBlue/20 hover:border-primaryYellow/50 shadow-lg mb-8 transition-all duration-300">
						<div className="flex items-center gap-4">
							<div className="w-16 h-16 rounded-xl bg-primaryYellow/10 border border-primaryYellow/30 flex items-center justify-center">
								{(() => {
									const Icon = activeData.icon;
									return <Icon size={32} className="text-primaryYellow" />;
								})()}
							</div>
							<h3 className="text-3xl font-bold font-FoundersGrotesk text-darkBlue">
								{activeData.title}
							</h3>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6">
						{activeData.features.map((feature, index) => {
							const Icon = feature.icon;
							return (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.4, delay: index * 0.05 }}
									whileHover={{ y: -5, scale: 1.02 }}
									className="bg-offWhite border-2 border-grayBlue/20 hover:border-primaryYellow/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
									<div className="flex items-center gap-3">
										<div className="w-10 h-10 rounded-lg bg-primaryYellow/10 border border-primaryYellow/30 flex items-center justify-center group-hover:bg-primaryYellow/20 transition-colors">
											<Icon
												size={20}
												className="text-primaryYellow group-hover:scale-110 transition-transform"
											/>
										</div>
										<span className="paragraph font-semibold text-darkBlue">
											{feature.name}
										</span>
									</div>
								</motion.div>
							);
						})}
					</div>
				</motion.div>
			</div>
		</section>
	);
}

