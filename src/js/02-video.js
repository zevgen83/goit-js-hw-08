import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = "videoplayer-current-time";

const currentPlaybackPosition = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

// player.on('play', function() {
//     console.log('played the video!');
// });

function onPlay(evt) {
    const positionPlayer = {
        duration: evt.duration,
        percent: evt.percent,
        seconds: evt.seconds,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(positionPlayer));      
};
   
player.on('timeupdate', throttle(onPlay, 1000));


player.setCurrentTime(currentPlaybackPosition).then(function (seconds) {
    seconds = currentPlaybackPosition.seconds;
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        'the time is less than 0 or greater than the videos duration';
        break;
      default:
        'other error';
        break;
    }
  });
