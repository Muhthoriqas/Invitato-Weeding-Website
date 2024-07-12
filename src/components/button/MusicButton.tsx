import { useState, useRef, useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import { PlayingMusicIcon, CloseMusicIcon } from '../../assets/icons/Icon';
const MusicButton = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          console.log('Audio is playing');
        })
        .catch((error) => {
          console.error('Failed to play audio:', error);
        });
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
        console.log('Playback state:', isPlaying);
      } catch (error) {
        console.error('Failed to play/pause audio:', error);
      }
    }
  };

  return (
    <>
      <Button
        backgroundColor={'#997a5e'}
        borderRadius={'50%'}
        padding={'0px'}
        boxShadow={'xl'}
        outline={'transparent solid 2px'}
        color={'gray.800'}
        marginLeft={'5px'}
        onClick={togglePlay}
      >
        {isPlaying ? <PlayingMusicIcon /> : <CloseMusicIcon />}
      </Button>

      <audio ref={audioRef} src="/Background_Sound.mp3" />
    </>
  );
};

export default MusicButton;
