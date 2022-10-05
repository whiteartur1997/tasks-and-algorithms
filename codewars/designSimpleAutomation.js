// class Automation {
//     states = {
//         start: "q1",
//         accept: "q2",
//         intermediate: "q3"
//     }
//
//     constructor() {
//         // possible state 1 or 2 or 3
//         this.state = this.states.start
//     }
//     readCommands(commands) {
//         for(let command of commands) {
//             switch (this.state) {
//                 case this.states.start: {
//                     this.q1Handle(+command)
//                     break
//                 }
//                 case this.states.accept: {
//                     this.q2Handle(+command)
//                     break
//                 }
//                 case this.states.intermediate: {
//                     this.q3Handle(+command)
//                     break
//                 }
//             }
//         }
//         if(this.state === this.states.accept) {
//             return true
//         }
//         return false
//     }
//
//     q1Handle(command) {
//         if(command === 1) {
//             this.state = "q2"
//         }
//     }
//
//     q2Handle(command) {
//         if(command === 0) {
//             this.state = "q3"
//         }
//     }
//
//     q3Handle() {
//         this.state = "q2"
//     }
// }
//
// const a = new Automation();

function Automaton() {
    this.states = {
        start: "q1",
        accept: "q2",
        intermediate: "q3"
    }

    this.state = this.states.start

    this.q1Handle = function (command)
    {
        if (command === 1) {
            this.state = this.states.accept
        } else if (command === 0) {
            this.state = this.states.start
        }
    }

    this.q2Handle = function (command) {
        if (command === 0) {
            this.state = this.states.intermediate
        } else {
            this.state = this.states.accept
        }
    }

    this.q3Handle = function () {
        this.state = this.states.accept
    }
}

Automaton.prototype.readCommands = function (commands) {
    for (let command of commands) {
        switch (this.state) {
            case this.states.start: {
                this.q1Handle(+command)
                break
            }
            case this.states.accept: {
                this.q2Handle(+command)
                break
            }
            case this.states.intermediate: {
                this.q3Handle(+command)
                break
            }
        }
    }
    if (this.state === this.states.accept) {
        return true
    }
    return false
}

var myAutomaton = new Automaton();



// console.log(myAutomaton.readCommands(["1"]))
// console.log(myAutomaton.readCommands(["1", "0", "0", "1"]))
// console.log(myAutomaton.readCommands([]))