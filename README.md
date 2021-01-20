# JS
My code examples and reusable snippets of JavaScript.

## In repository:
- ### Api example
	Fetch and async/await API connection
- ### DOM Eevent delegation
	Example and comparission three ways of using dom delegation on ul
	1. Not efficient way: 
		- Through iteration array of each element (Array.from(domItems) or [].forEach.call(domItems, cb())
	2. Efficient way:
		- addEventListener on parent of domItems and then add condition to specify on which dom elements should be event
			```
			const efficientColorChange = e => {
				if (e.target.nodeName === "P") {
						e.target.style.color = "#2c1fd3";
				}
			}
			article.addEventListener("click", efficientColorChange);
			```
- ### Iterators
    -What is? How to use?
    -Sread operator on interator can create array from node list in easy way
- ### Regular expressions
	1. JS regex method like .test(), .match(), .exec(), .repleace(), .search()
	2. Small project

- ### Tips & tricks
  1. :poland: Największy element w tablicy.                     :uk: ENG: Highest number in arr
  2. :poland: Konwerjsa obiektów tablicopodbnych na tablice.    :uk: ENG: Conversion objects similar to arrays into strict arrays
  3. :poland: Określenie, czy jeden element zawiera drugi.      :uk: ENG: Is one contains second one
  4. :poland: Preload obrazów w tle.                            :uk: ENG: Images PRELOAD
  5. :poland: Wyłączanie CSS.                                   :uk: ENG: Turn off  stylesheet on website
  6. :poland: Wysyłanie informajci bez użycia AJAX.             :uk: ENG: send info without using AJAX
  7. :poland: Wyświelanie powiadomeń w tyltule strony. 					:uk: ENG: Notification in title card in browser
  8. :poland: Tworzenie kopii obiektu. 													:uk: ENG: copying object
  9. :poland: Kodowanie base64. 																:uk: ENG: base64 coding
  10. :poland: Usuwanie elementu tablicy. 											:uk: ENG remove array element
  
- ### Promises
	XHR connection with representation of Promises .all() .then() .catch()
