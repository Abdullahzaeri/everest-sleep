import { useState } from 'react';
import { ArrowLeft, ChevronDown, Menu, X, ShoppingBag, ShieldCheck, Truck, MoonStar, BadgeCheck, Headphones, Sparkles, Quote, Phone, Mail, MapPin } from 'lucide-react';
import heroImage from './content.png';
import logoImage from '../content (1).png';
import { content } from './content.js';

const productData=[
 {price:'8,950',img:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=85'},
 {price:'11,750',img:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=85'},
 {price:'13,490',img:'https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=900&q=85'}
];
function App(){
 const [menu,setMenu]=useState(false); const [open,setOpen]=useState(0);const [lang,setLang]=useState('ar');
 const t = content[lang];
 return <div>
<div className="announcement">
  <span>{t.announcement.shipping}</span>
  <span>{t.announcement.consultation}: <bdi>0100 000 0000</bdi></span>
</div>
 <header className="header"> <a href="#" className="wordmark" aria-label="Everest Sleep"><img src={logoImage} alt="Everest Sleep" /></a>
   <nav className={menu?'nav open':'nav'}>
  <a href="#mattresses">{t.nav.mattresses}</a>
  <a href="#products">{t.nav.sleepProducts}</a>
<a href="#why">{t.nav.whyEverest}</a>
<a href="#reviews">{t.nav.reviews}</a>
<a href="#contact">{t.nav.contact}</a>
</nav>
   <div className="header-actions"><button className="lang-btn" onClick={()=>setLang(lang==='ar'?'en':'ar')}>{lang==='ar'?'EN':'Ar'}</button><button className="icon-btn" aria-label="حقيبة التسوق"><ShoppingBag size={21}/><i>0</i></button> <a className="header-cta" href="#products">
  {t.nav.shopNow}
</a><button className="menu-btn" onClick={()=>setMenu(!menu)} aria-label="القائمة">{menu?<X/>:<Menu/>}</button></div>
  </header>
  <main>
   <section className="hero"><div className="hero-glow"></div><div className="hero-copy"><div className="eyebrow"><Sparkles size={15}/>{t.hero.eyebrow}</div><h1>{t.hero.title1}<br/><em>{t.hero.title2}</em></h1><p>
  {t.hero.description}
</p><div className="hero-buttons"><a className="primary" href="#mattresses">{t.hero.primaryButton} <ArrowLeft size={18}/></a><a className="text-link" href="#why">{t.hero.secondaryButton}<ArrowLeft size={17}/></a></div><div className="hero-trust"><div><b>+15</b><span>{t.hero.experience}</span></div><div><b>10</b><span>{t.hero.warranty}</span></div><div><b>+20K</b><span>{t.hero.customers}</span></div></div></div><div className="hero-visual" style={{backgroundImage:`url(${heroImage})`}}><div className="hero-label"><MoonStar/><span>{t.hero.imageLabel}<br/><b>{t.hero.imageLabelStrong}</b></span></div><div className="rating-card"><span>★★★★★</span><b>4.9</b><small>{t.hero.ratingLabel}</small></div></div>
</section>
   <section className="benefit-strip"><div><Truck/><span><b>{t.benefits[0].title}</b><small>{t.benefits[0].subtitle}</small></span></div><div><ShieldCheck/><span><b>{t.benefits[1].title}</b><small>{t.benefits[1].subtitle}</small></span></div><div><MoonStar/><span><b>{t.benefits[2].title}</b><small>{t.benefits[2].subtitle}</small></span></div><div><Headphones/><span><b>{t.benefits[3].title}</b><small>{t.benefits[3].subtitle}</small></span></div></section>
   <section className="section products" id="mattresses"><div className="section-head"><div><span className="kicker">{t.mattresses.kicker}</span><h2>{t.mattresses.title}</h2></div><p>{t.mattresses.description}</p></div><div className="product-grid">{productData.map((p,i)=>{const copy=t.mattresses.items[i];return <article className="product" key={copy.name}><div className="product-image" style={{backgroundImage:`url(${p.img})`}}><span>{copy.tag}</span><button aria-label={t.mattresses.addToCart}><ShoppingBag size={19}/></button></div><div className="product-info"><small>{copy.type}</small><h3>{copy.name}</h3><div><span>{t.mattresses.from}</span><b>{p.price} <small>{t.mattresses.currency}</small></b></div><a href="#contact">{t.mattresses.details} <ArrowLeft size={16}/></a></div>{i===1&&<span className="featured">{t.mattresses.featured}</span>}</article>})}</div><a className="outline-btn" href="#products">{t.mattresses.viewAll} <ArrowLeft size={18}/></a></section>
   <section className="why" id="why"><div className="why-photo"><div className="floating"><BadgeCheck/><span><b>{t.why.badgeTitle}</b><small>{t.why.badgeSubtitle}</small></span></div></div><div className="why-copy"><span className="kicker light">{t.why.kicker}</span><h2>{t.why.title1}<br/>{t.why.title2}</h2><p>{t.why.description}</p><div className="why-list">{t.why.points.map((point,i)=><div key={point.title}><i>{String(i+1).padStart(2,'0')}</i><span><b>{point.title}</b><small>{point.subtitle}</small></span></div>)}</div><a className="gold-link" href="#contact">{t.why.link} <ArrowLeft size={18}/></a></div></section>
   <section className="sleep-products section" id="products"><div className="section-head"><div><span className="kicker">{t.sleepProducts.kicker}</span><h2>{t.sleepProducts.title}</h2></div><a className="text-link" href="#contact">{t.sleepProducts.viewAll} <ArrowLeft size={17}/></a></div><div className="accessories">{t.sleepProducts.items.map((item,i)=><article className={`accessory ${i===0?'pillows':'linens'}`} key={item.label}><div><span>{item.label}</span><h3>{item.title}</h3><a href="#contact">{t.sleepProducts.discover} <ArrowLeft size={16}/></a></div></article>)}</div></section>
   <section className="reviews section" id="reviews"><span className="kicker">{t.reviews.kicker}</span><h2>{t.reviews.title}</h2><div className="review-grid">{t.reviews.items.map((r,i)=><article key={r.name}><Quote/><div className="stars">★★★★★</div><p>“{r.text}”</p><div className="reviewer"><i>{r.name[0]}</i><span><b>{r.name}</b><small>{r.city} · {t.reviews.verifiedCustomer}</small></span></div>{i===1&&<b className="verified"><BadgeCheck/> {t.reviews.verifiedPurchase}</b>}</article>)}</div></section>
   <section className="faq-contact section" id="contact"><div className="faq"><span className="kicker">{t.faq.kicker}</span><h2>{t.faq.title}</h2><div className="faq-list">{t.faq.items.map((f,i)=><div className={open===i?'faq-item active':'faq-item'} key={f.question}><button onClick={()=>setOpen(open===i?-1:i)}><span>{f.question}</span><ChevronDown/></button><p>{f.answer}</p></div>)}</div></div><div className="contact-card"><MoonStar/><span>{t.contactCard.eyebrow}</span><h2>{t.contactCard.title}</h2><p>{t.contactCard.description}</p><a href="tel:+201000000000"><Phone size={18}/> {t.contactCard.callNow}: <bdi>0100 000 0000</bdi></a><small>{t.contactCard.hours}</small></div></section>
   <section className="newsletter"><div><span className="kicker light">ابقَ على تواصل</span><h2>نصائح لنوم أعمق وعروض تستحقها.</h2></div><form onSubmit={e=>e.preventDefault()}><input type="email" placeholder="اكتب بريدك الإلكتروني" aria-label="البريد الإلكتروني"/><button>اشترك الآن <ArrowLeft size={17}/></button></form></section>

   </main>
  
 </div>
}
export default App;
