const popularRoutes = [
    {
      from: "mumbai",
      to: "delhi",
      stops: ["Surat", "Vadodara", "Udaipur", "Jaipur"]
    },
    {
      from: "delhi",
      to: "mumbai",
      stops: ["Surat", "Vadodara", "Udaipur", "Jaipur"]
    },
    {
      from: "delhi",
      to: "kolkata",
      stops: ["Kanpur", "Prayagraj", "Varanasi", "Dhanbad"]
    },
    {
      from: "kolkata",
      to: "delhi",
      stops: ["Kanpur", "Prayagraj", "Varanasi", "Dhanbad"]
    },
    {
      from: "bengaluru",
      to: "chennai",
      stops: ["Vellore", "Krishnagiri"]
    },
    {
      from: "chennai",
      to: "bengaluru",
      stops: ["Vellore", "Krishnagiri"]
    },
    {
      from: "mumbai",
      to: "goa",
      stops: ["Lonavala", "Kolhapur", "Amboli"]
    },
    {
      from: "goa",
      to: "mumbai",
      stops: ["Lonavala", "Kolhapur", "Amboli"]
    },
    {
      from: "hyderabad",
      to: "vizag",
      stops: ["Vijayawada", "Rajahmundry"]
    },
    {
      from: "vizag",
      to: "hyderabad",
      stops: ["Vijayawada", "Rajahmundry"]
    },
    {
      from: "delhi",
      to: "manali",
      stops: ["Chandigarh", "Kullu"]
    },
    {
      from: "manali",
      to: "delhi",
      stops: ["Chandigarh", "Kullu"]
    },
    {
      from: "kolkata",
      to: "puri",
      stops: ["Kharagpur", "Balasore", "Cuttack"]
    },
    {
      from: "puri",
      to: "kolkata",
      stops: ["Kharagpur", "Balasore", "Cuttack"]
    },
    {
      from: "lucknow",
      to: "varanasi",
      stops: ["Prayagraj"]
    },
    {
      from: "varanasi",
      to: "lucknow",
      stops: ["Prayagraj"]
    },
    {
      from: "jaipur",
      to: "udaipur",
      stops: ["Ajmer", "Nathdwara"]
    },
    {
      from: "udaipur",
      to: "jaipur",
      stops: ["Ajmer", "Nathdwara"]
    },
    {
      from: "ahmedabad",
      to: "mumbai",
      stops: ["Vadodara", "Surat"]
    },
    {
      from: "mumbai",
      to: "ahmedabad",
      stops: ["Vadodara", "Surat"]
    },
    {
      from: "pune",
      to: "bengaluru",
      stops: ["Satara", "Kolhapur", "Hubli"]
    },
    {
      from: "bengaluru",
      to: "pune",
      stops: ["Satara", "Kolhapur", "Hubli"]
    },
    {
      from: "chennai",
      to: "madurai",
      stops: ["Trichy", "Dindigul"]
    },
    {
      from: "madurai",
      to: "chennai",
      stops: ["Trichy", "Dindigul"]
    },
    {
      from: "delhi",
      to: "agra",
      stops: ["Faridabad", "Mathura"]
    },
    {
      from: "agra",
      to: "delhi",
      stops: ["Faridabad", "Mathura"]
    },
    {

      from : "hyd",
      to : "kmr",
      stops :["mdcl","uppal","sunny spot"]
    }
    
    
  ];
  
  function planTrip() {
    const from = document.getElementById('from').value.trim().toLowerCase();
    const to = document.getElementById('to').value.trim().toLowerCase();
    const output = document.getElementById('trip-output');
  
    if (!from || !to) {
      output.innerHTML = `<p>Please enter both 'From' and 'To' destinations.</p>`;
      return;
    }
  
    // Match routes in both directions
    const routeMatch = popularRoutes.find(
      route => (route.from === from && route.to === to) || (route.from === to && route.to === from)
    );
  
    let stopsHTML = `<p>🔍 No specific stopovers found for this route. Try Google Maps for more info.</p>`;
  
    if (routeMatch) {
      stopsHTML = `
        <p>🛑 Recommended stops along the way:</p>
        <ul>
          ${routeMatch.stops.map(place => `<li>${place}</li>`).join("")}
        </ul>
      `;
    }
  
    output.innerHTML = `
      <h3>Your Trip Plan</h3>
      <p>🧳 From: <strong>${capitalize(from)}</strong></p>
      <p>📍 To: <strong>${capitalize(to)}</strong></p>
      ${stopsHTML}
      <p>🚗 Tip: Use a travel app or Google Maps for directions and transport options. Safe travels!</p>
    `;
  }
  
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  