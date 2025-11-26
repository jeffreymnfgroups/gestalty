"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CognitiveVisualProps {
	className?: string;
	variant?: "neuron" | "brain" | "network";
}

export default function CognitiveVisual({ className = "", variant = "neuron" }: CognitiveVisualProps) {
	const [nodes, setNodes] = useState<Array<{ id: number; x: number; y: number }>>([]);

	useEffect(() => {
		// Generate random nodes for neuron network
		const nodeCount = variant === "network" ? 20 : 15;
		const newNodes = Array.from({ length: nodeCount }, (_, i) => ({
			id: i,
			x: Math.random() * 100,
			y: Math.random() * 100,
		}));
		setNodes(newNodes);
	}, [variant]);

	if (variant === "neuron" || variant === "network") {
		return (
			<div className={`relative w-full h-full ${className}`}>
				<svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
					<defs>
						<linearGradient id="neuronGradient" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stopColor="#fbc10d" stopOpacity="0.6" />
							<stop offset="50%" stopColor="#d8d1b2" stopOpacity="0.4" />
							<stop offset="100%" stopColor="#6a7188" stopOpacity="0.3" />
						</linearGradient>
					</defs>
					{/* Connections */}
					{nodes.map((node, i) => {
						const connections = nodes.slice(i + 1, Math.min(i + 4, nodes.length));
						return connections.map((target, j) => (
							<motion.line
								key={`${i}-${j}`}
								x1={node.x}
								y1={node.y}
								x2={target.x}
								y2={target.y}
								stroke="url(#neuronGradient)"
								strokeWidth="0.3"
								initial={{ pathLength: 0, opacity: 0 }}
								animate={{ pathLength: 1, opacity: [0.2, 0.5, 0.2] }}
								transition={{
									duration: 2 + Math.random(),
									repeat: Infinity,
									delay: Math.random() * 2,
									ease: "easeInOut",
								}}
							/>
						));
					})}
					{/* Nodes */}
					{nodes.map((node) => (
						<motion.circle
							key={node.id}
							cx={node.x}
							cy={node.y}
							r="1.5"
							fill="#fbc10d"
							initial={{ scale: 0, opacity: 0 }}
							animate={{
								scale: [1, 1.5, 1],
								opacity: [0.4, 0.8, 0.4],
							}}
							transition={{
								duration: 2 + Math.random() * 2,
								repeat: Infinity,
								delay: Math.random() * 2,
								ease: "easeInOut",
							}}
						/>
					))}
				</svg>
			</div>
		);
	}

	// Brain variant
	return (
		<div className={`relative w-full h-full ${className}`}>
			<svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
				<defs>
					<radialGradient id="brainGradient" cx="50%" cy="50%">
						<stop offset="0%" stopColor="#fbc10d" stopOpacity="0.8" />
						<stop offset="100%" stopColor="#19254c" stopOpacity="0.3" />
					</radialGradient>
				</defs>
				{/* Brain shape approximation */}
				<motion.path
					d="M 50 100 Q 30 60, 50 40 Q 70 20, 100 30 Q 130 20, 150 40 Q 170 60, 150 100 Q 170 140, 150 160 Q 130 180, 100 170 Q 70 180, 50 160 Q 30 140, 50 100"
					fill="url(#brainGradient)"
					initial={{ pathLength: 0, opacity: 0 }}
					animate={{ pathLength: 1, opacity: 0.6 }}
					transition={{ duration: 2, ease: "easeInOut" }}
				/>
				{/* Neural pathways */}
				{Array.from({ length: 8 }).map((_, i) => (
					<motion.path
						key={i}
						d={`M ${50 + i * 12} ${80 + Math.sin(i) * 20} Q ${100} ${100}, ${150 - i * 12} ${120 - Math.sin(i) * 20}`}
						stroke="#fbc10d"
						strokeWidth="1"
						fill="none"
						strokeOpacity="0.4"
						initial={{ pathLength: 0, opacity: 0 }}
						animate={{ pathLength: 1, opacity: [0.2, 0.5, 0.2] }}
						transition={{
							duration: 3,
							repeat: Infinity,
							delay: i * 0.3,
							ease: "easeInOut",
						}}
					/>
				))}
			</svg>
		</div>
	);
}

