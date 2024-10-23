console.log("I am going to add the Javascript in my spotify website");


let audioElement = new Audio("Music/1.mp3");
let Harman = document.getElementById("masterPlay")
let myprogressbar = document.getElementById("progressbar");
let songitem = Array.from((document.getElementsByClassName("songItems")));
let Musicid = document.getElementById("musicid");
let Musicartist = document.getElementById("musicartist");
let Coverpage = document.getElementById("coverpage");

let number1 = document.getElementById("songdurationleft1")
let numberdadh = document.getElementById("songdurationleft2")
let number2 = document.getElementById("songdurationright1")
let numberthai = document.getElementById("songdurationright2")


// First common folder of songs
// let Aman = document.getElementById("next")

let songs = [
    { songName: "Big scene", filepath: "Music/1.mp3", Artistname: " : Diljit Dosanjh", coverpath: "Musiccover/1.jpg" },
    { songName: "Black suit", filepath: "Music/2.mp3", Artistname: " : Preet Harpal", coverpath: "Musiccover/2.jpg" },
    { songName: "Break fail", filepath: "Music/3.mp3", Artistname: " : Harnav Brar", coverpath: "Musiccover/3.jpg" },
    { songName: "car Nachdi", filepath: "Music/4.mp3", Artistname: " : Bohemia, gippy", coverpath: "Musiccover/4.jpg" },
    { songName: " chandigarh", filepath: "Music/5.mp3", Artistname: " : Mankirat Aulakh", coverpath: "Musiccover/5.jpg" },
    { songName: "Cheques", filepath: "Music/6.mp3", Artistname: " : Shubh", coverpath: "Musiccover/6.jpg" },
    { songName: "Dar e Dil", filepath: "Music/7.mp3", Artistname: " : Roshan Prince", coverpath: "Musiccover/7.jpg" },
    { songName: "Fashion", filepath: "Music/8.mp3", Artistname: " : Guru Randhawa", coverpath: "Musiccover/8.jpg" },
    { songName: "Gucci", filepath: "Music/9.mp3", Artistname: " : Arsh Benipal", coverpath: "Musiccover/9.jpg" },
    { songName: "Gym", filepath: "Music/10.mp3", Artistname: " : Sippy gill", coverpath: "Musiccover/10.jpg" },
]


songitem.forEach((element, i) => {
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
    element.getElementsByClassName("covers")[0].src = songs[i].coverpath;
});

// Play the Music
Harman.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime < 0) {
        audioElement.play();
        Harman.src = "pause.svg"
    }
    else {
        audioElement.pause();
        Harman.src = "play.svg";
    }
})

// Update the seekbar

audioElement.addEventListener("timeupdate", () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    myprogressbar.value = progress;

    // Duration of the song in the bottom Music controller
    number1.innerText = Math.floor(audioElement.currentTime / 60);
    numberdadh.innerText = Math.floor(audioElement.currentTime) % 60;

    number2.innerText = Math.floor(audioElement.duration / 60);
    numberthai.innerText = Math.floor(audioElement.duration % 60);


})

myprogressbar.addEventListener("change", () => {
    audioElement.currentTime = (myprogressbar.value * audioElement.duration) / 100;
})

// Hamburger Listener
document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".left").style.left = 0;
    document.querySelector(".right").style.opacity = 0.5;
})

// close Listener
document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".left").style.left = "-110%";
    document.querySelector(".right").style.opacity = 1;
})

// play the songs from the left side

// By default the name of the song is the First one 
// Musicid.innerText = songs[0].songName;
// Musicartist.innerText = songs[0].Artistname;

Array.from((document.getElementsByClassName("songitemplay"))).forEach((element) => {
    element.addEventListener("click", (e) => {
        index = parseInt(e.target.id);

        audioElement.src = `Music/${index}.mp3`

        Musicid.innerText = songs[index - 1].songName;
        Musicartist.innerText = songs[index - 1].Artistname;
        Coverpage.src = songs[index - 1].coverpath;
        // console.log(Musicid.innerText);
        audioElement.currentTime = 0;
        audioElement.play();
        Harman.src = "pause.svg"
    })

});

