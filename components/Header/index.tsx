"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import ScrollLink from "../ScrollToTop/ScrollLink";
import Link from "next/link";

const Header = () => {
	// Navbar toggle
	const [navbarOpen, setNavbarOpen] = useState(false);
	const navbarToggleHandler = () => {
		setNavbarOpen(!navbarOpen);
	};

	// Sticky Navbar
	const [sticky, setSticky] = useState(false);
	const handleStickyNavbar = () => {
		if (window.scrollY >= 20) {
		setSticky(true);
		} else {
		setSticky(false);
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", handleStickyNavbar);
	});

	// submenu handler
	const [openIndex, setOpenIndex] = useState(-1);
	const handleSubmenu = (index) => {
		if (openIndex === index) {
		setOpenIndex(-1);
		} else {
		setOpenIndex(index);
		}
	};

	const usePathName = usePathname();

	return (
		<>
		<header
			className={`header left-0 top-0 z-40 flex w-full  items-center ${
			sticky
				? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
				: "absolute bg-transparent"
			}`}
		>
			<div className="relative m-auto flex items-center justify-center">
				<div className="w-full px-4 xl:mr-12 font-extrabold text-primary">
					<ScrollLink to="home">
						<Image
						src="/images/logo/company-logo-black.svg"
						alt="logo"
						width={130}
						height={30}
						className="dark:hidden"
						/>
					</ScrollLink>
				</div>
				<div className="flex w-full items-center justify-between px-4">
				<div>
					<button
					onClick={navbarToggleHandler}
					id="navbarToggler"
					aria-label="Mobile Menu"
					className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
					>
					<span
						className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
						navbarOpen ? " top-[7px] rotate-45" : " "
						}`}
					/>
					<span
						className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
						navbarOpen ? "opacity-0 " : " "
						}`}
					/>
					<span
						className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
						navbarOpen ? " top-[-8px] -rotate-45" : " "
						}`}
					/>
					</button>
					<nav
					id="navbarCollapse"
					className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
						navbarOpen
						? "visibility top-full opacity-100"
						: "invisible top-[120%] opacity-0"
					}`}
					>
					<ul className="block lg:flex lg:space-x-12">
						{menuData.map((menuItem, index) => (
						<li key={index} className="group relative">
							{menuItem.to ? (
							<ScrollLink
								to={menuItem.to}
								className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
								usePathName === menuItem.to
									? "text-primary dark:text-white"
									: "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
								}`}
							>
								{menuItem.title}
							</ScrollLink>
							) : (
							<>
							
								
							</>
							)}
						</li>
						))}
					</ul>
					</nav>
				</div>
				</div>
			</div>
		</header>
		</>
	);
};

export default Header;
