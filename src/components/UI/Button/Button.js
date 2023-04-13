import React from "react";

import styles from "./Button.module.css";
//css module would add all classes names under styles object
// and will give the classes new unique names to keep the scope local.
// both css module and styled css are to prevent class name collsion and are
// not a must

// import styled from "styled-components";
// create an html element component with global css classes but
// create unique classname to the coponent so it wouldn't mess
// up styling in case of duplicated class name

// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `; // `` is called tagged template literal, it's used to call the function by passing a string inside the template literal as argument.

// inside pass in css values without the class name idetifier.
// & is used for psedo selectors.

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
