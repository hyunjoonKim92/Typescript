// type이라고 지정한 뒤 변수명을 만들어 타입을 지정
type Point = {
    x: number;
    y: number;
};

function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

let point: Point = {
    x: 127,
    y: 37,
};

printCoord(point);