import React from 'react'
import "./Post.css";
import InputOption from './InputOption';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatBubbleOutlineTwoToneIcon from '@mui/icons-material/ChatBubbleOutlineTwoTone';
import IosShareTwoToneIcon from '@mui/icons-material/IosShareTwoTone';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';

function Post({ name, description, message, photoUrl }) {
    return (
        <div className="post">
            <div className="post__header">
                {/* <Avatar /> */}
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            
            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltIcon} title="Like" color="gray" />
                <InputOption Icon={ChatBubbleOutlineTwoToneIcon} title="Comment" color="gray" />
                <InputOption Icon={IosShareTwoToneIcon} title="Share" color="gray" />
                <InputOption Icon={SendTwoToneIcon} title="send" color="gray" />
            </div>

      </div>
  )
}

export default Post