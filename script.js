(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24,
        week = day * 7;

    const
        movingDay = new Date('2024-11-04T23:59:59'),
        now = new Date(),
        counter = now.getTime() - movingDay.getTime(),
        days = Math.ceil(counter / day);

    document.getElementById('counterdays').innerText = days;
    document.getElementById('unboxed').innerText = "1";

    //declare an array to store images
    var randomImage = new Array();
    //0,1,2,3,4,5
    randomImage[0] = "./img/boxes.svg";
    randomImage[1] = "./img/boxes1.svg";
    randomImage[2] = "./img/boxes2.svg";

    // genrate a number and provide to genrate image accordingly
    var number = Math.floor(Math.random() * randomImage.length);
    // return the images which are genrated
    return document.getElementById('boxes').innerHTML = '<img src="' + randomImage[number] + '" alt="Packed moving boxes" />';

})();
