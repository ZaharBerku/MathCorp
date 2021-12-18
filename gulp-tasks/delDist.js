const del = require('del');

function delDist() {
    return del('dist'); 
}


exports.delDist = delDist;