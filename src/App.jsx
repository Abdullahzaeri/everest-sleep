import { useState } from 'react';
import { ArrowLeft, ChevronDown, Menu, X, ShoppingBag, ShieldCheck, Truck, MoonStar, BadgeCheck, Headphones, Sparkles, Quote, Phone, Mail, MapPin } from 'lucide-react';
import heroImage from './content.png';
import logoImage from '../content (1).png';
import { content } from './content.js';

const products=[
 {name:'مرتبة Everest Balance',type:'دعم متوازن',price:'8,950',img:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=85',tag:'الأكثر مبيعًا'},
 {name:'مرتبة Everest Cloud',type:'نعومة استثنائية',price:'11,750',img:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=85',tag:'راحة فندقية'},
 {name:'مرتبة Everest Active',type:'دعم متقدم للظهر',price:'13,490',img:'https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=900&q=85',tag:'تقنية متطورة'}
];
const faqs=[
 ['كيف أختار المرتبة المناسبة لي؟','يعتمد الاختيار على وضعية نومك ودرجة الصلابة المفضلة ووزن الجسم. تواصل مع مستشاري النوم لدينا وسنساعدك في تحديد الاختيار الأنسب.'],
 ['هل يوجد ضمان على مراتب Everest Sleep؟','نعم، تأتي مراتبنا بضمان ممتد يصل إلى 10 سنوات ضد عيوب الصناعة، وفقًا لشروط الضمان الخاصة بكل موديل.'],
 ['هل التوصيل متاح لكل محافظات مصر؟','نوفر التوصيل إلى القاهرة والجيزة والإسكندرية ومعظم المحافظات، ويتم تحديد الموعد والتكلفة حسب عنوان الاستلام.'],
 ['ما هي طرق الدفع المتاحة؟','يمكنك الدفع نقدًا عند الاستلام، وستتوفر قريبًا خيارات الدفع الإلكتروني والتقسيط الآمن.']
];

function App(){
 const [menu,setMenu]=useState(false); const [open,setOpen]=useState(0);const [lang,setLang]=useState('ar');
 const t = content[lang];
 return <div>
<div className="announcement">
  <span>{t.announcement.shipping}</span>
  <span>{lang==='ar'?<>استشارات نوم مجانية: <bdi>0100 000 0000</bdi></>:<>Free sleep consultation: <bdi>0100 000 0000</bdi></>}</span>
</div>
 <header className="header"> <a href="#" className="wordmark" aria-label="Everest Sleep"><img src={logoImage} alt="Everest Sleep" /></a>
   <nav className={menu?'nav open':'nav'}>
  <a href="#mattresses">{lang==='ar'?'المراتب':'Mattresses'}</a>
  <a href="#products">{lang==='ar'?'منتجات النوم':'Sleep Products'}</a>
  <a href="#why">{lang==='ar'?'لماذا إيفرست؟':'Why Everest?'}</a>
  <a href="#reviews">{lang==='ar'?'تجارب عملائنا':'Reviews'}</a>
  <a href="#contact">{lang==='ar'?'تواصل معنا':'Contact Us'}</a>
</nav>
   <div className="header-actions"><button className="lang-btn" onClick={()=>setLang(lang==='ar'?'en':'ar')}>{lang==='ar'?'EN':'Ar'}</button><button className="icon-btn" aria-label="حقيبة التسوق"><ShoppingBag size={21}/><i>0</i></button> <a className="header-cta" href="#products">
  {lang==='ar'?'تسوق الآن':'Shop Now'}
</a><button className="menu-btn" onClick={()=>setMenu(!menu)} aria-label="القائمة">{menu?<X/>:<Menu/>}</button></div>
  </header>
  <main>
   <section className="hero"><div className="hero-glow"></div><div className="hero-copy"><div className="eyebrow"><Sparkles size={15}/>{lang==='ar'?'راحة مصممة خصيصاً لك':'Comfort designed for you'}<h1>{lang==='ar'?<>كل يوم أفضل<br/>يبدأ من <em>نوم أعمق.</em></>:<>Every better day<br/>starts with <em>deeper sleep.</em></>}</h1><p>{lang==='ar'
  ? 'مراتب بتكنولوجيا متطورة وخامات مختارة بعناية، لتمنح جسمك الدعم الذي يحتاجه وراحتك التي تستحقها.'
  : 'Mattresses crafted with advanced technology and carefully selected materials to give your body the support and comfort it deserves.'
}</p><div className="hero-buttons"><a className="primary" href="#mattresses">{lang==='ar'?'اكتشف المراتب':'Explore Mattresses'} <ArrowLeft size={18}/></a><a className="text-link" href="#why">{lang==='ar'?'اعرف الأنسب لك':'Find Your Match'} <ArrowLeft size={17}/></a></div><div className="hero-trust"><div><b>+15</b><span>عامًا من الخبرة</span></div><div><b>10</b><span>سنوات ضمان</span></div><div><b>+20K</b><span>عميل سعيد</span></div></div></div>
    <div className="hero-visual" style={{backgroundImage:`url(${heroImage})`}}><div className="hero-label"><MoonStar/><span>استيقظ كل يوم<br/><b>بكامل طاقتك</b></span></div><div className="rating-card"><span>★★★★★</span><b>4.9</b><small>من تقييمات عملائنا</small></div></div>
   </section>
   <section className="benefit-strip"><div><Truck/><span><b>توصيل لكل مصر</b><small>بسرعة وأمان</small></span></div><div><ShieldCheck/><span><b>ضمان حتى 10 سنوات</b><small>راحة بال حقيقية</small></span></div><div><MoonStar/><span><b>تجربة نوم أفضل</b><small>جودة تشعر بها</small></span></div><div><Headphones/><span><b>خبراء لمساعدتك</b><small>قبل وبعد الشراء</small></span></div></section>
   <section className="section products" id="mattresses"><div className="section-head"><div><span className="kicker">اختيارات صنعت لراحتك</span><h2>اكتشف مرتبتك المثالية</h2></div><p>كل جسم له احتياجاته، لذلك صممنا مجموعاتنا بدرجات دعم مختلفة لتجد راحتك بسهولة.</p></div><div className="product-grid">{products.map((p,i)=><article className="product" key={p.name}><div className="product-image" style={{backgroundImage:`url(${p.img})`}}><span>{p.tag}</span><button aria-label="إضافة إلى الحقيبة"><ShoppingBag size={19}/></button></div><div className="product-info"><small>{p.type}</small><h3>{p.name}</h3><div><span>يبدأ من</span><b>{p.price} <small>ج.م</small></b></div><a href="#contact">اكتشف التفاصيل <ArrowLeft size={16}/></a></div>{i===1&&<span className="featured">اختيار العملاء</span>}</article>)}</div><a className="outline-btn" href="#products">عرض كل المراتب <ArrowLeft size={18}/></a></section>
   <section className="why" id="why"><div className="why-photo"><div className="floating"><BadgeCheck/><span><b>خامات موثوقة</b><small>مختبرة وفق معايير الجودة</small></span></div></div><div className="why-copy"><span className="kicker light">الفرق في كل تفصيلة</span><h2>ليست مجرد مرتبة.<br/>إنها استثمار في يومك.</h2><p>في Everest Sleep نؤمن أن النوم الجيد يغيّر كل شيء. لذلك ندمج خبرتنا مع أحدث تقنيات الراحة لنقدم لك نومًا صحيًا يستمر لسنوات.</p><div className="why-list"><div><i>01</i><span><b>دعم ذكي للجسم</b><small>توزيع متوازن للضغط ومحاذاة صحية للعمود الفقري.</small></span></div><div><i>02</i><span><b>تهوية تدوم طوال الليل</b><small>طبقات تسمح بتدفق الهواء لحرارة نوم مثالية.</small></span></div><div><i>03</i><span><b>مصنوعة لتدوم</b><small>خامات عالية الجودة تتحمل الاستخدام اليومي لسنوات.</small></span></div></div><a className="gold-link" href="#contact">قصتنا ومعايير الجودة <ArrowLeft size={18}/></a></div></section>
   <section className="sleep-products section" id="products"><div className="section-head"><div><span className="kicker">راحة متكاملة</span><h2>أكمل تجربة نومك</h2></div><a className="text-link" href="#contact">عرض كل المنتجات <ArrowLeft size={17}/></a></div><div className="accessories"><article className="accessory pillows"><div><span>وسائد النوم</span><h3>راحة تحتضن كل أحلامك</h3><a href="#contact">اكتشف المجموعة <ArrowLeft size={16}/></a></div></article><article className="accessory linens"><div><span>المفروشات</span><h3>نعومة تشعر بها من أول لمسة</h3><a href="#contact">اكتشف المجموعة <ArrowLeft size={16}/></a></div></article></div></section>
   <section className="reviews section" id="reviews"><span className="kicker">حكايات من بيوت مصرية</span><h2>لأن راحتكم هي أفضل شهادة</h2><div className="review-grid">{[['نومي اتغيّر فعلًا من أول أسبوع. المرتبة مريحة جدًا وفي نفس الوقت بتدعم الظهر كويس.','سارة مصطفى','القاهرة'],['خدمة محترمة جدًا والتوصيل وصل في معاده. فريق العمل ساعدني أختار درجة الصلابة المناسبة.','أحمد سامي','الجيزة'],['جودة الخامات واضحة والمرتبة محافظة على شكلها. تجربة ممتازة وأنصح بها أي حد بيدور على راحة حقيقية.','مريم خالد','الإسكندرية']].map((r,i)=><article key={r[1]}><Quote/><div className="stars">★★★★★</div><p>“{r[0]}”</p><div className="reviewer"><i>{r[1][0]}</i><span><b>{r[1]}</b><small>{r[2]} · عميل موثّق</small></span></div>{i===1&&<b className="verified"><BadgeCheck/> شراء موثّق</b>}</article>)}</div></section>
   <section className="faq-contact section" id="contact"><div className="faq"><span className="kicker">كل ما تحتاج معرفته</span><h2>أسئلة شائعة</h2><div className="faq-list">{faqs.map((f,i)=><div className={open===i?'faq-item active':'faq-item'} key={f[0]}><button onClick={()=>setOpen(open===i?-1:i)}><span>{f[0]}</span><ChevronDown/></button><p>{f[1]}</p></div>)}</div></div><div className="contact-card"><MoonStar/><span>لسه محتار؟</span><h2>دعنا نساعدك تنام أفضل.</h2><p>تحدث مع أحد خبراء النوم لدينا وسيقترح عليك المرتبة الأنسب لاحتياجاتك.</p><a href="tel:+201000000000"><Phone size={18}/> كلمنا الآن: <bdi>0100 000 0000</bdi></a><small>متاحون يوميًا من 10 صباحًا حتى 10 مساءً</small></div></section>
   <section className="newsletter"><div><span className="kicker light">ابقَ على تواصل</span><h2>نصائح لنوم أعمق وعروض تستحقها.</h2></div><form onSubmit={e=>e.preventDefault()}><input type="email" placeholder="اكتب بريدك الإلكتروني" aria-label="البريد الإلكتروني"/><button>اشترك الآن <ArrowLeft size={17}/></button></form></section>
  </main>
  
 </div>
}
export default App;
