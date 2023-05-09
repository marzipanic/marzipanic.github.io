// -----------------------------------------------------------------------
// CONSTANTS AND VARIABLES
const ELEMENT_CARD = document.getElementById('card');
const ELEMENT_CARD_IMAGE = document.getElementById('image');
const ELEMENT_CARD_FRONT = document.getElementById('front');
const ELEMENT_CARD_BACK = document.getElementById('back');
const ELEMENT_CARD_TITLE = document.getElementById('title');
const ELEMENT_CARD_DESCRIPTION = document.getElementById('description');

const STORED_CARD_TOKEN = '5etools_deckOfMany';


// -----------------------------------------------------------------------
// CARD DATA
const cards = {
    0: {
        title: "Deck of Many Things",
        image_vyseri: "vyseri/deck00.png",
        image_marzipanic: "Back_sm.png",
        description: "This deck contains a number of cards made of ivory or vellum. Declare how many cards you wish to draw, then do so..."
    },
    1: {
        title: "Balance",
        image_vyseri: "vyseri/deck1.png",
        image_marzipanic: "Balance_sm.png",
        description: "Your mind suffers a wrenching alteration, causing your alignment to change. Lawful becomes chaotic, good becomes evil, and vice versa. If you are true neutral or unaligned, this card has no effect on you."
    },
    2: {
        title: "Comet",
        image_vyseri: "vyseri/deck2.png",
        image_marzipanic: "Comet_sm.png",
        description: "If you single-handedly defeat the next hostile monster or group of monsters you encounter, you gain experience points enough to gain one level. Otherwise, this card has no effect."
    },
    3: {
        title: "Donjon",
        image_vyseri: "vyseri/deck19.png",
        image_marzipanic: "Donjon_sm.png",
        description: "You disappear and become entombed in a state of suspended animation in an extradimensional sphere. Everything you were wearing and carrying stays behind in the space you occupied when you disappeared. You remain imprisoned until you are found and removed from the sphere. You can't be located by any divination magic, but a wish spell can reveal the location of your prison. You draw no more cards."
    },
    4: {
        title: "Euryale",
        image_vyseri: "vyseri/deck5.png",
        image_marzipanic: "Euryale_sm.png",
        description: "The card's medusa-like visage curses you. You take a −2 penalty on saving throws while cursed in this way. Only a god or the magic of The Fates card can end this curse."
    },
    5: {
        title: "The Fates",
        image_vyseri: "vyseri/deck7.png",
        image_marzipanic: "Fates_sm.png",
        description: "Reality's fabric unravels and spins anew, allowing you to avoid or erase one event as if it never happened. You can use the card's magic as soon as you draw the card or at any other time before you die."
    },
    6: {
        title: "Flames",
        image_vyseri: "vyseri/deck21.png",
        image_marzipanic: "Flames_sm.png",
        description: "A powerful devil becomes your enemy. The devil seeks your ruin and plagues your life, savoring your suffering before attempting to slay you. This enmity lasts until either you or the devil dies."
    },
    7: {
        title: "Fool",
        image_vyseri: "vyseri/deck12.png",
        image_marzipanic: "Fool_sm.png",
        description: "You lose 10,000 XP, discard this card, and draw from the deck again, counting both draws as one of your declared draws. If losing that much XP would cause you to lose a level, you instead lose an amount that leaves you with just enough XP to keep your level."
    },
    8: {
        title: "Gem",
        image_vyseri: "vyseri/deck13.png",
        image_marzipanic: "Gem_sm.png",
        description: "Twenty-five pieces of jewelry worth 2,000 gp each or fifty gems worth 1,000 gp each appear at your feet."
    },
    9: {
        title: "Idiot",
        image_vyseri: "vyseri/deck20.png",
        image_marzipanic: "Idiot_sm.png",
        description: "Permanently reduce your Intelligence by 1d4 + 1 (to a minimum score of 1). You can draw one additional card beyond your declared draws."
    },
    10: {
        title: "Jester",
        image_vyseri: "vyseri/deck15.png",
        image_marzipanic: "Jester_sm.png",
        description: "You gain 10,000 XP, or you can draw two additional cards beyond your declared draws."
    },
    11: {
        title: "Key",
        image_vyseri: "vyseri/deck8.png",
        image_marzipanic: "Key_sm.png",
        description: "A rare or rarer magic weapon with which you are proficient appears in your hands. The GM chooses the weapon."
    },
    12: {
        title: "Knight",
        image_vyseri: "vyseri/deck4.png",
        image_marzipanic: "Knight_sm.png",
        description: "You gain the service of a 4th-level fighter who appears in a space you choose within 30 feet of you. The fighter is of the same race as you and serves you loyally until death, believing the fates have drawn him or her to you. You control this character."
    },
    13: {
        title: "Moon",
        image_vyseri: "vyseri/deck9.png",
        image_marzipanic: "Moon_sm.png",
        description: "You are granted the ability to cast the wish spell 1d3 times."
    },
    14: {
        title: "Rogue",
        image_vyseri: "vyseri/deck22.png",
        image_marzipanic: "Rogue_sm.png",
        description: "A nonplayer character of the GM's choice becomes hostile toward you. The identity of your new enemy isn't known until the NPC or someone else reveals it. Nothing less than a wish spell or divine intervention can end the NPC's hostility toward you."
    },
    15: {
        title: "Ruin",
        image_vyseri: "vyseri/deck3.png",
        image_marzipanic: "Ruin_sm.png",
        description: "All forms of wealth that you carry or own, other than magic items, are lost to you. Portable property vanishes. Businesses, buildings, and land you own are lost in a way that alters reality the least. Any documentation that proves you should own something lost to this card also disappears."
    },
    16: {
        title: "Skull",
        image_vyseri: "vyseri/deck10.png",
        image_marzipanic: "Skull_sm.png",
        description: "You summon an avatar of death--a ghostly humanoid skeleton clad in a tattered black robe and carrying a spectral scythe. It appears in a space of the GM's choice within 10 feet of you and attacks you, warning all others that you must win the battle alone. The avatar fights until you die or it drops to 0 hit points, whereupon it disappears. If anyone tries to help you, the helper summons its own avatar of death. A creature slain by an avatar of death can't be restored to life."
    },
    17: {
        title: "Star",
        image_vyseri: "vyseri/deck17.png",
        image_marzipanic: "Star_sm.png",
        description: "Increase one of your ability scores by 2. The score can exceed 20 but can't exceed 24."
    },
    18: {
        title: "Sun",
        image_vyseri: "vyseri/deck6.png",
        image_marzipanic: "Sun_sm.png",
        description: "You gain 50,000 XP, and a wondrous item (which the GM determines randomly) appears in your hands."
    },
    19: {
        title: "Talons",
        image_vyseri: "vyseri/deck11.png",
        image_marzipanic: "Talons_sm.png",
        description: "Every magic item you wear or carry disintegrates. Artifacts in your possession aren't destroyed but do vanish."
    },
    20: {
        title: "Throne",
        image_vyseri: "vyseri/deck16.png",
        image_marzipanic: "Throne_sm.png",
        description: "You gain proficiency in the Persuasion skill, and you double your proficiency bonus on checks made with that skill. In addition, you gain rightful ownership of a small keep somewhere in the world. However, the keep is currently in the hands of monsters, which you must clear out before you can claim the keep as yours."
    },
    21: {
        title: "Vizier",
        image_vyseri: "vyseri/deck14.png",
        image_marzipanic: "Vizier_sm.png",
        description: "At any time you choose within one year of drawing this card, you can ask a question in meditation and mentally receive a truthful answer to that question. Besides information, the answer helps you solve a puzzling problem or other dilemma. In other words, the knowledge comes with wisdom on how to apply it."
    },
    22: {
        title: "The Void",
        image_vyseri: "vyseri/deck18.png",
        image_marzipanic: "Void_sm.png",
        description: "This black card spells disaster. Your soul is drawn from your body and contained in an object in a place of the GM's choice. One or more powerful beings guard the place. While your soul is trapped in this way, your body is incapacitated. A wish spell can't restore your soul, but the spell reveals the location of the object that holds it. You draw no more cards."
    }
};

