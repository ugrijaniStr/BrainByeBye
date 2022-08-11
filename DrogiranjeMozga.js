function DrogiranjeMozga(x) {
    let obj = []
    let lem = ['k','g','n','i'];
    let str = 'kdsk0dw0kkdsokstartokfoekp';
    let is = 'to je fact...';
    let op = lem.length;
    let etan = str.slice(14,19);
    for(let i = op; 1 <= i; i--) {
        obj.push(`${lem[i]}`);
    }
    let gms = '';
    for(let j = 1; j <= (obj.length - 1); j++) {
        gms += obj[j];
    }
    console.log(`${etan}${gms}...`);
    setTimeout(function() {
        const obj = {
            ti: function() {
                return 'ti';
            },
            si: function() {
                return 'si';
            }
        }
        let go = '';
        let eps = ['p','s','e','g','d','f','e','f','r']
        for(let ru = 0; ru <= eps.length; ru+=2) {
            go += eps[ru];
        }
        console.log(obj.ti, obj.si, go + '...');
    }, x);
    setTimeout(function timer() {
        class Droger {
            constructor(z,y) {
                this.z = z;
                this.y = y;
            }
        }
        const met = new Droger('y','sr');
        console.log(met.y+met.z+' '+is);
    }, 3000);
}
setTimeout(function() {
    for(let ozon = 0; ozon <= 10; ozon++){
        console.log(" ");
    }
    let aez = 'byep';
    console.log(aez.slice(0,3));
},4000);

DrogiranjeMozga(2000);
