// 문자열 (String)
let str: string = "Hello World!";
str = "Hello TS";

const blog = "mine-it-record";
str = `Hello, my ${blog} blog`;


// 숫자 (Number)
let num: number = 6;
num = 7;
num = Number("8");


// 불리언 (Boolean)
let isBoal: boolean = true;


// Null / Undefined
let u: undefined = undefined;
let n: null = null;

let undefinedNum: number | undefined;
let nullStr: string | null;

// 단순 체크
function doSomething(x: string | undefined) {
    if (x === undefined) {
        // 아무 것도 하지 않는다.
    } else {
        console.log("Hello, " + x.toUpperCase());
    }
}

// 접미사(!) 사용
function liveDangerously(x?: number | undefined) {
    // 오류 없음
    console.log(x!.toFixed());
}


// Void
let unusable: void = undefined;
// unusable = "record"; => error: "string" 형식은 "void" 형식에 할당할 수 없습니다.

// 타입 명시
function warnUser(): void {
    console.log("This is my warning message");
}

// 생략 시 자동으로 타입이 지정되나 보통 반환 값이 없을 때만 생략하고, 반환 값이 있으면 타입을 명시해준다.
function voidFunc() {
    console.log("This is my warning message");
}


// Never
function fail(msg: string): never {
    throw new Error(msg);
}


// Any / Unknown
let anyStr: any = "anything";
anyStr = 2;
anyStr = [1, 2, 3];

// any 타입 변수 할당
let anyTest: string = anyStr;

// unknown 타입 변수 할당
let unknownStr: unknown = "unknown";
// let unknownTest: string = unknownStr; => "unknown" 형식은 "string" 형식에 할당할 수 없습니다.
let unknownTest: string = (unknownStr as string);
anyStr = unknownStr;