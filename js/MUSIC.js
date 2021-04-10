const Music = select('#Music');
let MusicSpeed = Music.defaultPlaybackRate;

// querySelector shorthand
function select(selector) {
    return document.querySelector(selector);
}
// inital speed text
select('#speedMusic').innerText = Music.playbackRate.toFixed(2);
select('#speed-down-Text-Music').innerText = Music.playbackRate.toFixed(2);
// ***INCREASE SPEED***
select('#speedUp3').addEventListener('click', () => {
    MusicSpeed += 0.10;
    Music.playbackRate = MusicSpeed;
    select('#speedMusic').innerText = MusicSpeed.toFixed(2);
    select('#speed-down-Text-Music').innerText = MusicSpeed.toFixed(2);
    console.log(MusicSpeed);
});

// ***DECREASE SPEED***
select('#slowDown3').addEventListener('click', () => {
    if (MusicSpeed > 0.10) {
        MusicSpeed -= 0.10;
        Music.playbackRate = MusicSpeed;
        select('#speedMusic').innerText = MusicSpeed.toFixed(2);
        select('#speed-down-Text-Music').innerText = MusicSpeed.toFixed(2);
        console.log(MusicSpeed);
    }
});

// ***RESET SPEED TO 1***
select('#resetMusic').addEventListener('click', () => {
    MusicSpeed = 1;
    Music.playbackRate = MusicSpeed;
    select('#speedMusic').innerText = Music.playbackRate;
    console.log(MusicSpeed);
});