// Setting the volume bar of the Music player
document.getElementById("volumebar").addEventListener("change", (e) => {
    // console.log(e, e.target.e.target.value);
    audioElement.volume = parseInt(e.target.value) / 100;
})

// previous and next button
document.getElementById("next").addEventListener("click", () => {
    if (index >= 10) {
        index = 0
    }
    else {
        index = index + 1;
    }
    audioElement.src = `Music/${index}.mp3`;
    Coverpage.src = songs[index - 1].coverpath;
    Musicid.innerText = songs[index - 1].songName;
    Musicartist.innerText = songs[index - 1].Artistname;
    audioElement.currentTime = 0;
    audioElement.play();
    Harman.src = "pause.svg"
})

document.getElementById("previous").addEventListener("click", () => {
    if (index <= 0) {
        index = 0
    }
    else {
        index = index - 1;
    }
    audioElement.src = `Music/${index}.mp3`;
    Coverpage.src = songs[index - 1].coverpath;
    Musicid.innerText = songs[index - 1].songName;
    Musicartist.innerText = songs[index - 1].Artistname;
    audioElement.currentTime = 0;
    audioElement.play();
    Harman.src = "pause.svg"
})



// Second Folder
let jaso = document.getElementById("card1");
let songs2 = [
    { songName: "5 Tara", filepath: "diljitgaane/1.mp3", Artistname: " : Diljit Dosanjh", coverpath: "diljitcover/1.jpg" },
    { songName: "Big Scene", filepath: "diljitgaane/2.mp3", Artistname: " : Diljit Dosanjh", coverpath: "diljitcover/2.jpg" },
    { songName: "Case", filepath: "diljitgaane/3.mp3", Artistname: " : Diljit Dosanjh", coverpath: "diljitcover/3.jpg" },
    { songName: "Clash", filepath: "diljitgaane/4.mp3", Artistname: " : Diljit Dosanjh", coverpath: "diljitcover/4.jpg" },
    { songName: "Do you Know", filepath: "diljitgaane/5.mp3", Artistname: " : Diljit Dosanjh", coverpath: "diljitcover/5.jpg" },
    { songName: "Fukre", filepath: "diljitgaane/6.mp3", Artistname: " : Diljit Dosanjh", coverpath: "diljitcover/6.jpg" },
    { songName: "Goat", filepath: "diljitgaane/7.mp3", Artistname: " : Diljit Dosanjh", coverpath: "diljitcover/7.jpg" },
    { songName: "Has Has", filepath: "diljitgaane/8.mp3", Artistname: " : Diljit Dosanjh", coverpath: "diljitcover/8.jpg" },
    { songName: "Panga", filepath: "diljitgaane/9.mp3", Artistname: " : Diljit Dosanjh", coverpath: "diljitcover/9.jpg" },
    { songName: "Patiala Peg", filepath: "diljitgaane/10.mp3", Artistname: " : Diljit Dosanjh", coverpath: "diljitcover/10.jpg" },
]

