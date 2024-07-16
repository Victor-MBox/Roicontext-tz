document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('contactForm'),
		nameInput = document.getElementById('name'),
		emailInput = document.getElementById('email'),
		messageInput = document.getElementById('message'),
		nameError = document.getElementById('nameError'),
		emailError = document.getElementById('emailError'),
		messageError = document.getElementById('messageError'),
		thankYouMessage = document.getElementById('thankYouMessage')

	// Функция для валидации поля
	const validateField = (input, errorElement, errorMessage) => {
		// Если поле пустое, показываем сообщение об ошибке 
		if (input.value.trim() === '') {
			errorElement.textContent = errorMessage
			input.style.border = '1px solid red'
			return false
		} else {
			// Если поле не пустое, убираем сообщение об ошибке 
			errorElement.textContent = ''
			input.style.border = ''
			return true
		}
	}

	// Функция для обработки ввода в поле
	const handleInput = (input, errorElement) => {
		// Если поле не пустое, убираем сообщение об ошибке 
		if (input.value.trim() !== '') {
			errorElement.textContent = ''
			input.style.border = ''
		}
	}

	// Обработчик события отправки формы
	form.addEventListener('submit', function (event) {
		event.preventDefault() // Предотвращаем отправку формы 

		// Валидируем каждое поле
		const isNameValid = validateField(nameInput, nameError, 'Введите имя'),
			isEmailValid = validateField(emailInput, emailError, 'Введите email'),
			isMessageValid = validateField(
				messageInput,
				messageError,
				'Введите сообщение'
			)

		// Если все поля валидны, показываем сообщение благодарности и сбрасываем форму
		if (isNameValid && isEmailValid && isMessageValid) {
			thankYouMessage.classList.add('modal_active')
			form.reset()
		}
	})

	// Закрываем форму по клику на крестик или по клавише Esc
	const closeBtn = document.querySelector('.model__close')

	function closeModal() {
		thankYouMessage.classList.remove('modal_active')
	}

	closeBtn.addEventListener('click', () => closeModal())

	document.addEventListener('keydown', event => {
		if (event.key === 'Escape') {
			closeModal()
		}
	})

	// Обработчики события ввода для каждого поля
	nameInput.addEventListener('input', () => handleInput(nameInput, nameError))
	emailInput.addEventListener('input', () =>
		handleInput(emailInput, emailError)
	)
	messageInput.addEventListener('input', () =>
		handleInput(messageInput, messageError)
	)
})
