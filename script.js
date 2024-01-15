document.getElementById('burger').onclick = function () {
    document.getElementById('menu').classList.add('open');
}
document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open');
    }
})

let input = document.getElementById('search_input')
document.getElementById('search').onclick = function () {
    if (input.classList.contains('open')) {
        input.classList.remove('open');
    } else {
        input.classList.add('open');
    }
}

document.getElementById('filter_icon').onclick = function () {
    let filter = document.getElementById('filter')
    filter.classList.add('open');
    document.getElementById('bg').classList.add('popup');

        document.getElementById('filter_adaptive').style.display="none"

}

document.getElementById('filter_close').onclick = function () {
    document.getElementById('filter').classList.remove('open');
    document.getElementById('bg').classList.remove('popup');
    document.getElementById('filter_adaptive').style.display="flex"
}

