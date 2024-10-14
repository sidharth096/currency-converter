# currency-converter-pro

An NPM package for effortless currency conversion with real-time exchange rates.

## Getting started


## Installation

This package can be installed using `npm`

```
npm i currency-converter-pro

```

## Usage

Import `currency-converter-pro`.

```javascript
import { convertCurrency } from "currency-converter-pro";
```

After you can make function call like this:

Base Currency: The currency you're converting from,
To Currency: The currency you're converting to,
Units: The amount you want to convert   

```javascript
const res = await convertCurrency("USD", "INR", 1);
console.log("res", res);
```

Here
USD : Base Currency,
INR : To Currency,
1 : Units

## Issues

If any issues are found, they can be reported [here](https://github.com/sidharth096/currency-converter/issues).

## License

This project is licensed under Apache


