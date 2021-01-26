import * as p5 from 'p5';

export abstract class P5JSInvoker {
  protected p5: p5;

  abstract setup() : void;
  abstract draw() : void;

  protected startP5JS(containerElement: HTMLElement): void {
    this.p5 = new p5(this.generate_sketch(), containerElement);
  }

  private generate_sketch() {
      const that = this;

      return ((p: p5) => {
        p.setup = function() {
            that.setup();
        };

        p.draw = function() {
            that.draw();
        };
      })
  }
}
