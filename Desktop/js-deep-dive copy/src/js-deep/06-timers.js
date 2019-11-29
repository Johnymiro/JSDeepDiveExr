/**
 * Return a stop watch object with the following API:
 * getTime - return number of seconds elapsed
 * start - start counting time
 * stop - stop counting time
 * reset - sets seconds elapsed to zero
 */
exports.createStopWatch = function() {

    var start = 0, end = 0, time = 0;

    return {
        start(){
             start = new Date();
             time = new Date();
        },
        stop(){

            end = new Date();
            time = (start().getTime() - end.getTime()) / 1000;
        },
        reset(){

            start = 0;
            end = 0;
            time = 0;
        },
        getTime(){
            return time;
        }
        
    }
};
