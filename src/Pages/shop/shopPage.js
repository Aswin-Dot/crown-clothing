import React from 'react';
import{ Route } from 'react-router-dom';
import CollectionsOverview from '../../Components/Collections-Overview/collections-overview';
import CollectionItem from '../collection/collection';

const ShopPage = ({ match }) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionItem} />
    </div>
);

export default ShopPage;