class Cella {
    constructor(szuloELEM, index, benne) {
        this.index = index;
        this.benne = benne;
        szuloELEM.append(`<div class="divELEM"> ${this.benne}</div>`);
        
        this.divElem = $("article .divELEM:last-child");

        this.divElem.on("click", ()=>{
            this.esemenyTrigger();
            //console.log("Működik a kattintás")
        })
    }
    setElem(ertek){
        console.log(this.divElem)
        this.divElem.text(ertek);
    }

    esemenyTrigger() {        
        const esemeny = new CustomEvent("kattintasKockara", { detail: this });
        window.dispatchEvent(esemeny);
        //console.log("A triggert elétjük");
      }
}
export default Cella;