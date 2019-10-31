const $ = document.querySelector.bind(document)
$('form').addEventListener('submit', e => {
	e.preventDefault()
	const formData = new FormData(e.target)
	const userPwd = formData.get('userPwd')

	if (userPwd.toLowerCase() !== 'pinguim')
		alert('A senha deve ser o nome de uma pequena ave que vive na Antártica.')
})
