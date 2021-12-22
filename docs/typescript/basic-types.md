---
sidebar-position: 2
---

# Basic Types

In typescript, every variable is born with its type. If we just define a variable with no value it gets the type **`any`. H**owever, if we do assign some value to the variable it gets a type accordingly ass per the value. It is helpful in various scenarios but many times we want to define the types of our variables or functions explicitly so as to make it clear what values our function parameter can hold and what will it return.

To learn more about this let’s start coding a little bit, it will be fun, isn’t it?

<aside>
💡 If you are new to typescript hop into this tutorial to get up and running

</aside>

### Code Setup

Now let’s start with following the steps

1. Make a directory and initialize a node project inside it by running the following command

```jsx
mkdir typescript-types
cd typescript-types
npm init -y
```

1. Now make a folder structure like this

```jsx
|typescript-types

	|-src
		|-types.ts

|tsconfig.json

|package.json
```

1. Add typescript as the dev dependency to the project by running the following command

```jsx
npm i -D typescript
```

1. Add the following to `tsconfig.json`

```jsx
{
  "compilerOptions": {
    "outDir": "dist", // where to put the TS files
    "target": "Es2017", // which level of JS support to target
    "module": "CommonJS"
  },
  "include": ["src"] // which files to compile
}
```

1. Add this script to `package.json`

```jsx
{
...
"scripts": {
    "dev": "tsc --watch --preserveWatchoutput"
  },
}
```

1. Add a basic hello world program in `hello.ts`

```jsx
function sayHello() {
  console.log("Heello Everyone");
}
```

1. Run your typescript compiler in watch mode by running the following command

```jsx
npm run dev
```

I hope everything will be working fine and you will not be getting errors. You can also check the complied output of `hello.ts` as `hello.js` in the dist folder.

### Playing through the code

Now let’s play a little bit with the code to learn more about the type.

Let's remove all our code and from hello.ts and add the following code

```jsx
let name;
const result;
```

and now hover over `name` and `result` . You will be observing that both name and result have the type **any** associated with it.

> This concludes that in typescript when we declare a variable without assigning it any value it gets a type of “any”. It also concludes that in typescript every variable is born with a type.

Now let’s change it a little bit.

```jsx
let personName = "John Doe";
const result = 10;
```

Now hover over `name` and `result` again. Now, what do you observe?

Now you will see that the name has a type of **string** and the result has a type of **10** which is weird I think. Let's go one by one for both.

1. In the first case, we can draw the conclusion that the `name` variable has a string value assigned to it, and hence it gets a type of string. So it shows that typescript adds types to variables according to the value assigned to it. But what will be the case if our code looks like this

```jsx
let personName = "John Doe"; // : string
const result = 10; // : 10
let num = 9; // : number
let bool = false; // : boolean
let undefinedValue = undefined; // : any
let nullValue = null; // : any
let nanValue = NaN; // : number
let arr = ["man", "woman"]; // : []string
let arrNum = [1, 2, 3, 4, 5]; // : []number
let obj = { a: "1", b: 2 }; // {a:string, b:number}
```

While hovering all the variable you will see they all have some types assinged to them which make sense. Hence we can say that when there is a value assinged to our variable they get a type accordingly.

1. In the case of const declaration, we see that it get the type as the value that is assigned to it, which in this case is called literal type. As we know if we declare a variable with const in Javascript it is immutable. The same thing happened in typescript when it gets the type of literal type. You can learn more about it here [https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types)

Now we know that when creating a variable in typescript it gets a type assigned to it which are most often string, number, boolean, and any.

### Type: `any`

Typescript has a special type called `any` which assigned to uninitialized variables, variables having values as `null` , `undefined`. It is also used to whenever someone wants a particualr variable to be not checked by typescript. It is sometimes useful but if you start using it everywheere it will pollute your well typed code. Using type `any` is as dangerous as using javscript without typescript.

<aside>
💡 remove everything in hello.ts and add the code below

</aside>

```jsx
let man;
man = "Mobashir";
let num = 10;

// add function
function addNum(a: number, b: number): number {
  return a + b;
}

console.log(addNum(num, man));
```

Since in the add function we have been declaring the parameter type as number, as well as the return type number yet the typescript compiler doesn’t yell at us when we use man as the arguments in the last. You know why ? this is because when man was born it was having the type `any` and hence it can easily be used as the argument in the add number becuse type `any` implies anything which can be number too.

Here we can see how the vairable man with type `any` can pollute the code very easily. Now lets tweak our code a little bit.

```jsx
let man = "Mobashir";
let num = 10;

// add function
function addNum(a: number, b: number): number {
  return a + b;
}

console.log(addNum(num, man));
```

Now when you will the program you’ll see this error

> error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

Because in this case we have seen that man has a type of `string` and hence the typescript compiler gives the error.

You can learn more about it here [https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any)

<aside>
💡 All the types we have learn above are implicit type declaration mostly and we were not assigning the type to our variable explicitly. Now let’s talk about explicit type declaration how it is more helpful

</aside>

### Explicit Type Declaration

Consider the following code

```jsx
let man: string;
man = 3;
```

Here we have explicitly declared the type of man as `string` and in the next line when we try to assign the value of man to `3` then we get this error.