jaso.addEventListener("click", () => {
    songitem.forEach((element, i) => {
        element.getElementsByClassName("songName")[0].innerHTML = songs2[i].songName;
        element.getElementsByClassName("covers")[0].src = songs2[i].coverpath;
    });

    Array.from((document.getElementsByClassName("songitemplay"))).forEach((element) => {
        element.addEventListener("click", (e) => {
            index2 = parseInt(e.target.id);
            audioElement.src = `diljitgaane/${index2}.mp3`


            Coverpage.src = songs2[index2 - 1].coverpath;
            Musicid.innerText = songs2[index2 - 1].songName;
            Musicartist.innerText = songs2[index2 - 1].Artistname;

            audioElement.currentTime = 0;
            audioElement.play();
            Harman.src = "pause.svg"
        })
    });
    document.getElementById("next").addEventListener("click", () => {
        if (index2 >= 10) {
            index2 = 0
        }
        else {
            index2 = index2 + 1;
        }

        audioElement.src = `diljitgaane/${index2}.mp3`;
        Coverpage.src = songs2[index2 - 1].coverpath;
        Musicid.innerText = songs2[index2 - 1].songName;
        Musicartist.innerText = songs2[index2 - 1].Artistname;
        audioElement.currentTime = 0;
        audioElement.play();
        Harman.src = "pause.svg"
    });
})


document.getElementById("previous").addEventListener("click", () => {
    if (index2 <= 0) {
        index2 = 0
    }
    else {
        index2 = index2 - 1;
    }
    audioElement.src = `diljitgaane/${index2}.mp3`;
    Coverpage.src = songs2[index2 - 1].coverpath;
    Musicid.innerText = songs2[index2 - 1].songName;
    Musicartist.innerText = songs2[index2 - 1].Artistname;
    audioElement.currentTime = 0;
    audioElement.play();
    Harman.src = "pause.svg"
});


// Third folder
let guru = document.getElementById("card2");
let songs3 = [
    { songName: "295", filepath: "sidhugaane/1.mp3", Artistname: " : Sidhu Moosewala", coverpath: "sidhucover/1.jpg" },
    { songName: "Bapu", filepath: "sidhugaane/2.mp3", Artistname: " : Sidhu Moosewala", coverpath: "sidhucover/2.jpg" },
    { songName: "Goat", filepath: "sidhugaane/3.mp3", Artistname: " : Sidhu Moosewala", coverpath: "sidhucover/3.jpg" },
    { songName: "Aaj kal ve", filepath: "sidhugaane/4.mp3", Artistname: " : Sidhu Moosewala", coverpath: "sidhucover/4.jpg" },
    { songName: "Sanju", filepath: "sidhugaane/5.mp3", Artistname: " : Sidhu Moosewala", coverpath: "sidhucover/5.jpg" },
    { songName: "calaboose", filepath: "sidhugaane/6.mp3", Artistname: " : Sidhu Moosewala", coverpath: "sidhucover/6.jpg" },
    { songName: "East flow", filepath: "sidhugaane/7.mp3", Artistname: " : Sidhu Moosewala", coverpath: "sidhucover/7.jpg" },
    { songName: "Self made", filepath: "sidhugaane/8.mp3", Artistname: " : Sidhu Moosewala", coverpath: "sidhucover/8.jpg" },
    { songName: "Sign to god", filepath: "sidhugaane/9.mp3", Artistname: " : Sidhu Moosewala", coverpath: "sidhucover/9.jpg" },
    { songName: "Builtdifferent", filepath: "sidhugaane/10.mp3", Artistname: " : Sidhu Moosewala", coverpath: "sidhucover/10.jpg" },
]

guru.addEventListener("click", () => {
    songitem.forEach((element, i) => {
        element.getElementsByClassName("songName")[0].innerHTML = songs3[i].songName;
        element.getElementsByClassName("covers")[0].src = songs3[i].coverpath;
    });

    Array.from((document.getElementsByClassName("songitemplay"))).forEach((element) => {
        element.addEventListener("click", (e) => {
            index3 = parseInt(e.target.id);
            audioElement.src = `sidhugaane/${index3}.mp3`

            Coverpage.src = songs3[index3 - 1].coverpath;
            Musicid.innerText = songs3[index3 - 1].songName;
            Musicartist.innerText = songs3[index3 - 1].Artistname;

            audioElement.currentTime = 0;
            audioElement.play();
            Harman.src = "pause.svg"
        })
    });
    document.getElementById("next").addEventListener("click", () => {
        if (index3 >= 10) {
            index3 = 0
        }
        else {
            index3 = index3 + 1;
        }

        audioElement.src = `sidhugaane/${index3}.mp3`;
        Coverpage.src = songs3[index3 - 1].coverpath;
        Musicid.innerText = songs3[index3 - 1].songName;
        Musicartist.innerText = songs3[index3 - 1].Artistname;
        audioElement.currentTime = 0;
        audioElement.play();
        Harman.src = "pause.svg"
    });
})


