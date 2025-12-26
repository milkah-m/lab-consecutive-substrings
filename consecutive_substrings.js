
//CONSECUTIVE SUBSTRINGS PSEUDOCODE// given string "bottle"
   //1. split string into array ["b", "o", "t", "t", "l" "e"]
   //2. return 
       //array index from 0[b]
       //add the next element [b, bo]
       //proceed until i have gotten all elements in order [b, bo, bott, bott, bottl, bottle ]
       //remove the first element from the array so that it now looks like [o, t, t, l, e]
       //repeat from step 1
       //how do i implement code for this?

function consecutiveSubstrings(string){
  
  const stringArray = [...string]
  let newArray = [];

const substringer = () => {
  for(i=0; i<stringArray.length; i++){
 const result = stringArray.slice(0, i+1)
 const substring = result.join("")
 newArray.push(substring)

}
}

while(stringArray.length > 0){
substringer()
stringArray.splice(0, 1)


}

return newArray

}

console.log(consecutiveSubstrings("hello"))






module.exports = consecutiveSubstrings;



