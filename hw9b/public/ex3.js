document.querySelector("form").addEventListener("submit", e => {
    // Cancel default behavior of sending a synchronous POST request
    e.preventDefault();
    // Create a FormData object, passing the form as a parameter
    const formData = new FormData(e.target);
    // Create an object
    // Send this array as JSON data to the server
    fetch("http://localhost:3000/articles", {
        method: "POST",
        body: formData
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