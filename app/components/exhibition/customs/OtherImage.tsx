'use client'

import Image from "next/image"
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "@/app/css/MySwiper.module.css"

export function OtherImage({ content } :{ content: any}){


    const slideSettings = {
        0: {
            slidesPerView: 1.4,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
    };

    return(
        <div className="md:my-10 my-5 md:mx-4 mx-2">
            <Swiper
            className={styles.MySwiper}
            modules={[Navigation, Pagination, Autoplay]}
            breakpoints={slideSettings} // slidesPerViewを指定
            slidesPerView={"auto"} // ハイドレーションエラー対策
            centeredSlides={true} // スライドを中央に配置
            loop={true} // スライドをループさせる
            speed={800} // スライドが切り替わる時の速度
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }} // スライド表示時間
            navigation // ナビゲーション（左右の矢印）
            pagination={{
                clickable: true,
            }} // ページネーション, クリックで対象のスライドに切り替わる
            >
                {
                    content.images.map((image: any) => {
                        return <SwiperSlide key={content.images.indexOf(image)}>
                            <Image
                            src={`${image.url}?width=${image.width}&height=${image.height}`}
                            width={900}
                            height={600}
                            alt=""
                            className="w-full md:h-96 h-44 object-cover"
                            unoptimized={true}//繰り返し表示なので最適化オフ
                            />
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    )
}