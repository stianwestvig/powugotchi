import bubble from './../assets/images/bigbubble.png';

const sparetips = [
    "Slå av elektriske enheter når du ikke bruker dem.",
    "Bruk energieffektive lyspærer og lysarmaturer.",
    "Unngå å bruke strømslukende enheter, som tv-spillkonsoller, når du sover.",
    "Juster termostaten din når du går ut og kommer hjem for å spare strøm.",
    "Bruk en strømmåler for å identifisere hvilke enheter som bruker mest strøm.",
    "Bruk en støvsuger i stedet for en støvsuger med ledning for å spare strøm.",
    "Vask klærne dine på lav temperaturer for å spare strøm på vaskemaskinen.",
    "Bruk en kjøleskapsdør for å unngå at kjøleskapet bruker strøm.",
    "Bruk en tørketrommel i stedet for en tørketrommel med ledning.",
    "Unngå å bruke elektrisk vannkoker for å lage te eller kaffe."
];


const Tips = ({ randomIndex }) => {
    const tip = sparetips[randomIndex];
    
    return (
        <div style={{
            background: `url(${bubble})`,
            position: 'absolute',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '255px',
            height: '255px',
            top: '-170px',
            left: '17px'

        }}>
            <p style={{
                color: 'black',
                padding: '20px 40px',
            }}>{tip}</p>
        </div>
    )
};

export default Tips;
