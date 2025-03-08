
const songs = [
    { URL: 'songs/KhudaBhi.mp3', title: 'Khuda Bhi', artist: 'Mohit Chauhan', image: "./assets/khudabhi.png" },
    { URL: 'songs/Pachtaoge.mp3', title: 'Pachtaoge', artist: 'Arijit, B Praak', image: "./assets/pachtaoge.png" },
    { URL: 'songs/RangLageya.mp3', title: 'Rang Lageya', artist: 'Mohit Chauhan', image: "./assets/ranglageya.png" },
    { URL: 'songs/TumHiHo.mp3', title: 'Tum Hi Ho', artist: 'Arijit Singh', image: "./assets/tumhiho.png" },
    { URL: 'songs/apnabanale.mp3', title: 'Apna Bana Le', artist: 'Arijit Singh', image: "./assets/apnabanale.jpg" },
    { URL: 'songs/arjanvalley.mp3', title: 'Arjan Vailly', artist: 'Bhupinder Babbal', image: "./assets/arjanvalley.jpg" },
    { URL: 'songs/dil.mp3', title: 'Dil(Ek-Villan Returns)', artist: 'Kaushik, Raghav Chaitanya', image: "./assets/dil.png" },



    { URL: 'songs/aadat.mp3', title: 'Aadat', artist: 'Atif Aslam', image: './assets/aadat.jpg' },
    { URL: 'songs/ajdinchadeya.mp3', title: 'Aj Din Chadeya', artist: 'Rahat Fateh Ali Khan', image: './assets/ajdinchadeya.jpg' },
    { URL: 'songs/bolnahalkehalke.mp3', title: 'Bol Na Halke Halke', artist: 'Rahat Fateh Ali Khan', image: './assets/bolnahalkehalke.jpg' },
    { URL: 'songs/channave.mp3', title: 'Channa Ve', artist: 'Akhil Sachdeva', image: './assets/channave.jpg' },
    { URL: 'songs/darasal.mp3', title: 'Darasal', artist: 'Atif Aslam', image: './assets/darasal.jpg' },
    { URL: 'songs/dekhtedekhte.mp3', title: 'Dekhte Dekhte', artist: 'Atif Aslam', image: './assets/dekhtedekhte.jpg' },
    { URL: 'songs/dildiyagallan.mp3', title: 'Dil Diya Gallan', artist: 'Atif Aslam', image: './assets/dildiyagallan.jpg' },
    { URL: 'songs/dilmerinasune.mp3', title: 'Dil Meri Na Sune', artist: 'Atif Aslam', image: './assets/dilmerinasune.jpg' },
    { URL: 'songs/diltobachaha.mp3', title: 'Dil To Bacha Ha', artist: 'Atif Aslam', image: './assets/diltobachaha.jpg' },
    { URL: 'songs/humsafar.mp3', title: 'Humsafar', artist: 'Akhil Sachdeva', image: './assets/humsafar.jpg' },


    { URL: 'songs/dilokidoriyan.mp3', title: 'Dilo Ki Doriyaan', artist: 'Vishal Mishra', image: "./assets/dilokidoriyan1.webp" },
    { URL: 'songs/doobey.mp3', title: 'Doobey', artist: 'Lothika Jha', image: "./assets/gehraiyaan.png" },
    { URL: 'songs/galiyaan.mp3', title: 'Galiyaan Returns', artist: 'Ankit Tiwari', image: "./assets/galiyaan.png" },
    { URL: 'songs/humnasheme.mp3', title: 'Hum Nashe Me', artist: 'Arijit-Singh', image: "./assets/humnashemein.png" },
    { URL: 'songs/mujhefirorkyachaiye.mp3', title: 'Phir Or Kya Chaiye', artist: 'Arijit, Sachin-Jigar', image: "./assets/phirorkyachaiye.webp" },
    { URL: 'songs/ramsiyaram.mp3', title: 'Ram Siya Ram', artist: 'Ajay-Atul, Sachet-Tandon', image: "./assets/ramsiyaram.webp" },
    { URL: 'songs/terehawale.mp3', title: 'Tere Hawale', artist: 'Arijit-Singh', image: "./assets/terehawale.jpg" },


    { URL: 'songs/jeenajeena.mp3', title: 'Jeena Jeena', artist: 'Atif Aslam', image: './assets/jeenajeena.jpg' },
    { URL: 'songs/kesariya.mp3', title: 'Kesariya', artist: 'Arijit Singh', image: './assets/kesariya.jpg' },
    { URL: 'songs/malangsajna.mp3', title: 'Malang Sajna', artist: 'Parampara Thakur, Sachet Tandon', image: './assets/malangsajna.webp' },
    { URL: 'songs/matargashti.mp3', title: 'Matargashti', artist: 'Mohit Chauhan, A.R Rahman', image: './assets/matargashti.jpg' },
    { URL: 'songs/naadanparinde.mp3', title: 'Naadan Parinde', artist: 'Mohit Chauhan', image: './assets/nadaanparinde.jpg' },
    { URL: 'songs/orepiya.mp3', title: 'O Re Piya', artist: 'Rahat Fateh Ali Khan', image: './assets/orepiya.jpg' },
    { URL: 'songs/paniyosa.mp3', title: 'Paaniyo Sa', artist: 'Atif Aslam', image: './assets/paniyosa.jpg' },
    { URL: 'songs/peeloon.mp3', title: 'Pee Loon', artist: 'Mohit Chauhan', image: './assets/peeloon.jpg' },


    { URL: 'songs/terepyarme.mp3', title: 'Tere Pyaar Mein', artist: 'Arijit-Singh', image: "./assets/terepyarme.jpg" },
    { URL: 'songs/tumhekitnapyaarkrte.mp3', title: 'Tumhe Kitna Pyaar Karte', artist: 'Mithoon, Arijit-Singh', image: "./assets/tumhekitnapyarkarte.jpg" },
    { URL: 'songs/tumkyamile.mp3', title: 'Tum Kya Mile', artist: 'Arijit-Singh, Shreya Ghoshal', image: "./assets/tumkyamile.webp" },
    { URL: 'songs/pasoorinu.mp3', title: 'Pasoori Nu', artist: 'Arijit-Singh, Shreya Ghoshal', image: "./assets/pasoorinu.jpg" },
    { URL: 'songs/sariduniyajaladenge.mp3', title: 'Saari Duniya Jalaa Denge', artist: 'B Praak', image: "./assets/arjanvalley.jpg" },
    { URL: 'songs/thodijagah.mp3', title: 'Thodi Jagah', artist: 'Arijit-Singh, Tanishk Bagchi', image: "./assets/marjaavaan.jpg" },
    { URL: 'songs/sanamre.mp3', title: 'Sanam Re', artist: 'Mithoon, Anirudh Bhola', image: "./assets/terepyar.jpg" },



    { URL: 'songs/phirseuddchala.mp3', title: 'Phir Se Udd Chala', artist: 'Mohit Chauhan', image: './assets/nadaanparinde.jpg' },
    { URL: 'songs/saiyaara.mp3', title: 'Saiyaara', artist: 'Mohit Chauhan', image: './assets/saiyaara.jpg' },
    { URL: 'songs/sajdaa.mp3', title: 'Sajdaa', artist: 'Rahat Fateh Ali Khan', image: './assets/sajdaa.jpg' },
    { URL: 'songs/sanuekpalchain.mp3', title: 'Sanu Ek Pal Chain', artist: 'Rahat Fateh Ali Khan', image: './assets/sanuekpalchain.jpg' },
    { URL: 'songs/terabanjauga.mp3', title: 'Tera Ban Jauga', artist: 'Akhil Sachdeva', image: './assets/terabanjauga.jpg' },
    { URL: 'songs/terebin.mp3', title: 'Tere Bin', artist: 'Rahat Fateh Ali Khan', image: './assets/terebin.jpg' },
    { URL: 'songs/teresangyaara.mp3', title: 'Tere Sang Yaara', artist: 'Atif Aslam', image: './assets/teresangyaara.jpg' },
    { URL: 'songs/terikhairmanga.mp3', title: 'PTeri Khair Manga', artist: 'Rahat Fateh Ali Khan', image: './assets/terikhairmanga.jpg' },



    { URL: 'songs/tuchaiye.mp3', title: 'Tu Chahiye', artist: 'Atif Aslam', image: "./assets/tuchaiye.jpg" },
    { URL: 'songs/tuhirab.mp3', title: 'Tu Hi Rab', artist: 'Rahat Fateh Ali Khan', image: "./assets/tuhirab.jpg" },
    { URL: 'songs/tujaanena.mp3', title: 'Tu Jaane Na', artist: 'Atif Aslam', image: "./assets/tujaanena.jpg" },
    { URL: 'songs/tujhkojopaaya.mp3', title: 'Tujhko Jo Paya', artist: 'Mohit Chauhan', image: "./assets/tujhkojopaaya.jpg" },
    { URL: 'songs/tumsehi.mp3', title: 'Tum Se Hi', artist: 'Mohit Chauhan', image: "./assets/tumsehi.jpg" },
    { URL: 'songs/tunejonakaha.mp3', title: 'Tune Jo Na Kaha', artist: 'Mohit Chauhan', image: "./assets/tunejonakaha.jpg" },
    { URL: 'songs/yehdooriyan.mp3', title: 'Dooriyan', artist: 'Mohit Chauhan', image: "./assets/dooriyaan.jpg" },



    { URL: 'songs/tumjoaaye.mp3', title: 'Tum Jo Aye Zindagi', artist: 'Rahat Fateh Ali Khan', image: './assets/tumjoayezindagi.jpg' },
    { URL: 'songs/tuhiyaarmera.mp3', title: 'Tu Hi Yaar Mera', artist: 'Arijit Singh', image: './assets/tuhiyaarmera.jpg' },
    { URL: 'songs/rokenaruke.mp3', title: 'Roke Na Ruke Naina', artist: 'Atif Aslam', image: './assets/humsafar.jpg' },
    { URL: 'songs/pal.mp3', title: 'Pal', artist: 'Arijit Singh, Shreya Ghoshal', image: './assets/pal.jpg' },
    { URL: 'songs/janamjanam.mp3', title: 'Janam Janam', artist: 'Arijit Singh', image: './assets/janamjanam.jpg' },
    { URL: 'songs/terebinaa.mp3', title: 'Tere Bina', artist: 'Arijit Singh', image: './assets/terebina.jpg' },
    { URL: 'songs/terayaarhoonmai.mp3', title: 'Tera Yaar Hoon Ma', artist: 'Arijit Singh', image: './assets/terayaarhoonmain.jpg' },
    { URL: 'songs/terafitoor.mp3', title: 'Tera Fitoor', artist: 'Arijit Singh', image: './assets/terafitoor.jpg' },



    { URL: 'songs/sochnasake.mp3', title: 'Soch Na Sake', artist: 'Arijit Singh', image: "./assets/sochnasake.jpg" },
    { URL: 'songs/saware.mp3', title: 'Saware', artist: 'Arijit Singh', image: "./assets/saware.jpg" },
    { URL: 'songs/sajdaa.mp3', title: 'Sajdaa', artist: '', image: "./assets/sajdaa.jpg" },
    { URL: 'songs/rehnatupal.mp3', title: 'Pal Pal Dil Ke Paas', artist: 'Arijit Singh', image: "./assets/palpaldilkepaas.jpg" },
    { URL: 'songs/palbhar.mp3', title: 'Pal Bhar', artist: 'Arijit Singh', image: "./assets/palbhar.jpg" },
    { URL: 'songs/khairiyat.mp3', title: 'Khairiyat', artist: 'Arijit Singh', image: "./assets/khairiyat.jpg" },
    { URL: 'songs/lambiyaansi.mp3', title: 'Lambiyaan Si Judaiyaan', artist: 'Arijit Singh', image: "./assets/ikvaariaa.jpg" },



    { URL: 'songs/ikvaariaa.mp3', title: 'Ik Vaari Aa', artist: 'Arijit Singh', image: './assets/ikvaariaa.jpg' },
    { URL: 'songs/hawayein.mp3', title: 'Hawayein', artist: 'Arijit Singh', image: './assets/hawayein.jpg' },
    { URL: 'songs/hamariaadhuri.mp3', title: 'Hamari Aadhuri Kahani', artist: 'Arijit Singh', image: './assets/hamariadhuri.jpg' },
    { URL: 'songs/ghungroo.mp3', title: 'Ghungroo', artist: 'Arijit Singh', image: './assets/ghungroo.jpg' },
    { URL: 'songs/dilnajaaneya.mp3', title: 'Dil Na jaaneya', artist: 'Rochak Kohli', image: './assets/dilnajaaneya.jpg' },
    { URL: 'songs/dekhahazarodafa.mp3', title: 'Dekha Hazaro Dafa', artist: 'Atif Aslam', image: './assets/dekhahazarodafa.jpg' },
    { URL: 'songs/dilmerinasune.mp3', title: 'Dil Meri Na Sune', artist: 'Atif Aslam', image: './assets/dilmerinasune.jpg' },
    { URL: 'songs/bekhayali.mp3', title: 'Bekhayali', artist: 'Sachet Tandon', image: './assets/tujhekitnachanelage.jpg' },
    //{ URL: 'songs/.mp3', title: '', artist: '', image: "./assets/.jpg" },
];





