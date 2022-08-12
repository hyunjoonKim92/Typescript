// 숫자 열거형 (Numberic enums)
enum Weekdays {
    Monday,
    Tuesday,
    Wednesday,
    Thursday = 10,
    Friday,
    Saturday,
    Sunday,
}

let day: Weekdays = Weekdays.Thursday;
day = 12;
// day = 20; => Weekdays enum 에는 20 이라는 숫자가 현재 불가능한 숫자인데 아무 에러도 발생하지 않는다.
// typescript 의 엄격함이 깨지는 순간이다. 그렇기 때문에 굳이 상수를 관리한다고 enum 을 사용하고자 한다면 숫자 열거형 말고 문자 열거형을 사용하는 것이 좋다.
// 그래도 enum 보다는 그냥 class 로 상수를 관리하는게 더욱 더 좋다.


// 문자 열거형 (String enums)
enum Codes {
    CD0001 = '퇴사',
    CD0002 = '이직',
    CD0003 = '취업',
    CD0004 = '취준',
    CD0005 = '백수',
    CD0006 = '코코',
}

let code: Codes = Codes['CD0001'];
code = Codes.CD0003;

class AppCode {
    static readonly CD0001 = '1상수입니다.';
    static readonly CD0002 = '2상수입니다.';
    static readonly MAX_LENGTH = 5;
}

let appCode = AppCode.CD0002;