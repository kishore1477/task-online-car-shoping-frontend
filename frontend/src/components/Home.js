import React ,{useState , useEffect}from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
// import Carousel from 'react-bootstrap/Carousel';
const Home = () => {
  // Fetched data from api request
    const [dataP, setdataP] = useState([]);

    // Unique category
    const [unique, setUnique] = useState([]);
  const fData = async()=>{

      const data = await fetch('https://talented-gray-narwhal.cyclic.app/api/products/getProductRouterItem')
      const datajson = await data.json()
      console.log("JSON Data is :", datajson)
      const Data = datajson.data
      const arrayUniqueByKey = [...new Set(Data.map(item =>{return item.category}))]
      console.log("arrayUniqueByKey",arrayUniqueByKey)
      setUnique(arrayUniqueByKey)

      setdataP(Data)
      console.log(datajson)
    }
    // Run async function
useEffect(() => {
    fData()
}, []);
// separate element related to its category
var electric = []
var toyota =[]
var pizza =[]
var cake = []
for (let i = 0; i < dataP.length; i++) {
    const element = dataP[i];
   
    if(element.category=== "electric"){
        electric.push(element)

    } else if(element.category=== "toyota"){
        toyota.push(element)
    } 

}
// Carousel responsive 
const   responsive={
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }
  return (
      <Container className='mt-4 text-center'>
       
        {!dataP?<>Loading...</>:<>


<h2 className='text-center'>Our Products</h2>
{/*  electric's Category */}
<hr className='bg-slate-600' />
<h2> <b>{unique[1] && unique[1].charAt(0).toUpperCase() + unique[1].slice(1)}</b></h2>

    <Carousel responsive={responsive}>
    {electric && electric.map((item,i)=>{

  

      return   <div className="p-4  ">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      <Link to ={`/item/${item._id}`} className ="text-decoration-none text-dark">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={item.img_url}
          alt="blog"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            CATEGORY
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
  
    })}
</Carousel>
<hr className='bg-slate-600'/>
<h2> <b>{unique[0] && unique[0].charAt(0).toUpperCase() + unique[0].slice(1)}</b></h2>

    <Carousel responsive={responsive}>
    {toyota && toyota.map((item,i)=>{

      
      return   <div className="p-4  ">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      <Link to ={`/item/${item._id}`} className ="text-decoration-none text-dark">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={item.img_url}
          alt="blog"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            CATEGORY
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
  
    })}
</Carousel>
 
 

</>}
    </Container>
  )
}

export default Home