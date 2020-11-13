
 document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.datepicker');
    let instances = M.Datepicker.init(elems, {
        'format': "yyyy-mm-dd",
    });
  });

M.updateTextFields();


let userEmail = getCookie('email')
// console.log(userEmail);
ajax('core/get_user_data.php', 'POST', getUserData, {'email': userEmail})

function getCookie(cname) {
    var name = cname + "=";
    //если cookie есть оно вытаскивается из хранилища
    var decodedCookie = decodeURIComponent(document.cookie);
    //Разбивает(превращает строку в массив) на массив данных
    var ca = decodedCookie.split(';');
    //перебираем массив получаю нулевой элемент
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        //Если первая буква пустая переходи к поиску со следующего 
        while (c.charAt(0) == ' ') {
            //длина строки = 19, начинаем считать со следующнего элемента
            c = c.substring(1);
            
        }
        //Если с - содержит name ('email=') то выводит
        if (c.indexOf(name) == 0) {
            //name.length = ('email' + '=') = 6; c.length = длине строки = 19
            //возвращаем строку между 6 и 19включительно элементом строки
            return c.substring(c.length, name.length);
            console.log(c.indexOf(name));
        }
    }
    return "";
}

function getUserData(result) {
    //преобразавать строку в массив
    result = JSON.parse(result);
    console.log(result);
    document.querySelector('#signup-name').value = result.name;
    document.querySelector('#signup-pass').value = result.password;
    document.querySelector('#signup-birthday').value = result.birthday;
    M.updateTextFields();
}



//Update user data
document.querySelector('#signup-submit').onclick = function (event) {
  event.preventDefault();


    let sex = document.querySelectorAll('.sex');
    for(let i = 0; i < sex.length; i++) {
        // console.log(sex.length);
        if(sex[i].checked) {
            sex = sex[i].value + sex.checked;
            break;
        }
    }
    sex.classList.add('checked');
  
  let updateData = {
      "email": userEmail,
      "name": document.querySelector('#signup-name').value,
      "pass": document.querySelector('#signup-pass').value,
      "birthday": document.querySelector('#signup-birthday').value,
      "sex": sex,
  }

  ajax('core/update_user_data.php', 'POST', updateUserData, updateData);
}

function updateUserData(result) {
    //преобразавать строку в массив  
    console.log(result);
    if(result == 1)
    M.toast({html: 'Dates update sucsessfully'});
    else {
        console.log('failed update');
    }
}


