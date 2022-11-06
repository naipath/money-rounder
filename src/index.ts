import {moneyRounding} from "./moneyrounder";

const currencyFormat = new Intl.NumberFormat("nl-NL", {currency: "EUR", style: "currency"})

interface DomainSelectors {
    [key: string]: string
}

const domainSelectors: DomainSelectors = {
    "www.coolblue.nl": ".sales-price__current",
    "www.mediamark.nl": ".StyledPriceTypo-jah2p3-7"
}

function fixPrices() {
    const domain = window.location.hostname

    const domainSelector = domainSelectors[domain];
    if (!domainSelector) {
        console.debug(`Domain ${domain} is not supported`)
        return
    }

    const elementsByClassName = document.querySelectorAll(domainSelector);
    for (let element of elementsByClassName) {
        if (element.textContent) {
            const next = element.textContent.replace(",", ".").replace("-", "").trim();
            const moneyValue = Number.parseFloat(next)
            element.innerHTML = currencyFormat.format(moneyRounding(moneyValue))
        }
    }
}

window.addEventListener("load", () => setTimeout(fixPrices, 400))
