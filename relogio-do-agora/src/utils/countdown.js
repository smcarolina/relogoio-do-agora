export default class Countdown {
    constructor(futureDate) {
        this.futureDate = futureDate;
    }

    get _actualDate() {
        return new Date();
    }

    get _futureDate() {
        return new Date(this.futureDate);
    }

    get _timeStampDiff() {
        return this._futureDate.getTime() - this._actualDate.getTime();
    }

    
    get years(){
        return Math.floor(this._timeStampDiff / (12 * 30 * 24 * 60 * 60 * 1000))
    }

    get months() {
        return Math.floor(this._timeStampDiff / (30 * 24 * 60 * 60 * 1000))
    }

    get days() {
        return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000));
    }

    get hours() {
        return Math.floor(this._timeStampDiff / (60 * 60 * 1000));
    }

    get minutes() {
        return Math.floor(this._timeStampDiff / (60 * 1000));
    }

    get seconds() {
        return Math.floor(this._timeStampDiff / 1000);
    }

    get total() {
        const years = this.years;

        const months = this.months % 12 

        const days = this.days % 30

        const hours = this.hours % 24

        const minutes = this.minutes % 60 

        const seconds = this.seconds % 60 

        return [years, 
        months, 
        days, 
        hours, 
        minutes, 
        seconds];
    }

}