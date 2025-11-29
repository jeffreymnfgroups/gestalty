"use client";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
	Target,
	Focus,
	Lightbulb,
	TrendingUp,
	User,
	MessageCircle,
	RotateCcw
} from "lucide-react";

// Register GSAP plugins
if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

const transformationAreas = [
	{
		area: "Planning",
		icon: Target,
		before: {
			quote: "I feel lost...",
			description: "Random study hours with no clarity or control"
		},
		after: {
			quote: "I know exactly where I am.",
			description: "Data-driven stages convert feelings into facts, defining measurable goals and milestones"
		}
	},
	{
		area: "Self-Control",
		icon: Focus,
		before: {
			quote: "I can't stay on track...",
			description: "Distractions and scattered attention fragment study time; inconsistent routines lead to procrastination and burnout"
		},
		after: {
			quote: "I harness focus effortlessly.",
			description: "AI nudges and behavioral cues build resilience, forging steady habits for deep, uninterrupted learning"
		}
	},
	{
		area: "Strategy",
		icon: Lightbulb,
		before: {
			quote: "Wasting time guessing.",
			description: "Trial-and-error approaches dominate"
		},
		after: {
			quote: "Science-backed strategies.",
			description: "Predictive intelligence intervenes early, providing evidence-based paths for maximum efficiency"
		}
	},
	{
		area: "Progress",
		icon: TrendingUp,
		before: {
			quote: "Am I doing enough?",
			description: "Relying on subjective feelings of effort"
		},
		after: {
			quote: "I have completed Stage 3.",
			description: "Real-time analytics and blended scientific models show actual learning progress objectively"
		}
	},
	{
		area: "Personalization",
		icon: User,
		before: {
			quote: "Everyone studies the same way.",
			description: "One-size-fits-all structure"
		},
		after: {
			quote: "Built for me.",
			description: "Adaptive systems tailor schedules and focus areas, connecting cognitive patterns with optimal study flow"
		}
	},
	{
		area: "Support",
		icon: MessageCircle,
		before: {
			quote: "I am stuck.",
			description: "Limited help and inconsistent communication"
		},
		after: {
			quote: "Mentor feedback received.",
			description: "A transparent ecosystem connects students, mentors, and parents with continuous visibility and timely guidance"
		}
	},
];

export default function ScienceApproach() {
	return (
		<>
			<StrategicLayer />
		</>
	);
}

