import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionFetching } from '../../Redux/shop/shop-selectors';
import WithSpinner from '../With-Spinner/with-spinner';
import CollectionsOverview from './collections-overview';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

// compose acts as a HOC from right to left
const CollectionsOverviewContainer = compose( 
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;