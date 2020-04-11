import React from 'react';
import {Route} from 'react-router-dom';
 

import CollectionsOverview from '../../components/collections-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

// match prop comes from our shop component being nested with a Route tag in app.js, along with history and location
const ShopPage = ({match}) => {     
    // console.log(match);
    // console.log(history);
    // console.log(location);
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route  path={`${match.path}/:collectionId`} component={CollectionPage} />
                {/* <CollectionsOverview /> */}
            </div>
        )
    

}



export default ShopPage;