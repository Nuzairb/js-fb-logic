var array = ["Banana", "Apples", "Oranges", "Blueberries"];

array.shift();
array.sort();
array.push("Kiwi");
array.splice(0, 1);
array.reverse();

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
array[1][1][0];