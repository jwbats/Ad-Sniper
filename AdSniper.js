// ==UserScript==
// @name         Ad Sniper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  This script kills ads before they even see the light of day.
// @author       Jay Bats
// @match        *
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nu.nl
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const GetSelector = () => {
        switch (window.location.host)
        {
            case 'frontpage.fok.nl' : return 'div[class*="desktop-billboard"]';
            case 'tweakers.net'     : return 'div[class*="billBoard"], div[class*="halfPage"], div[class*="leaderBoard"], div[class*="originalReplacementBannerStyle"';
            case 'www.nu.nl'        : return 'div[id="header"], iframe[id*="pexi"], iframe[id*="utif"], div[id*="r1"]';
            default                 : return '';
        }
    }

    const funcRemove = () => {
        // get selector by host
        const selector = GetSelector();

        // get all ad elements
        const elements = document.querySelectorAll(selector);

        // iterate & remove
        elements.forEach(element => element.parentNode.removeChild(element));
    };

    // attempt deletion right away
    funcRemove();

    // for good measure, delete on DOM ready
    window.addEventListener('load', function() {
        funcRemove();
    });
})();