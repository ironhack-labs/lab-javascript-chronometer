![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# JS | Chronometer

## Introduction

In this lesson, we are going to create a Chronometer. Chronometers are very common in a lot of sports, like car racing, athletism, etc. In this case, we are going to create a Chronometer to count how many minutes and seconds we use to do the Ironhack Exercises!

Our Chronometer will have an LCD Screen, where we will see the minutes and seconds moving forward. It will also have two different buttons, that will change their behavior depending on the status of the Chronometer. For example, the start button will become stop button when the Chronometer is running.

Last, but not least, we are going to add a Split functionality, that will be very helpful to remember how many time we spent in each iteration of the exercise. Every time we finish an iteration, we will be able to press the split button, so we will know how hard or easy it was.

![](https://media.giphy.com/media/xT8qAZcty5f0BEm2lO/giphy.gif)

### Requirements

- Use `setInterval` to update the chronometer each second.
- Use Prototypal Inheritance to create a JavaScript object that encapsulates all the `Chronometer` functionalities.

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

All the files that compose the project, including the HTML, CSS, and JavaScript.

## Instructions

Let's start working on our solution. As we have seen, we already have all the necessary HTML and CSS files of our clock.

As you can see we have tested for doing for doing our exercise. They will be testing the logic of our code, so we will start doing this, and then manipulating the DOM.

You know the process, go ahead and open the `SpecRunner.html` file on chrome to see all the tests, and start writing your code on the `javascript/chronometer.js` file.

### Iteration 1: The Logic

#### Chronometer Constructor

We need to create a Chronometer constructor that won't receive any value as arguments, but will declare two properties: `currentTime`, `intervalId`.

#### startClick()

We need to create a `startClick()` method for the Chronometer object. The `startClick()` method is pretty simple, it should start a `setInterval` that will add 1 to the `currentTime` porperty every 1 second.

The `setInterval` will be assigned to our `intervalId` property, this way we will be able to clear it later on.

#### setMinutes()

Our current time is our clock, but it only runs seconds, so we need to create a method that will return us the number of minutes that corresponds to the value we have on `currentTime`!

#### setSeconds()

As we did with the minutes, we need a method that returns the seconds that we have on the `currentTime` property after removing the minutes.

#### twoDigitsNumber()

Our chronometer has a super cool screen that needs two digits number to display minutes and seconds, but sometimes `setMinutes` and `setSeconds` returns a single digit number, so let's create a super easy function that will receive as a parameter a value and will return us the same value but 2 digits length.

**This is an awesome example of a functionality that we will need several times, so we isolate it on a function and just call every time we want**

#### setTime()

We are almost done! We need a `setTime` method that will be called on every **interval** of the `setInterval` in our `startClick` method. This function will create a `minutes` and `seconds` variable with their values according the `currentTime`. We should use the `setMinutes`, `setSeconds` and `twoDigitsNumber` methods to do this :wink:

#### stopClick()

The `stopClick` method should stop our `intervalId`, that's all, easy! 

#### resetClick()

The `resetClick` will reset our chronometer. Since our code is super clean, we just need to put our `currentTime` property to 0, and it will be done!

### Iteration 2: DOM Manipulation

Our chronometer logic is done and it works perfectly! Now we need to set the visual components of our web.

As you can see, we have two different buttons: start and clear. These are the button values when the chronometer is not running. When the chronometer is running, the start button will change its behavior to stop the chronometer, while the reset button will change to split.

Both buttons will have different behavior depending on the chronometer. These buttons are `btnLeft` and `btnRight` in our HTML. We can see the different values they will have in the following table:

| Chronometer Status | Button ID | Text | CSS Class |
|---------|-----------|------|----------|
| Stopped | `btnLeft` | START | `btn start` |
| Stopped | `btnRight` | RESET | `btn reset` |
| Running | `btnLeft` | STOP | `btn stop` |
| Running | `btnRight` | SPLIT | `btn split` |

**Note that you don't have to create any CSS class. All of them are already defined in the `starter-code` style sheet.**

In the `main.js` file you will find two click events that are already linked with both `btnLeft` and `btnRight` buttons. You have to create the necessary code to change the status of buttons.

It means that when we click in the `btnLeft`, if it has the `start` class you will have to change the `btnLeft` and `btnRight` buttons setting them up with the Running status described in the table above.

On the other hand, if the `btnLeft` doesn't have the `start` class when we click, we will have to change both `btnLeft` and `btnRight` properties setting them up with the Stopped status described in the table above.

#### Changing buttons texts

We will be working on the `main.js` file. We need to do the following: 
- When the left button is clicked while the chronometer is stopped we need to:
    - Set the `btnLeft` button with the text STOP, and the class `btn stop`.
    - Set the `btnRight` button with the text SPLIT, and the class `btn split`.

- When the left button is clicked while the chronometer is running we need to:
    - Set the `btnLeft` button with the text START, and the class `btn start`.
    - Set the `btnRight` button with the text RESET, and the class `btn reset`.

- In the `main.js` file, create a new instance of the `Chronometer` object.

- Create the necessary code in the `main.js` to call the Chronometer `startClick` method if the button has the `start` class, or the `stopClick` method if the button has the `stop` class applied.

#### Print our chronometer

Each second we need to update our screen. So go ahead and create a function that will receive the value for minutes and seconds, and print that on our HTML.

Using our `Chronometer` methods to get the values, this should be easy!

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_1a87e0edfb6efea2ae0c77c490e8563b.png)

### Iteration 3: Split time

The following feature we will implement is the split button. Remember that the split button is located in the `btnRight` button when the chronometer is running. In this iteration, we will have to create two different things: HTML & CSS, and the associated JavaScript.

#### HTML & CSS

First of all, we have to create in our `index.html` file an ordered list where we are going to append the current time every time we press the split button.

#### JavaSript

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

/Happy coding!
