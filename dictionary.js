const dictionary = {
  
categories: {
animals: [
{ "id": 1, "english": "Dog", "spanish": "Perro", "example": "The dog is barking." },
{ "id": 2, "english": "Cat", "spanish": "Gato", "example": "The cat is sleeping." },
{ "id": 3, "english": "Horse", "spanish": "Caballo", "example": "The horse runs fast." },
{ "id": 4, "english": "Elephant", "spanish": "Elefante", "example": "The elephant is very big." },
{ "id": 5, "english": "Lion", "spanish": "León", "example": "The lion is the king of the jungle." },
{ "id": 6, "english": "Tiger", "spanish": "Tigre", "example": "A tiger has orange fur." },
{ "id": 7, "english": "Rabbit", "spanish": "Conejo", "example": "The rabbit is eating a carrot." },
{ "id": 8, "english": "Bird", "spanish": "Pájaro", "example": "The bird is flying in the sky." },
{ "id": 9, "english": "Fish", "spanish": "Pez", "example": "The fish swims in the water." },
{ "id": 10, "english": "Monkey", "spanish": "Mono", "example": "The monkey is swinging from the tree." },
{ "id": 11, "english": "Bear", "spanish": "Oso", "example": "The bear is hibernating." },
{ "id": 12, "english": "Giraffe", "spanish": "Jirafa", "example": "The giraffe has a long neck." },
{ "id": 13, "english": "Snake", "spanish": "Serpiente", "example": "The snake is slithering on the ground." },
{ "id": 14, "english": "Wolf", "spanish": "Lobo", "example": "The wolf howls at the moon." },
{ "id": 15, "english": "Kangaroo", "spanish": "Canguro", "example": "The kangaroo jumps very high." }
],
fruits: [
{ "id": 1, "english": "Apple", "spanish": "Manzana", "example": "I eat an apple every day." },
{ "id": 2, "english": "Banana", "spanish": "Plátano", "example": "She loves eating bananas." },
{ "id": 3, "english": "Grape", "spanish": "Uva", "example": "Grapes are my favorite fruit." },
{ "id": 4, "english": "Orange", "spanish": "Naranja", "example": "I drink orange juice every morning." },
{ "id": 5, "english": "Strawberry", "spanish": "Fresa", "example": "The strawberry is sweet and juicy." },
{ "id": 6, "english": "Pineapple", "spanish": "Piña", "example": "The pineapple is very tropical." },
{ "id": 7, "english": "Lemon", "spanish": "Limón", "example": "I use lemon to make lemonade." },
{ "id": 8, "english": "Peach", "spanish": "Durazno", "example": "The peach is soft and fuzzy." },
{ "id": 9, "english": "Watermelon", "spanish": "Sandía", "example": "Watermelon is perfect for summer." },
{ "id": 10, "english": "Cherry", "spanish": "Cereza", "example": "Cherries are red and delicious." },
{ "id": 11, "english": "Mango", "spanish": "Mango", "example": "I love eating mangoes when they're ripe." },
{ "id": 12, "english": "Blueberry", "spanish": "Arándano", "example": "Blueberries are great in smoothies." },
{ "id": 13, "english": "Plum", "spanish": "Ciruela", "example": "A plum is sweet and juicy." },
{ "id": 14, "english": "Papaya", "spanish": "Papaya", "example": "Papaya is popular in tropical countries." },
{ "id": 15, "english": "Avocado", "spanish": "Aguacate", "example": "I love making guacamole with avocado." }
],
colors: [
{ "id": 1, "english": "Red", "spanish": "Rojo", "example": "The apple is red." },
{ "id": 2, "english": "Blue", "spanish": "Azul", "example": "The sky is blue." },
{ "id": 3, "english": "Green", "spanish": "Verde", "example": "The grass is green." },
{ "id": 4, "english": "Yellow", "spanish": "Amarillo", "example": "The sun is yellow." },
{ "id": 5, "english": "Black", "spanish": "Negro", "example": "The cat is black." },
{ "id": 6, "english": "White", "spanish": "Blanco", "example": "The snow is white." },
{ "id": 7, "english": "Pink", "spanish": "Rosa", "example": "She is wearing a pink dress." },
{ "id": 8, "english": "Purple", "spanish": "Morado", "example": "The grapes are purple." },
{ "id": 9, "english": "Orange", "spanish": "Naranja", "example": "The pumpkin is orange." },
{ "id": 10, "english": "Brown", "spanish": "Marrón", "example": "The dog has a brown coat." },
{ "id": 11, "english": "Gray", "spanish": "Gris", "example": "The clouds are gray." },
{ "id": 12, "english": "Gold", "spanish": "Oro", "example": "She has a gold necklace." },
{ "id": 13, "english": "Silver", "spanish": "Plata", "example": "He has a silver watch." },
{ "id": 14, "english": "Beige", "spanish": "Beige", "example": "The walls are beige." },
{ "id": 15, "english": "Turquoise", "spanish": "Turquesa", "example": "The sea is turquoise." }
],
physical_descriptions: [
{ "id": 1, "english": "Tall", "spanish": "Alto", "example": "He is tall and thin." },
{ "id": 2, "english": "Short", "spanish": "Bajo", "example": "She is short but strong." },
{ "id": 3, "english": "Slim", "spanish": "Delgado", "example": "He has a slim body." },
{ "id": 4, "english": "Chubby", "spanish": "Gordito", "example": "The baby is chubby." },
{ "id": 5, "english": "Muscular", "spanish": "Musculoso", "example": "The man is muscular." },
{ "id": 6, "english": "Curly", "spanish": "Rizado", "example": "She has curly hair." },
{ "id": 7, "english": "Straight", "spanish": "Liso", "example": "His hair is straight." },
{ "id": 8, "english": "Blond", "spanish": "Rubio", "example": "She has blond hair." },
{ "id": 9, "english": "Brunette", "spanish": "Castaño", "example": "He is a brunette." },
{ "id": 10, "english": "Bald", "spanish": "Calvo", "example": "He is bald." },
{ "id": 11, "english": "Fair-skinned", "spanish": "Piel clara", "example": "She is fair-skinned." }
],
skills: [
{ "id": 1, "english": "Read", "spanish": "Leer", "example": "She can read very well." },
{ "id": 2, "english": "Write", "spanish": "Escribir", "example": "He writes stories." },
{ "id": 3, "english": "Speak", "spanish": "Hablar", "example": "She speaks English fluently." },
{ "id": 4, "english": "Listen", "spanish": "Escuchar", "example": "He listens to music every day." },
{ "id": 5, "english": "Understand", "spanish": "Entender", "example": "She understands Spanish." }
],
verbs: [
{ "id": 1, "english": "Run", "spanish": "Correr", "example": "I run every morning." },
{ "id": 2, "english": "Jump", "spanish": "Saltar", "example": "The cat jumps high." },
{ "id": 3, "english": "Eat", "spanish": "Comer", "example": "They eat dinner together." },
{ "id": 4, "english": "Sleep", "spanish": "Dormir", "example": "She sleeps early." },
{ "id": 5, "english": "Work", "spanish": "Trabajar", "example": "He works in an office." }
]
}
}

  //selected Language
  let selectedLanguage = "en-es";

    function translateWord(word) {
      const languageMapping = {
      "en-es": { source: "english", target: "spanish" },
      "es-en": { source: "spanish", target: "english" }
      };

  const { source, target } = languageMapping[selectedLanguage];

    for (let category in dictionary.categories) {
    const wordData = dictionary.categories[category].find(
    item => item[source].toLowerCase() === word.toLowerCase()
    );
        if (wordData) {
        return {
    translation: wordData[target],
    example: wordData.example
      };
      }
      }
      return { translation: "No encontrado", example: "" };
    }

  document.querySelectorAll("input[name='language']").forEach(radio => {
  radio.addEventListener("change", (e) => {
  selectedLanguage = e.target.value;
  });
  });


  const translate_btn = document.getElementById("translate-btn") 
  translate_btn.addEventListener("click", () => {

  const inputWord = document.getElementById("word-input").value;
  const result = translateWord(inputWord);

  document.getElementById("result-translation").textContent = result.translation;
  document.getElementById("result-description").textContent = result.example;
  });

  //words
  function displayWords(category = "all") {
  const wordList = document.getElementById("word-list");
  wordList.innerHTML = ""; 0

  const categoriesToDisplay = category === "all" ? Object.keys(dictionary.categories) : [category];
  //recore el dicionario
  categoriesToDisplay.forEach(cate => { 

  //recorre el arreglo
  dictionary.categories[cate].forEach(wordData => {

    const li = document.createElement("li");

      if (selectedLanguage === "en-es") {
      li.textContent = `${wordData.english} → ${wordData.spanish}`;
      }  
      else if (selectedLanguage === "es-en") {
      li.textContent = `${wordData.spanish} → ${wordData.english}`;
      }
      //genra en forma de lista lis hijos li
      wordList.appendChild(li);
      });
      });

  }

  document.getElementById("sort-btn").addEventListener("click", () => {
  //guardamos las constantes
  const category = document.querySelector("input[name='category']:checked").value;
  const selectedLanguages = document.querySelector("input[name='language']:checked").value;

  if (selectedLanguages === "en-es") {
    if (category !== "all") {
    dictionary.categories[category].sort((a, b) => a.english.localeCompare(b.english));
    }
      else {
      for (let cate in dictionary.categories) {
      dictionary.categories[cate].sort((a, b) => a.english.localeCompare(b.english));

      }
    }
  displayWords(category);
  }

  if (selectedLanguages === "es-en"){
    if (category !== "all") {
    dictionary.categories[category].sort((a, b) => a.spanish.localeCompare(b.spanish));
      } else {
      for (let cate in dictionary.categories) {
      dictionary.categories[cate].sort((a, b) => a.spanish.localeCompare(b.spanish));
      }
  }
  displayWords(category);
  }



  });

  document.getElementById("sort-btns").addEventListener("click", () => {
  const category = document.querySelector("input[name='category']:checked").value;
  displayWords(category);
  });

  displayWords();


  document.querySelectorAll("input[name='category']").forEach(radio => {
  radio.addEventListener("change", () => {
  displayWords(radio.value);
  });
  });

  //new word

  document.getElementById("add-word-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const englishWord = document.getElementById("new-word-en").value;
  const spanishWord = document.getElementById("new-word-es").value;
  const Example = document.getElementById("new-word-description").value;
  const category = document.getElementById("new-word-category").value;
  const id = dictionary.categories[category].length + 1;

    if (englishWord && spanishWord) {
    dictionary.categories[category].push({
    id,
    english: englishWord,
    spanish: spanishWord,
    example: Example
    });

    displayWords(category);
    } else {
    alert("Por favor, complete todos los campos.");
    }
  });