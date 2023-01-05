
// const wheel = document.getElementById("wheel");
// const spinBtn = document.getElementById("spin-btn");
// const finalValue = document.getElementById("final-value");
// //Object that stores values of minimum and maximum angle for a value
// const rotationValues = [
//   { minDegree: 0, maxDegree: 30, value: '☹️ Sorry!' },
//   { minDegree: 31, maxDegree: 90, value: 'Congratulations!!!🥳' },
//   { minDegree: 91, maxDegree: 150, value: '20%' },
//   { minDegree: 151, maxDegree: 210, value: '30%' },
//   { minDegree: 211, maxDegree: 270, value: '40%' },
//   { minDegree: 271, maxDegree: 330, value: '50%' },
//   { minDegree: 331, maxDegree: 360, value: '☹️ Sorry!' },
// ];
// //Size of each piece
// const data = [16, 16, 16, 16, 16, 16];
// //background color for each piece
// var pieColors = [
//   "red",
//   "#a6ff4d",
//   "red",
//   "#a6ff4d",
//   "red",
//   "#a6ff4d",
// ];
// //Create chart
// let myChart = new Chart(wheel, {
//   //Plugin for displaying text on pie chart
//   plugins: [ChartDataLabels],
//   //Chart Type Pie
//   type: "pie",
//   data: {
//     //Labels(values which are to be displayed on chart)
//     labels: ['Free', '☹️ Sorry!', '50%', '40%', '30%', '20%'],
//     //Settings for dataset/pie
//     datasets: [
//       {
//         backgroundColor: pieColors,
//         data: data,
//       },
//     ],
//   },
//   options: {
//     //Responsive chart
//     responsive: true,
//     animation: { duration: 0 },
//     plugins: {
//       //hide tooltip and legend
//       tooltip: false,
//       legend: {
//         display: false,
//       },
//       //display labels inside pie chart
//       datalabels: {
//         color: "#000",
//         formatter: (_, context) => context.chart.data.labels[context.dataIndex],
//         font: { size: 18 },
//       },
//     },
//   },
// });

// //display value based on the randomAngle
// const valueGenerator = (angleValue) => {
//   for (let i of rotationValues) {
//     //if the angleValue is between min and max then display it
//     if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
      
//       finalValue.innerHTML = `<p>Value: </p><p id='finalvalue'>${i.value}</p><br><button onclick='hie()' id='' class='btn btn-success' data-bs-dismiss="modal">OK</button>`;
//       spinBtn.disabled = false;
//       stopSound();
//       if (document.getElementById('finalvalue').innerText=="Sorry!"){
      
//           let audio = new Audio('sorry-audio.mp4');
//           audio.play();
        
//       }
//       else if (document.getElementById('finalvalue').innerText=="Congratulations!!!"){
      
//         let audio = new Audio('crowd-cheer.mp3');
//         audio.play();
      
//       }
//       // console.log(finalValue.innerText)
      
      
//       break;
//     }
//   }
// };

// //Spinner count
// let count = 0;
// //100 rotations for animation and last rotation for result
// let resultValue = 101;
// //Start spinning
// spinBtn.addEventListener("click", () => {
  
//   spinBtn.disabled = true;
//   //Empty final value
//   finalValue.innerHTML = `<p>Good Luck!</p>`;
//   //Generate random degrees to stop at
//   let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
//   //Interval for rotation animation
//   let rotationInterval = window.setInterval(() => {
//     //Set rotation for piechart
//     /*
//     Initially to make the piechart rotate faster we set resultValue to 101 so it rotates 101 degrees at a time and this reduces by 1 with every count. Eventually on last rotation we rotate by 1 degree at a time.
//     */
//     myChart.options.rotation = myChart.options.rotation + resultValue;
//     //Update chart with new value;
//     myChart.update();
//     //If rotation>360 reset it back to 0
//     if (myChart.options.rotation >= 360) {
//       count += 1;
//       resultValue -= 5;
//       myChart.options.rotation = 0;
      
//     } else if (count > 15 && myChart.options.rotation == randomDegree) {
//       valueGenerator(randomDegree);
      

//       // var button = document.createElement('button')
//       // button.className='btn button-success'
//       // button.innerText = OK
//       // finalValue.appendChild(button)

//       clearInterval(rotationInterval);
//       count = 0;
//       resultValue = 101;
//     }
    
//   }, 10);
  

// });

// function hie(){
//   finalv = document.getElementById('finalvalue').innerText
  
// }
// let audio = new Audio('start-audio-1.mpeg');  // Create audio object and load desired file.
 
// function startSpin()
// {
//     // Play the sound and begin the animation of the wheel.
//     audio.play();
    
// }
// function stopSound()
// {
//     // Stop and rewind the sound (stops it if still playing).
//     audio.pause();
//     audio.currentTime = 0;
// }


