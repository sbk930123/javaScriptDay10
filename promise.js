const myPromise = new Promise(function (resolve, reject) {
  if (true) {
    resolve('성공');
  } else {
    reject('실패');
  }
});

myPromise.then(function (a) {
  console.log(a);
}).catch(function (a) {
  console.log(a);
})