// Replace this with YOUR API KEY from Step 2
const RESEND_API_KEY = 'paste_your_api_key_here';

// Listen for the form submit
document.getElementById('emailForm').addEventListener('submit', async function (e) {
  e.preventDefault(); // Stops the page from refreshing

  const email = document.getElementById('userEmail').value; // Grab the email
  const messageBox = document.getElementById('message'); // Where we’ll show results

  // Send the email with Resend
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'YourSite <onboarding@resend.dev>', // Change this to your email later
        to: 'your_email@gmail.com', // YOUR email where you’ll get the collected emails
        subject: 'New Email Collected, Yo!',
        html: `<p>Someone gave you this email: ${email}</p>` // Simple message
      })
    });

    if (response.ok) {
      messageBox.textContent = 'Email sent! Check your inbox, dumbass.';
    } else {
      messageBox.textContent = 'Something fucked up. Try again.';
    }
  } catch (error) {
    messageBox.textContent = 'Shit broke. Maybe your internet sucks?';
    console.error(error);
  }
});
