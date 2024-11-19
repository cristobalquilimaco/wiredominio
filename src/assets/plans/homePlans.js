const plans = [
    {
      id: 1,
      name: 'VPS in Miami, FL - Small',
      url: 'https://my.donhoster.com/cart.php?a=add&pid=1',
      price: '$14 USD',
      savePrice: '$9.99',
      savePercentage: 'Save 90%',
      features: ['3.3 Ghz Xeon E3-1230 CPU x1 Processor', '1 GB Memory RAM', '20 Hard Drive', '1 (IPv4) IP addresses', 'Unlimited Bandwidth', '24/7 Support'],
    },
    {
      id: 2,
      name: 'Dedicated Servers - Medium',
      url: 'https://my.donhoster.com/cart.php?a=add&pid=8',
      price: '$82 USD',
      savePrice: '$9.99',
      savePercentage: 'Save 90%',
      features: ['Intel Dual Xeon 3.0 Ghz', '8 GB RAM Memory', '1 TB HHD', '1 IP (IPv4)', 'Root access / Remote Desktop', '24/7 support'],
    },
    {
      id: 3,
      name: 'Cloud VM',
      url: 'https://my.donhoster.com/cart.php?a=add&pid=7',
      price: '$18.05 USD',
      savePrice: '$9.99',
      savePercentage: 'Save 90%',
      features: ['KVM Based Cloud Server in Miami', 'Includes industry leading server control panel', 'Intel Xeon processor families', 'Up to 32GB memory support', 'Up to 2TB SAN storage', 'Cloud Hosted Infrastructure', 'Redundant Power & Connectivity'],
    },
    {
      id: 4,
      name: 'Dedicated Servers - Large',
      url: 'https://my.donhoster.com/cart.php?a=add&pid=11',
      price: '$120.00 USD',
      savePrice: '$9.99',
      savePercentage: 'Save 90%',
      features: ['Intel Dual Xeon 3.0 Ghz', '16 GB RAM memory', '1TB HHD 1', 'IP (IPv4)', 'Root access / Remote Desktop', '24/7 Support',],
    },
  ];
  
  function renderPlans() {
    const container = document.getElementById('plans-container');
    plans.forEach(plan => {
      const planDiv = document.createElement('div');
      planDiv.classList.add('plan');
  
      planDiv.innerHTML = `
      <section class="prueba">
 <div class="package">
        <div class="package2">
            <p class="title__plan__info">${plan.name}</p>
            <div class="bg__color__plan">
                <p class="price__plan1">Price: ${plan.price} Mo</p>
            </div>
            <ul class="features__section">
                ${plan.features.map(feature => `
                    <li class="check__plans">
                        <div class="check__plans">
                            <img class="check__blue" src="/src/img/icons/check.png" alt="">
                            <p class="style__features">${feature}</p>
                        </div>
                    </li>`).join('')}
            </ul>
            <div class="btn__chose-container">
                <a href="${plan.url}"><button class="btn__plan__configure">Chose plan</button></a>
            </div>
        </div>
    </div>
</section>
      `;
  
      container.appendChild(planDiv);
    });
  }
  
  //Funcion para renderizar los planes
  renderPlans();
  