import React from 'react'

export default function Panel({props}) {
  props = props || {};
  let color = props.color || "inherit";
  let textColor = props.textColor || "inherit";
  let fontSize = props.fontSize || 20;
  let children = props.children;
  return (
    <div style={{backgroundColor: color, color: textColor, fontSize: fontSize + "px"}}>
      {children}
    </div>
  )
}
