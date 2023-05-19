// const myPromise = new Promise((resolve, reject) => {
//   // Simulating an asynchronous operation
//   setTimeout(() => {
//     // resolve("Success!");
//     reject(new Error("Something went wrong!"));
//   }, 2000);
// });

// myPromise
//   .then((result) => {
//     console.log("Result", result);
//   })
//   .catch((error) => {
//     console.error("Error", error);
//   });

// const promise1 = new Promise((resolve, reject) => {
//   // Simulating an asynchronous operation
//   setTimeout(() => {
//     resolve("Result 1");
//   }, 2000);
// });

// const promise2 = promise1.then((result1) => {
//   console.log(result1);
//   return "Result 2";
// });

// const promise3 = promise2.then((result2) => {
//   console.log(result2);
//   return "Result 3";
// });

// promise3
//   .then((result3) => {
//     console.log(result3);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// const promise1 = new Promise((resolve, reject) => {
//   // Simulating an asynchronous operation
//   setTimeout(() => {
//     resolve("Result 1");
//     // reject(new Error("Error occurred in promise1."));
//   }, 2000);
// });

// const promise2 = promise1.then((result1) => {
//   console.log(result1);
//   return "Result 2";
// });

// const promise3 = promise2.then((result2) => {
//   console.log(result2);
//   // return "Result 3";
//   throw new Error("Error occurred in promise3");
// });

// const promise4 = promise3
//   .then((result3) => {
//     console.log(result3);
//   })
//   .catch((error) => {
//     console.error("Error", error);
//   });

const asyncOperation = () => {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      reject(new Error("Error occurred."));
      // resolve("Success!");
    }, 2000);
  });
};

// const processData = (data) => {
//   return new Promise((resolve, reject) => {
//     // Simulating an asynchronous operation
//     setTimeout(() => {
//       //   reject(new Error("Error occurred during data processing."));
//       resolve(data + " processed");
//     }, 2000);
//   });
// };

// asyncOperation()
//   .then((result) => processData(result))
//   .then((processedData) => {
//     console.log(processedData);
//   })
//   .catch((error) => {
//     console.error("Error", error);
//   });

// const fs = require("fs");

// const readFilePromise = (filePath) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filePath, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// readFilePromise("demo.txt")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// fs.promises
//   .readFile("demo.txt")
//   .then((buffer) => console.log(buffer.toString()))
//   .catch((err) => console.log(err));

// const fs = require("fs");
// const util = require("util");

// const readFilePromise = util.promisify(fs.readFile);

// readFilePromise("demo.txt", "utf8")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// const callbackToPromise = (fn) => {
//   return (...args) => {
//     return new Promise((resolve, reject) => {
//       // Add a callback to handle the original function's result
//       const callback = (error, result) => {
//         if (error) {
//           reject(error);
//         } else {
//           resolve(result);
//         }
//       };

//       // Call the original function with the provided arguments and the callback
//       fn(...args, callback);
//     });
//   };
// };

// const fetchUser = (callback) => {
//   // Simulating an asynchronous operation
//   setTimeout(() => {
//     const user = {
//       id: 123,
//       name: "John Doe",
//       email: "john@example.com",
//     };
//     callback(null, user);
//     // callback("Error occurred", user);
//   }, 2000);
// };

// const fetchUserPromise = callbackToPromise(fetchUser);

// fetchUserPromise()
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// const saySomething = (msg) => {
//   console.log(msg);
// };

// setTimeout(() => saySomething("Hello World!"), 2000);

// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// wait(2 * 1000)
//   .then(() => saySomething("2 seconds"))
//   .catch((error) => console.log(error));

async function fetchData() {
  try {
    const result = await asyncOperation();
    console.log(result);
    return result;
  } catch (error) {
    console.log("Error", error);
  }
}

fetchData();
