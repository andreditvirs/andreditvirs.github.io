async function fetchText() {
    let response = await fetch('https://httpbin.org/ip');
    let data = await response.json();
    return data.origin;
}

fetchText().then((origin) => {
    alert("IP Anda Adalah : " + origin);
})
