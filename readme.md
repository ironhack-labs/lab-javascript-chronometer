

### Iteration 2: DOM Manipulation

Your Chronometer class is now complete! That means that we can go ahead and actually create a visual interface that allows us to use all of the logic we've just coded.

At this point, you should start working in the `javascript/index.js` file. Note that, for now, you don't have to change anything in the HTML or CSS files.

In this iteration, your goal is to create a new chronometer, and use its methods (which we previously defined in `chronometer.js`) while interacting with the DOM. Example: when clicked, the `start` button should invoke the chronometer's `start` method.

As you can see, we have two different buttons: `start` and `clear`. These are the button values when the chronometer is not running. When the chronometer is running, the start button will change its behavior to stop the chronometer. In contrast, the reset button will change to split.

Both buttons will have different behavior depending on the status of the chronometer. These buttons are `btnLeft` and `btnRight` in our HTML. We can see the different values they will have in the following table:

| Chronometer Status | Button ID  | Text  | CSS Class   |
| ------------------ | ---------- | ----- | ----------- |
| Stopped            | `btnLeft`  | START | `btn start` |
| Stopped            | `btnRight` | RESET | `btn reset` |
| Running            | `btnLeft`  | STOP  | `btn stop`  |
| Running            | `btnRight` | SPLIT | `btn split` |

You will find two click event listeners that are already linked with both `btnLeft` and `btnRight` buttons. You have to create the necessary code to change the status of buttons.

:bulb: _Hint_: To change the _status_ of the buttons, we have to _toggle_ their classes depending on _if_ their classes include 'start' or 'reset'.

It means that when we click in the `btnLeft`, if it has the `start` class, you will have to change the `btnLeft` and `btnRight` buttons, setting them up with the Running status described in the table above.

On the other hand, if the `btnLeft` doesn't have the `start` class when we click, we will have to change both `btnLeft` and `btnRight` properties setting them up with the Stopped status described in the table above.

If the btnLeft has the class `start`, we should call the `start`method of chronometer - Remember the arguments! -.

#### Changing buttons texts

We will be working on the `javascript/index.js` file. We need to do the following (we could use .className and .innerHTML to do so):

- When the left button is clicked while the chronometer is stopped, we need to:

  - Set the `btnLeft` button with the text STOP, and the class `btn stop` 
  - Set the `btnRight` button with the text SPLIT, and the class `btn split`.

- When the left button is clicked while the chronometer is running we need to:

  - Set the `btnLeft` button with the text START, and the class `btn start`.
  - Set the `btnRight` button with the text RESET, and the class `btn reset`.

- In the `index.js` file, create a new instance of the `Chronometer` object (which we already have at the top of the file).

- Create the necessary code in the `index.js` to call the Chronometer's `start` method if the button has the `start` class, or the `stop` method if the button has the `stop` class applied.

#### Print our chronometer

Each second we need to update our screen. So go ahead and create a function that will receive the value for minutes and seconds, and print that on our HTML - remember to reuse our twodigits method that we have in chronometer!

You can invoke the method start of your chronometer.

Hint: if you remember, the start method expects a callback as an argument and will execute this callback every second (you can pass as an argument a function to update the user interface)

<details>
  <summary> Click here  to see the image </summary>

<br />

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_1a87e0edfb6efea2ae0c77c490e8563b.png)
    
</details>

### Iteration 3: Split time

The following feature we will implement is the split button. Remember that the split button is located in the `btnRight` button when the chronometer is running. In this iteration, we will have to create two different things: HTML & CSS, and the associated JavaScript.

#### HTML & CSS

First of all, we have to locate in our `index.html` file an ordered list where we are going to append the current time every time we press the split button - it has an id of `splits`, and we have it targeted at the befinning of our index.js file.


#### JavaScript

Once we have located the ordered list in our HTML, we have to create the button functionality. Every time we click on the split button, we will have to create a new `li` element and append it to the ordered list. The text of this element will be the current time of the chronometer (we have a method on our Chronometer that returns this :wink:).

Therefore, first we should create a list item every time we click on the button. 
After that, we should add a class name to this list item ('list-item').
Then we should update the innerHTML with the result of our method `split`in chronometer.
And finally we should append it to the parent element in the html file (the ordered list with `id`s of '`splits`)


<details>
  <summary> Click here to see the image </summary>

<br>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_a5c9687f25bd710b2e7658ee6d997174.png)
    
</details>


### Iteration 4: Reset

To finish up with this lesson, we are going to create the _clear_ feature. Remember, we will execute this when the chronometer is stopped, and the user clicks on the right button - check the event listener at the bottom of the file. The behavior here is straightforward: we have to clear all the data on the clock.

To do that, we will have to set the minutes and seconds to zero in our clock and remove all the `li` elements that we could have in the list we created in the previous iteration.

### BONUS Iteration 5: Milliseconds

Now, we can use our chronometer to calculate how much time we spend on each Ironhack exercise. What happens if we want to calculate our time in a race? We need to be more accurate with our chronometer. How can we be more accurate? By adding milliseconds!

If we want to add milliseconds to the chronometer, we will have to manipulate the HTML, the CSS, and the JavaScript. In the HTML, we will have to a container to show the milliseconds, changing the style of this container - so we should modify the DOM with the decimal and unit value of the milliseconds (they are targeted at the beginning of the index.js file).
Finally, in JavaScript, we will have to add all the logic to show the milliseconds in the clock. You will also have to add these milliseconds to the split counter - we should call the twoDigits method as well here.

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_82e9d1fd5976a3f98bb1382f2385f6a1.png)

Your goal is to create the JavaScript logic to:

- Be able to count the milliseconds.
- Show the milliseconds going forward.
- Show the milliseconds when you capture a split time.
- Clear the milliseconds when the Reset button is clicked.

This lab is a little bit complex, but it will guide you through the logical process of solving the problem and, at the same time, by following the guidelines, you will learn how to separate concerns between the logic and the DOM manipulation (which are the visuals).


## Test Your Code


## Tests, tests, tests!

This LAB is equipped with unit tests to provide automated feedback on your lab progress. You'll start by working with the tests and using them in conjunction with the iteration instructions.

Please, open your terminal, change directories into the root of the lab, and run `npm install` to install the test runner. Next run the `npm run test:watch` command to run automated tests.  

```shell
$ cd lab-javascript-chronometer
$ npm install
$ npm run test:watch
```

<br>

Open the resulting `lab-solution.html` file with the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VSCode extension to see the test results.

**Note:** The testing environment and the `lab-solution.html` page don’t allow printing the _console logs_ in the browser.  

To see the console.log outputs you write in any of the JavaScript files, open the `index.html` file using the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VSCode extension.


<br>

**Happy coding!** :heart:
