import {useState, useEffect } from 'react'
import { SearchBox } from '../search-box/search-box.component.jsx'
import { CardList } from '../card-list/card-list.component.jsx'
import Player from '../song-player.component/song-player.component'
import './home.component.css'

export default function Home() {

    const [searchField, setsearchField] = useState('');
    const [songs, setsongs] = useState([]);
    const [currentSong, setcurrentSong] = useState(new Audio())
    const [currentLyrics, setcurrentLyrics] = useState([]);
    const [isPlaying, setIsPlaying] = useState(true)



    async function getMusic(){
        let httpResponse =  await fetch("http://localhost:8000/api/songs/list/",{
                method:"GET",

            });
        let jsonObj = await httpResponse.json()
            setsongs(jsonObj)
        }

    useEffect(() => {
        getMusic()
    }, [])


    
    const filterdsongs = songs.filter(song=>
        (song.title.toLowerCase().includes(searchField.toLowerCase())
        || song.id === parseInt(searchField))
        || song.artist.toLowerCase().includes(searchField.toLowerCase()));
    
        const handleChange = (e) => {
            setsearchField(e.target.value);
        }
        
  return (
        <div>
            <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying}  currentSong={currentSong}> </Player>
            <SearchBox
                placeholder=  'Search Music'
                handleChange = {handleChange}
            />
            <div className="lyricsContainer">Lyrics: <br></br>{currentLyrics}</div>
            
            
            <CardList setIsPlaying={setIsPlaying} setcurrentSong={setcurrentSong} currentSong={currentSong} setcurrentLyrics={setcurrentLyrics} songs ={filterdsongs}/>

        </div>
        )

}