/**
 * `Button` is a functional component that renders a button with custom text.
 * The button includes an `onClick` handler that can be used to handle click events.
 *
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.text - The text to display on the button.
 * @param {function} props.onClick - The function to execute when the button is clicked.
 *
 *
 *
 * // The component can be used like this:
 * <Button text="Click me" onClick={() => console.log('Button clicked')} />
 *
 * @returns {React.Element} The rendered React element.
 */

function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-custom-blue text-custom-white font-bold text-sm border-none rounded-xl px-8 py-2 shadow-md mb-[1rem] hover:bg-custom-white hover:text-custom-blue hover:border-2 hover:border-solid hover:border-custom-blue  transform sm: active:scale-95 transition-transform duration-200"
    >
      {text}
    </button>
  );
}

export default Button;
