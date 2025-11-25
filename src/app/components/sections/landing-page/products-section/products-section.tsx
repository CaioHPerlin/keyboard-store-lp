"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import SectionWrapper from "../../../section-wrapper/section-wrapper";
import style from "./products-section.module.css";

import product1Image from "@/app/assets/images/products-section/product-1.png";
import product2Image from "@/app/assets/images/products-section/product-2.png";
import product3Image from "@/app/assets/images/products-section/product-3.png";
import product4Image from "@/app/assets/images/products-section/product-4.png";
import wavePatternImage from "@/app/assets/images/wave-pattern.png";

import { useRef, useState } from "react";
import { useHover } from "@/app/hooks/use-hover";

const productCards: Omit<ProductCardProps, "index" | "isActive" | "onActivate">[] = [
	{
		title: "Yuki Aim Polar 75",
		slug: "white-keyboard",
		image: product1Image,
		alt: "Yuki Aim Polar 75 8K Oni 2.0 keyboard with white keys",
		description:
			"Com uma taxa de polling de 8kHz, o teclado envia entradas ao PC a cada 0,125 milissegundos (8.000 vezes por segundo). Isso resulta em uma experiência de uso extremamente responsiva, ideal para quem exige precisão e velocidade.",
	},
	{
		title: "Wooting80HE PCR",
		slug: "wooting80he-pcr",
		image: product2Image,
		alt: "Wooting80HE PCR keyboard with RGB lighting",
		description:
			"Reunimos toda a nossa expertise para criar o teclado mais avançado até hoje. O Wooting 80HE eleva o padrão com inovações que otimizam o som, aumentam seu desempenho em jogos e introduzem a verdadeira taxa de pesquisa de 8 kHz, tornando-o o teclado mais rápido do mercado.",
	},
	{
		title: "Wooting60HE+",
		slug: "wooting60he-plus",
		image: product3Image,
		alt: "Wooting60HE+ keyboard with RGB lighting",
		description:
			"O Wooting 60HE detecta o movimento total do interruptor com precisão de 0,1 mm do início ao fim. Cada tecla emite um sinal analógico que pode ser usado para vários recursos que aprimoram sua experiência de digitação e jogo. Bem vindo ao futuro.",
	},
	{
		title: "Endgame Gear KB65HE",
		slug: "endgame-gear-kb65he-8k",
		image: product4Image,
		alt: "Endgame Gear KB65HE 8K keyboard with RGB lighting",
		description:
			"Desfrute de uma resposta ultrarrápida com taxa de polling real de 8000Hz e sensores Hall Effect de nova geração.",
	},
];

export function ProductsSection() {
	const [activeIndex, setActiveIndex] = useState<number>(1);

	return (
		<SectionWrapper className={style.productsSectionWrapper}>
			<section className={style.productsSection}>
				<h1>Products</h1>
				<ul>
					<div className={style.wavePatternWrapper}>
						<Image src={wavePatternImage} fill alt={"Wave pattern background"} />
					</div>
					{productCards.map((productCard, index) => (
						<ProductCard
							key={index}
							index={index + 1}
							slug={productCard.slug}
							title={productCard.title}
							image={productCard.image}
							alt={productCard.alt}
							description={productCard.description}
							isActive={activeIndex === index + 1}
							onActivate={() => setActiveIndex(index + 1)}
						/>
					))}
				</ul>
			</section>
		</SectionWrapper>
	);
}

type ProductCardProps = {
	index: number;
	slug: string;
	title: string;
	image: StaticImageData;
	alt: string;
	description: string;
	isActive: boolean;
	onActivate: () => void;
};

function ProductCard({
	index,
	slug,
	title,
	image,
	alt,
	description,
	isActive,
	onActivate,
}: ProductCardProps) {
	const cardRef = useRef<HTMLLIElement>(null);
	const imageWrapperRef = useRef<HTMLDivElement>(null);
	const isCardHovered = useHover(cardRef, { onEnter: onActivate });
	const isImageHovered = useHover(imageWrapperRef);

	const href = `#products/${slug}`;
	const key = index.toString().padStart(2, "0");
	const shouldShowCardHover = isCardHovered || isActive;
	const shouldShowImageHover = isImageHovered || isActive;

	const handleClick = (e: React.MouseEvent) => {
		// Tablets and smaller devices activate on click instead of hover
		if (window.innerWidth <= 1024) {
			e.preventDefault();
			onActivate();
		}
	};

	return (
		<li
			ref={cardRef}
			className={`${style.productCard} ${shouldShowCardHover ? style.productCardHover : ""} ${isActive ? style.productCardMobileOpen : ""}`}
		>
			<Link href={href} aria-label={`Open product ${title}`} onClick={handleClick}>
				<div className={style.productHeader}>
					<span className={style.productKey}>{key}</span>
					<span className={style.productKeyLead}></span>
					<h2 className={style.productTitle}>{title}</h2>
				</div>
				<div
					ref={imageWrapperRef}
					className={`${
						style.productImageWrapper
					} ${shouldShowImageHover ? style.productImageWrapperHover : ""}`}
				>
					<Image alt={alt} src={image} placeholder="blur" fill />
				</div>
				<div className={style.productFooter}>
					<p>{description}</p>
					<span className={style.arrow}>Go to product </span>
				</div>
			</Link>
		</li>
	);
}
