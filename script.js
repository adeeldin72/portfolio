// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };
let headPosition = 0, brainPosition = 0, skullPosition = 0, currentScroll = 0;

function scrollFunction() {




    if (document.documentElement.scrollTop > currentScroll || document.body.scrollTop > currentScroll) {

        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.querySelector('.titleSubHeading').style.display = 'block';
        }
        if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
            document.querySelector('.headContainer').style.position = 'fixed';
            document.querySelector('.headContainer').style.top = '5%';

        } else {
            document.querySelector('.headContainer').style.position = 'absolute';
            document.querySelector('.headContainer').style.top = 'auto';
        }

        if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
            if (headPosition <= 250) {
                headPosition += 5;
                console.log(headPosition);
            }
        } else { }

        if (document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100) {

            if (skullPosition <= 235) {
                skullPosition += 5;
                console.log(skullPosition);
            }
        } else { }

        if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {

            if (brainPosition <= 220) {
                brainPosition += 5;
                console.log(brainPosition);
            }
        } else { }

    } else if (((document.body.scrollTop !== 0) && (document.body.scrollTop < 1500)) || (((document.documentElement.scrollTop !== 0) && (document.documentElement.scrollTop < 1500)))) {

        console.log(document.documentElement.scrollTop)
        if (brainPosition > 0) {
            brainPosition -= 5;
        } else if (brainPosition < 0) {
            brainPosition = 0;
        }
        if (headPosition > 0) {

            headPosition -= 5;
        } else if (headPosition < 0) {
            headPosition = 0;
        }
        if (skullPosition > 0) {
            skullPosition -= 5;
        } else if (skullPosition < 0) {
            skullPosition = 0;
        }


        if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {

        } else {
            document.querySelector('.headContainer').style.position = 'absolute';
            document.querySelector('.headContainer').style.top = 'auto';
            headPosition = 0;
            skullPosition = 0;
            brainPosition = 0;
        }

    }


    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // you're at the bottom of the page
        headPosition = 250;
        skullPosition = 235;
        brainPosition = 220;
        displayMain();
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

    if (skullPosition > 200 && brainPosition > 200 && headPosition > 200) {
        displayMain();
    } else {
        document.querySelector('.contactSection').style.display = "none";
        document.querySelector('.projects').style.display = "none";
        document.querySelector('.summary').style.display = "none";
    }

}

function displayMain() {
    document.querySelector('.contactSection').style.display = "block";
    document.querySelector('.projects').style.display = "block";
    document.querySelector('.summary').style.display = "block";
}

