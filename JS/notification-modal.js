const showNotifModal = document.getElementById('showNotif');
const closeNotifModal = document.getElementById('closeNotif');
const statusIcon = document.getElementById('statusIcon');


showNotifModal.addEventListener('click', (e) => {
    e.preventDefault();
    const modalContainer = document.getElementById('notifModalContainer');

    modalContainer.classList.remove('hidden');
    modalContainer.classList.add('flex');

    statusIcon.classList.remove('fa-xmark');
    statusIcon.classList.add('fa-check');
    statusIcon.classList.remove('text-[#ff0000]');
    statusIcon.classList.add('text-[#28a745]');
})


closeNotifModal.addEventListener('click', (e) => {
    e.preventDefault();
    const modalContainer = document.getElementById('notifModalContainer');

    modalContainer.classList.remove('flex');
    modalContainer.classList.add('hidden');
})