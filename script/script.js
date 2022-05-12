 
 function atm() {

    var choice = parseInt(prompt("Please press 1 for deposite 2 for withdraw and 3 for see the balance of your account."));
   this.atm =choice;
   console.log(this.atm);
   switch (choice){
       case "1":
           this.deposit();
        case"2":
           this.account.withdrawal();
        case"3":
           this.account.getBlance();
        default:
        console.log("Please select one of these choices")
        this.atm();
   }
   console.log(this);
};
atm();
console.log(atm);

let account = {
   accountName :this.accountName,
   balance : this.balance,

    getBlance:function( amount = 100 ){
        // balance = (this.deposit- this.withdrawal);
        this.balance = amount;
        console.log (this.balance);
    },
    deposit:function(){
       var depo=parseFloat(prompt("Please inter amount of your deposit"));
       this.deposit=depo;
       this.balance = (this.balance + this.deposit);
      if (depo >= 0.00){
        console.log("YaY, you have " +  this.deposit  + " SEK deposit on your account! ");
       }else{ 
       console.log("Sorry, wrong input!");
      }
      console.log(this);
   }, 
    withdrawal:function(){
       var withdraw=parseFloat(prompt("Please inter amount of your withdrawal "));
       this.withdrawal= withdraw;
       this.balance = (this.balance - this.withdrawal);
     if (withdraw >= 0){
         console.log ("Hi, "+this.accountName  +" You wants withdraw " + this.withdrawal +" SEK from your account! ");
      }else{ 
           console.log ("Sorry, wrong input!");
       }
       console.log(this);
    },
   getAccountName:function(){ 
        var person = prompt("Please inter your name?");
        this.accountName = person;
        console.log(this);
      }, 
   accountError:function(){
    if (this.withdrawal >= this.balance){
        console.log ("You can not withdraw more than 100 SEK, Please try again! ");
        this.account();
    }s
  }
};
account.getBlance();
account.getAccountName();
account.deposit();
account.withdrawal();
console.log("Hi " + account.accountName +" the balance of your account is " + account.balance + " SEK");




// we use parseFloat() becouse we want that user write just the number and also it returns a floating point number.
// And If the first character cannot be converted to a number, the parseFloat () function returns the NaN value.