"use strict";

const body = document.querySelector("body");

body.style.backgroundColor = "blue";
const title = document.createElement("h1");​
body.appendChild(title);
​
title.innerText = "DOM Manipulation";
const article = document.createElement("article");
body.appendChild(article);
const text = document.createElement("p");

text.innerText = "Hello there";

article.appendChild(text);