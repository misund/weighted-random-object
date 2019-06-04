# weighted-random-object
Get a weighted random object from an array of objects with a weight property.

The objects should have a property with key 'weight' and a numerical value.

# Usage
```js
var weightedRandomObject = require("weighted-random-object");

var fruitBasket = [
    {
        "type": "apple",
        "weight": 33
    }, {
        "type": "pear",
        "weight": 66
    }
];

var fruit = weightedRandomObject(fruitBasket);

console.log(fruit.type); // sometimes 'apple', more often 'pear'
```

## Contributing
I appreciate your issues and PRs [on Github](https://github.com/misund/weighted-random-object)!

### Testing
```
yarn build && yarn test
```

### Releasing
This project uses [np](https://github.com/sindresorhus/np).
1. Make sure your changes are in master
2. Run `yarn release`
3. Follow the interactive release guide
