import React from 'react'
import { useState } from 'react'
import Add from './AddMovie';
import Filter from './Filter';
import MovieCard from './MovieCard';


const MovieList = () => {

    const [text, setText] = useState('')
    const [rate, setRate] = useState('')
    const [films, setFilms] = useState([
        {
            posterUrl: "https://fr.web.img5.acsta.net/pictures/19/06/18/12/11/3956503.jpg",
            title: "Breaking Bad",
            description: "A high school chemistry teacher dying of cancer teams with a former student to secure his family's future by manufacturing and selling crystal meth.",
            rate: 5
        },
        {
            posterUrl: "https://fr.web.img4.acsta.net/pictures/15/11/10/13/35/055302.jpg",
            title: "Lucifer",
            description: "The series revolves around the story of Lucifer Morningstar (Tom Ellis), the DC Universe's version of the Devil, who abandons Hell for Los Angeles where he runs his own nightclub named Lux and becomes a consultant to the Los Angeles Police Department (LAPD).",
            rate: 4
        },
        {
            posterUrl: "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
            title: "Avengers : Endgame",
            description: "After half of all life is snapped away by Thanos, the Avengers are left scattered and divided. Now with a way to reverse the damage, the Avengers and their allies must assemble once more and learn to put differences aside in order to work together and set things right..",
            rate: 5
        },
        {
            posterUrl: "https://i.pinimg.com/originals/aa/15/42/aa15422cb191838cd1b4737c7325d1fc.jpg",
            title: "Vikings",
            description: "This gritty drama charts the exploits of Viking hero Ragnar Lothbrok as he extends the Norse reach by challenging an unfit leader who lacks vision..",
            rate: 5
        },
        {
            posterUrl: "https://flxt.tmsimg.com/assets/p34313_p_v8_az.jpg",
            title: "Troy",
            description: "Based on Homer's this epic portrays the battle between the ancient kingdoms of Troy and Sparta. While visiting Spartan King Menelaus (Brendan Gleeson), Trojan prince Paris (Orlando Bloom) falls for Menelaus' wife, Helen (Diane Kruger), and takes her back to Troy..",
            rate: 4
        },
        {
            posterUrl: "http://img.over-blog-kiwi.com/0/95/30/84/20191024/ob_7e7b43_1571909767-action-dossier-de-presse-na.jpg",
            title: "Narcos",
            description: "The true story of Colombia's infamously violent and powerful drug cartels fuels this gritty gangster drama series.",
            rate: 3
        },
        {
            posterUrl: "https://fr.web.img2.acsta.net/pictures/18/07/02/17/25/3643090.jpg",
            title: "Harry Potter",
            description: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
            rate: 4
        },
        {
            posterUrl: "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
            title: "Game of Thrones",
            description: "Nine noble families struggle with each other for control of the fairy land of Westeros, while an ancient enemy awaits .",
            rate: 1
        },

    ]);

    const AddMovie = (addmovie) => {
        setFilms((films) =>
            ([...films, addmovie]))
    }
    const filtertext = (text) => {
        setText(text)
    }
    const filterrate = (rate) => {
        setRate(rate)
    }
    return (
        <div>
            <Filter filtertext={filtertext} filterrate={filterrate} />
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: "wrap" }} className="adc">
                {films.filter((el) => (el.title.toLowerCase().includes(text.toLowerCase()) && el.rate.toString() >= rate)).map((element) =>
                    <MovieCard movie={element} />
                )}
            </div>
            <div className="btnadd">
                <Add AddMovie={AddMovie} />
            </div>

        </div>

    )
};
export default MovieList