let btn = document.getElementById ('btn');

// Array containing quotes
var quotes = [
  {
    author: ' الفضيل بن عياض رحمه الله',
    quote: ' . ذكر الناس داء، وذكر الله شفاء',
  },
  {
    author: ' ابن القيم رحمه الله',
    quote: '  . الإستغفار وطن للخائفين و ضماد للبائسين و سعادة للتائهين و فرج للمكروبين و غفران للمذنبين',
  },
  {
    author: ' ابن تيمبه رحمه الله',
    quote: '  .أعظم الكرامة لزوم الاستقامة',
  },
  {
    author: ' ابن القيم رحمه الله',
    quote: ' . بقدر ما يصغر الذنب عندك يعظم عند الله وبقدر ما يعظم عندك يصغر عند الله ',
  },
  {
    author: ' أبو سليمان الدارانى رحمه الله',
    quote: ' . من صدق فى ترك شهوة أذهبها الله من قلبه , والله أكرم من أن يعذب قلبا بشهوة تركها له',
  },
  {
    author: 'الفضيل بن عياض رحمه الله',
    quote: ' . إنما يهابك الخلق على قدر هيبتك لله',
  },
  {
    author: '  مالك بن دينار رحمه الله',
    quote: ' . جاهدوا أهواءكم كما تجاهدون أعداءكم',
  },
  {
    author: ' الإمام أحمد بن حنبل رحمه الله',
    quote: ' . إذا أحببت أن يدوم الله لك على ما تحب فدم له على ما يحب',
  },
];

// Function to get Random Quote from the array
function getRandomQuote () {
  let randomIndex = Math.floor (Math.random () * quotes.length);
  return `${quotes[randomIndex].quote}


   ${quotes[randomIndex].author}`;
}

// Function to update the quote text
function newQuote () {
  let newQuote = getRandomQuote ();
  document.getElementById ('quote').innerText = newQuote;
}

btn.addEventListener ('click', newQuote);
newQuote ();
