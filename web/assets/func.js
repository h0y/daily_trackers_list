
const copyText = () => {
    const text = document.getElementById("storage").value;
    const btn = document.getElementById("copy_btn");
    try {
        navigator.clipboard.writeText(text);
        btn.innerHTML = "copied!";
    } catch (err) {
        console.error('can not copy text: ', err);
    }
}