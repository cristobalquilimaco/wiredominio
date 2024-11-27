const cloudServer = [
    {
      id: 1,
      name: 'Cloud VM',
      url: 'https://my.donhoster.com/cart.php?a=add&pid=7',
      price: '$20.05 USD',
      savePrice: '$9.99',
      savePercentage: 'Save 90%',
      features: ['KVM Based Cloud Server in Miami', 'Includes industry leading server control panel', 'Intel Xeon processor families', 'Up to 32GB memory support', 'Up to 2TB SAN storage', 'Cloud Hosted Infrastructure', 'Redundant Power & Connectivity',],
    },

  ];

function renderCloudServers(){
    const containerCloud = document.getElementById("cloud-plans") // ayuda a acceder al elemento html que tiene un atributo id
    cloudServer.forEach(cloud =>{
        const planDiv = document.createElement("div")
        planDiv.classList.add("cloud")

        planDiv.innerHTML = `
            <section class="prueba">
                <div class="package">
                    <div class="package2">
                        <p class="title__plan__info">
                            
                        </p>
                    </>
                </div>
            </section>
        `

    })
}