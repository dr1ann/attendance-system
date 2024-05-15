const showNotifModal = document.getElementById('showNotif');
const closeNotifModal = document.getElementById('closeNotif');
const statusIcon = document.getElementById('statusIcon');
const notifContainer1 = document.getElementById('notifContainer1');
const notifContainer2 = document.getElementById('notifContainer2');
const notifContainer3 = document.getElementById('notifContainer3');
const notifContainer4 = document.getElementById('notifContainer4');
const unreadNotifs = document.getElementById('unreadNotifs');
showNotifModal.addEventListener('click', (e) => {
    e.preventDefault();
    const modalContainer = document.getElementById('notifModalContainer');

    modalContainer.classList.remove('hidden');
    modalContainer.classList.add('flex');

    statusIcon.classList.remove('fa-xmark');
    statusIcon.classList.add('fa-check');
    statusIcon.classList.remove('text-[#ff0000]');
    statusIcon.classList.add('text-[#28a745]');

    notifContainer1.classList.remove('bg-[#D9D9D9]')
    notifContainer1.classList.add('bg-gray-100')

    notifContainer2.classList.remove('bg-[#D9D9D9]')
    notifContainer2.classList.add('bg-gray-100')

    notifContainer3.classList.remove('bg-[#D9D9D9]')
    notifContainer3.classList.add('bg-gray-100')

    notifContainer4.classList.remove('bg-[#D9D9D9]')
    notifContainer4.classList.add('bg-gray-100')

    unreadNotifs.textContent = 1;
})


closeNotifModal.addEventListener('click', (e) => {
    e.preventDefault();
    const modalContainer = document.getElementById('notifModalContainer');

    modalContainer.classList.remove('flex');
    modalContainer.classList.add('hidden');
})