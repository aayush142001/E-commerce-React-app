import React from "react";

import CollectionItem from '../../Components/collection-item/collection-item.component';

import { selectCollection } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";

import './collection.styles.scss';

 const CollectionPage = ({ collection }) => {
    const {title, items} = collection;
    return(
     <div className="collection-page">
         <h2 class="title">{title}</h2>
         <div className="items">
             {
                 items.map(item => 
                 <CollectionItem key={item.id} item = {item} />
                 )
             }
         </div>
     </div>
 )};

 const mapStateToProps = (state, ownProps) => ({ // own props are the props being sent to this component. Like Route is sending match to it.
    collection : selectCollection(ownProps.match.params.collectionId)(state), // why are we sending State here? Maybe because we are not using sturctured selector here...
 });
 export default connect(mapStateToProps)(CollectionPage);