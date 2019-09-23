/**
 * @property {number} year
 * @property {number} month
 * @property {Day} first – pirma mėnesio diena
 * @property {Day} last – paskutinė mėnesio diena
 */
class Calendar {
    /**
     * @constructor
     * @param {number} year
     * @param {number} month
     */
    constructor(year, month) {
        this.year = year;
        this.month = month;
        this.first = new Day(year, month, 1);
        this.last = new Day(year, month + 1, 0);
    }

    /**
     * Ar diena yra Nedarbo diena
     * @param {Day} day
     * @return {boolean}
     */

    static holidays(day) {
        return (
            day.weekday === 5 || //šeštadienis
            day.weekday === 6 || //sekmadienis
            (day.month === 0 && day.day === 1) || //sausio 1
            (day.month === 1 && day.day === 16) || //vasario 16
            (day.month === 2 && day.day === 11) || //kovo 11
            (day.month === 4 && day.day === 1) || //gegužės 1
            (day.month === 5 && day.day === 24) || //birželio 24
            (day.month === 6 && day.day === 6) || //liepos 6
            (day.month === 7 && day.day === 15) || //rugpjūčio 15
            (day.month === 10 && day.day === 1) || //lapkričio 1
            (day.month === 11 && day.day === 24) || //gruodžio 24
            (day.month === 11 && day.day === 25) || //gruodžio 25
            (day.month === 11 && day.day === 26) //gruodžio 26
        );
    }

    /**
     * @param {Day} day
     * @return {Calendar}
     */
    static fromDay(day) {
        return new Calendar(day.year, day.month);
    }

    static makeTable(selected = null, callback = () => {}, divId = 'calendar') {
        if (selected === null) {
            selected = rightNow();
        }
        let month = Calendar.fromDay(selected);
        let text = `<table>
                            <tr>
                                <td colspan="7" id="year">${month.year}</td>
                            </tr>
                            <tr>
                                <td><button onclick='Calendar.makeTable(${JSON.stringify(
                                    month.first.previous()
                                )})'><</button></td>
                                <td colspan="5" id="month">${
                                    Calendar.monthNames[month.month]
                                }</td>
                                <td><button onclick='Calendar.makeTable(${JSON.stringify(
                                    month.last.next()
                                )})'>></button></td>
                            </tr>`;
        text += Calendar.dayNames.reduce((a, b) => `${a}<td>${b}</td>`, '<tr>');
        let temp = '';
        let day = -month.first.weekday + 1;
        text += `</tr>`;
        while (day <= month.last.day) {
            temp = '';
            for (let i = 0; i < 7; i++) {
                let style = '';
                let realDay = new Day(month.year, month.month, day);
                if (day <= month.last.day && day > 0) {
                    let date_tag = ``;
                    if (realDay.equals(selected)) {
                        date_tag = ` data-day='${JSON.stringify(realDay)}'`;
                    }
                    if (Calendar.holidays(realDay)) {
                        style += realDay.equals(selected)
                            ? ' class="holiday selected"'
                            : ' class="holiday"';
                    } else {
                        let usage = Math.floor(Math.random() * 16) * 16 - 1;
                        style += realDay.equals(selected)
                            ? ` class="selected" style="background-color: rgb(255, ${usage}, ${usage})"`
                            : ` style="background-color: rgb(255, ${usage}, ${usage})"`;
                    }

                    temp += `<td${style}${date_tag} onclick='Calendar.makeTable(${JSON.stringify(
                        realDay
                    )}, ${callback})'>${day}</td>`;
                } else {
                    temp += `<td>&nbsp;</td>`;
                }
                day++;
            }
            text += `<tr>${temp}</tr>`;
        }

        document.getElementById(divId).innerHTML = text;
        callback();
    }
    /**
     * Mėnesio pavadinimai
     * @type {string[]}
     */
    static monthNames = [
        'Sausis',
        'Vasaris',
        'Kovas',
        'Balandis',
        'Gegužė',
        'Birželis',
        'Liepa',
        'Rugpjūtis',
        'Rugsėjis',
        'Spalis',
        'Lapkritis',
        'Gruodis',
    ];
    /**
     * Savaitės dienų sutrumpinimai
     * @type {string[]}
     */
    static dayNames = ['Pr', 'An', 'Tr', 'Kt', 'Pn', 'Št', 'Sk'];
    /**
     * Savaitės dienų pavadinimai
     * @type {string[]}
     */
    static weekDays = [
        'Pirmadienis',
        'Antradienis',
        'Trečiadienis',
        'Ketvirtadienis',
        'Penktadienis',
        'Šeštadienis',
        'Sekmadienis',
    ];
}
