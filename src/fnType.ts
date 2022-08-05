// 함수에서 타입을 지정해 사용하는 방법
// 일반적인 사용 방법
const plus = (a: number, b: number): number => a + b;

function minus(a: number, b: number): number {
    return a - b;
}

plus(1, 2); // 3: number type
// plus("1", 2); // error 'string' 형식의 인수는 'number' 형식의 매개 변수에 할당될 수 없습니다.
minus(3, 1); // 2: number type


// Optional
const divide = (a: number, b: number): number => {
    return a / b;
};

// divide(4); // error : 2개의 인수가 필요한데 1개를 가져왔습니다.

const optionalGetFullName = (firstName: string, lastName?: string): string => {
    return `${firstName} ${lastName}`;
};

let optionalFullName = optionalGetFullName("steve", "jobs");
console.log(optionalFullName); // steve jobs

optionalFullName = optionalGetFullName("steve");
console.log(optionalFullName); // steve undefined (union type)


// Default Parameter
const defaultParamGetFullName = (firstName: string, lastName: string = ""): string => {
    return `${firstName} ${lastName}`;
};

let defaultParamFullName = defaultParamGetFullName("steve", "jobs");
console.log(defaultParamFullName); // steve jobs

defaultParamFullName = defaultParamGetFullName("steve");
console.log(defaultParamFullName); // steve, 기본값이 주어지기 때문에 undefined 가 나오지 않는다.


// Rest Parameter
const restPlus = (...nums: number[]): number => {
    return nums.reduce((a, c) => a + c, 0);
};

restPlus(); // 0
restPlus(1, 2, 3, 4, 5); // 15, 매개변수의 갯수 제한 없이 자유롭게 사용이 가능하다.