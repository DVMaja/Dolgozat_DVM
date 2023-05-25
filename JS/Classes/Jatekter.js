import Cella from "./Cella.js";
class Jatekter {
    #lepes;

    #jelenlegiAllapot = [];
    constructor() {

        this.#lepes = 0;
        const szuloELEM = $(".jatekTer");
        this.#jelenlegiAllapot = ["♙", "♙", "♙", " ", " ", " ", "♟", "♟", "♟"];

        for (let index = 0; index < 9; index++) {
            console.log(this.#jelenlegiAllapot[index]);
            const elem = new Cella(szuloELEM, index, this.#jelenlegiAllapot[index]);
        }

    }
}
export default Jatekter;