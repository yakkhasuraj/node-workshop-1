// const myCallback = (result) => {
//   console.log("Callback function called with result:", result);
// };

// const performTask = (callback) => {
//   // Simulating an asynchronous operation
//   setTimeout(() => {
//     callback("Task completed");
//   }, 2000);
// };

// performTask(myCallback);

// const add = (a, b) => a + b;

// console.log(add(5, 3));

// const fs = require("fs");

// fs.writeFile("demo.txt", "Hello World", (err) => {
//   if (err) throw err;
//   console.log("File written successfully");
// });

// const handleFileRead = (err, data) => {
//   if (err) throw err;
//   console.log(data);
// };

// fs.readFile("demo.txt", "utf8", handleFileRead);

// try {
//   const result = fs.readFileSync("random.txt", { encoding: "utf-8" });
//   console.log(result);

//   const add = (a, b) => a + b;

//   console.log(add(5, 3));
// } catch (error) {
//   console.log("error", error.message);
// }

const fetchUser = (callback) => {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const user = {
      id: 123,
      name: "John Doe",
      email: "john@example.com",
    };
    callback(null, user);
    // callback("Error occurred", user);
  }, 2000);
};

// const fetchOrdersById = (userId, callback) => {
//   // Simulating an asynchronous operation
//   setTimeout(() => {
//     const orders = {
//       123: ["Order 1", "Order 2", "Order 3"],
//     };
//     callback(null, orders[userId]);
//     // callback("Error occurred", orders[userId]);
//   }, 1500);
// };

// fetchUser((error, user) => {
//   if (error) {
//     console.error("While fetching user:", error);
//   } else {
//     console.log("User:", user);

//     fetchOrdersById(user.id, (error, orders) => {
//       if (error) {
//         console.error("While fetching orders:", error);
//       } else {
//         console.log("Orders:", orders);

//         fetchUser((error, user) => {
//           if (error) {
//             console.error("While fetching user:", error);
//           } else {
//             console.log("User:", user);
//           }
//         });
//       }
//     });
//   }
// });

const async = require("async");

const fetchOrdersByUser = (user, callback) => {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const orders = ["Order 1", "Order 2", "Order 3"];
    callback(null, user, orders);
  }, 1500);
};

async.waterfall([fetchUser, fetchOrdersByUser], (error, user, orders) => {
  if (error) {
    console.error("Error occurred during waterfall:", error);
  } else {
    console.log("User:", user);
    console.log("Orders:", orders);
  }
});
