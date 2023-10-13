// styles.js
export const flex = {
   display: "flex",
};

export const itemsCenter = {
   alignItems: "center",
};

export const justifyCenter = {
   justifyContent: "center",
};
export const h = {
   screen: { height: "100vh" },
   full: { height: "100%" },
   fit: {
      height: "fit-content",
   },
};
export const relative = {
   position: "relative",
};
export const absolute = {
   position: "absolute",
};
export const rounded = {
   borderRadius: "3.125rem",
};
export const aspectVideo = {
   aspectRatio: "16/9",
};
export const bg = {
   white: { backgroundColor: "rgb(255 255 255)" },
   black: { backgroundColor: "rgb(0 0 0)" },
};
export const overflow = {
   hidden: {
      overflow: "hidden",
   },
};
export const grid = {
   gc1: {
      display: "grid",

      gridTemplateColumns: "repeat(1, minmax(0, 1fr)",
   },
   gc2: {
      display: "grid",

      gridTemplateColumns: "repeat(2, minmax(0, 1fr)",
   },
   gc3: {
      display: "grid",

      gridTemplateColumns: "repeat(3, minmax(0, 1fr)",
   },
};
export const col = {
   span1: {
      gridColumn: "span 1 / span 1",
   },
   span2: {
      gridColumn: "span 2 / span 2",
   },
   span3: {
      gridColumn: "span 3 / span 3",
   },
};
export const font = {
   bold: {
      fontFamily: "IBM Plex Mono, monospace",
      fontWeight: 700, // Specific font weight (e.g., 700 for bold)
   },
   light: {
      fontFamily: "Inter",
      fontWeight: "300",
   },
   nav: {
      fontFamily: "IBM Plex Mono, monospace",
   },
};
export const lgHover = {
   fontFamily: "inherit", // Use the default font family on hover
   fontSize: "300vh", // Change font size to 35px on hover
   cursor: "pointer", // Change cursor to pointer on hover
};

