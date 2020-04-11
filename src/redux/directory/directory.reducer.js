const INITIAL_STATE = {
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

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        default: return state;
    }
}

export default directoryReducer;