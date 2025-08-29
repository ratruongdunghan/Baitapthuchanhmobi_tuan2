function getRandomNumber(): Promise<number> {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random(); 
    if (randomNumber > 0.5) {
      resolve(randomNumber);
    } else {
      reject(new Error("Random number is less than 0.5"));
    }
  });
}

getRandomNumber()
  .then((result) => {
    console.log("Success! Random number:", result); 
  })
  .catch((error) => {
    console.error("Error:", error.message); 
  });
