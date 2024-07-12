import { useState, useRef, useEffect } from 'react';
import { Button } from '@chakra-ui/react';

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
        {isPlaying ? (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            color="#FFFFFF"
            aria-hidden="true"
            focusable="false"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"></path>
          </svg>
        ) : (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            color="#FFFFFF"
            aria-hidden="true"
            focusable="false"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M4.27 3 3 4.27l9 9v.28c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4v-1.73L19.73 21 21 19.73 4.27 3zM14 7h4V3h-6v5.18l2 2z" />
          </svg>
        )}
      </Button>

      <audio ref={audioRef} src="/Background_Sound.mp3" />
    </>
  );
};

export default MusicButton;
