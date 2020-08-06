import React from "react"
import { connect } from "react-redux"
import { directorySelector } from "../../redux/selectors/directorySelector"
import MenuItem from "../MenuItem/MenuItem"
import { RootReducer } from "../../redux/reducers/rootReducer"
import { SectionsData } from "../../types/stateTypes"
import "./directory.scss"

type Props = {
  directories: SectionsData[]
}

const Directory = ({ directories }: Props) => {
  const MenuItemComponents = directories.map(({ id, ...restDirProps }) => (
    <MenuItem key={id} {...restDirProps} />
  ))

  return (
    <div className="directory-menu">
      {MenuItemComponents}
    </div>
  )
}

const mapStateToProps = (state: RootReducer) => ({
  directories: directorySelector(state)
})

export default connect(mapStateToProps)(Directory)