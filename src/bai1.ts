const myPromise: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Vo chi linh 22001355");
    }, 2000); // 2 giay delay
    });

   myPromise.then((message: string) => {
  console.log(message); // Output: "Hello Async"
});