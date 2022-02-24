function handlerFn(eventObj) {
    console.log("Event weather caught in a first listener");
    console.log(eventObj);
}

function handlerFn2() {
    console.log("Event caught in a second listener");
}

function handlerFn3() {
    console.log("Event caught in a third listener");
}

module.exports.handlerFn = handlerFn;
module.exports.handlerFn2 = handlerFn2;
module.exports.handlerFn3 = handlerFn3;