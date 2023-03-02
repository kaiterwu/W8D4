/* clock time 
setInterval
HH:MM:SS
store, incremement, display
Clock.prototype._tick
printTime
new Date()

*/

class Clock {
    constructer() {
        let thisdate = Date().toString()
        let hms = thisdate.split("T")[1].split(":") //[hh,mm,ss]
        
    }




    printTime() {


    }

    _tick() {


    }



}

const clock = new Clock();

//  today.split("T")[1].split(":")

let thisdate = Date()
let hms = thisdate.split("T")[1].split(":") //[hh,mm,ss]