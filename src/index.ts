import {moneyRounding} from "./moneyrounder";

const currencyFormat = new Intl.NumberFormat("nl-NL", {currency: "EUR", style: "currency"})

interface DomainSelectors {
    [key: string]: string[]
}

const domainSelectors: DomainSelectors = {
    "www.coolblue.nl": [".sales-price__current"],
    "www.mediamarkt.nl": [".StyledPriceTypo-jah2p3-7", ".WholePrice-sc-1r6586o-7"]
}

function fixPrices() {
    const domain = window.location.hostname
    const domainSelector = domainSelectors[window.location.hostname];
    if (!domainSelector) {
        console.debug(`Domain ${domain} is not supported`)
        return
    }

    domainSelector.forEach(selector => {
        for (let element of document.querySelectorAll(selector)) {
            if (element.textContent) {
                const textContent = element.textContent.replace("€", "").replace(",", ".").replace("-", "").trim();
                const moneyValue = moneyRounding(Number.parseFloat(textContent))
                element.innerHTML = currencyFormat.format(moneyValue)
            }
        }
    })
}

fixPrices()
setTimeout(fixPrices, 400)
setInterval(fixPrices, 1000)
