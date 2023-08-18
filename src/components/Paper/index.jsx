import React from 'react'
import Button from '../Button'
import './index.css';
import Avatar from '../Avatar';

export default function Paper() {
  return (
    <div className='paper'>
      <Avatar />
      <h1 className='title'>Solution</h1>
      {/* <h5 className='description'>
        Сучасна онлайн-школа з ефективним та цікавим підходом до занять за інтерактивною програмою!
      </h5> */}
      <h5 className='description'>
        Сучасна онлайн-школа за інтерактивною програмою.
      </h5>
      <h5 className='description' style={{flexDirection: 'row', flexWrap: "wrap"}}>
        Записуйся на <span style={{background: "#e4dcd2", borderRadius: 5, padding: "1px 4px", width: "max-content"}}>БЕЗКОШТОВНЕ</span> пробне заняття!
      </h5>
      <Button link="https://forms.gle/WZDyXtrAM4CJ3SUL6">Запис на заняття</Button>
      <Button link="https://instagram.com/solution_online_school?igshid=MzRlODBiNWFlZA==">Instagram</Button>
      <Button link="http://www.tiktok.com/@solution.online.school">TikTok</Button>
      <Button link="https://www.facebook.com/dana.eng.lish.l">Facebook</Button>
      <Button link="https://t.me/english_with_dana_23">Telegram</Button>
    </div>
  )
}
