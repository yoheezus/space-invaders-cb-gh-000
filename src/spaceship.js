class Spaceship {
    constructor(name, crew, phasers, shields) {
        this.name = name
        this.crew = crew
        this.phasers = phasers
        this.shields = shields
        this.cloaked = false
        this.warpDrive = "disengaged"
        this.phasersCharge = "uncharged"
        crew.length ? (this.docked = false) : (this.docked = true)
        this.notifyCrew();
    }

    notifyCrew() {
        for (let i = 0; i < this.crew.length; i++;) {
            this.crew[i].currentShip = this
        }
    }
}
