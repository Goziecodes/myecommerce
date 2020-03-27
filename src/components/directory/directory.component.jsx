 import React from 'react';
 import './directory.styles.scss';
 import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component{
    constructor(){
        super();
        
        this.state = {
            sections: [
                {
                  title: 'hats',
                  imageUrl: './images/1.jpg',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: './images/2.jpg',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: './images/3.jpg',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: './images/4.jpg',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: './images/5.jpg',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]              
        }
    }

  render(){
      return(
        <div className="directory-menu">
        {
          this.state.sections.map(({id, ...otherSectionProps}) =>(
            <MenuItem key={id} {...otherSectionProps} />
          ))
        }  
        </div>
      )
  }
}








 export default Directory;