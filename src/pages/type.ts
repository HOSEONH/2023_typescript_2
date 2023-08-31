function displayType(value: string | number): void {
  if (typeof value === "string") {
    console.log("Type: string, Value:", value.toUpperCase());
  } else {
    console.log("Type: number, Value:", value.toFixed(2));
  }
}

displayType("hello"); // 문자열 출력
displayType(3.14159); // 숫자 출력
