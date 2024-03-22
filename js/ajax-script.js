import 

function handleFormSubmit(formId) {
    const form = document.getElementById(formId);
    if (!form) {
        return;
    }
    const popupEl = document.querySelector('.popup');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();

        const errorBox = form.querySelector(".error-box");
        let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
        let email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (form.name.value == "") {
            errorBox.classList.add("errorbox-active");
            errorBox.innerHTML = "Пожалуйста, введите корректное имя";
            return;
        }
        if ((!regex.test(form.phone.value))) {
            errorBox.classList.add("errorbox-active");
            errorBox.innerHTML = "Пожалуйста, введите корректный телефон";
            return;
        }

        if (form.email.value == "") {
            return;
        }

        if ((!email.test(form.email.value))) {
            errorBox.innerHTML = "Пожалуйста, введите корректный email";

            return;
        }

        let formData = new FormData(this);

        fetch('/mail.php', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    popupEl.classList.add('popup_visible');
                    errorBox.innerHTML = '';
                    form.reset();
                } else {
                    console.error('Ошибка отправки ' + data.error);
                }
            })
            .catch(error => console.error('Ошибка сети:', error));
    });
}


handleFormSubmit('feedback-1');
handleFormSubmit('feedback-2');