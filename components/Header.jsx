
import Link from "next/link";
import { Button } from "./ui/button";
// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";


const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">Alamin<span className="text-amber-900">..</span>
                    </h1>
                </Link>
                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    <Nav></Nav>
                    <a
                    rel="noopener noreferrer" 
                    href="mailto:alamin50cse.miu@gmail.com"
                    >
                    <Button>Hire me</Button>
                    </a>
                        
                    
                </div>

                {/* mobile nav */}
                <div className="lg:hidden">
                  <MobileNav></MobileNav>
                    </div>
                

            </div>
        </header>
    );
};

export default Header;