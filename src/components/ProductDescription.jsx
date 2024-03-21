import React from 'react'

const ProductDescription = () => {
  return (
    <div className='mt-20'>
        <div className='flex gap-3 mb-4'>
            <button className='btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36'>Descrition</button>
            <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36'>Care Guide</button>
            <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36'>Size Guide</button>
        </div>
        <div className='flex flex-col pb-16'>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Temporibus, omnis autem? Repellat, aperiam in. Recusandae 
                molestiae asperiores ad ullam unde beatae, ipsum officiis saepe 
                voluptas, reiciendis vel, quidem dolorum minus perspiciatis 
                accusamus maxime quae! Ipsam laborum eum voluptate. Quam 
                reiciendis suscipit odit placeat debitis laboriosam 
                iusto iure delectus deserunt nisi!</p>
                <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing 
                    elit. Modi beatae eaque quas. Iusto sunt repudiandae 
                    velit autem dolore laboriosam culpa, natus laudantium 
                    dignissimos obcaecati consectetur. 
                    Exercitationem, maxime sequi.</p>
        </div>
    </div>
  )
}

export default ProductDescription