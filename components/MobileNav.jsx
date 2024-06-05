"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "services",
        path: "/services",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "work",
        path: "/work",
    },
    {
        name: "contact",
        path: "/contact",
    },
];

const MobileNav = () => {
    const pathname = usePathname();
    return <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent-default" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            {/* logo */}
            <div className="mt-32 mb-30 text-center text-xl">
                <Link href="/">
                    <h1 className="text-3xl font-semibold">Alamin<span className="text-amber-900">..</span>
                    </h1>
                </Link>
            </div>
            {/* nav */}
            <nav className="flex flex-col justify-center items-center gap-6">
                {links.map((link, index) => {
                    return (
                        <Link 
                        href={link.path} 
                        key={index}
                         className={`${
                            link.path === pathname && 
                            "text-accent border-b-2 border-accent-hover"}
                          text-xl capitalize hover:text-accent-hover translation-all`} >
                            {link.name}
                        </Link>
                    );
                })}
            </nav>
        </SheetContent>

    </Sheet>;
};

export default MobileNav;