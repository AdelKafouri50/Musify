import React from 'react'

import {Card} from '../card/card.component';

import './card-list.styles.css';


export const CardList = ({songs, setcurrentLyrics, setcurrentSong, currentSong, setIsPlaying}) => {
    return (
        <div className='card-list'>
                {songs.map(song => (
                <Card setIsPlaying={setIsPlaying} setcurrentSong={setcurrentSong} currentSong={currentSong} setcurrentLyrics={setcurrentLyrics} key ={song.id} song = {song}/>
                ))}
            </div>
    )
            
};
