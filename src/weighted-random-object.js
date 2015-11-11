/**
 * Get a weighted random object from an array of objects with a weight property.
 *
 * The objects should have a property with key 'weight' and a value that is a number.
 */
module.exports = (objects) => {
    let totalWeight = 0;
    objects.forEach( (object) => {
        totalWeight += object.weight;
    });

    let randomNumber = Math.random() * totalWeight;

    let weightSum = 0;
    return objects.find( (object) => {
        weightSum += object.weight;
        if ( randomNumber <= weightSum) {
            return true;
        }
    });
}
