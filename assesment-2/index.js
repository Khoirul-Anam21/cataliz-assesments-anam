const prompt = require('prompt-sync')();
const fs = require('fs');
const path = require('path');


/**
 * map.json adalah simulasi dari google map yang mana sebuah alamat
 * memiliki koordinat. Jika kita menginput koordinat tersebut, 
 * maka akan menghasilkan alamat tersebut. ini adalah simulasi request.
 *
 */


async function main() {
    while (true) {
        const lat = prompt("Masukkan latitude: ");
        const long = prompt("Masukkan longitude: ");
        const location = await getLocationFromLatLong(lat, long)
        writeMapToLocal(location);
        const tes = prompt("stop? ")
        if (tes === "n") {
            break;
        }
    }
}

async function getLocationFromLatLong(lat, long) {
    //  simulasi loading 2 detik
    console.log("Fetching data from Geocode ...");
    await new Promise(resolve => setTimeout(resolve, 2000));
    const mapFile = fs.readFileSync(path.resolve(__dirname, "map.json"), "utf-8");
    const mapData = JSON.parse(mapFile);
    const location = mapData.filter(val => val.location.lat === Number(lat) && val.location.lng === Number(long))[0];
    console.log(location);
    return location;
}


function writeMapToLocal(newLocation) {
    try {
        const localMapFile = fs.readFileSync(path.resolve(__dirname, "address_local_map.json"), "utf-8");
        const localMapData = JSON.parse(localMapFile);        
        localMapData.push(newLocation);
        fs.writeFileSync(path.resolve(__dirname, "address_local_map.json"), JSON.stringify(localMapData), "utf-8");
        console.log("Success to store map to local data");
    } catch (error) {
        console.log("failed to store map to local data");
        console.log(error);
    }
}

main();


