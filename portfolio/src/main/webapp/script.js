
// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/**
 * Fetches a random quote from the server and adds it to the DOM.
 */
function getDataServlet() {
  console.log('Fetching a Hello Chanel.');

  const responsePromise = fetch('/data');

  responsePromise.then(handleResponse);
}

function handleResponse(response) {
  console.log('Handling the response.');

  const textPromise = response.text();

  textPromise.then(addDataServletToDom);
}

function addDataServletToDom(texts) {
  console.log('Adding quote to dom: ' + texts);

  const textsContainer = document.getElementById('dataServlet-container');
  textsContainer.innerHTML= texts;
}


function getTextUsingArrowFunctions() {
  fetch('/data').then(response => response.text()).then((texts) => {
    document.getElementById('dataServlet-container').innerHTML = texts;
  });
}


async function getTextUsingAsyncAwait() {
  const response = await fetch('/data');
  const texts = await response.text();
  document.getElementById('dataServlet-container').innerHTML = texts;
}

async function getList() {

const response = await fetch('/data');
const comments = await response.json();
const commentList = document.getElementById("dataServlet-container");
commentList.innerHTML = '';
comments.forEach((line) => {
    console.log(line);
    commentList.appendChild(createListElement(line));

});
}

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}
