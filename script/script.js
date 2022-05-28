 
 
let account = {
  
    accountName :"test",
     balance : 100,

     atm:function(){

      const choice = parseInt(prompt("Please press 1 for deposite 2 for withdraw."));
     this.atm =choice;
    
     if (choice===1){
        this.deposit();
        
        
     }
     else if (choice===2){
      this.withdrawal();

     }
     else{
        console.log("Please select one of these choices")
        this.atm();
     }
   },
   
    getBlance:function( amount = 100 ){
       
       alert (" Hi  " +  this.accountName + " the balance of your account is " + this.balance);
       
    },
    deposit:function(){
       const depo=parseFloat(prompt("Please inter amount of your deposit"));
       this.deposit=depo;
       this.balance = (this.balance + this.deposit);
      if (depo >= 0.00){
        alert ("YaY, you have " +  this.deposit  + " SEK deposit on your account! ");
       }else{ 
       alert ("Sorry, wrong input!");
      }
      console.log(this);
      alert (" Hi  " +  this.accountName + " the balance of your account is " + this.balance);
   }, 
    withdrawal:function(){
       const withdraw=parseFloat(prompt("Please inter amount of your withdrawal "));
       this.withdrawal= withdraw;
       this.balance = (this.balance - this.withdrawal);
     if (withdraw >= 0){
         alert (" You wants withdraw " + this.withdrawal +" SEK from your account! ");
      }else{ 
           alert ("Sorry, wrong input!");
       }
       console.log(this);
    },
    getAccountName:function(){ 
      const person = prompt("Please inter your name?");
      this.accountName = person;
      alert ("Hi " + this.accountName);
    }, 
     

   //accountError:function(){
   // if (this.withdrawal >= this.balance){
    //    console.log ("You can not withdraw more than 100 SEK, Please try again! ");
      //  this.account();
   // }s;
 // }
};
account.getAccountName();
account.atm();
account.getBlance();
account.deposit();
account.withdrawal();







// we use parseFloat() becouse we want that user write just the number and also it returns a floating point number.
// And If the first character cannot be converted to a number, the parseFloat () function returns the NaN value.