import React from "react"
import { RouteComponentProps, withRouter } from "react-router-dom"
import classNames from "classnames"
import "./menuItem.scss"

type Props = { 
  imageUrl: string
  linkUrl: string
  size?: string
  title: string
}

const MenuItem = ({ history, imageUrl, linkUrl, match, size, title }: Props & RouteComponentProps) => {
  return (
    <div className={classNames("menu-item", size)} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <img src={imageUrl} alt={title} />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
}

export default withRouter(MenuItem)