class Hello {
  some() {
    let some = () => console.log(123);
    return some();
  }
}

new Hello().some();
