let quote = document.getElementById("text-quote"),
    btn = document.getElementById("copy-btn"),
    sound = document.getElementById("sound-btn"),
    author = document.getElementById("author"),
    twitter = document.getElementById("twitter-btn");
let apiLink = "https://api.quotable.io/random";
    // Generate quotes 
async function getquote(url) {
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}
getquote(apiLink)
    // sound btn 
sound.addEventListener("click", ()=> {
    let yara = new SpeechSynthesisUtterance(`${quote.innerHTML} by ${author.innerHTML}`);
    speechSynthesis.speak(yara);
})
// copie btn 
btn.addEventListener("click", ()=> {
    navigator.clipboard.writeText(quote.innerHTML);
    document.getElementById("copied").style.display = `block `;
    document.getElementById("copied").style.top = `-55%`;
});
function hideBtn() {
    document.getElementById("copied").style.display = "none";
}
setTimeout("hideBtn()", 4000);
// twitter btn 
twitter.addEventListener("click", ()=> {
    let twetUrl = `https://twitter.com/intent/tweet?url=${quote.innerHTML}`;
    window.open(twetUrl, "_blank");
});
