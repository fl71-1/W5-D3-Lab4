const input2 = document.getElementById("input1")

function modifyScreen(width, height) {
 window.open(input2.value, 'newWindow', `width=${width},height=${height}`);
}
