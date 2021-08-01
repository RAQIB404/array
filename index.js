//accesing the elements of an array
var animal = ["tiger","lion","leopard","bear"];
console.log(animal[0]);
console.log(animal[2]);

//length of an array
var animal=["tiger","lion","leopard","bear"];
console.log(animal.length);

//adding new elements to an array
var colors=["green","yellow","purple",];
colors.push("red");
console.log(colors);
//prints:red,green,yellow,purple

//removing elements from an array
var colors =["green","yellow","purple"];
colors.pop();
console.log(colors);
//prints:["green","yellow"]

//removing first element 
var colors =["green","yellow","purple"];
colors.shift();
console.log(colors);
//prints:["yellow","purple"]

//adding a new element at the beginning
var colors =["green","yellow","purple"];
colors.unshift("red");
console.log(colors);
//prints:red,green,yellow,purple

//adding or removing elements at any position
var colors =["green","yellow","purple"];
colors.splice(0,1);
console.log(colors);
//prints:yellow,blue

//addind elements at any position
colors.splice(1,0,"red");
console.log(colors);
//prints:yellow,red,blue

//concat
var a=["orange","black"];
var b=["merun","white"];
var c=a.concat(b);
var c=b.concat(a);
console.log(c);

//reversing an element
colors.reverse();
console.log(colors);

//iterating over an array
var animals =["tiger","lion","leopard","bear","dog","cat","bull","elephant","horse","girrafe"];
for(var i=0;i<=animals.length -1; i++){
    console.log(animals[i])
}

