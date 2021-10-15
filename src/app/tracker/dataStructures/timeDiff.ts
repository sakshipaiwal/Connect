export class TimeDiff{
    hours : number;
    minutes : number;
    seconds : number;
    constructor(difference : number){
        difference = Math.round(Math.abs(difference)/1000);
        this.hours = Math.floor(difference/60/60);
        this.minutes = Math.floor(((difference/60))%60);
        this.seconds = Math.floor(difference%60);
    }
}