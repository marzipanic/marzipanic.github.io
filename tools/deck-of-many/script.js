// -----------------------------------------------------------------------
// CONSTANTS AND VARIABLES
const CARD_DISPLAY_ELEMENT = document.getElementById('card-display');
const CARD_IMAGE_ELEMENT = document.getElementById('card-image');
const TEXT_DISPLAY_ELEMENT = document.getElementById('text-display');
const CARD_TITLE_ELEMENT = document.getElementById('card-title');
const CARD_DESCRIPTION_ELEMENT = document.getElementById('card-description');

const STORED_CARD_TOKEN = '5etools_deckOfMany';
let HAS_STORAGE = clientHasStorage();
let STORED_CARD;


// -----------------------------------------------------------------------
// CARD DATA
const cards = {
    0: {
        title: "Deck of Many Things",
        image_vyseri: "deck00.png",
        description: "This deck contains a number of cards made of ivory or vellum. Declare how many cards you wish to draw, then do so..."
    },
    1: {
        title: "Balance",
        image_vyseri: "deck1.png",
        description: "Your mind suffers a wrenching alteration, causing your alignment to change. Lawful becomes chaotic, good becomes evil, and vice versa. If you are true neutral or unaligned, this card has no effect on you."
    },
    2: {
        title: "Comet",
        image_vyseri: "deck2.png",
        description: "If you single-handedly defeat the next hostile monster or group of monsters you encounter, you gain experience points enough to gain one level. Otherwise, this card has no effect."
    },
    3: {
        title: "Donjon",
        image_vyseri: "deck19.png",
        description: "You disappear and become entombed in a state of suspended animation in an extradimensional sphere. Everything you were wearing and carrying stays behind in the space you occupied when you disappeared. You remain imprisoned until you are found and removed from the sphere. You can't be located by any divination magic, but a wish spell can reveal the location of your prison. You draw no more cards."
    },
    4: {
        title: "Euryale",
        image_vyseri: "deck5.png",
        description: "The card's medusa-like visage curses you. You take a −2 penalty on saving throws while cursed in this way. Only a god or the magic of The Fates card can end this curse."
    },
    5: {
        title: "The Fates",
        image_vyseri: "deck7.png",
        description: "Reality's fabric unravels and spins anew, allowing you to avoid or erase one event as if it never happened. You can use the card's magic as soon as you draw the card or at any other time before you die."
    },
    6: {
        title: "Flames",
        image_vyseri: "deck21.png",
        description: "A powerful devil becomes your enemy. The devil seeks your ruin and plagues your life, savoring your suffering before attempting to slay you. This enmity lasts until either you or the devil dies."
    },
    7: {
        title: "Fool",
        image_vyseri: "deck12.png",
        description: "You lose 10,000 XP, discard this card, and draw from the deck again, counting both draws as one of your declared draws. If losing that much XP would cause you to lose a level, you instead lose an amount that leaves you with just enough XP to keep your level."
    },
    8: {
        title: "Gem",
        image_vyseri: "deck13.png",
        description: "Twenty-five pieces of jewelry worth 2,000 gp each or fifty gems worth 1,000 gp each appear at your feet."
    },
    9: {
        title: "Idiot",
        image_vyseri: "deck20.png",
        description: "Permanently reduce your Intelligence by 1d4 + 1 (to a minimum score of 1). You can draw one additional card beyond your declared draws."
    },
    10: {
        title: "Jester",
        image_vyseri: "deck15.png",
        description: "You gain 10,000 XP, or you can draw two additional cards beyond your declared draws."
    },
    11: {
        title: "Key",
        image_vyseri: "deck8.png",
        description: "A rare or rarer magic weapon with which you are proficient appears in your hands. The GM chooses the weapon."
    },
    12: {
        title: "Knight",
        image_vyseri: "deck4.png",
        description: "You gain the service of a 4th-level fighter who appears in a space you choose within 30 feet of you. The fighter is of the same race as you and serves you loyally until death, believing the fates have drawn him or her to you. You control this character."
    },
    13: {
        title: "Moon",
        image_vyseri: "deck9.png",
        description: "You are granted the ability to cast the wish spell 1d3 times."
    },
    14: {
        title: "Rogue",
        image_vyseri: "deck22.png",
        description: "A nonplayer character of the GM's choice becomes hostile toward you. The identity of your new enemy isn't known until the NPC or someone else reveals it. Nothing less than a wish spell or divine intervention can end the NPC's hostility toward you."
    },
    15: {
        title: "Ruin",
        image_vyseri: "deck3.png",
        description: "All forms of wealth that you carry or own, other than magic items, are lost to you. Portable property vanishes. Businesses, buildings, and land you own are lost in a way that alters reality the least. Any documentation that proves you should own something lost to this card also disappears."
    },
    16: {
        title: "Skull",
        image_vyseri: "deck10.png",
        description: "You summon an avatar of death--a ghostly humanoid skeleton clad in a tattered black robe and carrying a spectral scythe. It appears in a space of the GM's choice within 10 feet of you and attacks you, warning all others that you must win the battle alone. The avatar fights until you die or it drops to 0 hit points, whereupon it disappears. If anyone tries to help you, the helper summons its own avatar of death. A creature slain by an avatar of death can't be restored to life."
    },
    17: {
        title: "Star",
        image_vyseri: "deck17.png",
        description: "Increase one of your ability scores by 2. The score can exceed 20 but can't exceed 24."
    },
    18: {
        title: "Sun",
        image_vyseri: "deck6.png",
        description: "You gain 50,000 XP, and a wondrous item (which the GM determines randomly) appears in your hands."
    },
    19: {
        title: "Talons",
        image_vyseri: "deck11.png",
        description: "Every magic item you wear or carry disintegrates. Artifacts in your possession aren't destroyed but do vanish."
    },
    20: {
        title: "Throne",
        image_vyseri: "deck16.png",
        description: "You gain proficiency in the Persuasion skill, and you double your proficiency bonus on checks made with that skill. In addition, you gain rightful ownership of a small keep somewhere in the world. However, the keep is currently in the hands of monsters, which you must clear out before you can claim the keep as yours."
    },
    21: {
        title: "Vizier",
        image_vyseri: "deck14.png",
        description: "At any time you choose within one year of drawing this card, you can ask a question in meditation and mentally receive a truthful answer to that question. Besides information, the answer helps you solve a puzzling problem or other dilemma. In other words, the knowledge comes with wisdom on how to apply it."
    },
    22: {
        title: "The Void",
        image_vyseri: "deck18.png",
        description: "This black card spells disaster. Your soul is drawn from your body and contained in an object in a place of the GM's choice. One or more powerful beings guard the place. While your soul is trapped in this way, your body is incapacitated. A wish spell can't restore your soul, but the spell reveals the location of the object that holds it. You draw no more cards."
    }
};

// -----------------------------------------------------------------------
// SHOW SELECTION
function selectCard() {
    console.log(`selectCard()`);
    let selectedCard = STORED_CARD;
    do {
        selectedCard = Math.ceil(Math.random() * 22);
    } while (!selectedCard || selectedCard === STORED_CARD);
    console.log("selectedCard", selectedCard);
    saveSelectedCard(selectedCard);
    showCard(STORED_CARD);
};

// -----------------------------------------------------------------------
// SHOW CARD
function showCard(index) {
    // Hide Card & Text
    if (!(index===0)) {
        animateHideCard(index);
    }

    // Set the Text
    CARD_TITLE_ELEMENT.textContent = cards[index].title;
    CARD_DESCRIPTION_ELEMENT.textContent = cards[index].description;

    // Set the Image
    let cardImage = `./cards/${cards[index].image_vyseri}`;
    CARD_IMAGE_ELEMENT.setAttribute('src', cardImage);

    // Show Card & Text
    animateShowCard(index);
    
};

// -----------------------------------------------------------------------
// Function to Hide Card
function animateHideCard() {

    // Handle Card
    let cClasses = CARD_DISPLAY_ELEMENT.classList;
    if (cClasses.contains("scaled-up")) {
        cClasses.remove("scaled-up");
    }
    if (!cClasses.contains("tossed-down")) {
        cClasses.add("tossed-down");
    }

    // Handle Text
    let tClasses = TEXT_DISPLAY_ELEMENT.classList;
    if (tClasses.contains("scaled-up")) {
        tClasses.remove("scaled-up");
    }
    if (!tClasses.contains("scaled-down")) {
        tClasses.add("scaled-down");
    }
};

// -----------------------------------------------------------------------
// Function to Show Card
function animateShowCard() {
    // Handle Card
    let cClasses = CARD_DISPLAY_ELEMENT.classList;
    if (cClasses.contains("tossed-down")) {
        cClasses.remove("tossed-down");
    }
    if (!cClasses.contains("scaled-up")) {
        cClasses.add("scaled-up");
    }

    // Handle Text
    let tClasses = TEXT_DISPLAY_ELEMENT.classList;
    if (tClasses.contains("scaled-down")) {
        tClasses.remove("scaled-down");
    }
    if (!tClasses.contains("scaled-up")) {
        tClasses.add("scaled-up");
    }
};

// -----------------------------------------------------------------------
// Function to SAVE SELECTION
function saveSelectedCard(selectedCard) {
    console.log("saveSelectedCard()");
    STORED_CARD = selectedCard;
    if (HAS_STORAGE) {
        localStorage.setItem(STORED_CARD_TOKEN, STORED_CARD);
    }
};

// -----------------------------------------------------------------------
// Function to check if page HAS SAVED SELECTION
function clientHasSavedDraw() {
    console.log("clientHasSavedDraw()");
    STORED_CARD = localStorage.getItem(STORED_CARD_TOKEN);
    console.log("STORED_CARD", STORED_CARD);
    if (!(STORED_CARD > 0 && STORED_CARD <= 22)) {
        console.log("STORED_CARD", STORED_CARD);
        return false;
    } else return true;
};

// -----------------------------------------------------------------------
// Function to check if page HAS STORAGE
function clientHasStorage() {
    console.log("clientHasStorage()");
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
};

// -----------------------------------------------------------------------
// Initialize the Page
let cardWasDrawn = clientHasSavedDraw();
if (cardWasDrawn) {
    console.log("Drawn card stored!");
    showCard(STORED_CARD);
} else {
    console.log("No drawn card stored...");
    showCard(0);
};

