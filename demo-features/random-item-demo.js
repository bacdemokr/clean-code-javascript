// 랜덤한 기능 간단하게 하나 추가해봐
// PM → Dev. 2026-10-19T00:58:03.371Z

// Usage: node random-item-demo.js
'use strict';

function getRandomItem(items) {
  if (!Array.isArray(items) || items.length === 0) {
    throw new TypeError('getRandomItem(items) requires a non-empty array.');
  }

  return items[Math.floor(Math.random() * items.length)];
}

module.exports = { getRandomItem };

if (require.main === module) {
  const exampleItems = ['apple', 'banana', 'cherry', 'date'];
  console.log(getRandomItem(exampleItems));
}
