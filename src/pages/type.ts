function greet(name?: string): string {
    if (name) {
      return `Hi, ${name}!`;
    } else {
      return `Hi!`;
    }
}
