const videoElement =document.getElementById('video');
const button = document.getElementById('button');

// prompt to select media stream, pass to video element ,then play
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }

    }
    catch(error){
        // Catch error
        console.log('Error here:', error);
    }
}
button.addEventListener('click', async () => {
    // Display Button
    button.disabled =true;
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});

// On Load
selectMediaStream();