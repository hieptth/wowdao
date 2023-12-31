import Link from "next/link";
import Image from "next/image";
import StartExploring from "../Buttons/StartExploringBtn";
import FirstNavWrap from "./FirstNavWrap";
import { useConfig } from "@/providers/ConfigProvider";
import SecondNavWrap from "./SecondNavWrap";

export default function TopBar() {
    const { config } = useConfig();

    return (
        <div className="top-bar">
            <div className="top-bar__left">
                <Link href={"/"}>
                    <Image src={"/logo.svg"} width={162} height={46} alt="Logo" priority />
                </Link>
                {!config.showSecondNavWrap && <FirstNavWrap />}
            </div>
            {config.showSecondNavWrap && <SecondNavWrap />}
            <div className="top-bar__btn-list">
                <StartExploring />
            </div>
        </div>
    );
};