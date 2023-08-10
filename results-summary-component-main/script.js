

let subjectContainer = document.querySelector(".summary > div > div");

/* Get the data from JSON file */
async function fetchData() {
    let data;
    const rawResponse = await fetch('./data.json')
    const response = await rawResponse.json();
    data = response
    return data

}

fetchData().then(data => {

    for (let i = 0; i < data.length; i++) {
        let theme = `
        <div class="${data[i].category.toLowerCase()}">
            <!-- Matière -->
            <div>
                <img src="${data[i].icon}" alt="${data[i].category}">
                <p>${data[i].category}</p>
            </div>
            <!-- note -->
            <p>${data[i].score} <span>/100</span></p>
        </div>
        `;
        subjectContainer.insertAdjacentHTML("beforeend",theme)
    }
    
});




