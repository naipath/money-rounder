interface DomainSelector {
    selector: string;

    formatter?(input: number): string;

    textParser?(input: string): string
}

interface DomainSelectors {
    [key: string]: DomainSelector[]
}

const euroFormat: Intl.NumberFormat = new Intl.NumberFormat("nl-NL", {currency: "EUR", style: "currency"})
const dollarFormat: Intl.NumberFormat = new Intl.NumberFormat('en-US', {currency: "USD", style: "currency"})

const parseEuroToNumber = (input: string) => {
    return input
        .replace("€", "")
        .replace(".", "")
        .replace(",", ".")
        .replace("-", "")
        .replace("\n  ", ".")
        .trim()
}

const parseDollarToNumber = (input: string) => {
    return input
        .replace("$", "")
        .replace(",", "")
        .replace("-", "")
        .trim()
}

const parseEuroToNumberWithWrongDots = (input: string) =>
    input
        .replace("€", "")
        .replace(".", ".")
        .replace(",", ".")
        .replace("-", "")
        .replace("\n  ", ".")
        .trim()

export const defaultFormatter = (input: number) => euroFormat.format(input)
export const defaultTextParser = parseEuroToNumber

export const domainSelectors: DomainSelectors = {
    "www.ikea.com": [
        {
            selector: ".pip-temp-price-module__price",
            textParser: parseEuroToNumberWithWrongDots
        },
        {
            selector: ".pip-price",
            textParser: parseEuroToNumberWithWrongDots
        }
    ],
    "www.ah.nl": [
        {
            selector: ".price-amount_root__37xv2",
            textParser: parseEuroToNumberWithWrongDots
        }
    ],
    "tweakers.net": [
        {selector: ".price>.pwlink"},
        {selector: ".shop-price>p>a"},
        {selector: ".shop-bare-price>p>a"},
        {selector: ".shops>.price"}
    ],
    "www.coolblue.nl": [
        {selector: ".sales-price__current"},
        {selector: ".configurator__sales-price"},
        {selector: ".product-option--price"}
    ],
    "www.mediamarkt.nl": [
        {selector: ".sc-hLBbgP.hrNqNI"},
        {selector: ".sc-hLBbgP.casGRl"},
        {selector: ".sc-hLBbgP.cqEIjg"},
        {selector: ".sc-hLBbgP.gBcJZS"},
        {selector: ".sc-hLBbgP.qDhCX"},
        {selector: ".sc-hLBbgP.cQYlSZ"},
    ],
    "www.bol.com": [
        {
            selector: ".product-prices__currency",
            formatter: (input: number) => euroFormat.format(input).replace("€", "")
        },
        {selector: ".promo-price"}
    ],
    "www.logitech.com": [
        {
            selector: ".pricing-info",
            textParser: parseDollarToNumber,
            formatter: (input) => dollarFormat.format(input),
        }
    ]
}
