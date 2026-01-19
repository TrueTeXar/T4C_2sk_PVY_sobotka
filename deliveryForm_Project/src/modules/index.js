//auxiliary variables
const db = [];



//fakturační a dodací adresa
const checkbox = document.getElementById("sameAddress")


const billing_address = {
    address: document.getElementById("billAddress"),
    city: document.getElementById("billCity"),
    street: document.getElementById("billStreet"),
    postal_code: document.getElementById("billZip"),
}


const shipping_address = {
    address: document.getElementById("shipAddress"),
    city: document.getElementById("shipCity"),
    street: document.getElementById("shipStreet"),
    postal_code: document.getElementById("shipZip"),
}


checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
        shipping_address.address.value = billing_address.address.value;
        shipping_address.city.value = billing_address.city.value;
        shipping_address.street.value = billing_address.street.value;
        shipping_address.postal_code.value = billing_address.postal_code.value;
    }
    else {
        shipping_address.address.value = "";
        shipping_address.city.value = "";
        shipping_address.street.value = "";
        shipping_address.postal_code.value = "";
    }
})



//faktura
function generateBillNumber() {

    const date = new Date();

    //rok - vezme poslední dvě číslice
    const year = String(date.getFullYear()).slice(-2);

    //měsíc - posunutí na indexu měsíce o 1 a přidání nuly
    const month = String(date.getMonth() + 1).padStart(2, "0");

    //náhodné číslo 
    const randNumber = Math.floor(10000 + Math.random() * 90000);

    //interpolovaný string
    return `FAK-${year}-${month}-${randNumber}`;
}





document.addEventListener("DOMContentLoaded", function() {

    const billInput = document.getElementById("billCode")
    
    const form = document.getElementById("orderForm");

    const notif = document.getElementById("notification");

    billInput.value = generateBillNumber();


    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if(!form.checkValidity()) {

            form.reportValidity();
            return;
        }


        const deliveryWay = document.querySelector('input[name="deliveryMethod"]:checked');


        const queue = {
            billCode: document.getElementById("billCode").value,

            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,

            billingAddress: {
                address: document.getElementById("billAddress").value,
                city: document.getElementById("billCity").value,
                street: document.getElementById("billStreet").value,
                zip: document.getElementById("billZip").value
            },

            shippingAddress: {
                address: document.getElementById("shipAddress").value,
                city: document.getElementById("shipCity").value,
                street: document.getElementById("shipStreet").value,
                zip: document.getElementById("shipZip").value
            },

            deliveryMethod: deliveryWay.value

        };


        db.push(queue);
        console.log(db);

        notif.classList.remove("hidden");


        form.reset();

        billInput.value = generateBillNumber();
    })
})








