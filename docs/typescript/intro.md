---
sidebar_position: 1
---

# Introduction To TypeScript

TypeScript is a superset of javascript and it helps us to add type definition to our javaScript program.

### Running our first TypeScript Program

Here we will run our first typescript program and on the way we will know its basic concept of how it works

Following are the steps we will take while writing our first ts program

1. Make a node project by running follwing command

```jsx
mkdir learnTs
cd learnTs
npm init -y
```

1. Now add typescript as the dev dependencies by running the following command

```jsx
npm i -D typescript
```

1. Now our next task is to make the proper folder structure of our project like this (optional)

```jsx
| -src

    | -hello.js

| -tsconfig.json

| -package.json;
```

1. Now you will be wondering what is this tsconfig.json. Isn't it ?. Well tsconfig.json is basically the config file to the typescript compiler on how to process our javascript program. So our tsconfig will somehow look like this

```jsx
{
  "compilerOptions": {
    "outDir": "dist", // where to put the TS files
    "target": "Es2013", // which level of JS support to target
    "module": "CommonJS" // which module to support
  },
  "include": ["src"] // which files to compile
}
```

And our package.json file will look like this

```jsx
{
  "name": "hello-ts",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "dev": "tsc --watch --preserveWatchoutput" // it will tsc in watch mode and preserve
																							 // watch output
  },
  "devDependencies": {
    "typescript": "^4.5.4"
  }
}
```

You can read more about here [https://www.typescriptlang.org/tsconfig/#preserveWatchOutput](https://www.typescriptlang.org/tsconfig/#preserveWatchOutput)

1. Now we have the bare minimum setup to run our first TypeScript program now let’s write a very basic program in `hello.ts`

```jsx
/**
 * Create a promise that resolves after some time
 * @param n number of milliseconds before promise resolves
 */
function timeout(n: number) {
  return new Promise((res) => setTimeout(res, n));
}

/**
 * Add three numbers
 * @param a first number
 * @param b second
 */
export async function addNumbers(a: number, b: number) {
  await timeout(500);
  return a + b;
}

//== Run the program ==//
(async () => {
  console.log(await addNumbers(3, 4));
})();
```

You can see in the program we are doing the following things:

1. We are making a timeout function which is resolving a promise after a certain time.
2. Then we are making an async function where we are having two parameters a and b with type as a number
3. Finally, we are immediately calling the add number and logging it to the console.

> That’s overwhelming I think 😁.\

Now let’s open our terminal and run this program

```jsx
npm run dev
```

After running the command you will see an error yelling that you are using Promise which is not a part of es@013 as we have specified in our tsconfig file hence you need change to change the target to es2015. However, you will also see a dist folder created inside your src directory and inside it, there will be a file called `hello.js`. This is the file built by the typescript after running through the typescript compiler. And when you will open the file you will se a whole lot of unusual javascript and polyfills and your 20 lines of code became 50 lines of code there. But wait what actually is happening there ?.

As we have specified the target in our config as es2013 while is I.E compatible hence typescript compiler built it that way to make it compatible adding all the polyfills that required.

---

Now if we change our target from es2013 to es2015 you will see that the hello.js in the dist folder became much shorter having fewer of the polyfills.

---

Now if we make it to es2017 you will see just the same javascript that you wrote in hello.ts except the type definition.

### Conclusion

Here we say that typescript helps us to identify some possible bugs before the code even reaches to the browser in the compile-time only and hence it helps us to ship code with less error. Another good reason to use typescript is that the javscript engine whether it v8, spidermonkey, chakra, webkit all have their own type system while they compile your code and hence when we write code with proper type definition it helps the compiler to optimize it properly making our applications faster and more reliable.

Learn more about it here [https://v8.dev/blog/launching-ignition-and-turbofan](https://v8.dev/blog/launching-ignition-and-turbofan)

> Credits

1. Mike North's Course on TypeScript from Frontend Master : https://frontendmasters.com/courses/typescript-v3/
2. TypeScript Docs : https://www.typescriptlang.org/