const home = document.getElementById("home");
const input = document.querySelector(".input1");
const searchBox = document.getElementById("searchBox");
const searchIcon = document.getElementById("searchIcon");


searchBox.addEventListener("keypress", (evt) => {
    if (evt.key === "Enter") {
        evt.preventDefault();

        // const searchTerm = searchBox.value.toLowerCase();

        // const results = songs.filter(song => {
        //     song.title.toLowerCase().includes(searchTerm) || song.artist.toLowerCase().includes(searchTerm);
        //     return;
        // });   
        searchBox.value = '';

        evt.preventDefault();
        searchBox.style.display = 'none';
        searchIcon.style.display = "block";
    }
});

//const cardName = document.querySelectorAll(".card-title");

// searchBox.onkeyup = function () {
//     let results = [];
//     let input = searchBox.value;
//     if (input.length) {
//         results = songs.filter(song => {
//             return song.title.toLowerCase().includes(input.toLowerCase()) || song.artist.toLowerCase().includes(input.toLowerCase());
//         });
//         console.log(results[0].title);

//     }
//     const allSongCards = document.querySelectorAll('.card');
//     allSongCards.forEach(card => {
//         // Get the song title from the 'card-title' attribute
//         let songTitleElement = card.querySelector('.card-title');
//         let songTitle = songTitleElement ? songTitleElement.textContent.toLowerCase() : '';

