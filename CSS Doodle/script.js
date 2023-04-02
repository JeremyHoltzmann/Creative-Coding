const doodle = document.querySelector("css-doodle");

var elements = document
  .querySelector("css-doodle")
  .shadowRoot.querySelectorAll("cell");

var xTimer = 0;
var yTimer = 0;

var x = 1;
var y = 1;

window.setInterval(function () {
  xTimer++;
  yTimer++;
}, 1000);

function updateDoodle(x, y) {
  doodle.update(`
    :doodle {
      @grid: 18 / 100vmax;
      @shape: grid;
      background: #0a0c27;
      transition: 0.6s ease-in-out;
    }

    @even{
      @shape: hypocycloid 4;
        background: #60569e;
        transform: rotate(45deg);
        transition: 0.6s ease-in-out;
    }

    @hover
    {
      background: green;
    }
    

      @at(${x - 1}, ${y})
      {
                background: red;
transition: 1s ease ;
@shape:circle;
transform: rotate(45deg) scale(1.5);
      }

      @at(${x + 1}, ${y})
      {
        background: red;
transition: 1s ease ;
@shape:circle;
transform: rotate(45deg) scale(1.5);
      }

      @at(${x}, ${y - 1})
      {
                background: red;
transition: 1s ease ;
@shape:circle;
transform: rotate(45deg) scale(1.5);
      }

      @at(${x}, ${y + 1})
      {
        background: red;
transition: 1s ease ;
@shape:circle;
transform: rotate(45deg) scale(1.5);
      }
    `);
}

elements.forEach((cell) =>
  cell.addEventListener("mouseover", function (e) {
    const subString = cell.id.split("-");

    x = Number(subString[1]);
    y = Number(subString[2]);
    xTimer = 0;
    yTimer = 0;
    updateDoodle(x + xTimer, y + yTimer);
  })
);
