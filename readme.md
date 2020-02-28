![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | JS IronChronometer

## Introduction

In this lab, we are going to create a [chronometer](https://www.dictionary.com/browse/chronometer). Chronometers are very common in many sports - car racing, athletics, etc. Why we wouldn't practice a bit our JS and DOM manipulation knowledge and create our own IronChronometer which we can use to see how many minutes and seconds will take us to complete any of our labs. Sounds cool, right?

These are our milestones:

1. Our chronometer will have an LCD screen, where we will see the minutes and seconds moving forward.
2. It will also have two different buttons that will change their behavior depending on the status of the chronometer. For example, the start button will become a stop button when the chronometer is running.
3. As a bonus, we are going to add a split functionality. If you are questioning the usefulness of this functionality, well, it could be helpful to remember how much time we spent in each iteration of the exercise. :wink: As we finish an iteration, we will be able to press the split button, so we will know how hard or easy it was, depending on how much time it took us to finish it.

Let's do it!

![](https://media.giphy.com/media/xT8qAZcty5f0BEm2lO/giphy.gif)

## Requirements

- Fork this repo
- Clone this repo

## Submission

- Upon completion, run the following commands:

```
$ git add .
$ git commit -m "done"
$ git push origin master
```

- Create Pull Request so your TAs can check up your work.

## Tests, tests, tests!

As you know by now, most of our labs are supported by tests. In the `tests/chronometer.spec.js` file you can find the tests you need to pass to successfully finish this exercise.
You know the process, go ahead and open the `SpecRunner.html` file to see all the tests, and start writing your code on the `javascript/chronometer.js` file.

## Instructions

To kick off, we are provided with the following files and folders:

```
├── README.md
├── SpecRunner.html
├── index.html
├── jasmine
├── javascript
│   ├── chronometer.js
│   └── index.js
├── styles
│   ├── fonts
│   │   ├── ds-digi.ttf
│   │   └── ds-digib.TTF
│   └── style.css
└── tests
    └── chronometer.spec.js
```

The style sheet has already the `ds-digib` font inserted. This font helps us to have a classic LCD screen, to achieve the styles of the classic chronometers.

We have also created the clock to let you focus on the JavaScript portion of this exercise. If you open the `index.html` file, you will see something like this:

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_db7f06db5a8f3c0b1a8432e1bdb34262.png)

**This lab is essentially split in two main parts**:

- part 1: logic (the code you will add in the `javascript/chronometer.js`) and
- part 2: DOM manipulation so we can visually represent and showcase the previously written logic (the code you will add in the `javascript/index.js`).

It is **mandatory** for you to use the following:

- [`setInterval()`](https://www.w3schools.com/jsref/met_win_setinterval.asp) method to update the chronometer on each second,
- a class to create a JavaScript object that encapsulates all the `Chronometer` functionalities.

### Iteration 1: The logic

#### The `Chronometer` class

Let's create a Chronometer class and apply the following:

- the constructor method won't receive any arguments,
- the class will have two properties: `currentTime`, `intervalId`.

To see more details about failing tests, open the `tests/ChronometerSpec.js`.

#### startClick()

We need to create a `startClick()` method for the Chronometer object. The `startClick()` method should use the `setInterval()` JS method to increment by 1 the `currentTime` property every 1 second.

The `setInterval()` will be assigned to our `intervalId` property, so this way we will be able to clear it later on when we need to restart the time.

#### getMinutes()

Our current time is our clock, but it only runs seconds. We need to create a method that will return the number of minutes that corresponds to the value of seconds we have on the `currentTime`.

#### getSeconds()

As we did with the minutes, we need a method that returns the seconds that we have on the `currentTime` property after calculating the round number that represents the minutes.

#### twoDigitsNumber()

Our chronometer has a super cool screen that needs two digits number to display minutes and seconds, but sometimes `getMinutes()` and `getSeconds()` returns a single digit number. Let's create a super simple algorithm that will turn into two-digits number any received value. Example: if the value of the _currentTime_ property is 36 seconds, it should return `00` for minutes and `36` for seconds; if the currentTime is 5 min and 43 sec, it should give us back `05` for minutes and `43` for seconds. At the same time, if the currentTime is 17 min and 13 sec, it should give us back `17` for minutes and `13` for seconds.

<!-- **This is an awesome example of a functionality that we will need several times, so we isolate it on a function and just call every time we want** -->

#### stopClick()

When invoked, the `stopClick()` method should clear the `intervalId`. Simple as that.

#### resetClick()

The `resetClick()` will reset our chronometer. Since our code is super clean, we just need to set our `currentTime` property back to 0, and that's it!

#### splitClick()

The `splitClick()` method needs to capture the moment when split button gets hit later on. Imagine this being time frame in which a runner runs certain distances.
The `splitClick()` will receive any two numbers and needs to output them in the valid format. For more information, check the corresponding test.

### Iteration 2: DOM Manipulation

Our chronometer logic is done and it works perfectly! Now we need to set the visual components of our web.

As you can see, we have two different buttons: start and clear. These are the button values when the chronometer is not running. When the chronometer is running, the start button will change its behavior to stop the chronometer, while the reset button will change to split.

Both buttons will have different behavior depending on the chronometer. These buttons are `btnLeft` and `btnRight` in our HTML. We can see the different values they will have in the following table:

| Chronometer Status | Button ID  | Text  | CSS Class   |
| ------------------ | ---------- | ----- | ----------- |
| Stopped            | `btnLeft`  | START | `btn start` |
| Stopped            | `btnRight` | RESET | `btn reset` |
| Running            | `btnLeft`  | STOP  | `btn stop`  |
| Running            | `btnRight` | SPLIT | `btn split` |

**Note that you don't have to create any CSS class. All of them are already defined in the provided style sheet.**

In the `javascript/index.js` file you will find two click events that are already linked with both `btnLeft` and `btnRight` buttons. You have to create the necessary code to change the status of buttons.

It means that when we click in the `btnLeft`, if it has the `start` class you will have to change the `btnLeft` and `btnRight` buttons setting them up with the Running status described in the table above.

On the other hand, if the `btnLeft` doesn't have the `start` class when we click, we will have to change both `btnLeft` and `btnRight` properties setting them up with the Stopped status described in the table above.

#### Changing buttons texts

We will be working on the `javascript/index.js` file. We need to do the following:

- When the left button is clicked while the chronometer is stopped we need to:

  - Set the `btnLeft` button with the text STOP, and the class `btn stop`.
  - Set the `btnRight` button with the text SPLIT, and the class `btn split`.

- When the left button is clicked while the chronometer is running we need to:

  - Set the `btnLeft` button with the text START, and the class `btn start`.
  - Set the `btnRight` button with the text RESET, and the class `btn reset`.

- In the `index.js` file, create a new instance of the `Chronometer` object.

- Create the necessary code in the `index.js` to call the Chronometer `startClick` method if the button has the `start` class, or the `stopClick` method if the button has the `stop` class applied.

#### Print our chronometer

Each second we need to update our screen. So go ahead and create a function that will receive the value for minutes and seconds, and print that on our HTML.

Using our `Chronometer` methods to get the values, this should be easy!

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_1a87e0edfb6efea2ae0c77c490e8563b.png)

### Iteration 3: Split time

The following feature we will implement is the split button. Remember that the split button is located in the `btnRight` button when the chronometer is running. In this iteration, we will have to create two different things: HTML & CSS, and the associated JavaScript.

#### HTML & CSS

First of all, we have to create in our `index.html` file an ordered list where we are going to append the current time every time we press the split button.

#### JavaScript

Once we have created the ordered list in our HTML, we have to create the button functionality. Every time we click on the split button, we will have to create a new `<li>` element and append it to the ordered list. The text of this element will be the current time of the chronometer (we have a method on our Chronometer constructor that returns this :wink:).

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_a5c9687f25bd710b2e7658ee6d997174.png)

### Iteration 4: Reset

To finish up with this lesson, we are going to create the clear feature. Remember we will execute this when the chronometer is stopped and the user clicks on the right button. The behavior here is very simple: we have to clear all the data on the clock.

To do that, we will have to set the minutes and seconds to zero in our clock and remove all the `<li>` elements that we could have in the list we created in the previous iteration.

### BONUS Iteration: Milliseconds

Now, we can use our chronometer to calculate how much time we spend on each Ironhack exercise. What happens if we want to calculate our time in a race? We need to be more accurate with our chronometer. How can we be more accurate? By adding milliseconds!

If we want to add milliseconds to the chronometer, we will have to manipulate the HTML, the CSS, and the JavaScript. In the HTML we will have to a container to show the milliseconds, changing the style of this container. Finally, in the JavaScript, we will have to add all the logic to show the milliseconds in the clock. You will also have to add these milliseconds to the split counter.

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_82e9d1fd5976a3f98bb1382f2385f6a1.png)

#### Tasks

- Add the necessary HTML to show the milliseconds in the clock.
- Add the necessary styles in the CSS to show the milliseconds as you like.
- Create the JavaScript logic to:
  - Be able to count the milliseconds.
  - Show the milliseconds going forward.
  - Show the milliseconds when you capture a split time.
  - Clear the milliseconds when the Reset button is clicked.

Happy coding! :heart:
