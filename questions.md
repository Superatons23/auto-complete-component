## Part 2

**1. What is the difference between Component and PureComponent? give an
example where it might break my app.**

Both are similar but with the difference that pure component implements shouldComponentUpdate.
The app could break if you need to use an immutable object and you are working with Component.

**2. Context + ShouldComponentUpdate might be dangerous. Can think of why is
that?**

I think it breaks the communication between components because ShouldComponentUpdate cuts off a part of the component tree

**3. Describe 3 ways to pass information from a component to its PARENT.**

- Using Callbacks:  
  This method is done by passing a callback function to the child as a props.

- Use React’s Context API: This method creates global variables and those variables can be passed between components

- Redux: This method is about a library and is used to manage the state of applications.

**4. Give 2 ways to prevent components from re-rendering.**

- using useMemo()
- using useCallback()

**5. What is a fragment and why do we need it? Give an example where it might
break my app.**

Fragments are used in react.js and help us to create many components without needing to find the DOM.

example where it break my app.

![alt text](https://media.discordapp.net/attachments/952967166385356810/1034254882422652928/unknown.png)

example using React.Fragment

![alt text](https://cdn.discordapp.com/attachments/952967166385356810/1034254749530333284/unknown.png)

**6. Give 3 examples of the HOC pattern.**

**7. what's the difference in handling exceptions in promises, callbacks and
async...await.**

- Promises: If our answer is successful we use the then and if it is not successful we use the catch.

- Async/Await: The error handling of this method is the same as promises, the difference is that it is asynchronous.

**8. How many arguments does setState take and why is it async.**

This method takes two arguments. setState consumes a lot of resources that is why it is asynchronous, if it were synchronous it could stop the browser

**9. List the steps needed to migrate a Class to Function Component.**

1. Change the class.
2. Remove the render.
3. Convert all methods to arrow functions.
4. Remove constructors.
5. Change the this.setState to useState.
6. Replace deprecated methods like ComponentDidMount .to methods with hooks.

**10. List a few ways styles can be used with components.**

- CSS Modules.
- Styled-components.
- CSS Stylesheet.

**11. How to render an HTML string coming from the server.**

Example:

![alt text](https://media.discordapp.net/attachments/952967166385356810/1034254517400764497/unknown.png)
