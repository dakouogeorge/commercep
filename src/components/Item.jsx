import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Item = ({id, name, image, new_price, old_price}) => {
  return (
    <div className='rounded-xl overflow-hidden shadow-lg'>
        <div className='relative flexCenter group overflow-hidden transition-all duration-100'>
            <Link to={`/product/${id}`}
            className='h-12 w-12 bg-white rounded-full flexCenter absolute top-1/2 bottom-1/2
             !py-2 z-20 transition-all duration-700'
             ><FaSearch className='scale-125 hover:rotate-90 transition-all duration-200'/></Link>
            <img onClick={window.scrollTo(0,0)} src={image}  
            className='w-full block object-cover group-hover:scale-110 transition-all duration-1000' alt='productImage'/>
        </div>
        <div className='p-4 overflow-hidden'>
            <h4 className='my-[6px] medium-16 line-clamp-2 text-gray-30'>{name}</h4>
            <div className='flex gap-5'>
                <div className='bold-16'>${new_price}.00</div>
                <div className='text-secondary bold-16'>cfa {old_price}.00</div>
            </div>
        </div>
    </div>
  )
}

export default Item