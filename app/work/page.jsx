import FrontendProject from "../../components/WorkPages/FrontendProject";
import FullStackProject from "../../components/WorkPages/FullStackProject";

const Work = () => {
  return (
    // <div className='ml-16'>
    //     <h1 className='text-center text-accent text-4xl underline underline-offset-8'>Services</h1>
    //     <h1>Web Development</h1>

    //     <li>Full Stack Web development</li>
    //     <li>Frontend development</li>

    // </div>
    <>
      <FullStackProject />
      <FrontendProject />
    </>
  );
};

export default Work;
