export default function Price(price) {
    return price.split('').reverse().join('').replace(/(\d{3}|\d{2}|\d{1})/g,
        (match, i, org) => {
        if (org == 0)
            return 'nioc '+ match
        else
            return '.' + match
    }).split('').reverse().join('')
}