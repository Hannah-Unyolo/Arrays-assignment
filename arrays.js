//Find the last elements
let arr1 = [3,7,34,90,12]
let arr2 = ["true", "green","where",12,56]

console.log('last item', arr1.slice(-1));
console.log('last item', arr2.slice(-1));

//Write a JS program that will join the following array elements into a stringmyPets = ["Cow", "Bird", "Snake", "Dog"];
let stringmyPets = ["Cow","Bird","Snake","Dog"]
let joinedpets = stringmyPets.join()
console.log({stringmyPets})

//Write a JS script to sort the following array itemsvar arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ]
let sortedarray = arr3.sort()
console.log({arr3})

//Write a program to remove duplicates from the following array.Console the array without duplicates, and console another array that only contains the duplicates let arr = ["boy", "man", "girl",            "school", "girl", "woman"];
let arr = ["boy", "man", "girl","school", "girl", "woman"];
let removeDuplicates = [];
let duplicates = [];
arr.forEach(g =>{
    if (removeDuplicates.includes(g)){
        removeDuplicates.push(g);
    }
    else(duplicates.push(g));
});
console.log({removeDuplicates});
console.log({duplicates});

//Write a JS script to search for the following word in the array."food"If the word is present, return it else return "the search word was not found"let arr5 = ["the", "way", "x", 4];
let arr5 = ["the", "way", "x", 4]
let word = "way";
let textIndex = arr5.indexOf(word);
if (word== arr5["way"]){
   console.log({word})
}
else{
   console.log("The search was not found ")
}
//Write a JS script to sort the following string:let word = "renniw"
let text =  "renniw";
function newSort (word) {
    return word.split("")
.sort()
 .join("");
}

//Using an array of fruits with length 10 , insert 'Tomato' at the 5th index 
let fruits=["Watermelon","Orange","Apple","Mango","Pear","Tomato","Grape","Lemons","Pineapple","Banana"]
fruits.splice(5, 0, "Granadilla");
console.log({fruits});