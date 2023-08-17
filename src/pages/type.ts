function greet(name?: string): string {
  if (name) {
    return `Hello, ${name}!`;
  } else {
    return `Hello!`;
  }
}
