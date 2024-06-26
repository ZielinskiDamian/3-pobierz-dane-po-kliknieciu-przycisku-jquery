$(document).ready(function () {
	$('#btn').click(function () {
		$.get('https://akademia108.pl/api/ajax/get-post.php', function (data) {
			console.log(data);
			let id = document.createElement('p');
			id.innerText = `ID Posta: ${data.id}`;
			let userId = document.createElement('p');
			userId.innerText = `ID użytkownika: ${data.userId}`;
			let title = document.createElement('p');
			title.innerText = `Tytuł posta: ${data.title}`;
			let body = document.createElement('p');
			body.innerText = `treść posta: ${data.body}`;
			let hr = document.createElement('hr');
			let h2 = document.createElement('h2');
			h2.innerText = `Poniżej pobiernaie użyciem $.getJSON()`;
			document.body.appendChild(id);
			document.body.appendChild(userId);
			document.body.appendChild(title);
			document.body.appendChild(body);
			document.body.appendChild(hr);
			document.body.appendChild(h2);
			console.log(hr);
		});
	});
});

$(document).ready(function () {
	$('#btn').click(function () {
		$.getJSON('https://akademia108.pl/api/ajax/get-post.php', function (data) {
			console.log(data);
			let id = document.createElement('p');
			id.innerText = `ID Posta: ${data.id}`;
			let userId = document.createElement('p');
			userId.innerText = `ID użytkownika: ${data.userId}`;
			let title = document.createElement('p');
			title.innerText = `Tytuł posta: ${data.title}`;
			let body = document.createElement('p');
			body.innerText = `treść posta: ${data.body}`;
			let hr = document.createElement('hr');
			let h2 = document.createElement('h2');
			h2.innerText = `Poniżej pobiernaie użyciem $.getJSON()`;
			document.body.appendChild(id);
			document.body.appendChild(userId);
			document.body.appendChild(title);
			document.body.appendChild(body);
			document.body.appendChild(hr);
			document.body.appendChild(h2);
			console.log(hr);
		});
	});
});
