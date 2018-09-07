//Dont change it
//Dont change it
requirejs(['ext_editor_io', 'jquery_190', 'raphael_210'],
    function (extIO, $) {
        function stonewallCanvas(dom, input, answer) {
            const attr = {
                you: {
                    'stroke': 'orange',
                    'fill': 'orange',
                },
                number: {
                    'stroke': 'darkblue',
                    "stroke-width": 0.5,
                    'fill': 'darkblue',
                    'font-size': '22px',
                },
                rect: {
                    frame: {
                        'stroke': 'darkblue',
                        'stroke-width': 0.5,
                        'fill': 'white',
                    },
                    empty: {
                        white: {
                            'stroke': '#006CA9',
                            'stroke-width': 0.0,
                            'fill': 'white',
                        },
                        orange: {
                            'stroke': '#006CA9',
                            'stroke-width': 0.0,
                            'fill': 'orange',
                        }
                    },
                    wall: {
                        blue: {
                            'stroke': 'white',
                            'stroke-width': 0.5,
                            'fill': '#6FB3DE',
                        },
                        orange: {
                            'stroke': 'white',
                            'stroke-width': 0.5,
                            'fill': '#FAA200',
                        },
                    },
                },
            };

            /*----------------------------------------------*
             *
             * the stone wall
             *
             *----------------------------------------------*/

            const SIZE = 30; 
            const os = SIZE/2;
            const map = input.split('\n').filter(x=>x.length);
            const [w, h] = [map[0].length, map.length];
            const paper = Raphael(dom, SIZE*w+os+1, SIZE*(h+1)+os+1, 0, 0);

            // draw grid
            for (let i=0; i < h; i += 1) {
                for (let j=0; j < w; j += 1) {
                    if (map[i][j] === '#') {
                        let w_a = attr.rect.wall.blue;
                        if (j===answer) {
                            w_a = attr.rect.wall.orange;
                        }

                        if (i % 2) {
                            draw_wall(j, i, w_a);
                        } else {
                            draw_wall2(j, i, w_a);
                        }

                    } else {
                        paper.rect(
                            SIZE*j+os,
                            SIZE*i+os,
                            SIZE, SIZE).attr(attr.rect.frame);

                        let w_a = attr.rect.empty.white;
                        if (j===answer) {
                            w_a = attr.rect.empty.orange;
                        }
                        paper.rect(
                            SIZE*j+os+1,
                            SIZE*i+os+1,
                            SIZE-2, SIZE-2).attr(w_a);
                    }
                }
            }

            // draw you, number
            for (let i=0; i < 10; i += 1) {
                if (i==answer) {
                    draw_you(i, h);
                }
                draw_number(i, h, i);
            };

            /*----------------------------------------------*
             *
             * number
             *
             *----------------------------------------------*/
            function draw_number(x, y, n) {
                x = x * SIZE + os + 15;
                y = y * SIZE + os + 15;
                
                paper.text(x, y, n).attr(attr.number);
            }

            /*----------------------------------------------*
             *
             * you 
             *
             *----------------------------------------------*/
            function draw_you(x, y) {

                x = x * SIZE + os + 15;
                y = y * SIZE + os + 8;
                paper.circle(x, y, 6).attr(attr.you);
                paper.circle(x, y+14, 6).attr(attr.you);
                paper.rect(x-6, y+15, 12, 5).attr(attr.you);
            }

            /*----------------------------------------------*
             *
             * wall
             *
             *----------------------------------------------*/
            function draw_wall(x, y, at) {

                x = x * SIZE + os;
                y = y * SIZE + os;
                paper.rect(x, y,  SIZE, SIZE).attr(attr.rect.frame),
                paper.rect(x+1, y+1, 10, 9).attr(at),
                paper.rect(x+11, y+1, 18, 9).attr(at),
                paper.rect(x+1, y+10, 20, 10).attr(at),
                paper.rect(x+21, y+10, 8, 10).attr(at),
                paper.rect(x+1, y+20, 10, 9).attr(at),
                paper.rect(x+11, y+20, 18, 9).attr(at)
            }

            /*----------------------------------------------*
             *
             * wall2
             *
             *----------------------------------------------*/
            function draw_wall2(x, y, at) {

                x = x * SIZE + os;
                y = y * SIZE + os;
                paper.rect(x, y,  SIZE, SIZE).attr(attr.rect.frame),
                paper.rect(x+1, y+1, 20, 9).attr(at),
                paper.rect(x+21, y+1, 8, 9).attr(at),
                paper.rect(x+1, y+10, 10, 10).attr(at),
                paper.rect(x+11, y+10, 18, 10).attr(at),
                paper.rect(x+1, y+20, 20, 9).attr(at),
                paper.rect(x+21, y+20, 8, 9).attr(at)
            }
        }
        
        var $tryit;

        var io = new extIO({
            multipleArguments: false,
            functions: {
                python: 'stone_wall',
                js: 'stoneWall'
            },
            animation: function($expl, data){
                stonewallCanvas($expl[0],
                    data.in, data.ext.answer);
            }
        });
        io.start();
    }
);
