const itemMenu = document.querySelectorAll(".item-menu")
const menuLateral = document.querySelector(".menu-lateral")
const btnExp = document.querySelector("#btn-exp")



//menu lateral
function selectLink() {
    itemMenu.forEach((item) => {
        item.classList.remove('ativo')
    })
    this.classList.add('ativo')
}

itemMenu.forEach((item) => {
    item.addEventListener('click', selectLink)
})


//expandir o menu

btnExp.addEventListener('click', function () {
    menuLateral.classList.toggle('expandir')
})

