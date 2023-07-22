import React, { Component } from "react";
import { TypeAnimation } from "react-type-animation";
import { TextLoop } from "react-text-loop-next-18";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const word = [
  "Hi,",
  "Hello,",
  "Ciao,",
  "Hallo,",
  "Hola,",
  "Salut,",
  "Прив,",
  "挨拶,",
  "Salam,",
  "Sveiki,",
  "Hei,",
  "<->",
];
const birthdayTimestamp = 1148774400;
const age = Math.floor(
  (Date.now() / 1000 - birthdayTimestamp) / 3.154e7
).toString();
const bio = `I'm a ${age}-year-old student from Italy with a strong passion for programming, game development, and technology.`;

const aboutMe = `I started with Python in 2019, now proficient in React, React Native, TailwindCSS, Unity C#, and mainly interested in Rust and C#.`;

class GreenScreen extends Component {
  state = {
    number: word[0],
  };

  notify = () =>
    toast(">> Discord Username: Norvik#2001", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  render() {
    return (
      <div className="landscape:bg-peaks-background   portrait:bg-tall-peaks-background ">
        <nav className="flex gap-12 justify-center px-6 py-4">
          <button onClick={this.notify} type="button">
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
            <img
              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6ac3c481f273141736_icon_clyde_black_RGB.png"
              alt="logo"
              width="60"
              height="60"
            />
          </button>
          <ul className="flex gap-8 space-x-4">
            <li>
              <a target="_blank" href="https://github.com/Norvikk">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="github"
                  width="60"
                  height="60"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href="mailto:web-lnk-prtf@imcnorvik.xyz">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/561/561188.png"
                  alt="email"
                  width="60"
                  height="60"
                />
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center text-l font-monocraft md:text-[0px] text-center font-bold">
         Designed for monitors, not all phone-resolutions work.
          <br />
          Contact if issues occur. 
        </div>

        <div className="flex justify-evenly items-center flex-row h-screen pt-[30%] flex-wrap">
          <div className=" text-center text-md font-extrabold text-slate-400">
            <div className="flex text-center items-center w-[300px] text-white md:text-gray-600 ">
              {" "}
              {bio}{" "}
            </div>
            <hr className="bg-accent-color h-1 border-0 mt-2" />
            <div>
              <TypeAnimation
                sequence={["About me.."]}
                cursor={true}
                speed={200}
              />
            </div>
          </div>

          <div className=" mt-36 md:mt-0 text-3xl  font-bold  text-slate-200  mb-36 ">
            <div class="w-36 flex text-center ">
              <TextLoop
                children={word}
                noWrap={true}
                interval={[
                  2500, 700, 600, 500, 500, 450, 400, 400, 300, 300, 200, 1000,
                ]}
                springConfig={{ stiffness: 180, damping: 16 }}
                className=" text-7xl font-bold  text-slate-200  "
              />
            </div>

            <div className="flex justify-center mt-2">
              {" "}
              I'm <span className="text-accent-color">&nbsp;Mario</span>
            </div>
          </div>
          <div className="text-center text-md font-extrabold text-slate-400 ">
            <div>
              <TypeAnimation
                sequence={["When it began.."]}
                cursor={true}
                speed={200}
              />
              <hr className="bg-accent-color h-1 border-0 mt-2 mb-2" />
              <div className="flex text-center items-center w-[300px] text-white md:text-gray-600 ">
                {" "}
                {aboutMe}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GreenScreen;
