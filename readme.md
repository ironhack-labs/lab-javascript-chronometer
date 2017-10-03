![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# JS | Chronometer

## Introduction

In this lesson, we are going to create a Chronometer. Chronometers are very common in a lot of sports, like car racing, athletism, etc. In this case, we are going to create a Chronometer to count how many minutes and seconds we use to do the Ironhack Exercises!

Our Chronometer will have an LCD Screen, where we will see the minutes and seconds moving forward. It will also have two different buttons, that will change their behaviour depending on the status of the Chronometer. For example, the start button will become stop button when the Chronometer is running.

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
├── fonts
│   └── ds-digib.ttf
├── index.html
├── main.js
└── styles.css
```

The style sheet has already the `ds-digib` font inserted. This font helps us to have a classic LCD screen, to achieve the styles of the classic chronometers.

We have also created the clock to let you focus on the JavaScript. If you open the `index.html` file, you will see something like this:

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_db7f06db5a8f3c0b1a8432e1bdb34262.png)

### Deliverables

All the files that compose the project, including the HTML, CSS, and JavaScript.

## Instructions

Let's start working on our solution. As we have seen, we already have all the necessary HTML and CSS files of our clock.

As you can see, we have two different buttons: start and clear. These are the button values when the chronometer is not running. When the chronometer is running, the start button will change its behaviour to stop the chronometer, while the reset button will change to split.

First of all, we are going to create the visual interaction, and then we will continue with the behaviour of our chronometer.

### Iteration 1: Visual interaction

As we said, we have two buttons that will have different behaviour depending on the chronometer. These buttons are `btnLeft` and `btnRight` in our HTML. We can see the different values they will have in the following table:

| Chronometer Status | Button ID | Text | CSS Clas |
|---------|-----------|------|----------|
| Stopped | `btnLeft` | START | `btn start` |
| Stopped | `btnRight` | RESET | `btn reset` |
| Running | `btnLeft` | STOP | `btn stop` |
| Running | `btnRight` | SPLIT | `btn split` |

**Note that you don't have to create any CSS class. All of them are already defined in the `starter-code` style sheet.**

In the `main.js` file you will find two click events that are already linked with both `btnLeft` and `btnRight` buttons. You have to create the necessary code to change the status between buttons.

It means that when we click in the `btnLeft`, if it has the `start` class you will have to change the `btnLeft` and `btnRight` buttons setting them up with the Running status described in the table above.

On the other hand, if the `btnLeft` doesn't have the `start` class when we click, we will have to change both `btnLeft` and `btnRight` properties setting them up with the Stopped status described in the table above.

**Important**

Our chronometer will have a bunch of functionalities that will be using its properties and values. You have to create a `Chronometer` object and add all the necessary methods through Prototypal Inheritance.

#### Tasks

- Create a new `chronometer.js` file (remember to include it into the `index.html` file) that will contain our `Chronometer` object with the following methods:
  - `startClick`, that will be triggered when the left button is clicked while the chronometer is stopped. In this iteration, this methods has to:
    - Set the `btnLeft` button with the text STOP, and the class `btn stop`.
    - Set the `btnRight` button with the text SPLIT, and the class `btn split`.
  - `stopClick`, that will be triggered when the left button is clicked while the chronometer is running. In this iteration, this method has to:
    - Set the `btnLeft` button with the text START, and the class `btn start`.
    - Set the `btnRight` button with the text RESET, and the class `btn reset`.
- In the `main.js` file, create a new instance of the `Chronometer` object.
- Create the necessary code in the `main.js` to call the Chronometer `startClick` method if the button has the `start` class, or the `stopClick` method if the button has the `stop` class applied.

### Iteration 2: Time start/stop

The following step consits in create the chronometer timer. So we are going to need to create the functionality to start and stop the time. We will also need to create all the necessary code to show the progress on the clock screen.

We have already created the events that are triggered when we click on the start/stop button. In the same methods, we will need to add the chronometer start/stop behaviour.

**How does a chronometer work?** There are two different ways to create a chronometer:

- The first way is to get the current [Date](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date) when you click on the start button, and each second calculate the difference between the initial time and the current time.
- The second way is to create a counter and each second increment this counter by one.

Whichever method you use, you will need a `setInterval` method that will be executed each second. In the callback function of the `setInterval`, you will need to update the time value in the clock screen.

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_1a87e0edfb6efea2ae0c77c490e8563b.png)

#### Tasks

- Create the necessary properties to store the current chronometer value, depending on the way you want to implement it.
- When the `startClick` method is called, start counting:
  - Create a `setInterval` method to update the clock screen and the chronometer timer.
  - Save the `setInterval` id in a variable to be able to stop the interval.
- When the `stopClick` method is called, stop counting:
  - Call the `clearInterval` method with the `setInterval` id to stop the chronometer.

**Remember that all these functionalities should be in the `Chronometer` object :)**

### Iteration 3: Split time

The following feature we will implement is the split button. Remember that the split button is located in the `btnRight` button when the chronometer is running. In this iteration we will have to create two different things: HTML & CSS, and the associated JavaScript.

#### HTML & CSS

First of all, we have to create in our `index.html` file an ordered list where we are going to append the current time every time we press the split button. Once you have added the ordered list, you can style it in the `styles.css` file.

#### JavaSript

Once we have created the ordered list in our HTML, we have to create the button functionality. Every time we click on the split button, we will have to create a new `<li>` element and append it to the ordered list. The text of this element will be the current time of the chronometer.

Remember that we are using the `Chronometer` object, so you will have to create a new method on it to be able to handle the split behaviour.

#### Tasks

- Create an ordered list `<ol>` in the HTML, and style it through the `styles.css` file.
- Create the code that will handle the split feature on the `btnRight` button of our clock. The split will have to:
  - Capture the Chronometer time.
  - Create a new `<li>` element, setting as the text the current time.
  - Append this new `<li>` element to the ordered list we created in the HTML.

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_a5c9687f25bd710b2e7658ee6d997174.png)

### Iteration 4: Reset

To finish up with this lesson, we are going to create the clear feature. Remember we will execute this when the chronometer is stopped and the user clicks on the right button. The behaviour here is very simple: we have to clear all the data of the clock.

To do that, we will have to set the minutes and seconds to zero in our clock, and remove all the `<li>` elements that we could have in the list we created in the previous iteration. We will also have to clear the counter that we have in the `Chronometer` class that helps us to count how many time has been the chronometer running.

#### Tasks

- Create the code that will handle the reset feature on the `btnRight` button of our clock. This code will be executed when the chronometer is stopped. It will have to:
  - Clear the `Chronometer` attribute that controls the time that it has been running.
  - Remove all the `<li>` elements from the Split list.
  - Set up the clock time to 00:00.

### BONUS Iteration: Milliseconds

Now, we can use our chronometer to calculate how many time we spend on each Ironhack exercise. What happens if we want to calculate our time in a race? We need to be more accurate with our chronometer. How can we be more accurate? By adding milliseconds!

If we want to add milliseconds to the chronometer, we will have to manipulate the HTML, the CSS, and the JavaScript. In the HTML we will have to a container to show the milliseconds, changing the style of this container. Finally, in the JavaScript we will have to add all the logic to show the milliseconds in clock. You will also have to add these milliseconds in the split counter.

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_82e9d1fd5976a3f98bb1382f2385f6a1.png)

#### Tasks

- Add the necessary HTML to show the milliseconds in the clock.
- Add the necessary styles in the CSS to show the milliseconds as you like.
- Create the JavaScript logic to:
  - Be able to count the milliseconds.
  - Show the milliseconds going forward.
  - Show the milliseconds when you capture an split time.
  - Clear the milliseconds when the Reset button is clicked.

/Happy coding!
