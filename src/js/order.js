let minusBottle = document.querySelector("#minus-bottle");
let plusBottle = document.querySelector("#plus-bottle");
let minusEmpty = document.querySelector("#minus-empty");
let plusEmpty = document.querySelector("#plus-empty");

let bottleQuantity = document.querySelector("#bottle-quantity");
let emptyQuantity = document.querySelector("#empty-quantity");
let totalPrice = document.querySelector("#total-price");
let bottlePrice = document.querySelector("#bottle-price");
let totalBottlePrice = document.querySelector("#total-bottle-price");
let totalEmptyBottlePrice = document.querySelector("#total-empty-bottle-price");

const BOTTLE_PRICE_FOR_ONE = 95;
const BOTTLE_PRICE_FOR_TWO_FIVE = 80;
const BOTTLE_PRICE_OVER_FIVE = 75;
const EMPTY_PRICE = 140;

let orderState = {
  bottle: 0,
  empty: 0,

  removeBottle: function () {
    if (this.bottle > 0) {
      this.bottle--;
      if (this.bottle < this.empty) {
        this.empty = this.bottle;
      }
    }
  },

  addBottle: function () {
    this.bottle++;
  },

  removeEmpty: function () {
    if (this.empty > 0) {
      this.empty--;
    }
  },

  addEmpty: function () {
    if (this.empty < this.bottle) {
      this.empty++;
    }
  },

  getBottlePrice: function () {
    if (this.bottle <= 1) {
      return BOTTLE_PRICE_FOR_ONE;
    }
    if (this.bottle > 1 && this.bottle <= 5) {
      return BOTTLE_PRICE_FOR_TWO_FIVE;
    }
    return BOTTLE_PRICE_OVER_FIVE;
  },

  getTotalEmptyBottlePrice: function () {
    return (this.bottle - this.empty) * EMPTY_PRICE;
  },
  getTotalBottlePrice: function () {
    return this.bottle * this.getBottlePrice();
  },
  getTotalPrice: function () {
    return this.getTotalBottlePrice() + this.getTotalEmptyBottlePrice();
  },
};

minusBottle.addEventListener("click", () => {
  orderState.removeBottle();
  refreshUIState(orderState);
});

plusBottle.addEventListener("click", () => {
  orderState.addBottle();
  refreshUIState(orderState);
});

minusEmpty.addEventListener("click", () => {
  orderState.removeEmpty();
  refreshUIState(orderState);
});

plusEmpty.addEventListener("click", () => {
  orderState.addEmpty();
  refreshUIState(orderState);
});

const refreshUIState = (orderState) => {
  bottleQuantity.textContent = orderState.bottle;
  emptyQuantity.textContent = orderState.empty;
  bottlePrice.textContent = orderState.getBottlePrice();
  totalEmptyBottlePrice.textContent = orderState.getTotalEmptyBottlePrice();
  totalBottlePrice.textContent = orderState.getTotalBottlePrice();
  totalPrice.textContent = orderState.getTotalPrice();
};
