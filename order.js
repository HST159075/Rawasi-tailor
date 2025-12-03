function sendWhatsApp() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let dress = document.getElementById("dress").value;
    let notes = document.getElementById("notes").value;

    // Measurements
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

    let message = `*New Tailoring Order*\n\n` +
        `👤 Name: ${name}\n` +
        `📞 WhatsApp: ${phone}\n` +
        `👗 Dress Type: ${dress}\n` +
        `📝 Notes: ${notes}\n\n` +
        `📏 *Measurements*\n` +
        `Shoulder: ${shoulder}\n` +
        `Bust: ${bust}\n` +
        `Waist: ${waist}\n` +
        `Hip: ${hip}\n` +
        `Sleeve: ${sleeve}\n` +
        `Length: ${length}\n` +
        `Neck: ${neck}\n` +
        `Armhole: ${armhole}`;

    let whatsappNumber = "96891451698"; // Oman Number without +
    let url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank").focus();
}
