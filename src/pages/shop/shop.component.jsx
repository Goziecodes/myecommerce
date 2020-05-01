import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';
// import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';

import {fetchCollectionsStart} from '../../redux/shop/shop.actions';
// import {selectIsCollectionFetching, selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
// import CollectionsOverview from '../../components/collections-overview/collection-overview.component';

// import CollectionPage from '../collection/collection.component'; 
import CollectionPageContainer from '../collection/collection.container'; 



// import WithSpinner from '../../components/with-spinner/with-spinner.component';




// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

// match prop comes from our shop component being nested with a Route tag in app.js, along with history and location
const ShopPage= (fetchCollectionsStart, match, isCollectionLoaded ) =>{

    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart ])

    // componentDidMount(){  
    //     const {fetchCollectionsStart} = this.props;
    //     fetchCollectionsStart();

    // }  
 
    
    // console.log(match);
    // console.log(history);
    // console.log(location);
    
        return (
            <div className="shop-page">
                {/* <Route exact path={`${match.path}`} render={(props)=> <CollectionsOverviewWithSpinner isLoading={isCollectionLoaded} {...props} /> } /> */}
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                <Route  path={`${match.path}/:collectionId`} component={CollectionPageContainer} />  
                {/* <Route  path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />} />   */}
                {/* <CollectionsOverview /> */}
                {/* <div>{console.log( 'isCollectionFetching  ' + isCollectionFetching)}</div> */}
                {/* <div>{console.log( 'isCollectionLoaded  ' + isCollectionLoaded)}</div> */}
            </div>
        )
}

// const mapStateToProps = createStructuredSelector({
//     // isCollectionFetching: selectIsCollectionFetching,
//     // isCollectionLoaded:  selectIsCollectionsLoaded
// });

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null,mapDispatchToProps)(ShopPage);
// export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);