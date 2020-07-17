import React from "react"
import classNames from "classnames"
import "./menuItem.scss"

type Props = { 
  imageUrl: string
  size: string | undefined
  title: string
}

export default function MenuItem2({ imageUrl, size, title }: Props) {
  return (
    <div className={classNames("menu-item", size)}>
      <img src={imageUrl} alt={title} />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
}