let Cell = function (x , y) {
    this.size = 40;
    this.x = x;
    this.y = y;
    this.value = '';
    this.getHtml =  function () {
        let top = this.x * this.size;
        let letf = this.y * this.size;
        let getHtml = '<div id ="cell-' + this.x +'-'+ this.y+'" '+ 'onclick = "play('+this.x +","+this.y+')"'+
            " class =" + '"cell" '+ "style="+ ' "position: absolute; width:' + this.size+"px; height:" + this.size+"px;"
            + 'left:' + letf +"px; top:"+ top + "px;" + "line-height: "+this.size+"px;"
            +'">' + "</div>";
        return getHtml;
    }
    this.draw = function () {
        let cellDiv = document.getElementById("cell-" + this.x +'-'+ this.y);
        cellDiv.innerHTML = this.value;
    }

}

let cell = new Cell(3,4);
console.log(cell.getHtml());