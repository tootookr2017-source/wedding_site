/*=========================================
  Wedding Intro
=========================================*/

const envelope = document.getElementById("envelope");

let opened = false;

function openEnvelope() {

    if (opened) return;

    opened = true;

    envelope.classList.add("open");

    // لرزش خیلی ملایم هنگام جدا شدن مهر
    gsap.to(".wax", {
        duration: .35,
        rotation: 8,
        yoyo: true,
        repeat: 1
    });

    // بیرون آمدن کارت
    gsap.to(".letter", {
        delay: .55,
        duration: 1.8,
        y: -170,
        ease: "power3.out"
    });

    // کمی بزرگ شدن کارت
    gsap.to(".letter", {
        delay: 1.8,
        duration: 1.2,
        scale: 1.06,
        ease: "power2.out"
    });

    // نور روی کارت
    gsap.fromTo(".letter",

        {
            boxShadow: "0 15px 40px rgba(0,0,0,.18)"
        },

        {
            delay: 1.2,
            duration: 1.4,
            boxShadow:
            "0 35px 90px rgba(212,175,55,.35)"
        }

    );

    // ظاهر شدن دکمه ورود
    setTimeout(showEnterButton,2600);

}


/*=========================================
 ENTER BUTTON
=========================================*/

function showEnterButton(){

    const btn = document.createElement("button");

    btn.className="enter-btn";

    btn.innerHTML="Open Invitation";

    document.body.appendChild(btn);

    gsap.from(btn,{
        opacity:0,
        y:30,
        duration:1
    });

    btn.onclick=function(){

        gsap.to("body",{

            opacity:0,

            duration:1,

            onComplete:function(){

                window.location.href="https://pinvite.io/en/e/wedding-ceremony-9afb7";

            }

        });

    }

}


/*=========================================
 Floating Animation
=========================================*/

gsap.to(".scene",{

    y:-10,

    duration:4,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});


/*=========================================
 Title Animation
=========================================*/

gsap.from(".main-title",{

    opacity:0,

    y:40,

    duration:1.4

});

gsap.from(".subtitle",{

    opacity:0,

    delay:.5,

    y:20,

    duration:1

});