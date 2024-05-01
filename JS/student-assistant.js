//for the side bar functionality
document.addEventListener('DOMContentLoaded', function () {
    const drawerButton = document.querySelector('[data-drawer-toggle="default-sidebar"]');
    const drawer = document.getElementById('default-sidebar');

    drawerButton.addEventListener('click', function () {
      drawer.classList.toggle('-translate-x-full');
    });

    // Close sidebar when clicking outside of it
    document.addEventListener('click', function (event) {
      if (!drawer.contains(event.target) && !drawerButton.contains(event.target)) {
        drawer.classList.add('-translate-x-full');
      }
    });
  });

  //for Editing Attendance Status of teachers
  const editBtn = document.getElementById('editBtn');
    const attendanceStatus = document.getElementById('attendanceStatus');
    const editContainer = document.getElementById('editContainer');
    editContainer.addEventListener('click', function(e) {
        e.preventDefault();
       
    editContainer.innerHTML = '';
    const heading = document.createElement('h2');
    heading.classList.add('text-center', 'font-semibold');
    heading.innerText = 'Choose Attendance Color:';
    editContainer.appendChild(heading);

const updateBtn1 = document.createElement('img');
updateBtn1.src = '/Images/present.png'; 
updateBtn1.classList.add('cursor-pointer', 'w-8', 'h-auto');
updateBtn1.addEventListener('click', function(e) {
    e.preventDefault();

Swal.fire({
  title: 'Save Changes?',
  text: 'Do you want to mark Joshua Baban as PRESENT?',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Yes',
  cancelButtonText: 'No',
 
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      'Success!',
      'Joshua Baban was marked as PRESENT.',
      'success'
    );
    attendanceStatus.src='/Images/present.png';
    editContainer.innerHTML = '<i id="editBtn" class="fa-solid fa-pen-to-square  text-xl"></i>';
    
  } else if (result.dismiss === Swal.DismissReason.cancel) {
    Swal.fire(
  'Cancelled',
  'No changes were made. Joshua Baban remains as their previous status.',
  'error'
);
  }
  
});

});
editContainer.appendChild(updateBtn1);

const updateBtn2 = document.createElement('img');
updateBtn2.src = '/Images/late.png'; 
updateBtn2.classList.add('cursor-pointer', 'w-8', 'h-auto');
updateBtn2.addEventListener('click', function() {
    Swal.fire({
  title: 'Save Changes?',
  text: 'Enter the number of minutes/hours Joshua Baban was late:',
  input: 'text',
  inputPlaceholder: 'e.g. 15 minutes',
  inputValidator: (value) => {
    if (!value) {
      return 'You need to enter the number of minutes/hours!';
    }
  },
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Yes',
  cancelButtonText: 'No',
}).then((result) => {
  if (result.isConfirmed) {
    const lateTime = result.value;
    Swal.fire(
      'Success!',
      `Joshua Baban was marked as LATE (${lateTime}).`,
      'success'
    );
    attendanceStatus.src = '/Images/late.png';
  } else if (result.dismiss === Swal.DismissReason.cancel) {
    Swal.fire(
      'Cancelled',
      'No changes were made. Joshua Baban remains as their previous status.',
      'error'
    );
  }
  editContainer.innerHTML = '<i id="editBtn" class="fa-solid fa-pen-to-square  text-xl"></i>';
});

});
editContainer.appendChild(updateBtn2);

const updateBtn3 = document.createElement('img');
updateBtn3.src = '/Images/absent.png'; 
updateBtn3.classList.add('cursor-pointer', 'w-8', 'h-auto');
updateBtn3.addEventListener('click', function(e) {
    e.preventDefault();

Swal.fire({
  title: 'Save Changes?',
  text: 'Do you want to mark Joshua Baban as ABSENT?',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Yes',
  cancelButtonText: 'No',
 
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      'Success!',
      'Joshua Baban was marked as ABSENT.',
      'success'
    );
    attendanceStatus.src='/Images/absent.png';
    editContainer.innerHTML = '<i id="editBtn" class="fa-solid fa-pen-to-square  text-xl"></i>';
    
  } else if (result.dismiss === Swal.DismissReason.cancel) {
    Swal.fire(
  'Cancelled',
  'No changes were made. Joshua Baban remains as their previous status.',
  'error'
);
  }
  
});
});
editContainer.appendChild(updateBtn3);

})