let cards = document.querySelectorAll(".card");
cards.forEach(card => {
    let playButton = card.querySelector(".playButton");
    card.addEventListener("mouseenter", () => {
        playButton.style.opacity = "1";
        playButton.style.top = "145px";
    });
    card.addEventListener("mouseleave", () => {
        playButton.style.opacity = "0";
        playButton.style.top = "160px";
    });
});

async function getSong()
{
    let a=await fetch("http://127.0.0.1:3000/project/songs/");
    let response =await a.text();
    let div=document.createElement("div")
    div.innerHTML=response;
    let as=div.getElementsByTagName("a");
    let songs=[];
    for (const ele of as) {
        if(ele.href.endsWith(".mp3"))
        {
            songs.push(ele.href);
        }
    }
    return songs;
}
let songs;
let startingContent;



async function main()
{
    songs=await getSong();
    console.log(songs);
    
    
    let niche=document.querySelector(".niche")
    let songUL=niche.querySelector(".songs").getElementsByTagName("ul")[0];
    
    

    for (let song of songs)
    {
        // console.log(song.split("/songs/")[1]);
        
        songUL.innerHTML=songUL.innerHTML+`<li class="flex alignItem">
                                                <img src="images/music.svg" alt="">
                                                <div class="musicDetail flex column ">
                                                    <div class="musicName">${song.split("/songs/")[1]}</div>
                                                    <div class="singer">singer</div>
                                                </div>
                                                <div class="playBtn">
                                                    <img src="images/play.svg" alt="">
                                                </div>   
                                            </li>`;
    }
    let songsul = document.querySelector(".songs").querySelector("ul");
    let allMusicCards = songsul.querySelectorAll("li");

    allMusicCards.forEach(musicCard => {
        let musicname=musicCard.querySelector(".musicName")
        musicCard.addEventListener("mouseover", () => {
            musicCard.style.backgroundColor = "rgb(43, 43, 43)";
            musicname.style.color = "#fff";
            musicCard.style.cursor = "pointer";
        });
        musicCard.addEventListener("mouseleave", () => {
            musicname.style.color = "";
            musicCard.style.backgroundColor = "black";
            musicCard.style.color = "";
        });
    });


    allMusicCards.forEach(musicCard=>{
        let playBtn=musicCard.querySelector(".playBtn");
        console.log(playBtn);
        let playBtnImg=playBtn.querySelector("img")
        let clickOnPlayBtn=false;
        let audio;
        startingContent=songs[0].split("/songs/")[0];
        playBtn.addEventListener("click",()=>{
            let musicName=musicCard.querySelector(".musicName").innerHTML;
            console.log(musicName);
            
            if(!clickOnPlayBtn)
            {
                console.log('click');

                audio = new Audio(`${startingContent+/songs/+musicName}`);
                audio.play();
                clickOnPlayBtn=true;
                playBtnImg.src="images/pause.svg";
                
            }
            else
            {
                console.log('click');
                clickOnPlayBtn=false;
                playBtnImg.src="images/play.svg";
                audio.pause();
            }

        })
    })

}
main();




// footer

let prev=document.querySelector(".prev");
let clickOnPrev=false;


let play=document.querySelector(".play");
let clickOnPlay=false;
let audio;
let playImg=play.querySelector("img");

play.addEventListener("click",()=>{
    if(clickOnPlay==false)
    {
        console.log('click');
        audio = new Audio(songs[0]);
        audio.play();
        clickOnPlay=true;
        playImg.src="images/pause.svg";

        audio.addEventListener("loadeddata", () => {
        let duration = audio.duration;
        console.log(duration);
        });
    }
    else if(clickOnPlay==true)
    {
        console.log('click');
        audio.pause();
        clickOnPlay=false;
        playImg.src="images/play.svg";
    }
})
