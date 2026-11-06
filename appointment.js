const appointmentForm = document.getElementById("appointmentForm");

const dateInput = document.getElementById("date");

// Prevent past dates
const today = new Date();
const localToday = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

dateInput.min = localToday;

appointmentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const hour = document.getElementById("hour").value;
const minute = document.getElementById("minute").value;
const ampm = document.getElementById("ampm").value;

const time = `${hour}:${minute} ${ampm}`;
    const message = document.getElementById("message").value;

    // Your salon's WhatsApp number
    const whatsappNumber = "254111312937";

    const whatsappMessage =
        " *MARIE BEAUTY STUDIO - APPOINTMENT REQUEST* \n\n" +
        " *Client Name:* " + name + "\n" +
        " *Phone Number:* " + phone + "\n" +
        " *Email:* " + (email || "Not provided") + "\n" +
        " *Service:* " + service + "\n" +
        " *Preferred Date:* " + date + "\n" +
        " *Preferred Time:* " + time + "\n" +
        " *Additional Information:* " + (message || "None") +
        "\n\nPlease confirm my appointment. Thank you!";

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const whatsappURL =
        "https://wa.me/" + whatsappNumber +
        "?text=" + encodedMessage;

    window.open(whatsappURL, "_blank");

});