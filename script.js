const form = document.forms['my-form'];
const btnHw =document.getElementById('btn')
const url = 'http://localhost:3000/users';

const getFormValues = (event) => {
    event.preventDefault();
    window.location = "file:///C:/Users/User/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/front1/DOM%20api/form/form.html"
    const user = {
        name: form.name.value,
        second_name: form.second_name.value,
        birth_date: form.birth_date.value
    }
    const options = {
        method: 'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(user)
    }

    fetch(url, options)
        .then(response => {
            if (response.ok){
                alert('Пользователь успешно добавлен');
            }else {
                alert('Ошибка.Статус:' + response.status)
            }
        })
}

const getTest = () => {
    const user = {
    }
    const options = {
        method: 'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(user)
    }

    fetch(url, options)
        .then(response => {
            if (response.ok){
                alert('Пользователь успешно добавлен');
            }else {
                alert('Ошибка.Статус:' + response.status)
            }
        })
}

btnHw.addEventListener('click', getTest)
form.addEventListener('submit', getFormValues);