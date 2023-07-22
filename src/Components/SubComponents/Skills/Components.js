import React from "react";
import Liner from "./Liner";

const Components = {
  liner: Liner,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (block) => {
  if (typeof Components[block.component] !== "undefined") {
    return React.createElement(Components[block.component], {
      key: block._uid,
      block: block,
    });
  }
  return React.createElement(
    () => <div>The component {block.component} has not been created yet.</div>,
    { key: block._uid }
  );
};