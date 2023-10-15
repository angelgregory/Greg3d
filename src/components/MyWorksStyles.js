export const style = `
  @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@700&family=Inter:wght@300;700&display=swap");
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  body {
    margin: 0px;
    padding: 0px;

  }
  .h-screen{
   height:100vh;
  }
  p{
    margin:0;
    padding:0;

  }
  .folder-name{
   
    text-align:center;

  }
  .folder{
    padding-bottom:5;
  }
  .w-screen{
    width:100vw;
  }
  .h-full{
    height:100%
  }
  .h-half{
    height:50%;
  }
  .w-full{
    width:100%;
  }
  .w-half{
    width:50%;
  }
  .relative{
    position:relative;
  }
  .absolute{
    position:absolute;
  }
  .flex{
    display:flex;
  }
  .square{
    height:15vh;
    width:15vh;
  }
  .center{
    right:50;
  }
  .border{
    border-style: solid;
    border-color: green;
  }
  .w3{
    width:70%;
    height:auto;
  }
  .center{
    justify-content:center;
  }
  .middle{
    align-items:center;
  }
  .bot{
    bottom:0;
    left:0;
  }
  .folders{
    width:10%;
  }
  .pbs-1{
    padding-bottom:50px
  }
  .modal{
    height:50%;
    width:50%;
  }
  .page{
    height:70%;
    width:70%;
    aspect-ratio:16/9
  }
  .aspect-video{
    aspet-ratio:16/9;
  }
  .half{
    transform: scale(0.5);
  }
  .container .bg{
    height:100%;
    aspect-ratio:16/9
  }
  .top{
    top:0;
    left:0;
  }
  .flex-col{
    flex-direction:column;
  }
  .right-shadow{
    background-color:#333333;
    opacity:0.5;
  }
  .z-1{
    z-index:1;
  }
  .backpage{
    z-index:-1;
    top:1vh;
    left:1vh;
    width:100%;
    height:100%;
  }
  .folder-scale{
   
    transform: scale(0.7);
  }
  .off:hover{
    transform:scale(0.7)
    
  }
  .work-folder{
    top:-10%;
    right:-10%;

  }
  .works{
    background-color:#F2FDFF;
    opacity:0.6;
  }

`;
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