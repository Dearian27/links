import React from 'react'
import Button from '../Button'
import './index.css';
import Avatar from '../Avatar';

export default function Paper() {
  return (
    <div className='paper'>
      <Avatar />
      <h1 className='h1'>Solution</h1>
      <h5 className='h5'>
        Сучасна онлайн-школа з ефективним та цікавим підходом до занять за інтерактивною програмою!
      </h5>
      <h5 className='h5'>
         Записуйся на БЕЗКОШТОВНЕ пробне заняття
      </h5>
      <Button>Запис на заняття</Button>
      <Button>Instagram</Button>
      <Button>TikTok</Button>
      <Button>Facebook</Button>
      <Button>Telegram</Button>
    </div>
  )
}
