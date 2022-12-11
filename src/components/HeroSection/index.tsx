import Button from "../Button";
import "./styles.scss";
import video from "../../assets/video-praia.mp4";
import '../../App.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={video} autoPlay loop muted />
            <h1>
                A aventura começa aqui
            </h1>
            <p>O que você está esperando?</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    Iniciar
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={() => console.log('hey')}
                >
                    Assista o trailer <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;