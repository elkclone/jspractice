
//CREATING DOM ELEMENTS: Starting with a bit more advanced concept of dom manipulation just because
//it is handy for showing stuff in browser creating dom elements as we go on the fly
//and appending them to the document.body.
//first I create an h1 and span html element using js.

  let my_element = document.createElement('h1')
  let my_span = document.createElement('span')

  //I inject some text into the span.
  my_span.innerText = "Yo! what up G? This is the start of my Javascript Review"

  //I append the span to my_element so it inherits the h1 big text characteristics.
  my_element.appendChild(my_span)
  my_element.classList.add('custom_class')//some custom stuff just for the title div.

  //I attach the my_element node to the main document.body node.
  document.body.appendChild(my_element)

  //I create a new div simply because I have more stuff to say.
  const div = document.createElement('div')

  div.innerText = "Creating dom elements and injecting them with js is how I will display preliminary comments on dom manipulaton, arrow functions, array methods and other E6 topics";
  div.classList.add('div_class')//I add another class from the css stylesheet.
  document.body.append(div);// I append my new div to the document.body element.
  //***************************************************************************************************//

  //Array Methods: 5 really handy array methods.
  //Create an array object called items.
  const items = [
    {name: 'Bike', price: 100},
    {name: 'TV', price: 200},
    {name: 'Album', price: 10},
    {name: 'Book', price: 5},
    {name: 'Phone', price: 500},
    {name: 'Computer', price: 1500},
    {name: 'Keyboard', price: 50}
    ]

  // Method 1: .filter is a way to filter an array for some conditional situation.Simple.. makes a new array object with all items $100 or less.
  const filteredItems = items.filter((item) => {
    return item.price <= 100
  })
  console.log(filteredItems)//dump it to console first as always.

  //Method 2: .map is used here to get just the names of each item. it iterates over the array items[].
  const itemNames = items.map((item) => {
    return item.name
  })
  console.log(itemNames)

  //Method 3: .find is used to find a single item matching the name Computer.
  const foundItem = items.find((item) => {
    return item.name === 'Computer'
  })
  console.log(foundItem)
  console.log("All the prices")
  //Method 4: .forEach is used to iterate over the array for each item.
  items.forEach((item) => {
    console.log(item.price)

  })

  //Method 5: .reduce is used to run a functon on every item in the array. In this case we are selecting price and adding them all up. basically what it costs to buy it all.
  const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
  }, 0)
  console.log("This is the total cost of all items")
  console.log(total)


  //Back to some dom element creation to make a new div that tells the user to actually open the dev console and look at the filtered items that are in the new array object.
  const divFiltered = document.createElement('div')
  divFiltered.innerHTML = "Array Methods: .filter, .map, .find, .forEach, .reduce <br><br>Open the developer console to see the results of .filter on a javascript array from the domElements.js file. The arrow function returns items with price <= 100. "
  divFiltered.classList.add('div_class')

  document.body.append(divFiltered)//connect the new div element to the main document body node.

  //Here I will create a new div element using js to display the usual js console outputs to the index.html page for view in browser.
  const divDisplay = document.createElement('div')
  divDisplay.classList.add('div_class')//make it inherit the earlier div properties

  //cranking out all the objects
  //A cool trick using JSON.stringify() on a variable array object to display js outputs to index.html instead of console. Because html can not parse js objects. which is annoying as hell.
  divDisplay.innerHTML = "Here you will see the new filtered array object converted to a string => <br><br>" + JSON.stringify(filteredItems) + " <br><br>This is an easy hack to get your js web dev console output into the browser prior to serving it live from an http server.</br> <br>As an afterthought we can dump out the original array right here as well <br>" + JSON.stringify(items)+ " <br>The .filter stripped out the 3 most expensive items =^^=<br><br> Using .map on the array we can also get just the names<br><br>" + JSON.stringify(itemNames) + "<br> <br>Using .find <br>Just one Item the Computer<br> " + JSON.stringify(foundItem) + "<br> The other array methods are logged to console you can also view them in the js source code. :D"

  document.body.append(divDisplay)
  //***********************************************************************************************************//
  //Let's Backtrak a little to refresh arrow funcion syntax.
  //Consider the following oldschool style funtions and their arrow function counterparts.

  //A named function with multiple parameters.
  function sum(a, b) {
    return a * b
  }
  console.log(sum(2, 6))
  //converted to an arrow function it looks like this.
  let sum2 = (a, b) => a*b
  console.log(sum2(2, 6))//Feel free to log out the rest of the examples on your own.

  //named function with 1 parameter.
  function isPositive(number) {
    return number >= 0
  }

  //converted to an arrow function it looks like this.
  let isPositive2 = (number) => number >=0

  //named function with 0 parameters.
  function randomNumber() {
    return Math.random
  }

  //converted to arrow function looks like this.
  let randomNumber2 = () => Math.random
  //log this for fun.



  // An anonymous function with no name.
  //document.addEventListener('click', function() {
  //  console.log('Click')


  //converted to arrow function looks like this.
  //document.addEventListener('click', () => console.log('Click'))
  //if we click in index.html in browser both these functions log 'Click' to the console.


  //********************************************************************************//

  //Lets try a fetch api function with some events. First we create a button element and a div element to
  //display the results. We set the id so we can use them to display our button and fetch() the data.

  const button = document.createElement('button')
  button.innerText = 'Bitcoin price and historical data'
  button.id = 'fetchdata'
  const resultDiv = document.createElement('div')
  resultDiv.id = 'result'
  resultDiv.classList.add('div_class')
  document.body.append(button)
  document.body.append(resultDiv)

  const fetchDataBtn = document.querySelector('#fetchdata')
  const result = document.querySelector('#result')
  const getData = () => {

    fetch('https://api.coincap.io/v2/assets/bitcoin/history?interval=d1')
      .then(response => response.text())
      //.then(data => console.log(data))
      .then(data => {
          result.innerText = JSON.stringify(data)
      })


    fetch('https://api.coincap.io/v2/assets/bitcoin')
      .then(response => response.text())
      //.then(data => console.log(data))
      .then(data => {
          result.innerText = JSON.stringify(data)
      })

    }
  // Add an event listner for the #fetchdata button.
  fetchDataBtn.addEventListener('click', e => {
    getData()
  })
