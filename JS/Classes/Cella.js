class Cella {
    constructor(szuloELEM, index, benne) {
        this.index = index;
        this.benne = benne;
        szuloELEM.append(`<div class="divELEM"> <p class="babu">${this.benne}</p></div>`);
        console.log("Cella látszik");

        this.pElem = $("article .divElem:last-child p");
        this.divElem = $("article .divElem:last-child");

    }
}
export default Cella;