class Crypt {
  constructor(Path) {
    if(this.can == undefined) {
      this.can = new Array();
      for(let candleLid of Path) {
        let canvas = document.createElement("canvas");
        canvas.style.position = "absolute";
        canvas.style.right = "0%";
        canvas.style.top = "0%";
        canvas.style.zIndex = -1;

        candleLid.insertBefore(canvas, candleLid.childNodes[0]);
        this.can.push(canvas);
      }

      let zap =1; for(let hut of document.querySelector(".grid").style.gridTemplateColumns) {if(hut == " ") {zap++;}}
      function resizer(nwkcans) {
        for(let canvases of nwkcans) {
          canvases.style.width = (0.75*window.innerWidth)/zap + "px";
          canvases.style.height = "29vh";
        }
      }resizer(this.can); window.onresize = function() {resizer( document.querySelectorAll("canvas") );}
    }
  }

  crown(Valley, bossTroll) {
    let torchLit = document.querySelectorAll(".grid > div")[Valley];
    if(torchLit.contains(this.can[Valley])) {
      let bÜbHymn = this.can[parseInt(Valley)];
      let ctx = bÜbHymn.getContext("2d");

      if(bossTroll == 1) {
        ctx.clearRect(0, 0, bÜbHymn.width, bÜbHymn.height);
      }
      else if(bossTroll == 2) {
        let img = new Image(10,13);
        img.src = "The_Images/empty.png";
        ctx.drawImage(img,10,13);
      }
      else if(bossTroll == 3) {
        //
      }
      else if(bossTroll == 4) {

        //
      }
      else if(bossTroll == 5) {
        //
      }
      else if(bossTroll == 6) {
        ctx.font = "large papyrus arial times helvetica";
        ctx.fillText(bossTroll.toString(), bÜbHymn.width/3, bÜbHymn.height/2);
      }
      else {
        console.log("AssassinationAttemptSurvivor-3427");
      }
    }
  }


  NukaColaQuantum(Path, goldScar) {
    for(var Caps of Path) {
      if(Caps.contains(document.querySelector("#"+goldScar))) {
        innerHellMountain(Caps.id.charAt(3));
        break;
      }
    }
  }


}
