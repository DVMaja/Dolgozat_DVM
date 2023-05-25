import Cella from "./Cella.js";
class Jatekter {
    #lepes;
    #objektumLISTA = [];
    #jelenlegiAllapot = [];
    constructor() {

        this.#lepes = 0;
        const szuloELEM = $(".jatekTer");
        this.#jelenlegiAllapot = ["♙", "♙", "♙", " ", " ", " ", "♟", "♟", "♟"];

        for (let index = 0; index < 9; index++) {
            console.log(this.#jelenlegiAllapot[index]);
            const elem = new Cella(szuloELEM, index, this.#jelenlegiAllapot[index]);
            this.#objektumLISTA.push(elem);
        }

        $(window).on("kattintasKockara", (event) => { 
            console.log(this.#jelenlegiAllapot);
            console.log();
            /**2 - ha gyalog van benne, akkor eltűnik belőle a bábu, amennyiben az tud lépni. */
            if (this.#jelenlegiAllapot[event.detail.index] == "♙") {
                console.log("Első feltétel");

               
                //console.log(this.#jelenlegiAllapot[event.detail.index]);
                //console.log(this.#objektumLISTA[event.detail.index]);

                this.#jelenlegiAllapot[event.detail.index] = " ";
                //console.log(this.#jelenlegiAllapot[event.detail.index]);

                this.#objektumLISTA[event.detail.index].benne= " ";
                //console.log(this.#objektumLISTA[event.detail.index]);

                this.#objektumLISTA[event.detail.index].setElem(" ");
                
                this.#lepes++;

            }else if(this.#jelenlegiAllapot[event.detail.index] == "♟"){
                console.log("Második feltétel");

                this.#lepes++;
            }
        })
    }
}
export default Jatekter;