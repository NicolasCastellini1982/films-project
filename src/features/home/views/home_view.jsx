import { AppSwiper } from "../../../core/components/app_swiper/app_swiper";
import AppSwiperSlide from "../../../core/components/app_swiper/components/app_swiper_slide";
import AppButton from "../../../core/components/app_button/app_button";
import React from "react";
import useSWR from "swr";
import { getPopularMovies } from "../services/movies.services";

const HomeView = () => {

  const { data, error, isLoading } = useSWR(
  "getPopularMovies",
  getPopularMovies
  );

  return (
      <div>
        <h1>Peliculas Mejor Puntaje</h1>
      <AppSwiper>
        {
          data?.map((e, index) => (

          
        <AppSwiperSlide key= {index}>
          <div
            style={{
                height: "150px",
                width: "250px",
                backgroundImage: `url(${e.backdrop})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
          >
            <h3>{e.title}</h3>
      </div>


        </AppSwiperSlide>
          ))}
      </AppSwiper>

    
      </div>
  ) ;
};
export default HomeView;