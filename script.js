// AOS.init();
let timer1 = null;
let display = 0;
let direction = null;
let tabActive = false;
// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () { scrollFunction() };
// let headPosition = 0, brainPosition = 0, skullPosition = 0, currentScroll = 0;
let isFireFox = false;
if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
    // Do Firefox-related activities
    document.querySelector('.firstContainer').style.backgroundImage = "url('./images/staticBackground.png')";
    document.querySelector('.secondContainer').style.backgroundImage = "url('./images/static2Background.png')";
    console.log('I am firefox')
    isFireFox = true;
}

let isMobile = false; //initiate as false
// device detection
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
    isMobile = true;
}

// function scrollFunction() {

//     console.log(document.documentElement.scrollTop);


//     if (document.documentElement.scrollTop > currentScroll || document.body.scrollTop > currentScroll) {


//         if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//             document.querySelector('.titleSubHeading').style.display = 'block';
//         }
//         if (document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100) {
//             document.querySelector('.headContainer').style.position = 'fixed';
//             document.querySelector('.headContainer').style.top = '5%';

//         } else {
//             document.querySelector('.headContainer').style.position = 'absolute';
//             document.querySelector('.headContainer').style.top = 'auto';
//         }

//         if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
//             if (headPosition <= 250) {
//                 headPosition += 5;
//                 console.log(headPosition);
//             }
//         } else { }

//         if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {

//             if (skullPosition <= 235) {
//                 skullPosition += 5;
//                 console.log(skullPosition);
//             }
//         } else { }

//         if (document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600) {

//             if (brainPosition <= 220) {
//                 brainPosition += 5;
//                 console.log(brainPosition);
//             }
//         } else { }

//     } else if (((document.body.scrollTop !== 0) && (document.body.scrollTop < 2400)) || (((document.documentElement.scrollTop !== 0) && (document.documentElement.scrollTop < 2400)))) {

//         console.log(document.documentElement.scrollTop)
//         if (brainPosition > 0) {
//             brainPosition -= 10;
//         } else if (brainPosition < 0) {
//             brainPosition = 0;
//         }
//         if (headPosition > 0) {

//             headPosition -= 10;
//         } else if (headPosition < 0) {
//             headPosition = 0;
//         }
//         if (skullPosition > 0) {
//             skullPosition -= 10;
//         } else if (skullPosition < 0) {
//             skullPosition = 0;
//         }


//         if (document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100) {

//         } else {
//             document.querySelector('.headContainer').style.position = 'absolute';
//             document.querySelector('.headContainer').style.top = 'auto';

//             headPosition = 0;
//             skullPosition = 0;
//             brainPosition = 0;

//             iDidRun = false;
//         }


//     }

//     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//         // you're at the bottom of the page
//         headPosition = 250;
//         skullPosition = 235;
//         brainPosition = 220;

//     }

//     if (checkVisible($('.summary'))) {
//         headPosition = 250;
//         skullPosition = 235;
//         brainPosition = 220;
//     } else {

//     }
//     document.querySelector('.head1').style.transform = `translateX(-${headPosition}%)`;
//     document.querySelector('.head6').style.transform = `translateX(${headPosition}%)`;
//     document.querySelector('.head2').style.transform = `translateX(-${skullPosition}%)`;
//     document.querySelector('.head5').style.transform = `translateX(${skullPosition}%)`;
//     document.querySelector('.head3').style.transform = `translateX(-${brainPosition}%)`;
//     document.querySelector('.head4').style.transform = `translateX(${brainPosition}%)`;

//     if (document.body.scrollTop > 0) {
//         currentScroll = document.body.scrollTop;
//     } else if (document.documentElement.scrollTop > 0) {
//         currentScroll = document.documentElement.scrollTop;
//     }

//     if (brainPosition > 215) {

//         // you're at the bottom of the page
//         headPosition = 250;
//         skullPosition = 235;
//         brainPosition = 220;

//         document.querySelector('.head1').style.transform = `translateX(-${headPosition}%)`;
//         document.querySelector('.head6').style.transform = `translateX(${headPosition}%)`;
//         document.querySelector('.head2').style.transform = `translateX(-${skullPosition}%)`;
//         document.querySelector('.head5').style.transform = `translateX(${skullPosition}%)`;
//         document.querySelector('.head3').style.transform = `translateX(-${brainPosition}%)`;
//         document.querySelector('.head4').style.transform = `translateX(${brainPosition}%)`;

//         console.log(document.querySelector('.contactSection').style.display)

//         // if (document.querySelector('.summary').style.display !== 'block') {
//         //     test()
//         // }


//     } else {
//         // document.querySelector('.contactSection').style.display = "none";
//         // document.querySelector('.projects').style.display = "none";
//         // document.querySelector('.summary').style.display = "none";
//     }



// }

// function displayMain() {
//     document.querySelector('.contactSection').style.display = "block";
//     document.querySelector('.projects').style.display = "block";
//     document.querySelector('.summary').style.display = "block";
// }


window.onbeforeunload = function () {
    window.scrollTo(0, 0);



}

// // $(window).scroll(function () {

// // });

if ((window.innerWidth >= 768) && (screen.width >= 768)) {
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
                if (display === 0) {
                    display = 1;
                    displayPage();
                } else if (display === 1) {
                    display = 2;
                    displayPage();
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
                if (tabActive) {
                    display++;
                    displayPage();
                }
                break;
            case 'ArrowLeft':
                if (tabActive) {
                    display--;
                    displayPage();
                }
                break;
        }
    })
}


$(window).on('wheel', function (event) {
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

});

function displayPage() {
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


    // set all pages to blank
    document.querySelector('.firstContainer').style.display = 'none';
    document.querySelector('.secondContainer').style.display = 'none';
    document.querySelector('.thirdContainer').style.display = 'none';
    document.querySelector('.fourthContainer').style.display = 'none';

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

function displaySinglePage() {
    document.querySelector('.firstContainer').style.display = 'block';
    document.querySelector('.secondContainer').style.display = 'block';
    document.querySelector('.thirdContainer').style.display = 'block';
    document.querySelector('body').style.overflow = 'visible';
    document.querySelector('.fourthContainer').style.display = 'grid';
    document.querySelector("#firstProjectGroup").classList.remove('isHidden');
    document.querySelector("#secondProjectGroup").classList.remove('isHidden');
    document.querySelector("#thirdProjectGroup").classList.remove('isHidden');
    document.querySelector(".desktopAlert").style.display = "block";
}





// function checkVisible(elm, eval) {
//     eval = eval || "visible";
//     var vpH = $(window).height(), // Viewport Height
//         st = $(window).scrollTop(), // Scroll Top
//         y = $(elm).offset().top,
//         elementHeight = $(elm).height();

//     if (eval == "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
//     if (eval == "above") return ((y < (vpH + st)));
// }

let pos = { top: 0, left: 0, x: 0, y: 0 };

const mouseDownHandler = function (e) {
    pos = {
        // The current scroll 
        left: ele.scrollLeft,
        top: ele.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};