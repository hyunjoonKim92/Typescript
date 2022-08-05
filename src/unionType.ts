// Union Type
// 여러 타입들을 조합하여 사용하는 방법이다.
type Direction = "left" | "right" | "up" | "down";
const move = (direction: Direction) => {
    console.log(direction);
};

move("left");
move("right");

// move("leftRight") error : '"leftRight"' 형식의 인수는 'Direction' 형식의 매개변수에 할당될 수 없습니다.

function printId(id: number | string) {
//    console.log(id.toUpperCase()); error : 'string | number' 형식에 'toUpperCase' 속성이 없습니다.

// 타입을 구체적으로 추론할 수 있게 도와주기만 하면 정상적으로 작동한다.
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}

// 공통 메소드나 프로퍼티를 가지고 있다면 에러 없이 수월하게 사용할 수 있다.
function getFirstThree(x: number[] | string) {
    return x.slice(0, 3);
}

// 타입 별칭을 조합하는 것도 가능하다.
type EmailLocalelDs = "welcome_email" | "email_heading";
type FooterLocalelDs = "footer_title" | "footer_sendoff";

type AllLocalelDs = `${EmailLocalelDs} | ${FooterLocalelDs}_id`;