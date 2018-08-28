window.addEventListener( "DOMContentLoaded", function() {
    new Life({
        id: '#root',
        grid: 36,
        timeout: 400,
        start: true
    });
});


class Life {
    constructor(settings) {

        const { id, grid, timeout, start } = settings;

        this._alive = start;
        this._timeout = timeout;
        this._grid = grid;
        this._container = document.querySelector(id);
        this._hideGrid = {};
        this.grid()
    }

    grid() {

        let holder = document.createElement('div');

            holder.setAttribute('class', 'holder');

        const sizeElem = sizeElemFunc(this._container, this._grid);

        function sizeElemFunc (cont, grid) {
            let sizeContainer = parseInt(cont.clientWidth);
            return sizeContainer / grid;
        }

            for (let r = 0; r <=  this._grid; r++) {
                let row = document.createElement('div');
                row.setAttribute('class', 'holder__row');
                for(let c = 0; c <=  this._grid; c++) {
                    let elem = document.createElement('div');

                    elem.setAttribute('class', 'holder__item');

                    this._hideGrid[`${r} ${c}`] = {row: r, col: c}

                    elem.setAttribute('data-coordinates', `${r} ${c}`);

                    elem.style.cssText += `width: ${sizeElem}px; height: ${sizeElem}px;`

                    row.appendChild(elem)
                }

                holder.appendChild(row)
            }

            this._container.appendChild(holder);
            this.randomAlive();
            this.neighbors (this._hideGrid)
    }


    randomAlive () {

        for (let i = 0 ; i <= this._grid; i++) {

            for (let q = 0 ; q <= this._grid; q++) {
                this._hideGrid[`${i} ${q}`].alive =  Math.random() < .5;
            }
        }

        this.render ()
    }

    lifeReview () {
        let lifeReviewObj = {},
            stausReview = (arr) => {

                let count = 0;
                for (let r = 0 ; r < arr.length; r++ ) {
                    for(let c = 0; c < arr[r].length; c++) {
                        let alive = this._hideGrid[`${arr[r][c]}`] === undefined ? false : this._hideGrid[`${arr[r][c]}`].alive;

                        count += alive ? 1 : 0

                    }

                }
                return count
        };


        for (let key in this._hideGrid) {
            lifeReviewObj[key] = {
                review: stausReview (this._hideGrid[key].neighbors),
                oldLife: this._hideGrid[key].alive
                }
        }

        for (let key in lifeReviewObj) {
            let numb = lifeReviewObj[key].review,
                old = lifeReviewObj[key].oldLife;

            let status = numb == 0 || numb == 1 || numb > 3 ? 'dead':
                         numb == 3 && old == true ? 'dead':
                         2 <= numb <= 3 ? 'life':
                         old == false && numb == 3 ? 'life': 'dead',

                isLife = status === 'life' ? this._hideGrid[key].alive = true: this._hideGrid[key].alive = false;
        }

         this.render ();

         setTimeout(this.lifeReview.bind(this), this._timeout)
    }

    neighbors (obj) {



        for (let key in obj) {

            let { row, col } = obj[key]

            if(!obj[key].neighbors) {
                let $row00 = (row - 1) < 0 ? this._grid: row - 1,
                    $row01 = (row - 1) < 0 ? this._grid: row - 1,
                    $row02 = (row - 1) < 0 ? this._grid: row - 1,
                    $col00 = (col - 1) < 0 ? this._grid: col - 1,
                    $col01 = col - 1,
                    $col02 = (col + 1) > this._grid ? 0: col + 1;

                obj[key].neighbors = [
                    [
                        `${$row00} ${$col00}`,
                        `${$row01} ${col}`,
                        `${$row02} ${$col02}`
                    ],
                    [
                        `${row} ${(col - 1) < 0 ? this._grid:col -1 }`,
                        `null`,
                        `${row} ${(col + 1) > this._grid ? 0:col + 1}`
                    ],
                    [
                        `${(row + 1) > this._grid ? 0 : row + 1 } ${(col + 1) < this._grid ? 0:col + 1}`,
                        `${(row + 1) > this._grid ? 0 : row + 1} ${col}`,
                        `${(row + 1) > this._grid ? 0:row + 1} ${(col + 1) > this._grid ? 0:col + 1}`]
                ]
            }

        }

        this.lifeReview();
    }

    render () {

        for (let key in this._hideGrid) {
            let elem = this._container.querySelector(`div[data-coordinates="${key}"]`);

            if (this._hideGrid[key].alive && this._hideGrid[key].alive === true) {
                 elem.classList.add('active');
            } else {
                elem.classList.remove('active');
            }
        }
    }
}
