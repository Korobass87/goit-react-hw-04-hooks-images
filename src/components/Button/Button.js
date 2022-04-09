import React from 'react'
import "./Button.scss"




export default function Button({loadMore} ) {


  return (
    <div className='wrap'><button className='loadMoreBtn' type='button' onClick={loadMore} > load more... </button></div>
)
}


// export default class Button extends Component {
//   render() {
//     return (
//         <div className='wrap'><button className='loadMoreBtn' type='button' onClick={this.props.loadMore} > load more... </button></div>
//     )
//   }
// }
