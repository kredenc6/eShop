import React, { useState } from "react"
import SECTIONS_DATA  from "../../initialValues/sectionsData"
import MenuItem from "../MenuItem/MenuItem"
import "./directory.scss"

export default function Directory() {
  const [directories, setDirectories] = useState(SECTIONS_DATA)
  const MenuItemComponents = directories.map(({ id, ...restDirProps }) => (
    <MenuItem key={id} {...restDirProps} />
  ))

  return (
    <div className="directory-menu">
      {MenuItemComponents}
    </div>
  )
}
