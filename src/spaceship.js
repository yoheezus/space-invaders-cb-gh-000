class Spaceship {
    constructor(shipName, crew, phasers, shields) {
        this.name = shipName
        this.crew = crew
        this.phasers = phasers
        this.shields = shields
        this.cloaked = false
        this.warpDrive = "disengaged"
        this.phasersCharge = "uncharged"
        if (!this.crew) {
            this.docked = false
        }
    }

    notifyCrew() {
        for (let i = 0; i < this.crew.length; i++;) {
            this.crew[i].currentShip = this
        }
    }
}
