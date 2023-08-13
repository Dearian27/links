import React from 'react';
import './index.css';

export default function Button(props) {
  return (
    <a href="http://www.tiktok.com/@solution.online.school">
      <button>
        {props.children}
      </button>
    </a>
  )
}
