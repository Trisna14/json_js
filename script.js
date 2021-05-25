
// json to array by ajax
let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {

    if (xhr.readyState == 4 && xhr.status == 200) {
        let pelajar = JSON.parse((this.responseText));
        console.log(pelajar);
    }
}

xhr.open('GET', 'file.json', true);
xhr.send();