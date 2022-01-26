# React Modal Library

A simple modal component for React application.</br>

## NPM publication
[You can see npm publication here](https://www.npmjs.com/package/react_modal_library)

## Installation
You can install [react_modal_library](https://www.npmjs.com/package/react_modal_library) with **npm** command : </br>
`npm install react_modal_library`
</br></br>
or with **yarn** command : </br>
`yarn add react_modal_library`

## Use react_modal_library
1. Import Modal component to your file : </br>
`import { Modal } from 'react_modal_library'`

2. Insert Modal component at rendering (example) : </br>

```js
import { Modal } from 'react_modal_library';

const Form = () => {

  const [ isOpen, setIsOpen ] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    openModal();
   };

  return (
    <div className='Form'>
      <form method='post'>
        <div>
          <label htmlFor='firstName'>First Name</label>
          <input aria-required="true" type='text' id='firstName' name='firstName' onChange={(e) => setFirstname(e.target.value)} required value={firstname} />
        </div>
      </form>
      <button type='submit' id='saveButton' onClick={(e) => handleSubmit(e)}>Save</button>
      {isOpen && <Modal text='Employee created' close={closeModal} />}
    </div>
  );
}

export default Form;
 ```
  
  3. Pass props `text` and `close` to Modal component.

## Props expected
* `text` contains text to display in Modal component </br>
* `close` contains function that returns false

## Demo
<img width="399" alt="image" src="https://user-images.githubusercontent.com/77681395/151153553-a86b9b78-22bb-4fd4-86d5-4f5a1a7ddc12.png">
