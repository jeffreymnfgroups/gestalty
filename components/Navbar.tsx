import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public";
import { useRouter } from "next/router";
import { navbarItems } from "@/constants";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MobileNav from "./MobileNav";

export default function Navbar() {
	const router = useRouter();

	// Filter out Log In from main menu items (it goes in the right side)
	const mainMenuItems = navbarItems.filter((item) => item.id !== 7);

	return (
		<>
		<motion.nav
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
			className="w-full fixed top-0 left-0 z-50 bg-offWhite/95 backdrop-blur-sm border-b border-gray-100 sm:hidden xm:hidden md:hidden">
			<div className="max-w-[1600px] mx-auto padding-x flex items-center justify-between h-16">
				{/* Logo - Left side */}
				<Link
					href={"/"}
					className="flex items-center transition-all duration-300 hover:opacity-80">
					<Image
						src={logo}
						alt="Gestalty logo"
						width={110}
						height={36}
						className="object-contain"
					/>
				</Link>

				{/* Menu Items - Right side */}
				<div className="flex items-center gap-7">
					{mainMenuItems.map((item) => (
						<Link
							key={item.id}
							href={item.href}
							className="text-sm font-medium font-NeueMontreal text-darkBlue hover:text-primaryYellow transition-colors duration-200 whitespace-nowrap relative group">
							{item.title}
							<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primaryYellow transition-all duration-300 group-hover:w-full"></span>
						</Link>
					))}
					
					{/* Log In Button - Right side with black background */}
					<Link
						href="/login"
						className="flex items-center gap-2 px-5 py-2 bg-darkBlue text-offWhite text-sm font-semibold font-NeueMontreal rounded-full hover:bg-darkBlue/90 transition-all duration-300 whitespace-nowrap group">
						<span>Log In</span>
						<ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
					</Link>
				</div>
			</div>
		</motion.nav>
			<MobileNav />
		</>
	);
}
