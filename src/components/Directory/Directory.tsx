import React, { useState } from "react"
import { directoryData  } from "../../initialValues"
import MenuItem from "../MenuItem/MenuItem"
import "./directory.scss"

export default function Directory() {
  const [directories, setDirectories] = useState(directoryData)
  const MenuItemComponents = directories.map(({ id, imageUrl, size, title }) => (
    <MenuItem key={id} imageUrl={imageUrl} size={size} title={title} />
  ))

  return (
    <div className="directory-menu">
      {MenuItemComponents}
    </div>
  )
}