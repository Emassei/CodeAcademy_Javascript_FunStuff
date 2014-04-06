//Cash Register!!!

var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    }
};


cashRegister.add(0.98);
cashRegister.add(1.23);
cashRegister.add(4.99);
cashRegister.add(0.45);

console.log('Your bill is '+cashRegister.total);


//This adds up the items to get a total, but below we can make a for in loop that will cycle through all of the Products and give you a total.  


var cashRegister = {
		total:0,
		add: function(itemCost){
		this.total += itemCost;
	}
};


var Products ={
	Eggs: 0.98,
	Milk: 1.23,
	Magazine: 4.99,
	Chocolate: 0.45
};

for (var x in Products)
{
console.log(cashRegister.add(Products[x]));
}


console.log('Your bill is '+cashRegister.total);

//---------------------------------------------------------------------

var cashRegister = {
    total:0,
    
    add: function(itemCost){
    this.total += itemCost;
    },
    
    
    scan: function(item) {
        switch (item) { 
        case "eggs": 
            this.add(0.98); 
            break;
        
        case "milk": 
            this.add(1.23); 
            break;
        
        case "magazine":
            this.add(4.99);
            break;
        case "chocolate":
            this.add(0.45);
            break;
        }
        return true;
    }
};


cashRegister.scan("eggs");
cashRegister.scan("eggs");
cashRegister.scan("magazine");
cashRegister.scan("magazine");
cashRegister.scan("magazine");



console.log('Your bill is '+cashRegister.total);
//--------------------------------------------------------------------



var cashRegister = {
    total:0,
    add: function(itemCost) {
        this.total +=  itemCost;
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity) {
        switch (item) {
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction: function(){
        this.total -= cashRegister.lastTransactionAmount; 
    }
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',1);
cashRegister.scan('chocolate',4);

cashRegister.voidLastTransaction();
cashRegister.scan('chocolate',3);


//Show the total bill
console.log('Your bill is '+cashRegister.total);

//-------------------------------------------------------------------

function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);
var me = new StaffMember("Joe",20);


var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    applyStaffDiscount : function(employee){
        this.total-=this.total *(employee.discountPercent/100);
    }
    
    
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);
cashRegister.applyStaffDiscount(me);


// Show the total bill
console.log('Your bill is '+cashRegister.total.toFixed(2));
