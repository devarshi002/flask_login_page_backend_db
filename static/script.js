let boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.onmousemove = function(e) {
        let x = e.pageX - box.offsetLeft;
        let y = e.pageY - box.offsetTop;

        box.style.setProperty('--x', x + 'px');
        box.style.setProperty('--y', y + 'px');

    }
})


function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Perform client-side validation
    if (!/^[a-zA-Z\s]+$/.test(username)) {
        alert('Username should contain only text.');
        return false;
    }
    if (password.length < 8) {
        alert('Password should be at least 8 characters long.');
        return false;
    }

    // Send data to Flask backend
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/login', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert('User registered successfully!');
        }
    };
    xhr.send(JSON.stringify({username: username, password: password}));

    return false; // Prevent form submission
}