/*=========================================
  Wedding Intro - Open Envelope Then Redirect
=========================================*/

const envelope = document.getElementById("envelope");

let isRedirecting = false;

function openEnvelope() {

    if (isRedirecting) return;

    isRedirecting = true;


    // باز شدن پاکت
    envelope.classList.add("open");


    // کمی مکث برای دیدن انیمیشن باز شدن
    setTimeout(() => {


        // محو شدن صفحه
        gsap.to("body", {

            opacity: 0,

            duration: 1,

            ease: "power2.inOut",

            onComplete: function() {

                window.location.href =
                "https://pinvite.io/en/e/wedding-ceremony-9afb7";

            }

        });


    }, 2200);

}


/* Floating Animation */

gsap.to(".scene", {

    y:-10,

    duration:4,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});


/* Title Animation */

gsap.from(".main-title", {

    opacity:0,

    y:40,

    duration:1.4

});


gsap.from(".subtitle", {

    opacity:0,

    delay:.5,

    y:20,

    duration:1

});
