function calculateTip() {
    let bill = Number(document.getElementById("bill").value);
    let tipPercent = Number(document.getElementById("tip").value);
    let people = Number(document.getElementById("people").value);
    if (bill <= 0 || people <= 0) {
        document.getElementById("result").innerHTML =
            "Please enter valid values!";
        return;
    }
    let tipAmount = (bill * tipPercent) / 100;
    let totalAmount = bill + tipAmount;
    let perPerson = totalAmount / people;
    document.getElementById("result").innerHTML =
        `Tip Amount: ₹${tipAmount.toFixed(2)}<br>
         Total Bill: ₹${totalAmount.toFixed(2)}<br>
         Per Person: ₹${perPerson.toFixed(2)}`;
}