import { withCommas, removeCommas, cutDecimal, wait } from "../functions";

describe("Comma 관련 모듈 함수 테스트", () => {
  it("WithCommas 테스트", () => {
    expect(withCommas(123456)).toBe("123,456");
    expect(withCommas("999999999")).toBe("999,999,999");
    expect(withCommas(12.12312312)).toBe("12.12312312");
  });

  it("RemoveCommas 테스트", () => {
    expect(removeCommas("123,123,123")).toBe("123123123");
    expect(removeCommas("98.31232212")).toBe("98.31232212");
    expect(removeCommas("12,293.1235678")).toBe("12293.1235678");
  });
});

describe("CutDecimal 함수 테스트", () => {
  it("CutDecimal 반올림 아님", () => {
    expect(cutDecimal(123.123123123123)).toBe("123.12312312");
    expect(cutDecimal("123.123123123123")).toBe("123.12312312");
    expect(cutDecimal("999.991", 2)).toBe("999.99");
  });

  it("CutDecimal 반올림", () => {
    expect(cutDecimal(123.999999999)).toBe("124");
    expect(cutDecimal("123.999999999")).toBe("124");
    expect(cutDecimal("999.995", 2)).toBe("1000");
    expect(cutDecimal(123.995875, 3)).toBe("123.996");
  });
});

// describe("Wait 함수 테스트", () => {
//   expect(wait(200));
// });