document.getElementById("previous").addEventListener("click", () => {
    if (index3 <= 0) {
        index3 = 0
    }
    else {
        index3 = index3 - 1;
    }
    audioElement.src = `sidhugaane/${index3}.mp3`;
    Coverpage.src = songs3[index3 - 1].coverpath;
    Musicid.innerText = songs3[index3 - 1].songName;
    Musicartist.innerText = songs3[index3 - 1].Artistname;
    audioElement.currentTime = 0;
    audioElement.play();
    Harman.src = "pause.svg"
});




//    Fourth Folder

let a = document.getElementById("card3");
let songs4 = [
    { songName: "King Shit", filepath: "shubhgaane/1.mp3", Artistname: " : Shubh", coverpath: "shubhpics/1.jpg" },
    { songName: "Safety off", filepath: "shubhgaane/2.mp3", Artistname: " : Shubh", coverpath: "shubhpics/2.jpg" },
    { songName: "You and me", filepath: "shubhgaane/3.mp3", Artistname: " : Shubh", coverpath: "shubhpics/3.jpg" },
    { songName: "Elevated", filepath: "shubhgaane/4.mp3", Artistname: " : Shubh", coverpath: "shubhpics/4.jpg" },
    { songName: "Dior", filepath: "shubhgaane/5.mp3", Artistname: " : Shubh", coverpath: "shubhpics/5.jpg" },
    { songName: "we rollin", filepath: "shubhgaane/6.mp3", Artistname: " : Shubh", coverpath: "shubhpics/6.jpg" },
    { songName: "offshore", filepath: "shubhgaane/7.mp3", Artistname: " : Shubh", coverpath: "shubhpics/7.jpg" },
    { songName: "one love", filepath: "shubhgaane/8.mp3", Artistname: " : Shubh", coverpath: "shubhpics/8.jpg" },
    { songName: "Baller", filepath: "shubhgaane/9.mp3", Artistname: " : Shubh", coverpath: "shubhpics/9.jpg" },
    { songName: "still rollin", filepath: "shubhgaane/10.mp3", Artistname: " : Shubh", coverpath: "shubhpics/10.jpg" },
]

a.addEventListener("click", () => {
    songitem.forEach((element, i) => {
        element.getElementsByClassName("songName")[0].innerHTML = songs4[i].songName;
        element.getElementsByClassName("covers")[0].src = songs4[i].coverpath;
    });

    Array.from((document.getElementsByClassName("songitemplay"))).forEach((element) => {
        element.addEventListener("click", (e) => {
            index4 = parseInt(e.target.id);
            audioElement.src = `shubhgaane/${index4}.mp3`

            Coverpage.src = songs4[index4 - 1].coverpath;
            Musicid.innerText = songs4[index4 - 1].songName;
            Musicartist.innerText = songs4[index4 - 1].Artistname;

            audioElement.currentTime = 0;
            audioElement.play();
            Harman.src = "pause.svg"
        })
    });
    document.getElementById("next").addEventListener("click", () => {
        if (index4 >= 10) {
            index4 = 0
        }
        else {
            index4 = index4 + 1;
        }

        audioElement.src = `shubhgaane/${index4}.mp3`;
        Coverpage.src = songs4[index4 - 1].coverpath;
        Musicid.innerText = songs4[index4 - 1].songName;
        Musicartist.innerText = songs4[index4 - 1].Artistname;
        audioElement.currentTime = 0;
        audioElement.play();
        Harman.src = "pause.svg"
    });
})


