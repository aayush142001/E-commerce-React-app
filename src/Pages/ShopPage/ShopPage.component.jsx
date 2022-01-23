import React from "react";

import CollectionPage from "../collection/collection.component.jsx";
import CollectionOverview from '../../Components/./collection-overview/collection-overview.component.jsx';



import { Route } from 'react-router-dom';

const ShopPage = ({ match }) => (
    <div className="shop-page">
        <Route exact path = {`${match.path}`} component = {CollectionOverview} />
        <Route exact path = {`${match.path}/:collectionId`} component = {CollectionPage} />
    </div>
);

export default ShopPage;