var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'canvasId']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'text']])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[1,'uni-collapse-cell']],[[4],[[5],[[5],[[2,'?:'],[[7],[3,'disabled']],[1,'uni-collapse-cell--disabled'],[1,'']]],[[2,'?:'],[[7],[3,'isOpen']],[1,'uni-collapse-cell--open'],[1,'']]]]]])
Z([[2,'?:'],[[7],[3,'disabled']],[1,''],[1,'uni-collapse-cell--hover']])
Z([3,'__e'])
Z([3,'uni-collapse-cell__title'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'thumb']])
Z([3,'__l'])
Z([3,'#bbb'])
Z([3,'20'])
Z([3,'arrowdown'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'uni-list-item']],[[2,'?:'],[[7],[3,'disabled']],[1,'uni-list-item--disabled'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'?:'],[[2,'||'],[[7],[3,'disabled']],[[7],[3,'showSwitch']]],[1,''],[1,'uni-list-item--hover']])
Z([3,'uni-list-item__container'])
Z([[7],[3,'thumb']])
Z([[7],[3,'showExtraIcon']])
Z([3,'__l'])
Z([[6],[[7],[3,'extraIcon']],[3,'color']])
Z([[6],[[7],[3,'extraIcon']],[3,'size']])
Z([[6],[[7],[3,'extraIcon']],[3,'type']])
Z([3,'1'])
Z([[7],[3,'note']])
Z([[2,'||'],[[2,'||'],[[7],[3,'showBadge']],[[7],[3,'showArrow']]],[[7],[3,'showSwitch']]])
Z([3,'uni-list-item__extra'])
Z([[7],[3,'showBadge']])
Z(z[7])
Z([[7],[3,'badgeText']])
Z([[7],[3,'badgeType']])
Z([3,'2'])
Z([[7],[3,'showSwitch']])
Z([[7],[3,'showArrow']])
Z(z[7])
Z([3,'#bbb'])
Z([1,20])
Z([3,'arrowright'])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[1,'uni-popup']],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'uni-popup-'],[[7],[3,'position']]],[1,' ']],[1,'uni-popup-']],[[7],[3,'mode']]]]])
Z([[2,'!'],[[7],[3,'show']]])
Z([[2,'&&'],[[2,'==='],[[7],[3,'position']],[1,'middle']],[[2,'==='],[[7],[3,'mode']],[1,'insert']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([3,'line'])
Z([3,'ec-canvas vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^onInit']],[[4],[[5],[[4],[[5],[1,'lineInit']]]]]]]]])
Z([3,'lineChart'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'yangan'])
Z([3,'top db uni-list-cell'])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'fn12'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[1,'pickerChange']]]]]]]]])
Z([3,'1'])
Z(z[2])
Z([[7],[3,'optDevice']])
Z([3,'2'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[1,'changeStatus']]]]]]]]])
Z([[7],[3,'optStatus']])
Z([3,'3'])
Z([3,'__i0__'])
Z([3,'item'])
Z([[7],[3,'list']])
Z([3,'termId'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'opanDetail']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'list']],[1,'termId']],[[6],[[7],[3,'item']],[3,'termId']]]]]]]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'termName']])
Z([[2,'+'],[1,'4-'],[[7],[3,'__i0__']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'vue-ref'])
Z([3,'checkLocation1'])
Z([3,'1'])
Z(z[0])
Z(z[1])
Z([3,'checkLocation2'])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([3,'__l'])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z(z[1])
Z([3,'员工信息'])
Z([[2,'+'],[[2,'+'],[1,'2'],[1,',']],[1,'1']])
Z(z[3])
Z(z[1])
Z([3,'公司信息'])
Z([[2,'+'],[[2,'+'],[1,'3'],[1,',']],[1,'1']])
Z(z[3])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/mpvue-echarts/src/echarts.wxml','./components/uni-badge/uni-badge.wxml','./components/uni-collapse-item/uni-collapse-item.wxml','./components/uni-collapse/uni-collapse.wxml','./components/uni-icon/uni-icon.wxml','./components/uni-list-item/uni-list-item.wxml','./components/uni-list/uni-list.wxml','./components/uni-popup-i/uni-popup.wxml','./pages/clockIn/clockIn.wxml','./pages/index/index.wxml','./pages/index/yangan/detail.wxml','./pages/index/yangan/selects.wxml','./pages/index/yangan/yangan.wxml','./pages/login/index.wxml','./pages/qrCode/checkLocation.wxml','./pages/qrCode/qrCode.wxml','./pages/user/editPassword/index.wxml','./pages/user/user.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_v()
_(r,oB)
if(_oz(z,0,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var oD=_v()
_(r,oD)
if(_oz(z,0,e,s,gg)){oD.wxVkey=1
}
oD.wxXCkey=1
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var cF=_mz(z,'view',['class',0,'hoverClass',1],[],e,s,gg)
var hG=_mz(z,'view',['bindtap',2,'class',1,'data-event-opts',2],[],e,s,gg)
var oH=_v()
_(hG,oH)
if(_oz(z,5,e,s,gg)){oH.wxVkey=1
}
var cI=_mz(z,'uni-icon',['bind:__l',6,'color',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(hG,cI)
oH.wxXCkey=1
_(cF,hG)
var oJ=_n('slot')
_(cF,oJ)
_(r,cF)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var aL=_n('slot')
_(r,aL)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var bO=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1,'hoverClass',2],[],e,s,gg)
var oP=_n('view')
_rz(z,oP,'class',4,e,s,gg)
var xQ=_v()
_(oP,xQ)
if(_oz(z,5,e,s,gg)){xQ.wxVkey=1
}
else{xQ.wxVkey=2
var cT=_v()
_(xQ,cT)
if(_oz(z,6,e,s,gg)){cT.wxVkey=1
var hU=_mz(z,'uni-icon',['bind:__l',7,'color',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(cT,hU)
}
cT.wxXCkey=1
cT.wxXCkey=3
}
var oR=_v()
_(oP,oR)
if(_oz(z,12,e,s,gg)){oR.wxVkey=1
}
var fS=_v()
_(oP,fS)
if(_oz(z,13,e,s,gg)){fS.wxVkey=1
var oV=_n('view')
_rz(z,oV,'class',14,e,s,gg)
var cW=_v()
_(oV,cW)
if(_oz(z,15,e,s,gg)){cW.wxVkey=1
var aZ=_mz(z,'uni-badge',['bind:__l',16,'text',1,'type',2,'vueId',3],[],e,s,gg)
_(cW,aZ)
}
var oX=_v()
_(oV,oX)
if(_oz(z,20,e,s,gg)){oX.wxVkey=1
}
var lY=_v()
_(oV,lY)
if(_oz(z,21,e,s,gg)){lY.wxVkey=1
var t1=_mz(z,'uni-icon',['bind:__l',22,'color',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(lY,t1)
}
cW.wxXCkey=1
cW.wxXCkey=3
oX.wxXCkey=1
lY.wxXCkey=1
lY.wxXCkey=3
_(fS,oV)
}
xQ.wxXCkey=1
xQ.wxXCkey=3
oR.wxXCkey=1
fS.wxXCkey=1
fS.wxXCkey=3
_(bO,oP)
_(r,bO)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var b3=_n('slot')
_(r,b3)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var x5=_mz(z,'view',['class',0,'hidden',1],[],e,s,gg)
var f7=_n('slot')
_(x5,f7)
var o6=_v()
_(x5,o6)
if(_oz(z,2,e,s,gg)){o6.wxVkey=1
}
o6.wxXCkey=1
_(r,x5)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var cAB=_mz(z,'mpvue-echarts',['bind:__l',0,'bind:onInit',1,'canvasId',1,'class',2,'data-event-opts',3,'data-ref',4,'vueId',5],[],e,s,gg)
_(r,cAB)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var aDB=_n('view')
_rz(z,aDB,'class',0,e,s,gg)
var tEB=_n('view')
_rz(z,tEB,'class',1,e,s,gg)
var eFB=_mz(z,'check-location',['bind:__l',2,'bind:change',1,'class',2,'data-event-opts',3,'vueId',4],[],e,s,gg)
_(tEB,eFB)
var bGB=_mz(z,'selects',['bind:__l',7,'items',1,'vueId',2],[],e,s,gg)
_(tEB,bGB)
var oHB=_mz(z,'selects',['bind:__l',10,'bind:change',1,'data-event-opts',2,'items',3,'vueId',4],[],e,s,gg)
_(tEB,oHB)
_(aDB,tEB)
var xIB=_v()
_(aDB,xIB)
var oJB=function(cLB,fKB,hMB,gg){
var cOB=_mz(z,'uni-list-item',['bind:__l',19,'bind:click',1,'data-event-opts',2,'title',3,'vueId',4],[],cLB,fKB,gg)
_(hMB,cOB)
return hMB
}
xIB.wxXCkey=4
_2z(z,17,oJB,e,s,gg,xIB,'item','__i0__','termId')
_(r,aDB)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var tSB=_n('form')
var eTB=_mz(z,'check-location',['bind:__l',0,'class',1,'data-ref',1,'vueId',2],[],e,s,gg)
_(tSB,eTB)
var bUB=_mz(z,'check-location',['bind:__l',4,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(tSB,bUB)
_(r,tSB)
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var oXB=_mz(z,'uni-collapse',['accordion',0,'bind:__l',1,'vueId',1,'vueSlots',2],[],e,s,gg)
var fYB=_mz(z,'uni-collapse-item',['bind:__l',4,'title',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(oXB,fYB)
var cZB=_mz(z,'uni-collapse-item',['bind:__l',8,'title',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(oXB,cZB)
_(r,oXB)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/login/index","pages/index/index","pages/user/user","pages/qrCode/qrCode","pages/index/yangan/yangan","pages/index/yangan/detail","pages/user/editPassword/index","pages/clockIn/clockIn"],"window":{"navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"black","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#7A7E83","selectedColor":"#007AFF","borderStyle":"black","backgroundColor":"#F8F8F8","list":[{"pagePath":"pages/index/index","iconPath":"static/home/home.png","selectedIconPath":"static/home/home1.png","text":"主页"},{"pagePath":"pages/qrCode/qrCode","iconPath":"static/home/shaoma.png","selectedIconPath":"static/home/shaoma1.png","text":"扫码"},{"pagePath":"pages/clockIn/clockIn","iconPath":"static/home/clockIn.png","selectedIconPath":"static/home/clockIn1.png","text":"打卡"},{"pagePath":"pages/user/user","iconPath":"static/home/user.png","selectedIconPath":"static/home/user1.png","text":"用户"}]},"nvueCompiler":"weex","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"gu-an-yun","compilerVersion":"2.1.3","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/mpvue-echarts/src/echarts.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/mpvue-echarts/src/echarts.wxml']=$gwx('./components/mpvue-echarts/src/echarts.wxml');

__wxAppCode__['components/uni-badge/uni-badge.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-badge/uni-badge.wxml']=$gwx('./components/uni-badge/uni-badge.wxml');

__wxAppCode__['components/uni-collapse-item/uni-collapse-item.json']={"usingComponents":{"uni-icon":"/components/uni-icon/uni-icon"},"component":true};
__wxAppCode__['components/uni-collapse-item/uni-collapse-item.wxml']=$gwx('./components/uni-collapse-item/uni-collapse-item.wxml');

__wxAppCode__['components/uni-collapse/uni-collapse.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-collapse/uni-collapse.wxml']=$gwx('./components/uni-collapse/uni-collapse.wxml');

__wxAppCode__['components/uni-icon/uni-icon.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-icon/uni-icon.wxml']=$gwx('./components/uni-icon/uni-icon.wxml');

__wxAppCode__['components/uni-list-item/uni-list-item.json']={"usingComponents":{"uni-icon":"/components/uni-icon/uni-icon","uni-badge":"/components/uni-badge/uni-badge"},"component":true};
__wxAppCode__['components/uni-list-item/uni-list-item.wxml']=$gwx('./components/uni-list-item/uni-list-item.wxml');

__wxAppCode__['components/uni-list/uni-list.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-list/uni-list.wxml']=$gwx('./components/uni-list/uni-list.wxml');

__wxAppCode__['components/uni-popup-i/uni-popup.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-popup-i/uni-popup.wxml']=$gwx('./components/uni-popup-i/uni-popup.wxml');

__wxAppCode__['pages/clockIn/clockIn.json']={"navigationBarTitleText":"考勤打卡","usingComponents":{}};
__wxAppCode__['pages/clockIn/clockIn.wxml']=$gwx('./pages/clockIn/clockIn.wxml');

__wxAppCode__['pages/index/index.json']={"navigationBarTitleText":"主页","usingComponents":{}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/index/yangan/detail.json']={"navigationBarTitleText":"NB烟感","titleNView":{"buttons":[{"fontSize":"16px","text":"列表"}]},"usingComponents":{"mpvue-echarts":"/components/mpvue-echarts/src/echarts"}};
__wxAppCode__['pages/index/yangan/detail.wxml']=$gwx('./pages/index/yangan/detail.wxml');

__wxAppCode__['pages/index/yangan/selects.json']={"usingComponents":{},"component":true};
__wxAppCode__['pages/index/yangan/selects.wxml']=$gwx('./pages/index/yangan/selects.wxml');

__wxAppCode__['pages/index/yangan/yangan.json']={"navigationBarTitleText":"NB烟感列表","usingComponents":{"uni-popup":"/components/uni-popup-i/uni-popup","v-uni-icon":"/components/uni-icon/uni-icon","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item","selects":"/pages/index/yangan/selects","check-location":"/pages/qrCode/checkLocation"}};
__wxAppCode__['pages/index/yangan/yangan.wxml']=$gwx('./pages/index/yangan/yangan.wxml');

__wxAppCode__['pages/login/index.json']={"navigationBarTitleText":"登录","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#FFFFFF","usingComponents":{}};
__wxAppCode__['pages/login/index.wxml']=$gwx('./pages/login/index.wxml');

__wxAppCode__['pages/qrCode/checkLocation.json']={"usingComponents":{},"component":true};
__wxAppCode__['pages/qrCode/checkLocation.wxml']=$gwx('./pages/qrCode/checkLocation.wxml');

__wxAppCode__['pages/qrCode/qrCode.json']={"navigationBarTitleText":"扫码","usingComponents":{"check-location":"/pages/qrCode/checkLocation"}};
__wxAppCode__['pages/qrCode/qrCode.wxml']=$gwx('./pages/qrCode/qrCode.wxml');

__wxAppCode__['pages/user/editPassword/index.json']={"navigationBarTitleText":"修改密码","usingComponents":{}};
__wxAppCode__['pages/user/editPassword/index.wxml']=$gwx('./pages/user/editPassword/index.wxml');

__wxAppCode__['pages/user/user.json']={"navigationBarTitleText":"用户管理","usingComponents":{"uni-collapse":"/components/uni-collapse/uni-collapse","uni-collapse-item":"/components/uni-collapse-item/uni-collapse-item"}};
__wxAppCode__['pages/user/user.wxml']=$gwx('./pages/user/user.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"37fb":function(n,o,e){},"54e0":function(n,o,e){"use strict";e.r(o);var t=e("8a5e");for(var u in t)"default"!==u&&function(n){e.d(o,n,function(){return t[n]})}(u);e("71e3");var a,c,l=e("2877"),f=Object(l["a"])(t["default"],a,c,!1,null,null,null);o["default"]=f.exports},"71e3":function(n,o,e){"use strict";var t=e("37fb"),u=e.n(t);u.a},"8a5e":function(n,o,e){"use strict";e.r(o);var t=e("b9c1"),u=e.n(t);for(var a in t)"default"!==a&&function(n){e.d(o,n,function(){return t[n]})}(a);o["default"]=u.a},b9c1:function(n,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t={onLaunch:function(){console.log("App Launch"," at App.vue:4")},onShow:function(){console.log("App Show"," at App.vue:7")},onHide:function(){console.log("App Hide"," at App.vue:10")}};o.default=t}},[["7a64","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function n(n) {
    for (var o, i, s = n[0], c = n[1], a = n[2], l = 0, p = []; l < s.length; l++) {
      i = s[l], r[i] && p.push(r[i][0]), r[i] = 0;
    }

    for (o in c) {
      Object.prototype.hasOwnProperty.call(c, o) && (e[o] = c[o]);
    }

    m && m(n);

    while (p.length) {
      p.shift()();
    }

    return u.push.apply(u, a || []), t();
  }

  function t() {
    for (var e, n = 0; n < u.length; n++) {
      for (var t = u[n], o = !0, i = 1; i < t.length; i++) {
        var s = t[i];
        0 !== r[s] && (o = !1);
      }

      o && (u.splice(n--, 1), e = c(c.s = t[0]));
    }

    return e;
  }

  var o = {},
      i = {
    "common/runtime": 0
  },
      r = {
    "common/runtime": 0
  },
      u = [];

  function s(e) {
    return c.p + "" + e + ".js";
  }

  function c(n) {
    if (o[n]) return o[n].exports;
    var t = o[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(t.exports, t, t.exports, c), t.l = !0, t.exports;
  }

  c.e = function (e) {
    var n = [],
        t = {
      "components/uni-collapse-item/uni-collapse-item": 1,
      "components/uni-collapse/uni-collapse": 1,
      "components/uni-icon/uni-icon": 1,
      "components/uni-list-item/uni-list-item": 1,
      "components/uni-list/uni-list": 1,
      "components/uni-popup-i/uni-popup": 1,
      "pages/index/yangan/selects": 1,
      "components/mpvue-echarts/src/echarts": 1,
      "components/uni-badge/uni-badge": 1
    };
    i[e] ? n.push(i[e]) : 0 !== i[e] && t[e] && n.push(i[e] = new Promise(function (n, t) {
      for (var o = ({
        "components/uni-collapse-item/uni-collapse-item": "components/uni-collapse-item/uni-collapse-item",
        "components/uni-collapse/uni-collapse": "components/uni-collapse/uni-collapse",
        "pages/qrCode/checkLocation": "pages/qrCode/checkLocation",
        "components/uni-icon/uni-icon": "components/uni-icon/uni-icon",
        "components/uni-list-item/uni-list-item": "components/uni-list-item/uni-list-item",
        "components/uni-list/uni-list": "components/uni-list/uni-list",
        "components/uni-popup-i/uni-popup": "components/uni-popup-i/uni-popup",
        "pages/index/yangan/selects": "pages/index/yangan/selects",
        "components/mpvue-echarts/src/echarts": "components/mpvue-echarts/src/echarts",
        "components/uni-badge/uni-badge": "components/uni-badge/uni-badge"
      }[e] || e) + ".wxss", r = c.p + o, u = document.getElementsByTagName("link"), s = 0; s < u.length; s++) {
        var a = u[s],
            l = a.getAttribute("data-href") || a.getAttribute("href");
        if ("stylesheet" === a.rel && (l === o || l === r)) return n();
      }

      var p = document.getElementsByTagName("style");

      for (s = 0; s < p.length; s++) {
        a = p[s], l = a.getAttribute("data-href");
        if (l === o || l === r) return n();
      }

      var m = document.createElement("link");
      m.rel = "stylesheet", m.type = "text/css", m.onload = n, m.onerror = function (n) {
        var o = n && n.target && n.target.src || r,
            u = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
        u.request = o, delete i[e], m.parentNode.removeChild(m), t(u);
      }, m.href = r;
      var f = document.getElementsByTagName("head")[0];
      f.appendChild(m);
    }).then(function () {
      i[e] = 0;
    }));
    var o = r[e];
    if (0 !== o) if (o) n.push(o[2]);else {
      var u = new Promise(function (n, t) {
        o = r[e] = [n, t];
      });
      n.push(o[2] = u);
      var a,
          l = document.createElement("script");
      l.charset = "utf-8", l.timeout = 120, c.nc && l.setAttribute("nonce", c.nc), l.src = s(e), a = function a(n) {
        l.onerror = l.onload = null, clearTimeout(p);
        var t = r[e];

        if (0 !== t) {
          if (t) {
            var o = n && ("load" === n.type ? "missing" : n.type),
                i = n && n.target && n.target.src,
                u = new Error("Loading chunk " + e + " failed.\n(" + o + ": " + i + ")");
            u.type = o, u.request = i, t[1](u);
          }

          r[e] = void 0;
        }
      };
      var p = setTimeout(function () {
        a({
          type: "timeout",
          target: l
        });
      }, 12e4);
      l.onerror = l.onload = a, document.head.appendChild(l);
    }
    return Promise.all(n);
  }, c.m = e, c.c = o, c.d = function (e, n, t) {
    c.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: t
    });
  }, c.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, c.t = function (e, n) {
    if (1 & n && (e = c(e)), 8 & n) return e;
    if (4 & n && "object" === typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (c.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var o in e) {
      c.d(t, o, function (n) {
        return e[n];
      }.bind(null, o));
    }
    return t;
  }, c.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return c.d(n, "a", n), n;
  }, c.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, c.p = "/", c.oe = function (e) {
    throw console.error(e), e;
  };
  var a = global["webpackJsonp"] = global["webpackJsonp"] || [],
      l = a.push.bind(a);
  a.push = n, a = a.slice();

  for (var p = 0; p < a.length; p++) {
    n(a[p]);
  }

  var m = l;
  t();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0f54":function(t,e,n){"use strict";(function(t){n("894e");i(n("66fd"));var e=i(n("8875"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"137b":function(t,e,n){"use strict";function i(t){if("number"!==typeof t||t<0)return t;var e=parseInt(t/3600);t%=3600;var n=parseInt(t/60);t%=60;var i=t;return[e,n,i].map(function(t){return t=t.toString(),t[1]?t:"0"+t}).join(":")}function r(t,e){return"string"===typeof t&&"string"===typeof e&&(t=parseFloat(t),e=parseFloat(e)),t=t.toFixed(2),e=e.toFixed(2),{longitude:t.toString().split("."),latitude:e.toString().split(".")}}var o=function(t){return t<10?"0"+t:t},a={UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},humanize:function(t){var e="";for(var n in this.UNITS)if(t>=this.UNITS[n]){e=Math.floor(t/this.UNITS[n])+n+"前";break}return e||"刚刚"},format:function(t){var e=this.parse(t),n=Date.now()-e.getTime();return n<this.UNITS["天"]?this.humanize(n):e.getFullYear()+"/"+o(e.getMonth()+1)+"/"+o(e.getDay())+"-"+o(e.getHours())+":"+o(e.getMinutes())},formatNow:function(){var t=new Date;return t.getFullYear()+"-"+o(t.getMonth()+1)+"-"+o(t.getDate())+" "+o(t.getHours())+":"+o(t.getMinutes())},formatNowDate:function(){var t=new Date;return t.getFullYear()+"-"+o(t.getMonth()+1)+"-"+o(t.getDate())},parse:function(t){var e=t.split(/[^0-9]/);return new Date(e[0],e[1]-1,e[2],e[3],e[4],e[5])}};t.exports={formatTime:i,formatLocation:r,dateUtils:a}},2877:function(t,e,n){"use strict";function i(t,e,n,i,r,o,a,s){var l,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),i&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),a?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=l):r&&(l=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(t,e){return l.call(e),c(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,l):[l]}return{exports:t,options:u}}n.d(e,"a",function(){return i})},"2dbc":function(t,e,n){"use strict";(function(t){n("894e");i(n("66fd"));var e=i(n("794c"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"33e8":function(t,e,n){"use strict";!function(t,n){n(e)}(0,function(t,e,n){function i(t){var i={},r={},o=t.match(/Firefox\/([\d.]+)/),a=t.match(/MSIE\s([\d.]+)/)||t.match(/Trident\/.+?rv:(([\d.]+))/),s=t.match(/Edge\/([\d.]+)/),l=/micromessenger/i.test(t);return o&&(r.firefox=!0,r.version=o[1]),a&&(r.ie=!0,r.version=a[1]),s&&(r.edge=!0,r.version=s[1]),l&&(r.weChat=!0),{browser:r,os:i,node:!1,canvasSupported:!!n.createElement("canvas").getContext,svgSupported:"undefined"!=typeof SVGRect,touchEventsSupported:"ontouchstart"in e&&!r.ie&&!r.edge,pointerEventsSupported:"onpointerdown"in e&&(r.edge||r.ie&&r.version>=11),domSupported:"undefined"!=typeof n}}function r(t,e){"createCanvas"===t&&(sd=null),od[t]=e}function o(t){if(null==t||"object"!=typeof t)return t;var e=t,n=Jf.call(t);if("[object Array]"===n){if(!z(t)){e=[];for(var i=0,r=t.length;r>i;i++)e[i]=o(t[i])}}else if(Kf[n]){if(!z(t)){var a=t.constructor;if(t.constructor.from)e=a.from(t);else{e=new a(t.length);for(i=0,r=t.length;r>i;i++)e[i]=o(t[i])}}}else if(!Zf[n]&&!z(t)&&!k(t))for(var s in e={},t)t.hasOwnProperty(s)&&(e[s]=o(t[s]));return e}function a(t,e,n){if(!I(e)||!I(t))return n?o(e):t;for(var i in e)if(e.hasOwnProperty(i)){var r=t[i],s=e[i];!I(s)||!I(r)||b(s)||b(r)||k(s)||k(r)||A(s)||A(r)||z(s)||z(r)?!n&&i in t||(t[i]=o(e[i],!0)):a(r,s,n)}return t}function s(t,e){for(var n=t[0],i=1,r=t.length;r>i;i++)n=a(n,t[i],e);return n}function l(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function u(t,e,n){for(var i in e)e.hasOwnProperty(i)&&(n?null!=e[i]:null==t[i])&&(t[i]=e[i]);return t}function c(){return sd||(sd=ad().getContext("2d")),sd}function h(t,e){if(t){if(t.indexOf)return t.indexOf(e);for(var n=0,i=t.length;i>n;n++)if(t[n]===e)return n}return-1}function f(t,e){function n(){}var i=t.prototype;for(var r in n.prototype=e.prototype,t.prototype=new n,i)t.prototype[r]=i[r];t.prototype.constructor=t,t.superClass=e}function d(t,e,n){t="prototype"in t?t.prototype:t,e="prototype"in e?e.prototype:e,u(t,e,n)}function p(t){return t?"string"!=typeof t&&"number"==typeof t.length:void 0}function g(t,e,n){if(t&&e)if(t.forEach&&t.forEach===td)t.forEach(e,n);else if(t.length===+t.length)for(var i=0,r=t.length;r>i;i++)e.call(n,t[i],i,t);else for(var o in t)t.hasOwnProperty(o)&&e.call(n,t[o],o,t)}function v(t,e,n){if(t&&e){if(t.map&&t.map===id)return t.map(e,n);for(var i=[],r=0,o=t.length;o>r;r++)i.push(e.call(n,t[r],r,t));return i}}function m(t,e,n,i){if(t&&e){if(t.reduce&&t.reduce===rd)return t.reduce(e,n,i);for(var r=0,o=t.length;o>r;r++)n=e.call(i,n,t[r],r,t);return n}}function y(t,e,n){if(t&&e){if(t.filter&&t.filter===ed)return t.filter(e,n);for(var i=[],r=0,o=t.length;o>r;r++)e.call(n,t[r],r,t)&&i.push(t[r]);return i}}function _(t,e,n){if(t&&e)for(var i=0,r=t.length;r>i;i++)if(e.call(n,t[i],i,t))return t[i]}function x(t,e){var n=nd.call(arguments,2);return function(){return t.apply(e,n.concat(nd.call(arguments)))}}function w(t){var e=nd.call(arguments,1);return function(){return t.apply(this,e.concat(nd.call(arguments)))}}function b(t){return"[object Array]"===Jf.call(t)}function S(t){return"function"==typeof t}function M(t){return"[object String]"===Jf.call(t)}function I(t){var e=typeof t;return"function"===e||!!t&&"object"===e}function A(t){return!!Zf[Jf.call(t)]}function T(t){return!!Kf[Jf.call(t)]}function k(t){return"object"==typeof t&&"number"==typeof t.nodeType&&"object"==typeof t.ownerDocument}function C(t){return t!==t}function D(){for(var t=0,e=arguments.length;e>t;t++)if(null!=arguments[t])return arguments[t]}function P(t,e){return null!=t?t:e}function O(t,e,n){return null!=t?t:null!=e?e:n}function L(){return Function.call.apply(nd,arguments)}function E(t){if("number"==typeof t)return[t,t,t,t];var e=t.length;return 2===e?[t[0],t[1],t[0],t[1]]:3===e?[t[0],t[1],t[2],t[1]]:t}function N(t,e){if(!t)throw new Error(e)}function R(t){return null==t?null:"function"==typeof t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}function B(t){t[ld]=!0}function z(t){return t[ld]}function F(t){function e(t,e){n?i.set(t,e):i.set(e,t)}var n=b(t);this.data={};var i=this;t instanceof F?t.each(e):t&&g(t,e)}function $(t){return new F(t)}function V(t,e){for(var n=new t.constructor(t.length+e.length),i=0;i<t.length;i++)n[i]=t[i];var r=t.length;for(i=0;i<e.length;i++)n[i+r]=e[i];return n}function j(){}function H(t,e){var n=new cd(2);return null==t&&(t=0),null==e&&(e=0),n[0]=t,n[1]=e,n}function G(t,e){return t[0]=e[0],t[1]=e[1],t}function W(t){var e=new cd(2);return e[0]=t[0],e[1]=t[1],e}function U(t,e,n){return t[0]=e,t[1]=n,t}function X(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t}function Y(t,e,n,i){return t[0]=e[0]+n[0]*i,t[1]=e[1]+n[1]*i,t}function q(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t}function Z(t){return Math.sqrt(K(t))}function K(t){return t[0]*t[0]+t[1]*t[1]}function J(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t}function Q(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t}function tt(t,e){return t[0]*e[0]+t[1]*e[1]}function et(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t}function nt(t,e){var n=Z(e);return 0===n?(t[0]=0,t[1]=0):(t[0]=e[0]/n,t[1]=e[1]/n),t}function it(t,e){return Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1]))}function rt(t,e){return(t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1])}function ot(t,e){return t[0]=-e[0],t[1]=-e[1],t}function at(t,e,n,i){return t[0]=e[0]+i*(n[0]-e[0]),t[1]=e[1]+i*(n[1]-e[1]),t}function st(t,e,n){var i=e[0],r=e[1];return t[0]=n[0]*i+n[2]*r+n[4],t[1]=n[1]*i+n[3]*r+n[5],t}function lt(t,e,n){return t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t}function ut(t,e,n){return t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t}function ct(){this.on("mousedown",this._dragStart,this),this.on("mousemove",this._drag,this),this.on("mouseup",this._dragEnd,this),this.on("globalout",this._dragEnd,this)}function ht(t,e){return{target:t,topTarget:e&&e.topTarget}}function ft(t,e){var n=t._$eventProcessor;return null!=e&&n&&n.normalizeQuery&&(e=n.normalizeQuery(e)),e}function dt(t,e,n,i,r,o){var a=t._$handlers;if("function"==typeof n&&(r=i,i=n,n=null),!i||!e)return t;n=ft(t,n),a[e]||(a[e]=[]);for(var s=0;s<a[e].length;s++)if(a[e][s].h===i)return t;var l={h:i,one:o,query:n,ctx:r||t,callAtLast:i.zrEventfulCallAtLast},u=a[e].length-1,c=a[e][u];return c&&c.callAtLast?a[e].splice(u,0,l):a[e].push(l),t}function pt(t){return t.getBoundingClientRect?t.getBoundingClientRect():{left:0,top:0}}function gt(t,e,n,i){return n=n||{},i||!qf.canvasSupported?vt(t,e,n):qf.browser.firefox&&null!=e.layerX&&e.layerX!==e.offsetX?(n.zrX=e.layerX,n.zrY=e.layerY):null!=e.offsetX?(n.zrX=e.offsetX,n.zrY=e.offsetY):vt(t,e,n),n}function vt(t,e,n){var i=pt(t);n.zrX=e.clientX-i.left,n.zrY=e.clientY-i.top}function mt(t,n,i){if(n=n||e.event,null!=n.zrX)return n;var r=n.type,o=r&&r.indexOf("touch")>=0;if(o){var a="touchend"!==r?n.targetTouches[0]:n.changedTouches[0];a&&gt(t,a,n,i)}else gt(t,n,n,i),n.zrDelta=n.wheelDelta?n.wheelDelta/120:-(n.detail||0)/3;var s=n.button;return null==n.which&&void 0!==s&&_d.test(n.type)&&(n.which=1&s?1:2&s?3:4&s?2:0),n}function yt(t,e,n){yd?t.addEventListener(e,n):t.attachEvent("on"+e,n)}function _t(t,e,n){yd?t.removeEventListener(e,n):t.detachEvent("on"+e,n)}function xt(t){var e=t[1][0]-t[0][0],n=t[1][1]-t[0][1];return Math.sqrt(e*e+n*n)}function wt(t){return[(t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2]}function bt(t,e,n){return{type:t,event:n,target:e.target,topTarget:e.topTarget,cancelBubble:!1,offsetX:n.zrX,offsetY:n.zrY,gestureEvent:n.gestureEvent,pinchX:n.pinchX,pinchY:n.pinchY,pinchScale:n.pinchScale,wheelDelta:n.zrDelta,zrByTouch:n.zrByTouch,which:n.which,stop:St}}function St(){xd(this.event)}function Mt(){}function It(t,e,n){if(t[t.rectHover?"rectContain":"contain"](e,n)){for(var i,r=t;r;){if(r.clipPath&&!r.clipPath.contain(e,n))return!1;r.silent&&(i=!0),r=r.parent}return!i||Sd}return!1}function At(){var t=new Ad(6);return Tt(t),t}function Tt(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t}function kt(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t}function Ct(t,e,n){var i=e[0]*n[0]+e[2]*n[1],r=e[1]*n[0]+e[3]*n[1],o=e[0]*n[2]+e[2]*n[3],a=e[1]*n[2]+e[3]*n[3],s=e[0]*n[4]+e[2]*n[5]+e[4],l=e[1]*n[4]+e[3]*n[5]+e[5];return t[0]=i,t[1]=r,t[2]=o,t[3]=a,t[4]=s,t[5]=l,t}function Dt(t,e,n){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4]+n[0],t[5]=e[5]+n[1],t}function Pt(t,e,n){var i=e[0],r=e[2],o=e[4],a=e[1],s=e[3],l=e[5],u=Math.sin(n),c=Math.cos(n);return t[0]=i*c+a*u,t[1]=-i*u+a*c,t[2]=r*c+s*u,t[3]=-r*u+c*s,t[4]=c*o+u*l,t[5]=c*l-u*o,t}function Ot(t,e,n){var i=n[0],r=n[1];return t[0]=e[0]*i,t[1]=e[1]*r,t[2]=e[2]*i,t[3]=e[3]*r,t[4]=e[4]*i,t[5]=e[5]*r,t}function Lt(t,e){var n=e[0],i=e[2],r=e[4],o=e[1],a=e[3],s=e[5],l=n*a-o*i;return l?(l=1/l,t[0]=a*l,t[1]=-o*l,t[2]=-i*l,t[3]=n*l,t[4]=(i*s-a*r)*l,t[5]=(o*r-n*s)*l,t):null}function Et(t){var e=At();return kt(e,t),e}function Nt(t){return t>Cd||-Cd>t}function Rt(t){this._target=t.target,this._life=t.life||1e3,this._delay=t.delay||0,this._initialized=!1,this.loop=null!=t.loop&&t.loop,this.gap=t.gap||0,this.easing=t.easing||"Linear",this.onframe=t.onframe,this.ondestroy=t.ondestroy,this.onrestart=t.onrestart,this._pausedTime=0,this._paused=!1}function Bt(t){return t=Math.round(t),0>t?0:t>255?255:t}function zt(t){return t=Math.round(t),0>t?0:t>360?360:t}function Ft(t){return 0>t?0:t>1?1:t}function $t(t){return Bt(t.length&&"%"===t.charAt(t.length-1)?parseFloat(t)/100*255:parseInt(t,10))}function Vt(t){return Ft(t.length&&"%"===t.charAt(t.length-1)?parseFloat(t)/100:parseFloat(t))}function jt(t,e,n){return 0>n?n+=1:n>1&&(n-=1),1>6*n?t+(e-t)*n*6:1>2*n?e:2>3*n?t+(e-t)*(2/3-n)*6:t}function Ht(t,e,n){return t+(e-t)*n}function Gt(t,e,n,i,r){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t}function Wt(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function Ut(t,e){Hd&&Wt(Hd,e),Hd=jd.put(t,Hd||e.slice())}function Xt(t,e){if(t){e=e||[];var n=jd.get(t);if(n)return Wt(e,n);t+="";var i=t.replace(/ /g,"").toLowerCase();if(i in Vd)return Wt(e,Vd[i]),Ut(t,e),e;if("#"!==i.charAt(0)){var r=i.indexOf("("),o=i.indexOf(")");if(-1!==r&&o+1===i.length){var a=i.substr(0,r),s=i.substr(r+1,o-(r+1)).split(","),l=1;switch(a){case"rgba":if(4!==s.length)return void Gt(e,0,0,0,1);l=Vt(s.pop());case"rgb":return 3!==s.length?void Gt(e,0,0,0,1):(Gt(e,$t(s[0]),$t(s[1]),$t(s[2]),l),Ut(t,e),e);case"hsla":return 4!==s.length?void Gt(e,0,0,0,1):(s[3]=Vt(s[3]),Yt(s,e),Ut(t,e),e);case"hsl":return 3!==s.length?void Gt(e,0,0,0,1):(Yt(s,e),Ut(t,e),e);default:return}}Gt(e,0,0,0,1)}else{if(4===i.length){var u=parseInt(i.substr(1),16);return u>=0&&4095>=u?(Gt(e,(3840&u)>>4|(3840&u)>>8,240&u|(240&u)>>4,15&u|(15&u)<<4,1),Ut(t,e),e):void Gt(e,0,0,0,1)}if(7===i.length){u=parseInt(i.substr(1),16);return u>=0&&16777215>=u?(Gt(e,(16711680&u)>>16,(65280&u)>>8,255&u,1),Ut(t,e),e):void Gt(e,0,0,0,1)}}}}function Yt(t,e){var n=(parseFloat(t[0])%360+360)%360/360,i=Vt(t[1]),r=Vt(t[2]),o=.5>=r?r*(i+1):r+i-r*i,a=2*r-o;return e=e||[],Gt(e,Bt(255*jt(a,o,n+1/3)),Bt(255*jt(a,o,n)),Bt(255*jt(a,o,n-1/3)),1),4===t.length&&(e[3]=t[3]),e}function qt(t){if(t){var e,n,i=t[0]/255,r=t[1]/255,o=t[2]/255,a=Math.min(i,r,o),s=Math.max(i,r,o),l=s-a,u=(s+a)/2;if(0===l)e=0,n=0;else{n=.5>u?l/(s+a):l/(2-s-a);var c=((s-i)/6+l/2)/l,h=((s-r)/6+l/2)/l,f=((s-o)/6+l/2)/l;i===s?e=f-h:r===s?e=1/3+c-f:o===s&&(e=2/3+h-c),0>e&&(e+=1),e>1&&(e-=1)}var d=[360*e,n,u];return null!=t[3]&&d.push(t[3]),d}}function Zt(t,e){var n=Xt(t);if(n){for(var i=0;3>i;i++)n[i]=0>e?n[i]*(1-e)|0:(255-n[i])*e+n[i]|0,n[i]>255?n[i]=255:t[i]<0&&(n[i]=0);return ne(n,4===n.length?"rgba":"rgb")}}function Kt(t){var e=Xt(t);return e?((1<<24)+(e[0]<<16)+(e[1]<<8)+ +e[2]).toString(16).slice(1):void 0}function Jt(t,e,n){if(e&&e.length&&t>=0&&1>=t){n=n||[];var i=t*(e.length-1),r=Math.floor(i),o=Math.ceil(i),a=e[r],s=e[o],l=i-r;return n[0]=Bt(Ht(a[0],s[0],l)),n[1]=Bt(Ht(a[1],s[1],l)),n[2]=Bt(Ht(a[2],s[2],l)),n[3]=Ft(Ht(a[3],s[3],l)),n}}function Qt(t,e,n){if(e&&e.length&&t>=0&&1>=t){var i=t*(e.length-1),r=Math.floor(i),o=Math.ceil(i),a=Xt(e[r]),s=Xt(e[o]),l=i-r,u=ne([Bt(Ht(a[0],s[0],l)),Bt(Ht(a[1],s[1],l)),Bt(Ht(a[2],s[2],l)),Ft(Ht(a[3],s[3],l))],"rgba");return n?{color:u,leftIndex:r,rightIndex:o,value:i}:u}}function te(t,e,n,i){return t=Xt(t),t?(t=qt(t),null!=e&&(t[0]=zt(e)),null!=n&&(t[1]=Vt(n)),null!=i&&(t[2]=Vt(i)),ne(Yt(t),"rgba")):void 0}function ee(t,e){return t=Xt(t),t&&null!=e?(t[3]=Ft(e),ne(t,"rgba")):void 0}function ne(t,e){if(t&&t.length){var n=t[0]+","+t[1]+","+t[2];return("rgba"===e||"hsva"===e||"hsla"===e)&&(n+=","+t[3]),e+"("+n+")"}}function ie(t,e){return t[e]}function re(t,e,n){t[e]=n}function oe(t,e,n){return(e-t)*n+t}function ae(t,e,n){return n>.5?e:t}function se(t,e,n,i,r){var o=t.length;if(1===r)for(var a=0;o>a;a++)i[a]=oe(t[a],e[a],n);else{var s=o&&t[0].length;for(a=0;o>a;a++)for(var l=0;s>l;l++)i[a][l]=oe(t[a][l],e[a][l],n)}}function le(t,e,n){var i=t.length,r=e.length;if(i!==r){var o=i>r;if(o)t.length=r;else for(var a=i;r>a;a++)t.push(1===n?e[a]:Xd.call(e[a]))}var s=t[0]&&t[0].length;for(a=0;a<t.length;a++)if(1===n)isNaN(t[a])&&(t[a]=e[a]);else for(var l=0;s>l;l++)isNaN(t[a][l])&&(t[a][l]=e[a][l])}function ue(t,e,n){if(t===e)return!0;var i=t.length;if(i!==e.length)return!1;if(1===n){for(var r=0;i>r;r++)if(t[r]!==e[r])return!1}else{var o=t[0].length;for(r=0;i>r;r++)for(var a=0;o>a;a++)if(t[r][a]!==e[r][a])return!1}return!0}function ce(t,e,n,i,r,o,a,s,l){var u=t.length;if(1===l)for(var c=0;u>c;c++)s[c]=he(t[c],e[c],n[c],i[c],r,o,a);else{var h=t[0].length;for(c=0;u>c;c++)for(var f=0;h>f;f++)s[c][f]=he(t[c][f],e[c][f],n[c][f],i[c][f],r,o,a)}}function he(t,e,n,i,r,o,a){var s=.5*(n-t),l=.5*(i-e);return(2*(e-n)+s+l)*a+(-3*(e-n)-2*s-l)*o+s*r+e}function fe(t){if(p(t)){var e=t.length;if(p(t[0])){for(var n=[],i=0;e>i;i++)n.push(Xd.call(t[i]));return n}return Xd.call(t)}return t}function de(t){return t[0]=Math.floor(t[0]),t[1]=Math.floor(t[1]),t[2]=Math.floor(t[2]),"rgba("+t.join(",")+")"}function pe(t){var e=t[t.length-1].value;return p(e&&e[0])?2:1}function ge(t,e,n,i,r,o){var a=t._getter,s=t._setter,l="spline"===e,u=i.length;if(u){var c,h=i[0].value,f=p(h),d=!1,g=!1,v=f?pe(i):0;i.sort(function(t,e){return t.time-e.time}),c=i[u-1].time;for(var m=[],y=[],_=i[0].value,x=!0,w=0;u>w;w++){m.push(i[w].time/c);var b=i[w].value;if(f&&ue(b,_,v)||!f&&b===_||(x=!1),_=b,"string"==typeof b){var S=Xt(b);S?(b=S,d=!0):g=!0}y.push(b)}if(o||!x){var M=y[u-1];for(w=0;u-1>w;w++)f?le(y[w],M,v):!isNaN(y[w])||isNaN(M)||g||d||(y[w]=M);f&&le(a(t._target,r),M,v);var I,A,T,k,C,D,P=0,O=0;if(d)var L=[0,0,0,0];var E=function(t,e){var n;if(0>e)n=0;else if(O>e){for(I=Math.min(P+1,u-1),n=I;n>=0&&!(m[n]<=e);n--);n=Math.min(n,u-2)}else{for(n=P;u>n&&!(m[n]>e);n++);n=Math.min(n-1,u-2)}P=n,O=e;var i=m[n+1]-m[n];if(0!==i)if(A=(e-m[n])/i,l)if(k=y[n],T=y[0===n?n:n-1],C=y[n>u-2?u-1:n+1],D=y[n>u-3?u-1:n+2],f)ce(T,k,C,D,A,A*A,A*A*A,a(t,r),v);else{if(d)o=ce(T,k,C,D,A,A*A,A*A*A,L,1),o=de(L);else{if(g)return ae(k,C,A);o=he(T,k,C,D,A,A*A,A*A*A)}s(t,r,o)}else if(f)se(y[n],y[n+1],A,a(t,r),v);else{var o;if(d)se(y[n],y[n+1],A,L,1),o=de(L);else{if(g)return ae(y[n],y[n+1],A);o=oe(y[n],y[n+1],A)}s(t,r,o)}},N=new Rt({target:t._target,life:c,loop:t._loop,delay:t._delay,onframe:E,ondestroy:n});return e&&"spline"!==e&&(N.easing=e),N}}}function ve(t,e,n,i,r,o,a,s){function l(){c--,c||o&&o()}M(i)?(o=r,r=i,i=0):S(r)?(o=r,r="linear",i=0):S(i)?(o=i,i=0):S(n)?(o=n,n=500):n||(n=500),t.stopAnimation(),me(t,"",t,e,n,i,s);var u=t.animators.slice(),c=u.length;c||o&&o();for(var h=0;h<u.length;h++)u[h].done(l).start(r,a)}function me(t,e,n,i,r,o,a){var s={},l=0;for(var u in i)i.hasOwnProperty(u)&&(null!=n[u]?I(i[u])&&!p(i[u])?me(t,e?e+"."+u:u,n[u],i[u],r,o,a):(a?(s[u]=n[u],ye(t,e,u,i[u])):s[u]=i[u],l++):null==i[u]||a||ye(t,e,u,i[u]));l>0&&t.animate(e,!1).when(null==r?500:r,s).delay(o||0)}function ye(t,e,n,i){if(e){var r={};r[e]={},r[e][n]=i,t.attr(r)}else t.attr(n,i)}function _e(t,e,n,i){0>n&&(t+=n,n=-n),0>i&&(e+=i,i=-i),this.x=t,this.y=e,this.width=n,this.height=i}function xe(t){for(var e=0;t>=ap;)e|=1&t,t>>=1;return t+e}function we(t,e,n,i){var r=e+1;if(r===n)return 1;if(i(t[r++],t[e])<0){for(;n>r&&i(t[r],t[r-1])<0;)r++;be(t,e,r)}else for(;n>r&&i(t[r],t[r-1])>=0;)r++;return r-e}function be(t,e,n){for(n--;n>e;){var i=t[e];t[e++]=t[n],t[n--]=i}}function Se(t,e,n,i,r){for(i===e&&i++;n>i;i++){for(var o,a=t[i],s=e,l=i;l>s;)o=s+l>>>1,r(a,t[o])<0?l=o:s=o+1;var u=i-s;switch(u){case 3:t[s+3]=t[s+2];case 2:t[s+2]=t[s+1];case 1:t[s+1]=t[s];break;default:for(;u>0;)t[s+u]=t[s+u-1],u--}t[s]=a}}function Me(t,e,n,i,r,o){var a=0,s=0,l=1;if(o(t,e[n+r])>0){for(s=i-r;s>l&&o(t,e[n+r+l])>0;)a=l,l=1+(l<<1),0>=l&&(l=s);l>s&&(l=s),a+=r,l+=r}else{for(s=r+1;s>l&&o(t,e[n+r-l])<=0;)a=l,l=1+(l<<1),0>=l&&(l=s);l>s&&(l=s);var u=a;a=r-l,l=r-u}for(a++;l>a;){var c=a+(l-a>>>1);o(t,e[n+c])>0?a=c+1:l=c}return l}function Ie(t,e,n,i,r,o){var a=0,s=0,l=1;if(o(t,e[n+r])<0){for(s=r+1;s>l&&o(t,e[n+r-l])<0;)a=l,l=1+(l<<1),0>=l&&(l=s);l>s&&(l=s);var u=a;a=r-l,l=r-u}else{for(s=i-r;s>l&&o(t,e[n+r+l])>=0;)a=l,l=1+(l<<1),0>=l&&(l=s);l>s&&(l=s),a+=r,l+=r}for(a++;l>a;){var c=a+(l-a>>>1);o(t,e[n+c])<0?l=c:a=c+1}return l}function Ae(t,e){function n(t,e){l[h]=t,u[h]=e,h+=1}function i(){for(;h>1;){var t=h-2;if(t>=1&&u[t-1]<=u[t]+u[t+1]||t>=2&&u[t-2]<=u[t]+u[t-1])u[t-1]<u[t+1]&&t--;else if(u[t]>u[t+1])break;o(t)}}function r(){for(;h>1;){var t=h-2;t>0&&u[t-1]<u[t+1]&&t--,o(t)}}function o(n){var i=l[n],r=u[n],o=l[n+1],c=u[n+1];u[n]=r+c,n===h-3&&(l[n+1]=l[n+2],u[n+1]=u[n+2]),h--;var f=Ie(t[o],t,i,r,0,e);i+=f,r-=f,0!==r&&(c=Me(t[i+r-1],t,o,c,c-1,e),0!==c&&(c>=r?a(i,r,o,c):s(i,r,o,c)))}function a(n,i,r,o){var a=0;for(a=0;i>a;a++)f[a]=t[n+a];var s=0,l=r,u=n;if(t[u++]=t[l++],0!==--o){if(1===i){for(a=0;o>a;a++)t[u+a]=t[l+a];return void(t[u+o]=f[s])}for(var h,d,p,g=c;;){h=0,d=0,p=!1;do{if(e(t[l],f[s])<0){if(t[u++]=t[l++],d++,h=0,0===--o){p=!0;break}}else if(t[u++]=f[s++],h++,d=0,1===--i){p=!0;break}}while(g>(h|d));if(p)break;do{if(h=Ie(t[l],f,s,i,0,e),0!==h){for(a=0;h>a;a++)t[u+a]=f[s+a];if(u+=h,s+=h,i-=h,1>=i){p=!0;break}}if(t[u++]=t[l++],0===--o){p=!0;break}if(d=Me(f[s],t,l,o,0,e),0!==d){for(a=0;d>a;a++)t[u+a]=t[l+a];if(u+=d,l+=d,o-=d,0===o){p=!0;break}}if(t[u++]=f[s++],1===--i){p=!0;break}g--}while(h>=sp||d>=sp);if(p)break;0>g&&(g=0),g+=2}if(c=g,1>c&&(c=1),1===i){for(a=0;o>a;a++)t[u+a]=t[l+a];t[u+o]=f[s]}else{if(0===i)throw new Error;for(a=0;i>a;a++)t[u+a]=f[s+a]}}else for(a=0;i>a;a++)t[u+a]=f[s+a]}function s(n,i,r,o){var a=0;for(a=0;o>a;a++)f[a]=t[r+a];var s=n+i-1,l=o-1,u=r+o-1,h=0,d=0;if(t[u--]=t[s--],0!==--i){if(1===o){for(u-=i,s-=i,d=u+1,h=s+1,a=i-1;a>=0;a--)t[d+a]=t[h+a];return void(t[u]=f[l])}for(var p=c;;){var g=0,v=0,m=!1;do{if(e(f[l],t[s])<0){if(t[u--]=t[s--],g++,v=0,0===--i){m=!0;break}}else if(t[u--]=f[l--],v++,g=0,1===--o){m=!0;break}}while(p>(g|v));if(m)break;do{if(g=i-Ie(f[l],t,n,i,i-1,e),0!==g){for(u-=g,s-=g,i-=g,d=u+1,h=s+1,a=g-1;a>=0;a--)t[d+a]=t[h+a];if(0===i){m=!0;break}}if(t[u--]=f[l--],1===--o){m=!0;break}if(v=o-Me(t[s],f,0,o,o-1,e),0!==v){for(u-=v,l-=v,o-=v,d=u+1,h=l+1,a=0;v>a;a++)t[d+a]=f[h+a];if(1>=o){m=!0;break}}if(t[u--]=t[s--],0===--i){m=!0;break}p--}while(g>=sp||v>=sp);if(m)break;0>p&&(p=0),p+=2}if(c=p,1>c&&(c=1),1===o){for(u-=i,s-=i,d=u+1,h=s+1,a=i-1;a>=0;a--)t[d+a]=t[h+a];t[u]=f[l]}else{if(0===o)throw new Error;for(h=u-(o-1),a=0;o>a;a++)t[h+a]=f[a]}}else for(h=u-(o-1),a=0;o>a;a++)t[h+a]=f[a]}var l,u,c=sp,h=0,f=[];l=[],u=[],this.mergeRuns=i,this.forceMergeRuns=r,this.pushRun=n}function Te(t,e,n,i){n||(n=0),i||(i=t.length);var r=i-n;if(!(2>r)){var o=0;if(ap>r)return o=we(t,n,i,e),void Se(t,n,i,n+o,e);var a=new Ae(t,e),s=xe(r);do{if(o=we(t,n,i,e),s>o){var l=r;l>s&&(l=s),Se(t,n,n+l,n+o,e),o=l}a.pushRun(n,o),a.mergeRuns(),r-=o,n+=o}while(0!==r);a.forceMergeRuns()}}function ke(t,e){return t.zlevel===e.zlevel?t.z===e.z?t.z2-e.z2:t.z-e.z:t.zlevel-e.zlevel}function Ce(t,e,n){var i=null==e.x?0:e.x,r=null==e.x2?1:e.x2,o=null==e.y?0:e.y,a=null==e.y2?0:e.y2;e.global||(i=i*n.width+n.x,r=r*n.width+n.x,o=o*n.height+n.y,a=a*n.height+n.y),i=isNaN(i)?0:i,r=isNaN(r)?1:r,o=isNaN(o)?0:o,a=isNaN(a)?0:a;var s=t.createLinearGradient(i,o,r,a);return s}function De(t,e,n){var i=n.width,r=n.height,o=Math.min(i,r),a=null==e.x?.5:e.x,s=null==e.y?.5:e.y,l=null==e.r?.5:e.r;e.global||(a=a*i+n.x,s=s*r+n.y,l*=o);var u=t.createRadialGradient(a,s,0,a,s,l);return u}function Pe(){return!1}function Oe(t,e,n){var i=ad(),r=e.getWidth(),o=e.getHeight(),a=i.style;return a&&(a.position="absolute",a.left=0,a.top=0,a.width=r+"px",a.height=o+"px",i.setAttribute("data-zr-dom-id",t)),i.width=r*n,i.height=o*n,i}function Le(t){if("string"==typeof t){var e=wp.get(t);return e&&e.image}return t}function Ee(t,e,n,i,r){if(t){if("string"==typeof t){if(e&&e.__zrImageSrc===t||!n)return e;var o=wp.get(t),a={hostEl:n,cb:i,cbPayload:r};return o?(e=o.image,!Re(e)&&o.pending.push(a)):(e=new Image,e.onload=e.onerror=Ne,wp.put(t,e.__cachedImgObj={image:e,pending:[a]}),e.src=e.__zrImageSrc=t),e}return t}return e}function Ne(){var t=this.__cachedImgObj;this.onload=this.onerror=this.__cachedImgObj=null;for(var e=0;e<t.pending.length;e++){var n=t.pending[e],i=n.cb;i&&i(this,n.cbPayload),n.hostEl.dirty()}t.pending.length=0}function Re(t){return t&&t.width&&t.height}function Be(t,e){Tp[t]=e}function ze(t,e){e=e||Ap;var n=t+":"+e;if(bp[n])return bp[n];for(var i=(t+"").split("\n"),r=0,o=0,a=i.length;a>o;o++)r=Math.max(Ze(i[o],e).width,r);return Sp>Mp&&(Sp=0,bp={}),Sp++,bp[n]=r,r}function Fe(t,e,n,i,r,o,a,s){return a?Ve(t,e,n,i,r,o,a,s):$e(t,e,n,i,r,o,s)}function $e(t,e,n,i,r,o,a){var s=Ke(t,e,r,o,a),l=ze(t,e);r&&(l+=r[1]+r[3]);var u=s.outerHeight,c=je(0,l,n),h=He(0,u,i),f=new _e(c,h,l,u);return f.lineHeight=s.lineHeight,f}function Ve(t,e,n,i,r,o,a,s){var l=Je(t,{rich:a,truncate:s,font:e,textAlign:n,textPadding:r,textLineHeight:o}),u=l.outerWidth,c=l.outerHeight,h=je(0,u,n),f=He(0,c,i);return new _e(h,f,u,c)}function je(t,e,n){return"right"===n?t-=e:"center"===n&&(t-=e/2),t}function He(t,e,n){return"middle"===n?t-=e/2:"bottom"===n&&(t-=e),t}function Ge(t,e,n){var i=e.x,r=e.y,o=e.height,a=e.width,s=o/2,l="left",u="top";switch(t){case"left":i-=n,r+=s,l="right",u="middle";break;case"right":i+=n+a,r+=s,u="middle";break;case"top":i+=a/2,r-=n,l="center",u="bottom";break;case"bottom":i+=a/2,r+=o+n,l="center";break;case"inside":i+=a/2,r+=s,l="center",u="middle";break;case"insideLeft":i+=n,r+=s,u="middle";break;case"insideRight":i+=a-n,r+=s,l="right",u="middle";break;case"insideTop":i+=a/2,r+=n,l="center";break;case"insideBottom":i+=a/2,r+=o-n,l="center",u="bottom";break;case"insideTopLeft":i+=n,r+=n;break;case"insideTopRight":i+=a-n,r+=n,l="right";break;case"insideBottomLeft":i+=n,r+=o-n,u="bottom";break;case"insideBottomRight":i+=a-n,r+=o-n,l="right",u="bottom"}return{x:i,y:r,textAlign:l,textVerticalAlign:u}}function We(t,e,n,i,r){if(!e)return"";var o=(t+"").split("\n");r=Ue(e,n,i,r);for(var a=0,s=o.length;s>a;a++)o[a]=Xe(o[a],r);return o.join("\n")}function Ue(t,e,n,i){i=l({},i),i.font=e;n=P(n,"...");i.maxIterations=P(i.maxIterations,2);var r=i.minChar=P(i.minChar,0);i.cnCharWidth=ze("国",e);var o=i.ascCharWidth=ze("a",e);i.placeholder=P(i.placeholder,"");for(var a=t=Math.max(0,t-1),s=0;r>s&&a>=o;s++)a-=o;var u=ze(n,e);return u>a&&(n="",u=0),a=t-u,i.ellipsis=n,i.ellipsisWidth=u,i.contentWidth=a,i.containerWidth=t,i}function Xe(t,e){var n=e.containerWidth,i=e.font,r=e.contentWidth;if(!n)return"";var o=ze(t,i);if(n>=o)return t;for(var a=0;;a++){if(r>=o||a>=e.maxIterations){t+=e.ellipsis;break}var s=0===a?Ye(t,r,e.ascCharWidth,e.cnCharWidth):o>0?Math.floor(t.length*r/o):0;t=t.substr(0,s),o=ze(t,i)}return""===t&&(t=e.placeholder),t}function Ye(t,e,n,i){for(var r=0,o=0,a=t.length;a>o&&e>r;o++){var s=t.charCodeAt(o);r+=s>=0&&127>=s?n:i}return o}function qe(t){return ze("国",t)}function Ze(t,e){return Tp.measureText(t,e)}function Ke(t,e,n,i,r){null!=t&&(t+="");var o=P(i,qe(e)),a=t?t.split("\n"):[],s=a.length*o,l=s;if(n&&(l+=n[0]+n[2]),t&&r){var u=r.outerHeight,c=r.outerWidth;if(null!=u&&l>u)t="",a=[];else if(null!=c)for(var h=Ue(c-(n?n[1]+n[3]:0),e,r.ellipsis,{minChar:r.minChar,placeholder:r.placeholder}),f=0,d=a.length;d>f;f++)a[f]=Xe(a[f],h)}return{lines:a,height:s,outerHeight:l,lineHeight:o}}function Je(t,e){var n={lines:[],width:0,height:0};if(null!=t&&(t+=""),!t)return n;for(var i,r=Ip.lastIndex=0;null!=(i=Ip.exec(t));){var o=i.index;o>r&&Qe(n,t.substring(r,o)),Qe(n,i[2],i[1]),r=Ip.lastIndex}r<t.length&&Qe(n,t.substring(r,t.length));var a=n.lines,s=0,l=0,u=[],c=e.textPadding,h=e.truncate,f=h&&h.outerWidth,d=h&&h.outerHeight;c&&(null!=f&&(f-=c[1]+c[3]),null!=d&&(d-=c[0]+c[2]));for(var p=0;p<a.length;p++){for(var g=a[p],v=0,m=0,y=0;y<g.tokens.length;y++){var _=g.tokens[y],x=_.styleName&&e.rich[_.styleName]||{},w=_.textPadding=x.textPadding,b=_.font=x.font||e.font,S=_.textHeight=P(x.textHeight,qe(b));if(w&&(S+=w[0]+w[2]),_.height=S,_.lineHeight=O(x.textLineHeight,e.textLineHeight,S),_.textAlign=x&&x.textAlign||e.textAlign,_.textVerticalAlign=x&&x.textVerticalAlign||"middle",null!=d&&s+_.lineHeight>d)return{lines:[],width:0,height:0};_.textWidth=ze(_.text,b);var M=x.textWidth,I=null==M||"auto"===M;if("string"==typeof M&&"%"===M.charAt(M.length-1))_.percentWidth=M,u.push(_),M=0;else{if(I){M=_.textWidth;var A=x.textBackgroundColor,T=A&&A.image;T&&(T=Le(T),Re(T)&&(M=Math.max(M,T.width*S/T.height)))}var k=w?w[1]+w[3]:0;M+=k;var C=null!=f?f-m:null;null!=C&&M>C&&(!I||k>C?(_.text="",_.textWidth=M=0):(_.text=We(_.text,C-k,b,h.ellipsis,{minChar:h.minChar}),_.textWidth=ze(_.text,b),M=_.textWidth+k))}m+=_.width=M,x&&(v=Math.max(v,_.lineHeight))}g.width=m,g.lineHeight=v,s+=v,l=Math.max(l,m)}n.outerWidth=n.width=P(e.textWidth,l),n.outerHeight=n.height=P(e.textHeight,s),c&&(n.outerWidth+=c[1]+c[3],n.outerHeight+=c[0]+c[2]);for(p=0;p<u.length;p++){_=u[p];var D=_.percentWidth;_.width=parseInt(D,10)/100*l}return n}function Qe(t,e,n){for(var i=""===e,r=e.split("\n"),o=t.lines,a=0;a<r.length;a++){var s=r[a],l={styleName:n,text:s,isLineHolder:!s&&!i};if(a)o.push({tokens:[l]});else{var u=(o[o.length-1]||(o[0]={tokens:[]})).tokens,c=u.length;1===c&&u[0].isLineHolder?u[0]=l:(s||!c||i)&&u.push(l)}}}function tn(t){var e=(t.fontSize||t.fontFamily)&&[t.fontStyle,t.fontWeight,(t.fontSize||12)+"px",t.fontFamily||"sans-serif"].join(" ");return e&&R(e)||t.textFont||t.font}function en(t,e){var n,i,r,o,a,s=e.x,l=e.y,u=e.width,c=e.height,h=e.r;0>u&&(s+=u,u=-u),0>c&&(l+=c,c=-c),"number"==typeof h?n=i=r=o=h:h instanceof Array?1===h.length?n=i=r=o=h[0]:2===h.length?(n=r=h[0],i=o=h[1]):3===h.length?(n=h[0],i=o=h[1],r=h[2]):(n=h[0],i=h[1],r=h[2],o=h[3]):n=i=r=o=0,n+i>u&&(a=n+i,n*=u/a,i*=u/a),r+o>u&&(a=r+o,r*=u/a,o*=u/a),i+r>c&&(a=i+r,i*=c/a,r*=c/a),n+o>c&&(a=n+o,n*=c/a,o*=c/a),t.moveTo(s+n,l),t.lineTo(s+u-i,l),0!==i&&t.arc(s+u-i,l+i,i,-Math.PI/2,0),t.lineTo(s+u,l+c-r),0!==r&&t.arc(s+u-r,l+c-r,r,0,Math.PI/2),t.lineTo(s+o,l+c),0!==o&&t.arc(s+o,l+c-o,o,Math.PI/2,Math.PI),t.lineTo(s,l+n),0!==n&&t.arc(s+n,l+n,n,Math.PI,1.5*Math.PI)}function nn(t){return rn(t),g(t.rich,rn),t}function rn(t){if(t){t.font=tn(t);var e=t.textAlign;"middle"===e&&(e="center"),t.textAlign=null==e||Cp[e]?e:"left";var n=t.textVerticalAlign||t.textBaseline;"center"===n&&(n="middle"),t.textVerticalAlign=null==n||Dp[n]?n:"top";var i=t.textPadding;i&&(t.textPadding=E(t.textPadding))}}function on(t,e,n,i,r,o){i.rich?sn(t,e,n,i,r,o):an(t,e,n,i,r,o)}function an(t,e,n,i,r,o){var a,s=hn(i),l=!1,u=e.__attrCachedBy===hp.PLAIN_TEXT;o!==fp?(o&&(a=o.style,l=!s&&u&&a),e.__attrCachedBy=s?hp.NONE:hp.PLAIN_TEXT):u&&(e.__attrCachedBy=hp.NONE);var c=i.font||kp;l&&c===(a.font||kp)||(e.font=c);var h=t.__computedFont;t.__styleFont!==c&&(t.__styleFont=c,h=t.__computedFont=e.font);var f=i.textPadding,d=i.textLineHeight,p=t.__textCotentBlock;(!p||t.__dirtyText)&&(p=t.__textCotentBlock=Ke(n,h,f,d,i.truncate));var g=p.outerHeight,v=p.lines,m=p.lineHeight,y=pn(g,i,r),_=y.baseX,x=y.baseY,w=y.textAlign||"left",b=y.textVerticalAlign;un(e,i,r,_,x);var S=He(x,g,b),M=_,I=S;if(s||f){var A=ze(n,h),T=A;f&&(T+=f[1]+f[3]);var k=je(_,T,w);s&&fn(t,e,i,k,S,T,g),f&&(M=_n(_,w,f),I+=f[0])}e.textAlign=w,e.textBaseline="middle",e.globalAlpha=i.opacity||1;for(var C=0;C<Pp.length;C++){var D=Pp[C],P=D[0],O=D[1],L=i[P];l&&L===a[P]||(e[O]=cp(e,O,L||D[2]))}I+=m/2;var E=i.textStrokeWidth,N=l?a.textStrokeWidth:null,R=!l||E!==N,B=!l||R||i.textStroke!==a.textStroke,z=vn(i.textStroke,E),F=mn(i.textFill);if(z&&(R&&(e.lineWidth=E),B&&(e.strokeStyle=z)),F&&(l&&i.textFill===a.textFill||(e.fillStyle=F)),1===v.length)z&&e.strokeText(v[0],M,I),F&&e.fillText(v[0],M,I);else for(C=0;C<v.length;C++)z&&e.strokeText(v[C],M,I),F&&e.fillText(v[C],M,I),I+=m}function sn(t,e,n,i,r,o){o!==fp&&(e.__attrCachedBy=hp.NONE);var a=t.__textCotentBlock;(!a||t.__dirtyText)&&(a=t.__textCotentBlock=Je(n,i)),ln(t,e,a,i,r)}function ln(t,e,n,i,r){var o=n.width,a=n.outerWidth,s=n.outerHeight,l=i.textPadding,u=pn(s,i,r),c=u.baseX,h=u.baseY,f=u.textAlign,d=u.textVerticalAlign;un(e,i,r,c,h);var p=je(c,a,f),g=He(h,s,d),v=p,m=g;l&&(v+=l[3],m+=l[0]);var y=v+o;hn(i)&&fn(t,e,i,p,g,a,s);for(var _=0;_<n.lines.length;_++){for(var x,w=n.lines[_],b=w.tokens,S=b.length,M=w.lineHeight,I=w.width,A=0,T=v,k=y,C=S-1;S>A&&(x=b[A],!x.textAlign||"left"===x.textAlign);)cn(t,e,x,i,M,m,T,"left"),I-=x.width,T+=x.width,A++;for(;C>=0&&(x=b[C],"right"===x.textAlign);)cn(t,e,x,i,M,m,k,"right"),I-=x.width,k-=x.width,C--;for(T+=(o-(T-v)-(y-k)-I)/2;C>=A;)x=b[A],cn(t,e,x,i,M,m,T+x.width/2,"center"),T+=x.width,A++;m+=M}}function un(t,e,n,i,r){if(n&&e.textRotation){var o=e.textOrigin;"center"===o?(i=n.width/2+n.x,r=n.height/2+n.y):o&&(i=o[0]+n.x,r=o[1]+n.y),t.translate(i,r),t.rotate(-e.textRotation),t.translate(-i,-r)}}function cn(t,e,n,i,r,o,a,s){var l=i.rich[n.styleName]||{};l.text=n.text;var u=n.textVerticalAlign,c=o+r/2;"top"===u?c=o+n.height/2:"bottom"===u&&(c=o+r-n.height/2),!n.isLineHolder&&hn(l)&&fn(t,e,l,"right"===s?a-n.width:"center"===s?a-n.width/2:a,c-n.height/2,n.width,n.height);var h=n.textPadding;h&&(a=_n(a,s,h),c-=n.height/2-h[2]-n.textHeight/2),gn(e,"shadowBlur",O(l.textShadowBlur,i.textShadowBlur,0)),gn(e,"shadowColor",l.textShadowColor||i.textShadowColor||"transparent"),gn(e,"shadowOffsetX",O(l.textShadowOffsetX,i.textShadowOffsetX,0)),gn(e,"shadowOffsetY",O(l.textShadowOffsetY,i.textShadowOffsetY,0)),gn(e,"textAlign",s),gn(e,"textBaseline","middle"),gn(e,"font",n.font||kp);var f=vn(l.textStroke||i.textStroke,p),d=mn(l.textFill||i.textFill),p=P(l.textStrokeWidth,i.textStrokeWidth);f&&(gn(e,"lineWidth",p),gn(e,"strokeStyle",f),e.strokeText(n.text,a,c)),d&&(gn(e,"fillStyle",d),e.fillText(n.text,a,c))}function hn(t){return!!(t.textBackgroundColor||t.textBorderWidth&&t.textBorderColor)}function fn(t,e,n,i,r,o,a){var s=n.textBackgroundColor,l=n.textBorderWidth,u=n.textBorderColor,c=M(s);if(gn(e,"shadowBlur",n.textBoxShadowBlur||0),gn(e,"shadowColor",n.textBoxShadowColor||"transparent"),gn(e,"shadowOffsetX",n.textBoxShadowOffsetX||0),gn(e,"shadowOffsetY",n.textBoxShadowOffsetY||0),c||l&&u){e.beginPath();var h=n.textBorderRadius;h?en(e,{x:i,y:r,width:o,height:a,r:h}):e.rect(i,r,o,a),e.closePath()}if(c)if(gn(e,"fillStyle",s),null!=n.fillOpacity){var f=e.globalAlpha;e.globalAlpha=n.fillOpacity*n.opacity,e.fill(),e.globalAlpha=f}else e.fill();else if(I(s)){var d=s.image;d=Ee(d,null,t,dn,s),d&&Re(d)&&e.drawImage(d,i,r,o,a)}if(l&&u)if(gn(e,"lineWidth",l),gn(e,"strokeStyle",u),null!=n.strokeOpacity){f=e.globalAlpha;e.globalAlpha=n.strokeOpacity*n.opacity,e.stroke(),e.globalAlpha=f}else e.stroke()}function dn(t,e){e.image=t}function pn(t,e,n){var i=e.x||0,r=e.y||0,o=e.textAlign,a=e.textVerticalAlign;if(n){var s=e.textPosition;if(s instanceof Array)i=n.x+yn(s[0],n.width),r=n.y+yn(s[1],n.height);else{var l=Ge(s,n,e.textDistance);i=l.x,r=l.y,o=o||l.textAlign,a=a||l.textVerticalAlign}var u=e.textOffset;u&&(i+=u[0],r+=u[1])}return{baseX:i,baseY:r,textAlign:o,textVerticalAlign:a}}function gn(t,e,n){return t[e]=cp(t,e,n),t[e]}function vn(t,e){return null==t||0>=e||"transparent"===t||"none"===t?null:t.image||t.colorStops?"#000":t}function mn(t){return null==t||"none"===t?null:t.image||t.colorStops?"#000":t}function yn(t,e){return"string"==typeof t?t.lastIndexOf("%")>=0?parseFloat(t)/100*e:parseFloat(t):t}function _n(t,e,n){return"right"===e?t-n[1]:"center"===e?t+n[3]/2-n[1]/2:t+n[3]}function xn(t,e){return null!=t&&(t||e.textBackgroundColor||e.textBorderWidth&&e.textBorderColor||e.textPadding)}function wn(t){for(var e in t=t||{},ep.call(this,t),t)t.hasOwnProperty(e)&&"style"!==e&&(this[e]=t[e]);this.style=new pp(t.style,this),this._rect=null,this.__clipPaths=[]}function bn(t){wn.call(this,t)}function Sn(t){return parseInt(t,10)}function Mn(t){return!!t&&(!!t.__builtin__||"function"==typeof t.resize&&"function"==typeof t.refresh)}function In(t,e,n){return zp.copy(t.getBoundingRect()),t.transform&&zp.applyTransform(t.transform),Fp.width=e,Fp.height=n,!zp.intersect(Fp)}function An(t,e){if(t===e)return!1;if(!t||!e||t.length!==e.length)return!0;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!0}function Tn(t,e){for(var n=0;n<t.length;n++){var i=t[n];i.setTransform(e),e.beginPath(),i.buildPath(e,i.shape),e.clip(),i.restoreTransform(e)}}function kn(t,e){var i=n.createElement("div");return i.style.cssText=["position:relative","overflow:hidden","width:"+t+"px","height:"+e+"px","padding:0","margin:0","border-width:0"].join(";")+";",i}function Cn(t){return"mousewheel"===t&&qf.browser.firefox?"DOMMouseScroll":t}function Dn(t){t._touching=!0,clearTimeout(t._touchTimer),t._touchTimer=setTimeout(function(){t._touching=!1},700)}function Pn(t){var e=t.pointerType;return"pen"===e||"touch"===e}function On(t){function e(t,e){return function(){return e._touching?void 0:t.apply(e,arguments)}}g(Gp,function(e){t._handlers[e]=x(Xp[e],t)}),g(Up,function(e){t._handlers[e]=x(Xp[e],t)}),g(Hp,function(n){t._handlers[n]=e(Xp[n],t)})}function Ln(t){function e(e,n){g(e,function(e){yt(t,Cn(e),n._handlers[e])},n)}md.call(this),this.dom=t,this._touching=!1,this._touchTimer,this._handlers={},On(this),qf.pointerEventsSupported?e(Up,this):(qf.touchEventsSupported&&e(Gp,this),e(Hp,this))}function En(t,e){var n=new Qp(Xf(),t,e);return Kp[n.id]=n,n}function Nn(t){if(t)t.dispose();else{for(var e in Kp)Kp.hasOwnProperty(e)&&Kp[e].dispose();Kp={}}return this}function Rn(t){return Kp[t]}function Bn(t,e){Zp[t]=e}function zn(t){delete Kp[t]}function Fn(t){return t instanceof Array?t:null==t?[]:[t]}function $n(t,e,n){if(t){t[e]=t[e]||{},t.emphasis=t.emphasis||{},t.emphasis[e]=t.emphasis[e]||{};for(var i=0,r=n.length;r>i;i++){var o=n[i];!t.emphasis[e].hasOwnProperty(o)&&t[e].hasOwnProperty(o)&&(t.emphasis[e][o]=t[e][o])}}}function Vn(t){return!ng(t)||ig(t)||t instanceof Date?t:t.value}function jn(t){return ng(t)&&!(t instanceof Array)}function Hn(t,e){e=(e||[]).slice();var n=v(t||[],function(t){return{exist:t}});return eg(e,function(t,i){if(ng(t)){for(var r=0;r<n.length;r++)if(!n[r].option&&null!=t.id&&n[r].exist.id===t.id+"")return n[r].option=t,void(e[i]=null);for(r=0;r<n.length;r++){var o=n[r].exist;if(!(n[r].option||null!=o.id&&null!=t.id||null==t.name||Un(t)||Un(o)||o.name!==t.name+""))return n[r].option=t,void(e[i]=null)}}}),eg(e,function(t){if(ng(t)){for(var e=0;e<n.length;e++){var i=n[e].exist;if(!n[e].option&&!Un(i)&&null==t.id){n[e].option=t;break}}e>=n.length&&n.push({option:t})}}),n}function Gn(t){var e=$();eg(t,function(t){var n=t.exist;n&&e.set(n.id,t)}),eg(t,function(t){var n=t.option;N(!n||null==n.id||!e.get(n.id)||e.get(n.id)===t,"id duplicates: "+(n&&n.id)),n&&null!=n.id&&e.set(n.id,t),!t.keyInfo&&(t.keyInfo={})}),eg(t,function(t,n){var i=t.exist,r=t.option,o=t.keyInfo;if(ng(r)){if(o.name=null!=r.name?r.name+"":i?i.name:rg+n,i)o.id=i.id;else if(null!=r.id)o.id=r.id+"";else{var a=0;do{o.id="\0"+o.name+"\0"+a++}while(e.get(o.id))}e.set(o.id,t)}})}function Wn(t){var e=t.name;return!(!e||!e.indexOf(rg))}function Un(t){return ng(t)&&t.id&&0===(t.id+"").indexOf("\0_ec_\0")}function Xn(t,e){return null!=e.dataIndexInside?e.dataIndexInside:null!=e.dataIndex?b(e.dataIndex)?v(e.dataIndex,function(e){return t.indexOfRawIndex(e)}):t.indexOfRawIndex(e.dataIndex):null!=e.name?b(e.name)?v(e.name,function(e){return t.indexOfName(e)}):t.indexOfName(e.name):void 0}function Yn(){var t="__\0ec_inner_"+ag+++"_"+Math.random().toFixed(5);return function(e){return e[t]||(e[t]={})}}function qn(t,e,n){if(M(e)){var i={};i[e+"Index"]=0,e=i}var r=n&&n.defaultMainType;!r||Zn(e,r+"Index")||Zn(e,r+"Id")||Zn(e,r+"Name")||(e[r+"Index"]=0);var o={};return eg(e,function(i,r){i=e[r];if("dataIndex"!==r&&"dataIndexInside"!==r){var a=r.match(/^(\w+)(Index|Id|Name)$/)||[],s=a[1],l=(a[2]||"").toLowerCase();if(!(!s||!l||null==i||"index"===l&&"none"===i||n&&n.includeMainTypes&&h(n.includeMainTypes,s)<0)){var u={mainType:s};("index"!==l||"all"!==i)&&(u[l]=i);var c=t.queryComponents(u);o[s+"Models"]=c,o[s+"Model"]=c[0]}}else o[r]=i}),o}function Zn(t,e){return t&&t.hasOwnProperty(e)}function Kn(t,e,n){t.setAttribute?t.setAttribute(e,n):t[e]=n}function Jn(t,e){return t.getAttribute?t.getAttribute(e):t[e]}function Qn(t){return"auto"===t?qf.domSupported?"html":"richText":t||"html"}function ti(t){var e={main:"",sub:""};return t&&(t=t.split(sg),e.main=t[0]||"",e.sub=t[1]||""),e}function ei(t){N(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t),'componentType "'+t+'" illegal')}function ni(t){t.$constructor=t,t.extend=function(t){var e=this,n=function(){t.$constructor?t.$constructor.apply(this,arguments):e.apply(this,arguments)};return l(n.prototype,t),n.extend=this.extend,n.superCall=ri,n.superApply=oi,f(n,this),n.superClass=e,n}}function ii(t){var e=["__\0is_clz",ug++,Math.random().toFixed(3)].join("_");t.prototype[e]=!0,t.isInstance=function(t){return!(!t||!t[e])}}function ri(t,e){var n=L(arguments,2);return this.superClass.prototype[e].apply(t,n)}function oi(t,e,n){return this.superClass.prototype[e].apply(t,n)}function ai(t,e){function n(t){var e=i[t.main];return e&&e[lg]||(e=i[t.main]={},e[lg]=!0),e}e=e||{};var i={};if(t.registerClass=function(t,e){if(e)if(ei(e),e=ti(e),e.sub){if(e.sub!==lg){var r=n(e);r[e.sub]=t}}else i[e.main]=t;return t},t.getClass=function(t,e,n){var r=i[t];if(r&&r[lg]&&(r=e?r[e]:null),n&&!r)throw new Error(e?"Component "+t+"."+(e||"")+" not exists. Load it first.":t+".type should be specified.");return r},t.getClassesByMainType=function(t){t=ti(t);var e=[],n=i[t.main];return n&&n[lg]?g(n,function(t,n){n!==lg&&e.push(t)}):e.push(n),e},t.hasClass=function(t){return t=ti(t),!!i[t.main]},t.getAllClassMainTypes=function(){var t=[];return g(i,function(e,n){t.push(n)}),t},t.hasSubTypes=function(t){t=ti(t);var e=i[t.main];return e&&e[lg]},t.parseClassType=ti,e.registerWhenExtend){var r=t.extend;r&&(t.extend=function(e){var n=r.call(this,e);return t.registerClass(n,e.type)})}return t}function si(t){return t>-mg&&mg>t}function li(t){return t>mg||-mg>t}function ui(t,e,n,i,r){var o=1-r;return o*o*(o*t+3*r*e)+r*r*(r*i+3*o*n)}function ci(t,e,n,i,r){var o=1-r;return 3*(((e-t)*o+2*(n-e)*r)*o+(i-n)*r*r)}function hi(t,e,n,i,r,o){var a=i+3*(e-n)-t,s=3*(n-2*e+t),l=3*(e-t),u=t-r,c=s*s-3*a*l,h=s*l-9*a*u,f=l*l-3*s*u,d=0;if(si(c)&&si(h))if(si(s))o[0]=0;else{var p=-l/s;p>=0&&1>=p&&(o[d++]=p)}else{var g=h*h-4*c*f;if(si(g)){var v=h/c,m=(p=-s/a+v,-v/2);p>=0&&1>=p&&(o[d++]=p),m>=0&&1>=m&&(o[d++]=m)}else if(g>0){var y=vg(g),_=c*s+1.5*a*(-h+y),x=c*s+1.5*a*(-h-y);_=0>_?-gg(-_,xg):gg(_,xg),x=0>x?-gg(-x,xg):gg(x,xg);p=(-s-(_+x))/(3*a);p>=0&&1>=p&&(o[d++]=p)}else{var w=(2*c*s-3*a*h)/(2*vg(c*c*c)),b=Math.acos(w)/3,S=vg(c),M=Math.cos(b),I=(p=(-s-2*S*M)/(3*a),m=(-s+S*(M+_g*Math.sin(b)))/(3*a),(-s+S*(M-_g*Math.sin(b)))/(3*a));p>=0&&1>=p&&(o[d++]=p),m>=0&&1>=m&&(o[d++]=m),I>=0&&1>=I&&(o[d++]=I)}}return d}function fi(t,e,n,i,r){var o=6*n-12*e+6*t,a=9*e+3*i-3*t-9*n,s=3*e-3*t,l=0;if(si(a)){if(li(o)){var u=-s/o;u>=0&&1>=u&&(r[l++]=u)}}else{var c=o*o-4*a*s;if(si(c))r[0]=-o/(2*a);else if(c>0){var h=vg(c),f=(u=(-o+h)/(2*a),(-o-h)/(2*a));u>=0&&1>=u&&(r[l++]=u),f>=0&&1>=f&&(r[l++]=f)}}return l}function di(t,e,n,i,r,o){var a=(e-t)*r+t,s=(n-e)*r+e,l=(i-n)*r+n,u=(s-a)*r+a,c=(l-s)*r+s,h=(c-u)*r+u;o[0]=t,o[1]=a,o[2]=u,o[3]=h,o[4]=h,o[5]=c,o[6]=l,o[7]=i}function pi(t,e,n,i,r,o,a,s,l,u,c){var h,f,d,p,g,v=.005,m=1/0;wg[0]=l,wg[1]=u;for(var y=0;1>y;y+=.05)bg[0]=ui(t,n,r,a,y),bg[1]=ui(e,i,o,s,y),p=pd(wg,bg),m>p&&(h=y,m=p);m=1/0;for(var _=0;32>_&&!(yg>v);_++)f=h-v,d=h+v,bg[0]=ui(t,n,r,a,f),bg[1]=ui(e,i,o,s,f),p=pd(bg,wg),f>=0&&m>p?(h=f,m=p):(Sg[0]=ui(t,n,r,a,d),Sg[1]=ui(e,i,o,s,d),g=pd(Sg,wg),1>=d&&m>g?(h=d,m=g):v*=.5);return c&&(c[0]=ui(t,n,r,a,h),c[1]=ui(e,i,o,s,h)),vg(m)}function gi(t,e,n,i){var r=1-i;return r*(r*t+2*i*e)+i*i*n}function vi(t,e,n,i){return 2*((1-i)*(e-t)+i*(n-e))}function mi(t,e,n,i,r){var o=t-2*e+n,a=2*(e-t),s=t-i,l=0;if(si(o)){if(li(a)){var u=-s/a;u>=0&&1>=u&&(r[l++]=u)}}else{var c=a*a-4*o*s;if(si(c)){u=-a/(2*o);u>=0&&1>=u&&(r[l++]=u)}else if(c>0){var h=vg(c),f=(u=(-a+h)/(2*o),(-a-h)/(2*o));u>=0&&1>=u&&(r[l++]=u),f>=0&&1>=f&&(r[l++]=f)}}return l}function yi(t,e,n){var i=t+n-2*e;return 0===i?.5:(t-e)/i}function _i(t,e,n,i,r){var o=(e-t)*i+t,a=(n-e)*i+e,s=(a-o)*i+o;r[0]=t,r[1]=o,r[2]=s,r[3]=s,r[4]=a,r[5]=n}function xi(t,e,n,i,r,o,a,s,l){var u,c=.005,h=1/0;wg[0]=a,wg[1]=s;for(var f=0;1>f;f+=.05){bg[0]=gi(t,n,r,f),bg[1]=gi(e,i,o,f);var d=pd(wg,bg);h>d&&(u=f,h=d)}h=1/0;for(var p=0;32>p&&!(yg>c);p++){var g=u-c,v=u+c;bg[0]=gi(t,n,r,g),bg[1]=gi(e,i,o,g);d=pd(bg,wg);if(g>=0&&h>d)u=g,h=d;else{Sg[0]=gi(t,n,r,v),Sg[1]=gi(e,i,o,v);var m=pd(Sg,wg);1>=v&&h>m?(u=v,h=m):c*=.5}}return l&&(l[0]=gi(t,n,r,u),l[1]=gi(e,i,o,u)),vg(h)}function wi(t,e,n){if(0!==t.length){var i,r=t[0],o=r[0],a=r[0],s=r[1],l=r[1];for(i=1;i<t.length;i++)r=t[i],o=Mg(o,r[0]),a=Ig(a,r[0]),s=Mg(s,r[1]),l=Ig(l,r[1]);e[0]=o,e[1]=s,n[0]=a,n[1]=l}}function bi(t,e,n,i,r,o){r[0]=Mg(t,n),r[1]=Mg(e,i),o[0]=Ig(t,n),o[1]=Ig(e,i)}function Si(t,e,n,i,r,o,a,s,l,u){var c,h=fi,f=ui,d=h(t,n,r,a,Og);for(l[0]=1/0,l[1]=1/0,u[0]=-1/0,u[1]=-1/0,c=0;d>c;c++){var p=f(t,n,r,a,Og[c]);l[0]=Mg(p,l[0]),u[0]=Ig(p,u[0])}for(d=h(e,i,o,s,Lg),c=0;d>c;c++){var g=f(e,i,o,s,Lg[c]);l[1]=Mg(g,l[1]),u[1]=Ig(g,u[1])}l[0]=Mg(t,l[0]),u[0]=Ig(t,u[0]),l[0]=Mg(a,l[0]),u[0]=Ig(a,u[0]),l[1]=Mg(e,l[1]),u[1]=Ig(e,u[1]),l[1]=Mg(s,l[1]),u[1]=Ig(s,u[1])}function Mi(t,e,n,i,r,o,a,s){var l=yi,u=gi,c=Ig(Mg(l(t,n,r),1),0),h=Ig(Mg(l(e,i,o),1),0),f=u(t,n,r,c),d=u(e,i,o,h);a[0]=Mg(t,r,f),a[1]=Mg(e,o,d),s[0]=Ig(t,r,f),s[1]=Ig(e,o,d)}function Ii(t,e,n,i,r,o,a,s,l){var u=lt,c=ut,h=Math.abs(r-o);if(1e-4>h%kg&&h>1e-4)return s[0]=t-n,s[1]=e-i,l[0]=t+n,void(l[1]=e+i);if(Cg[0]=Tg(r)*n+t,Cg[1]=Ag(r)*i+e,Dg[0]=Tg(o)*n+t,Dg[1]=Ag(o)*i+e,u(s,Cg,Dg),c(l,Cg,Dg),r%=kg,0>r&&(r+=kg),o%=kg,0>o&&(o+=kg),r>o&&!a?o+=kg:o>r&&a&&(r+=kg),a){var f=o;o=r,r=f}for(var d=0;o>d;d+=Math.PI/2)d>r&&(Pg[0]=Tg(d)*n+t,Pg[1]=Ag(d)*i+e,u(s,Pg,s),c(l,Pg,l))}function Ai(t,e,n,i,r,o,a){if(0===r)return!1;var s=r,l=0,u=t;if(a>e+s&&a>i+s||e-s>a&&i-s>a||o>t+s&&o>n+s||t-s>o&&n-s>o)return!1;if(t===n)return Math.abs(o-t)<=s/2;l=(e-i)/(t-n),u=(t*i-n*e)/(t-n);var c=l*o-a+u,h=c*c/(l*l+1);return s/2*s/2>=h}function Ti(t,e,n,i,r,o,a,s,l,u,c){if(0===l)return!1;var h=l;if(c>e+h&&c>i+h&&c>o+h&&c>s+h||e-h>c&&i-h>c&&o-h>c&&s-h>c||u>t+h&&u>n+h&&u>r+h&&u>a+h||t-h>u&&n-h>u&&r-h>u&&a-h>u)return!1;var f=pi(t,e,n,i,r,o,a,s,u,c,null);return h/2>=f}function ki(t,e,n,i,r,o,a,s,l){if(0===a)return!1;var u=a;if(l>e+u&&l>i+u&&l>o+u||e-u>l&&i-u>l&&o-u>l||s>t+u&&s>n+u&&s>r+u||t-u>s&&n-u>s&&r-u>s)return!1;var c=xi(t,e,n,i,r,o,s,l,null);return u/2>=c}function Ci(t){return t%=Xg,0>t&&(t+=Xg),t}function Di(t,e,n,i,r,o,a,s,l){if(0===a)return!1;var u=a;s-=t,l-=e;var c=Math.sqrt(s*s+l*l);if(c-u>n||n>c+u)return!1;if(Math.abs(i-r)%Yg<1e-4)return!0;if(o){var h=i;i=Ci(r),r=Ci(h)}else i=Ci(i),r=Ci(r);i>r&&(r+=Yg);var f=Math.atan2(l,s);return 0>f&&(f+=Yg),f>=i&&r>=f||f+Yg>=i&&r>=f+Yg}function Pi(t,e,n,i,r,o){if(o>e&&o>i||e>o&&i>o)return 0;if(i===e)return 0;var a=e>i?1:-1,s=(o-e)/(i-e);(1===s||0===s)&&(a=e>i?.5:-.5);var l=s*(n-t)+t;return l===r?1/0:l>r?a:0}function Oi(t,e){return Math.abs(t-e)<Kg}function Li(){var t=Qg[0];Qg[0]=Qg[1],Qg[1]=t}function Ei(t,e,n,i,r,o,a,s,l,u){if(u>e&&u>i&&u>o&&u>s||e>u&&i>u&&o>u&&s>u)return 0;var c=hi(e,i,o,s,u,Jg);if(0===c)return 0;for(var h,f,d=0,p=-1,g=0;c>g;g++){var v=Jg[g],m=0===v||1===v?.5:1,y=ui(t,n,r,a,v);l>y||(0>p&&(p=fi(e,i,o,s,Qg),Qg[1]<Qg[0]&&p>1&&Li(),h=ui(e,i,o,s,Qg[0]),p>1&&(f=ui(e,i,o,s,Qg[1]))),d+=2===p?v<Qg[0]?e>h?m:-m:v<Qg[1]?h>f?m:-m:f>s?m:-m:v<Qg[0]?e>h?m:-m:h>s?m:-m)}return d}function Ni(t,e,n,i,r,o,a,s){if(s>e&&s>i&&s>o||e>s&&i>s&&o>s)return 0;var l=mi(e,i,o,s,Jg);if(0===l)return 0;var u=yi(e,i,o);if(u>=0&&1>=u){for(var c=0,h=gi(e,i,o,u),f=0;l>f;f++){var d=0===Jg[f]||1===Jg[f]?.5:1,p=gi(t,n,r,Jg[f]);a>p||(c+=Jg[f]<u?e>h?d:-d:h>o?d:-d)}return c}d=0===Jg[0]||1===Jg[0]?.5:1,p=gi(t,n,r,Jg[0]);return a>p?0:e>o?d:-d}function Ri(t,e,n,i,r,o,a,s){if(s-=e,s>n||-n>s)return 0;var l=Math.sqrt(n*n-s*s);Jg[0]=-l,Jg[1]=l;var u=Math.abs(i-r);if(1e-4>u)return 0;if(1e-4>u%Zg){i=0,r=Zg;var c=o?1:-1;return a>=Jg[0]+t&&a<=Jg[1]+t?c:0}if(o){l=i;i=Ci(r),r=Ci(l)}else i=Ci(i),r=Ci(r);i>r&&(r+=Zg);for(var h=0,f=0;2>f;f++){var d=Jg[f];if(d+t>a){var p=Math.atan2(s,d);c=o?1:-1;0>p&&(p=Zg+p),(p>=i&&r>=p||p+Zg>=i&&r>=p+Zg)&&(p>Math.PI/2&&p<1.5*Math.PI&&(c=-c),h+=c)}}return h}function Bi(t,e,n,i,r){for(var o=0,a=0,s=0,l=0,u=0,c=0;c<t.length;){var h=t[c++];switch(h===qg.M&&c>1&&(n||(o+=Pi(a,s,l,u,i,r))),1===c&&(a=t[c],s=t[c+1],l=a,u=s),h){case qg.M:l=t[c++],u=t[c++],a=l,s=u;break;case qg.L:if(n){if(Ai(a,s,t[c],t[c+1],e,i,r))return!0}else o+=Pi(a,s,t[c],t[c+1],i,r)||0;a=t[c++],s=t[c++];break;case qg.C:if(n){if(Ti(a,s,t[c++],t[c++],t[c++],t[c++],t[c],t[c+1],e,i,r))return!0}else o+=Ei(a,s,t[c++],t[c++],t[c++],t[c++],t[c],t[c+1],i,r)||0;a=t[c++],s=t[c++];break;case qg.Q:if(n){if(ki(a,s,t[c++],t[c++],t[c],t[c+1],e,i,r))return!0}else o+=Ni(a,s,t[c++],t[c++],t[c],t[c+1],i,r)||0;a=t[c++],s=t[c++];break;case qg.A:var f=t[c++],d=t[c++],p=t[c++],g=t[c++],v=t[c++],m=t[c++];c+=1;var y=1-t[c++],_=Math.cos(v)*p+f,x=Math.sin(v)*g+d;c>1?o+=Pi(a,s,_,x,i,r):(l=_,u=x);var w=(i-f)*g/p+f;if(n){if(Di(f,d,g,v,v+m,y,e,w,r))return!0}else o+=Ri(f,d,g,v,v+m,y,w,r);a=Math.cos(v+m)*p+f,s=Math.sin(v+m)*g+d;break;case qg.R:l=a=t[c++],u=s=t[c++];var b=t[c++],S=t[c++];_=l+b,x=u+S;if(n){if(Ai(l,u,_,u,e,i,r)||Ai(_,u,_,x,e,i,r)||Ai(_,x,l,x,e,i,r)||Ai(l,x,l,u,e,i,r))return!0}else o+=Pi(_,u,_,x,i,r),o+=Pi(l,x,l,u,i,r);break;case qg.Z:if(n){if(Ai(a,s,l,u,e,i,r))return!0}else o+=Pi(a,s,l,u,i,r);a=l,s=u}}return n||Oi(s,u)||(o+=Pi(a,s,l,u,i,r)||0),0!==o}function zi(t,e,n){return Bi(t,0,!1,e,n)}function Fi(t,e,n,i){return Bi(t,e,!0,n,i)}function $i(t){wn.call(this,t),this.path=null}function Vi(t,e,n,i,r,o,a,s,l,u,c){var h=l*(hv/180),f=cv(h)*(t-n)/2+uv(h)*(e-i)/2,d=-1*uv(h)*(t-n)/2+cv(h)*(e-i)/2,p=f*f/(a*a)+d*d/(s*s);p>1&&(a*=lv(p),s*=lv(p));var g=(r===o?-1:1)*lv((a*a*s*s-a*a*d*d-s*s*f*f)/(a*a*d*d+s*s*f*f))||0,v=g*a*d/s,m=g*-s*f/a,y=(t+n)/2+cv(h)*v-uv(h)*m,_=(e+i)/2+uv(h)*v+cv(h)*m,x=pv([1,0],[(f-v)/a,(d-m)/s]),w=[(f-v)/a,(d-m)/s],b=[(-1*f-v)/a,(-1*d-m)/s],S=pv(w,b);dv(w,b)<=-1&&(S=hv),dv(w,b)>=1&&(S=0),0===o&&S>0&&(S-=2*hv),1===o&&0>S&&(S+=2*hv),c.addData(u,y,_,a,s,x,S,h,o)}function ji(t){if(!t)return new Ug;for(var e,n=0,i=0,r=n,o=i,a=new Ug,s=Ug.CMD,l=t.match(gv),u=0;u<l.length;u++){for(var c,h=l[u],f=h.charAt(0),d=h.match(vv)||[],p=d.length,g=0;p>g;g++)d[g]=parseFloat(d[g]);for(var v=0;p>v;){var m,y,_,x,w,b,S,M=n,I=i;switch(f){case"l":n+=d[v++],i+=d[v++],c=s.L,a.addData(c,n,i);break;case"L":n=d[v++],i=d[v++],c=s.L,a.addData(c,n,i);break;case"m":n+=d[v++],i+=d[v++],c=s.M,a.addData(c,n,i),r=n,o=i,f="l";break;case"M":n=d[v++],i=d[v++],c=s.M,a.addData(c,n,i),r=n,o=i,f="L";break;case"h":n+=d[v++],c=s.L,a.addData(c,n,i);break;case"H":n=d[v++],c=s.L,a.addData(c,n,i);break;case"v":i+=d[v++],c=s.L,a.addData(c,n,i);break;case"V":i=d[v++],c=s.L,a.addData(c,n,i);break;case"C":c=s.C,a.addData(c,d[v++],d[v++],d[v++],d[v++],d[v++],d[v++]),n=d[v-2],i=d[v-1];break;case"c":c=s.C,a.addData(c,d[v++]+n,d[v++]+i,d[v++]+n,d[v++]+i,d[v++]+n,d[v++]+i),n+=d[v-2],i+=d[v-1];break;case"S":m=n,y=i;var A=a.len(),T=a.data;e===s.C&&(m+=n-T[A-4],y+=i-T[A-3]),c=s.C,M=d[v++],I=d[v++],n=d[v++],i=d[v++],a.addData(c,m,y,M,I,n,i);break;case"s":m=n,y=i;A=a.len(),T=a.data;e===s.C&&(m+=n-T[A-4],y+=i-T[A-3]),c=s.C,M=n+d[v++],I=i+d[v++],n+=d[v++],i+=d[v++],a.addData(c,m,y,M,I,n,i);break;case"Q":M=d[v++],I=d[v++],n=d[v++],i=d[v++],c=s.Q,a.addData(c,M,I,n,i);break;case"q":M=d[v++]+n,I=d[v++]+i,n+=d[v++],i+=d[v++],c=s.Q,a.addData(c,M,I,n,i);break;case"T":m=n,y=i;A=a.len(),T=a.data;e===s.Q&&(m+=n-T[A-4],y+=i-T[A-3]),n=d[v++],i=d[v++],c=s.Q,a.addData(c,m,y,n,i);break;case"t":m=n,y=i;A=a.len(),T=a.data;e===s.Q&&(m+=n-T[A-4],y+=i-T[A-3]),n+=d[v++],i+=d[v++],c=s.Q,a.addData(c,m,y,n,i);break;case"A":_=d[v++],x=d[v++],w=d[v++],b=d[v++],S=d[v++],M=n,I=i,n=d[v++],i=d[v++],c=s.A,Vi(M,I,n,i,b,S,_,x,w,c,a);break;case"a":_=d[v++],x=d[v++],w=d[v++],b=d[v++],S=d[v++],M=n,I=i,n+=d[v++],i+=d[v++],c=s.A,Vi(M,I,n,i,b,S,_,x,w,c,a)}}("z"===f||"Z"===f)&&(c=s.Z,a.addData(c),n=r,i=o),e=c}return a.toStatic(),a}function Hi(t,e){var n=ji(t);return e=e||{},e.buildPath=function(t){if(t.setData){t.setData(n.data);var e=t.getContext();e&&t.rebuildPath(e)}else{e=t;n.rebuildPath(e)}},e.applyTransform=function(t){sv(n,t),this.dirty(!0)},e}function Gi(t,e){return new $i(Hi(t,e))}function Wi(t,e){return $i.extend(Hi(t,e))}function Ui(t,e){for(var n=[],i=t.length,r=0;i>r;r++){var o=t[r];o.path||o.createPathProxy(),o.__dirtyPath&&o.buildPath(o.path,o.shape,!0),n.push(o.path)}var a=new $i(e);return a.createPathProxy(),a.buildPath=function(t){t.appendPath(n);var e=t.getContext();e&&t.rebuildPath(e)},a}function Xi(t,e,n,i,r,o,a){var s=.5*(n-t),l=.5*(i-e);return(2*(e-n)+s+l)*a+(-3*(e-n)-2*s-l)*o+s*r+e}function Yi(t,e,n){var i=e.points,r=e.smooth;if(i&&i.length>=2){if(r&&"spline"!==r){var o=Mv(i,r,n,e.smoothConstraint);t.moveTo(i[0][0],i[0][1]);for(var a=i.length,s=0;(n?a:a-1)>s;s++){var l=o[2*s],u=o[2*s+1],c=i[(s+1)%a];t.bezierCurveTo(l[0],l[1],u[0],u[1],c[0],c[1])}}else{"spline"===r&&(i=Sv(i,n)),t.moveTo(i[0][0],i[0][1]);s=1;for(var h=i.length;h>s;s++)t.lineTo(i[s][0],i[s][1])}n&&t.closePath()}}function qi(t,e,n){var i=n&&n.lineWidth;if(e&&i){var r=e.x1,o=e.x2,a=e.y1,s=e.y2;Tv(2*r)===Tv(2*o)?t.x1=t.x2=Ki(r,i,!0):(t.x1=r,t.x2=o),Tv(2*a)===Tv(2*s)?t.y1=t.y2=Ki(a,i,!0):(t.y1=a,t.y2=s)}}function Zi(t,e,n){var i=n&&n.lineWidth;if(e&&i){var r=e.x,o=e.y,a=e.width,s=e.height;t.x=Ki(r,i,!0),t.y=Ki(o,i,!0),t.width=Math.max(Ki(r+a,i,!1)-t.x,0===a?0:1),t.height=Math.max(Ki(o+s,i,!1)-t.y,0===s?0:1)}}function Ki(t,e,n){var i=Tv(2*t);return(i+Tv(e))%2===0?i/2:(i+(n?1:-1))/2}function Ji(t,e,n){var i=t.cpx2,r=t.cpy2;return null===i||null===r?[(n?ci:ui)(t.x1,t.cpx1,t.cpx2,t.x2,e),(n?ci:ui)(t.y1,t.cpy1,t.cpy2,t.y2,e)]:[(n?vi:gi)(t.x1,t.cpx1,t.x2,e),(n?vi:gi)(t.y1,t.cpy1,t.y2,e)]}function Qi(t){wn.call(this,t),this._displayables=[],this._temporaryDisplayables=[],this._cursor=0,this.notClear=!0}function tr(t){return $i.extend(t)}function er(t,e){return Wi(t,e)}function nr(t,e,n,i){var r=Gi(t,e);return n&&("center"===i&&(n=rr(n,r.getBoundingRect())),or(r,n)),r}function ir(t,e,n){var i=new bn({style:{image:t,x:e.x,y:e.y,width:e.width,height:e.height},onload:function(t){if("center"===n){var r={width:t.width,height:t.height};i.setStyle(rr(e,r))}}});return i}function rr(t,e){var n,i=e.width/e.height,r=t.height*i;r<=t.width?n=t.height:(r=t.width,n=r/i);var o=t.x+t.width/2,a=t.y+t.height/2;return{x:o-r/2,y:a-n/2,width:r,height:n}}function or(t,e){if(t.applyTransform){var n=t.getBoundingRect(),i=n.calculateTransform(e);t.applyTransform(i)}}function ar(t){var e=t.shape,n=t.style.lineWidth;return $v(2*e.x1)===$v(2*e.x2)&&(e.x1=e.x2=lr(e.x1,n,!0)),$v(2*e.y1)===$v(2*e.y2)&&(e.y1=e.y2=lr(e.y1,n,!0)),t}function sr(t){var e=t.shape,n=t.style.lineWidth,i=e.x,r=e.y,o=e.width,a=e.height;return e.x=lr(e.x,n,!0),e.y=lr(e.y,n,!0),e.width=Math.max(lr(i+o,n,!1)-e.x,0===o?0:1),e.height=Math.max(lr(r+a,n,!1)-e.y,0===a?0:1),t}function lr(t,e,n){var i=$v(2*t);return(i+$v(e))%2===0?i/2:(i+(n?1:-1))/2}function ur(t){return null!=t&&"none"!==t}function cr(t){if("string"!=typeof t)return t;var e=Uv.get(t);return e||(e=Zt(t,-.1),1e4>Xv&&(Uv.set(t,e),Xv++)),e}function hr(t){if(t.__hoverStlDirty){t.__hoverStlDirty=!1;var e=t.__hoverStl;if(!e)return void(t.__cachedNormalStl=t.__cachedNormalZ2=null);var n=t.__cachedNormalStl={};t.__cachedNormalZ2=t.z2;var i=t.style;for(var r in e)null!=e[r]&&(n[r]=i[r]);n.fill=i.fill,n.stroke=i.stroke}}function fr(t){var e=t.__hoverStl;if(e&&!t.__highlighted){var n=t.useHoverLayer;t.__highlighted=n?"layer":"plain";var i=t.__zr;if(i||!n){var r=t,o=t.style;n&&(r=i.addHover(t),o=r.style),Or(o),n||hr(r),o.extendFrom(e),dr(o,e,"fill"),dr(o,e,"stroke"),Pr(o),n||(t.dirty(!1),t.z2+=Gv)}}}function dr(t,e,n){!ur(e[n])&&ur(t[n])&&(t[n]=cr(t[n]))}function pr(t){var e=t.__highlighted;if(e)if(t.__highlighted=!1,"layer"===e)t.__zr&&t.__zr.removeHover(t);else if(e){var n=t.style,i=t.__cachedNormalStl;i&&(Or(n),t.setStyle(i),Pr(n));var r=t.__cachedNormalZ2;null!=r&&t.z2-r===Gv&&(t.z2=r)}}function gr(t,e){t.isGroup?t.traverse(function(t){!t.isGroup&&e(t)}):e(t)}function vr(t,e){e=t.__hoverStl=!1!==e&&(e||{}),t.__hoverStlDirty=!0,t.__highlighted&&(t.__cachedNormalStl=null,pr(t),fr(t))}function mr(t){return t&&t.__isEmphasisEntered}function yr(t){this.__hoverSilentOnTouch&&t.zrByTouch||!this.__isEmphasisEntered&&gr(this,fr)}function _r(t){this.__hoverSilentOnTouch&&t.zrByTouch||!this.__isEmphasisEntered&&gr(this,pr)}function xr(){this.__isEmphasisEntered=!0,gr(this,fr)}function wr(){this.__isEmphasisEntered=!1,gr(this,pr)}function br(t,e,n){t.isGroup?t.traverse(function(t){!t.isGroup&&vr(t,t.hoverStyle||e)}):vr(t,t.hoverStyle||e),Sr(t,n)}function Sr(t,e){var n=!1===e;if(t.__hoverSilentOnTouch=null!=e&&e.hoverSilentOnTouch,!n||t.__hoverStyleTrigger){var i=n?"off":"on";t[i]("mouseover",yr)[i]("mouseout",_r),t[i]("emphasis",xr)[i]("normal",wr),t.__hoverStyleTrigger=!n}}function Mr(t,e,n,i,r,o,a){r=r||Hv;var s,l=r.labelFetcher,u=r.labelDataIndex,c=r.labelDimIndex,h=n.getShallow("show"),f=i.getShallow("show");(h||f)&&(l&&(s=l.getFormattedLabel(u,"normal",null,c)),null==s&&(s=S(r.defaultText)?r.defaultText(u,r):r.defaultText));var d=h?s:null,p=f?P(l?l.getFormattedLabel(u,"emphasis",null,c):null,s):null;(null!=d||null!=p)&&(Ir(t,n,o,r),Ir(e,i,a,r,!0)),t.text=d,e.text=p}function Ir(t,e,n,i,r){return Tr(t,e,i,r),n&&l(t,n),t}function Ar(t,e,n){var i,r={isRectText:!0};!1===n?i=!0:r.autoColor=n,Tr(t,e,r,i)}function Tr(t,e,n,i){if(n=n||Hv,n.isRectText){var r=e.getShallow("position")||(i?null:"inside");"outside"===r&&(r="top"),t.textPosition=r,t.textOffset=e.getShallow("offset");var o=e.getShallow("rotate");null!=o&&(o*=Math.PI/180),t.textRotation=o,t.textDistance=P(e.getShallow("distance"),i?null:5)}var a,s=e.ecModel,l=s&&s.option.textStyle,u=kr(e);if(u)for(var c in a={},u)if(u.hasOwnProperty(c)){var h=e.getModel(["rich",c]);Cr(a[c]={},h,l,n,i)}return t.rich=a,Cr(t,e,l,n,i,!0),n.forceRich&&!n.textStyle&&(n.textStyle={}),t}function kr(t){for(var e;t&&t!==t.ecModel;){var n=(t.option||Hv).rich;if(n)for(var i in e=e||{},n)n.hasOwnProperty(i)&&(e[i]=1);t=t.parentModel}return e}function Cr(t,e,n,i,r,o){n=!r&&n||Hv,t.textFill=Dr(e.getShallow("color"),i)||n.color,t.textStroke=Dr(e.getShallow("textBorderColor"),i)||n.textBorderColor,t.textStrokeWidth=P(e.getShallow("textBorderWidth"),n.textBorderWidth),t.insideRawTextPosition=t.textPosition,r||(o&&(t.insideRollbackOpt=i,Pr(t)),null==t.textFill&&(t.textFill=i.autoColor)),t.fontStyle=e.getShallow("fontStyle")||n.fontStyle,t.fontWeight=e.getShallow("fontWeight")||n.fontWeight,t.fontSize=e.getShallow("fontSize")||n.fontSize,t.fontFamily=e.getShallow("fontFamily")||n.fontFamily,t.textAlign=e.getShallow("align"),t.textVerticalAlign=e.getShallow("verticalAlign")||e.getShallow("baseline"),t.textLineHeight=e.getShallow("lineHeight"),t.textWidth=e.getShallow("width"),t.textHeight=e.getShallow("height"),t.textTag=e.getShallow("tag"),o&&i.disableBox||(t.textBackgroundColor=Dr(e.getShallow("backgroundColor"),i),t.textPadding=e.getShallow("padding"),t.textBorderColor=Dr(e.getShallow("borderColor"),i),t.textBorderWidth=e.getShallow("borderWidth"),t.textBorderRadius=e.getShallow("borderRadius"),t.textBoxShadowColor=e.getShallow("shadowColor"),t.textBoxShadowBlur=e.getShallow("shadowBlur"),t.textBoxShadowOffsetX=e.getShallow("shadowOffsetX"),t.textBoxShadowOffsetY=e.getShallow("shadowOffsetY")),t.textShadowColor=e.getShallow("textShadowColor")||n.textShadowColor,t.textShadowBlur=e.getShallow("textShadowBlur")||n.textShadowBlur,t.textShadowOffsetX=e.getShallow("textShadowOffsetX")||n.textShadowOffsetX,t.textShadowOffsetY=e.getShallow("textShadowOffsetY")||n.textShadowOffsetY}function Dr(t,e){return"auto"!==t?t:e&&e.autoColor?e.autoColor:null}function Pr(t){var e=t.insideRollbackOpt;if(e&&null==t.textFill){var n,i=e.useInsideStyle,r=t.insideRawTextPosition,o=e.autoColor;!1!==i&&(!0===i||e.isRectText&&r&&"string"==typeof r&&r.indexOf("inside")>=0)?(n={textFill:null,textStroke:t.textStroke,textStrokeWidth:t.textStrokeWidth},t.textFill="#fff",null==t.textStroke&&(t.textStroke=o,null==t.textStrokeWidth&&(t.textStrokeWidth=2))):null!=o&&(n={textFill:null},t.textFill=o),n&&(t.insideRollback=n)}}function Or(t){var e=t.insideRollback;e&&(t.textFill=e.textFill,t.textStroke=e.textStroke,t.textStrokeWidth=e.textStrokeWidth,t.insideRollback=null)}function Lr(t,e){var n=e||e.getModel("textStyle");return R([t.fontStyle||n&&n.getShallow("fontStyle")||"",t.fontWeight||n&&n.getShallow("fontWeight")||"",(t.fontSize||n&&n.getShallow("fontSize")||12)+"px",t.fontFamily||n&&n.getShallow("fontFamily")||"sans-serif"].join(" "))}function Er(t,e,n,i,r,o){"function"==typeof r&&(o=r,r=null);var a=i&&i.isAnimationEnabled();if(a){var s=t?"Update":"",l=i.getShallow("animationDuration"+s),u=i.getShallow("animationEasing"+s),c=i.getShallow("animationDelay"+s);"function"==typeof c&&(c=c(r,i.getAnimationDelayParams?i.getAnimationDelayParams(e,r):null)),"function"==typeof l&&(l=l(r)),l>0?e.animateTo(n,l,c||0,u,o,!!o):(e.stopAnimation(),e.attr(n),o&&o())}else e.stopAnimation(),e.attr(n),o&&o()}function Nr(t,e,n,i,r){Er(!0,t,e,n,i,r)}function Rr(t,e,n,i,r){Er(!1,t,e,n,i,r)}function Br(t,e){for(var n=Tt([]);t&&t!==e;)Ct(n,t.getLocalTransform(),n),t=t.parent;return n}function zr(t,e,n){return e&&!p(e)&&(e=Dd.getLocalTransform(e)),n&&(e=Lt([],e)),st([],t,e)}function Fr(t,e,n){var i=0===e[4]||0===e[5]||0===e[0]?1:Math.abs(2*e[4]/e[0]),r=0===e[4]||0===e[5]||0===e[2]?1:Math.abs(2*e[4]/e[2]),o=["left"===t?-i:"right"===t?i:0,"top"===t?-r:"bottom"===t?r:0];return o=zr(o,e,n),Math.abs(o[0])>Math.abs(o[1])?o[0]>0?"right":"left":o[1]>0?"bottom":"top"}function $r(t,e,n){function i(t){var e={};return t.traverse(function(t){!t.isGroup&&t.anid&&(e[t.anid]=t)}),e}function r(t){var e={position:W(t.position),rotation:t.rotation};return t.shape&&(e.shape=l({},t.shape)),e}if(t&&e){var o=i(t);e.traverse(function(t){if(!t.isGroup&&t.anid){var e=o[t.anid];if(e){var i=r(t);t.attr(r(e)),Nr(t,i,n,t.dataIndex)}}})}}function Vr(t,e){return v(t,function(t){var n=t[0];n=Vv(n,e.x),n=jv(n,e.x+e.width);var i=t[1];return i=Vv(i,e.y),i=jv(i,e.y+e.height),[n,i]})}function jr(t,e){var n=Vv(t.x,e.x),i=jv(t.x+t.width,e.x+e.width),r=Vv(t.y,e.y),o=jv(t.y+t.height,e.y+e.height);return i>=n&&o>=r?{x:n,y:r,width:i-n,height:o-r}:void 0}function Hr(t,e,n){e=l({rectHover:!0},e);var i=e.style={strokeNoScale:!0};return n=n||{x:-1,y:-1,width:2,height:2},t?0===t.indexOf("image://")?(i.image=t.slice(8),u(i,n),new bn(e)):nr(t.replace("path://",""),e,n,"center"):void 0}function Gr(t,e,n){this.parentModel=e,this.ecModel=n,this.option=t}function Wr(t,e,n){for(var i=0;i<e.length&&(!e[i]||(t=t&&"object"==typeof t?t[e[i]]:null,null!=t));i++);return null==t&&n&&(t=n.get(e)),t}function Ur(t,e){var n=tm(t).getParent;return n?n.call(t,e):t.parentModel}function Xr(t){return[t||"",em++,Math.random().toFixed(5)].join("_")}function Yr(t){var e={};return t.registerSubTypeDefaulter=function(t,n){t=ti(t),e[t.main]=n},t.determineSubType=function(n,i){var r=i.type;if(!r){var o=ti(n).main;t.hasSubTypes(n)&&e[o]&&(r=e[o](i))}return r},t}function qr(t,e){function n(t){var n={},o=[];return g(t,function(a){var s=i(n,a),l=s.originalDeps=e(a),u=r(l,t);s.entryCount=u.length,0===s.entryCount&&o.push(a),g(u,function(t){h(s.predecessor,t)<0&&s.predecessor.push(t);var e=i(n,t);h(e.successor,t)<0&&e.successor.push(a)})}),{graph:n,noEntryList:o}}function i(t,e){return t[e]||(t[e]={predecessor:[],successor:[]}),t[e]}function r(t,e){var n=[];return g(t,function(t){h(e,t)>=0&&n.push(t)}),n}t.topologicalTravel=function(t,e,i,r){function o(t){l[t].entryCount--,0===l[t].entryCount&&u.push(t)}function a(t){c[t]=!0,o(t)}if(t.length){var s=n(e),l=s.graph,u=s.noEntryList,c={};for(g(t,function(t){c[t]=!0});u.length;){var h=u.pop(),f=l[h],d=!!c[h];d&&(i.call(r,h,f.originalDeps.slice()),delete c[h]),g(f.successor,d?a:o)}g(c,function(){throw new Error("Circle dependency may exists")})}}}function Zr(t){return t.replace(/^\s+/,"").replace(/\s+$/,"")}function Kr(t,e,n,i){var r=e[1]-e[0],o=n[1]-n[0];if(0===r)return 0===o?n[0]:(n[0]+n[1])/2;if(i)if(r>0){if(t<=e[0])return n[0];if(t>=e[1])return n[1]}else{if(t>=e[0])return n[0];if(t<=e[1])return n[1]}else{if(t===e[0])return n[0];if(t===e[1])return n[1]}return(t-e[0])/r*o+n[0]}function Jr(t,e){switch(t){case"center":case"middle":t="50%";break;case"left":case"top":t="0%";break;case"right":case"bottom":t="100%"}return"string"==typeof t?Zr(t).match(/%$/)?parseFloat(t)/100*e:parseFloat(t):null==t?NaN:+t}function Qr(t,e,n){return null==e&&(e=10),e=Math.min(Math.max(0,e),20),t=(+t).toFixed(e),n?t:+t}function to(t){return t.sort(function(t,e){return t-e}),t}function eo(t){if(t=+t,isNaN(t))return 0;for(var e=1,n=0;Math.round(t*e)/e!==t;)e*=10,n++;return n}function no(t){var e=t.toString(),n=e.indexOf("e");if(n>0){var i=+e.slice(n+1);return 0>i?-i:0}var r=e.indexOf(".");return 0>r?0:e.length-1-r}function io(t,e){var n=Math.log,i=Math.LN10,r=Math.floor(n(t[1]-t[0])/i),o=Math.round(n(Math.abs(e[1]-e[0]))/i),a=Math.min(Math.max(-r+o,0),20);return isFinite(a)?a:20}function ro(t,e,n){if(!t[e])return 0;var i=m(t,function(t,e){return t+(isNaN(e)?0:e)},0);if(0===i)return 0;for(var r=Math.pow(10,n),o=v(t,function(t){return(isNaN(t)?0:t)/i*r*100}),a=100*r,s=v(o,function(t){return Math.floor(t)}),l=m(s,function(t,e){return t+e},0),u=v(o,function(t,e){return t-s[e]});a>l;){for(var c=Number.NEGATIVE_INFINITY,h=null,f=0,d=u.length;d>f;++f)u[f]>c&&(c=u[f],h=f);++s[h],u[h]=0,++l}return s[e]/r}function oo(t){var e=2*Math.PI;return(t%e+e)%e}function ao(t){return t>-nm&&nm>t}function so(t){if(t instanceof Date)return t;if("string"==typeof t){var e=rm.exec(t);if(!e)return new Date(NaN);if(e[8]){var n=+e[4]||0;return"Z"!==e[8].toUpperCase()&&(n-=e[8].slice(0,3)),new Date(Date.UTC(+e[1],+(e[2]||1)-1,+e[3]||1,n,+(e[5]||0),+e[6]||0,+e[7]||0))}return new Date(+e[1],+(e[2]||1)-1,+e[3]||1,+e[4]||0,+(e[5]||0),+e[6]||0,+e[7]||0)}return new Date(null==t?NaN:Math.round(t))}function lo(t){return Math.pow(10,uo(t))}function uo(t){return Math.floor(Math.log(t)/Math.LN10)}function co(t,e){var n,i=uo(t),r=Math.pow(10,i),o=t/r;return n=e?1.5>o?1:2.5>o?2:4>o?3:7>o?5:10:1>o?1:2>o?2:3>o?3:5>o?5:10,t=n*r,i>=-20?+t.toFixed(0>i?-i:0):t}function ho(t,e){var n=(t.length-1)*e+1,i=Math.floor(n),r=+t[i-1],o=n-i;return o?r+o*(t[i]-r):r}function fo(t){function e(t,n,i){return t.interval[i]<n.interval[i]||t.interval[i]===n.interval[i]&&(t.close[i]-n.close[i]===(i?-1:1)||!i&&e(t,n,1))}t.sort(function(t,n){return e(t,n,0)?-1:1});for(var n=-1/0,i=1,r=0;r<t.length;){for(var o=t[r].interval,a=t[r].close,s=0;2>s;s++)o[s]<=n&&(o[s]=n,a[s]=s?1:1-i),n=o[s],i=a[s];o[0]===o[1]&&a[0]*a[1]!==1?t.splice(r,1):r++}return t}function po(t){return t-parseFloat(t)>=0}function go(t){return isNaN(t)?"-":(t=(t+"").split("."),t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g,"$1,")+(t.length>1?"."+t[1]:""))}function vo(t,e){return t=(t||"").toLowerCase().replace(/-(.)/g,function(t,e){return e.toUpperCase()}),e&&t&&(t=t.charAt(0).toUpperCase()+t.slice(1)),t}function mo(t){return null==t?"":(t+"").replace(sm,function(t,e){return lm[e]})}function yo(t,e,n){b(e)||(e=[e]);var i=e.length;if(!i)return"";for(var r=e[0].$vars||[],o=0;o<r.length;o++){var a=um[o];t=t.replace(cm(a),cm(a,0))}for(var s=0;i>s;s++)for(var l=0;l<r.length;l++){var u=e[s][r[l]];t=t.replace(cm(um[l],s),n?mo(u):u)}return t}function _o(t,e,n){return g(e,function(e,i){t=t.replace("{"+i+"}",n?mo(e):e)}),t}function xo(t,e){t=M(t)?{color:t,extraCssText:e}:t||{};var n=t.color,i=t.type,r=(e=t.extraCssText,t.renderMode||"html"),o=t.markerId||"X";return n?"html"===r?"subItem"===i?'<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:'+mo(n)+";"+(e||"")+'"></span>':'<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'+mo(n)+";"+(e||"")+'"></span>':{renderMode:r,content:"{marker"+o+"|}  ",style:{color:n}}:""}function wo(t,e){return t+="","0000".substr(0,e-t.length)+t}function bo(t,e,n){("week"===t||"month"===t||"quarter"===t||"half-year"===t||"year"===t)&&(t="MM-dd\nyyyy");var i=so(e),r=n?"UTC":"",o=i["get"+r+"FullYear"](),a=i["get"+r+"Month"]()+1,s=i["get"+r+"Date"](),l=i["get"+r+"Hours"](),u=i["get"+r+"Minutes"](),c=i["get"+r+"Seconds"](),h=i["get"+r+"Milliseconds"]();return t.replace("MM",wo(a,2)).replace("M",a).replace("yyyy",o).replace("yy",o%100).replace("dd",wo(s,2)).replace("d",s).replace("hh",wo(l,2)).replace("h",l).replace("mm",wo(u,2)).replace("m",u).replace("ss",wo(c,2)).replace("s",c).replace("SSS",wo(h,3))}function So(t){return t?t.charAt(0).toUpperCase()+t.substr(1):t}function Mo(t){return Fe(t.text,t.font,t.textAlign,t.textVerticalAlign,t.textPadding,t.textLineHeight,t.rich,t.truncate)}function Io(t,e,n,i,r,o,a,s){return Fe(t,e,n,i,r,s,o,a)}function Ao(t,e,n,i,r){var o=0,a=0;null==i&&(i=1/0),null==r&&(r=1/0);var s=0;e.eachChild(function(l,u){var c,h,f=l.position,d=l.getBoundingRect(),p=e.childAt(u+1),g=p&&p.getBoundingRect();if("horizontal"===t){var v=d.width+(g?-g.x+d.x:0);c=o+v,c>i||l.newline?(o=0,c=v,a+=s+n,s=d.height):s=Math.max(s,d.height)}else{var m=d.height+(g?-g.y+d.y:0);h=a+m,h>r||l.newline?(o+=s+n,a=0,h=m,s=d.width):s=Math.max(s,d.width)}l.newline||(f[0]=o,f[1]=a,"horizontal"===t?o=c+n:a=h+n)})}function To(t,e,n){n=am(n||0);var i=e.width,r=e.height,o=Jr(t.left,i),a=Jr(t.top,r),s=Jr(t.right,i),l=Jr(t.bottom,r),u=Jr(t.width,i),c=Jr(t.height,r),h=n[2]+n[0],f=n[1]+n[3],d=t.aspect;switch(isNaN(u)&&(u=i-s-f-o),isNaN(c)&&(c=r-l-h-a),null!=d&&(isNaN(u)&&isNaN(c)&&(d>i/r?u=.8*i:c=.8*r),isNaN(u)&&(u=d*c),isNaN(c)&&(c=u/d)),isNaN(o)&&(o=i-s-u-f),isNaN(a)&&(a=r-l-c-h),t.left||t.right){case"center":o=i/2-u/2-n[3];break;case"right":o=i-u-f}switch(t.top||t.bottom){case"middle":case"center":a=r/2-c/2-n[0];break;case"bottom":a=r-c-h}o=o||0,a=a||0,isNaN(u)&&(u=i-f-o-(s||0)),isNaN(c)&&(c=r-h-a-(l||0));var p=new _e(o+n[3],a+n[0],u,c);return p.margin=n,p}function ko(t,e,n){function i(n,i){var a={},l=0,u={},c=0,h=2;if(dm(n,function(e){u[e]=t[e]}),dm(n,function(t){r(e,t)&&(a[t]=u[t]=e[t]),o(a,t)&&l++,o(u,t)&&c++}),s[i])return o(e,n[1])?u[n[2]]=null:o(e,n[2])&&(u[n[1]]=null),u;if(c!==h&&l){if(l>=h)return a;for(var f=0;f<n.length;f++){var d=n[f];if(!r(a,d)&&r(t,d)){a[d]=t[d];break}}return a}return u}function r(t,e){return t.hasOwnProperty(e)}function o(t,e){return null!=t[e]&&"auto"!==t[e]}function a(t,e,n){dm(t,function(t){e[t]=n[t]})}!I(n)&&(n={});var s=n.ignoreSize;!b(s)&&(s=[s,s]);var l=i(gm[0],0),u=i(gm[1],1);a(gm[0],t,l),a(gm[1],t,u)}function Co(t){return Do({},t)}function Do(t,e){return e&&t&&dm(pm,function(n){e.hasOwnProperty(n)&&(t[n]=e[n])}),t}function Po(t){var e=[];return g(_m.getClassesByMainType(t),function(t){e=e.concat(t.prototype.dependencies||[])}),e=v(e,function(t){return ti(t).main}),"dataset"!==t&&h(e,"dataset")<=0&&e.unshift("dataset"),e}function Oo(t,e){for(var n=t.length,i=0;n>i;i++)if(t[i].length>e)return t[i];return t[n-1]}function Lo(t){var e=t.get("coordinateSystem"),n={coordSysName:e,coordSysDims:[],axisMap:$(),categoryAxisMap:$()},i=Mm[e];return i?(i(t,n,n.axisMap,n.categoryAxisMap),n):void 0}function Eo(t){return"category"===t.get("type")}function No(t){this.fromDataset=t.fromDataset,this.data=t.data||(t.sourceFormat===km?{}:[]),this.sourceFormat=t.sourceFormat||Cm,this.seriesLayoutBy=t.seriesLayoutBy||Pm,this.dimensionsDefine=t.dimensionsDefine,this.encodeDefine=t.encodeDefine&&$(t.encodeDefine),this.startIndex=t.startIndex||0,this.dimensionsDetectCount=t.dimensionsDetectCount}function Ro(t){var e=t.option.source,n=Cm;if(T(e))n=Dm;else if(b(e)){0===e.length&&(n=Am);for(var i=0,r=e.length;r>i;i++){var o=e[i];if(null!=o){if(b(o)){n=Am;break}if(I(o)){n=Tm;break}}}}else if(I(e)){for(var a in e)if(e.hasOwnProperty(a)&&p(e[a])){n=km;break}}else if(null!=e)throw new Error("Invalid data");Lm(t).sourceFormat=n}function Bo(t){return Lm(t).source}function zo(t){Lm(t).datasetMap=$()}function Fo(t){var e=t.option,n=e.data,i=T(n)?Dm:Im,r=!1,o=e.seriesLayoutBy,a=e.sourceHeader,s=e.dimensions,l=Wo(t);if(l){var u=l.option;n=u.source,i=Lm(l).sourceFormat,r=!0,o=o||u.seriesLayoutBy,null==a&&(a=u.sourceHeader),s=s||u.dimensions}var c=$o(n,i,o,a,s),h=e.encode;!h&&l&&(h=Go(t,l,n,i,o,c)),Lm(t).source=new No({data:n,fromDataset:r,seriesLayoutBy:o,sourceFormat:i,dimensionsDefine:c.dimensionsDefine,startIndex:c.startIndex,dimensionsDetectCount:c.dimensionsDetectCount,encodeDefine:h})}function $o(t,e,n,i,r){if(!t)return{dimensionsDefine:Vo(r)};var o,a,s,l;if(e===Am)"auto"===i||null==i?jo(function(t){null!=t&&"-"!==t&&(M(t)?null==a&&(a=1):a=0)},n,t,10):a=i?1:0,r||1!==a||(r=[],jo(function(t,e){r[e]=null!=t?t:""},n,t)),o=r?r.length:n===Om?t.length:t[0]?t[0].length:null;else if(e===Tm)r||(r=Ho(t),s=!0);else if(e===km)r||(r=[],s=!0,g(t,function(t,e){r.push(e)}));else if(e===Im){var u=Vn(t[0]);o=b(u)&&u.length||1}return s&&g(r,function(t,e){"name"===(I(t)?t.name:t)&&(l=e)}),{startIndex:a,dimensionsDefine:Vo(r),dimensionsDetectCount:o,potentialNameDimIndex:l}}function Vo(t){if(t){var e=$();return v(t,function(t){if(t=l({},I(t)?t:{name:t}),null==t.name)return t;t.name+="",null==t.displayName&&(t.displayName=t.name);var n=e.get(t.name);return n?t.name+="-"+n.count++:e.set(t.name,{count:1}),t})}}function jo(t,e,n,i){if(null==i&&(i=1/0),e===Om)for(var r=0;r<n.length&&i>r;r++)t(n[r]?n[r][0]:null,r);else{var o=n[0]||[];for(r=0;r<o.length&&i>r;r++)t(o[r],r)}}function Ho(t){for(var e,n=0;n<t.length&&!(e=t[n++]););if(e){var i=[];return g(e,function(t,e){i.push(e)}),i}}function Go(t,e,n,i,r,o){var a=Lo(t),s={},l=[],u=[],c=t.subType,h=$(["pie","map","funnel"]),f=$(["line","bar","pictorialBar","scatter","effectScatter","candlestick","boxplot"]);if(a&&null!=f.get(c)){var d=t.ecModel,p=Lm(d).datasetMap,v=e.uid+"_"+r,m=p.get(v)||p.set(v,{categoryWayDim:1,valueWayDim:0});g(a.coordSysDims,function(t){if(null==a.firstCategoryDimIndex){var e=m.valueWayDim++;s[t]=e,u.push(e)}else if(a.categoryAxisMap.get(t))s[t]=0,l.push(0);else{e=m.categoryWayDim++;s[t]=e,u.push(e)}})}else if(null!=h.get(c)){for(var y,_=0;5>_&&null==y;_++)Xo(n,i,r,o.dimensionsDefine,o.startIndex,_)||(y=_);if(null!=y){s.value=y;var x=o.potentialNameDimIndex||Math.max(y-1,0);u.push(x),l.push(x)}}return l.length&&(s.itemName=l),u.length&&(s.seriesName=u),s}function Wo(t){var e=t.option,n=e.data;return n?void 0:t.ecModel.getComponent("dataset",e.datasetIndex||0)}function Uo(t,e){return Xo(t.data,t.sourceFormat,t.seriesLayoutBy,t.dimensionsDefine,t.startIndex,e)}function Xo(t,e,n,i,r,o){function a(t){return(null==t||!isFinite(t)||""===t)&&(!(!M(t)||"-"===t)||void 0)}var s,l,u=5;if(T(t))return!1;if(i&&(l=i[o],l=I(l)?l.name:l),e===Am)if(n===Om){for(var c=t[o],h=0;h<(c||[]).length&&u>h;h++)if(null!=(s=a(c[r+h])))return s}else for(h=0;h<t.length&&u>h;h++){var f=t[r+h];if(f&&null!=(s=a(f[o])))return s}else if(e===Tm){if(!l)return;for(h=0;h<t.length&&u>h;h++){var d=t[h];if(d&&null!=(s=a(d[l])))return s}}else if(e===km){if(!l)return;c=t[l];if(!c||T(c))return!1;for(h=0;h<c.length&&u>h;h++)if(null!=(s=a(c[h])))return s}else if(e===Im)for(h=0;h<t.length&&u>h;h++){d=t[h];var p=Vn(d);if(!b(p))return!1;if(null!=(s=a(p[o])))return s}return!1}function Yo(t,e){if(e){var n=e.seiresIndex,i=e.seriesId,r=e.seriesName;return null!=n&&t.componentIndex!==n||null!=i&&t.id!==i||null!=r&&t.name!==r}}function qo(t,e){var n=t.color&&!t.colorLayer;g(e,function(e,i){"colorLayer"===i&&n||_m.hasClass(i)||("object"==typeof e?t[i]=t[i]?a(t[i],e,!1):o(e):null==t[i]&&(t[i]=e))})}function Zo(t){t=t,this.option={},this.option[Em]=1,this._componentsMap=$({series:[]}),this._seriesIndices,this._seriesIndicesMap,qo(t,this._theme.option),a(t,wm,!1),this.mergeOption(t)}function Ko(t,e){b(e)||(e=e?[e]:[]);var n={};return g(e,function(e){n[e]=(t.get(e)||[]).slice()}),n}function Jo(t,e,n){var i=e.type?e.type:n?n.subType:_m.determineSubType(t,e);return i}function Qo(t,e){t._seriesIndicesMap=$(t._seriesIndices=v(e,function(t){return t.componentIndex})||[])}function ta(t,e){return e.hasOwnProperty("subType")?y(t,function(t){return t.subType===e.subType}):t}function ea(t){g(Rm,function(e){this[e]=x(t[e],t)},this)}function na(){this._coordinateSystems=[]}function ia(t){this._api=t,this._timelineOptions=[],this._mediaList=[],this._mediaDefault,this._currentMediaIndices=[],this._optionBackup,this._newBaseOption}function ra(t,e,n){var i,r,o=[],a=[],s=t.timeline;if(t.baseOption&&(r=t.baseOption),(s||t.options)&&(r=r||{},o=(t.options||[]).slice()),t.media){r=r||{};var l=t.media;zm(l,function(t){t&&t.option&&(t.query?a.push(t):i||(i=t))})}return r||(r=t),r.timeline||(r.timeline=s),zm([r].concat(o).concat(v(a,function(t){return t.option})),function(t){zm(e,function(e){e(t,n)})}),{baseOption:r,timelineOptions:o,mediaDefault:i,mediaList:a}}function oa(t,e,n){var i={width:e,height:n,aspectratio:e/n},r=!0;return g(t,function(t,e){var n=e.match(jm);if(n&&n[1]&&n[2]){var o=n[1],a=n[2].toLowerCase();aa(i[a],t,o)||(r=!1)}}),r}function aa(t,e,n){return"min"===n?t>=e:"max"===n?e>=t:t===e}function sa(t,e){return t.join(",")===e.join(",")}function la(t,e){e=e||{},zm(e,function(e,n){if(null!=e){var i=t[n];if(_m.hasClass(n)){e=Fn(e),i=Fn(i);var r=Hn(i,e);t[n]=$m(r,function(t){return t.option&&t.exist?Vm(t.exist,t.option,!0):t.exist||t.option})}else t[n]=Vm(i,e,!0)}})}function ua(t){var e=t&&t.itemStyle;if(e)for(var n=0,i=Wm.length;i>n;n++){var r=Wm[n],o=e.normal,s=e.emphasis;o&&o[r]&&(t[r]=t[r]||{},t[r].normal?a(t[r].normal,o[r]):t[r].normal=o[r],o[r]=null),s&&s[r]&&(t[r]=t[r]||{},t[r].emphasis?a(t[r].emphasis,s[r]):t[r].emphasis=s[r],s[r]=null)}}function ca(t,e,n){if(t&&t[e]&&(t[e].normal||t[e].emphasis)){var i=t[e].normal,r=t[e].emphasis;i&&(n?(t[e].normal=t[e].emphasis=null,u(t[e],i)):t[e]=i),r&&(t.emphasis=t.emphasis||{},t.emphasis[e]=r)}}function ha(t){ca(t,"itemStyle"),ca(t,"lineStyle"),ca(t,"areaStyle"),ca(t,"label"),ca(t,"labelLine"),ca(t,"upperLabel"),ca(t,"edgeLabel")}function fa(t,e){var n=Gm(t)&&t[e],i=Gm(n)&&n.textStyle;if(i)for(var r=0,o=og.length;o>r;r++){e=og[r];i.hasOwnProperty(e)&&(n[e]=i[e])}}function da(t){t&&(ha(t),fa(t,"label"),t.emphasis&&fa(t.emphasis,"label"))}function pa(t){if(Gm(t)){ua(t),ha(t),fa(t,"label"),fa(t,"upperLabel"),fa(t,"edgeLabel"),t.emphasis&&(fa(t.emphasis,"label"),fa(t.emphasis,"upperLabel"),fa(t.emphasis,"edgeLabel"));var e=t.markPoint;e&&(ua(e),da(e));var n=t.markLine;n&&(ua(n),da(n));var i=t.markArea;i&&da(i);var r=t.data;if("graph"===t.type){r=r||t.nodes;var o=t.links||t.edges;if(o&&!T(o))for(var a=0;a<o.length;a++)da(o[a]);g(t.categories,function(t){ha(t)})}if(r&&!T(r))for(a=0;a<r.length;a++)da(r[a]);e=t.markPoint;if(e&&e.data){var s=e.data;for(a=0;a<s.length;a++)da(s[a])}n=t.markLine;if(n&&n.data){var l=n.data;for(a=0;a<l.length;a++)b(l[a])?(da(l[a][0]),da(l[a][1])):da(l[a])}"gauge"===t.type?(fa(t,"axisLabel"),fa(t,"title"),fa(t,"detail")):"treemap"===t.type?(ca(t.breadcrumb,"itemStyle"),g(t.levels,function(t){ha(t)})):"tree"===t.type&&ha(t.leaves)}}function ga(t){return b(t)?t:t?[t]:[]}function va(t){return(b(t)?t[0]:t)||{}}function ma(t,e){e=e.split(",");for(var n=t,i=0;i<e.length&&(n=n&&n[e[i]],null!=n);i++);return n}function ya(t,e,n,i){e=e.split(",");for(var r,o=t,a=0;a<e.length-1;a++)r=e[a],null==o[r]&&(o[r]={}),o=o[r];(i||null==o[e[a]])&&(o[e[a]]=n)}function _a(t){g(Xm,function(e){e[0]in t&&!(e[1]in t)&&(t[e[1]]=t[e[0]])})}function xa(t){g(t,function(e,n){var i=[],r=[NaN,NaN],o=[e.stackResultDimension,e.stackedOverDimension],a=e.data,s=e.isStackedByIndex,l=a.map(o,function(o,l,u){var c,h,f=a.get(e.stackedDimension,u);if(isNaN(f))return r;s?h=a.getRawIndex(u):c=a.get(e.stackedByDimension,u);for(var d=NaN,p=n-1;p>=0;p--){var g=t[p];if(s||(h=g.data.rawIndexOf(g.stackedByDimension,c)),h>=0){var v=g.data.getByRawIndex(g.stackResultDimension,h);if(f>=0&&v>0||0>=f&&0>v){f+=v,d=v;break}}}return i[0]=f,i[1]=d,i});a.hostModel.setData(l),e.data=l})}function wa(t,e){No.isInstance(t)||(t=No.seriesDataToSource(t)),this._source=t;var n=this._data=t.data,i=t.sourceFormat;i===Dm&&(this._offset=0,this._dimSize=e,this._data=n);var r=Jm[i===Am?i+"_"+t.seriesLayoutBy:i];l(this,r)}function ba(){return this._data.length}function Sa(t){return this._data[t]}function Ma(t){for(var e=0;e<t.length;e++)this._data.push(t[e])}function Ia(t,e,n){return null!=n?t[n]:t}function Aa(t,e,n,i){return Ta(t[i],this._dimensionInfos[e])}function Ta(t,e){var n=e&&e.type;if("ordinal"===n){var i=e&&e.ordinalMeta;return i?i.parseAndCollect(t):t}return"time"===n&&"number"!=typeof t&&null!=t&&"-"!==t&&(t=+so(t)),null==t||""===t?NaN:+t}function ka(t,e,n){if(t){var i=t.getRawDataItem(e);if(null!=i){var r,o,a=t.getProvider().getSource().sourceFormat,s=t.getDimensionInfo(n);return s&&(r=s.name,o=s.index),Qm[a](i,e,o,r)}}}function Ca(t,e,n){if(t){var i=t.getProvider().getSource().sourceFormat;if(i===Im||i===Tm){var r=t.getRawDataItem(e);return i!==Im||I(r)||(r=null),r?r[n]:void 0}}}function Da(t){return new Pa(t)}function Pa(t){t=t||{},this._reset=t.reset,this._plan=t.plan,this._count=t.count,this._onDirty=t.onDirty,this._dirty=!0,this.context}function Oa(t,e,n,i,r,o){ry.reset(n,i,r,o),t._callingProgress=e,t._callingProgress({start:n,end:i,count:i-n,next:ry.next},t.context)}function La(t,e){var n,i;t._dueIndex=t._outputDueEnd=t._dueEnd=0,t._settedOutputEnd=null,!e&&t._reset&&(n=t._reset(t.context),n&&n.progress&&(i=n.forceFirstProgress,n=n.progress),b(n)&&!n.length&&(n=null)),t._progress=n,t._modBy=t._modDataCount=null;var r=t._downstream;return r&&r.dirty(),i}function Ea(t){var e=t.name;Wn(t)||(t.name=Na(t)||e)}function Na(t){var e=t.getRawData(),n=e.mapDimension("seriesName",!0),i=[];return g(n,function(t){var n=e.getDimensionInfo(t);n.displayName&&i.push(n.displayName)}),i.join(" ")}function Ra(t){return t.model.getRawData().count()}function Ba(t){var e=t.model;return e.setData(e.getRawData().cloneShallow()),za}function za(t,e){t.end>e.outputData.count()&&e.model.getRawData().cloneShallow(e.outputData)}function Fa(t,e){g(t.CHANGABLE_METHODS,function(n){t.wrapMethod(n,w($a,e))})}function $a(t){var e=Va(t);e&&e.setOutputEnd(this.count())}function Va(t){var e=(t.ecModel||{}).scheduler,n=e&&e.getPipeline(t.uid);if(n){var i=n.currentTask;if(i){var r=i.agentStubMap;r&&(i=r.get(t.uid))}return i}}function ja(){this.group=new op,this.uid=Xr("viewChart"),this.renderTask=Da({plan:Wa,reset:Ua}),this.renderTask.context={view:this}}function Ha(t,e){if(t&&(t.trigger(e),"group"===t.type))for(var n=0;n<t.childCount();n++)Ha(t.childAt(n),e)}function Ga(t,e,n){var i=Xn(t,e);null!=i?g(Fn(i),function(e){Ha(t.getItemGraphicEl(e),n)}):t.eachItemGraphicEl(function(t){Ha(t,n)})}function Wa(t){return hy(t.model)}function Ua(t){var e=t.model,n=t.ecModel,i=t.api,r=t.payload,o=e.pipelineContext.progressiveRender,a=t.view,s=r&&cy(r).updateMethod,l=o?"incrementalPrepareRender":s&&a[s]?s:"render";return"render"!==l&&a[l](e,n,i,r),dy[l]}function Xa(t,e,n){function i(){c=(new Date).getTime(),h=null,t.apply(a,s||[])}var r,o,a,s,l,u=0,c=0,h=null;e=e||0;var f=function(){r=(new Date).getTime(),a=this,s=arguments;var t=l||e,f=l||n;l=null,o=r-(f?u:c)-t,clearTimeout(h),f?h=setTimeout(i,t):o>=0?i():h=setTimeout(i,-o),u=r};return f.clear=function(){h&&(clearTimeout(h),h=null)},f.debounceNextCall=function(t){l=t},f}function Ya(t,e,n,i){var r=t[e];if(r){var o=r[py]||r,a=r[vy],s=r[gy];if(s!==n||a!==i){if(null==n||!i)return t[e]=o;r=t[e]=Xa(o,n,"debounce"===i),r[py]=o,r[vy]=i,r[gy]=n}return r}}function qa(t,e,n,i){this.ecInstance=t,this.api=e,this.unfinished;n=this._dataProcessorHandlers=n.slice(),i=this._visualHandlers=i.slice();this._allHandlers=n.concat(i),this._stageTaskMap=$()}function Za(t,e,n,i,r){function o(t,e){return t.setDirty&&(!t.dirtyMap||t.dirtyMap.get(e.__pipeline.id))}var a;r=r||{},g(e,function(e){if(!r.visualType||r.visualType===e.visualType){var s=t._stageTaskMap.get(e.uid),l=s.seriesTaskMap,u=s.overallTask;if(u){var c,h=u.agentStubMap;h.each(function(t){o(r,t)&&(t.dirty(),c=!0)}),c&&u.dirty(),Sy(u,i);var f=t.getPerformArgs(u,r.block);h.each(function(t){t.perform(f)}),a|=u.perform(f)}else l&&l.each(function(s){o(r,s)&&s.dirty();var l=t.getPerformArgs(s,r.block);l.skip=!e.performRawSeries&&n.isSeriesFiltered(s.context.model),Sy(s,i),a|=s.perform(l)})}}),t.unfinished|=a}function Ka(t,e,n,i,r){function o(n){var o=n.uid,s=a.get(o)||a.set(o,Da({plan:is,reset:rs,count:as}));s.context={model:n,ecModel:i,api:r,useClearVisual:e.isVisual&&!e.isLayout,plan:e.plan,reset:e.reset,scheduler:t},ss(t,n,s)}var a=n.seriesTaskMap||(n.seriesTaskMap=$()),s=e.seriesType,l=e.getTargetSeries;e.createOnAllSeries?i.eachRawSeries(o):s?i.eachRawSeriesByType(s,o):l&&l(i,r).each(o);var u=t._pipelineMap;a.each(function(t,e){u.get(e)||(t.dispose(),a.removeKey(e))})}function Ja(t,e,n,i,r){function o(e){var n=e.uid,i=s.get(n);i||(i=s.set(n,Da({reset:ts,onDirty:ns})),a.dirty()),i.context={model:e,overallProgress:c,modifyOutputEnd:h},i.agent=a,i.__block=c,ss(t,e,i)}var a=n.overallTask=n.overallTask||Da({reset:Qa});a.context={ecModel:i,api:r,overallReset:e.overallReset,scheduler:t};var s=a.agentStubMap=a.agentStubMap||$(),l=e.seriesType,u=e.getTargetSeries,c=!0,h=e.modifyOutputEnd;l?i.eachRawSeriesByType(l,o):u?u(i,r).each(o):(c=!1,g(i.getSeries(),o));var f=t._pipelineMap;s.each(function(t,e){f.get(e)||(t.dispose(),a.dirty(),s.removeKey(e))})}function Qa(t){t.overallReset(t.ecModel,t.api,t.payload)}function ts(t){return t.overallProgress&&es}function es(){this.agent.dirty(),this.getDownstream().dirty()}function ns(){this.agent&&this.agent.dirty()}function is(t){return t.plan&&t.plan(t.model,t.ecModel,t.api,t.payload)}function rs(t){t.useClearVisual&&t.data.clearAllVisual();var e=t.resetDefines=Fn(t.reset(t.model,t.ecModel,t.api,t.payload));return e.length>1?v(e,function(t,e){return os(e)}):My}function os(t){return function(e,n){var i=n.data,r=n.resetDefines[t];if(r&&r.dataEach)for(var o=e.start;o<e.end;o++)r.dataEach(i,o);else r&&r.progress&&r.progress(e,i)}}function as(t){return t.data.count()}function ss(t,e,n){var i=e.uid,r=t._pipelineMap.get(i);!r.head&&(r.head=n),r.tail&&r.tail.pipe(n),r.tail=n,n.__idxInPipeline=r.count++,n.__pipeline=r}function ls(t){Iy=null;try{t(Ay,Ty)}catch(i){}return Iy}function us(t,e){for(var n in e.prototype)t[n]=j}function cs(t){if(M(t)){var e=new DOMParser;t=e.parseFromString(t,"text/xml")}for(9===t.nodeType&&(t=t.firstChild);"svg"!==t.nodeName.toLowerCase()||1!==t.nodeType;)t=t.nextSibling;return t}function hs(){this._defs={},this._root=null,this._isDefine=!1,this._isText=!1}function fs(t,e){for(var n=t.firstChild;n;){if(1===n.nodeType){var i=n.getAttribute("offset");i=i.indexOf("%")>0?parseInt(i,10)/100:i?parseFloat(i):0;var r=n.getAttribute("stop-color")||"#000000";e.addColorStop(i,r)}n=n.nextSibling}}function ds(t,e){t&&t.__inheritedStyle&&(e.__inheritedStyle||(e.__inheritedStyle={}),u(e.__inheritedStyle,t.__inheritedStyle))}function ps(t){for(var e=R(t).split(Ny),n=[],i=0;i<e.length;i+=2){var r=parseFloat(e[i]),o=parseFloat(e[i+1]);n.push([r,o])}return n}function gs(t,e,n,i){var r=e.__inheritedStyle||{},o="text"===e.type;if(1===t.nodeType&&(ms(t,e),l(r,ys(t)),!i))for(var a in zy)if(zy.hasOwnProperty(a)){var s=t.getAttribute(a);null!=s&&(r[zy[a]]=s)}var u=o?"textFill":"fill",c=o?"textStroke":"stroke";e.style=e.style||new pp;var h=e.style;null!=r.fill&&h.set(u,vs(r.fill,n)),null!=r.stroke&&h.set(c,vs(r.stroke,n)),g(["lineWidth","opacity","fillOpacity","strokeOpacity","miterLimit","fontSize"],function(t){var e="lineWidth"===t&&o?"textStrokeWidth":t;null!=r[t]&&h.set(e,parseFloat(r[t]))}),r.textBaseline&&"auto"!==r.textBaseline||(r.textBaseline="alphabetic"),"alphabetic"===r.textBaseline&&(r.textBaseline="bottom"),"start"===r.textAlign&&(r.textAlign="left"),"end"===r.textAlign&&(r.textAlign="right"),g(["lineDashOffset","lineCap","lineJoin","fontWeight","fontFamily","fontStyle","textAlign","textBaseline"],function(t){null!=r[t]&&h.set(t,r[t])}),r.lineDash&&(e.style.lineDash=R(r.lineDash).split(Ny)),h[c]&&"none"!==h[c]&&(e[c]=!0),e.__inheritedStyle=r}function vs(t,e){var n=e&&t&&t.match(Fy);if(n){var i=R(n[1]),r=e[i];return r}return t}function ms(t,e){var n=t.getAttribute("transform");if(n){n=n.replace(/,/g," ");var i=null,r=[];n.replace($y,function(t,e,n){r.push(e,n)});for(var o=r.length-1;o>0;o-=2){var a=r[o],s=r[o-1];switch(i=i||At(),s){case"translate":a=R(a).split(Ny),Dt(i,i,[parseFloat(a[0]),parseFloat(a[1]||0)]);break;case"scale":a=R(a).split(Ny),Ot(i,i,[parseFloat(a[0]),parseFloat(a[1]||a[0])]);break;case"rotate":a=R(a).split(Ny),Pt(i,i,parseFloat(a[0]));break;case"skew":a=R(a).split(Ny),console.warn("Skew transform is not supported yet"," at components/echarts/echarts.min.js:3");break;case"matrix":a=R(a).split(Ny);i[0]=parseFloat(a[0]),i[1]=parseFloat(a[1]),i[2]=parseFloat(a[2]),i[3]=parseFloat(a[3]),i[4]=parseFloat(a[4]),i[5]=parseFloat(a[5])}}e.setLocalTransform(i)}}function ys(t){var e=t.getAttribute("style"),n={};if(!e)return n;var i,r={};for(Vy.lastIndex=0;null!=(i=Vy.exec(e));)r[i[1]]=i[2];for(var o in zy)zy.hasOwnProperty(o)&&null!=r[o]&&(n[zy[o]]=r[o]);return n}function _s(t,e,n){var i=e/t.width,r=n/t.height,o=Math.min(i,r),a=[o,o],s=[-(t.x+t.width/2)*o+e/2,-(t.y+t.height/2)*o+n/2];return{scale:a,position:s}}function xs(t){return function(e,n,i){e=e&&e.toLowerCase(),md.prototype[t].call(this,e,n,i)}}function ws(){md.call(this)}function bs(t,e,n){function i(t,e){return t.__prio-e.__prio}n=n||{},"string"==typeof e&&(e=__[e]),this.id,this.group,this._dom=t;var r="canvas",a=this._zr=En(t,{renderer:n.renderer||r,devicePixelRatio:n.devicePixelRatio,width:n.width,height:n.height});this._throttledZrFlush=Xa(x(a.flush,a),17);e=o(e);e&&qm(e,!0),this._theme=e,this._chartsViews=[],this._chartsMap={},this._componentsViews=[],this._componentsMap={},this._coordSysMgr=new na;var s=this._api=$s(this);Te(y_,i),Te(g_,i),this._scheduler=new qa(this,s,g_,y_),md.call(this,this._ecEventProcessor=new Vs),this._messageCenter=new ws,this._initEvents(),this.resize=x(this.resize,this),this._pendingActions=[],a.animation.on("frame",this._onframe,this),Ds(a,this),B(this)}function Ss(t,e,n){var i,r=this._model,o=this._coordSysMgr.getCoordinateSystems();e=qn(r,e);for(var a=0;a<o.length;a++){var s=o[a];if(s[t]&&null!=(i=s[t](r,e,n)))return i}}function Ms(t){var e=t._model,n=t._scheduler;n.restorePipelines(e),n.prepareStageTasks(),Ps(t,"component",e,n),Ps(t,"chart",e,n),n.plan()}function Is(t,e,n,i,r){function o(i){i&&i.__alive&&i[e]&&i[e](i.__model,a,t._api,n)}var a=t._model;if(i){var s={};s[i+"Id"]=n[i+"Id"],s[i+"Index"]=n[i+"Index"],s[i+"Name"]=n[i+"Name"];var l={mainType:i,query:s};r&&(l.subType=r);var u=n.excludeSeriesId;null!=u&&(u=$(Fn(u))),a&&a.eachComponent(l,function(e){u&&null!=u.get(e.id)||o(t["series"===i?"_chartsMap":"_componentsMap"][e.__viewId])},t)}else Uy(t._componentsViews.concat(t._chartsViews),o)}function As(t,e){var n=t._chartsMap,i=t._scheduler;e.eachSeries(function(t){i.updateStreamModes(t,n[t.__viewId])})}function Ts(t,e){var n=t.type,i=t.escapeConnect,r=d_[n],o=r.actionInfo,a=(o.update||"update").split(":"),s=a.pop();a=null!=a[0]&&qy(a[0]),this[s_]=!0;var c=[t],h=!1;t.batch&&(h=!0,c=v(t.batch,function(e){return e=u(l({},e),t),e.batch=null,e}));var f,d=[],p="highlight"===n||"downplay"===n;Uy(c,function(t){f=r.action(t,this._model,this._api),f=f||l({},t),f.type=o.event||f.type,d.push(f),p?Is(this,s,t,"series"):a&&Is(this,s,t,a.main,a.sub)},this),"none"===s||p||a||(this[l_]?(Ms(this),h_.update.call(this,t),this[l_]=!1):h_[s].call(this,t)),f=h?{type:o.event||n,escapeConnect:i,batch:d}:d[0],this[s_]=!1,!e&&this._messageCenter.trigger(f.type,f)}function ks(t){for(var e=this._pendingActions;e.length;){var n=e.shift();Ts.call(this,n,t)}}function Cs(t){!t&&this.trigger("updated")}function Ds(t,e){t.on("rendered",function(){e.trigger("rendered"),!t.animation.isFinished()||e[l_]||e._scheduler.unfinished||e._pendingActions.length||e.trigger("finished")})}function Ps(t,e,n,i){function r(t){var e="_ec_"+t.id+"_"+t.type,r=s[e];if(!r){var c=qy(t.type),h=o?sy.getClass(c.main,c.sub):ja.getClass(c.sub);r=new h,r.init(n,u),s[e]=r,a.push(r),l.add(r.group)}t.__viewId=r.__id=e,r.__alive=!0,r.__model=t,r.group.__ecComponentInfo={mainType:t.mainType,index:t.componentIndex},!o&&i.prepareView(r,t,n,u)}for(var o="component"===e,a=o?t._componentsViews:t._chartsViews,s=o?t._componentsMap:t._chartsMap,l=t._zr,u=t._api,c=0;c<a.length;c++)a[c].__alive=!1;o?n.eachComponent(function(t,e){"series"!==t&&r(e)}):n.eachSeries(r);for(c=0;c<a.length;){var h=a[c];h.__alive?c++:(!o&&h.renderTask.dispose(),l.remove(h.group),h.dispose(n,u),a.splice(c,1),delete s[h.__id],h.__id=h.group.__ecComponentInfo=null)}}function Os(t){t.clearColorPalette(),t.eachSeries(function(t){t.clearColorPalette()})}function Ls(t,e,n,i){Es(t,e,n,i),Uy(t._chartsViews,function(t){t.__alive=!1}),Ns(t,e,n,i),Uy(t._chartsViews,function(t){t.__alive||t.remove(e,n)})}function Es(t,e,n,i,r){Uy(r||t._componentsViews,function(t){var r=t.__model;t.render(r,e,n,i),Fs(r,t)})}function Ns(t,e,n,i,r){var o,a=t._scheduler;e.eachSeries(function(e){var n=t._chartsMap[e.__viewId];n.__alive=!0;var s=n.renderTask;a.updatePayload(s,i),r&&r.get(e.uid)&&s.dirty(),o|=s.perform(a.getPerformArgs(s)),n.group.silent=!!e.get("silent"),Fs(e,n),zs(e,n)}),a.unfinished|=o,Bs(t._zr,e),_y(t._zr.dom,e)}function Rs(t,e){Uy(m_,function(n){n(t,e)})}function Bs(t,e){var n=t.storage,i=0;n.traverse(function(t){t.isGroup||i++}),i>e.get("hoverLayerThreshold")&&!qf.node&&n.traverse(function(t){t.isGroup||(t.useHoverLayer=!0)})}function zs(t,e){var n=t.get("blendMode")||null;e.group.traverse(function(t){t.isGroup||t.style.blend!==n&&t.setStyle("blend",n),t.eachPendingDisplayable&&t.eachPendingDisplayable(function(t){t.setStyle("blend",n)})})}function Fs(t,e){var n=t.get("z"),i=t.get("zlevel");e.group.traverse(function(t){"group"!==t.type&&(null!=n&&(t.z=n),null!=i&&(t.zlevel=i))})}function $s(t){var e=t._coordSysMgr;return l(new ea(t),{getCoordinateSystems:x(e.getCoordinateSystems,e),getComponentByElement:function(e){for(;e;){var n=e.__ecComponentInfo;if(null!=n)return t._model.getComponent(n.mainType,n.index);e=e.parent}}})}function Vs(){this.eventInfo}function js(t){function e(t,e){for(var n=0;n<t.length;n++){var i=t[n];i[o]=e}}var n=0,i=1,r=2,o="__connectUpdateStatus";Uy(p_,function(a,s){t._messageCenter.on(s,function(a){if(b_[t.group]&&t[o]!==n){if(a&&a.escapeConnect)return;var s=t.makeActionFromEvent(a),l=[];Uy(w_,function(e){e!==t&&e.group===t.group&&l.push(e)}),e(l,n),Uy(l,function(t){t[o]!==i&&t.dispatchAction(s)}),e(l,r)}})})}function Hs(t,e,n){var i=Xs(t);if(i)return i;var r=new bs(t,e,n);return r.id="ec_"+S_++,w_[r.id]=r,Kn(t,I_,r.id),js(r),r}function Gs(t){if(b(t)){var e=t;t=null,Uy(e,function(e){null!=e.group&&(t=e.group)}),t=t||"g_"+M_++,Uy(e,function(e){e.group=t})}return b_[t]=!0,t}function Ws(t){b_[t]=!1}function Us(t){"string"==typeof t?t=w_[t]:t instanceof bs||(t=Xs(t)),t instanceof bs&&!t.isDisposed()&&t.dispose()}function Xs(t){return w_[Jn(t,I_)]}function Ys(t){return w_[t]}function qs(t,e){__[t]=e}function Zs(t){v_.push(t)}function Ks(t,e){rl(g_,t,e,Qy)}function Js(t){m_.push(t)}function Qs(t,e,n){"function"==typeof e&&(n=e,e="");var i=Yy(t)?t.type:[t,t={event:e}][0];t.event=(t.event||i).toLowerCase(),e=t.event,Wy(u_.test(i)&&u_.test(e)),d_[i]||(d_[i]={action:n,actionInfo:t}),p_[e]=i}function tl(t,e){na.register(t,e)}function el(t){var e=na.get(t);return e?e.getDimensionsInfo?e.getDimensionsInfo():e.dimensions.slice():void 0}function nl(t,e){rl(y_,t,e,e_,"layout")}function il(t,e){rl(y_,t,e,i_,"visual")}function rl(t,e,n,i,r){(Xy(e)||Yy(e))&&(n=e,e=i);var o=qa.wrapStageHandler(n,r);return o.__prio=e,o.__raw=n,t.push(o),o}function ol(t,e){x_[t]=e}function al(t){return _m.extend(t)}function sl(t){return sy.extend(t)}function ll(t){return ay.extend(t)}function ul(t){return ja.extend(t)}function cl(t){r("createCanvas",t)}function hl(t,e,n){Hy.registerMap(t,e,n)}function fl(t){var e=Hy.retrieveMap(t);return e&&e[0]&&{geoJson:e[0].geoJSON,specialAreas:e[0].specialAreas}}function dl(t){return t}function pl(t,e,n,i,r){this._old=t,this._new=e,this._oldKeyGetter=n||dl,this._newKeyGetter=i||dl,this.context=r}function gl(t,e,n,i,r){for(var o=0;o<t.length;o++){var a="_ec_"+r[i](t[o],o),s=e[a];null==s?(n.push(a),e[a]=o):(s.length||(e[a]=s=[s]),s.push(o))}}function vl(t){var e={},n=e.encode={},i=$(),r=[],o=[];g(t.dimensions,function(e){var a=t.getDimensionInfo(e),s=a.coordDim;if(s){var l=n[s];n.hasOwnProperty(s)||(l=n[s]=[]),l[a.coordDimIndex]=e,a.isExtraCoord||(i.set(s,1),yl(a.type)&&(r[0]=e)),a.defaultTooltip&&o.push(e)}k_.each(function(t,e){var i=n[e];n.hasOwnProperty(e)||(i=n[e]=[]);var r=a.otherDims[e];null!=r&&!1!==r&&(i[r]=a.name)})});var a=[],s={};i.each(function(t,e){var i=n[e];s[e]=i[0],a=a.concat(i)}),e.dataDimsOnCoord=a,e.encodeFirstDimNotExtra=s;var l=n.label;l&&l.length&&(r=l.slice());var u=n.tooltip;return u&&u.length?o=u.slice():o.length||(o=r.slice()),n.defaultedLabel=r,n.defaultedTooltip=o,e}function ml(t){return"category"===t?"ordinal":"time"===t?"time":"float"}function yl(t){return!("ordinal"===t||"time"===t)}function _l(t){return t._rawCount>65535?E_:R_}function xl(t){var e=t.constructor;return e===Array?t.slice():new e(t)}function wl(t,e){g(B_.concat(e.__wrappedMethods||[]),function(n){e.hasOwnProperty(n)&&(t[n]=e[n])}),t.__wrappedMethods=e.__wrappedMethods,g(z_,function(n){t[n]=o(e[n])}),t._calculationInfo=l(e._calculationInfo)}function bl(t,e,n,i,r){var o=L_[e.type],a=i-1,s=e.name,l=t[s][a];if(l&&l.length<n){for(var u=new o(Math.min(r-a*n,n)),c=0;c<l.length;c++)u[c]=l[c];t[s][a]=u}for(var h=i*n;r>h;h+=n)t[s].push(new o(Math.min(r-h,n)))}function Sl(t){var e=t._invertedIndicesMap;g(e,function(n,i){var r=t._dimensionInfos[i],o=r.ordinalMeta;if(o){n=e[i]=new N_(o.categories.length);for(var a=0;a<n.length;a++)n[a]=P_;for(a=0;a<t._count;a++)n[t.get(i,a)]=a}})}function Ml(t,e,n){var i;if(null!=e){var r=t._chunkSize,o=Math.floor(n/r),a=n%r,s=t.dimensions[e],l=t._storage[s][o];if(l){i=l[a];var u=t._dimensionInfos[s].ordinalMeta;u&&u.categories.length&&(i=u.categories[i])}}return i}function Il(t){return t}function Al(t){return t<this._count&&t>=0?this._indices[t]:-1}function Tl(t,e){var n=t._idList[e];return null==n&&(n=Ml(t,t._idDimIdx,e)),null==n&&(n=O_+e),n}function kl(t){return b(t)||(t=[t]),t}function Cl(t,e){var n=t.dimensions,i=new F_(v(n,t.getDimensionInfo,t),t.hostModel);wl(i,t);for(var r=i._storage={},o=t._storage,a=0;a<n.length;a++){var s=n[a];o[s]&&(h(e,s)>=0?(r[s]=Dl(o[s]),i._rawExtent[s]=Pl(),i._extent[s]=null):r[s]=o[s])}return i}function Dl(t){for(var e=new Array(t.length),n=0;n<t.length;n++)e[n]=xl(t[n]);return e}function Pl(){return[1/0,-1/0]}function Ol(t,e,n){function i(t,e,n){null!=k_.get(e)?t.otherDims[e]=n:(t.coordDim=e,t.coordDimIndex=n,c.set(e,!0))}No.isInstance(e)||(e=No.seriesDataToSource(e)),n=n||{},t=(t||[]).slice();for(var r=(n.dimsDef||[]).slice(),a=$(n.encodeDef),s=$(),c=$(),h=[],f=Ll(e,t,r,n.dimCount),d=0;f>d;d++){var p=r[d]=l({},I(r[d])?r[d]:{name:r[d]}),v=p.name,m=h[d]={otherDims:{}};null!=v&&null==s.get(v)&&(m.name=m.displayName=v,s.set(v,d)),null!=p.type&&(m.type=p.type),null!=p.displayName&&(m.displayName=p.displayName)}a.each(function(t,e){if(t=Fn(t).slice(),1===t.length&&t[0]<0)a.set(e,!1);else{var n=a.set(e,[]);g(t,function(t,r){M(t)&&(t=s.get(t)),null!=t&&f>t&&(n[r]=t,i(h[t],e,r))})}});var y=0;g(t,function(t){var e,n,r;if(M(t))e=t,t={};else{e=t.name;var s=t.ordinalMeta;t.ordinalMeta=null,t=o(t),t.ordinalMeta=s,n=t.dimsDef,r=t.otherDims,t.name=t.coordDim=t.coordDimIndex=t.dimsDef=t.otherDims=null}var l=a.get(e);if(!1!==l){l=Fn(l);if(!l.length)for(var c=0;c<(n&&n.length||1);c++){for(;y<h.length&&null!=h[y].coordDim;)y++;y<h.length&&l.push(y++)}g(l,function(o,a){var s=h[o];if(i(u(s,t),e,a),null==s.name&&n){var l=n[a];!I(l)&&(l={name:l}),s.name=s.displayName=l.name,s.defaultTooltip=l.defaultTooltip}r&&u(s.otherDims,r)})}});var _=n.generateCoord,x=n.generateCoordCount,w=null!=x;x=_?x||1:0;for(var b=_||"value",S=0;f>S;S++){m=h[S]=h[S]||{};var A=m.coordDim;null==A&&(m.coordDim=El(b,c,w),m.coordDimIndex=0,(!_||0>=x)&&(m.isExtraCoord=!0),x--),null==m.name&&(m.name=El(m.coordDim,s)),null==m.type&&Uo(e,S,m.name)&&(m.type="ordinal")}return h}function Ll(t,e,n,i){var r=Math.max(t.dimensionsDetectCount||1,e.length,n.length,i||0);return g(e,function(t){var e=t.dimsDef;e&&(r=Math.max(r,e.length))}),r}function El(t,e,n){if(n||null!=e.get(t)){for(var i=0;null!=e.get(t+i);)i++;t+=i}return e.set(t,!0),t}function Nl(t,e,n){n=n||{};var i,r,o,a,s=n.byIndex,l=n.stackedCoordDimension,u=!(!t||!t.get("stack"));if(g(e,function(t,n){M(t)&&(e[n]=t={name:t}),u&&!t.isExtraCoord&&(s||i||!t.ordinalMeta||(i=t),r||"ordinal"===t.type||"time"===t.type||l&&l!==t.coordDim||(r=t))}),!r||s||i||(s=!0),r){o="__\0ecstackresult",a="__\0ecstackedover",i&&(i.createInvertedIndices=!0);var c=r.coordDim,h=r.type,f=0;g(e,function(t){t.coordDim===c&&f++}),e.push({name:o,coordDim:c,coordDimIndex:f,type:h,isExtraCoord:!0,isCalculationCoord:!0}),f++,e.push({name:a,coordDim:a,coordDimIndex:f,type:h,isExtraCoord:!0,isCalculationCoord:!0})}return{stackedDimension:r&&r.name,stackedByDimension:i&&i.name,isStackedByIndex:s,stackedOverDimension:a,stackResultDimension:o}}function Rl(t,e){return!!e&&e===t.getCalculationInfo("stackedDimension")}function Bl(t,e){return Rl(t,e)?t.getCalculationInfo("stackResultDimension"):e}function zl(t,e,n){n=n||{},No.isInstance(t)||(t=No.seriesDataToSource(t));var i,r=e.get("coordinateSystem"),o=na.get(r),a=Lo(e);a&&(i=v(a.coordSysDims,function(t){var e={name:t},n=a.axisMap.get(t);if(n){var i=n.get("type");e.type=ml(i)}return e})),i||(i=o&&(o.getDimensionsInfo?o.getDimensionsInfo():o.dimensions.slice())||["x","y"]);var s,l,u=j_(t,{coordDimensions:i,generateCoord:n.generateCoord});a&&g(u,function(t,e){var n=t.coordDim,i=a.categoryAxisMap.get(n);i&&(null==s&&(s=e),t.ordinalMeta=i.getOrdinalMeta()),null!=t.otherDims.itemName&&(l=!0)}),l||null==s||(u[s].otherDims.itemName=0);var c=Nl(e,u),h=new F_(u,e);h.setCalculationInfo(c);var f=null!=s&&Fl(t)?function(t,e,n,i){return i===s?n:this.defaultDimValueGetter(t,e,n,i)}:null;return h.hasItemOption=!1,h.initData(t,null,f),h}function Fl(t){if(t.sourceFormat===Im){var e=$l(t.data||[]);return null!=e&&!b(Vn(e))}}function $l(t){for(var e=0;e<t.length&&null==t[e];)e++;return t[e]}function Vl(t){this._setting=t||{},this._extent=[1/0,-1/0],this._interval=0,this.init&&this.init.apply(this,arguments)}function jl(t){this.categories=t.categories||[],this._needCollect=t.needCollect,this._deduplication=t.deduplication,this._map}function Hl(t){return t._map||(t._map=$(t.categories))}function Gl(t){return I(t)&&null!=t.value?t.value:t+""}function Wl(t,e,n,i){var r={},o=t[1]-t[0],a=r.interval=co(o/e,!0);null!=n&&n>a&&(a=r.interval=n),null!=i&&a>i&&(a=r.interval=i);var s=r.intervalPrecision=Ul(a),l=r.niceTickExtent=[U_(Math.ceil(t[0]/a)*a,s),U_(Math.floor(t[1]/a)*a,s)];return Yl(l,t),r}function Ul(t){return no(t)+2}function Xl(t,e,n){t[e]=Math.max(Math.min(t[e],n[1]),n[0])}function Yl(t,e){!isFinite(t[0])&&(t[0]=e[0]),!isFinite(t[1])&&(t[1]=e[1]),Xl(t,0,e),Xl(t,1,e),t[0]>t[1]&&(t[0]=t[1])}function ql(t,e,n,i){var r=[];if(!t)return r;var o=1e4;e[0]<n[0]&&r.push(e[0]);for(var a=n[0];a<=n[1]&&(r.push(a),a=U_(a+t,i),a!==r[r.length-1]);)if(r.length>o)return[];return e[1]>(r.length?r[r.length-1]:n[1])&&r.push(e[1]),r}function Zl(t){return t.get("stack")||q_+t.seriesIndex}function Kl(t){return t.dim+t.index}function Jl(t,e){var n=[];return e.eachSeriesByType(t,function(t){iu(t)&&!ru(t)&&n.push(t)}),n}function Ql(t){var e=[];return g(t,function(t){var n=t.getData(),i=t.coordinateSystem,r=i.getBaseAxis(),o=r.getExtent(),a="category"===r.type?r.getBandWidth():Math.abs(o[1]-o[0])/n.count(),s=Jr(t.get("barWidth"),a),l=Jr(t.get("barMaxWidth"),a),u=t.get("barGap"),c=t.get("barCategoryGap");e.push({bandWidth:a,barWidth:s,barMaxWidth:l,barGap:u,barCategoryGap:c,axisKey:Kl(r),stackId:Zl(t)})}),tu(e)}function tu(t){var e={};g(t,function(t){var n=t.axisKey,i=t.bandWidth,r=e[n]||{bandWidth:i,remainedWidth:i,autoWidthCount:0,categoryGap:"20%",gap:"30%",stacks:{}},o=r.stacks;e[n]=r;var a=t.stackId;o[a]||r.autoWidthCount++,o[a]=o[a]||{width:0,maxWidth:0};var s=t.barWidth;s&&!o[a].width&&(o[a].width=s,s=Math.min(r.remainedWidth,s),r.remainedWidth-=s);var l=t.barMaxWidth;l&&(o[a].maxWidth=l);var u=t.barGap;null!=u&&(r.gap=u);var c=t.barCategoryGap;null!=c&&(r.categoryGap=c)});var n={};return g(e,function(t,e){n[e]={};var i=t.stacks,r=t.bandWidth,o=Jr(t.categoryGap,r),a=Jr(t.gap,1),s=t.remainedWidth,l=t.autoWidthCount,u=(s-o)/(l+(l-1)*a);u=Math.max(u,0),g(i,function(t){var e=t.maxWidth;e&&u>e&&(e=Math.min(e,s),t.width&&(e=Math.min(e,t.width)),s-=e,t.width=e,l--)}),u=(s-o)/(l+(l-1)*a),u=Math.max(u,0);var c,h=0;g(i,function(t){t.width||(t.width=u),c=t,h+=t.width*(1+a)}),c&&(h-=c.width*a);var f=-h/2;g(i,function(t,i){n[e][i]=n[e][i]||{offset:f,width:t.width},f+=t.width*(1+a)})}),n}function eu(t,e,n){if(t&&e){var i=t[Kl(e)];return null!=i&&null!=n&&(i=i[Zl(n)]),i}}function nu(t,e){var n=Jl(t,e),i=Ql(n),r={};g(n,function(t){var e=t.getData(),n=t.coordinateSystem,o=n.getBaseAxis(),a=Zl(t),s=i[Kl(o)][a],l=s.offset,u=s.width,c=n.getOtherAxis(o),h=t.get("barMinHeight")||0;r[a]=r[a]||[],e.setLayout({offset:l,size:u});for(var f=e.mapDimension(c.dim),d=e.mapDimension(o.dim),p=Rl(e,f),g=c.isHorizontal(),v=ou(o,c,p),m=0,y=e.count();y>m;m++){var _=e.get(f,m),x=e.get(d,m);if(!isNaN(_)){var w,b,S,M,I=_>=0?"p":"n",A=v;if(p&&(r[a][x]||(r[a][x]={p:v,n:v}),A=r[a][x][I]),g){var T=n.dataToPoint([_,x]);w=A,b=T[1]+l,S=T[0]-v,M=u,Math.abs(S)<h&&(S=(0>S?-1:1)*h),p&&(r[a][x][I]+=S)}else{T=n.dataToPoint([x,_]);w=T[0]+l,b=A,S=u,M=T[1]-v,Math.abs(M)<h&&(M=(0>=M?-1:1)*h),p&&(r[a][x][I]+=M)}e.setItemLayout(m,{x:w,y:b,width:S,height:M})}}},this)}function iu(t){return t.coordinateSystem&&"cartesian2d"===t.coordinateSystem.type}function ru(t){return t.pipelineContext&&t.pipelineContext.large}function ou(t,e){var n,i,r=e.getGlobalExtent();r[0]>r[1]?(n=r[1],i=r[0]):(n=r[0],i=r[1]);var o=e.toGlobalCoord(e.dataToCoord(0));return n>o&&(o=n),o>i&&(o=i),o}function au(t,e){return fx(t,hx(e))}function su(t,e){var n,i,r,o=t.type,a=e.getMin(),s=e.getMax(),l=null!=a,u=null!=s,c=t.getExtent();"ordinal"===o?n=e.getCategories().length:(i=e.get("boundaryGap"),b(i)||(i=[i||0,i||0]),"boolean"==typeof i[0]&&(i=[0,0]),i[0]=Jr(i[0],1),i[1]=Jr(i[1],1),r=c[1]-c[0]||Math.abs(c[0])),null==a&&(a="ordinal"===o?n?0:NaN:c[0]-i[0]*r),null==s&&(s="ordinal"===o?n?n-1:NaN:c[1]+i[1]*r),"dataMin"===a?a=c[0]:"function"==typeof a&&(a=a({min:c[0],max:c[1]})),"dataMax"===s?s=c[1]:"function"==typeof s&&(s=s({min:c[0],max:c[1]})),(null==a||!isFinite(a))&&(a=NaN),(null==s||!isFinite(s))&&(s=NaN),t.setBlank(C(a)||C(s)||"ordinal"===o&&!t.getOrdinalMeta().categories.length),e.getNeedCrossZero()&&(a>0&&s>0&&!l&&(a=0),0>a&&0>s&&!u&&(s=0));var h=e.ecModel;if(h&&"time"===o){var f,d=Jl("bar",h);if(g(d,function(t){f|=t.getBaseAxis()===e.axis}),f){var p=Ql(d),v=lu(a,s,e,p);a=v.min,s=v.max}}return[a,s]}function lu(t,e,n,i){var r=n.axis.getExtent(),o=r[1]-r[0],a=eu(i,n.axis);if(void 0===a)return{min:t,max:e};var s=1/0;g(a,function(t){s=Math.min(t.offset,s)});var l=-1/0;g(a,function(t){l=Math.max(t.offset+t.width,l)}),s=Math.abs(s),l=Math.abs(l);var u=s+l,c=e-t,h=1-(s+l)/o,f=c/h-c;return e+=f*(l/u),t-=f*(s/u),{min:t,max:e}}function uu(t,e){var n=su(t,e),i=null!=e.getMin(),r=null!=e.getMax(),o=e.get("splitNumber");"log"===t.type&&(t.base=e.get("logBase"));var a=t.type;t.setExtent(n[0],n[1]),t.niceExtent({splitNumber:o,fixMin:i,fixMax:r,minInterval:"interval"===a||"time"===a?e.get("minInterval"):null,maxInterval:"interval"===a||"time"===a?e.get("maxInterval"):null});var s=e.get("interval");null!=s&&t.setInterval&&t.setInterval(s)}function cu(t,e){if(e=e||t.get("type"))switch(e){case"category":return new W_(t.getOrdinalMeta?t.getOrdinalMeta():t.getCategories(),[1/0,-1/0]);case"value":return new Y_;default:return(Vl.getClass(e)||Y_).create(t)}}function hu(t){var e=t.scale.getExtent(),n=e[0],i=e[1];return!(n>0&&i>0||0>n&&0>i)}function fu(t){var e=t.getLabelModel().get("formatter"),n="category"===t.type?t.scale.getExtent()[0]:null;return"string"==typeof e?e=function(e){return function(n){return n=t.scale.getLabel(n),e.replace("{value}",null!=n?n:"")}}(e):"function"==typeof e?function(i,r){return null!=n&&(r=i-n),e(du(t,i),r)}:function(e){return t.scale.getLabel(e)}}function du(t,e){return"category"===t.type?t.scale.getLabel(e):e}function pu(t){var e=t.model,n=t.scale;if(e.get("axisLabel.show")&&!n.isBlank()){var i,r,o="category"===t.type,a=n.getExtent();o?r=n.count():(i=n.getTicks(),r=i.length);var s,l=t.getLabelModel(),u=fu(t),c=1;r>40&&(c=Math.ceil(r/40));for(var h=0;r>h;h+=c){var f=i?i[h]:a[0]+h,d=u(f),p=l.getTextRect(d),g=gu(p,l.get("rotate")||0);s?s.union(g):s=g}return s}}function gu(t,e){var n=e*Math.PI/180,i=t.plain(),r=i.width,o=i.height,a=r*Math.cos(n)+o*Math.sin(n),s=r*Math.sin(n)+o*Math.cos(n),l=new _e(i.x,i.y,a,s);return l}function vu(t){var e=t.get("interval");return null==e?"auto":e}function mu(t){return"category"===t.type&&0===vu(t.getLabelModel())}function yu(t,e){if("image"!==this.type){var n=this.style,i=this.shape;i&&"line"===i.symbolType?n.stroke=t:this.__isEmptyBrush?(n.stroke=t,n.fill=e||"#fff"):(n.fill&&(n.fill=t),n.stroke&&(n.stroke=t)),this.dirty(!1)}}function _u(t,e,n,i,r,o,a){var s,l=0===t.indexOf("empty");return l&&(t=t.substr(5,1).toLowerCase()+t.substr(6)),s=0===t.indexOf("image://")?ir(t.slice(8),new _e(e,n,i,r),a?"center":"cover"):0===t.indexOf("path://")?nr(t.slice(7),{},new _e(e,n,i,r),a?"center":"cover"):new Tx({shape:{symbolType:t,x:e,y:n,width:i,height:r}}),s.__isEmptyBrush=l,s.setColor=yu,s.setColor(o),s}function xu(t){return zl(t.getSource(),t)}function wu(t,e){var n=e;Gr.isInstance(e)||(n=new Gr(e),d(n,yx));var i=cu(n);return i.setExtent(t[0],t[1]),uu(i,n),i}function bu(t){d(t,yx)}function Su(t,e){return Math.abs(t-e)<Dx}function Mu(t,e,n){var i=0,r=t[0];if(!r)return!1;for(var o=1;o<t.length;o++){var a=t[o];i+=Pi(r[0],r[1],a[0],a[1],e,n),r=a}var s=t[0];return Su(r[0],s[0])&&Su(r[1],s[1])||(i+=Pi(r[0],r[1],s[0],s[1],e,n)),0!==i}function Iu(t,e,n){if(this.name=t,this.geometries=e,n)n=[n[0],n[1]];else{var i=this.getBoundingRect();n=[i.x+i.width/2,i.y+i.height/2]}this.center=n}function Au(t){if(!t.UTF8Encoding)return t;var e=t.UTF8Scale;null==e&&(e=1024);for(var n=t.features,i=0;i<n.length;i++)for(var r=n[i],o=r.geometry,a=o.coordinates,s=o.encodeOffsets,l=0;l<a.length;l++){var u=a[l];if("Polygon"===o.type)a[l]=Tu(u,s[l],e);else if("MultiPolygon"===o.type)for(var c=0;c<u.length;c++){var h=u[c];u[c]=Tu(h,s[l][c],e)}}return t.UTF8Encoding=!1,t}function Tu(t,e,n){for(var i=[],r=e[0],o=e[1],a=0;a<t.length;a+=2){var s=t.charCodeAt(a)-64,l=t.charCodeAt(a+1)-64;s=s>>1^-(1&s),l=l>>1^-(1&l),s+=r,l+=o,r=s,o=l,i.push([s/n,l/n])}return i}function ku(t){return"category"===t.type?Du(t):Lu(t)}function Cu(t,e){return"category"===t.type?Ou(t,e):{ticks:t.scale.getTicks()}}function Du(t){var e=t.getLabelModel(),n=Pu(t,e);return!e.get("show")||t.scale.isBlank()?{labels:[],labelCategoryInterval:n.labelCategoryInterval}:n}function Pu(t,e){var n,i,r=Eu(t,"labels"),o=vu(e),a=Nu(r,o);return a||(S(o)?n=Vu(t,o):(i="auto"===o?Bu(t):o,n=$u(t,i)),Ru(r,o,{labels:n,labelCategoryInterval:i}))}function Ou(t,e){var n,i,r=Eu(t,"ticks"),o=vu(e),a=Nu(r,o);if(a)return a;if((!e.get("show")||t.scale.isBlank())&&(n=[]),S(o))n=Vu(t,o,!0);else if("auto"===o){var s=Pu(t,t.getLabelModel());i=s.labelCategoryInterval,n=v(s.labels,function(t){return t.tickValue})}else i=o,n=$u(t,i,!0);return Ru(r,o,{ticks:n,tickCategoryInterval:i})}function Lu(t){var e=t.scale.getTicks(),n=fu(t);return{labels:v(e,function(e,i){return{formattedLabel:n(e,i),rawLabel:t.scale.getLabel(e),tickValue:e}})}}function Eu(t,e){return Ox(t)[e]||(Ox(t)[e]=[])}function Nu(t,e){for(var n=0;n<t.length;n++)if(t[n].key===e)return t[n].value}function Ru(t,e,n){return t.push({key:e,value:n}),n}function Bu(t){var e=Ox(t).autoInterval;return null!=e?e:Ox(t).autoInterval=t.calculateCategoryInterval()}function zu(t){var e=Fu(t),n=fu(t),i=(e.axisRotate-e.labelRotate)/180*Math.PI,r=t.scale,o=r.getExtent(),a=r.count();if(o[1]-o[0]<1)return 0;var s=1;a>40&&(s=Math.max(1,Math.floor(a/40)));for(var l=o[0],u=t.dataToCoord(l+1)-t.dataToCoord(l),c=Math.abs(u*Math.cos(i)),h=Math.abs(u*Math.sin(i)),f=0,d=0;l<=o[1];l+=s){var p=0,g=0,v=Fe(n(l),e.font,"center","top");p=1.3*v.width,g=1.3*v.height,f=Math.max(f,p,7),d=Math.max(d,g,7)}var m=f/c,y=d/h;isNaN(m)&&(m=1/0),isNaN(y)&&(y=1/0);var _=Math.max(0,Math.floor(Math.min(m,y))),x=Ox(t.model),w=x.lastAutoInterval,b=x.lastTickCount;return null!=w&&null!=b&&Math.abs(w-_)<=1&&Math.abs(b-a)<=1&&w>_?_=w:(x.lastTickCount=a,x.lastAutoInterval=_),_}function Fu(t){var e=t.getLabelModel();return{axisRotate:t.getRotate?t.getRotate():t.isHorizontal&&!t.isHorizontal()?90:0,labelRotate:e.get("rotate")||0,font:e.getFont()}}function $u(t,e,n){function i(t){l.push(n?t:{formattedLabel:r(t),rawLabel:o.getLabel(t),tickValue:t})}var r=fu(t),o=t.scale,a=o.getExtent(),s=t.getLabelModel(),l=[],u=Math.max((e||0)+1,1),c=a[0],h=o.count();0!==c&&u>1&&h/u>2&&(c=Math.round(Math.ceil(c/u)*u));var f=mu(t),d=s.get("showMinLabel")||f,p=s.get("showMaxLabel")||f;d&&c!==a[0]&&i(a[0]);for(var g=c;g<=a[1];g+=u)i(g);return p&&g!==a[1]&&i(a[1]),l}function Vu(t,e,n){var i=t.scale,r=fu(t),o=[];return g(i.getTicks(),function(t){var a=i.getLabel(t);e(t,a)&&o.push(n?t:{formattedLabel:r(t),rawLabel:a,tickValue:t})}),o}function ju(t,e){var n=t[1]-t[0],i=e,r=n/i/2;t[0]+=r,t[1]-=r}function Hu(t,e,n,i,r){function o(t,e){return c?t>e:e>t}var a=e.length;if(t.onBand&&!i&&a){var s,l=t.getExtent();if(1===a)e[0].coord=l[0],s=e[1]={coord:l[0]};else{var u=e[1].coord-e[0].coord;g(e,function(t){t.coord-=u/2;var e=e||0;e%2>0&&(t.coord-=u/(2*(e+1)))}),s={coord:e[a-1].coord+u},e.push(s)}var c=l[0]>l[1];o(e[0].coord,l[0])&&(r?e[0].coord=l[0]:e.shift()),r&&o(l[0],e[0].coord)&&e.unshift({coord:l[0]}),o(l[1],s.coord)&&(r?s.coord=l[1]:e.pop()),r&&o(s.coord,l[1])&&e.push({coord:l[1]})}}function Gu(t){return this._axes[t]}function Wu(t){zx.call(this,t)}function Uu(t,e){return e.type||(e.data?"category":"value")}function Xu(t,e){return t.getCoordSysModel()===e}function Yu(t,e,n){this._coordsMap={},this._coordsList=[],this._axesMap={},this._axesList=[],this._initCartesian(t,e,n),this.model=t}function qu(t,e,n,i){function r(t){return t.dim+"_"+t.index}n.getAxesOnZeroOf=function(){return o?[o]:[]};var o,a=t[e],s=n.model,l=s.get("axisLine.onZero"),u=s.get("axisLine.onZeroAxisIndex");if(l){if(null!=u)Zu(a[u])&&(o=a[u]);else for(var c in a)if(a.hasOwnProperty(c)&&Zu(a[c])&&!i[r(a[c])]){o=a[c];break}o&&(i[r(o)]=!0)}}function Zu(t){return t&&"category"!==t.type&&"time"!==t.type&&hu(t)}function Ku(t,e){var n=t.getExtent(),i=n[0]+n[1];t.toGlobalCoord="x"===t.dim?function(t){return t+e}:function(t){return i-t+e},t.toLocalCoord="x"===t.dim?function(t){return t-e}:function(t){return i-t+e}}function Ju(t){return v(Xx,function(e){var n=t.getReferringComponents(e)[0];return n})}function Qu(t){return"cartesian2d"===t.get("coordinateSystem")}function tc(t,e){var n=t.mapDimension("defaultedLabel",!0),i=n.length;if(1===i)return ka(t,e,n[0]);if(i){for(var r=[],o=0;o<n.length;o++){var a=ka(t,e,n[o]);r.push(a)}return r.join(" ")}}function ec(t,e,n,i,r,o){var a=n.getModel("label"),s=n.getModel("emphasis.label");Mr(t,e,a,s,{labelFetcher:r,labelDataIndex:o,defaultText:tc(r.getData(),o),isRectText:!0,autoColor:i}),nc(t),nc(e)}function nc(t,e){"outside"===t.textPosition&&(t.textPosition=e)}function ic(t,e,n){n.style.text=null,Nr(n,{shape:{width:0}},e,t,function(){n.parent&&n.parent.remove(n)})}function rc(t,e,n){n.style.text=null,Nr(n,{shape:{r:n.shape.r0}},e,t,function(){n.parent&&n.parent.remove(n)})}function oc(t,e,n,i,r,o,a,s){var l=e.getItemVisual(n,"color"),c=e.getItemVisual(n,"opacity"),h=i.getModel("itemStyle"),f=i.getModel("emphasis.itemStyle").getBarItemStyle();s||t.setShape("r",h.get("barBorderRadius")||0),t.useStyle(u({fill:l,opacity:c},h.getBarItemStyle()));var d=i.getShallow("cursor");d&&t.attr("cursor",d);var p=a?r.height>0?"bottom":"top":r.width>0?"left":"right";s||ec(t.style,f,i,l,o,n,p),br(t,f)}function ac(t,e){var n=t.get(Kx)||0;return Math.min(n,Math.abs(e.width),Math.abs(e.height))}function sc(t,e,n){var i=t.getData(),r=[],o=i.getLayout("valueAxisHorizontal")?1:0;r[1-o]=i.getLayout("valueAxisStart");var a=new tw({shape:{points:i.getLayout("largePoints")},incremental:!!n,__startPoint:r,__valueIdx:o});e.add(a),lc(a,t,i)}function lc(t,e,n){var i=n.getVisual("borderColor")||n.getVisual("color"),r=e.getModel("itemStyle").getItemStyle(["color","borderColor"]);t.useStyle(r),t.style.fill=null,t.style.stroke=i,t.style.lineWidth=n.getLayout("barWidth")}function uc(t){var e={componentType:t.mainType,componentIndex:t.componentIndex};return e[t.mainType+"Index"]=t.componentIndex,e}function cc(t,e,n,i){var r,o,a=oo(n-t.rotation),s=i[0]>i[1],l="start"===e&&!s||"start"!==e&&s;return ao(a-ew/2)?(o=l?"bottom":"top",r="center"):ao(a-1.5*ew)?(o=l?"top":"bottom",r="center"):(o="middle",r=1.5*ew>a&&a>ew/2?l?"left":"right":l?"right":"left"),{rotation:a,textAlign:r,textVerticalAlign:o}}function hc(t){var e=t.get("tooltip");return t.get("silent")||!(t.get("triggerEvent")||e&&e.show)}function fc(t,e,n){if(!mu(t.axis)){var i=t.get("axisLabel.showMinLabel"),r=t.get("axisLabel.showMaxLabel");e=e||[],n=n||[];var o=e[0],a=e[1],s=e[e.length-1],l=e[e.length-2],u=n[0],c=n[1],h=n[n.length-1],f=n[n.length-2];!1===i?(dc(o),dc(u)):pc(o,a)&&(i?(dc(a),dc(c)):(dc(o),dc(u))),!1===r?(dc(s),dc(h)):pc(l,s)&&(r?(dc(l),dc(f)):(dc(s),dc(h)))}}function dc(t){t&&(t.ignore=!0)}function pc(t,e){var n=t&&t.getBoundingRect().clone(),i=e&&e.getBoundingRect().clone();if(n&&i){var r=Tt([]);return Pt(r,r,-t.rotation),n.applyTransform(Ct([],r,t.getLocalTransform())),i.applyTransform(Ct([],r,e.getLocalTransform())),n.intersect(i)}}function gc(t){return"middle"===t||"center"===t}function vc(t,e,n){var i=e.axis;if(e.get("axisTick.show")&&!i.scale.isBlank()){for(var r=e.getModel("axisTick"),o=r.getModel("lineStyle"),a=r.get("length"),s=i.getTicksCoords(),l=[],c=[],h=t._transform,f=[],d=0;d<s.length;d++){var p=s[d].coord;l[0]=p,l[1]=0,c[0]=p,c[1]=n.tickDirection*a,h&&(st(l,l,h),st(c,c,h));var g=new Pv(ar({anid:"tick_"+s[d].tickValue,shape:{x1:l[0],y1:l[1],x2:c[0],y2:c[1]},style:u(o.getLineStyle(),{stroke:e.get("axisLine.lineStyle.color")}),z2:2,silent:!0}));t.group.add(g),f.push(g)}return f}}function mc(t,e,n){var i=e.axis,r=D(n.axisLabelShow,e.get("axisLabel.show"));if(r&&!i.scale.isBlank()){var o=e.getModel("axisLabel"),a=o.get("margin"),s=i.getViewLabels(),l=(D(n.labelRotate,o.get("rotate"))||0)*ew/180,u=rw(n.rotation,l,n.labelDirection),c=e.getCategories(!0),h=[],f=hc(e),d=e.get("triggerEvent");return g(s,function(r,s){var l=r.tickValue,p=r.formattedLabel,g=r.rawLabel,v=o;c&&c[l]&&c[l].textStyle&&(v=new Gr(c[l].textStyle,o,e.ecModel));var m=v.getTextColor()||e.get("axisLine.lineStyle.color"),y=i.dataToCoord(l),_=[y,n.labelOffset+n.labelDirection*a],x=new mv({anid:"label_"+l,position:_,rotation:u.rotation,silent:f,z2:10});Ir(x.style,v,{text:p,textAlign:v.getShallow("align",!0)||u.textAlign,textVerticalAlign:v.getShallow("verticalAlign",!0)||v.getShallow("baseline",!0)||u.textVerticalAlign,textFill:"function"==typeof m?m("category"===i.type?g:"value"===i.type?l+"":l,s):m}),d&&(x.eventData=uc(e),x.eventData.targetType="axisLabel",x.eventData.value=g),t._dumbGroup.add(x),x.updateTransform(),h.push(x),t.group.add(x),x.decomposeTransform()}),h}}function yc(t,e){var n={axesInfo:{},seriesInvolved:!1,coordSysAxesInfo:{},coordSysMap:{}};return _c(n,t,e),n.seriesInvolved&&wc(n,t),n}function _c(t,e,n){var i=e.getComponent("tooltip"),r=e.getComponent("axisPointer"),o=r.get("link",!0)||[],a=[];ow(n.getCoordinateSystems(),function(n){function s(i,s,l){var c=l.model.getModel("axisPointer",r),f=c.get("show");if(f&&("auto"!==f||i||Tc(c))){null==s&&(s=c.get("triggerTooltip")),c=i?xc(l,h,r,e,i,s):c;var d=c.get("snap"),p=kc(l.model),g=s||d||"category"===l.type,v=t.axesInfo[p]={key:p,axis:l,coordSys:n,axisPointerModel:c,triggerTooltip:s,involveSeries:g,snap:d,useHandle:Tc(c),seriesModels:[]};u[p]=v,t.seriesInvolved|=g;var m=bc(o,l);if(null!=m){var y=a[m]||(a[m]={axesInfo:{}});y.axesInfo[p]=v,y.mapper=o[m].mapper,v.linkGroup=y}}}if(n.axisPointerEnabled){var l=kc(n.model),u=t.coordSysAxesInfo[l]={};t.coordSysMap[l]=n;var c=n.model,h=c.getModel("tooltip",i);if(ow(n.getAxes(),aw(s,!1,null)),n.getTooltipAxes&&i&&h.get("show")){var f="axis"===h.get("trigger"),d="cross"===h.get("axisPointer.type"),p=n.getTooltipAxes(h.get("axisPointer.axis"));(f||d)&&ow(p.baseAxes,aw(s,!d||"cross",f)),d&&ow(p.otherAxes,aw(s,"cross",!1))}}})}function xc(t,e,n,i,r,a){var s=e.getModel("axisPointer"),l={};ow(["type","snap","lineStyle","shadowStyle","label","animation","animationDurationUpdate","animationEasingUpdate","z"],function(t){l[t]=o(s.get(t))}),l.snap="category"!==t.type&&!!a,"cross"===s.get("type")&&(l.type="line");var c=l.label||(l.label={});if(null==c.show&&(c.show=!1),"cross"===r){var h=s.get("label.show");if(c.show=null==h||h,!a){var f=l.lineStyle=s.get("crossStyle");f&&u(c,f.textStyle)}}return t.model.getModel("axisPointer",new Gr(l,n,i))}function wc(t,e){e.eachSeries(function(e){var n=e.coordinateSystem,i=e.get("tooltip.trigger",!0),r=e.get("tooltip.show",!0);n&&"none"!==i&&!1!==i&&"item"!==i&&!1!==r&&!1!==e.get("axisPointer.show",!0)&&ow(t.coordSysAxesInfo[kc(n.model)],function(t){var i=t.axis;n.getAxis(i.dim)===i&&(t.seriesModels.push(e),null==t.seriesDataCount&&(t.seriesDataCount=0),t.seriesDataCount+=e.getData().count())})},this)}function bc(t,e){for(var n=e.model,i=e.dim,r=0;r<t.length;r++){var o=t[r]||{};if(Sc(o[i+"AxisId"],n.id)||Sc(o[i+"AxisIndex"],n.componentIndex)||Sc(o[i+"AxisName"],n.name))return r}}function Sc(t,e){return"all"===t||b(t)&&h(t,e)>=0||t===e}function Mc(t){var e=Ic(t);if(e){var n=e.axisPointerModel,i=e.axis.scale,r=n.option,o=n.get("status"),a=n.get("value");null!=a&&(a=i.parse(a));var s=Tc(n);null==o&&(r.status=s?"show":"hide");var l=i.getExtent().slice();l[0]>l[1]&&l.reverse(),(null==a||a>l[1])&&(a=l[1]),a<l[0]&&(a=l[0]),r.value=a,s&&(r.status=e.axis.scale.isBlank()?"hide":"show")}}function Ic(t){var e=(t.ecModel.getComponent("axisPointer")||{}).coordSysAxesInfo;return e&&e.axesInfo[kc(t)]}function Ac(t){var e=Ic(t);return e&&e.axisPointerModel}function Tc(t){return!!t.get("handle.show")}function kc(t){return t.type+"||"+t.id}function Cc(t,e,n,i,r,o){var a=sw.getAxisPointerClass(t.axisPointerClass);if(a){var s=Ac(e);s?(t._axisPointer||(t._axisPointer=new a)).render(e,s,i,o):Dc(t,i)}}function Dc(t,e,n){var i=t._axisPointer;i&&i.dispose(e,n),t._axisPointer=null}function Pc(t,e,n){n=n||{};var i=t.coordinateSystem,r=e.axis,o={},a=r.getAxesOnZeroOf()[0],s=r.position,l=a?"onZero":s,u=r.dim,c=i.getRect(),h=[c.x,c.x+c.width,c.y,c.y+c.height],f={left:0,right:1,top:0,bottom:1,onZero:2},d=e.get("offset")||0,p="x"===u?[h[2]-d,h[3]+d]:[h[0]-d,h[1]+d];if(a){var g=a.toGlobalCoord(a.dataToCoord(0));p[f.onZero]=Math.max(Math.min(g,p[1]),p[0])}o.position=["y"===u?p[f[l]]:h[0],"x"===u?p[f[l]]:h[3]],o.rotation=Math.PI/2*("x"===u?0:1);var v={top:-1,bottom:1,left:-1,right:1};o.labelDirection=o.tickDirection=o.nameDirection=v[s],o.labelOffset=a?p[f[s]]-p[f.onZero]:0,e.get("axisTick.inside")&&(o.tickDirection=-o.tickDirection),D(n.labelInside,e.get("axisLabel.inside"))&&(o.labelDirection=-o.labelDirection);var m=e.get("axisLabel.rotate");return o.labelRotate="top"===l?-m:m,o.z2=1,o}function Oc(t,e,n){op.call(this),this.updateData(t,e,n)}function Lc(t){return[t[0]/2,t[1]/2]}function Ec(t,e){this.parent.drift(t,e)}function Nc(){!mr(this)&&Bc.call(this)}function Rc(){!mr(this)&&zc.call(this)}function Bc(){if(!this.incremental&&!this.useHoverLayer){var t=this.__symbolOriginalScale,e=t[1]/t[0];this.animateTo({scale:[Math.max(1.1*t[0],t[0]+3),Math.max(1.1*t[1],t[1]+3*e)]},400,"elasticOut")}}function zc(){this.incremental||this.useHoverLayer||this.animateTo({scale:this.__symbolOriginalScale},400,"elasticOut")}function Fc(t){this.group=new op,this._symbolCtor=t||Oc}function $c(t,e,n,i){return!(!e||isNaN(e[0])||isNaN(e[1])||i.isIgnore&&i.isIgnore(n)||i.clipShape&&!i.clipShape.contain(e[0],e[1])||"none"===t.getItemVisual(n,"symbol"))}function Vc(t){return null==t||I(t)||(t={isIgnore:t}),t||{}}function jc(t){var e=t.hostModel;return{itemStyle:e.getModel("itemStyle").getItemStyle(["color"]),hoverItemStyle:e.getModel("emphasis.itemStyle").getItemStyle(),symbolRotate:e.get("symbolRotate"),symbolOffset:e.get("symbolOffset"),hoverAnimation:e.get("hoverAnimation"),labelModel:e.getModel("label"),hoverLabelModel:e.getModel("emphasis.label"),cursorStyle:e.get("cursor")}}function Hc(t,e,n){var i,r=t.getBaseAxis(),o=t.getOtherAxis(r),a=Gc(o,n),s=r.dim,l=o.dim,u=e.mapDimension(l),c=e.mapDimension(s),h="x"===l||"radius"===l?1:0,f=v(t.dimensions,function(t){return e.mapDimension(t)}),d=e.getCalculationInfo("stackResultDimension");return(i|=Rl(e,f[0]))&&(f[0]=d),(i|=Rl(e,f[1]))&&(f[1]=d),{dataDimsForPoint:f,valueStart:a,valueAxisDim:l,baseAxisDim:s,stacked:!!i,valueDim:u,baseDim:c,baseDataOffset:h,stackedOverDimension:e.getCalculationInfo("stackedOverDimension")}}function Gc(t,e){var n=0,i=t.scale.getExtent();return"start"===e?n=i[0]:"end"===e?n=i[1]:i[0]>0?n=i[0]:i[1]<0&&(n=i[1]),n}function Wc(t,e,n,i){var r=NaN;t.stacked&&(r=n.get(n.getCalculationInfo("stackedOverDimension"),i)),isNaN(r)&&(r=t.valueStart);var o=t.baseDataOffset,a=[];return a[o]=n.get(t.baseDim,i),a[1-o]=r,e.dataToPoint(a)}function Uc(t,e){var n=[];return e.diff(t).add(function(t){n.push({cmd:"+",idx:t})}).update(function(t,e){n.push({cmd:"=",idx:e,idx1:t})}).remove(function(t){n.push({cmd:"-",idx:t})}).execute(),n}function Xc(t){return isNaN(t[0])||isNaN(t[1])}function Yc(t,e,n,i,r,o,a,s,l,u){return"none"!==u&&u?qc.apply(this,arguments):Zc.apply(this,arguments)}function qc(t,e,n,i,r,o,a,s,l,u,c){for(var h=0,f=n,d=0;i>d;d++){var p=e[f];if(f>=r||0>f)break;if(Xc(p)){if(c){f+=o;continue}break}if(f===n)t[o>0?"moveTo":"lineTo"](p[0],p[1]);else if(l>0){var g=e[h],v="y"===u?1:0,m=(p[v]-g[v])*l;Sw(Iw,g),Iw[v]=g[v]+m,Sw(Aw,p),Aw[v]=p[v]-m,t.bezierCurveTo(Iw[0],Iw[1],Aw[0],Aw[1],p[0],p[1])}else t.lineTo(p[0],p[1]);h=f,f+=o}return d}function Zc(t,e,n,i,r,o,a,s,l,u,c){for(var h=0,f=n,d=0;i>d;d++){var p=e[f];if(f>=r||0>f)break;if(Xc(p)){if(c){f+=o;continue}break}if(f===n)t[o>0?"moveTo":"lineTo"](p[0],p[1]),Sw(Iw,p);else if(l>0){var g=f+o,v=e[g];if(c)for(;v&&Xc(e[g]);)g+=o,v=e[g];var m=.5,y=e[h];v=e[g];if(!v||Xc(v))Sw(Aw,p);else{var _,x;if(Xc(v)&&!c&&(v=p),q(Mw,v,y),"x"===u||"y"===u){var w="x"===u?0:1;_=Math.abs(p[w]-y[w]),x=Math.abs(p[w]-v[w])}else _=dd(p,y),x=dd(p,v);m=x/(x+_),bw(Aw,p,Mw,-l*(1-m))}xw(Iw,Iw,s),ww(Iw,Iw,a),xw(Aw,Aw,s),ww(Aw,Aw,a),t.bezierCurveTo(Iw[0],Iw[1],Aw[0],Aw[1],p[0],p[1]),bw(Iw,p,Mw,l*m)}else t.lineTo(p[0],p[1]);h=f,f+=o}return d}function Kc(t,e){var n=[1/0,1/0],i=[-1/0,-1/0];if(e)for(var r=0;r<t.length;r++){var o=t[r];o[0]<n[0]&&(n[0]=o[0]),o[1]<n[1]&&(n[1]=o[1]),o[0]>i[0]&&(i[0]=o[0]),o[1]>i[1]&&(i[1]=o[1])}return{min:e?n:i,max:e?i:n}}function Jc(t,e){if(t.length===e.length){for(var n=0;n<t.length;n++){var i=t[n],r=e[n];if(i[0]!==r[0]||i[1]!==r[1])return}return!0}}function Qc(t){return"number"==typeof t?t:t?.5:0}function th(t){var e=t.getGlobalExtent();if(t.onBand){var n=t.getBandWidth()/2-1,i=e[1]>e[0]?1:-1;e[0]+=i*n,e[1]-=i*n}return e}function eh(t,e,n){if(!n.valueDim)return[];for(var i=[],r=0,o=e.count();o>r;r++)i.push(Wc(n,t,e,r));return i}function nh(t,e,n,i){var r=th(t.getAxis("x")),o=th(t.getAxis("y")),a=t.getBaseAxis().isHorizontal(),s=Math.min(r[0],r[1]),l=Math.min(o[0],o[1]),u=Math.max(r[0],r[1])-s,c=Math.max(o[0],o[1])-l;if(n)s-=.5,u+=.5,l-=.5,c+=.5;else{var h=i.get("lineStyle.width")||2,f=i.get("clipOverflow")?h/2:Math.max(u,c);a?(l-=f,c+=2*f):(s-=f,u+=2*f)}var d=new Cv({shape:{x:s,y:l,width:u,height:c}});return e&&(d.shape[a?"width":"height"]=0,Rr(d,{shape:{width:u,height:c}},i)),d}function ih(t,e,n,i){var r=t.getAngleAxis(),o=t.getRadiusAxis(),a=o.getExtent().slice();a[0]>a[1]&&a.reverse();var s=r.getExtent(),l=Math.PI/180;n&&(a[0]-=.5,a[1]+=.5);var u=new wv({shape:{cx:Qr(t.cx,1),cy:Qr(t.cy,1),r0:Qr(a[0],1),r:Qr(a[1],1),startAngle:-s[0]*l,endAngle:-s[1]*l,clockwise:r.inverse}});return e&&(u.shape.endAngle=-s[0]*l,Rr(u,{shape:{endAngle:-s[1]*l}},i)),u}function rh(t,e,n,i){return"polar"===t.type?ih(t,e,n,i):nh(t,e,n,i)}function oh(t,e,n){for(var i=e.getBaseAxis(),r="x"===i.dim||"radius"===i.dim?0:1,o=[],a=0;a<t.length-1;a++){var s=t[a+1],l=t[a];o.push(l);var u=[];switch(n){case"end":u[r]=s[r],u[1-r]=l[1-r],o.push(u);break;case"middle":var c=(l[r]+s[r])/2,h=[];u[r]=h[r]=c,u[1-r]=l[1-r],h[1-r]=s[1-r],o.push(u),o.push(h);break;default:u[r]=l[r],u[1-r]=s[1-r],o.push(u)}}return t[a]&&o.push(t[a]),o}function ah(t,e){var n=t.getVisual("visualMeta");if(n&&n.length&&t.count()&&"cartesian2d"===e.type){for(var i,r,o=n.length-1;o>=0;o--){var a=n[o].dimension,s=t.dimensions[a],l=t.getDimensionInfo(s);if(i=l&&l.coordDim,"x"===i||"y"===i){r=n[o];break}}if(r){var u=e.getAxis(i),c=v(r.stops,function(t){return{coord:u.toGlobalCoord(u.dataToCoord(t.value)),color:t.color}}),h=c.length,f=r.outerColors.slice();h&&c[0].coord>c[h-1].coord&&(c.reverse(),f.reverse());var d=10,p=c[0].coord-d,m=c[h-1].coord+d,y=m-p;if(.001>y)return"transparent";g(c,function(t){t.offset=(t.coord-p)/y}),c.push({offset:h?c[h-1].offset:.5,color:f[1]||"transparent"}),c.unshift({offset:h?c[0].offset:.5,color:f[0]||"transparent"});var _=new Bv(0,0,0,0,c,!0);return _[i]=p,_[i+"2"]=m,_}}}function sh(t,e,n){var i=t.get("showAllSymbol"),r="auto"===i;if(!i||r){var o=n.getAxesByScale("ordinal")[0];if(o&&(!r||!lh(o,e))){var a=e.mapDimension(o.dim),s={};return g(o.getViewLabels(),function(t){s[t.tickValue]=1}),function(t){return!s.hasOwnProperty(e.get(a,t))}}}}function lh(t,e){var n=t.getExtent(),i=Math.abs(n[1]-n[0])/t.scale.count();isNaN(i)&&(i=0);for(var r=e.count(),o=Math.max(1,Math.round(r/5)),a=0;r>a;a+=o)if(1.5*Oc.getSymbolSize(e,a)[t.isHorizontal()?1:0]>i)return!1;return!0}function uh(t,e,n,i){var r=e.getData(),o=this.dataIndex,a=r.getName(o),s=e.get("selectedOffset");i.dispatchAction({type:"pieToggleSelect",from:t,name:a,seriesId:e.id}),r.each(function(t){ch(r.getItemGraphicEl(t),r.getItemLayout(t),e.isSelected(r.getName(t)),s,n)})}function ch(t,e,n,i,r){var o=(e.startAngle+e.endAngle)/2,a=Math.cos(o),s=Math.sin(o),l=n?i:0,u=[a*l,s*l];r?t.animate().when(200,{position:u}).start("bounceOut"):t.attr("position",u)}function hh(t,e){function n(){o.ignore=o.hoverIgnore,a.ignore=a.hoverIgnore}function i(){o.ignore=o.normalIgnore,a.ignore=a.normalIgnore}op.call(this);var r=new wv({z2:2}),o=new Av,a=new mv;this.add(r),this.add(o),this.add(a),this.updateData(t,e,!0),this.on("emphasis",n).on("normal",i).on("mouseover",n).on("mouseout",i)}function fh(t,e,n,i,r,o,a){function s(e,n,i){for(var r=e;n>r;r++)if(t[r].y+=i,r>e&&n>r+1&&t[r+1].y>t[r].y+t[r].height)return void l(r,i/2);l(n-1,i/2)}function l(e,n){for(var i=e;i>=0&&(t[i].y-=n,!(i>0&&t[i].y>t[i-1].y+t[i-1].height));i--);}function u(t,e,n,i,r,o){for(var a=e?Number.MAX_VALUE:0,s=0,l=t.length;l>s;s++){var u=Math.abs(t[s].y-i),c=t[s].len,h=t[s].len2,f=r+c>u?Math.sqrt((r+c+h)*(r+c+h)-u*u):Math.abs(t[s].x-n);e&&f>=a&&(f=a-10),!e&&a>=f&&(f=a+10),t[s].x=n+f*o,a=f}}t.sort(function(t,e){return t.y-e.y});for(var c,h=0,f=t.length,d=[],p=[],g=0;f>g;g++)c=t[g].y-h,0>c&&s(g,f,-c,r),h=t[g].y+t[g].height;0>a-h&&l(f-1,h-a);for(g=0;f>g;g++)t[g].y>=n?p.push(t[g]):d.push(t[g]);u(d,!1,e,n,i,r),u(p,!0,e,n,i,r)}function dh(t,e,n,i,r,o){for(var a=[],s=[],l=0;l<t.length;l++)ph(t[l])||(t[l].x<e?a.push(t[l]):s.push(t[l]));fh(s,e,n,i,1,r,o),fh(a,e,n,i,-1,r,o);for(l=0;l<t.length;l++)if(!ph(t[l])){var u=t[l].linePoints;if(u){var c=u[1][0]-u[2][0];u[2][0]=t[l].x<e?t[l].x+3:t[l].x-3,u[1][1]=u[2][1]=t[l].y,u[1][0]=u[2][0]+c}}}function ph(t){return"center"===t.position}function gh(){this.group=new op}function vh(t,e,n){var i,r={},o="toggleSelected"===t;return n.eachComponent("legend",function(n){o&&null!=i?n[i?"select":"unSelect"](e.name):(n[t](e.name),i=n.isSelected(e.name));var a=n.getData();g(a,function(t){var e=t.get("name");if("\n"!==e&&""!==e){var i=n.isSelected(e);r[e]=r.hasOwnProperty(e)?r[e]&&i:i}})}),{name:e.name,selected:r}}function mh(t,e){var n=am(e.get("padding")),i=e.getItemStyle(["color","opacity"]);i.fill=e.get("backgroundColor");t=new Cv({shape:{x:t.x-n[3],y:t.y-n[0],width:t.width+n[1]+n[3],height:t.height+n[0]+n[2],r:e.get("borderRadius")},style:i,silent:!0,z2:-1});return t}function yh(t,e){e.dispatchAction({type:"legendToggleSelect",name:t})}function _h(t,e,n,i){var r=n.getZr().storage.getDisplayList()[0];r&&r.useHoverLayer||n.dispatchAction({type:"highlight",seriesName:t,name:e,excludeSeriesId:i})}function xh(t,e,n,i){var r=n.getZr().storage.getDisplayList()[0];r&&r.useHoverLayer||n.dispatchAction({type:"downplay",seriesName:t,name:e,excludeSeriesId:i})}function wh(t,e,n){var i=t.getOrient(),r=[1,1];r[i.index]=0,ko(e,n,{type:"box",ignoreSize:r})}function bh(t,e,n,i,r){var o=t.axis;if(!o.scale.isBlank()&&o.containData(e)){if(!t.involveSeries)return void n.showPointer(t,e);var a=Sh(e,t),s=a.payloadBatch,u=a.snapToValue;s[0]&&null==r.seriesIndex&&l(r,s[0]),!i&&t.snap&&o.containData(u)&&null!=u&&(e=u),n.showPointer(t,e,s,r),n.showTooltip(t,a,u)}}function Sh(t,e){var n=e.axis,i=n.dim,r=t,o=[],a=Number.MAX_VALUE,s=-1;return ab(e.seriesModels,function(e){var l,u,c=e.getData().mapDimension(i,!0);if(e.getAxisTooltipData){var h=e.getAxisTooltipData(c,t,n);u=h.dataIndices,l=h.nestestValue}else{if(u=e.getData().indicesOfNearest(c[0],t,"category"===n.type?.5:null),!u.length)return;l=e.getData().get(c[0],u[0])}if(null!=l&&isFinite(l)){var f=t-l,d=Math.abs(f);a>=d&&((a>d||f>=0&&0>s)&&(a=d,s=f,r=l,o.length=0),ab(u,function(t){o.push({seriesIndex:e.seriesIndex,dataIndexInside:t,dataIndex:e.getData().getRawIndex(t)})}))}}),{payloadBatch:o,snapToValue:r}}function Mh(t,e,n,i){t[e.key]={value:n,payloadBatch:i}}function Ih(t,e,n,i){var r=n.payloadBatch,o=e.axis,a=o.model,s=e.axisPointerModel;if(e.triggerTooltip&&r.length){var l=e.coordSys.model,u=kc(l),c=t.map[u];c||(c=t.map[u]={coordSysId:l.id,coordSysIndex:l.componentIndex,coordSysType:l.type,coordSysMainType:l.mainType,dataByAxis:[]},t.list.push(c)),c.dataByAxis.push({axisDim:o.dim,axisIndex:a.componentIndex,axisType:a.type,axisId:a.id,value:i,valueLabelOpt:{precision:s.get("label.precision"),formatter:s.get("label.formatter")},seriesDataIndices:r.slice()})}}function Ah(t,e,n){var i=n.axesInfo=[];ab(e,function(e,n){var r=e.axisPointerModel.option,o=t[n];o?(!e.useHandle&&(r.status="show"),r.value=o.value,r.seriesDataIndices=(o.payloadBatch||[]).slice()):!e.useHandle&&(r.status="hide"),"show"===r.status&&i.push({axisDim:e.axis.dim,axisIndex:e.axis.model.componentIndex,value:r.value})})}function Th(t,e,n,i){if(!Ph(e)&&t.list.length){var r=((t.list[0].dataByAxis[0]||{}).seriesDataIndices||[])[0]||{};i({type:"showTip",escapeConnect:!0,x:e[0],y:e[1],tooltipOption:n.tooltipOption,position:n.position,dataIndexInside:r.dataIndexInside,dataIndex:r.dataIndex,seriesIndex:r.seriesIndex,dataByCoordSys:t.list})}else i({type:"hideTip"})}function kh(t,e,n){var i=n.getZr(),r="axisPointerLastHighlights",o=lb(i)[r]||{},a=lb(i)[r]={};ab(t,function(t){var e=t.axisPointerModel.option;"show"===e.status&&ab(e.seriesDataIndices,function(t){var e=t.seriesIndex+" | "+t.dataIndex;a[e]=t})});var s=[],l=[];g(o,function(t,e){!a[e]&&l.push(t)}),g(a,function(t,e){!o[e]&&s.push(t)}),l.length&&n.dispatchAction({type:"downplay",escapeConnect:!0,batch:l}),s.length&&n.dispatchAction({type:"highlight",escapeConnect:!0,batch:s})}function Ch(t,e){for(var n=0;n<(t||[]).length;n++){var i=t[n];if(e.axis.dim===i.axisDim&&e.axis.model.componentIndex===i.axisIndex)return i}}function Dh(t){var e=t.axis.model,n={},i=n.axisDim=t.axis.dim;return n.axisIndex=n[i+"AxisIndex"]=e.componentIndex,n.axisName=n[i+"AxisName"]=e.name,n.axisId=n[i+"AxisId"]=e.id,n}function Ph(t){return!t||null==t[0]||isNaN(t[0])||null==t[1]||isNaN(t[1])}function Oh(t,e,n){if(!qf.node){var i=e.getZr();cb(i).records||(cb(i).records={}),Lh(i,e);var r=cb(i).records[t]||(cb(i).records[t]={});r.handler=n}}function Lh(t,e){function n(n,i){t.on(n,function(n){var r=Bh(e);hb(cb(t).records,function(t){t&&i(t,n,r.dispatchAction)}),Eh(r.pendings,e)})}cb(t).initialized||(cb(t).initialized=!0,n("click",w(Rh,"click")),n("mousemove",w(Rh,"mousemove")),n("globalout",Nh))}function Eh(t,e){var n,i=t.showTip.length,r=t.hideTip.length;i?n=t.showTip[i-1]:r&&(n=t.hideTip[r-1]),n&&(n.dispatchAction=null,e.dispatchAction(n))}function Nh(t,e,n){t.handler("leave",null,n)}function Rh(t,e,n,i){e.handler(t,n,i)}function Bh(t){var e={showTip:[],hideTip:[]},n=function n(i){var r=e[i.type];r?r.push(i):(i.dispatchAction=n,t.dispatchAction(i))};return{dispatchAction:n,pendings:e}}function zh(t,e){if(!qf.node){var n=e.getZr(),i=(cb(n).records||{})[t];i&&(cb(n).records[t]=null)}}function Fh(){}function $h(t,e,n,i){Vh(db(n).lastProp,i)||(db(n).lastProp=i,e?Nr(n,i,t):(n.stopAnimation(),n.attr(i)))}function Vh(t,e){if(I(t)&&I(e)){var n=!0;return g(e,function(e,i){n=n&&Vh(t[i],e)}),!!n}return t===e}function jh(t,e){t[e.get("label.show")?"show":"hide"]()}function Hh(t){return{position:t.position.slice(),rotation:t.rotation||0}}function Gh(t,e,n){var i=e.get("z"),r=e.get("zlevel");t&&t.traverse(function(t){"group"!==t.type&&(null!=i&&(t.z=i),null!=r&&(t.zlevel=r),t.silent=n)})}function Wh(t){var e,n=t.get("type"),i=t.getModel(n+"Style");return"line"===n?(e=i.getLineStyle(),e.fill=null):"shadow"===n&&(e=i.getAreaStyle(),e.stroke=null),e}function Uh(t,e,n,i,r){var o=n.get("value"),a=Yh(o,e.axis,e.ecModel,n.get("seriesDataIndices"),{precision:n.get("label.precision"),formatter:n.get("label.formatter")}),s=n.getModel("label"),l=am(s.get("padding")||0),u=s.getFont(),c=Fe(a,u),h=r.position,f=c.width+l[1]+l[3],d=c.height+l[0]+l[2],p=r.align;"right"===p&&(h[0]-=f),"center"===p&&(h[0]-=f/2);var g=r.verticalAlign;"bottom"===g&&(h[1]-=d),"middle"===g&&(h[1]-=d/2),Xh(h,f,d,i);var v=s.get("backgroundColor");v&&"auto"!==v||(v=e.get("axisLine.lineStyle.color")),t.label={shape:{x:0,y:0,width:f,height:d,r:s.get("borderRadius")},position:h.slice(),style:{text:a,textFont:u,textFill:s.getTextColor(),textPosition:"inside",fill:v,stroke:s.get("borderColor")||"transparent",lineWidth:s.get("borderWidth")||0,shadowBlur:s.get("shadowBlur"),shadowColor:s.get("shadowColor"),shadowOffsetX:s.get("shadowOffsetX"),shadowOffsetY:s.get("shadowOffsetY")},z2:10}}function Xh(t,e,n,i){var r=i.getWidth(),o=i.getHeight();t[0]=Math.min(t[0]+e,r)-e,t[1]=Math.min(t[1]+n,o)-n,t[0]=Math.max(t[0],0),t[1]=Math.max(t[1],0)}function Yh(t,e,n,i,r){t=e.scale.parse(t);var o=e.scale.getLabel(t,{precision:r.precision}),a=r.formatter;if(a){var s={value:du(e,t),seriesData:[]};g(i,function(t){var e=n.getSeriesByIndex(t.seriesIndex),i=t.dataIndexInside,r=e&&e.getDataParams(i);r&&s.seriesData.push(r)}),M(a)?o=a.replace("{value}",o):S(a)&&(o=a(s))}return o}function qh(t,e,n){var i=At();return Pt(i,i,n.rotation),Dt(i,i,n.position),zr([t.dataToCoord(e),(n.labelOffset||0)+(n.labelDirection||1)*(n.labelMargin||0)],i)}function Zh(t,e,n,i,r,o){var a=nw.innerTextLayout(n.rotation,0,n.labelDirection);n.labelMargin=r.get("label.margin"),Uh(e,i,r,o,{position:qh(i.axis,t,n),align:a.textAlign,verticalAlign:a.textVerticalAlign})}function Kh(t,e,n){return n=n||0,{x1:t[n],y1:t[1-n],x2:e[n],y2:e[1-n]}}function Jh(t,e,n){return n=n||0,{x:t[n],y:t[1-n],width:e[n],height:e[1-n]}}function Qh(t,e){var n={};return n[e.dim+"AxisIndex"]=e.index,t.getCartesian(n)}function tf(t){return"x"===t.dim?0:1}function ef(t){var e="cubic-bezier(0.23, 1, 0.32, 1)",n="left "+t+"s "+e+",top "+t+"s "+e;return v(xb,function(t){return t+"transition:"+n}).join(";")}function nf(t){var e=[],n=t.get("fontSize"),i=t.getTextColor();return i&&e.push("color:"+i),e.push("font:"+t.getFont()),n&&e.push("line-height:"+Math.round(3*n/2)+"px"),yb(["decoration","align"],function(n){var i=t.get(n);i&&e.push("text-"+n+":"+i)}),e.join(";")}function rf(t){var e=[],n=t.get("transitionDuration"),i=t.get("backgroundColor"),r=t.getModel("textStyle"),o=t.get("padding");return n&&e.push(ef(n)),i&&(qf.canvasSupported?e.push("background-Color:"+i):(e.push("background-Color:#"+Kt(i)),e.push("filter:alpha(opacity=70)"))),yb(["width","color","radius"],function(n){var i="border-"+n,r=_b(i),o=t.get(r);null!=o&&e.push(i+":"+o+("color"===n?"":"px"))}),e.push(nf(r)),null!=o&&e.push("padding:"+am(o).join("px ")+"px"),e.join(";")+";"}function of(t,i){if(qf.wxa)return null;var r=n.createElement("div"),o=this._zr=i.getZr();this.el=r,this._x=i.getWidth()/2,this._y=i.getHeight()/2,t.appendChild(r),this._container=t,this._show=!1,this._hideTimeout;var a=this;r.onmouseenter=function(){a._enterable&&(clearTimeout(a._hideTimeout),a._show=!0),a._inContent=!0},r.onmousemove=function(n){if(n=n||e.event,!a._enterable){var i=o.handler;mt(t,n,!0),i.dispatch("mousemove",n)}},r.onmouseleave=function(){a._enterable&&a._show&&a.hideLater(a._hideDelay),a._inContent=!1}}function af(t){this._zr=t.getZr(),this._show=!1,this._hideTimeout}function sf(t){for(var e=t.pop();t.length;){var n=t.pop();n&&(Gr.isInstance(n)&&(n=n.get("tooltip",!0)),"string"==typeof n&&(n={formatter:n}),e=new Gr(n,e,e.ecModel))}return e}function lf(t,e){return t.dispatchAction||x(e.dispatchAction,e)}function uf(t,e,n,i,r,o,a){var s=n.getOuterSize(),l=s.width,u=s.height;return null!=o&&(t+l+o>i?t-=l+o:t+=o),null!=a&&(e+u+a>r?e-=u+a:e+=a),[t,e]}function cf(t,e,n,i,r){var o=n.getOuterSize(),a=o.width,s=o.height;return t=Math.min(t+a,i)-a,e=Math.min(e+s,r)-s,t=Math.max(t,0),e=Math.max(e,0),[t,e]}function hf(t,e,n){var i=n[0],r=n[1],o=5,a=0,s=0,l=e.width,u=e.height;switch(t){case"inside":a=e.x+l/2-i/2,s=e.y+u/2-r/2;break;case"top":a=e.x+l/2-i/2,s=e.y-r-o;break;case"bottom":a=e.x+l/2-i/2,s=e.y+u+o;break;case"left":a=e.x-i-o,s=e.y+u/2-r/2;break;case"right":a=e.x+l+o,s=e.y+u/2-r/2}return[a,s]}function ff(t){return"center"===t||"middle"===t}function df(t){return Ab(t)}function pf(){if(!Cb&&Db){Cb=!0;var t=Db.styleSheets;t.length<31?Db.createStyleSheet().addRule(".zrvml","behavior:url(#default#VML)"):t[0].addRule(".zrvml","behavior:url(#default#VML)")}}function gf(t){return parseInt(t,10)}function vf(t,e){pf(),this.root=t,this.storage=e;var i=n.createElement("div"),r=n.createElement("div");i.style.cssText="display:inline-block;overflow:hidden;position:relative;width:300px;height:150px;",r.style.cssText="position:absolute;left:0;top:0;",t.appendChild(i),this._vmlRoot=r,this._vmlViewport=i,this.resize();var o=e.delFromStorage,a=e.addToStorage;e.delFromStorage=function(t){o.call(e,t),t&&t.onRemove&&t.onRemove(r)},e.addToStorage=function(t){t.onAdd&&t.onAdd(r),a.call(e,t)},this._firstPaint=!0}function mf(t){return function(){Qd('In IE8.0 VML mode painter not support method "'+t+'"')}}function yf(t){return n.createElementNS(_S,t)}function _f(t){return SS(1e4*t)/1e4}function xf(t){return CS>t&&t>-CS}function wf(t,e){var n=e?t.textFill:t.fill;return null!=n&&n!==bS}function bf(t,e){var n=e?t.textStroke:t.stroke;return null!=n&&n!==bS}function Sf(t,e){e&&Mf(t,"transform","matrix("+wS.call(e,",")+")")}function Mf(t,e,n){(!n||"linear"!==n.type&&"radial"!==n.type)&&t.setAttribute(e,n)}function If(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function Af(t,e,n,i){if(wf(e,n)){var r=n?e.textFill:e.fill;r="transparent"===r?bS:r,"none"!==t.getAttribute("clip-path")&&r===bS&&(r="rgba(0, 0, 0, 0.002)"),Mf(t,"fill",r),Mf(t,"fill-opacity",null!=e.fillOpacity?e.fillOpacity*e.opacity:e.opacity)}else Mf(t,"fill",bS);if(bf(e,n)){var o=n?e.textStroke:e.stroke;o="transparent"===o?bS:o,Mf(t,"stroke",o);var a=n?e.textStrokeWidth:e.lineWidth,s=!n&&e.strokeNoScale?i.getLineScale():1;Mf(t,"stroke-width",a/s),Mf(t,"paint-order",n?"stroke":"fill"),Mf(t,"stroke-opacity",null!=e.strokeOpacity?e.strokeOpacity:e.opacity);var l=e.lineDash;l?(Mf(t,"stroke-dasharray",e.lineDash.join(",")),Mf(t,"stroke-dashoffset",SS(e.lineDashOffset||0))):Mf(t,"stroke-dasharray",""),e.lineCap&&Mf(t,"stroke-linecap",e.lineCap),e.lineJoin&&Mf(t,"stroke-linejoin",e.lineJoin),e.miterLimit&&Mf(t,"stroke-miterlimit",e.miterLimit)}else Mf(t,"stroke",bS)}function Tf(t){for(var e=[],n=t.data,i=t.len(),r=0;i>r;){var o=n[r++],a="",s=0;switch(o){case xS.M:a="M",s=2;break;case xS.L:a="L",s=2;break;case xS.Q:a="Q",s=4;break;case xS.C:a="C",s=6;break;case xS.A:var l=n[r++],u=n[r++],c=n[r++],h=n[r++],f=n[r++],d=n[r++],p=n[r++],g=n[r++],v=Math.abs(d),m=xf(v-TS)&&!xf(v),y=!1;y=v>=TS||!xf(v)&&(d>-AS&&0>d||d>AS)==!!g;var _=_f(l+c*IS(f)),x=_f(u+h*MS(f));m&&(d=g?TS-1e-4:1e-4-TS,y=!0,9===r&&e.push("M",_,x));var w=_f(l+c*IS(f+d)),b=_f(u+h*MS(f+d));e.push("A",_f(c),_f(h),SS(p*kS),+y,+g,w,b);break;case xS.Z:a="Z";break;case xS.R:w=_f(n[r++]),b=_f(n[r++]);var S=_f(n[r++]),M=_f(n[r++]);e.push("M",w,b,"L",w+S,b,"L",w+S,b+M,"L",w,b+M,"L",w,b)}a&&e.push(a);for(var I=0;s>I;I++)e.push(_f(n[r++]))}return e.join(" ")}function kf(t){return"middle"===t?"middle":"bottom"===t?"after-edge":"hanging"}function Cf(){}function Df(t,e){for(var n=0,i=e.length,r=0,o=0;i>n;n++){var a=e[n];if(a.removed){for(var s=[],l=o;l<o+a.count;l++)s.push(l);a.indices=s,o+=a.count}else{for(s=[],l=r;l<r+a.count;l++)s.push(l);a.indices=s,r+=a.count,a.added||(o+=a.count)}}return e}function Pf(t){return{newPos:t.newPos,components:t.components.slice(0)}}function Of(t,e,n,i,r){this._zrId=t,this._svgRoot=e,this._tagNames="string"==typeof n?[n]:n,this._markLabel=i,this._domName=r||"_dom",this.nextId=0}function Lf(t,e){Of.call(this,t,e,["linearGradient","radialGradient"],"__gradient_in_use__")}function Ef(t,e){Of.call(this,t,e,"clipPath","__clippath_in_use__")}function Nf(t,e){Of.call(this,t,e,["filter"],"__filter_in_use__","_shadowDom")}function Rf(t){return t&&(t.shadowBlur||t.shadowOffsetX||t.shadowOffsetY||t.textShadowBlur||t.textShadowOffsetX||t.textShadowOffsetY)}function Bf(t){return parseInt(t,10)}function zf(t){return t instanceof $i?DS:t instanceof bn?PS:t instanceof mv?OS:DS}function Ff(t,e){return e&&t&&e.parentNode!==t}function $f(t,e,n){if(Ff(t,e)&&n){var i=n.nextSibling;i?t.insertBefore(e,i):t.appendChild(e)}}function Vf(t,e){if(Ff(t,e)){var n=t.firstChild;n?t.insertBefore(e,n):t.appendChild(e)}}function jf(t,e){e&&t&&e.parentNode===t&&t.removeChild(e)}function Hf(t){return t.__textSvgEl}function Gf(t){return t.__svgEl}function Wf(t){return function(){Qd('In SVG mode painter not support method "'+t+'"')}}var Uf=2311,Xf=function(){return Uf++},Yf={};Yf="object"==typeof wx&&"function"==typeof wx.getSystemInfoSync?{browser:{},os:{},node:!1,wxa:!0,canvasSupported:!0,svgSupported:!1,touchEventsSupported:!0,domSupported:!1}:"undefined"==typeof n&&"undefined"!=typeof self?{browser:{},os:{},node:!1,worker:!0,canvasSupported:!0,domSupported:!1}:"undefined"==typeof navigator?{browser:{},os:{},node:!0,worker:!1,canvasSupported:!0,svgSupported:!0,domSupported:!1}:i(navigator.userAgent);var qf=Yf,Zf={"[object Function]":1,"[object RegExp]":1,"[object Date]":1,"[object Error]":1,"[object CanvasGradient]":1,"[object CanvasPattern]":1,"[object Image]":1,"[object Canvas]":1},Kf={"[object Int8Array]":1,"[object Uint8Array]":1,"[object Uint8ClampedArray]":1,"[object Int16Array]":1,"[object Uint16Array]":1,"[object Int32Array]":1,"[object Uint32Array]":1,"[object Float32Array]":1,"[object Float64Array]":1},Jf=Object.prototype.toString,Qf=Array.prototype,td=Qf.forEach,ed=Qf.filter,nd=Qf.slice,id=Qf.map,rd=Qf.reduce,od={},ad=function(){return od.createCanvas()};od.createCanvas=function(){return n.createElement("canvas")};var sd,ld="__ec_primitive__";F.prototype={constructor:F,get:function(t){return this.data.hasOwnProperty(t)?this.data[t]:null},set:function(t,e){return this.data[t]=e},each:function(t,e){for(var n in void 0!==e&&(t=x(t,e)),this.data)this.data.hasOwnProperty(n)&&t(this.data[n],n)},removeKey:function(t){delete this.data[t]}};var ud=(Object.freeze||Object)({$override:r,clone:o,merge:a,mergeAll:s,extend:l,defaults:u,createCanvas:ad,getContext:c,indexOf:h,inherits:f,mixin:d,isArrayLike:p,each:g,map:v,reduce:m,filter:y,find:_,bind:x,curry:w,isArray:b,isFunction:S,isString:M,isObject:I,isBuiltInObject:A,isTypedArray:T,isDom:k,eqNaN:C,retrieve:D,retrieve2:P,retrieve3:O,slice:L,normalizeCssArray:E,assert:N,trim:R,setAsPrimitive:B,isPrimitive:z,createHashMap:$,concatArray:V,noop:j}),cd="undefined"==typeof Float32Array?Array:Float32Array,hd=Z,fd=K,dd=it,pd=rt,gd=(Object.freeze||Object)({create:H,copy:G,clone:W,set:U,add:X,scaleAndAdd:Y,sub:q,len:Z,length:hd,lenSquare:K,lengthSquare:fd,mul:J,div:Q,dot:tt,scale:et,normalize:nt,distance:it,dist:dd,distanceSquare:rt,distSquare:pd,negate:ot,lerp:at,applyTransform:st,min:lt,max:ut});ct.prototype={constructor:ct,_dragStart:function(t){var e=t.target;e&&e.draggable&&(this._draggingTarget=e,e.dragging=!0,this._x=t.offsetX,this._y=t.offsetY,this.dispatchToElement(ht(e,t),"dragstart",t.event))},_drag:function(t){var e=this._draggingTarget;if(e){var n=t.offsetX,i=t.offsetY,r=n-this._x,o=i-this._y;this._x=n,this._y=i,e.drift(r,o,t),this.dispatchToElement(ht(e,t),"drag",t.event);var a=this.findHover(n,i,e).target,s=this._dropTarget;this._dropTarget=a,e!==a&&(s&&a!==s&&this.dispatchToElement(ht(s,t),"dragleave",t.event),a&&a!==s&&this.dispatchToElement(ht(a,t),"dragenter",t.event))}},_dragEnd:function(t){var e=this._draggingTarget;e&&(e.dragging=!1),this.dispatchToElement(ht(e,t),"dragend",t.event),this._dropTarget&&this.dispatchToElement(ht(this._dropTarget,t),"drop",t.event),this._draggingTarget=null,this._dropTarget=null}};var vd=Array.prototype.slice,md=function(t){this._$handlers={},this._$eventProcessor=t};md.prototype={constructor:md,one:function(t,e,n,i){return dt(this,t,e,n,i,!0)},on:function(t,e,n,i){return dt(this,t,e,n,i,!1)},isSilent:function(t){var e=this._$handlers;return!e[t]||!e[t].length},off:function(t,e){var n=this._$handlers;if(!t)return this._$handlers={},this;if(e){if(n[t]){for(var i=[],r=0,o=n[t].length;o>r;r++)n[t][r].h!==e&&i.push(n[t][r]);n[t]=i}n[t]&&0===n[t].length&&delete n[t]}else delete n[t];return this},trigger:function(t){var e=this._$handlers[t],n=this._$eventProcessor;if(e){var i=arguments,r=i.length;r>3&&(i=vd.call(i,1));for(var o=e.length,a=0;o>a;){var s=e[a];if(n&&n.filter&&null!=s.query&&!n.filter(t,s.query))a++;else{switch(r){case 1:s.h.call(s.ctx);break;case 2:s.h.call(s.ctx,i[1]);break;case 3:s.h.call(s.ctx,i[1],i[2]);break;default:s.h.apply(s.ctx,i)}s.one?(e.splice(a,1),o--):a++}}}return n&&n.afterTrigger&&n.afterTrigger(t),this},triggerWithContext:function(t){var e=this._$handlers[t],n=this._$eventProcessor;if(e){var i=arguments,r=i.length;r>4&&(i=vd.call(i,1,i.length-1));for(var o=i[i.length-1],a=e.length,s=0;a>s;){var l=e[s];if(n&&n.filter&&null!=l.query&&!n.filter(t,l.query))s++;else{switch(r){case 1:l.h.call(o);break;case 2:l.h.call(o,i[1]);break;case 3:l.h.call(o,i[1],i[2]);break;default:l.h.apply(o,i)}l.one?(e.splice(s,1),a--):s++}}}return n&&n.afterTrigger&&n.afterTrigger(t),this}};var yd="undefined"!=typeof e&&!!e.addEventListener,_d=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,xd=yd?function(t){t.preventDefault(),t.stopPropagation(),t.cancelBubble=!0}:function(t){t.returnValue=!1,t.cancelBubble=!0},wd=function(){this._track=[]};wd.prototype={constructor:wd,recognize:function(t,e,n){return this._doTrack(t,e,n),this._recognize(t)},clear:function(){return this._track.length=0,this},_doTrack:function(t,e,n){var i=t.touches;if(i){for(var r={points:[],touches:[],target:e,event:t},o=0,a=i.length;a>o;o++){var s=i[o],l=gt(n,s,{});r.points.push([l.zrX,l.zrY]),r.touches.push(s)}this._track.push(r)}},_recognize:function(t){for(var e in bd)if(bd.hasOwnProperty(e)){var n=bd[e](this._track,t);if(n)return n}}};var bd={pinch:function(t,e){var n=t.length;if(n){var i=(t[n-1]||{}).points,r=(t[n-2]||{}).points||i;if(r&&r.length>1&&i&&i.length>1){var o=xt(i)/xt(r);!isFinite(o)&&(o=1),e.pinchScale=o;var a=wt(i);return e.pinchX=a[0],e.pinchY=a[1],{type:"pinch",target:t[0].target,event:e}}}}},Sd="silent";Mt.prototype.dispose=function(){};var Md=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],Id=function(t,e,n,i){md.call(this),this.storage=t,this.painter=e,this.painterRoot=i,n=n||new Mt,this.proxy=null,this._hovered={},this._lastTouchMoment,this._lastX,this._lastY,this._gestureMgr,ct.call(this),this.setHandlerProxy(n)};Id.prototype={constructor:Id,setHandlerProxy:function(t){this.proxy&&this.proxy.dispose(),t&&(g(Md,function(e){t.on&&t.on(e,this[e],this)},this),t.handler=this),this.proxy=t},mousemove:function(t){var e=t.zrX,n=t.zrY,i=this._hovered,r=i.target;r&&!r.__zr&&(i=this.findHover(i.x,i.y),r=i.target);var o=this._hovered=this.findHover(e,n),a=o.target,s=this.proxy;s.setCursor&&s.setCursor(a?a.cursor:"default"),r&&a!==r&&this.dispatchToElement(i,"mouseout",t),this.dispatchToElement(o,"mousemove",t),a&&a!==r&&this.dispatchToElement(o,"mouseover",t)},mouseout:function(t){this.dispatchToElement(this._hovered,"mouseout",t);var e,n=t.toElement||t.relatedTarget;do{n=n&&n.parentNode}while(n&&9!==n.nodeType&&!(e=n===this.painterRoot));!e&&this.trigger("globalout",{event:t})},resize:function(){this._hovered={}},dispatch:function(t,e){var n=this[t];n&&n.call(this,e)},dispose:function(){this.proxy.dispose(),this.storage=this.proxy=this.painter=null},setCursorStyle:function(t){var e=this.proxy;e.setCursor&&e.setCursor(t)},dispatchToElement:function(t,e,n){t=t||{};var i=t.target;if(!i||!i.silent){for(var r="on"+e,o=bt(e,t,n);i&&(i[r]&&(o.cancelBubble=i[r].call(i,o)),i.trigger(e,o),i=i.parent,!o.cancelBubble););o.cancelBubble||(this.trigger(e,o),this.painter&&this.painter.eachOtherLayer(function(t){"function"==typeof t[r]&&t[r].call(t,o),t.trigger&&t.trigger(e,o)}))}},findHover:function(t,e,n){for(var i=this.storage.getDisplayList(),r={x:t,y:e},o=i.length-1;o>=0;o--){var a;if(i[o]!==n&&!i[o].ignore&&(a=It(i[o],t,e))&&(!r.topTarget&&(r.topTarget=i[o]),a!==Sd)){r.target=i[o];break}}return r},processGesture:function(t,e){this._gestureMgr||(this._gestureMgr=new wd);var n=this._gestureMgr;"start"===e&&n.clear();var i=n.recognize(t,this.findHover(t.zrX,t.zrY,null).target,this.proxy.dom);if("end"===e&&n.clear(),i){var r=i.type;t.gestureEvent=r,this.dispatchToElement({target:i.target},r,i.event)}}},g(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],function(t){Id.prototype[t]=function(e){var n=this.findHover(e.zrX,e.zrY),i=n.target;if("mousedown"===t)this._downEl=i,this._downPoint=[e.zrX,e.zrY],this._upEl=i;else if("mouseup"===t)this._upEl=i;else if("click"===t){if(this._downEl!==this._upEl||!this._downPoint||dd(this._downPoint,[e.zrX,e.zrY])>4)return;this._downPoint=null}this.dispatchToElement(n,t,e)}}),d(Id,md),d(Id,ct);var Ad="undefined"==typeof Float32Array?Array:Float32Array,Td=(Object.freeze||Object)({create:At,identity:Tt,copy:kt,mul:Ct,translate:Dt,rotate:Pt,scale:Ot,invert:Lt,clone:Et}),kd=Tt,Cd=5e-5,Dd=function(t){t=t||{},t.position||(this.position=[0,0]),null==t.rotation&&(this.rotation=0),t.scale||(this.scale=[1,1]),this.origin=this.origin||null},Pd=Dd.prototype;Pd.transform=null,Pd.needLocalTransform=function(){return Nt(this.rotation)||Nt(this.position[0])||Nt(this.position[1])||Nt(this.scale[0]-1)||Nt(this.scale[1]-1)};var Od=[];Pd.updateTransform=function(){var t=this.parent,e=t&&t.transform,n=this.needLocalTransform(),i=this.transform;if(n||e){i=i||At(),n?this.getLocalTransform(i):kd(i),e&&(n?Ct(i,t.transform,i):kt(i,t.transform)),this.transform=i;var r=this.globalScaleRatio;if(null!=r&&1!==r){this.getGlobalScale(Od);var o=Od[0]<0?-1:1,a=Od[1]<0?-1:1,s=((Od[0]-o)*r+o)/Od[0]||0,l=((Od[1]-a)*r+a)/Od[1]||0;i[0]*=s,i[1]*=s,i[2]*=l,i[3]*=l}this.invTransform=this.invTransform||At(),Lt(this.invTransform,i)}else i&&kd(i)},Pd.getLocalTransform=function(t){return Dd.getLocalTransform(this,t)},Pd.setTransform=function(t){var e=this.transform,n=t.dpr||1;e?t.setTransform(n*e[0],n*e[1],n*e[2],n*e[3],n*e[4],n*e[5]):t.setTransform(n,0,0,n,0,0)},Pd.restoreTransform=function(t){var e=t.dpr||1;t.setTransform(e,0,0,e,0,0)};var Ld=[],Ed=At();Pd.setLocalTransform=function(t){if(t){var e=t[0]*t[0]+t[1]*t[1],n=t[2]*t[2]+t[3]*t[3],i=this.position,r=this.scale;Nt(e-1)&&(e=Math.sqrt(e)),Nt(n-1)&&(n=Math.sqrt(n)),t[0]<0&&(e=-e),t[3]<0&&(n=-n),i[0]=t[4],i[1]=t[5],r[0]=e,r[1]=n,this.rotation=Math.atan2(-t[1]/n,t[0]/e)}},Pd.decomposeTransform=function(){if(this.transform){var t=this.parent,e=this.transform;t&&t.transform&&(Ct(Ld,t.invTransform,e),e=Ld);var n=this.origin;n&&(n[0]||n[1])&&(Ed[4]=n[0],Ed[5]=n[1],Ct(Ld,e,Ed),Ld[4]-=n[0],Ld[5]-=n[1],e=Ld),this.setLocalTransform(e)}},Pd.getGlobalScale=function(t){var e=this.transform;return t=t||[],e?(t[0]=Math.sqrt(e[0]*e[0]+e[1]*e[1]),t[1]=Math.sqrt(e[2]*e[2]+e[3]*e[3]),e[0]<0&&(t[0]=-t[0]),e[3]<0&&(t[1]=-t[1]),t):(t[0]=1,t[1]=1,t)},Pd.transformCoordToLocal=function(t,e){var n=[t,e],i=this.invTransform;return i&&st(n,n,i),n},Pd.transformCoordToGlobal=function(t,e){var n=[t,e],i=this.transform;return i&&st(n,n,i),n},Dd.getLocalTransform=function(t,e){e=e||[],kd(e);var n=t.origin,i=t.scale||[1,1],r=t.rotation||0,o=t.position||[0,0];return n&&(e[4]-=n[0],e[5]-=n[1]),Ot(e,e,i),r&&Pt(e,e,r),n&&(e[4]+=n[0],e[5]+=n[1]),e[4]+=o[0],e[5]+=o[1],e};var Nd={linear:function(t){return t},quadraticIn:function(t){return t*t},quadraticOut:function(t){return t*(2-t)},quadraticInOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},cubicIn:function(t){return t*t*t},cubicOut:function(t){return--t*t*t+1},cubicInOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},quarticIn:function(t){return t*t*t*t},quarticOut:function(t){return 1- --t*t*t*t},quarticInOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},quinticIn:function(t){return t*t*t*t*t},quinticOut:function(t){return--t*t*t*t*t+1},quinticInOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},sinusoidalIn:function(t){return 1-Math.cos(t*Math.PI/2)},sinusoidalOut:function(t){return Math.sin(t*Math.PI/2)},sinusoidalInOut:function(t){return.5*(1-Math.cos(Math.PI*t))},exponentialIn:function(t){return 0===t?0:Math.pow(1024,t-1)},exponentialOut:function(t){return 1===t?1:1-Math.pow(2,-10*t)},exponentialInOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},circularIn:function(t){return 1-Math.sqrt(1-t*t)},circularOut:function(t){return Math.sqrt(1- --t*t)},circularInOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},elasticIn:function(t){var e,n=.1,i=.4;return 0===t?0:1===t?1:(!n||1>n?(n=1,e=i/4):e=i*Math.asin(1/n)/(2*Math.PI),-n*Math.pow(2,10*(t-=1))*Math.sin(2*(t-e)*Math.PI/i))},elasticOut:function(t){var e,n=.1,i=.4;return 0===t?0:1===t?1:(!n||1>n?(n=1,e=i/4):e=i*Math.asin(1/n)/(2*Math.PI),n*Math.pow(2,-10*t)*Math.sin(2*(t-e)*Math.PI/i)+1)},elasticInOut:function(t){var e,n=.1,i=.4;return 0===t?0:1===t?1:(!n||1>n?(n=1,e=i/4):e=i*Math.asin(1/n)/(2*Math.PI),(t*=2)<1?-.5*n*Math.pow(2,10*(t-=1))*Math.sin(2*(t-e)*Math.PI/i):n*Math.pow(2,-10*(t-=1))*Math.sin(2*(t-e)*Math.PI/i)*.5+1)},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},backInOut:function(t){var e=2.5949095;return(t*=2)<1?.5*t*t*((e+1)*t-e):.5*((t-=2)*t*((e+1)*t+e)+2)},bounceIn:function(t){return 1-Nd.bounceOut(1-t)},bounceOut:function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bounceInOut:function(t){return.5>t?.5*Nd.bounceIn(2*t):.5*Nd.bounceOut(2*t-1)+.5}};Rt.prototype={constructor:Rt,step:function(t,e){if(this._initialized||(this._startTime=t+this._delay,this._initialized=!0),this._paused)this._pausedTime+=e;else{var n=(t-this._startTime-this._pausedTime)/this._life;if(!(0>n)){n=Math.min(n,1);var i=this.easing,r="string"==typeof i?Nd[i]:i,o="function"==typeof r?r(n):n;return this.fire("frame",o),1===n?this.loop?(this.restart(t),"restart"):(this._needsRemove=!0,"destroy"):null}}},restart:function(t){var e=(t-this._startTime-this._pausedTime)%this._life;this._startTime=t-e+this.gap,this._pausedTime=0,this._needsRemove=!1},fire:function(t,e){t="on"+t,this[t]&&this[t](this._target,e)},pause:function(){this._paused=!0},resume:function(){this._paused=!1}};var Rd=function(){this.head=null,this.tail=null,this._len=0},Bd=Rd.prototype;Bd.insert=function(t){var e=new zd(t);return this.insertEntry(e),e},Bd.insertEntry=function(t){this.head?(this.tail.next=t,t.prev=this.tail,t.next=null,this.tail=t):this.head=this.tail=t,this._len++},Bd.remove=function(t){var e=t.prev,n=t.next;e?e.next=n:this.head=n,n?n.prev=e:this.tail=e,t.next=t.prev=null,this._len--},Bd.len=function(){return this._len},Bd.clear=function(){this.head=this.tail=null,this._len=0};var zd=function(t){this.value=t,this.next,this.prev},Fd=function(t){this._list=new Rd,this._map={},this._maxSize=t||10,this._lastRemovedEntry=null},$d=Fd.prototype;$d.put=function(t,e){var n=this._list,i=this._map,r=null;if(null==i[t]){var o=n.len(),a=this._lastRemovedEntry;if(o>=this._maxSize&&o>0){var s=n.head;n.remove(s),delete i[s.key],r=s.value,this._lastRemovedEntry=s}a?a.value=e:a=new zd(e),a.key=t,n.insertEntry(a),i[t]=a}return r},$d.get=function(t){var e=this._map[t],n=this._list;return null!=e?(e!==n.tail&&(n.remove(e),n.insertEntry(e)),e.value):void 0},$d.clear=function(){this._list.clear(),this._map={}};var Vd={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]},jd=new Fd(20),Hd=null,Gd=Jt,Wd=Qt,Ud=(Object.freeze||Object)({parse:Xt,lift:Zt,toHex:Kt,fastLerp:Jt,fastMapToColor:Gd,lerp:Qt,mapToColor:Wd,modifyHSL:te,modifyAlpha:ee,stringify:ne}),Xd=Array.prototype.slice,Yd=function(t,e,n,i){this._tracks={},this._target=t,this._loop=e||!1,this._getter=n||ie,this._setter=i||re,this._clipCount=0,this._delay=0,this._doneList=[],this._onframeList=[],this._clipList=[]};Yd.prototype={when:function(t,e){var n=this._tracks;for(var i in e)if(e.hasOwnProperty(i)){if(!n[i]){n[i]=[];var r=this._getter(this._target,i);if(null==r)continue;0!==t&&n[i].push({time:0,value:fe(r)})}n[i].push({time:t,value:e[i]})}return this},during:function(t){return this._onframeList.push(t),this},pause:function(){for(var t=0;t<this._clipList.length;t++)this._clipList[t].pause();this._paused=!0},resume:function(){for(var t=0;t<this._clipList.length;t++)this._clipList[t].resume();this._paused=!1},isPaused:function(){return!!this._paused},_doneCallback:function(){this._tracks={},this._clipList.length=0;for(var t=this._doneList,e=t.length,n=0;e>n;n++)t[n].call(this)},start:function(t,e){var n,i=this,r=0,o=function(){r--,r||i._doneCallback()};for(var a in this._tracks)if(this._tracks.hasOwnProperty(a)){var s=ge(this,t,o,this._tracks[a],a,e);s&&(this._clipList.push(s),r++,this.animation&&this.animation.addClip(s),n=s)}if(n){var l=n.onframe;n.onframe=function(t,e){l(t,e);for(var n=0;n<i._onframeList.length;n++)i._onframeList[n](t,e)}}return r||this._doneCallback(),this},stop:function(t){for(var e=this._clipList,n=this.animation,i=0;i<e.length;i++){var r=e[i];t&&r.onframe(this._target,1),n&&n.removeClip(r)}e.length=0},delay:function(t){return this._delay=t,this},done:function(t){return t&&this._doneList.push(t),this},getClips:function(){return this._clipList}};var qd=1;"undefined"!=typeof e&&(qd=Math.max(e.devicePixelRatio||1,1));var Zd=0,Kd=qd,Jd=function(){};1===Zd?Jd=function(){for(var t in arguments)throw new Error(arguments[t])}:Zd>1&&(Jd=function(){for(var t in arguments)console.log(arguments[t]," at components/echarts/echarts.min.js:6")});var Qd=Jd,tp=function(){this.animators=[]};tp.prototype={constructor:tp,animate:function(t,e){var n,i=!1,r=this,o=this.__zr;if(t){var a=t.split("."),s=r;i="shape"===a[0];for(var l=0,u=a.length;u>l;l++)s&&(s=s[a[l]]);s&&(n=s)}else n=r;if(n){var c=r.animators,f=new Yd(n,e);return f.during(function(){r.dirty(i)}).done(function(){c.splice(h(c,f),1)}),c.push(f),o&&o.animation.addAnimator(f),f}Qd('Property "'+t+'" is not existed in element '+r.id)},stopAnimation:function(t){for(var e=this.animators,n=e.length,i=0;n>i;i++)e[i].stop(t);return e.length=0,this},animateTo:function(t,e,n,i,r,o){ve(this,t,e,n,i,r,o)},animateFrom:function(t,e,n,i,r,o){ve(this,t,e,n,i,r,o,!0)}};var ep=function(t){Dd.call(this,t),md.call(this,t),tp.call(this,t),this.id=t.id||Xf()};ep.prototype={type:"element",name:"",__zr:null,ignore:!1,clipPath:null,isGroup:!1,drift:function(t,e){switch(this.draggable){case"horizontal":e=0;break;case"vertical":t=0}var n=this.transform;n||(n=this.transform=[1,0,0,1,0,0]),n[4]+=t,n[5]+=e,this.decomposeTransform(),this.dirty(!1)},beforeUpdate:function(){},afterUpdate:function(){},update:function(){this.updateTransform()},traverse:function(){},attrKV:function(t,e){if("position"===t||"scale"===t||"origin"===t){if(e){var n=this[t];n||(n=this[t]=[]),n[0]=e[0],n[1]=e[1]}}else this[t]=e},hide:function(){this.ignore=!0,this.__zr&&this.__zr.refresh()},show:function(){this.ignore=!1,this.__zr&&this.__zr.refresh()},attr:function(t,e){if("string"==typeof t)this.attrKV(t,e);else if(I(t))for(var n in t)t.hasOwnProperty(n)&&this.attrKV(n,t[n]);return this.dirty(!1),this},setClipPath:function(t){var e=this.__zr;e&&t.addSelfToZr(e),this.clipPath&&this.clipPath!==t&&this.removeClipPath(),this.clipPath=t,t.__zr=e,t.__clipTarget=this,this.dirty(!1)},removeClipPath:function(){var t=this.clipPath;t&&(t.__zr&&t.removeSelfFromZr(t.__zr),t.__zr=null,t.__clipTarget=null,this.clipPath=null,this.dirty(!1))},addSelfToZr:function(t){this.__zr=t;var e=this.animators;if(e)for(var n=0;n<e.length;n++)t.animation.addAnimator(e[n]);this.clipPath&&this.clipPath.addSelfToZr(t)},removeSelfFromZr:function(t){this.__zr=null;var e=this.animators;if(e)for(var n=0;n<e.length;n++)t.animation.removeAnimator(e[n]);this.clipPath&&this.clipPath.removeSelfFromZr(t)}},d(ep,tp),d(ep,Dd),d(ep,md);var np=st,ip=Math.min,rp=Math.max;_e.prototype={constructor:_e,union:function(t){var e=ip(t.x,this.x),n=ip(t.y,this.y);this.width=rp(t.x+t.width,this.x+this.width)-e,this.height=rp(t.y+t.height,this.y+this.height)-n,this.x=e,this.y=n},applyTransform:function(){var t=[],e=[],n=[],i=[];return function(r){if(r){t[0]=n[0]=this.x,t[1]=i[1]=this.y,e[0]=i[0]=this.x+this.width,e[1]=n[1]=this.y+this.height,np(t,t,r),np(e,e,r),np(n,n,r),np(i,i,r),this.x=ip(t[0],e[0],n[0],i[0]),this.y=ip(t[1],e[1],n[1],i[1]);var o=rp(t[0],e[0],n[0],i[0]),a=rp(t[1],e[1],n[1],i[1]);this.width=o-this.x,this.height=a-this.y}}}(),calculateTransform:function(t){var e=this,n=t.width/e.width,i=t.height/e.height,r=At();return Dt(r,r,[-e.x,-e.y]),Ot(r,r,[n,i]),Dt(r,r,[t.x,t.y]),r},intersect:function(t){if(!t)return!1;t instanceof _e||(t=_e.create(t));var e=this,n=e.x,i=e.x+e.width,r=e.y,o=e.y+e.height,a=t.x,s=t.x+t.width,l=t.y,u=t.y+t.height;return!(a>i||n>s||l>o||r>u)},contain:function(t,e){var n=this;return t>=n.x&&t<=n.x+n.width&&e>=n.y&&e<=n.y+n.height},clone:function(){return new _e(this.x,this.y,this.width,this.height)},copy:function(t){this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height},plain:function(){return{x:this.x,y:this.y,width:this.width,height:this.height}}},_e.create=function(t){return new _e(t.x,t.y,t.width,t.height)};var op=function(t){for(var e in t=t||{},ep.call(this,t),t)t.hasOwnProperty(e)&&(this[e]=t[e]);this._children=[],this.__storage=null,this.__dirty=!0};op.prototype={constructor:op,isGroup:!0,type:"group",silent:!1,children:function(){return this._children.slice()},childAt:function(t){return this._children[t]},childOfName:function(t){for(var e=this._children,n=0;n<e.length;n++)if(e[n].name===t)return e[n]},childCount:function(){return this._children.length},add:function(t){return t&&t!==this&&t.parent!==this&&(this._children.push(t),this._doAdd(t)),this},addBefore:function(t,e){if(t&&t!==this&&t.parent!==this&&e&&e.parent===this){var n=this._children,i=n.indexOf(e);i>=0&&(n.splice(i,0,t),this._doAdd(t))}return this},_doAdd:function(t){t.parent&&t.parent.remove(t),t.parent=this;var e=this.__storage,n=this.__zr;e&&e!==t.__storage&&(e.addToStorage(t),t instanceof op&&t.addChildrenToStorage(e)),n&&n.refresh()},remove:function(t){var e=this.__zr,n=this.__storage,i=this._children,r=h(i,t);return 0>r?this:(i.splice(r,1),t.parent=null,n&&(n.delFromStorage(t),t instanceof op&&t.delChildrenFromStorage(n)),e&&e.refresh(),this)},removeAll:function(){var t,e,n=this._children,i=this.__storage;for(e=0;e<n.length;e++)t=n[e],i&&(i.delFromStorage(t),t instanceof op&&t.delChildrenFromStorage(i)),t.parent=null;return n.length=0,this},eachChild:function(t,e){for(var n=this._children,i=0;i<n.length;i++){var r=n[i];t.call(e,r,i)}return this},traverse:function(t,e){for(var n=0;n<this._children.length;n++){var i=this._children[n];t.call(e,i),"group"===i.type&&i.traverse(t,e)}return this},addChildrenToStorage:function(t){for(var e=0;e<this._children.length;e++){var n=this._children[e];t.addToStorage(n),n instanceof op&&n.addChildrenToStorage(t)}},delChildrenFromStorage:function(t){for(var e=0;e<this._children.length;e++){var n=this._children[e];t.delFromStorage(n),n instanceof op&&n.delChildrenFromStorage(t)}},dirty:function(){return this.__dirty=!0,this.__zr&&this.__zr.refresh(),this},getBoundingRect:function(t){for(var e=null,n=new _e(0,0,0,0),i=t||this._children,r=[],o=0;o<i.length;o++){var a=i[o];if(!a.ignore&&!a.invisible){var s=a.getBoundingRect(),l=a.getLocalTransform(r);l?(n.copy(s),n.applyTransform(l),e=e||n.clone(),e.union(n)):(e=e||s.clone(),e.union(s))}}return e||n}},f(op,ep);var ap=32,sp=7,lp=function(){this._roots=[],this._displayList=[],this._displayListLen=0};lp.prototype={constructor:lp,traverse:function(t,e){for(var n=0;n<this._roots.length;n++)this._roots[n].traverse(t,e)},getDisplayList:function(t,e){return e=e||!1,t&&this.updateDisplayList(e),this._displayList},updateDisplayList:function(t){this._displayListLen=0;for(var e=this._roots,n=this._displayList,i=0,r=e.length;r>i;i++)this._updateAndAddDisplayable(e[i],null,t);n.length=this._displayListLen,qf.canvasSupported&&Te(n,ke)},_updateAndAddDisplayable:function(t,e,n){if(!t.ignore||n){t.beforeUpdate(),t.__dirty&&t.update(),t.afterUpdate();var i=t.clipPath;if(i){e=e?e.slice():[];for(var r=i,o=t;r;)r.parent=o,r.updateTransform(),e.push(r),o=r,r=r.clipPath}if(t.isGroup){for(var a=t._children,s=0;s<a.length;s++){var l=a[s];t.__dirty&&(l.__dirty=!0),this._updateAndAddDisplayable(l,e,n)}t.__dirty=!1}else t.__clipPaths=e,this._displayList[this._displayListLen++]=t}},addRoot:function(t){t.__storage!==this&&(t instanceof op&&t.addChildrenToStorage(this),this.addToStorage(t),this._roots.push(t))},delRoot:function(t){if(null==t){for(var e=0;e<this._roots.length;e++){var n=this._roots[e];n instanceof op&&n.delChildrenFromStorage(this)}return this._roots=[],this._displayList=[],void(this._displayListLen=0)}if(t instanceof Array){e=0;for(var i=t.length;i>e;e++)this.delRoot(t[e])}else{var r=h(this._roots,t);r>=0&&(this.delFromStorage(t),this._roots.splice(r,1),t instanceof op&&t.delChildrenFromStorage(this))}},addToStorage:function(t){return t&&(t.__storage=this,t.dirty(!1)),this},delFromStorage:function(t){return t&&(t.__storage=null),this},dispose:function(){this._renderList=this._roots=null},displayableSortFunc:ke};var up={shadowBlur:1,shadowOffsetX:1,shadowOffsetY:1,textShadowBlur:1,textShadowOffsetX:1,textShadowOffsetY:1,textBoxShadowBlur:1,textBoxShadowOffsetX:1,textBoxShadowOffsetY:1},cp=function(t,e,n){return up.hasOwnProperty(e)?n*=t.dpr:n},hp={NONE:0,STYLE_BIND:1,PLAIN_TEXT:2},fp=9,dp=[["shadowBlur",0],["shadowOffsetX",0],["shadowOffsetY",0],["shadowColor","#000"],["lineCap","butt"],["lineJoin","miter"],["miterLimit",10]],pp=function(t){this.extendFrom(t,!1)};pp.prototype={constructor:pp,fill:"#000",stroke:null,opacity:1,fillOpacity:null,strokeOpacity:null,lineDash:null,lineDashOffset:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,lineWidth:1,strokeNoScale:!1,text:null,font:null,textFont:null,fontStyle:null,fontWeight:null,fontSize:null,fontFamily:null,textTag:null,textFill:"#000",textStroke:null,textWidth:null,textHeight:null,textStrokeWidth:0,textLineHeight:null,textPosition:"inside",textRect:null,textOffset:null,textAlign:null,textVerticalAlign:null,textDistance:5,textShadowColor:"transparent",textShadowBlur:0,textShadowOffsetX:0,textShadowOffsetY:0,textBoxShadowColor:"transparent",textBoxShadowBlur:0,textBoxShadowOffsetX:0,textBoxShadowOffsetY:0,transformText:!1,textRotation:0,textOrigin:null,textBackgroundColor:null,textBorderColor:null,textBorderWidth:0,textBorderRadius:0,textPadding:null,rich:null,truncate:null,blend:null,bind:function(t,e,n){var i=this,r=n&&n.style,o=!r||t.__attrCachedBy!==hp.STYLE_BIND;t.__attrCachedBy=hp.STYLE_BIND;for(var a=0;a<dp.length;a++){var s=dp[a],l=s[0];(o||i[l]!==r[l])&&(t[l]=cp(t,l,i[l]||s[1]))}if((o||i.fill!==r.fill)&&(t.fillStyle=i.fill),(o||i.stroke!==r.stroke)&&(t.strokeStyle=i.stroke),(o||i.opacity!==r.opacity)&&(t.globalAlpha=null==i.opacity?1:i.opacity),(o||i.blend!==r.blend)&&(t.globalCompositeOperation=i.blend||"source-over"),this.hasStroke()){var u=i.lineWidth;t.lineWidth=u/(this.strokeNoScale&&e&&e.getLineScale?e.getLineScale():1)}},hasFill:function(){var t=this.fill;return null!=t&&"none"!==t},hasStroke:function(){var t=this.stroke;return null!=t&&"none"!==t&&this.lineWidth>0},extendFrom:function(t,e){if(t)for(var n in t)!t.hasOwnProperty(n)||!0!==e&&(!1===e?this.hasOwnProperty(n):null==t[n])||(this[n]=t[n])},set:function(t,e){"string"==typeof t?this[t]=e:this.extendFrom(t,!0)},clone:function(){var t=new this.constructor;return t.extendFrom(this,!0),t},getGradient:function(t,e,n){for(var i="radial"===e.type?De:Ce,r=i(t,e,n),o=e.colorStops,a=0;a<o.length;a++)r.addColorStop(o[a].offset,o[a].color);return r}};for(var gp=pp.prototype,vp=0;vp<dp.length;vp++){var mp=dp[vp];mp[0]in gp||(gp[mp[0]]=mp[1])}pp.getGradient=gp.getGradient;var yp=function(t,e){this.image=t,this.repeat=e,this.type="pattern"};yp.prototype.getCanvasPattern=function(t){return t.createPattern(this.image,this.repeat||"repeat")};var _p=function(t,e,n){var i;n=n||Kd,"string"==typeof t?i=Oe(t,e,n):I(t)&&(i=t,t=i.id),this.id=t,this.dom=i;var r=i.style;r&&(i.onselectstart=Pe,r["-webkit-user-select"]="none",r["user-select"]="none",r["-webkit-touch-callout"]="none",r["-webkit-tap-highlight-color"]="rgba(0,0,0,0)",r.padding=0,r.margin=0,r["border-width"]=0),this.domBack=null,this.ctxBack=null,this.painter=e,this.config=null,this.clearColor=0,this.motionBlur=!1,this.lastFrameAlpha=.7,this.dpr=n};_p.prototype={constructor:_p,__dirty:!0,__used:!1,__drawIndex:0,__startIndex:0,__endIndex:0,incremental:!1,getElementCount:function(){return this.__endIndex-this.__startIndex},initContext:function(){this.ctx=this.dom.getContext("2d"),this.ctx.dpr=this.dpr},createBackBuffer:function(){var t=this.dpr;this.domBack=Oe("back-"+this.id,this.painter,t),this.ctxBack=this.domBack.getContext("2d"),1!==t&&this.ctxBack.scale(t,t)},resize:function(t,e){var n=this.dpr,i=this.dom,r=i.style,o=this.domBack;r&&(r.width=t+"px",r.height=e+"px"),i.width=t*n,i.height=e*n,o&&(o.width=t*n,o.height=e*n,1!==n&&this.ctxBack.scale(n,n))},clear:function(t,e){var n,i=this.dom,r=this.ctx,o=i.width,a=i.height,s=(e=e||this.clearColor,this.motionBlur&&!t),l=this.lastFrameAlpha,u=this.dpr;(s&&(this.domBack||this.createBackBuffer(),this.ctxBack.globalCompositeOperation="copy",this.ctxBack.drawImage(i,0,0,o/u,a/u)),r.clearRect(0,0,o,a),e&&"transparent"!==e)&&(e.colorStops?(n=e.__canvasGradient||pp.getGradient(r,e,{x:0,y:0,width:o,height:a}),e.__canvasGradient=n):e.image&&(n=yp.prototype.getCanvasPattern.call(e,r)),r.save(),r.fillStyle=n||e,r.fillRect(0,0,o,a),r.restore());if(s){var c=this.domBack;r.save(),r.globalAlpha=l,r.drawImage(c,0,0,o,a),r.restore()}}};var xp="undefined"!=typeof e&&(e.requestAnimationFrame&&e.requestAnimationFrame.bind(e)||e.msRequestAnimationFrame&&e.msRequestAnimationFrame.bind(e)||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame)||function(t){setTimeout(t,16)},wp=new Fd(50),bp={},Sp=0,Mp=5e3,Ip=/\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,Ap="12px sans-serif",Tp={measureText:function(t,e){var n=c();return n.font=e||Ap,n.measureText(t)}},kp=Ap,Cp={left:1,right:1,center:1},Dp={top:1,bottom:1,middle:1},Pp=[["textShadowBlur","shadowBlur",0],["textShadowOffsetX","shadowOffsetX",0],["textShadowOffsetY","shadowOffsetY",0],["textShadowColor","shadowColor","transparent"]],Op=new _e,Lp=function(){};Lp.prototype={constructor:Lp,drawRectText:function(t,e){var n=this.style;e=n.textRect||e,this.__dirty&&nn(n,!0);var i=n.text;if(null!=i&&(i+=""),xn(i,n)){t.save();var r=this.transform;n.transformText?this.setTransform(t):r&&(Op.copy(e),Op.applyTransform(r),e=Op),on(this,t,i,n,e,fp),t.restore()}}},wn.prototype={constructor:wn,type:"displayable",__dirty:!0,invisible:!1,z:0,z2:0,zlevel:0,draggable:!1,dragging:!1,silent:!1,culling:!1,cursor:"pointer",rectHover:!1,progressive:!1,incremental:!1,globalScaleRatio:1,beforeBrush:function(){},afterBrush:function(){},brush:function(){},getBoundingRect:function(){},contain:function(t,e){return this.rectContain(t,e)},traverse:function(t,e){t.call(e,this)},rectContain:function(t,e){var n=this.transformCoordToLocal(t,e),i=this.getBoundingRect();return i.contain(n[0],n[1])},dirty:function(){this.__dirty=this.__dirtyText=!0,this._rect=null,this.__zr&&this.__zr.refresh()},animateStyle:function(t){return this.animate("style",t)},attrKV:function(t,e){"style"!==t?ep.prototype.attrKV.call(this,t,e):this.style.set(e)},setStyle:function(t,e){return this.style.set(t,e),this.dirty(!1),this},useStyle:function(t){return this.style=new pp(t,this),this.dirty(!1),this}},f(wn,ep),d(wn,Lp),bn.prototype={constructor:bn,type:"image",brush:function(t,e){var n=this.style,i=n.image;n.bind(t,this,e);var r=this._image=Ee(i,this._image,this,this.onload);if(r&&Re(r)){var o=n.x||0,a=n.y||0,s=n.width,l=n.height,u=r.width/r.height;if(null==s&&null!=l?s=l*u:null==l&&null!=s?l=s/u:null==s&&null==l&&(s=r.width,l=r.height),this.setTransform(t),n.sWidth&&n.sHeight){var c=n.sx||0,h=n.sy||0;t.drawImage(r,c,h,n.sWidth,n.sHeight,o,a,s,l)}else if(n.sx&&n.sy){c=n.sx,h=n.sy;var f=s-c,d=l-h;t.drawImage(r,c,h,f,d,o,a,s,l)}else t.drawImage(r,o,a,s,l);null!=n.text&&(this.restoreTransform(t),this.drawRectText(t,this.getBoundingRect()))}},getBoundingRect:function(){var t=this.style;return this._rect||(this._rect=new _e(t.x||0,t.y||0,t.width||0,t.height||0)),this._rect}},f(bn,wn);var Ep=1e5,Np=314159,Rp=.01,Bp=.001,zp=new _e(0,0,0,0),Fp=new _e(0,0,0,0),$p=function(t,e,n){this.type="canvas";var i=!t.nodeName||"CANVAS"===t.nodeName.toUpperCase();this._opts=n=l({},n||{}),this.dpr=n.devicePixelRatio||Kd,this._singleCanvas=i,this.root=t;var r=t.style;r&&(r["-webkit-tap-highlight-color"]="transparent",r["-webkit-user-select"]=r["user-select"]=r["-webkit-touch-callout"]="none",t.innerHTML=""),this.storage=e;var o=this._zlevelList=[],a=this._layers={};if(this._layerConfig={},this._needsManuallyCompositing=!1,i){var s=t.width,u=t.height;null!=n.width&&(s=n.width),null!=n.height&&(u=n.height),this.dpr=n.devicePixelRatio||1,t.width=s*this.dpr,t.height=u*this.dpr,this._width=s,this._height=u;var c=new _p(t,this,this.dpr);c.__builtin__=!0,c.initContext(),a[Np]=c,c.zlevel=Np,o.push(Np),this._domRoot=t}else{this._width=this._getSize(0),this._height=this._getSize(1);var h=this._domRoot=kn(this._width,this._height);t.appendChild(h)}this._hoverlayer=null,this._hoverElements=[]};$p.prototype={constructor:$p,getType:function(){return"canvas"},isSingleCanvas:function(){return this._singleCanvas},getViewportRoot:function(){return this._domRoot},getViewportRootOffset:function(){var t=this.getViewportRoot();return t?{offsetLeft:t.offsetLeft||0,offsetTop:t.offsetTop||0}:void 0},refresh:function(t){var e=this.storage.getDisplayList(!0),n=this._zlevelList;this._redrawId=Math.random(),this._paintList(e,t,this._redrawId);for(var i=0;i<n.length;i++){var r=n[i],o=this._layers[r];if(!o.__builtin__&&o.refresh){var a=0===i?this._backgroundColor:null;o.refresh(a)}}return this.refreshHover(),this},addHover:function(t,e){if(!t.__hoverMir){var n=new t.constructor({style:t.style,shape:t.shape,z:t.z,z2:t.z2,silent:t.silent});return n.__from=t,t.__hoverMir=n,e&&n.setStyle(e),this._hoverElements.push(n),n}},removeHover:function(t){var e=t.__hoverMir,n=this._hoverElements,i=h(n,e);i>=0&&n.splice(i,1),t.__hoverMir=null},clearHover:function(){for(var t=this._hoverElements,e=0;e<t.length;e++){var n=t[e].__from;n&&(n.__hoverMir=null)}t.length=0},refreshHover:function(){var t=this._hoverElements,e=t.length,n=this._hoverlayer;if(n&&n.clear(),e){Te(t,this.storage.displayableSortFunc),n||(n=this._hoverlayer=this.getLayer(Ep));var i={};n.ctx.save();for(var r=0;e>r;){var o=t[r],a=o.__from;a&&a.__zr?(r++,a.invisible||(o.transform=a.transform,o.invTransform=a.invTransform,o.__clipPaths=a.__clipPaths,this._doPaintEl(o,n,!0,i))):(t.splice(r,1),a.__hoverMir=null,e--)}n.ctx.restore()}},getHoverLayer:function(){return this.getLayer(Ep)},_paintList:function(t,e,n){if(this._redrawId===n){e=e||!1,this._updateLayerStatus(t);var i=this._doPaintList(t,e);if(this._needsManuallyCompositing&&this._compositeManually(),!i){var r=this;xp(function(){r._paintList(t,e,n)})}}},_compositeManually:function(){var t=this.getLayer(Np).ctx,e=this._domRoot.width,n=this._domRoot.height;t.clearRect(0,0,e,n),this.eachBuiltinLayer(function(i){i.virtual&&t.drawImage(i.dom,0,0,e,n)})},_doPaintList:function(t,e){for(var n=[],i=0;i<this._zlevelList.length;i++){var r=this._zlevelList[i],o=this._layers[r];o.__builtin__&&o!==this._hoverlayer&&(o.__dirty||e)&&n.push(o)}for(var a=!0,s=0;s<n.length;s++){o=n[s];var l=o.ctx,u={};l.save();var c=e?o.__startIndex:o.__drawIndex,h=!e&&o.incremental&&Date.now,f=h&&Date.now(),d=o.zlevel===this._zlevelList[0]?this._backgroundColor:null;if(o.__startIndex===o.__endIndex)o.clear(!1,d);else if(c===o.__startIndex){var p=t[c];p.incremental&&p.notClear&&!e||o.clear(!1,d)}-1===c&&(console.error("For some unknown reason. drawIndex is -1"," at components/echarts/echarts.min.js:6"),c=o.__startIndex);for(var v=c;v<o.__endIndex;v++){var m=t[v];if(this._doPaintEl(m,o,e,u),m.__dirty=m.__dirtyText=!1,h){var y=Date.now()-f;if(y>15)break}}o.__drawIndex=v,o.__drawIndex<o.__endIndex&&(a=!1),u.prevElClipPaths&&l.restore(),l.restore()}return qf.wxa&&g(this._layers,function(t){t&&t.ctx&&t.ctx.draw&&t.ctx.draw()}),a},_doPaintEl:function(t,e,n,i){var r=e.ctx,o=t.transform;if(!(!e.__dirty&&!n||t.invisible||0===t.style.opacity||o&&!o[0]&&!o[3]||t.culling&&In(t,this._width,this._height))){var a=t.__clipPaths;(!i.prevElClipPaths||An(a,i.prevElClipPaths))&&(i.prevElClipPaths&&(e.ctx.restore(),i.prevElClipPaths=null,i.prevEl=null),a&&(r.save(),Tn(a,r),i.prevElClipPaths=a)),t.beforeBrush&&t.beforeBrush(r),t.brush(r,i.prevEl||null),i.prevEl=t,t.afterBrush&&t.afterBrush(r)}},getLayer:function(t,e){this._singleCanvas&&!this._needsManuallyCompositing&&(t=Np);var n=this._layers[t];return n||(n=new _p("zr_"+t,this,this.dpr),n.zlevel=t,n.__builtin__=!0,this._layerConfig[t]&&a(n,this._layerConfig[t],!0),e&&(n.virtual=e),this.insertLayer(t,n),n.initContext()),n},insertLayer:function(t,e){var n=this._layers,i=this._zlevelList,r=i.length,o=null,a=-1,s=this._domRoot;if(n[t])Qd("ZLevel "+t+" has been used already");else if(Mn(e)){if(r>0&&t>i[0]){for(a=0;r-1>a&&!(i[a]<t&&i[a+1]>t);a++);o=n[i[a]]}if(i.splice(a+1,0,t),n[t]=e,!e.virtual)if(o){var l=o.dom;l.nextSibling?s.insertBefore(e.dom,l.nextSibling):s.appendChild(e.dom)}else s.firstChild?s.insertBefore(e.dom,s.firstChild):s.appendChild(e.dom)}else Qd("Layer of zlevel "+t+" is not valid")},eachLayer:function(t,e){var n,i,r=this._zlevelList;for(i=0;i<r.length;i++)n=r[i],t.call(e,this._layers[n],n)},eachBuiltinLayer:function(t,e){var n,i,r,o=this._zlevelList;for(r=0;r<o.length;r++)i=o[r],n=this._layers[i],n.__builtin__&&t.call(e,n,i)},eachOtherLayer:function(t,e){var n,i,r,o=this._zlevelList;for(r=0;r<o.length;r++)i=o[r],n=this._layers[i],n.__builtin__||t.call(e,n,i)},getLayers:function(){return this._layers},_updateLayerStatus:function(t){function e(t){r&&(r.__endIndex!==t&&(r.__dirty=!0),r.__endIndex=t)}if(this.eachBuiltinLayer(function(t){t.__dirty=t.__used=!1}),this._singleCanvas)for(var n=1;n<t.length;n++){var i=t[n];if(i.zlevel!==t[n-1].zlevel||i.incremental){this._needsManuallyCompositing=!0;break}}var r=null,o=0;for(n=0;n<t.length;n++){i=t[n];var a,s=i.zlevel;i.incremental?(a=this.getLayer(s+Bp,this._needsManuallyCompositing),a.incremental=!0,o=1):a=this.getLayer(s+(o>0?Rp:0),this._needsManuallyCompositing),a.__builtin__||Qd("ZLevel "+s+" has been used by unkown layer "+a.id),a!==r&&(a.__used=!0,a.__startIndex!==n&&(a.__dirty=!0),a.__startIndex=n,a.__drawIndex=a.incremental?-1:n,e(n),r=a),i.__dirty&&(a.__dirty=!0,a.incremental&&a.__drawIndex<0&&(a.__drawIndex=n))}e(n),this.eachBuiltinLayer(function(t){!t.__used&&t.getElementCount()>0&&(t.__dirty=!0,t.__startIndex=t.__endIndex=t.__drawIndex=0),t.__dirty&&t.__drawIndex<0&&(t.__drawIndex=t.__startIndex)})},clear:function(){return this.eachBuiltinLayer(this._clearLayer),this},_clearLayer:function(t){t.clear()},setBackgroundColor:function(t){this._backgroundColor=t},configLayer:function(t,e){if(e){var n=this._layerConfig;n[t]?a(n[t],e,!0):n[t]=e;for(var i=0;i<this._zlevelList.length;i++){var r=this._zlevelList[i];if(r===t||r===t+Rp){var o=this._layers[r];a(o,n[t],!0)}}}},delLayer:function(t){var e=this._layers,n=this._zlevelList,i=e[t];i&&(i.dom.parentNode.removeChild(i.dom),delete e[t],n.splice(h(n,t),1))},resize:function(t,e){if(this._domRoot.style){var n=this._domRoot;n.style.display="none";var i=this._opts;if(null!=t&&(i.width=t),null!=e&&(i.height=e),t=this._getSize(0),e=this._getSize(1),n.style.display="",this._width!==t||e!==this._height){for(var r in n.style.width=t+"px",n.style.height=e+"px",this._layers)this._layers.hasOwnProperty(r)&&this._layers[r].resize(t,e);g(this._progressiveLayers,function(n){n.resize(t,e)}),this.refresh(!0)}this._width=t,this._height=e}else{if(null==t||null==e)return;this._width=t,this._height=e,this.getLayer(Np).resize(t,e)}return this},clearLayer:function(t){var e=this._layers[t];e&&e.clear()},dispose:function(){this.root.innerHTML="",this.root=this.storage=this._domRoot=this._layers=null},getRenderedCanvas:function(t){if(t=t||{},this._singleCanvas&&!this._compositeManually)return this._layers[Np].dom;var e=new _p("image",this,t.pixelRatio||this.dpr);if(e.initContext(),e.clear(!1,t.backgroundColor||this._backgroundColor),t.pixelRatio<=this.dpr){this.refresh();var n=e.dom.width,i=e.dom.height,r=e.ctx;this.eachLayer(function(t){t.__builtin__?r.drawImage(t.dom,0,0,n,i):t.renderToCanvas&&(e.ctx.save(),t.renderToCanvas(e.ctx),e.ctx.restore())})}else for(var o={},a=this.storage.getDisplayList(!0),s=0;s<a.length;s++){var l=a[s];this._doPaintEl(l,e,!0,o)}return e.dom},getWidth:function(){return this._width},getHeight:function(){return this._height},_getSize:function(t){var e=this._opts,i=["width","height"][t],r=["clientWidth","clientHeight"][t],o=["paddingLeft","paddingTop"][t],a=["paddingRight","paddingBottom"][t];if(null!=e[i]&&"auto"!==e[i])return parseFloat(e[i]);var s=this.root,l=n.defaultView.getComputedStyle(s);return(s[r]||Sn(l[i])||Sn(s.style[i]))-(Sn(l[o])||0)-(Sn(l[a])||0)|0},pathToImage:function(t,e){e=e||this.dpr;var i=n.createElement("canvas"),r=i.getContext("2d"),o=t.getBoundingRect(),a=t.style,s=a.shadowBlur*e,l=a.shadowOffsetX*e,u=a.shadowOffsetY*e,c=a.hasStroke()?a.lineWidth:0,h=Math.max(c/2,-l+s),f=Math.max(c/2,l+s),d=Math.max(c/2,-u+s),p=Math.max(c/2,u+s),g=o.width+h+f,v=o.height+d+p;i.width=g*e,i.height=v*e,r.scale(e,e),r.clearRect(0,0,g,v),r.dpr=e;var m={position:t.position,rotation:t.rotation,scale:t.scale};t.position=[h-o.x,d-o.y],t.rotation=0,t.scale=[1,1],t.updateTransform(),t&&t.brush(r);var y=bn,_=new y({style:{x:0,y:0,image:i}});return null!=m.position&&(_.position=t.position=m.position),null!=m.rotation&&(_.rotation=t.rotation=m.rotation),null!=m.scale&&(_.scale=t.scale=m.scale),_}};var Vp=function(t){t=t||{},this.stage=t.stage||{},this.onframe=t.onframe||function(){},this._clips=[],this._running=!1,this._time,this._pausedTime,this._pauseStart,this._paused=!1,md.call(this)};Vp.prototype={constructor:Vp,addClip:function(t){this._clips.push(t)},addAnimator:function(t){t.animation=this;for(var e=t.getClips(),n=0;n<e.length;n++)this.addClip(e[n])},removeClip:function(t){var e=h(this._clips,t);e>=0&&this._clips.splice(e,1)},removeAnimator:function(t){for(var e=t.getClips(),n=0;n<e.length;n++)this.removeClip(e[n]);t.animation=null},_update:function(){for(var t=(new Date).getTime()-this._pausedTime,e=t-this._time,n=this._clips,i=n.length,r=[],o=[],a=0;i>a;a++){var s=n[a],l=s.step(t,e);l&&(r.push(l),o.push(s))}for(a=0;i>a;)n[a]._needsRemove?(n[a]=n[i-1],n.pop(),i--):a++;i=r.length;for(a=0;i>a;a++)o[a].fire(r[a]);this._time=t,this.onframe(e),this.trigger("frame",e),this.stage.update&&this.stage.update()},_startLoop:function(){function t(){e._running&&(xp(t),!e._paused&&e._update())}var e=this;this._running=!0,xp(t)},start:function(){this._time=(new Date).getTime(),this._pausedTime=0,this._startLoop()},stop:function(){this._running=!1},pause:function(){this._paused||(this._pauseStart=(new Date).getTime(),this._paused=!0)},resume:function(){this._paused&&(this._pausedTime+=(new Date).getTime()-this._pauseStart,this._paused=!1)},clear:function(){this._clips=[]},isFinished:function(){return!this._clips.length},animate:function(t,e){e=e||{};var n=new Yd(t,e.loop,e.getter,e.setter);return this.addAnimator(n),n}},d(Vp,md);var jp=300,Hp=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],Gp=["touchstart","touchend","touchmove"],Wp={pointerdown:1,pointerup:1,pointermove:1,pointerout:1},Up=v(Hp,function(t){var e=t.replace("mouse","pointer");return Wp[e]?e:t}),Xp={mousemove:function(t){t=mt(this.dom,t),this.trigger("mousemove",t)},mouseout:function(t){t=mt(this.dom,t);var e=t.toElement||t.relatedTarget;if(e!==this.dom)for(;e&&9!==e.nodeType;){if(e===this.dom)return;e=e.parentNode}this.trigger("mouseout",t)},touchstart:function(t){t=mt(this.dom,t),t.zrByTouch=!0,this._lastTouchMoment=new Date,this.handler.processGesture(this,t,"start"),Xp.mousemove.call(this,t),Xp.mousedown.call(this,t),Dn(this)},touchmove:function(t){t=mt(this.dom,t),t.zrByTouch=!0,this.handler.processGesture(this,t,"change"),Xp.mousemove.call(this,t),Dn(this)},touchend:function(t){t=mt(this.dom,t),t.zrByTouch=!0,this.handler.processGesture(this,t,"end"),Xp.mouseup.call(this,t),+new Date-this._lastTouchMoment<jp&&Xp.click.call(this,t),Dn(this)},pointerdown:function(t){Xp.mousedown.call(this,t)},pointermove:function(t){Pn(t)||Xp.mousemove.call(this,t)},pointerup:function(t){Xp.mouseup.call(this,t)},pointerout:function(t){Pn(t)||Xp.mouseout.call(this,t)}};g(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],function(t){Xp[t]=function(e){e=mt(this.dom,e),this.trigger(t,e)}});var Yp=Ln.prototype;Yp.dispose=function(){for(var t=Hp.concat(Gp),e=0;e<t.length;e++){var n=t[e];_t(this.dom,Cn(n),this._handlers[n])}},Yp.setCursor=function(t){this.dom.style&&(this.dom.style.cursor=t||"default")},d(Ln,md);var qp=!qf.canvasSupported,Zp={canvas:$p},Kp={},Jp="4.0.7",Qp=function(t,e,n){n=n||{},this.dom=e,this.id=t;var i=this,r=new lp,o=n.renderer;if(qp){if(!Zp.vml)throw new Error("You need to require 'zrender/vml/vml' to support IE8");o="vml"}else o&&Zp[o]||(o="canvas");var a=new Zp[o](e,r,n,t);this.storage=r,this.painter=a;var s=qf.node||qf.worker?null:new Ln(a.getViewportRoot());this.handler=new Id(r,a,s,a.root),this.animation=new Vp({stage:{update:x(this.flush,this)}}),this.animation.start(),this._needsRefresh;var l=r.delFromStorage,u=r.addToStorage;r.delFromStorage=function(t){l.call(r,t),t&&t.removeSelfFromZr(i)},r.addToStorage=function(t){u.call(r,t),t.addSelfToZr(i)}};Qp.prototype={constructor:Qp,getId:function(){return this.id},add:function(t){this.storage.addRoot(t),this._needsRefresh=!0},remove:function(t){this.storage.delRoot(t),this._needsRefresh=!0},configLayer:function(t,e){this.painter.configLayer&&this.painter.configLayer(t,e),this._needsRefresh=!0},setBackgroundColor:function(t){this.painter.setBackgroundColor&&this.painter.setBackgroundColor(t),this._needsRefresh=!0},refreshImmediately:function(){this._needsRefresh=!1,this.painter.refresh(),this._needsRefresh=!1},refresh:function(){this._needsRefresh=!0},flush:function(){var t;this._needsRefresh&&(t=!0,this.refreshImmediately()),this._needsRefreshHover&&(t=!0,this.refreshHoverImmediately()),t&&this.trigger("rendered")},addHover:function(t,e){if(this.painter.addHover){var n=this.painter.addHover(t,e);return this.refreshHover(),n}},removeHover:function(t){this.painter.removeHover&&(this.painter.removeHover(t),this.refreshHover())},clearHover:function(){this.painter.clearHover&&(this.painter.clearHover(),this.refreshHover())},refreshHover:function(){this._needsRefreshHover=!0},refreshHoverImmediately:function(){this._needsRefreshHover=!1,this.painter.refreshHover&&this.painter.refreshHover()},resize:function(t){t=t||{},this.painter.resize(t.width,t.height),this.handler.resize()},clearAnimation:function(){this.animation.clear()},getWidth:function(){return this.painter.getWidth()},getHeight:function(){return this.painter.getHeight()},pathToImage:function(t,e){return this.painter.pathToImage(t,e)},setCursorStyle:function(t){this.handler.setCursorStyle(t)},findHover:function(t,e){return this.handler.findHover(t,e)},on:function(t,e,n){this.handler.on(t,e,n)},off:function(t,e){this.handler.off(t,e)},trigger:function(t,e){this.handler.trigger(t,e)},clear:function(){this.storage.delRoot(),this.painter.clear()},dispose:function(){this.animation.stop(),this.clear(),this.storage.dispose(),this.painter.dispose(),this.handler.dispose(),this.animation=this.storage=this.painter=this.handler=null,zn(this.id)}};var tg=(Object.freeze||Object)({version:Jp,init:En,dispose:Nn,getInstance:Rn,registerPainter:Bn}),eg=g,ng=I,ig=b,rg="series\0",og=["fontStyle","fontWeight","fontSize","fontFamily","rich","tag","color","textBorderColor","textBorderWidth","width","height","lineHeight","align","verticalAlign","baseline","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY","textShadowColor","textShadowBlur","textShadowOffsetX","textShadowOffsetY","backgroundColor","borderColor","borderWidth","borderRadius","padding"],ag=0,sg=".",lg="___EC__COMPONENT__CONTAINER___",ug=0,cg=function(t){for(var e=0;e<t.length;e++)t[e][1]||(t[e][1]=t[e][0]);return function(e,n,i){for(var r={},o=0;o<t.length;o++){var a=t[o][1];if(!(n&&h(n,a)>=0||i&&h(i,a)<0)){var s=e.getShallow(a);null!=s&&(r[t[o][0]]=s)}}return r}},hg=cg([["lineWidth","width"],["stroke","color"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),fg={getLineStyle:function(t){var e=hg(this,t),n=this.getLineDash(e.lineWidth);return n&&(e.lineDash=n),e},getLineDash:function(t){null==t&&(t=1);var e=this.get("type"),n=Math.max(t,2),i=4*t;return"solid"===e||null==e?null:"dashed"===e?[i,i]:[n,n]}},dg=cg([["fill","color"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["opacity"],["shadowColor"]]),pg={getAreaStyle:function(t,e){return dg(this,t,e)}},gg=Math.pow,vg=Math.sqrt,mg=1e-8,yg=1e-4,_g=vg(3),xg=1/3,wg=H(),bg=H(),Sg=H(),Mg=Math.min,Ig=Math.max,Ag=Math.sin,Tg=Math.cos,kg=2*Math.PI,Cg=H(),Dg=H(),Pg=H(),Og=[],Lg=[],Eg={M:1,L:2,C:3,Q:4,A:5,Z:6,R:7},Ng=[],Rg=[],Bg=[],zg=[],Fg=Math.min,$g=Math.max,Vg=Math.cos,jg=Math.sin,Hg=Math.sqrt,Gg=Math.abs,Wg="undefined"!=typeof Float32Array,Ug=function(t){this._saveData=!t,this._saveData&&(this.data=[]),this._ctx=null};Ug.prototype={constructor:Ug,_xi:0,_yi:0,_x0:0,_y0:0,_ux:0,_uy:0,_len:0,_lineDash:null,_dashOffset:0,_dashIdx:0,_dashSum:0,setScale:function(t,e){this._ux=Gg(1/Kd/t)||0,this._uy=Gg(1/Kd/e)||0},getContext:function(){return this._ctx},beginPath:function(t){return this._ctx=t,t&&t.beginPath(),t&&(this.dpr=t.dpr),this._saveData&&(this._len=0),this._lineDash&&(this._lineDash=null,this._dashOffset=0),this},moveTo:function(t,e){return this.addData(Eg.M,t,e),this._ctx&&this._ctx.moveTo(t,e),this._x0=t,this._y0=e,this._xi=t,this._yi=e,this},lineTo:function(t,e){var n=Gg(t-this._xi)>this._ux||Gg(e-this._yi)>this._uy||this._len<5;return this.addData(Eg.L,t,e),this._ctx&&n&&(this._needsDash()?this._dashedLineTo(t,e):this._ctx.lineTo(t,e)),n&&(this._xi=t,this._yi=e),this},bezierCurveTo:function(t,e,n,i,r,o){return this.addData(Eg.C,t,e,n,i,r,o),this._ctx&&(this._needsDash()?this._dashedBezierTo(t,e,n,i,r,o):this._ctx.bezierCurveTo(t,e,n,i,r,o)),this._xi=r,this._yi=o,this},quadraticCurveTo:function(t,e,n,i){return this.addData(Eg.Q,t,e,n,i),this._ctx&&(this._needsDash()?this._dashedQuadraticTo(t,e,n,i):this._ctx.quadraticCurveTo(t,e,n,i)),this._xi=n,this._yi=i,this},arc:function(t,e,n,i,r,o){return this.addData(Eg.A,t,e,n,n,i,r-i,0,o?0:1),this._ctx&&this._ctx.arc(t,e,n,i,r,o),this._xi=Vg(r)*n+t,this._yi=jg(r)*n+e,this},arcTo:function(t,e,n,i,r){return this._ctx&&this._ctx.arcTo(t,e,n,i,r),this},rect:function(t,e,n,i){return this._ctx&&this._ctx.rect(t,e,n,i),this.addData(Eg.R,t,e,n,i),this},closePath:function(){this.addData(Eg.Z);var t=this._ctx,e=this._x0,n=this._y0;return t&&(this._needsDash()&&this._dashedLineTo(e,n),t.closePath()),this._xi=e,this._yi=n,this},fill:function(t){t&&t.fill(),this.toStatic()},stroke:function(t){t&&t.stroke(),this.toStatic()},setLineDash:function(t){if(t instanceof Array){this._lineDash=t,this._dashIdx=0;for(var e=0,n=0;n<t.length;n++)e+=t[n];this._dashSum=e}return this},setLineDashOffset:function(t){return this._dashOffset=t,this},len:function(){return this._len},setData:function(t){var e=t.length;this.data&&this.data.length===e||!Wg||(this.data=new Float32Array(e));for(var n=0;e>n;n++)this.data[n]=t[n];this._len=e},appendPath:function(t){t instanceof Array||(t=[t]);for(var e=t.length,n=0,i=this._len,r=0;e>r;r++)n+=t[r].len();Wg&&this.data instanceof Float32Array&&(this.data=new Float32Array(i+n));for(r=0;e>r;r++)for(var o=t[r].data,a=0;a<o.length;a++)this.data[i++]=o[a];this._len=i},addData:function(t){if(this._saveData){var e=this.data;this._len+arguments.length>e.length&&(this._expandData(),e=this.data);for(var n=0;n<arguments.length;n++)e[this._len++]=arguments[n];this._prevCmd=t}},_expandData:function(){if(!(this.data instanceof Array)){for(var t=[],e=0;e<this._len;e++)t[e]=this.data[e];this.data=t}},_needsDash:function(){return this._lineDash},_dashedLineTo:function(t,e){var n,i,r=this._dashSum,o=this._dashOffset,a=this._lineDash,s=this._ctx,l=this._xi,u=this._yi,c=t-l,h=e-u,f=Hg(c*c+h*h),d=l,p=u,g=a.length;for(c/=f,h/=f,0>o&&(o=r+o),o%=r,d-=o*c,p-=o*h;c>0&&t>=d||0>c&&d>=t||0===c&&(h>0&&e>=p||0>h&&p>=e);)i=this._dashIdx,n=a[i],d+=c*n,p+=h*n,this._dashIdx=(i+1)%g,c>0&&l>d||0>c&&d>l||h>0&&u>p||0>h&&p>u||s[i%2?"moveTo":"lineTo"](c>=0?Fg(d,t):$g(d,t),h>=0?Fg(p,e):$g(p,e));c=d-t,h=p-e,this._dashOffset=-Hg(c*c+h*h)},_dashedBezierTo:function(t,e,n,i,r,o){var a,s,l,u,c,h=this._dashSum,f=this._dashOffset,d=this._lineDash,p=this._ctx,g=this._xi,v=this._yi,m=ui,y=0,_=this._dashIdx,x=d.length,w=0;for(0>f&&(f=h+f),f%=h,a=0;1>a;a+=.1)s=m(g,t,n,r,a+.1)-m(g,t,n,r,a),l=m(v,e,i,o,a+.1)-m(v,e,i,o,a),y+=Hg(s*s+l*l);for(;x>_&&(w+=d[_],!(w>f));_++);for(a=(w-f)/y;1>=a;)u=m(g,t,n,r,a),c=m(v,e,i,o,a),_%2?p.moveTo(u,c):p.lineTo(u,c),a+=d[_]/y,_=(_+1)%x;_%2!==0&&p.lineTo(r,o),s=r-u,l=o-c,this._dashOffset=-Hg(s*s+l*l)},_dashedQuadraticTo:function(t,e,n,i){var r=n,o=i;n=(n+2*t)/3,i=(i+2*e)/3,t=(this._xi+2*t)/3,e=(this._yi+2*e)/3,this._dashedBezierTo(t,e,n,i,r,o)},toStatic:function(){var t=this.data;t instanceof Array&&(t.length=this._len,Wg&&(this.data=new Float32Array(t)))},getBoundingRect:function(){Ng[0]=Ng[1]=Bg[0]=Bg[1]=Number.MAX_VALUE,Rg[0]=Rg[1]=zg[0]=zg[1]=-Number.MAX_VALUE;for(var t=this.data,e=0,n=0,i=0,r=0,o=0;o<t.length;){var a=t[o++];switch(1===o&&(e=t[o],n=t[o+1],i=e,r=n),a){case Eg.M:i=t[o++],r=t[o++],e=i,n=r,Bg[0]=i,Bg[1]=r,zg[0]=i,zg[1]=r;break;case Eg.L:bi(e,n,t[o],t[o+1],Bg,zg),e=t[o++],n=t[o++];break;case Eg.C:Si(e,n,t[o++],t[o++],t[o++],t[o++],t[o],t[o+1],Bg,zg),e=t[o++],n=t[o++];break;case Eg.Q:Mi(e,n,t[o++],t[o++],t[o],t[o+1],Bg,zg),e=t[o++],n=t[o++];break;case Eg.A:var s=t[o++],l=t[o++],u=t[o++],c=t[o++],h=t[o++],f=t[o++]+h;o+=1;var d=1-t[o++];1===o&&(i=Vg(h)*u+s,r=jg(h)*c+l),Ii(s,l,u,c,h,f,d,Bg,zg),e=Vg(f)*u+s,n=jg(f)*c+l;break;case Eg.R:i=e=t[o++],r=n=t[o++];var p=t[o++],g=t[o++];bi(i,r,i+p,r+g,Bg,zg);break;case Eg.Z:e=i,n=r}lt(Ng,Ng,Bg),ut(Rg,Rg,zg)}return 0===o&&(Ng[0]=Ng[1]=Rg[0]=Rg[1]=0),new _e(Ng[0],Ng[1],Rg[0]-Ng[0],Rg[1]-Ng[1])},rebuildPath:function(t){for(var e,n,i,r,o,a,s=this.data,l=this._ux,u=this._uy,c=this._len,h=0;c>h;){var f=s[h++];switch(1===h&&(i=s[h],r=s[h+1],e=i,n=r),f){case Eg.M:e=i=s[h++],n=r=s[h++],t.moveTo(i,r);break;case Eg.L:o=s[h++],a=s[h++],(Gg(o-i)>l||Gg(a-r)>u||h===c-1)&&(t.lineTo(o,a),i=o,r=a);break;case Eg.C:t.bezierCurveTo(s[h++],s[h++],s[h++],s[h++],s[h++],s[h++]),i=s[h-2],r=s[h-1];break;case Eg.Q:t.quadraticCurveTo(s[h++],s[h++],s[h++],s[h++]),i=s[h-2],r=s[h-1];break;case Eg.A:var d=s[h++],p=s[h++],g=s[h++],v=s[h++],m=s[h++],y=s[h++],_=s[h++],x=s[h++],w=g>v?g:v,b=g>v?1:g/v,S=g>v?v/g:1,M=Math.abs(g-v)>.001,I=m+y;M?(t.translate(d,p),t.rotate(_),t.scale(b,S),t.arc(0,0,w,m,I,1-x),t.scale(1/b,1/S),t.rotate(-_),t.translate(-d,-p)):t.arc(d,p,w,m,I,1-x),1===h&&(e=Vg(m)*g+d,n=jg(m)*v+p),i=Vg(I)*g+d,r=jg(I)*v+p;break;case Eg.R:e=i=s[h],n=r=s[h+1],t.rect(s[h++],s[h++],s[h++],s[h++]);break;case Eg.Z:t.closePath(),i=e,r=n}}}},Ug.CMD=Eg;var Xg=2*Math.PI,Yg=2*Math.PI,qg=Ug.CMD,Zg=2*Math.PI,Kg=1e-4,Jg=[-1,-1,-1],Qg=[-1,-1],tv=yp.prototype.getCanvasPattern,ev=Math.abs,nv=new Ug(!0);$i.prototype={constructor:$i,type:"path",__dirtyPath:!0,strokeContainThreshold:5,subPixelOptimize:!1,brush:function(t,e){var n,i=this.style,r=this.path||nv,o=i.hasStroke(),a=i.hasFill(),s=i.fill,l=i.stroke,u=a&&!!s.colorStops,c=o&&!!l.colorStops,h=a&&!!s.image,f=o&&!!l.image;(i.bind(t,this,e),this.setTransform(t),this.__dirty)&&(u&&(n=n||this.getBoundingRect(),this._fillGradient=i.getGradient(t,s,n)),c&&(n=n||this.getBoundingRect(),this._strokeGradient=i.getGradient(t,l,n)));u?t.fillStyle=this._fillGradient:h&&(t.fillStyle=tv.call(s,t)),c?t.strokeStyle=this._strokeGradient:f&&(t.strokeStyle=tv.call(l,t));var d=i.lineDash,p=i.lineDashOffset,g=!!t.setLineDash,v=this.getGlobalScale();if(r.setScale(v[0],v[1]),this.__dirtyPath||d&&!g&&o?(r.beginPath(t),d&&!g&&(r.setLineDash(d),r.setLineDashOffset(p)),this.buildPath(r,this.shape,!1),this.path&&(this.__dirtyPath=!1)):(t.beginPath(),this.path.rebuildPath(t)),a)if(null!=i.fillOpacity){var m=t.globalAlpha;t.globalAlpha=i.fillOpacity*i.opacity,r.fill(t),t.globalAlpha=m}else r.fill(t);if(d&&g&&(t.setLineDash(d),t.lineDashOffset=p),o)if(null!=i.strokeOpacity){m=t.globalAlpha;t.globalAlpha=i.strokeOpacity*i.opacity,r.stroke(t),t.globalAlpha=m}else r.stroke(t);d&&g&&t.setLineDash([]),null!=i.text&&(this.restoreTransform(t),this.drawRectText(t,this.getBoundingRect()))},buildPath:function(){},createPathProxy:function(){this.path=new Ug},getBoundingRect:function(){var t=this._rect,e=this.style,n=!t;if(n){var i=this.path;i||(i=this.path=new Ug),this.__dirtyPath&&(i.beginPath(),this.buildPath(i,this.shape,!1)),t=i.getBoundingRect()}if(this._rect=t,e.hasStroke()){var r=this._rectWithStroke||(this._rectWithStroke=t.clone());if(this.__dirty||n){r.copy(t);var o=e.lineWidth,a=e.strokeNoScale?this.getLineScale():1;e.hasFill()||(o=Math.max(o,this.strokeContainThreshold||4)),a>1e-10&&(r.width+=o/a,r.height+=o/a,r.x-=o/a/2,r.y-=o/a/2)}return r}return t},contain:function(t,e){var n=this.transformCoordToLocal(t,e),i=this.getBoundingRect(),r=this.style;if(t=n[0],e=n[1],i.contain(t,e)){var o=this.path.data;if(r.hasStroke()){var a=r.lineWidth,s=r.strokeNoScale?this.getLineScale():1;if(s>1e-10&&(r.hasFill()||(a=Math.max(a,this.strokeContainThreshold)),Fi(o,a/s,t,e)))return!0}if(r.hasFill())return zi(o,t,e)}return!1},dirty:function(t){null==t&&(t=!0),t&&(this.__dirtyPath=t,this._rect=null),this.__dirty=this.__dirtyText=!0,this.__zr&&this.__zr.refresh(),this.__clipTarget&&this.__clipTarget.dirty()},animateShape:function(t){return this.animate("shape",t)},attrKV:function(t,e){"shape"===t?(this.setShape(e),this.__dirtyPath=!0,this._rect=null):wn.prototype.attrKV.call(this,t,e)},setShape:function(t,e){var n=this.shape;if(n){if(I(t))for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);else n[t]=e;this.dirty(!0)}return this},getLineScale:function(){var t=this.transform;return t&&ev(t[0]-1)>1e-10&&ev(t[3]-1)>1e-10?Math.sqrt(ev(t[0]*t[3]-t[2]*t[1])):1}},$i.extend=function(t){var e=function(e){$i.call(this,e),t.style&&this.style.extendFrom(t.style,!1);var n=t.shape;if(n){this.shape=this.shape||{};var i=this.shape;for(var r in n)!i.hasOwnProperty(r)&&n.hasOwnProperty(r)&&(i[r]=n[r])}t.init&&t.init.call(this,e)};for(var n in f(e,$i),t)"style"!==n&&"shape"!==n&&(e.prototype[n]=t[n]);return e},f($i,wn);var iv=Ug.CMD,rv=[[],[],[]],ov=Math.sqrt,av=Math.atan2,sv=function(t,e){var n,i,r,o,a,s=t.data,l=iv.M,u=iv.C,c=iv.L,h=iv.R,f=iv.A,d=iv.Q;for(r=0,o=0;r<s.length;){switch(n=s[r++],o=r,i=0,n){case l:i=1;break;case c:i=1;break;case u:i=3;break;case d:i=2;break;case f:var p=e[4],g=e[5],v=ov(e[0]*e[0]+e[1]*e[1]),m=ov(e[2]*e[2]+e[3]*e[3]),y=av(-e[1]/m,e[0]/v);s[r]*=v,s[r++]+=p,s[r]*=m,s[r++]+=g,s[r++]*=v,s[r++]*=m,s[r++]+=y,s[r++]+=y,r+=2,o=r;break;case h:_[0]=s[r++],_[1]=s[r++],st(_,_,e),s[o++]=_[0],s[o++]=_[1],_[0]+=s[r++],_[1]+=s[r++],st(_,_,e),s[o++]=_[0],s[o++]=_[1]}for(a=0;i>a;a++){var _=rv[a];_[0]=s[r++],_[1]=s[r++],st(_,_,e),s[o++]=_[0],s[o++]=_[1]}}},lv=Math.sqrt,uv=Math.sin,cv=Math.cos,hv=Math.PI,fv=function(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])},dv=function(t,e){return(t[0]*e[0]+t[1]*e[1])/(fv(t)*fv(e))},pv=function(t,e){return(t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(dv(t,e))},gv=/([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi,vv=/-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g,mv=function(t){wn.call(this,t)};mv.prototype={constructor:mv,type:"text",brush:function(t,e){var n=this.style;this.__dirty&&nn(n,!0),n.fill=n.stroke=n.shadowBlur=n.shadowColor=n.shadowOffsetX=n.shadowOffsetY=null;var i=n.text;return null!=i&&(i+=""),xn(i,n)?(this.setTransform(t),on(this,t,i,n,null,e),void this.restoreTransform(t)):void(t.__attrCachedBy=hp.NONE)},getBoundingRect:function(){var t=this.style;if(this.__dirty&&nn(t,!0),!this._rect){var e=t.text;null!=e?e+="":e="";var n=Fe(t.text+"",t.font,t.textAlign,t.textVerticalAlign,t.textPadding,t.textLineHeight,t.rich);if(n.x+=t.x||0,n.y+=t.y||0,vn(t.textStroke,t.textStrokeWidth)){var i=t.textStrokeWidth;n.x-=i/2,n.y-=i/2,n.width+=i,n.height+=i}this._rect=n}return this._rect}},f(mv,wn);var yv=$i.extend({type:"circle",shape:{cx:0,cy:0,r:0},buildPath:function(t,e,n){n&&t.moveTo(e.cx+e.r,e.cy),t.arc(e.cx,e.cy,e.r,0,2*Math.PI,!0)}}),_v=[["shadowBlur",0],["shadowColor","#000"],["shadowOffsetX",0],["shadowOffsetY",0]],xv=function(t){return qf.browser.ie&&qf.browser.version>=11?function(){var e,n=this.__clipPaths,i=this.style;if(n)for(var r=0;r<n.length;r++){var o=n[r],a=o&&o.shape,s=o&&o.type;if(a&&("sector"===s&&a.startAngle===a.endAngle||"rect"===s&&(!a.width||!a.height))){for(var l=0;l<_v.length;l++)_v[l][2]=i[_v[l][0]],i[_v[l][0]]=_v[l][1];e=!0;break}}if(t.apply(this,arguments),e)for(l=0;l<_v.length;l++)i[_v[l][0]]=_v[l][2]}:t},wv=$i.extend({type:"sector",shape:{cx:0,cy:0,r0:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},brush:xv($i.prototype.brush),buildPath:function(t,e){var n=e.cx,i=e.cy,r=Math.max(e.r0||0,0),o=Math.max(e.r,0),a=e.startAngle,s=e.endAngle,l=e.clockwise,u=Math.cos(a),c=Math.sin(a);t.moveTo(u*r+n,c*r+i),t.lineTo(u*o+n,c*o+i),t.arc(n,i,o,a,s,!l),t.lineTo(Math.cos(s)*r+n,Math.sin(s)*r+i),0!==r&&t.arc(n,i,r,s,a,l),t.closePath()}}),bv=$i.extend({type:"ring",shape:{cx:0,cy:0,r:0,r0:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=2*Math.PI;t.moveTo(n+e.r,i),t.arc(n,i,e.r,0,r,!1),t.moveTo(n+e.r0,i),t.arc(n,i,e.r0,0,r,!0)}}),Sv=function(t,e){for(var n=t.length,i=[],r=0,o=1;n>o;o++)r+=it(t[o-1],t[o]);var a=r/2;a=n>a?n:a;for(o=0;a>o;o++){var s,l,u,c=o/(a-1)*(e?n:n-1),h=Math.floor(c),f=c-h,d=t[h%n];e?(s=t[(h-1+n)%n],l=t[(h+1)%n],u=t[(h+2)%n]):(s=t[0===h?h:h-1],l=t[h>n-2?n-1:h+1],u=t[h>n-3?n-1:h+2]);var p=f*f,g=f*p;i.push([Xi(s[0],d[0],l[0],u[0],f,p,g),Xi(s[1],d[1],l[1],u[1],f,p,g)])}return i},Mv=function(t,e,n,i){var r,o,a,s,l=[],u=[],c=[],h=[];if(i){a=[1/0,1/0],s=[-1/0,-1/0];for(var f=0,d=t.length;d>f;f++)lt(a,a,t[f]),ut(s,s,t[f]);lt(a,a,i[0]),ut(s,s,i[1])}for(f=0,d=t.length;d>f;f++){var p=t[f];if(n)r=t[f?f-1:d-1],o=t[(f+1)%d];else{if(0===f||f===d-1){l.push(W(t[f]));continue}r=t[f-1],o=t[f+1]}q(u,o,r),et(u,u,e);var g=it(p,r),v=it(p,o),m=g+v;0!==m&&(g/=m,v/=m),et(c,u,-g),et(h,u,v);var y=X([],p,c),_=X([],p,h);i&&(ut(y,y,a),lt(y,y,s),ut(_,_,a),lt(_,_,s)),l.push(y),l.push(_)}return n&&l.push(l.shift()),l},Iv=$i.extend({type:"polygon",shape:{points:null,smooth:!1,smoothConstraint:null},buildPath:function(t,e){Yi(t,e,!0)}}),Av=$i.extend({type:"polyline",shape:{points:null,smooth:!1,smoothConstraint:null},style:{stroke:"#000",fill:null},buildPath:function(t,e){Yi(t,e,!1)}}),Tv=Math.round,kv={},Cv=$i.extend({type:"rect",shape:{r:0,x:0,y:0,width:0,height:0},buildPath:function(t,e){var n,i,r,o;this.subPixelOptimize?(Zi(kv,e,this.style),n=kv.x,i=kv.y,r=kv.width,o=kv.height,kv.r=e.r,e=kv):(n=e.x,i=e.y,r=e.width,o=e.height),e.r?en(t,e):t.rect(n,i,r,o),t.closePath()}}),Dv={},Pv=$i.extend({type:"line",shape:{x1:0,y1:0,x2:0,y2:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n,i,r,o;this.subPixelOptimize?(qi(Dv,e,this.style),n=Dv.x1,i=Dv.y1,r=Dv.x2,o=Dv.y2):(n=e.x1,i=e.y1,r=e.x2,o=e.y2);var a=e.percent;0!==a&&(t.moveTo(n,i),1>a&&(r=n*(1-a)+r*a,o=i*(1-a)+o*a),t.lineTo(r,o))},pointAt:function(t){var e=this.shape;return[e.x1*(1-t)+e.x2*t,e.y1*(1-t)+e.y2*t]}}),Ov=[],Lv=$i.extend({type:"bezier-curve",shape:{x1:0,y1:0,x2:0,y2:0,cpx1:0,cpy1:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.x1,i=e.y1,r=e.x2,o=e.y2,a=e.cpx1,s=e.cpy1,l=e.cpx2,u=e.cpy2,c=e.percent;0!==c&&(t.moveTo(n,i),null==l||null==u?(1>c&&(_i(n,a,r,c,Ov),a=Ov[1],r=Ov[2],_i(i,s,o,c,Ov),s=Ov[1],o=Ov[2]),t.quadraticCurveTo(a,s,r,o)):(1>c&&(di(n,a,l,r,c,Ov),a=Ov[1],l=Ov[2],r=Ov[3],di(i,s,u,o,c,Ov),s=Ov[1],u=Ov[2],o=Ov[3]),t.bezierCurveTo(a,s,l,u,r,o)))},pointAt:function(t){return Ji(this.shape,t,!1)},tangentAt:function(t){var e=Ji(this.shape,t,!0);return nt(e,e)}}),Ev=$i.extend({type:"arc",shape:{cx:0,cy:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.cx,i=e.cy,r=Math.max(e.r,0),o=e.startAngle,a=e.endAngle,s=e.clockwise,l=Math.cos(o),u=Math.sin(o);t.moveTo(l*r+n,u*r+i),t.arc(n,i,r,o,a,!s)}}),Nv=$i.extend({type:"compound",shape:{paths:null},_updatePathDirty:function(){for(var t=this.__dirtyPath,e=this.shape.paths,n=0;n<e.length;n++)t=t||e[n].__dirtyPath;this.__dirtyPath=t,this.__dirty=this.__dirty||t},beforeBrush:function(){this._updatePathDirty();for(var t=this.shape.paths||[],e=this.getGlobalScale(),n=0;n<t.length;n++)t[n].path||t[n].createPathProxy(),t[n].path.setScale(e[0],e[1])},buildPath:function(t,e){for(var n=e.paths||[],i=0;i<n.length;i++)n[i].buildPath(t,n[i].shape,!0)},afterBrush:function(){for(var t=this.shape.paths||[],e=0;e<t.length;e++)t[e].__dirtyPath=!1},getBoundingRect:function(){return this._updatePathDirty(),$i.prototype.getBoundingRect.call(this)}}),Rv=function(t){this.colorStops=t||[]};Rv.prototype={constructor:Rv,addColorStop:function(t,e){this.colorStops.push({offset:t,color:e})}};var Bv=function(t,e,n,i,r,o){this.x=null==t?0:t,this.y=null==e?0:e,this.x2=null==n?1:n,this.y2=null==i?0:i,this.type="linear",this.global=o||!1,Rv.call(this,r)};Bv.prototype={constructor:Bv},f(Bv,Rv);var zv=function(t,e,n,i,r){this.x=null==t?.5:t,this.y=null==e?.5:e,this.r=null==n?.5:n,this.type="radial",this.global=r||!1,Rv.call(this,i)};zv.prototype={constructor:zv},f(zv,Rv),Qi.prototype.incremental=!0,Qi.prototype.clearDisplaybles=function(){this._displayables=[],this._temporaryDisplayables=[],this._cursor=0,this.dirty(),this.notClear=!1},Qi.prototype.addDisplayable=function(t,e){e?this._temporaryDisplayables.push(t):this._displayables.push(t),this.dirty()},Qi.prototype.addDisplayables=function(t,e){e=e||!1;for(var n=0;n<t.length;n++)this.addDisplayable(t[n],e)},Qi.prototype.eachPendingDisplayable=function(t){for(var e=this._cursor;e<this._displayables.length;e++)t&&t(this._displayables[e]);for(e=0;e<this._temporaryDisplayables.length;e++)t&&t(this._temporaryDisplayables[e])},Qi.prototype.update=function(){this.updateTransform();for(var t=this._cursor;t<this._displayables.length;t++){var e=this._displayables[t];e.parent=this,e.update(),e.parent=null}for(t=0;t<this._temporaryDisplayables.length;t++){e=this._temporaryDisplayables[t];e.parent=this,e.update(),e.parent=null}},Qi.prototype.brush=function(t){for(var e=this._cursor;e<this._displayables.length;e++){var n=this._displayables[e];n.beforeBrush&&n.beforeBrush(t),n.brush(t,e===this._cursor?null:this._displayables[e-1]),n.afterBrush&&n.afterBrush(t)}this._cursor=e;for(e=0;e<this._temporaryDisplayables.length;e++){n=this._temporaryDisplayables[e];n.beforeBrush&&n.beforeBrush(t),n.brush(t,0===e?null:this._temporaryDisplayables[e-1]),n.afterBrush&&n.afterBrush(t)}this._temporaryDisplayables=[],this.notClear=!0};var Fv=[];Qi.prototype.getBoundingRect=function(){if(!this._rect){for(var t=new _e(1/0,1/0,-1/0,-1/0),e=0;e<this._displayables.length;e++){var n=this._displayables[e],i=n.getBoundingRect().clone();n.needLocalTransform()&&i.applyTransform(n.getLocalTransform(Fv)),t.union(i)}this._rect=t}return this._rect},Qi.prototype.contain=function(t,e){var n=this.transformCoordToLocal(t,e),i=this.getBoundingRect();if(i.contain(n[0],n[1]))for(var r=0;r<this._displayables.length;r++){var o=this._displayables[r];if(o.contain(t,e))return!0}return!1},f(Qi,wn);var $v=Math.round,Vv=Math.max,jv=Math.min,Hv={},Gv=1,Wv=Ui,Uv=$(),Xv=0,Yv=(Object.freeze||Object)({Z2_EMPHASIS_LIFT:Gv,extendShape:tr,extendPath:er,makePath:nr,makeImage:ir,mergePath:Wv,resizePath:or,subPixelOptimizeLine:ar,subPixelOptimizeRect:sr,subPixelOptimize:lr,setElementHoverStyle:vr,isInEmphasis:mr,setHoverStyle:br,setAsHoverStyleTrigger:Sr,setLabelStyle:Mr,setTextStyle:Ir,setText:Ar,getFont:Lr,updateProps:Nr,initProps:Rr,getTransform:Br,applyTransform:zr,transformDirection:Fr,groupTransition:$r,clipPointsByRect:Vr,clipRectByRect:jr,createIcon:Hr,Group:op,Image:bn,Text:mv,Circle:yv,Sector:wv,Ring:bv,Polygon:Iv,Polyline:Av,Rect:Cv,Line:Pv,BezierCurve:Lv,Arc:Ev,IncrementalDisplayable:Qi,CompoundPath:Nv,LinearGradient:Bv,RadialGradient:zv,BoundingRect:_e}),qv=["textStyle","color"],Zv={getTextColor:function(t){var e=this.ecModel;return this.getShallow("color")||(!t&&e?e.get(qv):null)},getFont:function(){return Lr({fontStyle:this.getShallow("fontStyle"),fontWeight:this.getShallow("fontWeight"),fontSize:this.getShallow("fontSize"),fontFamily:this.getShallow("fontFamily")},this.ecModel)},getTextRect:function(t){return Fe(t,this.getFont(),this.getShallow("align"),this.getShallow("verticalAlign")||this.getShallow("baseline"),this.getShallow("padding"),this.getShallow("lineHeight"),this.getShallow("rich"),this.getShallow("truncateText"))}},Kv=cg([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"],["textPosition"],["textAlign"]]),Jv={getItemStyle:function(t,e){var n=Kv(this,t,e),i=this.getBorderLineDash();return i&&(n.lineDash=i),n},getBorderLineDash:function(){var t=this.get("borderType");return"solid"===t||null==t?null:"dashed"===t?[5,5]:[1,1]}},Qv=d,tm=Yn();Gr.prototype={constructor:Gr,init:null,mergeOption:function(t){a(this.option,t,!0)},get:function(t,e){return null==t?this.option:Wr(this.option,this.parsePath(t),!e&&Ur(this,t))},getShallow:function(t,e){var n=this.option,i=null==n?n:n[t],r=!e&&Ur(this,t);return null==i&&r&&(i=r.getShallow(t)),i},getModel:function(t,e){var n,i=null==t?this.option:Wr(this.option,t=this.parsePath(t));return e=e||(n=Ur(this,t))&&n.getModel(t),new Gr(i,e,this.ecModel)},isEmpty:function(){return null==this.option},restoreData:function(){},clone:function(){var t=this.constructor;return new t(o(this.option))},setReadOnly:function(){},parsePath:function(t){return"string"==typeof t&&(t=t.split(".")),t},customizeGetParent:function(t){tm(this).getParent=t},isAnimationEnabled:function(){if(!qf.node){if(null!=this.option.animation)return!!this.option.animation;if(this.parentModel)return this.parentModel.isAnimationEnabled()}}},ni(Gr),ii(Gr),Qv(Gr,fg),Qv(Gr,pg),Qv(Gr,Zv),Qv(Gr,Jv);var em=0,nm=1e-4,im=9007199254740991,rm=/^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,om=(Object.freeze||Object)({linearMap:Kr,parsePercent:Jr,round:Qr,asc:to,getPrecision:eo,getPrecisionSafe:no,getPixelPrecision:io,getPercentWithPrecision:ro,MAX_SAFE_INTEGER:im,remRadian:oo,isRadianAroundZero:ao,parseDate:so,quantity:lo,nice:co,quantile:ho,reformIntervals:fo,isNumeric:po}),am=E,sm=/([&<>"'])/g,lm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},um=["a","b","c","d","e","f","g"],cm=function(t,e){return"{"+t+(null==e?"":e)+"}"},hm=We,fm=(Object.freeze||Object)({addCommas:go,toCamelCase:vo,normalizeCssArray:am,encodeHTML:mo,formatTpl:yo,formatTplSimple:_o,getTooltipMarker:xo,formatTime:bo,capitalFirst:So,truncateText:hm,getTextBoundingRect:Mo,getTextRect:Io}),dm=g,pm=["left","right","top","bottom","width","height"],gm=[["width","left","right"],["height","top","bottom"]],vm=Ao,mm=(w(Ao,"vertical"),w(Ao,"horizontal"),{getBoxLayoutParams:function(){return{left:this.get("left"),top:this.get("top"),right:this.get("right"),bottom:this.get("bottom"),width:this.get("width"),height:this.get("height")}}}),ym=Yn(),_m=Gr.extend({type:"component",id:"",name:"",mainType:"",subType:"",componentIndex:0,defaultOption:null,ecModel:null,dependentModels:[],uid:null,layoutMode:null,$constructor:function(t,e,n,i){Gr.call(this,t,e,n,i),this.uid=Xr("ec_cpt_model")},init:function(t,e,n){this.mergeDefaultAndTheme(t,n)},mergeDefaultAndTheme:function(t,e){var n=this.layoutMode,i=n?Co(t):{},r=e.getTheme();a(t,r.get(this.mainType)),a(t,this.getDefaultOption()),n&&ko(t,i,n)},mergeOption:function(t){a(this.option,t,!0);var e=this.layoutMode;e&&ko(this.option,t,e)},optionUpdated:function(){},getDefaultOption:function(){var t=ym(this);if(!t.defaultOption){for(var e=[],n=this.constructor;n;){var i=n.prototype.defaultOption;i&&e.push(i),n=n.superClass}for(var r={},o=e.length-1;o>=0;o--)r=a(r,e[o],!0);t.defaultOption=r}return t.defaultOption},getReferringComponents:function(t){return this.ecModel.queryComponents({mainType:t,index:this.get(t+"Index",!0),id:this.get(t+"Id",!0)})}});ai(_m,{registerWhenExtend:!0}),Yr(_m),qr(_m,Po),d(_m,mm);var xm="";"undefined"!=typeof navigator&&(xm=navigator.platform||"");var wm={color:["#c23531","#2f4554","#61a0a8","#d48265","#91c7ae","#749f83","#ca8622","#bda29a","#6e7074","#546570","#c4ccd3"],gradientColor:["#f6efa6","#d88273","#bf444c"],textStyle:{fontFamily:xm.match(/^Win/)?"Microsoft YaHei":"sans-serif",fontSize:12,fontStyle:"normal",fontWeight:"normal"},blendMode:null,animation:"auto",animationDuration:1e3,animationDurationUpdate:300,animationEasing:"exponentialOut",animationEasingUpdate:"cubicOut",animationThreshold:2e3,progressiveThreshold:3e3,progressive:400,hoverLayerThreshold:3e3,useUTC:!1},bm=Yn(),Sm={clearColorPalette:function(){bm(this).colorIdx=0,bm(this).colorNameMap={}},getColorFromPalette:function(t,e,n){e=e||this;var i=bm(e),r=i.colorIdx||0,o=i.colorNameMap=i.colorNameMap||{};if(o.hasOwnProperty(t))return o[t];var a=Fn(this.get("color",!0)),s=this.get("colorLayer",!0),l=null!=n&&s?Oo(s,n):a;if(l=l||a,l&&l.length){var u=l[r];return t&&(o[t]=u),i.colorIdx=(r+1)%l.length,u}}},Mm={cartesian2d:function(t,e,n,i){var r=t.getReferringComponents("xAxis")[0],o=t.getReferringComponents("yAxis")[0];e.coordSysDims=["x","y"],n.set("x",r),n.set("y",o),Eo(r)&&(i.set("x",r),e.firstCategoryDimIndex=0),Eo(o)&&(i.set("y",o),e.firstCategoryDimIndex=1)},singleAxis:function(t,e,n,i){var r=t.getReferringComponents("singleAxis")[0];e.coordSysDims=["single"],n.set("single",r),Eo(r)&&(i.set("single",r),e.firstCategoryDimIndex=0)},polar:function(t,e,n,i){var r=t.getReferringComponents("polar")[0],o=r.findAxisModel("radiusAxis"),a=r.findAxisModel("angleAxis");e.coordSysDims=["radius","angle"],n.set("radius",o),n.set("angle",a),Eo(o)&&(i.set("radius",o),e.firstCategoryDimIndex=0),Eo(a)&&(i.set("angle",a),e.firstCategoryDimIndex=1)},geo:function(t,e){e.coordSysDims=["lng","lat"]},parallel:function(t,e,n,i){var r=t.ecModel,o=r.getComponent("parallel",t.get("parallelIndex")),a=e.coordSysDims=o.dimensions.slice();g(o.parallelAxisIndex,function(t,o){var s=r.getComponent("parallelAxis",t),l=a[o];n.set(l,s),Eo(s)&&null==e.firstCategoryDimIndex&&(i.set(l,s),e.firstCategoryDimIndex=o)})}},Im="original",Am="arrayRows",Tm="objectRows",km="keyedColumns",Cm="unknown",Dm="typedArray",Pm="column",Om="row";No.seriesDataToSource=function(t){return new No({data:t,sourceFormat:T(t)?Dm:Im,fromDataset:!1})},ii(No);var Lm=Yn(),Em="\0_ec_inner",Nm=Gr.extend({init:function(t,e,n,i){n=n||{},this.option=null,this._theme=new Gr(n),this._optionManager=i},setOption:function(t,e){N(!(Em in t),"please use chart.getOption()"),this._optionManager.setOption(t,e),this.resetOption(null)},resetOption:function(t){var e=!1,n=this._optionManager;if(!t||"recreate"===t){var i=n.mountOption("recreate"===t);this.option&&"recreate"!==t?(this.restoreData(),this.mergeOption(i)):Zo.call(this,i),e=!0}if(("timeline"===t||"media"===t)&&this.restoreData(),!t||"recreate"===t||"timeline"===t){var r=n.getTimelineOption(this);r&&(this.mergeOption(r),e=!0)}if(!t||"recreate"===t||"media"===t){var o=n.getMediaOption(this,this._api);o.length&&g(o,function(t){this.mergeOption(t,e=!0)},this)}return e},mergeOption:function(t){function e(e,r){var o=Fn(t[e]),a=Hn(i.get(e),o);Gn(a),g(a,function(t){var n=t.option;I(n)&&(t.keyInfo.mainType=e,t.keyInfo.subType=Jo(e,n,t.exist))});var s=Ko(i,r);n[e]=[],i.set(e,[]),g(a,function(t,r){var o=t.exist,a=t.option;if(N(I(a)||o,"Empty component definition"),a){var u=_m.getClass(e,t.keyInfo.subType,!0);if(o&&o instanceof u)o.name=t.keyInfo.name,o.mergeOption(a,this),o.optionUpdated(a,!1);else{var c=l({dependentModels:s,componentIndex:r},t.keyInfo);o=new u(a,this,this,c),l(o,c),o.init(a,this,this,c),o.optionUpdated(null,!0)}}else o.mergeOption({},this),o.optionUpdated({},!1);i.get(e)[r]=o,n[e][r]=o.option},this),"series"===e&&Qo(this,i.get("series"))}var n=this.option,i=this._componentsMap,r=[];zo(this),g(t,function(t,e){null!=t&&(_m.hasClass(e)?e&&r.push(e):n[e]=null==n[e]?o(t):a(n[e],t,!0))}),_m.topologicalTravel(r,_m.getAllClassMainTypes(),e,this),this._seriesIndicesMap=$(this._seriesIndices=this._seriesIndices||[])},getOption:function(){var t=o(this.option);return g(t,function(e,n){if(_m.hasClass(n)){e=Fn(e);for(var i=e.length-1;i>=0;i--)Un(e[i])&&e.splice(i,1);t[n]=e}}),delete t[Em],t},getTheme:function(){return this._theme},getComponent:function(t,e){var n=this._componentsMap.get(t);return n?n[e||0]:void 0},queryComponents:function(t){var e=t.mainType;if(!e)return[];var n,i=t.index,r=t.id,o=t.name,a=this._componentsMap.get(e);if(!a||!a.length)return[];if(null!=i)b(i)||(i=[i]),n=y(v(i,function(t){return a[t]}),function(t){return!!t});else if(null!=r){var s=b(r);n=y(a,function(t){return s&&h(r,t.id)>=0||!s&&t.id===r})}else if(null!=o){var l=b(o);n=y(a,function(t){return l&&h(o,t.name)>=0||!l&&t.name===o})}else n=a.slice();return ta(n,t)},findComponents:function(t){function e(t){var e=r+"Index",n=r+"Id",i=r+"Name";return!t||null==t[e]&&null==t[n]&&null==t[i]?null:{mainType:r,index:t[e],id:t[n],name:t[i]}}function n(e){return t.filter?y(e,t.filter):e}var i=t.query,r=t.mainType,o=e(i),a=o?this.queryComponents(o):this._componentsMap.get(r);return n(ta(a,t))},eachComponent:function(t,e,n){var i=this._componentsMap;if("function"==typeof t)n=e,e=t,i.each(function(t,i){g(t,function(t,r){e.call(n,i,t,r)})});else if(M(t))g(i.get(t),e,n);else if(I(t)){var r=this.findComponents(t);g(r,e,n)}},getSeriesByName:function(t){var e=this._componentsMap.get("series");return y(e,function(e){return e.name===t})},getSeriesByIndex:function(t){return this._componentsMap.get("series")[t]},getSeriesByType:function(t){var e=this._componentsMap.get("series");return y(e,function(e){return e.subType===t})},getSeries:function(){return this._componentsMap.get("series").slice()},getSeriesCount:function(){return this._componentsMap.get("series").length},eachSeries:function(t,e){g(this._seriesIndices,function(n){var i=this._componentsMap.get("series")[n];t.call(e,i,n)},this)},eachRawSeries:function(t,e){g(this._componentsMap.get("series"),t,e)},eachSeriesByType:function(t,e,n){g(this._seriesIndices,function(i){var r=this._componentsMap.get("series")[i];r.subType===t&&e.call(n,r,i)},this)},eachRawSeriesByType:function(t,e,n){return g(this.getSeriesByType(t),e,n)},isSeriesFiltered:function(t){return null==this._seriesIndicesMap.get(t.componentIndex)},getCurrentSeriesIndices:function(){return(this._seriesIndices||[]).slice()},filterSeries:function(t,e){var n=y(this._componentsMap.get("series"),t,e);Qo(this,n)},restoreData:function(t){var e=this._componentsMap;Qo(this,e.get("series"));var n=[];e.each(function(t,e){n.push(e)}),_m.topologicalTravel(n,_m.getAllClassMainTypes(),function(n){g(e.get(n),function(e){("series"!==n||!Yo(e,t))&&e.restoreData()})})}});d(Nm,Sm);var Rm=["getDom","getZr","getWidth","getHeight","getDevicePixelRatio","dispatchAction","isDisposed","on","off","getDataURL","getConnectedDataURL","getModel","getOption","getViewOfComponentModel","getViewOfSeriesModel"],Bm={};na.prototype={constructor:na,create:function(t,e){var n=[];g(Bm,function(i){var r=i.create(t,e);n=n.concat(r||[])}),this._coordinateSystems=n},update:function(t,e){g(this._coordinateSystems,function(n){n.update&&n.update(t,e)})},getCoordinateSystems:function(){return this._coordinateSystems.slice()}},na.register=function(t,e){Bm[t]=e},na.get=function(t){return Bm[t]};var zm=g,Fm=o,$m=v,Vm=a,jm=/^(min|max)?(.+)$/;ia.prototype={constructor:ia,setOption:function(t,e){t&&g(Fn(t.series),function(t){t&&t.data&&T(t.data)&&B(t.data)}),t=Fm(t,!0);var n=this._optionBackup,i=ra.call(this,t,e,!n);this._newBaseOption=i.baseOption,n?(la(n.baseOption,i.baseOption),i.timelineOptions.length&&(n.timelineOptions=i.timelineOptions),i.mediaList.length&&(n.mediaList=i.mediaList),i.mediaDefault&&(n.mediaDefault=i.mediaDefault)):this._optionBackup=i},mountOption:function(t){var e=this._optionBackup;return this._timelineOptions=$m(e.timelineOptions,Fm),this._mediaList=$m(e.mediaList,Fm),this._mediaDefault=Fm(e.mediaDefault),this._currentMediaIndices=[],Fm(t?e.baseOption:this._newBaseOption)},getTimelineOption:function(t){var e,n=this._timelineOptions;if(n.length){var i=t.getComponent("timeline");i&&(e=Fm(n[i.getCurrentIndex()],!0))}return e},getMediaOption:function(){var t=this._api.getWidth(),e=this._api.getHeight(),n=this._mediaList,i=this._mediaDefault,r=[],o=[];if(!n.length&&!i)return o;for(var a=0,s=n.length;s>a;a++)oa(n[a].query,t,e)&&r.push(a);return!r.length&&i&&(r=[-1]),r.length&&!sa(r,this._currentMediaIndices)&&(o=$m(r,function(t){return Fm(-1===t?i.option:n[t].option)})),this._currentMediaIndices=r,o}};var Hm=g,Gm=I,Wm=["areaStyle","lineStyle","nodeStyle","linkStyle","chordStyle","label","labelLine"],Um=function(t,e){Hm(ga(t.series),function(t){Gm(t)&&pa(t)});var n=["xAxis","yAxis","radiusAxis","angleAxis","singleAxis","parallelAxis","radar"];e&&n.push("valueAxis","categoryAxis","logAxis","timeAxis"),Hm(n,function(e){Hm(ga(t[e]),function(t){t&&(fa(t,"axisLabel"),fa(t.axisPointer,"label"))})}),Hm(ga(t.parallel),function(t){var e=t&&t.parallelAxisDefault;fa(e,"axisLabel"),fa(e&&e.axisPointer,"label")}),Hm(ga(t.calendar),function(t){ca(t,"itemStyle"),fa(t,"dayLabel"),fa(t,"monthLabel"),fa(t,"yearLabel")}),Hm(ga(t.radar),function(t){fa(t,"name")}),Hm(ga(t.geo),function(t){Gm(t)&&(da(t),Hm(ga(t.regions),function(t){da(t)}))}),Hm(ga(t.timeline),function(t){da(t),ca(t,"label"),ca(t,"itemStyle"),ca(t,"controlStyle",!0);var e=t.data;b(e)&&g(e,function(t){I(t)&&(ca(t,"label"),ca(t,"itemStyle"))})}),Hm(ga(t.toolbox),function(t){ca(t,"iconStyle"),Hm(t.feature,function(t){ca(t,"iconStyle")})}),fa(va(t.axisPointer),"label"),fa(va(t.tooltip).axisPointer,"label")},Xm=[["x","left"],["y","top"],["x2","right"],["y2","bottom"]],Ym=["grid","geo","parallel","legend","toolbox","title","visualMap","dataZoom","timeline"],qm=function(t,e){Um(t,e),t.series=Fn(t.series),g(t.series,function(t){if(I(t)){var e=t.type;if(("pie"===e||"gauge"===e)&&null!=t.clockWise&&(t.clockwise=t.clockWise),"gauge"===e){var n=ma(t,"pointer.color");null!=n&&ya(t,"itemStyle.normal.color",n)}_a(t)}}),t.dataRange&&(t.visualMap=t.dataRange),g(Ym,function(e){var n=t[e];n&&(b(n)||(n=[n]),g(n,function(t){_a(t)}))})},Zm=function(t){var e=$();t.eachSeries(function(t){var n=t.get("stack");if(n){var i=e.get(n)||e.set(n,[]),r=t.getData(),o={stackResultDimension:r.getCalculationInfo("stackResultDimension"),stackedOverDimension:r.getCalculationInfo("stackedOverDimension"),stackedDimension:r.getCalculationInfo("stackedDimension"),stackedByDimension:r.getCalculationInfo("stackedByDimension"),isStackedByIndex:r.getCalculationInfo("isStackedByIndex"),data:r,seriesModel:t};if(!o.stackedDimension||!o.isStackedByIndex&&!o.stackedByDimension)return;i.length&&r.setCalculationInfo("stackedOnSeries",i[i.length-1].seriesModel),i.push(o)}}),e.each(xa)},Km=wa.prototype;Km.pure=!1,Km.persistent=!0,Km.getSource=function(){return this._source};var Jm={arrayRows_column:{pure:!0,count:function(){return Math.max(0,this._data.length-this._source.startIndex)},getItem:function(t){return this._data[t+this._source.startIndex]},appendData:Ma},arrayRows_row:{pure:!0,count:function(){var t=this._data[0];return t?Math.max(0,t.length-this._source.startIndex):0},getItem:function(t){t+=this._source.startIndex;for(var e=[],n=this._data,i=0;i<n.length;i++){var r=n[i];e.push(r?r[t]:null)}return e},appendData:function(){throw new Error('Do not support appendData when set seriesLayoutBy: "row".')}},objectRows:{pure:!0,count:ba,getItem:Sa,appendData:Ma},keyedColumns:{pure:!0,count:function(){var t=this._source.dimensionsDefine[0].name,e=this._data[t];return e?e.length:0},getItem:function(t){for(var e=[],n=this._source.dimensionsDefine,i=0;i<n.length;i++){var r=this._data[n[i].name];e.push(r?r[t]:null)}return e},appendData:function(t){var e=this._data;g(t,function(t,n){for(var i=e[n]||(e[n]=[]),r=0;r<(t||[]).length;r++)i.push(t[r])})}},original:{count:ba,getItem:Sa,appendData:Ma},typedArray:{persistent:!1,pure:!0,count:function(){return this._data?this._data.length/this._dimSize:0},getItem:function(t,e){t-=this._offset,e=e||[];for(var n=this._dimSize*t,i=0;i<this._dimSize;i++)e[i]=this._data[n+i];return e},appendData:function(t){this._data=t},clean:function(){this._offset+=this.count(),this._data=null}}},Qm={arrayRows:Ia,objectRows:function(t,e,n,i){return null!=n?t[i]:t},keyedColumns:Ia,original:function(t,e,n){var i=Vn(t);return null!=n&&i instanceof Array?i[n]:i},typedArray:Ia},ty={arrayRows:Aa,objectRows:function(t,e){return Ta(t[e],this._dimensionInfos[e])},keyedColumns:Aa,original:function(t,e,n,i){var r=t&&(null==t.value?t:t.value);return!this._rawData.pure&&jn(t)&&(this.hasItemOption=!0),Ta(r instanceof Array?r[i]:r,this._dimensionInfos[e])},typedArray:function(t,e,n,i){return t[i]}},ey=/\{@(.+?)\}/g,ny={getDataParams:function(t,e){var n=this.getData(e),i=this.getRawValue(t,e),r=n.getRawIndex(t),o=n.getName(t),a=n.getRawDataItem(t),s=n.getItemVisual(t,"color"),l=this.ecModel.getComponent("tooltip"),u=l&&l.get("renderMode"),c=Qn(u),h=this.mainType,f="series"===h;return{componentType:h,componentSubType:this.subType,componentIndex:this.componentIndex,seriesType:f?this.subType:null,seriesIndex:this.seriesIndex,seriesId:f?this.id:null,seriesName:f?this.name:null,name:o,dataIndex:r,data:a,dataType:e,value:i,color:s,marker:xo({color:s,renderMode:c}),$vars:["seriesName","name","value"]}},getFormattedLabel:function(t,e,n,i,r){e=e||"normal";var o=this.getData(n),a=o.getItemModel(t),s=this.getDataParams(t,n);null!=i&&s.value instanceof Array&&(s.value=s.value[i]);var l=a.get("normal"===e?[r||"label","formatter"]:[e,r||"label","formatter"]);if("function"==typeof l)return s.status=e,l(s);if("string"==typeof l){var u=yo(l,s);return u.replace(ey,function(e,n){var i=n.length;return"["===n.charAt(0)&&"]"===n.charAt(i-1)&&(n=+n.slice(1,i-1)),ka(o,t,n)})}},getRawValue:function(t,e){return ka(this.getData(e),t)},formatTooltip:function(){}},iy=Pa.prototype;iy.perform=function(t){function e(t){return!(t>=1)&&(t=1),t}var n,i=this._upstream,r=t&&t.skip;if(this._dirty&&i){var o=this.context;o.data=o.outputData=i.context.outputData}this.__pipeline&&(this.__pipeline.currentTask=this),this._plan&&!r&&(n=this._plan(this.context));var a,s=e(this._modBy),l=this._modDataCount||0,u=e(t&&t.modBy),c=t&&t.modDataCount||0;(s!==u||l!==c)&&(n="reset"),(this._dirty||"reset"===n)&&(this._dirty=!1,a=La(this,r)),this._modBy=u,this._modDataCount=c;var h=t&&t.step;if(this._dueEnd=i?i._outputDueEnd:this._count?this._count(this.context):1/0,this._progress){var f=this._dueIndex,d=Math.min(null!=h?this._dueIndex+h:1/0,this._dueEnd);if(!r&&(a||d>f)){var p=this._progress;if(b(p))for(var g=0;g<p.length;g++)Oa(this,p[g],f,d,u,c);else Oa(this,p,f,d,u,c)}this._dueIndex=d;var v=null!=this._settedOutputEnd?this._settedOutputEnd:d;this._outputDueEnd=v}else this._dueIndex=this._outputDueEnd=null!=this._settedOutputEnd?this._settedOutputEnd:this._dueEnd;return this.unfinished()};var ry=function(){function t(){return n>i?i++:null}function e(){var t=i%a*r+Math.ceil(i/a),e=i>=n?null:o>t?t:i;return i++,e}var n,i,r,o,a,s={reset:function(l,u,c,h){i=l,n=u,r=c,o=h,a=Math.ceil(o/r),s.next=r>1&&o>0?e:t}};return s}();iy.dirty=function(){this._dirty=!0,this._onDirty&&this._onDirty(this.context)},iy.unfinished=function(){return this._progress&&this._dueIndex<this._dueEnd},iy.pipe=function(t){(this._downstream!==t||this._dirty)&&(this._downstream=t,t._upstream=this,t.dirty())},iy.dispose=function(){this._disposed||(this._upstream&&(this._upstream._downstream=null),this._downstream&&(this._downstream._upstream=null),this._dirty=!1,this._disposed=!0)},iy.getUpstream=function(){return this._upstream},iy.getDownstream=function(){return this._downstream},iy.setOutputEnd=function(t){this._outputDueEnd=this._settedOutputEnd=t};var oy=Yn(),ay=_m.extend({type:"series.__base__",seriesIndex:0,coordinateSystem:null,defaultOption:null,legendDataProvider:null,visualColorAccessPath:"itemStyle.color",layoutMode:null,init:function(t,e,n){this.seriesIndex=this.componentIndex,this.dataTask=Da({count:Ra,reset:Ba}),this.dataTask.context={model:this},this.mergeDefaultAndTheme(t,n),Fo(this);var i=this.getInitialData(t,n);Fa(i,this),this.dataTask.context.data=i,oy(this).dataBeforeProcessed=i,Ea(this)},mergeDefaultAndTheme:function(t,e){var n=this.layoutMode,i=n?Co(t):{},r=this.subType;_m.hasClass(r)&&(r+="Series"),a(t,e.getTheme().get(this.subType)),a(t,this.getDefaultOption()),$n(t,"label",["show"]),this.fillDataTextStyle(t.data),n&&ko(t,i,n)},mergeOption:function(t,e){t=a(this.option,t,!0),this.fillDataTextStyle(t.data);var n=this.layoutMode;n&&ko(this.option,t,n),Fo(this);var i=this.getInitialData(t,e);Fa(i,this),this.dataTask.dirty(),this.dataTask.context.data=i,oy(this).dataBeforeProcessed=i,Ea(this)},fillDataTextStyle:function(t){if(t&&!T(t))for(var e=["show"],n=0;n<t.length;n++)t[n]&&t[n].label&&$n(t[n],"label",e)},getInitialData:function(){},appendData:function(t){var e=this.getRawData();e.appendData(t.data)},getData:function(t){var e=Va(this);if(e){var n=e.context.data;return null==t?n:n.getLinkedData(t)}return oy(this).data},setData:function(t){var e=Va(this);if(e){var n=e.context;n.data!==t&&e.modifyOutputEnd&&e.setOutputEnd(t.count()),n.outputData=t,e!==this.dataTask&&(n.data=t)}oy(this).data=t},getSource:function(){return Bo(this)},getRawData:function(){return oy(this).dataBeforeProcessed},getBaseAxis:function(){var t=this.coordinateSystem;return t&&t.getBaseAxis&&t.getBaseAxis()},formatTooltip:function(t,e,n,i){function r(n){function r(t,n){var r=h.getDimensionInfo(n);if(r&&!1!==r.otherDims.tooltip){var f=r.type,d="sub"+a.seriesIndex+"at"+c,p=xo({color:y,type:"subItem",renderMode:i,markerId:d}),g="string"==typeof p?p:p.content,v=(o?g+mo(r.displayName||"-")+": ":"")+mo("ordinal"===f?t+"":"time"===f?e?"":bo("yyyy/MM/dd hh:mm:ss",t):go(t));v&&s.push(v),l&&(u[d]=y,++c)}}var o=m(n,function(t,e,n){var i=h.getDimensionInfo(n);return t|(i&&!1!==i.tooltip&&null!=i.displayName)},0),s=[];f.length?g(f,function(e){r(ka(h,t,e),e)}):g(n,r);var d=o?l?"\n":"<br/>":"",p=d+s.join(d||", ");return{renderMode:i,content:p,style:u}}function o(t){return{renderMode:i,content:mo(go(t)),style:u}}var a=this;i=i||"html";var s="html"===i?"<br/>":"\n",l="richText"===i,u={},c=0,h=this.getData(),f=h.mapDimension("defaultedTooltip",!0),d=f.length,p=this.getRawValue(t),v=b(p),y=h.getItemVisual(t,"color");I(y)&&y.colorStops&&(y=(y.colorStops[0]||{}).color),y=y||"transparent";var _=d>1||v&&!d?r(p):o(d?ka(h,t,f[0]):v?p[0]:p),x=_.content,w=a.seriesIndex+"at"+c,S=xo({color:y,type:"item",renderMode:i,markerId:w});u[w]=y,++c;var M=h.getName(t),A=this.name;Wn(this)||(A=""),A=A?mo(A)+(e?": ":s):"";var T="string"==typeof S?S:S.content,k=e?T+A+x:A+T+(M?mo(M)+": "+x:x);return{html:k,markers:u}},isAnimationEnabled:function(){if(qf.node)return!1;var t=this.getShallow("animation");return t&&this.getData().count()>this.getShallow("animationThreshold")&&(t=!1),t},restoreData:function(){this.dataTask.dirty()},getColorFromPalette:function(t,e,n){var i=this.ecModel,r=Sm.getColorFromPalette.call(this,t,e,n);return r||(r=i.getColorFromPalette(t,e,n)),r},coordDimToDataDim:function(t){return this.getRawData().mapDimension(t,!0)},getProgressive:function(){return this.get("progressive")},getProgressiveThreshold:function(){return this.get("progressiveThreshold")},getAxisTooltipData:null,getTooltipPosition:null,pipeTask:null,preventIncremental:null,pipelineContext:null});d(ay,ny),d(ay,Sm);var sy=function(){this.group=new op,this.uid=Xr("viewComponent")};sy.prototype={constructor:sy,init:function(){},render:function(){},dispose:function(){},filterForExposedEvent:null};var ly=sy.prototype;ly.updateView=ly.updateLayout=ly.updateVisual=function(){},ni(sy),ai(sy,{registerWhenExtend:!0});var uy=function(){var t=Yn();return function(e){var n=t(e),i=e.pipelineContext,r=n.large,o=n.progressiveRender,a=n.large=i.large,s=n.progressiveRender=i.progressiveRender;return!!(r^a||o^s)&&"reset"}},cy=Yn(),hy=uy();ja.prototype={type:"chart",init:function(){},render:function(){},highlight:function(t,e,n,i){Ga(t.getData(),i,"emphasis")},downplay:function(t,e,n,i){Ga(t.getData(),i,"normal")},remove:function(){this.group.removeAll()},dispose:function(){},incrementalPrepareRender:null,incrementalRender:null,updateTransform:null,filterForExposedEvent:null};var fy=ja.prototype;fy.updateView=fy.updateLayout=fy.updateVisual=function(t,e,n,i){this.render(t,e,n,i)},ni(ja,["dispose"]),ai(ja,{registerWhenExtend:!0}),ja.markUpdateMethod=function(t,e){cy(t).updateMethod=e};var dy={incrementalPrepareRender:{progress:function(t,e){e.view.incrementalRender(t,e.model,e.ecModel,e.api,e.payload)}},render:{forceFirstProgress:!0,progress:function(t,e){e.view.render(e.model,e.ecModel,e.api,e.payload)}}},py="\0__throttleOriginMethod",gy="\0__throttleRate",vy="\0__throttleType",my={createOnAllSeries:!0,performRawSeries:!0,reset:function(t,e){var n=t.getData(),i=(t.visualColorAccessPath||"itemStyle.color").split("."),r=t.get(i)||t.getColorFromPalette(t.name,null,e.getSeriesCount());if(n.setVisual("color",r),!e.isSeriesFiltered(t)){"function"!=typeof r||r instanceof Rv||n.each(function(e){n.setItemVisual(e,"color",r(t.getDataParams(e)))});var o=function(t,e){var n=t.getItemModel(e),r=n.get(i,!0);null!=r&&t.setItemVisual(e,"color",r)};return{dataEach:n.hasItemOption?o:null}}}},yy={toolbox:{brush:{title:{rect:"矩形选择",polygon:"圈选",lineX:"横向选择",lineY:"纵向选择",keep:"保持选择",clear:"清除选择"}},dataView:{title:"数据视图",lang:["数据视图","关闭","刷新"]},dataZoom:{title:{zoom:"区域缩放",back:"区域缩放还原"}},magicType:{title:{line:"切换为折线图",bar:"切换为柱状图",stack:"切换为堆叠",tiled:"切换为平铺"}},restore:{title:"还原"},saveAsImage:{title:"保存为图片",lang:["右键另存为图片"]}},series:{typeNames:{pie:"饼图",bar:"柱状图",line:"折线图",scatter:"散点图",effectScatter:"涟漪散点图",radar:"雷达图",tree:"树图",treemap:"矩形树图",boxplot:"箱型图",candlestick:"K线图",k:"K线图",heatmap:"热力图",map:"地图",parallel:"平行坐标图",lines:"线图",graph:"关系图",sankey:"桑基图",funnel:"漏斗图",gauge:"仪表盘图",pictorialBar:"象形柱图",themeRiver:"主题河流图",sunburst:"旭日图"}},aria:{general:{withTitle:"这是一个关于“{title}”的图表。",withoutTitle:"这是一个图表，"},series:{single:{prefix:"",withName:"图表类型是{seriesType}，表示{seriesName}。",withoutName:"图表类型是{seriesType}。"},multiple:{prefix:"它由{seriesCount}个图表系列组成。",withName:"第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",withoutName:"第{seriesId}个系列是一个{seriesType}，",separator:{middle:"；",end:"。"}}},data:{allData:"其数据是——",partialData:"其中，前{displayCnt}项是——",withName:"{name}的数据是{value}",withoutName:"{value}",separator:{middle:"，",end:""}}}},_y=function(t,n){function i(t,e){if("string"!=typeof t)return t;var n=t;return g(e,function(t,e){n=n.replace(new RegExp("\\{\\s*"+e+"\\s*\\}","g"),t)}),n}function r(t){var e=s.get(t);if(null==e){for(var n=t.split("."),i=yy.aria,r=0;r<n.length;++r)i=i[n[r]];return i}return e}function o(){var t=n.getModel("title").option;return t&&t.length&&(t=t[0]),t&&t.text}function a(t){return yy.series.typeNames[t]||"自定义图"}var s=n.getModel("aria");if(s.get("show")){if(s.get("description"))return void t.setAttribute("aria-label",s.get("description"));var l=0;n.eachSeries(function(){++l},this);var u,c=s.get("data.maxCount")||10,h=s.get("series.maxCount")||10,f=Math.min(l,h);if(!(1>l)){var d=o();u=d?i(r("general.withTitle"),{title:d}):r("general.withoutTitle");var p=[],v=l>1?"series.multiple.prefix":"series.single.prefix";u+=i(r(v),{seriesCount:l}),n.eachSeries(function(t,n){if(f>n){var o,s=t.get("name"),u="series."+(l>1?"multiple":"single")+".";o=r(s?u+"withName":u+"withoutName"),o=i(o,{seriesId:t.seriesIndex,seriesName:t.get("name"),seriesType:a(t.subType)});var h=t.getData();e.data=h,o+=h.count()>c?i(r("data.partialData"),{displayCnt:c}):r("data.allData");for(var d=[],g=0;g<h.count();g++)if(c>g){var v=h.getName(g),m=ka(h,g);d.push(i(r(v?"data.withName":"data.withoutName"),{name:v,value:m}))}o+=d.join(r("data.separator.middle"))+r("data.separator.end"),p.push(o)}}),u+=p.join(r("series.multiple.separator.middle"))+r("series.multiple.separator.end"),t.setAttribute("aria-label",u)}}},xy=Math.PI,wy=function(t,e){e=e||{},u(e,{text:"loading",color:"#c23531",textColor:"#000",maskColor:"rgba(255, 255, 255, 0.8)",zlevel:0});var n=new Cv({style:{fill:e.maskColor},zlevel:e.zlevel,z:1e4}),i=new Ev({shape:{startAngle:-xy/2,endAngle:-xy/2+.1,r:10},style:{stroke:e.color,lineCap:"round",lineWidth:5},zlevel:e.zlevel,z:10001}),r=new Cv({style:{fill:"none",text:e.text,textPosition:"right",textDistance:10,textFill:e.textColor},zlevel:e.zlevel,z:10001});i.animateShape(!0).when(1e3,{endAngle:3*xy/2}).start("circularInOut"),i.animateShape(!0).when(1e3,{startAngle:3*xy/2}).delay(300).start("circularInOut");var o=new op;return o.add(i),o.add(r),o.add(n),o.resize=function(){var e=t.getWidth()/2,o=t.getHeight()/2;i.setShape({cx:e,cy:o});var a=i.shape.r;r.setShape({x:e-a,y:o-a,width:2*a,height:2*a}),n.setShape({x:0,y:0,width:t.getWidth(),height:t.getHeight()})},o.resize(),o},by=qa.prototype;by.restoreData=function(t,e){t.restoreData(e),this._stageTaskMap.each(function(t){var e=t.overallTask;e&&e.dirty()})},by.getPerformArgs=function(t,e){if(t.__pipeline){var n=this._pipelineMap.get(t.__pipeline.id),i=n.context,r=!e&&n.progressiveEnabled&&(!i||i.progressiveRender)&&t.__idxInPipeline>n.blockIndex,o=r?n.step:null,a=i&&i.modDataCount,s=null!=a?Math.ceil(a/o):null;return{step:o,modBy:s,modDataCount:a}}},by.getPipeline=function(t){return this._pipelineMap.get(t)},by.updateStreamModes=function(t,e){var n=this._pipelineMap.get(t.uid),i=t.getData(),r=i.count(),o=n.progressiveEnabled&&e.incrementalPrepareRender&&r>=n.threshold,a=t.get("large")&&r>=t.get("largeThreshold"),s="mod"===t.get("progressiveChunkMode")?r:null;t.pipelineContext=n.context={progressiveRender:o,modDataCount:s,large:a}},by.restorePipelines=function(t){var e=this,n=e._pipelineMap=$();t.eachSeries(function(t){var i=t.getProgressive(),r=t.uid;n.set(r,{id:r,head:null,tail:null,threshold:t.getProgressiveThreshold(),progressiveEnabled:i&&!(t.preventIncremental&&t.preventIncremental()),blockIndex:-1,step:Math.round(i||700),count:0}),ss(e,t,t.dataTask)})},by.prepareStageTasks=function(){var t=this._stageTaskMap,e=this.ecInstance.getModel(),n=this.api;g(this._allHandlers,function(i){var r=t.get(i.uid)||t.set(i.uid,[]);i.reset&&Ka(this,i,r,e,n),i.overallReset&&Ja(this,i,r,e,n)},this)},by.prepareView=function(t,e,n,i){var r=t.renderTask,o=r.context;o.model=e,o.ecModel=n,o.api=i,r.__block=!t.incrementalPrepareRender,ss(this,e,r)},by.performDataProcessorTasks=function(t,e){Za(this,this._dataProcessorHandlers,t,e,{block:!0})},by.performVisualTasks=function(t,e,n){Za(this,this._visualHandlers,t,e,n)},by.performSeriesTasks=function(t){var e;t.eachSeries(function(t){e|=t.dataTask.perform()}),this.unfinished|=e},by.plan=function(){this._pipelineMap.each(function(t){var e=t.tail;do{if(e.__block){t.blockIndex=e.__idxInPipeline;break}e=e.getUpstream()}while(e)})};var Sy=by.updatePayload=function(t,e){"remain"!==e&&(t.context.payload=e)},My=os(0);qa.wrapStageHandler=function(t,e){return S(t)&&(t={overallReset:t,seriesType:ls(t)}),t.uid=Xr("stageHandler"),e&&(t.visualType=e),t};var Iy,Ay={},Ty={};us(Ay,Nm),us(Ty,ea),Ay.eachSeriesByType=Ay.eachRawSeriesByType=function(t){Iy=t},Ay.eachComponent=function(t){"series"===t.mainType&&t.subType&&(Iy=t.subType)};var ky=["#37A2DA","#32C5E9","#67E0E3","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#E062AE","#E690D1","#e7bcf3","#9d96f5","#8378EA","#96BFFF"],Cy={color:ky,colorLayer:[["#37A2DA","#ffd85c","#fd7b5f"],["#37A2DA","#67E0E3","#FFDB5C","#ff9f7f","#E062AE","#9d96f5"],["#37A2DA","#32C5E9","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#e7bcf3","#8378EA","#96BFFF"],ky]},Dy="#eee",Py=function(){return{axisLine:{lineStyle:{color:Dy}},axisTick:{lineStyle:{color:Dy}},axisLabel:{textStyle:{color:Dy}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:Dy}}}},Oy=["#dd6b66","#759aa0","#e69d87","#8dc1a9","#ea7e53","#eedd78","#73a373","#73b9bc","#7289ab","#91ca8c","#f49f42"],Ly={color:Oy,backgroundColor:"#333",tooltip:{axisPointer:{lineStyle:{color:Dy},crossStyle:{color:Dy}}},legend:{textStyle:{color:Dy}},textStyle:{color:Dy},title:{textStyle:{color:Dy}},toolbox:{iconStyle:{normal:{borderColor:Dy}}},dataZoom:{textStyle:{color:Dy}},visualMap:{textStyle:{color:Dy}},timeline:{lineStyle:{color:Dy},itemStyle:{normal:{color:Oy[1]}},label:{normal:{textStyle:{color:Dy}}},controlStyle:{normal:{color:Dy,borderColor:Dy}}},timeAxis:Py(),logAxis:Py(),valueAxis:Py(),categoryAxis:Py(),line:{symbol:"circle"},graph:{color:Oy},gauge:{title:{textStyle:{color:Dy}}},candlestick:{itemStyle:{normal:{color:"#FD1050",color0:"#0CF49B",borderColor:"#FD1050",borderColor0:"#0CF49B"}}}};Ly.categoryAxis.splitLine.show=!1,_m.extend({type:"dataset",defaultOption:{seriesLayoutBy:Pm,sourceHeader:null,dimensions:null,source:null},optionUpdated:function(){Ro(this)}}),sy.extend({type:"dataset"});var Ey=$i.extend({type:"ellipse",shape:{cx:0,cy:0,rx:0,ry:0},buildPath:function(t,e){var n=.5522848,i=e.cx,r=e.cy,o=e.rx,a=e.ry,s=o*n,l=a*n;t.moveTo(i-o,r),t.bezierCurveTo(i-o,r-l,i-s,r-a,i,r-a),t.bezierCurveTo(i+s,r-a,i+o,r-l,i+o,r),t.bezierCurveTo(i+o,r+l,i+s,r+a,i,r+a),t.bezierCurveTo(i-s,r+a,i-o,r+l,i-o,r),t.closePath()}}),Ny=/[\s,]+/;hs.prototype.parse=function(t,e){e=e||{};var n=cs(t);if(!n)throw new Error("Illegal svg");var i=new op;this._root=i;var r,o,a=n.getAttribute("viewBox")||"",s=parseFloat(n.getAttribute("width")||e.width),l=parseFloat(n.getAttribute("height")||e.height);isNaN(s)&&(s=null),isNaN(l)&&(l=null),gs(n,i,null,!0);for(var u=n.firstChild;u;)this._parseNode(u,i),u=u.nextSibling;if(a){var c=R(a).split(Ny);c.length>=4&&(r={x:parseFloat(c[0]||0),y:parseFloat(c[1]||0),width:parseFloat(c[2]),height:parseFloat(c[3])})}if(r&&null!=s&&null!=l&&(o=_s(r,s,l),!e.ignoreViewBox)){var h=i;i=new op,i.add(h),h.scale=o.scale.slice(),h.position=o.position.slice()}return e.ignoreRootClip||null==s||null==l||i.setClipPath(new Cv({shape:{x:0,y:0,width:s,height:l}})),{root:i,width:s,height:l,viewBoxRect:r,viewBoxTransform:o}},hs.prototype._parseNode=function(t,e){var n,i=t.nodeName.toLowerCase();if("defs"===i?this._isDefine=!0:"text"===i&&(this._isText=!0),this._isDefine){var r=By[i];if(r){var o=r.call(this,t),a=t.getAttribute("id");a&&(this._defs[a]=o)}}else{r=Ry[i];r&&(n=r.call(this,t,e),e.add(n))}for(var s=t.firstChild;s;)1===s.nodeType&&this._parseNode(s,n),3===s.nodeType&&this._isText&&this._parseText(s,n),s=s.nextSibling;"defs"===i?this._isDefine=!1:"text"===i&&(this._isText=!1)},hs.prototype._parseText=function(t,e){if(1===t.nodeType){var n=t.getAttribute("dx")||0,i=t.getAttribute("dy")||0;this._textX+=parseFloat(n),this._textY+=parseFloat(i)}var r=new mv({style:{text:t.textContent,transformText:!0},position:[this._textX||0,this._textY||0]});ds(e,r),gs(t,r,this._defs);var o=r.style.fontSize;o&&9>o&&(r.style.fontSize=9,r.scale=r.scale||[1,1],r.scale[0]*=o/9,r.scale[1]*=o/9);var a=r.getBoundingRect();return this._textX+=a.width,e.add(r),r};var Ry={g:function(t,e){var n=new op;return ds(e,n),gs(t,n,this._defs),n},rect:function(t,e){var n=new Cv;return ds(e,n),gs(t,n,this._defs),n.setShape({x:parseFloat(t.getAttribute("x")||0),y:parseFloat(t.getAttribute("y")||0),width:parseFloat(t.getAttribute("width")||0),height:parseFloat(t.getAttribute("height")||0)}),n},circle:function(t,e){var n=new yv;return ds(e,n),gs(t,n,this._defs),n.setShape({cx:parseFloat(t.getAttribute("cx")||0),cy:parseFloat(t.getAttribute("cy")||0),r:parseFloat(t.getAttribute("r")||0)}),n},line:function(t,e){var n=new Pv;return ds(e,n),gs(t,n,this._defs),n.setShape({x1:parseFloat(t.getAttribute("x1")||0),y1:parseFloat(t.getAttribute("y1")||0),x2:parseFloat(t.getAttribute("x2")||0),y2:parseFloat(t.getAttribute("y2")||0)}),n},ellipse:function(t,e){var n=new Ey;return ds(e,n),gs(t,n,this._defs),n.setShape({cx:parseFloat(t.getAttribute("cx")||0),cy:parseFloat(t.getAttribute("cy")||0),rx:parseFloat(t.getAttribute("rx")||0),ry:parseFloat(t.getAttribute("ry")||0)}),n},polygon:function(t,e){var n=t.getAttribute("points");n&&(n=ps(n));var i=new Iv({shape:{points:n||[]}});return ds(e,i),gs(t,i,this._defs),i},polyline:function(t,e){var n=new $i;ds(e,n),gs(t,n,this._defs);var i=t.getAttribute("points");i&&(i=ps(i));var r=new Av({shape:{points:i||[]}});return r},image:function(t,e){var n=new bn;return ds(e,n),gs(t,n,this._defs),n.setStyle({image:t.getAttribute("xlink:href"),x:t.getAttribute("x"),y:t.getAttribute("y"),width:t.getAttribute("width"),height:t.getAttribute("height")}),n},text:function(t,e){var n=t.getAttribute("x")||0,i=t.getAttribute("y")||0,r=t.getAttribute("dx")||0,o=t.getAttribute("dy")||0;this._textX=parseFloat(n)+parseFloat(r),this._textY=parseFloat(i)+parseFloat(o);var a=new op;return ds(e,a),gs(t,a,this._defs),a},tspan:function(t,e){var n=t.getAttribute("x"),i=t.getAttribute("y");null!=n&&(this._textX=parseFloat(n)),null!=i&&(this._textY=parseFloat(i));var r=t.getAttribute("dx")||0,o=t.getAttribute("dy")||0,a=new op;return ds(e,a),gs(t,a,this._defs),this._textX+=r,this._textY+=o,a},path:function(t,e){var n=t.getAttribute("d")||"",i=Gi(n);return ds(e,i),gs(t,i,this._defs),i}},By={lineargradient:function(t){var e=parseInt(t.getAttribute("x1")||0,10),n=parseInt(t.getAttribute("y1")||0,10),i=parseInt(t.getAttribute("x2")||10,10),r=parseInt(t.getAttribute("y2")||0,10),o=new Bv(e,n,i,r);return fs(t,o),o},radialgradient:function(){}},zy={fill:"fill",stroke:"stroke","stroke-width":"lineWidth",opacity:"opacity","fill-opacity":"fillOpacity","stroke-opacity":"strokeOpacity","stroke-dasharray":"lineDash","stroke-dashoffset":"lineDashOffset","stroke-linecap":"lineCap","stroke-linejoin":"lineJoin","stroke-miterlimit":"miterLimit","font-family":"fontFamily","font-size":"fontSize","font-style":"fontStyle","font-weight":"fontWeight","text-align":"textAlign","alignment-baseline":"textBaseline"},Fy=/url\(\s*#(.*?)\)/,$y=/(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.e,]*)\)/g,Vy=/([^\s:;]+)\s*:\s*([^:;]+)/g,jy=$(),Hy={registerMap:function(t,e,n){var i;return b(e)?i=e:e.svg?i=[{type:"svg",source:e.svg,specialAreas:e.specialAreas}]:(e.geoJson&&!e.features&&(n=e.specialAreas,e=e.geoJson),i=[{type:"geoJSON",source:e,specialAreas:n}]),g(i,function(t){var e=t.type;"geoJson"===e&&(e=t.type="geoJSON");var n=Gy[e];n(t)}),jy.set(t,i)},retrieveMap:function(t){return jy.get(t)}},Gy={geoJSON:function(t){var e=t.source;t.geoJSON=M(e)?"undefined"!=typeof JSON&&JSON.parse?JSON.parse(e):new Function("return ("+e+");")():e},svg:function(t){t.svgXML=cs(t.source)}},Wy=N,Uy=g,Xy=S,Yy=I,qy=_m.parseClassType,Zy="4.2.1",Ky={zrender:"4.0.6"},Jy=1,Qy=1e3,t_=5e3,e_=1e3,n_=2e3,i_=3e3,r_=4e3,o_=5e3,a_={PROCESSOR:{FILTER:Qy,STATISTIC:t_},VISUAL:{LAYOUT:e_,GLOBAL:n_,CHART:i_,COMPONENT:r_,BRUSH:o_}},s_="__flagInMainProcess",l_="__optionUpdated",u_=/^[a-zA-Z0-9_]+$/;ws.prototype.on=xs("on"),ws.prototype.off=xs("off"),ws.prototype.one=xs("one"),d(ws,md);var c_=bs.prototype;c_._onframe=function(){if(!this._disposed){var t=this._scheduler;if(this[l_]){var e=this[l_].silent;this[s_]=!0,Ms(this),h_.update.call(this),this[s_]=!1,this[l_]=!1,ks.call(this,e),Cs.call(this,e)}else if(t.unfinished){var n=Jy,i=this._model,r=this._api;t.unfinished=!1;do{var o=+new Date;t.performSeriesTasks(i),t.performDataProcessorTasks(i),As(this,i),t.performVisualTasks(i),Ns(this,this._model,r,"remain"),n-=+new Date-o}while(n>0&&t.unfinished);t.unfinished||this._zr.flush()}}},c_.getDom=function(){return this._dom},c_.getZr=function(){return this._zr},c_.setOption=function(t,e,n){var i;if(Yy(e)&&(n=e.lazyUpdate,i=e.silent,e=e.notMerge),this[s_]=!0,!this._model||e){var r=new ia(this._api),o=this._theme,a=this._model=new Nm(null,null,o,r);a.scheduler=this._scheduler,a.init(null,null,o,r)}this._model.setOption(t,v_),n?(this[l_]={silent:i},this[s_]=!1):(Ms(this),h_.update.call(this),this._zr.flush(),this[l_]=!1,this[s_]=!1,ks.call(this,i),Cs.call(this,i))},c_.setTheme=function(){console.error("ECharts#setTheme() is DEPRECATED in ECharts 3.0"," at components/echarts/echarts.min.js:8")},c_.getModel=function(){return this._model},c_.getOption=function(){return this._model&&this._model.getOption()},c_.getWidth=function(){return this._zr.getWidth()},c_.getHeight=function(){return this._zr.getHeight()},c_.getDevicePixelRatio=function(){return this._zr.painter.dpr||e.devicePixelRatio||1},c_.getRenderedCanvas=function(t){if(qf.canvasSupported){t=t||{},t.pixelRatio=t.pixelRatio||1,t.backgroundColor=t.backgroundColor||this._model.get("backgroundColor");var e=this._zr;return e.painter.getRenderedCanvas(t)}},c_.getSvgDataUrl=function(){if(qf.svgSupported){var t=this._zr,e=t.storage.getDisplayList();return g(e,function(t){t.stopAnimation(!0)}),t.painter.pathToDataUrl()}},c_.getDataURL=function(t){t=t||{};var e=t.excludeComponents,n=this._model,i=[],r=this;Uy(e,function(t){n.eachComponent({mainType:t},function(t){var e=r._componentsMap[t.__viewId];e.group.ignore||(i.push(e),e.group.ignore=!0)})});var o="svg"===this._zr.painter.getType()?this.getSvgDataUrl():this.getRenderedCanvas(t).toDataURL("image/"+(t&&t.type||"png"));return Uy(i,function(t){t.group.ignore=!1}),o},c_.getConnectedDataURL=function(t){if(qf.canvasSupported){var e=this.group,n=Math.min,i=Math.max,r=1/0;if(b_[e]){var a=r,s=r,l=-r,u=-r,c=[],h=t&&t.pixelRatio||1;g(w_,function(r){if(r.group===e){var h=r.getRenderedCanvas(o(t)),f=r.getDom().getBoundingClientRect();a=n(f.left,a),s=n(f.top,s),l=i(f.right,l),u=i(f.bottom,u),c.push({dom:h,left:f.left,top:f.top})}}),a*=h,s*=h,l*=h,u*=h;var f=l-a,d=u-s,p=ad();p.width=f,p.height=d;var v=En(p);return Uy(c,function(t){var e=new bn({style:{x:t.left*h-a,y:t.top*h-s,image:t.dom}});v.add(e)}),v.refreshImmediately(),p.toDataURL("image/"+(t&&t.type||"png"))}return this.getDataURL(t)}},c_.convertToPixel=w(Ss,"convertToPixel"),c_.convertFromPixel=w(Ss,"convertFromPixel"),c_.containPixel=function(t,e){var n,i=this._model;return t=qn(i,t),g(t,function(t,i){i.indexOf("Models")>=0&&g(t,function(t){var r=t.coordinateSystem;if(r&&r.containPoint)n|=!!r.containPoint(e);else if("seriesModels"===i){var o=this._chartsMap[t.__viewId];o&&o.containPoint&&(n|=o.containPoint(e,t))}},this)},this),!!n},c_.getVisual=function(t,e){var n=this._model;t=qn(n,t,{defaultMainType:"series"});var i=t.seriesModel,r=i.getData(),o=t.hasOwnProperty("dataIndexInside")?t.dataIndexInside:t.hasOwnProperty("dataIndex")?r.indexOfRawIndex(t.dataIndex):null;return null!=o?r.getItemVisual(o,e):r.getVisual(e)},c_.getViewOfComponentModel=function(t){return this._componentsMap[t.__viewId]},c_.getViewOfSeriesModel=function(t){return this._chartsMap[t.__viewId]};var h_={prepareAndUpdate:function(t){Ms(this),h_.update.call(this,t)},update:function(t){var e=this._model,n=this._api,i=this._zr,r=this._coordSysMgr,o=this._scheduler;if(e){o.restoreData(e,t),o.performSeriesTasks(e),r.create(e,n),o.performDataProcessorTasks(e,t),As(this,e),r.update(e,n),Os(e),o.performVisualTasks(e,t),Ls(this,e,n,t);var a=e.get("backgroundColor")||"transparent";if(qf.canvasSupported)i.setBackgroundColor(a);else{var s=Xt(a);a=ne(s,"rgb"),0===s[3]&&(a="transparent")}Rs(e,n)}},updateTransform:function(t){var e=this._model,n=this,i=this._api;if(e){var r=[];e.eachComponent(function(o,a){var s=n.getViewOfComponentModel(a);if(s&&s.__alive)if(s.updateTransform){var l=s.updateTransform(a,e,i,t);l&&l.update&&r.push(s)}else r.push(s)});var o=$();e.eachSeries(function(r){var a=n._chartsMap[r.__viewId];if(a.updateTransform){var s=a.updateTransform(r,e,i,t);s&&s.update&&o.set(r.uid,1)}else o.set(r.uid,1)}),Os(e),this._scheduler.performVisualTasks(e,t,{setDirty:!0,dirtyMap:o}),Ns(n,e,i,t,o),Rs(e,this._api)}},updateView:function(t){var e=this._model;e&&(ja.markUpdateMethod(t,"updateView"),Os(e),this._scheduler.performVisualTasks(e,t,{setDirty:!0}),Ls(this,this._model,this._api,t),Rs(e,this._api))},updateVisual:function(t){h_.update.call(this,t)},updateLayout:function(t){h_.update.call(this,t)}};c_.resize=function(t){this._zr.resize(t);var e=this._model;if(this._loadingFX&&this._loadingFX.resize(),e){var n=e.resetOption("media"),i=t&&t.silent;this[s_]=!0,n&&Ms(this),h_.update.call(this),this[s_]=!1,ks.call(this,i),Cs.call(this,i)}},c_.showLoading=function(t,e){if(Yy(t)&&(e=t,t=""),t=t||"default",this.hideLoading(),x_[t]){var n=x_[t](this._api,e),i=this._zr;this._loadingFX=n,i.add(n)}},c_.hideLoading=function(){this._loadingFX&&this._zr.remove(this._loadingFX),this._loadingFX=null},c_.makeActionFromEvent=function(t){var e=l({},t);return e.type=p_[t.type],e},c_.dispatchAction=function(t,e){if(Yy(e)||(e={silent:!!e}),d_[t.type]&&this._model){if(this[s_])return void this._pendingActions.push(t);Ts.call(this,t,e.silent),e.flush?this._zr.flush(!0):!1!==e.flush&&qf.browser.weChat&&this._throttledZrFlush(),ks.call(this,e.silent),Cs.call(this,e.silent)}},c_.appendData=function(t){var e=t.seriesIndex,n=this.getModel(),i=n.getSeriesByIndex(e);i.appendData(t),this._scheduler.unfinished=!0},c_.on=xs("on"),c_.off=xs("off"),c_.one=xs("one");var f_=["click","dblclick","mouseover","mouseout","mousemove","mousedown","mouseup","globalout","contextmenu"];c_._initEvents=function(){Uy(f_,function(t){var e=function(e){var n,i=this.getModel(),r=e.target,o="globalout"===t;if(o)n={};else if(r&&null!=r.dataIndex){var a=r.dataModel||i.getSeriesByIndex(r.seriesIndex);n=a&&a.getDataParams(r.dataIndex,r.dataType,r)||{}}else r&&r.eventData&&(n=l({},r.eventData));if(n){var s=n.componentType,u=n.componentIndex;("markLine"===s||"markPoint"===s||"markArea"===s)&&(s="series",u=n.seriesIndex);var c=s&&null!=u&&i.getComponent(s,u),h=c&&this["series"===c.mainType?"_chartsMap":"_componentsMap"][c.__viewId];n.event=e,n.type=t,this._ecEventProcessor.eventInfo={targetEl:r,packedEvent:n,model:c,view:h},this.trigger(t,n)}};e.zrEventfulCallAtLast=!0,this._zr.on(t,e,this)},this),Uy(p_,function(t,e){this._messageCenter.on(e,function(t){this.trigger(e,t)},this)},this)},c_.isDisposed=function(){return this._disposed},c_.clear=function(){this.setOption({series:[]},!0)},c_.dispose=function(){if(!this._disposed){this._disposed=!0,Kn(this.getDom(),I_,"");var t=this._api,e=this._model;Uy(this._componentsViews,function(n){n.dispose(e,t)}),Uy(this._chartsViews,function(n){n.dispose(e,t)}),this._zr.dispose(),delete w_[this.id]}},d(bs,md),Vs.prototype={constructor:Vs,normalizeQuery:function(t){var e={},n={},i={};if(M(t)){var r=qy(t);e.mainType=r.main||null,e.subType=r.sub||null}else{var o=["Index","Name","Id"],a={name:1,dataIndex:1,dataType:1};g(t,function(t,r){for(var s=!1,l=0;l<o.length;l++){var u=o[l],c=r.lastIndexOf(u);if(c>0&&c===r.length-u.length){var h=r.slice(0,c);"data"!==h&&(e.mainType=h,e[u.toLowerCase()]=t,s=!0)}}a.hasOwnProperty(r)&&(n[r]=t,s=!0),s||(i[r]=t)})}return{cptQuery:e,dataQuery:n,otherQuery:i}},filter:function(t,e){function n(t,e,n,i){return null==t[n]||e[i||n]===t[n]}var i=this.eventInfo;if(!i)return!0;var r=i.targetEl,o=i.packedEvent,a=i.model,s=i.view;if(!a||!s)return!0;var l=e.cptQuery,u=e.dataQuery;return n(l,a,"mainType")&&n(l,a,"subType")&&n(l,a,"index","componentIndex")&&n(l,a,"name")&&n(l,a,"id")&&n(u,o,"name")&&n(u,o,"dataIndex")&&n(u,o,"dataType")&&(!s.filterForExposedEvent||s.filterForExposedEvent(t,e.otherQuery,r,o))},afterTrigger:function(){this.eventInfo=null}};var d_={},p_={},g_=[],v_=[],m_=[],y_=[],__={},x_={},w_={},b_={},S_=new Date-0,M_=new Date-0,I_="_echarts_instance_",A_=Ws;il(n_,my),Zs(qm),Ks(t_,Zm),ol("default",wy),Qs({type:"highlight",event:"highlight",update:"highlight"},j),Qs({type:"downplay",event:"downplay",update:"downplay"},j),qs("light",Cy),qs("dark",Ly);var T_={};pl.prototype={constructor:pl,add:function(t){return this._add=t,this},update:function(t){return this._update=t,this},remove:function(t){return this._remove=t,this},execute:function(){var t=this._old,e=this._new,n={},i={},r=[],o=[];for(gl(t,n,r,"_oldKeyGetter",this),gl(e,i,o,"_newKeyGetter",this),u=0;u<t.length;u++){var a=r[u],s=i[a];if(null!=s){var l=s.length;l?(1===l&&(i[a]=null),s=s.unshift()):i[a]=null,this._update&&this._update(s,u)}else this._remove&&this._remove(u)}for(var u=0;u<o.length;u++){a=o[u];if(i.hasOwnProperty(a)){s=i[a];if(null==s)continue;if(s.length){var c=0;for(l=s.length;l>c;c++)this._add&&this._add(s[c])}else this._add&&this._add(s)}}}};var k_=$(["tooltip","label","itemName","itemId","seriesName"]),C_=I,D_="undefined",P_=-1,O_="e\0\0",L_={float:typeof Float64Array===D_?Array:Float64Array,int:typeof Int32Array===D_?Array:Int32Array,ordinal:Array,number:Array,time:Array},E_=typeof Uint32Array===D_?Array:Uint32Array,N_=typeof Int32Array===D_?Array:Int32Array,R_=typeof Uint16Array===D_?Array:Uint16Array,B_=["hasItemOption","_nameList","_idList","_invertedIndicesMap","_rawData","_chunkSize","_chunkCount","_dimValueGetter","_count","_rawCount","_nameDimIdx","_idDimIdx"],z_=["_extent","_approximateExtent","_rawExtent"],F_=function(t,e){t=t||["x","y"];for(var n={},i=[],r={},o=0;o<t.length;o++){var a=t[o];M(a)&&(a={name:a});var s=a.name;a.type=a.type||"float",a.coordDim||(a.coordDim=s,a.coordDimIndex=0),a.otherDims=a.otherDims||{},i.push(s),n[s]=a,a.index=o,a.createInvertedIndices&&(r[s]=[])}this.dimensions=i,this._dimensionInfos=n,this.hostModel=e,this.dataType,this._indices=null,this._count=0,this._rawCount=0,this._storage={},this._nameList=[],this._idList=[],this._optionModels=[],this._visual={},this._layout={},this._itemVisuals=[],this.hasItemVisual={},this._itemLayouts=[],this._graphicEls=[],this._chunkSize=1e5,this._chunkCount=0,this._rawData,this._rawExtent={},this._extent={},this._approximateExtent={},this._dimensionsSummary=vl(this),this._invertedIndicesMap=r,this._calculationInfo={}},$_=F_.prototype;$_.type="list",$_.hasItemOption=!0,$_.getDimension=function(t){return isNaN(t)||(t=this.dimensions[t]||t),t},$_.getDimensionInfo=function(t){return this._dimensionInfos[this.getDimension(t)]},$_.getDimensionsOnCoord=function(){return this._dimensionsSummary.dataDimsOnCoord.slice()},$_.mapDimension=function(t,e){var n=this._dimensionsSummary;if(null==e)return n.encodeFirstDimNotExtra[t];var i=n.encode[t];return!0===e?(i||[]).slice():i&&i[e]},$_.initData=function(t,e,n){var i=No.isInstance(t)||p(t);i&&(t=new wa(t,this.dimensions.length)),this._rawData=t,this._storage={},this._indices=null,this._nameList=e||[],this._idList=[],this._nameRepeatCount={},n||(this.hasItemOption=!1),this.defaultDimValueGetter=ty[this._rawData.getSource().sourceFormat],this._dimValueGetter=n=n||this.defaultDimValueGetter,this._dimValueGetterArrayRows=ty.arrayRows,this._rawExtent={},this._initDataFromProvider(0,t.count()),t.pure&&(this.hasItemOption=!1)},$_.getProvider=function(){return this._rawData},$_.appendData=function(t){var e=this._rawData,n=this.count();e.appendData(t);var i=e.count();e.persistent||(i+=n),this._initDataFromProvider(n,i)},$_.appendValues=function(t,e){for(var n=this._chunkSize,i=this._storage,r=this.dimensions,o=r.length,a=this._rawExtent,s=this.count(),l=s+Math.max(t.length,e?e.length:0),u=this._chunkCount,c=0;o>c;c++){var h=r[c];a[h]||(a[h]=Pl()),i[h]||(i[h]=[]),bl(i,this._dimensionInfos[h],n,u,l),this._chunkCount=i[h].length}for(var f=new Array(o),d=s;l>d;d++){for(var p=d-s,g=Math.floor(d/n),v=d%n,m=0;o>m;m++){h=r[m];var y=this._dimValueGetterArrayRows(t[p]||f,h,p,m);i[h][g][v]=y;var _=a[h];y<_[0]&&(_[0]=y),y>_[1]&&(_[1]=y)}e&&(this._nameList[d]=e[p])}this._rawCount=this._count=l,this._extent={},Sl(this)},$_._initDataFromProvider=function(t,e){if(!(t>=e)){for(var n,i=this._chunkSize,r=this._rawData,o=this._storage,a=this.dimensions,s=a.length,l=this._dimensionInfos,u=this._nameList,c=this._idList,h=this._rawExtent,f=this._nameRepeatCount={},d=this._chunkCount,p=0;s>p;p++){var g=a[p];h[g]||(h[g]=Pl());var v=l[g];0===v.otherDims.itemName&&(n=this._nameDimIdx=p),0===v.otherDims.itemId&&(this._idDimIdx=p),o[g]||(o[g]=[]),bl(o,v,i,d,e),this._chunkCount=o[g].length}for(var m=new Array(s),y=t;e>y;y++){m=r.getItem(y,m);for(var _=Math.floor(y/i),x=y%i,w=0;s>w;w++){g=a[w];var b=o[g][_],S=this._dimValueGetter(m,g,y,w);b[x]=S;var M=h[g];S<M[0]&&(M[0]=S),S>M[1]&&(M[1]=S)}if(!r.pure){var I=u[y];if(m&&null==I)if(null!=m.name)u[y]=I=m.name;else if(null!=n){var A=a[n],T=o[A][_];if(T){I=T[x];var k=l[A].ordinalMeta;k&&k.categories.length&&(I=k.categories[I])}}var C=null==m?null:m.id;null==C&&null!=I&&(f[I]=f[I]||0,C=I,f[I]>0&&(C+="__ec__"+f[I]),f[I]++),null!=C&&(c[y]=C)}}!r.persistent&&r.clean&&r.clean(),this._rawCount=this._count=e,this._extent={},Sl(this)}},$_.count=function(){return this._count},$_.getIndices=function(){var t=this._indices;if(t){var e=t.constructor,n=this._count;if(e===Array){r=new e(n);for(var i=0;n>i;i++)r[i]=t[i]}else r=new e(t.buffer,0,n)}else{e=_l(this);var r=new e(this.count());for(i=0;i<r.length;i++)r[i]=i}return r},$_.get=function(t,e){if(!(e>=0&&e<this._count))return NaN;var n=this._storage;if(!n[t])return NaN;e=this.getRawIndex(e);var i=Math.floor(e/this._chunkSize),r=e%this._chunkSize,o=n[t][i],a=o[r];return a},$_.getByRawIndex=function(t,e){if(!(e>=0&&e<this._rawCount))return NaN;var n=this._storage[t];if(!n)return NaN;var i=Math.floor(e/this._chunkSize),r=e%this._chunkSize,o=n[i];return o[r]},$_._getFast=function(t,e){var n=Math.floor(e/this._chunkSize),i=e%this._chunkSize,r=this._storage[t][n];return r[i]},$_.getValues=function(t,e){var n=[];b(t)||(e=t,t=this.dimensions);for(var i=0,r=t.length;r>i;i++)n.push(this.get(t[i],e));return n},$_.hasValue=function(t){for(var e=this._dimensionsSummary.dataDimsOnCoord,n=this._dimensionInfos,i=0,r=e.length;r>i;i++)if("ordinal"!==n[e[i]].type&&isNaN(this.get(e[i],t)))return!1;return!0},$_.getDataExtent=function(t){t=this.getDimension(t);var e=this._storage[t],n=Pl();if(!e)return n;var i,r=this.count(),o=!this._indices;if(o)return this._rawExtent[t].slice();if(i=this._extent[t])return i.slice();i=n;for(var a=i[0],s=i[1],l=0;r>l;l++){var u=this._getFast(t,this.getRawIndex(l));a>u&&(a=u),u>s&&(s=u)}return i=[a,s],this._extent[t]=i,i},$_.getApproximateExtent=function(t){return t=this.getDimension(t),this._approximateExtent[t]||this.getDataExtent(t)},$_.setApproximateExtent=function(t,e){e=this.getDimension(e),this._approximateExtent[e]=t.slice()},$_.getCalculationInfo=function(t){return this._calculationInfo[t]},$_.setCalculationInfo=function(t,e){C_(t)?l(this._calculationInfo,t):this._calculationInfo[t]=e},$_.getSum=function(t){var e=this._storage[t],n=0;if(e)for(var i=0,r=this.count();r>i;i++){var o=this.get(t,i);isNaN(o)||(n+=o)}return n},$_.getMedian=function(t){var e=[];this.each(t,function(t){isNaN(t)||e.push(t)});var n=[].concat(e).sort(function(t,e){return t-e}),i=this.count();return 0===i?0:i%2===1?n[(i-1)/2]:(n[i/2]+n[i/2-1])/2},$_.rawIndexOf=function(t,e){var n=t&&this._invertedIndicesMap[t],i=n[e];return null==i||isNaN(i)?P_:i},$_.indexOfName=function(t){for(var e=0,n=this.count();n>e;e++)if(this.getName(e)===t)return e;return-1},$_.indexOfRawIndex=function(t){if(!this._indices)return t;if(t>=this._rawCount||0>t)return-1;var e=this._indices,n=e[t];if(null!=n&&n<this._count&&n===t)return t;for(var i=0,r=this._count-1;r>=i;){var o=(i+r)/2|0;if(e[o]<t)i=o+1;else{if(!(e[o]>t))return o;r=o-1}}return-1},$_.indicesOfNearest=function(t,e,n){var i=this._storage,r=i[t],o=[];if(!r)return o;null==n&&(n=1/0);for(var a=Number.MAX_VALUE,s=-1,l=0,u=this.count();u>l;l++){var c=e-this.get(t,l),h=Math.abs(c);n>=c&&a>=h&&((a>h||c>=0&&0>s)&&(a=h,s=c,o.length=0),o.push(l))}return o},$_.getRawIndex=Il,$_.getRawDataItem=function(t){if(this._rawData.persistent)return this._rawData.getItem(this.getRawIndex(t));for(var e=[],n=0;n<this.dimensions.length;n++){var i=this.dimensions[n];e.push(this.get(i,t))}return e},$_.getName=function(t){var e=this.getRawIndex(t);return this._nameList[e]||Ml(this,this._nameDimIdx,e)||""},$_.getId=function(t){return Tl(this,this.getRawIndex(t))},$_.each=function(t,e,n,i){if(this._count){"function"==typeof t&&(i=n,n=e,e=t,t=[]),n=n||i||this,t=v(kl(t),this.getDimension,this);for(var r=t.length,o=0;o<this.count();o++)switch(r){case 0:e.call(n,o);break;case 1:e.call(n,this.get(t[0],o),o);break;case 2:e.call(n,this.get(t[0],o),this.get(t[1],o),o);break;default:for(var a=0,s=[];r>a;a++)s[a]=this.get(t[a],o);s[a]=o,e.apply(n,s)}}},$_.filterSelf=function(t,e,n,i){if(this._count){"function"==typeof t&&(i=n,n=e,e=t,t=[]),n=n||i||this,t=v(kl(t),this.getDimension,this);for(var r=this.count(),o=_l(this),a=new o(r),s=[],l=t.length,u=0,c=t[0],h=0;r>h;h++){var f,d=this.getRawIndex(h);if(0===l)f=e.call(n,h);else if(1===l){var p=this._getFast(c,d);f=e.call(n,p,h)}else{for(var g=0;l>g;g++)s[g]=this._getFast(c,d);s[g]=h,f=e.apply(n,s)}f&&(a[u++]=d)}return r>u&&(this._indices=a),this._count=u,this._extent={},this.getRawIndex=this._indices?Al:Il,this}},$_.selectRange=function(t){if(this._count){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);var i=e.length;if(i){var r=this.count(),o=_l(this),a=new o(r),s=0,l=e[0],u=t[l][0],c=t[l][1],h=!1;if(!this._indices){var f=0;if(1===i){for(var d=this._storage[e[0]],p=0;p<this._chunkCount;p++)for(var g=d[p],v=Math.min(this._count-p*this._chunkSize,this._chunkSize),m=0;v>m;m++){var y=g[m];(y>=u&&c>=y||isNaN(y))&&(a[s++]=f),f++}h=!0}else if(2===i){d=this._storage[l];var _=this._storage[e[1]],x=t[e[1]][0],w=t[e[1]][1];for(p=0;p<this._chunkCount;p++){g=d[p];var b=_[p];for(v=Math.min(this._count-p*this._chunkSize,this._chunkSize),m=0;v>m;m++){y=g[m];var S=b[m];(y>=u&&c>=y||isNaN(y))&&(S>=x&&w>=S||isNaN(S))&&(a[s++]=f),f++}}h=!0}}if(!h)if(1===i)for(m=0;r>m;m++){var M=this.getRawIndex(m);y=this._getFast(l,M);(y>=u&&c>=y||isNaN(y))&&(a[s++]=M)}else for(m=0;r>m;m++){var I=!0;for(M=this.getRawIndex(m),p=0;i>p;p++){var A=e[p];y=this._getFast(n,M);(y<t[A][0]||y>t[A][1])&&(I=!1)}I&&(a[s++]=this.getRawIndex(m))}return r>s&&(this._indices=a),this._count=s,this._extent={},this.getRawIndex=this._indices?Al:Il,this}}},$_.mapArray=function(t,e,n,i){"function"==typeof t&&(i=n,n=e,e=t,t=[]),n=n||i||this;var r=[];return this.each(t,function(){r.push(e&&e.apply(this,arguments))},n),r},$_.map=function(t,e,n,i){n=n||i||this,t=v(kl(t),this.getDimension,this);var r=Cl(this,t);r._indices=this._indices,r.getRawIndex=r._indices?Al:Il;for(var o=r._storage,a=[],s=this._chunkSize,l=t.length,u=this.count(),c=[],h=r._rawExtent,f=0;u>f;f++){for(var d=0;l>d;d++)c[d]=this.get(t[d],f);c[l]=f;var p=e&&e.apply(n,c);if(null!=p){"object"!=typeof p&&(a[0]=p,p=a);for(var g=this.getRawIndex(f),m=Math.floor(g/s),y=g%s,_=0;_<p.length;_++){var x=t[_],w=p[_],b=h[x],S=o[x];S&&(S[m][y]=w),w<b[0]&&(b[0]=w),w>b[1]&&(b[1]=w)}}}return r},$_.downSample=function(t,e,n,i){for(var r=Cl(this,[t]),o=r._storage,a=[],s=Math.floor(1/e),l=o[t],u=this.count(),c=this._chunkSize,h=r._rawExtent[t],f=new(_l(this))(u),d=0,p=0;u>p;p+=s){s>u-p&&(s=u-p,a.length=s);for(var g=0;s>g;g++){var v=this.getRawIndex(p+g),m=Math.floor(v/c),y=v%c;a[g]=l[m][y]}var _=n(a),x=this.getRawIndex(Math.min(p+i(a,_)||0,u-1)),w=Math.floor(x/c),b=x%c;l[w][b]=_,_<h[0]&&(h[0]=_),_>h[1]&&(h[1]=_),f[d++]=x}return r._count=d,r._indices=f,r.getRawIndex=Al,r},$_.getItemModel=function(t){var e=this.hostModel;return new Gr(this.getRawDataItem(t),e,e&&e.ecModel)},$_.diff=function(t){var e=this;return new pl(t?t.getIndices():[],this.getIndices(),function(e){return Tl(t,e)},function(t){return Tl(e,t)})},$_.getVisual=function(t){var e=this._visual;return e&&e[t]},$_.setVisual=function(t,e){if(C_(t))for(var n in t)t.hasOwnProperty(n)&&this.setVisual(n,t[n]);else this._visual=this._visual||{},this._visual[t]=e},$_.setLayout=function(t,e){if(C_(t))for(var n in t)t.hasOwnProperty(n)&&this.setLayout(n,t[n]);else this._layout[t]=e},$_.getLayout=function(t){return this._layout[t]},$_.getItemLayout=function(t){return this._itemLayouts[t]},$_.setItemLayout=function(t,e,n){this._itemLayouts[t]=n?l(this._itemLayouts[t]||{},e):e},$_.clearItemLayouts=function(){this._itemLayouts.length=0},$_.getItemVisual=function(t,e,n){var i=this._itemVisuals[t],r=i&&i[e];return null!=r||n?r:this.getVisual(e)},$_.setItemVisual=function(t,e,n){var i=this._itemVisuals[t]||{},r=this.hasItemVisual;if(this._itemVisuals[t]=i,C_(e))for(var o in e)e.hasOwnProperty(o)&&(i[o]=e[o],r[o]=!0);else i[e]=n,r[e]=!0},$_.clearAllVisual=function(){this._visual={},this._itemVisuals=[],this.hasItemVisual={}};var V_=function(t){t.seriesIndex=this.seriesIndex,t.dataIndex=this.dataIndex,t.dataType=this.dataType};$_.setItemGraphicEl=function(t,e){var n=this.hostModel;e&&(e.dataIndex=t,e.dataType=this.dataType,e.seriesIndex=n&&n.seriesIndex,"group"===e.type&&e.traverse(V_,e)),this._graphicEls[t]=e},$_.getItemGraphicEl=function(t){return this._graphicEls[t]},$_.eachItemGraphicEl=function(t,e){g(this._graphicEls,function(n,i){n&&t&&t.call(e,n,i)})},$_.cloneShallow=function(t){if(!t){var e=v(this.dimensions,this.getDimensionInfo,this);t=new F_(e,this.hostModel)}if(t._storage=this._storage,wl(t,this),this._indices){var n=this._indices.constructor;t._indices=new n(this._indices)}else t._indices=null;return t.getRawIndex=t._indices?Al:Il,t},$_.wrapMethod=function(t,e){var n=this[t];"function"==typeof n&&(this.__wrappedMethods=this.__wrappedMethods||[],this.__wrappedMethods.push(t),this[t]=function(){var t=n.apply(this,arguments);return e.apply(this,[t].concat(L(arguments)))})},$_.TRANSFERABLE_METHODS=["cloneShallow","downSample","map"],$_.CHANGABLE_METHODS=["filterSelf","selectRange"];var j_=function(t,e){return e=e||{},Ol(e.coordDimensions||[],t,{dimsDef:e.dimensionsDefine||t.dimensionsDefine,encodeDef:e.encodeDefine||t.encodeDefine,dimCount:e.dimensionsCount,generateCoord:e.generateCoord,generateCoordCount:e.generateCoordCount})};Vl.prototype.parse=function(t){return t},Vl.prototype.getSetting=function(t){return this._setting[t]},Vl.prototype.contain=function(t){var e=this._extent;return t>=e[0]&&t<=e[1]},Vl.prototype.normalize=function(t){var e=this._extent;return e[1]===e[0]?.5:(t-e[0])/(e[1]-e[0])},Vl.prototype.scale=function(t){var e=this._extent;return t*(e[1]-e[0])+e[0]},Vl.prototype.unionExtent=function(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1])},Vl.prototype.unionExtentFromData=function(t,e){this.unionExtent(t.getApproximateExtent(e))},Vl.prototype.getExtent=function(){return this._extent.slice()},Vl.prototype.setExtent=function(t,e){var n=this._extent;isNaN(t)||(n[0]=t),isNaN(e)||(n[1]=e)},Vl.prototype.isBlank=function(){return this._isBlank},Vl.prototype.setBlank=function(t){this._isBlank=t},Vl.prototype.getLabel=null,ni(Vl),ai(Vl,{registerWhenExtend:!0}),jl.createByAxisModel=function(t){var e=t.option,n=e.data,i=n&&v(n,Gl);return new jl({categories:i,needCollect:!i,deduplication:!1!==e.dedplication})};var H_=jl.prototype;H_.getOrdinal=function(t){return Hl(this).get(t)},H_.parseAndCollect=function(t){var e,n=this._needCollect;if("string"!=typeof t&&!n)return t;if(n&&!this._deduplication)return e=this.categories.length,this.categories[e]=t,e;var i=Hl(this);return e=i.get(t),null==e&&(n?(e=this.categories.length,this.categories[e]=t,i.set(t,e)):e=NaN),e};var G_=Vl.prototype,W_=Vl.extend({type:"ordinal",init:function(t,e){(!t||b(t))&&(t=new jl({categories:t})),this._ordinalMeta=t,this._extent=e||[0,t.categories.length-1]},parse:function(t){return"string"==typeof t?this._ordinalMeta.getOrdinal(t):Math.round(t)},contain:function(t){return t=this.parse(t),G_.contain.call(this,t)&&null!=this._ordinalMeta.categories[t]},normalize:function(t){return G_.normalize.call(this,this.parse(t))},scale:function(t){return Math.round(G_.scale.call(this,t))},getTicks:function(){for(var t=[],e=this._extent,n=e[0];n<=e[1];)t.push(n),n++;return t},getLabel:function(t){return this.isBlank()?void 0:this._ordinalMeta.categories[t]},count:function(){return this._extent[1]-this._extent[0]+1},unionExtentFromData:function(t,e){this.unionExtent(t.getApproximateExtent(e))},getOrdinalMeta:function(){return this._ordinalMeta},niceTicks:j,niceExtent:j});W_.create=function(){return new W_};var U_=Qr,X_=Qr,Y_=Vl.extend({type:"interval",_interval:0,_intervalPrecision:2,setExtent:function(t,e){var n=this._extent;isNaN(t)||(n[0]=parseFloat(t)),isNaN(e)||(n[1]=parseFloat(e))},unionExtent:function(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1]),Y_.prototype.setExtent.call(this,e[0],e[1])},getInterval:function(){return this._interval},setInterval:function(t){this._interval=t,this._niceExtent=this._extent.slice(),this._intervalPrecision=Ul(t)},getTicks:function(){return ql(this._interval,this._extent,this._niceExtent,this._intervalPrecision)},getLabel:function(t,e){if(null==t)return"";var n=e&&e.precision;return null==n?n=no(t)||0:"auto"===n&&(n=this._intervalPrecision),t=X_(t,n,!0),go(t)},niceTicks:function(t,e,n){t=t||5;var i=this._extent,r=i[1]-i[0];if(isFinite(r)){0>r&&(r=-r,i.reverse());var o=Wl(i,t,e,n);this._intervalPrecision=o.intervalPrecision,this._interval=o.interval,this._niceExtent=o.niceTickExtent}},niceExtent:function(t){var e=this._extent;if(e[0]===e[1])if(0!==e[0]){var n=e[0];t.fixMax?e[0]-=n/2:(e[1]+=n/2,e[0]-=n/2)}else e[1]=1;var i=e[1]-e[0];isFinite(i)||(e[0]=0,e[1]=1),this.niceTicks(t.splitNumber,t.minInterval,t.maxInterval);var r=this._interval;t.fixMin||(e[0]=X_(Math.floor(e[0]/r)*r)),t.fixMax||(e[1]=X_(Math.ceil(e[1]/r)*r))}});Y_.create=function(){return new Y_};var q_="__ec_stack_",Z_=.5,K_="undefined"!=typeof Float32Array?Float32Array:Array,J_={seriesType:"bar",plan:uy(),reset:function(t){function e(t,e){for(var n,h=new K_(2*t.count),f=[],d=[],p=0;null!=(n=t.next());)d[u]=e.get(a,n),d[1-u]=e.get(s,n),f=i.dataToPoint(d,null,f),h[p++]=f[0],h[p++]=f[1];e.setLayout({largePoints:h,barWidth:c,valueAxisStart:ou(r,o,!1),valueAxisHorizontal:l})}if(iu(t)&&ru(t)){var n=t.getData(),i=t.coordinateSystem,r=i.getBaseAxis(),o=i.getOtherAxis(r),a=n.mapDimension(o.dim),s=n.mapDimension(r.dim),l=o.isHorizontal(),u=l?0:1,c=eu(Ql([t]),r,t).width;return c>Z_||(c=Z_),{progress:e}}}},Q_=Y_.prototype,tx=Math.ceil,ex=Math.floor,nx=1e3,ix=60*nx,rx=60*ix,ox=24*rx,ax=function(t,e,n,i){for(;i>n;){var r=n+i>>>1;t[r][1]<e?n=r+1:i=r}return n},sx=Y_.extend({type:"time",getLabel:function(t){var e=this._stepLvl,n=new Date(t);return bo(e[0],n,this.getSetting("useUTC"))},niceExtent:function(t){var e=this._extent;if(e[0]===e[1]&&(e[0]-=ox,e[1]+=ox),e[1]===-1/0&&1/0===e[0]){var n=new Date;e[1]=+new Date(n.getFullYear(),n.getMonth(),n.getDate()),e[0]=e[1]-ox}this.niceTicks(t.splitNumber,t.minInterval,t.maxInterval);var i=this._interval;t.fixMin||(e[0]=Qr(ex(e[0]/i)*i)),t.fixMax||(e[1]=Qr(tx(e[1]/i)*i))},niceTicks:function(t,e,n){t=t||10;var i=this._extent,r=i[1]-i[0],o=r/t;null!=e&&e>o&&(o=e),null!=n&&o>n&&(o=n);var a=lx.length,s=ax(lx,o,0,a),l=lx[Math.min(s,a-1)],u=l[1];if("year"===l[0]){var c=r/u,h=co(c/t,!0);u*=h}var f=this.getSetting("useUTC")?0:60*new Date(+i[0]||+i[1]).getTimezoneOffset()*1e3,d=[Math.round(tx((i[0]-f)/u)*u+f),Math.round(ex((i[1]-f)/u)*u+f)];Yl(d,i),this._stepLvl=l,this._interval=u,this._niceExtent=d},parse:function(t){return+so(t)}});g(["contain","normalize"],function(t){sx.prototype[t]=function(e){return Q_[t].call(this,this.parse(e))}});var lx=[["hh:mm:ss",nx],["hh:mm:ss",5*nx],["hh:mm:ss",10*nx],["hh:mm:ss",15*nx],["hh:mm:ss",30*nx],["hh:mm\nMM-dd",ix],["hh:mm\nMM-dd",5*ix],["hh:mm\nMM-dd",10*ix],["hh:mm\nMM-dd",15*ix],["hh:mm\nMM-dd",30*ix],["hh:mm\nMM-dd",rx],["hh:mm\nMM-dd",2*rx],["hh:mm\nMM-dd",6*rx],["hh:mm\nMM-dd",12*rx],["MM-dd\nyyyy",ox],["MM-dd\nyyyy",2*ox],["MM-dd\nyyyy",3*ox],["MM-dd\nyyyy",4*ox],["MM-dd\nyyyy",5*ox],["MM-dd\nyyyy",6*ox],["week",7*ox],["MM-dd\nyyyy",10*ox],["week",14*ox],["week",21*ox],["month",31*ox],["week",42*ox],["month",62*ox],["week",70*ox],["quarter",95*ox],["month",31*ox*4],["month",31*ox*5],["half-year",380*ox/2],["month",31*ox*8],["month",31*ox*10],["year",380*ox]];sx.create=function(t){return new sx({useUTC:t.ecModel.get("useUTC")})};var ux=Vl.prototype,cx=Y_.prototype,hx=no,fx=Qr,dx=Math.floor,px=Math.ceil,gx=Math.pow,vx=Math.log,mx=Vl.extend({type:"log",base:10,$constructor:function(){Vl.apply(this,arguments),this._originalScale=new Y_},getTicks:function(){var t=this._originalScale,e=this._extent,n=t.getExtent();return v(cx.getTicks.call(this),function(i){var r=Qr(gx(this.base,i));return r=i===e[0]&&t.__fixMin?au(r,n[0]):r,i===e[1]&&t.__fixMax?au(r,n[1]):r},this)},getLabel:cx.getLabel,scale:function(t){return t=ux.scale.call(this,t),gx(this.base,t)},setExtent:function(t,e){var n=this.base;t=vx(t)/vx(n),e=vx(e)/vx(n),cx.setExtent.call(this,t,e)},getExtent:function(){var t=this.base,e=ux.getExtent.call(this);e[0]=gx(t,e[0]),e[1]=gx(t,e[1]);var n=this._originalScale,i=n.getExtent();return n.__fixMin&&(e[0]=au(e[0],i[0])),n.__fixMax&&(e[1]=au(e[1],i[1])),e},unionExtent:function(t){this._originalScale.unionExtent(t);var e=this.base;t[0]=vx(t[0])/vx(e),t[1]=vx(t[1])/vx(e),ux.unionExtent.call(this,t)},unionExtentFromData:function(t,e){this.unionExtent(t.getApproximateExtent(e))},niceTicks:function(t){t=t||10;var e=this._extent,n=e[1]-e[0];if(!(1/0===n||0>=n)){var i=lo(n),r=t/n*i;for(.5>=r&&(i*=10);!isNaN(i)&&Math.abs(i)<1&&Math.abs(i)>0;)i*=10;var o=[Qr(px(e[0]/i)*i),Qr(dx(e[1]/i)*i)];this._interval=i,this._niceExtent=o}},niceExtent:function(t){cx.niceExtent.call(this,t);var e=this._originalScale;e.__fixMin=t.fixMin,e.__fixMax=t.fixMax}});g(["contain","normalize"],function(t){mx.prototype[t]=function(e){return e=vx(e)/vx(this.base),ux[t].call(this,e)}}),mx.create=function(){return new mx};var yx={getMin:function(t){var e=this.option,n=t||null==e.rangeStart?e.min:e.rangeStart;return this.axis&&null!=n&&"dataMin"!==n&&"function"!=typeof n&&!C(n)&&(n=this.axis.scale.parse(n)),n},getMax:function(t){var e=this.option,n=t||null==e.rangeEnd?e.max:e.rangeEnd;return this.axis&&null!=n&&"dataMax"!==n&&"function"!=typeof n&&!C(n)&&(n=this.axis.scale.parse(n)),n},getNeedCrossZero:function(){var t=this.option;return null==t.rangeStart&&null==t.rangeEnd&&!t.scale},getCoordSysModel:j,setRange:function(t,e){this.option.rangeStart=t,this.option.rangeEnd=e},resetRange:function(){this.option.rangeStart=this.option.rangeEnd=null}},_x=tr({type:"triangle",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=e.width/2,o=e.height/2;t.moveTo(n,i-o),t.lineTo(n+r,i+o),t.lineTo(n-r,i+o),t.closePath()}}),xx=tr({type:"diamond",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=e.width/2,o=e.height/2;t.moveTo(n,i-o),t.lineTo(n+r,i),t.lineTo(n,i+o),t.lineTo(n-r,i),t.closePath()}}),bx=tr({type:"pin",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.x,i=e.y,r=e.width/5*3,o=Math.max(r,e.height),a=r/2,s=a*a/(o-a),l=i-o+a+s,u=Math.asin(s/a),c=Math.cos(u)*a,h=Math.sin(u),f=Math.cos(u),d=.6*a,p=.7*a;t.moveTo(n-c,l+s),t.arc(n,l,a,Math.PI-u,2*Math.PI+u),t.bezierCurveTo(n+c-h*d,l+s+f*d,n,i-p,n,i),t.bezierCurveTo(n,i-p,n-c+h*d,l+s+f*d,n-c,l+s),t.closePath()}}),Sx=tr({type:"arrow",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.height,i=e.width,r=e.x,o=e.y,a=i/3*2;t.moveTo(r,o),t.lineTo(r+a,o+n),t.lineTo(r,o+n/4*3),t.lineTo(r-a,o+n),t.lineTo(r,o),t.closePath()}}),Mx={line:Pv,rect:Cv,roundRect:Cv,square:Cv,circle:yv,diamond:xx,pin:bx,arrow:Sx,triangle:_x},Ix={line:function(t,e,n,i,r){r.x1=t,r.y1=e+i/2,r.x2=t+n,r.y2=e+i/2},rect:function(t,e,n,i,r){r.x=t,r.y=e,r.width=n,r.height=i},roundRect:function(t,e,n,i,r){r.x=t,r.y=e,r.width=n,r.height=i,r.r=Math.min(n,i)/4},square:function(t,e,n,i,r){var o=Math.min(n,i);r.x=t,r.y=e,r.width=o,r.height=o},circle:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.r=Math.min(n,i)/2},diamond:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.width=n,r.height=i},pin:function(t,e,n,i,r){r.x=t+n/2,r.y=e+i/2,r.width=n,r.height=i},arrow:function(t,e,n,i,r){r.x=t+n/2,r.y=e+i/2,r.width=n,r.height=i},triangle:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.width=n,r.height=i}},Ax={};g(Mx,function(t,e){Ax[e]=new t});var Tx=tr({type:"symbol",shape:{symbolType:"",x:0,y:0,width:0,height:0},beforeBrush:function(){var t=this.style,e=this.shape;"pin"===e.symbolType&&"inside"===t.textPosition&&(t.textPosition=["50%","40%"],t.textAlign="center",t.textVerticalAlign="middle")},buildPath:function(t,e,n){var i=e.symbolType,r=Ax[i];"none"!==e.symbolType&&(r||(i="rect",r=Ax[i]),Ix[i](e.x,e.y,e.width,e.height,r.shape),r.buildPath(t,r.shape,n))}}),kx={isDimensionStacked:Rl,enableDataStack:Nl,getStackedDimension:Bl},Cx=(Object.freeze||Object)({createList:xu,getLayoutRect:To,dataStack:kx,createScale:wu,mixinAxisModelCommonMethods:bu,completeDimensions:Ol,createDimensions:j_,createSymbol:_u}),Dx=1e-8;Iu.prototype={constructor:Iu,properties:null,getBoundingRect:function(){var t=this._rect;if(t)return t;for(var e=Number.MAX_VALUE,n=[e,e],i=[-e,-e],r=[],o=[],a=this.geometries,s=0;s<a.length;s++)if("polygon"===a[s].type){var l=a[s].exterior;wi(l,r,o),lt(n,n,r),ut(i,i,o)}return 0===s&&(n[0]=n[1]=i[0]=i[1]=0),this._rect=new _e(n[0],n[1],i[0]-n[0],i[1]-n[1])},contain:function(t){var e=this.getBoundingRect(),n=this.geometries;if(!e.contain(t[0],t[1]))return!1;t:for(var i=0,r=n.length;r>i;i++)if("polygon"===n[i].type){var o=n[i].exterior,a=n[i].interiors;if(Mu(o,t[0],t[1])){for(var s=0;s<(a?a.length:0);s++)if(Mu(a[s]))continue t;return!0}}return!1},transformTo:function(t,e,n,i){var r=this.getBoundingRect(),o=r.width/r.height;n?i||(i=n/o):n=o*i;for(var a=new _e(t,e,n,i),s=r.calculateTransform(a),l=this.geometries,u=0;u<l.length;u++)if("polygon"===l[u].type){for(var c=l[u].exterior,h=l[u].interiors,f=0;f<c.length;f++)st(c[f],c[f],s);for(var d=0;d<(h?h.length:0);d++)for(f=0;f<h[d].length;f++)st(h[d][f],h[d][f],s)}r=this._rect,r.copy(a),this.center=[r.x+r.width/2,r.y+r.height/2]},cloneShallow:function(t){null==t&&(t=this.name);var e=new Iu(t,this.geometries,this.center);return e._rect=this._rect,e.transformTo=null,e}};var Px=function(t){return Au(t),v(y(t.features,function(t){return t.geometry&&t.properties&&t.geometry.coordinates.length>0}),function(t){var e=t.properties,n=t.geometry,i=n.coordinates,r=[];"Polygon"===n.type&&r.push({type:"polygon",exterior:i[0],interiors:i.slice(1)}),"MultiPolygon"===n.type&&g(i,function(t){t[0]&&r.push({type:"polygon",exterior:t[0],interiors:t.slice(1)})});var o=new Iu(e.name,r,e.cp);return o.properties=e,o})},Ox=Yn(),Lx=[0,1],Ex=function(t,e,n){this.dim=t,this.scale=e,this._extent=n||[0,0],this.inverse=!1,this.onBand=!1};Ex.prototype={constructor:Ex,contain:function(t){var e=this._extent,n=Math.min(e[0],e[1]),i=Math.max(e[0],e[1]);return t>=n&&i>=t},containData:function(t){return this.contain(this.dataToCoord(t))},getExtent:function(){return this._extent.slice()},getPixelPrecision:function(t){return io(t||this.scale.getExtent(),this._extent)},setExtent:function(t,e){var n=this._extent;n[0]=t,n[1]=e},dataToCoord:function(t,e){var n=this._extent,i=this.scale;return t=i.normalize(t),this.onBand&&"ordinal"===i.type&&(n=n.slice(),ju(n,i.count())),Kr(t,Lx,n,e)},coordToData:function(t,e){var n=this._extent,i=this.scale;this.onBand&&"ordinal"===i.type&&(n=n.slice(),ju(n,i.count()));var r=Kr(t,n,Lx,e);return this.scale.scale(r)},pointToData:function(){},getTicksCoords:function(t){t=t||{};var e=t.tickModel||this.getTickModel(),n=Cu(this,e),i=n.ticks,r=v(i,function(t){return{coord:this.dataToCoord(t),tickValue:t}},this),o=e.get("alignWithLabel");return Hu(this,r,n.tickCategoryInterval,o,t.clamp),r},getViewLabels:function(){return ku(this).labels},getLabelModel:function(){return this.model.getModel("axisLabel")},getTickModel:function(){return this.model.getModel("axisTick")},getBandWidth:function(){var t=this._extent,e=this.scale.getExtent(),n=e[1]-e[0]+(this.onBand?1:0);0===n&&(n=1);var i=Math.abs(t[1]-t[0]);return Math.abs(i)/n},isHorizontal:null,getRotate:null,calculateCategoryInterval:function(){return zu(this)}};var Nx=Px,Rx={};g(["map","each","filter","indexOf","inherits","reduce","filter","bind","curry","isArray","isString","isObject","isFunction","extend","defaults","clone","merge"],function(t){Rx[t]=ud[t]});var Bx={};g(["extendShape","extendPath","makePath","makeImage","mergePath","resizePath","createIcon","setHoverStyle","setLabelStyle","setTextStyle","setText","getFont","updateProps","initProps","getTransform","clipPointsByRect","clipRectByRect","Group","Image","Text","Circle","Sector","Ring","Polygon","Polyline","Rect","Line","BezierCurve","Arc","IncrementalDisplayable","CompoundPath","LinearGradient","RadialGradient","BoundingRect"],function(t){Bx[t]=Yv[t]});var zx=function(t){this._axes={},this._dimList=[],this.name=t||""};zx.prototype={constructor:zx,type:"cartesian",getAxis:function(t){return this._axes[t]},getAxes:function(){return v(this._dimList,Gu,this)},getAxesByScale:function(t){return t=t.toLowerCase(),y(this.getAxes(),function(e){return e.scale.type===t})},addAxis:function(t){var e=t.dim;this._axes[e]=t,this._dimList.push(e)},dataToCoord:function(t){return this._dataCoordConvert(t,"dataToCoord")},coordToData:function(t){return this._dataCoordConvert(t,"coordToData")},_dataCoordConvert:function(t,e){for(var n=this._dimList,i=t instanceof Array?[]:{},r=0;r<n.length;r++){var o=n[r],a=this._axes[o];i[o]=a[e](t[o])}return i}},Wu.prototype={constructor:Wu,type:"cartesian2d",dimensions:["x","y"],getBaseAxis:function(){return this.getAxesByScale("ordinal")[0]||this.getAxesByScale("time")[0]||this.getAxis("x")},containPoint:function(t){var e=this.getAxis("x"),n=this.getAxis("y");return e.contain(e.toLocalCoord(t[0]))&&n.contain(n.toLocalCoord(t[1]))},containData:function(t){return this.getAxis("x").containData(t[0])&&this.getAxis("y").containData(t[1])},dataToPoint:function(t,e,n){var i=this.getAxis("x"),r=this.getAxis("y");return n=n||[],n[0]=i.toGlobalCoord(i.dataToCoord(t[0])),n[1]=r.toGlobalCoord(r.dataToCoord(t[1])),n},clampData:function(t,e){var n=this.getAxis("x").scale,i=this.getAxis("y").scale,r=n.getExtent(),o=i.getExtent(),a=n.parse(t[0]),s=i.parse(t[1]);return e=e||[],e[0]=Math.min(Math.max(Math.min(r[0],r[1]),a),Math.max(r[0],r[1])),e[1]=Math.min(Math.max(Math.min(o[0],o[1]),s),Math.max(o[0],o[1])),e},pointToData:function(t,e){var n=this.getAxis("x"),i=this.getAxis("y");return e=e||[],e[0]=n.coordToData(n.toLocalCoord(t[0])),e[1]=i.coordToData(i.toLocalCoord(t[1])),e},getOtherAxis:function(t){return this.getAxis("x"===t.dim?"y":"x")}},f(Wu,zx);var Fx=function(t,e,n,i,r){Ex.call(this,t,e,n),this.type=i||"value",this.position=r||"bottom"};Fx.prototype={constructor:Fx,index:0,getAxesOnZeroOf:null,model:null,isHorizontal:function(){var t=this.position;return"top"===t||"bottom"===t},getGlobalExtent:function(t){var e=this.getExtent();return e[0]=this.toGlobalCoord(e[0]),e[1]=this.toGlobalCoord(e[1]),t&&e[0]>e[1]&&e.reverse(),e},getOtherAxis:function(){this.grid.getOtherAxis()},pointToData:function(t,e){return this.coordToData(this.toLocalCoord(t["x"===this.dim?0:1]),e)},toLocalCoord:null,toGlobalCoord:null},f(Fx,Ex);var $x={show:!0,zlevel:0,z:0,inverse:!1,name:"",nameLocation:"end",nameRotate:null,nameTruncate:{maxWidth:null,ellipsis:"...",placeholder:"."},nameTextStyle:{},nameGap:15,silent:!1,triggerEvent:!1,tooltip:{show:!1},axisPointer:{},axisLine:{show:!0,onZero:!0,onZeroAxisIndex:null,lineStyle:{color:"#333",width:1,type:"solid"},symbol:["none","none"],symbolSize:[10,15]},axisTick:{show:!0,inside:!1,length:5,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,showMinLabel:null,showMaxLabel:null,margin:8,fontSize:12},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},Vx={};Vx.categoryAxis=a({boundaryGap:!0,deduplication:null,splitLine:{show:!1},axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"}},$x),Vx.valueAxis=a({boundaryGap:[0,0],splitNumber:5},$x),Vx.timeAxis=u({scale:!0,min:"dataMin",max:"dataMax"},Vx.valueAxis),Vx.logAxis=u({scale:!0,logBase:10},Vx.valueAxis);var jx=["value","category","time","log"],Hx=function(t,e,n,i){g(jx,function(r){e.extend({type:t+"Axis."+r,mergeDefaultAndTheme:function(e,i){var o=this.layoutMode,s=o?Co(e):{},l=i.getTheme();a(e,l.get(r+"Axis")),a(e,this.getDefaultOption()),e.type=n(t,e),o&&ko(e,s,o)},optionUpdated:function(){var t=this.option;"category"===t.type&&(this.__ordinalMeta=jl.createByAxisModel(this))},getCategories:function(t){var e=this.option;return"category"===e.type?t?e.data:this.__ordinalMeta.categories:void 0},getOrdinalMeta:function(){return this.__ordinalMeta},defaultOption:s([{},Vx[r+"Axis"],i],!0)})}),_m.registerSubTypeDefaulter(t+"Axis",w(n,t))},Gx=_m.extend({type:"cartesian2dAxis",axis:null,init:function(){Gx.superApply(this,"init",arguments),this.resetRange()},mergeOption:function(){Gx.superApply(this,"mergeOption",arguments),this.resetRange()},restoreData:function(){Gx.superApply(this,"restoreData",arguments),this.resetRange()},getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"grid",index:this.option.gridIndex,id:this.option.gridId})[0]}});a(Gx.prototype,yx);var Wx={offset:0};Hx("x",Gx,Uu,Wx),Hx("y",Gx,Uu,Wx),_m.extend({type:"grid",dependencies:["xAxis","yAxis"],layoutMode:"box",coordinateSystem:null,defaultOption:{show:!1,zlevel:0,z:0,left:"10%",top:60,right:"10%",bottom:60,containLabel:!1,backgroundColor:"rgba(0,0,0,0)",borderWidth:1,borderColor:"#ccc"}});var Ux=Yu.prototype;Ux.type="grid",Ux.axisPointerEnabled=!0,Ux.getRect=function(){return this._rect},Ux.update=function(t,e){var n=this._axesMap;this._updateScale(t,this.model),g(n.x,function(t){uu(t.scale,t.model)}),g(n.y,function(t){uu(t.scale,t.model)});var i={};g(n.x,function(t){qu(n,"y",t,i)}),g(n.y,function(t){qu(n,"x",t,i)}),this.resize(this.model,e)},Ux.resize=function(t,e,n){function i(){g(o,function(t){var e=t.isHorizontal(),n=e?[0,r.width]:[0,r.height],i=t.inverse?1:0;t.setExtent(n[i],n[1-i]),Ku(t,e?r.x:r.y)})}var r=To(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()});this._rect=r;var o=this._axesList;i(),!n&&t.get("containLabel")&&(g(o,function(t){if(!t.model.get("axisLabel.inside")){var e=pu(t);if(e){var n=t.isHorizontal()?"height":"width",i=t.model.get("axisLabel.margin");r[n]-=e[n]+i,"top"===t.position?r.y+=e.height+i:"left"===t.position&&(r.x+=e.width+i)}}}),i())},Ux.getAxis=function(t,e){var n=this._axesMap[t];if(null!=n){if(null==e)for(var i in n)if(n.hasOwnProperty(i))return n[i];return n[e]}},Ux.getAxes=function(){return this._axesList.slice()},Ux.getCartesian=function(t,e){if(null!=t&&null!=e){var n="x"+t+"y"+e;return this._coordsMap[n]}I(t)&&(e=t.yAxisIndex,t=t.xAxisIndex);for(var i=0,r=this._coordsList;i<r.length;i++)if(r[i].getAxis("x").index===t||r[i].getAxis("y").index===e)return r[i]},Ux.getCartesians=function(){return this._coordsList.slice()},Ux.convertToPixel=function(t,e,n){var i=this._findConvertTarget(t,e);return i.cartesian?i.cartesian.dataToPoint(n):i.axis?i.axis.toGlobalCoord(i.axis.dataToCoord(n)):null},Ux.convertFromPixel=function(t,e,n){var i=this._findConvertTarget(t,e);return i.cartesian?i.cartesian.pointToData(n):i.axis?i.axis.coordToData(i.axis.toLocalCoord(n)):null},Ux._findConvertTarget=function(t,e){var n,i,r=e.seriesModel,o=e.xAxisModel||r&&r.getReferringComponents("xAxis")[0],a=e.yAxisModel||r&&r.getReferringComponents("yAxis")[0],s=e.gridModel,l=this._coordsList;if(r)n=r.coordinateSystem,h(l,n)<0&&(n=null);else if(o&&a)n=this.getCartesian(o.componentIndex,a.componentIndex);else if(o)i=this.getAxis("x",o.componentIndex);else if(a)i=this.getAxis("y",a.componentIndex);else if(s){var u=s.coordinateSystem;u===this&&(n=this._coordsList[0])}return{cartesian:n,axis:i}},Ux.containPoint=function(t){var e=this._coordsList[0];return e?e.containPoint(t):void 0},Ux._initCartesian=function(t,e){function n(n){return function(a,s){if(Xu(a,t,e)){var l=a.get("position");"x"===n?"top"!==l&&"bottom"!==l&&(l="bottom",i[l]&&(l="top"===l?"bottom":"top")):"left"!==l&&"right"!==l&&(l="left",i[l]&&(l="left"===l?"right":"left")),i[l]=!0;var u=new Fx(n,cu(a),[0,0],a.get("type"),l),c="category"===u.type;u.onBand=c&&a.get("boundaryGap"),u.inverse=a.get("inverse"),a.axis=u,u.model=a,u.grid=this,u.index=s,this._axesList.push(u),r[n][s]=u,o[n]++}}}var i={left:!1,right:!1,top:!1,bottom:!1},r={x:{},y:{}},o={x:0,y:0};return e.eachComponent("xAxis",n("x"),this),e.eachComponent("yAxis",n("y"),this),o.x&&o.y?(this._axesMap=r,void g(r.x,function(e,n){g(r.y,function(i,r){var o="x"+n+"y"+r,a=new Wu(o);a.grid=this,a.model=t,this._coordsMap[o]=a,this._coordsList.push(a),a.addAxis(e),a.addAxis(i)},this)},this)):(this._axesMap={},void(this._axesList=[]))},Ux._updateScale=function(t,e){function n(t,e){g(t.mapDimension(e.dim,!0),function(n){e.scale.unionExtentFromData(t,Bl(t,n))})}g(this._axesList,function(t){t.scale.setExtent(1/0,-1/0)}),t.eachSeries(function(i){if(Qu(i)){var r=Ju(i,t),o=r[0],a=r[1];if(!Xu(o,e,t)||!Xu(a,e,t))return;var s=this.getCartesian(o.componentIndex,a.componentIndex),l=i.getData(),u=s.getAxis("x"),c=s.getAxis("y");"list"===l.type&&(n(l,u,i),n(l,c,i))}},this)},Ux.getTooltipAxes=function(t){var e=[],n=[];return g(this.getCartesians(),function(i){var r=null!=t&&"auto"!==t?i.getAxis(t):i.getBaseAxis(),o=i.getOtherAxis(r);h(e,r)<0&&e.push(r),h(n,o)<0&&n.push(o)}),{baseAxes:e,otherAxes:n}};var Xx=["xAxis","yAxis"];Yu.create=function(t,e){var n=[];return t.eachComponent("grid",function(i,r){var o=new Yu(i,t,e);o.name="grid_"+r,o.resize(i,e,!0),i.coordinateSystem=o,n.push(o)}),t.eachSeries(function(e){if(Qu(e)){var n=Ju(e,t),i=n[0],r=n[1],o=i.getCoordSysModel(),a=o.coordinateSystem;e.coordinateSystem=a.getCartesian(i.componentIndex,r.componentIndex)}}),n},Yu.dimensions=Yu.prototype.dimensions=Wu.prototype.dimensions,na.register("cartesian2d",Yu);var Yx=ay.extend({type:"series.__base_bar__",getInitialData:function(){return zl(this.getSource(),this)},getMarkerPosition:function(t){var e=this.coordinateSystem;if(e){var n=e.dataToPoint(e.clampData(t)),i=this.getData(),r=i.getLayout("offset"),o=i.getLayout("size"),a=e.getBaseAxis().isHorizontal()?0:1;return n[a]+=r+o/2,n}return[NaN,NaN]},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,barMinHeight:0,barMinAngle:0,large:!1,largeThreshold:400,progressive:3e3,progressiveChunkMode:"mod",itemStyle:{},emphasis:{}}});Yx.extend({type:"series.bar",dependencies:["grid","polar"],brushSelector:"rect",getProgressive:function(){return!!this.get("large")&&this.get("progressive")},getProgressiveThreshold:function(){var t=this.get("progressiveThreshold"),e=this.get("largeThreshold");return e>t&&(t=e),t}});var qx=cg([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["stroke","barBorderColor"],["lineWidth","barBorderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),Zx={getBarItemStyle:function(t){var e=qx(this,t);if(this.getBorderLineDash){var n=this.getBorderLineDash();n&&(e.lineDash=n)}return e}},Kx=["itemStyle","barBorderWidth"];l(Gr.prototype,Zx),ul({type:"bar",render:function(t,e,n){this._updateDrawMode(t);var i=t.get("coordinateSystem");return("cartesian2d"===i||"polar"===i)&&(this._isLargeDraw?this._renderLarge(t,e,n):this._renderNormal(t,e,n)),this.group},incrementalPrepareRender:function(t){this._clear(),this._updateDrawMode(t)},incrementalRender:function(t,e){this._incrementalRenderLarge(t,e)},_updateDrawMode:function(t){var e=t.pipelineContext.large;(null==this._isLargeDraw||e^this._isLargeDraw)&&(this._isLargeDraw=e,this._clear())},_renderNormal:function(t){var e,n=this.group,i=t.getData(),r=this._data,o=t.coordinateSystem,a=o.getBaseAxis();"cartesian2d"===o.type?e=a.isHorizontal():"polar"===o.type&&(e="angle"===a.dim);var s=t.isAnimationEnabled()?t:null;i.diff(r).add(function(r){if(i.hasValue(r)){var a=i.getItemModel(r),l=Qx[o.type](i,r,a),u=Jx[o.type](i,r,a,l,e,s);i.setItemGraphicEl(r,u),n.add(u),oc(u,i,r,a,l,t,e,"polar"===o.type)}}).update(function(a,l){var u=r.getItemGraphicEl(l);if(i.hasValue(a)){var c=i.getItemModel(a),h=Qx[o.type](i,a,c);u?Nr(u,{shape:h},s,a):u=Jx[o.type](i,a,c,h,e,s,!0),i.setItemGraphicEl(a,u),n.add(u),oc(u,i,a,c,h,t,e,"polar"===o.type)}else n.remove(u)}).remove(function(t){var e=r.getItemGraphicEl(t);"cartesian2d"===o.type?e&&ic(t,s,e):e&&rc(t,s,e)}).execute(),this._data=i},_renderLarge:function(t){this._clear(),sc(t,this.group)},_incrementalRenderLarge:function(t,e){sc(e,this.group,!0)},dispose:j,remove:function(t){this._clear(t)},_clear:function(t){var e=this.group,n=this._data;t&&t.get("animation")&&n&&!this._isLargeDraw?n.eachItemGraphicEl(function(e){"sector"===e.type?rc(e.dataIndex,t,e):ic(e.dataIndex,t,e)}):e.removeAll(),this._data=null}});var Jx={cartesian2d:function(t,e,n,i,r,o,a){var s=new Cv({shape:l({},i)});if(o){var u=s.shape,c=r?"height":"width",h={};u[c]=0,h[c]=i[c],Yv[a?"updateProps":"initProps"](s,{shape:h},o,e)}return s},polar:function(t,e,n,i,r,o,a){var s=i.startAngle<i.endAngle,l=new wv({shape:u({clockwise:s},i)});if(o){var c=l.shape,h=r?"r":"endAngle",f={};c[h]=r?0:i.startAngle,f[h]=i[h],Yv[a?"updateProps":"initProps"](l,{shape:f},o,e)}return l}},Qx={cartesian2d:function(t,e,n){var i=t.getItemLayout(e),r=ac(n,i),o=i.width>0?1:-1,a=i.height>0?1:-1;return{x:i.x+o*r/2,y:i.y+a*r/2,width:i.width-o*r,height:i.height-a*r}},polar:function(t,e){var n=t.getItemLayout(e);return{cx:n.cx,cy:n.cy,r0:n.r0,r:n.r,startAngle:n.startAngle,endAngle:n.endAngle}}},tw=$i.extend({type:"largeBar",shape:{points:[]},buildPath:function(t,e){for(var n=e.points,i=this.__startPoint,r=this.__valueIdx,o=0;o<n.length;o+=2)i[this.__valueIdx]=n[o+r],t.moveTo(i[0],i[1]),t.lineTo(n[o],n[o+1])}}),ew=Math.PI,nw=function(t,e){this.opt=e,this.axisModel=t,u(e,{labelOffset:0,nameDirection:1,tickDirection:1,labelDirection:1,silent:!0}),this.group=new op;var n=new op({position:e.position.slice(),rotation:e.rotation});n.updateTransform(),this._transform=n.transform,this._dumbGroup=n};nw.prototype={constructor:nw,hasBuilder:function(t){return!!iw[t]},add:function(t){iw[t].call(this)},getGroup:function(){return this.group}};var iw={axisLine:function(){var t=this.opt,e=this.axisModel;if(e.get("axisLine.show")){var n=this.axisModel.axis.getExtent(),i=this._transform,r=[n[0],0],o=[n[1],0];i&&(st(r,r,i),st(o,o,i));var a=l({lineCap:"round"},e.getModel("axisLine.lineStyle").getLineStyle());this.group.add(new Pv(ar({anid:"line",shape:{x1:r[0],y1:r[1],x2:o[0],y2:o[1]},style:a,strokeContainThreshold:t.strokeContainThreshold||5,silent:!0,z2:1})));var s=e.get("axisLine.symbol"),u=e.get("axisLine.symbolSize"),c=e.get("axisLine.symbolOffset")||0;if("number"==typeof c&&(c=[c,c]),null!=s){"string"==typeof s&&(s=[s,s]),("string"==typeof u||"number"==typeof u)&&(u=[u,u]);var h=u[0],f=u[1];g([{rotate:t.rotation+Math.PI/2,offset:c[0],r:0},{rotate:t.rotation-Math.PI/2,offset:c[1],r:Math.sqrt((r[0]-o[0])*(r[0]-o[0])+(r[1]-o[1])*(r[1]-o[1]))}],function(e,n){if("none"!==s[n]&&null!=s[n]){var i=_u(s[n],-h/2,-f/2,h,f,a.stroke,!0),o=e.r+e.offset,l=[r[0]+o*Math.cos(t.rotation),r[1]-o*Math.sin(t.rotation)];i.attr({rotation:e.rotate,position:l,silent:!0,z2:11}),this.group.add(i)}},this)}}},axisTickLabel:function(){var t=this.axisModel,e=this.opt,n=vc(this,t,e),i=mc(this,t,e);fc(t,i,n)},axisName:function(){var t=this.opt,e=this.axisModel,n=D(t.axisName,e.get("name"));if(n){var i,r,o=e.get("nameLocation"),a=t.nameDirection,s=e.getModel("nameTextStyle"),u=e.get("nameGap")||0,c=this.axisModel.axis.getExtent(),h=c[0]>c[1]?-1:1,f=["start"===o?c[0]-h*u:"end"===o?c[1]+h*u:(c[0]+c[1])/2,gc(o)?t.labelOffset+a*u:0],d=e.get("nameRotate");null!=d&&(d=d*ew/180),gc(o)?i=rw(t.rotation,null!=d?d:t.rotation,a):(i=cc(t,o,d||0,c),r=t.axisNameAvailableWidth,null!=r&&(r=Math.abs(r/Math.sin(i.rotation)),!isFinite(r)&&(r=null)));var p=s.getFont(),g=e.get("nameTruncate",!0)||{},v=g.ellipsis,m=D(t.nameTruncateMaxWidth,g.maxWidth,r),y=null!=v&&null!=m?hm(n,m,p,v,{minChar:2,placeholder:g.placeholder}):n,_=e.get("tooltip",!0),x=e.mainType,w={componentType:x,name:n,$vars:["name"]};w[x+"Index"]=e.componentIndex;var b=new mv({anid:"name",__fullText:n,__truncatedText:y,position:f,rotation:i.rotation,silent:hc(e),z2:1,tooltip:_&&_.show?l({content:n,formatter:function(){return n},formatterParams:w},_):null});Ir(b.style,s,{text:y,textFont:p,textFill:s.getTextColor()||e.get("axisLine.lineStyle.color"),textAlign:i.textAlign,textVerticalAlign:i.textVerticalAlign}),e.get("triggerEvent")&&(b.eventData=uc(e),b.eventData.targetType="axisName",b.eventData.name=n),this._dumbGroup.add(b),b.updateTransform(),this.group.add(b),b.decomposeTransform()}}},rw=nw.innerTextLayout=function(t,e,n){var i,r,o=oo(e-t);return ao(o)?(r=n>0?"top":"bottom",i="center"):ao(o-ew)?(r=n>0?"bottom":"top",i="center"):(r="middle",i=o>0&&ew>o?n>0?"right":"left":n>0?"left":"right"),{rotation:o,textAlign:i,textVerticalAlign:r}},ow=g,aw=w,sw=sl({type:"axis",_axisPointer:null,axisPointerClass:null,render:function(t,e,n,i){this.axisPointerClass&&Mc(t),sw.superApply(this,"render",arguments),Cc(this,t,e,n,i,!0)},updateAxisPointer:function(t,e,n,i){Cc(this,t,e,n,i,!1)},remove:function(t,e){var n=this._axisPointer;n&&n.remove(e),sw.superApply(this,"remove",arguments)},dispose:function(t,e){Dc(this,e),sw.superApply(this,"dispose",arguments)}}),lw=[];sw.registerAxisPointerClass=function(t,e){lw[t]=e},sw.getAxisPointerClass=function(t){return t&&lw[t]};var uw=["axisLine","axisTickLabel","axisName"],cw=["splitArea","splitLine"],hw=sw.extend({type:"cartesianAxis",axisPointerClass:"CartesianAxisPointer",render:function(t,e,n,i){this.group.removeAll();var r=this._axisGroup;if(this._axisGroup=new op,this.group.add(this._axisGroup),t.get("show")){var o=t.getCoordSysModel(),a=Pc(o,t),s=new nw(t,a);g(uw,s.add,s),this._axisGroup.add(s.getGroup()),g(cw,function(e){t.get(e+".show")&&this["_"+e](t,o)},this),$r(r,this._axisGroup,t),hw.superCall(this,"render",t,e,n,i)}},remove:function(){this._splitAreaColors=null},_splitLine:function(t,e){var n=t.axis;if(!n.scale.isBlank()){var i=t.getModel("splitLine"),r=i.getModel("lineStyle"),o=r.get("color");o=b(o)?o:[o];for(var a=e.coordinateSystem.getRect(),s=n.isHorizontal(),l=0,c=n.getTicksCoords({tickModel:i}),h=[],f=[],d=r.getLineStyle(),p=0;p<c.length;p++){var g=n.toGlobalCoord(c[p].coord);s?(h[0]=g,h[1]=a.y,f[0]=g,f[1]=a.y+a.height):(h[0]=a.x,h[1]=g,f[0]=a.x+a.width,f[1]=g);var v=l++%o.length,m=c[p].tickValue;this._axisGroup.add(new Pv(ar({anid:null!=m?"line_"+c[p].tickValue:null,shape:{x1:h[0],y1:h[1],x2:f[0],y2:f[1]},style:u({stroke:o[v]},d),silent:!0})))}}},_splitArea:function(t,e){var n=t.axis;if(!n.scale.isBlank()){var i=t.getModel("splitArea"),r=i.getModel("areaStyle"),o=r.get("color"),a=e.coordinateSystem.getRect(),s=n.getTicksCoords({tickModel:i,clamp:!0});if(s.length){var l=o.length,c=this._splitAreaColors,h=$(),f=0;if(c)for(var d=0;d<s.length;d++){var p=c.get(s[d].tickValue);if(null!=p){f=(p+(l-1)*d)%l;break}}var g=n.toGlobalCoord(s[0].coord),v=r.getAreaStyle();o=b(o)?o:[o];for(d=1;d<s.length;d++){var m,y,_,x,w=n.toGlobalCoord(s[d].coord);n.isHorizontal()?(m=g,y=a.y,_=w-m,x=a.height,g=m+_):(m=a.x,y=g,_=a.width,x=w-y,g=y+x);var S=s[d-1].tickValue;null!=S&&h.set(S,f),this._axisGroup.add(new Cv({anid:null!=S?"area_"+S:null,shape:{x:m,y:y,width:_,height:x},style:u({fill:o[f]},v),silent:!0})),f=(f+1)%l}this._splitAreaColors=h}}}});hw.extend({type:"xAxis"}),hw.extend({type:"yAxis"}),sl({type:"grid",render:function(t){this.group.removeAll(),t.get("show")&&this.group.add(new Cv({shape:t.coordinateSystem.getRect(),style:u({fill:t.get("backgroundColor")},t.getItemStyle()),silent:!0,z2:-1}))}}),Zs(function(t){t.xAxis&&t.yAxis&&!t.grid&&(t.grid={})}),nl(w(nu,"bar")),nl(J_),il({seriesType:"bar",reset:function(t){t.getData().setVisual("legendSymbol","roundRect")}}),ay.extend({type:"series.line",dependencies:["grid","polar"],getInitialData:function(){return zl(this.getSource(),this)},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,hoverAnimation:!0,clipOverflow:!0,label:{position:"top"},lineStyle:{width:2,type:"solid"},step:!1,smooth:!1,smoothMonotone:null,symbol:"emptyCircle",symbolSize:4,symbolRotate:null,showSymbol:!0,showAllSymbol:"auto",connectNulls:!1,sampling:"none",animationEasing:"linear",progressive:0,hoverLayerThreshold:1/0}});var fw=Oc.prototype,dw=Oc.getSymbolSize=function(t,e){var n=t.getItemVisual(e,"symbolSize");return n instanceof Array?n.slice():[+n,+n]};fw._createSymbol=function(t,e,n,i,r){this.removeAll();var o=e.getItemVisual(n,"color"),a=_u(t,-1,-1,2,2,o,r);a.attr({z2:100,culling:!0,scale:Lc(i)}),a.drift=Ec,this._symbolType=t,this.add(a)},fw.stopSymbolAnimation=function(t){this.childAt(0).stopAnimation(t)},fw.getSymbolPath=function(){return this.childAt(0)},fw.getScale=function(){return this.childAt(0).scale},fw.highlight=function(){this.childAt(0).trigger("emphasis")},fw.downplay=function(){this.childAt(0).trigger("normal")},fw.setZ=function(t,e){var n=this.childAt(0);n.zlevel=t,n.z=e},fw.setDraggable=function(t){var e=this.childAt(0);e.draggable=t,e.cursor=t?"move":"pointer"},fw.updateData=function(t,e,n){this.silent=!1;var i=t.getItemVisual(e,"symbol")||"circle",r=t.hostModel,o=dw(t,e),a=i!==this._symbolType;if(a){var s=t.getItemVisual(e,"symbolKeepAspect");this._createSymbol(i,t,e,o,s)}else{var l=this.childAt(0);l.silent=!1,Nr(l,{scale:Lc(o)},r,e)}if(this._updateCommon(t,e,o,n),a){l=this.childAt(0);var u=n&&n.fadeIn,c={scale:l.scale.slice()};u&&(c.style={opacity:l.style.opacity}),l.scale=[0,0],u&&(l.style.opacity=0),Rr(l,c,r,e)}this._seriesModel=r};var pw=["itemStyle"],gw=["emphasis","itemStyle"],vw=["label"],mw=["emphasis","label"];fw._updateCommon=function(t,e,n,i){function r(e){return b?t.getName(e):tc(t,e)}var o=this.childAt(0),a=t.hostModel,s=t.getItemVisual(e,"color");"image"!==o.type&&o.useStyle({strokeNoScale:!0});var u=i&&i.itemStyle,c=i&&i.hoverItemStyle,h=i&&i.symbolRotate,f=i&&i.symbolOffset,d=i&&i.labelModel,p=i&&i.hoverLabelModel,g=i&&i.hoverAnimation,v=i&&i.cursorStyle;if(!i||t.hasItemOption){var m=i&&i.itemModel?i.itemModel:t.getItemModel(e);u=m.getModel(pw).getItemStyle(["color"]),c=m.getModel(gw).getItemStyle(),h=m.getShallow("symbolRotate"),f=m.getShallow("symbolOffset"),d=m.getModel(vw),p=m.getModel(mw),g=m.getShallow("hoverAnimation"),v=m.getShallow("cursor")}else c=l({},c);var y=o.style;o.attr("rotation",(h||0)*Math.PI/180||0),f&&o.attr("position",[Jr(f[0],n[0]),Jr(f[1],n[1])]),v&&o.attr("cursor",v),o.setColor(s,i&&i.symbolInnerColor),o.setStyle(u);var _=t.getItemVisual(e,"opacity");null!=_&&(y.opacity=_);var x=t.getItemVisual(e,"liftZ"),w=o.__z2Origin;null!=x?null==w&&(o.__z2Origin=o.z2,o.z2+=x):null!=w&&(o.z2=w,o.__z2Origin=null);var b=i&&i.useNameLabel;Mr(y,c,d,p,{labelFetcher:a,labelDataIndex:e,defaultText:r,isRectText:!0,autoColor:s}),o.off("mouseover").off("mouseout").off("emphasis").off("normal"),o.hoverStyle=c,br(o),o.__symbolOriginalScale=Lc(n),g&&a.isAnimationEnabled()&&o.on("mouseover",Nc).on("mouseout",Rc).on("emphasis",Bc).on("normal",zc)},fw.fadeOut=function(t,e){var n=this.childAt(0);this.silent=n.silent=!0,!(e&&e.keepLabel)&&(n.style.text=null),Nr(n,{style:{opacity:0},scale:[0,0]},this._seriesModel,this.dataIndex,t)},f(Oc,op);var yw=Fc.prototype;yw.updateData=function(t,e){e=Vc(e);var n=this.group,i=t.hostModel,r=this._data,o=this._symbolCtor,a=jc(t);r||n.removeAll(),t.diff(r).add(function(i){var r=t.getItemLayout(i);if($c(t,r,i,e)){var s=new o(t,i,a);s.attr("position",r),t.setItemGraphicEl(i,s),n.add(s)}}).update(function(s,l){var u=r.getItemGraphicEl(l),c=t.getItemLayout(s);return $c(t,c,s,e)?(u?(u.updateData(t,s,a),Nr(u,{position:c},i)):(u=new o(t,s),u.attr("position",c)),n.add(u),void t.setItemGraphicEl(s,u)):void n.remove(u)}).remove(function(t){var e=r.getItemGraphicEl(t);e&&e.fadeOut(function(){n.remove(e)})}).execute(),this._data=t},yw.isPersistent=function(){return!0},yw.updateLayout=function(){var t=this._data;t&&t.eachItemGraphicEl(function(e,n){var i=t.getItemLayout(n);e.attr("position",i)})},yw.incrementalPrepareUpdate=function(t){this._seriesScope=jc(t),this._data=null,this.group.removeAll()},yw.incrementalUpdate=function(t,e,n){function i(t){t.isGroup||(t.incremental=t.useHoverLayer=!0)}n=Vc(n);for(var r=t.start;r<t.end;r++){var o=e.getItemLayout(r);if($c(e,o,r,n)){var a=new this._symbolCtor(e,r,this._seriesScope);a.traverse(i),a.attr("position",o),this.group.add(a),e.setItemGraphicEl(r,a)}}},yw.remove=function(t){var e=this.group,n=this._data;n&&t?n.eachItemGraphicEl(function(t){t.fadeOut(function(){e.remove(t)})}):e.removeAll()};var _w=function(t,e,n,i,r,o,a,s){for(var l=Uc(t,e),u=[],c=[],h=[],f=[],d=[],p=[],g=[],v=Hc(r,e,a),m=Hc(o,t,s),y=0;y<l.length;y++){var _=l[y],x=!0;switch(_.cmd){case"=":var w=t.getItemLayout(_.idx),b=e.getItemLayout(_.idx1);(isNaN(w[0])||isNaN(w[1]))&&(w=b.slice()),u.push(w),c.push(b),h.push(n[_.idx]),f.push(i[_.idx1]),g.push(e.getRawIndex(_.idx1));break;case"+":var S=_.idx;u.push(r.dataToPoint([e.get(v.dataDimsForPoint[0],S),e.get(v.dataDimsForPoint[1],S)])),c.push(e.getItemLayout(S).slice()),h.push(Wc(v,r,e,S)),f.push(i[S]),g.push(e.getRawIndex(S));break;case"-":S=_.idx;var M=t.getRawIndex(S);M!==S?(u.push(t.getItemLayout(S)),c.push(o.dataToPoint([t.get(m.dataDimsForPoint[0],S),t.get(m.dataDimsForPoint[1],S)])),h.push(n[S]),f.push(Wc(m,o,t,S)),g.push(M)):x=!1}x&&(d.push(_),p.push(p.length))}p.sort(function(t,e){return g[t]-g[e]});var I=[],A=[],T=[],k=[],C=[];for(y=0;y<p.length;y++){S=p[y];I[y]=u[S],A[y]=c[S],T[y]=h[S],k[y]=f[S],C[y]=d[S]}return{current:I,next:A,stackedOnCurrent:T,stackedOnNext:k,status:C}},xw=lt,ww=ut,bw=Y,Sw=G,Mw=[],Iw=[],Aw=[],Tw=$i.extend({type:"ec-polyline",shape:{points:[],smooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},style:{fill:null,stroke:"#000"},brush:xv($i.prototype.brush),buildPath:function(t,e){var n=e.points,i=0,r=n.length,o=Kc(n,e.smoothConstraint);if(e.connectNulls){for(;r>0&&Xc(n[r-1]);r--);for(;r>i&&Xc(n[i]);i++);}for(;r>i;)i+=Yc(t,n,i,r,r,1,o.min,o.max,e.smooth,e.smoothMonotone,e.connectNulls)+1}}),kw=$i.extend({type:"ec-polygon",shape:{points:[],stackedOnPoints:[],smooth:0,stackedOnSmooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},brush:xv($i.prototype.brush),buildPath:function(t,e){var n=e.points,i=e.stackedOnPoints,r=0,o=n.length,a=e.smoothMonotone,s=Kc(n,e.smoothConstraint),l=Kc(i,e.smoothConstraint);if(e.connectNulls){for(;o>0&&Xc(n[o-1]);o--);for(;o>r&&Xc(n[r]);r++);}for(;o>r;){var u=Yc(t,n,r,o,o,1,s.min,s.max,e.smooth,a,e.connectNulls);Yc(t,i,r+u-1,u,o,-1,l.min,l.max,e.stackedOnSmooth,a,e.connectNulls),r+=u+1,t.closePath()}}});ja.extend({type:"line",init:function(){var t=new op,e=new Fc;this.group.add(e.group),this._symbolDraw=e,this._lineGroup=t},render:function(t,e,n){var i=t.coordinateSystem,r=this.group,o=t.getData(),a=t.getModel("lineStyle"),s=t.getModel("areaStyle"),l=o.mapArray(o.getItemLayout),c="polar"===i.type,h=this._coordSys,f=this._symbolDraw,d=this._polyline,p=this._polygon,g=this._lineGroup,v=t.get("animation"),m=!s.isEmpty(),y=s.get("origin"),_=Hc(i,o,y),x=eh(i,o,_),w=t.get("showSymbol"),b=w&&!c&&sh(t,o,i),S=this._data;S&&S.eachItemGraphicEl(function(t,e){t.__temp&&(r.remove(t),S.setItemGraphicEl(e,null))}),w||f.remove(),r.add(g);var M=!c&&t.get("step");d&&h.type===i.type&&M===this._step?(m&&!p?p=this._newPolygon(l,x,i,v):p&&!m&&(g.remove(p),p=this._polygon=null),g.setClipPath(rh(i,!1,!1,t)),w&&f.updateData(o,{isIgnore:b,clipShape:rh(i,!1,!0,t)}),o.eachItemGraphicEl(function(t){t.stopAnimation(!0)}),Jc(this._stackedOnPoints,x)&&Jc(this._points,l)||(v?this._updateAnimation(o,x,i,n,M,y):(M&&(l=oh(l,i,M),x=oh(x,i,M)),d.setShape({points:l}),p&&p.setShape({points:l,stackedOnPoints:x})))):(w&&f.updateData(o,{isIgnore:b,clipShape:rh(i,!1,!0,t)}),M&&(l=oh(l,i,M),x=oh(x,i,M)),d=this._newPolyline(l,i,v),m&&(p=this._newPolygon(l,x,i,v)),g.setClipPath(rh(i,!0,!1,t)));var I=ah(o,i)||o.getVisual("color");d.useStyle(u(a.getLineStyle(),{fill:"none",stroke:I,lineJoin:"bevel"}));var A=t.get("smooth");if(A=Qc(t.get("smooth")),d.setShape({smooth:A,smoothMonotone:t.get("smoothMonotone"),connectNulls:t.get("connectNulls")}),p){var T=o.getCalculationInfo("stackedOnSeries"),k=0;p.useStyle(u(s.getAreaStyle(),{fill:I,opacity:.7,lineJoin:"bevel"})),T&&(k=Qc(T.get("smooth"))),p.setShape({smooth:A,stackedOnSmooth:k,smoothMonotone:t.get("smoothMonotone"),connectNulls:t.get("connectNulls")})}this._data=o,this._coordSys=i,this._stackedOnPoints=x,this._points=l,this._step=M,this._valueOrigin=y},dispose:function(){},highlight:function(t,e,n,i){var r=t.getData(),o=Xn(r,i);if(!(o instanceof Array)&&null!=o&&o>=0){var a=r.getItemGraphicEl(o);if(!a){var s=r.getItemLayout(o);if(!s)return;a=new Oc(r,o),a.position=s,a.setZ(t.get("zlevel"),t.get("z")),a.ignore=isNaN(s[0])||isNaN(s[1]),a.__temp=!0,r.setItemGraphicEl(o,a),a.stopSymbolAnimation(!0),this.group.add(a)}a.highlight()}else ja.prototype.highlight.call(this,t,e,n,i)},downplay:function(t,e,n,i){var r=t.getData(),o=Xn(r,i);if(null!=o&&o>=0){var a=r.getItemGraphicEl(o);a&&(a.__temp?(r.setItemGraphicEl(o,null),this.group.remove(a)):a.downplay())}else ja.prototype.downplay.call(this,t,e,n,i)},_newPolyline:function(t){var e=this._polyline;return e&&this._lineGroup.remove(e),e=new Tw({shape:{points:t},silent:!0,z2:10}),this._lineGroup.add(e),this._polyline=e,e},_newPolygon:function(t,e){var n=this._polygon;return n&&this._lineGroup.remove(n),n=new kw({shape:{points:t,stackedOnPoints:e},silent:!0}),this._lineGroup.add(n),this._polygon=n,n},_updateAnimation:function(t,e,n,i,r,o){var a=this._polyline,s=this._polygon,l=t.hostModel,u=_w(this._data,t,this._stackedOnPoints,e,this._coordSys,n,this._valueOrigin,o),c=u.current,h=u.stackedOnCurrent,f=u.next,d=u.stackedOnNext;r&&(c=oh(u.current,n,r),h=oh(u.stackedOnCurrent,n,r),f=oh(u.next,n,r),d=oh(u.stackedOnNext,n,r)),a.shape.__points=u.current,a.shape.points=c,Nr(a,{shape:{points:f}},l),s&&(s.setShape({points:c,stackedOnPoints:h}),Nr(s,{shape:{points:f,stackedOnPoints:d}},l));for(var p=[],g=u.status,v=0;v<g.length;v++){var m=g[v].cmd;if("="===m){var y=t.getItemGraphicEl(g[v].idx1);y&&p.push({el:y,ptIdx:v})}}a.animators&&a.animators.length&&a.animators[0].during(function(){for(var t=0;t<p.length;t++){var e=p[t].el;e.attr("position",a.shape.__points[p[t].ptIdx])}})},remove:function(){var t=this.group,e=this._data;this._lineGroup.removeAll(),this._symbolDraw.remove(!0),e&&e.eachItemGraphicEl(function(n,i){n.__temp&&(t.remove(n),e.setItemGraphicEl(i,null))}),this._polyline=this._polygon=this._coordSys=this._points=this._stackedOnPoints=this._data=null}});var Cw=function(t,e,n){return{seriesType:t,performRawSeries:!0,reset:function(t,i){function r(e,n){if("function"==typeof s){var i=t.getRawValue(n),r=t.getDataParams(n);e.setItemVisual(n,"symbolSize",s(i,r))}if(e.hasItemOption){var o=e.getItemModel(n),a=o.getShallow("symbol",!0),l=o.getShallow("symbolSize",!0),u=o.getShallow("symbolKeepAspect",!0);null!=a&&e.setItemVisual(n,"symbol",a),null!=l&&e.setItemVisual(n,"symbolSize",l),null!=u&&e.setItemVisual(n,"symbolKeepAspect",u)}}var o=t.getData(),a=t.get("symbol")||e,s=t.get("symbolSize"),l=t.get("symbolKeepAspect");if(o.setVisual({legendSymbol:n||a,symbol:a,symbolSize:s,symbolKeepAspect:l}),!i.isSeriesFiltered(t)){var u="function"==typeof s;return{dataEach:o.hasItemOption||u?r:null}}}}},Dw=function(t){return{seriesType:t,plan:uy(),reset:function(t){function e(t,e){for(var n=t.end-t.start,r=o&&new Float32Array(n*s),l=t.start,u=0,c=[],h=[];l<t.end;l++){var f;if(1===s){var d=e.get(a[0],l);f=!isNaN(d)&&i.dataToPoint(d,null,h)}else{d=c[0]=e.get(a[0],l);var p=c[1]=e.get(a[1],l);f=!isNaN(d)&&!isNaN(p)&&i.dataToPoint(c,null,h)}o?(r[u++]=f?f[0]:NaN,r[u++]=f?f[1]:NaN):e.setItemLayout(l,f&&f.slice()||[NaN,NaN])}o&&e.setLayout("symbolPoints",r)}var n=t.getData(),i=t.coordinateSystem,r=t.pipelineContext,o=r.large;if(i){var a=v(i.dimensions,function(t){return n.mapDimension(t)}).slice(0,2),s=a.length,l=n.getCalculationInfo("stackResultDimension");return Rl(n,a[0])&&(a[0]=l),Rl(n,a[1])&&(a[1]=l),s&&{progress:e}}}}},Pw={average:function(t){for(var e=0,n=0,i=0;i<t.length;i++)isNaN(t[i])||(e+=t[i],n++);return 0===n?NaN:e/n},sum:function(t){for(var e=0,n=0;n<t.length;n++)e+=t[n]||0;return e},max:function(t){for(var e=-1/0,n=0;n<t.length;n++)t[n]>e&&(e=t[n]);return isFinite(e)?e:NaN},min:function(t){for(var e=1/0,n=0;n<t.length;n++)t[n]<e&&(e=t[n]);return isFinite(e)?e:NaN},nearest:function(t){return t[0]}},Ow=function(t){return Math.round(t.length/2)},Lw=function(t){return{seriesType:t,modifyOutputEnd:!0,reset:function(t){var e=t.getData(),n=t.get("sampling"),i=t.coordinateSystem;if("cartesian2d"===i.type&&n){var r,o=i.getBaseAxis(),a=i.getOtherAxis(o),s=o.getExtent(),l=s[1]-s[0],u=Math.round(e.count()/l);if(u>1)"string"==typeof n?r=Pw[n]:"function"==typeof n&&(r=n),r&&t.setData(e.downSample(e.mapDimension(a.dim),1/u,r,Ow))}}}};il(Cw("line","circle","line")),nl(Dw("line")),Ks(a_.PROCESSOR.STATISTIC,Lw("line"));var Ew=function(t,e,n){e=b(e)&&{coordDimensions:e}||l({},e);var i=t.getSource(),r=j_(i,e),o=new F_(r,t);return o.initData(i,n),o},Nw={updateSelectedMap:function(t){this._targetList=b(t)?t.slice():[],this._selectTargetMap=m(t||[],function(t,e){return t.set(e.name,e),t},$())},select:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t),i=this.get("selectedMode");"single"===i&&this._selectTargetMap.each(function(t){t.selected=!1}),n&&(n.selected=!0)},unSelect:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);n&&(n.selected=!1)},toggleSelected:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);return null!=n?(this[n.selected?"unSelect":"select"](t,e),n.selected):void 0},isSelected:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);return n&&n.selected}},Rw=ll({type:"series.pie",init:function(t){Rw.superApply(this,"init",arguments),this.legendDataProvider=function(){return this.getRawData()},this.updateSelectedMap(this._createSelectableList()),this._defaultLabelLine(t)},mergeOption:function(t){Rw.superCall(this,"mergeOption",t),this.updateSelectedMap(this._createSelectableList())},getInitialData:function(){return Ew(this,["value"])},_createSelectableList:function(){for(var t=this.getRawData(),e=t.mapDimension("value"),n=[],i=0,r=t.count();r>i;i++)n.push({name:t.getName(i),value:t.get(e,i),selected:Ca(t,i,"selected")});return n},getDataParams:function(t){var e=this.getData(),n=Rw.superCall(this,"getDataParams",t),i=[];return e.each(e.mapDimension("value"),function(t){i.push(t)}),n.percent=ro(i,t,e.hostModel.get("percentPrecision")),n.$vars.push("percent"),n},_defaultLabelLine:function(t){$n(t,"labelLine",["show"]);var e=t.labelLine,n=t.emphasis.labelLine;e.show=e.show&&t.label.show,n.show=n.show&&t.emphasis.label.show},defaultOption:{zlevel:0,z:2,legendHoverLink:!0,hoverAnimation:!0,center:["50%","50%"],radius:[0,"75%"],clockwise:!0,startAngle:90,minAngle:0,selectedOffset:10,hoverOffset:10,avoidLabelOverlap:!0,percentPrecision:2,stillShowZeroSum:!0,label:{rotate:!1,show:!0,position:"outer"},labelLine:{show:!0,length:15,length2:15,smooth:!1,lineStyle:{width:1,type:"solid"}},itemStyle:{borderWidth:1},animationType:"expansion",animationEasing:"cubicOut"}});d(Rw,Nw);var Bw=hh.prototype;Bw.updateData=function(t,e,n){function i(){o.stopAnimation(!0),o.animateTo({shape:{r:c.r+a.get("hoverOffset")}},300,"elasticOut")}function r(){o.stopAnimation(!0),o.animateTo({shape:{r:c.r}},300,"elasticOut")}var o=this.childAt(0),a=t.hostModel,s=t.getItemModel(e),c=t.getItemLayout(e),h=l({},c);if(h.label=null,n){o.setShape(h);var f=a.getShallow("animationType");"scale"===f?(o.shape.r=c.r0,Rr(o,{shape:{r:c.r}},a,e)):(o.shape.endAngle=c.startAngle,Nr(o,{shape:{endAngle:c.endAngle}},a,e))}else Nr(o,{shape:h},a,e);var d=t.getItemVisual(e,"color");o.useStyle(u({lineJoin:"bevel",fill:d},s.getModel("itemStyle").getItemStyle())),o.hoverStyle=s.getModel("emphasis.itemStyle").getItemStyle();var p=s.getShallow("cursor");p&&o.attr("cursor",p),ch(this,t.getItemLayout(e),a.isSelected(null,e),a.get("selectedOffset"),a.get("animation")),o.off("mouseover").off("mouseout").off("emphasis").off("normal"),s.get("hoverAnimation")&&a.isAnimationEnabled()&&o.on("mouseover",i).on("mouseout",r).on("emphasis",i).on("normal",r),this._updateLabel(t,e),br(this)},Bw._updateLabel=function(t,e){var n=this.childAt(1),i=this.childAt(2),r=t.hostModel,o=t.getItemModel(e),a=t.getItemLayout(e),s=a.label,l=t.getItemVisual(e,"color");Nr(n,{shape:{points:s.linePoints||[[s.x,s.y],[s.x,s.y],[s.x,s.y]]}},r,e),Nr(i,{style:{x:s.x,y:s.y}},r,e),i.attr({rotation:s.rotation,origin:[s.x,s.y],z2:10});var u=o.getModel("label"),c=o.getModel("emphasis.label"),h=o.getModel("labelLine"),f=o.getModel("emphasis.labelLine");l=t.getItemVisual(e,"color");Mr(i.style,i.hoverStyle={},u,c,{labelFetcher:t.hostModel,labelDataIndex:e,defaultText:t.getName(e),autoColor:l,useInsideStyle:!!s.inside},{textAlign:s.textAlign,textVerticalAlign:s.verticalAlign,opacity:t.getItemVisual(e,"opacity")}),i.ignore=i.normalIgnore=!u.get("show"),i.hoverIgnore=!c.get("show"),n.ignore=n.normalIgnore=!h.get("show"),n.hoverIgnore=!f.get("show"),n.setStyle({stroke:l,opacity:t.getItemVisual(e,"opacity")}),n.setStyle(h.getModel("lineStyle").getLineStyle()),n.hoverStyle=f.getModel("lineStyle").getLineStyle();var d=h.get("smooth");d&&!0===d&&(d=.4),n.setShape({smooth:d})},f(hh,op);var zw=(ja.extend({type:"pie",init:function(){var t=new op;this._sectorGroup=t},render:function(t,e,n,i){if(!i||i.from!==this.uid){var r=t.getData(),o=this._data,a=this.group,s=e.get("animation"),l=!o,u=t.get("animationType"),c=w(uh,this.uid,t,s,n),h=t.get("selectedMode");if(r.diff(o).add(function(t){var e=new hh(r,t);l&&"scale"!==u&&e.eachChild(function(t){t.stopAnimation(!0)}),h&&e.on("click",c),r.setItemGraphicEl(t,e),a.add(e)}).update(function(t,e){var n=o.getItemGraphicEl(e);n.updateData(r,t),n.off("click"),h&&n.on("click",c),a.add(n),r.setItemGraphicEl(t,n)}).remove(function(t){var e=o.getItemGraphicEl(t);a.remove(e)}).execute(),s&&l&&r.count()>0&&"scale"!==u){var f=r.getItemLayout(0),d=Math.max(n.getWidth(),n.getHeight())/2,p=x(a.removeClipPath,a);a.setClipPath(this._createClipPath(f.cx,f.cy,d,f.startAngle,f.clockwise,p,t))}else a.removeClipPath();this._data=r}},dispose:function(){},_createClipPath:function(t,e,n,i,r,o,a){var s=new wv({shape:{cx:t,cy:e,r0:0,r:n,startAngle:i,endAngle:i,clockwise:r}});return Rr(s,{shape:{endAngle:i+(r?1:-1)*Math.PI*2}},a,o),s},containPoint:function(t,e){var n=e.getData(),i=n.getItemLayout(0);if(i){var r=t[0]-i.cx,o=t[1]-i.cy,a=Math.sqrt(r*r+o*o);return a<=i.r&&a>=i.r0}}}),function(t,e){g(e,function(e){e.update="updateView",Qs(e,function(n,i){var r={};return i.eachComponent({mainType:"series",subType:t,query:n},function(t){t[e.method]&&t[e.method](n.name,n.dataIndex);var i=t.getData();i.each(function(e){var n=i.getName(e);r[n]=t.isSelected(n)||!1})}),{name:n.name,selected:r}})})}),Fw=function(t){return{getTargetSeries:function(e){var n={},i=$();return e.eachSeriesByType(t,function(t){t.__paletteScope=n,i.set(t.uid,t)}),i},reset:function(t){var e=t.getRawData(),n={},i=t.getData();i.each(function(t){var e=i.getRawIndex(t);n[e]=t}),e.each(function(r){var o=n[r],a=null!=o&&i.getItemVisual(o,"color",!0);if(a)e.setItemVisual(r,"color",a);else{var s=e.getItemModel(r),l=s.get("itemStyle.color")||t.getColorFromPalette(e.getName(r)||r+"",t.__paletteScope,e.count());e.setItemVisual(r,"color",l),null!=o&&i.setItemVisual(o,"color",l)}})}}},$w=function(t,e,n,i){var r,o,a=t.getData(),s=[],l=!1;a.each(function(n){var i,u,c,h,f=a.getItemLayout(n),d=a.getItemModel(n),p=d.getModel("label"),g=p.get("position")||d.get("emphasis.label.position"),v=d.getModel("labelLine"),m=v.get("length"),y=v.get("length2"),_=(f.startAngle+f.endAngle)/2,x=Math.cos(_),w=Math.sin(_);r=f.cx,o=f.cy;var b="inside"===g||"inner"===g;if("center"===g)i=f.cx,u=f.cy,h="center";else{var S=(b?(f.r+f.r0)/2*x:f.r*x)+r,M=(b?(f.r+f.r0)/2*w:f.r*w)+o;if(i=S+3*x,u=M+3*w,!b){var I=S+x*(m+e-f.r),A=M+w*(m+e-f.r),T=I+(0>x?-1:1)*y,k=A;i=T+(0>x?-5:5),u=k,c=[[S,M],[I,A],[T,k]]}h=b?"center":x>0?"left":"right"}var C=p.getFont(),D=p.get("rotate")?0>x?-_+Math.PI:-_:0,P=t.getFormattedLabel(n,"normal")||a.getName(n),O=Fe(P,C,h,"top");l=!!D,f.label={x:i,y:u,position:g,height:O.height,len:m,len2:y,linePoints:c,textAlign:h,verticalAlign:"middle",rotation:D,inside:b},b||s.push(f.label)}),!l&&t.get("avoidLabelOverlap")&&dh(s,r,o,e,n,i)},Vw=2*Math.PI,jw=Math.PI/180,Hw=function(t,e,n){e.eachSeriesByType(t,function(t){var e=t.getData(),i=e.mapDimension("value"),r=t.get("center"),o=t.get("radius");b(o)||(o=[0,o]),b(r)||(r=[r,r]);var a=n.getWidth(),s=n.getHeight(),l=Math.min(a,s),u=Jr(r[0],a),c=Jr(r[1],s),h=Jr(o[0],l/2),f=Jr(o[1],l/2),d=-t.get("startAngle")*jw,p=t.get("minAngle")*jw,g=0;e.each(i,function(t){!isNaN(t)&&g++});var v=e.getSum(i),m=Math.PI/(v||g)*2,y=t.get("clockwise"),_=t.get("roseType"),x=t.get("stillShowZeroSum"),w=e.getDataExtent(i);w[0]=0;var S=Vw,M=0,I=d,A=y?1:-1;if(e.each(i,function(t,n){var i;if(isNaN(t))e.setItemLayout(n,{angle:NaN,startAngle:NaN,endAngle:NaN,clockwise:y,cx:u,cy:c,r0:h,r:_?NaN:f});else{i="area"!==_?0===v&&x?m:t*m:Vw/g,p>i?(i=p,S-=p):M+=t;var r=I+A*i;e.setItemLayout(n,{angle:i,startAngle:I,endAngle:r,clockwise:y,cx:u,cy:c,r0:h,r:_?Kr(t,w,[h,f]):f}),I=r}}),Vw>S&&g)if(.001>=S){var T=Vw/g;e.each(i,function(t,n){if(!isNaN(t)){var i=e.getItemLayout(n);i.angle=T,i.startAngle=d+A*n*T,i.endAngle=d+A*(n+1)*T}})}else m=S/M,I=d,e.each(i,function(t,n){if(!isNaN(t)){var i=e.getItemLayout(n),r=i.angle===p?p:t*m;i.startAngle=I,i.endAngle=I+A*r,I+=A*r}});$w(t,f,a,s)})},Gw=function(t){return{seriesType:t,reset:function(t,e){var n=e.findComponents({mainType:"legend"});if(n&&n.length){var i=t.getData();i.filterSelf(function(t){for(var e=i.getName(t),r=0;r<n.length;r++)if(!n[r].isSelected(e))return!1;return!0})}}}};zw("pie",[{type:"pieToggleSelect",event:"pieselectchanged",method:"toggleSelected"},{type:"pieSelect",event:"pieselected",method:"select"},{type:"pieUnSelect",event:"pieunselected",method:"unSelect"}]),il(Fw("pie")),nl(w(Hw,"pie")),Ks(Gw("pie")),ay.extend({type:"series.scatter",dependencies:["grid","polar","geo","singleAxis","calendar"],getInitialData:function(){return zl(this.getSource(),this)},brushSelector:"point",getProgressive:function(){var t=this.option.progressive;return null==t?this.option.large?5e3:this.get("progressive"):t},getProgressiveThreshold:function(){var t=this.option.progressiveThreshold;return null==t?this.option.large?1e4:this.get("progressiveThreshold"):t},defaultOption:{coordinateSystem:"cartesian2d",zlevel:0,z:2,legendHoverLink:!0,hoverAnimation:!0,symbolSize:10,large:!1,largeThreshold:2e3,itemStyle:{opacity:.8}}});var Ww=4,Uw=tr({shape:{points:null},symbolProxy:null,buildPath:function(t,e){var n=e.points,i=e.size,r=this.symbolProxy,o=r.shape,a=t.getContext?t.getContext():t,s=a&&i[0]<Ww;if(!s)for(var l=0;l<n.length;){var u=n[l++],c=n[l++];isNaN(u)||isNaN(c)||(o.x=u-i[0]/2,o.y=c-i[1]/2,o.width=i[0],o.height=i[1],r.buildPath(t,o,!0))}},afterBrush:function(t){var e=this.shape,n=e.points,i=e.size,r=i[0]<Ww;if(r){this.setTransform(t);for(var o=0;o<n.length;){var a=n[o++],s=n[o++];isNaN(a)||isNaN(s)||t.fillRect(a-i[0]/2,s-i[1]/2,i[0],i[1])}this.restoreTransform(t)}},findDataIndex:function(t,e){for(var n=this.shape,i=n.points,r=n.size,o=Math.max(r[0],4),a=Math.max(r[1],4),s=i.length/2-1;s>=0;s--){var l=2*s,u=i[l]-o/2,c=i[l+1]-a/2;if(t>=u&&e>=c&&u+o>=t&&c+a>=e)return s}return-1}}),Xw=gh.prototype;Xw.isPersistent=function(){return!this._incremental},Xw.updateData=function(t){this.group.removeAll();var e=new Uw({rectHover:!0,cursor:"default"});e.setShape({points:t.getLayout("symbolPoints")}),this._setCommon(e,t),this.group.add(e),this._incremental=null},Xw.updateLayout=function(t){if(!this._incremental){var e=t.getLayout("symbolPoints");this.group.eachChild(function(t){if(null!=t.startIndex){var n=2*(t.endIndex-t.startIndex),i=4*t.startIndex*2;e=new Float32Array(e.buffer,i,n)}t.setShape("points",e)})}},Xw.incrementalPrepareUpdate=function(t){this.group.removeAll(),this._clearIncremental(),t.count()>2e6?(this._incremental||(this._incremental=new Qi({silent:!0})),this.group.add(this._incremental)):this._incremental=null},Xw.incrementalUpdate=function(t,e){var n;this._incremental?(n=new Uw,this._incremental.addDisplayable(n,!0)):(n=new Uw({rectHover:!0,cursor:"default",startIndex:t.start,endIndex:t.end}),n.incremental=!0,this.group.add(n)),n.setShape({points:e.getLayout("symbolPoints")}),this._setCommon(n,e,!!this._incremental)},Xw._setCommon=function(t,e,n){var i=e.hostModel,r=e.getVisual("symbolSize");t.setShape("size",r instanceof Array?r:[r,r]),t.symbolProxy=_u(e.getVisual("symbol"),0,0,0,0),t.setColor=t.symbolProxy.setColor;var o=t.shape.size[0]<Ww;t.useStyle(i.getModel("itemStyle").getItemStyle(o?["color","shadowBlur","shadowColor"]:["color"]));var a=e.getVisual("color");a&&t.setColor(a),n||(t.seriesIndex=i.seriesIndex,t.on("mousemove",function(e){t.dataIndex=null;var n=t.findDataIndex(e.offsetX,e.offsetY);n>=0&&(t.dataIndex=n+(t.startIndex||0))}))},Xw.remove=function(){this._clearIncremental(),this._incremental=null,this.group.removeAll()},Xw._clearIncremental=function(){var t=this._incremental;t&&t.clearDisplaybles()},ul({type:"scatter",render:function(t){var e=t.getData(),n=this._updateSymbolDraw(e,t);n.updateData(e),this._finished=!0},incrementalPrepareRender:function(t){var e=t.getData(),n=this._updateSymbolDraw(e,t);n.incrementalPrepareUpdate(e),this._finished=!1},incrementalRender:function(t,e){this._symbolDraw.incrementalUpdate(t,e.getData()),this._finished=t.end===e.getData().count()},updateTransform:function(t){var e=t.getData();if(this.group.dirty(),!this._finished||e.count()>1e4||!this._symbolDraw.isPersistent())return{update:!0};var n=Dw().reset(t);n.progress&&n.progress({start:0,end:e.count()},e),this._symbolDraw.updateLayout(e)},_updateSymbolDraw:function(t,e){var n=this._symbolDraw,i=e.pipelineContext,r=i.large;return n&&r===this._isLargeDraw||(n&&n.remove(),n=this._symbolDraw=r?new gh:new Fc,this._isLargeDraw=r,this.group.removeAll()),this.group.add(n.group),n},remove:function(){this._symbolDraw&&this._symbolDraw.remove(!0),this._symbolDraw=null},dispose:function(){}}),il(Cw("scatter","circle")),nl(Dw("scatter")),al({type:"title",layoutMode:{type:"box",ignoreSize:!0},defaultOption:{zlevel:0,z:6,show:!0,text:"",target:"blank",subtext:"",subtarget:"blank",left:0,top:0,backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderWidth:0,padding:5,itemGap:10,textStyle:{fontSize:18,fontWeight:"bolder",color:"#333"},subtextStyle:{color:"#aaa"}}}),sl({type:"title",render:function(t,n,i){if(this.group.removeAll(),t.get("show")){var r=this.group,o=t.getModel("textStyle"),a=t.getModel("subtextStyle"),s=t.get("textAlign"),l=t.get("textBaseline"),u=new mv({style:Ir({},o,{text:t.get("text"),textFill:o.getTextColor()},{disableBox:!0}),z2:10}),c=u.getBoundingRect(),h=t.get("subtext"),f=new mv({style:Ir({},a,{text:h,textFill:a.getTextColor(),y:c.height+t.get("itemGap"),textVerticalAlign:"top"},{disableBox:!0}),z2:10}),d=t.get("link"),p=t.get("sublink"),g=t.get("triggerEvent",!0);u.silent=!d&&!g,f.silent=!p&&!g,d&&u.on("click",function(){e.open(d,"_"+t.get("target"))}),p&&f.on("click",function(){e.open(p,"_"+t.get("subtarget"))}),u.eventData=f.eventData=g?{componentType:"title",componentIndex:t.componentIndex}:null,r.add(u),h&&r.add(f);var v=r.getBoundingRect(),m=t.getBoxLayoutParams();m.width=v.width,m.height=v.height;var y=To(m,{width:i.getWidth(),height:i.getHeight()},t.get("padding"));s||(s=t.get("left")||t.get("right"),"middle"===s&&(s="center"),"right"===s?y.x+=y.width:"center"===s&&(y.x+=y.width/2)),l||(l=t.get("top")||t.get("bottom"),"center"===l&&(l="middle"),"bottom"===l?y.y+=y.height:"middle"===l&&(y.y+=y.height/2),l=l||"top"),r.attr("position",[y.x,y.y]);var _={textAlign:s,textVerticalAlign:l};u.setStyle(_),f.setStyle(_),v=r.getBoundingRect();var x=y.margin,w=t.getItemStyle(["color","opacity"]);w.fill=t.get("backgroundColor");var b=new Cv({shape:{x:v.x-x[3],y:v.y-x[0],width:v.width+x[1]+x[3],height:v.height+x[0]+x[2],r:t.get("borderRadius")},style:w,silent:!0});sr(b),r.add(b)}}});var Yw=al({type:"legend.plain",dependencies:["series"],layoutMode:{type:"box",ignoreSize:!0},init:function(t,e,n){this.mergeDefaultAndTheme(t,n),t.selected=t.selected||{}},mergeOption:function(t){Yw.superCall(this,"mergeOption",t)},optionUpdated:function(){this._updateData(this.ecModel);var t=this._data;if(t[0]&&"single"===this.get("selectedMode")){for(var e=!1,n=0;n<t.length;n++){var i=t[n].get("name");if(this.isSelected(i)){this.select(i),e=!0;break}}!e&&this.select(t[0].get("name"))}},_updateData:function(t){var e=[],n=[];t.eachRawSeries(function(i){var r,o=i.name;if(n.push(o),i.legendDataProvider){var a=i.legendDataProvider(),s=a.mapArray(a.getName);t.isSeriesFiltered(i)||(n=n.concat(s)),s.length?e=e.concat(s):r=!0}else r=!0;r&&Wn(i)&&e.push(i.name)}),this._availableNames=n;var i=this.get("data")||e,r=v(i,function(t){return("string"==typeof t||"number"==typeof t)&&(t={name:t}),new Gr(t,this,this.ecModel)},this);this._data=r},getData:function(){return this._data},select:function(t){var e=this.option.selected,n=this.get("selectedMode");if("single"===n){var i=this._data;g(i,function(t){e[t.get("name")]=!1})}e[t]=!0},unSelect:function(t){"single"!==this.get("selectedMode")&&(this.option.selected[t]=!1)},toggleSelected:function(t){var e=this.option.selected;e.hasOwnProperty(t)||(e[t]=!0),this[e[t]?"unSelect":"select"](t)},isSelected:function(t){var e=this.option.selected;return!(e.hasOwnProperty(t)&&!e[t])&&h(this._availableNames,t)>=0},defaultOption:{zlevel:0,z:4,show:!0,orient:"horizontal",left:"center",top:0,align:"auto",backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderRadius:0,borderWidth:0,padding:5,itemGap:10,itemWidth:25,itemHeight:14,inactiveColor:"#ccc",textStyle:{color:"#333"},selectedMode:!0,tooltip:{show:!1}}});Qs("legendToggleSelect","legendselectchanged",w(vh,"toggleSelected")),Qs("legendSelect","legendselected",w(vh,"select")),Qs("legendUnSelect","legendunselected",w(vh,"unSelect"));var qw=w,Zw=g,Kw=op,Jw=sl({type:"legend.plain",newlineDisabled:!1,init:function(){this.group.add(this._contentGroup=new Kw),this._backgroundEl,this._isFirstRender=!0},getContentGroup:function(){return this._contentGroup},render:function(t,e,n){var i=this._isFirstRender;if(this._isFirstRender=!1,this.resetInner(),t.get("show",!0)){var r=t.get("align");r&&"auto"!==r||(r="right"===t.get("left")&&"vertical"===t.get("orient")?"right":"left"),this.renderInner(r,t,e,n);var o=t.getBoxLayoutParams(),a={width:n.getWidth(),height:n.getHeight()},s=t.get("padding"),l=To(o,a,s),c=this.layoutInner(t,r,l,i),h=To(u({width:c.width,height:c.height},o),a,s);this.group.attr("position",[h.x-c.x,h.y-c.y]),this.group.add(this._backgroundEl=mh(c,t))}},resetInner:function(){this.getContentGroup().removeAll(),this._backgroundEl&&this.group.remove(this._backgroundEl)},renderInner:function(t,e,n,i){var r=this.getContentGroup(),o=$(),a=e.get("selectedMode"),s=[];n.eachRawSeries(function(t){!t.get("legendHoverLink")&&s.push(t.id)}),Zw(e.getData(),function(l,u){var c=l.get("name");if(this.newlineDisabled||""!==c&&"\n"!==c){var h=n.getSeriesByName(c)[0];if(!o.get(c))if(h){var f=h.getData(),d=f.getVisual("color");"function"==typeof d&&(d=d(h.getDataParams(0)));var p=f.getVisual("legendSymbol")||"roundRect",g=f.getVisual("symbol"),v=this._createItem(c,u,l,e,p,g,t,d,a);v.on("click",qw(yh,c,i)).on("mouseover",qw(_h,h.name,null,i,s)).on("mouseout",qw(xh,h.name,null,i,s)),o.set(c,!0)}else n.eachRawSeries(function(n){if(!o.get(c)&&n.legendDataProvider){var r=n.legendDataProvider(),h=r.indexOfName(c);if(0>h)return;var f=r.getItemVisual(h,"color"),d="roundRect",p=this._createItem(c,u,l,e,d,null,t,f,a);p.on("click",qw(yh,c,i)).on("mouseover",qw(_h,null,c,i,s)).on("mouseout",qw(xh,null,c,i,s)),o.set(c,!0)}},this)}else r.add(new Kw({newline:!0}))},this)},_createItem:function(t,e,n,i,r,o,a,s,u){var c=i.get("itemWidth"),h=i.get("itemHeight"),f=i.get("inactiveColor"),d=i.get("symbolKeepAspect"),p=i.isSelected(t),g=new Kw,v=n.getModel("textStyle"),m=n.get("icon"),y=n.getModel("tooltip"),_=y.parentModel;if(r=m||r,g.add(_u(r,0,0,c,h,p?s:f,null==d||d)),!m&&o&&(o!==r||"none"===o)){var x=.8*h;"none"===o&&(o="circle"),g.add(_u(o,(c-x)/2,(h-x)/2,x,x,p?s:f,null==d||d))}var w="left"===a?c+5:-5,b=a,S=i.get("formatter"),M=t;"string"==typeof S&&S?M=S.replace("{name}",null!=t?t:""):"function"==typeof S&&(M=S(t)),g.add(new mv({style:Ir({},v,{text:M,x:w,y:h/2,textFill:p?v.getTextColor():f,textAlign:b,textVerticalAlign:"middle"})}));var I=new Cv({shape:g.getBoundingRect(),invisible:!0,tooltip:y.get("show")?l({content:t,formatter:_.get("formatter",!0)||function(){return t},formatterParams:{componentType:"legend",legendIndex:i.componentIndex,name:t,$vars:["name"]}},y.option):null});return g.add(I),g.eachChild(function(t){t.silent=!0}),I.silent=!u,this.getContentGroup().add(g),br(g),g.__legendDataIndex=e,g},layoutInner:function(t,e,n){var i=this.getContentGroup();vm(t.get("orient"),i,t.get("itemGap"),n.width,n.height);var r=i.getBoundingRect();return i.attr("position",[-r.x,-r.y]),this.group.getBoundingRect()},remove:function(){this.getContentGroup().removeAll(),this._isFirstRender=!0}}),Qw=function(t){var e=t.findComponents({mainType:"legend"});e&&e.length&&t.filterSeries(function(t){for(var n=0;n<e.length;n++)if(!e[n].isSelected(t.name))return!1;return!0})};Ks(Qw),_m.registerSubTypeDefaulter("legend",function(){return"plain"});var tb=Yw.extend({type:"legend.scroll",setScrollDataIndex:function(t){this.option.scrollDataIndex=t},defaultOption:{scrollDataIndex:0,pageButtonItemGap:5,pageButtonGap:null,pageButtonPosition:"end",pageFormatter:"{current}/{total}",pageIcons:{horizontal:["M0,0L12,-10L12,10z","M0,0L-12,-10L-12,10z"],vertical:["M0,0L20,0L10,-20z","M0,0L20,0L10,20z"]},pageIconColor:"#2f4554",pageIconInactiveColor:"#aaa",pageIconSize:15,pageTextStyle:{color:"#333"},animationDurationUpdate:800},init:function(t,e,n,i){var r=Co(t);tb.superCall(this,"init",t,e,n,i),wh(this,t,r)},mergeOption:function(t,e){tb.superCall(this,"mergeOption",t,e),wh(this,this.option,t)},getOrient:function(){return"vertical"===this.get("orient")?{index:1,name:"vertical"}:{index:0,name:"horizontal"}}}),eb=op,nb=["width","height"],ib=["x","y"],rb=Jw.extend({type:"legend.scroll",newlineDisabled:!0,init:function(){rb.superCall(this,"init"),this._currentIndex=0,this.group.add(this._containerGroup=new eb),this._containerGroup.add(this.getContentGroup()),this.group.add(this._controllerGroup=new eb),this._showController},resetInner:function(){rb.superCall(this,"resetInner"),this._controllerGroup.removeAll(),this._containerGroup.removeClipPath(),this._containerGroup.__rectSize=null},renderInner:function(t,e,n,i){function r(t,n){var r=t+"DataIndex",l=Hr(e.get("pageIcons",!0)[e.getOrient().name][n],{onclick:x(o._pageGo,o,r,e,i)},{x:-s[0]/2,y:-s[1]/2,width:s[0],height:s[1]});l.name=t,a.add(l)}var o=this;rb.superCall(this,"renderInner",t,e,n,i);var a=this._controllerGroup,s=e.get("pageIconSize",!0);b(s)||(s=[s,s]),r("pagePrev",0);var l=e.getModel("pageTextStyle");a.add(new mv({name:"pageText",style:{textFill:l.getTextColor(),font:l.getFont(),textVerticalAlign:"middle",textAlign:"center"},silent:!0})),r("pageNext",1)},layoutInner:function(t,e,n,i){var r=this.getContentGroup(),o=this._containerGroup,a=this._controllerGroup,s=t.getOrient().index,l=nb[s],u=nb[1-s],c=ib[1-s];vm(t.get("orient"),r,t.get("itemGap"),s?n.width:null,s?null:n.height),vm("horizontal",a,t.get("pageButtonItemGap",!0));var h=r.getBoundingRect(),f=a.getBoundingRect(),d=this._showController=h[l]>n[l],p=[-h.x,-h.y];i||(p[s]=r.position[s]);var g=[0,0],v=[-f.x,-f.y],m=P(t.get("pageButtonGap",!0),t.get("itemGap",!0));if(d){var y=t.get("pageButtonPosition",!0);"end"===y?v[s]+=n[l]-f[l]:g[s]+=f[l]+m}v[1-s]+=h[u]/2-f[u]/2,r.attr("position",p),o.attr("position",g),a.attr("position",v);var _=this.group.getBoundingRect();_={x:0,y:0};if(_[l]=d?n[l]:h[l],_[u]=Math.max(h[u],f[u]),_[c]=Math.min(0,f[c]+v[1-s]),o.__rectSize=n[l],d){var x={x:0,y:0};x[l]=Math.max(n[l]-f[l]-m,0),x[u]=_[u],o.setClipPath(new Cv({shape:x})),o.__rectSize=x[l]}else a.eachChild(function(t){t.attr({invisible:!0,silent:!0})});var w=this._getPageInfo(t);return null!=w.pageIndex&&Nr(r,{position:w.contentPosition},!!d&&t),this._updatePageInfoView(t,w),_},_pageGo:function(t,e,n){var i=this._getPageInfo(e)[t];null!=i&&n.dispatchAction({type:"legendScroll",scrollDataIndex:i,legendId:e.id})},_updatePageInfoView:function(t,e){var n=this._controllerGroup;g(["pagePrev","pageNext"],function(i){var r=null!=e[i+"DataIndex"],o=n.childOfName(i);o&&(o.setStyle("fill",r?t.get("pageIconColor",!0):t.get("pageIconInactiveColor",!0)),o.cursor=r?"pointer":"default")});var i=n.childOfName("pageText"),r=t.get("pageFormatter"),o=e.pageIndex,a=null!=o?o+1:0,s=e.pageCount;i&&r&&i.setStyle("text",M(r)?r.replace("{current}",a).replace("{total}",s):r({current:a,total:s}))},_getPageInfo:function(t){function e(t){if(t){var e=t.getBoundingRect(),n=e[l]+t.position[a];return{s:n,e:n+e[s],i:t.__legendDataIndex}}}function n(t,e){return t.e>=e&&t.s<=e+o}var i=t.get("scrollDataIndex",!0),r=this.getContentGroup(),o=this._containerGroup.__rectSize,a=t.getOrient().index,s=nb[a],l=ib[a],u=this._findTargetItemIndex(i),c=r.children(),h=c[u],f=c.length,d=f?1:0,p={contentPosition:r.position.slice(),pageCount:d,pageIndex:d-1,pagePrevDataIndex:null,pageNextDataIndex:null};if(!h)return p;var g=e(h);p.contentPosition[a]=-g.s;for(var v=u+1,m=g,y=g,_=null;f>=v;++v)_=e(c[v]),(!_&&y.e>m.s+o||_&&!n(_,m.s))&&(m=y.i>m.i?y:_,m&&(null==p.pageNextDataIndex&&(p.pageNextDataIndex=m.i),++p.pageCount)),y=_;for(v=u-1,m=g,y=g,_=null;v>=-1;--v)_=e(c[v]),_&&n(y,_.s)||!(m.i<y.i)||(y=m,null==p.pagePrevDataIndex&&(p.pagePrevDataIndex=m.i),++p.pageCount,++p.pageIndex),m=_;return p},_findTargetItemIndex:function(t){var e,n=this.getContentGroup();return this._showController?n.eachChild(function(n,i){n.__legendDataIndex===t&&(e=i)}):e=0,e}});Qs("legendScroll","legendscroll",function(t,e){var n=t.scrollDataIndex;null!=n&&e.eachComponent({mainType:"legend",subType:"scroll",query:t},function(t){t.setScrollDataIndex(n)})});var ob=function(t,e){var n,i=[],r=t.seriesIndex;if(null==r||!(n=e.getSeriesByIndex(r)))return{point:[]};var o=n.getData(),a=Xn(o,t);if(null==a||0>a||b(a))return{point:[]};var s=o.getItemGraphicEl(a),l=n.coordinateSystem;if(n.getTooltipPosition)i=n.getTooltipPosition(a)||[];else if(l&&l.dataToPoint)i=l.dataToPoint(o.getValues(v(l.dimensions,function(t){return o.mapDimension(t)}),a,!0))||[];else if(s){var u=s.getBoundingRect().clone();u.applyTransform(s.transform),i=[u.x+u.width/2,u.y+u.height/2]}return{point:i,el:s}},ab=g,sb=w,lb=Yn(),ub=function(t,e,n){var i=t.currTrigger,r=[t.x,t.y],o=t,a=t.dispatchAction||x(n.dispatchAction,n),s=e.getComponent("axisPointer").coordSysAxesInfo;if(s){Ph(r)&&(r=ob({seriesIndex:o.seriesIndex,dataIndex:o.dataIndex},e).point);var l=Ph(r),u=o.axesInfo,c=s.axesInfo,h="leave"===i||Ph(r),f={},d={},p={list:[],map:{}},g={showPointer:sb(Mh,d),showTooltip:sb(Ih,p)};ab(s.coordSysMap,function(t,e){var n=l||t.containPoint(r);ab(s.coordSysAxesInfo[e],function(t){var e=t.axis,i=Ch(u,t);if(!h&&n&&(!u||i)){var o=i&&i.value;null!=o||l||(o=e.pointToData(r)),null!=o&&bh(t,o,g,!1,f)}})});var v={};return ab(c,function(t,e){var n=t.linkGroup;n&&!d[e]&&ab(n.axesInfo,function(e,i){var r=d[i];if(e!==t&&r){var o=r.value;n.mapper&&(o=t.axis.scale.parse(n.mapper(o,Dh(e),Dh(t)))),v[t.key]=o}})}),ab(v,function(t,e){bh(c[e],t,g,!0,f)}),Ah(d,c,f),Th(p,r,t,a),kh(c,a,n),f}},cb=(al({type:"axisPointer",coordSysAxesInfo:null,defaultOption:{show:"auto",triggerOn:null,zlevel:0,z:50,type:"line",snap:!1,triggerTooltip:!0,value:null,status:null,link:[],animation:null,animationDurationUpdate:200,lineStyle:{color:"#aaa",width:1,type:"solid"},shadowStyle:{color:"rgba(150,150,150,0.3)"},label:{show:!0,formatter:null,precision:"auto",margin:3,color:"#fff",padding:[5,7,5,7],backgroundColor:"auto",borderColor:null,borderWidth:0,shadowBlur:3,shadowColor:"#aaa"},handle:{show:!1,icon:"M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",size:45,margin:50,color:"#333",shadowBlur:3,shadowColor:"#aaa",shadowOffsetX:0,shadowOffsetY:2,throttle:40}}}),Yn()),hb=g,fb=sl({type:"axisPointer",render:function(t,e,n){var i=e.getComponent("tooltip"),r=t.get("triggerOn")||i&&i.get("triggerOn")||"mousemove|click";Oh("axisPointer",n,function(t,e,n){"none"!==r&&("leave"===t||r.indexOf(t)>=0)&&n({type:"updateAxisPointer",currTrigger:t,x:e&&e.offsetX,y:e&&e.offsetY})})},remove:function(t,e){zh(e.getZr(),"axisPointer"),fb.superApply(this._model,"remove",arguments)},dispose:function(t,e){zh("axisPointer",e),fb.superApply(this._model,"dispose",arguments)}}),db=Yn(),pb=o,gb=x;Fh.prototype={_group:null,_lastGraphicKey:null,_handle:null,_dragging:!1,_lastValue:null,_lastStatus:null,_payloadInfo:null,animationThreshold:15,render:function(t,e,n,i){var r=e.get("value"),o=e.get("status");if(this._axisModel=t,this._axisPointerModel=e,this._api=n,i||this._lastValue!==r||this._lastStatus!==o){this._lastValue=r,this._lastStatus=o;var a=this._group,s=this._handle;if(!o||"hide"===o)return a&&a.hide(),void(s&&s.hide());a&&a.show(),s&&s.show();var l={};this.makeElOption(l,r,t,e,n);var u=l.graphicKey;u!==this._lastGraphicKey&&this.clear(n),this._lastGraphicKey=u;var c=this._moveAnimation=this.determineAnimation(t,e);if(a){var h=w($h,e,c);this.updatePointerEl(a,l,h,e),this.updateLabelEl(a,l,h,e)}else a=this._group=new op,this.createPointerEl(a,l,t,e),this.createLabelEl(a,l,t,e),n.getZr().add(a);Gh(a,e,!0),this._renderHandle(r)}},remove:function(t){this.clear(t)},dispose:function(t){this.clear(t)},determineAnimation:function(t,e){var n=e.get("animation"),i=t.axis,r="category"===i.type,o=e.get("snap");if(!o&&!r)return!1;if("auto"===n||null==n){var a=this.animationThreshold;if(r&&i.getBandWidth()>a)return!0;if(o){var s=Ic(t).seriesDataCount,l=i.getExtent();return Math.abs(l[0]-l[1])/s>a}return!1}return!0===n},makeElOption:function(){},createPointerEl:function(t,e){var n=e.pointer;if(n){var i=db(t).pointerEl=new Yv[n.type](pb(e.pointer));t.add(i)}},createLabelEl:function(t,e,n,i){if(e.label){var r=db(t).labelEl=new Cv(pb(e.label));t.add(r),jh(r,i)}},updatePointerEl:function(t,e,n){var i=db(t).pointerEl;i&&(i.setStyle(e.pointer.style),n(i,{shape:e.pointer.shape}))},updateLabelEl:function(t,e,n,i){var r=db(t).labelEl;r&&(r.setStyle(e.label.style),n(r,{shape:e.label.shape,position:e.label.position}),jh(r,i))},_renderHandle:function(t){if(!this._dragging&&this.updateHandleTransform){var e,n=this._axisPointerModel,i=this._api.getZr(),r=this._handle,o=n.getModel("handle"),a=n.get("status");if(!o.get("show")||!a||"hide"===a)return r&&i.remove(r),void(this._handle=null);this._handle||(e=!0,r=this._handle=Hr(o.get("icon"),{cursor:"move",draggable:!0,onmousemove:function(t){xd(t.event)},onmousedown:gb(this._onHandleDragMove,this,0,0),drift:gb(this._onHandleDragMove,this),ondragend:gb(this._onHandleDragEnd,this)}),i.add(r)),Gh(r,n,!1);var s=["color","borderColor","borderWidth","opacity","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY"];r.setStyle(o.getItemStyle(null,s));var l=o.get("size");b(l)||(l=[l,l]),r.attr("scale",[l[0]/2,l[1]/2]),Ya(this,"_doDispatchAxisPointer",o.get("throttle")||0,"fixRate"),this._moveHandleToValue(t,e)}},_moveHandleToValue:function(t,e){$h(this._axisPointerModel,!e&&this._moveAnimation,this._handle,Hh(this.getHandleTransform(t,this._axisModel,this._axisPointerModel)))},_onHandleDragMove:function(t,e){var n=this._handle;if(n){this._dragging=!0;var i=this.updateHandleTransform(Hh(n),[t,e],this._axisModel,this._axisPointerModel);this._payloadInfo=i,n.stopAnimation(),n.attr(Hh(i)),db(n).lastProp=null,this._doDispatchAxisPointer()}},_doDispatchAxisPointer:function(){var t=this._handle;if(t){var e=this._payloadInfo,n=this._axisModel;this._api.dispatchAction({type:"updateAxisPointer",x:e.cursorPoint[0],y:e.cursorPoint[1],tooltipOption:e.tooltipOption,axesInfo:[{axisDim:n.axis.dim,axisIndex:n.componentIndex}]})}},_onHandleDragEnd:function(){this._dragging=!1;var t=this._handle;if(t){var e=this._axisPointerModel.get("value");this._moveHandleToValue(e),this._api.dispatchAction({type:"hideTip"})}},getHandleTransform:null,updateHandleTransform:null,clear:function(t){this._lastValue=null,this._lastStatus=null;var e=t.getZr(),n=this._group,i=this._handle;e&&n&&(this._lastGraphicKey=null,n&&e.remove(n),i&&e.remove(i),this._group=null,this._handle=null,this._payloadInfo=null)},doClear:function(){},buildLabel:function(t,e,n){return n=n||0,{x:t[n],y:t[1-n],width:e[n],height:e[1-n]}}},Fh.prototype.constructor=Fh,ni(Fh);var vb=Fh.extend({makeElOption:function(t,e,n,i,r){var o=n.axis,a=o.grid,s=i.get("type"),l=Qh(a,o).getOtherAxis(o).getGlobalExtent(),u=o.toGlobalCoord(o.dataToCoord(e,!0));if(s&&"none"!==s){var c=Wh(i),h=mb[s](o,u,l,c);h.style=c,t.graphicKey=h.type,t.pointer=h}var f=Pc(a.model,n);Zh(e,t,f,n,i,r)},getHandleTransform:function(t,e,n){var i=Pc(e.axis.grid.model,e,{labelInside:!1});return i.labelMargin=n.get("handle.margin"),{position:qh(e.axis,t,i),rotation:i.rotation+(i.labelDirection<0?Math.PI:0)}},updateHandleTransform:function(t,e,n){var i=n.axis,r=i.grid,o=i.getGlobalExtent(!0),a=Qh(r,i).getOtherAxis(i).getGlobalExtent(),s="x"===i.dim?0:1,l=t.position;l[s]+=e[s],l[s]=Math.min(o[1],l[s]),l[s]=Math.max(o[0],l[s]);var u=(a[1]+a[0])/2,c=[u,u];c[s]=l[s];var h=[{verticalAlign:"middle"},{align:"center"}];return{position:l,rotation:t.rotation,cursorPoint:c,tooltipOption:h[s]}}}),mb={line:function(t,e,n,i){var r=Kh([e,n[0]],[e,n[1]],tf(t));return ar({shape:r,style:i}),{type:"Line",shape:r}},shadow:function(t,e,n){var i=Math.max(1,t.getBandWidth()),r=n[1]-n[0];return{type:"Rect",shape:Jh([e-i/2,n[0]],[i,r],tf(t))}}};sw.registerAxisPointerClass("CartesianAxisPointer",vb),Zs(function(t){if(t){(!t.axisPointer||0===t.axisPointer.length)&&(t.axisPointer={});var e=t.axisPointer.link;e&&!b(e)&&(t.axisPointer.link=[e])}}),Ks(a_.PROCESSOR.STATISTIC,function(t,e){t.getComponent("axisPointer").coordSysAxesInfo=yc(t,e)}),Qs({type:"updateAxisPointer",event:"updateAxisPointer",update:":updateAxisPointer"},ub),al({type:"tooltip",dependencies:["axisPointer"],defaultOption:{zlevel:0,z:60,show:!0,showContent:!0,trigger:"item",triggerOn:"mousemove|click",alwaysShowContent:!1,displayMode:"single",renderMode:"auto",confine:!1,showDelay:0,hideDelay:100,transitionDuration:.4,enterable:!1,backgroundColor:"rgba(50,50,50,0.7)",borderColor:"#333",borderRadius:4,borderWidth:0,padding:5,extraCssText:"",axisPointer:{type:"line",axis:"auto",animation:"auto",animationDurationUpdate:200,animationEasingUpdate:"exponentialOut",crossStyle:{color:"#999",width:1,type:"dashed",textStyle:{}}},textStyle:{color:"#fff",fontSize:14}}});var yb=g,_b=vo,xb=["","-webkit-","-moz-","-o-"],wb="position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;";of.prototype={constructor:of,_enterable:!0,update:function(){var t=this._container,e=t.currentStyle||n.defaultView.getComputedStyle(t),i=t.style;"absolute"!==i.position&&"absolute"!==e.position&&(i.position="relative")},show:function(t){clearTimeout(this._hideTimeout);var e=this.el;e.style.cssText=wb+rf(t)+";left:"+this._x+"px;top:"+this._y+"px;"+(t.get("extraCssText")||""),e.style.display=e.innerHTML?"block":"none",e.style.pointerEvents=this._enterable?"auto":"none",this._show=!0},setContent:function(t){this.el.innerHTML=null==t?"":t},setEnterable:function(t){this._enterable=t},getSize:function(){var t=this.el;return[t.clientWidth,t.clientHeight]},moveTo:function(t,e){var n,i=this._zr;i&&i.painter&&(n=i.painter.getViewportRootOffset())&&(t+=n.offsetLeft,e+=n.offsetTop);var r=this.el.style;r.left=t+"px",r.top=e+"px",this._x=t,this._y=e},hide:function(){this.el.style.display="none",this._show=!1},hideLater:function(t){!this._show||this._inContent&&this._enterable||(t?(this._hideDelay=t,this._show=!1,this._hideTimeout=setTimeout(x(this.hide,this),t)):this.hide())},isShow:function(){return this._show},getOuterSize:function(){var t=this.el.clientWidth,e=this.el.clientHeight;if(n.defaultView&&n.defaultView.getComputedStyle){var i=n.defaultView.getComputedStyle(this.el);i&&(t+=parseInt(i.paddingLeft,10)+parseInt(i.paddingRight,10)+parseInt(i.borderLeftWidth,10)+parseInt(i.borderRightWidth,10),e+=parseInt(i.paddingTop,10)+parseInt(i.paddingBottom,10)+parseInt(i.borderTopWidth,10)+parseInt(i.borderBottomWidth,10))}return{width:t,height:e}}},af.prototype={constructor:af,_enterable:!0,update:function(){},show:function(){this._hideTimeout&&clearTimeout(this._hideTimeout),this.el.attr("show",!0),this._show=!0},setContent:function(t,e,n){this.el&&this._zr.remove(this.el);for(var i={},r=t,o="{marker",a="|}",s=r.indexOf(o);s>=0;){var l=r.indexOf(a),u=r.substr(s+o.length,l-s-o.length);i["marker"+u]=u.indexOf("sub")>-1?{textWidth:4,textHeight:4,textBorderRadius:2,textBackgroundColor:e[u],textOffset:[3,0]}:{textWidth:10,textHeight:10,textBorderRadius:5,textBackgroundColor:e[u]},r=r.substr(l+1),s=r.indexOf("{marker")}this.el=new mv({style:{rich:i,text:t,textLineHeight:20,textBackgroundColor:n.get("backgroundColor"),textBorderRadius:n.get("borderRadius"),textFill:n.get("textStyle.color"),textPadding:n.get("padding")},z:n.get("z")}),this._zr.add(this.el);var c=this;this.el.on("mouseover",function(){c._enterable&&(clearTimeout(c._hideTimeout),c._show=!0),c._inContent=!0}),this.el.on("mouseout",function(){c._enterable&&c._show&&c.hideLater(c._hideDelay),c._inContent=!1})},setEnterable:function(t){this._enterable=t},getSize:function(){var t=this.el.getBoundingRect();return[t.width,t.height]},moveTo:function(t,e){this.el&&this.el.attr("position",[t,e])},hide:function(){this.el.hide(),this._show=!1},hideLater:function(t){!this._show||this._inContent&&this._enterable||(t?(this._hideDelay=t,this._show=!1,this._hideTimeout=setTimeout(x(this.hide,this),t)):this.hide())},isShow:function(){return this._show},getOuterSize:function(){return this.getSize()}};var bb=x,Sb=g,Mb=Jr,Ib=new Cv({shape:{x:-1,y:-1,width:2,height:2}});sl({type:"tooltip",init:function(t,e){if(!qf.node){var n,i=t.getComponent("tooltip"),r=i.get("renderMode");this._renderMode=Qn(r),"html"===this._renderMode?(n=new of(e.getDom(),e),this._newLine="<br/>"):(n=new af(e),this._newLine="\n"),this._tooltipContent=n}},render:function(t,e,n){if(!qf.node){this.group.removeAll(),this._tooltipModel=t,this._ecModel=e,this._api=n,this._lastDataByCoordSys=null,this._alwaysShowContent=t.get("alwaysShowContent");var i=this._tooltipContent;i.update(),i.setEnterable(t.get("enterable")),this._initGlobalListener(),this._keepShow()}},_initGlobalListener:function(){var t=this._tooltipModel,e=t.get("triggerOn");Oh("itemTooltip",this._api,bb(function(t,n,i){"none"!==e&&(e.indexOf(t)>=0?this._tryShow(n,i):"leave"===t&&this._hide(i))},this))},_keepShow:function(){var t=this._tooltipModel,e=this._ecModel,n=this._api;if(null!=this._lastX&&null!=this._lastY&&"none"!==t.get("triggerOn")){var i=this;clearTimeout(this._refreshUpdateTimeout),this._refreshUpdateTimeout=setTimeout(function(){i.manuallyShowTip(t,e,n,{x:i._lastX,y:i._lastY})})}},manuallyShowTip:function(t,e,n,i){if(i.from!==this.uid&&!qf.node){var r=lf(i,n);this._ticket="";var o=i.dataByCoordSys;if(i.tooltip&&null!=i.x&&null!=i.y){var a=Ib;a.position=[i.x,i.y],a.update(),a.tooltip=i.tooltip,this._tryShow({offsetX:i.x,offsetY:i.y,target:a},r)}else if(o)this._tryShow({offsetX:i.x,offsetY:i.y,position:i.position,event:{},dataByCoordSys:i.dataByCoordSys,tooltipOption:i.tooltipOption},r);else if(null!=i.seriesIndex){if(this._manuallyAxisShowTip(t,e,n,i))return;var s=ob(i,e),l=s.point[0],u=s.point[1];null!=l&&null!=u&&this._tryShow({offsetX:l,offsetY:u,position:i.position,target:s.el,event:{}},r)}else null!=i.x&&null!=i.y&&(n.dispatchAction({type:"updateAxisPointer",x:i.x,y:i.y}),this._tryShow({offsetX:i.x,offsetY:i.y,position:i.position,target:n.getZr().findHover(i.x,i.y).target,event:{}},r))}},manuallyHideTip:function(t,e,n,i){var r=this._tooltipContent;!this._alwaysShowContent&&this._tooltipModel&&r.hideLater(this._tooltipModel.get("hideDelay")),this._lastX=this._lastY=null,i.from!==this.uid&&this._hide(lf(i,n))},_manuallyAxisShowTip:function(t,e,n,i){var r=i.seriesIndex,o=i.dataIndex,a=e.getComponent("axisPointer").coordSysAxesInfo;if(null!=r&&null!=o&&null!=a){var s=e.getSeriesByIndex(r);if(s){var l=s.getData();t=sf([l.getItemModel(o),s,(s.coordinateSystem||{}).model,t]);if("axis"===t.get("trigger"))return n.dispatchAction({type:"updateAxisPointer",seriesIndex:r,dataIndex:o,position:i.position}),!0}}},_tryShow:function(t,e){var n=t.target,i=this._tooltipModel;if(i){this._lastX=t.offsetX,this._lastY=t.offsetY;var r=t.dataByCoordSys;r&&r.length?this._showAxisTooltip(r,t):n&&null!=n.dataIndex?(this._lastDataByCoordSys=null,this._showSeriesItemTooltip(t,n,e)):n&&n.tooltip?(this._lastDataByCoordSys=null,this._showComponentItemTooltip(t,n,e)):(this._lastDataByCoordSys=null,this._hide(e))}},_showOrMove:function(t,e){var n=t.get("showDelay");e=x(e,this),clearTimeout(this._showTimout),n>0?this._showTimout=setTimeout(e,n):e()},_showAxisTooltip:function(t,e){var n=this._ecModel,i=this._tooltipModel,r=[e.offsetX,e.offsetY],o=[],s=[],l=sf([e.tooltipOption,i]),u=this._renderMode,c=this._newLine,h={};Sb(t,function(t){Sb(t.dataByAxis,function(t){var e=n.getComponent(t.axisDim+"Axis",t.axisIndex),i=t.value,r=[];if(e&&null!=i){var l=Yh(i,e.axis,n,t.seriesDataIndices,t.valueLabelOpt);g(t.seriesDataIndices,function(o){var c=n.getSeriesByIndex(o.seriesIndex),f=o.dataIndexInside,d=c&&c.getDataParams(f);if(d.axisDim=t.axisDim,d.axisIndex=t.axisIndex,d.axisType=t.axisType,d.axisId=t.axisId,d.axisValue=du(e.axis,i),d.axisValueLabel=l,d){s.push(d);var p,g=c.formatTooltip(f,!0,null,u);if(I(g)){p=g.html;var v=g.markers;a(h,v)}else p=g;r.push(p)}});var f=l;o.push("html"!==u?r.join(c):(f?mo(f)+c:"")+r.join(c))}})},this),o.reverse(),o=o.join(this._newLine+this._newLine);var f=e.position;this._showOrMove(l,function(){this._updateContentNotChangedOnAxis(t)?this._updatePosition(l,f,r[0],r[1],this._tooltipContent,s):this._showTooltipContent(l,o,s,Math.random(),r[0],r[1],f,void 0,h)})},_showSeriesItemTooltip:function(t,e,n){var i=this._ecModel,r=e.seriesIndex,o=i.getSeriesByIndex(r),a=e.dataModel||o,s=e.dataIndex,l=e.dataType,u=a.getData(),c=sf([u.getItemModel(s),a,o&&(o.coordinateSystem||{}).model,this._tooltipModel]),h=c.get("trigger");if(null==h||"item"===h){var f,d,p=a.getDataParams(s,l),g=a.formatTooltip(s,!1,l,this._renderMode);I(g)?(f=g.html,d=g.markers):(f=g,d=null);var v="item_"+a.name+"_"+s;this._showOrMove(c,function(){this._showTooltipContent(c,f,p,v,t.offsetX,t.offsetY,t.position,t.target,d)}),n({type:"showTip",dataIndexInside:s,dataIndex:u.getRawIndex(s),seriesIndex:r,from:this.uid})}},_showComponentItemTooltip:function(t,e,n){var i=e.tooltip;if("string"==typeof i){var r=i;i={content:r,formatter:r}}var o=new Gr(i,this._tooltipModel,this._ecModel),a=o.get("content"),s=Math.random();this._showOrMove(o,function(){this._showTooltipContent(o,a,o.get("formatterParams")||{},s,t.offsetX,t.offsetY,t.position,e)}),n({type:"showTip",from:this.uid})},_showTooltipContent:function(t,e,n,i,r,o,a,s,l){if(this._ticket="",t.get("showContent")&&t.get("show")){var u=this._tooltipContent,c=t.get("formatter");a=a||t.get("position");var h=e;if(c&&"string"==typeof c)h=yo(c,n,!0);else if("function"==typeof c){var f=bb(function(e,i){e===this._ticket&&(u.setContent(i,l,t),this._updatePosition(t,a,r,o,u,n,s))},this);this._ticket=i,h=c(n,i,f)}u.setContent(h,l,t),u.show(t),this._updatePosition(t,a,r,o,u,n,s)}},_updatePosition:function(t,e,n,i,r,o,a){var s=this._api.getWidth(),l=this._api.getHeight();e=e||t.get("position");var u=r.getSize(),c=t.get("align"),h=t.get("verticalAlign"),f=a&&a.getBoundingRect().clone();if(a&&f.applyTransform(a.transform),"function"==typeof e&&(e=e([n,i],o,r.el,f,{viewSize:[s,l],contentSize:u.slice()})),b(e))n=Mb(e[0],s),i=Mb(e[1],l);else if(I(e)){e.width=u[0],e.height=u[1];var d=To(e,{width:s,height:l});n=d.x,i=d.y,c=null,h=null}else if("string"==typeof e&&a){var p=hf(e,f,u);n=p[0],i=p[1]}else{p=uf(n,i,r,s,l,c?null:20,h?null:20);n=p[0],i=p[1]}if(c&&(n-=ff(c)?u[0]/2:"right"===c?u[0]:0),h&&(i-=ff(h)?u[1]/2:"bottom"===h?u[1]:0),t.get("confine")){p=cf(n,i,r,s,l);n=p[0],i=p[1]}r.moveTo(n,i)},_updateContentNotChangedOnAxis:function(t){var e=this._lastDataByCoordSys,n=!!e&&e.length===t.length;return n&&Sb(e,function(e,i){var r=e.dataByAxis||{},o=t[i]||{},a=o.dataByAxis||[];n&=r.length===a.length,n&&Sb(r,function(t,e){var i=a[e]||{},r=t.seriesDataIndices||[],o=i.seriesDataIndices||[];n&=t.value===i.value&&t.axisType===i.axisType&&t.axisId===i.axisId&&r.length===o.length,n&&Sb(r,function(t,e){var i=o[e];n&=t.seriesIndex===i.seriesIndex&&t.dataIndex===i.dataIndex})})}),this._lastDataByCoordSys=t,!!n},_hide:function(t){this._lastDataByCoordSys=null,t({type:"hideTip",from:this.uid})},dispose:function(t,e){qf.node||(this._tooltipContent.hide(),zh("itemTooltip",e))}}),Qs({type:"showTip",event:"showTip",update:"tooltip:manuallyShowTip"},function(){}),Qs({type:"hideTip",event:"hideTip",update:"tooltip:manuallyHideTip"},function(){});var Ab,Tb="urn:schemas-microsoft-com:vml",kb="undefined"==typeof e?null:e,Cb=!1,Db=kb&&kb.document;if(Db&&!qf.canvasSupported)try{!Db.namespaces.zrvml&&Db.namespaces.add("zrvml",Tb),Ab=function(t){return Db.createElement("<zrvml:"+t+' class="zrvml">')}}catch($S){Ab=function(t){return Db.createElement("<"+t+' xmlns="'+Tb+'" class="zrvml">')}}var Pb=Ug.CMD,Ob=Math.round,Lb=Math.sqrt,Eb=Math.abs,Nb=Math.cos,Rb=Math.sin,Bb=Math.max;if(!qf.canvasSupported){var zb=",",Fb="progid:DXImageTransform.Microsoft",$b=21600,Vb=$b/2,jb=1e5,Hb=1e3,Gb=function(t){t.style.cssText="position:absolute;left:0;top:0;width:1px;height:1px;",t.coordsize=$b+","+$b,t.coordorigin="0,0"},Wb=function(t){return String(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;")},Ub=function(t,e,n){return"rgb("+[t,e,n].join(",")+")"},Xb=function(t,e){e&&t&&e.parentNode!==t&&t.appendChild(e)},Yb=function(t,e){e&&t&&e.parentNode===t&&t.removeChild(e)},qb=function(t,e,n){return(parseFloat(t)||0)*jb+(parseFloat(e)||0)*Hb+n},Zb=function(t,e){return"string"==typeof t?t.lastIndexOf("%")>=0?parseFloat(t)/100*e:parseFloat(t):t},Kb=function(t,e,n){var i=Xt(e);n=+n,isNaN(n)&&(n=1),i&&(t.color=Ub(i[0],i[1],i[2]),t.opacity=n*i[3])},Jb=function(t){var e=Xt(t);return[Ub(e[0],e[1],e[2]),e[3]]},Qb=function(t,e,n){var i=e.fill;if(null!=i)if(i instanceof Rv){var r,o=0,a=[0,0],s=0,l=1,u=n.getBoundingRect(),c=u.width,h=u.height;if("linear"===i.type){r="gradient";var f=n.transform,d=[i.x*c,i.y*h],p=[i.x2*c,i.y2*h];f&&(st(d,d,f),st(p,p,f));var g=p[0]-d[0],v=p[1]-d[1];o=180*Math.atan2(g,v)/Math.PI,0>o&&(o+=360),1e-6>o&&(o=0)}else{r="gradientradial";d=[i.x*c,i.y*h],f=n.transform;var m=n.scale,y=c,_=h;a=[(d[0]-u.x)/y,(d[1]-u.y)/_],f&&st(d,d,f),y/=m[0]*$b,_/=m[1]*$b;var x=Bb(y,_);s=0/x,l=2*i.r/x-s}var w=i.colorStops.slice();w.sort(function(t,e){return t.offset-e.offset});for(var b=w.length,S=[],M=[],I=0;b>I;I++){var A=w[I],T=Jb(A.color);M.push(A.offset*l+s+" "+T[0]),(0===I||I===b-1)&&S.push(T)}if(b>=2){var k=S[0][0],C=S[1][0],D=S[0][1]*e.opacity,P=S[1][1]*e.opacity;t.type=r,t.method="none",t.focus="100%",t.angle=o,t.color=k,t.color2=C,t.colors=M.join(","),t.opacity=P,t.opacity2=D}"radial"===r&&(t.focusposition=a.join(","))}else Kb(t,i,e.opacity)},tS=function(t,e){null!=e.lineDash&&(t.dashstyle=e.lineDash.join(" ")),null==e.stroke||e.stroke instanceof Rv||Kb(t,e.stroke,e.opacity)},eS=function(t,e,n,i){var r="fill"===e,o=t.getElementsByTagName(e)[0];null!=n[e]&&"none"!==n[e]&&(r||!r&&n.lineWidth)?(t[r?"filled":"stroked"]="true",n[e]instanceof Rv&&Yb(t,o),o||(o=df(e)),r?Qb(o,n,i):tS(o,n),Xb(t,o)):(t[r?"filled":"stroked"]="false",Yb(t,o))},nS=[[],[],[]],iS=function(t,e){var n,i,r,o,a,s,l=Pb.M,u=Pb.C,c=Pb.L,h=Pb.A,f=Pb.Q,d=[],p=t.data,g=t.len();for(o=0;g>o;){switch(r=p[o++],i="",n=0,r){case l:i=" m ",n=1,a=p[o++],s=p[o++],nS[0][0]=a,nS[0][1]=s;break;case c:i=" l ",n=1,a=p[o++],s=p[o++],nS[0][0]=a,nS[0][1]=s;break;case f:case u:i=" c ",n=3;var v,m,y=p[o++],_=p[o++],x=p[o++],w=p[o++];r===f?(v=x,m=w,x=(x+2*y)/3,w=(w+2*_)/3,y=(a+2*y)/3,_=(s+2*_)/3):(v=p[o++],m=p[o++]),nS[0][0]=y,nS[0][1]=_,nS[1][0]=x,nS[1][1]=w,nS[2][0]=v,nS[2][1]=m,a=v,s=m;break;case h:var b=0,S=0,M=1,I=1,A=0;e&&(b=e[4],S=e[5],M=Lb(e[0]*e[0]+e[1]*e[1]),I=Lb(e[2]*e[2]+e[3]*e[3]),A=Math.atan2(-e[1]/I,e[0]/M));var T=p[o++],k=p[o++],C=p[o++],D=p[o++],P=p[o++]+A,O=p[o++]+P+A;o++;var L=p[o++],E=T+Nb(P)*C,N=k+Rb(P)*D,R=(y=T+Nb(O)*C,_=k+Rb(O)*D,L?" wa ":" at ");Math.abs(E-y)<1e-4&&(Math.abs(O-P)>.01?L&&(E+=270/$b):Math.abs(N-k)<1e-4?L&&T>E||!L&&E>T?_-=270/$b:_+=270/$b:L&&k>N||!L&&N>k?y+=270/$b:y-=270/$b),d.push(R,Ob(((T-C)*M+b)*$b-Vb),zb,Ob(((k-D)*I+S)*$b-Vb),zb,Ob(((T+C)*M+b)*$b-Vb),zb,Ob(((k+D)*I+S)*$b-Vb),zb,Ob((E*M+b)*$b-Vb),zb,Ob((N*I+S)*$b-Vb),zb,Ob((y*M+b)*$b-Vb),zb,Ob((_*I+S)*$b-Vb)),a=y,s=_;break;case Pb.R:var B=nS[0],z=nS[1];B[0]=p[o++],B[1]=p[o++],z[0]=B[0]+p[o++],z[1]=B[1]+p[o++],e&&(st(B,B,e),st(z,z,e)),B[0]=Ob(B[0]*$b-Vb),z[0]=Ob(z[0]*$b-Vb),B[1]=Ob(B[1]*$b-Vb),z[1]=Ob(z[1]*$b-Vb),d.push(" m ",B[0],zb,B[1]," l ",z[0],zb,B[1]," l ",z[0],zb,z[1]," l ",B[0],zb,z[1]);break;case Pb.Z:d.push(" x ")}if(n>0){d.push(i);for(var F=0;n>F;F++){var $=nS[F];e&&st($,$,e),d.push(Ob($[0]*$b-Vb),zb,Ob($[1]*$b-Vb),n-1>F?zb:"")}}}return d.join("")};$i.prototype.brushVML=function(t){var e=this.style,n=this._vmlEl;n||(n=df("shape"),Gb(n),this._vmlEl=n),eS(n,"fill",e,this),eS(n,"stroke",e,this);var i=this.transform,r=null!=i,o=n.getElementsByTagName("stroke")[0];if(o){var a=e.lineWidth;if(r&&!e.strokeNoScale){var s=i[0]*i[3]-i[1]*i[2];a*=Lb(Eb(s))}o.weight=a+"px"}var l=this.path||(this.path=new Ug);this.__dirtyPath&&(l.beginPath(),l.subPixelOptimize=!1,this.buildPath(l,this.shape),l.toStatic(),this.__dirtyPath=!1),n.path=iS(l,this.transform),n.style.zIndex=qb(this.zlevel,this.z,this.z2),Xb(t,n),null!=e.text?this.drawRectText(t,this.getBoundingRect()):this.removeRectText(t)},$i.prototype.onRemove=function(t){Yb(t,this._vmlEl),this.removeRectText(t)},$i.prototype.onAdd=function(t){Xb(t,this._vmlEl),this.appendRectText(t)};var rS=function(t){return"object"==typeof t&&t.tagName&&"IMG"===t.tagName.toUpperCase()};bn.prototype.brushVML=function(t){var e,n,i=this.style,r=i.image;if(rS(r)){var o=r.src;if(o===this._imageSrc)e=this._imageWidth,n=this._imageHeight;else{var a=r.runtimeStyle,s=a.width,l=a.height;a.width="auto",a.height="auto",e=r.width,n=r.height,a.width=s,a.height=l,this._imageSrc=o,this._imageWidth=e,this._imageHeight=n}r=o}else r===this._imageSrc&&(e=this._imageWidth,n=this._imageHeight);if(r){var u=i.x||0,c=i.y||0,h=i.width,f=i.height,d=i.sWidth,p=i.sHeight,g=i.sx||0,v=i.sy||0,m=d&&p,y=this._vmlEl;y||(y=Db.createElement("div"),Gb(y),this._vmlEl=y);var _,x=y.style,w=!1,b=1,S=1;if(this.transform&&(_=this.transform,b=Lb(_[0]*_[0]+_[1]*_[1]),S=Lb(_[2]*_[2]+_[3]*_[3]),w=_[1]||_[2]),w){var M=[u,c],I=[u+h,c],A=[u,c+f],T=[u+h,c+f];st(M,M,_),st(I,I,_),st(A,A,_),st(T,T,_);var k=Bb(M[0],I[0],A[0],T[0]),C=Bb(M[1],I[1],A[1],T[1]),D=[];D.push("M11=",_[0]/b,zb,"M12=",_[2]/S,zb,"M21=",_[1]/b,zb,"M22=",_[3]/S,zb,"Dx=",Ob(u*b+_[4]),zb,"Dy=",Ob(c*S+_[5])),x.padding="0 "+Ob(k)+"px "+Ob(C)+"px 0",x.filter=Fb+".Matrix("+D.join("")+", SizingMethod=clip)"}else _&&(u=u*b+_[4],c=c*S+_[5]),x.filter="",x.left=Ob(u)+"px",x.top=Ob(c)+"px";var P=this._imageEl,O=this._cropEl;P||(P=Db.createElement("div"),this._imageEl=P);var L=P.style;if(m){if(e&&n)L.width=Ob(b*e*h/d)+"px",L.height=Ob(S*n*f/p)+"px";else{var E=new Image,N=this;E.onload=function(){E.onload=null,e=E.width,n=E.height,L.width=Ob(b*e*h/d)+"px",L.height=Ob(S*n*f/p)+"px",N._imageWidth=e,N._imageHeight=n,N._imageSrc=r},E.src=r}O||(O=Db.createElement("div"),O.style.overflow="hidden",this._cropEl=O);var R=O.style;R.width=Ob((h+g*h/d)*b),R.height=Ob((f+v*f/p)*S),R.filter=Fb+".Matrix(Dx="+-g*h/d*b+",Dy="+-v*f/p*S+")",O.parentNode||y.appendChild(O),P.parentNode!==O&&O.appendChild(P)}else L.width=Ob(b*h)+"px",L.height=Ob(S*f)+"px",y.appendChild(P),O&&O.parentNode&&(y.removeChild(O),this._cropEl=null);var B="",z=i.opacity;1>z&&(B+=".Alpha(opacity="+Ob(100*z)+") "),B+=Fb+".AlphaImageLoader(src="+r+", SizingMethod=scale)",L.filter=B,y.style.zIndex=qb(this.zlevel,this.z,this.z2),Xb(t,y),null!=i.text&&this.drawRectText(t,this.getBoundingRect())}},bn.prototype.onRemove=function(t){Yb(t,this._vmlEl),this._vmlEl=null,this._cropEl=null,this._imageEl=null,this.removeRectText(t)},bn.prototype.onAdd=function(t){Xb(t,this._vmlEl),this.appendRectText(t)};var oS,aS="normal",sS={},lS=0,uS=100,cS=n.createElement("div"),hS=function(t){var e=sS[t];if(!e){lS>uS&&(lS=0,sS={});var n,i=cS.style;try{i.font=t,n=i.fontFamily.split(",")[0]}catch(a){}e={style:i.fontStyle||aS,variant:i.fontVariant||aS,weight:i.fontWeight||aS,size:0|parseFloat(i.fontSize||12),family:n||"Microsoft YaHei"},sS[t]=e,lS++}return e};Be("measureText",function(t,e){var n=Db;oS||(oS=n.createElement("div"),oS.style.cssText="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;",Db.body.appendChild(oS));try{oS.style.font=e}catch(o){}return oS.innerHTML="",oS.appendChild(n.createTextNode(t)),{width:oS.offsetWidth}});for(var fS=new _e,dS=function(t,e,n,i){var r=this.style;this.__dirty&&nn(r,!0);var o=r.text;if(null!=o&&(o+=""),o){if(r.rich){var a=Je(o,r);o=[];for(var s=0;s<a.lines.length;s++){for(var l=a.lines[s].tokens,u=[],c=0;c<l.length;c++)u.push(l[c].text);o.push(u.join(""))}o=o.join("\n")}var h,f,d=r.textAlign,p=r.textVerticalAlign,g=hS(r.font),v=g.style+" "+g.variant+" "+g.weight+" "+g.size+'px "'+g.family+'"';n=n||Fe(o,v,d,p,r.textPadding,r.textLineHeight);var m=this.transform;if(m&&!i&&(fS.copy(e),fS.applyTransform(m),e=fS),i)h=e.x,f=e.y;else{var y=r.textPosition,_=r.textDistance;if(y instanceof Array)h=e.x+Zb(y[0],e.width),f=e.y+Zb(y[1],e.height),d=d||"left";else{var x=Ge(y,e,_);h=x.x,f=x.y,d=d||x.textAlign,p=p||x.textVerticalAlign}}h=je(h,n.width,d),f=He(f,n.height,p),f+=n.height/2;var w,b,S,M=df,I=this._textVmlEl;I?(S=I.firstChild,w=S.nextSibling,b=w.nextSibling):(I=M("line"),w=M("path"),b=M("textpath"),S=M("skew"),b.style["v-text-align"]="left",Gb(I),w.textpathok=!0,b.on=!0,I.from="0 0",I.to="1000 0.05",Xb(I,S),Xb(I,w),Xb(I,b),this._textVmlEl=I);var A=[h,f],T=I.style;m&&i?(st(A,A,m),S.on=!0,S.matrix=m[0].toFixed(3)+zb+m[2].toFixed(3)+zb+m[1].toFixed(3)+zb+m[3].toFixed(3)+",0,0",S.offset=(Ob(A[0])||0)+","+(Ob(A[1])||0),S.origin="0 0",T.left="0px",T.top="0px"):(S.on=!1,T.left=Ob(h)+"px",T.top=Ob(f)+"px"),b.string=Wb(o);try{b.style.font=v}catch(D){}eS(I,"fill",{fill:r.textFill,opacity:r.opacity},this),eS(I,"stroke",{stroke:r.textStroke,opacity:r.opacity,lineDash:r.lineDash},this),I.style.zIndex=qb(this.zlevel,this.z,this.z2),Xb(t,I)}},pS=function(t){Yb(t,this._textVmlEl),this._textVmlEl=null},gS=function(t){Xb(t,this._textVmlEl)},vS=[Lp,wn,bn,$i,mv],mS=0;mS<vS.length;mS++){var yS=vS[mS].prototype;yS.drawRectText=dS,yS.removeRectText=pS,yS.appendRectText=gS}mv.prototype.brushVML=function(t){var e=this.style;null!=e.text?this.drawRectText(t,{x:e.x||0,y:e.y||0,width:0,height:0},this.getBoundingRect(),!0):this.removeRectText(t)},mv.prototype.onRemove=function(t){this.removeRectText(t)},mv.prototype.onAdd=function(t){this.appendRectText(t)}}vf.prototype={constructor:vf,getType:function(){return"vml"},getViewportRoot:function(){return this._vmlViewport},getViewportRootOffset:function(){var t=this.getViewportRoot();return t?{offsetLeft:t.offsetLeft||0,offsetTop:t.offsetTop||0}:void 0},refresh:function(){var t=this.storage.getDisplayList(!0,!0);this._paintList(t)},_paintList:function(t){for(var e=this._vmlRoot,n=0;n<t.length;n++){var i=t[n];i.invisible||i.ignore?(i.__alreadyNotVisible||i.onRemove(e),i.__alreadyNotVisible=!0):(i.__alreadyNotVisible&&i.onAdd(e),i.__alreadyNotVisible=!1,i.__dirty&&(i.beforeBrush&&i.beforeBrush(),(i.brushVML||i.brush).call(i,e),i.afterBrush&&i.afterBrush())),i.__dirty=!1}this._firstPaint&&(this._vmlViewport.appendChild(e),this._firstPaint=!1)},resize:function(t,e){t=null==t?this._getWidth():t,e=null==e?this._getHeight():e;if(this._width!==t||this._height!==e){this._width=t,this._height=e;var n=this._vmlViewport.style;n.width=t+"px",n.height=e+"px"}},dispose:function(){this.root.innerHTML="",this._vmlRoot=this._vmlViewport=this.storage=null},getWidth:function(){return this._width},getHeight:function(){return this._height},clear:function(){this._vmlViewport&&this.root.removeChild(this._vmlViewport)},_getWidth:function(){var t=this.root,e=t.currentStyle;return(t.clientWidth||gf(e.width))-gf(e.paddingLeft)-gf(e.paddingRight)|0},_getHeight:function(){var t=this.root,e=t.currentStyle;return(t.clientHeight||gf(e.height))-gf(e.paddingTop)-gf(e.paddingBottom)|0}},g(["getLayer","insertLayer","eachLayer","eachBuiltinLayer","eachOtherLayer","getLayers","modLayer","delLayer","clearLayer","toDataURL","pathToImage"],function(t){vf.prototype[t]=mf(t)}),Bn("vml",vf);var _S="http://www.w3.org/2000/svg",xS=Ug.CMD,wS=Array.prototype.join,bS="none",SS=Math.round,MS=Math.sin,IS=Math.cos,AS=Math.PI,TS=2*Math.PI,kS=180/AS,CS=1e-4,DS={brush:function(t){var e=t.style,n=t.__svgEl;n||(n=yf("path"),t.__svgEl=n),t.path||t.createPathProxy();var i=t.path;if(t.__dirtyPath){i.beginPath(),i.subPixelOptimize=!1,t.buildPath(i,t.shape),t.__dirtyPath=!1;var r=Tf(i);r.indexOf("NaN")<0&&Mf(n,"d",r)}Af(n,e,!1,t),Sf(n,t.transform),null!=e.text&&ES(t,t.getBoundingRect())}},PS={brush:function(t){var e=t.style,n=e.image;if(n instanceof HTMLImageElement){var i=n.src;n=i}if(n){var r=e.x||0,o=e.y||0,a=e.width,s=e.height,l=t.__svgEl;l||(l=yf("image"),t.__svgEl=l),n!==t.__imageSrc&&(If(l,"href",n),t.__imageSrc=n),Mf(l,"width",a),Mf(l,"height",s),Mf(l,"x",r),Mf(l,"y",o),Sf(l,t.transform),null!=e.text&&ES(t,t.getBoundingRect())}}},OS={},LS=new _e,ES=function(t,e,i){var r=t.style;t.__dirty&&nn(r,!0);var o=r.text;if(null!=o){o+="";var a=t.__textSvgEl;a||(a=yf("text"),t.__textSvgEl=a);var s,l,u=r.textPosition,c=r.textDistance,h=r.textAlign||"left";"number"==typeof r.fontSize&&(r.fontSize+="px");var f=r.font||[r.fontStyle||"",r.fontWeight||"",r.fontSize||"",r.fontFamily||""].join(" ")||Ap,d=kf(r.textVerticalAlign);i=Fe(o,f,h,d,r.textPadding,r.textLineHeight);var p=i.lineHeight;if(u instanceof Array)s=e.x+u[0],l=e.y+u[1];else{var g=Ge(u,e,c);s=g.x,l=g.y,d=kf(g.textVerticalAlign),h=g.textAlign}Mf(a,"alignment-baseline",d),f&&(a.style.font=f);var v=r.textPadding;if(Mf(a,"x",s),Mf(a,"y",l),Af(a,r,!0,t),t instanceof mv||t.style.transformText)Sf(a,t.transform);else{if(t.transform)LS.copy(e),LS.applyTransform(t.transform),e=LS;else{var m=t.transformCoordToGlobal(e.x,e.y);e.x=m[0],e.y=m[1],t.transform=Tt(At())}var y=r.textOrigin;"center"===y?(s=i.width/2+s,l=i.height/2+l):y&&(s=y[0]+s,l=y[1]+l);var _=-r.textRotation||0,x=At();Pt(x,x,_);m=[t.transform[4],t.transform[5]];Dt(x,x,m),Sf(a,x)}var w=o.split("\n"),b=w.length,S=h;"left"===S?(S="start",v&&(s+=v[3])):"right"===S?(S="end",v&&(s-=v[1])):"center"===S&&(S="middle",v&&(s+=(v[3]-v[1])/2));var M=0;if("after-edge"===d?(M=-i.height+p,v&&(M-=v[2])):"middle"===d?(M=(-i.height+p)/2,v&&(l+=(v[0]-v[2])/2)):v&&(M+=v[0]),t.__text!==o||t.__textFont!==f){var I=t.__tspanList||[];t.__tspanList=I;for(var A=0;b>A;A++){var T=I[A];T?T.innerHTML="":(T=I[A]=yf("tspan"),a.appendChild(T),Mf(T,"alignment-baseline",d),Mf(T,"text-anchor",S)),Mf(T,"x",s),Mf(T,"y",l+A*p+M),T.appendChild(n.createTextNode(w[A]))}for(;A<I.length;A++)a.removeChild(I[A]);I.length=b,t.__text=o,t.__textFont=f}else if(t.__tspanList.length){var k=t.__tspanList.length;for(A=0;k>A;++A){T=t.__tspanList[A];T&&(Mf(T,"x",s),Mf(T,"y",l+A*p+M))}}}};OS.drawRectText=ES,OS.brush=function(t){var e=t.style;null!=e.text&&(e.textPosition=[0,0],ES(t,{x:e.x||0,y:e.y||0,width:0,height:0},t.getBoundingRect()))},Cf.prototype={diff:function(t,e,n){function i(){for(var n=-1*s;s>=n;n+=2){var i,l=u[n-1],c=u[n+1],h=(c?c.newPos:0)-n;l&&(u[n-1]=void 0);var f=l&&l.newPos+1<o,d=c&&h>=0&&a>h;if(f||d){if(!f||d&&l.newPos<c.newPos?(i=Pf(c),r.pushComponent(i.components,void 0,!0)):(i=l,i.newPos++,r.pushComponent(i.components,!0,void 0)),h=r.extractCommon(i,e,t,n),i.newPos+1>=o&&h+1>=a)return Df(r,i.components,e,t);u[n]=i}else u[n]=void 0}s++}n||(n=function(t,e){return t===e}),this.equals=n;var r=this;t=t.slice(),e=e.slice();var o=e.length,a=t.length,s=1,l=o+a,u=[{newPos:-1,components:[]}],c=this.extractCommon(u[0],e,t,0);if(u[0].newPos+1>=o&&c+1>=a){for(var h=[],f=0;f<e.length;f++)h.push(f);return[{indices:h,count:e.length}]}for(;l>=s;){var d=i();if(d)return d}},pushComponent:function(t,e,n){var i=t[t.length-1];i&&i.added===e&&i.removed===n?t[t.length-1]={count:i.count+1,added:e,removed:n}:t.push({count:1,added:e,removed:n})},extractCommon:function(t,e,n,i){for(var r=e.length,o=n.length,a=t.newPos,s=a-i,l=0;r>a+1&&o>s+1&&this.equals(e[a+1],n[s+1]);)a++,s++,l++;return l&&t.components.push({count:l}),t.newPos=a,s},tokenize:function(t){return t.slice()},join:function(t){return t.slice()}};var NS=new Cf,RS=function(t,e,n){return NS.diff(t,e,n)},BS="0",zS="1";Of.prototype.createElement=yf,Of.prototype.getDefs=function(t){var e=this._svgRoot,n=this._svgRoot.getElementsByTagName("defs");return 0===n.length?t?(n=e.insertBefore(this.createElement("defs"),e.firstChild),n.contains||(n.contains=function(t){var e=n.children;if(!e)return!1;for(var i=e.length-1;i>=0;--i)if(e[i]===t)return!0;return!1}),n):null:n[0]},Of.prototype.update=function(t,e){if(t){var n=this.getDefs(!1);if(t[this._domName]&&n.contains(t[this._domName]))"function"==typeof e&&e(t);else{var i=this.add(t);i&&(t[this._domName]=i)}}},Of.prototype.addDom=function(t){var e=this.getDefs(!0);e.appendChild(t)},Of.prototype.removeDom=function(t){var e=this.getDefs(!1);e&&t[this._domName]&&(e.removeChild(t[this._domName]),t[this._domName]=null)},Of.prototype.getDoms=function(){var t=this.getDefs(!1);if(!t)return[];var e=[];return g(this._tagNames,function(n){var i=t.getElementsByTagName(n);e=e.concat([].slice.call(i))}),e},Of.prototype.markAllUnused=function(){var t=this.getDoms(),e=this;g(t,function(t){t[e._markLabel]=BS})},Of.prototype.markUsed=function(t){t&&(t[this._markLabel]=zS)},Of.prototype.removeUnused=function(){var t=this.getDefs(!1);if(t){var e=this.getDoms(),n=this;g(e,function(e){e[n._markLabel]!==zS&&t.removeChild(e)})}},Of.prototype.getSvgProxy=function(t){return t instanceof $i?DS:t instanceof bn?PS:t instanceof mv?OS:DS},Of.prototype.getTextSvgElement=function(t){return t.__textSvgEl},Of.prototype.getSvgElement=function(t){return t.__svgEl},f(Lf,Of),Lf.prototype.addWithoutUpdate=function(t,e){if(e&&e.style){var n=this;g(["fill","stroke"],function(i){if(e.style[i]&&("linear"===e.style[i].type||"radial"===e.style[i].type)){var r,o=e.style[i],a=n.getDefs(!0);o._dom?(r=o._dom,a.contains(o._dom)||n.addDom(r)):r=n.add(o),n.markUsed(e);var s=r.getAttribute("id");t.setAttribute(i,"url(#"+s+")")}})}},Lf.prototype.add=function(t){var e;if("linear"===t.type)e=this.createElement("linearGradient");else{if("radial"!==t.type)return Qd("Illegal gradient type."),null;e=this.createElement("radialGradient")}return t.id=t.id||this.nextId++,e.setAttribute("id","zr"+this._zrId+"-gradient-"+t.id),this.updateDom(t,e),this.addDom(e),e},Lf.prototype.update=function(t){var e=this;Of.prototype.update.call(this,t,function(){var n=t.type,i=t._dom.tagName;"linear"===n&&"linearGradient"===i||"radial"===n&&"radialGradient"===i?e.updateDom(t,t._dom):(e.removeDom(t),e.add(t))})},Lf.prototype.updateDom=function(t,e){if("linear"===t.type)e.setAttribute("x1",t.x),e.setAttribute("y1",t.y),e.setAttribute("x2",t.x2),e.setAttribute("y2",t.y2);else{if("radial"!==t.type)return void Qd("Illegal gradient type.");e.setAttribute("cx",t.x),e.setAttribute("cy",t.y),e.setAttribute("r",t.r)}t.global?e.setAttribute("gradientUnits","userSpaceOnUse"):e.setAttribute("gradientUnits","objectBoundingBox"),e.innerHTML="";for(var n=t.colorStops,i=0,r=n.length;r>i;++i){var o=this.createElement("stop");o.setAttribute("offset",100*n[i].offset+"%");var a=n[i].color;if(a.indexOf(!1)){var s=Xt(a)[3],l=Kt(a);o.setAttribute("stop-color","#"+l),o.setAttribute("stop-opacity",s)}else o.setAttribute("stop-color",n[i].color);e.appendChild(o)}t._dom=e},Lf.prototype.markUsed=function(t){if(t.style){var e=t.style.fill;e&&e._dom&&Of.prototype.markUsed.call(this,e._dom),e=t.style.stroke,e&&e._dom&&Of.prototype.markUsed.call(this,e._dom)}},f(Ef,Of),Ef.prototype.update=function(t){var e=this.getSvgElement(t);e&&this.updateDom(e,t.__clipPaths,!1);var n=this.getTextSvgElement(t);n&&this.updateDom(n,t.__clipPaths,!0),this.markUsed(t)},Ef.prototype.updateDom=function(t,e,n){if(e&&e.length>0){var i,r,o=this.getDefs(!0),a=e[0],s=n?"_textDom":"_dom";a[s]?(r=a[s].getAttribute("id"),i=a[s],o.contains(i)||o.appendChild(i)):(r="zr"+this._zrId+"-clip-"+this.nextId,++this.nextId,i=this.createElement("clipPath"),i.setAttribute("id",r),o.appendChild(i),a[s]=i);var l=this.getSvgProxy(a);if(a.transform&&a.parent.invTransform&&!n){var u=Array.prototype.slice.call(a.transform);Ct(a.transform,a.parent.invTransform,a.transform),l.brush(a),a.transform=u}else l.brush(a);var c=this.getSvgElement(a);i.innerHTML="",i.appendChild(c.cloneNode()),t.setAttribute("clip-path","url(#"+r+")"),e.length>1&&this.updateDom(i,e.slice(1),n)}else t&&t.setAttribute("clip-path","none")},Ef.prototype.markUsed=function(t){var e=this;t.__clipPaths&&t.__clipPaths.length>0&&g(t.__clipPaths,function(t){t._dom&&Of.prototype.markUsed.call(e,t._dom),t._textDom&&Of.prototype.markUsed.call(e,t._textDom)})},f(Nf,Of),Nf.prototype.addWithoutUpdate=function(t,e){if(e&&Rf(e.style)){var n,i=e.style;if(i._shadowDom){n=i._shadowDom;var r=this.getDefs(!0);r.contains(i._shadowDom)||this.addDom(n)}else n=this.add(e);this.markUsed(e);var o=n.getAttribute("id");t.style.filter="url(#"+o+")"}},Nf.prototype.add=function(t){var e=this.createElement("filter"),n=t.style;return n._shadowDomId=n._shadowDomId||this.nextId++,e.setAttribute("id","zr"+this._zrId+"-shadow-"+n._shadowDomId),this.updateDom(t,e),this.addDom(e),e},Nf.prototype.update=function(t,e){var n=e.style;if(Rf(n)){var i=this;Of.prototype.update.call(this,e,function(t){i.updateDom(e,t._shadowDom)})}else this.remove(t,n)},Nf.prototype.remove=function(t,e){null!=e._shadowDomId&&(this.removeDom(e),t.style.filter="")},Nf.prototype.updateDom=function(t,e){var n=e.getElementsByTagName("feDropShadow");n=0===n.length?this.createElement("feDropShadow"):n[0];var i,r,o,a,s=t.style,l=t.scale&&t.scale[0]||1,u=t.scale&&t.scale[1]||1;if(s.shadowBlur||s.shadowOffsetX||s.shadowOffsetY)i=s.shadowOffsetX||0,r=s.shadowOffsetY||0,o=s.shadowBlur,a=s.shadowColor;else{if(!s.textShadowBlur)return void this.removeDom(e,s);i=s.textShadowOffsetX||0,r=s.textShadowOffsetY||0,o=s.textShadowBlur,a=s.textShadowColor}n.setAttribute("dx",i/l),n.setAttribute("dy",r/u),n.setAttribute("flood-color",a);var c=o/2/l,h=o/2/u,f=c+" "+h;n.setAttribute("stdDeviation",f),e.setAttribute("x","-100%"),e.setAttribute("y","-100%"),e.setAttribute("width",Math.ceil(o/2*200)+"%"),e.setAttribute("height",Math.ceil(o/2*200)+"%"),e.appendChild(n),s._shadowDom=e},Nf.prototype.markUsed=function(t){var e=t.style;e&&e._shadowDom&&Of.prototype.markUsed.call(this,e._shadowDom)};var FS=function(t,e,i,r){this.root=t,this.storage=e,this._opts=i=l({},i||{});var o=yf("svg");o.setAttribute("xmlns","http://www.w3.org/2000/svg"),o.setAttribute("version","1.1"),o.setAttribute("baseProfile","full"),o.style.cssText="user-select:none;position:absolute;left:0;top:0;",this.gradientManager=new Lf(r,o),this.clipPathManager=new Ef(r,o),this.shadowManager=new Nf(r,o);var a=n.createElement("div");a.style.cssText="overflow:hidden;position:relative",this._svgRoot=o,this._viewport=a,t.appendChild(a),a.appendChild(o),this.resize(i.width,i.height),this._visibleList=[]};FS.prototype={constructor:FS,getType:function(){return"svg"},getViewportRoot:function(){return this._viewport},getViewportRootOffset:function(){var t=this.getViewportRoot();return t?{offsetLeft:t.offsetLeft||0,offsetTop:t.offsetTop||0}:void 0},refresh:function(){var t=this.storage.getDisplayList(!0);this._paintList(t)},setBackgroundColor:function(t){this._viewport.style.background=t},_paintList:function(t){this.gradientManager.markAllUnused(),this.clipPathManager.markAllUnused(),this.shadowManager.markAllUnused();var e,n=this._svgRoot,i=this._visibleList,r=t.length,o=[];for(e=0;r>e;e++){var a=t[e],s=zf(a),l=Gf(a)||Hf(a);a.invisible||(a.__dirty&&(s&&s.brush(a),this.clipPathManager.update(a),a.style&&(this.gradientManager.update(a.style.fill),this.gradientManager.update(a.style.stroke),this.shadowManager.update(l,a)),a.__dirty=!1),o.push(a))}var u,c=RS(i,o);for(e=0;e<c.length;e++){var h=c[e];if(h.removed)for(var f=0;f<h.count;f++){a=i[h.indices[f]],l=Gf(a);var d=Hf(a);jf(n,l),jf(n,d)}}for(e=0;e<c.length;e++){h=c[e];if(h.added)for(f=0;f<h.count;f++){a=o[h.indices[f]],l=Gf(a),d=Hf(a);u?$f(n,l,u):Vf(n,l),l?$f(n,d,l):u?$f(n,d,u):Vf(n,d),$f(n,d,l),u=d||l||u,this.gradientManager.addWithoutUpdate(l,a),this.shadowManager.addWithoutUpdate(u,a),this.clipPathManager.markUsed(a)}else if(!h.removed)for(f=0;f<h.count;f++){a=o[h.indices[f]];u=l=Hf(a)||Gf(a)||u,this.gradientManager.markUsed(a),this.gradientManager.addWithoutUpdate(l,a),this.shadowManager.markUsed(a),this.shadowManager.addWithoutUpdate(l,a),this.clipPathManager.markUsed(a)}}this.gradientManager.removeUnused(),this.clipPathManager.removeUnused(),this.shadowManager.removeUnused(),this._visibleList=o},_getDefs:function(t){var e=this._svgRoot,n=this._svgRoot.getElementsByTagName("defs");if(0===n.length){if(t){n=e.insertBefore(yf("defs"),e.firstChild);return n.contains||(n.contains=function(t){var e=n.children;if(!e)return!1;for(var i=e.length-1;i>=0;--i)if(e[i]===t)return!0;return!1}),n}return null}return n[0]},resize:function(t,e){var n=this._viewport;n.style.display="none";var i=this._opts;if(null!=t&&(i.width=t),null!=e&&(i.height=e),t=this._getSize(0),e=this._getSize(1),n.style.display="",this._width!==t||this._height!==e){this._width=t,this._height=e;var r=n.style;r.width=t+"px",r.height=e+"px";var o=this._svgRoot;o.setAttribute("width",t),o.setAttribute("height",e)}},getWidth:function(){return this._width},getHeight:function(){return this._height},_getSize:function(t){var e=this._opts,i=["width","height"][t],r=["clientWidth","clientHeight"][t],o=["paddingLeft","paddingTop"][t],a=["paddingRight","paddingBottom"][t];if(null!=e[i]&&"auto"!==e[i])return parseFloat(e[i]);var s=this.root,l=n.defaultView.getComputedStyle(s);return(s[r]||Bf(l[i])||Bf(s.style[i]))-(Bf(l[o])||0)-(Bf(l[a])||0)|0},dispose:function(){this.root.innerHTML="",this._svgRoot=this._viewport=this.storage=null},clear:function(){this._viewport&&this.root.removeChild(this._viewport)},pathToDataUrl:function(){this.refresh();var t=this._svgRoot.outerHTML;return"data:image/svg+xml;charset=UTF-8,"+t}},g(["getLayer","insertLayer","eachLayer","eachBuiltinLayer","eachOtherLayer","getLayers","modLayer","delLayer","clearLayer","toDataURL","pathToImage"],function(t){FS.prototype[t]=Wf(t)}),Bn("svg",FS),t.version=Zy,t.dependencies=Ky,t.PRIORITY=a_,t.init=Hs,t.connect=Gs,t.disConnect=Ws,t.disconnect=A_,t.dispose=Us,t.getInstanceByDom=Xs,t.getInstanceById=Ys,t.registerTheme=qs,t.registerPreprocessor=Zs,t.registerProcessor=Ks,t.registerPostUpdate=Js,t.registerAction=Qs,t.registerCoordinateSystem=tl,t.getCoordinateSystemDimensions=el,t.registerLayout=nl,t.registerVisual=il,t.registerLoading=ol,t.extendComponentModel=al,t.extendComponentView=sl,t.extendSeriesModel=ll,t.extendChartView=ul,t.setCanvasCreator=cl,t.registerMap=hl,t.getMap=fl,t.dataTool=T_,t.zrender=tg,t.number=om,t.format=fm,t.throttle=Xa,t.helper=Cx,t.matrix=Td,t.vector=gd,t.color=Ud,t.parseGeoJSON=Px,t.parseGeoJson=Nx,t.util=Rx,t.graphic=Bx,t.List=F_,t.Model=Gr,t.Axis=Ex,t.env=qf})},"3c47":function(t,e,n){"use strict";(function(t){n("894e");i(n("66fd"));var e=i(n("d50e"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"44f3":function(t,e,n){"use strict";(function(t){n("894e");i(n("66fd"));var e=i(n("a42d"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"4e26":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("a34a")),r=o(n("4f2f"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,i,r,o,a){try{var s=t[o](a),l=s.value}catch(u){return void n(u)}s.done?e(l):Promise.resolve(l).then(i,r)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(i,r){var o=t.apply(e,n);function s(t){a(o,i,r,s,l,"next",t)}function l(t){a(o,i,r,s,l,"throw",t)}s(void 0)})}}var l={findUserByToken:function(){var t=s(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.get("/myuser/findUserByToken",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),findDepartmentByOrgId:function(){var t=s(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.get("/myuser/findDepartmentByOrgId",{orgId:e.orgId});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),alterPassword:function(){var t=s(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.post("/myuser/alterPassword",{formerPassword:e.formerPassword,password:e.password,userName:e.userName});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()};e.default=l},"4f2f":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return l(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done);i=!0)if(n.push(a.value),e&&n.length===e)break}catch(l){r=!0,o=l}finally{try{i||null==s["return"]||s["return"]()}finally{if(r)throw o}}return n}function l(t){if(Array.isArray(t))return t}function u(t,e,n,i,r,o,a){try{var s=t[o](a),l=s.value}catch(u){return void n(u)}s.done?e(l):Promise.resolve(l).then(i,r)}function c(t){return function(){var e=this,n=arguments;return new Promise(function(i,r){var o=t.apply(e,n);function a(t){u(o,i,r,a,s,"next",t)}function s(t){u(o,i,r,a,s,"throw",t)}a(void 0)})}}var h="http://39.97.111.250:8181",f=!1,d={baseUrl:h,getHeader:function(){var e=t.getStorageSync("userInfo");return{userToken:e.token}},post:function(){var e=c(i.default.mark(function e(n,r){var a,s,l;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.request({url:"".concat(h).concat(n),method:"POST",header:this.getHeader(),data:r});case 2:return a=e.sent,s=o(a,2),s[0],l=s[1],this.returnLogin(l),e.abrupt("return",l.data);case 8:case"end":return e.stop()}},e,this)}));function n(t,n){return e.apply(this,arguments)}return n}(),get:function(){var e=c(i.default.mark(function e(n,r){var a,s,l;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.request({url:"".concat(h).concat(n),method:"GET",header:this.getHeader(),data:r});case 2:return a=e.sent,s=o(a,2),s[0],l=s[1],this.returnLogin(l),e.abrupt("return",l.data);case 8:case"end":return e.stop()}},e,this)}));function n(t,n){return e.apply(this,arguments)}return n}(),returnLogin:function(e){var n=e.data.code;300!==n&&200!==n||f||(t.showModal({content:e.data.msg,showCancel:!1,success:function(){f=!1,t.setStorageSync("userInfo",{password:"",userName:"",keep:!1}),t.redirectTo({url:"/pages/login/index"})}}),f=!0)}};e.default=d}).call(this,n("6e42")["default"])},"514b":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("a34a")),r=o(n("4f2f"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e){return u(t)||l(t,e)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function l(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done);i=!0)if(n.push(a.value),e&&n.length===e)break}catch(l){r=!0,o=l}finally{try{i||null==s["return"]||s["return"]()}finally{if(r)throw o}}return n}function u(t){if(Array.isArray(t))return t}function c(t,e,n,i,r,o,a){try{var s=t[o](a),l=s.value}catch(u){return void n(u)}s.done?e(l):Promise.resolve(l).then(i,r)}function h(t){return function(){var e=this,n=arguments;return new Promise(function(i,r){var o=t.apply(e,n);function a(t){c(o,i,r,a,s,"next",t)}function s(t){c(o,i,r,a,s,"throw",t)}a(void 0)})}}var f={ftpfileUpload:function(){var e=h(i.default.mark(function e(n){var o,s,l;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.uploadFile({url:"".concat(r.default.baseUrl,"/schedule/ftpfileUpload"),filePath:n.imageSrc,header:r.default.getHeader(),fileType:"image",name:"file"});case 2:return o=e.sent,s=a(o,2),s[0],l=s[1],e.abrupt("return",l);case 7:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}(),addSchedule:function(){var t=h(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.post("/schedule/addSchedule",{latitude:e.latitude,longitude:e.longitude,scheduleDate:e.scheduleDate,scheduleExplain:e.scheduleExplain,scheduleId:"null",scheduleStatic:e.scheduleStatic,url:e.url,userId:e.userId});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()};e.default=f}).call(this,n("6e42")["default"])},"554b":function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){function t(e,n){i(this,t),this.ctx=e,this.canvasId=n,this.chart=null,t.initStyle(e),this.initEvent()}return o(t,[{key:"getContext",value:function(t){return"2d"===t?this.ctx:null}},{key:"setChart",value:function(t){this.chart=t}},{key:"attachEvent",value:function(){}},{key:"detachEvent",value:function(){}},{key:"initEvent",value:function(){var t=this;this.event={};var e=[{wxName:"touchStart",ecName:"mousedown"},{wxName:"touchMove",ecName:"mousemove"},{wxName:"touchEnd",ecName:"mouseup"},{wxName:"touchEnd",ecName:"click"}];e.forEach(function(e){t.event[e.wxName]=function(n){var i=n.mp.touches[0];t.chart._zr.handler.dispatch(e.ecName,{zrX:"tap"===e.wxName?i.clientX:i.x,zrY:"tap"===e.wxName?i.clientY:i.y})}})}}],[{key:"initStyle",value:function(t){var e=arguments,n=["fillStyle","strokeStyle","globalAlpha","textAlign","textBaseAlign","shadow","lineWidth","lineCap","lineJoin","lineDash","miterLimit","fontSize"];n.forEach(function(e){Object.defineProperty(t,e,{set:function(n){("fillStyle"!==e&&"strokeStyle"!==e||"none"!==n&&null!==n)&&t["set".concat(e.charAt(0).toUpperCase()).concat(e.slice(1))](n)}})}),t.createRadialGradient=function(){return t.createCircularGradient(e)}}}]),t}();e.default=a},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function i(t){return void 0===t||null===t}function r(t){return void 0!==t&&null!==t}function o(t){return!0===t}function a(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function l(t){return null!==t&&"object"===typeof t}var u=Object.prototype.toString;function c(t){return"[object Object]"===u.call(t)}function h(t){return"[object RegExp]"===u.call(t)}function f(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function d(t){return r(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function p(t){return null==t?"":Array.isArray(t)||c(t)&&t.toString===u?JSON.stringify(t,null,2):String(t)}function g(t){var e=parseFloat(t);return isNaN(e)?t:e}function v(t,e){for(var n=Object.create(null),i=t.split(","),r=0;r<i.length;r++)n[i[r]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}v("slot,component",!0);var m=v("key,ref,slot,slot-scope,is");function y(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var _=Object.prototype.hasOwnProperty;function x(t,e){return _.call(t,e)}function w(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var b=/-(\w)/g,S=w(function(t){return t.replace(b,function(t,e){return e?e.toUpperCase():""})}),M=w(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),I=/\B([A-Z])/g,A=w(function(t){return t.replace(I,"-$1").toLowerCase()});function T(t,e){function n(n){var i=arguments.length;return i?i>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function k(t,e){return t.bind(e)}var C=Function.prototype.bind?k:T;function D(t,e){e=e||0;var n=t.length-e,i=new Array(n);while(n--)i[n]=t[n+e];return i}function P(t,e){for(var n in e)t[n]=e[n];return t}function O(t){for(var e={},n=0;n<t.length;n++)t[n]&&P(e,t[n]);return e}function L(t,e,n){}var E=function(t,e,n){return!1},N=function(t){return t};function R(t,e){if(t===e)return!0;var n=l(t),i=l(e);if(!n||!i)return!n&&!i&&String(t)===String(e);try{var r=Array.isArray(t),o=Array.isArray(e);if(r&&o)return t.length===e.length&&t.every(function(t,n){return R(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(r||o)return!1;var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every(function(n){return R(t[n],e[n])})}catch(u){return!1}}function B(t,e){for(var n=0;n<t.length;n++)if(R(t[n],e))return n;return-1}function z(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var F=["component","directive","filter"],$=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],V={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:E,isReservedAttr:E,isUnknownElement:E,getTagNamespace:L,parsePlatformTagName:N,mustUseProp:E,async:!0,_lifecycleHooks:$},j=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function H(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function G(t,e,n,i){Object.defineProperty(t,e,{value:n,enumerable:!!i,writable:!0,configurable:!0})}var W=new RegExp("[^"+j.source+".$_\\d]");function U(t){if(!W.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var X,Y="__proto__"in{},q="undefined"!==typeof window,Z="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,K=Z&&WXEnvironment.platform.toLowerCase(),J=q&&window.navigator.userAgent.toLowerCase(),Q=J&&/msie|trident/.test(J),tt=(J&&J.indexOf("msie 9.0"),J&&J.indexOf("edge/")>0),et=(J&&J.indexOf("android"),J&&/iphone|ipad|ipod|ios/.test(J)||"ios"===K),nt=(J&&/chrome\/\d+/.test(J),J&&/phantomjs/.test(J),J&&J.match(/firefox\/(\d+)/),{}.watch);if(q)try{var it={};Object.defineProperty(it,"passive",{get:function(){}}),window.addEventListener("test-passive",null,it)}catch(nr){}var rt=function(){return void 0===X&&(X=!q&&!Z&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),X},ot=q&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,lt="undefined"!==typeof Symbol&&at(Symbol)&&"undefined"!==typeof Reflect&&at(Reflect.ownKeys);st="undefined"!==typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ut=L,ct=0,ht=function(){this.id=ct++,this.subs=[]};ht.prototype.addSub=function(t){this.subs.push(t)},ht.prototype.removeSub=function(t){y(this.subs,t)},ht.prototype.depend=function(){ht.target&&ht.target.addDep(this)},ht.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},ht.target=null;var ft=[];function dt(t){ft.push(t),ht.target=t}function pt(){ft.pop(),ht.target=ft[ft.length-1]}var gt=function(t,e,n,i,r,o,a,s){this.tag=t,this.data=e,this.children=n,this.text=i,this.elm=r,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},vt={child:{configurable:!0}};vt.child.get=function(){return this.componentInstance},Object.defineProperties(gt.prototype,vt);var mt=function(t){void 0===t&&(t="");var e=new gt;return e.text=t,e.isComment=!0,e};function yt(t){return new gt(void 0,void 0,void 0,String(t))}function _t(t){var e=new gt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var xt=Array.prototype,wt=Object.create(xt),bt=["push","pop","shift","unshift","splice","sort","reverse"];bt.forEach(function(t){var e=xt[t];G(wt,t,function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];var r,o=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":r=n;break;case"splice":r=n.slice(2);break}return r&&a.observeArray(r),a.dep.notify(),o})});var St=Object.getOwnPropertyNames(wt),Mt=!0;function It(t){Mt=t}var At=function(t){this.value=t,this.dep=new ht,this.vmCount=0,G(t,"__ob__",this),Array.isArray(t)?(Y?Tt(t,wt):kt(t,wt,St),this.observeArray(t)):this.walk(t)};function Tt(t,e){t.__proto__=e}function kt(t,e,n){for(var i=0,r=n.length;i<r;i++){var o=n[i];G(t,o,e[o])}}function Ct(t,e){var n;if(l(t)&&!(t instanceof gt))return x(t,"__ob__")&&t.__ob__ instanceof At?n=t.__ob__:Mt&&!rt()&&(Array.isArray(t)||c(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new At(t)),e&&n&&n.vmCount++,n}function Dt(t,e,n,i,r){var o=new ht,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,l=a&&a.set;s&&!l||2!==arguments.length||(n=t[e]);var u=!r&&Ct(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ht.target&&(o.depend(),u&&(u.dep.depend(),Array.isArray(e)&&Lt(e))),e},set:function(e){var i=s?s.call(t):n;e===i||e!==e&&i!==i||s&&!l||(l?l.call(t,e):n=e,u=!r&&Ct(e),o.notify())}})}}function Pt(t,e,n){if(Array.isArray(t)&&f(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var i=t.__ob__;return t._isVue||i&&i.vmCount?n:i?(Dt(i.value,e,n),i.dep.notify(),n):(t[e]=n,n)}function Ot(t,e){if(Array.isArray(t)&&f(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||x(t,e)&&(delete t[e],n&&n.dep.notify())}}function Lt(t){for(var e=void 0,n=0,i=t.length;n<i;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Lt(e)}At.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Dt(t,e[n])},At.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Ct(t[e])};var Et=V.optionMergeStrategies;function Nt(t,e){if(!e)return t;for(var n,i,r,o=lt?Reflect.ownKeys(e):Object.keys(e),a=0;a<o.length;a++)n=o[a],"__ob__"!==n&&(i=t[n],r=e[n],x(t,n)?i!==r&&c(i)&&c(r)&&Nt(i,r):Pt(t,n,r));return t}function Rt(t,e,n){return n?function(){var i="function"===typeof e?e.call(n,n):e,r="function"===typeof t?t.call(n,n):t;return i?Nt(i,r):r}:e?t?function(){return Nt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Bt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?zt(n):n}function zt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Ft(t,e,n,i){var r=Object.create(t||null);return e?P(r,e):r}Et.data=function(t,e,n){return n?Rt(t,e,n):e&&"function"!==typeof e?t:Rt(t,e)},$.forEach(function(t){Et[t]=Bt}),F.forEach(function(t){Et[t+"s"]=Ft}),Et.watch=function(t,e,n,i){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var r={};for(var o in P(r,t),e){var a=r[o],s=e[o];a&&!Array.isArray(a)&&(a=[a]),r[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return r},Et.props=Et.methods=Et.inject=Et.computed=function(t,e,n,i){if(!t)return e;var r=Object.create(null);return P(r,t),e&&P(r,e),r},Et.provide=Rt;var $t=function(t,e){return void 0===e?t:e};function Vt(t,e){var n=t.props;if(n){var i,r,o,a={};if(Array.isArray(n)){i=n.length;while(i--)r=n[i],"string"===typeof r&&(o=S(r),a[o]={type:null})}else if(c(n))for(var s in n)r=n[s],o=S(s),a[o]=c(r)?r:{type:r};else 0;t.props=a}}function jt(t,e){var n=t.inject;if(n){var i=t.inject={};if(Array.isArray(n))for(var r=0;r<n.length;r++)i[n[r]]={from:n[r]};else if(c(n))for(var o in n){var a=n[o];i[o]=c(a)?P({from:o},a):{from:a}}else 0}}function Ht(t){var e=t.directives;if(e)for(var n in e){var i=e[n];"function"===typeof i&&(e[n]={bind:i,update:i})}}function Gt(t,e,n){if("function"===typeof e&&(e=e.options),Vt(e,n),jt(e,n),Ht(e),!e._base&&(e.extends&&(t=Gt(t,e.extends,n)),e.mixins))for(var i=0,r=e.mixins.length;i<r;i++)t=Gt(t,e.mixins[i],n);var o,a={};for(o in t)s(o);for(o in e)x(t,o)||s(o);function s(i){var r=Et[i]||$t;a[i]=r(t[i],e[i],n,i)}return a}function Wt(t,e,n,i){if("string"===typeof n){var r=t[e];if(x(r,n))return r[n];var o=S(n);if(x(r,o))return r[o];var a=M(o);if(x(r,a))return r[a];var s=r[n]||r[o]||r[a];return s}}function Ut(t,e,n,i){var r=e[t],o=!x(n,t),a=n[t],s=Zt(Boolean,r.type);if(s>-1)if(o&&!x(r,"default"))a=!1;else if(""===a||a===A(t)){var l=Zt(String,r.type);(l<0||s<l)&&(a=!0)}if(void 0===a){a=Xt(i,r,t);var u=Mt;It(!0),Ct(a),It(u)}return a}function Xt(t,e,n){if(x(e,"default")){var i=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof i&&"Function"!==Yt(e.type)?i.call(t):i}}function Yt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function qt(t,e){return Yt(t)===Yt(e)}function Zt(t,e){if(!Array.isArray(e))return qt(e,t)?0:-1;for(var n=0,i=e.length;n<i;n++)if(qt(e[n],t))return n;return-1}function Kt(t,e,n){dt();try{if(e){var i=e;while(i=i.$parent){var r=i.$options.errorCaptured;if(r)for(var o=0;o<r.length;o++)try{var a=!1===r[o].call(i,t,e,n);if(a)return}catch(nr){Qt(nr,i,"errorCaptured hook")}}}Qt(t,e,n)}finally{pt()}}function Jt(t,e,n,i,r){var o;try{o=n?t.apply(e,n):t.call(e),o&&!o._isVue&&d(o)&&!o._handled&&(o.catch(function(t){return Kt(t,i,r+" (Promise/async)")}),o._handled=!0)}catch(nr){Kt(nr,i,r)}return o}function Qt(t,e,n){if(V.errorHandler)try{return V.errorHandler.call(null,t,e,n)}catch(nr){nr!==t&&te(nr,null,"config.errorHandler")}te(t,e,n)}function te(t,e,n){if(!q&&!Z||"undefined"===typeof console)throw t;console.error(t)}var ee,ne=[],ie=!1;function re(){ie=!1;var t=ne.slice(0);ne.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&at(Promise)){var oe=Promise.resolve();ee=function(){oe.then(re),et&&setTimeout(L)}}else if(Q||"undefined"===typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ee="undefined"!==typeof setImmediate&&at(setImmediate)?function(){setImmediate(re)}:function(){setTimeout(re,0)};else{var ae=1,se=new MutationObserver(re),le=document.createTextNode(String(ae));se.observe(le,{characterData:!0}),ee=function(){ae=(ae+1)%2,le.data=String(ae)}}function ue(t,e){var n;if(ne.push(function(){if(t)try{t.call(e)}catch(nr){Kt(nr,e,"nextTick")}else n&&n(e)}),ie||(ie=!0,ee()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var ce=new st;function he(t){fe(t,ce),ce.clear()}function fe(t,e){var n,i,r=Array.isArray(t);if(!(!r&&!l(t)||Object.isFrozen(t)||t instanceof gt)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(r){n=t.length;while(n--)fe(t[n],e)}else{i=Object.keys(t),n=i.length;while(n--)fe(t[i[n]],e)}}}var de=w(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var i="!"===t.charAt(0);return t=i?t.slice(1):t,{name:t,once:n,capture:i,passive:e}});function pe(t,e){function n(){var t=arguments,i=n.fns;if(!Array.isArray(i))return Jt(i,null,arguments,e,"v-on handler");for(var r=i.slice(),o=0;o<r.length;o++)Jt(r[o],null,t,e,"v-on handler")}return n.fns=t,n}function ge(t,e,n,r,a,s){var l,u,c,h;for(l in t)u=t[l],c=e[l],h=de(l),i(u)||(i(c)?(i(u.fns)&&(u=t[l]=pe(u,s)),o(h.once)&&(u=t[l]=a(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==c&&(c.fns=u,t[l]=c));for(l in e)i(t[l])&&(h=de(l),r(h.name,e[l],h.capture))}function ve(t,e,n){var o=e.options.props;if(!i(o)){var a={},s=t.attrs,l=t.props;if(r(s)||r(l))for(var u in o){var c=A(u);me(a,l,u,c,!0)||me(a,s,u,c,!1)}return a}}function me(t,e,n,i,o){if(r(e)){if(x(e,n))return t[n]=e[n],o||delete e[n],!0;if(x(e,i))return t[n]=e[i],o||delete e[i],!0}return!1}function ye(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function _e(t){return s(t)?[yt(t)]:Array.isArray(t)?we(t):void 0}function xe(t){return r(t)&&r(t.text)&&a(t.isComment)}function we(t,e){var n,a,l,u,c=[];for(n=0;n<t.length;n++)a=t[n],i(a)||"boolean"===typeof a||(l=c.length-1,u=c[l],Array.isArray(a)?a.length>0&&(a=we(a,(e||"")+"_"+n),xe(a[0])&&xe(u)&&(c[l]=yt(u.text+a[0].text),a.shift()),c.push.apply(c,a)):s(a)?xe(u)?c[l]=yt(u.text+a):""!==a&&c.push(yt(a)):xe(a)&&xe(u)?c[l]=yt(u.text+a.text):(o(t._isVList)&&r(a.tag)&&i(a.key)&&r(e)&&(a.key="__vlist"+e+"_"+n+"__"),c.push(a)));return c}function be(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Se(t){var e=Me(t.$options.inject,t);e&&(It(!1),Object.keys(e).forEach(function(n){Dt(t,n,e[n])}),It(!0))}function Me(t,e){if(t){for(var n=Object.create(null),i=lt?Reflect.ownKeys(t):Object.keys(t),r=0;r<i.length;r++){var o=i[r];if("__ob__"!==o){var a=t[o].from,s=e;while(s){if(s._provided&&x(s._provided,a)){n[o]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[o]){var l=t[o].default;n[o]="function"===typeof l?l.call(e):l}else 0}}return n}}function Ie(t,e){if(!t||!t.length)return{};for(var n={},i=0,r=t.length;i<r;i++){var o=t[i],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==e&&o.fnContext!==e||!a||null==a.slot)(n.default||(n.default=[])).push(o);else{var s=a.slot,l=n[s]||(n[s]=[]);"template"===o.tag?l.push.apply(l,o.children||[]):l.push(o)}}for(var u in n)n[u].every(Ae)&&delete n[u];return n}function Ae(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Te(t,e,i){var r,o=Object.keys(e).length>0,a=t?!!t.$stable:!o,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&i&&i!==n&&s===i.$key&&!o&&!i.$hasNormal)return i;for(var l in r={},t)t[l]&&"$"!==l[0]&&(r[l]=ke(e,l,t[l]))}else r={};for(var u in e)u in r||(r[u]=Ce(e,u));return t&&Object.isExtensible(t)&&(t._normalized=r),G(r,"$stable",a),G(r,"$key",s),G(r,"$hasNormal",o),r}function ke(t,e,n){var i=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:_e(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:i,enumerable:!0,configurable:!0}),i}function Ce(t,e){return function(){return t[e]}}function De(t,e){var n,i,o,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),i=0,o=t.length;i<o;i++)n[i]=e(t[i],i);else if("number"===typeof t)for(n=new Array(t),i=0;i<t;i++)n[i]=e(i+1,i);else if(l(t))if(lt&&t[Symbol.iterator]){n=[];var u=t[Symbol.iterator](),c=u.next();while(!c.done)n.push(e(c.value,n.length)),c=u.next()}else for(a=Object.keys(t),n=new Array(a.length),i=0,o=a.length;i<o;i++)s=a[i],n[i]=e(t[s],s,i);return r(n)||(n=[]),n._isVList=!0,n}function Pe(t,e,n,i){var r,o=this.$scopedSlots[t];o?(n=n||{},i&&(n=P(P({},i),n)),r=o(n)||e):r=this.$slots[t]||e;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},r):r}function Oe(t){return Wt(this.$options,"filters",t,!0)||N}function Le(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Ee(t,e,n,i,r){var o=V.keyCodes[e]||n;return r&&i&&!V.keyCodes[e]?Le(r,i):o?Le(o,t):i?A(i)!==e:void 0}function Ne(t,e,n,i,r){if(n)if(l(n)){var o;Array.isArray(n)&&(n=O(n));var a=function(a){if("class"===a||"style"===a||m(a))o=t;else{var s=t.attrs&&t.attrs.type;o=i||V.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var l=S(a),u=A(a);if(!(l in o)&&!(u in o)&&(o[a]=n[a],r)){var c=t.on||(t.on={});c["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function Re(t,e){var n=this._staticTrees||(this._staticTrees=[]),i=n[t];return i&&!e?i:(i=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),ze(i,"__static__"+t,!1),i)}function Be(t,e,n){return ze(t,"__once__"+e+(n?"_"+n:""),!0),t}function ze(t,e,n){if(Array.isArray(t))for(var i=0;i<t.length;i++)t[i]&&"string"!==typeof t[i]&&Fe(t[i],e+"_"+i,n);else Fe(t,e,n)}function Fe(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function $e(t,e){if(e)if(c(e)){var n=t.on=t.on?P({},t.on):{};for(var i in e){var r=n[i],o=e[i];n[i]=r?[].concat(r,o):o}}else;return t}function Ve(t,e,n,i){e=e||{$stable:!n};for(var r=0;r<t.length;r++){var o=t[r];Array.isArray(o)?Ve(o,e,n):o&&(o.proxy&&(o.fn.proxy=!0),e[o.key]=o.fn)}return i&&(e.$key=i),e}function je(t,e){for(var n=0;n<e.length;n+=2){var i=e[n];"string"===typeof i&&i&&(t[e[n]]=e[n+1])}return t}function He(t,e){return"string"===typeof t?e+t:t}function Ge(t){t._o=Be,t._n=g,t._s=p,t._l=De,t._t=Pe,t._q=R,t._i=B,t._m=Re,t._f=Oe,t._k=Ee,t._b=Ne,t._v=yt,t._e=mt,t._u=Ve,t._g=$e,t._d=je,t._p=He}function We(t,e,i,r,a){var s,l=this,u=a.options;x(r,"_uid")?(s=Object.create(r),s._original=r):(s=r,r=r._original);var c=o(u._compiled),h=!c;this.data=t,this.props=e,this.children=i,this.parent=r,this.listeners=t.on||n,this.injections=Me(u.inject,r),this.slots=function(){return l.$slots||Te(t.scopedSlots,l.$slots=Ie(i,r)),l.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Te(t.scopedSlots,this.slots())}}),c&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Te(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,i){var o=on(s,t,e,n,i,h);return o&&!Array.isArray(o)&&(o.fnScopeId=u._scopeId,o.fnContext=r),o}:this._c=function(t,e,n,i){return on(s,t,e,n,i,h)}}function Ue(t,e,i,o,a){var s=t.options,l={},u=s.props;if(r(u))for(var c in u)l[c]=Ut(c,u,e||n);else r(i.attrs)&&Ye(l,i.attrs),r(i.props)&&Ye(l,i.props);var h=new We(i,l,a,o,t),f=s.render.call(null,h._c,h);if(f instanceof gt)return Xe(f,i,h.parent,s,h);if(Array.isArray(f)){for(var d=_e(f)||[],p=new Array(d.length),g=0;g<d.length;g++)p[g]=Xe(d[g],i,h.parent,s,h);return p}}function Xe(t,e,n,i,r){var o=_t(t);return o.fnContext=n,o.fnOptions=i,e.slot&&((o.data||(o.data={})).slot=e.slot),o}function Ye(t,e){for(var n in e)t[S(n)]=e[n]}Ge(We.prototype);var qe={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;qe.prepatch(n,n)}else{var i=t.componentInstance=Je(t,Mn);i.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,i=e.componentInstance=t.componentInstance;kn(i,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,On(n,"mounted")),t.data.keepAlive&&(e._isMounted?Gn(n):Dn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Pn(e,!0):e.$destroy())}},Ze=Object.keys(qe);function Ke(t,e,n,a,s){if(!i(t)){var u=n.$options._base;if(l(t)&&(t=u.extend(t)),"function"===typeof t){var c;if(i(t.cid)&&(c=t,t=gn(c,u),void 0===t))return pn(c,e,n,a,s);e=e||{},di(t),r(e.model)&&en(t.options,e);var h=ve(e,t,s);if(o(t.options.functional))return Ue(t,h,e,n,a);var f=e.on;if(e.on=e.nativeOn,o(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}Qe(e);var p=t.options.name||s,g=new gt("vue-component-"+t.cid+(p?"-"+p:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:f,tag:s,children:a},c);return g}}}function Je(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},i=t.data.inlineTemplate;return r(i)&&(n.render=i.render,n.staticRenderFns=i.staticRenderFns),new t.componentOptions.Ctor(n)}function Qe(t){for(var e=t.hook||(t.hook={}),n=0;n<Ze.length;n++){var i=Ze[n],r=e[i],o=qe[i];r===o||r&&r._merged||(e[i]=r?tn(o,r):o)}}function tn(t,e){var n=function(n,i){t(n,i),e(n,i)};return n._merged=!0,n}function en(t,e){var n=t.model&&t.model.prop||"value",i=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var o=e.on||(e.on={}),a=o[i],s=e.model.callback;r(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(o[i]=[s].concat(a)):o[i]=s}var nn=1,rn=2;function on(t,e,n,i,r,a){return(Array.isArray(n)||s(n))&&(r=i,i=n,n=void 0),o(a)&&(r=rn),an(t,e,n,i,r)}function an(t,e,n,i,o){if(r(n)&&r(n.__ob__))return mt();if(r(n)&&r(n.is)&&(e=n.is),!e)return mt();var a,s,l;(Array.isArray(i)&&"function"===typeof i[0]&&(n=n||{},n.scopedSlots={default:i[0]},i.length=0),o===rn?i=_e(i):o===nn&&(i=ye(i)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||V.getTagNamespace(e),a=V.isReservedTag(e)?new gt(V.parsePlatformTagName(e),n,i,void 0,void 0,t):n&&n.pre||!r(l=Wt(t.$options,"components",e))?new gt(e,n,i,void 0,void 0,t):Ke(l,n,t,i,e)):a=Ke(e,n,t,i);return Array.isArray(a)?a:r(a)?(r(s)&&sn(a,s),r(n)&&ln(n),a):mt()}function sn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),r(t.children))for(var a=0,s=t.children.length;a<s;a++){var l=t.children[a];r(l.tag)&&(i(l.ns)||o(n)&&"svg"!==l.tag)&&sn(l,e,n)}}function ln(t){l(t.style)&&he(t.style),l(t.class)&&he(t.class)}function un(t){t._vnode=null,t._staticTrees=null;var e=t.$options,i=t.$vnode=e._parentVnode,r=i&&i.context;t.$slots=Ie(e._renderChildren,r),t.$scopedSlots=n,t._c=function(e,n,i,r){return on(t,e,n,i,r,!1)},t.$createElement=function(e,n,i,r){return on(t,e,n,i,r,!0)};var o=i&&i.data;Dt(t,"$attrs",o&&o.attrs||n,null,!0),Dt(t,"$listeners",e._parentListeners||n,null,!0)}var cn,hn=null;function fn(t){Ge(t.prototype),t.prototype.$nextTick=function(t){return ue(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,i=n.render,r=n._parentVnode;r&&(e.$scopedSlots=Te(r.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=r;try{hn=e,t=i.call(e._renderProxy,e.$createElement)}catch(nr){Kt(nr,e,"render"),t=e._vnode}finally{hn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof gt||(t=mt()),t.parent=r,t}}function dn(t,e){return(t.__esModule||lt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),l(t)?e.extend(t):t}function pn(t,e,n,i,r){var o=mt();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:i,tag:r},o}function gn(t,e){if(o(t.error)&&r(t.errorComp))return t.errorComp;if(r(t.resolved))return t.resolved;var n=hn;if(n&&r(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),o(t.loading)&&r(t.loadingComp))return t.loadingComp;if(n&&!r(t.owners)){var a=t.owners=[n],s=!0,u=null,c=null;n.$on("hook:destroyed",function(){return y(a,n)});var h=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==u&&(clearTimeout(u),u=null),null!==c&&(clearTimeout(c),c=null))},f=z(function(n){t.resolved=dn(n,e),s?a.length=0:h(!0)}),p=z(function(e){r(t.errorComp)&&(t.error=!0,h(!0))}),g=t(f,p);return l(g)&&(d(g)?i(t.resolved)&&g.then(f,p):d(g.component)&&(g.component.then(f,p),r(g.error)&&(t.errorComp=dn(g.error,e)),r(g.loading)&&(t.loadingComp=dn(g.loading,e),0===g.delay?t.loading=!0:u=setTimeout(function(){u=null,i(t.resolved)&&i(t.error)&&(t.loading=!0,h(!1))},g.delay||200)),r(g.timeout)&&(c=setTimeout(function(){c=null,i(t.resolved)&&p(null)},g.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function vn(t){return t.isComment&&t.asyncFactory}function mn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(r(n)&&(r(n.componentOptions)||vn(n)))return n}}function yn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&bn(t,e)}function _n(t,e){cn.$on(t,e)}function xn(t,e){cn.$off(t,e)}function wn(t,e){var n=cn;return function i(){var r=e.apply(null,arguments);null!==r&&n.$off(t,i)}}function bn(t,e,n){cn=t,ge(e,n||{},_n,xn,wn,t),cn=void 0}function Sn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var i=this;if(Array.isArray(t))for(var r=0,o=t.length;r<o;r++)i.$on(t[r],n);else(i._events[t]||(i._events[t]=[])).push(n),e.test(t)&&(i._hasHookEvent=!0);return i},t.prototype.$once=function(t,e){var n=this;function i(){n.$off(t,i),e.apply(n,arguments)}return i.fn=e,n.$on(t,i),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var i=0,r=t.length;i<r;i++)n.$off(t[i],e);return n}var o,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var s=a.length;while(s--)if(o=a[s],o===e||o.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?D(n):n;for(var i=D(arguments,1),r='event handler for "'+t+'"',o=0,a=n.length;o<a;o++)Jt(n[o],e,i,e,r)}return e}}var Mn=null;function In(t){var e=Mn;return Mn=t,function(){Mn=e}}function An(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Tn(t){t.prototype._update=function(t,e){var n=this,i=n.$el,r=n._vnode,o=In(n);n._vnode=t,n.$el=r?n.__patch__(r,t):n.__patch__(n.$el,t,e,!1),o(),i&&(i.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){On(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||y(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),On(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function kn(t,e,i,r,o){var a=r.data.scopedSlots,s=t.$scopedSlots,l=!!(a&&!a.$stable||s!==n&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key),u=!!(o||t.$options._renderChildren||l);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=o,t.$attrs=r.data.attrs||n,t.$listeners=i||n,e&&t.$options.props){It(!1);for(var c=t._props,h=t.$options._propKeys||[],f=0;f<h.length;f++){var d=h[f],p=t.$options.props;c[d]=Ut(d,p,e,t)}It(!0),t.$options.propsData=e}i=i||n;var g=t.$options._parentListeners;t.$options._parentListeners=i,bn(t,i,g),u&&(t.$slots=Ie(o,r.context),t.$forceUpdate())}function Cn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Dn(t,e){if(e){if(t._directInactive=!1,Cn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Dn(t.$children[n]);On(t,"activated")}}function Pn(t,e){if((!e||(t._directInactive=!0,!Cn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Pn(t.$children[n]);On(t,"deactivated")}}function On(t,e){dt();var n=t.$options[e],i=e+" hook";if(n)for(var r=0,o=n.length;r<o;r++)Jt(n[r],t,null,t,i);t._hasHookEvent&&t.$emit("hook:"+e),pt()}var Ln=[],En=[],Nn={},Rn=!1,Bn=!1,zn=0;function Fn(){zn=Ln.length=En.length=0,Nn={},Rn=Bn=!1}var $n=Date.now;if(q&&!Q){var Vn=window.performance;Vn&&"function"===typeof Vn.now&&$n()>document.createEvent("Event").timeStamp&&($n=function(){return Vn.now()})}function jn(){var t,e;for($n(),Bn=!0,Ln.sort(function(t,e){return t.id-e.id}),zn=0;zn<Ln.length;zn++)t=Ln[zn],t.before&&t.before(),e=t.id,Nn[e]=null,t.run();var n=En.slice(),i=Ln.slice();Fn(),Wn(n),Hn(i),ot&&V.devtools&&ot.emit("flush")}function Hn(t){var e=t.length;while(e--){var n=t[e],i=n.vm;i._watcher===n&&i._isMounted&&!i._isDestroyed&&On(i,"updated")}}function Gn(t){t._inactive=!1,En.push(t)}function Wn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Dn(t[e],!0)}function Un(t){var e=t.id;if(null==Nn[e]){if(Nn[e]=!0,Bn){var n=Ln.length-1;while(n>zn&&Ln[n].id>t.id)n--;Ln.splice(n+1,0,t)}else Ln.push(t);Rn||(Rn=!0,ue(jn))}}var Xn=0,Yn=function(t,e,n,i,r){this.vm=t,r&&(t._watcher=this),t._watchers.push(this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Xn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=U(e),this.getter||(this.getter=L)),this.value=this.lazy?void 0:this.get()};Yn.prototype.get=function(){var t;dt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(nr){if(!this.user)throw nr;Kt(nr,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&he(t),pt(),this.cleanupDeps()}return t},Yn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Yn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Yn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Un(this)},Yn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||l(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(nr){Kt(nr,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Yn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Yn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Yn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var qn={enumerable:!0,configurable:!0,get:L,set:L};function Zn(t,e,n){qn.get=function(){return this[e][n]},qn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,qn)}function Kn(t){t._watchers=[];var e=t.$options;e.props&&Jn(t,e.props),e.methods&&ai(t,e.methods),e.data?Qn(t):Ct(t._data={},!0),e.computed&&ni(t,e.computed),e.watch&&e.watch!==nt&&si(t,e.watch)}function Jn(t,e){var n=t.$options.propsData||{},i=t._props={},r=t.$options._propKeys=[],o=!t.$parent;o||It(!1);var a=function(o){r.push(o);var a=Ut(o,e,n,t);Dt(i,o,a),o in t||Zn(t,"_props",o)};for(var s in e)a(s);It(!0)}function Qn(t){var e=t.$options.data;e=t._data="function"===typeof e?ti(e,t):e||{},c(e)||(e={});var n=Object.keys(e),i=t.$options.props,r=(t.$options.methods,n.length);while(r--){var o=n[r];0,i&&x(i,o)||H(o)||Zn(t,"_data",o)}Ct(e,!0)}function ti(t,e){dt();try{return t.call(e,e)}catch(nr){return Kt(nr,e,"data()"),{}}finally{pt()}}var ei={lazy:!0};function ni(t,e){var n=t._computedWatchers=Object.create(null),i=rt();for(var r in e){var o=e[r],a="function"===typeof o?o:o.get;0,i||(n[r]=new Yn(t,a||L,L,ei)),r in t||ii(t,r,o)}}function ii(t,e,n){var i=!rt();"function"===typeof n?(qn.get=i?ri(e):oi(n),qn.set=L):(qn.get=n.get?i&&!1!==n.cache?ri(e):oi(n.get):L,qn.set=n.set||L),Object.defineProperty(t,e,qn)}function ri(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ht.target&&e.depend(),e.value}}function oi(t){return function(){return t.call(this,this)}}function ai(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?L:C(e[n],t)}function si(t,e){for(var n in e){var i=e[n];if(Array.isArray(i))for(var r=0;r<i.length;r++)li(t,n,i[r]);else li(t,n,i)}}function li(t,e,n,i){return c(n)&&(i=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,i)}function ui(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Pt,t.prototype.$delete=Ot,t.prototype.$watch=function(t,e,n){var i=this;if(c(e))return li(i,t,e,n);n=n||{},n.user=!0;var r=new Yn(i,t,e,n);if(n.immediate)try{e.call(i,r.value)}catch(o){Kt(o,i,'callback for immediate watcher "'+r.expression+'"')}return function(){r.teardown()}}}var ci=0;function hi(t){t.prototype._init=function(t){var e=this;e._uid=ci++,e._isVue=!0,t&&t._isComponent?fi(e,t):e.$options=Gt(di(e.constructor),t||{},e),e._renderProxy=e,e._self=e,An(e),yn(e),un(e),On(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&Se(e),Kn(e),"mp-toutiao"!==e.mpHost&&be(e),"mp-toutiao"!==e.mpHost&&On(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function fi(t,e){var n=t.$options=Object.create(t.constructor.options),i=e._parentVnode;n.parent=e.parent,n._parentVnode=i;var r=i.componentOptions;n.propsData=r.propsData,n._parentListeners=r.listeners,n._renderChildren=r.children,n._componentTag=r.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function di(t){var e=t.options;if(t.super){var n=di(t.super),i=t.superOptions;if(n!==i){t.superOptions=n;var r=pi(t);r&&P(t.extendOptions,r),e=t.options=Gt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function pi(t){var e,n=t.options,i=t.sealedOptions;for(var r in n)n[r]!==i[r]&&(e||(e={}),e[r]=n[r]);return e}function gi(t){this._init(t)}function vi(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=D(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function mi(t){t.mixin=function(t){return this.options=Gt(this.options,t),this}}function yi(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,i=n.cid,r=t._Ctor||(t._Ctor={});if(r[i])return r[i];var o=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Gt(n.options,t),a["super"]=n,a.options.props&&_i(a),a.options.computed&&xi(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,F.forEach(function(t){a[t]=n[t]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=P({},a.options),r[i]=a,a}}function _i(t){var e=t.options.props;for(var n in e)Zn(t.prototype,"_props",n)}function xi(t){var e=t.options.computed;for(var n in e)ii(t.prototype,n,e[n])}function wi(t){F.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&c(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function bi(t){return t&&(t.Ctor.options.name||t.tag)}function Si(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!h(t)&&t.test(e)}function Mi(t,e){var n=t.cache,i=t.keys,r=t._vnode;for(var o in n){var a=n[o];if(a){var s=bi(a.componentOptions);s&&!e(s)&&Ii(n,o,i,r)}}}function Ii(t,e,n,i){var r=t[e];!r||i&&r.tag===i.tag||r.componentInstance.$destroy(),t[e]=null,y(n,e)}hi(gi),ui(gi),Sn(gi),Tn(gi),fn(gi);var Ai=[String,RegExp,Array],Ti={name:"keep-alive",abstract:!0,props:{include:Ai,exclude:Ai,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Ii(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){Mi(t,function(t){return Si(e,t)})}),this.$watch("exclude",function(e){Mi(t,function(t){return!Si(e,t)})})},render:function(){var t=this.$slots.default,e=mn(t),n=e&&e.componentOptions;if(n){var i=bi(n),r=this,o=r.include,a=r.exclude;if(o&&(!i||!Si(o,i))||a&&i&&Si(a,i))return e;var s=this,l=s.cache,u=s.keys,c=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;l[c]?(e.componentInstance=l[c].componentInstance,y(u,c),u.push(c)):(l[c]=e,u.push(c),this.max&&u.length>parseInt(this.max)&&Ii(l,u[0],u,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},ki={KeepAlive:Ti};function Ci(t){var e={get:function(){return V}};Object.defineProperty(t,"config",e),t.util={warn:ut,extend:P,mergeOptions:Gt,defineReactive:Dt},t.set=Pt,t.delete=Ot,t.nextTick=ue,t.observable=function(t){return Ct(t),t},t.options=Object.create(null),F.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,P(t.options.components,ki),vi(t),mi(t),yi(t),wi(t)}Ci(gi),Object.defineProperty(gi.prototype,"$isServer",{get:rt}),Object.defineProperty(gi.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(gi,"FunctionalRenderContext",{value:We}),gi.version="2.6.10";var Di="[object Array]",Pi="[object Object]";function Oi(t,e){var n={};return Li(t,e),Ei(t,e,"",n),n}function Li(t,e){if(t!==e){var n=Ri(t),i=Ri(e);if(n==Pi&&i==Pi){if(Object.keys(t).length>=Object.keys(e).length)for(var r in e){var o=t[r];void 0===o?t[r]=null:Li(o,e[r])}}else n==Di&&i==Di&&t.length>=e.length&&e.forEach(function(e,n){Li(t[n],e)})}}function Ei(t,e,n,i){if(t!==e){var r=Ri(t),o=Ri(e);if(r==Pi)if(o!=Pi||Object.keys(t).length<Object.keys(e).length)Ni(i,n,t);else{var a=function(r){var o=t[r],a=e[r],s=Ri(o),l=Ri(a);if(s!=Di&&s!=Pi)o!=e[r]&&Ni(i,(""==n?"":n+".")+r,o);else if(s==Di)l!=Di?Ni(i,(""==n?"":n+".")+r,o):o.length<a.length?Ni(i,(""==n?"":n+".")+r,o):o.forEach(function(t,e){Ei(t,a[e],(""==n?"":n+".")+r+"["+e+"]",i)});else if(s==Pi)if(l!=Pi||Object.keys(o).length<Object.keys(a).length)Ni(i,(""==n?"":n+".")+r,o);else for(var u in o)Ei(o[u],a[u],(""==n?"":n+".")+r+"."+u,i)};for(var s in t)a(s)}else r==Di?o!=Di?Ni(i,n,t):t.length<e.length?Ni(i,n,t):t.forEach(function(t,r){Ei(t,e[r],n+"["+r+"]",i)}):Ni(i,n,t)}}function Ni(t,e,n){t[e]=n}function Ri(t){return Object.prototype.toString.call(t)}function Bi(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var i=0;i<n.length;i++)n[i]()}}function zi(t){return Ln.find(function(e){return t._watcher===e})}function Fi(t,e){if(!t.__next_tick_pending&&!zi(t)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return ue(e,t)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var i=t.$scope;console.log("["+ +new Date+"]["+(i.is||i.route)+"]["+t._uid+"]:nextMPTick")}var r;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(nr){Kt(nr,t,"nextTick")}else r&&r(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){r=t})}function $i(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Vi=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var i=this.$scope,r=Object.create(null);try{r=$i(this)}catch(s){console.error(s)}r.__webviewId__=i.data.__webviewId__;var o=Object.create(null);Object.keys(r).forEach(function(t){o[t]=i.data[t]});var a=Oi(r,o);Object.keys(a).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(i.is||i.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,i.setData(a,function(){n.__next_tick_pending=!1,Bi(n)})):Bi(this)}};function ji(){}function Hi(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=ji),t.$options.render||(t.$options.render=ji),"mp-toutiao"!==t.mpHost&&On(t,"beforeMount");var i=function(){t._update(t._render(),n)};return new Yn(t,i,L,{before:function(){t._isMounted&&!t._isDestroyed&&On(t,"beforeUpdate")}},!0),n=!1,t}function Gi(t,e){return r(t)||r(e)?Wi(t,Ui(e)):""}function Wi(t,e){return t?e?t+" "+e:t:e||""}function Ui(t){return Array.isArray(t)?Xi(t):l(t)?Yi(t):"string"===typeof t?t:""}function Xi(t){for(var e,n="",i=0,o=t.length;i<o;i++)r(e=Ui(t[i]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Yi(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var qi=w(function(t){var e={},n=/;(?![^(]*\))/g,i=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(i);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Zi(t){return Array.isArray(t)?O(t):"string"===typeof t?qi(t):t}var Ki=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Ji(t,e){var n=e.split("."),i=n[0];return 0===i.indexOf("__$n")&&(i=parseInt(i.replace("__$n",""))),1===n.length?t[i]:Ji(t[i],n.slice(1).join("."))}function Qi(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:D(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Fi(this,t)},Ki.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=be,t.prototype.__init_injections=Se,t.prototype.__call_hook=function(t,e){var n=this;dt();var i,r=n.$options[t],o=t+" hook";if(r)for(var a=0,s=r.length;a<s;a++)i=Jt(r[a],n,e?[e]:null,n,o);return n._hasHookEvent&&n.$emit("hook:"+t),pt(),i},t.prototype.__set_model=function(t,e,n,i){Array.isArray(i)&&(-1!==i.indexOf("trim")&&(n=n.trim()),-1!==i.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return c(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Ji(e||this,t)},t.prototype.__get_class=function(t,e){return Gi(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Zi(t),i=e?P(e,n):n;return Object.keys(i).map(function(t){return A(t)+":"+i[t]}).join(";")},t.prototype.__map=function(t,e){var n,i,r,o,a;if(Array.isArray(t)){for(n=new Array(t.length),i=0,r=t.length;i<r;i++)n[i]=e(t[i],i);return n}if(l(t)){for(o=Object.keys(t),n=Object.create(null),i=0,r=o.length;i<r;i++)a=o[i],n[a]=e(t[a],a,i);return n}return[]}}var tr=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function er(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==tr.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,i=n.created;tr.forEach(function(t){n[t]=i}),t.prototype.__lifecycle_hooks__=tr}gi.prototype.__patch__=Vi,gi.prototype.$mount=function(t,e){return Hi(this,t,e)},er(gi),Qi(gi),e["default"]=gi}.call(this,n("c8ba"))},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=pe,e.createPage=Se,e.createComponent=Me,e.default=void 0;var i=r(n("66fd"));function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return l(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done);i=!0)if(n.push(a.value),e&&n.length===e)break}catch(l){r=!0,o=l}finally{try{i||null==s["return"]||s["return"]()}finally{if(r)throw o}}return n}function l(t){if(Array.isArray(t))return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t){return d(t)||f(t)||h()}function h(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function d(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var p=Object.prototype.toString,g=Object.prototype.hasOwnProperty;function v(t){return"function"===typeof t}function m(t){return"string"===typeof t}function y(t){return"[object Object]"===p.call(t)}function _(t,e){return g.call(t,e)}function x(){}function w(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var b=/-(\w)/g,S=w(function(t){return t.replace(b,function(t,e){return e?e.toUpperCase():""})}),M=["invoke","success","fail","complete","returnValue"],I={},A={};function T(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?k(n):n}function k(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function C(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function D(t,e){Object.keys(e).forEach(function(n){-1!==M.indexOf(n)&&v(e[n])&&(t[n]=T(t[n],e[n]))})}function P(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==M.indexOf(n)&&v(e[n])&&C(t[n],e[n])})}function O(t,e){"string"===typeof t&&y(e)?D(A[t]||(A[t]={}),e):y(t)&&D(I,t)}function L(t,e){"string"===typeof t?y(e)?P(A[t],e):delete A[t]:y(t)&&P(I,t)}function E(t){return function(e){return t(e)||e}}function N(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function R(t,e){for(var n=!1,i=0;i<t.length;i++){var r=t[i];if(n)n=Promise.then(E(r));else{var o=r(e);if(N(o)&&(n=Promise.resolve(o)),!1===o)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function B(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var i=e[n];e[n]=function(e){R(t[n],e).then(function(t){return v(i)&&i(t)||t})}}}),e}function z(t,e){var n=[];Array.isArray(I.returnValue)&&n.push.apply(n,c(I.returnValue));var i=A[t];return i&&Array.isArray(i.returnValue)&&n.push.apply(n,c(i.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function F(t){var e=Object.create(null);Object.keys(I).forEach(function(t){"returnValue"!==t&&(e[t]=I[t].slice())});var n=A[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function $(t,e,n){for(var i=arguments.length,r=new Array(i>3?i-3:0),o=3;o<i;o++)r[o-3]=arguments[o];var a=F(t);if(a&&Object.keys(a).length){if(Array.isArray(a.invoke)){var s=R(a.invoke,n);return s.then(function(t){return e.apply(void 0,[B(a,t)].concat(r))})}return e.apply(void 0,[B(a,n)].concat(r))}return e.apply(void 0,[n].concat(r))}var V={returnValue:function(t){return N(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},j=/^\$|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,H=/^create|Manager$/,G=/^on/;function W(t){return H.test(t)}function U(t){return j.test(t)}function X(t){return G.test(t)}function Y(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function q(t){return!(W(t)||U(t)||X(t))}function Z(t,e){return q(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];return v(n.success)||v(n.fail)||v(n.complete)?z(t,$.apply(void 0,[t,e,n].concat(r))):z(t,Y(new Promise(function(i,o){$.apply(void 0,[t,e,Object.assign({},n,{success:i,fail:o})].concat(r)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var K=1e-4,J=750,Q=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,i=t.windowWidth;tt=i,et=n,Q="ios"===e}function it(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/J*(e||tt);return n<0&&(n=-n),n=Math.floor(n+K),0===n?1!==et&&Q?.5:1:t<0?-n:n}var rt={promiseInterceptor:V},ot=Object.freeze({upx2px:it,interceptors:rt,addInterceptor:O,removeInterceptor:L}),at={},st=[],lt=[],ut=["success","fail","cancel","complete"];function ct(t,e,n){return function(i){return e(ft(t,i,n))}}function ht(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(y(e)){var o=!0===r?e:{};for(var a in v(n)&&(n=n(e,o)||{}),e)if(_(n,a)){var s=n[a];v(s)&&(s=s(e[a],e,o)),s?m(s)?o[s]=e[a]:y(s)&&(o[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==ut.indexOf(a)?o[a]=ct(t,e[a],i):r||(o[a]=e[a]);return o}return v(e)&&(e=ct(t,e,i)),e}function ft(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return v(at.returnValue)&&(e=at.returnValue(t,e)),ht(t,e,n,{},i)}function dt(t,e){if(_(at,t)){var n=at[t];return n?function(e,i){var r=n;v(n)&&(r=n(e)),e=ht(t,e,r.args,r.returnValue);var o=[e];"undefined"!==typeof i&&o.push(i);var a=wx[r.name||t].apply(wx,o);return U(t)?ft(t,a,r.returnValue,W(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var pt=Object.create(null),gt=["subscribePush","unsubscribePush","onPush","offPush","share"];function vt(t){return function(e){var n=e.fail,i=e.complete,r={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};v(n)&&n(r),v(i)&&i(r)}}gt.forEach(function(t){pt[t]=vt(t)});var mt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new i.default),t};var t}();function yt(t,e,n){return t[e].apply(t,n)}function _t(){return yt(mt(),"$on",Array.prototype.slice.call(arguments))}function xt(){return yt(mt(),"$off",Array.prototype.slice.call(arguments))}function wt(){return yt(mt(),"$once",Array.prototype.slice.call(arguments))}function bt(){return yt(mt(),"$emit",Array.prototype.slice.call(arguments))}var St=Object.freeze({$on:_t,$off:xt,$once:wt,$emit:bt});function Mt(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,i=plus.webview.getWebviewById(t.__uniapp_mask_id);i=i.parent()||i;var r=t.show,o=t.hide,a=t.close,s=function(){i.setStyle({mask:n})},l=function(){i.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return r.apply(t,n)},t.hide=function(){l();for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return o.apply(t,n)},t.close=function(){l(),e=[];for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return a.apply(t,i)}}}function It(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&Mt(e),e}function At(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}var Tt=Object.freeze({requireNativePlugin:At,getSubNVueById:It}),kt=Page,Ct=Component,Dt=/:/g,Pt=w(function(t){return S(t.replace(Dt,"-"))});function Ot(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];return e.apply(t,[Pt(n)].concat(r))}}}function Lt(t,e){var n=e[t];e[t]=n?function(){Ot(this);for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return n.apply(this,e)}:function(){Ot(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Lt("onLoad",t),kt(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Lt("created",t),Ct(t)};var Et=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Nt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){_(n,e)&&(t[e]=n[e])})}function Rt(t,e){if(!e)return!0;if(i.default.options&&Array.isArray(i.default.options[t]))return!0;if(e=e.default||e,v(e))return!!v(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(v(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return Rt(t,e)}):void 0}function Bt(t,e,n){e.forEach(function(e){Rt(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function zt(t,e){var n;return e=e.default||e,v(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Ft(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function $t(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function Vt(t,e){var n=t.data||{},i=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(r){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(r){}return y(n)||(n={}),Object.keys(i).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||_(n,t)||(n[t]=i[t])}),n}var jt=[String,Number,Boolean,Object,Array,null];function Ht(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function Gt(t,e){var n=t["behaviors"],i=t["extends"],r=t["mixins"],o=t["props"];o||(t["props"]=o=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(o)?(o.push("name"),o.push("value")):(o["name"]={type:String,default:""},o["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),y(i)&&i.props&&a.push(e({properties:Ut(i.props,!0)})),Array.isArray(r)&&r.forEach(function(t){y(t)&&t.props&&a.push(e({properties:Ut(t.props,!0)}))}),a}function Wt(t,e,n,i){return Array.isArray(e)&&1===e.length?e[0]:e}function Ut(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i={};return e||(i.vueId={type:String,value:""},i.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){i[t]={type:null,observer:Ht(t)}}):y(t)&&Object.keys(t).forEach(function(e){var r=t[e];if(y(r)){var o=r["default"];v(o)&&(o=o()),r.type=Wt(e,r.type,o,n),i[e]={type:-1!==jt.indexOf(r.type)?r.type:null,value:o,observer:Ht(e)}}else{var a=Wt(e,r,null,n);i[e]={type:-1!==jt.indexOf(a)?a:null,observer:Ht(e)}}}),i}function Xt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=x,t.preventDefault=x,t.target=t.target||{},_(t,"detail")||(t.detail={}),y(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Yt(t,e){var n=t;return e.forEach(function(e){var i=e[0],r=e[2];if(i||"undefined"!==typeof r){var o=e[1],a=e[3],s=i?t.__get_value(i,n):n;Number.isInteger(s)?n=r:o?Array.isArray(s)?n=s.find(function(e){return t.__get_value(o,e)===r}):y(s)?n=Object.keys(s).find(function(e){return t.__get_value(o,s[e])===r}):console.error("v-for 暂不支持循环数据：",s):n=s[r],a&&(n=t.__get_value(a,n))}}),n}function qt(t,e,n){var i={};return Array.isArray(e)&&e.length&&e.forEach(function(e,r){"string"===typeof e?e?"$event"===e?i["$"+r]=n:0===e.indexOf("$event.")?i["$"+r]=t.__get_value(e.replace("$event.",""),n):i["$"+r]=t.__get_value(e):i["$"+r]=t:i["$"+r]=Yt(t,e)}),i}function Zt(t){for(var e={},n=1;n<t.length;n++){var i=t[n];e[i[0]]=i[1]}return e}function Kt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,a=!1;if(r&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=qt(t,i,e),l=[];return n.forEach(function(t){"$event"===t?"__set_model"!==o||r?r&&!a?l.push(e.detail.__args__[0]):l.push(e):l.push(e.target.value):Array.isArray(t)&&"o"===t[0]?l.push(Zt(t)):"string"===typeof t&&_(s,t)?l.push(s[t]):l.push(t)}),l}var Jt="~",Qt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=Xt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var i=n.eventOpts||n["event-opts"];if(!i)return console.warn("事件信息不存在");var r=t.type;i.forEach(function(n){var i=n[0],o=n[1],a=i.charAt(0)===Qt;i=a?i.slice(1):i;var s=i.charAt(0)===Jt;i=s?i.slice(1):i,o&&te(r,i)&&o.forEach(function(n){var i=n[0];if(i){var r=e.$vm;r.$options.generic&&r.$parent&&r.$parent.$parent&&(r=r.$parent.$parent);var o=r[i];if(!v(o))throw new Error(" _vm.".concat(i," is not a function"));if(s){if(o.once)return;o.once=!0}o.apply(r,Kt(e.$vm,t,n[1],n[2],a,i))}})})}var ne=["onShow","onHide","onError","onPageNotFound"];function ie(t,e){var n=e.mocks,r=e.initRefs;i.default.prototype.mpHost="app-plus",i.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=u({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(r(this),Nt(this,n)))}});var o={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};return o.globalData=t.$options.globalData||{},Bt(o,ne),o}var re=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function oe(t,e){var n=t.$children,i=n.find(function(t){return t.$scope._$vueId===e});if(i)return i;for(var r=n.length-1;r>=0;r--)if(i=oe(n[r],e),i)return i}function ae(t){return Behavior(t)}function se(){return!!this.route}function le(t){this.triggerEvent("__l",t)}function ue(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var i=e.selectAllComponents(".vue-ref-in-for");return i.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function ce(t){var e,n=t.detail||t.value,i=n.vuePid,r=n.vueOptions;i&&(e=oe(this.$vm,i)),e||(e=this.$vm),r.parent=e}function he(t){return ie(t,{mocks:re,initRefs:ue})}var fe=["onUniNViewMessage"];function de(t){var e=he(t);return Bt(e,fe),e}function pe(t){return App(de(t)),t}function ge(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,r=e.initRelation,a=zt(i.default,t),s=o(a,2),l=s[0],u=s[1],c={options:{multipleSlots:!0,addGlobalClass:!0},data:Vt(u,i.default.prototype),behaviors:Gt(u,ae),properties:Ut(u.props,!1,u.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};$t(t.vueId,this),r.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new l(e),Ft(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:ce,__e:ee}};return n?c:[c,l]}function ve(t){return ge(t,{isPage:se,initRelation:le})}function me(t){var e=ve(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var ye=["onShow","onHide","onUnload"];function _e(t,e){var n=e.isPage,i=e.initRelation,r=me(t,{isPage:n,initRelation:i});return Bt(r.methods,ye,t),r.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},r}function xe(t){return _e(t,{isPage:se,initRelation:le})}ye.push.apply(ye,Et);var we=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function be(t){var e=xe(t);return Bt(e.methods,we),e}function Se(t){return Component(be(t))}function Me(t){return Component(me(t))}st.forEach(function(t){at[t]=!1}),lt.forEach(function(t){var e=at[t]&&at[t].name?at[t].name:t;wx.canIUse(e)||(at[t]=!1)});var Ie={};Object.keys(ot).forEach(function(t){Ie[t]=ot[t]}),Object.keys(St).forEach(function(t){Ie[t]=St[t]}),Object.keys(Tt).forEach(function(t){Ie[t]=Z(t,Tt[t])}),Object.keys(wx).forEach(function(t){(_(wx,t)||_(at,t))&&(Ie[t]=Z(t,dt(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=Ie,t.UniEmitter=St),wx.createApp=pe,wx.createPage=Se,wx.createComponent=Me;var Ae=Ie,Te=Ae;e.default=Te}).call(this,n("c8ba"))},"71c0":function(t,e,n){"use strict";(function(t){n("894e");i(n("66fd"));var e=i(n("2993"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},7476:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("a34a")),r=o(n("4f2f"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,i,r,o,a){try{var s=t[o](a),l=s.value}catch(u){return void n(u)}s.done?e(l):Promise.resolve(l).then(i,r)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(i,r){var o=t.apply(e,n);function s(t){a(o,i,r,s,l,"next",t)}function l(t){a(o,i,r,s,l,"throw",t)}s(void 0)})}}var l={login:function(){var t=s(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.post("/login/login",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),yangan:function(){var t=s(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.post("/cnsmogsensor/cnSmogSensorList",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()};e.default=l},"799e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("a34a")),r=o(n("4f2f"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,i,r,o,a){try{var s=t[o](a),l=s.value}catch(u){return void n(u)}s.done?e(l):Promise.resolve(l).then(i,r)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(i,r){var o=t.apply(e,n);function s(t){a(o,i,r,s,l,"next",t)}function l(t){a(o,i,r,s,l,"throw",t)}s(void 0)})}}var l={addTerminalrepair:function(){var t=s(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.get("/scancode/addTerminalrepair",{termCode:e.termCode});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),findTermTypeAll:function(){var t=s(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.get("/scancode/findTermTypeAll");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()};e.default=l},"7a64":function(t,e,n){"use strict";(function(t){n("894e");var e=o(n("66fd")),i=o(n("54e0")),r=o(n("d049"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){s(t,e,n[e])})}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.default.config.productionTip=!1,e.default.prototype.$service=r.default,i.default.mpType="app";var l=new e.default(a({},i.default));t(l).$mount()}).call(this,n("6e42")["createApp"])},"894e":function(t,e,n){},9335:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("a34a")),r=o(n("4f2f"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,i,r,o,a){try{var s=t[o](a),l=s.value}catch(u){return void n(u)}s.done?e(l):Promise.resolve(l).then(i,r)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(i,r){var o=t.apply(e,n);function s(t){a(o,i,r,s,l,"next",t)}function l(t){a(o,i,r,s,l,"throw",t)}s(void 0)})}}var l={cnSmogSensorList:function(){var t=s(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.post("/cnsmogsensor/cnSmogSensorList",{crossSectionId:e.crossSectionId,orgId:e.orgId,projectId:e.projectId,strucunitId:e.strucunitId,termComstatus:e.termComstatus});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),cnSmogSensorNumber:function(){var t=s(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.post("/cnsmogsensor/cnSmogSensorNumber",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),findCNSmogSensor:function(){var t=s(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.post("/cnsmogsensor/findCNSmogSensor",{ids:e.ids,strs:e.strs});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),findProjectSelect:function(){var t=s(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.get("/cnsmogsensor/findProjectSelect",{orgId:e.orgId});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),findStrucunitSelect:function(){var t=s(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.get("/cnsmogsensor/findStrucunitSelect",{projectId:e.projectId});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),findCrosssectionSelect:function(){var t=s(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.get("/cnsmogsensor/findCrosssectionSelect",{strucunitId:e.strucunitId});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()};e.default=l},"96cf":function(t,e){!function(e){"use strict";var n,i=Object.prototype,r=i.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag",u="object"===typeof t,c=e.regeneratorRuntime;if(c)u&&(t.exports=c);else{c=e.regeneratorRuntime=u?t.exports:{},c.wrap=x;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",g={},v={};v[a]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(O([])));y&&y!==i&&r.call(y,a)&&(v=y);var _=M.prototype=b.prototype=Object.create(v);S.prototype=_.constructor=M,M.constructor=S,M[l]=S.displayName="GeneratorFunction",c.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===S||"GeneratorFunction"===(e.displayName||e.name))},c.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,M):(t.__proto__=M,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(_),t},c.awrap=function(t){return{__await:t}},I(A.prototype),A.prototype[s]=function(){return this},c.AsyncIterator=A,c.async=function(t,e,n,i){var r=new A(x(t,e,n,i));return c.isGeneratorFunction(e)?r:r.next().then(function(t){return t.done?t.value:r.next()})},I(_),_[l]="Generator",_[a]=function(){return this},_.toString=function(){return"[object Generator]"},c.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},c.values=O,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(D),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(i,r){return s.type="throw",s.arg=t,e.next=i,r&&(e.method="next",e.arg=n),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),D(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;D(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:O(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=n),g}}}function x(t,e,n,i){var r=e&&e.prototype instanceof b?e:b,o=Object.create(r.prototype),a=new P(i||[]);return o._invoke=T(t,n,a),o}function w(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(i){return{type:"throw",arg:i}}}function b(){}function S(){}function M(){}function I(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function A(t){function e(n,i,o,a){var s=w(t[n],t,i);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"===typeof u&&r.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(u).then(function(t){l.value=t,o(l)},function(t){return e("throw",t,o,a)})}a(s.arg)}var n;function i(t,i){function r(){return new Promise(function(n,r){e(t,i,n,r)})}return n=n?n.then(r,r):r()}this._invoke=i}function T(t,e,n){var i=h;return function(r,o){if(i===d)throw new Error("Generator is already running");if(i===p){if("throw"===r)throw o;return L()}n.method=r,n.arg=o;while(1){var a=n.delegate;if(a){var s=k(a,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===h)throw i=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=d;var l=w(t,e,n);if("normal"===l.type){if(i=n.done?p:f,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(i=p,n.method="throw",n.arg=l.arg)}}}function k(t,e){var i=t.iterator[e.method];if(i===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,k(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var r=w(i,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,g;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,g):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function D(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function e(){while(++i<t.length)if(r.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a34a:function(t,e,n){t.exports=n("bbdd")},bbdd:function(t,e,n){var i=function(){return this||"object"===typeof self&&self}()||Function("return this")(),r=i.regeneratorRuntime&&Object.getOwnPropertyNames(i).indexOf("regeneratorRuntime")>=0,o=r&&i.regeneratorRuntime;if(i.regeneratorRuntime=void 0,t.exports=n("96cf"),r)i.regeneratorRuntime=o;else try{delete i.regeneratorRuntime}catch(a){i.regeneratorRuntime=void 0}},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"===typeof window&&(n=window)}t.exports=n},ca4a:function(t,e,n){"use strict";(function(t){n("894e");i(n("66fd"));var e=i(n("fe55"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},d049:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=l(n("7476")),r=l(n("4e26")),o=l(n("9335")),a=l(n("514b")),s=l(n("799e"));function l(t){return t&&t.__esModule?t:{default:t}}var u={login:i.default,myuser:r.default,cnsmogsensor:o.default,schedule:a.default,qrCode:s.default};e.default=u},e077:function(t,e,n){"use strict";(function(t){n("894e");i(n("66fd"));var e=i(n("8f22"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},fc52:function(t,e,n){"use strict";(function(t){n("894e");i(n("66fd"));var e=i(n("79af"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/mpvue-echarts/src/echarts';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/mpvue-echarts/src/echarts.js';

define('components/mpvue-echarts/src/echarts.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/mpvue-echarts/src/echarts"], {
  "07a0": function a0(t, e, n) {
    "use strict";

    var a = function a() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        r = [];

    n.d(e, "a", function () {
      return a;
    }), n.d(e, "b", function () {
      return r;
    });
  },
  "12fc": function fc(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var a = r(n("554b"));

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function c(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            a = Object.keys(n);
        "function" === typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function (t) {
          return Object.getOwnPropertyDescriptor(n, t).enumerable;
        }))), a.forEach(function (e) {
          i(t, e, n[e]);
        });
      }

      return t;
    }

    function i(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n, t;
    }

    var o = {
      props: {
        canvasId: {
          type: String,
          default: "ec-canvas"
        },
        lazyLoad: {
          type: Boolean,
          default: !1
        },
        disableTouch: {
          type: Boolean,
          default: !1
        },
        throttleTouch: {
          type: Boolean,
          default: !1
        }
      },
      onReady: function onReady() {
        this.lazyLoad || this.init();
      },
      methods: {
        setChart: function setChart(t) {
          this.chart = t;
        },
        init: function init() {
          var t = this,
              e = this.canvasId;
          this.ctx = wx.createCanvasContext(e, this), this.canvas = new a.default(this.ctx, e);
          var n = wx.createSelectorQuery().in(this);
          n.select("#".concat(e)).boundingClientRect(function (e) {
            e ? t.$emit("onInit", {
              width: e.width,
              height: e.height
            }) : setTimeout(function () {
              return t.init();
            }, 50);
          }).exec();
        },
        canvasToTempFilePath: function canvasToTempFilePath(t) {
          var e = this.canvasId;
          this.ctx.draw(!0, function () {
            wx.canvasToTempFilePath(c({
              canvasId: e
            }, t));
          });
        },
        touchStart: function touchStart(t) {
          var e = this.disableTouch,
              n = this.chart;

          if (!e && n && t.mp.touches.length) {
            var a = t.mp.touches[0];
            n._zr.handler.dispatch("mousedown", {
              zrX: a.x,
              zrY: a.y
            }), n._zr.handler.dispatch("mousemove", {
              zrX: a.x,
              zrY: a.y
            });
          }
        },
        touchMove: function touchMove(t) {
          var e = this.disableTouch,
              n = this.throttleTouch,
              a = this.chart,
              r = this.lastMoveTime;

          if (!e && a && t.mp.touches.length) {
            if (n) {
              var c = Date.now();
              if (c - r < 240) return;
              this.lastMoveTime = c;
            }

            var i = t.mp.touches[0];

            a._zr.handler.dispatch("mousemove", {
              zrX: i.x,
              zrY: i.y
            });
          }
        },
        touchEnd: function touchEnd(t) {
          var e = this.disableTouch,
              n = this.chart;

          if (!e && n) {
            var a = t.mp.changedTouches ? t.mp.changedTouches[0] : {};
            n._zr.handler.dispatch("mouseup", {
              zrX: a.x,
              zrY: a.y
            }), n._zr.handler.dispatch("click", {
              zrX: a.x,
              zrY: a.y
            });
          }
        }
      }
    };
    e.default = o;
  },
  "147e": function e(t, _e, n) {
    "use strict";

    var a = n("4ea1"),
        r = n.n(a);
    r.a;
  },
  "4ea1": function ea1(t, e, n) {},
  "60f0": function f0(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("12fc"),
        r = n.n(a);

    for (var c in a) {
      "default" !== c && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(c);
    }

    e["default"] = r.a;
  },
  "72e6": function e6(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("07a0"),
        r = n("60f0");

    for (var c in r) {
      "default" !== c && function (t) {
        n.d(e, t, function () {
          return r[t];
        });
      }(c);
    }

    n("147e");
    var i = n("2877"),
        o = Object(i["a"])(r["default"], a["a"], a["b"], !1, null, "4d0decba", null);
    e["default"] = o.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/mpvue-echarts/src/echarts-create-component', {
  'components/mpvue-echarts/src/echarts-create-component': function componentsMpvueEchartsSrcEchartsCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("72e6"));
  }
}, [['components/mpvue-echarts/src/echarts-create-component']]]);
});
require('components/mpvue-echarts/src/echarts.js');
__wxRoute = 'components/uni-badge/uni-badge';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-badge/uni-badge.js';

define('components/uni-badge/uni-badge.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-badge/uni-badge"], {
  "14b4": function b4(t, e, n) {},
  "34fc": function fc(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("3eb0"),
        a = n.n(u);

    for (var r in u) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(r);
    }

    e["default"] = a.a;
  },
  "3eb0": function eb0(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var u = {
      name: "UniBadge",
      props: {
        type: {
          type: String,
          default: "default"
        },
        inverted: {
          type: Boolean,
          default: !1
        },
        text: {
          type: [String, Number],
          default: ""
        },
        size: {
          type: String,
          default: "normal"
        }
      },
      methods: {
        onClick: function onClick() {
          this.$emit("click");
        }
      }
    };
    e.default = u;
  },
  "794b": function b(t, e, n) {
    "use strict";

    var u = function u() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        a = [];

    n.d(e, "a", function () {
      return u;
    }), n.d(e, "b", function () {
      return a;
    });
  },
  dc02: function dc02(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("794b"),
        a = n("34fc");

    for (var r in a) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(r);
    }

    n("fedf");
    var f = n("2877"),
        i = Object(f["a"])(a["default"], u["a"], u["b"], !1, null, null, null);
    e["default"] = i.exports;
  },
  fedf: function fedf(t, e, n) {
    "use strict";

    var u = n("14b4"),
        a = n.n(u);
    a.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-badge/uni-badge-create-component', {
  'components/uni-badge/uni-badge-create-component': function componentsUniBadgeUniBadgeCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("dc02"));
  }
}, [['components/uni-badge/uni-badge-create-component']]]);
});
require('components/uni-badge/uni-badge.js');
__wxRoute = 'components/uni-collapse-item/uni-collapse-item';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-collapse-item/uni-collapse-item.js';

define('components/uni-collapse-item/uni-collapse-item.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-collapse-item/uni-collapse-item"], {
  "08f3": function f3(e, n, t) {
    "use strict";

    t.r(n);
    var i = t("6f2e"),
        o = t.n(i);

    for (var l in i) {
      "default" !== l && function (e) {
        t.d(n, e, function () {
          return i[e];
        });
      }(l);
    }

    n["default"] = o.a;
  },
  1140: function _(e, n, t) {
    "use strict";

    var i = function i() {
      var e = this,
          n = e.$createElement;
      e._self._c;
    },
        o = [];

    t.d(n, "a", function () {
      return i;
    }), t.d(n, "b", function () {
      return o;
    });
  },
  "289d": function d(e, n, t) {
    "use strict";

    var i = t("36cb"),
        o = t.n(i);
    o.a;
  },
  "36cb": function cb(e, n, t) {},
  "438a": function a(e, n, t) {
    "use strict";

    t.r(n);
    var i = t("1140"),
        o = t("08f3");

    for (var l in o) {
      "default" !== l && function (e) {
        t.d(n, e, function () {
          return o[e];
        });
      }(l);
    }

    t("289d");
    var s = t("2877"),
        a = Object(s["a"])(o["default"], i["a"], i["b"], !1, null, null, null);
    n["default"] = a.exports;
  },
  "6f2e": function f2e(e, n, t) {
    "use strict";

    (function (e) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;

      var i = function i() {
        return t.e("components/uni-icon/uni-icon").then(t.bind(null, "7e5b"));
      },
          o = {
        name: "UniCollapseItem",
        components: {
          uniIcon: i
        },
        props: {
          title: {
            type: String,
            default: ""
          },
          name: {
            type: [Number, String],
            default: 0
          },
          disabled: {
            type: Boolean,
            default: !1
          },
          showAnimation: {
            type: Boolean,
            default: !1
          },
          open: {
            type: Boolean,
            default: !1
          },
          thumb: {
            type: String,
            default: ""
          }
        },
        data: function data() {
          var e = this.__callback_hook ? "uni_collapse_item" : "Uni_".concat(Math.ceil(1e6 * Math.random()).toString(36));
          return {
            isOpen: !1,
            height: "auto",
            elId: e
          };
        },
        watch: {
          open: function open(e) {
            this.isOpen = e;
          }
        },
        inject: ["collapse"],
        created: function created() {
          if (this.isOpen = this.open, this.nameSync = this.name ? this.name : this.collapse.childrens.length, this.collapse.childrens.push(this), this.collapse.accordion && this.isOpen) {
            var e = this.collapse.childrens[this.collapse.childrens.length - 2];
            e && (this.collapse.childrens[this.collapse.childrens.length - 2].isOpen = !1);
          }
        },
        onReady: function onReady() {
          this.getSize();
        },
        methods: {
          getSize: function getSize() {
            var n = this;
            this.showAnimation && e.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec(function (e) {
              n.height = e[0].height + "px";
            });
          },
          onClick: function onClick() {
            var e = this;
            this.disabled || (this.collapse.accordion && this.collapse.childrens.forEach(function (n) {
              n !== e && (n.isOpen = !1);
            }), this.isOpen = !this.isOpen, this.collapse.onChange && this.collapse.onChange());
          }
        }
      };

      n.default = o;
    }).call(this, t("6e42")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-collapse-item/uni-collapse-item-create-component', {
  'components/uni-collapse-item/uni-collapse-item-create-component': function componentsUniCollapseItemUniCollapseItemCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("438a"));
  }
}, [['components/uni-collapse-item/uni-collapse-item-create-component']]]);
});
require('components/uni-collapse-item/uni-collapse-item.js');
__wxRoute = 'components/uni-collapse/uni-collapse';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-collapse/uni-collapse.js';

define('components/uni-collapse/uni-collapse.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-collapse/uni-collapse"], {
  "07e6": function e6(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var a = {
      name: "UniCollapse",
      props: {
        accordion: {
          type: Boolean,
          default: !1
        }
      },
      data: function data() {
        return {};
      },
      provide: function provide() {
        return {
          collapse: this
        };
      },
      created: function created() {
        this.childrens = [];
      },
      methods: {
        onChange: function onChange() {
          var n = [];
          this.childrens.forEach(function (t, e) {
            t.isOpen && n.push(t.nameSync);
          }), this.$emit("change", n);
        }
      }
    };
    t.default = a;
  },
  "3d1a": function d1a(n, t, e) {
    "use strict";

    e.r(t);
    var a = e("923b"),
        u = e("ca93");

    for (var c in u) {
      "default" !== c && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(c);
    }

    e("52a5");
    var o = e("2877"),
        r = Object(o["a"])(u["default"], a["a"], a["b"], !1, null, null, null);
    t["default"] = r.exports;
  },
  "52a5": function a5(n, t, e) {
    "use strict";

    var a = e("90d7"),
        u = e.n(a);
    u.a;
  },
  "90d7": function d7(n, t, e) {},
  "923b": function b(n, t, e) {
    "use strict";

    var a = function a() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        u = [];

    e.d(t, "a", function () {
      return a;
    }), e.d(t, "b", function () {
      return u;
    });
  },
  ca93: function ca93(n, t, e) {
    "use strict";

    e.r(t);
    var a = e("07e6"),
        u = e.n(a);

    for (var c in a) {
      "default" !== c && function (n) {
        e.d(t, n, function () {
          return a[n];
        });
      }(c);
    }

    t["default"] = u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-collapse/uni-collapse-create-component', {
  'components/uni-collapse/uni-collapse-create-component': function componentsUniCollapseUniCollapseCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("3d1a"));
  }
}, [['components/uni-collapse/uni-collapse-create-component']]]);
});
require('components/uni-collapse/uni-collapse.js');
__wxRoute = 'components/uni-icon/uni-icon';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-icon/uni-icon.js';

define('components/uni-icon/uni-icon.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-icon/uni-icon"], {
  "141b": function b(n, t, e) {},
  "36fb": function fb(n, t, e) {
    "use strict";

    var u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        i = [];

    e.d(t, "a", function () {
      return u;
    }), e.d(t, "b", function () {
      return i;
    });
  },
  "4bce": function bce(n, t, e) {
    "use strict";

    var u = e("141b"),
        i = e.n(u);
    i.a;
  },
  "7e5b": function e5b(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("36fb"),
        i = e("8fe6");

    for (var r in i) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return i[n];
        });
      }(r);
    }

    e("4bce");
    var c = e("2877"),
        o = Object(c["a"])(i["default"], u["a"], u["b"], !1, null, null, null);
    t["default"] = o.exports;
  },
  "8fe6": function fe6(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("93d8"),
        i = e.n(u);

    for (var r in u) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(r);
    }

    t["default"] = i.a;
  },
  "93d8": function d8(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      name: "UniIcon",
      props: {
        type: {
          type: String,
          default: ""
        },
        color: {
          type: String,
          default: "#333333"
        },
        size: {
          type: [Number, String],
          default: 16
        }
      },
      methods: {
        _onClick: function _onClick() {
          this.$emit("click");
        }
      }
    };
    t.default = u;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-icon/uni-icon-create-component', {
  'components/uni-icon/uni-icon-create-component': function componentsUniIconUniIconCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("7e5b"));
  }
}, [['components/uni-icon/uni-icon-create-component']]]);
});
require('components/uni-icon/uni-icon.js');
__wxRoute = 'components/uni-list-item/uni-list-item';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-list-item/uni-list-item.js';

define('components/uni-list-item/uni-list-item.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-list-item/uni-list-item"], {
  "49ee": function ee(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("5642"),
        o = n.n(u);

    for (var i in u) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(i);
    }

    e["default"] = o.a;
  },
  5642: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;

    var u = function u() {
      return n.e("components/uni-icon/uni-icon").then(n.bind(null, "7e5b"));
    },
        o = function o() {
      return n.e("components/uni-badge/uni-badge").then(n.bind(null, "dc02"));
    },
        i = {
      name: "UniListItem",
      components: {
        uniIcon: u,
        uniBadge: o
      },
      props: {
        title: {
          type: String,
          default: ""
        },
        note: {
          type: String,
          default: ""
        },
        disabled: {
          type: Boolean,
          default: !1
        },
        showArrow: {
          type: Boolean,
          default: !0
        },
        showBadge: {
          type: Boolean,
          default: !1
        },
        showSwitch: {
          type: Boolean,
          default: !1
        },
        switchChecked: {
          type: Boolean,
          default: !1
        },
        badgeText: {
          type: [String, Number],
          default: ""
        },
        badgeType: {
          type: String,
          default: "success"
        },
        thumb: {
          type: String,
          default: ""
        },
        showExtraIcon: {
          type: Boolean,
          default: !1
        },
        extraIcon: {
          type: Object,
          default: function _default() {
            return {
              type: "contact",
              color: "#000000",
              size: 20
            };
          }
        }
      },
      data: function data() {
        return {};
      },
      methods: {
        onClick: function onClick() {
          this.$emit("click");
        },
        onSwitchChange: function onSwitchChange(t) {
          this.$emit("switchChange", t.detail);
        }
      }
    };

    e.default = i;
  },
  "617c": function c(t, e, n) {
    "use strict";

    var u = function u() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        o = [];

    n.d(e, "a", function () {
      return u;
    }), n.d(e, "b", function () {
      return o;
    });
  },
  "77f7": function f7(t, e, n) {
    "use strict";

    var u = n("f3aa"),
        o = n.n(u);
    o.a;
  },
  f0fd: function f0fd(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("617c"),
        o = n("49ee");

    for (var i in o) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return o[t];
        });
      }(i);
    }

    n("77f7");
    var a = n("2877"),
        c = Object(a["a"])(o["default"], u["a"], u["b"], !1, null, null, null);
    e["default"] = c.exports;
  },
  f3aa: function f3aa(t, e, n) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-list-item/uni-list-item-create-component', {
  'components/uni-list-item/uni-list-item-create-component': function componentsUniListItemUniListItemCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("f0fd"));
  }
}, [['components/uni-list-item/uni-list-item-create-component']]]);
});
require('components/uni-list-item/uni-list-item.js');
__wxRoute = 'components/uni-list/uni-list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-list/uni-list.js';

define('components/uni-list/uni-list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-list/uni-list"], {
  "29ea": function ea(n, t, u) {
    "use strict";

    var e = function e() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        a = [];

    u.d(t, "a", function () {
      return e;
    }), u.d(t, "b", function () {
      return a;
    });
  },
  "2c08": function c08(n, t, u) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var e = {
      name: "UniList"
    };
    t.default = e;
  },
  "5c6d": function c6d(n, t, u) {
    "use strict";

    var e = u("841d"),
        a = u.n(e);
    a.a;
  },
  6061: function _(n, t, u) {
    "use strict";

    u.r(t);
    var e = u("2c08"),
        a = u.n(e);

    for (var c in e) {
      "default" !== c && function (n) {
        u.d(t, n, function () {
          return e[n];
        });
      }(c);
    }

    t["default"] = a.a;
  },
  "841d": function d(n, t, u) {},
  c50d: function c50d(n, t, u) {
    "use strict";

    u.r(t);
    var e = u("29ea"),
        a = u("6061");

    for (var c in a) {
      "default" !== c && function (n) {
        u.d(t, n, function () {
          return a[n];
        });
      }(c);
    }

    u("5c6d");
    var r = u("2877"),
        i = Object(r["a"])(a["default"], e["a"], e["b"], !1, null, null, null);
    t["default"] = i.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-list/uni-list-create-component', {
  'components/uni-list/uni-list-create-component': function componentsUniListUniListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("c50d"));
  }
}, [['components/uni-list/uni-list-create-component']]]);
});
require('components/uni-list/uni-list.js');
__wxRoute = 'components/uni-popup-i/uni-popup';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-popup-i/uni-popup.js';

define('components/uni-popup-i/uni-popup.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-popup-i/uni-popup"], {
  "272a": function a(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("cede"),
        i = n("8338");

    for (var u in i) {
      "default" !== u && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(u);
    }

    n("f488");
    var a = n("2877"),
        f = Object(a["a"])(i["default"], o["a"], o["b"], !1, null, null, null);
    e["default"] = f.exports;
  },
  "34ee": function ee(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var o = {
      name: "UniPopup",
      props: {
        show: {
          type: Boolean,
          default: !1
        },
        position: {
          type: String,
          default: "middle"
        },
        mode: {
          type: String,
          default: "insert"
        },
        msg: {
          type: String,
          default: ""
        },
        h5Top: {
          type: Boolean,
          default: !1
        },
        buttonMode: {
          type: String,
          default: "bottom"
        }
      },
      data: function data() {
        return {
          offsetTop: 0
        };
      },
      watch: {
        h5Top: function h5Top(t) {
          this.offsetTop = t ? 44 : 0;
        }
      },
      created: function created() {
        var t = 0;
        this.offsetTop = t;
      },
      methods: {
        hide: function hide() {
          "insert" === this.mode && "middle" === this.position || this.$emit("hidePopup");
        },
        closeMask: function closeMask() {
          "insert" === this.mode && this.$emit("hidePopup");
        },
        moveHandle: function moveHandle() {}
      }
    };
    e.default = o;
  },
  "3caf": function caf(t, e, n) {},
  8338: function _(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("34ee"),
        i = n.n(o);

    for (var u in o) {
      "default" !== u && function (t) {
        n.d(e, t, function () {
          return o[t];
        });
      }(u);
    }

    e["default"] = i.a;
  },
  cede: function cede(t, e, n) {
    "use strict";

    var o = function o() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        i = [];

    n.d(e, "a", function () {
      return o;
    }), n.d(e, "b", function () {
      return i;
    });
  },
  f488: function f488(t, e, n) {
    "use strict";

    var o = n("3caf"),
        i = n.n(o);
    i.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-popup-i/uni-popup-create-component', {
  'components/uni-popup-i/uni-popup-create-component': function componentsUniPopupIUniPopupCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("272a"));
  }
}, [['components/uni-popup-i/uni-popup-create-component']]]);
});
require('components/uni-popup-i/uni-popup.js');
__wxRoute = 'pages/index/yangan/selects';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/yangan/selects.js';

define('pages/index/yangan/selects.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/index/yangan/selects"], {
  "2c13": function c13(t, e, n) {
    "use strict";

    var a = function a() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        u = [];

    n.d(e, "a", function () {
      return a;
    }), n.d(e, "b", function () {
      return u;
    });
  },
  "2ccf": function ccf(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var a = {
      props: {
        items: {
          default: function _default() {
            return [{
              name: "全部项目",
              value: 0
            }];
          },
          type: Array
        }
      },
      data: function data() {
        return {
          active: 0
        };
      },
      computed: {
        range: function range() {
          return this.items.map(function (t) {
            return t.name;
          });
        }
      },
      methods: {
        change: function change(t) {
          this.active = t.detail.value, this.$emit("change", this.items[this.active].value);
        }
      }
    };
    e.default = a;
  },
  "2ee6": function ee6(t, e, n) {},
  "56da": function da(t, e, n) {
    "use strict";

    var a = n("2ee6"),
        u = n.n(a);
    u.a;
  },
  "777b": function b(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("2ccf"),
        u = n.n(a);

    for (var c in a) {
      "default" !== c && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(c);
    }

    e["default"] = u.a;
  },
  "931e": function e(t, _e, n) {
    "use strict";

    n.r(_e);
    var a = n("2c13"),
        u = n("777b");

    for (var c in u) {
      "default" !== c && function (t) {
        n.d(_e, t, function () {
          return u[t];
        });
      }(c);
    }

    n("56da");
    var i = n("2877"),
        r = Object(i["a"])(u["default"], a["a"], a["b"], !1, null, null, null);
    _e["default"] = r.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/index/yangan/selects-create-component', {
  'pages/index/yangan/selects-create-component': function pagesIndexYanganSelectsCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("931e"));
  }
}, [['pages/index/yangan/selects-create-component']]]);
});
require('pages/index/yangan/selects.js');
__wxRoute = 'pages/qrCode/checkLocation';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/qrCode/checkLocation.js';

define('pages/qrCode/checkLocation.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/qrCode/checkLocation"], {
  7873: function _(t, n, i) {
    "use strict";

    i.r(n);
    var e = i("f3b5"),
        r = i.n(e);

    for (var o in e) {
      "default" !== o && function (t) {
        i.d(n, t, function () {
          return e[t];
        });
      }(o);
    }

    n["default"] = r.a;
  },
  "9f54": function f54(t, n, i) {
    "use strict";

    var e = function e() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        r = [];

    i.d(n, "a", function () {
      return e;
    }), i.d(n, "b", function () {
      return r;
    });
  },
  d2a8: function d2a8(t, n, i) {
    "use strict";

    i.r(n);
    var e = i("9f54"),
        r = i("7873");

    for (var o in r) {
      "default" !== o && function (t) {
        i.d(n, t, function () {
          return r[t];
        });
      }(o);
    }

    var u = i("2877"),
        c = Object(u["a"])(r["default"], e["a"], e["b"], !1, null, null, null);
    n["default"] = c.exports;
  },
  f3b5: function f3b5(t, n, i) {
    "use strict";

    (function (t) {
      function i(t) {
        return o(t) || r(t) || e();
      }

      function e() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }

      function r(t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
      }

      function o(t) {
        if (Array.isArray(t)) {
          for (var n = 0, i = new Array(t.length); n < t.length; n++) {
            i[n] = t[n];
          }

          return i;
        }
      }

      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var u = {
        name: "checkLocation",
        data: function data() {
          return {
            multiIndex: [0, 0, 0],
            multiArray: [["全部项目"], ["全部建筑"], ["全部楼层"]],
            multiValue: [[], [], []],
            all: ["全部项目", "全部建筑", "全部楼层"]
          };
        },
        computed: {
          orgId: function orgId() {
            return t.getStorageSync("userInfo").depInfo.orgId;
          }
        },
        mounted: function mounted() {
          this.load();
        },
        methods: {
          load: function load() {
            this.initAll(), this.getProject();
          },
          init: function init() {
            this.multiIndex = [0, 0, 0];
          },
          initAll: function initAll() {
            for (var t = 0; t < this.multiArray.length; t++) {
              this.multiArray[t] = [this.all[t]];
            }
          },
          getProject: function getProject() {
            var t = this;
            this.$service.cnsmogsensor.findProjectSelect({
              orgId: this.orgId
            }).then(function (n) {
              t.initProject(n.msg || []), t.$forceUpdate();
            });
          },
          initProject: function initProject(t) {
            var n = t.map(function (t) {
              return t.projectName;
            });
            this.multiArray[0] = [this.all[0]].concat(i(n));
            var e = t.map(function (t) {
              return t.projectId;
            });
            this.multiValue[0] = [null].concat(i(e));
          },
          getBuilding: function getBuilding(t) {
            var n = this;
            this.$service.cnsmogsensor.findStrucunitSelect({
              projectId: t
            }).then(function (i) {
              n.initBuilding(null !== t ? i.msg : []), n.initFloor([]), n.$forceUpdate();
            });
          },
          initBuilding: function initBuilding(t) {
            var n = t.map(function (t) {
              return t.strucunitName;
            });
            this.multiArray.splice(1, 1, [this.all[1]].concat(i(n)));
            var e = t.map(function (t) {
              return t.strucunitId;
            });
            this.multiIndex[1] = 0, this.multiIndex[2] = 0, this.multiValue[1] = [null].concat(i(e));
          },
          getFloor: function getFloor(t) {
            var n = this;
            this.$service.cnsmogsensor.findCrosssectionSelect({
              strucunitId: t
            }).then(function (i) {
              n.initFloor(null !== t ? i.msg : []), n.$forceUpdate();
            });
          },
          initFloor: function initFloor(t) {
            var n = t.map(function (t) {
              return t.crossSectionName;
            });
            this.multiArray.splice(2, 1, [this.all[2]].concat(i(n)));
            var e = t.map(function (t) {
              return t.crossSectionId;
            });
            this.multiIndex[2] = 0, this.multiValue[2] = [null].concat(i(e));
          },
          bindMultiPickerColumnChange: function bindMultiPickerColumnChange(t) {
            console.log("修改的列为：" + t.detail.column + "，值为：" + t.detail.value, " at pages/qrCode/checkLocation.vue:109"), this.multiIndex.splice(t.detail.column, 1, t.detail.value);
            var n = this.multiValue[t.detail.column][t.detail.value];
            0 === t.detail.column && this.getBuilding(n), 1 === t.detail.column && this.getFloor(n);
          },
          change: function change() {
            for (var t = [], n = 0; n < 3; n++) {
              t.push(this.multiValue[n][this.multiIndex[n]]);
            }

            this.$emit("change", t);
          }
        }
      };
      n.default = u;
    }).call(this, i("6e42")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/qrCode/checkLocation-create-component', {
  'pages/qrCode/checkLocation-create-component': function pagesQrCodeCheckLocationCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("d2a8"));
  }
}, [['pages/qrCode/checkLocation-create-component']]]);
});
require('pages/qrCode/checkLocation.js');

__wxRoute = 'pages/login/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/index.js';

define('pages/login/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/index"],{"17d3":function(e,n,t){"use strict";var s=t("f96d"),o=t.n(s);o.a},4760:function(e,n,t){"use strict";var s=function(){var e=this,n=e.$createElement;e._self._c},o=[];t.d(n,"a",function(){return s}),t.d(n,"b",function(){return o})},6119:function(e,n,t){"use strict";t.r(n);var s=t("da73"),o=t.n(s);for(var a in s)"default"!==a&&function(e){t.d(n,e,function(){return s[e]})}(a);n["default"]=o.a},da73:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{userName:"",password:"",keep:!1}},onReady:function(){var n=this;e.getStorage({key:"userInfo",success:function(e){var t=e.data;n.userName=t.userName,n.password=t.password,n.keep=t.keep,console.log(e," at pages/login/index.vue:43")}})},methods:{changeKeep:function(e){this.keep=e.detail.value.length>0},login:function(){if(console.log(this.keep," at pages/login/index.vue:52"),""!==this.userName)if(""!==this.password){var n=this;this.$service.login.login({password:this.password,userName:this.userName}).then(function(t){0===t.code?n.setUserInfo(t.msg):(n.keep=!1,e.showModal({content:"账号或密码错误",showCancel:!1}))})}else e.showModal({content:"请输入登录密码",showCancel:!1});else e.showModal({content:"请输入登录账号",showCancel:!1})},setUserInfo:function(n){var t=this,s=this;e.setStorageSync("userInfo",{token:n}),this.$service.myuser.findUserByToken({token:n}).then(function(o){t.$service.myuser.findDepartmentByOrgId({orgId:o.msg.user.orgId}).then(function(t){e.setStorageSync("userInfo",{user:o.msg.user,token:n,depInfo:t.msg.department,keep:s.keep,password:s.password,userName:s.userName}),e.switchTab({url:"/pages/index/index"})})})}}};n.default=t}).call(this,t("6e42")["default"])},f96d:function(e,n,t){},fe55:function(e,n,t){"use strict";t.r(n);var s=t("4760"),o=t("6119");for(var a in o)"default"!==a&&function(e){t.d(n,e,function(){return o[e]})}(a);t("17d3");var r=t("2877"),u=Object(r["a"])(o["default"],s["a"],s["b"],!1,null,null,null);n["default"]=u.exports}},[["ca4a","common/runtime","common/vendor"]]]);
});
require('pages/login/index.js');
__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0a80":function(t,n,e){},4971:function(t,n,e){"use strict";var a=e("0a80"),u=e.n(a);u.a},"5d5e":function(t,n,e){"use strict";e.r(n);var a=e("7298"),u=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);n["default"]=u.a},7298:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"home",data:function(){return{title:"Hello",counts:[{name:"消防报警",count:12},{name:"故障报警",count:12},{name:"压力液位",count:12},{name:"烟感报警",count:12},{name:"用电报警",count:12}],menu1:[{image:"../../static/menu/waring.png",text:"报警信息"},{image:"../../static/menu/crt.png",text:"网络CRT"},{image:"../../static/menu/set.png",text:"维保"},{image:"../../static/menu/qian.png",text:"增值服务"},{image:"../../static/menu/yangan.png",path:"yangan/detail",text:"烟感"}],menu2:[{image:"../../static/menu/yali.png",text:"压力"},{image:"../../static/menu/yeweitu.png",text:"液位"},{image:"../../static/menu/yongdianliang.png",text:"智慧用电"},{image:"../../static/menu/xiaofang.png",text:"消防设备"},{image:"../../static/menu/all.png",text:"全部"}]}},onLoad:function(){},methods:{openPage:function(n){n.path?t.navigateTo({url:n.path}):t.showModal({content:"模块开发中",showCancel:!1})}}};n.default=e}).call(this,e("6e42")["default"])},a42d:function(t,n,e){"use strict";e.r(n);var a=e("e39a"),u=e("5d5e");for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);e("4971");var o=e("2877"),c=Object(o["a"])(u["default"],a["a"],a["b"],!1,null,null,null);n["default"]=c.exports},e39a:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return u})}},[["44f3","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/user/user';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/user.js';

define('pages/user/user.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{"3c73":function(e,n,t){"use strict";t.r(n);var u=t("704f"),o=t.n(u);for(var a in u)"default"!==a&&function(e){t.d(n,e,function(){return u[e]})}(a);n["default"]=o.a},"44d2":function(e,n,t){"use strict";var u=function(){var e=this,n=e.$createElement;e._self._c},o=[];t.d(n,"a",function(){return u}),t.d(n,"b",function(){return o})},"5f87":function(e,n,t){},"704f":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=function(){return t.e("components/uni-collapse/uni-collapse").then(t.bind(null,"3d1a"))},o=function(){return t.e("components/uni-collapse-item/uni-collapse-item").then(t.bind(null,"438a"))},a={components:{uniCollapse:u,uniCollapseItem:o},data:function(){return{userInfo:{},depInfo:{},users:[{key:"userName",name:"账号名称"},{key:"fullName",name:"用户名称"},{key:"phone",name:"手机号"},{key:"email",name:"邮箱"}],deps:[{key:"orgName",name:"公司名称"},{key:"phone",name:"公司电话"},{key:"site",name:"公司地址"},{key:"orgDescribe",name:"描述"}]}},methods:{editPassword:function(){e.navigateTo({url:"/pages/user/editPassword/index"})},exit:function(){e.setStorageSync("userInfo",{password:"",userName:"",keep:!1}),e.reLaunch({url:"/pages/login/index"})}},onLoad:function(){var n=e.getStorageSync("userInfo");this.userInfo=n.user,this.depInfo=n.depInfo}};n.default=a}).call(this,t("6e42")["default"])},"8f22":function(e,n,t){"use strict";t.r(n);var u=t("44d2"),o=t("3c73");for(var a in o)"default"!==a&&function(e){t.d(n,e,function(){return o[e]})}(a);t("a5ef");var r=t("2877"),s=Object(r["a"])(o["default"],u["a"],u["b"],!1,null,null,null);n["default"]=s.exports},a5ef:function(e,n,t){"use strict";var u=t("5f87"),o=t.n(u);o.a}},[["e077","common/runtime","common/vendor"]]]);
});
require('pages/user/user.js');
__wxRoute = 'pages/qrCode/qrCode';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/qrCode/qrCode.js';

define('pages/qrCode/qrCode.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qrCode/qrCode"],{"2a67":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("137b"));function i(e){return e&&e.__esModule?e:{default:e}}var o=function(){return n.e("pages/qrCode/checkLocation").then(n.bind(null,"d2a8"))},r={components:{checkLocation:o},data:function(){return{radioValue:"1",termCode:"",index:1,date:"",disabled:!1,code:"",name:"",info:"",array:["类型1","类型2","类型3"],advIndex:0,optAdvType:[]}},methods:{onShow:function(){this.radioValue="1",this.termCode="",this.index=1,this.disabled=!1,this.code="",this.info="",this.name="",this.advIndex=0,this.date=a.default.dateUtils.formatNowDate(),this.$refs.checkLocation1&&(this.$refs.checkLocation1.init(),this.$refs.checkLocation2.init()),this.scanCode(),this.getAdvType()},advChange:function(e){this.advIndex=e.target.value},bindDateChange:function(e){this.date=e.target.value},radioChange:function(e){this.radioValue=e.target.value},getAdvType:function(){var e=this;this.$service.qrCode.findTermTypeAll().then(function(t){e.optAdvType=[],t.msg.forEach(function(t){t.termTypeName&&e.optAdvType.push(t.termTypeName)})})},scanCode:function(){var t=this;e.scanCode({success:function(e){t.disabled=!0,t.termCode=e.result}})},enter:function(){this.$service.qrCode.addTerminalrepair({termCode:this.termCode}).then(function(t){e.showModal({content:t.msg,showCancel:!1})})}}};t.default=r}).call(this,n("6e42")["default"])},3488:function(e,t,n){},"794c":function(e,t,n){"use strict";n.r(t);var a=n("7da6"),i=n("b352");for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);n("fa8b");var r=n("2877"),d=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,null,null);t["default"]=d.exports},"7da6":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})},b352:function(e,t,n){"use strict";n.r(t);var a=n("2a67"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=i.a},fa8b:function(e,t,n){"use strict";var a=n("3488"),i=n.n(a);i.a}},[["2dbc","common/runtime","common/vendor"]]]);
});
require('pages/qrCode/qrCode.js');
__wxRoute = 'pages/index/yangan/yangan';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/yangan/yangan.js';

define('pages/index/yangan/yangan.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/yangan/yangan"],{"55c0":function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return i}),e.d(t,"b",function(){return u})},7881:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){return e.e("components/uni-popup-i/uni-popup").then(e.bind(null,"272a"))},u=function(){return e.e("components/uni-icon/uni-icon").then(e.bind(null,"7e5b"))},o=function(){return e.e("components/uni-list/uni-list").then(e.bind(null,"c50d"))},c=function(){return e.e("components/uni-list-item/uni-list-item").then(e.bind(null,"f0fd"))},a=function(){return e.e("pages/index/yangan/selects").then(e.bind(null,"931e"))},s=function(){return e.e("pages/qrCode/checkLocation").then(e.bind(null,"d2a8"))},r={name:"yangan",components:{uniPopup:i,vUniIcon:u,uniList:o,uniListItem:c,selects:a,checkLocation:s},data:function(){return{list:[],termComstatus:null,optStatus:[{name:"全部状态",value:null},{name:"正常",value:"1"},{name:"报警",value:"2"},{name:"故障",value:"3"}],optDevice:[{name:"全部设备",value:null}],multiValue:[null,null,null]}},computed:{orgId:function(){var t=n.getStorageSync("userInfo");return t.depInfo.orgId},opt:function(){return{orgId:this.orgId,projectId:this.multiValue[0],strucunitId:this.multiValue[1],crossSectionId:this.multiValue[2],termComstatus:this.termComstatus}}},mounted:function(){this.getDevice()},methods:{changeStatus:function(n){this.termComstatus=n,this.getList()},onShow:function(){this.getList()},changeSelect:function(){},getDevice:function(){var n=this;this.$service.qrCode.findTermTypeAll().then(function(t){t.msg.forEach(function(t){t.termTypeName&&t.termtypeId&&n.optDevice.push({name:t.termTypeName,value:t.termtypeId})})})},pickerChange:function(n){this.multiValue=n,this.getList()},opanDetail:function(t){n.navigateBack({url:"./detail?item=".concat(JSON.stringify(t),"&opt= ").concat(JSON.stringify(this.opt))}),n.setStorageSync("yangan",{item:t,opt:this.opt})},getList:function(){var n=this;this.$service.cnsmogsensor.cnSmogSensorList(this.opt).then(function(t){n.list=t.msg.terminals})}}};t.default=r}).call(this,e("6e42")["default"])},8875:function(n,t,e){"use strict";e.r(t);var i=e("55c0"),u=e("fce3");for(var o in u)"default"!==o&&function(n){e.d(t,n,function(){return u[n]})}(o);e("d4b6");var c=e("2877"),a=Object(c["a"])(u["default"],i["a"],i["b"],!1,null,null,null);t["default"]=a.exports},d4b6:function(n,t,e){"use strict";var i=e("eff7"),u=e.n(i);u.a},eff7:function(n,t,e){},fce3:function(n,t,e){"use strict";e.r(t);var i=e("7881"),u=e.n(i);for(var o in i)"default"!==o&&function(n){e.d(t,n,function(){return i[n]})}(o);t["default"]=u.a}},[["0f54","common/runtime","common/vendor"]]]);
});
require('pages/index/yangan/yangan.js');
__wxRoute = 'pages/index/yangan/detail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/yangan/detail.js';

define('pages/index/yangan/detail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/yangan/detail"],{"11ae":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("33e8"));function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};r.get||r.set?Object.defineProperty(e,n,r):e[n]=t[n]}return e.default=t,e}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){i(t,e,n[e])})}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=function(){return Promise.all([n.e("common/vendor"),n.e("components/mpvue-echarts/src/echarts")]).then(n.bind(null,"72e6"))},s={animation:!1,color:["#37A2DA","#9FE6B8"],grid:{x:35,x2:10,y:20,y2:25},calculable:!1,xAxis:[{type:"category",data:[]}],yAxis:[{type:"value",splitArea:{show:!0}}],series:[{name:"值",type:"line",data:[]}]},u={xAxis:[{type:"value",axisLabel:{formatter:function(t){var e="";switch(t=t,t){case 1:e="一";break;case 2:e="二";break;case 3:e="三";break;case 4:e="四";break;case 5:e="五";break;case 6:e="六";break;case 7:e="天";break;default:break}return e?"星期".concat(e):""}}}],yAxis:{},series:[{symbolSize:20,data:[[1,8.04],[2,6.95],[3,4.95],[4,6.95],[5,8.95],[6,5.95],[7,2.95]],type:"scatter"}]},l={data:function(){return{tabs:["烟雾报警","电压","烟雾浓度"],activeTab:1,normal:0,warning:0,malfunction:0,opt:{orgId:this.orgId,projectId:null,strucunitId:null,crossSectionId:null,termComstatus:null},updateStatus:!1,item:{name:""}}},computed:{orgId:function(){var e=t.getStorageSync("userInfo");return e.depInfo.orgId},count:function(){return this.normal+this.warning+this.malfunction}},methods:{clickTab:function(t){this.activeTab=t},onNavigationBarButtonTap:function(){t.navigateTo({url:"./yangan"})},onShow:function(t){var e=this;this.$service.cnsmogsensor.cnSmogSensorList({orgId:this.orgId,projectId:null,termComstatus:null}).then(function(t){e.$service.cnsmogsensor.findCNSmogSensor({ids:t.msg.ids,strs:t.msg.names}).then(function(t){e.format(t.msg[0].value)})}),this.getNumber()},getNumber:function(){var e=this,n=t.getStorageSync("yangan");n&&(this.opt=n.opt),this.$service.cnsmogsensor.cnSmogSensorNumber(o({},this.opt,{orgId:this.orgId})).then(function(t){e.normal=t.msg.normal,e.malfunction=t.msg.malfunction,e.warning=t.msg.warning})},format:function(t){s.series[0].data=[1,4,3,6,7],s.xAxis[0].data=["07-12","07-13","07-14","07-15"]},lineInit:function(t){var e=t.width,n=t.height,a=this.$refs.lineChart.canvas;r.setCanvasCreator(function(){return a});var o=r.init(a,null,{width:e,height:n});a.setChart(o),o.setOption(u)}},components:{mpvueEcharts:c}};e.default=l}).call(this,n("6e42")["default"])},"38c6":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},"4e33":function(t,e,n){},"876f":function(t,e,n){"use strict";n.r(e);var r=n("11ae"),a=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e["default"]=a.a},d50e:function(t,e,n){"use strict";n.r(e);var r=n("38c6"),a=n("876f");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("ea66");var i=n("2877"),c=Object(i["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=c.exports},ea66:function(t,e,n){"use strict";var r=n("4e33"),a=n.n(r);a.a}},[["3c47","common/runtime","common/vendor"]]]);
});
require('pages/index/yangan/detail.js');
__wxRoute = 'pages/user/editPassword/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/editPassword/index.js';

define('pages/user/editPassword/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/editPassword/index"],{"0d95":function(e,s,n){"use strict";var o=n("5eef"),t=n.n(o);t.a},"11b9":function(e,s,n){"use strict";(function(e){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var n={data:function(){return{oldPassword:"",newPassword:"",newPasswordAgain:""}},methods:{enter:function(){if(""!==this.oldPassword)if(""!==this.newPassword)if(""!==this.newPasswordAgain)if(this.newPasswordAgain===this.newPassword){var s=e.getStorageSync("userInfo");s.password===this.oldPassword?this.oldPassword!==this.newPassword?this.$service.myuser.alterPassword({formerPassword:this.oldPassword,password:this.newPassword,userName:s.userName}).then(function(s){e.setStorageSync("userInfo",{password:"",userName:"",keep:!1}),e.reLaunch({url:"/pages/login/index"})}):e.showModal({content:"当前密码和新密码相同",showCancel:!1}):e.showModal({content:"当前密码错误",showCancel:!1})}else e.showModal({content:"两次输入的密码不一致",showCancel:!1});else e.showModal({content:"请再次确认密码",showCancel:!1});else e.showModal({content:"请输入新密码",showCancel:!1});else e.showModal({content:"请输入当前密码",showCancel:!1})}}};s.default=n}).call(this,n("6e42")["default"])},"5eef":function(e,s,n){},"79af":function(e,s,n){"use strict";n.r(s);var o=n("9945"),t=n("9de4");for(var a in t)"default"!==a&&function(e){n.d(s,e,function(){return t[e]})}(a);n("0d95");var r=n("2877"),d=Object(r["a"])(t["default"],o["a"],o["b"],!1,null,null,null);s["default"]=d.exports},9945:function(e,s,n){"use strict";var o=function(){var e=this,s=e.$createElement;e._self._c},t=[];n.d(s,"a",function(){return o}),n.d(s,"b",function(){return t})},"9de4":function(e,s,n){"use strict";n.r(s);var o=n("11b9"),t=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(s,e,function(){return o[e]})}(a);s["default"]=t.a}},[["fc52","common/runtime","common/vendor"]]]);
});
require('pages/user/editPassword/index.js');
__wxRoute = 'pages/clockIn/clockIn';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/clockIn/clockIn.js';

define('pages/clockIn/clockIn.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/clockIn/clockIn"],{"004b":function(t,e,n){},2993:function(t,e,n){"use strict";n.r(e);var o=n("3591"),a=n("f26f");for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);n("8aff");var i=n("2877"),u=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=u.exports},3591:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},5908:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("137b"));function a(t){return t&&t.__esModule?t:{default:t}}var c={data:function(){return{imageSrc:"",text:"",url:"",locationName:"当前位置",title:"map",latitude:30.52,longitude:114.31}},computed:{userId:function(){var e=t.getStorageSync("userInfo");return e.user.userId},scheduleDate:function(){return o.default.dateUtils.formatNow()},scheduleStatic:function(){var t=new Date;return t.getHours()<12?1:2},covers:function(){return[{latitude:this.latitude,longitude:this.longitude,iconPath:"../../static/home/location.png"}]}},methods:{onShow:function(){this.imageSrc="",this.text="",this.getLocation()},enter:function(){""!==this.url?(t.showLoading({title:"加载中"}),this.$service.schedule.addSchedule({latitude:this.latitude,longitude:this.longitude,scheduleDate:null,scheduleExplain:this.text,scheduleId:null,scheduleStatic:this.scheduleStatic,url:this.url,userId:this.userId}).then(function(e){t.hideLoading(),200===e.statusCode?t.showModal({content:"打卡成功",showCancel:!1}):t.showModal({content:e.msg,showCancel:!1})})):t.showModal({content:"请上传图片",showCancel:!1})},getLocation:function(){var e=this;t.showLoading({title:"加载中"}),t.getLocation({type:"gcj02",geocode:!0,success:function(n){t.hideLoading();var o=t.createMapContext("map",e.$refs.map);o.moveToLocation(),e.longitude=n.longitude+1e-5,e.latitude=n.latitude,e.locationName=n.address.city+" "+n.address.district+" "+n.address.street+" "+n.address.poiName||""}})},chooseImage:function(){var e=this;t.chooseImage({count:1,success:function(n){console.log("chooseImage success, temp path is",n.tempFilePaths[0]," at pages/clockIn/clockIn.vue:153");var o=n.tempFilePaths[0];e.imageSrc=o,e.$service.schedule.ftpfileUpload({imageSrc:o}).then(function(n){200===n.statusCode?e.url=n.data:t.showModal({content:"上传失败",showCancel:!1})})},fail:function(t){console.log("chooseImage fail",t," at pages/clockIn/clockIn.vue:171")}})}}};e.default=c}).call(this,n("6e42")["default"])},"8aff":function(t,e,n){"use strict";var o=n("004b"),a=n.n(o);a.a},f26f:function(t,e,n){"use strict";n.r(e);var o=n("5908"),a=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e["default"]=a.a}},[["71c0","common/runtime","common/vendor"]]]);
});
require('pages/clockIn/clockIn.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

