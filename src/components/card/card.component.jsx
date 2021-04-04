import { useState } from 'react'
import './card.styles.css'


export const Card = ({song, setcurrentLyrics, currentSong, setcurrentSong, setIsPlaying}) => {

    const [loading, setloading] = useState()

    const handleClick = () => {
        setIsPlaying(true)
        setcurrentSong(song) 
            console.log(currentSong)         
            lyrics()
    }

    const lyrics = async () => {
        setloading(true)
        let lyrics = await fetch(`https://api.lyrics.ovh/v1/${song.artist}/${song.title}`)
        setloading(false)
        let lyricsJSON = await lyrics.json()
        let finalLyrics = lyricsJSON.lyrics
        loading ? setcurrentLyrics('No Lyrics found')  : setcurrentLyrics(finalLyrics) 
        }
    

    return (
        <div>
        <div onClick={handleClick} className="card-container">  
        <img className="card"
            alt="song"
            src={song.poster}
        />
        <div className="infoContainer"><h2> <span className="songName">{song.title}</span>  <br></br> <span className="songArtist">{song.artist} </span> </h2> </div>

        </div>
        </div>
    )
}
