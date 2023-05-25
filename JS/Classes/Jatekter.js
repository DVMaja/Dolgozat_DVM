import Cella from "./Cella.js";
class Jatekter {
    #lepes;
    #objektumLISTA = [];
    #jelenlegiAllapot = [];
    #kezdoAllapot = [];
    constructor() {

        this.#lepes = 0;
        const szuloELEM = $(".jatekTer");
        this.#kezdoAllapot = ["♙", "♙", "♙", " ", " ", " ", "♟", "♟", "♟"];

        this.#jelenlegiAllapot = ["♙", "♙", "♙", " ", " ", " ", "♟", "♟", "♟"];

        for (let index = 0; index < 9; index++) {
            console.log(this.#jelenlegiAllapot[index]);
            const elem = new Cella(szuloELEM, index, this.#jelenlegiAllapot[index]);
            this.#objektumLISTA.push(elem);
        }

        $(window).on("kattintasKockara", (event) => {
            console.log(this.#jelenlegiAllapot);
            // 0 1 2 
            // 3 4 5 
            // 6 7 8

            if (this.#jelenlegiAllapot[event.detail.index] == "♙") {
                console.log("Első feltétel");

                if (this.#jelenlegiAllapot[event.detail.index + 3] == " "
                    || this.#jelenlegiAllapot[event.detail.index + 4] == "♟"
                    || this.#jelenlegiAllapot[event.detail.index + 2] == "♟"
                ) {
                    console.log("Ha üres a léphető mező");

                    /* //console.log(this.#jelenlegiAllapot[event.detail.index]);
                    //console.log(this.#objektumLISTA[event.detail.index]);
                    this.#jelenlegiAllapot[event.detail.index] = " ";
                    //console.log(this.#jelenlegiAllapot[event.detail.index]);
                    this.#objektumLISTA[event.detail.index].benne = " ";
                    //console.log(this.#objektumLISTA[event.detail.index]);
                    this.#objektumLISTA[event.detail.index].setElem(" "); */

                    this.#cellaUritese();
                    $(window).on("kattintasKockara", (event) => {
                        if (this.#jelenlegiAllapot[event.detail.index] == " "
                        || this.#jelenlegiAllapot[event.detail.index] == "♟") {                            
                            this.#cellaFeltoltese("♙");

                        }
                    })

                    this.#lepes++;
                }
            } else if (this.#jelenlegiAllapot[event.detail.index] == "♟") {
                console.log("Második feltétel");


                if (this.#jelenlegiAllapot[event.detail.index - 3] == " "
                    || this.#jelenlegiAllapot[event.detail.index - 2] == "♙"
                    || this.#jelenlegiAllapot[event.detail.index - 2] == "♙"
                ) {
                    console.log("Ha üres a léphető mező")

                    /* this.#jelenlegiAllapot[event.detail.index] = " ";
                    this.#objektumLISTA[event.detail.index].benne = " ";
                    this.#objektumLISTA[event.detail.index].setElem(" "); */
                    this.#cellaUritese();
                    $(window).on("kattintasKockara", (event) => {
                        if (this.#jelenlegiAllapot[event.detail.index] == " "
                        || this.#jelenlegiAllapot[event.detail.index] == "♙") {     
                            this.#cellaUritese();
                            this.#cellaFeltoltese("♟");

                        }
                    })
                    this.#lepes++;
                }
            }
        })


        /* let resetGomb = $(".resetGomb");
        
        resetGomb.on("click", ()=>{
            console.log("reset gobm kattintható")
            //reset
        }) */
    }

    #cellaUritese() {
        this.#jelenlegiAllapot[event.detail.index] = " ";
        this.#objektumLISTA[event.detail.index].benne = " ";
        this.#objektumLISTA[event.detail.index].setElem(" ");
    }
    #cellaFeltoltese(babu) {
        this.#jelenlegiAllapot[event.detail.index] = babu;
        this.#objektumLISTA[event.detail.index].benne = babu;
        this.#objektumLISTA[event.detail.index].setElem(babu);

    }
}
export default Jatekter;