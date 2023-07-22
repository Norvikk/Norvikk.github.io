import React from "react";

export default (props) => (
  <div className="w-full h-24 mb-6 shadow-xl rounded-xl border-accent-color  border-[1px] flex items-center contrast-[0.90] ">
    {props.block.height === "" ? (
      <img
        className="ml-3 w-14 contrast-100"
        src={props.block.logo_link}
        alt="new"
      />
    ) : (
      <img
        className="ml-3 w-14 h=[30px] contrast-100"
        src={props.block.logo_link}
        alt="new"
      />
    )}
    <hr className="ml-4 mr-4 w-0.5 h-7/10 bg-accent-color rounded border-0 " />

    <div className="text-center ml-auto mr-auto">
      <p className="text-white text-sm">{props.block.metadata_title}</p>
      <p className="text-neutral-500 text-sm">{props.block.metadata}</p>
    </div>
  </div>
);