import Image from "next/image";

export default function NavbarHamburger({ openedHamburger, setOpenedHamburger }) {

    return(
        <div 
            className="navbar_hamburger"
            onClick={() => setOpenedHamburger((prev) => !prev)}
        >
            {openedHamburger ? (
                <div>
                    <Image src={"/hamburger_open.png"} width={52} height={52} alt="Hamburger close" />
                </div>
            ) : (
                <div>
                    <Image src={"/hamburger_close.png"} width={52} height={52} alt="Hamburger open" />
                </div>
            )}
        </div>
    )
}