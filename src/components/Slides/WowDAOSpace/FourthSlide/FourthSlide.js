import SlideLayout from "@/layouts/SlideLayout";
import PageHomeSlideTitle from "@/components/PageHomeSlideTitle";
import Image from "next/image";

export default function FourthSlide() {
    return (
        <SlideLayout showAuroras={true}>
            <div className="page-home__slide-4">
                <PageHomeSlideTitle 
                    title={`${"Build AI Products with Ease on WowDAO's Comprehensive Platform"}`}
                    // fontSize={30}
                />
                <div className="page-home__slide-4__inner">
                    <Image 
                        src={"/home/slide4_home_bg.png"}
                        fill
                        sizes="100vw"
                        alt="Slide 4 background"
                        quality={100}
                        unoptimized
                    />
                </div>
            </div>
        </SlideLayout>
    )
}