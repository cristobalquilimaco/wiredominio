const vpsPlans = [
    {
      id: 1,
      name: 'VPS in Miami, FL - Small',
      url: 'https://my.donhoster.com/cart.php?a=add&pid=1',
      price: '$14 USD',
      savePrice: '$9.99',
      savePercentage: 'Save 90%',
      features: ['3.3 Ghz Xeon E3-1230 CPU x1 Processor', '1 GB Memory RAM', '20 Hard Drive', '1 (IPv4) IP addresses', 'Unlimited Bandwidth', '24/7 Support',],
    },
    {
      id: 2,
      name: 'VPS in Miami, FL - Medium',
      url: 'https://my.donhoster.com/cart.php?a=add&pid=3',
      price: '$20 USD',
      savePrice: '$9.99',
      savePercentage: 'Save 90%',
      features: ['3.3 Ghz Xeon E3-1230 CPU x2 Processor', '2 GB Memory RAM', '50 Hard Drive', '1 (IPv4) IP addresses', 'Unlimited Bandwidth', '24/7 Support'],
    },
    {
      id: 3,
      name: 'VPS in Miami, FL - Large',
      url: 'https://my.donhoster.com/cart.php?a=add&pid=4',
      price: '$27 USD',
      savePrice: '$9.99',
      savePercentage: 'Save 90%',
      features: ['3.3 Ghz Xeon E3-1230 CPU x3 Processor', '3 GB Memory RAM', '100 Hard Drive', '1 (IPv4) IP addresses', 'Unlimited Bandwidth', '24/7 Support'],
    },
    {
      id: 4,
      name: 'VPS in Miami, FL - Extra Large',
      url: 'https://my.donhoster.com/cart.php?a=add&pid=5',
      price: '$35 USD',
      savePrice: '$9.99',
      savePercentage: 'Save 90%',
      features: ['3.3 Ghz Xeon E3-1230 CPU x4 Processor', '4 GB Memory RAM', '250 Hard Drive', '1 (IPv4) IP addresses', 'Unlimited Bandwidth', '24/7 Support',],
    },

  ];

function renderPlanVps(){
  const containerVps = document.getElementById("plans-vps")
  vpsPlans.forEach(vps => {
    const planDiv = document.createElement("div"); // crea un elemento tipo div
    planDiv.classList.add("vps")

    planDiv.innerHTML = `
    <section class="prueba">
      <div class="package">
        <div class="package2">
          <p class="title__plan__info">
            ${vps.name}
          </p>
          <div class="bg__color__plan">
            <p class="price__plan1">
              Price: ${vps.price}
            </p>
          </div>
          <ul class="features__section">
            ${vps.features.map(
              features => `
                <li class="check__plans">
                  <div class="check__plans">
                    <img class="check__blue" src="/src/img/icons/check.png" alt="icon-check-plans"/>
                    <p class="style__features">
                      ${features}
                    </p>
                  </div>
                </li>
              `
            ).join("")
            }
          </ul>
        </div>
      </div>
    </section>
    `
    containerVps.appendChild(planDiv)
  });
}

renderPlanVps()