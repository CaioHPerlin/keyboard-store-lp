import style from "./hamburguer-menu.module.css";
import Image from "next/image";

export default function HamburguerMenu() {
	return (
		<header className={style.hamburguerMenu}>
			<Image
				className={style.iconLogo}
				src="/icon.png"
				alt="logo"
				width={900}
				height={200}
				style={{ width: "50px", height: "auto" }}
			/>
			{/* <Image
				className={style.hamburguerIcon}
				src="/hamburguer-icon.png"
				alt="menu"
				width={35}
				height={35}
				style={{ width: "25px", height: "auto" }}
			/> */}
			<span>© 2025 - ASDF</span>
		</header>
	);
}
