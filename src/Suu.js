import styled from "styled-components";
// import Heading from "../styled/Heading";
// import Paragraph from "../styled/Paragraph";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Navigation } from "swiper";
// import BlogItem from "../styled/BlogItem";
// import {FiChevronRight, FiChevronLeft} from 'react-icons/fi';

// const Wrapper = styled.section`
//   padding: 5%;
//   position:relative;
//   @media(min-width:992px){
//     display:flex;
//     width:100%;
//     padding:0;
//     align-items:center;
//     justify-content:space-between;
//     margin:7% 0;
//   }
//   .inner-sec{
//     @media(min-width:992px){
//       width:70%;
//       margin-right:4.5%;
//       .swiper-slide{
//         max-width:300px;

//       }
//     }
//     @media(min-width:1200px){
//       width:70%;
//     }
//   }
//   h2 {
//     margin-bottom: 30px;
//   }
//   .toptext {
//     margin-bottom: 30px;
//     @media(min-width:992px){
//       padding-right:30px;
//       margin-left:5%;
//       h2{
//         line-height:40px;
//       }
//     }
//     @media(min-width:1200px){
      
//       p{
//         line-height:25px;
//       }
//       h2,p{
//         max-width:230px;
//       }
//     }
//   }
//   .swiper-horizontal > .swiper-pagination-progressbar,
//   .swiper-pagination-progressbar.swiper-pagination-horizontal,
//   .swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,
//   .swiper-vertical
//     > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {
//       top:unset;
//       bottom:0;
//       height:0.99px;
      
//     background: rgba(148, 148, 148, 0.2);
//     border-radius:10px;
//     @media(min-width:992px){
//       width: 88%;
//     transform: translateX(30px);
//     }
//   }
//   .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{
//     background:${props => props.theme.color.orange};
//     opacity:1;
//   }
//   .slider_current{
//     font-size:16px;
//     width:max-content;
//     display:block;
//     margin:20px auto 0;
//     text-align:center;
//     font-family:${props => props.theme.fam.regular};
//     @media(min-width:992px){
//       position:absolute;
//       right:5%;
//       bottom:-5px;
//       font-size:14px;
//     }
//   }
//   .swiper-container {
//   width: 100%;
// }

// @media screen and (min-width: 568px) {
//   .swiper-container {
//     width: 568px;
//   }
// }
// @media(min-width:992px){
//   .swiper{
//     padding-bottom:80px;

//   }
// }
// .buttons{
//   display:none;
//   @media(min-width:992px){
//     position: relative;
//     display: flex;
//     width: 90px;
//     width: -moz-max-content;
//     flex-direction: row;
//     left: -32%;
//     bottom:-1px;
//     button{
//       font-size: 22px;
//     height: 35px;
//     width: 35px;
//     }
//    }
//     @media(min-width:992px){
//       button{
//         svg{
//           width:30px;
//           height:30px;
//         }
//       }
//        .swiper-button-prev{
//       border:none;
//       background:transparent;
//       color:#000000;
//       &:before,&:after{
//         content:'';
//       }
//     }
//     .swiper-button-next{
//       border:none;
//       background:transparent;
//       color:#000000;
//       &:before,&:after{
//         content:'';
//       }
//     }
//     }
   
 
// }
// .drag{
//   display:none;
//   @media(min-width:992px){
//     display:block;
//     position:absolute;
//     bottom: -4px;
//     font-weight:400;
//     left: 14%;
//     font-size:14px;
//     font-family:${props => props.theme.fam.regular};
//     text-transform:uppercase;
//     &:before{
//       content:'';
//       position:absolute;
//       height:0.99px;
//       width:23px;
//       background:${props => props.theme.color.orange};
//       top:50%;
//       left:-30%;
//       border-radius:10px;
//     }
//   }
//   @media(min-width:1200px){
//     &:before{
//       left:-40%;
//     }
//   }
  
// }
// `;

// const blogs = [
//   {
//     bgImage: "./images/blog.png",
//     link: "/",
//     title: "Relationships",
//   },
//   {
//     bgImage: "./images/blog.png",
//     link: "/",
//     title: "Relationships",
//   },
//   {
//     bgImage: "./images/blog.png",
//     link: "/",
//     title: "Relationships",
//   },
//   {
//     bgImage: "./images/blog.png",
//     link: "/",
//     title: "Relationships",
//   },
//   {
//     bgImage: "./images/blog.png",
//     link: "/",
//     title: "Relationships",
//   },
//   {
//     bgImage: "./images/blog.png",
//     link: "/",
//     title: "Relationships",
//   },
//   {
//     bgImage: "./images/blog.png",
//     link: "/",
//     title: "Relationships",
//   },
//   {
//     bgImage: "./images/blog.png",
//     link: "/",
//     title: "Relationships",
//   },
// ];

// function Suu() {
//   const mainslider = useRef();
//   const [totalSlide, setTotalSlide] = useState(0);
//   const [current, setCurrent] = useState(1);

//   useEffect(() => {
//     setTotalSlide(mainslider.current.swiper.snapIndex);
//     // console.table(mainslider);
//     mainslider.current.swiper.on("slideChange", () => {
//       let fragment = document.querySelector(".slider_current");
//       setCurrent(mainslider.current.swiper.realIndex);

//       if (current > totalSlide) {
//         setCurrent(1);
//       }
//       // console.log(current);
//       let idx = current < 10 ? "0" + current : current;
//       let tdx = totalSlide < 10 ? "0" + totalSlide : totalSlide;
//       fragment.innerHTML = idx + " / " + tdx;
//     });
//     // mainslider.current.swiper.on('beforeInit',()=>{
//     //   let numOfSlides = mainslider.querySelectorAll(".swiper-slide").length;
//     //   console.log(numOfSlides)
//     // })
//   }, [current, totalSlide]);

//   return (
//     <Wrapper>
//       <div className="toptext">
//         <Heading>
//           LASTEST FROM THE <span>BLOG</span>
//         </Heading>
//         <Paragraph>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
//         </Paragraph>
//       </div>
//       <div className="inner-sec">
//         <Swiper
//           ref={mainslider}
//           spaceBetween={50}
//           // slidesPerView={1}
//           // loop={true}
//           pagination={{
//             clickable: true,
//             type: "progressbar",
//           }}
//           navigation={{
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//           }}
//           modules={[Pagination, Navigation]}
//           className="image-slider"
//           breakpoints={{
//             568: {
//               width: 568,
//               slidesPerView: 2,
//               spaceBetween: 100,
//             },
//             992: {
//               width: 992,
//               slidesPerView: 3,
//               spaceBetween: 5,
//             },
//           }}
//         >
//           {blogs.map((item, i) => {
//             return (
//               <SwiperSlide key={i}>
//                 <BlogItem
//                   bgImage={item.bgImage}
//                   link={item.link}
//                   title={item.title}
//                 />
//               </SwiperSlide>
//             );
//           })}
//         </Swiper>
        
//         <div className="image-slider__fraction">
//           <div className="slider_current">
//             {current < 10 ? "0" + current : current} /{" "}
//             {totalSlide < 10 ? "0" + totalSlide : totalSlide}
//           </div>
//         </div>
//         <h3 className="drag">
//           Drag To Scroll
//         </h3>
//         <div className="buttons">
//           <button className="swiper-button-next"><FiChevronRight /></button>
//         <button className="swiper-button-prev"><FiChevronLeft /></button>
//         </div>
        
//       </div>
//     </Wrapper>
//   );
// }

// export default Suu;