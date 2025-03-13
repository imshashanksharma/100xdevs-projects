// type input = (string | number)[];

// function getfirstelement(arr : input) : (string | number){
//   return arr[0];
// }

// let ans = getfirstelement([1,2,3]);
// let ans2 = getfirstelement(["one","two","three"]);
// console.log(ans);
// console.log(ans2);

// generics in ts ---- 

function getfirstelement<T>(arr : T[]) : T{
  return arr[0];
}

let ans = getfirstelement([1,2,3]);
let ans2 = getfirstelement(["one","two","three"]);


function swap<T>(first : T,second : T) : [T,T] {
    return [second,first];
}

let x = swap(1,2);


// generics advance in Ts (here we can input different data types in the function)

function swapnew<T,U>(a:T,b:U) : [U,T]{
    return [b,a];
}

const newans = swapnew(1,"2"); // here we are inputing and integer and and array 






