document.addEventListener('DOMContentLoaded', function () {
   const display = document.querySelector('.display');
   const buttons = document.querySelectorAll('button');

   buttons.forEach(button => {
       button.addEventListener('click', () => {
           const value = button.getAttribute('data-value');

           if (value === 'AC') {
               display.value = ''; // Clear the display
           } else if (value === 'DEL') {
               display.value = display.value.slice(0, -1); // Delete the last character
           } else if (value === '=') {
               try {
                   display.value = eval(display.value); // Evaluate the expression
               } catch (error) {
                   display.value = 'Error'; // Handle errors gracefully
               }
           } else {
               display.value += value; // Append button value to the display
           }
       });
   });
});
