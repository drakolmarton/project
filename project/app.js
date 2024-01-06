let copyToClipboardButton = document.getElementById('copy-button');

copyToClipboardButton.addEventListener('click', () => {
    let textToCopy = document.getElementById('input-url').value;
    navigator.clipboard.writeText(textToCopy);
    notification('Successfully copied');
})

function notification(msg) {

    var old_div = document.querySelector('.alert');
    if (old_div){
        old_div.parentNode.removeChild(old_div);
    }

    var div = document.createElement('div');
    div.className = 'alert active';
    div.innerHTML = msg;
    document.body.appendChild(div);   
    
    setTimeout(() => div.classList.add('active'), 1);
    setTimeout(() => div.classList.remove('active'), 1000);
}