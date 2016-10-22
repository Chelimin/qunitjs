class Grid {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.cells = width*height;
  }
}


QUnit.test( "hello grid3", function( assert ) {
  var testGrid = new Grid(3,3)
  assert.ok(testGrid.cells == 9, "Passed!" );
});


//check cells alive or dead

class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.alive = false //cell is dead by default
  }

  live() {

    this.alive = true
  }

  kill(){
    this.alive = false
  }

}

QUnit.test( "hello cell", function( assert ) {
  var cell = new Cell(1,2);
  assert.ok(cell.alive == false);
});

QUnit.test( "cell can be brought to life", function( assert ) {
  var cell = new Cell(1,2);
  cell.live()
  assert.ok(cell.alive == true);
});

QUnit.test( "cell can be killed", function( assert ) {
  var cell = new Cell(1,2);
  cell.live()
  cell.kill()
  assert.ok(cell.alive == false);
});
