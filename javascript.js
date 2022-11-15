
const video = document.createElement('video');

video.src ='https://youtu.be/6g2vk8Gudqs';


video.controls = true;
video.muted = false;
video.width = 320;

const box = document.getElementById('box');

box.appendChild(video);