document.getElementById("previous").addEventListener("click", () => {
    if (index4 <= 0) {
        index4 = 0
    }
    else {
        index4 = index4 - 1;
    }
    audioElement.src = `shubhgaane/${index4}.mp3`;
    Coverpage.src = songs4[index4 - 1].coverpath;
    Musicid.innerText = songs4[index4 - 1].songName;
    Musicartist.innerText = songs4[index4 - 1].Artistname;
    audioElement.currentTime = 0;
    audioElement.play();
    Harman.src = "pause.svg"
});


//    Fifth Folder

let b = document.getElementById("card4");
let songs5 = [
    { songName: "Jean", filepath: "bawagaane/1.mp3", Artistname: " : Ranjit bawa", coverpath: "bawacover/1.jpg" },
    { songName: "Chandigarh", filepath: "bawagaane/2.mp3", Artistname: " : Ranjit bawa", coverpath: "bawacover/2.jpg" },
    { songName: "Baagian de kissa", filepath: "bawagaane/3.mp3", Artistname: " : Ranjit bawa", coverpath: "bawacover/3.jpg" },
    { songName: "Tankha", filepath: "bawagaane/4.mp3", Artistname: " : Ranjit bawa", coverpath: "bawacover/4.jpg" },
    { songName: "Sher marna", filepath: "bawagaane/5.mp3", Artistname: " : Ranjit bawa", coverpath: "bawacover/5.jpg" },
    { songName: "Diljaniya", filepath: "bawagaane/6.mp3", Artistname: " : Ranjit bawa", coverpath: "bawacover/6.jpg" },
    { songName: "Jhanjhar", filepath: "bawagaane/7.mp3", Artistname: " : Ranjit bawa", coverpath: "bawacover/7.jpg" },
    { songName: "Impress", filepath: "bawagaane/8.mp3", Artistname: " : Ranjit bawa", coverpath: "bawacover/8.jpg" },
    { songName: "Dollar vs roti", filepath: "bawagaane/9.mp3", Artistname: " : Ranjit bawa", coverpath: "bawacover/9.jpg" },
    { songName: "Kine aye kine gye", filepath: "bawagaane/10.mp3", Artistname: " : Ranjit bawa", coverpath: "bawacover/10.jpg" },
]

b.addEventListener("click", () => {
    songitem.forEach((element, i) => {
        element.getElementsByClassName("songName")[0].innerHTML = songs5[i].songName;
        element.getElementsByClassName("covers")[0].src = songs5[i].coverpath;
    });

    Array.from((document.getElementsByClassName("songitemplay"))).forEach((element) => {
        element.addEventListener("click", (e) => {
            index5 = parseInt(e.target.id);
            audioElement.src = `bawagaane/${index5}.mp3`

            Coverpage.src = songs5[index5 - 1].coverpath;
            Musicid.innerText = songs5[index5 - 1].songName;
            Musicartist.innerText = songs5[index5 - 1].Artistname;

            audioElement.currentTime = 0;
            audioElement.play();
            Harman.src = "pause.svg"
        })
    });
    document.getElementById("next").addEventListener("click", () => {
        if (index5 >= 10) {
            index5 = 0
        }
        else {
            index5 = index5 + 1;
        }

        audioElement.src = `bawagaane/${index5}.mp3`;
        Coverpage.src = songs5[index5 - 1].coverpath;
        Musicid.innerText = songs5[index5 - 1].songName;
        Musicartist.innerText = songs5[index5 - 1].Artistname;
        audioElement.currentTime = 0;
        audioElement.play();
        Harman.src = "pause.svg"
    });
})


