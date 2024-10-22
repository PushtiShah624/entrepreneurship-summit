var email = "test@test.com"
var ticketDetails = "Ticket Details"

document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    email = document.getElementById('email').value;

    // Simulate ticket generation and sending an email
    const ticketID = Math.floor(Math.random() * 10000);
    ticketDetails = `<b> Hello ${name},</br>Thank you for registering for the Entrepreneurship Summit!</br>Ticket ID: ${ticketID}</br></br>Event Details:</br> Date: November 30, 2024</br>Location: Bits Pilani, Pilani Campus.</b></br></br>Best regards,</br>Entrepreneurship Summit Team`;

    // Simulate sending an email
    console.log("Sending email to:", email);
    console.log(ticketDetails);
	
	localStorage.setItem("email", email);
	localStorage.setItem("ticket", ticketDetails);

    // Redirect to confirmation page
    window.location.href = 'confirmation.html';
});
