// Promise .then .catch .finally

// const fetch = (url, callback) => {
//   //url-->

//   callback(err, data);
// };

// fetch("https://booksite.com/authors", (err, data) => {
//   if (err) {
//     console.log("something went wrong");
//   } else {
//     fetch("https://booksite.com/authors/id45", (err, data) => {
//       if (err) {
//         console.log("something went wrong");
//       } else {
//         fetch("https://booksite.com/authors/id45/books", (err, data) => {
//           if (err) {
//             console.log("something went wrong");
//           } else {
//             fetch(
//               "https://booksite.com/authors/id45/books/id78",
//               (err, data) => {
//                 if (err) {
//                   console.log("something went wrong");
//                 } else {
//                   fetch(
//                     "https://booksite.com/authors/id45/books/id78/page245",
//                     (err, data) => {
//                       if (err) {
//                         console.log("something went wrong");
//                       } else {
//                       }
//                     }
//                   );
//                 }
//               }
//             );
//           }
//         });
//       }
//     });
//   }
// });

// fetch("https://booksite.com/authors")
//   .then((data) => {
//     return fetch("https://booksite.com/authors/id45");
//   })
//   .then((data) => {
//     return fetch("https://booksite.com/authors/id45/books");
//   })
//   .then((data) => {
//     return fetch("https://booksite.com/authors/id45/books/id45");
//   })
//   .then((data) => {
//     return fetch("https://booksite.com/authors/id45/books/id45/page245");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const server = {
//   getData() {
//     return new Promise((res, rej) => {
//       setTimeout(() => {
//         // reject();
//         res();
//       }, 2000);
//     });
//   },
// };

// function MyPromise(callback) {
// 	const resolved = (data) => {
// 		return {
// 			PromiseState: 'fulfilled',
// 			PromiseResult: data
// 		}
// 	}
// 	const rejected = (err) => {
// 		return {
// 			PromiseState: 'rejected',
// 			PromiseResult: err
// 		}
// 	}

// 	callback(resolved, rejected)
// }

// const promise = server.getData();
// console.log(promise);

// const fs = require("fs");

// fs.readFile("./index.js", (err, data) => {
// 	if (err) {
// 		console.log('cant read file')
// 	} else {
// 		console.log(data)
// 	}
// });

// const getDataFromFS = () => {
//   return new Promise((res, rej) => {
//     fs.readFile("./index.js", (err, data) => {
//       if (err) {
//         rej(err);
//       } else {
//         res(data);
//       }
//     });
//   });
// };

// server = {
//   getData() {
//     return new Promise((res, rej) => {
//       setTimeout(() => {
//         // request to server
//         // request to server
//         // request to server
//         // request to server
//         // rej("some error");
//         res("some data");
//       }, 1000);
//     });
//   },
// };

// server
//   .getData()
//   .then((data) => {
//     console.log("then1 ", data);
//     // throw new Error("wrong data");
//     return 10;
//   })
//   .finally((data) => {
//     console.log("finally1", data);
//     return 100;
//   })
//   .catch((err) => {
//     console.log("Catch1 ", err);
//   })
//   .then((data) => {
//     console.log("then2 ", data);
//     // console.log(b);
//     return 20;
//   })
//   .then((data) => {
//     console.log("then3 ", data);
//     return 30;
//   })
//   .catch((err) => {
//     console.log("Catch2 ", err);
//   })
//   .finally(() => {
//     console.log("finally2");
//   });

Promise.reject("reject1 ")
  .catch((t) => t + "catch1 ")
  .catch((t) => t + "catch2 ")
  .then((t) => t + "then1 ")
  .finally((t) => t + "finally ")
  .then((t) => console.log(t));
