import React from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import { MoreHorizTwoTone } from '@mui/icons-material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

function Posts({user, postImage, likes, timespamp}) {
  return (
    <div className='post'>
        <div className="post__header">
            <div className="post__headerAuthor">
                <Avatar className='post__avatar'>{user.charAt(0).toUpperCase()}</Avatar>
                {user} • <span>{timespamp}</span>
            </div>

            <MoreHorizTwoTone />
        </div>

        <div className="post__content">
            <img src={postImage}
            alt="" 
            className='content'/>
        </div>

        <div className="post__footer">
            <div className="post__footerIcons">
                <div className="post__iconsMain">
                    <FavoriteBorderIcon className='postIcon'/>
                    <ChatBubbleOutlineOutlinedIcon className='postIcon'/>
                    <TelegramIcon className='postIcon'/>
                </div>

                <div className="post__iconsSave">
                    <BookmarkBorderIcon className='postIcon'/>
                </div>
                
            </div> 

            <span>{likes}</span> Likes
        </div>
    </div>
  )
}

export default Posts