import React, {useState} from 'react'
import Searchbar from './Searchbar/Searchbar'
import ImageGallery from './ImageGallery/ImageGallery'




export default function App() {

  const [nameQuery, setNameQuery] = useState("")

  const formSubmit = (name) => {
   
    setNameQuery(name)
  } 

  return (
    <div >
      <Searchbar onSubmit={formSubmit} />
      <ImageGallery imgName={nameQuery} />
     </div>
  )
}


// export default class App extends Component {
//  state = {
//    nameQuery: "",
   
//  }
 
//  formSubmit = (nameQuery) => {
   
//    this.setState ({nameQuery})
//  } 

//   render() {
    
//   }
// }




