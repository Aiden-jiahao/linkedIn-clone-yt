import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import InputOption from "./InputOption";
import "./Posts.css";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatIcon from "@material-ui/icons/Chat";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";

const Posts = forwardRef(({ name, description, message, photourl }, ref) => {
  return (
    <div ref={ref} className="post">
      <Avatar src={photourl}>{name[0]} </Avatar>
      <div className="post__info">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltIcon} title="Like" color="gray" />
        <InputOption Icon={ChatIcon} title="Chat" color="gray" />
        <InputOption Icon={ShareIcon} title="Share" color="gray" />
        <InputOption Icon={SendIcon} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Posts;
