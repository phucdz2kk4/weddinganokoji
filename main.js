const invBtn = document.querySelector('.inv-js')
const getModal = document.querySelector('.modal-js')
const closeModal = document.querySelector('.close-js')
function showInvite() {
    getModal.classList.add('open')
}
function closeInvite(){
    getModal.classList.remove('open')
}
    invBtn.addEventListener('click', showInvite)
    closeModal.addEventListener('click', closeInvite)

