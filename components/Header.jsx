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
          <h1 className="text-4xl font-semibold">
            Alamin<span className="text-green-300">..</span>
          </h1>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Nav></Nav>
          {/* <a
                    rel="noopener noreferrer" 
                    href="mailto:alamin50cse.miu@gmail.com"
                    >
                    <Button className="bg-green-700">Hire me</Button>
                    </a> */}
          <Link href="mailto:alamin50cse.miu@gmail.com" passHref>
            <Button className="bg-green-700">Hire me</Button>
          </Link>
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
