import SectionWrapper from "../../../section-wrapper/section-wrapper";
import style from "./inspiration-section.module.css";
import Image from "next/image";

import sectionThumbnailImage from "@/app/assets/images/inspiration-section/Cod_Promocional.png";
import wavePatternImage from "@/app/assets/images/wave-pattern.png";

export function InspirationSection() {
	return (
		<SectionWrapper>
			<section className={style.inspirationSection}>
				<div className={style.left}>
					<Image
						className={style.image}
						src={sectionThumbnailImage}
						alt="Bowl with vegetables and rice"
						fill
					/>
				</div>

				<div className={style.right}>
					<div className={style.bgPink} />
					<Image
						className={style.bgImage}
						src={wavePatternImage}
						alt="Background"
						fill
					/>
					<div className={style.content}>
						<h1>Coleçao Call of Duty</h1>

						<p>
							Aproveita a nossa nova coleçao exclusiva ambientada no universo de
							Call of Duty Black Ops 7, por tempo limitada
						</p>
						<h3 className={style.arrow}>Explore a coleçao</h3>
					</div>
				</div>
			</section>
		</SectionWrapper>
	);
}
