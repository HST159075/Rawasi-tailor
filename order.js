function sendWhatsApp() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let dress = document.getElementById("dress").value;
    let notes = document.getElementById("notes").value;

    let shoulder = document.getElementById("shoulder").value;
    let bust = document.getElementById("bust").value;
    let waist = document.getElementById("waist").value;
    let hip = document.getElementById("hip").value;
    let sleeve = document.getElementById("sleeve").value;
    let length = document.getElementById("length").value;
    let neck = document.getElementById("neck").value;
    let armhole = document.getElementById("armhole").value;

    if (name === "" || phone === "") {
        alert("Please enter Name and WhatsApp Number!");
        return;
    }

    let message = `*New Tailoring Order*%0a
👤 Name: ${name}%0a
📞 WhatsApp: ${phone}%0a
👗 Dress Type: ${dress}%0a
📝 Notes: ${notes}%0a
---------------------%0a
📏 *Measurements*%0a
Shoulder: ${shoulder}%0a
Bust: ${bust}%0a
Waist: ${waist}%0a
Hip: ${hip}%0a
Sleeve: ${sleeve}%0a
Length: ${length}%0a
Neck: ${neck}%0a
Armhole: ${armhole}`;

    window.open(`https://wa.me/96891451698?text=${message}`, "_blank");
}
