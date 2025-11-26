"use client";
import { motion } from "framer-motion";
import { heroAnimations } from "@/animation/heroAnimations";

export default function DashboardPreview() {
	const nodes = [
		{ id: 1, x: 20, y: 30, delay: 0.1 },
		{ id: 2, x: 60, y: 20, delay: 0.2 },
		{ id: 3, x: 80, y: 50, delay: 0.3 },
		{ id: 4, x: 40, y: 70, delay: 0.4 },
		{ id: 5, x: 70, y: 80, delay: 0.5 },
	];

	const connections = [
		{ from: 1, to: 2 },
		{ from: 2, to: 3 },
		{ from: 3, to: 4 },
		{ from: 4, to: 5 },
		{ from: 1, to: 4 },
	];

	return (
		<motion.div
			variants={heroAnimations.dashboardPreview}
			initial="initial"
			animate="animate"
			className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-heroPrimary/10 to-heroAccent/10 backdrop-blur-sm border border-heroPrimary/20">
			{/* Glassmorphism cards */}
			<motion.div
				className="absolute top-4 left-4 w-32 h-20 bg-white/80 backdrop-blur-md rounded-lg border border-heroPrimary/30 p-3 shadow-lg"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 2.2, duration: 0.5 }}>
				<div className="text-xs text-heroTertiary mb-1">Progress</div>
				<div className="text-lg font-bold text-heroPrimary">85%</div>
			</motion.div>

			<motion.div
				className="absolute top-4 right-4 w-32 h-20 bg-white/80 backdrop-blur-md rounded-lg border border-heroPrimary/30 p-3 shadow-lg"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 2.4, duration: 0.5 }}>
				<div className="text-xs text-heroTertiary mb-1">Streak</div>
				<div className="text-lg font-bold text-heroPrimary">12 days</div>
			</motion.div>

			{/* Cognitive mapping visualization */}
			<svg className="absolute inset-0 w-full h-full">
				{connections.map((conn, idx) => {
					const fromNode = nodes.find((n) => n.id === conn.from);
					const toNode = nodes.find((n) => n.id === conn.to);
					if (!fromNode || !toNode) return null;
					return (
						<motion.line
							key={idx}
							x1={`${fromNode.x}%`}
							y1={`${fromNode.y}%`}
							x2={`${toNode.x}%`}
							y2={`${toNode.y}%`}
							stroke="url(#gradient)"
							strokeWidth="2"
							initial={{ pathLength: 0, opacity: 0 }}
							animate={{ pathLength: 1, opacity: 0.4 }}
							transition={{
								delay: 2.5 + idx * 0.1,
								duration: 0.8,
								ease: [0.33, 1, 0.68, 1],
							}}
						/>
					);
				})}
				<defs>
					<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" stopColor="#fbc10d" stopOpacity="0.8" />
						<stop offset="100%" stopColor="#d8d1b2" stopOpacity="0.8" />
					</linearGradient>
				</defs>
			</svg>

			{/* Animated nodes */}
			{nodes.map((node) => (
				<motion.div
					key={node.id}
					className="absolute w-4 h-4 bg-heroPrimary rounded-full shadow-lg shadow-heroPrimary/50"
					style={{
						left: `${node.x}%`,
						top: `${node.y}%`,
					}}
					initial={{ scale: 0, opacity: 0 }}
					animate={{
						scale: [0, 1.2, 1],
						opacity: [0, 1, 1],
					}}
					transition={{
						delay: 2.5 + node.delay,
						duration: 0.6,
						ease: [0.33, 1, 0.68, 1],
					}}
				/>
			))}

			{/* Progress bar */}
			<motion.div
				className="absolute bottom-8 left-4 right-4 h-2 bg-heroAccent/20 rounded-full overflow-hidden"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 2.6, duration: 0.5 }}>
				<motion.div
					className="h-full bg-gradient-to-r from-heroPrimary to-heroAccent rounded-full"
					initial={{ width: "0%" }}
					animate={{ width: "75%" }}
					transition={{
						delay: 2.8,
						duration: 1,
						ease: [0.33, 1, 0.68, 1],
					}}
				/>
			</motion.div>

			{/* Particle effects */}
			{Array.from({ length: 8 }).map((_, i) => (
				<motion.div
					key={i}
					className="absolute w-1 h-1 bg-heroPrimary rounded-full"
					style={{
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
					}}
					animate={{
						y: [0, -20, 0],
						opacity: [0.3, 1, 0.3],
						scale: [1, 1.5, 1],
					}}
					transition={{
						duration: 2 + Math.random(),
						repeat: Infinity,
						delay: Math.random() * 2,
						ease: "easeInOut",
					}}
				/>
			))}
		</motion.div>
	);
}

