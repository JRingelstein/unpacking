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
    document.getElementById('unboxed').innerText = "0";

})();