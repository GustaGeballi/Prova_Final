fetch("http://localhost:3000/carros")
  .then((req)=>req.json())
  .then(data=>console.log(data));


function mostraCarros(carros){
  const htmlCarros = carros.map(
    (carros) => 
    <h2>${carros.marca}</h2>
    <h3>${carros.nome}</h3>
  )
}