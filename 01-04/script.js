const btn = document.getElementById('fetch-btn');
const addBtn = document.getElementById('add-btn');
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

const addUser = () => {
  const user = {
      name: "Ulan",
      second_name:"Lala",
      birth_date: "2023-01-04"
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

btn.addEventListener('click', getUsers)
addBtn.addEventListener('click', addUser)