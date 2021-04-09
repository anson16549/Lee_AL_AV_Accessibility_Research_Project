(() => {
    let lyricButton = document.querySelector('.slider');
    let lyricText = document.querySelector('#Lyrics');

    function showLyric() {
        if (lyricButton.textContent === "Show Lyric") {
            // lyricText.classList = "lyricsBox";
            lyricText.style.display = "block";
            lyricText.style.marginTop = "50px";
            lyricButton.textContent = 'Hide Lyric';
        } else {
            // lyricText.classList = "lyricsButton";
            lyricText.style.display = "none";
            lyricButton.textContent = "Show Lyric";
        }
    }



    lyricButton.addEventListener('click', showLyric);
})();