'use strict';
var hbs = require('hbs');
module.exports = {
    helper:function(){
        var blocks = {};
        hbs.registerHelper('block',function(name,context){
            var val = (blocks[name] || []).join('');

	        // clear the block
	        blocks[name] = [];
	        return val;
        });

        hbs.registerHelper('extend',function(name,context){
            var block = blocks[name];
            if (!block) {
                block = blocks[name] = [];
            }

            block.push(context.fn(this)); // for older versions of handlebars, use block.push(context(this));
        })
    }
}