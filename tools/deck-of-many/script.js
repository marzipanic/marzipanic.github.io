// -----------------------------------------------------------------------
// CONSTANTS AND VARIABLES
const ELEMENT_CARD_WRAPPER = document.getElementById('card-wrapper');
const ELEMENT_CARD = document.getElementById('card');
const ELEMENT_CARD_IMAGE = document.getElementById('image');
const ELEMENT_CARD_FRONT = document.getElementById('front');
const ELEMENT_CARD_BACK = document.getElementById('back');
const ELEMENT_CARD_TITLE = document.getElementById('title');
const ELEMENT_CARD_DESCRIPTION = document.getElementById('description');
const ELEMENT_CONTROL_PIN = document.getElementById('pin-card');
const ELEMENT_HAND_LIST = document.getElementById('hand-list')
let currentCard = 0;

const CURRENT_HAND_TOKEN = 'deckOfMany_currentHand';
const DECK_SIZE = 22;


// -----------------------------------------------------------------------
// CARD DATA
const cards = {
    0: {
        title: "Deck of Many Things",
        image_marzipanic: "Back_sm.png",
        description: "This deck contains a number of cards made of ivory or vellum. Declare how many cards you wish to draw, then do so..."
    },
    1: {
        title: "Balance",
        image_marzipanic: "Balance_sm.png",
        description: "Your mind suffers a wrenching alteration, causing your alignment to change. Lawful becomes chaotic, good becomes evil, and vice versa. If you are true neutral or unaligned, this card has no effect on you."
    },
    2: {
        title: "Comet",
        image_marzipanic: "Comet_sm.png",
        description: "If you single-handedly defeat the next hostile monster or group of monsters you encounter, you gain experience points enough to gain one level. Otherwise, this card has no effect."
    },
    3: {
        title: "Donjon",
        image_marzipanic: "Donjon_sm.png",
        description: "You disappear and become entombed in a state of suspended animation in an extradimensional sphere. Everything you were wearing and carrying stays behind in the space you occupied when you disappeared.<br/><br/>You remain imprisoned until you are found and removed from the sphere. You can't be located by any divination magic, but a <a href=\"https://www.dndbeyond.com/spells/wish\" target=\"_blank\">wish</a> spell can reveal the location of your prison. You draw no more cards."
    },
    4: {
        title: "Euryale",
        image_marzipanic: "Euryale_sm.png",
        description: "The card's medusa-like visage curses you. You take a −2 penalty on saving throws while cursed in this way. Only a god or the magic of The Fates card can end this curse."
    },
    5: {
        title: "The Fates",
        image_marzipanic: "Fates_sm.png",
        description: "Reality's fabric unravels and spins anew, allowing you to avoid or erase one event as if it never happened. You can use the card's magic as soon as you draw the card or at any other time before you die."
    },
    6: {
        title: "Flames",
        image_marzipanic: "Flames_sm.png",
        description: "A powerful <a href=\"https://www.dndbeyond.com/monsters?filter-type=0&filter-type=9&filter-search=&filter-cr-min=&filter-cr-max=&filter-armor-class-min=&filter-armor-class-max=&filter-average-hp-min=&filter-average-hp-max=&filter-is-legendary=&filter-is-mythic=&filter-has-lair=&filter-tags=58&sort=cr\" target=\"_blank\">devil</a> becomes your enemy. The devil seeks your ruin and plagues your life, savoring your suffering before attempting to slay you. This enmity lasts until either you or the devil dies."
    },
    7: {
        title: "Fool",
        image_marzipanic: "Fool_sm.png",
        description: "You lose 10,000 XP, discard this card, and draw from the deck again, counting both draws as one of your declared draws. If losing that much XP would cause you to lose a level, you instead lose an amount that leaves you with just enough XP to keep your level."
    },
    8: {
        title: "Gem",
        image_marzipanic: "Gem_sm.png",
        description: "Twenty-five pieces of jewelry worth 2,000 gp each or fifty gems worth 1,000 gp each appear at your feet."
    },
    9: {
        title: "Idiot",
        image_marzipanic: "Idiot_sm.png",
        description: "Permanently reduce your Intelligence by 1d4 + 1 (to a minimum score of 1). You can draw one additional card beyond your declared draws."
    },
    10: {
        title: "Jester",
        image_marzipanic: "Jester_sm.png",
        description: "You gain 10,000 XP, or you can draw two additional cards beyond your declared draws."
    },
    11: {
        title: "Key",
        image_marzipanic: "Key_sm.png",
        description: "A rare or rarer <a href=\"https://www.dndbeyond.com/magic-items?filter-type=0&filter-type=9&filter-rarity=3&filter-rarity=4&filter-rarity=5&filter-rarity=7\" target=\"_blank\">magic weapon</a> with which you are proficient appears in your hands. The GM chooses the weapon."
    },
    12: {
        title: "Knight",
        image_marzipanic: "Knight_sm.png",
        description: "You gain the service of a 4th-level fighter who appears in a space you choose within 30 feet of you. The fighter is of the same race as you and serves you loyally until death, believing the fates have drawn him or her to you. You control this character."
    },
    13: {
        title: "Moon",
        image_marzipanic: "Moon_sm.png",
        description: "You are granted the ability to cast the <a href=\"https://www.dndbeyond.com/spells/wish\" target=\"_blank\">wish</a> spell 1d3 times."
    },
    14: {
        title: "Rogue",
        image_marzipanic: "Rogue_sm.png",
        description: "A nonplayer character of the GM's choice becomes hostile toward you. The identity of your new enemy isn't known until the NPC or someone else reveals it. Nothing less than a <a href=\"https://www.dndbeyond.com/spells/wish\" target=\"_blank\">wish</a> spell or divine intervention can end the NPC's hostility toward you."
    },
    15: {
        title: "Ruin",
        image_marzipanic: "Ruin_sm.png",
        description: "All forms of wealth that you carry or own, other than magic items, are lost to you. Portable property vanishes. Businesses, buildings, and land you own are lost in a way that alters reality the least. Any documentation that proves you should own something lost to this card also disappears."
    },
    16: {
        title: "Skull",
        image_marzipanic: "Skull_sm.png",
        description: "You summon an <a href=\"https://www.dndbeyond.com/monsters/27734-avatar-of-death\" target=\"_blank\">avatar of death</a>--a ghostly humanoid skeleton clad in a tattered black robe and carrying a spectral scythe. It appears in a space of the GM's choice within 10 feet of you and attacks you, warning all others that you must win the battle alone. The avatar fights until you die or it drops to 0 hit points, whereupon it disappears.<br/><br/>If anyone tries to help you, the helper summons its own avatar of death. A creature slain by an avatar of death can't be restored to life."
    },
    17: {
        title: "Star",
        image_marzipanic: "Star_sm.png",
        description: "Increase one of your ability scores by 2. The score can exceed 20 but can't exceed 24."
    },
    18: {
        title: "Sun",
        image_marzipanic: "Sun_sm.png",
        description: "You gain 50,000 XP, and a <a href=\"https://www.dndbeyond.com/magic-items?filter-type=10\" target=\"_blank\">wondrous item</a> (which the GM determines randomly) appears in your hands."
    },
    19: {
        title: "Talons",
        image_marzipanic: "Talons_sm.png",
        description: "Every magic item you wear or carry disintegrates. Artifacts in your possession aren't destroyed but do vanish."
    },
    20: {
        title: "Throne",
        image_marzipanic: "Throne_sm.png",
        description: "You gain proficiency in the <a href=\"https://www.dndbeyond.com/sources/basic-rules/using-ability-scores#Persuasion\" target=\"_blank\">Persuasion</a> skill, and you double your proficiency bonus on checks made with that skill. In addition, you gain rightful ownership of a small keep somewhere in the world. However, the keep is currently in the hands of monsters, which you must clear out before you can claim the keep as yours."
    },
    21: {
        title: "Vizier",
        image_marzipanic: "Vizier_sm.png",
        description: "At any time you choose within one year of drawing this card, you can ask a question in meditation and mentally receive a truthful answer to that question. Besides information, the answer helps you solve a puzzling problem or other dilemma. In other words, the knowledge comes with wisdom on how to apply it."
    },
    22: {
        title: "The Void",
        image_marzipanic: "Void_sm.png",
        description: "This black card spells disaster. Your soul is drawn from your body and contained in an object in a place of the GM's choice. One or more powerful beings guard the place. While your soul is trapped in this way, your body is <a href=\"https://www.dndbeyond.com/sources/phb/appendix-a-conditions#Incapacitated\" target=\"_blank\">incapacitated</a>.<br/><br/>A <a href=\"https://www.dndbeyond.com/spells/wish\" target=\"_blank\">wish</a> spell can't restore your soul, but the spell reveals the location of the object that holds it. You draw no more cards."
    }
};

