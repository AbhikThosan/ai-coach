import React from "react";
import Refresh from "../../../assets/images/icons/Refresh";
import ThumbsUp from "../../../assets/images/icons/ThumbsUp";
import ThumbsDown from "../../../assets/images/icons/ThumbsDown";
import Volume from "../../../assets/images/icons/Volume";
import Clipboard from "../../../assets/images/icons/Clipboard";

const ChatActions = () => {
  return (
    <>
      <button className="cursor-pointer">
        <Refresh />
      </button>
      <button className="cursor-pointer">
        <ThumbsUp />
      </button>
      <button className="cursor-pointer">
        <ThumbsDown />
      </button>
      <button className="cursor-pointer">
        <Clipboard />
      </button>
      <button className="cursor-pointer">
        <Volume />
      </button>
    </>
  );
};

export default ChatActions;
