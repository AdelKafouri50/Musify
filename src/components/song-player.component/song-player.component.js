import { useState, useRef } from 'react'
import Slider from './slider/Slider'
import ControlPanel from './controls/ControlPanel'
import './song-player.component.css'

export default function Player({currentSong, isPlaying, setIsPlaying}) {
  const [percentage, setPercentage] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const audioRef = useRef()

  const onChange = (e) => {
    const audio = audioRef.current
    audio.currentTime = (audio.duration / 100) * e.target.value
    setPercentage(e.target.value)
  }

  const play = () => {
    const audio = audioRef.current

    if (!isPlaying) {
      setIsPlaying(true)
      audio.play()
    }

    if (isPlaying) {
      setIsPlaying(false)
      audio.pause()
    }
  }

  const getCurrDuration = (e) => {
    const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
    const time = e.currentTarget.currentTime

    setPercentage(+percent)
    setCurrentTime(time.toFixed(2))
  }

  return (
    <div className={currentSong.title === '' ? 'hidden' : 'app-container'}>
      <p className='songTitle'>{currentSong.title}</p>
      <ControlPanel
        play={play}
        isPlaying={isPlaying}
        duration={duration}
        currentTime={currentTime}
        setIsPlaying={setIsPlaying}
      />
      <Slider percentage={percentage} onChange={onChange} />
      <audio
        autoPlay={true}
        volume ={0.1}
        ref={audioRef}
        onTimeUpdate={getCurrDuration}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2))
        }}
        src={currentSong.src}
      ></audio>
      
    </div>
  )
}