// -----------------------------------------------------------------------
// SHOW SELECTION
function drawCard(event) {
    console.log("DRAW CARD");
    let currentHand = getHand();
    do {
        selectedCard = Math.ceil(Math.random() * DECK_SIZE);
    } while (selectedCard === currentCard && currentHand.contains(selectedCard));
    currentCard = selectedCard;
    animateDrawCard(selectedCard);
};

// -----------------------------------------------------------------------
// SHOW CARD
function animateDrawCard(index) {
    // Hide Card & Text
    animateHideCard();

    // Set the Text
    ELEMENT_CARD_TITLE.textContent = cards[index].title;
    ELEMENT_CARD_DESCRIPTION.innerHTML = cards[index].description;

    // Set the Image
    let cardImage = `./cards/${cards[index].image_marzipanic}`;
    ELEMENT_CARD_IMAGE.setAttribute('src', cardImage);

    // Show Card & Text
    animateShowCard();
    
};

// -----------------------------------------------------------------------
// Function to Hide Card
function animateHideCard() {

    // Handle Card
    let cClasses = ELEMENT_CARD.classList;
    if (cClasses.contains("scaled-up")) {
        // cClasses.replace("scaled-up", "tossed-down");
        cClasses.remove("scaled-up");
        cClasses.add("tossed-down");
    }
    if (!cClasses.contains("tossed-down")) {
        cClasses.add("tossed-down");
    }
};

