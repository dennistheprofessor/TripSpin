// Replace these with YOUR values
const RESEND_API_KEY = 're_7RvNxEZm_E1HeLhSqfziGZ9rwMitLd2SF'; // YOUR Resend API Key from resend.com > API Keys
const AUDIENCE_ID = 'b691bbd2-9a0c-4102-873f-c5c5e28708f7'; // YOUR Audience ID from Step 1

// Function to handle form submission
function submitEmail(event) {
  event.preventDefault(); // Stop the page from refreshing

  const emailInput = document.getElementById('emailInput').value; // Grab the email
  const successMessage = document.getElementById('successMessage'); // Success div

  // Step 1: Send the email to your inbox
  fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${RESEND_API_KEY}`
    },
    body: JSON.stringify({
      from: 'ATLAS <onboarding@resend.dev>', // Change later if you want a custom domain
      to: 'dennistheprofessor@gmail.com', // YOUR email where you get notified
      subject: 'New ATLAS Early Access Signup',
      html: `<p>New signup for ATLAS Early Access: ${emailInput}</p>`
    })
  })
    .then(response => {
      if (!response.ok) throw new Error('Email send failed');
      return response.json();
    })
    .then(() => {
      // Step 2: Add the email to your Resend Audience
      return fetch('https://api.resend.com/audiences/' + AUDIENCE_ID + '/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RESEND_API_KEY}`
        },
        body: JSON.stringify({
          email: emailInput,
          unsubscribed: false // They’re opted in by default
        })
      });
    })
    .then(response => {
      if (!response.ok) throw new Error('Audience add failed');
      // If both succeed, show success
      document.getElementById('emailForm').style.display = 'none';
      successMessage.style.display = 'block';
    })
    .catch(error => {
      console.error('Shit hit the fan:', error);
      alert('Something broke. Check your API key, Audience ID, or internet.');
    });

  return false; // Keep the form from submitting the old way
}

// Handle the close button
document.getElementById('closeSubscription').addEventListener('click', function () {
  document.getElementById('subscriptionContainer').style.display = 'none';
});
