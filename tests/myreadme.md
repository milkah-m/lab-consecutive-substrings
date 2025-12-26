GOAL: to find all consecutive substrings. when i am given a word, i should return 'consecutive permutations' that reduce by one for each letter. basically. this is for search feature optimization. i got the hint that i could use an array loop to go through it. sounds like a plan. i am thinking i should write a function called consecutiveSubstrings, implement the array looping logic inside it and have it return the consecutive substrings. honestly, o don't quite get the whole consecutive substrings logic for a search function because why am i getting that when i am searching. wouldn't i want suggestions of words that are close to what ia m searching for?? what exactly is the point of consecutive substrings in a search feature, i don't quite get it.

                                                 GRADING CRITERIA
//1. correctly solve algorithmic problem
//2. come up with solution
//3. determine time complexity

                                            //STRATEGIC & CONCISE QUESTIONS//
1. how exactly do consecutive substrings improve a search feature?
   answer: they enable the system to recognize the word even if the user grabs it from the middle or stops typing early
2. what's the exact method for converting a string into an array?
    answer: by using .split or spread syntax. apparently speead syntax is better and more modern and it handles unicode better than .split. alway remmeber to use square brackets for an array
3. how do i get my new array to return the consecutive substrings? what methods should i use after splitting?? like if i now have ["b" "o" "t" "t" "l" "e"] how do i get it to give me ["b" "bo" "bot" "bott" bottl" "bottle" ...] and so on subtracting one letter each time until i am left with one?? something like return index[0], index[0, 1]. but how do i know how long the string is...?? to get it to give me the all the indices??? a for loop maybe using array.length-1??
4. what is the basic for loop structure: for (initialization; condition; update) {
  // code to run each iteration
} for (let i=0, i < array.length, i++). do i need to have defined i before always, specifically if i am dealing with an array?? or does it just automatically know...??
5. how do i get my for loop to give me the first two indices of my array after giving me the first one? like with bottle?
6. how do i automate the process of logging each index consecutively without having to use 20 million console.logs??
7. after automation, how do i get it to splice the first index from the array and then repeat the same process?
8. how do i get it to repeat all this until it is done??
9. how do i add or concatenate elements in an array?
    //answer: the question i was really asking here is how do i build a cumulative array. the answer is this: copy my consecutive arrays using .slice. an array method that COPIES the elements from a given index up to the index before the specified end. copying is the name of the game. 
10. how to get an array of arrays to equal one single array?
    //answer: use .flat :) welp that was easily straightforward
11. how do i remove the first element and then get it to do the same thing again?
12. how do i remove the first element?
    //answer: using .splice
13. how do i get my function to remove the first element of an array after a loop has ran?
14. can i await a for loop to finish running in order to start another task afterward? in my case, can i wait for the cumulative array building loop to finish before i remove the first element of the original array and then run the loop again?
15. so... when i splice the word, it is 
16. how do i create a loop that:
    //removes the first index of my word array
    // runs the substringer array
    //stops when the array is empty
17. how do i say when stringArray has elements?
    //answer: while stringArray.length is equal to zero. yassss use .length to check if an array has elements. .length!
18. so am i right in saying that my consecutive substrings function has a big O of 2^n because my "runtime" increases exponentially as input increases. though runtime doesn't actually seem to be increasing...
     //answer: BIG O measures how the number of operation grows as the input size grows. it is not about cpu speed, it is about work being put in
19. .join() doesn't seem to remove commas. how do i do that?? 
    //answer: use "" but i feel like this might give me one long concatenated string

                                            //CONSECUTIVE SUBSTRINGS//
1. letters must stay in order
2. letters must be next to each other
3. consecutive substrings have: some of the letters, in order, and ajacent
4. let me recognize the word even if the user grabs it from the middle or stops typing early
5. soooo... i get undefined when i set it equal to newArray without pushing.
6. always use return outside of loops
7. basically i want to:
    //remove the first index of the string after the loop to basically remain with the word minus first letter
    //run that for loop again and then do the remove thing again
    //then when the array is empty, return the whole thing
    // i might need to implement await to wait for the loop to end
    //how to go about this??
8. use a while loop!!!!!!!!!! yassss that worked!!! thank-YOU, Jesus. i am so so happy :) that was truly a still small voice typa moment

                                           //BUILDING CUMULATIVE ARRAYS//
1. each new array is my previous array ["b"] + the next element ["b", "o"]
2. i copy the previous array, ["b"], add one item ["o"] and then store the result ["b", "o"]
3. i cannot reuse the same array or everything will change together. cant reuse the ["b" ] array
4. to build a cumulative array i must create a new array at each step using copying
5. 

                                         //SLICE OPERATOR//
1. slice (start, end): copies an array index from the start and stops just before the end. start inclusive, end exclusive.

                                        //BIG O NOTATION//
1. ... i think my problem is an O(2^n) type of situation because runtime increases by double or more when i add letters to my string input. but what...? to me it seems like it is the same runtime for "bottle" and "unbelievable" which is double bottle's input. lemme see. there doesn't seem to be any lag but maybe there would be one if i was running a real program...? LORD, please help me understand this big O business. 
2. okay, mine is almost definitely 2^n because if i double input, my output increases exponentially.
3. actually no!! mine is factorial because with every new input i increase possibilities of combinations. i multiply total arrangements with every new input.
4. okay. so in my function consecutive substrings. the scalable element is my newString array. with every new input into this array (extra letter), the number of output possibilities are multiplied. because of this i think that the big O of newString is 
O(newString!)
   - scalable element
   - how does input affect output?
5. NO!! i was off. kinda way off actually though chat has to be a darl about it. basically... the big O notation for my consecutiveSubstrings function is actually O(n^2). because i loop over the string once and for each iteration i loop over the elements within once. 
6. big O is controlled by how the input size changes the number of operations not by how many results i store



//remove first index
// substringer() //repeat for loop logic

//  substringer ()
// if(newArray = []){
// flat = newArray.flat()
// return flat
// }


  
  

//  



//determining big O
   //okay so my algorithm basically loops through each letter and it grows with input so i think the BIG O = n
   //actually it might be 2^n because it takes different paths. coming back to determine this, i promise!!
   //

// const arr = [1, 2, 3, 4]; - define array
// const result = []; - create an empty array to store results of my operation

// for (let i = 0; i < arr.length; i++) { - create a basic for loop
//   const prefix = arr.slice(0, i + 1); - use the slice method to copy from index 0 to the element in the current index + 1 to get element over index
//   result.push(prefix); //push the resulting array into my empty results array
// }

// console.log(result); //display my result




//1. split string into array
//2. create another array that returns consecutive substrings of the newArray. 
// async function consecutiveSubstrings(string) {