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

    let unboxed = 7;

    document.getElementById('unboxed').innerText = unboxed;

    if (unboxed > 0) {
        let allBoxes = document.querySelectorAll('[id^="box"]');
        let i = 1;

        document.getElementById('kallax').style.display = 'block';


        allBoxes.forEach(function (box) {
            var boxId = box.id;
            var boxNumber = parseInt(boxId.replace('box', ''), 10);

            // Verstecke Elemente, die den Bedingungen entsprechen
            if (boxNumber <= unboxed) {
                box.style.display = 'none';
            }
        });

        while (i <= unboxed) {
            document.getElementById('unboxed' + i).style.display = "block";
            i++
        }
    }

    let number = Math.floor(Math.random() * 3);
    document.getElementById('mayhem' + number).style.display = 'block';

})();
