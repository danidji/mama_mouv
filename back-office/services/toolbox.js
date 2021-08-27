module.exports = {
    format: (time) => {
        let mins = ~~(time / 60);
        let secs = ~~(time - mins * 60);

        let ret = "";

        ret += "" + mins + ":" + (secs < 10 ? "0" : "");
        ret += "" + secs;
        return ret;
    },
    formatHeure: (time) => {
        let hrs = ~~(time / 3600); //équivalent à Math.floor(time/3600)
        let mins = ~~((time % 3600) / 60);
        let secs = ~~time % 60;

        // Rendu en  "1:01" or "4:03:59" or "123:03:59"
        let ret = "";
        if (hrs > 0) {
            ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
        }
        ret += "" + mins + ":" + (secs < 10 ? "0" : "");
        ret += "" + secs;
        return ret;
    },
    S4: () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1)
    },
    generateGUID: () => {
        return S4() + S4();
    }
}