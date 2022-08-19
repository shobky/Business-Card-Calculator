let vendor;
let media;
let crop;
let team;

function trackChangeVendor(value) {
  vendor = value;
  console.log(vendor);
}
function trackChangeMedia(value) {
  media = value;

  console.log(media);
}
function trackChangeCrop(value) {
  crop = value;
  console.log(crop);
}
function trackChangeTeam(value) {
  team = value;

  console.log(team);
}

let sum;
let brex;
let stripe;
let amex;

const answer = document.getElementById("answer");
const unlimited = document.getElementById("unlimited");
const lifetime = document.getElementById("lifetime");

const showBrex = () => {
  sum = vendor - media + 2 * media - crop + 2 * crop - team + 2 * team;
  brex = sum * (3 / 10);
  if (brex > 0) {
    answer.innerText = "Brex Business card    $" + brex;
    unlimited.innerText = "Unlimited Rewards     $" + sum * 1.1;
    lifetime.innerText = "Lifetime Rewards     $" + sum * 1.2;
  } else {
    answer.innerText = "Please enter all the values above. and don't input them so fast !";
    
  }
};

const showStripe = () => {
  sum = vendor - media + 2 * media - crop + 2 * crop - team + 2 * team;
  stripe = sum * 2.9;
  if (stripe > 0) {
    answer.innerText = "Stipe Business card    $" + stripe;
    unlimited.innerText = "Unlimited Rewards     $" + sum * 1.1;
    lifetime.innerText = "Lifetime Rewards     $" + sum * 1.2;
  } else {
    answer.innerText = "Please enter all the values above. and don't input them so fast !";

    
  }
};

const showAmex = () => {
  sum = vendor - media + 2 * media - crop + 2 * crop - team + 2 * team;
  amex = sum * 1.3;
  if (amex > 0) {
    answer.innerText = "Amex Business card    $" + amex;
    unlimited.innerText = "Unlimited Rewards     $" + sum * 1.1;
    lifetime.innerText = "Lifetime Rewards     $" + sum * 1.2;
  } else {
    answer.innerText = "Please enter all the values above. and don't input them so fast !";

    
  }
};
