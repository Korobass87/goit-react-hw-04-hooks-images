import React, {useEffect} from 'react'
import './Modal.scss'




export default function Modal({URL, closeModal}) {



  const handleKeyDown = e => {
    
    if (e.code === 'Escape') {
      
     closeModal()    
    }
  };

  const backdropClick = e => {
      if (e.currentTarget === e.target) {
        closeModal()
      }
  }

  useEffect(()=>{
    
    window.addEventListener('keydown', handleKeyDown);
  
    return ()=>{window.removeEventListener('keydown', handleKeyDown)} 
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <div className="overlay" onClick={backdropClick}>
    <div className="modal">
      <img src={URL} alt="" />
    </div>
  </div>
)
}



