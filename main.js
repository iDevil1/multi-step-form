let stepNumbers = document.querySelectorAll(".step-number");

let form = document.querySelector("form");
let formInputs = document.querySelectorAll("form input");
let formSpans = document.querySelectorAll("form span");
let invalidInputs = document.getElementsByClassName("info-input invalid");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let phoneInput = document.getElementById("phone");

let mainSteps = document.querySelectorAll(".main");
let nextSteps = document.querySelectorAll(".next-step");
let nextBtns = document.querySelectorAll(".next");
let backSteps = document.querySelectorAll(".back");

let options = document.querySelectorAll(".option");
let optionPrices = document.querySelectorAll(".option .price");
let twoMonthsFree = document.querySelectorAll(".option .two-months-free");
let orInput = document.querySelector(".or");
let monthly = document.querySelector(".monthly");
let yearly = document.querySelector(".yearly");

let main2Footer = document.querySelector(".main2 .footer");

let addOns = document.querySelectorAll(".add-on");

let planTypeOption = document.querySelector(".plan-type-option");

let planBillingOption = document.querySelector(".plan-billing-option");

let planPrice = document.querySelector(".plan-price");

let activeOption = document.getElementsByClassName("option active");

let addOnPrices = document.querySelectorAll(".add-on-price");

let subAddOn = document.querySelectorAll(".sub-add-on");

let subAddOnPrices = document.querySelectorAll(".sub-add-on-price");

let activeAddOn = document.getElementsByClassName("add-on active");

let totalPrice = document.querySelector(".total-price");

let change = document.querySelector(".change");

let confirmBtn = document.querySelector(".confirm");

let index1 = 0;
let index2 = 0;

let numberArray = [];

let fixedNumberArray = [];

let uniqueArray = [];

let ifTrueorFalse = true;

let emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let phoneRegex =
  /^[\+]?([0-9][\s]?|[0-9]?)([(][0-9]{3}[)][\s]?|[0-9]{3}[-\s\.]?)[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

let nameRegex = /^[a-zA-Z0-9_]{2,20}[a-zA-Z]+[0-9]*$/;

let numberRegex = /\d+/;

form.onsubmit = (e) => {
  e.preventDefault();
};

for (let i = 0; i < formInputs.length; i++) {
  form[i].addEventListener("focusout", (e) => {
    e.target.value == ""
      ? e.target.classList.add("invalid")
      : e.target.classList.remove("invalid");

    if (e.target.classList.contains("name")) {
      !nameRegex.test(nameInput.value)
        ? nameInput.classList.add("invalid")
        : nameInput.classList.remove("invalid");
    }

    if (e.target.classList.contains("email")) {
      !emailRegex.test(emailInput.value)
        ? emailInput.classList.add("invalid")
        : emailInput.classList.remove("invalid");
    }

    if (e.target.classList.contains("phone")) {
      !phoneRegex.test(phoneInput.value)
        ? phoneInput.classList.add("invalid")
        : phoneInput.classList.remove("invalid");
    }

    for (let i = 0; i < invalidInputs.length; i++) {
      invalidInputs[i].parentElement.children[0].children[1].innerText =
        "This field is required";
    }

    let validInputs = document.querySelectorAll(
      "form input:not(.info-input.invalid)"
    );
    validInputs.forEach((item) => {
      item.parentElement.children[0].children[1].innerText = "";
    });
  });

  form[i].addEventListener("input", (e) => {
    e.target.value == ""
      ? e.target.classList.add("invalid")
      : e.target.classList.remove("invalid");

    if (e.target.classList.contains("name")) {
      !nameRegex.test(nameInput.value)
        ? nameInput.classList.add("invalid")
        : nameInput.classList.remove("invalid");
    }

    if (e.target.classList.contains("email")) {
      !emailRegex.test(emailInput.value)
        ? emailInput.classList.add("invalid")
        : emailInput.classList.remove("invalid");
    }

    if (e.target.classList.contains("phone")) {
      !phoneRegex.test(phoneInput.value)
        ? phoneInput.classList.add("invalid")
        : phoneInput.classList.remove("invalid");
    }

    for (let i = 0; i < invalidInputs.length; i++) {
      invalidInputs[i].parentElement.children[0].children[1].innerText =
        "This field is required";
    }

    let validInputs = document.querySelectorAll(
      "form input:not(.info-input.invalid)"
    );
    validInputs.forEach((item) => {
      item.parentElement.children[0].children[1].innerText = "";
    });
  });
}

function optionsOnClick(option, calculation) {
  totalPrice.setAttribute(
    "data-price",
    activeOption[0].children[1].children[1].innerText.match(numberRegex)[0]
  );
  option.onfocus = () => {
    options.forEach((option) => {
      option.classList.remove("active");
    });
    option.classList.add("active");

    // the activeOption is an option elemnt that has the active class and we are targeting the title elemnt inside of it, This is the only way to do it.

    planTypeOption.innerText =
      activeOption[0].children[1].children[0].innerText;

    planPrice.innerText = activeOption[0].children[1].children[1].innerText;

    totalPrice.children[0].innerText =
      activeOption[0].children[1].children[1].innerText.match(numberRegex)[0];

    totalPrice.setAttribute(
      "data-price",
      activeOption[0].children[1].children[1].innerText.match(numberRegex)[0]
    );
    calculation();
  };
  option.onclick = () => {
    options.forEach((option) => {
      option.classList.remove("active");
    });
    option.classList.add("active");

    // the activeOption is an option elemnt that has the active class and we are targeting the title elemnt inside of it, This is the only way to do it.

    planTypeOption.innerText =
      activeOption[0].children[1].children[0].innerText;

    planPrice.innerText = activeOption[0].children[1].children[1].innerText;

    totalPrice.children[0].innerText =
      activeOption[0].children[1].children[1].innerText.match(numberRegex)[0];

    totalPrice.setAttribute(
      "data-price",
      activeOption[0].children[1].children[1].innerText.match(numberRegex)[0]
    );
    calculation();
  };
}

options.forEach((option) => {
  optionsOnClick(option);
});

function monthlyButton(e) {
  e.target.classList.add("active");
  yearly.classList.remove("active");
  orInput.checked = false;

  optionPrices.forEach((price) => {
    price.innerText = price.getAttribute("data-monthly");
  });

  addOnPrices.forEach((price) => {
    price.innerText = price.getAttribute("data-monthly");
  });

  subAddOnPrices.forEach((subPrice) => {
    subPrice.innerText = subPrice.getAttribute("data-monthly");
  });

  twoMonthsFree.forEach((item) => {
    item.classList.remove("visible");
  });

  planBillingOption.innerText = planBillingOption.getAttribute("data-monthly");

  planPrice.innerText = activeOption[0].children[1].children[1].innerText;
  totalPrice.children[0].innerText =
    activeOption[0].children[1].children[1].innerText.match(numberRegex)[0];
  totalPrice.children[1].innerText = "/mo";

  document.querySelectorAll(".main2 img").forEach((img) => {
    img.style.width = "4.5rem";
  });
  document.querySelectorAll(".main2 .title").forEach((title) => {
    title.style.fontSize = "1.85rem";
  });
  document.querySelectorAll(".main2 .price").forEach((price) => {
    price.style.fontSize = "1.6rem";
  });
}

monthly.onclick = (e) => {
  monthlyButton(e);
};

function yearlyButton(e) {
  e.target.classList.add("active");
  monthly.classList.remove("active");
  orInput.checked = true;
  optionPrices.forEach((price) => {
    price.innerText = price.getAttribute("data-yearly");
  });
  addOnPrices.forEach((price) => {
    price.innerText = price.getAttribute("data-yearly");
  });
  subAddOnPrices.forEach((subPrice) => {
    subPrice.innerText = subPrice.getAttribute("data-yearly");
  });
  twoMonthsFree.forEach((item) => {
    item.classList.add("visible");
  });
  planBillingOption.innerText = planBillingOption.getAttribute("data-yearly");
  planPrice.innerText = activeOption[0].children[1].children[1].innerText;
  totalPrice.children[0].innerText =
    activeOption[0].children[1].children[1].innerText.match(numberRegex)[0];
  totalPrice.children[1].innerText = "/yr";

  document.querySelector(".main2 .main-description").style.fontSize = "1.85rem";
  document.querySelectorAll(".main2 img").forEach((img) => {
    img.style.width = "4.2rem";
  });
  document.querySelectorAll(".main2 .title").forEach((title) => {
    title.style.fontSize = "1.8rem";
  });
  document.querySelectorAll(".main2 .price").forEach((price) => {
    price.style.fontSize = "1.55rem";
  });
}

yearly.onclick = (e) => {
  yearlyButton(e);
};

function changeButton() {
  if (orInput.checked == false) {
    yearly.classList.add("active");
    monthly.classList.remove("active");
    orInput.checked = true;
    optionPrices.forEach((price) => {
      price.innerText = price.getAttribute("data-yearly");
    });
    addOnPrices.forEach((price) => {
      price.innerText = price.getAttribute("data-yearly");
    });
    subAddOnPrices.forEach((subPrice) => {
      subPrice.innerText = subPrice.getAttribute("data-yearly");
    });
    twoMonthsFree.forEach((item) => {
      item.classList.add("visible");
    });
    planBillingOption.innerText = planBillingOption.getAttribute("data-yearly");
    planPrice.innerText = activeOption[0].children[1].children[1].innerText;
    totalPrice.children[0].innerText =
      activeOption[0].children[1].children[1].innerText.match(numberRegex)[0];
    totalPrice.children[1].innerText = "/yr";

    document.querySelector(".main2 .main-description").style.fontSize =
      "1.85rem";
    document.querySelectorAll(".main2 img").forEach((img) => {
      img.style.width = "4.2rem";
    });
    document.querySelectorAll(".main2 .title").forEach((title) => {
      title.style.fontSize = "1.8rem";
    });
    document.querySelectorAll(".main2 .price").forEach((price) => {
      price.style.fontSize = "1.55rem";
    });
  } else {
    monthly.classList.add("active");
    yearly.classList.remove("active");
    orInput.checked = false;
    optionPrices.forEach((price) => {
      price.innerText = price.getAttribute("data-monthly");
    });
    addOnPrices.forEach((price) => {
      price.innerText = price.getAttribute("data-monthly");
    });
    subAddOnPrices.forEach((subPrice) => {
      subPrice.innerText = subPrice.getAttribute("data-monthly");
    });
    twoMonthsFree.forEach((item) => {
      item.classList.remove("visible");
    });
    planBillingOption.innerText =
      planBillingOption.getAttribute("data-monthly");
    planPrice.innerText = activeOption[0].children[1].children[1].innerText;
    totalPrice.children[0].innerText =
      activeOption[0].children[1].children[1].innerText.match(numberRegex)[0];
    totalPrice.children[1].innerText = "/mo";
    document.querySelectorAll(".main2 img").forEach((img) => {
      img.style.width = "4.5rem";
    });
    document.querySelectorAll(".main2 .title").forEach((title) => {
      title.style.fontSize = "1.85rem";
    });
    document.querySelectorAll(".main2 .price").forEach((price) => {
      price.style.fontSize = "1.6rem";
    });
  }
}

change.onclick = () => {
  changeButton();
};

function inputTrueOrFalse() {
  if (orInput.checked == true) {
    yearly.classList.add("active");
    monthly.classList.remove("active");
    optionPrices.forEach((price) => {
      price.innerText = price.getAttribute("data-yearly");
    });
    addOnPrices.forEach((price, index) => {
      price.innerText = price.getAttribute("data-yearly");
    });
    subAddOnPrices.forEach((subPrice) => {
      subPrice.innerText = subPrice.getAttribute("data-yearly");
    });
    twoMonthsFree.forEach((item) => {
      item.classList.add("visible");
      if (item.classList.contains("visible")) {
        main2Footer.style.marginTop = "11rem";
      }
    });
    planBillingOption.innerText = planBillingOption.getAttribute("data-yearly");
    planPrice.innerText = activeOption[0].children[1].children[1].innerText;
    totalPrice.children[0].innerText =
      activeOption[0].children[1].children[1].innerText.match(numberRegex)[0];
    totalPrice.children[1].innerText = "/yr";

    document.querySelector(".main2 .main-description").style.fontSize =
      "1.85rem";
    document.querySelectorAll(".main2 img").forEach((img) => {
      img.style.width = "4.2rem";
    });
    document.querySelectorAll(".main2 .title").forEach((title) => {
      title.style.fontSize = "1.8rem";
    });
    document.querySelectorAll(".main2 .price").forEach((price) => {
      price.style.fontSize = "1.55rem";
    });
  } else {
    yearly.classList.remove("active");
    monthly.classList.add("active");
    optionPrices.forEach((price, index) => {
      price.innerText = price.getAttribute("data-monthly");
    });
    addOnPrices.forEach((price) => {
      price.innerText = price.getAttribute("data-monthly");
    });
    subAddOnPrices.forEach((subPrice) => {
      subPrice.innerText = subPrice.getAttribute("data-monthly");
    });
    twoMonthsFree.forEach((item) => {
      item.classList.remove("visible");
      main2Footer.style.marginTop = "13.3rem";
    });
    planBillingOption.innerText =
      planBillingOption.getAttribute("data-monthly");
    planPrice.innerText = activeOption[0].children[1].children[1].innerText;
    totalPrice.children[0].innerText =
      activeOption[0].children[1].children[1].innerText.match(numberRegex)[0];
    totalPrice.children[1].innerText = "/mo";
    document.querySelectorAll(".main2 img").forEach((img) => {
      img.style.width = "4.5rem";
    });
    document.querySelectorAll(".main2 .title").forEach((title) => {
      title.style.fontSize = "1.85rem";
    });
    document.querySelectorAll(".main2 .price").forEach((price) => {
      price.style.fontSize = "1.6rem";
    });
  }
}

orInput.onclick = () => {
  inputTrueOrFalse();
};

addOns.forEach((addOn) => {
  if (addOn.classList.contains("active")) {
    addOn.children[0].children[0].click();
  }

  function calculation() {
    numberArray = [];
    for (let index = 0; index < activeAddOn.length; index++) {
      for (let i = 0; i < subAddOn.length; i++) {
        subAddOn[activeAddOn[index].getAttribute("data-id")].classList.add(
          "visible"
        );
        if (orInput.checked == true) {
          let number = Number(
            Number(
              subAddOn[
                activeAddOn[index].getAttribute("data-id")
              ].children[1].getAttribute("data-price-yearly")
            )
          );

          numberArray.push(number);
        } else {
          let number = Number(
            Number(
              subAddOn[
                activeAddOn[index].getAttribute("data-id")
              ].children[1].getAttribute("data-price-monthly")
            )
          );

          numberArray.push(number);
        }

        numberArray = numberArray.filter((item, index) => {
          return numberArray.indexOf(item) == index;
        });
      }
    }

    for (let index = 0; index < addOns.length; index++) {
      for (let i = 0; i < subAddOn.length; i++) {
        if (addOn.className == `add-on add-on-${index + 1}`) {
          subAddOn[index].classList.remove("visible");
          if (orInput.checked == true) {
            let number = Number(
              subAddOn[index].children[1].getAttribute("data-price-yearly")
            );
            numberArray = numberArray.filter((item) => item !== number);
          } else {
            let number = Number(
              subAddOn[index].children[1].getAttribute("data-price-monthly")
            );
            numberArray = numberArray.filter((item) => item !== number);
          }
        }
      }
    }

    let number = addOn.getAttribute("data-price-yearly");
    numberArray = numberArray.filter((item) => item !== number);
    let sum = 0;
    fixedNumberArray = numberArray;
    fixedNumberArray.forEach((num) => {
      sum += num;
    });

    sum = Number(sum.toFixed());

    totalPrice.children[0].innerText =
      Number(
        activeOption[0].children[1].children[1].innerText.match(numberRegex)[0]
      ) + sum;
  }

  orInput.onclick = () => {
    inputTrueOrFalse();
    calculation();
  };

  change.onclick = () => {
    changeButton();
    calculation();
  };

  change.onfocus = () => {
    change.onkeyup = (e) => {
      if (e.keyCode == 32 || e.keyCode == 13) {
        changeButton();
        calculation();
      }
    };
  };

  options.forEach((option) => {
    optionsOnClick(option, calculation);
  });

  yearly.onclick = (e) => {
    yearlyButton(e);
    calculation();
  };

  monthly.onclick = (e) => {
    monthlyButton(e);
    calculation();
  };

  addOn.onfocus = (e) => {
    // The addOn in this function is the addOn element that we targeted and we are targeting the label inside of it so we could activate it by clicking on the addOn element.
    addOn.onkeyup = (e) => {
      if (e.keyCode == 32 || e.keyCode == 13) {
        addOn.children[0].children[0].click();
      }
    };
    if (addOn.children[0].children[0].checked == true) {
      addOn.classList.add("active");
    } else {
      addOn.classList.remove("active");
    }
    calculation();
  };

  addOn.onclick = () => {
    // The addOn in this function is the addOn element that we targeted and we are targeting the label inside of it so we could activate it by clicking on the addOn element.
    addOn.children[0].children[0].click();
    if (addOn.children[0].children[0].checked == true) {
      addOn.classList.add("active");
    } else {
      addOn.classList.remove("active");
    }
    calculation();
  };
});

function theNextStep() {
  if (
    nameInput.value === "" ||
    emailInput.value === "" ||
    !emailRegex.test(emailInput.value) ||
    !phoneRegex.test(phoneInput.value) ||
    phoneInput.value === ""
  ) {
    for (let i = 0; i < formSpans.length; i++) {
      form[i].value == ""
        ? form[i].classList.add("invalid")
        : form[i].classList.remove("invalid");
      !emailRegex.test(emailInput.value)
        ? emailInput.classList.add("invalid")
        : emailInput.classList.remove("invalid");
      !phoneRegex.test(phoneInput.value)
        ? phoneInput.classList.add("invalid")
        : phoneInput.classList.remove("invalid");
    }
    for (let i = 0; i < invalidInputs.length; i++) {
      invalidInputs[i].parentElement.children[0].children[1].innerText =
        "This field is required";
    }
    let validInputs = document.querySelectorAll(
      "form input:not(.info-input.invalid)"
    );
    validInputs.forEach((item) => {
      item.parentElement.children[0].children[1].innerText = "";
    });
  } else {
    mainSteps.forEach((step) => {
      step.classList.remove("active");
      step.setAttribute("tabindex", "-1");
    });

    stepNumbers.forEach((step) => {
      step.classList.remove("active");
    });

    mainSteps[
      index1 === mainSteps.length - 1 ? index1 : index1 + 1
    ].classList.add("active");

    index1 += 1;

    for (let i = 0; i < formSpans.length; i++) {
      formSpans[i].innerText = "";
      form[i].classList.remove("invalid");
    }
  }
}

function theNextButton() {
  if (
    nameInput.value === "" ||
    emailInput.value === "" ||
    !emailRegex.test(emailInput.value) ||
    !phoneRegex.test(phoneInput.value) ||
    phoneInput.value === ""
  ) {
    for (let i = 0; i < formSpans.length; i++) {
      form[i].value == ""
        ? form[i].classList.add("invalid")
        : form[i].classList.remove("invalid");
      !emailRegex.test(emailInput.value)
        ? emailInput.classList.add("invalid")
        : emailInput.classList.remove("invalid");
      !phoneRegex.test(phoneInput.value)
        ? phoneInput.classList.add("invalid")
        : phoneInput.classList.remove("invalid");
    }
    for (let i = 0; i < invalidInputs.length; i++) {
      invalidInputs[i].parentElement.children[0].children[1].innerText =
        "This field is required";
    }
    let validInputs = document.querySelectorAll(
      "form input:not(.info-input.invalid)"
    );
    validInputs.forEach((item) => {
      item.parentElement.children[0].children[1].innerText = "";
    });
  } else {
    stepNumbers.forEach((step) => {
      step.classList.remove("active");
    });

    stepNumbers[
      index2 === stepNumbers.length - 1 ? index2 : index2 + 1
    ].classList.add("active");

    index2 += 1;
  }
}

function theBackStep() {
  mainSteps.forEach((step) => {
    step.classList.remove("active");
    step.setAttribute("tabindex", "-1");
  });

  stepNumbers.forEach((step) => {
    step.classList.remove("active");
  });

  stepNumbers[index2 === 0 ? index2 : index2 - 1].classList.add("active");

  mainSteps[index1 === 0 ? index1 : index1 - 1].classList.add("active");

  index1 -= 1;
  index2 -= 1;
}

nextSteps.forEach((next) => {
  next.addEventListener(
    "click",
    theNextStep,
    (next.onfocus = () => {
      console.log("yes");
    })
  );
});

nextBtns.forEach((nextBtn) => {
  nextBtn.addEventListener("click", theNextButton);
});

backSteps.forEach((back) => {
  back.addEventListener("click", theBackStep);
});

confirmBtn.onclick = () => {
  confirmBtn.parentElement.classList.add("none")
  mainSteps.forEach((step) => {
    if (!step.classList.contains("active")) {
      step.classList.add("none");
    }
  });
};
