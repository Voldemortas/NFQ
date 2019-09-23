/**
 * @property {number} year
 * @property {number} month
 * @property {number} day
 * @property {number} weekday
 */
class Day {
    /**
     * @constructor
     * @param {number} year
     * @param {number} month
     * @param {number} day
     */
    constructor(year, month, day) {
        let date = new Date(year, month, day);
        this.year = date.getFullYear();
        this.month = date.getMonth();
        this.day = date.getDate();
        this.weekday = (date.getDay() + 6) % 7; //tebūnie pirmadienis 0 diena
    }
    /**
     * Ankstesnė diena
     * @returns {Day}
     */
    previous() {
        return new Day(this.year, this.month, this.day - 1);
    }
    /**
     * Paskesnė diena
     * @returns {Day}
     */
    next() {
        return new Day(this.year, this.month, this.day + 1);
    }

    /**
     * patikrina ar sutampa dienos
     * @param {Day} day
     * @returns {boolean}
     */
    equals(day) {
        return (
            day.year === this.year &&
            day.month === this.month &&
            day.day === this.day
        );
    }

    /**
     * boundaries of working hours
     * @returns {[number, number]}
     */
    boundaries() {
        return [
            new Date(this.year, this.month, this.day, 8).getTime(),
            new Date(this.year, this.month, this.day, 17).getTime(),
        ];
    }
}
