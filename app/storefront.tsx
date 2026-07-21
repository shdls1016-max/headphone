"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Page = "home" | "products" | "detail" | "story" | "support" | "cart";
const products = [
  {name:"HALO X1", note:"Spatial ANC · 60H", price:"₩389,000", color:"#d6d6d1"},
  {name:"PULSE 90", note:"Studio tuned · 48H", price:"₩329,000", color:"#252529"},
  {name:"AIR ONE", note:"Ultra light · 36H", price:"₩249,000", color:"#b8ff2f"},
  {name:"HALO X1 SE", note:"Titanium · 60H", price:"₩449,000", color:"#8e8d89"},
];

function HeadsetArt(){return <div className="headset" aria-label="AURALAB 헤드셋 제품 이미지" role="img"><div className="band"/><div className="cup left"/><div className="cup right"/></div>}
function Header(){return <header className="site-header"><div className="max nav-wrap"><a className="logo" href="/">AURA<span className="logo-dot">LAB</span></a><nav className="nav" aria-label="주요 메뉴"><a href="/products">PRODUCTS</a><a href="/story">OUR SOUND</a><a href="/support">SUPPORT</a></nav><div className="nav-actions"><a className="round" href="/cart" aria-label="장바구니">⌁<span className="cart-count">0</span></a><button className="round menu-btn" aria-label="메뉴 열기">≡</button></div></div></header>}
function Footer(){return <footer className="footer"><div className="max"><div className="footer-top"><div className="footer-brand"><h3>AURA<span className="lime">LAB</span></h3><span>공간을 넘어, 감각에 닿는 사운드.</span></div><div><h4>SHOP</h4><a href="/products">전체 제품</a><a href="/product/halo-x1">HALO X1</a><a href="/products">액세서리</a></div><div><h4>ABOUT</h4><a href="/story">Our Sound</a><a href="/story">Technology</a><a href="/story">Journal</a></div><div><h4>HELP</h4><a href="/support">고객지원</a><a href="/support">배송 & 반품</a><a href="/support">제품 등록</a></div></div><div className="footer-bottom"><span>© 2026 AURALAB AUDIO. ALL RIGHTS RESERVED.</span><span>SEOUL — KOREA</span></div></div></footer>}

function ProductCard({p,i}:{p:typeof products[0],i:number}){return <a className="product-card" href="/product/halo-x1"><div className="product-art" data-num={`0${i+1}`} style={{"--product-color":p.color} as React.CSSProperties}><HeadsetArt/></div><div className="product-info"><div><h3>{p.name}</h3><p>{p.note}</p></div><b>{p.price}</b></div></a>}

function Home(){return <main>
  <section className="hero"><div className="max"><div className="hero-copy"><div className="eyebrow lime">NEW / HALO X1</div><h1>HEAR<span>BEYOND.</span></h1><div className="hero-sub"><p>침묵은 더 깊게, 디테일은 더 선명하게.<br/>당신만의 사운드 공간을 완성하세요.</p><a className="cta" href="/product/halo-x1">DISCOVER <b>↗</b></a></div></div></div><HeadsetArt/><div className="hero-model">IMMERSIVE HEADSET<strong>HALO X1</strong></div><div className="scroll-mark">SCROLL TO EXPLORE ↓</div></section>
  <section className="sound-lab"><div className="sound-pin"><div className="max sound-grid"><div className="sound-copy"><div className="eyebrow">01 / DESIGNED FOR SILENCE</div><h2>NOTHING<br/>BUT <span className="lime">SOUND.</span></h2><p>12개의 정밀 마이크가 외부 소음을 초당 48,000번 분석합니다. Adaptive Silence™가 환경에 맞춰 실시간으로 반응해, 음악만 남깁니다.</p><div className="stat-row"><div className="stat"><b>−42 dB</b><small>NOISE REDUCTION</small></div><div className="stat"><b>60 H</b><small>BATTERY LIFE</small></div><div className="stat"><b>7.8 oz</b><small>ULTRA LIGHT</small></div></div></div><div className="sound-visual"><div className="rings"/><HeadsetArt/></div></div></div></section>
  <section className="products"><div className="max"><div className="section-head"><div><div className="eyebrow lime">02 / FIND YOUR FREQUENCY</div><h2>THE LINEUP.</h2></div><p>음악, 게임, 일상. 당신의 리듬에 맞는 사운드를 선택하세요.</p></div><Swiper className="product-swiper" modules={[Navigation,Pagination,Autoplay]} spaceBetween={18} slidesPerView={1.12} breakpoints={{650:{slidesPerView:2.1},1050:{slidesPerView:3.05}}} pagination={{type:"progressbar"}} autoplay={{delay:3200,disableOnInteraction:false}}>{products.map((p,i)=><SwiperSlide key={p.name}><ProductCard p={p} i={i}/></SwiperSlide>)}</Swiper></div></section>
  <section className="immersive"><div className="noise-line"/><div className="max"><div className="eyebrow">03 / MADE TO DISAPPEAR</div><h2>FEEL<span>EVERYTHING.</span></h2><div className="quote"><p>“헤드셋을 쓰고 있다는 사실조차 잊는 순간, 진짜 몰입이 시작됩니다.”</p><div><a className="cta dark" href="/story">OUR SOUND STORY <b>↗</b></a></div></div></div></section>
  </main>}

