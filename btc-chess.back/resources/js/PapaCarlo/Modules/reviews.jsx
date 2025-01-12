import handyman from "../../../img/content/home/handyman.png"
import { Navigation } from "swiper/modules"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import SliderBtnPrev from "../Components/SliderBtnPrev"
import SliderBtnNext from "../Components/SliderBtnNext"

export default function ReviewsSection() {
  return(
    <div className="global-section s-py-150 reviews-section">
      <div className="container">
        <div className="reviews__box">
          <img src={handyman} alt="img" className="reviews-man__img" width="270" height="320" />
          <h3 className="global-section-title reviews-title">What Our Clients <br />& <b>PARTNERS Have to Say</b></h3>
          <div className="reviews-slider__wrapp">
            <Swiper
              className={"reviews-slider"}
              modules={[Navigation]}
              speed={500}
              spaceBetween={10}
              slidesPerView={1}
              navigation={{
                prevEl: ".reviews-slider__wrapp .global-slider-btn-prev",
                nextEl: ".reviews-slider__wrapp .global-slider-btn-next",
              }}
              breakpoints={{
                567: {
                  slidesPerView: 2,
                },
                800: {
                  slidesPerView: 2.5,
                  spaceBetween: 20
                },
                1200: {
                  slidesPerView: 2.65
                },
              }}
            >
              <SwiperSlide>
                <div className="reviews-card">
                  <div className="reviews-card__name">J Miller</div>
                  <div className="reviews-card__review">
                    <p>Lorem ipsum dolor sit amet consectetur. Rhoncus et adipiscing est commodo. Lobortis viverra quis sollicitudin tortor diam vulputate suspendisse. Donec ullamcorper enim venenatis dis venenatis ac in.</p>
                  </div>
                </div>
              </SwiperSlide>
                <SwiperSlide>
                    <div className="reviews-card">
                        <div className="reviews-card__name">J Miller</div>
                        <div className="reviews-card__review">
                            <p>Lorem ipsum dolor sit amet consectetur. Rhoncus et adipiscing est commodo. Lobortis viverra quis sollicitudin tortor diam vulputate suspendisse. Donec ullamcorper enim venenatis dis venenatis ac in.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="reviews-card">
                        <div className="reviews-card__name">J Miller</div>
                        <div className="reviews-card__review">
                            <p>Lorem ipsum dolor sit amet consectetur. Rhoncus et adipiscing est commodo. Lobortis viverra quis sollicitudin tortor diam vulputate suspendisse. Donec ullamcorper enim venenatis dis venenatis ac in.</p>
                        </div>
                    </div>
                </SwiperSlide>
              <SwiperSlide>
                <div className="reviews-card">
                  <div className="reviews-card__name">J Miller</div>
                  <div className="reviews-card__review">
                    <p>Lorem ipsum dolor sit amet consectetur. Rhoncus et adipiscing est commodo. Lobortis viverra quis sollicitudin tortor diam vulputate suspendisse. Donec ullamcorper enim venenatis dis venenatis ac in.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="reviews-card">
                  <div className="reviews-card__name">J Miller</div>
                  <div className="reviews-card__review">
                    <p>Lorem ipsum dolor sit amet consectetur. Rhoncus et adipiscing est commodo. Lobortis viverra quis sollicitudin tortor diam vulputate suspendisse. Donec ullamcorper enim venenatis dis venenatis ac in.</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="global-slider-btns">
              <SliderBtnPrev/>
              <SliderBtnNext/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
