const quotes = [{
    quote:'A funny way of saying that something is wrong is to quote the 1995 film Apollo 13.',
    author:'1',
},
{
    quote:'The Mandela quote continued to two more tweets, but the first one got the most attention.',
    author:'2',
},
{
    quote:" 'Direct Reported Speech' is when you quote the person's exact words using quotation marks (“ “):",
    author:'3',
},
{
    quote:'Obama used Twitter to quote former South African president Nelson Mandela after deadly violence in the American city of Charlottesville, Virginia.',
    author:'4',
},
{
    quote:'This quote, which is thought to have come from writer George Bernard Shaw, is a joke about the many differences between British and American English.',
    author:'5',
},
{
    quote:"Hunger says one of her favorite quotes is by the author Rosemary Crossley: 'Not being able to speak is not the same as not having anything to say.'",
    author:'6',
},
{
    quote:'Nakanishi was quoted as saying that he was a member of the rock climbing club in high school, so he was not afraid of being on the high roof.',
    author:'7',
},
{
    quote:'But it takes an hour and a half to commute.',
    author:'8',
},
{
    quote:'This is half an hour shorter than the 45 minutes the journey currently takes by car.',
    author:'9',
},
{
    quote:'Some critics say the two-and-a-half-hour film is too long.',
    author:'10',
},]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const randNum = Math.floor(Math.random() * quotes.length);

const todaysQuote = quotes[randNum];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;