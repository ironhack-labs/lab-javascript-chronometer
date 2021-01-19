"use strict";

class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(event) {
    const incTime = () => {
      this.currentTime += 1;
      printTime();
      console.log(this.currentTime);
    };
    this.intervalId = setInterval(incTime, 1000);
  }

  getMinutes() {
    return Number(Math.floor(this.currentTime / 60));
  }

  getSeconds() {
    return Number(Math.floor(this.currentTime % 60));
  }

  twoDigitsNumber(num) {
    return `0${num}`.slice(-2);
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(
      this.getSeconds()
    )}`;
  }
}

//
//  code templates fro Uros
//

// Working with Attributes of the elements

// const h1 = document.querySelector("#title");
// const googleLink = document.querySelector("#google-link");
// const contentDiv = document.querySelector("#content");

// const list = document.querySelector("#item-list");
// // const list = contentDiv.querySelector('#item-list');
// // const list = document.querySelector('ul');
// // const list = document.querySelector('#content ul');

// console.log("h1", h1);
// console.log("googleLink", googleLink);

// //  .getAttribute() -  Get the attribute value from an element
// const h1Id = h1.getAttribute("id");
// const linkClass = googleLink.getAttribute("class");
// const linkHref = googleLink.getAttribute("href");

// // .setAttribute(attrName, attrValue) - Change the value of the attribute
// googleLink.setAttribute("href", "https://google.com");
// contentDiv.setAttribute("class", "container");

// console.log("contentDiv", contentDiv);

// // .removeAttribute(attrName) - Removes and existing
// console.log("list", list);
// list.removeAttribute("id");

// // CREATE NEW ELEMENTS
// // document.createElement( elementType )

// const h2Tag = document.createElement("h2");
// h2Tag.innerHTML = "Sub Title";

// const body = document.querySelector("body"); // document.body

// body.appendChild(h2Tag);

// Adding content to an element
// .innerHTML = 'content'    or   .createTextNode('text content')   or   .textContent = ' text content'
// .innerHTML is dynamic and it can be used to create HTML elements

// // Create element
// const articleBrief = document.createElement('h3');
// const articleContent = document.createElement('p');

// // Create text node
// const textContent1 = document.createTextNode('Last year, a number of startups building OKR-focused software raised lots of venture capital, drawing TechCrunch’s attention.');
// const textContent2 = document.createTextNode('Why is everyone making software that measures objectives and key results? we wondered with tongue in cheek. After all, how big could the OKR software market really be? It’s a subniche of corporate planning tools! In a world where every company already pays for Google or Microsoft’s productivity suite, and some big software companies offer similar planning support, how substantial could demand prove for pure-play OKR startups?');

// // Append text node to element
// articleBrief.appendChild(textContent1);
// articleContent.appendChild(textContent2);

// // Append element (with text) to the body
// body.appendChild(articleBrief);
// body.appendChild(articleContent);

// h1.textContent = 'Tech Crunch';
// h2Tag.textContent = 'Rapid growth in 2020 reveals OKR software market’s untapped potential';

// const articleImage = document.createElement('img');
// articleImage.setAttribute(
//   'src',
//   'https://techcrunch.com/wp-content/uploads/2020/05/NSussman_Techcrunch_Exchange_v3-ORNG.jpg',
// );

// articleImage.style.width = '80%';
// articleImage.style.display = 'block'; // Image is an inline-element
// articleImage.style.margin = '0 auto'; // display: block is needed for this to work

// // .insertBefore(newNode, referenceNode )
// body.insertBefore(articleImage, articleBrief);

// // EVENT LISTENERS
// const button = document.querySelector('#add-item-button');
// const testButton = document.querySelector('#test-button');

// // .addEventListener
// button.addEventListener('click', function (event) {
//   console.log('event', event);
// })

// /*
// // .onclick
// button.onclick = function (event) {
//   console.log('event', event);
// }
// */

// function backgroundRed(event) {
//   // console.log(event)
//   const btn = event.target;
//   btn.style.backgroundColor = 'red';
//   btn.style.fontSize = '30px';
// }

// function backgroundWhite(event) {
//   // console.log(event)
//   const btn = event.target;
//   btn.style.backgroundColor = 'white';
//   btn.style.fontSize = '20px';
// }

// function removeMouseEvents(event) {
//   const btn = event.target;
//   btn.removeEventListener('mouseover', backgroundRed);
//   btn.removeEventListener('mouseout', backgroundWhite);
// }

// testButton.addEventListener('mouseover', backgroundRed);
// testButton.addEventListener('mouseout', backgroundWhite);

// testButton.addEventListener('click', removeMouseEvents);

// //
// const dropdownSection = document.querySelector('#dropdown-section');
// const toggleButton = document.querySelector('#hide-div');

// // Add the class name to the existing class attribute values
// dropdownSection.classList.add('open');
// // .classList.add()
// // .classList.remove()
// // .classList.toggle()

// toggleButton.addEventListener('click', function () {
//   dropdownSection.classList.toggle('close');
//   if (toggleButton.innerHTML === 'Hide') {
//     toggleButton.textContent = 'Show';
//   }
//   else {
//     toggleButton.textContent = 'Hide';
//   }
// })
