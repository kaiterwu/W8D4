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
        let hms = thisdate.split(" ")[4].split(":") //[hh,mm,ss]
        this.hours = hms[0]
        this.minutes = hms[1]
        this.seconds = hms[2]
         
            printTime()
            setinterval(_tick,1000)
           
    
        
    }




    printTime() {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
     }

    _tick() {
        this.seconds++ 
        if (this.seconds === 60) {
            this.minutes ++ 
            this.seconds = 0 
        }
        if (this.minutes ===60) {
            this.hours ++ 
            this.minutes == 0 
        }
        if (this.hours === 24 ) {
            this.hours =0 
        }
        return printTime()
    }



}

const clock = new Clock();  

// //  today.split("T")[1].split(":")

// let thisdate = Date()
// let hms = thisdate.split("T")[1].split(":") //[hh,mm,ss]