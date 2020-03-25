

var today = new Date();

var yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() - 1);

var dd = String(today.getDate());
var mm = String(today.getMonth() + 1); //January is 0!
var yyyy = today.getFullYear();
today =  yyyy + '-' + mm + '-' + dd;

var dd = String(yesterday.getDate());
var mm = String(yesterday.getMonth() + 1); //January is 0!
var yyyy = yesterday.getFullYear();
yesterday =  yyyy + '-' + mm + '-' + dd;

var news = document.getElementsByClassName("country-list")[0];

fetch("https://pomber.github.io/covid19/timeseries.json")
  .then(response => response.json())
  .then(timeSeriesData => {
      console.log(timeSeriesData)
    for (var key in timeSeriesData){
        var recoveredPeople;
        recoveredPeople = 0;
        for (var obj in timeSeriesData[key]){
            if (timeSeriesData[key][obj]["recovered"] === undefined){
               
            } else {
                if (recoveredPeople < timeSeriesData[key][obj]["recovered"] ){
                    recoveredPeople = timeSeriesData[key][obj]["recovered"]
                }
            }
           
            if (timeSeriesData[key][obj]["date"] === today) {
                var div = document.createElement('div');
                    div.className = 'container rounded ';
                        var h4 = document.createElement('h4');
                        h4.innerHTML = key ;
                        div.appendChild(h4);
                        var innerTable = document.createElement('table');
                        innerTable.className = 'table rounded table-borderless table-light';
                            var thead1 = document.createElement('thead');
                                var tr = document.createElement('tr');
                                var confirmed = document.createElement('th');
                                confirmed.innerHTML = "Confirmed: " + timeSeriesData[key][obj]["confirmed"];
                                var death = document.createElement('th');
                                death.innerHTML = "Deaths: " + timeSeriesData[key][obj]["deaths"];
                                tr.appendChild(confirmed);
                                tr.appendChild(death);
                            thead1.appendChild(tr);
                            var tbody = document.createElement('thead');
                                var tr = document.createElement('tr');
                                var recovered = document.createElement('th');
                                recovered.innerHTML = "Recovered: " +  recoveredPeople;
                                var active = document.createElement('th');
                                active.innerHTML = "Active: " + (timeSeriesData[key][obj]["confirmed"] -
                                                                 timeSeriesData[key][obj]["deaths"] - recoveredPeople) ;
                                
                                
                                tr.appendChild(recovered);
                                tr.appendChild(active);
                            tbody.appendChild(tr);
                        innerTable.appendChild(thead1)
                        innerTable.appendChild(tbody)
                    div.appendChild(innerTable);
                news.appendChild(div);
                news.appendChild(document.createElement('br'));
            } else {
              
                
                if (timeSeriesData[key][obj]["date"] === yesterday) {
                    var div = document.createElement('div');
                    div.className = 'container rounded ';
                        var h4 = document.createElement('h4');
                        h4.innerHTML = key ;
                        div.appendChild(h4);
                        var innerTable = document.createElement('table');
                        innerTable.className = 'table rounded table-borderless table-light';
                            var thead1 = document.createElement('thead');
                                var tr = document.createElement('tr');
                                var confirmed = document.createElement('th');
                                confirmed.innerHTML = "Confirmed: " + timeSeriesData[key][obj]["confirmed"];
                                var death = document.createElement('th');
                                death.innerHTML = "Deaths: " + timeSeriesData[key][obj]["deaths"];
                                tr.appendChild(confirmed);
                                tr.appendChild(death);
                            thead1.appendChild(tr);
                            var tbody = document.createElement('thead');
                                var tr = document.createElement('tr');
                                var recovered = document.createElement('th');
                                recovered.innerHTML = "Recovered: " +  recoveredPeople;
                                var active = document.createElement('th');
                                active.innerHTML = "Active: " + (timeSeriesData[key][obj]["confirmed"] -
                                                                 timeSeriesData[key][obj]["deaths"] - recoveredPeople) ;
                                
                                
                                tr.appendChild(recovered);
                                tr.appendChild(active);
                            tbody.appendChild(tr);
                        innerTable.appendChild(thead1)
                        innerTable.appendChild(tbody)
                    div.appendChild(innerTable);
                news.appendChild(div);
                news.appendChild(document.createElement('br'));
            }
            }
        }
    }
  })