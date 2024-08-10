$('.reservation-section__form').on('submit', function (event) {

	event.stopPropagation();
	event.preventDefault();

	let form = this,
			submit = $('.submit', form),
			data = new FormData(),
			files = $('input[type=file]')

	$('.submit', form).val('Отправка...');
	$('input, textarea', form).attr('disabled','');

	data.append('name', $('[name="name"]', form).val());
	data.append('email', $('[name="email"]', form).val());
	data.append('text', $('[name="text"]', form).val());

	$.ajax({
			url: 'ajax.php',
			type: 'POST',
			data: data,
			cache: false,
			dataType: 'json',
			processData: false,
			contentType: false,
			xhr: function() {
					let myXhr = $.ajaxSettings.xhr();

					if (myXhr.upload) {
							myXhr.upload.addEventListener('progress', function(e) {
									if (e.lengthComputable) {
											let percentage = (e.loaded / e.total) * 100;
											percentage = percentage.toFixed(0);
											$('.submit', form).html(percentage + '%');
									}
							}, false);
					}

					return myXhr;
			},
			success: function(response) {
					if (response.success) {
							alert('Správa bola úspešne odoslaná!');
					} else {
							alert('Pri odosielaní správy došlo k chybe.');
					}
			},
			error: function(jqXHR, textStatus) {
					alert('Pri odosielaní správy došlo k chybe.');
			},
			complete: function() {
					form.reset();
					$('.submit', form).val('Отправить');
					$('input, textarea', form).removeAttr('disabled');
			}
	});

	return false;
});



document.querySelector('.burger-menu').addEventListener('click', function () {
	this.classList.toggle('active');
	document.querySelector('nav ul').classList.toggle('active');
});