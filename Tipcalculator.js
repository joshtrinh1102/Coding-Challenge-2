console.log(`U222753301`)
    let bill
    let tippercent= (bill >=50 && bill <=300) ? ".15":".20";
    let tip= bill* tippercent
//Initial logic for calculating tip using ternary operator.
    let total =bill +tip
    console.log(`The bill was $${bill}, the tip was $${tip}, and the total value $${total}`)
    console.log(calcTip(100))

//Add output functionality to display bill, tip, and total.
        
    function calcTip(bill) {return (bill >=50 && bill <=300) ? bill * .15: bill *.20;}
    console.log(calcTip(100))
//Create and test calcTip function
            
                
    const bills=[275,40,430]
    let bill1= calcTip(bills[0])
    let bill2=calcTip(bills[1])
    let bill3=calcTip(bills[2])
    console.log(bills)
    const tips=[bill1,bill2,bill3]
    console.log(tips)
    let total1=bills[0]+tips[0]
    let total2=bills[1]+tips[1]
    let total3= bills[2]+tips[2]
    const totals=[total1,total2, total3]
                
    console.log(totals) 
//Implement and populate arrays for bills, tips, and totals
