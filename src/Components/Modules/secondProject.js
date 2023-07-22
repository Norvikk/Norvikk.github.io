import React, { useState, useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";

const AnimateOnView = ({ sequence }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    });
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref}>
      {isInView && (
        <TypeAnimation sequence={sequence} cursor={false} />
      )}
    </div>
  );
};

class MainProject extends React.Component {
  render() {
    return (
      <div className=" overflow-x-hidden md:mt-56 portrait:h-[100vh] h-min-[100vh] md:h-[70vh]   w-[99vw]  bg-gradient-background flex  items-center flex-wrap font-monocraft">
        <div className="ml-12 pb-4 w-[350px] mb-2 font-bold flex flex-col text-5xl text-white">
          Console <span className="text-accent-color">Math</span>
          <div className="text-sm text-gray-400 mt-4 bg-[#101212] shadow-lg shadow-accent-color rounded-3xl  p-4">
          ConsoleMath is a C# console application that enables users to perform mathematical calculations and generate random numbers in a user-friendly interface. It's a fun project to practice C# programming skills.
          </div>
          <a
                className="ml-auto mr-auto mt-6 items-center justify-center bg-[#1d1d1d] rounded-3xl w-64 h-12 text-2xl flex-row flex"
                href="https://github.com/Norvikk/ConsoleMath"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
                <img
                  src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/external-link-512.png"
                  className="w-8 h-8"
                />
              </a>
        </div>
        
        <div className="ml-auto mr-auto w-[95%] portrait:h-[40%] md:w-[70%] h-[40%] md:h-[85%] bg-[#3b2121]  rounded-3xl text-white font-bold">
          <div className="ml-8 text-xs md:text-lg">
            <br />
            <AnimateOnView sequence={["<Norvik>     ConsoleMath"]} />
           
            <AnimateOnView sequence={["+-+-+-+-+-+-+-+-+-+-"]} />
          
            
            <AnimateOnView sequence={["Sample input: What is -3 if you add 94 to it?"]} />
            <br />
            <AnimateOnView sequence={["Answer provided: 91"]} />
            <AnimateOnView sequence={["-------------------"]} />
            <br />
            <br />
            <AnimateOnView sequence={["What is 1 plus nine times 10 minus one * 6?"]} />
            
            <AnimateOnView sequence={["The result is: 85"]} />
            <br />
            <AnimateOnView sequence={["Press <Enter> to clear and restart"]} />
          </div>
        </div>
       
      </div>
    );
  }
}

export default MainProject;
