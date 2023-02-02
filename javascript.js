// task_1 10 ile 200 arasında ededlerin 3 qatinin 2 eded artiginin 5-e bölünen ededleri gösterin

// let a = 10
// let b = 200
// for (let i = a; i < b ; i++){
//   let c = i*3+2
//   let reminde = c%5
//   if (!reminde){
//     console.log(i)
//   }
// }

// task 2 1-100 arasındaki cut ededlerin toplamını tapin
 
// let cem1 = 0
// for(let i = 1 ; i<=100; i++){
//     let reminde = i%2
//     if (reminde==0){
//         cem1+=i
//     }
// }
// console.log(cem1)

// task3  1-100 arasındaki cut ededlerin toplamının mükemmel eded olub-olmadığını tapin

// let cem1 = 0
// let cem2 = 0
// for(let i = 1 ; i<=100; i++){
//     let reminde = i%2
//     if (reminde==0){
//         cem1+=i
//     }
// }
// for (let i = 1 ; i < cem1 ; i++ ){
//     let reminde = cem1 % i
//     if (reminde==0){
//         cem2+=i
//     }
// }
// console.log(cem1==cem2,'Mukemel eded deyil')

// task4 Input ile 5 eded daxil edin. 7'ye bolunen olanların sayini tapib ekrana yazdırin

// let count = 0

// for (let dovur = 0; dovur < 5; dovur++){
//     let a = prompt('Eded dahil edin :')
//     let reminde = a % 7
//     if (!reminde){
//         count+=1
//     }
// }
// console.log('7-e tam bolunenlerin sayi: ',count)



    // task 5 Input ile daxil olunan ədədin bölənlərini tapın.

    // let a = prompt('Eded dahil edin')
    // for(let i = 1; i <= a ; i++){
    //     let reminde = a % i
    //     if(!reminde){
    //         console.log("inputla dahil olan ededin bolenleri :",i)

    //     }
    // }

    // task 6 Input ile daxil olunan ədədin bölənlərinin sayını tapın.

    // let a = prompt('Eded dahil edin')
    // let count =0
    // for(let i = 1; i <= a ; i++){
    //     let reminde = a % i
    //     if(!reminde){
    //        count+=1
    //     }
    // }
    // console.log('Bolenlerin sayi: ',count)

    // task 7 Input ile daxil olunan ədədin bölənlərinin cəmini tapın.

    // let a = prompt('Eded dahil edin')
    // let cem1 = 0
    // for(let i = 1; i <= a ; i++){
    //     let reminde = a % i
    //     if(!reminde){
    //        cem1 +=i
    //     }
    // }
    // console.log("Ededin bolenlerin cemi :", cem1)

    // task 8 Input ile daxil olunan ədədin bölənlərinin hasilini tapın.

    // let a = prompt('Eded dahil edin')
    // let hasil = 1
    // for(let i = 1; i <= a ; i++){
    //     let reminde = a % i
    //     if(!reminde){
    //        hasil *=i
    //     }
    // }
    // console.log("Ededin bolenlerin hasili :", hasil)


    
 // task9 Input ile daxil olunan ədədin neçə rəqəmli olduğunu tapın.

    // let a = prompt('Eded dahil edin')
    // let count = 0
    // console.log('Eded :',a)
    // while(a>0){
    //     let reminde = a%10
    //      a = Math.trunc(a/10)
    //      count +=1
    // }
    // console.log('Ededin regemlerin sayi : ',count)

    // task 10 Input ile daxil olunan ədədin rəqəmlərinin cəmini tapın

    // let a = prompt('Eded dahil edin : ')
    // let cem = null
    // console.log('Eded',a)
    // while(a > 0 ){
    //     let reminde = a % 10 
    //     a = Math.trunc(a/10)
    //     cem+=reminde
    // }
    // console.log('regemlerin cemi :',cem)

    // task 11 Input ile daxil olunan ədədin rəqəmlərinin hasilini tapın.

    // let a = prompt("eded dahil edin :")
    // let hasil = 1
    // console.log('Eded',a)
    // while(a >0){
    //     let reminde = a %10
    //     a = Math.trunc(a/10)
    //     hasil *=reminde
    // }
    // console.log('Regemelrin hasili :',hasil)

    // task 12 Input ile daxil olunan ədədin sadə yoxsa mürəkkəb olduğunu tapın.

    // let a = prompt('Eded dahil edin :')
    // let count = 0
    // for (let i = 1 ; i <=a ; i ++){
    //     let reminde = a % i
    //     if (!reminde){
    //         count+=1
    //     }
    // }if(count >=3){
    //     console.log(a, 'Murekeb ededtir')
    // }else {
    //     console.log(a, 'Sade ededtir')
    // }



    // task 13 fibanaci
   

    // var a = 0, b = 1, c, i;
    // var Eded=prompt('Fibanaci ardiciligi negeder gedsin :');
    // for ( i=1; i <=Eded; i++){
    //     c=a+b;
    //     console.log(c);
    //     a=b;
    //     b=c;

    // }


    // task 14 Faktorial


    // var Eded = prompt('Hansi ededin faktorialin tapmag istisiz :')
    // var i
    // var hasil = 1
    // for (i = Eded; i > 1 ; i--){
    //     hasil *=i
        
    // }console.log(Eded, '! = ', hasil)