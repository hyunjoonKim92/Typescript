// 교차 타입
// 유니언 타입은 조합해서 사용한다고 하면 교차 타입은 여러 가지 타입을 결합해서 사용한다고 생각하면 된다.

type Common = {
    name: string,
    age: number,
    gender: string,
};

type Animal = {
    howl: string,
};

type Cat = Common & Animal;
type Dog = Common | Animal;

let dog: Dog = {
    howl: "dogggg",
};

let cat: Cat = {
    age: 3,
    gender: "C",
    name: "CC",
    howl: "cattttt",
};


type Animal1 = {
    howl: number;
};

type Animal2 = {
    howl: string;
};

type animal1 = Animal1 | Animal2;
type animal2 = Animal1 & Animal2;

let test1: animal1 = {
    howl: "animallll",
};

// error : 'number' 형식은 'never' 형식에 할당할 수 없습니다.
// let test2: animal2 = {
//    howl: 123,
// };