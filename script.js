document.addEventListener('DOMContentLoaded', 
    function () {
        const navItems = document.querySelectorAll('.nav-item');
        const playButton = document.getElementById('play-button');
        const logo = document.getElementById('bird-logo');

        let currentAudio = new Audio('assets/audio/forest.mp3');


        const music = {
            'solovey': 'assets/audio/solovey.mp3',
            'drozd': 'assets/audio/drozd.mp3',
            'malinovka': 'assets/audio/zaryanka.mp3',
            'javoronok': 'assets/audio/javoronok.mp3',
            'slavka': 'assets/audio/slavka.mp3',
            'forest': 'assets/audio/forest.mp3'
        };

        const images = {
            'solovey': 'assets/img/solovey.jpg',
            'drozd': 'assets/img/drozd.jpg',
            'malinovka': 'assets/img/zaryanka.jpg',
            'javoronok': 'assets/img/javoronok.jpg',
            'slavka': 'assets/img/slavka.jpg',
            'forest': 'assets/img/forest.jpg'
        };

        // change bg-image, music for nav-items
        navItems.forEach(item => {
            item.addEventListener('click', function () {
                const bird = this.dataset.item;

            // change background
            document.querySelector('main').style.backgroundImage = `url('${images[bird]}')`;
            
            currentAudio.pause();

            //change audio
            currentAudio = new Audio(music[bird]);
            currentAudio.play();

            // change button
            playButton.src = 'assets/svg/pause.svg';
            });
        });

        // change bg-image, music for logo
        logo.addEventListener('click', function () { 
            const bird = 'forest'; 
            document.querySelector('main').style.backgroundImage = `url('${images[bird]}')`; 
    
            currentAudio.pause(); 
            currentAudio = new Audio(music[bird]); 
            currentAudio.play(); 
    
            playButton.src = 'assets/svg/pause.svg'; 
        }); 

        // adding listener to stop or play music
        playButton.addEventListener('click', function () {
            if (currentAudio.paused) {
                currentAudio.play();
                playButton.src = 'assets/svg/pause.svg';
            } else {
                currentAudio.pause();
                playButton.src = 'assets/svg/play.svg';
            }
        });
    }
);

