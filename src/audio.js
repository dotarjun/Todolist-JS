export const audioSFX = (btn, sfx) => {
    const button = document.getElementById(`${btn}`);
    button.addEventListener('click', () => {
        const sfxAudio = new Audio();
        sfxAudio.src = `./assets/audio/${sfx}.mp3`
        sfxAudio.play();
    })
    console.log('sound!!');
}