function StrategicLayer() {
	const headerRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const descriptionRef = useRef<HTMLParagraphElement>(null);
	const sectionRef = useRef<HTMLHeadingElement>(null);
	const cardsContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		
		// Header animation
		if (headerRef.current && !prefersReducedMotion) {
			const headerTimeline = gsap.timeline({
				scrollTrigger: {
					trigger: headerRef.current,
					start: "top 80%",
					end: "top 50%",
					toggleActions: "play none none none",
				}
			});

			if (titleRef.current) {
				gsap.set(titleRef.current, { opacity: 0, y: 30 });
				headerTimeline.to(titleRef.current, {
					opacity: 1,
					y: 0,
					duration: 0.8,
					ease: "power3.out"
				});
			}

			if (descriptionRef.current) {
				gsap.set(descriptionRef.current, { opacity: 0, y: 20 });
				headerTimeline.to(descriptionRef.current, {
					opacity: 1,
					y: 0,
					duration: 0.7,
					ease: "power2.out"
				}, "-=0.4");
			}
		}

		// Section title animation
		if (sectionRef.current && !prefersReducedMotion) {
			gsap.set(sectionRef.current, { opacity: 0, y: 30 });
			gsap.to(sectionRef.current, {
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: "power3.out",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 85%",
					toggleActions: "play none none none",
				}
			});
		}

		// Cards container animation
		if (cardsContainerRef.current && !prefersReducedMotion) {
			const cards = cardsContainerRef.current.children;
			gsap.set(cards, { opacity: 0, scale: 0.9, y: 40 });

			gsap.to(cards, {
				opacity: 1,
				scale: 1,
				y: 0,
				duration: 0.7,
				ease: "power3.out",
				stagger: {
					amount: 0.5,
					from: "start"
				},
				scrollTrigger: {
					trigger: cardsContainerRef.current,
					start: "top 80%",
					toggleActions: "play none none none",
				}
			});
		}

		return () => {
			ScrollTrigger.getAll().forEach(trigger => trigger.kill());
		};
	}, []);

	return (
		<section className="w-full bg-gradient-to-b from-offWhite via-beige/5 to-offWhite padding-y relative overflow-hidden">
			{/* Enhanced Background Pattern */}
			<div className="absolute inset-0 neuron-pattern opacity-20" />
			<div className="absolute inset-0 bg-gradient-to-br from-primaryYellow/5 via-transparent to-darkBlue/5" />
			
			<div className="max-w-[1600px] mx-auto padding-x relative z-10">
				{/* Header */}
				<div ref={headerRef} className="mb-6 sm:mb-8 lg:mb-10">
					{/* Main Title */}
					<h2 
						ref={titleRef}
						className="sub-heading font-bold font-FoundersGrotesk text-darkBlue mb-3 sm:mb-4 leading-tight text-center">
						Strategic Layer That Anchors Your Learning
					</h2>

					{/* Description */}
					<p 
						ref={descriptionRef}
						className="paragraph text-grayBlue max-w-3xl mx-auto leading-relaxed text-center">
						Enabling deep work, strategic effort, and habit-driven progress through a scientific approach to learning.
					</p>
				</div>

				{/* Path to Excellence Section - Tighter Spacing */}
				<div className="mb-6 sm:mb-8">
					<h3 
						ref={sectionRef}
						className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-bold font-FoundersGrotesk text-darkBlue mb-6 sm:mb-8 text-center leading-tight px-2">
						Aspirant Transformation: Journey from Confusion to Clarity with Gestalty
					</h3>

					{/* Flip Cards Grid - Reduced Gaps */}
					<div 
						ref={cardsContainerRef}
						className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1.5 sm:gap-2 lg:gap-1.5 xl:gap-2">
						{transformationAreas.map((item, index) => (
							<TransformationCard key={index} item={item} index={index} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

function TransformationCard({ item, index }: { item: typeof transformationAreas[0]; index: number }) {
	const [isFlipped, setIsFlipped] = useState(false);
	const cardRef = useRef<HTMLDivElement>(null);
	const flipContainerRef = useRef<HTMLDivElement>(null);
	const Icon = item.icon;

	useEffect(() => {
		if (!flipContainerRef.current) return;

		const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		
		gsap.set(flipContainerRef.current, {
			rotateY: 0,
			transformStyle: "preserve-3d"
		});

		return () => {};
	}, []);

	useEffect(() => {
		if (!flipContainerRef.current) return;
		
		const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		
		if (prefersReducedMotion) {
			flipContainerRef.current.style.transform = isFlipped ? "rotateY(180deg)" : "rotateY(0deg)";
			return;
		}

		gsap.to(flipContainerRef.current, {
			rotateY: isFlipped ? 180 : 0,
			duration: 0.6,
			ease: "power2.inOut"
		});
	}, [isFlipped]);

	const handleMouseEnter = () => {
		if (!cardRef.current) return;
		const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		
		if (!prefersReducedMotion) {
			gsap.to(cardRef.current, {
				scale: 1.02,
				duration: 0.3,
				ease: "power2.out"
			});
		}
		setIsFlipped(true);
	};

	const handleMouseLeave = () => {
		if (!cardRef.current) return;
		const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		
		if (!prefersReducedMotion) {
			gsap.to(cardRef.current, {
				scale: 1,
				duration: 0.3,
				ease: "power2.out"
			});
		}
		setIsFlipped(false);
	};

	return (
		<div
			ref={cardRef}
			className="h-[320px] sm:h-[340px] lg:h-[360px] xl:h-[380px] perspective-1000 cursor-pointer"
			style={{ 
				perspective: "1000px",
				willChange: "transform"
			}}
			onClick={() => setIsFlipped(!isFlipped)}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			<div className="relative w-full h-full preserve-3d" style={{ transformStyle: "preserve-3d" }}>
				{/* Card Container with 3D Flip */}
				<div
					ref={flipContainerRef}
					className="relative w-full h-full"
					style={{ transformStyle: "preserve-3d" }}>
					
					{/* Before Side (Front) - Compact Redesign */}
					<div
						className="absolute inset-0 w-full h-full backface-hidden rounded-lg p-4 sm:p-4.5 flex flex-col"
						style={{ 
							backfaceVisibility: "hidden",
							transform: "rotateY(0deg)"
						}}>
						<div className="bg-gradient-to-br from-offWhite via-lightBeige/20 to-offWhite border border-grayBlue/12 rounded-lg p-4 sm:p-4.5 h-full flex flex-col shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
							{/* Subtle gradient overlay */}
							<div className="absolute inset-0 bg-gradient-to-br from-grayBlue/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							
							<div className="relative z-10 flex flex-col h-full">
								{/* Badge & Icon - Compact */}
								<div className="flex items-center justify-between mb-3">
									<span className="px-2.5 py-1 bg-grayBlue/8 text-grayBlue text-[9px] sm:text-[10px] font-semibold font-NeueMontreal rounded-md uppercase tracking-wide border border-grayBlue/8">
										Before
									</span>
									<div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-grayBlue/5 flex items-center justify-center border border-grayBlue/8 group-hover:scale-105 transition-transform duration-300">
										<Icon size={16} className="sm:w-5 sm:h-5 text-grayBlue/65 group-hover:text-grayBlue transition-colors duration-300" />
									</div>
								</div>
								
								{/* Area Title - Compact */}
								<h4 className="text-lg sm:text-xl font-bold font-FoundersGrotesk text-darkBlue mb-2.5 leading-tight">
									{item.area}
								</h4>
								
								{/* Quote - Compact */}
								<div className="mb-3 flex-1 min-h-0">
									<p className="text-base sm:text-lg font-semibold font-NeueMontreal text-darkBlue mb-2 italic leading-snug line-clamp-2">
										"{item.before.quote}"
									</p>
									<p className="text-xs sm:text-sm text-grayBlue leading-relaxed line-clamp-3">
										{item.before.description}
									</p>
								</div>
								
								{/* Flip Indicator - Compact */}
								<div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-grayBlue/55 mt-auto pt-3 border-t border-grayBlue/8">
									<RotateCcw size={12} className="group-hover:rotate-180 transition-transform duration-500" />
									<span className="font-NeueMontreal">Hover to flip</span>
								</div>
							</div>
						</div>
					</div>

					{/* After Side (Back) - Compact Redesign */}
					<div
						className="absolute inset-0 w-full h-full backface-hidden rounded-lg p-4 sm:p-4.5 flex flex-col"
						style={{ 
							backfaceVisibility: "hidden",
							transform: "rotateY(180deg)"
						}}>
						<div className="bg-gradient-to-br from-darkBlue via-darkBlue/98 to-darkBlue border-2 border-primaryYellow/50 rounded-lg p-4 sm:p-4.5 h-full flex flex-col shadow-lg hover:shadow-xl hover:border-primaryYellow transition-all duration-300 relative overflow-hidden group">
							{/* Animated glow effect */}
							<div className="absolute inset-0 bg-gradient-to-br from-primaryYellow/15 via-transparent to-primaryYellow/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
							<div className="absolute -inset-0.5 bg-gradient-to-r from-primaryYellow/25 to-transparent opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500" />
							
							<div className="relative z-10 flex flex-col h-full">
								{/* Badge & Icon - Compact */}
								<div className="flex items-center justify-between mb-3">
									<span className="px-2.5 py-1 bg-gradient-to-r from-primaryYellow to-primaryYellow/95 text-darkBlue text-[9px] sm:text-[10px] font-semibold font-NeueMontreal rounded-md uppercase tracking-wide shadow-md">
										With Gestalty
									</span>
									<div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-primaryYellow/25 to-primaryYellow/8 flex items-center justify-center border border-primaryYellow/25 group-hover:scale-105 group-hover:bg-primaryYellow/35 transition-all duration-300">
										<Icon size={16} className="sm:w-5 sm:h-5 text-primaryYellow group-hover:scale-105 transition-transform duration-300" />
									</div>
								</div>
								
								{/* Area Title - Compact */}
								<h4 className="text-lg sm:text-xl font-bold font-FoundersGrotesk text-offWhite mb-2.5 leading-tight">
									{item.area}
								</h4>
								
								{/* Quote - Compact */}
								<div className="mb-3 flex-1 min-h-0">
									<p className="text-base sm:text-lg font-semibold font-NeueMontreal text-offWhite mb-2 italic leading-snug line-clamp-2">
										"{item.after.quote}"
									</p>
									<p className="text-xs sm:text-sm text-offWhite/80 leading-relaxed line-clamp-3">
										{item.after.description}
									</p>
								</div>
								
								{/* Success Indicator - Compact */}
								<div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-primaryYellow/85 mt-auto pt-3 border-t border-primaryYellow/25">
									<TrendingUp size={12} className="group-hover:translate-y-[-2px] transition-transform duration-300" />
									<span className="font-NeueMontreal">Transformation achieved</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
