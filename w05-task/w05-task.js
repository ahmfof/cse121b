// /* W05: Programming Tasks */

// /* Declare and initialize global variables */


// /* async displayTemples Function */




// /* async getTemples Function using fetch()*/


// /* reset Function */


// /* sortBy Function */



// /* Event Listener */





// Reference to the HTML elements
const templesElement = document.querySelector('#temples');
const sortByElement = document.querySelector('#sortBy');

// Global variable to store temple data
let templeList = [];

// Function to convert month name to month number
const monthToNumber = (month) => {
  const monthNames = ["January", "February", "March", "April", "May", "June", 
                      "July", "August", "September", "October", "November", "December"];
  return String(monthNames.indexOf(month) + 1).padStart(2, '0'); // Convert to 'MM' format
};

// Function to fetch and display temple data
const getTemples = async () => {
  try {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const data = await response.json();
    templeList = data.map(temple => {
      // Convert 'dedicated' to a JavaScript Date object
      const dateParts = temple.dedicated.split(', ');
      const formattedDate = `${dateParts[0]}-${monthToNumber(dateParts[1])}-${dateParts[2]}`;
      return { ...temple, dedicatedDate: new Date(formattedDate) };
    });
    displayTemples(templeList);
  } catch (error) {
    console.error('Error fetching temples:', error);
  }
};

// Function to display temples in the DOM
const displayTemples = temples => {
  templesElement.innerHTML = ''; // Clear existing content
  temples.forEach(temple => {
    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    const img = document.createElement('img');

    h3.textContent = temple.templeName;
    img.src = temple.imageUrl;
    img.alt = `Image of ${temple.templeName} in ${temple.location}`;

    article.appendChild(h3);
    article.appendChild(img);
    templesElement.appendChild(article);
  });
};

// Function to sort and display filtered temples
const sortBy = () => {
  const filter = sortByElement.value;
  let filteredTemples = [];

  switch (filter) {
    case 'utah':
      filteredTemples = templeList.filter(temple => temple.location.includes('Utah'));
      break;
    case 'nonutah':
      filteredTemples = templeList.filter(temple => !temple.location.includes('Utah'));
      break;
    case 'older':
      filteredTemples = templeList.filter(temple => temple.dedicatedDate.getFullYear() < 1950);
      break;
    case 'all':
      filteredTemples = [...templeList];
      break;
    default:
      filteredTemples = [...templeList];
  }

  displayTemples(filteredTemples);
};

// Event listener for change in sortBy dropdown
sortByElement.addEventListener("change", sortBy);

// Initial fetch and display of temple data
getTemples();