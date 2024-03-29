const contactForm = document.querySelector('.contact-form');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');
let attachment = document.getElementById('attachment')

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('hello')

    let formData = {
        email: email.value,
        subject: subject.value,
        message: message.value,
        attachment: attachment.value
    }
    console.log(formData)

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type','application/json');
    xhr.onload = function() {
        console.log(xhr.responseText);
        if (xhr.responseText == 'success') {
            alert('Email Sent!');
            email.value = '';
            subject.value = '';
            message.value = '';
            attachment.value = '';
        } else {
            alert('Error: message not sent!')
        }
    }

    xhr.send(JSON.stringify(formData));
});

