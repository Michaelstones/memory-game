document.addEventListener("DOMContentLoaded", () => {
  const cards = [
    {
      name: "fries",
      img: "src/image/fries.png",
    },
    {
      name: "cheeseburger",
      img: "src/image/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "src/image/ice-cream.png",
    },
    {
      name: "pizza",
      img: "src/image/pizza.png",
    },
    {
      name: "milkshake",
      img: "src/image/milkshake.png",
    },
    {
      name: "hotdog",
      img: "src/image/hotdog.png",
    },
    {
      name: "fries",
      img: "src/image/fries.png",
    },
    {
      name: "cheeseburger",
      img: "src/image/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "src/image/ice-cream.png",
    },
    {
      name: "pizza",
      img: "src/image/pizza.png",
    },
    {
      name: "milkshake",
      img: "src/image/milkshake.png",
    },
    {
      name: "hotdog",
      img: "src/image/hotdog.png",
    },
  ];
  cards.sort(() => 0.5 - Math.random());
  console.log(cards);
  const grid = document.querySelector(".grid");
  let resultDisplay = document.querySelector("#result");
  let cardChosen = [];
  let cardChosenId = [];
  let cardWon = [];
  const createBoards = () => {
    for (let i = 0; i < cards.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "src/image/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  };
  function flipCard() {
    let cardID = this.getAttribute("data-id");
    cardChosen.push(cards[cardID].name);
    cardChosenId.push(cardID);
    this.setAttribute("src", cards[cardID].img);
    if (cardChosen.length === 2) {
      setTimeout(checkCardMatch, 500);
    }
    console.log(cardChosenId);
  }

  function checkCardMatch() {
    const cardImg = document.querySelectorAll("img");
    let cardIDOne = cardChosenId[0];
    let cardIDTwo = cardChosenId[1];
    if (cardIDOne === cardIDTwo) {
      alert("You have clicked the same card Twice");
      cardImg[cardIDOne].setAttribute("src", "src/image/blank.png");
      cardImg[cardIDTwo].setAttribute("src", "src/image/blank.png");
      console.log(cardImg[cardIDOne]);
    } else if (cardChosen[0] === cardChosen[1]) {
      alert("You have found a matching Card!");
      cardImg[cardIDOne].setAttribute("src", "src/image/white.png");
      cardImg[cardIDTwo].setAttribute("src", "src/image/white.png");
      cardImg[cardIDOne].removeEventListener("click", flipCard);
      cardImg[cardIDTwo].removeEventListener("click", flipCard);
      cardWon.push(cardChosen);
    } else {
      cardImg[cardIDOne].setAttribute("src", "src/image/blank.png");
      cardImg[cardIDTwo].setAttribute("src", "src/image/blank.png");
      alert("Sorry Try again.");
    }
    console.log(cardWon);
    cardChosen = [];
    cardChosenId = [];
    resultDisplay.innerHTML = " " + cardWon.length;
    if (cardWon.length === cards.length / 2) {
      resultDisplay.textContent = " Congratulations You Have Won!!!";
    }
  }
  createBoards();
});
