const product1=15.678;
const product2=123.965;
const product3=90.2345;
const genPrice=product1+product2+product3;
{   
    console.log("Task 1");
    let maxPrice;
   maxPrice=Math.max(product1,product2,product3);
    console.log( "Максимальне чисто",maxPrice);
}
{   
    console.log("Task 2");
    let minPrice;
   minPrice=Math.min(product1,product2,product3);
    console.log( "Мінімальне чисто",minPrice);
}
{   
    console.log("Task 3");
    console.log( "Загальна вартість",genPrice);
}
{   
    console.log("Task 4");
    let roundMinPrice;
   roundMinPrice=Math.floor(product1+product2+product3);
    console.log( "Сума всіх товарів з округленням в меншу сторону",roundMinPrice);
}
{   
    console.log("Task 5");
    let roundPrice2=genPrice/100;
   let roundPrice=Math.ceil(roundPrice2);
    console.log( "Сума товару округлена до сотень",roundPrice*100);
}
{   
    console.log("Task 6");
    roundPrice=Math.floor(genPrice);
    let result;
   if(roundPrice%2==0) { result=true;}
    else {result=false;  
   }
    console.log( "Сума товару є парним числом",result);
}
{   
    console.log("Task 7");
   let change = 500-genPrice;
    console.log( "Решта при оплаті 500",change);
}
{   
    console.log("Task 8");
   let medPrice = genPrice/3;
    console.log( "Середнє значення цін,з округленням до 2 знаків після коми",medPrice.toFixed(2));
}
{   
    console.log("Task 9");
   let discount = Math.random()*100;
    console.log( "Випадкова знижка",Math.round(discount)+"%");
}
{   
    console.log("Task 10");
   let discount = Math.round(Math.random()*100);
   let priceWithDisc=(genPrice*discount)/100;
    console.log( "Сума до оплати, з урахуванням знижки",priceWithDisc.toFixed(2));
}
{   
    console.log("Task 11");
   let discount = Math.round(Math.random()*100);
   let priceWithDisc=(genPrice*discount)/100;
   let cost=genPrice/2;
   let income=cost-(genPrice-priceWithDisc);
    console.log( "Чистий прибуток",income);
}