//         if (songTitle) {
//             songTitle = songTitle.toLowerCase();

//             // If the song title is in the results array, show the song card; otherwise, hide it
//             if (results.some(result => result.title.toLowerCase() === songTitle)) {
//                 card.style.display = 'block';
//             } else {
//                 card.style.display = 'none';
//             }
//         }
//     });

// }

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
searchBox.onkeyup = function () {
    let input = searchBox.value;
    const allSongCards = document.querySelectorAll('.card');

    if (input.length) {
        let results = songs.filter(song => {
            return song.title.toLowerCase().includes(input.toLowerCase()) || song.artist.toLowerCase().includes(input.toLowerCase());
        });

        allSongCards.forEach(card => {
            // Get the song title from the 'card-title' element
            let songTitleElement = card.querySelector('.card-title');
            let songTitle = songTitleElement ? songTitleElement.textContent.toLowerCase() : '';

            // If the song title is in the results array, show the song card; otherwise, hide it
            if (results.some(result => result.title.toLowerCase() === songTitle)) {
                card.style.display = 'block';
                show1.style.display = "none";
                show2.style.display = "none";
                show3.style.display = "none";
                show4.style.display = "none";
                show5.style.display = "none";
                heading1.style.display = "none";
                heading2.style.display = "none";
                heading3.style.display = "none";
                heading4.style.display = "none";
                heading5.style.display = "none";

            } else {
                card.style.display = 'none';
            }



        });
    } else {
        // If there's no search input, show all song cards
        allSongCards.forEach(card => {
            card.style.display = 'block';
        });
    }
}







searchIcon.addEventListener("click", (evt) => {
    console.log("searchIcon clicked");
    searchBox.style.display = 'block';
    searchBox.style.marginLeft = '-10px';
    searchIcon.style.display = "none";
    searchBox.focus();
});


