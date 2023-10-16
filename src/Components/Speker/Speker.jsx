import React from 'react'

const Speker = ({ image, name }) => {
  return (
    <>  
    
    
    <div className="relative group overflow-hidden">
       
       <img 
         src={image} 
         alt={name} 
         className="transition-transform transform group-hover:scale-110" 
       />
       <p className="absolute top-0 left-0 bg-black bg-opacity-50 text-white px-2 py-1 transition-opacity opacity-0 group-hover:opacity-100">
         {name}
       </p>
     </div>
     </>

  )
}

export default Speker