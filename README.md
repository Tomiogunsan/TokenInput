<!-- Include the component in your project by importing it: -->

## A React component for entering verification/PIN codes.

```ts
import InputToken from "input-token";
```

## Props

The component accepts the following props:
`name` (string): Optional. The name attribute for the input fields. Useful for form submissions.

`onKeyDown` (function): Optional. A callback that is triggered on a keydown event in any of the input fields.

`length `(number, required): Required. The number of input fields to render.

`id` (string): Optional. The ID attribute for the input fields.

`className` (string): Optional. The className for the input fields, allowing for custom styling.

`onChange` (function): Optional. A callback that is triggered when the Enter key is pressed. It receives the concatenated value of all inputs as an argument.

## Usage

Here's an example of how to use the TokenInput component:

```ts
import InputToken from "input-token";
import "input-token/styles.css";

const MyComponent = () => {
  const handleKeyDown = (e) => {
    console.log("Key down:", e.key);
  };

  const handleSubmit = (token) => {
    console.log("Token submitted:", token);
  };

  return (
    <InputToken
      name="verificationCode"
      length={6}
      onKeyDown={handleKeyDown}
      onChange={handleSubmit}
      className="my-token-input"
    />
  );
};

export default MyComponent;
```

## How It Works

The component renders a series of input fields based on the length prop.

Focus automatically shifts to the next input when a user enters a value and to the previous input if they clear a field.

The onSubmit prop is called when the Enter key is pressed, passing the concatenated token value as a string.

The component uses React's useRef hook to manage focus and useEffect to update the input fields whenever the length prop changes.

## Styling

The TokenInput component allows custom styling through the className prop. Each input element can be styled individually or as a group using the provided class names.

## Example Styles

You can style the input fields like this:

```css
.my-input-token {
  width: 2em;
  height: 2em;
  text-align: center;
  margin: 0 0.5em;
  font-size: 1.5em;
}
```

## Notes

Ensure that the `length ` prop is set correctly according to the number of inputs you require.

The component relies on the correct implementation of focus shifting, so ensure that the input fields are rendered correctly and that no external factors interfere with the DOM structure.