// function display() {
//     const allSongs = document.querySelectorAll('.card');
//     allSongs.forEach(songElement => {
//         songElement.style.display = 'none';
//     });
//     results.forEach(songs => {
//         const songElement = document.querySelector(`[data-src="${songs.URL}"]`);
//         songElement.style.display = 'block';
//     });
// }




let currentAudio = null;

const audios = new Map();
const playButtons = document.querySelectorAll(".apb");
const progressBar = document.getElementById("progress-bar");
const playbackTime = document.getElementById("curr-timer");
const totalTime = document.getElementById("tot-timer");
const songName = document.getElementById("song-name");
const singerName = document.getElementById("artist");
const songImage = document.getElementById("album-image");
const currPlay = document.getElementById("curr-play");
const PlayPauseButton = document.querySelector(".play");
const nextButton = document.querySelector(".nextButton");
const prevButton = document.querySelector(".prevButton");

// currPlay.addEventListener("click",()=>{
//     if (currentAudio.paused) {
//         currentAudio.play();

//     } else {
//         currentAudio.pause();
//     }
// });


currPlay.addEventListener("click", () => {
    if (currentAudio.paused) {
        currentAudio.play();
        PlayPauseButton.src = "./assets/pause_button.png";
    } else {
        currentAudio.pause();
        PlayPauseButton.src = "./assets/player_icon3.png";
    }
});






function playSong(index) {
    // If a song is currently playing, pause it
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Create a new Audio object for the song at the given index
    currentAudio = new Audio(songs[index].URL);

    // Play the new song
    currentAudio.play();
}



let currentIndex = 0;

playButtons.forEach((button, index) => {
    const src = button.getAttribute('data-src');
    button.audio = new Audio(src);
    button.addEventListener("click", (event) => {
        event.preventDefault();
        let Song;
        if (shuffled) {
            Song = shuffledSongs[index];
        } else {
            Song = songs[index];
        }

        //const song = songs[index];
        const song = songs.find(song => song.URL === src);
        songName.innerHTML = song.title;
        singerName.innerHTML = song.artist;
        songImage.src = song.image;


        if (currentAudio && currentAudio != button.audio) {
            currentAudio.pause();
        }
        currentAudio = button.audio;
        if (currentAudio.paused) {
            currentAudio.play();
            //fadeIn(currentAudio, 2000);
            currentAudio.currentTime = 0;

        } else {
            currentAudio.pause();
        }



        currentAudio.addEventListener("ended", playNextSong);





        currentAudio.addEventListener("timeupdate", () => {
            const progress = currentAudio.currentTime / currentAudio.duration;

            progressBar.value = progress;
            //playbackTime.innerHTML = parseFloat((currentAudio.currentTime )*0.01).toFixed(2) ;
            let minutes = Math.floor(currentAudio.currentTime / 60);
            let seconds = Math.floor(currentAudio.currentTime % 60);

            if (seconds < 10) {
                seconds = '0' + seconds;
            }

            playbackTime.innerHTML = minutes + ':' + seconds;

            //  totalTime.innerHTML = parseFloat(currentAudio.duration/60).toFixed(2);




            // Calculatation of minutes and seconds from duration
            let totalMinutes = Math.floor(currentAudio.duration / 60);
            let totalSeconds = Math.floor(currentAudio.duration % 60);

            if (totalSeconds < 10) {
                totalSeconds = '0' + totalSeconds;
            }

            totalTime.innerHTML = totalMinutes + ':' + totalSeconds;

        });


        // to skip the song in between --->>
        progressBar.addEventListener("input", () => {
            currentAudio.currentTime = parseFloat(progressBar.value) * currentAudio.duration;
        });




        currentAudio.addEventListener('play', () => {
            PlayPauseButton.src = "./assets/pause_button.png";
        });

        currentAudio.addEventListener('pause', () => {
            PlayPauseButton.src = "./assets/player_icon3.png";
        });
    });

});








function playNextSong() {
    currentIndex++;
    let nextSong;
    if (shuffled) {
        if (currentIndex >= shuffledSongs.length) {
            currentIndex = 0;
        }
        nextSong = shuffledSongs[currentIndex];
    } else {
        if (currentIndex >= songs.length) {
            currentIndex = 0;
        }
        nextSong = songs[currentIndex];
    }

    if (currentAudio) {
        currentAudio.removeEventListener("ended", playNextSong);
        currentAudio.removeEventListener("timeupdate", updateProgressBar);
    }
    currentAudio = new Audio(nextSong.URL);
    currentAudio.play();
    currentAudio.addEventListener("ended", playNextSong);
    currentAudio.addEventListener("timeupdate", updateProgressBar);

    songName.innerHTML = nextSong.title;
    singerName.innerHTML = nextSong.artist;
    songImage.src = nextSong.image;

    currPlay.classList.remove('play');
    currPlay.classList.add('pause');

    currentAudio.addEventListener("playing", function () {
        currPlay.classList.remove('play');
        currPlay.classList.add('pause');
        PlayPauseButton.src = "./assets/pause_button.png";
    });

    currentAudio.addEventListener("pause", function () {
        currPlay.classList.remove('pause');
        currPlay.classList.add('play');
        PlayPauseButton.src = "./assets/player_icon3.png";
    });
    playbackTime.innerHTML = '0:00';
}


function updateProgressBar() {
    if (currentAudio.duration) {
        const progress = (currentAudio.currentTime / currentAudio.duration);
        progressBar.value = progress;
        const minutes = Math.floor(currentAudio.currentTime / 60);
        const seconds = Math.floor(currentAudio.currentTime % 60);
        playbackTime.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;


        const totalMinutes = Math.floor(currentAudio.duration / 60);
        const totalSeconds = Math.floor(currentAudio.duration % 60);
        totalTime.innerHTML = `${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`;

    }
}








