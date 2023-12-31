import SlideLayout from "@/layouts/SlideLayout";
import Decoration from "./Decoration";
import Image from "next/image";

export default function SecondSlide() {

    return (
        <SlideLayout showAuroras={false}>
            <div className="page-home__slide-2">
                <div className="page-home__slide-2__video">
                    <video
                        controls={false}
                        playsInline
                        loop={true}
                        autoPlay={true}
                        muted={true}
                        className="page-home__slide-2__video"
                        src={"/home/worldwide_video.mov"}
                    >
                    </video>
                    <div className="page-home__slide-2__video__bg">
                        <Image
                            src={"/home/galaxy.png"}
                            width={1728}
                            height={1117}
                            // sizes="100vw"
                            alt="Galaxy"
                        />
                    </div>
                </div>
                <div className="page-home__slide-2__banner">
                    <div className="page-home__slide-2__title">
                        The 1st <strong>DAO</strong> for the AI community
                    </div>
                </div>
                <Decoration />
            </div>
        </SlideLayout>
    );
};