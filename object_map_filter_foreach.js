const objectMap = {
    data: [1, 2, 3, 4, 5],
    map: function(f) {
        const obj = {};
        obj.data = [];
        this.data.forEach(element => {
            obj.data.push(f(element));
        });
        obj.map = this.map.bind(obj);
        obj.filter = this.filter.bind(obj);
        obj.forEach = this.forEach.bind(obj);
        return obj;
    },
    filter: function(f) {
        const obj = {};
        obj.data = [];
        this.data.forEach(item => {
            if (f(item)) {
                obj.data.push(item);
            }
        });
        obj.map = this.map.bind(obj);
        obj.filter = this.filter.bind(obj);
        obj.forEach = this.forEach.bind(obj);
        return obj;
    },
    forEach: function(f) {
        for (item of this.data) {
            f(item);
        }
        /*
                obj.map = this.map.bind(obj);
                obj.filter = this.filter.bind(obj);
                obj.forEach = this.forEach.bind(obj);*/
    }
}

let res = objectMap.map(item => item * 2)
    //.map(item => item + 1).map(Math.sin);

console.log(res);
console.log('------------------------------------------------');

res = objectMap.filter(i => {
        if (i % 2 == 0) {
            return true;
        }
        return false;
    }).map(i => i + 1)
    .filter(i => {
        if (i < 4) {
            return false;
        }
        return true;
    });

console.log(res);

console.log('------------------------------------------------');
res.forEach(item => {
    console.log(item);
})