# P5JSInvoker
Used to make p5 settings simpler using Typescript


# Setup
Install the p5js and the @types

- npm i p5
- npm i @types/p5

# How to use it
- Import the file p5-jsinvoker.ts
- Then extend the abstract class P5JSInvoke.
- Then override the setup() and draw() functions
- Finally, to instantiate p5 on the screen, call the function startP5JS(), passing the DOM container as an argument.

# Example of use
```javascript
import { P5JSInvoker } from 'src/p5-jsinvoker';

export class RandomWalkerComponent extends P5JSInvoker implements OnInit{

  constructor() {
    super()
    this.startP5JS(document.body);
  }

  setup(p:p5) {
    p.createCanvas(400, 400);
  }

  draw(p:p5) {
    p.stroke(0);
    p.circle(200, 200, 2);
  }
}
```