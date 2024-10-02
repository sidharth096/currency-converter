import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_Lw9dZ7Kh7EUZmupAIOksUqHNN1nr6U6heLzUKKjX');

export async function convertCurrency(fromCurrency,toCurrency,units) {
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    })
    
    const multiplier = res.data[toCurrency]    
    return multiplier*units
    
}