// -----------------------------------------------------------------------
// Function to Show Card
function animateShowCard() {
    // Handle Card
    let cClasses = ELEMENT_CARD.classList;
    if (cClasses.contains("tossed-down")) {
        cClasses.remove("tossed-down");
        cClasses.add("scaled-up");
    }
    if (!cClasses.contains("scaled-up")) {
        cClasses.add("scaled-up");
    }
};

// -----------------------------------------------------------------------
// Flip Current Card
function flipCard() {
    // Handle Card
    let classes = ELEMENT_CARD.classList;
    if (classes.contains("flipped")) {
        classes.remove("flipped");
    } else {
        classes.add("flipped");
    }
};

// -----------------------------------------------------------------------
// Pin Current Card and remove it from the Deck
function pinCard() {
    saveToHand(currentCard);
    reloadPinState();
    reloadHandList();
};

// -----------------------------------------------------------------------
// Reload the list of cards in the Hand
function reloadHandList() {
    removeAllChildNodes(ELEMENT_HAND_LIST);
    for (let i in getHand()) {
        let item = document.createElement("li");
        item.id = i
        item.innerText = cards[i].title;
        ELEMENT_HAND_LIST.appendChild(item);
    }
}

// -----------------------------------------------------------------------
// Reload the active state of the Pin Control
function reloadPinState() {
    let classes = ELEMENT_CONTROL_PIN.classList
    if (getHand().contains(currentCard)) {
        if (!classes.contains("hand-card-active")) {
            classes.add("hand-card-active");
        }
    } else {
        if (classes.contains("hand-card-active")) {
            classes.remove("hand-card-active");
        }
    }
}

// -----------------------------------------------------------------------
// Copy the text of the Current Card
function copyCard() {
    navigator.clipboard.writeText(ELEMENT_CARD_TITLE.textContent + ": " + ELEMENT_CARD_DESCRIPTION.textContent);
};

// -----------------------------------------------------------------------
// Function to SAVE CARD SELECTION
function saveToHand(selectedCard) {
    let currentHand = getHand();
    currentHand.add(selectedCard);
    localStorage.setItem(CURRENT_HAND_TOKEN, currentHand);
};

function removeFromHand(selectedCard) {
    let currentHand = getHand();
    currentHand.delete(selectedCard);
    saveHand(currentHand);
};

// -----------------------------------------------------------------------
// Get the Current Hand
function getHand() {
    return localStorage.getItem(CURRENT_HAND_TOKEN);
};

// -----------------------------------------------------------------------
// Save Current Hand
function saveHand(newHand) {
    return localStorage.setItem(CURRENT_HAND_TOKEN, newHand);
};

// -----------------------------------------------------------------------
// Remove Child Nodes of the HTML
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// -----------------------------------------------------------------------
// Initialize the Page
drawCard(getSavedCard());

