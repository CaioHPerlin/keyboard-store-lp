import SectionWrapper from "@/app/components/section-wrapper/section-wrapper";
import style from "./about-section.module.css";
import Image from "next/image";

import backgroundImage from "@/app/assets/images/about-section/background-0.jpg";
import { motion } from "motion/react";
import { ANIMATIONS } from "@/app/utils/constants";

export function AboutSection() {
	return (
		<SectionWrapper>
			<div className={style.imageWrapper}>
				<Image src={backgroundImage} alt="About Section background image" />
			</div>
			<section className={style.aboutSection}>
				<h1>Sobre</h1>
				<div className={style.main}>
					<motion.p
						initial={{ x: -50, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{
							duration: ANIMATIONS.DURATION.DEFAULT,
							delay: ANIMATIONS.DELAY.DEFAULT * 0,
							ease: "easeOut",
						}}
						className={style.mainText}
					>
						Qualidade, personalização, paixão – esta trindade garante que sempre
						entreguemos teclados mecânicos superiores, cuidadosamente projetados e
						montados, da bancada até o seu setup.
					</motion.p>
					<motion.a
						initial={{ x: -50, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{
							duration: ANIMATIONS.DURATION.DEFAULT,
							delay: ANIMATIONS.DELAY.DEFAULT * 0,
							ease: "easeOut",
						}}
						className={style.arrow}
						href="#"
					>
						Explore a nossa marca
					</motion.a>
					<motion.div
						initial={{ x: 50, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{
							duration: ANIMATIONS.DURATION.DEFAULT,
							delay: ANIMATIONS.DELAY.DEFAULT * 0,
							ease: "easeOut",
						}}
						className={style.info}
					>
						<p>
							Visite-nos na
							<br />
							R. da Saudade, Foo 108
							<br />
							Pb. 84
							<br />
							6707 Cidade B, Brasil
						</p>
						<p>
							<a href="tel:004757848890">Tel: +55 67 12 3456-1234</a>
							<br />
							<a href="mailto:office@babord.no">office@asdf.com</a>
						</p>
					</motion.div>
				</div>
			</section>
		</SectionWrapper>
	);
}
