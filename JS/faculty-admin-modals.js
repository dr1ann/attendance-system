//modal for the view more info 
const showInfoModal = document.getElementById('showInfo');
const closeInfoModal = document.getElementById('closeInfo');



showInfoModal.addEventListener('click', (e) => {
    e.preventDefault();
    const modalContainer = document.getElementById('infoModalContainer');

    modalContainer.classList.remove('hidden');
    modalContainer.classList.add('flex');

  
})


closeInfoModal.addEventListener('click', (e) => {
    e.preventDefault();
    const modalContainer = document.getElementById('infoModalContainer');

    modalContainer.classList.remove('flex');
    modalContainer.classList.add('hidden');
})

//modal for the view more info 
const showActivityModal = document.getElementById('showActivity');
const closeActivityModal = document.getElementById('closeActivity');



showActivityModal.addEventListener('click', (e) => {
    e.preventDefault();
    const modalContainer = document.getElementById('activityModalContainer');

    modalContainer.classList.remove('hidden');
    modalContainer.classList.add('flex');

  
})


closeActivityModal.addEventListener('click', (e) => {
    e.preventDefault();
    const modalContainer = document.getElementById('activityModalContainer');

    modalContainer.classList.remove('flex');
    modalContainer.classList.add('hidden');
})

//modal for adding new student assistant
const showAddModal = document.getElementById('showAdd');
const closeAddModal = document.getElementById('closeAdd');



showAddModal.addEventListener('click', (e) => {
    e.preventDefault();
    const modalContainer = document.getElementById('addModalContainer');

    modalContainer.classList.remove('hidden');
    modalContainer.classList.add('flex');

  
})


closeAddModal.addEventListener('click', (e) => {
    e.preventDefault();
    const modalContainer = document.getElementById('addModalContainer');

    modalContainer.classList.remove('flex');
    modalContainer.classList.add('hidden');
})

const genderLabel = document.getElementById('genderLabel');
const genderContainer = document.getElementById('genderContainer');
// Add event listener for focusin event
genderContainer.addEventListener('focusin', () => {
    // Add class to change color when focused
    genderLabel.classList.remove('text-[#888]');
    genderLabel.classList.add('text-[#01579B]');
    genderContainer.classList.remove('border-[#D9D9D9]')
    genderContainer.classList.add('border-[#01579B]')
    
});

// Add event listener for focusout event
genderLabel.addEventListener('focusout', () => {
    // Remove class to revert color when focus is lost
    genderLabel.classList.remove('text-[#01579B]');
});
