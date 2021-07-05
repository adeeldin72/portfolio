

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };
let headPosition = 0, brainPosition = 0, skullPosition = 0, currentScroll = 0;

if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
    // Do Firefox-related activities
    document.querySelector('.heroImage').style.backgroundImage = "url('./images/staticBackground.png')";
    document.querySelector('.hero2Image').style.backgroundImage = "url('./images/static2Background.png')";
    console.log('I am firefox')
}

function scrollFunction() {

    console.log(document.documentElement.scrollTop);


    if (document.documentElement.scrollTop > currentScroll || document.body.scrollTop > currentScroll) {


        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.querySelector('.titleSubHeading').style.display = 'block';
        }
        if (document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100) {
            document.querySelector('.headContainer').style.position = 'fixed';
            document.querySelector('.headContainer').style.top = '5%';

        } else {
            document.querySelector('.headContainer').style.position = 'absolute';
            document.querySelector('.headContainer').style.top = 'auto';
        }

        if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
            if (headPosition <= 250) {
                headPosition += 5;
                console.log(headPosition);
            }
        } else { }

        if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {

            if (skullPosition <= 235) {
                skullPosition += 5;
                console.log(skullPosition);
            }
        } else { }

        if (document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600) {

            if (brainPosition <= 220) {
                brainPosition += 5;
                console.log(brainPosition);
            }
        } else { }

    } else if (((document.body.scrollTop !== 0) && (document.body.scrollTop < 2400)) || (((document.documentElement.scrollTop !== 0) && (document.documentElement.scrollTop < 2400)))) {

        console.log(document.documentElement.scrollTop)
        if (brainPosition > 0) {
            brainPosition -= 10;
        } else if (brainPosition < 0) {
            brainPosition = 0;
        }
        if (headPosition > 0) {

            headPosition -= 10;
        } else if (headPosition < 0) {
            headPosition = 0;
        }
        if (skullPosition > 0) {
            skullPosition -= 10;
        } else if (skullPosition < 0) {
            skullPosition = 0;
        }


        if (document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100) {

        } else {
            document.querySelector('.headContainer').style.position = 'absolute';
            document.querySelector('.headContainer').style.top = 'auto';

            headPosition = 0;
            skullPosition = 0;
            brainPosition = 0;

            iDidRun = false;
        }


    }

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // you're at the bottom of the page
        headPosition = 250;
        skullPosition = 235;
        brainPosition = 220;

    }

    if (checkVisible($('.summary'))) {
        headPosition = 250;
        skullPosition = 235;
        brainPosition = 220;
    } else {

    }
    document.querySelector('.head1').style.transform = `translateX(-${headPosition}%)`;
    document.querySelector('.head6').style.transform = `translateX(${headPosition}%)`;
    document.querySelector('.head2').style.transform = `translateX(-${skullPosition}%)`;
    document.querySelector('.head5').style.transform = `translateX(${skullPosition}%)`;
    document.querySelector('.head3').style.transform = `translateX(-${brainPosition}%)`;
    document.querySelector('.head4').style.transform = `translateX(${brainPosition}%)`;

    if (document.body.scrollTop > 0) {
        currentScroll = document.body.scrollTop;
    } else if (document.documentElement.scrollTop > 0) {
        currentScroll = document.documentElement.scrollTop;
    }

    if (brainPosition > 215) {

        // you're at the bottom of the page
        headPosition = 250;
        skullPosition = 235;
        brainPosition = 220;

        document.querySelector('.head1').style.transform = `translateX(-${headPosition}%)`;
        document.querySelector('.head6').style.transform = `translateX(${headPosition}%)`;
        document.querySelector('.head2').style.transform = `translateX(-${skullPosition}%)`;
        document.querySelector('.head5').style.transform = `translateX(${skullPosition}%)`;
        document.querySelector('.head3').style.transform = `translateX(-${brainPosition}%)`;
        document.querySelector('.head4').style.transform = `translateX(${brainPosition}%)`;

        console.log(document.querySelector('.contactSection').style.display)

        // if (document.querySelector('.summary').style.display !== 'block') {
        //     test()
        // }


    } else {
        // document.querySelector('.contactSection').style.display = "none";
        // document.querySelector('.projects').style.display = "none";
        // document.querySelector('.summary').style.display = "none";
    }



}

function displayMain() {
    document.querySelector('.contactSection').style.display = "block";
    document.querySelector('.projects').style.display = "block";
    document.querySelector('.summary').style.display = "block";
}


window.onbeforeunload = function () {
    window.scrollTo(0, 0);

}

// $(window).scroll(function () {

// });

function checkVisible(elm, eval) {
    eval = eval || "visible";
    var vpH = $(window).height(), // Viewport Height
        st = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();

    if (eval == "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
    if (eval == "above") return ((y < (vpH + st)));
}