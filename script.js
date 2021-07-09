
let timer1 = null;
let display = 0;
let direction = null;
let tabActive = false;
let showSinglePage = false;
let showingSinglePage = true;
let desktopWarning = false;



function displayStars() {
    console.log('stars on');
    document.querySelector('.firstContainer').style.backgroundImage = "url('./images/liveBackground.svg')";
    document.querySelector('.secondContainer').style.backgroundImage = "url('./images/liveBackground2.svg')";
    document.querySelector('#starsButton').onclick = () => turnOffStars();
    document.querySelector('#starsButton').textContent = 'Turn Off Stars';

}

function turnOffStars() {
    console.log('stars off'
    );
    document.querySelector('.firstContainer').style.backgroundImage = "url('./images/staticBackground.png')";
    document.querySelector('.secondContainer').style.backgroundImage = "url('./images/static2Background.png')";
    document.querySelector('#starsButton').onclick = () => displayStars();
    document.querySelector('#starsButton').textContent = 'Turn On Stars';
}

let isMobile = false; //initiate as false
if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    if (screen.width < 1000 && screen.height < 1000) {
        isMobile = true;
        desktopWarning = true;
        showTheSinglePage();
    }

}

if ((window.innerWidth < 768) || (screen.width < 768)) {
    isMobile = true;
    desktopWarning = true;
    showTheSinglePage();
} else if ((window.innerHeight < 750) || (screen.height < 750)) {
    isMobile = true;
    desktopWarning = true;
    showTheSinglePage();
}



window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

let xDown = null;
let yDown = null;

