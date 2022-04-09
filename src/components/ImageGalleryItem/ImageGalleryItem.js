import React from 'react'
import "./ImageGalleryItem.scss"




export default function ImageGalleryItem({largeImg, showModal, URL, alt }) {

  const modal = (e) => {
    showModal(largeImg)
}


  return (
    <li className="gallery-item">
            <img src={URL} alt={alt} onClick={modal} />
    </li>
)
}


// export default class ImageGalleryItem extends Component {
    

// showModal = (e) => {
//     this.props.showModal(this.props.largeImg)
// }




//   render() {
//     return (
//         <li className="gallery-item">
//                 <img src={this.props.URL} alt={this.props.alt} onClick={this.showModal} />
//         </li>
//     )
//   }
// }
