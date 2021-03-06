import { Avatar } from "@material-ui/core";
import React from "react";
import './Post.css'
import InputItems from './InputItems';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined'
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined'
import ShareOutlinedIcon from '@material-ui/icons/FolderSharedOutlined'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
function Posts({name, description, message, photoUrl}){
  return(
    <div className="posts_container">
        <div className="posts_header">
            <Avatar src={photoUrl}/>
            <div className="posts_info">
                <p className="posts_name">{name}</p>
                <p className="posts_description">{description}</p>
                
            </div>
        </div>
        <div className="posts_body">
          <p>{message}</p>
        </div>
        <div className="posts_options">
          <InputItems Icon={ThumbUpOutlinedIcon} title="Like" />
          <InputItems Icon={MessageOutlinedIcon} title="Comment" />
          <InputItems Icon={ShareOutlinedIcon} title="Share" />
          <InputItems Icon={SendOutlinedIcon} title="Send" />
        </div>
    </div>
  )
}

export default Posts;