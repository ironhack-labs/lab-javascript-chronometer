![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | JS Chronometer

## Introduction

In this Lab we are going to build a Chronometer. Chronometers are very common in a lot of sports, like running, rowing, cycling, athletics, car racing or even chess. In this case, we are going to create a Chronometer to count how many minutes and seconds we use to do the Ironhack Exercises!

Our Chronometer will have a LED Screen, where we will see the minutes and seconds moving forward. It will also have two different buttons, that will change their behavior depending on the status of the Chronometer. For example, the start button will become stop button when the Chronometer is running.

Last, but not least, we are going to add a "Split" functionality, that will be very helpful to remember how many time we spent in each iteration of the exercise. Every time we finish an iteration, we will be able to press the split button, so we will know how hard or easy it was.

![](https://media.giphy.com/media/xT8qAZcty5f0BEm2lO/giphy.gif)

### Requirements

- Use `setInterval` to update the chronometer each second.
- Use object-oriented programming to create an object that encapsulates all of the `Chronometer` functionalities.

### Submission

Upon completion, run the following commands:

```
$ git add .
$ git commit -m "done"
$ git push origin master
```

Navigate to your repo and create a Pull Request -from your master branch to the original repository master branch.

In the Pull request name, add your campus, name and last names separated by a dash "-".

### Starter code

We have already created you the main structure you will need to create your chronometer. The project structure is the following:

```
starter-code/
├── jasmine
├── javascript
│   └── main.js
    └── chronometer.js
├── stylesheets
│   └── fonts.js
        └── ds.digib.ttf
    └── styles.css
├── index.html
├── SpecRunner.html
```

The style sheet has already the `ds-digib` font inserted. This font helps us to have a classic LCD screen, to achieve the styles of the classic chronometers.

We have also created the clock to let you focus on the JavaScript. If you open the `index.html` file, you will see something like this:

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_db7f06db5a8f3c0b1a8432e1bdb34262.png)

### Deliverables

Deliver all of the files that compose the project, including the HTML, CSS, and JavaScript.

## Instructions

Let's start working on our solution. As we've seen, we already have all the necessary HTML and CSS files to display our chronometer on the page.

You might have noticed that this lab includes some tests. These target the logic we're building. Let's try to make these pass, and only then work on our DOM manipulation.

You know how it goes: open the `SpecRunner.html` file on Chrome to see all of the tests, and start writing your code on the `javascript/chronometer.js` file.

### Iteration 1: The Logic

#### Chronometer Class

We need to create a `Chronometer` class. Its constructor does not expect any arguments, but binds two properties to `this`: `currentTime` and `intervalId`.

#### startClick()

We need to declare a method named `startClick` in our `Chronometer` class. The `startClick` method is pretty simple, it should start a `setInterval` that will add 1 to the `currentTime` property with every second that passes.

The `setInterval` will be assigned to our `intervalId` property, this way we will be able to clear it later on.

#### getMinutes()

Our current time is our clock, but it only runs seconds, so we need to create a method that will return us the number of minutes that corresponds to the value we have on `currentTime`!

#### getSeconds()

As we did with the minutes, we need a method that returns the seconds that we have on the `currentTime` property after removing the minutes.

#### twoDigitsNumber()

Our chronometer has a super cool screen that needs two digits number to display minutes and seconds, but sometimes `getMinutes` and `getSeconds` returns a single digit number, so let's create a super easy function that will receive as a parameter a value and will return us the same value but will always enforce a 2 digit length.

**This is an example of a piece functionality that we will be using repeatedly, so it's just better to isolate it on a method that we can call every time we want**

#### resetClick()

The `resetClick` will reset our chronometer. Since our code is super clean, we just need to set the `currentTime` property to 0.

### Iteration 2: DOM Manipulation

Our chronometer logic is done and it works perfectly! Now we just need to display all of this information on the DOM.

As you might have noticed, there are two different buttons on our page: `start` and `clear`. These are the button values when the chronometer is not running. When the chronometer is running, the start button will change its behavior to `stop` the chronometer, while the reset button will change to `split`.

Both buttons will have different behavior depending on the state of the chronometer. These buttons are `btn-left` and `btn-right` in our HTML. We can see the different values they will have in the following table:

| Chronometer Status | Button ID   | Text  | CSS Class   |
| ------------------ | ----------- | ----- | ----------- |
| Stopped            | `btn-left`  | START | `btn start` |
| Stopped            | `btn-right` | RESET | `btn reset` |
| Running            | `btn-left`  | STOP  | `btn stop`  |
| Running            | `btn-right` | SPLIT | `btn split` |

**Note that you don't have to create any CSS class. All of them are already defined in the `starter-code` stylesheet.**

In the `main.js` file, you'll see that we've already added two `click` event listeners to both of our buttons. All you need to do now is create the necessary code to change their status.

This means that, when clicked, the `btn-left` should change the internal status of the `chronometer`, change the text values in both buttons and change their classes to correspond with the combinations in the table above.

#### Changing buttons texts

We will be working on the `main.js` file. We need to do the following:

- When the left button is clicked while the chronometer is stopped we need to:

  - Set the `btn-left` button with the text STOP, and the class `btn stop`.
  - Set the `btn-right` button with the text SPLIT, and the class `btn split`.

- When the left button is clicked while the chronometer is running we need to:

  - Set the `btn-left` button with the text START, and the class `btn start`.
  - Set the `btn-right` button with the text RESET, and the class `btn reset`.

- In the `main.js` file, create a new instance of the `Chronometer` object.

- Create the necessary code in the `main.js` to call the Chronometer `startClick` method if the button has the `start` class, or the `stopClick` method if the button has the `stop` class applied.

#### Print our chronometer

A chronometer is worthless if it cannot display elapsed times. Create a function that receives the value for minutes and seconds, and displays them on our DOM.

Using the methods we've previously defined in `Chronometer` should make this easy!

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_1a87e0edfb6efea2ae0c77c490e8563b.png)

## Bonus Iterations

### Iteration 3: Split time

Next, we'll implement a split functionality.

For that, we need to react to clicks on our split button, by outputting the split times to `li`s and append those to the `ol` we have in our markup. The text in each list item will be the time at the moment that the button was pressed (we have a method on our Chronometer constructor that returns this 😉).

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_a5c9687f25bd710b2e7658ee6d997174.png)

### Iteration 4: Reset

No chronometer is complete without the ability to reset the time being counted. Let's add a clear feature to our chronometer, that will be triggered when the user clicks on the "RESET" button. Remember that this button is only displayed when the clock isn't running.

To do that, we should set the time on our display to "00:00", and empty out the ordered list with split times.

### Iteration 5: Milliseconds

Now, we can use our chronometer to calculate how much time we spend on each Ironhack exercise. What happens if we want to calculate our time in a race? We need to be more accurate with our chronometer. How can we be more accurate? By adding milliseconds!

Change the logic inside of your script to accurately display the number of milliseconds on the clock. Also remember to include the milliseconds on the split time entries.

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_82e9d1fd5976a3f98bb1382f2385f6a1.png)

**Happy coding!** 💙
