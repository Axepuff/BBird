function template(locals) {
var jade_debug = [ new jade.DebugItem( 1, "../Menu_component/components/menu/menu_tmp.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (data) {
jade_debug.unshift(new jade.DebugItem( 0, "../Menu_component/components/menu/menu_tmp.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "../Menu_component/components/menu/menu_tmp.jade" ));
buf.push("<div data=\"data\" class=\"menu\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 2, "../Menu_component/components/menu/menu_tmp.jade" ));
buf.push("<ul class=\"menu-list\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 3, "../Menu_component/components/menu/menu_tmp.jade" ));
buf.push("<li class=\"menu-list__item\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, "../Menu_component/components/menu/menu_tmp.jade" ));
buf.push("<a href=#{link}=\"href=#{link}\" class=\"menu-list__link\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, jade_debug[0].filename ));
buf.push("" + (jade.escape((jade_interp = data.name) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "div.menu(data)\r\n  ul.menu-list\r\n    li.menu-list__item\r\n      a.menu-list__link('href=#{link}') #{data.name}\r\n");
}
}