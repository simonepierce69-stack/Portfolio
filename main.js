
function scrollWindow()
{
    const video = document.getElementById("scrollVideo");

    window.addEventListener("scroll", () => {
        // const scrollTop = window.scrollY - 1000;
        // const maxScroll = document.body.scrollHeight - window.innerHeight - 1000;

        // const scrollFraction = scrollTop / maxScroll;

        // if (video.duration) {
        //     video.currentTime = scrollFraction * video.duration;
        // }

        if (!video.ended || window.scrollY == 3000) {
            video.play();
        }
    });
};


// const video = document.getElementById("scrollVideo");

// if (window.scrollY == 100000) {
//     video.onplay();
// }


scrollWindow();

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }

    });
}, {
    threshold: 0.15
});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));

