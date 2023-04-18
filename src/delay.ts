

/**
 * 
 * @param millisec szám érték , egy adott időt milisecond-ban
 * @returns @param millisec időnyi szünetet 
 */
export default function delay(millisec: number) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, millisec);
    })
}
