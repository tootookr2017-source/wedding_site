/*=========================================
  Wedding Intro - Direct Redirect
=========================================*/

const envelope = document.getElementById("envelope");

let isRedirecting = false;

function openEnvelope() {

    // جلوگیری از کلیک‌های مکرر
    if (isRedirecting) return;

    isRedirecting = true;

    // محو کردن صفحه و رفتن به لینک
    gsap.to("body", {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: function() {
            window.location.href = "https://pinvite.io/en/e/wedding-ceremony-9afb7";
        }
    });

}


/*=========================================
 Floating Animation (برای پاکت)
=========================================*/

gsap.to(".scene", {
    y: -10,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});


/*=========================================
 Title Animation
=========================================*/

gsap.from(".main-title", {
    opacity: 0,
    y: 40,
    duration: 1.4
});

gsap.from(".subtitle", {
    opacity: 0,
    delay: .5,
    y: 20,
    duration: 1
});