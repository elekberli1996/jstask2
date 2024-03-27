// //daxil olunan eded sadedir yoxsa murekkeb
// let a= +prompt("1 eded daxil edin:");
// c=Math.floor(a/2);
// if(a===1){
//     console.log(`${a} ne murekkeb ededir ne de sade`);
    
// }
// for(let i=2;i<=c+1;i++){

//     if(i===2){
//         console.log(`${a} sade ededir`);
//         break;

//     }
//     else if(a%i==0){
//          console.log(`${a} murekkeb ededir`);
//         break;   
//     }

//     else if (i===c+1) {
//         console.log(`${a} sade ededir`);
//     } 
// }




// Daxil edilen eded Mukemmel ededirm
// let a= +prompt("1 eded daxil edin:");
// c=Math.floor(a/2);
// d=0
//  for(let i=1;i<=c;i++)
//  {
//     if(a%i===0){
//         d=d+i;
//     }

//  }
// if(d===a){
//     console.log(`${a} mukemmel ededdir`)
// }
// else{
//     console.log(`${a} mukemmel eded deildir`)
// }



//iki eded araliqindaki mukemmel ededlar
// let a=+prompt("birinci ededi daxil edin");
// let b=+prompt("ikinci ededi daxil edin");

// let y;
// let d=0;
// for (let i=a;i<=b;i++){
//     y=i;
//     c=Math.floor(y/2);
//     for(let j=1;j<=c;j++){
//         if(y%j===0){
//             d=d+j;
//         } 
//     }
//     if(y===d){
//         console.log(`bu araliqdaki  ${y} ededi mukemeldir`)
//     }
//     d=0;
// }



//ki eded araliqindaki sade ededler
let a=+prompt("birinci ededi daxil edin");
let b=+prompt("ikinci ededi daxil edin");

let y;


for (let i=a;i<=b;i++){
    y=i;
    if(y===2){
        console.log(`bu araliqdaki ${y} ededi sadedir`);
    }
    c=Math.floor(y/2);
    for(let j=2;j<=c+1;j++){

        if(y%j===0){
            break;
        }
       
        else if(j===c+1){
            console.log(`bu araliqdaki ${y} ededi sadedir`);
        }


    }

}


//sonu 7 ile biten reqemler
// let a=+prompt("birinci ededi daxil edin");
// let b=+prompt("ikinci ededi daxil edin");

// let y;

// for (let i=a;i<=b;i++){
//     y=i;
    
//     for(let j=1;j<=y;j++){

//         if((y+3)%10===0){
//             console.log(y);
//             break;
//         }

//     }

// }

