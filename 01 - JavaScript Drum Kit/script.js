const keys = document.querySelectorAll('.key');
// Add class on keydown
document.addEventListener('keydown', addPlayingClass)
function addPlayingClass(e) {
    document.querySelector(`.key[data-key="${e.keyCode}"]`).classList.add('playing');
}
// Play audio clip
document.addEventListener('keydown', playDrumClip)
function playDrumClip(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
}
// Remove class on keyup
document.addEventListener('keyup', removePlayingClass);
function removePlayingClass(e) {
    document.querySelector(`.key[data-key="${e.keyCode}"]`).classList.remove('playing');
}