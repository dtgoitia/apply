// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import * as $ from "jquery";

function initListeners() {
  console.log('initListeners called');

  $("#button-id").click( () => {
      handleOsDivClick(); // call this when button is clicked
  });
}

function handleOsDivClick() {
  console.log('handleOsDivClick called');

  // call OS class static method to get the current OS type (as an example)
  // $("#os-div").text(OS.getOs());
}