document.getElementById("previous").addEventListener("click", () => {
    if (index5 <= 0) {
        index5 = 0
    }
    else {
        index5 = index5 - 1;
    }
    audioElement.src = `bawagaane/${index5}.mp3`;
    Coverpage.src = songs5[index5 - 1].coverpath;
    Musicid.innerText = songs5[index5 - 1].songName;
    Musicartist.innerText = songs5[index5 - 1].Artistname;
    audioElement.currentTime = 0;
    audioElement.play();
    Harman.src = "pause.svg"
});


//    sixth Folder

let c = document.getElementById("card5");
let songs6 = [
    { songName: "dewanapan", filepath: "gillgaane/1.mp3", Artistname: " : Amrinder gill", coverpath: "gillcover/1.jpg" },
    { songName: "Yaarian", filepath: "gillgaane/2.mp3", Artistname: " : Amrinder gill", coverpath: "gillcover/2.jpg" },
    { songName: "ki samjhaiye", filepath: "gillgaane/3.mp3", Artistname: " : Amrinder gill", coverpath: "gillcover/3.jpg" },
    { songName: "chal jindiye", filepath: "gillgaane/4.mp3", Artistname: " : Amrinder gill", coverpath: "gillcover/4.jpg" },
    { songName: "Supna", filepath: "gillgaane/5.mp3", Artistname: " : Amrinder gill", coverpath: "gillcover/5.jpg" },
    { songName: "soch vich tu", filepath: "gillgaane/6.mp3", Artistname: " : Amrinder gill", coverpath: "gillcover/6.jpg" },
    { songName: "Mulk", filepath: "gillgaane/7.mp3", Artistname: " : Amrinder gill", coverpath: "gillcover/7.jpg" },
    { songName: "sohni kuri", filepath: "gillgaane/8.mp3", Artistname: " : Amrinder gill", coverpath: "gillcover/8.jpg" },
    { songName: "Herey", filepath: "gillgaane/9.mp3", Artistname: " : Amrinder gill", coverpath: "gillcover/9.jpg" },
    { songName: "Pendu", filepath: "gillgaane/10.mp3", Artistname: " : Amrinder gill", coverpath: "gillcover/10.jpg" },
]

c.addEventListener("click", () => {
    songitem.forEach((element, i) => {
        element.getElementsByClassName("songName")[0].innerHTML = songs6[i].songName;
        element.getElementsByClassName("covers")[0].src = songs6[i].coverpath;
    });

    Array.from((document.getElementsByClassName("songitemplay"))).forEach((element) => {
        element.addEventListener("click", (e) => {
            index6 = parseInt(e.target.id);
            audioElement.src = `gillgaane/${index6}.mp3`

            Coverpage.src = songs6[index6 - 1].coverpath;
            Musicid.innerText = songs6[index6 - 1].songName;
            Musicartist.innerText = songs6[index6 - 1].Artistname;

            audioElement.currentTime = 0;
            audioElement.play();
            Harman.src = "pause.svg"
        })
    });
    document.getElementById("next").addEventListener("click", () => {
        if (index6 >= 10) {
            index6 = 0
        }
        else {
            index6 = index6 + 1;
        }

        audioElement.src = `gillgaane/${index6}.mp3`;
        Coverpage.src = songs6[index6 - 1].coverpath;
        Musicid.innerText = songs6[index6 - 1].songName;
        Musicartist.innerText = songs6[index6 - 1].Artistname;
        audioElement.currentTime = 0;
        audioElement.play();
        Harman.src = "pause.svg"
    });
})


document.getElementById("previous").addEventListener("click", () => {
    if (index6 <= 0) {
        index6 = 0
    }
    else {
        index6 = index6 - 1;
    }
    audioElement.src = `gillgaane/${index6}.mp3`;
    Coverpage.src = songs6[index6 - 1].coverpath;
    Musicid.innerText = songs6[index6 - 1].songName;
    Musicartist.innerText = songs6[index6 - 1].Artistname;
    audioElement.currentTime = 0;
    audioElement.play();
    Harman.src = "pause.svg"
});