// eslint-disable-next-line import/no-anonymous-default-export
import React from "react";

export default (props) => (
  <a
    href={props.block.anchor_redirect}
    target="_blank"
    rel="noreferrer"
    className="h-24 w-4/5 lg:w-[24rem] m-8 rounded-xl flex items-center bg-foreground-color shadow-tallBox"
  >
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
      <p className="text-white font-bold   text-md">
        {props.block.metadata_title}
      </p>
      <p className="text-neutral-500 text-sm">{props.block.metadata}</p>
    </div>
  </a>
);
