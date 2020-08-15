import React from "react"
import { connect } from "react-redux"
import { directorySelector } from "../../redux/selectors/directorySelector"
import { StyledDirectory } from "./directoryStyles"
import MenuItem from "../MenuItem/MenuItem"
import { RootReducer } from "../../redux/reducers/rootReducer"
import { SectionsData } from "../../types/stateTypes"

type Props = {
  directories: SectionsData[]
}

const Directory = ({ directories }: Props) => {
  const MenuItemComponents = directories.map(({ id, ...restDirProps }) => (
    <MenuItem key={id} {...restDirProps} />
  ))

  return (
    <StyledDirectory>
      {MenuItemComponents}
    </StyledDirectory>
  )
}

const mapStateToProps = (state: RootReducer) => ({
  directories: directorySelector(state)
})

export default connect(mapStateToProps)(Directory)
