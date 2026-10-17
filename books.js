// The 41 Discworld novels in publication order.
const BOOKS = [
  { n: 1, title: "The Colour of Magic", year: 1983, series: "Rincewind/Wizards" },
  { n: 2, title: "The Light Fantastic", year: 1986, series: "Rincewind/Wizards" },
  { n: 3, title: "Equal Rites", year: 1987, series: "Witches" },
  { n: 4, title: "Mort", year: 1987, series: "Death" },
  { n: 5, title: "Sourcery", year: 1988, series: "Rincewind/Wizards" },
  { n: 6, title: "Wyrd Sisters", year: 1988, series: "Witches" },
  { n: 7, title: "Pyramids", year: 1989, series: "Standalone" },
  { n: 8, title: "Guards! Guards!", year: 1989, series: "City Watch" },
  { n: 9, title: "Eric", year: 1990, series: "Rincewind/Wizards" },
  { n: 10, title: "Moving Pictures", year: 1990, series: "Standalone" },
  { n: 11, title: "Reaper Man", year: 1991, series: "Death" },
  { n: 12, title: "Witches Abroad", year: 1991, series: "Witches" },
  { n: 13, title: "Small Gods", year: 1992, series: "Standalone" },
  { n: 14, title: "Lords and Ladies", year: 1992, series: "Witches" },
  { n: 15, title: "Men at Arms", year: 1993, series: "City Watch" },
  { n: 16, title: "Soul Music", year: 1994, series: "Death" },
  { n: 17, title: "Interesting Times", year: 1994, series: "Rincewind/Wizards" },
  { n: 18, title: "Maskerade", year: 1995, series: "Witches" },
  { n: 19, title: "Feet of Clay", year: 1996, series: "City Watch" },
  { n: 20, title: "Hogfather", year: 1996, series: "Death" },
  { n: 21, title: "Jingo", year: 1997, series: "City Watch" },
  { n: 22, title: "The Last Continent", year: 1998, series: "Rincewind/Wizards" },
  { n: 23, title: "Carpe Jugulum", year: 1998, series: "Witches" },
  { n: 24, title: "The Fifth Elephant", year: 1999, series: "City Watch" },
  { n: 25, title: "The Truth", year: 2000, series: "Standalone" },
  { n: 26, title: "Thief of Time", year: 2001, series: "Death" },
  { n: 27, title: "The Last Hero", year: 2001, series: "Rincewind/Wizards" },
  { n: 28, title: "The Amazing Maurice and His Educated Rodents", year: 2001, series: "Standalone" },
  { n: 29, title: "Night Watch", year: 2002, series: "City Watch" },
  { n: 30, title: "The Wee Free Men", year: 2003, series: "Tiffany Aching" },
  { n: 31, title: "Monstrous Regiment", year: 2003, series: "Standalone" },
  { n: 32, title: "A Hat Full of Sky", year: 2004, series: "Tiffany Aching" },
  { n: 33, title: "Going Postal", year: 2004, series: "Moist von Lipwig" },
  { n: 34, title: "Thud!", year: 2005, series: "City Watch" },
  { n: 35, title: "Wintersmith", year: 2006, series: "Tiffany Aching" },
  { n: 36, title: "Making Money", year: 2007, series: "Moist von Lipwig" },
  { n: 37, title: "Unseen Academicals", year: 2009, series: "Rincewind/Wizards" },
  { n: 38, title: "I Shall Wear Midnight", year: 2010, series: "Tiffany Aching" },
  { n: 39, title: "Snuff", year: 2011, series: "City Watch" },
  { n: 40, title: "Raising Steam", year: 2013, series: "Moist von Lipwig" },
  { n: 41, title: "The Shepherd's Crown", year: 2015, series: "Tiffany Aching" },
];

// Sub-series in display order for the "group by sub-series" view.
// colour: spine colour; ink: text colour on the spine; glyph: secondary marker
// so a sub-series is never identified by colour alone.
const SERIES = [
  { name: "Rincewind/Wizards", colour: "#eda100", ink: "#2b2118", glyph: "\u2605" },        // star
  { name: "Witches",           colour: "#008300", ink: "#fbf5e6", glyph: "\u25B2" },        // pointy hat
  { name: "Death",             colour: "#6250d6", ink: "#fbf5e6", glyph: "\u2620\uFE0E" }, // skull
  { name: "City Watch",        colour: "#2a78d6", ink: "#fbf5e6", glyph: "\u2694\uFE0E" }, // swords
  { name: "Tiffany Aching",    colour: "#1baf7a", ink: "#2b2118", glyph: "\u273F" },        // flower
  { name: "Moist von Lipwig",  colour: "#eb6834", ink: "#2b2118", glyph: "\u2709\uFE0E" }, // envelope
  { name: "Standalone",        colour: "#e87ba4", ink: "#2b2118", glyph: "\u25CF" },        // dot
];
