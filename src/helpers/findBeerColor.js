export const findBeerColor = (srmValue) => {
    let beerColor = {};
    switch (true) {
        case (srmValue >= 2 && srmValue <= 4):
            beerColor = {
                name: "Pilsener",
                className: "light-beer",
                description: "Light Beer including Pale/Lite Lager, Pilsner, Berliner Weisse, Witbier, New England IPA"
            };
            break;
        case (srmValue >= 3 && srmValue <= 6):
            beerColor = {
                name: "Maibock",
                className: "maibock",
                description: "Maibock (Helles), Blonde Ale, California Common, Kolsch, Cream Ale"
            };
            break;
        case (srmValue >= 4 && srmValue <= 8):
            beerColor = {
                name: "Weissbier",
                className: "weissbier",
                description: "Weissbier, Lambic, Belgian Tripel"
            };
            break;
        case (srmValue >= 6 && srmValue <= 12):
            beerColor = {
                name: "IPA",
                className: "india-pale-ale",
                description: "India Pale Ale (IPA), American Pale Ale"
            };
            break;
        case (srmValue >= 8 && srmValue <= 16):
            beerColor = {
                name: "Saison",
                className: "saison",
                description: "Saison, English Pale Ale, Irish Red Ale"
            };
            break;
        case (srmValue >= 10 && srmValue <= 20):
            beerColor = {
                name: "English Bitter",
                className: "english-bitter",
                description: "English Bitter (ESB), Belgian Dubbel"
            };
            break;
        case (srmValue >= 13 && srmValue <= 26):
            beerColor = {
                name: "Double IPA",
                className: "double-ipa",
                description: "Double IPA, Biere de Garde, Altbier, Barleywine, Scotch Ale"
            };
            break;
        case (srmValue >= 17 && srmValue <= 33):
            beerColor = {
                name: "Amber Ale",
                className: "amber-ale",
                description: "Amber Ale, Vienna Lager, Dark Lager, Marzen"
            };
            break;
        case (srmValue >= 20 && srmValue <= 39):
            beerColor = {
                name: "Bock bier",
                className: "bock",
                description: "Bock, Dunkelweizen, Brown Ale, Brown Porter"
            };
            break;
        case (srmValue >= 24 && srmValue <= 47):
            beerColor = {
                name: "Dubbel Bock",
                className: "robust-porter",
                description: "Robust Porter, Dopplebock, Irish Dry Stout, Oatmeal Stout"
            };
            break;
        case (srmValue >= 29 && srmValue <= 57):
            beerColor = {
                name: "American Stout",
                className: "american-stout",
                description: "American Stout"
            };
            break;
        case (srmValue >= 35 && srmValue <= 79):
            beerColor = {
                name: "Imperial Stout",
                className: "russian-imperial-stout",
                description: "Imperial Stout"
            };
            break;
        default:
            beerColor = {
                className: "unknown",
                description: "Unknown"
            };
            break;
    }
    return beerColor;
};
