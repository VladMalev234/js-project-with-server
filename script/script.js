document.querySelector('#signup-submit').onclick = function(event)  {
    //остановить дефолтные (по умолчанию) действия перезагрузки
    event.preventDefault();
    // получакм значения переменных
    let name = document.querySelector('#signup-name').value;
    let pass = document.querySelector('#signup-pass').value;
    let email = document.querySelector('#signup-email').value;
    let birthday = document.querySelector('#signup-birthday').value; 
    let sex = document.querySelectorAll('.sex');

    for(let i = 0; i < sex.length; i++) {
        // console.log(sex[i].checked);
        if(sex[i].checked) {
            sex = sex[i].value;
            break;
        }
    }
    // формируем мaссив и вносим туда данные для передачи в ajax.js функцию requestDatta()
    let data = {
        "name": name,
        "pass": pass,
        "email": email,
        "birthday": birthday,
        "sex": sex,
    }

    ajax('core/signup.php', 'post', signup, data);
    function signup(result) {
        console.log(result);
        if(result == 2) {
            alert('Заполните поля');
        } else if (result == 1) {
            alert('Поздравляю. теперь можете войти');
        } else {
            alert('Повторите позже');
        }
    }
}

document.querySelector("#login-submit").onclick = function(event) {
    event.preventDefault();

    
    let email = document.querySelector('#login-email').value;
    let pass = document.querySelector('#login-pass').value;

 
    // формируем мссив и вносим туда данные для передачи в ajax.js функцию requestDatta()
    let data = {
        "email": email,
        "pass": pass,
        
       
    }

    ajax('core/login.php', 'post', login, data);

    function login(result) {
        if(result == 2) {
            alert('Заполните поля');
        } else if (result == 0) {
            alert('User, not found');
        } else {
            console.log(result);
            result = JSON.parse(result);
            //для того, чтобы не задвать время жизни вручную
            //получаем обьект  Date
            let d = new Date();
            //устанавливаем время которое получаем с боаузера и добаляем значаение суток в мили секундах
            d.setTime(d.getTime() + (10*60*1000));
           // приводим значение к стандарту UTC строки
            let expires = d.toUTCString();
            //создаем coockie файлы
            document.cookie = `email=${result.email}; expires=${expires}; path=/`;
            //для того, чтобі перекинуть на другую страницу 
            location.href = "cabinet.php";
        }
    }
}
