function playVideo(videoUrl) {
    const videoFrame = document.querySelector('#youtube-video');
    videoFrame.src = videoUrl + "?autoplay=1";
}