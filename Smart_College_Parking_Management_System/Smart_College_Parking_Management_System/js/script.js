
let vehicles=[];
let chart;

function addVehicle(){

  const vehicle=document.getElementById("vehicle").value;
  const type=document.getElementById("type").value;

  vehicles.push({vehicle,type});

  updateUI();
}

function updateUI(){

  const records=document.getElementById("records");
  records.innerHTML="";

  let bike=0,car=0,truck=0;

  vehicles.forEach(v=>{

    if(v.type==="Bike") bike++;
    if(v.type==="Car") car++;
    if(v.type==="Truck") truck++;

    records.innerHTML+=`
    <div class="record">
      <h3>${v.vehicle}</h3>
      <p>${v.type}</p>
    </div>
    `;
  });

  drawChart(bike,car,truck);
}

function drawChart(bike,car,truck){

  const ctx=document.getElementById("parkingChart");

  if(chart){
    chart.destroy();
  }

  chart=new Chart(ctx,{
    type:"doughnut",
    data:{
      labels:["Bike","Car","Truck"],
      datasets:[{
        data:[bike,car,truck]
      }]
    }
  });
}
