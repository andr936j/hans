document.addEventListener("DOMContentLoaded", runScript);

function runScript() {
    console.log("SIDEN ER LOADET");

    let eventsHover = document.querySelector(".events");

    let frivillighedHover = document.querySelector(".frivillighed");

    let udlejningHover = document.querySelector(".udlejning");

    let omHover = document.querySelector(".om");

    let kontaktHover = document.querySelector(".kontakt");

    let faqHover = document.querySelector(".faq");

    let stageHover = document.querySelector(".stage");

    let musikcafeHover = document.querySelector(".musikcafe");

    let biografHover = document.querySelector(".biograf");

    let bastardenHover = document.querySelector(".bastarden");

    let spisehusetHover = document.querySelector(".spisehuset");

    let stardustHover = document.querySelector(".stardust");

    let cafeHover = document.querySelector(".cafe");

    let skiltNul = document.querySelector(".border_nul");

    let mobileBtn = document.querySelector(".mobile-btn");

    let burger = document.querySelector(".burger");

    let closeBtn = document.querySelector(".close");

    let dagens1 = document.querySelector(".dagens_1");

    let dagens2 = document.querySelector(".dagens_2");

    let dagens3 = document.querySelector(".dagens_3");

    let dagens4 = document.querySelector(".dagens_4");

    let dagens5 = document.querySelector(".dagens_5");

    dagens1.addEventListener("mouseenter", dagens1On);
    dagens1.addEventListener("mouseleave", dagens1Off);

    dagens2.addEventListener("mouseenter", dagens2On);
    dagens2.addEventListener("mouseleave", dagens2Off);

    dagens3.addEventListener("mouseenter", dagens3On);
    dagens3.addEventListener("mouseleave", dagens3Off);

    dagens4.addEventListener("mouseenter", dagens4On);
    dagens4.addEventListener("mouseleave", dagens4Off);

    dagens5.addEventListener("mouseenter", dagens5On);
    dagens5.addEventListener("mouseleave", dagens5Off);

    function dagens1On() {
        dagens1.style.borderBottom = "2px solid orangered";
    }

    function dagens1Off() {
        dagens1.style.borderBottom = "none";
    }

    function dagens2On() {
        dagens2.style.borderBottom = "2px solid orangered";
    }

    function dagens2Off() {
        dagens2.style.borderBottom = "none";
    }

    function dagens3On() {
        dagens3.style.borderBottom = "2px solid orangered";
    }

    function dagens3Off() {
        dagens3.style.borderBottom = "none";
    }

    function dagens4On() {
        dagens4.style.borderBottom = "2px solid orangered";
    }

    function dagens4Off() {
        dagens4.style.borderBottom = "none";
    }

    function dagens5On() {
        dagens5.style.borderBottom = "2px solid orangered";
    }

    function dagens5Off() {
        dagens5.style.borderBottom = "none";
    }

    mobileBtn.addEventListener("click", openBurger);
    closeBtn.addEventListener("click", closeBurger);

    function openBurger() {
        console.log("open burger");
        burger.style.display = "block";
        mobileBtn.style.display = "none";
    }

    function closeBurger() {
        burger.style.display = "none";
        mobileBtn.style.display = "block";
    }

    eventsHover.addEventListener("mouseenter", eventsOn);
    eventsHover.addEventListener("mouseleave", eventsOff);

    frivillighedHover.addEventListener("mouseenter", frivillighedOn);
    frivillighedHover.addEventListener("mouseleave", frivillighedOff);

    udlejningHover.addEventListener("mouseenter", udlejningOn);
    udlejningHover.addEventListener("mouseleave", udlejningOff);

    omHover.addEventListener("mouseenter", omOn);
    omHover.addEventListener("mouseleave", omOff);

    kontaktHover.addEventListener("mouseenter", kontaktOn);
    kontaktHover.addEventListener("mouseleave", kontaktOff);

    faqHover.addEventListener("mouseenter", faqOn);
    faqHover.addEventListener("mouseleave", faqOff);

    stageHover.addEventListener("mouseenter", stageOn);
    stageHover.addEventListener("mouseleave", stageOff);

    musikcafeHover.addEventListener("mouseenter", musikcafeOn);
    musikcafeHover.addEventListener("mouseleave", musikcafeOff);

    biografHover.addEventListener("mouseenter", biografOn);
    biografHover.addEventListener("mouseleave", biografOff);

    bastardenHover.addEventListener("mouseenter", bastardenOn);
    bastardenHover.addEventListener("mouseleave", bastardenOff);

    spisehusetHover.addEventListener("mouseenter", spisehusetOn);
    spisehusetHover.addEventListener("mouseleave", spisehusetOff);

    stardustHover.addEventListener("mouseenter", stardustOn);
    stardustHover.addEventListener("mouseleave", stardustOff);

    cafeHover.addEventListener("mouseenter", cafeOn);
    cafeHover.addEventListener("mouseleave", cafeOff);

    function eventsOn() {
        eventsHover.style.textShadow = "0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered";
    }

    function eventsOff() {
        eventsHover.style.textShadow = "none";
    }

    function frivillighedOn() {
        frivillighedHover.style.textShadow = "0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered";
    }

    function frivillighedOff() {
        frivillighedHover.style.textShadow = "none";
    }

    function udlejningOn() {
        udlejningHover.style.textShadow = "0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered";
    }

    function udlejningOff() {
        udlejningHover.style.textShadow = "none";
    }

    function omOn() {
        omHover.style.textShadow = "0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered";
    }

    function omOff() {
        omHover.style.textShadow = "none";
    }

    function kontaktOn() {
        kontaktHover.style.textShadow = "0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered";
    }

    function kontaktOff() {
        kontaktHover.style.textShadow = "none";
    }

    function faqOn() {
        faqHover.style.textShadow = "0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered";
    }

    function faqOff() {
        faqHover.style.textShadow = "none";
    }

    function stageOn() {
        stageHover.style.textShadow = "0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered";
    }

    function stageOff() {
        stageHover.style.textShadow = "none";
    }

    function musikcafeOn() {
        musikcafeHover.style.textShadow = "0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered";
    }

    function musikcafeOff() {
        musikcafeHover.style.textShadow = "none";
    }

    function biografOn() {
        biografHover.style.textShadow = "0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered";
    }

    function biografOff() {
        biografHover.style.textShadow = "none";
    }

    function bastardenOn() {
        bastardenHover.style.textShadow = "0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered";
    }

    function bastardenOff() {
        bastardenHover.style.textShadow = "none";
    }

    function spisehusetOn() {
        spisehusetHover.style.textShadow = "0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered";
    }

    function spisehusetOff() {
        spisehusetHover.style.textShadow = "none";
    }

    function stardustOn() {
        stardustHover.style.textShadow = "0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered";
    }

    function stardustOff() {
        stardustHover.style.textShadow = "none";
    }

    function cafeOn() {
        cafeHover.style.textShadow = "0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered";
    }

    function cafeOff() {
        cafeHover.style.textShadow = "none";
    }
}
