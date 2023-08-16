const invBtn = document.querySelector('.inv-js')
const getModal = document.querySelector('.modal-js')
const closeModal = document.querySelector('.close-js')
const childrenModal = document.querySelector('.modal-jss')
function showInvite() {
    getModal.classList.add('open')
}
function closeInvite(){
    getModal.classList.remove('open')
}

    invBtn.addEventListener('click', showInvite)
    closeModal.addEventListener('click', closeInvite)
function closedModal(){
    getModal.classList.remove('open')
}

    getModal.addEventListener('click', closedModal)
    childrenModal.onclick = function(a){
       a.stopPropagation()
    }
