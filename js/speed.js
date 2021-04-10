const video = select('#bigVideo');
let speed = video.defaultPlaybackRate;

const secvideo = select('#secondVideo');
let secSpeed = secvideo.defaultPlaybackRate;


// querySelector shorthand
function select(selector) {
    return document.querySelector(selector);
}

// inital speed text
select('#speedText').innerText = video.playbackRate.toFixed(2);
select('#speed-down-Text').innerText = video.playbackRate.toFixed(2);
// ***INCREASE SPEED***
select('#speedUp').addEventListener('click', () => {
    speed += 0.10;
    video.playbackRate = speed;
    select('#speedText').innerText = speed.toFixed(2);
    select('#speed-down-Text').innerText = speed.toFixed(2);
    console.log(speed);
});

// ***DECREASE SPEED***
select('#slowDown').addEventListener('click', () => {
    if (speed > 0.10) {
        speed -= 0.10;
        video.playbackRate = speed;
        select('#speedText').innerText = speed.toFixed(2);
        select('#speed-down-Text').innerText = speed.toFixed(2);
        console.log(speed);
    }
});

// ***RESET SPEED TO 1***
select('#reset').addEventListener('click', () => {
    speed = 1;
    video.playbackRate = speed;
    select('#speedText').innerText = video.playbackRate;
    console.log(speed);
});


///////////////////////////////////////////////////////////////////////


// inital speed text
select('#speedText2').innerText = secvideo.playbackRate.toFixed(2);
select('#speed-down-Text2').innerText = secvideo.playbackRate.toFixed(2);
// ***INCREASE SPEED***
select('#speedUp2').addEventListener('click', () => {
    secSpeed += 0.10;
    secvideo.playbackRate = secSpeed;
    select('#speedText2').innerText = secSpeed.toFixed(2);
    select('#speed-down-Text2').innerText = secSpeed.toFixed(2);
    console.log(secSpeed);
});

// ***DECREASE SPEED***
select('#slowDown2').addEventListener('click', () => {
    if (secSpeed > 0.10) {
        secSpeed -= 0.10;
        secvideo.playbackRate = secSpeed;
        select('#speedText2').innerText = secSpeed.toFixed(2);
        select('#speed-down-Text2').innerText = secSpeed.toFixed(2);
        console.log(secSpeed);
    }
});

// ***RESET SPEED TO 1***
select('#reset2').addEventListener('click', () => {
    secSpeed = 1;
    secvideo.playbackRate = secSpeed;
    select('#speedText2').innerText = secvideo.playbackRate;
    console.log(secSpeed);
});
////////////////////////////////////////////////////////////////////////


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