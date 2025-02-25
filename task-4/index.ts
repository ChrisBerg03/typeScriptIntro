// generics

// function returnValue<T>(value: T): T {
//     return value;
// }

// const numVal = returnValue<number>(10);
// const textVal = returnValue<string>("text");

function sum(a: number, b: number): number {
    return a + b;
}
console.log(sum(5, 2));
