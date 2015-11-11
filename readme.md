# weighted-random-object
Get a weighted random object from an array of objects with a weight property.

The objects should have a property with key 'weight' and a numerical value.

# Usage
```var weightedRandomObject = require("weighted-random-object");

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
