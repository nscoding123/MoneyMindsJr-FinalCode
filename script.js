const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const nameInput = document.getElementById('name');
const dateInput = document.getElementById('date');
const downloadBtn = document.getElementById('download-btn');

const image = new Image();
image.src = "NewCertificate.png"; // Update the path to point to the correct URL
image.onload = function(){
    drawImage();
}

function drawImage(){
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    ctx.font = '50px monotype corsiva';
    ctx.fillStyle = '#FFD700';
    ctx.fillText(nameInput.value, 220, 260);
    ctx.fillText(dateInput.value, 50, 180);
}

nameInput.addEventListener('input', function(){
    drawImage();
});

downloadBtn.addEventListener('click', function(){
    const link = document.createElement('a');
  //  link.href = canvas.toDataURL('image/png');
    link.download = 'Certificate - ' + nameInput.value;
    link.click();
});
