import React from "react"
import { RouteComponentProps, withRouter } from "react-router-dom"
import { StyledContent, StyledMenuImage, StyledMenuItem } from "./menuItemStyles"

type Props = { 
  imageUrl: string
  linkUrl: string
  size?: string
  title: string
}

const MenuItem = ({ history, imageUrl, linkUrl, match, size, title }: Props & RouteComponentProps) => {
  return (
    <StyledMenuItem onClick={() => history.push(`${match.url}${linkUrl}`)} size={size}>
      <StyledMenuImage imageUrl={imageUrl} />
      <StyledContent>
        <h1>{title}</h1>
        <span>SHOP NOW</span>
      </StyledContent>
    </StyledMenuItem>
  )
}

export default withRouter(MenuItem)