import React from 'react'
import Button from '../Button'
import './index.css';
import Avatar from '../Avatar';

export default function Paper() {
  return (
    <div className='paper'>
      <Avatar />
      <h1 className='title'>Solution</h1>
      <h5 className='description'>
        Сучасна онлайн-школа з ефективним та цікавим підходом до занять за інтерактивною програмою!
      </h5>
      <h5 className='description'>
         Записуйся на БЕЗКОШТОВНЕ пробне заняття
      </h5>
      <Button link="https://forms.gle/WZDyXtrAM4CJ3SUL6">Запис на заняття</Button>
      <Button link="">Instagram</Button>
      <Button link="http://www.tiktok.com/@solution.online.school">TikTok</Button>
      <Button link="https://www.facebook.com/dana.eng.lish.l">Facebook</Button>
      <Button link="https://t.me/english_with_dana_23">Telegram</Button>
    </div>
  )
}
