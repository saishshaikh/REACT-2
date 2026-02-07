# REACT-2
REACT-2
 
 ################ PROPS ############################
 
 1)What are props?
Props are used to pass data from parent component to child component in React.

 2)Props vs State
Props:
• Passed from parent
• Read-only
• Used for component communication

State:
• Managed inside component
• Can change
• Used for internal data

 3)Are props mutable?
 No, props are immutable (cannot be changed by child component).

3) What is prop drilling?
Prop drilling is passing props through multiple nested components just to reach a deeply nested child.

 4)Passing function as props
Yes  Functions can be passed as props to handle events and allow child-to-parent communication.

###################### UseState ##############################

Q1. What is useState?
Answer: A React Hook to store and change data in a function component.

Q2. Why do we use useState?
Answer: To keep values that can change and update the UI automatically.

Q3. How many things does useState give?
Answer: Two things – current value and function to change it.

Q4. Can useState store arrays and objects?
Answer: Yes, it can store numbers, text, arrays, objects, and true/false.

Q5. What happens when we update state?
Answer: The component re-renders and shows the new value.

Q6. Can we change state directly?
Answer: No, we must use the function given by useState.

Q7. Can we use many useState in one component?
Answer: Yes, we can use as many as we need.

Q8. Where should we write useState in a component?
Answer: At the top of the component, not inside loops or if statements.

Q9. Is useState synchronous or asynchronous?
Answer: It works asynchronously; updates may not happen instantly.

Q10. Is useState only for function or class components?
Answer: Only for function components.



<<<<<<< HEAD
   ################  UseEffect  ###########################
=======
########################  UseEffect  ###########################
>>>>>>> 9e24f696722e320414b6dfe788a64f98aee29f38



Q1. What is useEffect?
It is a React hook used to handle side effects like API calls, timers, and DOM updates.

Q2. When does useEffect run?
It runs after the component renders.

Q3. What is dependency array?
It controls when the effect should run.

Q4. What happens if dependency array is empty []?
The effect runs only once when component loads.

Q5. What if dependency array is not provided?
The effect runs after every render.

Q6. Can we update state inside useEffect?
Yes, but it can cause infinite loop if not handled properly.

Q7. What is cleanup function?
A function returned inside useEffect to remove side effects.

Q8. When does cleanup function run?
When component unmounts or before effect runs again.

Q9. Can we use multiple useEffect hooks?
Yes, we can use multiple useEffect in one component.

Q10. Why do we use useEffect?
To handle side effects in React functional components.

Q11. Where should API calls be made in React?
Inside useEffect.

Q12. Why does infinite loop happen in useEffect?
When we update the same state that is in dependency array.


###################### Router #################

1. What is React Router?

React Router is used to move between pages in a React app without reloading the page.


2. Why do we use React Router?

We use React Router to create single page applications and handle navigation on the client side.


3. What is the difference between Link and <a> tag?
Link changes the route without page reload, but <a> reloads the whole page.

4. What is <BrowserRouter>?
BrowserRouter is used to wrap the app and it uses normal URLs like /login.


5. What are <Routes> and <Route>?

They are used to define which component will load for a specific URL.


6. What is useNavigate()?

useNavigate() is used to redirect the user to another page using JavaScript.


7. What is useParams()?

useParams() is used to get values from the URL.

Example: /user/5


8. What is a Private Route?

A private route allows only logged-in users to access a page.


9. What is Nested Routing?

Nested routing means routes inside another route.


10. What is <Outlet>?

Outlet is used to show the child route component inside the parent component.