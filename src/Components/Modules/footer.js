export default function FooterModule() {
  return (
    <div className="h-36 bg-[#08090a] font-bold ">
      <div className="flex">
        <div className=" flex items-center m-auto ">
          <p>
            <span className="text-accent-color text-5xl ">{"<"}</span>
          </p>
          <div className="mt-2">
            <span className="text-white  text-3xl  ">{"Mario"}&nbsp;</span>
          </div>

          <div className="">
            <p>
              <span className="text-accent-color text-3xl ">{"{"}</span>

              <span className="text-white text-xl ">&nbsp;{"C"}&nbsp;</span>

              <span className="text-accent-color text-3xl ">{"}"}</span>
            </p>
          </div>

          <div className="mt-2">
            <span className="text-white  text-3xl  ">&nbsp;{"Iord"}</span>
          </div>

          <p>
            <span className="text-accent-color text-5xl ">{">"}</span>
          </p>
        </div>
      </div>

      <div className="flex mt-5">
        <div className=" flex items-center m-auto ">
          <a className="text-neutral-500 text-sm">Designed in <span className="text-red-600">Adobe XD</span></a>
        </div>
      </div>

      <div className="flex">
        <div className=" flex items-center m-auto ">
          <span className="text-neutral-500 text-sm">Date Version: <span className="text-red-600">03/04/2023</span></span>
        </div>
      </div>

      <div className="flex mb-5">
        <div className=" flex items-center m-auto ">
          <a className="text-neutral-500 text-sm">achieved with <span className="text-red-600">React & TailwindCSS</span></a>
        </div>
      </div>

      
    </div>
  );
}
