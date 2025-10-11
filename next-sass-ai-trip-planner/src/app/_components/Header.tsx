"use client";
import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const menuOptions = [
    { name: 'Home', path: "/" },
    { name: "pricing", path: "/pricing" },
    { name: "Contact us", path: "/contact-us" }
]

const Header = () => {
    const pathname = usePathname();
    return (
        <header aria-label="Main Header" className="wrapper flex items-center justify-between py-4">
            {/* logo */}
            <Link href={'/'} className="text-2xl flex gap-2">
                <Image src={'/logo.svg'} alt="logo" width={30} height={30} />
                <strong className="hidden md:block">AI Trip Planner</strong>
            </Link>

            {/* Menu Options */}
            <nav className="flex gap-2 md:gap-4 items-center">
                {menuOptions.map((item, index) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link
                            key={index}
                            href={item.path}
                            className={`capitalize text-lg transition-colors duration-200 hover:text-primary
                                ${isActive ? "text-primary font-semibold " : ""} `}
                        >
                            {item.name}
                        </Link>
                    )
                })}
            </nav>

            {/* Get Started Button */}
            <SignedOut>
                <SignInButton mode="modal">
                    <Button>Get Started</Button>
                </SignInButton>
            </SignedOut>

            <SignedIn>
                <div className="flex items-center gap-2">
                    <UserButton />
                    <Link href={'/create-new-trip'}><Button>Create Trip</Button></Link>
                </div>
            </SignedIn>

        </header>
    )
}

export default Header