// --------------volume bar------------- //


const volumeBar = document.getElementById("volume-bar");

volumeBar.addEventListener("input", () => {
    const volume = volumeBar.value / 100;
    currentAudio.volume = volume;
});



const loop = document.querySelector(".loop");

const shuffle = document.querySelector(".shuffle");

loop.addEventListener("click", () => {
    if (currentAudio.loop) {
        currentAudio.loop = false;
        loop.style.opacity = "0.5";
    } else {
        currentAudio.loop = true;
        loop.style.opacity = "1";
    }
});

let shuffled = false;
let shuffledSongs = [...songs];

shuffle.addEventListener("click", () => {
    shuffled = !shuffled;
    if (shuffled) {
        // Shuffle the songs
        for (let i = shuffledSongs.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [shuffledSongs[i], shuffledSongs[j]] = [shuffledSongs[j], shuffledSongs[i]];
        }
        shuffle.style.opacity = "1";
    } else {
        shuffle.style.opacity = "0.5";
    }
});







let currentSongIndex = 0;
const audio = new Audio();



function updateSongDetails(songs) {
    songName.textContent = songs.title;
    singerName.textContent = songs.artist;
    songImage.src = songs.image;
}



nextButton.addEventListener('click', () => { 
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    //currentAudio = new Audio(songs[currentSongIndex].URL);

    currentSongIndex = (currentSongIndex + 1 ) % songs.length;
    // currentSongIndex++;
    updateSongDetails(songs[currentSongIndex]);

    currentAudio = new Audio(songs[currentSongIndex].URL);
    currentAudio.play();

    




    currentAudio.addEventListener("timeupdate", () => {
        const progress = currentAudio.currentTime / currentAudio.duration;

        progressBar.value = progress;
        //playbackTime.innerHTML = parseFloat((currentAudio.currentTime )*0.01).toFixed(2) ;
        let minutes = Math.floor(currentAudio.currentTime / 60);
        let seconds = Math.floor(currentAudio.currentTime % 60);

        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        playbackTime.innerHTML = minutes + ':' + seconds;

        //  totalTime.innerHTML = parseFloat(currentAudio.duration/60).toFixed(2);




        // Calculate minutes and seconds from duration
        let totalMinutes = Math.floor(currentAudio.duration / 60);
        let totalSeconds = Math.floor(currentAudio.duration % 60);

        if (totalSeconds < 10) {
            totalSeconds = '0' + totalSeconds;
        }

        totalTime.innerHTML = totalMinutes + ':' + totalSeconds;

    });


    // to skip the song in between --->>
    progressBar.addEventListener("input", () => {
        currentAudio.currentTime = parseFloat(progressBar.value) * currentAudio.duration;
    });



    currentAudio.addEventListener('play', () => {
        PlayPauseButton.src = "./assets/pause_button.png";
    });


    currentAudio.addEventListener('pause', () => {
        PlayPauseButton.src = "./assets/player_icon3.png";
    });


});



prevButton.addEventListener('click', () => {

    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Get the next song index
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;

    updateSongDetails(songs[currentSongIndex]);

    currentAudio = new Audio(songs[currentSongIndex].URL);
    currentAudio.play();



    currentAudio.addEventListener("timeupdate", () => {
        const progress = currentAudio.currentTime / currentAudio.duration;

        progressBar.value = progress;
        //playbackTime.innerHTML = parseFloat((currentAudio.currentTime )*0.01).toFixed(2) ;
        let minutes = Math.floor(currentAudio.currentTime / 60);
        let seconds = Math.floor(currentAudio.currentTime % 60);

        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        playbackTime.innerHTML = minutes + ':' + seconds;

        //  totalTime.innerHTML = parseFloat(currentAudio.duration/60).toFixed(2);




        // Calculate minutes and seconds from duration
        let totalMinutes = Math.floor(currentAudio.duration / 60);
        let totalSeconds = Math.floor(currentAudio.duration % 60);

        if (totalSeconds < 10) {
            totalSeconds = '0' + totalSeconds;
        }

        totalTime.innerHTML = totalMinutes + ':' + totalSeconds;

    });

    progressBar.addEventListener("input", () => {
        currentAudio.currentTime = parseFloat(progressBar.value) * currentAudio.duration;
    });


    currentAudio.addEventListener('play', () => {
        PlayPauseButton.src = "./assets/pause_button.png";
    });

    currentAudio.addEventListener('pause', () => {
        PlayPauseButton.src = "./assets/player_icon3.png";
    });
});






const card1 = document.querySelectorAll(".card1");
const card2 = document.querySelectorAll(".card2");
const card3 = document.querySelectorAll(".card3");
const card4 = document.querySelectorAll(".card4");
const card5 = document.querySelectorAll(".card5");

const show1 = document.querySelector(".sa1");
const show2 = document.querySelector(".sa2");
const show3 = document.querySelector(".sa3");
const show4 = document.querySelector(".sa4");
const show5 = document.querySelector(".sa5");






























