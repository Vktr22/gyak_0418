import { fuggvenyem3 } from "./main.js";

export function tesztesetek(){
    const tesztLista = [
        {
            szam: 0,
            vart: 0
        },
        {
            szam: 1,
            vart: 1
        },
        {
            szam: 10,
            vart: 1
        },
        {
            szam: 123,
            vart: 6
        },
        {
            szam: -1,
            vart: 0
        },
        {
            szam: 312,
            vart: 6
        }
    ]
    tesztLista.forEach(function(teszt,index) {
        console.assert(teszt.vart === fuggvenyem3(teszt.szam),"%o",`szam: ${teszt.szam} vart: ${teszt.vart} kapott: ${fuggvenyem3(teszt.szam)}`,`HIBA! a/az ${index}. tesztesetnél`)
    })
}