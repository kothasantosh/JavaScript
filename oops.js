// function fetchNumber() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(42), 2000); // resolve after 1s
//   });
// }

// async function run() {
//   console.log("Start");
//   let result = await fetchNumber(); // Wait here until resolved
//   console.log(result); // 42
//   console.log("End");
// }

// run();

async function getData() {
  try {
    let res = await fetch("https://reqres.in/api/users?page=2");
    let data = await res.json();
    console.log(data.data[1].id);
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}

getData()