// songShow1 = [
//     { id: 'songs/aadat.mp3', title: 'Aadat', artist: 'Artist 1', image: './assets/aadat.jpg' },
//     { id: 'songs/ajdinchadeya.mp3', title: 'Aj Din Chadeya', artist: 'Artist 1', image: './assets/ajdinchadeya.jpg' },
//     { id: 'songs/bolnahalkehalke.mp3', title: 'Bol Na Halke Halke', artist: 'Artist 1', image: './assets/bolnahalkehalke.jpg' },
//     { id: 'songs/channave.mp3', title: 'Channa Ve', artist: 'Artist 1', image: './assets/channave.jpg' },
//     { id: 'songs/darasal.mp3', title: 'Darasal', artist: 'Artist 1', image: './assets/darasal.jpg' },
//     { id: 'songs/dekhtedekhte.mp3', title: 'Dekhte Dekhte', artist: 'Artist 1', image: './assets/dekhtedekhte.jpg' },
//     { id: 'songs/dildiyagallan.mp3', title: 'Dil Diya Gallan', artist: 'Artist 1', image: './assets/dildiyagallan.jpg' },
//     { id: 'songs/dilmerinasune.mp3', title: 'Dil Meri Na Sune', artist: 'Artist 1', image: './assets/dilmerinasune.jpg' },
//     { id: 'songs/diltobachaha.mp3', title: 'Dil To Bacha Ha', artist: 'Artist 1', image: './assets/diltobachaha.jpg' },
//     { id: 'songs/humsafar.mp3', title: 'Humsafar', artist: 'Artist 1', image: './assets/humsafar.jpg' },
// ];


show1.addEventListener("click", () => {
    const isShown = show1.textContent === "Show Less";

    card1.forEach(card => {
        if (isShown) {
            card.style.display = "none";
        } else if (card.style.display === "none") {
            card.style.display = "inline-block";
        }
    });


    show1.textContent = isShown ? "Show All" : "Show Less";
    playButtons.forEach((button, index) => {
        const src = button.getAttribute('data-src');
        button.audio = new Audio(src);
        button.addEventListener("click", (event) => {
            event.preventDefault();

            const song = songs[index];
            if (songs.innerHTML === song[index].title) {
                songName.innerHTML = song.title;
            }

            singerName.innerHTML = song.artist;
            songImage.src = song.image;


            currentAudio.play();

            if (currentAudio && currentAudio != button.audio) {
                currentAudio.pause();
            }
            currentAudio = button.audio;
            if (currentAudio.paused) {
                currentAudio.play();
                //fadeIn(currentAudio, 2000);

            } else {
                currentAudio.pause();
            }
            currentAudio.play();

            currentAudio.addEventListener("timeupdate", () => {
                const progress = currentAudio.currentTime / currentAudio.duration;

                progressBar.value = progress;
                //playbackTime.innerHTML = parseFloat((currentAudio.currentTime )*0.01).toFixed(2) ;
                let minutes = Math.floor(currentAudio.currentTime / 60);
                let seconds = Math.floor(currentAudio.currentTime % 60);

                if (seconds < 10) {
                    seconds = '0' + seconds;
                }

                playbackTime.innerHTML = minutes + ':' + seconds;

                //  totalTime.innerHTML = parseFloat(currentAudio.duration/60).toFixed(2);




                // Calculate minutes and seconds from duration
                let totalMinutes = Math.floor(currentAudio.duration / 60);
                let totalSeconds = Math.floor(currentAudio.duration % 60);

                if (totalSeconds < 10) {
                    totalSeconds = '0' + totalSeconds;
                }

                totalTime.innerHTML = totalMinutes + ':' + totalSeconds;

            });


            // to skip the song in between --->>
            progressBar.addEventListener("input", () => {
                currentAudio.currentTime = parseFloat(progressBar.value) * currentAudio.duration;
            });




            currentAudio.addEventListener('play', () => {
                PlayPauseButton.src = "./assets/pause_button.png";
            });

            // Change the PlayPauseButton to the play icon when the song is paused
            currentAudio.addEventListener('pause', () => {
                PlayPauseButton.src = "./assets/player_icon3.png";
            });

        });

    });
});








show2.addEventListener("click", () => {
    const isShown = show2.textContent === "Show Less";

    card2.forEach(card => {
        if (isShown) {
            card.style.display = "none";
        } else if (card.style.display === "none") {
            card.style.display = "inline-block";
        }
    });


    show2.textContent = isShown ? "Show All" : "Show Less";
    playButtons.forEach((button, index) => {
        const src = button.getAttribute('data-src');
        button.audio = new Audio(src);
        button.addEventListener("click", (event) => {
            event.preventDefault();

            const song = songs[index];
            if (songs.innerHTML === song[index].title) {
                songName.innerHTML = song.title;
            }

            singerName.innerHTML = song.artist;
            songImage.src = song.image;


            currentAudio.play();

            if (currentAudio && currentAudio != button.audio) {
                currentAudio.pause();
            }
            currentAudio = button.audio;
            if (currentAudio.paused) {
                currentAudio.play();
                //fadeIn(currentAudio, 2000);

            } else {
                currentAudio.pause();
            }
            currentAudio.play();

            currentAudio.addEventListener("timeupdate", () => {
                const progress = currentAudio.currentTime / currentAudio.duration;

                progressBar.value = progress;
                //playbackTime.innerHTML = parseFloat((currentAudio.currentTime )*0.01).toFixed(2) ;
                let minutes = Math.floor(currentAudio.currentTime / 60);
                let seconds = Math.floor(currentAudio.currentTime % 60);

                if (seconds < 10) {
                    seconds = '0' + seconds;
                }

                playbackTime.innerHTML = minutes + ':' + seconds;

                //  totalTime.innerHTML = parseFloat(currentAudio.duration/60).toFixed(2);




                // Calculate minutes and seconds from duration
                let totalMinutes = Math.floor(currentAudio.duration / 60);
                let totalSeconds = Math.floor(currentAudio.duration % 60);

                if (totalSeconds < 10) {
                    totalSeconds = '0' + totalSeconds;
                }

                totalTime.innerHTML = totalMinutes + ':' + totalSeconds;

            });


            // to skip the song in between --->>
            progressBar.addEventListener("input", () => {
                currentAudio.currentTime = parseFloat(progressBar.value) * currentAudio.duration;
            });




            currentAudio.addEventListener('play', () => {
                PlayPauseButton.src = "./assets/pause_button.png";
            });

            // Change the PlayPauseButton to the play icon when the song is paused
            currentAudio.addEventListener('pause', () => {
                PlayPauseButton.src = "./assets/player_icon3.png";
            });

        });

    });
});









