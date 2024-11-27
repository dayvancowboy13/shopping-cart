export function checkPriceDecimal(price) {
    price = "" + price;
    if (price === undefined) return;
    if (price.split('.').length === 1) {
        return (price + ".00");
    }
    if (price.split('.')[1].length === 2) return price;
    else if (price.split('.')[1].length === 1) {
        return (price + "0");
    }
    else if (price.split('.')[1].length > 2) {
        let wholeNumber = price.split('.')[0];
        let decimal = price.split('.')[1];

        return (wholeNumber + decimal[0] + decimal[1])
    }
}