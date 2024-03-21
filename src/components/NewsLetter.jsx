

const NewsLetter = () => {
  return (
   <section className="max_padd_container py-12 xl:py-28 bg-white">
    <div className="mx-auto xl:w-[80%] flexCenter flex-col gap-y-8 w-full max-w-[666px]">
      <h3 className="h3">Passe votre Commende ici</h3>
      <h4 className="uppercase bold-18">Livraison assure partout dans le Monde</h4>
      <div className="flexBetween rounded-full ring-1 ring-slate-900/10 hover:ring-slate-900/15
       bg-primary w-full max-w-[588px]">

        <form action="https://formspree.io/f/xdoqlolo" method="post">
        <input name="name" type="e-mail" placeholder="votre address email" 
        className="btn btn-success mt-3"/>
        <input name="name" type="text" class="form-control form-control-lg" placeholder="code-postale"/>
        <input name="Subject" type="text" class="form-control mt-3" placeholder="commende"/>
        <button type="submit" className="btn_dark_rounded">Envoye</button>
        </form>
       
      </div>
    </div>
   </section>
  )
}

export default NewsLetter