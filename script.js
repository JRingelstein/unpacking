(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24,
        week = day * 7;

    const
        movingDay = new Date('2024-11-04T23:59:59'),
        internetDay = new Date('2024-11-22T08:59:59'),
        today = new Date(),
        now = new Date().getHours(),
        movingCounter = today.getTime() - movingDay.getTime(),
        movingDays = Math.ceil(movingCounter / day),
        internetCounter = internetDay.getTime() - today.getTime(),
        internetDays = Math.ceil(internetCounter / day);

    const randomMayhem = () => {
        let number = Math.floor(Math.random() * 3);
        document.getElementById('mayhem' + number).style.display = 'block';
    }

    document.getElementById('counterdays').innerText = movingDays;
    document.getElementById('internetdays').innerText = internetDays;

    if (now > 16) {
        document.documentElement.classList.add('night');
        document.getElementById('mayhem0').style.display = 'block';
    }
    else if (now > 14 || now < 10) {
        document.documentElement.classList.add('transitional');
        randomMayhem();
    }
    else {
        randomMayhem();
    }

    let unboxed = 10;

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
})();
