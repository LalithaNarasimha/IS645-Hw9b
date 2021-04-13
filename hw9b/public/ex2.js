const countries =
{
    name: "Lalitha",
    countries: [
        {
            name: "India",
            year: 2020
        },
        {
            name: "UK",
            year: 2020
        },
        {
            name: "USA",
            year: 2020
        },
        {
            name: "France",
            year: 2020
        }
    ]
};

document.getElementById("callAPI").addEventListener("click", e => {
    // Cancel default behavior of sending a synchronous POST request
    e.preventDefault();
    // Create an object
    // Send this array as JSON data to the server
    fetch("http://localhost:3000/api/countries", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(countries)
    })
        .then(response => response.text())
        .then(result => {
            document.getElementById("result").textContent = result;
            console.log(result);
        })
        .catch(err => {
            console.error(err.message);
        });
});