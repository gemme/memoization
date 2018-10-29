/**
 * Javascript
 * function as first-class citizen
 * can apply techique like memoization for caching values
 * and faster response
 * @param {*} a
 * @param {*} b
 */

const memoization = (a, b) => {
    memoization.cache = memoization.cache || {};

    if(memoization.cache[`${a},${b}`]) return memoization.cache[`${a},${b}`];

    const result = a * b * Math.pow(12345, 10);//large number
    memoization.cache[`${a},${b}`] = result;
    // logging cache
    console.log(memoization.cache);
    return result;
};

// caching values
console.time("memoization1");
    memoization(30, 40);
console.timeEnd("memoization1");
console.time("memoization1.2");
    memoization(30, 40);
console.timeEnd("memoization1.2");
console.time("memoization2");
    memoization(40, 50);
console.timeEnd("memoization2");
console.time("memoization2.2");
    memoization(40, 50);
console.timeEnd("memoization2.2");