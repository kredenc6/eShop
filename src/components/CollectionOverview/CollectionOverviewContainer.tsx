import { RootReducer } from "../../redux/reducers/rootReducer"
import { isDataLoadedSelector } from "../../redux/selectors/shopSelector"
import { compose } from "redux"
import { connect } from "react-redux"
import CollectionOverview from "../CollectionOverview/CollectionOverview"
import withSpinner from "../withSpinner/withSpinner"


const mapStateToProps = (state: RootReducer) => ({
  isLoading: !isDataLoadedSelector(state)
})

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionOverview)

// export default connect(mapStateToProps)(withSpinner(CollectionOverview)) as React.FunctionComponent
export default CollectionOverviewContainer as React.FunctionComponent