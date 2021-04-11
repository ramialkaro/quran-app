import React from 'react'
import * as Player from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';

export const AudioPlayer = () => {
  return (
    <Player 
      autoPlay
      src="/audio/001.mp3"

    />
    
  )
}
