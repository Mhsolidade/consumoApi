(function (){
    // event.preventDefault();
    
    // const url = "https://pokeapi.co/api/v2/pokemon?limit=10";
    const http = new XMLHttpRequest();
    const url = "https://gamaassigment2.firebaseio.com/lista/leads.json";
  
    let b2c = 0 ;
    let b2b = 0;

    http.open("GET", url, true);
    http.send();

    http.onload = function (e){
            const resultado = JSON.parse(http.response);
            console.log(resultado);
            listaPokemons(resultado);
            
        }
        
        function listaPokemons(leades) {
            
            document.querySelector('#main').innerHTML = htmlLista(leades);                

        
        }    

        function htmlLista(leades){
            
            return `
         
            <table iid="tabela" class="table table-hover">
                <thead>
                    <tr>
                        <th>Tipo do Lead</th>
                        <th>nome</th>
                        <th>email</th>
                    </tr>
                    
                    </thead>
                    
                    <tbody>
                    
                    
                    ${Object.keys(leades).map(id => {
                        console.log(leades[id]);
                        
                        if(leades[id].tipo =="B2B"){
                             b2b = b2b + 1; 
                        }else{
                            b2c = b2c +1;
                        }
                        
                        return `
                        
                        
                        <tr>
                            <td>${leades[id].tipo}</td>
                            <td>${leades[id].nome}</td>
                            <td>${leades[id].email}</td>
                        
                        </tr>
                        
                        `
                        
                        
                        
                        
                    }).join('')}
                    </tbody>
                    
        </table>
        <h2> total de b2c ${b2c}</h2>
        <h2> total de b2b ${b2b}</h2>
        <h1>Total:  ${Object.keys(leades).reduce((total,n)  => total + 1, 0.0)}</h1>

           


                    `;
                }
})();

