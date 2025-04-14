const maleFirstNames = [
    "Bjorn", "Eirik", "Leif", "Sven", "Thorsten",
    "Haldor", "Ragnar", "Sigurd", "Ulrik", "Viggo",
    "Asmund", "Dag", "Frode", "Gunnar", "Harald",
    "Ivar", "Jorund", "Kjell", "Lars", "Magnus",
    "Njal", "Olaf", "Rolf", "Sten", "Trygve",
    "Ulf", "Vidar", "Yngvar", "Aksel", "Bard",
    "Eldar", "Finn", "Geir", "Hakon", "Ingvar",
    "Jarl", "Ketil", "Loki", "Morten", "Nils",
    "Oddvar", "Per", "Rune", "Sigmund", "Torvald",
    "Viktor", "Arvid", "Brynjar", "Eyvind", "Halvard",
    "Isak", "Knut", "Ludvik", "Mads", "Njord",
    "Odin", "Peder", "Roald", "Sindre", "Tormod",
    "Ulfar", "Vemund", "Yrjan", "Agnar", "Berg",
    "Eirikur", "Folke", "Gudmund", "Hemming", "Ingmar"
]; // 75 Nordic Male First Names

const femaleFirstNames = [
    "Astrid", "Freya", "Ingrid", "Sigrid", "Thyra",
    "Solveig", "Gunnhild", "Liv", "Ragnhild", "Yrsa",
    "Alfhild", "Dagny", "Eira", "Gudrun", "Hedvig",
    "Idunn", "Kari", "Lotta", "Maren", "Nanna",
    "Oda", "Runa", "Signe", "Tora", "Vigdis",
    "Asta", "Birgit", "Embla", "Frida", "Greta",
    "Hilda", "Jorunn", "Kirsten", "Lena", "Marta",
    "Nina", "Olga", "Petra", "Rakel", "Sanna",
    "Tiril", "Ulla", "Vera", "Åsa", "Bente",
    "Cecilie", "Dorthe", "Elin", "Frode", "Gerd",
    "Hanne", "Inga", "Janne", "Kjersti", "Lise",
    "Mette", "Nora", "Oline", "Pernille", "Rikke",
    "Sofia", "Tove", "Unni", "Vilde", "Åshild",
    "Anja", "Brita", "Edel", "Freyja", "Gry",
    "Hedda", "Irene", "Janneke", "Karin", "Laila"
]; // 75 Nordic Female First Names

const lastNames = [
    "Stormwraithe", "Ironvalor", "Shadowmourn", "Brightward", "Dusksong",
    "Flameborne", "Ravenhallow", "Silvershard", "Thornwylde", "Frostbane",
    "Blackbriar", "Goldhaven", "Moonlance", "Stonecleft", "Windreaver",
    "Ashenvyre", "Grimhowl", "Hollowmere", "Starwhisper", "Nightthorn",
    "Drakenshield", "Oakenwrath", "Winterthorn", "Firevein", "Darkhollow",
    "Sunforge", "Wolfshade", "Ironbark", "Silverhollow", "Stormquill",
    "Dreadhallow", "Brightpyre", "Shadowglen", "Frostwraithe", "Ravenfyre",
    "Thunderbane", "Goldbloom", "Moonspire", "Stonewylde", "Windshard",
    "Ashenquill", "Grimspire", "Hollowthorn", "Starborne", "Nightpyre",
    "Drakensong", "Oakensoul", "Winterwylde", "Firethorn", "Darkspire",
    "Shadowforge", "Ironshade", "Frostwhisper", "Brightthorn", "Duskwind",
    "Flamewhisper", "Ravenstone", "Silverthorn", "Thornspire", "Frostshadow",
    "Blackthorn", "Goldspire", "Moonshadow", "Stoneforge", "Windthorn",
    "Ashenbane", "Grimthorn", "Hollowshade", "Starspire", "Nightforge",
    "Drakenbane", "Oakenshield", "Wintershade", "Firewhisper", "Darkthorn",
    "Shadowbane", "Ironspire", "Frostglade", "Brightshade", "Duskforge"
]; // 75 Last Names

const random = num => {
    return Math.floor(Math.random() * num);
}; // Simple random number generator

const generateName = () => {
    const gender = random(2);
    switch (gender) {
        case 0:
            return `${maleFirstNames[random(maleFirstNames.length)]} ${lastNames[random(lastNames.length)]}`;
        case 1:
            return `${femaleFirstNames[random(femaleFirstNames.length)]} ${lastNames[random(lastNames.length)]}`;
    }
}; // Generates a random name based off the randomized gender