const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");
//Object that stores values of minimum and maximum angle for a value
const rotationValues = [
  { minDegree: 0, maxDegree: 30, value: ' Sorry!' },
  { minDegree: 31, maxDegree: 90, value: 'Congratulations!!! One Free Ticket' },
  { minDegree: 91, maxDegree: 150, value: '20%' },
  { minDegree: 151, maxDegree: 210, value: '30%' },
  { minDegree: 211, maxDegree: 270, value: '40%' },
  { minDegree: 271, maxDegree: 330, value: '50%' },
  { minDegree: 331, maxDegree: 360, value: 'Sorry!' },
];
//Size of each piece
const data = [16, 16, 16, 16, 16, 16];
//background color for each piece
var pieColors = [
  "red",
  "#a6ff4d",
  "red",
  "#a6ff4d",
  "red",
  "#a6ff4d",
];
//Create chart
let myChart = new Chart(wheel, {
  //Plugin for displaying text on pie chart
  plugins: [ChartDataLabels],
  //Chart Type Pie
  type: "pie",
  data: {
    //Labels(values which are to be displayed on chart)
    labels: ['Free', 'Sorry!', '50%', '40%', '30%', '20%'],
    //Settings for dataset/pie
    datasets: [
      {
        backgroundColor: pieColors,
        data: data,
      },
    ],
  },
  options: {
    //Responsive chart
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      //hide tooltip and legend
      tooltip: false,
      legend: {
        display: false,
      },
      //display labels inside pie chart
      datalabels: {
        color: "#000",
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
        font: { size: 18 },
      },
    },
  },
});
//display value based on the randomAngle
const valueGenerator = (angleValue) => {
  for (let i of rotationValues) {
    //if the angleValue is between min and max then display it
    if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
      
      finalValue.innerHTML = `<p>Value: </p><p id='finalvalue'>${i.value}</p><br><button style='padding: 5px 17px 5px 17px;font-size: 1em;' onclick='output()' id='' class='btn btn-success' data-bs-dismiss="modal">OK</button>`;
      spinBtn.disabled = false;
      stopSound();
      if (document.getElementById('finalvalue').innerText=="Sorry!"){
      
          let audio = new Audio('/static/js/sorry-audio.mp4');
          audio.play();
        
      }
      else if (document.getElementById('finalvalue').innerText=="Congratulations!!!"){
      
        let audio = new Audio('/static/js/crowd-cheer.mp3');
        audio.play();
      
      }

      
      // console.log(finalValue.innerText)
      
      
      break;
    }
  }
  
};

//Spinner count
let count = 0;
//100 rotations for animation and last rotation for result
let resultValue = 101;
//Start spinning
spinBtn.addEventListener("click", () => {
  
  
  startSpin();
  
  spinBtn.disabled = true;
  //Empty final value
  finalValue.innerHTML = `<p>Good Luck!</p>`;
  //Generate random degrees to stop at
  let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
  //Interval for rotation animation
  let rotationInterval = window.setInterval(() => {
  
    //Set rotation for piechart
    /*
    Initially to make the piechart rotate faster we set resultValue to 101 so it rotates 101 degrees at a time and this reduces by 1 with every count. Eventually on last rotation we rotate by 1 degree at a time.
    */
    myChart.options.rotation = myChart.options.rotation + resultValue;
    //Update chart with new value;
    
  
    myChart.update();

    
    //If rotation>360 reset it back to 0
    if (myChart.options.rotation >= 360) {
      count += 1;
      resultValue -= 5;
      myChart.options.rotation = 0;
      
    } else if (count > 15 && myChart.options.rotation == randomDegree) {
      valueGenerator(randomDegree);
  
      
      // var button = document.createElement('button')
      // button.className='btn button-success'
      // button.innerText = OK
      // finalValue.appendChild(button)

      clearInterval(rotationInterval);
      count = 0;
      resultValue = 101;
      
    }
    
  }, 10);

  
});


var price = document.getElementById('price').innerText.split(' ')[0]

function output(){
  var finalv = document.getElementById('finalvalue').innerText
  var event_name = parseInt(document.getElementById('id').innerText.split(',')[0])
  var book = parseInt(document.getElementById('id').innerText.split(',')[1])
  
  var price = document.getElementById('price').innerText.split(' ')[0]
  
  var finalPrice = 0
  
  if (finalv == 'Sorry!'){
    finalPrice = parseInt(price) - 0
    

  }
  else if (finalv == 'Congratulations!!! One Free Ticket'){
    if (book >=2 ){
      finalPrice = parseInt(price) - (0.5* parseInt(price))
    }
    else{
      finalPrice = 0
    }
    
  }
  else {
    var b = finalv.replace('%','')
    
    finalPrice = parseInt(price) - ((parseInt(b)/100)*parseInt(price))
    
  }
  
  document.getElementById('price').innerText = String(Math.round(finalPrice)) + ' ' + 'INR'
  document.getElementById('getoffers').style.display = 'none'

  carbody = document.getElementById('card-body')
 
  buyticket = document.createElement('a')
  buyticket.style.fontSize = 'initial'
  buyticket.className='btn btn-primary button-a'
  buyticket.innerText = 'Buy Ticket'
  buyticket.href=`/vouchers/${event_name}/${book}/`
  carbody.appendChild(buyticket)
}

let audio = new Audio('/static/js/start-audio-1.mpeg');  // Create audio object and load desired file.
 
function startSpin()
{
    // Play the sound and begin the animation of the wheel.
    audio.play();
    
}

// Called when the animation has finished.
function stopSound()
{
    // Stop and rewind the sound (stops it if still playing).
    audio.pause();
    audio.currentTime = 0;
}
