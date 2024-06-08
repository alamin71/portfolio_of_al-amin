import Link from "next/link";
import {FaGithub, FaLinkedin, FaFacebook} from "react-icons/fa";

const socials = [
    {icon: <FaGithub/>, path:'https://github.com/alamin71'},
    {icon: <FaLinkedin/>, path:'https://www.linkedin.com/in/al-amin-8640b31a0/'},
    {icon: <FaFacebook/>, path:'https://www.facebook.com/alamin.cse.21'},
    
]

const Social = ({containerStyles, iconStyles}) => {
    return <div className={containerStyles}>
        {socials.map((item, index)=>{
            return <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        })}

    </div>;

};

export default Social;