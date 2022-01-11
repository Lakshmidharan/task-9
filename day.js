A)
 var request = new XMLHttpRequest();
        request.open('GET', 'https://restcountries.com/v2/all', 'true');
        request.send();
        request.onload = function () {
            var countryData = JSON.parse(this.response);

            const asia = countryData.filter((element) => {
                if (element.region === 'Asia') {
                    console.log(element.name);
                }
            })
        }

B) 

        var request = new XMLHttpRequest();
        request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-		countries.json", "true");
        request.send();
        request.onload = function () {
            var countrypopulation = JSON.parse(this.response);
            let population = countrypopulation.filter((element) => {
                if (element.population < 200000) {
                    console.log(element.name);
                }
            })
        }


        C)
        var request = new XMLHttpRequest();
        request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-		countries.json", "true");
        request.send();
        request.onload = function () {
            var countryData = JSON.parse(this.response);
            var result = countryData.filter((element) => {
                console.log(element.name, element.capital, element.flag);
            })
D) 
        var request = new XMLHttpRequest();
        request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-			countries.json", "true");
        request.send();
        request.onload = function () {
            var result = JSON.parse(this.response);
            const population = result.reduce((acc, element) => {
                return acc + element.population;
            }, 0)
            console.log(population);
        }

E)


        var request = new XMLHttpRequest();
        request.open('GET', 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-			countries.json', true)
        request.send();
        request.onload = function () {
            var data = JSON.parse(this.response);
            var res = data.filter((element) => {
                if(element.currencies[0].code === "USD"){
                    console.log(element.name);
                }
            }) }