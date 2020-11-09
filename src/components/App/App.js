import React, {Component, useState} from "react";
import './App.css';
import Project from '../Project/Project';
import Description from '../Description/Description';
export default class App extends React.Component
{
  return (
    <Project data-ns-test="project-name"><Project/>
    <Description data-ns-test="project-description"><Description/>
  );
}
