const form = document.getElementById('form');
const pass = document.getElementById('pass');
const passre = document.getElementById('passre');
const error = document.getElementById('error');

///const regex = /\d/;
//const doesItHaveNumber = regex.test(pass.value);
form.addEventListener('submit', (e) => {

    let meessages = [];
    if (pass.value.length !== 8) {
        meessages.push("password must be 8 charactars")
    }
    if (((/[a-zA-Z]/.test(pass.value.substring(0, 1))) != true)) {
        meessages.push("password must start with letter");
    }
    if (pass.value.substring(0, 1) !== (pass.value.substring(0, 1)).toUpperCase()) {
        meessages.push("First letter must be Upper case");
    }
    if (pass.value !== passre.value) {
        meessages.push("passwords don't match");
    }
    if ((/\d/.test(pass.value) != true)) {
        meessages.push("password must include at least one number");
    }
    if ((/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(pass.value) != true)) {
        meessages.push("password must include at least one special charactar");
    }
    if (((/\s/.test(pass.value)) == true)) {
        meessages.push("password mus't include spaces");
    }
    /*if (re.test(pass.value)) {
        meessages.push("password must include at least one number")
    }*/
    if (meessages.length > 0) {
        e.preventDefault()
        error.innerText = meessages.join(" _ ")
    }
})