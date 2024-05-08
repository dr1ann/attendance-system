
document.addEventListener('DOMContentLoaded', function () {
    const drawerButton = document.querySelector('[data-drawer-toggle="default-sidebar"]');
    const drawer = document.getElementById('default-sidebar');
    const container = document.getElementById('container');
    const footer = document.getElementById('footer');
    drawerButton.addEventListener('click', function () {
      drawer.classList.toggle('-translate-x-full');
      drawer.classList.toggle('lg:hidden');
      container.classList.toggle('lg:ml-64');
      footer.classList.toggle('lg:absolute');
      footer.classList.toggle('lg:left-[260px]');
      footer.classList.toggle('lg:right-0');

  
    const currentTitle = drawerButton.getAttribute('title');

    if (currentTitle === 'Open Sidebar') {
       
        drawerButton.setAttribute('title', 'Close Sidebar');
    } else if(currentTitle === 'Close Sidebar') {
       
        drawerButton.setAttribute('title', 'Open Sidebar');
    }

    });

    // Close sidebar when clicking outside of it
    document.addEventListener('click', function (event) {
      if (!drawer.contains(event.target) && !drawerButton.contains(event.target)) {
        drawer.classList.add('-translate-x-full');
        
       
      }
    });
  });

  


