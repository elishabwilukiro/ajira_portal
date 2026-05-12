import { React } from 'react';

const TextAreaInput = ({label, name, rows=3, value, onChange, options = [], required = false, className = ""}) => {
  return (
    <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700'>
               {label} {required && <span className='text-red-500'>*</span>}
          </label>
          <textarea 
               name={name}
               value={value}
               onChange={onChange}
               required={required}
               rows={rows}
               className={`w-full px-4 py-3 text-gray-700 bg-white rounded-lg border border-gray-200 placeholder-gray-500 transition-all appearance-none focus:outline-none focus:right-0 focus:border-purple-500 focus:shadow-none`}>

          </textarea>
          
    </div>
  );
};

export default TextAreaInput;