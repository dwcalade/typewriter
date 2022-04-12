const sentence = "hello there from lighthouse labs";

let a = 0

for (const char of sentence) {
    setTimeout(() => {
        process.stdout.write(char);
    }, a );
    a += 50;
  };