function SubHero({index,title,copy}:{index:string,title:string,copy:string}){return <section className="sub-hero"><div className="max"><div className="eyebrow lime">{index}</div><h1>{title}</h1><p>{copy}</p></div></section>}
function Products(){return <main><SubHero index="CATALOG / 2026" title="YOUR SOUND. YOUR WAY." copy="각자의 방식으로 듣는 사람들을 위해. AURALAB의 모든 헤드셋을 만나보세요."/><section className="catalog"><div className="max"><div className="filter"><button className="chip active">ALL</button><button className="chip">WIRELESS</button><button className="chip">STUDIO</button><button className="chip">GAMING</button></div><div className="product-grid">{products.concat(products.slice(0,2)).map((p,i)=><ProductCard key={`${p.name}-${i}`} p={p} i={i}/>)}</div></div></section></main>}
function Detail(){const [added,setAdded]=useState(false);return <main className="detail"><div className="max detail-grid"><div className="detail-visual"><HeadsetArt/></div><div className="detail-copy"><div className="eyebrow lime">FLAGSHIP / 2026</div><h1>HALO<br/>X1.</h1><p>플래그십 사운드와 완벽한 고요함. 정밀 가공 알루미늄과 메모리폼이 하루 종일 이어지는 편안함을 만듭니다.</p><div className="price">₩389,000</div><div className="options"><div className="option"><span>COLOR</span><b>MOON SILVER</b></div><div className="option"><span>DELIVERY</span><b>무료 / 1–2일</b></div><div className="option"><span>WARRANTY</span><b>2년</b></div></div><div className="buybar"><button className="cta" onClick={()=>setAdded(true)}>{added?"ADDED TO BAG ✓":"ADD TO BAG"}</button><button className="round" aria-label="위시리스트">♡</button></div></div></div></main>}
function Story(){return <main><SubHero index="ABOUT / AURALAB" title="WE DESIGN SILENCE." copy="더 많은 소리가 아니라, 더 중요한 소리를 듣게 하는 것. 그것이 AURALAB이 시작된 이유입니다."/><section className="story-body"><div className="max"><p className="story-lead">서울의 작은 사운드 랩에서 시작해, 우리는 음향 엔지니어링과 산업 디자인의 경계를 지워왔습니다. 기술은 보이지 않아야 하고, 감각만 남아야 한다고 믿습니다.</p><div className="values"><div className="value"><b>01</b><h3>Precision</h3><p>수천 번의 청음과 측정으로 불필요한 왜곡을 제거합니다.</p></div><div className="value"><b>02</b><h3>Quiet Design</h3><p>눈에 띄기보다 사용자의 일상에 자연스럽게 스며듭니다.</p></div><div className="value"><b>03</b><h3>Built to Last</h3><p>교체 가능한 부품과 견고한 소재로 오래 쓰는 제품을 만듭니다.</p></div></div></div></section></main>}
function Support(){return <main><SubHero index="CARE / SUPPORT" title="HOW CAN WE HELP?" copy="제품 설정부터 수리, 배송까지. AURALAB 팀이 빠르게 도와드리겠습니다."/><section className="support-body"><div className="max support-grid"><div className="support-links"><a href="#"><span>제품 시작 가이드</span><b>↗</b></a><a href="#"><span>배송 및 반품</span><b>↗</b></a><a href="#"><span>보증 및 수리</span><b>↗</b></a><a href="#"><span>자주 묻는 질문</span><b>↗</b></a></div><form className="support-form"><div className="eyebrow lime">SEND A MESSAGE</div><h2>무엇을 도와드릴까요?</h2><div className="field"><label>이름</label><input placeholder="이름을 입력하세요"/></div><div className="field"><label>이메일</label><input type="email" placeholder="you@example.com"/></div><div className="field"><label>문의 내용</label><textarea rows={5} placeholder="문의 내용을 입력하세요"/></div><button className="cta" type="button">SUBMIT REQUEST ↗</button></form></div></section></main>}
function Cart(){return <main><SubHero index="YOUR BAG" title="SHOPPING BAG." copy="선택한 제품을 확인하고 결제를 진행하세요."/><section className="cart-body"><div className="max cart-empty"><div><h2>장바구니가 비어 있습니다.</h2><p>당신의 일상을 바꿀 사운드를 찾아보세요.</p><br/><a className="cta" href="/products">EXPLORE PRODUCTS ↗</a></div></div></section></main>}

export function Storefront({page}:{page:Page}){
  const root=useRef<HTMLDivElement>(null);
  useEffect(()=>{gsap.registerPlugin(ScrollTrigger);const ctx=gsap.context(()=>{
    gsap.from(".hero-copy > *",{y:50,opacity:0,duration:1.1,stagger:.12,ease:"power3.out"});
    gsap.from(".hero > .headset",{scale:.75,rotate:18,opacity:0,duration:1.4,ease:"power3.out"});
    if(document.querySelector(".sound-pin")){ScrollTrigger.create({trigger:".sound-lab",start:"top top",end:"bottom bottom",pin:".sound-pin"});gsap.to(".sound-visual .headset",{rotate:-12,scale:1.15,scrollTrigger:{trigger:".sound-lab",start:"top top",end:"bottom bottom",scrub:1}});gsap.from(".stat",{y:30,opacity:0,stagger:.15,scrollTrigger:{trigger:".sound-lab",start:"top 20%"}})}
    gsap.utils.toArray<HTMLElement>(".section-head,.immersive h2,.story-lead,.value").forEach(el=>gsap.from(el,{y:60,opacity:0,duration:.9,scrollTrigger:{trigger:el,start:"top 85%"}}));
  },root);return()=>ctx.revert()},[page]);
  return <div ref={root}><Header/>{page==="home"?<Home/>:page==="products"?<Products/>:page==="detail"?<Detail/>:page==="story"?<Story/>:page==="support"?<Support/>:<Cart/>}<Footer/></div>
}
