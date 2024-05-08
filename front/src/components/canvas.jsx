import { useState, useRef, useEffect } from 'react';

const Canvas = () => {
    const [shapes, setShapes] = useState([]);
    const canvasElement = useRef();
    const animationFrame = useRef();

    useEffect(() => {
        const canvas = canvasElement.current;
        const parent = canvas.parentElement;
        const ctx = canvas.getContext('2d');

        function resizeCanvas() {
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;
        }

        resizeCanvas();

        function rand(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        function Shape(ctx, x, y) {
            this.ctx = ctx;
            this.init(x, y);
        }

        Shape.prototype.init = function(x, y) {
            this.x = x;
            this.y = y;
            this.r = rand(10, 25);
            this.ga = Math.random() * Math.random() * Math.random() * Math.random();
            this.v = {
                x: Math.random(),
                y: -1
            };
            this.l = rand(0, 20);
            this.sl = this.l;
        };

        Shape.prototype.updateParams = function() {
            this.l -= 1;
            if (this.l < 0) {
                this.init(canvas.width * (Math.random() + Math.random()) / 2, rand(0, canvas.height));
            }
        };

        Shape.prototype.updatePosition = function() {
            this.x += Math.random() ;
            this.y += -Math.random();
        };

        Shape.prototype.draw = function() {
            let ctx  = this.ctx;
            ctx.save();
            ctx.globalCompositeOperation = 'lighter';
            ctx.globalAlpha = this.ga;
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
            ctx.fill();
            ctx.restore();
        };

        Shape.prototype.render = function() {
            this.updatePosition();
            this.updateParams();
            this.draw();
        };

        for (let i = 0; i < 300; i++) {
            let s = new Shape(ctx, canvas.width * (Math.random() + Math.random()) / 2, rand(0, canvas.height));
            shapes.push(s);
        }

        function render() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < shapes.length; i++) {
                shapes[i].render(i);
            }
            animationFrame.current = requestAnimationFrame(render);
        }

        render();

        function onResize() {
            resizeCanvas();
            setShapes((prevShapes) => [...prevShapes]);
        }

        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
            if (animationFrame.current) {
                cancelAnimationFrame(animationFrame.current);
            }
        };
    }, []);

    return (
        <>
            <canvas id="canvas" ref={canvasElement} />
        </>
    );
};

export default Canvas;