show3.addEventListener("click", () => {
    const isShown = show3.textContent === "Show Less";

    card3.forEach(card => {
        if (isShown) {
            card.style.display = "none";
        } else if (card.style.display === "none") {
            card.style.display = "inline-block";
        }
    });


    show3.textContent = isShown ? "Show All" : "Show Less";
    playButtons.forEach((button, index) => {
        const src = button.getAttribute('data-src');
        button.audio = new Audio(src);
        button.addEventListener("click", (event) => {
            event.preventDefault();



            const song = songs[index];
            if (songs.innerHTML === song[index].title) {
                songName.innerHTML = song.title;
            }

            singerName.innerHTML = song.artist;
            songImage.src = song.image;


            currentAudio.play();

            if (currentAudio && currentAudio != button.audio) {
                currentAudio.pause();
            }
            currentAudio = button.audio;
            if (currentAudio.paused) {
                currentAudio.play();
                //fadeIn(currentAudio, 2000);

            } else {
                currentAudio.pause();
            }
            currentAudio.play();

            currentAudio.addEventListener("timeupdate", () => {
                const progress = currentAudio.currentTime / currentAudio.duration;

                progressBar.value = progress;
                //playbackTime.innerHTML = parseFloat((currentAudio.currentTime )*0.01).toFixed(2) ;
                let minutes = Math.floor(currentAudio.currentTime / 60);
                let seconds = Math.floor(currentAudio.currentTime % 60);

                if (seconds < 10) {
                    seconds = '0' + seconds;
                }

                playbackTime.innerHTML = minutes + ':' + seconds;

                //  totalTime.innerHTML = parseFloat(currentAudio.duration/60).toFixed(2);




                // Calculate minutes and seconds from duration
                let totalMinutes = Math.floor(currentAudio.duration / 60);
                let totalSeconds = Math.floor(currentAudio.duration % 60);

                if (totalSeconds < 10) {
                    totalSeconds = '0' + totalSeconds;
                }

                totalTime.innerHTML = totalMinutes + ':' + totalSeconds;

            });


            // to skip the song in between --->>
            progressBar.addEventListener("input", () => {
                currentAudio.currentTime = parseFloat(progressBar.value) * currentAudio.duration;
            });




            currentAudio.addEventListener('play', () => {
                PlayPauseButton.src = "./assets/pause_button.png";
            });

            // Change the PlayPauseButton to the play icon when the song is paused
            currentAudio.addEventListener('pause', () => {
                PlayPauseButton.src = "./assets/player_icon3.png";
            });

        });

    });
});
































// songShow4 = [
//     { id: 'songs/tumjoayezindagi.mp3', title: 'Tum Jo Aye Zindagi', artist: 'Artist 1', image: './assets/tumjoaaye.jpg' },
//     { id: 'songs/tuhiyaarmera.mp3', title: 'Tu Hi Yaar Mera', artist: 'Artist 1', image: './assets/tuhiyaarmera.jpg' },
//     { id: 'songs/tuhirab.mp3', title: 'Tu Hi Rab', artist: 'Artist 1', image: './assets/tuhirab.jpg' },
//     { id: 'songs/tuchaiye.mp3', title: 'Tu Chahiye', artist: 'Artist 1', image: './assets/tuchaiye.jpg' },
//     { id: 'songs/terikhairmanga.mp3', title: 'Teri Khair Mangda', artist: 'Artist 1', image: './assets/terikhairmanga.jpg' },
//     { id: 'songs/terebinaa.mp3', title: 'Tere Bina', artist: 'Artist 1', image: './assets/terebina.jpg' },
//     { id: 'songs/terayaarhoonmai.mp3', title: 'Tera Yaar Hoon Ma', artist: 'Artist 1', image: './assets/terayaarhoonmain.jpg' },
//     { id: 'songs/terafitoor.mp3', title: 'Tera Fitoor', artist: 'Artist 1', image: './assets/terafitoor.jpg' },
// ];

