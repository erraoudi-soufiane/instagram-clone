import React from 'react'
import "./Timeline.css"
import Suggestions from './Suggestions'
import Post from './posts/Post'
import { useState } from 'react'

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "erraoudi",
      postImage: "https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg",
      likes: 95,
      timespamp: "4h",
    },
    {
      user: "Laila",
      postImage: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      likes: 12,
      timespamp: "3min",
    },
    {
      user: "mohammed_",
      postImage: "https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg",
      likes: 13,
      timespamp: "5min",
    },
    {
      user: "7ijabi 3iffati",
      postImage: "https://www.abondance.com/wp-content/uploads/2018/07/pirates-des-caraibes.jpg",
      likes: 155,
      timespamp: "12h",
    },
    {
      user: "Ihab__",
      postImage: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      likes: 34,
      timespamp: "2h",
    },
    {
      user: "Anas lghlid",
      postImage: "https://www.powertrafic.fr/wp-content/uploads/2023/04/image-ia-exemple.png",
      likes: 546,
      timespamp: "2d",
    },
  ]);
  return (
    <div className='timeline'>
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post user={post.user} postImage={post.postImage} likes={post.likes} timespamp={(post.timespamp)} />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  )
}

export default Timeline