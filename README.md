# P5JSInvoker
Used to make p5 settings simpler using Typescript


# Setup
Install the p5js and the @types

npm i p5
npm i @types/p5

# How to use it
Import the p5-jsinvoker.ts file
Then extend the P5JSInvoke abstract class.
Then override the functions setup() and draw()
Finally to instantiate the p5 on the screen call the startP5JS() function, passing the DOM container.

# Example of use
```
import { P5JSInvoker } from 'src/app/shared/classes/p5-jsinvoker';

export class RandomWalkerComponent extends P5JSInvoker implements OnInit{

  constructor() {
    super()
  }

  ngOnInit() {
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