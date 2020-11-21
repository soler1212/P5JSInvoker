import * as p5 from 'p5';

export abstract class P5JSInvoker {
    abstract setup(p: p5) : void;
    abstract draw(p: p5) : void;

    protected startP5JS(containerElement: HTMLElement): void {
        new p5(this.generate_sketch(), containerElement);
    }

    private generate_sketch() {
        let that = this;

        return ((p: p5) => {
            
            p.setup = function() {
                that.setup(p)
            };

            p.draw = function() {
                that.draw(p);
            };
        })
    }
}
  