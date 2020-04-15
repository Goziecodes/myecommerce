import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
 

import CollectionsOverview from '../../components/collections-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

import {updateCollections} from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';



const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

// match prop comes from our shop component being nested with a Route tag in app.js, along with history and location
class ShopPage extends React.Component{
    state = {
        loading: true 
    };

    unsubscribeFromSnapshot  = null;

    // componentDidMount(){
    //     const {updateCollections} = this.props;
    //     const collectionRef = firestore.collection('collections');

    //    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot =>{
    //         // console.log(snapshot);   
    //       const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //     //   console.log(collectionsMap);
    //     updateCollections(collectionsMap);   
    //     this.setState({loading: false});
    //     })
    // }

    componentDidMount(){
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');

       collectionRef.get().then(snapshot =>{            
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);        
        updateCollections(collectionsMap);   
        this.setState({loading: false});
        });
    }
   

    render(){
        const {match} =this.props;
        const {loading} = this.state;
         // console.log(match);
    // console.log(history);
    // console.log(location);
    
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props)=> <CollectionsOverviewWithSpinner isLoading={loading} {...props} /> } />
                <Route  path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
                {/* <CollectionsOverview /> */}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage);