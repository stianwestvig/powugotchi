const sparetips = [
    "Slå av elektriske enheter når du ikke bruker dem.",
    "Bruk energieffektive lyspærer og lysarmaturer.",
    "Unngå å bruke strømslukende enheter, som tv-spillkonsoller, når du sover.",
    "Juster termostaten din når du går ut og kommer hjem for å spare strøm på oppvarmingen.",
    "Bruk en strømmåler for å identifisere hvilke enheter som bruker mest strøm.",
    "Bruk en støvsuger i stedet for en støvsuger med ledning for å spare strøm.",
    "Vask klærne dine på lav temperaturer for å spare strøm på vaskemaskinen.",
    "Bruk en kjøleskapsdør for å unngå at kjøleskapet bruker unødvendig strøm.",
    "Bruk en tørketrommel i stedet for en tørketrommel med ledning for å spare strøm.",
    "Unngå å bruke elektrisk vannkoker for å lage te eller kaffe, bruk en gryte isteden."
];


const Tips = () => {
    const tip = sparetips[Math.floor(Math.random() * sparetips.length)];
    console.log(tip);
    return (
        <div>
            <p>{tip}</p>
        </div>
    )
};

export default Tips;
