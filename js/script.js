function countOccurrences(arr) {
  const fruitCountMap = new Map();

  for (const fruit of arr) {
    if (fruitCountMap.has(fruit)) {
      fruitCountMap.set(fruit, fruitCountMap.get(fruit) + 1);
    } else {
      fruitCountMap.set(fruit, 1);
    }
  }
  return fruitCountMap;
}

const fruits = ["apple", "banana", "orange", "apple", "banana", "apple"];
const fruitMap = countOccurrences(fruits);
console.log(fruitMap);
