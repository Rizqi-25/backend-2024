// const { reject } = require("async")



// const download = () => {
//     return new Promise((resolve, reject) => {
//         const status = true;

//         setTimeout(() => {
//             if (status) {
//                 resolve("Download Selesai");
//             } else {
//                 reject("Download Gagal");
//             }
//         }, 5000);
//     });
// };

// console.log(download());


// producing promise
const persiapan = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Persiapan...");
      }, 3000);
    });
  };
  
  const rebusAir = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Rebus Air...");
      }, 7000);
    });
  };
  
  const masak = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Masak...");
      }, 5000);
    });
  };
  
  // consuming promise
  const main = () => {
    persiapan()
      .then((res) => {
        console.log(res);
        return rebusAir();
      })
      .then((res) => {
        console.log(res);
        return masak();
      })
      .then((res) => {
        console.log(res);
      });
  };
  
  main();