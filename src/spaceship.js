class Spaceship {
    constructor(name, crew, phasers, shields) {
        this.name = name
        this.crew = crew
        this.phasers = phasers
        this.shields = shields
        this.cloaked = false
        this.warpDrive = "disengaged"
        this.docked = true
        this.phasersCharge = "uncharged"
    }

    docked() {
        if (this.docked === true) {
            return true
        }
    }
}
