# Answers

1.  What is React JS and what problems does it try and solve?

    ReactJS is a JS library built by developers at Facebook and designed for the purpose of building large-scale web applications that 
    are made up of UI elements that take in and are dependent on frequent user input. In order to help the DOM manage
    the ever-changing state of elements, ReactJS offloads a lot of that state into a virtual DOM comprised of Components
    that we as developers can manipulate more easily and quickly than we could otherwise. 

1.  What does it mean to _think_ in react?

    Thinking in React means thinking of our web application in terms of the repeated elements, or Components, that it is comprised of.
    Components are relatively small, encapsulated pieces of UI each with their own functionality and styling that can 'react' to 
    user input via state, passed down through an object called props. On a large scale, thinking in React means thinking in terms
    of Component trees, or how state and props get passed down and handled from Parent Components to Child Components.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

    The first immediate difference is the syntax used by Class and Functional components; functional components are just 
    vanilla javascript functions which can take in properties, or props, as an argument, and return a JSX React element. Class
    components go one step further and extend React.Component, and rather than returning something, they need to use the render()
    function before being able to return any React elements. Without extending the React.Component class, functional components
    have no way to manage state(specifically, they are unable to use setState() and therefore unable to re-render the page when 
    there is a change in state). Unlike Class components, the only way functional components can access the state is via props
    passed down from a parent, Stateful component. 

1.  Describe state.

    State is synonymous with data. Specifically, it's data that your component wants to keep track of for when a user will interact with the page
    and wishgit a to create an element with new data, read new data, do something which may update or change existing data, or remove/destroy existing data
    on the page. State is what allows us to persistently keep track of data across our application, and more specifically, what allows our Components
    to keep track of data, so that when the data changes, we can quickly update and re-render our application to reflect those changes. Unlike props,
    state is mutable, meaning it can be changed in almost any way the developer can think of. 

1.  Describe props.

    Props is an immutable, or unchangeable object that allows developers to pass an arbitrary amount of information, typically state-based information, 
    from a parent component to a Child component, and then from that Child Component to a Grandchild component, and so on. When I'm actually coding,
    I think of it as a variable that can travel between Components/files.
