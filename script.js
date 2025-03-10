(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24,
        week = day * 7;

    const
        movingDay = new Date('2024-11-04T23:59:59'),
        today = new Date(),
        now = new Date().getHours(),
        movingCounter = today.getTime() - movingDay.getTime(),
        movingDays = Math.ceil(movingCounter / day);

    const randomMayhem = () => {
        let number = Math.floor(Math.random() * 3);
        document.getElementById('mayhem' + number).style.display = 'block';
    }

    document.getElementById('counterdays').innerText = movingDays;

    if (now > 16) {
        document.documentElement.classList.add('night');
        document.getElementById('mayhem0').style.display = 'block';
        document.getElementById('lampe').setAttribute('filter', 'url(#nightGlow)')
    }
    else if (now > 14 || now < 10) {
        document.documentElement.classList.add('transitional');
        randomMayhem();
        document.getElementById('lampe').setAttribute('filter', 'url(#softGlow)')

    }
    else {
        randomMayhem();
    }

    let unboxed = 22;
    let toUnbox = 11;

    document.getElementById('unboxed').innerText = toUnbox;

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
