function displayType(value: string | number): void {
  if (typeof value === "string") {
    console.log("Type: string: ");
  } else {
    console.log("Type: number: ");
  }
}

displayType("hello"); 
displayType(3.14159); 
