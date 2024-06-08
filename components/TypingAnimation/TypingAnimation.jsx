import React from 'react';
import Typewriter from "typewriter-effect";

const TypingAnimation = () => {
    return (
        <div className="text-lg">
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
          delay: 40,
          strings: [
            "I am a Front-end Developer",
            "I am a MERN Stack Developer",
            "I am a React JS Developer",
          ],
        }}
      />
    </div>
    );
};

export default TypingAnimation;