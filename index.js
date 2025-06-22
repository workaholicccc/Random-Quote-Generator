let button3=document.querySelector('.nw_qt') //variables
let quote=document.querySelector('.qt')
let person=document.querySelector('.nm')

const quotes=[{  //quotes
    quote:"If you want to live a happy life,tie it to a goal,not to people or things",
    person:'Albert Einstein'
}, {
    quote:"Your time is limited,so don't waste it living someone else's life",
    person:'Steve Jobs'
}, {
    quote:"Tell me and I forget.Teach me and I remember.Involve me and I learn",
    person:'Benjamin Franklin'

}, {
    quote:"The future belongs to those who believe in the beauty of their dreams",
    person:' Eleanor Roosevelt'
},{
    quote:"Don’t watch the clock; do what it does. Keep going",
    person:'Sam Levenson'
},{
    quote:"Life is what happens when you’re busy making other plans",
    person:'John Lennon'
},{
    quote:"Happiness is not something ready-made. It comes from your own actions",
    person:'Dalai Lama'
},{
    quote:"I always wanted to be somebody, but now I realize I should have been more specific",
    person:'Lily Tomlin'
},{
    quote:"The trouble with having an open mind is that people keep coming along and sticking things in it",
    person:'Terry Pratchett'
}];

button3.addEventListener('click',function(){
    let random=Math.floor(Math.random()*quotes.length)  //Math.random() will generate a random decimal no. between 0 and 1. Math.floor()-->will round the decimal
    quote.innerText=quotes[random].quote //quotes[random]-->accesses the index from random  .quote-->gets the quote
    person.innerText=quotes[random].person  //quotes[random]-->accesses the index from random   .person-->gets the person
})