import SectionWrapper from "../../../section-wrapper/section-wrapper";
import style from "./hero-section.module.css";

export default function HeroSection() {
	return (
		<SectionWrapper>
			<div className={style.videoWrapper}>
				<video autoPlay muted loop playsInline>
					<source src="/Video_Inicial.webm" type="video/webm" />
				</video>
			</div>
			<section className={style.heroSection}>
				<div className={style.content}>
					<h1 className={style.title}>Corsair Black Friday</h1>

					<p className={style.lead}>Teclados Corsair com até 30% de desconto</p>

					<a href="#">Compre Agora</a>
				</div>
			</section>
		</SectionWrapper>
	);
}
