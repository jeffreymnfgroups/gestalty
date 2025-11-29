"use client";
import { motion } from "framer-motion";
import { Mail, CheckCircle, Users } from "lucide-react";
import { useState } from "react";

export default function BlogNewsletter() {
	const [email, setEmail] = useState("");
	const [subscribed, setSubscribed] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle newsletter subscription
		setSubscribed(true);
		setTimeout(() => {
			setEmail("");
			setSubscribed(false);
		}, 3000);
	};

	return (
		<section className="w-full bg-lightBeige padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="bg-gradient-to-br from-darkBlue to-grayBlue rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden">
					{/* Background Pattern */}
					<div className="absolute inset-0 neuron-pattern opacity-30"></div>

					<div className="relative z-10">
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className="flex justify-center mb-6">
							<div className="bg-primaryYellow/20 rounded-full p-5">
								<Mail className="w-16 h-16 text-primaryYellow" />
							</div>
						</motion.div>

						<h2 className="text-4xl lg:text-5xl font-bold font-FoundersGrotesk text-offWhite mb-6">
							Get Weekly Learning Insights
						</h2>
						<p className="text-xl lg:text-2xl text-lightBeige mb-8 max-w-3xl mx-auto">
							Join 10,000+ serious learners receiving evidence-based study strategies, cognitive science research, and success stories every week.
						</p>

						{/* Social Proof */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="flex items-center justify-center gap-2 mb-8">
							<Users className="text-primaryYellow" size={24} />
							<span className="text-lightBeige font-NeueMontreal font-semibold">
								Join 10,000+ learners already subscribed
							</span>
						</motion.div>

						{/* Newsletter Form */}
						{!subscribed ? (
							<motion.form
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: 0.3 }}
								onSubmit={handleSubmit}
								className="max-w-2xl mx-auto">
								<div className="flex flex-col sm:flex-row gap-4">
									<input
										type="email"
										placeholder="Enter your email address"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required
										className="flex-1 px-6 py-5 rounded-full border-2 border-primaryYellow/40 bg-white text-darkBlue font-NeueMontreal text-lg focus:outline-none focus:border-primaryYellow transition-all"
									/>
									<button
										type="submit"
										className="px-10 py-5 bg-primaryYellow text-darkBlue rounded-full font-bold font-FoundersGrotesk hover:bg-white hover:scale-105 transition-all shadow-lg hover:shadow-xl">
										Subscribe Free
									</button>
								</div>
								<p className="text-sm text-lightBeige/80 mt-4 font-NeueMontreal">
									No spam. Unsubscribe anytime. We respect your privacy.
								</p>
							</motion.form>
						) : (
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								className="flex items-center justify-center gap-3 bg-green-500/20 border-2 border-green-400 rounded-full px-8 py-5 max-w-md mx-auto">
								<CheckCircle className="text-green-400" size={28} />
								<span className="text-xl font-semibold font-NeueMontreal text-offWhite">
									Successfully Subscribed!
								</span>
							</motion.div>
						)}

						{/* Benefits */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
							{[
								{ icon: "📚", text: "Weekly study tips" },
								{ icon: "🧠", text: "Cognitive science insights" },
								{ icon: "🏆", text: "Success strategies" },
							].map((benefit, index) => (
								<div
									key={index}
									className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-primaryYellow/20">
									<div className="text-4xl mb-3">{benefit.icon}</div>
									<p className="text-lightBeige font-NeueMontreal font-semibold">
										{benefit.text}
									</p>
								</div>
							))}
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

