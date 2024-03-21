import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { TbTrash } from 'react-icons/tb';

const CartItems = () => {
    const handelClike = () => {
        alert("désolé cette fontion ne marche par actuellement veille nous conctacte par e-mail ou numero de telephone qui ce trouve en bas du page pour passe votre commende");
    };

    const {getTotalCartAmount, all_product, cartItems, removeFormCart} = useContext(ShopContext);

  return (
    <section className='max_padd_container pt-28'>
        <table className='w-full mx-auto'>
            <thead>
                <tr className='bg-slate-900/10 regular-18 sm:regular-22 text-start py-12'>
                    <th className='p-1 py-2'>Products</th>
                    <th className='p-1 py-2'>Titre</th>
                    <th className='p-1 py-2'>Prix</th>
                    <th className='p-1 py-2'>Quantite</th>
                    <th className='p-1 py-2'>Total</th>
                    <th className='p-1 py-2'>Suprime</th>
                </tr>
            </thead>
            <tbody>
                {all_product.map((e) => {
                    if (cartItems[e.id] > 0) {
                        return <tr key={e.id} 
                        className='border-b border-slate-900/20 text-gray-30 p-6 medium-14 text-center'>
                           <td className='flexCenter'><img src={e.image} alt="prodctImg" width={43} height={43} 
                           className='rounded-lg ring-1 ring-slate-900/5 my-1'/></td>
                           <td><div className='line-clamp-3'>{e.name}</div></td>
                           <td>${e.new_price}</td>
                           <td>{cartItems[e.id]}</td>
                           <td className='w-16 h-16 bg-white'>${e.new_price * cartItems[e.id]}</td>
                           <td>
                            <div className='bold-22 pl-14'><TbTrash onClick={() => removeFormCart(e.id)}/></div>
                           </td>
                        </tr>
                    }
                    return null;
                })}
            </tbody>
        </table>
        {/* cart detail */}
        <div className='flex flex-col gap-20 my-16 p-8 md:flex-row rounded-md bg-white w-full max-w-[666px]'>
            <div className='flex flex-col gap-10'>
                <h4 className='bold-20'>Resume</h4>
                <div>
                    <div className='flexBetween py-4'>
                        <h4 className='medium-16'>Total:</h4>
                        <h4 className='text-grap-30 font-semibold'>${getTotalCartAmount()}</h4>
                    </div>
                    <hr />
                    <div className='flexBetween py-4'>
                        <h4 className='medium-16'>Frais de livraison:</h4>
                        <h4 className='text-grap-30 font-semibold'>Indefini</h4>
                    </div>
                    <hr />
                    <div className='flexBetween py-4'>
                        <h4 className='bold-18'>Total:</h4>
                        <h4 className='bold-18'>${getTotalCartAmount()}</h4>
                    </div>
                </div>
                <button onClick={handelClike}
                className='btn_dark_rounded w-44'>Verifier</button>
                <div className='flex flex-col gap-10'>
                    <h4 className='bold-20 capitalize'>passe voter commende ici:</h4>
                    <div className='flexBetween pl-5 h-12 bg-primary rounded-full ring-1 ring-slate-900/10'>
                      <form action="https://formspree.io/f/xdoqlolo" method="post">
                      <input name="name" type="text" class="form-control form-control-lg" placeholder="code-postale"/>
                      <input name="Subject" type="text" class="form-control mt-3" placeholder="commende"/>
                      <input  name="name" type="text" placeholder='entre votre e-mail' 
                        className='bg-transparent border-none outline-none'/>
                        <button type="submit" className='btn_dark_rounded mt-1'>Envoye</button>
                      </form>
                    </div> 
                </div>
            </div>
        </div>
    </section>
  )
}

export default CartItems