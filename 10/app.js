 //1
 class counter 
 {
     count = 0;
     constructor(count)
     {
         this.count = count
     }
     up = function ()
     {
         let num = this.count;
         for (let i=1; i<2; i++)
           { 
               num += i
               this.count = num
           }
     }
    
     down = function ()
         {
             let num = this.count;
             for (let i=1; i<2; i++)
               { 
                   num -= i
                   this.count = num
               }
         }
    
     
     show = function()
     { console.log('counter1', '=',this.count)
 
     }
 }
 let counter1 = new counter(5);
 
 setTimeout(() => {
     counter1.show() 
 }, 10000); //Забавная штука асинхронность
 
 counter1.up()
 counter1.up()
 counter1.show()
 counter1.down()
 counter1.down()
 counter1.down()
 counter1.down()
 counter1.down()
 counter1.show()
 
 
 //2
 let counter2 = {
     count1 : 0,
     up1 : function ()
     {
         let number = this.count1;
         for (let i=1; i<2; i++)
           { 
               number += i
               this.count1 = number
           }
     },
     down1 : function ()
     {
         let number = this.count1;
         for (let i=1; i<2; i++)
           { 
               number -= i
               this.count1 = number
           }
     },
     show1 : function ()
     {
 console.log('counter2', '=',this.count1)
     }
 }
 counter2.count1 = 5
 counter2.show1()
 counter2.up1()
 counter2.up1()
 counter2.show1()
 counter2.down1()
 counter2.down1()
 counter2.down1()
 counter2.down1()
 counter2.down1()
 counter2.show1()
 
 //3
 class mixer{
     constructor(type, voltage, rpm){
         this.type = type
         this.voltage = voltage
         this.rpm  = rpm
     }
     power(){
         console.log('power is on', this.voltage,'v')
     }
     adjust(){
         console.log('Rotation speed set', this.rpm, 'min')
     }
     nozzle(){
         console.log(this.type, 'set knife attachment')
     }
 }
 let mixer1 = new mixer('blender', 220, 3000)
 mixer1.power()
 mixer1.adjust()
 mixer1.nozzle()
 
 //4
 setTimeout (function () {
 console.log('Хватит играть')
 }, 1000);
 setTimeout (function () {
     console.log('пора делать ДЗ!')
     }, 5000);