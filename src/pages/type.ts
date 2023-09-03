function displayType(value: string | number): void {
  if (typeof value === "string") {
    console.log("Type: string, Value:", value.toUpperCase());
  } else {
    console.log("Type: number, Value:", value.toFixed(2));
  }
}

displayType("hello"); 
displayType(3.14159); 
