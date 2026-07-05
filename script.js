var typed = new Typed('#element', {
    strings: ['Front-End Developer', 'Web Designer', 'Video Editor'],
    typeSpeed: 50,
});



(function () {
    emailjs.init("fJqczXeZMoclkt_yX"); // ✅ Public Key
  })();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.send(
      "service_ncjxtwk",      // ✅ Service ID
      "template_616kjgi",     // ✅ Template ID
      {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      }
    ).then(
      function () {
        alert("Message sent successfully");
      },
      function (error) {
        alert("Failed to send message");
        console.log(error);
      }
    );
  }