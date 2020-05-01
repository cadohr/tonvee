import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import propTypes from 'prop-types';
import { Input, Error } from './styles';

export default function SimpleInput({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return (
    <>
      <Input
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && <Error className="error">{error}</Error>}
    </>
  );
}

SimpleInput.propTypes = {
  name: propTypes.string.isRequired,
};
