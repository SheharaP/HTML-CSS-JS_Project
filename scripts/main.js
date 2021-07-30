let acc = document.getElementsByClassName("accordion");
let a;

for (a = 0; a< acc.length; a++) {
  acc[a].addEventListener("click", function() {

    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

const purchase = document.getElementById("total");
const orderList = document.getElementById("currentOrders");
const current1 = document.getElementById("itemOrder1");
const current2 = document.getElementById("itemOrder2");
const current3 = document.getElementById("itemOrder3");
const current4 = document.getElementById("itemOrder4");

let directory = [];
let duration = [];
let i = [];
let j = [];
let h = [];
let total = [];
let orderNo = 0;
let t = 0;
let pass = ["DAY PASS","STUDENT PASS","FOREIGNER PASS","OPTIONAL PASS"]
let current = [current1, current2,current3,current4];

    

function due(y){

  duration[y]  = time(h[y],y);

}

function addTotal(t,i){
  total[i] = t;
}

function currentOrder(a){

  if((i[a])&&(j[a]==0)){
  current[a].innerText  = "\n"+"Number of tickets(Adult): "+ i[a] + "\n"+
  "Number of tickets(Children): 0"+"\n";
  }
  else if((j[a])&&(i[a]==0)){
    current[a].innerText  = "\n"+"Number of tickets(Adult): 0"+ "\n"+
    "Number of tickets(Children): "+ j[a]  + "\n";
  }
  else{
    current[a].innerText  = "\n"+"Number of tickets(Adult): "+ i[a]+"\n"+
    "Number of tickets(Children): "+ j[a]  + "\n";
  }
  current[a].innerText  += "Duration: "+"\t"+ duration[a]+ "\n";

}

function currentOrder0P(a){
  if((i[a])&&(j[a]==0)){
    current[a].innerText  = "\n"+"Number of Annual Passes: "+ i[a] + "\n"+
    "Number of Food Tokens: 0"+"\n";
    }
    else if((j[a])&&(i[a]==0)){
      current[a].innerText  = "\n"+"Number of Annual Passes: 0"+ "\n"+
      "Number of Food Tokens: "+ j[a]  + "\n";
    }
    else{
      current[a].innerText  = "\n"+"Number of Annual Passes: "+ i[a]+"\n"+
      "Number of Food Tokens: "+ j[a]  + "\n";
    }
}



const buttonOrder1 = document.getElementById("buttonOrder1");


const input1 = document.getElementById("result1");

const input2 = document.getElementById("result2");

const hr1= document.getElementById("hours1");

const tot1= document.getElementById("totalResult1");

input1.addEventListener("click", add1);
input2.addEventListener("click", add1);
hr1.addEventListener("click", add1);

let total1 = 0;

function add1(){

  i[0] = parseInt(input1.value);
  j[0] = parseInt(input2.value);
  h[0] = parseInt(hr1.value);

  total1= h[0]+i[0]*1000+j[0]*500;
  tot1.value = total1;
  addTotal(total1,0);
  due(0);
  currentOrder(0);

}
buttonOrder1.addEventListener("click", function(){
  order(0);
},false);

const buttonOrder2 = document.getElementById("buttonOrder2");


const input3 = document.getElementById("result3");

const input4 = document.getElementById("result4");

const hr2 = document.getElementById("hours2");

const tot2 = document.getElementById("totalResult2");

input3.addEventListener("click", add2);
input4.addEventListener("click", add2);
hr2.addEventListener("click", add2);

let total2 = 0;
function add2(){

  i[1] = parseInt(input3.value);
  j[1] = parseInt(input4.value);
  h[1] = parseInt(hr2.value);

  total2 =h[1] + i[1]*500+ j[1]*250;
  tot2.value = total2;
  addTotal(total2,1);
  due(1);
  currentOrder(1);
}
buttonOrder2.addEventListener("click", function(){
  order(1);
},false);


const buttonOrder3 = document.getElementById("buttonOrder3");

const input5 = document.getElementById("result5");

const input6 = document.getElementById("result6");

const hr3 = document.getElementById("hours3");

const tot3 = document.getElementById("totalResult3");

input5.addEventListener("click", add3);
input6.addEventListener("click", add3);
hr3.addEventListener("click", add3);
let total3 =0;
function add3(){

  i[2] = parseInt(input5.value);
  j[2] = parseInt(input6.value);
  h[2] = parseInt(hr3.value);

  total3 =h[2] + i[2]*5000+ j[2]*2500;
  tot3.value = total3;
  addTotal(total3,2);
  due(2);
  currentOrder(2);
}
buttonOrder3.addEventListener("click", function(){
  order(2);
},false);

const buttonOrder4 = document.getElementById("buttonOrder4");

const input7 = document.getElementById("result7");

const input8 = document.getElementById("result8");

const tot4= document.getElementById("totalResult4");

input7.addEventListener("click", add4);
input8.addEventListener("click", add4);

let total4 =0;
function add4(){

  i[3] = parseInt(input7.value);
  j[3] = parseInt(input8.value);

  total4 = i[3]*5000+ j[3]*500;
  tot4.value = total4;
  addTotal(total4,3);
  currentOrder0P(3);


}

buttonOrder4.addEventListener("click", function(){
  orderOP(3);
},false);

function time(h,i){
  if(h==1000){
    duration[i] = "Two days";
  }
  else if(h==500){
    duration[i] = "Full day";
  }
  else if(h==250){
    duration[i] = "Half day";

  }
  else{
    duration[i] = "3 Hours"
  }
  return duration[i];
}


function reset(i){
  if(i==0){
  tot1.value=" ";
  input1.value = 0;
  input2.value=0;
  hr1.value = "0";
}  
else if(i==1){
  tot2.value=" ";
  input3.value = 0;
  input4.value=0;
  hr2.value = "0";
}
else if(i==2){
  tot3.value=" ";
  input5.value = 0;
  input6.value=0;
  hr3.value = "0";
}
else if(i==3){
  tot4.value=" ";
  input7.value = 0;
  input8.value=0;
}
}


function totalCost(tot){
   
   t += tot;
   purchase.value = t;

}


function order(a){
  orderList.innerText  += "\n"+"\n"+pass[a]+"\n"+"Number of tickets(Adult): "+ i[a] + "\n"+
  "Number of tickets(Children): "+ j[a]  + "\n"+ 
  "Duration: "+"\t"+ duration[a]+ "\n"+
  "Total: "+"LKR "+total[a] +".00";
  current[a].innerText = " ";
  reset(a);
  totalCost(total[a]);
  orderNo++;

}
function orderOP(a){
  orderList.innerText  += "\n"+"\n"+pass[a]+"\n"+"Number of Annual Passes: "+ i[a] + "\n"+
  "Number of Food Tokens: "+ j[a]  + "\n"+ 
  "Total: "+"LKR "+total[a] +".00";
  current[a].innerText = " ";
  reset(a);
  totalCost(total[a]);
  orderNo++;

}


const btnPurchase = document.getElementById("buttonPurchase");

btnPurchase.addEventListener("click", msg);

function msg(){
  event.preventDefault();
  window.alert("Added to your Order!\n Thank you for your custom order.\n Tickets manufacturer: Dehiwala Zoo");
  orderList.innerText = "Current order(s):";
  purchase.value = null;

}


const checkout = document.getElementById("btnform");

checkout.addEventListener("click", donate);

function donate(){
  event.preventDefault();
  window.alert("Successful Donation!\nThank you. ");
}

const favorite = document.querySelectorAll(".fav");

for(let i=0; i<favorite.length; i++){
  favorite[i].addEventListener("click", function(){
  addFav(i);
},false);
}
let directoryTotal = 0;

function showEntries(a){
    orderList.innerText += "\n"+"\n"+directory[a].type+"\n"+"Number of tickets(Adult): "+directory[a].adultNo + "\n"+
    "Number of tickets(Children): "+ directory[a].childNo + "\n"+ 
    "Duration: "+"\t"+ directory[a].hours+ "\n"+
    "Total: "+"LKR "+ directory[a].total +".00";
    directoryTotal = directory[a].total;
    
  
}

function showEntriesOP(a){

    orderList.innerText  += "\n"+"\n"+directory[a].type+"\n"+"Number of Annual Passes: "+ directory[a].annual + "\n"+
  "Number of Food Tokens: "+ directory[a].food + "\n"+ 
  "Total: "+"LKR "+directory[a].total +".00";
    directoryTotal = directory[a].total;
  
  
  }

function addFav(x){
  if(duration[x]){
  const entry1 = {
      "type" :pass[x],
      "adultNo" : i[x],
      "childNo" : j[x],
      "hours": duration[x],
      "total": total[x]
  };
  directory.splice(0,1,entry1);
  localStorage.setItem('directory', JSON.stringify(directory));
}
else{
  const entry2 = {
    "type" :pass[x],
    "annual" : i[x],
    "food" : j[x],
    "total": total[x]
   
};
directory.splice(0,1,entry2);
localStorage.setItem('directory', JSON.stringify(directory));
}

  
  if(duration[x]){
  order(x);
  }
  else{
    orderOP(x);
  }
  
}

const favoriteButton = document.getElementById("favoriteButton");

favoriteButton.addEventListener("click", favList);

function favList(){
  if("directory" in localStorage){
    orderNo++;
    directory = JSON.parse(localStorage.getItem('directory'));
    if(directory[0].hours){
      showEntries(0);
      
      }
      else{
        showEntriesOP(0);
        
      }
    }
    
    totalCost(directoryTotal);
  }


const loyaltyButton = document.getElementById("loyaltyButton");
loyaltyButton.addEventListener("click", loyaltyCheck);

let points =0;

function loyaltyCheck(){
  event.preventDefault();
    if(orderNo>3){
      points = 20*orderNo;
      window.alert("Your loyalty points are: "+points);
      const loyaltyPoints = {
        "loyalty points": points
    };
    directory.push(loyaltyPoints);
    localStorage.setItem('directory', JSON.stringify(directory));
    }
    else{
      window.alert("Your loyalty points are: 0");
    }
}
