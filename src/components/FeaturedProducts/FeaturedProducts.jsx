import React from 'react'
import './FeaturedProducts.scss'
import Card from '../Card/Card'

const FeaturedProducts = ( {type} ) => {
  const data = [ 
    {id:1,
    Title:'Money Plant',
    Price:"349",
    NewPrice:"249",
    img:"https://images.unsplash.com/photo-1463320898484-cdee8141c787?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img2:"https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
    {id:2,
    Title:'Money Plant',
    Price:"349",
    NewPrice:"249",
    img:"https://images.unsplash.com/photo-1463320898484-cdee8141c787?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {id:3,
    Title:'Money Plant',
    Price:"349",
    NewPrice:"249",
    img:"https://images.unsplash.com/photo-1463320898484-cdee8141c787?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {id:4,
    Title:'Money Plant',
    Price:"349",
    NewPrice:"249",
    img:"https://images.unsplash.com/photo-1463320898484-cdee8141c787?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
   ]
  return (
    
    <div className='featuredProducts'>
      <div className="top">
        <h1> {type} Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, voluptatum voluptatibus. Veniam officiis perspiciatis mollitia aspernatur
        </p>
      </div>
      <div className="bottom">{data.map(item => (
        <Card item={item} key={item.id} />
      ))}</div>
    </div>
  )
}

export default FeaturedProducts