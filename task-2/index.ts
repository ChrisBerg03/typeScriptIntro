const arrayOfNumbers = [1, 2, 3, 4, 5];
const arrayOfStrings = ["one", "two", "three"];

type Post = {
    id: number;
    content: string;
};

// hover "array" to look at type declaration
const array: (string | number | boolean | Post)[] = [
    1,
    "two",
    true,
    { id: 1, content: "test" },
];

type MyType = {
    id: number;
    name?: string;
    age?: number;
    content?: string;
};

const arrayOfObjects: MyType[] = [
    { id: 1, name: "Ola", age: 23 },
    { id: 2, name: "Kari" },
    { id: 3, content: "Test content" },
];
