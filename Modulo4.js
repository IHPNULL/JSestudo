var data = null;
var listao = document.querySelector('#app h1');


var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
        renderDados(this.responseText);
    }
});

xhr.open("GET", "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=Brazil");
xhr.setRequestHeader("x-rapidapi-host", "covid-19-coronavirus-statistics.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "6d38a0b6acmsh0476f42133ee9e0p1caa4fjsnb81196c2e18b");


function renderDados(dado) {
    var Element = document.createElement('h5');

    var obj = JSON.parse(dado);

    var textdado = document.createTextNode("casos no Brasil:" + obj.data.covid19Stats[0].confirmed);


    console.log(obj.data.covid19Stats[0].confirmed);

    Element.appendChild(textdado);
    listao.appendChild(Element);
}

xhr.send(data);