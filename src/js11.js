import fetch from "node-fetch";

// fetch("https://bing.com/query=js")
//   .then((dataFromBing) => {
//     console.log(dataFromBing.url);
//     return fetch("https://yahoo2345.com/query=js");
//   })
//   .then(
//     (dataFromYahoo) => {
//       console.log(dataFromYahoo.url);
//       return fetch("https://google.com/query=js");
//     },
//     (err) => {
//       console.log("catch from then", err);
//     }
//   )
//   .then((dataFromGoogle) => {
//     // console.log(dataFromGoogle.url);
//   })
//   .catch((err) => {
//     console.log("catch", err);
//   })
//   .then(() => {
//     console.log("hi");
//   });

// setTimeout(() => {
//   console.log("timeout1");
// }, 3000);

// setTimeout(() => {
//   console.log("timeout2");
// }, 2000);

// setTimeout(() => {
//   console.log("timeout3");
// }, 2000);

// fetch("https://bing.com/query=js").then(
//   (data) => {
//     console.log("hi");
//   },
//   (error) => {
//     console.log("by");
//   }
// );

// fetch("https://bing.com/query=js")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fetch("https://bing.com/query=js")
//   .then((dataFromBing) => {
//     console.log(dataFromBing.url);
//     return fetch("https://yahoo.com/query=js");
//   })
//   .then((dataFromYahoo) => {
//     console.log(dataFromYahoo.url);
//     return fetch("https://google.com/query=js");
//   })
//   .then((dataFromGoogle) => {
//     console.log(dataFromGoogle.url);
//   })
//   .catch((err) => {
//     console.log("catch", err);
//   });

// console.log("1");
// fetch("https://bing.com/query=jsddfsf")
// fetch("https://yahoo.com/query=jsddfsf")
// fetch("https://google.com/query=jsddfsf")

// const foo = async () => {
//   try {
//     const dataFromBing = await fetch("https://bing.com/query=jsddfsf");
//     console.log(dataFromBing.url);
//     const dataFromYahoo = await fetch("https://yahoo45564567.com/query=js");
//     console.log(dataFromYahoo.url);
//     const dataFromGoogle = await fetch("https://google.com/query=js");
//     console.log(dataFromGoogle.url);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("finally");
//   }
// };

// console.log("1");
// setTimeout(() => {
//   console.log("hi");
// }, 2000);
// console.log("2");

//const dataFromBing = await fetch("https://bing.com/query=jsddfsf");

// all

// Promise.all([
//   fetch("https://bing.com/query=js"),
//   fetch("https://yahoo.com/query=js"),
//   fetch("https://google.com/query=js"),
// ])
//   .then((bigData) => {
//     console.log(bigData[2].url);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.all([
//   fetch("https://bing.com/query=js"),
//   12,
//   fetch("https://google.com/query=js"),
// ]).then((bigData) => {
//   console.log(bigData);
// });

// race

// Promise.race([
//   fetch("https://google.com/query=js"),
//   fetch("https://bing.com/query=js"),
//   fetch("https://yahoo.com/query=js"),
//   fetch("https://duckduckgo.com/query=js"),
// ])
//   .then((data) => {
//     console.log(data.url);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// any

// Promise.any([
//   fetch("https://google.com/query=js"),
//   fetch("https://bing.com/query=js"),
//   fetch("https://yahoo.com/query=js"),
//   fetch("https://duckduckgo.com/query=js"),
// ])
//   .then((data) => {
//     console.log(data.url);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// allSettled

// Promise.allSettled([
//   fetch("https://google234.com/query=js"),
//   fetch("https://bing3445.com/query=js"),
//   fetch("https://duckduckgo453423.com/query=js"),
// ])
//   .then((data) => {
//     console.log("Then ------>", data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const funk = async () => {
//   const pr = await Promise.race([]);
//   console.log(1);
//   return pr;
// };
// console.log(funk());

// funk().then((data) => {
//   console.log(data);
// }
//
//
async function func() {
    return "Async"
}
func().then((a) => {
    console.log(a)
})
console.log("1")
console.log("2")