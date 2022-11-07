export function moneyRounding(amount: number): number {
    const tenCentsRemainder = rounded(amount % 1)
    if (tenCentsRemainder >= 0.9) {
        return amount - tenCentsRemainder + 1
    }
    const centRemainder = rounded(amount * 10 % 1)
    if (centRemainder >= 0.9) {
        return amount + 0.01
    }
    if (amount > 10) {
        const euroRemainder = rounded(amount / 10 % 1)
        if (euroRemainder >= 0.9) {
            return amount + 1
        }
    }
    return amount;
}

const rounded = (input: number, fraction: number = 4): number =>
    Number(input.toFixed(fraction))