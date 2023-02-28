function buy(item, price, quantity) {
  return new Promise(function (resolve, reject) {
    console.log(item + " 상품을 " + quantity + "개 골라서 점원에게 주었습니다.");
    console.log("계산이 필요합니다.");
    setTimeout(function () {
      var total = price * quantity;
      resolve(total);
    }, 1000);
  })
};

function pay(total) {
  console.log(total + "원을 지불하였습니다.");
}

buy("고구마", 1000, 5).then(function (total) {
  pay(total);
}).catch(function (err) {
  console.log(err);
})