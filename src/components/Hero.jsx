import { MdOutlineLocalOffer} from 'react-icons/md'
import {  FaStar} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
   <section className='relative bg-hero bg-center bg-no-repeat h-screen w-full bg-cover'>
    <div className='max_padd_container relative top-32 xs:top-52'>
        <h1 className='h1 capitalize max-w-[37rem]'>Artisanat-Malien</h1>
        <p className='text-gray-50 regular-16 mt-6 max-w-[33rem]'>Découvrez l'ame du Mali à travers nos produits artisanaux, où chque pièce raconte une histoire de tradition et de savoir-faire
        du Mali sans conter sa</p>
             <div className='flexStart !items-center gap-x-4 my-10'>
                <div className='!regular-24 flexCenter gap-x-3'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='bold-16 sm:bold-20'>176k<span
                className='regular sm:regular-20'>Excellentes critiques</span></div>
             </div>
             <div className='max-xs:flex-col flex gap-2'>
                <NavLink to={'/mens'} className={'btn_dark_rounded flexCenter'}>Achetez maintenant</NavLink>
                <NavLink to={'/womens'} className={'btn_dark_rounded flexCenter gap-x-2'}><MdOutlineLocalOffer
                 className='text-2xl'/>Des offres</NavLink>
             </div>
    </div>
   </section>
  )
}

export default Hero