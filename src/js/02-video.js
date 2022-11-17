import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const localKey = "videoplayer-current-time";

// player.on('play', function() {
//     console.log('played the video!');
// });

function onPlay(evt) {
    localStorage.setItem(localKey, evt.seconds);      
};
   
player.on('timeupdate', throttle(onPlay, 1000));

const currentPlaybackPosition = localStorage.getItem(localKey);

player.setCurrentTime(currentPlaybackPosition);