function getTouches(evt) {
    return evt.touches ||             // browser API
        evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
        if (xDiff > 0) {
            if (!showSinglePage && !showingSinglePage) {
                document.querySelector('.loadingGif').style.display = 'block';
                /* left swipe */
                // console.log('left swipe');
                display++;
                displayPage();
            }
        } else {
            if (!showSinglePage && !showingSinglePage) {
                document.querySelector('.loadingGif').style.display = 'block';
                /* left swipe */
                // console.log('right swipe');
                display--;
                displayPage();
            }
            /* right swipe */
        }
    } else {
        if (yDiff > 0) {
            if (!showSinglePage && !showingSinglePage) {
                document.querySelector('.loadingGif').style.display = 'block';
                /* left swipe */
                // console.log('up swipe');
                display++;
                displayPage();
            }
            /* up swipe */
        } else {
            if (!showSinglePage && !showingSinglePage) {
                document.querySelector('.loadingGif').style.display = 'block';
                /* left swipe */
                // console.log('down swipe');
                display--;
                displayPage();
            }
            /* down swipe */
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};


//if do not show single Page

if ((window.innerWidth >= 768) && (screen.width >= 768) && (!isMobile)) {
    if (!showSinglePage) {
        display = 0;
        displayPage();
        addEventListener('keydown', (event) => {
            console.log(event);
            switch (event.key) {
                case 'Tab':
                    if (!tabActive) {
                        document.querySelector('.displayTabInstructions').style.display = 'block';
                        tabActive = true;
                        setTimeout(() => {
                            document.querySelector('.displayTabInstructions').style.display = 'none';
                        }, 10000)
                    }

                    // $("#tabs").tabs({ active: 1 });

                    break;
                case 'Enter':
                    if (event.target.id === 'firstThirdPageDot') {
                        display = 2;
                        displayPage();
                    } else if (event.target.id === 'secondThirdPageDot') {
                        display = 3;
                        displayPage();
                    } else if (event.target.id === 'thirdThirdPageDot') {
                        display = 4;
                        displayPage();
                    }
                    break;
                case 'ArrowRight':
                    if (!showSinglePage) {
                        if (tabActive) {
                            display++;
                            displayPage();
                        }
                    }
                    break;
                case 'ArrowLeft':
                    if (!showSinglePage) {
                        if (tabActive) {
                            display--;
                            displayPage();
                        }
                    }
                    break;
            }
        })
    }
}






function displayPage() {
    showingSinglePage = false;
    document.querySelector('.loadingGif').style.display = 'none';
    if (display > 5) {
        display = 0;
    }

    if (display < 0) {
        display = 5;
    }

    document.querySelector('.summary').classList.remove('noAnimation');
    document.querySelector('.fourthContainer').classList.remove('noAnimation');
    const noAnimationArray = document.querySelectorAll('.projectDiv');
    const noAnimationArray2 = document.querySelectorAll('.projectDivReverse');

    noAnimationArray.forEach(value => {
        value.classList.remove('noAnimation')
    })

    noAnimationArray2.forEach(value => {
        value.classList.remove('noAnimation')
    })
    resetPage();

    // display proper page
    if (display === 0) { //page1
        document.querySelector('.firstContainer').style.display = 'block';
        document.querySelector('#firstPageDot').innerHTML = '<i class="fas fa-circle"></i>';
    } else if (display === 1) { //page2
        document.querySelector('.secondContainer').style.display = 'block';
        document.querySelector('#secondPageDot').innerHTML = '<i class="fas fa-circle"></i>';
    } else if (display === 2) { //page3 //first group of projects
        document.querySelector('.thirdContainer').style.display = 'block';
        document.querySelector('#thirdPageDot').innerHTML = '<i class="fas fa-circle"></i>';
        document.querySelector('#firstThirdPageDot').innerHTML = '<i class="fas fa-circle"></i>';
        document.querySelector("#firstProjectGroup").classList.remove('isHidden');

    } else if (display === 3) { //page3 //second group of projects
        document.querySelector('.thirdContainer').style.display = 'block';
        document.querySelector('#thirdPageDot').innerHTML = '<i class="fas fa-circle"></i>';
        document.querySelector('#secondThirdPageDot').innerHTML = '<i class="fas fa-circle"></i>';
        document.querySelector("#secondProjectGroup").classList.remove('isHidden');

    } else if (display === 4) { //page3 //third group of projects
        document.querySelector('.thirdContainer').style.display = 'block';
        document.querySelector('#thirdPageDot').innerHTML = '<i class="fas fa-circle"></i>';
        document.querySelector('#thirdThirdPageDot').innerHTML = '<i class="fas fa-circle"></i>';
        document.querySelector("#thirdProjectGroup").classList.remove('isHidden');

    } else if (display === 5) { //page4
        document.querySelector('.fourthContainer').style.display = 'grid';
        document.querySelector('#fourthPageDot').innerHTML = '<i class="fas fa-circle"></i>';
    }

}

function resetPage() {
    // set all pages to blank
    document.querySelector('.firstContainer').style.display = 'none';
    document.querySelector('.secondContainer').style.display = 'none';
    document.querySelector('.thirdContainer').style.display = 'none';
    document.querySelector('.fourthContainer').style.display = 'none';

    document.querySelector(".desktopAlert").style.display = "none";

    // set all page dots to blank
    document.querySelector('#firstPageDot').innerHTML = '<i class="far fa-circle"></i>';
    document.querySelector('#secondPageDot').innerHTML = '<i class="far fa-circle"></i>';
    document.querySelector('#thirdPageDot').innerHTML = '<i class="far fa-circle"></i>';
    document.querySelector('#fourthPageDot').innerHTML = '<i class="far fa-circle"></i>';


    document.querySelector("#firstProjectGroup").classList.add('isHidden');
    document.querySelector("#secondProjectGroup").classList.add('isHidden');
    document.querySelector("#thirdProjectGroup").classList.add('isHidden');

    document.querySelector('#firstThirdPageDot').innerHTML = '<i class="far fa-circle"></i>';
    document.querySelector('#secondThirdPageDot').innerHTML = '<i class="far fa-circle"></i>';
    document.querySelector('#thirdThirdPageDot').innerHTML = '<i class="far fa-circle"></i>';


}

function displaySinglePage() {
    showingSinglePage = true;
    document.querySelector('.firstContainer').style.display = 'block';
    document.querySelector('.secondContainer').style.display = 'block';
    document.querySelector('.thirdContainer').style.display = 'block';
    document.querySelector('body').style.overflow = 'visible';
    document.querySelector('.fourthContainer').style.display = 'grid';
    document.querySelector("#firstProjectGroup").classList.remove('isHidden');
    document.querySelector("#secondProjectGroup").classList.remove('isHidden');
    document.querySelector("#thirdProjectGroup").classList.remove('isHidden');

    if (desktopWarning) {
        document.querySelector(".desktopAlert").style.display = "block";
    } else {
        document.querySelector(".desktopAlert").style.display = "none";
    }
}


function showTheSinglePage() {

    showSinglePage = true;

    const secondFunction = async () => {
        const result = await resetPage();
        // do something else here after firstFunction completes

        thirdFunction();
    }

    const thirdFunction = async () => {

        const result = await $('link[href="styles.css"]').attr('href', 'singlePage.css');
        // do something else here after firstFunction completes   
        displaySinglePage();


    }
    secondFunction();



}


window.addEventListener('load', function () {
    $(".loader-wrapper").fadeOut("slow");
    $('html').css('pointer-events', 'all');

    setInterval(function () {
        if (showSinglePage) {
            if ($('link[href="singlePage.css"]')[0] === undefined) {
                displaySinglePage();
            }

        }
    }, 2000);

    $(window).on('wheel', function (event) {
        if (!showSinglePage) {
            if ((((window.innerHeight + window.scrollY) >= document.body.offsetHeight)) && (((window.innerWidth) >= 768)) && (((screen.width) >= 768)) && (!isMobile)) {
                // you're at the bottom of the page
                if (timer1 !== null) {
                    // console.log('i stopped')
                    document.querySelector('.loadingGif').style.display = 'block';
                    if (event.originalEvent.wheelDelta >= 0) {
                        //scroll up
                        direction = false;
                    }
                    else {
                        //scroll down
                        direction = true;
                    }
                    clearTimeout(timer1);
                }
                timer1 = setTimeout(function () {
                    // do something
                    if (direction) {
                        display++;
                    } else {
                        display--;
                        if (display === 4) {
                            display = 2;
                        }

                    }
                    document.querySelector('.loadingGif').style.display = 'none';
                    displayPage();
                }, 150);

            } else {
                displaySinglePage();
            }
        }
    });

});

