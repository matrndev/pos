var total = 0;
var cost = 0;
var paid = 0;
var toPay = 0;
var gitem = "";
var reciept = [];
var name = "";
function addItem(item) {
    console.log("Added: " + item);
    gitem = item;
    itemCost();
    addOrderedItem(item);
}
nameSession();
function nameSession() {
    var name = prompt("Please name this session first. (press ENTER to bypass)");
    if (name == "") {
        document.getElementById("title").innerHTML = "POS - Untitled session";
    } else {
        document.getElementById("title").innerHTML = "POS - " + name;
    }
    
}
function itemCost() {
    if (gitem == "Item S") cost = 5;
    if (gitem == "Item M") cost = 9;
    if (gitem == "Drink (0.3 L)") cost = 4;
    if (gitem == "Drink (0.4 L)") cost = 16;
    if (gitem == "Drink (0.5 L)") cost = 19;
    if (gitem == "Drink (1 L)") cost = 24;
    if (gitem == "Dish 1") cost = 19;
    if (gitem == "Dish 2") cost = 29;
    if (gitem == "Dish 3") cost = 8.5;
}
function addOrderedItem(item) {
    reciept.push(item + " @ " + cost + " €");
    var table = document.getElementById("items");
    var row = table.insertRow(0);
    var cell = row.insertCell(0);
    cell.innerHTML = item + " @ " + cost + " €";
    total = total + cost;
    document.getElementById("total").innerHTML = "Total: " + total + " €";
}
function pay() {
    document.getElementById("pos").style.visibility = "hidden";
    document.getElementById("reciept").style.visibility = "hidden";
    document.getElementById("pos").innerHTML = "";
    document.getElementById("pay").style.visibility = "visible";
    document.getElementById("totalscreentxt").innerHTML = total + " €";
    document.getElementById("paid").innerHTML = "Paid: " + paid + " €";
    document.getElementById("return").innerHTML = "To pay: " + toPay + " €";
    if (paid == total) {
        document.getElementById("backPOS").style.visibility = "visible";
        document.getElementById("givereciept").style.visibility = "visible";
    } else {
        document.getElementById("backPOS").style.visibility = "hidden";
        document.getElementById("givereciept").style.visibility = "hidden";
    }
}

function backPOS() {
    location.reload();
}
function defineVal(val) {
    if (paid == undefined) paid = 0;
    paid = val;
    defineReturn();
}
function defineName(val) {
    name = val;
}
function defineReturn() {
    toPay = (total) - (paid);
    pay();
}
function giveReciept() {
    document.getElementById("reciepttitle").innerHTML = "Reciept for " + name + ":";
    document.getElementById("pos").style.visibility = "hidden";
    document.getElementById("pos").innerHTML = "";
    document.getElementById("pay").innerHTML = "";
    document.getElementById("pay").style.visibility = "hidden";
    document.getElementById("reciept").style.visibility = "visible";
    var date = new Date();
    document.getElementById("recieptfooter").innerHTML = "<h3>Paid total: " + total + " €" + "</h3><br><br>Thank you for choosing us!<br><i>Your Store Name</i><br><br><i>" + date +  "</i>"
    var table = document.getElementById("reciepttable");
    reciept.forEach(Element => {
        var row = table.insertRow(0);
        var cell = row.insertCell(0);
        cell.innerHTML = Element;
    });
    print();
    location.reload()
}
function addCustomItem() {
    var itemName = prompt("Please enter item name.");
    var itemPrice = parseInt(prompt("Please enter item price."));
    if (isNaN(itemPrice)) {
        alert("Item price is NaN.");
        return;
    }
    reciept.push(itemName + " @ " + itemPrice + " €");
    var table = document.getElementById("items");
    var row = table.insertRow(0);
    var cell = row.insertCell(0);
    cell.innerHTML = itemName + " @ " + itemPrice + " €";
    total = total + itemPrice;
    document.getElementById("total").innerHTML = "Total: " + total + " €";
}