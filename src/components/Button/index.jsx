import React from 'react';
import './index.css';

export default function Button(props) {
  return (
    <a href={props.link} className="button">
      {props.children}
    </a>
  )
}
