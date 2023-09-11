import SlideLayout from "@/layouts/SlideLayout";
import { useConfig } from "@/providers/ConfigProvider";
import PageHomeSlideTitle from "@/components/PageHomeSlideTitle";
import Image from "next/image";

export default function FifthSlide() {
    const { swiperRef } = useConfig();

    const handleClick = () => {
        if (swiperRef) {
            swiperRef.current.slideNext();
        };
    };

    return (
        <div>
            <SlideLayout>
                <div className="page-home__slide-5">
                    <PageHomeSlideTitle
                        title={`${"Benefits of WowDAO Token Holders"}`}
                        // fontSize={40}
                    />
                    <div className="page-home__slide-5__inner">
                        <div className="page-home__slide-5__inner__img">
                            <Image
                                src={"/home/slide5_element_img.png"}
                                fill
                                sizes="90vw"
                                style={{
                                    objectFit: 'contain'
                                }}
                                quality={100}
                                alt={"slide 5 background"}
                                unoptimized
                            />
                        </div>
                    </div>
                    <div
                        className="page-home__slide-5__btn"
                        onClick={handleClick}
                    >
                        Exploring now
                    </div>
                </div>
            </SlideLayout>
        </div>
    )
}   