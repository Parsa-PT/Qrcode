const Btn = document.querySelector('button');
const qrInput = document.querySelector('input');
const qrBox = document.querySelector('.qr-box');
const qrimg = document.querySelector('.qr-box img');

Btn.addEventListener('click' , ()=>{
    let qrvalue = qrInput.value;
    if(!qrvalue){
        return alert('you must write something')
    }
    Btn.innerText = 'Wait for generate'
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}`
    qrimg.addEventListener('load', ()=>{
        qrBox.classList.remove('hidden')
        Btn.innerText = 'Generate QR'
    })

    qrInput.addEventListener('keyup' , ()=>{
        if(!qrInput.value){
            qrBox.classList.add('hidden')
        }
    })


    let download = document.createElement("button");
    document.querySelector(".qr-box").appendChild(download);

    let download_link = document.createElement("a");
    download_link.setAttribute("download", "qr_box_linq.png");
    download_link.innerText = "Download";

    download.appendChild(download_link);

    if(document.querySelector(".qr-box img").getAttribute("src") == null){
        setTimeout(() => {
            download_link.setAttribute("href", `${document.querySelector("canvas").toDataURL()}`);
        }, 300);
    } else {
        setTimeout(() => {
            download_link.setAttribute("href", `${document.querySelector(".qr-box img").getAttribute("src")}`);
        }, 300);
    }
})