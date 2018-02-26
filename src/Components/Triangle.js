import React from 'react'
import '../App.css'

function Triangle({vertices, color, delay, changeColor}) {
  const pathData = [
    "M", vertices[0][0], vertices[0][1],
    "L", vertices[1][0], vertices[1][1],
    "L", vertices[2][0], vertices[2][1],
    "Z"
  ].join(' ');

  const styles = {
    animation: "bounce 1.2s ease infinite",
    transformOrigin: "50% 100%",
    animationDelay: `${delay}ms`
  }

  return (
    <path style={styles} onClick={changeColor} d={pathData} fill={color} />
  )
}

export default Triangle
