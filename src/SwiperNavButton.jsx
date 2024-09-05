
import { useSwiper} from 'swiper/react';

export const SwiperNavButtons = () =>{
const swiper=useSwiper();

return(
    <div className=' col-md-2 arrows'>
    <button onClick={()=>swiper.slidePrev()}><i class="fa-solid fa-arrow-left"></i></button>
    <button onClick={()=>swiper.slideNext()}><i class="fa-solid fa-arrow-right"></i></button>
    </div>
)
}
 
