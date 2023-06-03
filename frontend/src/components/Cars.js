import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
const Cars = () => {
    const [dataP, setdataP] = useState([]);
    const fData = async()=>{

        const data = await fetch('https://talented-gray-narwhal.cyclic.app/api/products/getProductRouterItem')
        const datajson = await data.json()
        const Data = datajson.data
      setdataP(Data)
    
      
      }
      // Run async function
    useEffect(() => {
      fData().then(()=>console.log())
      console.log("dataP",dataP)
    }, []);
  return (
    <div>
         <section className="text-gray-600 body-font" style={{userSelect: 'auto'}}>
    <div className="container md:px-5 md:py-24 mx-auto" style={{userSelect: 'auto'}}>
    <div className="flex flex-wrap" style={{userSelect: 'auto'}}>
       
        {dataP?<>{dataP.map((item,i)=>{
        return (
            
            <div key={i} className="p-4 xl:w-1/3 sm:w-1/2  ">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <Link to ={`/item/${item._id}`} className ="text-decoration-none text-dark">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={item.img_url}
                alt="blog"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                 {item.category}
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                {item.title}
                </h1>
                <p className="leading-relaxed mb-3">
                {item.desc.length>200?`${item.desc.substring(0,200)}...`:item.desc}
                </p>
                <div className="flex items-center flex-wrap ">
                  <a className="text-purple-500 inline-flex items-center md:mb-2 lg:mb-0">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
              
                </div>
              </div>
            </Link>
            </div>
          </div>
         

        )
    })}</>:<>Loading...</> }
     </div>
        </div>
</section></div>
  )
}

export default Cars