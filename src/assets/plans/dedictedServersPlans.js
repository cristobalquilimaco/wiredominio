const dedicatedServers = [
    {
      id: 1,
      name: 'Dedicated Servers in Miami, FL - Small',
      url: 'https://my.donhoster.com/cart.php?a=add&pid=2',
      price: '$60 USD',
      savePrice: '$9.99',
      savePercentage: 'Save 90%',
      features: ['Intel Dual Xeon 3.0 Ghz', '4 GB RAM Memory', '500 GB HHD', '1 IP (IPv4)', 'Root access / Remote Desktop', '24/7 support', ],
    },
    {
      id: 2,
      name: 'Dedicated Servers in Miami, FL - Medium',
      url: 'https://my.donhoster.com/cart.php?a=add&pid=8',
      price: '$82 USD',
      savePrice: '$9.99',
      savePercentage: 'Save 90%',
      features: ['Intel Dual Xeon 3.0 Ghz', '8 GB RAM Memory', '1 TB HHD', '1 IP (IPv4)', 'Root access / Remote Desktop', '24/7 support',],
    },
    {
      id: 3,
      name: 'Dedicated Servers in Miami, FL - Large',
      url: 'https://my.donhoster.com/cart.php?a=add&pid=9',
      price: '$120 USD',
      savePrice: '$9.99',
      savePercentage: 'Save 90%',
      features: ['Intel Dual Xeon 3.0 Ghz', '16 GB RAM memory', '1TB HHD 1', 'IP (IPv4)', 'Root access / Remote Desktop', '24/7 Support',],
    },
    {
      id: 4,
      name: 'Dedicated Servers in Miami, FL - Extra Large',
      url: 'https://my.donhoster.com/cart.php?a=add&pid=10',
      price: '$220 USD',
      savePrice: '$9.99',
      savePercentage: 'Save 90%',
      features: ['Intel Dual Xeon 3.0 Ghz', '32 GB RAM Memory', '2x1 TB HHD', '1 IP (IPv4)', 'Root access / Remote Desktop', '24/7 support',],
    },

  ];

function renderPlansDedicated(){
  const containerDedicated = document.getElementById("plans-dedicated") //Ayuda a acceder al elemento de html que tiene un atributo id
  dedicatedServers.forEach(dedicated => {
    const planDiv = document.createElement("div"); // Crera un elememento HTML de tipo <Div>
    planDiv.classList.add("dedicated")// Este es utilizado para crear una o mas clases CSS en un elemento HTMl
    
    // Es una prpiedad del elemento del DOM que permite accesar o modificar el contenido HTML De un elemento..
    planDiv.innerHTML = ` 
      <section class="prueba">
        <div class="package">
          <div class="package2">
            <p class="title__plan__info">
              ${dedicated.name}
            </p>
            <div class="bg__color__plan">
              <p class="price__plan1">
                Price:${dedicated.price}
              </p>
            </div>
            <ul></ul>
          </div>
        </div>
      </section>
    `;
    containerDedicated.appendChild(planDiv) // Permite insertar un elemento dentro de otro

  })
}

renderPlansDedicated()