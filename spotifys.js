let audioElement=new Audio('songs/song4.mp3');
let palyBtn=document.getElementById('playButton');
let myProgressBar=document.getElementById('setRange');
let songList=Array.from(document.getElementsByClassName('musicList'));
let songs=[
    {songName:"Bhool Jaa",filePath:"songs/song1.mp3",coverPath:"coverPath/song-1.jpg"},
    {songName:"Simroon Tera Naam",filePath:"songs/song2.mp3",coverPath:"coverPath/song-2.jpg"},
    {songName:"Dil Bechara",filePath:"songs/song3.mp3",coverPath:"coverPath/song-3.jpg"},
    {songName:"Zinda Banda - Jawan",filePath:"songs/song4.mp3",coverPath:"coverPath/song-4.jpg"},
    {songName:"Love Stereo Again",filePath:"songs/song5.mp3",coverPath:"coverPath/song-5.jpg"},
    {songName:"Yaar Ka Sataya Hai",filePath:"songs/song6.mp3",coverPath:"coverPath/song-6.jpg"},
    {songName:"RR Kii Prem Kahaan",filePath:"songs/song7.mp3",coverPath:"coverPath/song-7.jpg"},
    {songName:"Deewani",filePath:"songs/song8.mp3",coverPath:"coverPath/song-8.jpg"},
    {songName:"Pehli Baarish Mein",filePath:"songs/song9.mp3",coverPath:"coverPath/song-9.jpg"}   
]
songList.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
})
palyBtn.addEventListener('click',() =>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        palyBtn.classList.remove("fa-play-circle");
        palyBtn.classList.add("fa-pause-circle");
    }
    else{
        audioElement.pause();
        palyBtn.classList.remove("fa-pause-circle");
        palyBtn.classList.add("fa-play-circle");
    }
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
audioElement.addEventListener('timeupdate',()=>{
    progress=  parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
const makeAllPause=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.addEventListener('click',(e)=>{
            makeAllPause();
            index=parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src=`songs/song${index}.mp3`;
            audioElement.currentTime=0;
            audioElement.play();
            palyBtn.classList.remove("fa-play-circle");
            palyBtn.classList.add("fa-pause-circle");
        })    
})
document.getElementById('next').addEventListener('click',()=>{
    if(index>9){
        index=0;
    }
    else{
        index+=1;
    }
    audioElement.src=`songs/song${index}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    palyBtn.classList.remove("fa-play-circle");
    palyBtn.classList.add("fa-pause-circle");
    makeAllPause();
    makeAllPause();
    let r=document.getElementById(`${index}`);
    r.classList.remove('fa-play-circle');
    r.classList.add('fa-pause-circle');
})
document.getElementById('prev').addEventListener('click',()=>{
    if(index<0){
        index=0;
    }
    else{
        index-=1;
    }
    audioElement.src=`songs/song${index}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    palyBtn.classList.remove("fa-play-circle");
    palyBtn.classList.add("fa-pause-circle");
    makeAllPause();
    let t=document.getElementById(`${index}`);
    t.classList.remove('fa-play-circle');
    t.classList.add('fa-pause-circle');
})



