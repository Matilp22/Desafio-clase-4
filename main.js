const suma= (num1, num2)=> num1 + num2
alert("Bienvenido al simulador de compras! Ingresá los montos de dos productos y disfruta de los descuentos que tenemos para vos!")

for(let resultado1 = 1 ; resultado1 <9999; resultado1++) {
    do{
        let numero1 = parseFloat(prompt("Ingrese el valor de su primer produto seleccionado:"));
        let numero2 = parseFloat(prompt("Ingrese el valor de su segundo produto seleccionado:"));
        let resultado1 = suma(numero1, numero2);
    
        if (resultado1 < 5000) {
            alert("El valor total de compra con descuento es de $" + resultado1*0.95)
        }else if (resultado1 >= 5000 && resultado1 <= 9999){
            alert("El valor total de compra con descuento es de $" + resultado1*0.90)
        }else if (resultado1 >= 10000 && resultado1 <= 14999){
            alert("El valor total de compra con descuento es de $" + resultado1*0.85)
        }else if(resultado1 >= 14999 && resultado1 <= 24999){
            alert("El valor total de compra con descuento es de $" + resultado1*0.80)
        }else {
            alert("No hay productos que sumen ese monto. Ingrese los valores nuevamente...")
            
        }
    }while (resultado1 < 25000);
}