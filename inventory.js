const HomeInventory = JSON.parse(localStorage.getItem("homeInventory"))

const HomeInventoryElement = document.getElementsByClassName("inventory")[0]

for (var key in HomeInventory) {
    const HomeInventoryType = HomeInventory[key]

    for (var index = 0; index < HomeInventoryType.length; index++) {
        // console.log(HomeInventoryType[index]);
        HomeInventoryItem = HomeInventoryType[index];
        HomeInventoryElement.innerHTML += `
        <div class="${HomeInventoryItem.type} ${(HomeInventoryItem.location).replace(/ /, "_")} HomeInventory">
        <h2>${HomeInventoryItem.name}</h2>
        <p>${HomeInventoryItem.description}</p>
        </div>
        `
        
    }
}

    
