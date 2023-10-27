let sideMenuIndex = 0;
function openx() {
  if (sideMenuIndex == 0) {
    document.getElementById("nav").style.display = "flex";
    sideMenuIndex = 1;
  } else {
    document.getElementById("nav").style.display = "none";
    sideMenuIndex = 0;
  }
}





const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_o5zer6n';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
        alert('Sent!');
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  });










  