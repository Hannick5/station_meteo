<template>
    <div class="wrapper">
      <div class="box weather-widget">Température</div>
      <div class="box other-widget">Hygrométrie</div>
      <div class="box other-widget">Pression atmosphérique</div>
      <div class="box other-widget">Pluviométrie</div>
      <div class="box other-widget">Luminosité</div>
    </div>
  </template>
  
  <style>
  body {
    margin-left: 0px;
  }
  
  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
    background-color: #f7f7f7;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .box {
    background-color: #3a7bd5;
    color: #fff;
    border-radius: 10px;
    padding: 100px;
    font-size: 16px;
    font-weight: bold;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  </style>
  