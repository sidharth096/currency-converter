import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_Lw9dZ7Kh7EUZmupAIOksUqHNN1nr6U6heLzUKKjX');

export async function convertCurrency(fromCurrency, toCurrency, units) {
    try {
        // Fetch the latest exchange rates
        const res = await freecurrencyapi.latest({
            base_currency: fromCurrency,
            currencies: toCurrency
        });

        // Check if the response has data for the requested currency
        if (res?.data && res.data[toCurrency]) {
            const multiplier = res.data[toCurrency];
            return multiplier * units;
        } else {
            throw new Error(JSON.stringify(res.errors));
        }
    } catch (error) {
       return error
    }
}
