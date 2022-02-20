// Add class on keydown
const keys = document.querySelectorAll('.key');
document.addEventListener('keydown', addPlayingClass)
// keys.forEach(key => key.addEventListener('click', addPlayingClass))

function addPlayingClass(e) {
    alert(e.keyCode);
}
// Play audio clip
// Remove class on keyup
