import React from 'react';
import {Link} from "react-router-dom";
import styles from './Home.module.css';
import DisplayImageAndText from "./DisplayImageAndText.jsx";
import HomeBanner from "./HomeBanner.jsx";
import SmaaktestContent from "./SmaaktestContent.jsx";
import ContactContent from "../../components/ContactContent/ContactContent.jsx";
import { useFetchRandomBeerData } from "../../api/useFetchRandomBeerData.js";
import Buttons from "../../components/Buttons/Buttons.jsx";
import TastyLogo from "../../assets/svg/TastyBeerClub Logo transparent.svg"
import BeerBarrel from "../../assets/svg/BeerBarrel-icon.svg"
import BeerIconOne from "../../assets/svg/beer-icon-1.svg"
import BeerIconTwo from "../../assets/svg/beer-icon-2.svg"
import BeerIconThree from "../../assets/svg/beer-icon-3.svg"
import BeerIconFour from "../../assets/svg/beer-icon-4.svg"
import BlogArticles from "../../components/BlogArticles/BlogArticles.jsx";


export default function Home() {
    const { randomBeer, isLoading, error } = useFetchRandomBeerData();

    return (
        <article className={styles.articleHome}>
            <HomeBanner/>
            <div className={styles.content}>
                <figure className={styles.tastyLogo}>
                    <img src={TastyLogo} alt="Logo Tasty Beer Club"/>
                </figure>
                <h2>Waarom lid worden van deze club?</h2>
                <div className={styles["unique-selling-point"]}>
                    <DisplayImageAndText
                        imageSrc={BeerBarrel}
                        altText={"Biervat"}
                        styleClassImage={styles["usp-image"]}
                        styleClassContent={styles.usp}
                        title={"Een bierclub voor de echte liefhebber"}
                        description={"Van een Berliner Weisse tot een donkere American Stout "}
                    />
                    <DisplayImageAndText
                        imageSrc={BeerBarrel}
                        altText={"Biervat"}
                        styleClassImage={styles["usp-image"]}
                        styleClassContent={styles.usp}
                        title={"Gegarandeerd de lekkerste bieren"}
                        description={"Onze smaaktest helpt je bij de ideale keuze"}
                    />
                    <DisplayImageAndText
                        imageSrc={BeerBarrel}
                        altText={"Biervat"}
                        styleClassImage={styles["usp-image"]}
                        styleClassContent={styles.usp}
                        title={"Snel door heel Nederland geleverd"}
                        description={"In onze webwinkel vind je 300 verschillende bieren"}
                    />
                </div>
            </div>
            <SmaaktestContent/>
            <div className={styles["shopping-content"]}>
                <h4>De beste bierbrouwerijen</h4>
                <p>
                    Onze brouwerijen maken gebruik van klassieke individuele brouwtechnologie en zorgen voor de mooiste bieren waar jij als lid van houdt. Met de grootst mogelijke zorg worden onze bieren geselecteerd en
                    zoeken wij naar unieke merken met een duurzaam karakter die bieren brouwen met het hart voor smaak en kwaliteit
                </p>
                <div className={styles["beer-process"]}>
                    <DisplayImageAndText
                        imageSrc={BeerIconOne}
                        altText={"Biervat"}
                        styleClassImage={styles["process-image"]}
                        styleClassContent={styles.process}
                        title={"Mout pureren"}
                        description={"Biologische gerst en haver voor onze bieren"}
                    />
                    <DisplayImageAndText
                        imageSrc={BeerIconTwo}
                        altText={"Biervat"}
                        styleClassImage={styles["process-image"]}
                        styleClassContent={styles.process}
                        title={"Filtratie en koken"}
                        description={"Eeuwenlang was troebel bier de norm"}
                    />
                    <DisplayImageAndText
                        imageSrc={BeerIconThree}
                        altText={"Biervat"}
                        styleClassImage={styles["process-image"]}
                        styleClassContent={styles.process}
                        title={"Fermentatie en koeling"}
                        description={"Samenspel van eiwitten, polyfenolen en gistcellen"}
                    />
                    <DisplayImageAndText
                        imageSrc={BeerIconFour}
                        altText={"Biervat"}
                        styleClassImage={styles["process-image"]}
                        styleClassContent={styles.process}
                        title={"Filtratie en botteling"}
                        description={"Barrel Aged is een speciaalbier gerijpt in houten vaten van whiskey of wijn "}
                    />
                </div>
            </div>
            <div className={styles.content}>
                <figure className={styles.tastyLogo}>
                    <img src={TastyLogo} alt="Logo Tasty Beer Club"/>
                </figure>
                <h2>Ontdek ons bier</h2>
                <div>
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>Error: {error}</p>
                    ) : randomBeer ? (
                        <ul>
                            <li>
                                <h3>{randomBeer.name}</h3>
                                <p>ABV: {randomBeer.abv}%</p>
                                {/* Add other beer details as needed */}
                            </li>
                            <li>
                                <h3>{randomBeer.name}</h3>
                                <p>ABV: {randomBeer.abv}%</p>
                                {/* Add other beer details as needed */}
                            </li>
                            <li>
                                <h3>{randomBeer.name}</h3>
                                <p>ABV: {randomBeer.abv}%</p>
                                {/* Add other beer details as needed */}
                            </li>
                        </ul>
                    ) : null}
                </div>
                <Link to={`/webshop`}>
                    <Buttons
                        buttonName={"Naar de webshop"}
                        className={"button-nav"}
                    ></Buttons>
                </Link>

            </div>
            <div className={styles["blog-content"]}>
                <h3>Recente artikelen</h3>
                <BlogArticles/>
            </div>
            <div className={styles.content}>
                <ContactContent/>
            </div>


        </article>
    );
}
