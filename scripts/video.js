console.log("video script added");
//1- Fetch, Load and show Categories on html

// Create loadCategories
const loadCategories = () =>{

    //fetch the Data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch((error) => console.log(error));
}

// Create displayCategories
const displayCategories = (categories) =>{
    const categoryContainer = document.getElementById("categories")

    categories.forEach( (item) => {
        console.log(item);
        // Create a button

        const button = document.createElement("button");
        button.classList = "btn";
        button.innerText= item.category;

        //add button to category container
        categoryContainer.append(button);
    });
}

loadCategories();