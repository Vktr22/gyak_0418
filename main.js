import { tesztesetek } from "./teszt.js";

tesztesetek();

export function fuggvenyem3(szam) {
    let osszeg = 0;
    if (szam < 0){
        szam = szam * (-1)
        while (szam>0) {
            let szamjegy = szam % 10;
            osszeg = osszeg + szamjegy;
            szam = Math.floor(szam/10);
        }
        return (osszeg*(-1));
    } 
    while (szam>0) {
        let szamjegy = szam % 10;
        osszeg = osszeg + szamjegy;
        szam = Math.floor(szam/10);
    }
    return osszeg;
}