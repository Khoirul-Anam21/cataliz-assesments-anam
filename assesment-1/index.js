/*
 *  - urutan angka mewakili disk
 *  - angka kecil mewakili disk paling atas / kecil
 *  - angka kecil tidak boleh di belakang angka besar
 *  - Hitung berapa kali step sampai array batang 3 terisi 3, 2, 1
 */


const disks = [3, 2, 1];

const batang2 = [];
const batang3 = [];
let iterator = 1;
let step = 0;

function howManySteps(batang) {
    moveDisk(batang, batang3);
    moveDisk(batang, batang2);
    moveDisk(batang3, batang2);
    moveDisk(batang, batang3);
    moveDisk(batang2, batang);
    moveDisk(batang2, batang3);
    moveDisk(batang, batang3);

    console.log("List daftar batang: ");
    console.log("Batang 1");
    console.log(batang);
    console.log("Batang 2");
    console.log(batang2);
    console.log("Batang 3");
    console.log(batang3);
    return step;
}

function moveDisk(batangAsal, batangTujuan) {
    const val = batangAsal.pop();
    batangTujuan.push(val);
    const valIndex = batangTujuan.indexOf(val);
    if (batangTujuan[valIndex - 1] < batangTujuan[valIndex]) {
        console.log(batangTujuan);
        batangTujuan.pop();
        throw `Disk yang lebih besar tidak boleh di atas yang lebih kecil`;
    }
    step++;
    console.log(`===success===`);
    console.log("Batang 1 smt");
    console.log(disks);
    console.log("Batang 2 smt");
    console.log(batang2);
    console.log("Batang 3 smt");
    console.log(batang3);
    console.log(`===success===`);
}



const minStepCount = howManySteps(disks);
console.log(`Minimal step yang diperlukan sebanyak ${minStepCount} kali`);






