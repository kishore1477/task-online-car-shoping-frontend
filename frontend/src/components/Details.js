import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
 

const Details = (props) => {
  const {addToCart, cart, removeFromCart, clearCart} = props
   
    const {itemId}= useParams()
    console.log("item id ", itemId)
    // string to int 
    const itemSlugId = parseInt(itemId)
    console.log("id", typeof(itemSlugId))

  // Fetched data from api request
  const [dataP, setdataP] = useState([]);

 
const fData = async()=>{

    const data = await fetch('https://talented-gray-narwhal.cyclic.app/api/products/getProductRouterItem')
    const datajson = await data.json()
    const Data = datajson.data
  

    for (let i = 0; i < Data.length; i++) {
            const element = Data[i];
           
           const id = parseInt(element._id)
           
           if( element._id=== itemId){
              console.log("condition", element._id === itemSlugId)
              console.log("element is ",element )
                setdataP(element)
        
           
        }
        }
  }
  // Run async function
useEffect(() => {
  fData().then(()=>console.log())
  console.log("dataP",dataP)
}, []);
 
  return (

<div className='container'>
{dataP && <>  
<section className="text-gray-600 body-font overflow-hidden" style={{userSelect: 'auto'}}>
  <div className="container px-5 py-24 mx-auto" style={{userSelect: 'auto'}}>
    <div className="lg:w-4/5 mx-auto flex flex-wrap" style={{userSelect: 'auto'}}>
      <img alt="cars" className="lg:w-1/2 w-full lg:h-auto h-64 rounded" src={dataP.img_url} style={{userSelect: 'auto'}} />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" style={{userSelect: 'auto'}}>
        <h2 className="text-sm title-font text-gray-500 tracking-widest" style={{userSelect: 'auto'}}>{dataP.category}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1" style={{userSelect: 'auto'}}>{dataP.title}</h1>
        <span className="text-gray-600 ml-3" style={{userSelect: 'auto'}}> <b className='font-bold text-red-500'>Rating:</b> <b>{dataP.rating} stars </b></span>
     
        <p className="leading-relaxed" style={{userSelect: 'auto'}}>{dataP.desc}</p>
 
        <div className="flex" style={{userSelect: 'auto'}}>
          <span className="title-font font-medium text-2xl text-gray-900" style={{userSelect: 'auto'}}>${dataP.price}</span>
       
         
        
        </div>
      </div>
    </div>
  </div>
</section>
</>} 
    </div>
   
  )
}

export default Details