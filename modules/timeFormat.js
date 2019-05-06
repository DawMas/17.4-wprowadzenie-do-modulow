

function getFormatTime(time) {
    var formatTime = '';
    if (time >= 60 && time < 3600) {
        formatTime = Math.floor(time / 60) + 'min ' + time % 60 + 'sek';
        return formatTime;
    }
    else if (time >= 3600) {
        formatTime = Math.floor(time / 3600) + 'godz ' + Math.floor(time % 3600 / 60) + 'min ' + time % 60 + 'sek';
        return formatTime;
    }
    else {
        formatTime = time + 'sek';
        return formatTime;
    }

}

exports.print = getFormatTime;