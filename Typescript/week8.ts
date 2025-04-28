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

// partials in typescript 


interface Todo {
    title : string;
    description : string;
    id : number;
    completed : boolean;
}

interface UpdateTodoInput{ // here the question mark means title can be a string or nothing as well 
    title?: string;
    description?: string;
    id?: number;
    completed?: boolean;
}

// here UpdateTodoInput and UpdateTodoInput2 are the same thing as partial lets u pass value like -- 
// either this or nothing 
// so if partial not there we need to define every interface like UpdateTodoInput
// so basically partial says -- to update the todo no need to send in all the things if u send one thing as well it is fine
type UpdateTodoInput2 = Partial<Todo>;

function UpdateTodo(id : number,newProp : UpdateTodoInput){

}


UpdateTodo(1,{
    description : "new task"
})

