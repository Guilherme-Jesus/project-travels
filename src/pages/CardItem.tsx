import { Link } from "react-router-dom";

interface Props {
    src: string;
    text: string;
    label: string;
    path: string;
}


function CardItem({ src,
    text,
    label,
    path }: Props) {
    return (
        <>
            <li className="cards__item">
                <Link className="cards__item__link" to={path}>
                    <figure className="cards__item__pic-wrap" data-category={label}>
                        <img
                            src={src}
                            alt="ImageTravel"
                            className="cards__item__img"
                        />
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{text} </h5>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default CardItem;
