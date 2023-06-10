import {moneyRounding} from "./moneyrounder";
import {defaultFormatter, defaultTextParser, domainSelectors} from "./domainconfiguration";

function fixPrices() {
    const domain = window.location.hostname
    const domainSelector = domainSelectors[domain];
    if (!domainSelector) {
        console.debug(`Domain ${domain} is not supported`)
        return
    }
    domainSelector.forEach(domainSelector => {
        for (let element of document.querySelectorAll(domainSelector.selector)) {
            if (element.textContent && element.textContent.trim() !== "" && !element.classList.contains("touched-by-money-rounder")) {
                const textParser = domainSelector.textParser || defaultTextParser
                const formatter = domainSelector.formatter || defaultFormatter
                element.innerHTML = formatter(moneyRounding(Number.parseFloat(textParser(element.textContent))))
                if (!element.classList.contains("touched-by-money-rounder")) {
                    element.classList.add("touched-by-money-rounder")
                    setTimeout(() => element.classList.add("fade-out"), 200)
                }
            }
        }
    })
}

// Try on initial page load
// Then after 400 milliseconds
// Then every 1000 milliseconds
fixPrices()
setTimeout(fixPrices, 400)
setInterval(fixPrices, 1000)
