// async function GetTemp() {
//     let response = await fetch(
//         "https://api.open-meteo.com/v1/forecast?latitude=10.82&longitude=106.63&current=temperature_2m"
//     );

//     let data = await response.json();
    

//     setInterval(() => {
//         setTemp(GetTemp)
//     }, 1000)

//     return data.current.temperature_2m;
// }

// export default GetTemp;