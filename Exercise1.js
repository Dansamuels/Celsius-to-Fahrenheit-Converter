
function isMinNumber() {
    var minimum = document.getElementById('minimumtemperature').value;
    // checks whether the first input is a number
    if (isNaN(minimum)) {
        alert("Min Temperature is an invalid number!");
    }
    // checks whether the first input is an integer
    else if (minimum % 1 !== 0) {
        alert("Min Temperature is not an Integer!");
    }
}

function isMaxNumber() {
    var maximum = document.getElementById('maximumtemperature').value;
    // checks whether the last input is a number
    if (isNaN(maximum)) {
        alert("Max Temperature is an invalid number!");
    }
    // checks whether the last input is an integer
    else if (maximum % 1 !== 0) {
        alert("Max Temperature is not an Integer!");
    }
}
//global variable counts the number of tables created;
var t = 0;

function Ctof(Id) {
    var maximum = document.getElementById('maximumtemperature').value;
    var minimum = document.getElementById('minimumtemperature').value;
    var difference = maximum - minimum;
    var differences = minimum - maximum;
    // checks whether the difference between the first input
    // and second is less than or equal to 25
    if (difference <= 25) {
        //creation of the table and the head
        var conversion = document.getElementById(Id);
        var table = document.createElement('table');
        table.setAttribute("id", "vis");
        t++;
        conversion.appendChild(table);
        var head = table.appendChild(document.createElement("thead"));
        var trow = head.appendChild(document.createElement("tr"));
        var hcell = trow.appendChild(document.createElement("th"));
        hcell.appendChild(document.createTextNode("Celsius"));
        hcell = trow.appendChild(document.createElement("th"));
        hcell.appendChild(document.createTextNode("Fahrenheit"));
        var tbody = table.appendChild(document.createElement("tbody"));
        //creates a table starting from the users first input to their last
        for (var i = minimum; i <= maximum; i++) {
            var brow = tbody.appendChild(document.createElement("tr"));
            // if the row number is even it is given a class value of even
            if (i % 2 == 0) {
                brow.setAttribute("class", "even");
            }
            // if the row number is odd it is given a class value of odd
            else {
                brow.setAttribute("class", "odd");
            }
            var bcell = brow.appendChild(document.createElement("td"));
            bcell.appendChild(document.createTextNode(i));
            bcell = brow.appendChild(document.createElement("td"));
            var result = i * 9 / 5 + 32;
            bcell.appendChild(document.createTextNode(result.toFixed(2)));
        }
        // checks if the first input greater than the second input and whether
        // their difference is less than or equal to 25
        if (minimum > maximum && differences <= 25) {
            for (var i = minimum; i >= maximum; i--) {
                var brow = tbody.appendChild(document.createElement("tr"));
                // if the row number is even it is given a class value of even
                if (i % 2 == 0) {
                    brow.setAttribute("class", "even");
                }
                // if the row number is odd it is given a class value of odd
                else {
                    brow.setAttribute("class", "odd");
                }
                var bcell = brow.appendChild(document.createElement("td"));
                bcell.appendChild(document.createTextNode(i));
                bcell = brow.appendChild(document.createElement("td"));
                var result = i * 9 / 5 + 32;
                bcell.appendChild(document.createTextNode(result.toFixed(2)));
            }
        }
        // this alert is created if the previous if statment is false
        else {
            alert("The range is too large!")
        }
    }
    // if the diferrence between the last input and the first is greater than 25
    // this alert is created
    else {
        alert("The range is too large!")
    }
}

function Ftoc(Id) {
    var minimum = document.getElementById('minimumtemperature').value;
    var maximum = document.getElementById('maximumtemperature').value;
    var difference = maximum - minimum;
    var differences = minimum - maximum;
    // checks whether the difference between the first input
    // and second is less than or equal to 25
    if (difference <= 25) {
        //creation of the table and the head
        var conversion = document.getElementById(Id);
        var table = document.createElement('table');
        table.setAttribute("id", "vis");
        t++;
        conversion.appendChild(table);
        var head = table.appendChild(document.createElement("thead"));
        var trow = head.appendChild(document.createElement("tr"));
        var hcell = trow.appendChild(document.createElement("th"));
        hcell.appendChild(document.createTextNode("Fahrenheit"));
        hcell = trow.appendChild(document.createElement("th"));
        hcell.appendChild(document.createTextNode("Celsius"));
        var tbody = table.appendChild(document.createElement("tbody"));
        //creates a table starting from the users first input to their last
        for (var i = minimum; i <= maximum; i++) {
            var brow = tbody.appendChild(document.createElement("tr"));
            // if the row number is even it is given a class value of even
            if (i % 2 == 0) {
                brow.setAttribute("class", "even");
            }
            // if the row number is odd it is given a class value of odd
            else {
                brow.setAttribute("class", "odd");
            }
            var bcell = brow.appendChild(document.createElement("td"));
            bcell.appendChild(document.createTextNode(i));
            bcell = brow.appendChild(document.createElement("td"));
            var result = ((i - 32) * 5 / 9);
            bcell.appendChild(document.createTextNode(result.toFixed(2)));
        }

        // checks if the first input greater than the second input and whether
        // their difference is less than or equal to 25
        if (minimum > maximum && differences <= 25) {
            for (var i = minimum; i >= maximum; i--) {
                var brow = tbody.appendChild(document.createElement("tr"));
                // if the row number is even it is given a class value of even
                if (i % 2 == 0) {
                    brow.setAttribute("class", "even");
                }
                // if the row number is odd it is given a class value of odd
                else {
                    brow.setAttribute("class", "odd");
                }
                var bcell = brow.appendChild(document.createElement("td"));
                bcell.appendChild(document.createTextNode(i));
                bcell = brow.appendChild(document.createElement("td"));
                var result = ((i - 32) * 5 / 9);
                bcell.appendChild(document.createTextNode(result.toFixed(2)));
            }

        }
        // this alert is created if the previous if statment is false
        else {
            alert("The range is too large!")
        }
    }
    // if the diferrence between the last input and the first is greater than 25
    // this alert is created
    else {
        alert("The range is too large!")
    }
}

function ClearScreen(){
    while(t!==0){
    var a = document.getElementById('vis');
    a.parentNode.removeChild(a)
    t--;
    }
    
}