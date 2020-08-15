import { compose } from "redux";
import { connect } from "react-redux";
import { isDataLoadedSelector } from "../../redux/selectors/shopSelector";
import Collection from "./Collection"
import withSpinner from "../../components/withSpinner/withSpinner"
import { RootReducer } from "../../redux/reducers/rootReducer";


const mapStateToProps = (state:RootReducer) => ({
  isLoading: !isDataLoadedSelector(state)
})

const CollectionContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(Collection)

export default CollectionContainer as React.FunctionComponent