// -----------------------------------------------------------------------
// SHOW SELECTION
function drawCard(event) {
    console.log("DRAW CARD");
    // event.preventDefault();

    const savedCard = getSavedCard();
    let selectedCard = getSavedCard();
    do {
        selectedCard = Math.ceil(Math.random() * 22);
    } while (selectedCard === savedCard);
    saveSelectedCard(selectedCard);
    animateDrawCard(selectedCard);
};

// -----------------------------------------------------------------------
// SHOW CARD
function animateDrawCard(index) {
    // Hide Card & Text
    animateHideCard();

    // Set the Text
    ELEMENT_CARD_TITLE.textContent = cards[index].title;
    ELEMENT_CARD_DESCRIPTION.textContent = cards[index].description;

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
        cClasses.replace("scaled-up", "tossed-down");
    }
    if (!cClasses.contains("tossed-down")) {
        cClasses.add("tossed-down");
    }

    // Handle Text
    // let tdClasses = ELEMENT_CARD.classList;
    // if (tdClasses.contains("scaled-up")) {
    //     tdClasses.replace("scaled-up", "scaled-down");
    // }
    // if (!tdClasses.contains("scaled-down")) {
    //     tdClasses.add("scaled-down");
    // }


    // let tClasses = CARD_TITLE_ELEMENT.classList;
    // if (tClasses.contains("scaled-up")) {
    //     tClasses.replace("scaled-down", "scaled-up");
    // }
    // if (!tClasses.contains("scaled-down")) {
    //     tClasses.add("scaled-down");
    // }
    // let dClasses = CARD_DESCRIPTION_ELEMENT.classList;
    // if (dClasses.contains("scaled-up")) {
    //     dClasses.replace("scaled-down", "scaled-up");
    // }
    // if (!dClasses.contains("scaled-down")) {
    //     dClasses.add("scaled-down");
    // }
};

