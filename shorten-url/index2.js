let search = window.location.search.substr(1);
if(search){
    const api_url = "https://strapi-andreditvirs.herokuapp.com/shorten-urls/" + search;
    async function getApi(url) {
        try{
            const response = await fetch(url).then((response) => {
                if (response.status >= 400 && response.status < 600) {
                    throw new Error("Bad response from server");
                }
                return response;
            });

            var data = await response.json();
            if(confirm(`Anda akan membuka laman bernama ${data.name} (${data.description})`)){
                window.open(data.url, "_self");
            }
        } catch (e){
            alert("Maaf, halaman tidak ditemukan");
        }
    }
    getApi(api_url);

}