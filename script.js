/*


const fore = document.querySelector('#my-form');

const getForValue = (event) => {
    event.preventDefault();

    const fields = form.querySelectorAll('input')
    const values = {};

    fields.forEach((field) => {
        values[field.name] = field.value;
    })
    console.log(values);
}

fore.addEventListener('submit', getForValue);
*/



const form = document.forms['my-form'];
const btnHw =document.getElementById('btn')
const url = 'http://localhost:3000/users'

const getFormValues = (event) => {
    event.preventDefault();
    window.location.href = 'file:///C:/Users/User/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/front1/DOM%20api/01-04/index.html'

    const values = {}

    for(let field of form) {
        let name = field.name;

        if(name) {
            if (field.value){
                values[field.name] = field.value;
                field.classList.add('is-valid');
                field.classList.remove('is-invalid')
            }else{
                field.classList.add('is-invalid');
                field.classList.remove('is-valid')
            }
        }
    }
    console.log(values)
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
