# Form Component

Live Link: [Form Component](https://form-component-avi.netlify.app/)

This project contains a customizable form component built with React. It renders a form based on a JSON configuration, supporting various input fields and validation.

## Features

- Render a form dynamically from a JSON configuration.
- Support for text, password, select (dropdown single and multiple select), radio, checkbox, and file - upload fields.
- Field validation using regex patterns.
- Built with Formik for form management.

## Usage

1. Clone the repository.

```bash
git clone
```

2. Install the dependencies.

```bash
npm install
```

3. Start the development server.

```bash
npm start
```

4. Open the browser and navigate to `http://localhost:3000/`.

## Configuration

The form configuration is defined in the `form.json` file. The configuration is an array of objects, where each object represents a form field. The following properties are supported:

- `name`: The name of the field.
- `label`: The label of the field.
- `type`: The type of the field. Supported types are `text`, `password`, `select`, `radio`, `checkbox`, and `file`.
- `options`: An array of options for the `select`, `radio`, and `checkbox` fields.
- `validation`: A regex pattern for field validation.

## Example

The following is an example of a form configuration:

```json
[
  {
    "name": "name",
    "label": "Name",
    "type": "text",
    "validation": "^[a-zA-Z ]+$"
  },
  {
    "name": "email",
    "label": "Email",
    "type": "text",
    "validation": "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
  },
```
