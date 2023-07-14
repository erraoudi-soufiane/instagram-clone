import React from 'react'
import "./Suggestions.css"
import { Avatar } from '@mui/material'

function Suggestions() {
  return (
    <div className='suggestions'>
      <div className="suggestions__profile">
        <Avatar className='profile__img' style={{ backgroundImage: `url(${"https://instagram.fcmn1-3.fna.fbcdn.net/v/t51.2885-19/291508258_755060422289171_3179954605539771074_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fcmn1-3.fna.fbcdn.net&_nc_cat=111&_nc_ohc=bLdQii1mlJUAX97IdQV&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfD3KNMQ3XZ4bhpFxUBcFmVanxnae0rxbv8fnHMRYmcf1g&oe=64B548D6&_nc_sid=8b3546"})` }}/>
        <div className="profile__infos">
            <div className="profile__username">erraoudisouf</div>
            <div className="profile__name">ER Raoudi Soufiane</div>
          </div>
      </div>

      <div className="username__title">
        <div className="title__left">Suggested for you</div>
        <button className="title__left">See All</button>
      </div>


      <div className="suggestions__username">
        <div className="username__left">
          <Avatar>R</Avatar>

          <div className="username__infos">
            <div className="username">mohammed_</div>
            <div className="relation">new to instagram</div>
          </div>
        </div>

        <button className="follow__button">Follow</button>
      </div>

      <div className="suggestions__username">
        <div className="username__left">
          <Avatar>R</Avatar>

          <div className="username__infos">
            <div className="username">mohammed_</div>
            <div className="relation">new to instagram</div>
          </div>
        </div>

        <button className="follow__button">Follow</button>
      </div>

      <div className="suggestions__username">
        <div className="username__left">
          <Avatar>R</Avatar>

          <div className="username__infos">
            <div className="username">mohammed_</div>
            <div className="relation">new to instagram</div>
          </div>
        </div>

        <button className="follow__button">Follow</button>
      </div>

      <div className="suggestions__username">
        <div className="username__left">
          <Avatar>R</Avatar>

          <div className="username__infos">
            <div className="username">mohammed_</div>
            <div className="relation">new to instagram</div>
          </div>
        </div>

        <button className="follow__button">Follow</button>
      </div>

    </div>
  )
}

export default Suggestions