import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Label = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) =>
    props.varient !== 'md'
      ? props.varient === 'sm'
        ? '13px'
        : '18px'
      : `15px`};
  line-height: 121%;
  color: rgba(255, 255, 255, 0.76);
`;
const Input = styled.input`
  background: ${(props) =>
    props.lock ? 'rgba(0, 0, 0, 0.56)' : 'rgba(255, 255, 255, 0.16)'};
  border-radius: 11px;
  padding: ${(props) => (props.icon ? `10px 20px 10px 40px` : `10px 20px`)};
  color: white;
  outline: none;
  font-size: ${(props) =>
    props.varient !== 'md'
      ? props.varient === 'sm'
        ? '13px'
        : '18px'
      : `15px`};
  margin-top: 13px;
  border: 1px solid #ffffff29;
  ::placeholder {
    color: rgba(255, 255, 255, 0.38);
  }
`;
const Area = styled.textarea`
  background: rgba(255, 255, 255, 0.16);
  border-radius: 11px;
  padding: 20px 20px;
  color: white;
  outline: none;
  font-size: ${(props) =>
    props.varient !== 'md'
      ? props.varient === 'sm'
        ? '13px'
        : '18px'
      : `15px`};
  margin-top: 13px;
  border: 1px solid #ffffff29;
  ::placeholder {
    color: rgba(255, 255, 255, 0.38);
  }
`;
function setter(state, target) {
  state(target);
}
function objsetter(initial, state, target, key) {
  state((initial) => ({
    ...initial,
    [key]: target,
  }));
}

const DynamicInputManager = ({
  htmlId,
  label,
  isRequired,
  placeholder,
  states,
  multiline,
  varient = 'md',
  icon,
  type,
  lock,
  onKeyDown,
  max,
}) => {
  return (
    <div className='myzer-form-page-field w-full flex flex-col px-5 pb-5'>
      <Label htmlFor={htmlId}>
        {label} {isRequired ? <span className='text-red-600'>*</span> : null}
      </Label>
      {multiline ? (
        <Area
          icon={icon}
          varient={varient}
          required={isRequired ? true : false}
          rows='3'
          onChange={(e) => {
            states.length > 2
              ? objsetter(states[0], states[1], e.target.value, states[2])
              : setter(states[1], e.target.value);
          }}
          type='text'
          placeholder={placeholder}
          name={htmlId}
          id={htmlId}
          value={states[0]}
        />
      ) : lock ? (
        <Input
          icon={icon}
          varient={varient}
          required={isRequired ? true : false}
          onChange={(e) => {
            states.length > 2
              ? objsetter(states[0], states[1], e.target.value, states[2])
              : setter(states[1], e.target.value);
          }}
          type={type}
          placeholder={placeholder}
          name={htmlId}
          id={htmlId}
          value={states[0]}
          max={max}
          disabled
        />
      ) : (
        <Input
          icon={icon}
          varient={varient}
          required={isRequired ? true : false}
          onChange={(e) => {
            states.length > 2
              ? objsetter(states[0], states[1], e.target.value, states[2])
              : setter(states[1], e.target.value);
          }}
          type={type}
          placeholder={placeholder}
          name={htmlId}
          id={htmlId}
          value={states[0]}
          onKeyDown={onKeyDown}
          max={max}
        />
      )}
    </div>
  );
};

DynamicInputManager.propTypes = {
  label: PropTypes.string.isRequired,
  htmlId: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  isrequired: PropTypes.bool,
};

export default DynamicInputManager;

// varient can be sm, md(default), lg can be passed with prop

// for single object writing you have to pass multiple prop values in state prop. Syntax is
// ->  states={[LOCATION IN OBJECT (OBJ.KEY), SETSTATE, "KEY(AS STRING)"]}

// for regular fields state should have only 2 values syntax is
// states={[state, setState]}

//isRequired is used for set Required True and False

// htmlId is used is name and Id for Fields

// Label is Label text for the feild

// placeholder is used to add placeholder text

// multiline is bool type it converts regular input to text area

// icon can be the component or svg or fontawesome class for icon
