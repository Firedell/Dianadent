document.getElementById('reservationForm').addEventListener('submit', function(e) {
	e.preventDefault();

	const token = '7324104602:AAEtIu5oJRA9H0rciXiWChALieR05pFeltc'; // Замените на ваш токен
	const chatId = '492506844'; // Замените на ваш chat_id
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const message = document.getElementById('message').value;

	const text = `Nová správa z rezervačného formulára:\n\nMeno: ${name}\nE-mail: ${email}\nSpráva: ${message}`;

	fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
			method: 'POST',
			headers: {
					'Content-Type': 'application/json'
			},
			body: JSON.stringify({
					chat_id: chatId,
					text: text
			})
	})
	.then(response => response.json())
	.then(data => {
			if (data.ok) {
					alert('Správa bola úspešne odoslaná!');
			} else {
					alert('Pri odosielaní správy došlo k chybe.');
			}
	})
	.catch(error => {
			console.error('Error:', error);
			alert('Pri odosielaní správy došlo k chybe.');
	});
});

document.querySelector('.burger-menu').addEventListener('click', function () {
	this.classList.toggle('active');
	document.querySelector('nav ul').classList.toggle('active');
});