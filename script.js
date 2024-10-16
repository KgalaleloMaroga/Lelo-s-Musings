// Strings of poems
const poem1 = `For island fires and family

I will go miles on end

For death and pain

I will cry until the sun is cold

For life and love

I shall live until my heart dries out

For song and dance

I shall summon all the birds

For the moon and the stars 

I shall look into her eyes

For all the dreams and deep sleep

I shall call out to that boy within me

And for nostalgia and home

I shall visit that lake in the summertime

And for all these feelings 

I shall wrestle with death, refusing to fade.`;

const poem2 = `Nostalgia has me its victim

From the laughs

To the sweaty feet

To wearing flops and caps

I'm always reminded of the 

happy days back in that town

Nostalgia seems to be my friend

Reminding me of that dam that embodied peace

The waves that rippled through my hair

The cold water that kissed my skin so warmly

And the strangers that seem to love summer just as me

Nostalgia is seeping through the cracks

Taking me back to those long walks at night

Seeing the starry sky and 

breathing the damp air

Sharing conversation, drinking cola and fluffing the sheets.`;

const poem3 = `The scars will never heal
(They shall remain on my skin)

The memories will never fade
(They will burn my brain till sunset)

The song n dance will be forever
(And i will never perform again)

That fire can never burn out
(It engulfed both their hearts)

Their names will always ring a bell
(And I'll do anything to not hear it)

Time spent can never be retrieved
(As i struggle to appreciate it)

Sweet messages can't be forgotten
(And i wonder why i believed them in the first place)

All the flowers can never be unbought
(Our love died with them)

The pain is felt on every skin cell
(It shields me from the light)

The love still engulfs my heart
(I wish it to stop.)`;

const poem4 = `The depressed poet sits always in silence

He always writes but never reads

The depressed poet finds his poems too depressing

Too depressing to read or share

The depressed poet knows he's depressed

He's stuck in a cycle of sadness and addiction

The depressed poet is stuck in a dark room

With only loneliness as his companion

He was, is but will never be in love again

The depressed poet lives in grey

He will in that grey for a few more years

Then it will be permanent darkness

I am the Depressed Poet`;

const poem5 = `I wrote about you

In a small black book

That i keep hidden away

Very close to my heart

The words just came to my mind

The pen suddenly appeared in my hand

Your name and face drifted softly into my thoughts

My body shivered with excitement

To know you would be sort of a dream

To dance in your presence would be purest bliss

To admire you from afar would be all i need

Your beauty is untold

Your wit is unforgiving

And your name should command men to bow`;

// Array of poems titles and the corresponding poems
const poems = [
    { title: "For All Of It", content: poem1 },
    { title: "Hot Summer Nights", content: poem2 },
    { title: "Untitled #22", content: poem3 },
    { title: "The Depressed Poet", content: poem4 },
    { title: "The Muse", content: poem5 }
];

function displayPoemTitle(poemIndex) 
{
    // Store the selected poem index in local storage
    localStorage.setItem("selectedPoemIndex", poemIndex);
    window.location.href = "poem_page.html"; // Navigate to the poem page
}

// Function to dynamically create buttons with poem titles
function loadPoemButtons() 
{
    const buttonContainer = document.getElementById('buttonContainer');
    poems.forEach((poem, index) => {
        const button = document.createElement('button');
        button.innerText = poem.title;
        button.onclick = () => displayPoemTitle(index);
        buttonContainer.appendChild(button);
        buttonContainer.appendChild(document.createElement('br')); // Line break
    });
}

function loadPoem() 
{
    const index = localStorage.getItem("selectedPoemIndex");
    if (index !== null) {
        document.getElementById("poemTitle").innerText = poems[index].title;
        document.getElementById("poemContent").innerText = poems[index].content;
    }
}

// Check which function to call based on the page
if (document.getElementById('buttonContainer')) 
    {
    loadPoemButtons(); // Call this function on the main page
    } 
else if (document.getElementById('poemTitle')) 
    {
    loadPoem(); // Call this function on the poem page
    }