> Type 'number' is not assignable to type 'string'.

<aside>
💡 Here also we have just declared the variable without assigning the value but here we are explicitly assigning it type and hence it gives error when we try to assign it to other type value.

</aside>

Therefore explicit type declaration is a proper way to declare type when using typescript as it doesn’t pollute your codebase due to having type `any`.

### Declaring Primitive Values

Javascript has three most commonly used type `number`,`string`,`boolean`. Hence in typescipt there is a corresponding type for all the three `number`,`string`,`boolean`. These are the same as when we check the type of any primitive in javascript using `typeof` operator. Consider the code below

```jsx
let num = 15;
console.log(typeof num); // number
let str = "String";
console.log(typeof str); // string
let bool = true;
console.log(typeof bool); // boolean
```

### Declaring Arrays

In javascript, if we want to declare an array we simply write let `arr = []` but in typescript, we have to also declare the value type it will hold.

Now let’s play with code to understand it a little bit more.

Consider this code

```jsx
let arr = []; // type : any
```

When you will hover on `arr` you’ll see it has a type as `any` as we are not specifying what value our will hold. Now let’s add types to it.

```jsx
let arrWithTypeNumber: number[] = []; // type : number[]
let arrWithTypeStrings: string[] = []; // type : string[]
```

Now if we hover on both variables we will see the types assigned to them. Now if we try to push string in the `arrWithTypeNumber`, we will see this error.

> Argument of type 'string' is not assignable to parameter of type 'number'.

Try to run this code you will see the error

```jsx
let arr = [];
let arrWithTypeNumber: number[] = [];
let arrWithTypeStrings: string[] = [];

arrWithTypeNumber.push("hello"); // Argument of type 'string' is not assignable to parameter of type 'number'.
```

This ensures if we have defined our array to just hold number then it will hold only that and if we want to insert something other than it will not let us do so. On the other hand in javascript, we can insert anything into our array and it will not give any error.

### Declaring Tuples

First, understand what is tuple isn’t it ?

> Tuples are basically a sort of list of you can say array but it holds a limited set of items

Code example

```jsx
let userData = ["John Doe", 12356, "Bay Area"];
//								name      pin      address
```

In the above example we are holding the userData in an array with index 0 as the name, index 1 as the PIN, and index 2 as the address. This type of usage of a list is called a tuple. And in javascript we destructure them to use it like this

```jsx
let userData = ["John Doe", 12356, "Bay Area"];
let [name, pin, address] = userData;
```

Now in javascript, we can insert easily insert a number in the position of the name and it will not give any error however it can cause a lot of problems. So in typescript, we can give types to every position and if we then try to insert anything else there it will not let us do so.

Consider this example

```jsx
let userData: [string, number, string] = ["John Doe", 123, "Bay Area"];
userData[0] = 123; // Type 'number' is not assignable to type 'string'.
```

When you will try to run this you will see the error as shown above and that’s really good. However what if we push something at the end of our array. Let’s see what happens

```jsx
let userData: [string, number, string] = ["John Doe", 123, "Bay Area"];
userData.push(123);
userData.push(true); // Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
```

In the first case when we pushed a number into the array the typescript doesn’t yell at us because we are just setting the type it can hold and not the size of the array. Hence we doesn’t get any error. However in the next line when we try to push a boolean value into the array it gives error

> Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

This shows that we can only hold either array or string in our array. And when using tuples we should keep a check on the size as typescript doesn’t specify size of our array.

### Declaring Object Type

Now it is time to learn about the declaration of object type in javascript. In javscript object is everywhere and we use to for a lot of use cases hence we should know how to declare its types.

Let’s start playing with the code a little bit

```jsx
let obj = {};
obj.name = "123"; // Property 'name' does not exist on type '{}'.

let objWithValue = {
  name: "John Doe",
  pin: 12345,
  address: "Bay Area",
};
objWithValue.address = "California"; // no error
objWithValue.name = 123; // Type 'number' is not assignable to type 'string'.
```

When we just declare an empty object and try to add a name property to it, the typescript compiler shows this error

> Property 'name' does not exist on type '{}'.

This shows that when declaring any object in typescript we have to either give the values and let typescript decide its type and yes it is one of the ways. Or we should explicitly define its types like this.

```jsx
let obj: {
  userName: string,
  pin: number,
  address: string,
} = { userName: "John Doe", pin: 12345, address: "Bay Area" };

console.log(obj);
```

### Optional Properties in Objects

We can also specify some optional properties in our object using `?` operator like this

```jsx
let objWithOptionalProperties: {
  userName: string,
  address: string,
  pin?: number,
} = {
  userName: "John Doe",
  address: "Bay Area",
};
```

While writing this you will see no error by the typescript compiler. However if you remove the `?` then it will start showing error. Try this:

```jsx
let objWithOptionalProperties: {
  userName: string,
  address: string,
  pin: number,
} = {
  userName: "John Doe",
  address: "Bay Area",
};

// Error : Property 'pin' is missing in type '{ userName: string; address: string; }' but required in type '{ userName: string; address: string; pin: number; }'.
```

Hence this way we can use optional key using the `?`.

In the next chapter we will learn about declaring function and will also revisit declaring other types again and will observe other use cases.
