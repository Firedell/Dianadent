
document.getElementById('reservationForm').addEventListener('submit', function(e) {
	e.preventDefault();

	const token = '7381223816:AAGN7yie6E_pHZ6wPe_YldQO0r6bWGzN0JM'; // Замените на ваш токен
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
					document.getElementById('reservationForm').reset(); // Очистка формы после успешной отправки
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