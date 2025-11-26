"use client";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";

export default function Login() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	return (
		<>
			<Curve backgroundColor={"#fefefe"}>
				<div className="w-full min-h-screen padding-x py-[120px] flex items-center justify-center">
					<div className="max-w-[500px] mx-auto">
						<h1 className="text-6xl font-bold font-FoundersGrotesk text-darkBlue mb-6 text-center">
							Log In
						</h1>
						<div className="bg-offWhite rounded-2xl p-8 shadow-lg">
							<form className="space-y-6">
								<div>
									<label className="block text-sm font-medium font-NeueMontreal text-darkBlue mb-2">
										Email
									</label>
									<input
										type="email"
										className="w-full px-4 py-3 rounded-lg border border-darkBlue/20 focus:outline-none focus:border-primaryYellow transition-colors"
										placeholder="Enter your email"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium font-NeueMontreal text-darkBlue mb-2">
										Password
									</label>
									<input
										type="password"
										className="w-full px-4 py-3 rounded-lg border border-darkBlue/20 focus:outline-none focus:border-primaryYellow transition-colors"
										placeholder="Enter your password"
									/>
								</div>
								<button
									type="submit"
									className="w-full px-6 py-3 bg-primaryYellow text-darkBlue font-semibold font-NeueMontreal rounded-full hover:bg-beige transition-all duration-300">
									Log In
								</button>
							</form>
						</div>
					</div>
				</div>
				<Ready />
			</Curve>
		</>
	);
}

