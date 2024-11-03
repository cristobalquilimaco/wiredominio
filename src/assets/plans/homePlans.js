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
      name: 'Dedicated Servers in Miami, FL - Medium',
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
      name: 'US/East Coast - Supermicro MicroCloud',
      url: 'https://my.donhoster.com/cart.php?a=add&pid=11',
      price: '$120.00 USD',
      savePrice: '$9.99',
      savePercentage: 'Save 90%',
      features: ['Bare Metal Dedicated Server in USA', 'Intel Xeon E3 processor families E3-1230 v3, E3-1240 v3, E3-1270 v3', 'Up to 32GB DDR3 1600MHz memory support', '2 x 3.5" SATA/SSD drive options', 'Fully Hotswappable node chassis', 'Redundant Power Supplies'],
    },
  ];
  
  function renderPlans() {
    const container = document.getElementById('plans-container');
    plans.forEach(plan => {
      const planDiv = document.createElement('div');
      planDiv.classList.add('plan');
  
      planDiv.innerHTML = `
      <div class="package">
      <div class="package2">
       <h2>${plan.name}</h2>
        <p>Price: ${plan.price}</p>
        <p>${plan.savePercentage} (was: ${plan.savePrice})</p>
        <ul>
          ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
        <a href="${plan.url}" target="_blank">Buy Now</a>
      </div>
      </div>
      `;
  
      container.appendChild(planDiv);
    });
  }
  
  // Llama a la función para renderizar los planes
  renderPlans();
  