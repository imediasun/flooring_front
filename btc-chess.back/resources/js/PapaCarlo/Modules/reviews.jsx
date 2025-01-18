import handyman from "../../../img/content/home/handyman.png"
import review_papacarlo from "../../../img/content/home/review_papacarlo.png"
import { Navigation } from "swiper/modules"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import SliderBtnPrev from "../Components/SliderBtnPrev"
import SliderBtnNext from "../Components/SliderBtnNext"

export default function ReviewsSection() {
  return(
    <div id="reviews_box" className="global-section s-py-150 reviews-section">
      <div className="container">
        <div className="reviews__box">
          <img src={handyman} alt="img" className="reviews-man__img" width="270" height="320" />
          <h3 className="global-section-title reviews-title">What Our Clients <br />& <b>PARTNERS Have to Say</b></h3>
            <div className="reviews-papacarlo">
                <img src={review_papacarlo} alt="img" className="reviews-man__img" width="270" height="320"/>
            </div>
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
                  <div className="reviews-card__name">Leslie G.</div>
                  <div className="reviews-card__review">
                    <p>PapaCarlo was right on time and worked efficiently in a professional manner. We will be using this company’s services for all of our handyman needs. In addition, they were extremely courteous and trustworthy, which is not always the norm these days!</p>
                  </div>
                </div>
              </SwiperSlide>
                <SwiperSlide>
                    <div className="reviews-card">
                        <div className="reviews-card__name">Anthony P.</div>
                        <div className="reviews-card__review">
                            <p>Replied within minutes and was very communicative! First time using this website and I had the best experience! Very easy 10/10 recommendation to anyone who needs a handyman! Thank you PapaCarlo!</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="reviews-card">
                        <div className="reviews-card__name">Marco H.</div>
                        <div className="reviews-card__review">
                            <p>They were available very promptly and very knowledgeable. Came with all tools and even provided materials that were needed on the spot.  The job to install cameras was done perfectly and I would definitely recommend them for any handyman jobs</p>
                        </div>
                    </div>
                </SwiperSlide>
              <SwiperSlide>
                <div className="reviews-card">
                  <div className="reviews-card__name">Ardelle M.</div>
                  <div className="reviews-card__review">
                    <p>Responsive, efficient, and great workmanship. Very pleased with the results and the time it took.

                        It took a while to find a handyman willing to do “small” projects such as changing our 4 bathroom faucets; a couple declined as they seemed to prefer bigger projects. Yet Vlad and his team were responsive and easy to schedule with.

                        Would hire again and recommend his services!</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="reviews-card">
                  <div className="reviews-card__name">Jon D.</div>
                  <div className="reviews-card__review">
                    <p>Vlad and his team showed up right on time and did exactly what I needed him to. I definitely hire him again in the future for my handyman needs.</p>
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
