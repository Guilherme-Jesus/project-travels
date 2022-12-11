import React from "react";
import CardItem from "../../pages/CardItem";
import "./styles.scss";
import image9 from "../../assets/img-9.jpg";
import image2 from "../../assets/img-2.jpg";
import image3 from "../../assets/img-3.jpg";
import image4 from "../../assets/img-4.jpg";
import image8 from "../../assets/img-8.jpg";

function Cards() {
    return (
        <div className="cards">
            <h1>Veja esses destinos Épicos!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={image9}
                            text="Explore a cachoeira escondida nas profundezas da Selva Amazônica"
                            label="Aventura"
                            path="/services"
                        />
                        <CardItem
                            src={image2}
                            text="Viaje pelas ilhas de Bali em um cruzeiro privado"
                            label="Luxo"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src={image3}
                            text="Navegue pelas águas do oceano atlântico"
                            label="Mistérios"
                            path="/services"
                        />
                        <CardItem
                            src={image4}
                            text="Experimente o futebol no topo do Himilaya"
                            label="Aventura"
                            path="/services"
                        />
                        <CardItem
                            src={image8}
                            text="Passeie pelo deserto do Saara em um guia"
                            label="Adrenalina"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
