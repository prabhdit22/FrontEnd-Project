import { SwiperNavButtons } from './SwiperNavButton'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

import 'swiper/css';

const data=[
  {
   img:"https://img.freepik.com/free-photo/landscape-with-two-trees-black-white_1136-199.jpg?ga=GA1.1.978680009.1695483872&semt=ais_hybrid",
  },
  {
    img:"https://img.freepik.com/free-photo/landscape-with-two-trees-black-white_1136-199.jpg?ga=GA1.1.978680009.1695483872&semt=ais_hybrid",
   },
   {
    img:"https://img.freepik.com/free-photo/landscape-with-two-trees-black-white_1136-199.jpg?ga=GA1.1.978680009.1695483872&semt=ais_hybrid",
   },
   {
    img:"https://img.freepik.com/free-photo/landscape-with-two-trees-black-white_1136-199.jpg?ga=GA1.1.978680009.1695483872&semt=ais_hybrid",
   },
   {
    img:"https://img.freepik.com/free-photo/landscape-with-two-trees-black-white_1136-199.jpg?ga=GA1.1.978680009.1695483872&semt=ais_hybrid",
   },
   {
    img:"https://img.freepik.com/free-photo/landscape-with-two-trees-black-white_1136-199.jpg?ga=GA1.1.978680009.1695483872&semt=ais_hybrid",
   },
   {
    img:"https://img.freepik.com/free-photo/landscape-with-two-trees-black-white_1136-199.jpg?ga=GA1.1.978680009.1695483872&semt=ais_hybrid",
   },
   {
    img:"https://img.freepik.com/free-photo/landscape-with-two-trees-black-white_1136-199.jpg?ga=GA1.1.978680009.1695483872&semt=ais_hybrid",
   },
   {
    img:"https://img.freepik.com/free-photo/landscape-with-two-trees-black-white_1136-199.jpg?ga=GA1.1.978680009.1695483872&semt=ais_hybrid",
   },
   {
    img:"https://img.freepik.com/free-photo/landscape-with-two-trees-black-white_1136-199.jpg?ga=GA1.1.978680009.1695483872&semt=ais_hybrid",
   },
   {
    img:"https://img.freepik.com/free-photo/landscape-with-two-trees-black-white_1136-199.jpg?ga=GA1.1.978680009.1695483872&semt=ais_hybrid",
   },
];

export default function ImageSlide({btnval}){
    return(
      <div>
          <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
         spaceBetween={15}
         slidesPerView={3}
        
         onSlideChange={() => console.log('slide change')}
         onSwiper={(swiper) => console.log(swiper)}
       >
         {
           data.map((user)=>(
             <SwiperSlide className="slide">
               <div className='slide-content'>
                 <div className={`user-image ${btnval ? "user-imagebtn" :""}`}>
                 <img src={user.img} alt="" className='user-photo' />
                 </div>
               </div>
             </SwiperSlide>
           ) 
   
           )
         }
         <SwiperNavButtons/> 
       </Swiper>
      </div>
    )
}