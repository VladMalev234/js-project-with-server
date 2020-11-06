//очищаем куки при нажатие на кнопку logout
document.querySelector('#logout').onclick = function()  {
    // document.cookie = "";
    document.cookie = `email=; expires=; path=/`;
    location.reload();
}