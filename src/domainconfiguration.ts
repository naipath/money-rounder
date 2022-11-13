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

export const defaultFormatter = (input: number) => euroFormat.format(input)
export const defaultTextParser = parseEuroToNumber

export const domainSelectors: DomainSelectors = {
    "www.ah.nl": [
        {
            selector: ".price-amount_root__37xv2",
            textParser: (input) =>
                input
                    .replace("€", "")
                    .replace(".", ".")
                    .replace(",", ".")
                    .replace("-", "")
                    .replace("\n  ", ".")
                    .trim()
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
        {selector: ".StyledPriceTypo-jah2p3-7"},
        {selector: ".WholePrice-sc-1r6586o-7"},
        {selector: ".StyledStrikePriceTypo-sc-1aiqwai-0"}
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
