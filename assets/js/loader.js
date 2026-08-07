function loadComponent(containerId, componentFile) {
    fetch(componentFile)
      .then(response => response.text())
      .then(data => {
        document.getElementById(containerId).innerHTML = data;
      });
  }
 
//  export function loadTemplate(){
     function loadTemplate(){
    // Function to load components
 
    // Load header, drawer, and main content
    // loadComponent('playgroundNavigation', 'navComponent');
    // loadComponent('kakrlabs-header', 'header');
    loadComponent('kakrlabs-footer', 'footer');
 
  }

loadTemplate();