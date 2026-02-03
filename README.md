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
