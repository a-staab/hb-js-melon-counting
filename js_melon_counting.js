/* Versus Python, in Javascript variables need to be declared, and expressions
   are punctuated with a semi-colon. */

var melonsToAdd = ['Ogen', 'Horned Melon', 'Watermelon', 'Casaba',
                     'Sharlyn', 'Xigua', 'Ogen', 'Christmas', 'Christmas',
                     'Christmas', 'Christmas', 'Watermelon', 'Sharlyn', 'Xigua',
                     'Cantaloupe', 'Christmas', 'Watermelon', 'Christmas',
                     'Sharlyn', 'Christmas', 'Cantaloupe', 'Casaba', 'Cantaloupe',
                     'Santa Claus', 'Horned Melon', 'Watermelon', 'Ogen',
                     'Horned Melon', 'Cantaloupe', 'Xigua', 'Horned Melon', 'Sharlyn',
                     'Horned Melon', 'Sharlyn', 'Cantaloupe', 'Christmas',
                     'Horned Melon', 'Horned Melon', 'Horned Melon', 'Xigua', 'Xigua',
                     'Watermelon', 'Cantaloupe', 'Casaba', 'Cantaloupe', 'Casaba',
                     'Watermelon', 'Santa Claus', 'Casaba'];

// One of multiple ways to define a function is to preface it with "function."
function countMelons(melons){
        
    var melonCounts = {};
    var melon;

    for (var i = 0; i < melons.length; i++) {
        //Iterates over melons with i as index
        melon = melons[i];
        if (melon in melonCounts) {
            melonCounts[melon]++;
        } else {
            melonCounts[melon] = 1;
        }
    }

    return melonCounts;
}

countMelons(melonsToAdd);
