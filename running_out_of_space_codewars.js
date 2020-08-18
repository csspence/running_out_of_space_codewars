/*
Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing. For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace'].
*/

const spacey = (array) => {
  let newArr = [];
  let index = 1;
  for(let i = 0; i < array.length; i++) {
    let tempArr = array.slice(0,index);
    let tempString = tempArr.join('');
    newArr.push(tempString);
    index++;
  }

  return newArr;
}