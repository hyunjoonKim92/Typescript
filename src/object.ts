// 일반 객체 타입 정의
// typescript 를 사용하는 이유가 없기 때문에 아래와 같이 사용하지는 않는다.
let normalObj: object;
normalObj = {
    name: "mine",
    age: 3,
};
normalObj = {
    obj: {},
    arr: [],
    boal: true,
};

// 값 별 타입 지정
let typeObj: {
    name: string;
    age: number;
} = {
    name: "it-record",
    age: 3,
};

// typeObj.lang = "typescript"; => error: "{name: string; age: number;}" 형식에 "lang" 속성이 없습니다.

// 기타 사용 방법
type myType = {
    name: string;
    age: number;
};

let myTypeObj: myType = {
    name: "it-record",
    age: 3,
};

// Type Alias + Index Signature + Union Type
type mineType = {
    [key: string]: string | number;
};

let mineObj: mineType = {
    name: "mine",
    age: 2,
};

mineObj.record = "it-blog";


// Array
// 일반 배열 타입 정의
const fruits: string[] = ["apple", "lemon", "orange"];
const numbers: Array<number> = [1, 2, 3];

// 다중 타입 정의
const nums: (string | number)[] = [1, "1"];


// Tuple
// 일반 Tuple 타입 정의
let animal: [string, number];
animal = ["cat", 2];

// animal = ["cat", 2, 3]; => error: "[string, number, nubmer]" 형식은 "[string, number]" 형식에 할당할 수 없습니다.