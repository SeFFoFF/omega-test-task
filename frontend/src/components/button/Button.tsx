'use client'

import React from 'react'
import './button.style.scss'

interface IButtonProps {
  text: string
  className: string
}

export const Button = ({ text, className }: IButtonProps) => {
  return <button className={`button ${className}`}>{text}</button>
}
