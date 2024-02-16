
export const findBeerColor = (srmValue) => {
    if (srmValue >= 2 && srmValue <= 4) {
        return "Light Beer including Pale/Lite Lager, Pilsner, Berliner Weisse, Witbier, New England IPA";
    } else if (srmValue >= 3 && srmValue <= 6) {
        return "Maibock (Helles), Blonde Ale, California Common, Kolsch, Cream Ale";
    } else if (srmValue >= 4 && srmValue <= 8) {
        return "Weissbier, Lambic, Belgian Tripel";
    } else if (srmValue >= 6 && srmValue <= 12) {
        return "India Pale Ale (IPA), American Pale Ale";
    } else if (srmValue >= 8 && srmValue <= 16) {
        return "Saison, English Pale Ale, Irish Red Ale";
    } else if (srmValue >= 10 && srmValue <= 20) {
        return "English Bitter (ESB), Belgian Dubbel";
    } else if (srmValue >= 13 && srmValue <= 26) {
        return "Double IPA, Biere de Garde, Altbier, Barleywine, Scotch Ale";
    } else if (srmValue >= 17 && srmValue <= 33) {
        return "Amber Ale, Vienna Lager, Dark Lager, Marzen";
    } else if (srmValue >= 20 && srmValue <= 39) {
        return "Bock, Dunkelweizen, Brown Ale, Brown Porter";
    } else if (srmValue >= 24 && srmValue <= 47) {
        return "Robust Porter, Dopplebock, Irish Dry Stout, Oatmeal Stout";
    } else if (srmValue >= 29 && srmValue <= 57) {
        return "American Stout";
    } else if (srmValue >= 35 && srmValue <= 79) {
        return "Russian Imperial Stout";
    } else {
        return "Unknown";
    }
};
