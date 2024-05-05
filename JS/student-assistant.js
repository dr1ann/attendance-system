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
const attendanceIndicators = document.querySelectorAll('.attendance-indicator');
const editContainer = document.getElementById('editContainer');
const presentColor = document.getElementById("present");
const lateColor = document.getElementById("late");
const absentColor = document.getElementById("absent");
editBtn.addEventListener('click', function(e) {
    e.preventDefault();
   
    editBtn.classList.add('hidden');
    editContainer.classList.replace('hidden', 'flex') ;
    attendanceIndicators.forEach(indicator => {

      indicator.classList.remove('hide-indicator');

  });

  presentColor.addEventListener('click', (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Save Changes?',
      text: 'Do you want to mark Windy Cagulada as PRESENT?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      
      }).then((result) => {
      if (result.isConfirmed) {
      Swal.fire(
        'Success!',
        'Windy Cagulada was marked as PRESENT.',
        'success'
      );
      attendanceStatus.src='/Images/present.png';
      
      
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
      'Cancelled',
      'No changes were made. Windy Cagulada remains as their previous status.',
      'error'
      );
      }
      editBtn.classList.remove('hidden');
      editContainer.classList.replace('flex', 'hidden') ;
      });
    })
      lateColor.addEventListener('click', (e) => {
        Swal.fire({
          title: 'Save Changes?',
          text: 'Enter the number of minutes/hours Windy Cagulada was late:',
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
            `Windy Cagulada was marked as LATE (${lateTime}).`,
            'success'
          );
          attendanceStatus.src = '/Images/late.png';
          } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            'No changes were made. Windy Cagulada remains as their previous status.',
            'error'
          );
          }
          editBtn.classList.remove('hidden');
          editContainer.classList.replace('flex', 'hidden') ;
          });
          
        });


absentColor.addEventListener('click', (e) => {
e.preventDefault();

Swal.fire({
title: 'Save Changes?',
text: 'Do you want to mark Windy Cagulada as ABSENT?',
icon: 'warning',
showCancelButton: true,
confirmButtonText: 'Yes',
cancelButtonText: 'No',

}).then((result) => {
if (result.isConfirmed) {
Swal.fire(
  'Success!',
  'Windy Cagulada was marked as ABSENT.',
  'success'
);
attendanceStatus.src='/Images/absent.png';


} else if (result.dismiss === Swal.DismissReason.cancel) {
Swal.fire(
'Cancelled',
'No changes were made. Windy Cagulada remains as their previous status.',
'error'
);
}
editBtn.classList.remove('hidden');
editContainer.classList.replace('flex', 'hidden') ;
});
});




})