menuListArray = ["Pizza Vegetariana","Pizza Frango á Bolonhesa", "Pepperoni", "Frango com Catupiry", "Pizza Portuguesa", "Marguerita",
"Calabresa", "Anchovas", "Pimentão", "Azeitona", "Pizza de Nutella", "Pizza de Doce de Leite"
                    ];

function getMenu(){
var htmldata;
menuListArray.sort()
for (var index = 0; index < menuListArray.length; index++) {
    htmldata=htmldata+menuListArray[index]+"<br>"
    
}
document.getElementById("displayMenu").innerHTML=htmldata
}

function addItem(){
var htmldata;
var item=document.getElementById("addItem").value;
var imagens="<img src='images/pizzaImg.png'id='im1'>"
menuListArray.sort()
htmldata=""
for (var index = 0; index < menuListArray.length; index++) {
    htmldata=htmldata+imagens+menuListArray[index]+"<br>"

    
}
document.getElementById("displayAddedMenu").innerHTML=htmldata
}

function addTop(){
    var item=document.getElementById("addItem").value;
    menuListArray.push(item)
    addItem()
}