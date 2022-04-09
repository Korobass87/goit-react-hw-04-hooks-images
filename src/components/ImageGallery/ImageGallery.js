import React, {useState, useEffect} from 'react'
import API from "../../Services/API"
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import Modal from 'components/Modal/Modal'
import Button from 'components/Button/Button'

import "./ImageGallery.scss"
import Loading from 'components/Loading/Loading'

const Status = {
  LOADING: "loading",
  REJECTED: "rejected",
  MODAL: "modal"
}



export default function ImageGallery({imgName}) {
  
  
    const [hits, setHits] = useState(null)    
    const [modalImg, setModalImg] = useState("")   
    const [error, setError] = useState(null)
    const [page, setPage] = useState(0)
    const [maxPage, setMaxPage] = useState(0)
    const [showLoadMore, setShowLoadMore] = useState(false)
    const [status,setStatus] = useState("waiting")
    const [prevImgName, setPrevImgName] = useState("")
 
    const showModal = (img) => {
      setModalImg(img)
      setStatus(Status.MODAL)
      
    }
   const closeModal = () => {
      setStatus(Status.REJECTED)
     
    }

    

function firstRender () {
  setStatus(Status.LOADING)
  setPage(1) 
  setHits(null) 
  setPrevImgName(imgName)
}

useEffect(() => {
   
  
  if (imgName !== prevImgName) {
    
    
      
       firstRender()
         
       
        API.FetchImg(imgName, 1)
         .then(data=>{
   
           if (data.total>0 && data.total<=12) {
             setHits(data.hits)
              setError(null)
             }
           
           if (data.total===0) {
             setError(true) 
             setHits(null)
           }
     
           if (data.total>12) {
           setMaxPage(Math.ceil(data.totalHits/12))
           setHits(data.hits)
           setShowLoadMore(true)
           }
        
       })
       
     
         .catch(error=>setError(error))
         .finally(()=>{setStatus(Status.REJECTED)
         setPrevImgName(imgName)
        
        }
         )
   
   
     

    

    
    }

    

  
}, [imgName] )


    
  
  function loadMore () {

   setStatus(Status.LOADING)
    setPage(page+1)
    setShowLoadMore(false)
    
    console.log(page);

    scroll()

    API.FetchImg(imgName, page+1)
          .then(data => setHits([...hits, ...data.hits]))
          .finally(()=>{
            setStatus(Status.REJECTED);
            setShowLoadMore(true);
            scroll()                      
          })
      
      
          
   }
  
   const scroll = () => {
      window.scrollBy({
      top: 500,
      behavior: 'smooth',
      })  
      
  }
  
  return (
      
    <section>

    {error && <div className='wrap'><h2>Картинки с именем <span className='wrapper'>{imgName}</span> не найдено</h2></div>}

    {imgName === "" && <div className='wrap'><h2>Введите текст для поиска картинки</h2></div>}

    {hits && <><ul className="gallery">{hits.map(img => <ImageGalleryItem key={img.id} URL={img.webformatURL} largeImg={img.largeImageURL} alt={imgName} showModal={showModal} />)}
    
    </ul> </>}
    
    {status === "loading" && <Loading/>}

   {maxPage !== page && hits && showLoadMore && <Button loadMore={loadMore}/> }
   
    { status === "modal" && <Modal  URL={modalImg} closeModal={closeModal}  />}
   
    </section>
)
}



