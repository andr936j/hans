document.addEventListener("DOMContentLoaded", runScript);

function runScript() {
    console.log("SIDEN ER LOADET");

    let menuHover = document.querySelector(".menu_box");

    let menuBar = document.querySelector(".menu_bar");

    let skiltMenu = document.querySelector(".border");

    let glowMenu = document.querySelector(".menu_bar h1");

    let eventsHover = document.querySelector(".events");

    let frivillighedHover = document.querySelector(".frivillighed");

    let udlejningHover = document.querySelector(".udlejning");

    let omHover = document.querySelector(".om");

    let kontaktHover = document.querySelector(".kontakt");

    let faqHover = document.querySelector(".faq");

    let husetsScener = document.querySelector(".husets_scener");

    let scenerHover = document.querySelector(".scener");

    let stageHover = document.querySelector(".stage");

    let musikcafeHover = document.querySelector(".musikcafe");

    let biografHover = document.querySelector(".biograf");

    let bastardenHover = document.querySelector(".bastarden");

    let spisehusetHover = document.querySelector(".spisehuset");

    let stardustHover = document.querySelector(".stardust");

    let cafeHover = document.querySelector(".cafe");

    let glowFire = document.querySelector(".tal_fire h1");

    let talFire = document.querySelector(".tal_fire");

    let glowTre = document.querySelector(".tal_tre h1");

    let talTre = document.querySelector(".tal_tre");

    let glowTo = document.querySelector(".tal_to h1");

    let talTo = document.querySelector(".tal_to");

    let glowEt = document.querySelector(".tal_et h1");

    let talEt = document.querySelector(".tal_et");

    let glowNul = document.querySelector(".tal_nul h1");

    let talNul = document.querySelector(".tal_nul");

    let fireHover = document.querySelector(".fire");

    let skiltFire = document.querySelector(".border_fire");

    let treHover = document.querySelector(".tre");

    let skiltTre = document.querySelector(".border_tre");

    let toHover = document.querySelector(".to");

    let skiltTo = document.querySelector(".border_to");

    let etHover = document.querySelector(".et");

    let skiltEt = document.querySelector(".border_et");

    let nulHover = document.querySelector(".nul");

    let skiltNul = document.querySelector(".border_nul");

    let mobileBtn = document.querySelector(".mobile-btn");

    let burger = document.querySelector(".burger");

    let closeBtn = document.querySelector(".close");

    menuHover.addEventListener("mouseenter", visPunkter);
    menuHover.addEventListener("mouseleave", gemPunkter);

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

    husetsScener.addEventListener("click", scenerUd);
    husetsScener.addEventListener("click", scenerInd);

    function scenerUd() {
        console.log("VIS SCENER")
        scenerHover.style.display = "block";
    }

    function scenerInd() {
        //        if (scenerHover.style.display = "block") {
        //            scenerHover.style.display = "block";
        //        } else {
        //            scenerHover.style.display = "none";
        //        }
    }

    fireHover.addEventListener("mouseenter", visFire);
    fireHover.addEventListener("mouseleave", gemFire);

    treHover.addEventListener("mouseenter", visTre);
    treHover.addEventListener("mouseleave", gemTre);

    toHover.addEventListener("mouseenter", visTo);
    toHover.addEventListener("mouseleave", gemTo);

    etHover.addEventListener("mouseenter", visEt);
    etHover.addEventListener("mouseleave", gemEt);

    nulHover.addEventListener("mouseenter", visNul);
    nulHover.addEventListener("mouseleave", gemNul);

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
        scenerHover.style.display = "none";
    }

    function visPunkter() {
        console.log("VIS PUNKTER");
        menuHover.style.left = "-15px";
        skiltMenu.style.background = "black";
        glowMenu.style.textShadow = "0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered";

    }

    function gemPunkter() {
        console.log("GEM PUNKTER");
        menuHover.style.left = "-178px";
        skiltMenu.style.background = "none";
        menuBar.style.border = "1px grey solid";
        glowMenu.style.textShadow = "0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered"

    }

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

    function stageOn() {
        stageHover.style.borderBottom = "2px solid orangered";
    }

    function stageOff() {
        stageHover.style.borderBottom = "none";
    }

    function musikcafeOn() {
        musikcafeHover.style.borderBottom = "2px solid orangered";
    }

    function musikcafeOff() {
        musikcafeHover.style.borderBottom = "none";
    }

    function biografOn() {
        biografHover.style.borderBottom = "2px solid orangered";
    }

    function biografOff() {
        biografHover.style.borderBottom = "none";
    }

    function bastardenOn() {
        bastardenHover.style.borderBottom = "2px solid orangered";
    }

    function bastardenOff() {
        bastardenHover.style.borderBottom = "none";
    }

    function spisehusetOn() {
        spisehusetHover.style.borderBottom = "2px solid orangered";
    }

    function spisehusetOff() {
        spisehusetHover.style.borderBottom = "none";
    }

    function stardustOn() {
        stardustHover.style.borderBottom = "2px solid orangered";
    }

    function stardustOff() {
        stardustHover.style.borderBottom = "none";
    }

    function cafeOn() {
        cafeHover.style.borderBottom = "2px solid orangered";
    }

    function cafeOff() {
        cafeHover.style.borderBottom = "none";
    }

    function eventsOn() {
        eventsHover.style.borderBottom = "2px solid orangered";
    }

    function eventsOff() {
        eventsHover.style.borderBottom = "none";
    }

    function frivillighedOn() {
        frivillighedHover.style.borderBottom = "2px solid orangered";
    }

    function frivillighedOff() {
        frivillighedHover.style.borderBottom = "none";
    }

    function udlejningOn() {
        udlejningHover.style.borderBottom = "2px solid orangered";
    }

    function udlejningOff() {
        udlejningHover.style.borderBottom = "none";
    }

    function omOn() {
        omHover.style.borderBottom = "2px solid orangered";
    }

    function omOff() {
        omHover.style.borderBottom = "none";
    }

    function kontaktOn() {
        kontaktHover.style.borderBottom = "2px solid orangered";
    }

    function kontaktOff() {
        kontaktHover.style.borderBottom = "none";
    }

    function faqOn() {
        faqHover.style.borderBottom = "2px solid orangered";
    }

    function faqOff() {
        faqHover.style.borderBottom = "none";
    }

    function visFire() {
        fireHover.style.left = "172px";
        fireHover.style.position = "relative";
        skiltFire.style.background = "black";
        glowFire.style.textShadow = "0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered";

    }

    function gemFire() {
        fireHover.style.left = "0px";
        fireHover.style.position = "relative";
        skiltFire.style.background = "none";
        glowFire.style.textShadow = "0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered";
    }

    function visTre() {
        treHover.style.left = "172px";
        treHover.style.position = "relative";
        skiltTre.style.background = "black";
        glowTre.style.textShadow = "0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered";

    }

    function gemTre() {
        treHover.style.left = "0px";
        treHover.style.position = "relative";
        skiltTre.style.background = "none";
        glowTre.style.textShadow = "0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered";

    }

    function visTo() {
        toHover.style.left = "172px";
        toHover.style.position = "relative";
        skiltTo.style.background = "black";
        glowTo.style.textShadow = "0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered";

    }

    function gemTo() {
        toHover.style.left = "0px";
        toHover.style.position = "relative";
        skiltTo.style.background = "none";
        talTo.style.boxShadow = "none";
        glowTo.style.textShadow = "0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered";
    }

    function visEt() {
        etHover.style.left = "172px";
        etHover.style.position = "relative";
        skiltEt.style.background = "black";
        glowEt.style.textShadow = "0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered";
    }

    function gemEt() {
        etHover.style.left = "0px";
        etHover.style.position = "relative";
        skiltEt.style.background = "none";
        glowEt.style.textShadow = "0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered";
    }

    function visNul() {
        nulHover.style.left = "172px";
        nulHover.style.position = "relative";
        skiltNul.style.background = "black";
        glowNul.style.textShadow = "0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered, 0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered";

    }

    function gemNul() {
        nulHover.style.left = "0px";
        nulHover.style.position = "relative";
        skiltNul.style.background = "none";
        glowNul.style.textShadow = "0px 0px 10px orangered, 0px 0px 20px orangered, 0px 0px 30px orangered, 0px 0px 40px orangered, 0px 0px 50px #ff4500, 0px 0px 60px orangered, 0px 0px 70px orangered";
    }

}
