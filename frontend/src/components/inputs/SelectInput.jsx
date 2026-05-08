import { React } from 'react';

const SelectInput = ({label, name, value, onChange, options = [], required = false, className = ""}) => {
  return (
    <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700'>
               {label} {required && <span className='text-red-500'>*</span>}
          </label>
          <select 
               name={name}
               value={value}
               onChange={onChange}
               required={required}
               className={`w-full px-4 py-3 text-gray-700 bg-white rounded-lg border border-gray-200 placeholder-gray-500 transition-all appearance-none focus:outline-none focus:right-0 focus:border-purple-500 focus:shadow-none`}>

          </select>
          <options value="" disabled> Select {label}</options>
          {
               options.map((opt)=>{
                    <options key={opt.value} value={opt.value}>
                         {opt.label}
                    </options>
               })
          }
    </div>
  );
};

export default SelectInput;