// -----------------------------------------------------------------------
// Function to Show Card
function animateShowCard() {
    // Handle Card
    let cClasses = ELEMENT_CARD.classList;
    if (cClasses.contains("tossed-down")) {
        cClasses.replace("tossed-down", "scaled-up");
    }
    if (!cClasses.contains("scaled-up")) {
        cClasses.add("scaled-up");
    }

    // Handle Text
    // let tdClasses = TEXT_DISPLAY_ELEMENT.classList;
    // if (tdClasses.contains("tossed-down")) {
    //     tdClasses.replace("tossed-down", "scaled-up");
    // }
    // if (!tdClasses.contains("scaled-up")) {
    //     tdClasses.add("scaled-up");
    // }


    // let tClasses = CARD_TITLE_ELEMENT.classList;
    // if (tClasses.contains("scaled-down")) {
    //     tClasses.replace("scaled-down", "scaled-up");
    // }
    // if (!tClasses.contains("scaled-up")) {
    //     tClasses.add("scaled-up");
    // }
    // let dClasses = CARD_DESCRIPTION_ELEMENT.classList;
    // if (dClasses.contains("scaled-down")) {
    //     dtClasses.replace("scaled-down", "scaled-up");
    // }
    // if (!dClasses.contains("scaled-up")) {
    //     tClasses.add("scaled-up");
    // }
};

// -----------------------------------------------------------------------
// Function to SAVE CARD SELECTION
function saveSelectedCard(selectedCard) {
    localStorage.setItem(STORED_CARD_TOKEN, selectedCard);
};

// -----------------------------------------------------------------------
// Function to check if page HAS SAVED CARD selection
function getSavedCard() {
    let storedCard = localStorage.getItem(STORED_CARD_TOKEN);
    return (storedCard > 0 && storedCard <= 22) ? storedCard : 0;
};

// -----------------------------------------------------------------------
// Initialize the Page
drawCard(getSavedCard());

