//ex1
let a = "some string";
let b = "other string";

a += b;
b = a.substring(0, a.length - b.length)
a =  a.substring(b.length)

console.log(a)
console.log(b)

//ex2
let matrix = [
[1,'x','X',5,'X'],
['X', 'y', 'Y', 'z', '&'],
['A', 'א', '^', true, 5.6],
['*', 'R', 'E', 'L', 'X'],
['x', 3, 'B', 'X', false]
]

for(let i = 0; i< matrix.length; i++)
  for(let j = 0; j < matrix[i].length; j++)
    if((matrix[i][j]) === 'X')
      console.log(`(${i + 1}, ${j + 1})`)
      
//ex3
let family = { parents: {}, children: [ {name: 'Avraham'}, {name: 'Lea'}, {name: 'Rachel'} ] };
console.log(family.children[2].name)