show4.addEventListener("click", () => {
    const isShown = show4.textContent === "Show Less";

    card4.forEach(card => {
        if (isShown) {
            card.style.display = "none";
        } else if (card.style.display === "none") {
            card.style.display = "inline-block";
        }
    });


    show4.textContent = isShown ? "Show All" : "Show Less";
    playButtons.forEach((button, index) => {
        const src = button.getAttribute('data-src');
        button.audio = new Audio(src);
        button.addEventListener("click", (event) => {
            event.preventDefault();



            const song = songs[index];
            if (songs.innerHTML === song[index].title) {
                songName.innerHTML = song.title;
            }

            singerName.innerHTML = song.artist;
            songImage.src = song.image;


            currentAudio.play();

            if (currentAudio && currentAudio != button.audio) {
                currentAudio.pause();
            }
            currentAudio = button.audio;
            if (currentAudio.paused) {
                currentAudio.play();
                //fadeIn(currentAudio, 2000);

            } else {
                currentAudio.pause();
            }
            currentAudio.play();

            currentAudio.addEventListener("timeupdate", () => {
                const progress = currentAudio.currentTime / currentAudio.duration;

                progressBar.value = progress;
                //playbackTime.innerHTML = parseFloat((currentAudio.currentTime )*0.01).toFixed(2) ;
                let minutes = Math.floor(currentAudio.currentTime / 60);
                let seconds = Math.floor(currentAudio.currentTime % 60);

                if (seconds < 10) {
                    seconds = '0' + seconds;
                }

                playbackTime.innerHTML = minutes + ':' + seconds;

                //  totalTime.innerHTML = parseFloat(currentAudio.duration/60).toFixed(2);




                // Calculate minutes and seconds from duration
                let totalMinutes = Math.floor(currentAudio.duration / 60);
                let totalSeconds = Math.floor(currentAudio.duration % 60);

                if (totalSeconds < 10) {
                    totalSeconds = '0' + totalSeconds;
                }

                totalTime.innerHTML = totalMinutes + ':' + totalSeconds;

            });


            // to skip the song in between --->>
            progressBar.addEventListener("input", () => {
                currentAudio.currentTime = parseFloat(progressBar.value) * currentAudio.duration;
            });




            currentAudio.addEventListener('play', () => {
                PlayPauseButton.src = "./assets/pause_button.png";
            });

            // Change the PlayPauseButton to the play icon when the song is paused
            currentAudio.addEventListener('pause', () => {
                PlayPauseButton.src = "./assets/player_icon3.png";
            });

        });

    });
});

















// songShow5 = [
//     { id: 'songs/ikvaariaa.mp3', title: 'Ik Vaari Aa', artist: 'Artist 1', image: './assets/ikvaariaa.jpg' },
//     { id: 'songs/hawayein.mp3', title: 'Hawayein', artist: 'Artist 1', image: './assets/hawayein.jpg' },
//     { id: 'songs/hamariaadhuri.mp3', title: 'Hamari Aadhuri Kahani', artist: 'Artist 1', image: './assets/hamariadhuri.jpg' },
//     { id: 'songs/ghungroo.mp3', title: 'Ghungroo', artist: 'Artist 1', image: './assets/ghungroo.jpg' },
//     { id: 'songs/dilnajaaneya.mp3', title: 'Dil Na jaaneya', artist: 'Artist 1', image: './assets/dilnajaaneya.jpg' },
//     { id: 'songs/dekhahazarodafa.mp3', title: 'Dekha Hazaro Dafa', artist: 'Artist 1', image: './assets/dekhahazarodafa.jpg' },
//     { id: 'songs/dilmerinasune.mp3', title: 'Dil Meri Na Sune', artist: 'Artist 1', image: './assets/dilmerinasune.jpg' },
//     { id: 'songs/bekhayali.mp3', title: 'Bekhayali', artist: 'Artist 1', image: './assets/tujhekitnachanelage.jpg' },
// ];

show5.addEventListener("click", () => {
    const isShown = show5.textContent === "Show Less";

    card5.forEach(card => {
        if (isShown) {
            card.style.display = "none";
        } else if (card.style.display === "none") {
            card.style.display = "inline-block";
        }
    });


    show5.textContent = isShown ? "Show All" : "Show Less";
    playButtons.forEach((button, index) => {
        const src = button.getAttribute('data-src');
        button.audio = new Audio(src);
        button.addEventListener("click", (event) => {
            event.preventDefault();



            const song = songs[index];
            if (songs.innerHTML === song[index].title) {
                songName.innerHTML = song.title;
            }

            singerName.innerHTML = song.artist;
            songImage.src = song.image;


            currentAudio.play();

            if (currentAudio && currentAudio != button.audio) {
                currentAudio.pause();
            }
            currentAudio = button.audio;
            if (currentAudio.paused) {
                currentAudio.play();
                //fadeIn(currentAudio, 2000);

            } else {
                currentAudio.pause();
            }
            currentAudio.play();

            currentAudio.addEventListener("timeupdate", () => {
                const progress = currentAudio.currentTime / currentAudio.duration;

                progressBar.value = progress;
                //playbackTime.innerHTML = parseFloat((currentAudio.currentTime )*0.01).toFixed(2) ;
                let minutes = Math.floor(currentAudio.currentTime / 60);
                let seconds = Math.floor(currentAudio.currentTime % 60);

                if (seconds < 10) {
                    seconds = '0' + seconds;
                }

                playbackTime.innerHTML = minutes + ':' + seconds;

                //  totalTime.innerHTML = parseFloat(currentAudio.duration/60).toFixed(2);




                // Calculate minutes and seconds from duration
                let totalMinutes = Math.floor(currentAudio.duration / 60);
                let totalSeconds = Math.floor(currentAudio.duration % 60);

                if (totalSeconds < 10) {
                    totalSeconds = '0' + totalSeconds;
                }

                totalTime.innerHTML = totalMinutes + ':' + totalSeconds;

            });


            // to skip the song in between --->>
            progressBar.addEventListener("input", () => {
                currentAudio.currentTime = parseFloat(progressBar.value) * currentAudio.duration;
            });




            currentAudio.addEventListener('play', () => {
                PlayPauseButton.src = "./assets/pause_button.png";
            });

            // Change the PlayPauseButton to the play icon when the song is paused
            currentAudio.addEventListener('pause', () => {
                PlayPauseButton.src = "./assets/player_icon3.png";
            });

        });

    });
});