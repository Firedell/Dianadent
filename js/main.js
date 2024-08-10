document.getElementById('reservationForm').addEventListener('submit', function(e) {
	e.preventDefault();

	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const message = document.getElementById('message').value;

	fetch('sendmail.php', {
			method: 'POST',
			headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`
	})
	.then(response => response.text())
	.then(data => {
			alert('Správa bola úspešne odoslaná!');
	})
	.catch(error => {
			console.error('Error:', error);
			alert('Pri odosielaní správy došlo k chybe.');
	});
});