const btn = document.getElementById('btn');
const url = 'http://localhost:3000/users';

const getUsers = () => {
    fetch(url)
        .then(res => {
            if (res.ok){
                return res.json();
            }else{
                alert('Произошла ошибка');
            }
        })
        .then(data => console.log(data))
}
btn.addEventListener('click', getUsers)
