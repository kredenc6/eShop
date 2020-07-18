import React, { useState } from "react"
import { directoryData  } from "../../initialValues"
import MenuItem from "../MenuItem/MenuItem"
import "./directory.scss"

export default function Directory() {
  const [directories, setDirectories] = useState(directoryData)
  const MenuItemComponents = directories.map(({ id, ...restDirProps }) => (
    <MenuItem key={id} {...restDirProps} />
  ))

  return (
    <div className="directory-menu">
      {MenuItemComponents}
    </div>
  )
}