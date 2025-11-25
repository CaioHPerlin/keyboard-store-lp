import { ANIMATIONS } from "@/app/utils/constants";
import SectionWrapper from "../../../section-wrapper/section-wrapper";
import style from "./hero-section.module.css";
import { motion } from "motion/react";

export default function HeroSection() {
	return (
		<SectionWrapper>
			<motion.div
				className={style.videoWrapper}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{
					duration: ANIMATIONS.DURATION.SLOWER,
					ease: "easeIn",
				}}
			>
				<video autoPlay muted loop playsInline>
					<source src="/Video_Inicial.webm" type="video/webm" />
				</video>
			</motion.div>
			<section className={style.heroSection}>
				<div className={style.content}>
					<motion.h1
						className={style.title}
						initial={{ opacity: 0, x: 50, y: 0 }}
						whileInView={{ opacity: 1, x: 0, y: 0 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{
							duration: ANIMATIONS.DURATION.DEFAULT,
							delay: ANIMATIONS.DELAY.DEFAULT * 0,
							ease: "easeInOut",
						}}
					>
						Black Friday Corsair
					</motion.h1>

					<motion.p
						className={style.lead}
						initial={{ opacity: 0, x: 50, y: 0 }}
						whileInView={{ opacity: 1, x: 0, y: 0 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{
							duration: ANIMATIONS.DURATION.DEFAULT,
							delay: ANIMATIONS.DELAY.DEFAULT * 1,
							ease: "easeInOut",
						}}
					>
						Durante a Black Friday Corsair, diveresos produtos da marca estão saindo
						com até 30% de desconto!
					</motion.p>

					<motion.h3
						initial={{ opacity: 0, x: 50, y: 0 }}
						whileInView={{ opacity: 1, x: 0, y: 0 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{
							duration: ANIMATIONS.DURATION.DEFAULT,
							delay: ANIMATIONS.DELAY.DEFAULT * 2,
							ease: "easeInOut",
						}}
					>
						Compre Agora
					</motion.h3>
				</div>
			</section>
		</SectionWrapper>
	);
}
