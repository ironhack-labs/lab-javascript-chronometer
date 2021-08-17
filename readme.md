![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | JS IronChronometer

## Introduction

In this lab, we are going to create a [chronometer](https://www.dictionary.com/browse/chronometer). Chronometers are very commonly used in many sports - car racing, athletics, etc. Why wouldn't we practice a bit of our JS and DOM manipulation knowledge and create our own IronChronometer? And then, we can use to see how many minutes and seconds will take us to complete any of our labs. Sounds like a plan.

Let's go!

These are our milestones:

1. Our chronometer will have an _LCD screen_, where we will see the minutes and seconds moving forward.
2. It will also have two different buttons that will change their behavior depending on the status of the chronometer. For example, the start button will become a stop button when the chronometer is running.
3. As a bonus, we are going to add a split functionality. If you are questioning the usefulness of this functionality, well, it could be helpful to remember how much time we spent in each iteration of the exercise. :wink: As we finish an iteration, we will be able to press the split button, so we will know how hard or easy it was, depending on how much time it took us to finish it.

Let's do it!

To check how your final version should look like check this **[demo](https://sandrabosk.github.io/demo-chrono/index.html)**.

## Requirements

- Fork this repo.
- Clone this repo.
- Visit the "Actions" tab in your fork, and enable workflows.

## Submission

- Upon completion, run the following commands:

```shell
$ git add .
$ git commit -m "Solved lab"
$ git push origin master
```

- Create Pull Request so your TAs can check up your work.

## Tests, tests, tests!

As you know by now, most of our labs are supported by tests. In the `tests/chronometer.spec.js` file, you can find the tests you need to pass to finish this exercise successfully.

Please, open your terminal, change directories into the root of the lab, and run `npm install` to install the test runner. Next run the `npm run test:watch` command to run automated tests. Open the resulting `lab-solution.html` file with the "Live Server" VSCode extension to always see the most up to date test results.

To see more details about failing tests, open the `tests/chronometer.spec.js` file.

## Instructions

To kick-off, we are provided with the following files and folders:

```
├── README.md
├── index.html
├── javascript
│   ├── chronometer.js
│   └── index.js
├── styles
│   ├── fonts
│   │   ├── ds-digi.ttf
│   └── style.css
└── tests
    └── chronometer.spec.js
```

The stylesheet already has the `ds-digi` font inserted. This font helps us to have a classic LCD screen to achieve the styles of the traditional chronometers.

We have also created the clock to let you focus on the JavaScript portion of this exercise. Click below to see the image you should get when you open the `index.html` file:

<br>

<details>
  <summary> Click here </summary>

![](https://education-team-2020.s3-eu-west-1.amazonaws.com/web-dev/labs/chronometer.png)
</details>



**This lab is primarily split into two main parts**:

- Part 1: the logic (which you will be adding to the `javascript/chronometer.js` file).
- Part 2: the DOM manipulation, so we can visually represent and showcase the previously written logic (the code you will add in the `javascript/index.js`).

Your solution will require the usage of the `setInterval` and `clearInterval` globally available methods.

`setInterval` can be called with a function as first argument and a number of milliseconds as the second argument. It will run said function every number of milliseconds that you passed it.

When called, `setInterval` returns a number that can be used to identify the _interval_ that was initialized. That same interval can later be stopped by running `clearInterval` and passing it the id of the interval we want to interrupt.

### Iteration 1: The logic

To start, you should be working on the `javascript/chronometer.js` file.

#### The `Chronometer` class

Let's create our `Chronometer` class. The `constructor` method shouldn't expect any arguments. It should initialize two properties of the chronometer:

- `currentTime`, which should start of as the number `0`.
- `intervalId`, which should start as `null`.

Let's proceed with the creation of the `Chronometer` methods.

#### Method `start`

The `Chronometer` class needs to have a `start` method. When called, `start` will start keeping track of time, by running a function in a 1 second interval, which will increment the amount of seconds stored in the property `currentTime` by `1`.

You should rely on the `setInterval` method to achieve this. The interval id that is returned by calling `setInterval` should be assigned to our `intervalId` property, so this way, we will be able to clear it later on when we need to stop the timer.

Additionally, the `start` method should accept a function as an argument. Let's name it `callback`. The `callback` argument is optional. If `start` is called and a `callback` is passed, said `callback` should be executed inside of the function you have passed to `setInterval`. If no callback is passed, it should be disregarded (hint: you should check whether _if_ the `callback` was passed before attempting to run it).

:bulb: _Hint 1_: Keep in mind, if you pass a function declaration to the `setInterval()` method (by writing `setInterval(function () {/* */})`), the keyword `this` will not refer to the object _chronometer_, but to global scope. To enable referencing the chronometer by accessing `this`, pass a function expression (a so-called arrow function) to the `setInterval()` method (by writing `setInterval(() => {/* */})` instead).

#### Method `getMinutes`

We're storing the number of seconds that have passed on the `currentTime` property. However, we might want to find out how many minutes have passed.

The `getMinutes` method should take no arguments, and it should return the _number_ of minutes that have passed as an integer.

#### Method `getSeconds`

We're now able to get the number of minutes that have passed. But what if we wanted to get the number of seconds that have passed after the start of the current minute?

The `getSeconds` method should return the number of seconds that have passed after the start of the current minute.

For example, if the property `currentTime` holds `75`, `getSeconds` should return `15`. If `currentTime` holds `210`, `getSeconds` should return `30`, and so on.

Hint: The [remainder math operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder) could be tremendously helpful in this situation.

#### Method `computeTwoDigitNumber`

Our chronometer has a super cool screen that needs two digits number to display minutes and seconds. However, sometimes the `getMinutes` and `getSeconds` methods return a single-digit number. Let's create a super simple algorithm that will turn into two-digits number any received value.

The `computeTwoDigitNumber` method should take a number, and return a string where the number received as an argument has been padded with 0s to ensure the value is at least 2 characters long.

For example, if `computeTwoDigitNumber` is called with the number `7`, it should return a string with the value of `"07"`. If called with with the number `36`, it should return a string with the value of `"36"`.

Later, we'll use the `computeTwoDigitNumber` method to format the values returned by `getMinutes` and `getSeconds` and display them in our chronometer.

#### Method `stop`

We can already start our chronometer. Let's create a method that stops it.

When invoked, the `stop` method should clear the interval with the id that had been stored in the `intervalId` property. It's as simple as that.

:bulb: _Hint_: Use `clearInterval`.

#### Method `reset`

The `reset()` will reset our chronometer. Since our code is super clean, we just need to set our `currentTime` property back to 0, and that's it!

#### Method `split`

At certain points, we might want to extract a formatted timestamp for the time elapsed since the chronometer was started. We call this "obtaining the split time".

The `split` method should expect no arguments, and return a string where the time since the start is formatted as "_mm:ss_". Internally, the `split` method can make usage of previously declared methods such as `getMinutes`, `getSeconds`, and `computeTwoDigitNumber`.

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

:bulb: _Hint_: To change the _status_ of the buttons, we have to _toggle_ their classes.

It means that when we click in the `btnLeft`, if it has the `start` class, you will have to change the `btnLeft` and `btnRight` buttons, setting them up with the Running status described in the table above.

On the other hand, if the `btnLeft` doesn't have the `start` class when we click, we will have to change both `btnLeft` and `btnRight` properties setting them up with the Stopped status described in the table above.

#### Changing buttons texts

We will be working on the `javascript/index.js` file. We need to do the following:

- When the left button is clicked while the chronometer is stopped, we need to:

  - Set the `btnLeft` button with the text STOP, and the class `btn stop`.
  - Set the `btnRight` button with the text SPLIT, and the class `btn split`.

- When the left button is clicked while the chronometer is running we need to:

  - Set the `btnLeft` button with the text START, and the class `btn start`.
  - Set the `btnRight` button with the text RESET, and the class `btn reset`.

- In the `index.js` file, create a new instance of the `Chronometer` object.

- Create the necessary code in the `index.js` to call the Chronometer's `start` method if the button has the `start` class, or the `stop` method if the button has the `stop` class applied.

#### Print our chronometer

Each second we need to update our screen. So go ahead and create a function that will receive the value for minutes and seconds, and print that on our HTML.

Using our `Chronometer` methods to get the values, this should be easy!

<details>
  <summary> Click here </summary>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_1a87e0edfb6efea2ae0c77c490e8563b.png)
    
</details>




### Iteration 3: Split time

The following feature we will implement is the split button. Remember that the split button is located in the `btnRight` button when the chronometer is running. In this iteration, we will have to create two different things: HTML & CSS, and the associated JavaScript.

#### HTML & CSS

First of all, we have to create in our `index.html` file an ordered list where we are going to append the current time every time we press the split button.

#### JavaScript

Once we have created the ordered list in our HTML, we have to create the button functionality. Every time we click on the split button, we will have to create a new `li` element and append it to the ordered list. The text of this element will be the current time of the chronometer (we have a method on our Chronometer that returns this :wink:).


<details>
  <summary> Click here </summary>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_a5c9687f25bd710b2e7658ee6d997174.png)
    
</details>



### Iteration 4: Reset

To finish up with this lesson, we are going to create the _clear_ feature. Remember, we will execute this when the chronometer is stopped, and the user clicks on the right button. The behavior here is straightforward: we have to clear all the data on the clock.

To do that, we will have to set the minutes and seconds to zero in our clock and remove all the `li` elements that we could have in the list we created in the previous iteration.

### BONUS Iteration 5: Milliseconds

Now, we can use our chronometer to calculate how much time we spend on each Ironhack exercise. What happens if we want to calculate our time in a race? We need to be more accurate with our chronometer. How can we be more accurate? By adding milliseconds!

If we want to add milliseconds to the chronometer, we will have to manipulate the HTML, the CSS, and the JavaScript. In the HTML, we will have to a container to show the milliseconds, changing the style of this container. Finally, in JavaScript, we will have to add all the logic to show the milliseconds in the clock. You will also have to add these milliseconds to the split counter.

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_82e9d1fd5976a3f98bb1382f2385f6a1.png)

Your goal is to create the JavaScript logic to:

- Be able to count the milliseconds.
- Show the milliseconds going forward.
- Show the milliseconds when you capture a split time.
- Clear the milliseconds when the Reset button is clicked.

This lab is a little bit complex, but it will guide you through the logical process of solving the problem and, at the same time, by following the guidelines, you will learn how to separate concerns between the logic and the DOM manipulation (which are the visuals).

**Happy coding!** :heart:
