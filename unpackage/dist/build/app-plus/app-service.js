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



__wxAppCode__['app.json']={"pages":["pages/login/index","pages/index/index","pages/user/user","pages/qrCode/qrCode","pages/index/yangan/yangan","pages/index/yangan/detail","pages/user/editPassword/index","pages/clockIn/clockIn"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#7A7E83","selectedColor":"#007AFF","borderStyle":"#000000","backgroundColor":"#F8F8F8","list":[{"pagePath":"pages/index/index","iconPath":"static/home/home.png","selectedIconPath":"static/home/home1.png","text":"主页"},{"pagePath":"pages/qrCode/qrCode","iconPath":"static/home/shaoma.png","selectedIconPath":"static/home/shaoma1.png","text":"扫码"},{"pagePath":"pages/clockIn/clockIn","iconPath":"static/home/clockIn.png","selectedIconPath":"static/home/clockIn1.png","text":"打卡"},{"pagePath":"pages/user/user","iconPath":"static/home/user.png","selectedIconPath":"static/home/user1.png","text":"用户"}]},"nvueCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"gu-an-yun","compilerVersion":"2.2.2","usingComponents":{}};
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

__wxAppCode__['pages/clockIn/clockIn.json']={"navigationBarTextStyle":"white","navigationBarBackgroundColor":"#000000","navigationBarTitleText":"考勤打卡","usingComponents":{}};
__wxAppCode__['pages/clockIn/clockIn.wxml']=$gwx('./pages/clockIn/clockIn.wxml');

__wxAppCode__['pages/index/index.json']={"navigationBarTextStyle":"white","navigationBarBackgroundColor":"#000000","navigationBarTitleText":"主页","usingComponents":{}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/index/yangan/detail.json']={"navigationBarTitleText":"NB烟感","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#000000","titleNView":{"buttons":[{"fontSize":"16px","text":"列表"}]},"usingComponents":{"mpvue-echarts":"/components/mpvue-echarts/src/echarts"}};
__wxAppCode__['pages/index/yangan/detail.wxml']=$gwx('./pages/index/yangan/detail.wxml');

__wxAppCode__['pages/index/yangan/selects.json']={"usingComponents":{},"component":true};
__wxAppCode__['pages/index/yangan/selects.wxml']=$gwx('./pages/index/yangan/selects.wxml');

__wxAppCode__['pages/index/yangan/yangan.json']={"navigationBarTextStyle":"white","navigationBarBackgroundColor":"#000000","navigationBarTitleText":"NB烟感列表","usingComponents":{"uni-popup":"/components/uni-popup-i/uni-popup","v-uni-icon":"/components/uni-icon/uni-icon","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item","selects":"/pages/index/yangan/selects","check-location":"/pages/qrCode/checkLocation"}};
__wxAppCode__['pages/index/yangan/yangan.wxml']=$gwx('./pages/index/yangan/yangan.wxml');

__wxAppCode__['pages/login/index.json']={"navigationBarTitleText":"登录","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#000000","usingComponents":{}};
__wxAppCode__['pages/login/index.wxml']=$gwx('./pages/login/index.wxml');

__wxAppCode__['pages/qrCode/checkLocation.json']={"usingComponents":{},"component":true};
__wxAppCode__['pages/qrCode/checkLocation.wxml']=$gwx('./pages/qrCode/checkLocation.wxml');

__wxAppCode__['pages/qrCode/qrCode.json']={"navigationBarTextStyle":"white","navigationBarBackgroundColor":"#000000","navigationBarTitleText":"扫码","usingComponents":{"check-location":"/pages/qrCode/checkLocation"}};
__wxAppCode__['pages/qrCode/qrCode.wxml']=$gwx('./pages/qrCode/qrCode.wxml');

__wxAppCode__['pages/user/editPassword/index.json']={"navigationBarTextStyle":"white","navigationBarBackgroundColor":"#000000","navigationBarTitleText":"修改密码","usingComponents":{}};
__wxAppCode__['pages/user/editPassword/index.wxml']=$gwx('./pages/user/editPassword/index.wxml');

__wxAppCode__['pages/user/user.json']={"navigationBarTextStyle":"white","navigationBarBackgroundColor":"#000000","navigationBarTitleText":"用户管理","usingComponents":{"uni-collapse":"/components/uni-collapse/uni-collapse","uni-collapse-item":"/components/uni-collapse-item/uni-collapse-item"}};
__wxAppCode__['pages/user/user.wxml']=$gwx('./pages/user/user.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"37fb":function(n,o,e){},"54e0":function(n,o,e){"use strict";e.r(o);var t=e("8a5e");for(var u in t)"default"!==u&&function(n){e.d(o,n,function(){return t[n]})}(u);e("71e3");var a,c,l=e("2877"),f=Object(l["a"])(t["default"],a,c,!1,null,null,null);o["default"]=f.exports},"71e3":function(n,o,e){"use strict";var t=e("37fb"),u=e.n(t);u.a},"8a5e":function(n,o,e){"use strict";e.r(o);var t=e("b9c1"),u=e.n(t);for(var a in t)"default"!==a&&function(n){e.d(o,n,function(){return t[n]})}(a);o["default"]=u.a},b9c1:function(n,o,e){"use strict";(function(n){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={onLaunch:function(){console.log(n("App Launch"," at App.vue:4"))},onShow:function(){console.log(n("App Show"," at App.vue:7"))},onHide:function(){console.log(n("App Hide"," at App.vue:10"))}};o.default=e}).call(this,e("0de9")["default"])}},[["7a64","common/runtime","common/vendor"]]]);
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
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(t,e,n){"use strict";function i(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function r(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(r){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=i(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),o="";if(r.length>1){var a=r.pop();o=r.join("---COMMA---"),0===a.indexOf(" at ")?o+=a:o+="---COMMA---"+a}else o=r[0];return o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},"0f54":function(t,e,n){"use strict";(function(t){n("894e");i(n("66fd"));var e=i(n("8875"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"137b":function(t,e,n){"use strict";function i(t){if("number"!==typeof t||t<0)return t;var e=parseInt(t/3600);t%=3600;var n=parseInt(t/60);t%=60;var i=t;return[e,n,i].map(function(t){return t=t.toString(),t[1]?t:"0"+t}).join(":")}function r(t,e){return"string"===typeof t&&"string"===typeof e&&(t=parseFloat(t),e=parseFloat(e)),t=t.toFixed(2),e=e.toFixed(2),{longitude:t.toString().split("."),latitude:e.toString().split(".")}}var o=function(t){return t<10?"0"+t:t},a={UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},humanize:function(t){var e="";for(var n in this.UNITS)if(t>=this.UNITS[n]){e=Math.floor(t/this.UNITS[n])+n+"前";break}return e||"刚刚"},format:function(t){var e=this.parse(t),n=Date.now()-e.getTime();return n<this.UNITS["天"]?this.humanize(n):e.getFullYear()+"/"+o(e.getMonth()+1)+"/"+o(e.getDay())+"-"+o(e.getHours())+":"+o(e.getMinutes())},formatNow:function(){var t=new Date;return t.getFullYear()+"-"+o(t.getMonth()+1)+"-"+o(t.getDate())+" "+o(t.getHours())+":"+o(t.getMinutes())},formatNowDate:function(){var t=new Date;return t.getFullYear()+"-"+o(t.getMonth()+1)+"-"+o(t.getDate())},parse:function(t){var e=t.split(/[^0-9]/);return new Date(e[0],e[1]-1,e[2],e[3],e[4],e[5])}};t.exports={formatTime:i,formatLocation:r,dateUtils:a}},2877:function(t,e,n){"use strict";function i(t,e,n,i,r,o,a,s){var l,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),i&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),a?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=l):r&&(l=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(t,e){return l.call(e),c(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,l):[l]}return{exports:t,options:u}}n.d(e,"a",function(){return i})},"2dbc":function(t,e,n){"use strict";(function(t){n("894e");i(n("66fd"));var e=i(n("794c"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"33e8":function(t,e,n){"use strict";(function(t){!function(t,n){n(e)}(0,function(e,n,i){function r(t){var e={},r={},o=t.match(/Firefox\/([\d.]+)/),a=t.match(/MSIE\s([\d.]+)/)||t.match(/Trident\/.+?rv:(([\d.]+))/),s=t.match(/Edge\/([\d.]+)/),l=/micromessenger/i.test(t);return o&&(r.firefox=!0,r.version=o[1]),a&&(r.ie=!0,r.version=a[1]),s&&(r.edge=!0,r.version=s[1]),l&&(r.weChat=!0),{browser:r,os:e,node:!1,canvasSupported:!!i.createElement("canvas").getContext,svgSupported:"undefined"!=typeof SVGRect,touchEventsSupported:"ontouchstart"in n&&!r.ie&&!r.edge,pointerEventsSupported:"onpointerdown"in n&&(r.edge||r.ie&&r.version>=11),domSupported:"undefined"!=typeof i}}function o(t,e){"createCanvas"===t&&(cd=null),ld[t]=e}function a(t){if(null==t||"object"!=typeof t)return t;var e=t,n=ed.call(t);if("[object Array]"===n){if(!F(t)){e=[];for(var i=0,r=t.length;r>i;i++)e[i]=a(t[i])}}else if(td[n]){if(!F(t)){var o=t.constructor;if(t.constructor.from)e=o.from(t);else{e=new o(t.length);for(i=0,r=t.length;r>i;i++)e[i]=a(t[i])}}}else if(!Qf[n]&&!F(t)&&!k(t))for(var s in e={},t)t.hasOwnProperty(s)&&(e[s]=a(t[s]));return e}function s(t,e,n){if(!A(e)||!A(t))return n?a(e):t;for(var i in e)if(e.hasOwnProperty(i)){var r=t[i],o=e[i];!A(o)||!A(r)||S(o)||S(r)||k(o)||k(r)||T(o)||T(r)||F(o)||F(r)?!n&&i in t||(t[i]=a(e[i],!0)):s(r,o,n)}return t}function l(t,e){for(var n=t[0],i=1,r=t.length;r>i;i++)n=s(n,t[i],e);return n}function u(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function c(t,e,n){for(var i in e)e.hasOwnProperty(i)&&(n?null!=e[i]:null==t[i])&&(t[i]=e[i]);return t}function h(){return cd||(cd=ud().getContext("2d")),cd}function f(t,e){if(t){if(t.indexOf)return t.indexOf(e);for(var n=0,i=t.length;i>n;n++)if(t[n]===e)return n}return-1}function d(t,e){function n(){}var i=t.prototype;for(var r in n.prototype=e.prototype,t.prototype=new n,i)t.prototype[r]=i[r];t.prototype.constructor=t,t.superClass=e}function p(t,e,n){t="prototype"in t?t.prototype:t,e="prototype"in e?e.prototype:e,c(t,e,n)}function g(t){return t?"string"!=typeof t&&"number"==typeof t.length:void 0}function v(t,e,n){if(t&&e)if(t.forEach&&t.forEach===id)t.forEach(e,n);else if(t.length===+t.length)for(var i=0,r=t.length;r>i;i++)e.call(n,t[i],i,t);else for(var o in t)t.hasOwnProperty(o)&&e.call(n,t[o],o,t)}function m(t,e,n){if(t&&e){if(t.map&&t.map===ad)return t.map(e,n);for(var i=[],r=0,o=t.length;o>r;r++)i.push(e.call(n,t[r],r,t));return i}}function y(t,e,n,i){if(t&&e){if(t.reduce&&t.reduce===sd)return t.reduce(e,n,i);for(var r=0,o=t.length;o>r;r++)n=e.call(i,n,t[r],r,t);return n}}function _(t,e,n){if(t&&e){if(t.filter&&t.filter===rd)return t.filter(e,n);for(var i=[],r=0,o=t.length;o>r;r++)e.call(n,t[r],r,t)&&i.push(t[r]);return i}}function x(t,e,n){if(t&&e)for(var i=0,r=t.length;r>i;i++)if(e.call(n,t[i],i,t))return t[i]}function w(t,e){var n=od.call(arguments,2);return function(){return t.apply(e,n.concat(od.call(arguments)))}}function b(t){var e=od.call(arguments,1);return function(){return t.apply(this,e.concat(od.call(arguments)))}}function S(t){return"[object Array]"===ed.call(t)}function M(t){return"function"==typeof t}function I(t){return"[object String]"===ed.call(t)}function A(t){var e=typeof t;return"function"===e||!!t&&"object"===e}function T(t){return!!Qf[ed.call(t)]}function C(t){return!!td[ed.call(t)]}function k(t){return"object"==typeof t&&"number"==typeof t.nodeType&&"object"==typeof t.ownerDocument}function D(t){return t!==t}function O(){for(var t=0,e=arguments.length;e>t;t++)if(null!=arguments[t])return arguments[t]}function P(t,e){return null!=t?t:e}function L(t,e,n){return null!=t?t:null!=e?e:n}function E(){return Function.call.apply(od,arguments)}function N(t){if("number"==typeof t)return[t,t,t,t];var e=t.length;return 2===e?[t[0],t[1],t[0],t[1]]:3===e?[t[0],t[1],t[2],t[1]]:t}function B(t,e){if(!t)throw new Error(e)}function z(t){return null==t?null:"function"==typeof t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}function R(t){t[hd]=!0}function F(t){return t[hd]}function V(t){function e(t,e){n?i.set(t,e):i.set(e,t)}var n=S(t);this.data={};var i=this;t instanceof V?t.each(e):t&&v(t,e)}function $(t){return new V(t)}function j(t,e){for(var n=new t.constructor(t.length+e.length),i=0;i<t.length;i++)n[i]=t[i];var r=t.length;for(i=0;i<e.length;i++)n[i+r]=e[i];return n}function H(){}function W(t,e){var n=new dd(2);return null==t&&(t=0),null==e&&(e=0),n[0]=t,n[1]=e,n}function G(t,e){return t[0]=e[0],t[1]=e[1],t}function U(t){var e=new dd(2);return e[0]=t[0],e[1]=t[1],e}function Z(t,e,n){return t[0]=e,t[1]=n,t}function X(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t}function Y(t,e,n,i){return t[0]=e[0]+n[0]*i,t[1]=e[1]+n[1]*i,t}function q(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t}function K(t){return Math.sqrt(J(t))}function J(t){return t[0]*t[0]+t[1]*t[1]}function Q(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t}function tt(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t}function et(t,e){return t[0]*e[0]+t[1]*e[1]}function nt(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t}function it(t,e){var n=K(e);return 0===n?(t[0]=0,t[1]=0):(t[0]=e[0]/n,t[1]=e[1]/n),t}function rt(t,e){return Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1]))}function ot(t,e){return(t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1])}function at(t,e){return t[0]=-e[0],t[1]=-e[1],t}function st(t,e,n,i){return t[0]=e[0]+i*(n[0]-e[0]),t[1]=e[1]+i*(n[1]-e[1]),t}function lt(t,e,n){var i=e[0],r=e[1];return t[0]=n[0]*i+n[2]*r+n[4],t[1]=n[1]*i+n[3]*r+n[5],t}function ut(t,e,n){return t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t}function ct(t,e,n){return t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t}function ht(){this.on("mousedown",this._dragStart,this),this.on("mousemove",this._drag,this),this.on("mouseup",this._dragEnd,this),this.on("globalout",this._dragEnd,this)}function ft(t,e){return{target:t,topTarget:e&&e.topTarget}}function dt(t,e){var n=t._$eventProcessor;return null!=e&&n&&n.normalizeQuery&&(e=n.normalizeQuery(e)),e}function pt(t,e,n,i,r,o){var a=t._$handlers;if("function"==typeof n&&(r=i,i=n,n=null),!i||!e)return t;n=dt(t,n),a[e]||(a[e]=[]);for(var s=0;s<a[e].length;s++)if(a[e][s].h===i)return t;var l={h:i,one:o,query:n,ctx:r||t,callAtLast:i.zrEventfulCallAtLast},u=a[e].length-1,c=a[e][u];return c&&c.callAtLast?a[e].splice(u,0,l):a[e].push(l),t}function gt(t,e,n,i,r,o){var a=i+"-"+r,s=t.length;if(o.hasOwnProperty(a))return o[a];if(1===e){var l=Math.round(Math.log((1<<s)-1&~r)/wd);return t[n][l]}for(var u=i|1<<n,c=n+1;i&1<<c;)c++;for(var h=0,f=0,d=0;s>f;f++){var p=1<<f;p&r||(h+=(d%2?-1:1)*t[n][f]*gt(t,e-1,c,u,r|p,o),d++)}return o[a]=h,h}function vt(t,e){var n=[[t[0],t[1],1,0,0,0,-e[0]*t[0],-e[0]*t[1]],[0,0,0,t[0],t[1],1,-e[1]*t[0],-e[1]*t[1]],[t[2],t[3],1,0,0,0,-e[2]*t[2],-e[2]*t[3]],[0,0,0,t[2],t[3],1,-e[3]*t[2],-e[3]*t[3]],[t[4],t[5],1,0,0,0,-e[4]*t[4],-e[4]*t[5]],[0,0,0,t[4],t[5],1,-e[5]*t[4],-e[5]*t[5]],[t[6],t[7],1,0,0,0,-e[6]*t[6],-e[6]*t[7]],[0,0,0,t[6],t[7],1,-e[7]*t[6],-e[7]*t[7]]],i={},r=gt(n,8,0,0,0,i);if(0!==r){for(var o=[],a=0;8>a;a++)for(var s=0;8>s;s++)null==o[s]&&(o[s]=0),o[s]+=((a+s)%2?-1:1)*gt(n,7,0===a?1:0,1<<a,1<<s,i)/r*e[a];return function(t,e,n){var i=e*o[6]+n*o[7]+1;t[0]=(e*o[0]+n*o[1]+o[2])/i,t[1]=(e*o[3]+n*o[4]+o[5])/i}}}function mt(t,e,n,i){return n=n||{},i||!Jf.canvasSupported?yt(t,e,n):Jf.browser.firefox&&null!=e.layerX&&e.layerX!==e.offsetX?(n.zrX=e.layerX,n.zrY=e.layerY):null!=e.offsetX?(n.zrX=e.offsetX,n.zrY=e.offsetY):yt(t,e,n),n}function yt(t,e,n){if(t.getBoundingClientRect&&Jf.domSupported){var i=e.clientX,r=e.clientY;if("CANVAS"===t.nodeName.toUpperCase()){var o=t.getBoundingClientRect();return n.zrX=i-o.left,void(n.zrY=r-o.top)}var a=t[Md]||(t[Md]={}),s=xt(_t(t,a),a);if(s)return s(Id,i,r),n.zrX=Id[0],void(n.zrY=Id[1])}n.zrX=n.zrY=0}function _t(t,e){var n=e.markers;if(n)return n;n=e.markers=[];for(var r=["left","right"],o=["top","bottom"],a=0;4>a;a++){var s=i.createElement("div"),l=s.style,u=a%2,c=(a>>1)%2;l.cssText=["position:absolute","visibility: hidden","padding: 0","margin: 0","border-width: 0","width:0","height:0",r[u]+":0",o[c]+":0",r[1-u]+":auto",o[1-c]+":auto",""].join("!important;"),t.appendChild(s),n.push(s)}return n}function xt(t,e){for(var n=e.transformer,i=e.srcCoords,r=!0,o=[],a=[],s=0;4>s;s++){var l=t[s].getBoundingClientRect(),u=2*s,c=l.left,h=l.top;o.push(c,h),r&=i&&c===i[u]&&h===i[u+1],a.push(t[s].offsetLeft,t[s].offsetTop)}return r?n:(e.srcCoords=o,e.transformer=vt(o,a))}function wt(t,e,i){if(e=e||n.event,null!=e.zrX)return e;var r=e.type,o=r&&r.indexOf("touch")>=0;if(o){var a="touchend"!==r?e.targetTouches[0]:e.changedTouches[0];a&&mt(t,a,e,i)}else mt(t,e,e,i),e.zrDelta=e.wheelDelta?e.wheelDelta/120:-(e.detail||0)/3;var s=e.button;return null==e.which&&void 0!==s&&Sd.test(e.type)&&(e.which=1&s?1:2&s?3:4&s?2:0),e}function bt(t,e,n){bd?t.addEventListener(e,n):t.attachEvent("on"+e,n)}function St(t,e,n){bd?t.removeEventListener(e,n):t.detachEvent("on"+e,n)}function Mt(t){return 2===t.which||3===t.which}function It(t){var e=t[1][0]-t[0][0],n=t[1][1]-t[0][1];return Math.sqrt(e*e+n*n)}function At(t){return[(t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2]}function Tt(t,e,n){return{type:t,event:n,target:e.target,topTarget:e.topTarget,cancelBubble:!1,offsetX:n.zrX,offsetY:n.zrY,gestureEvent:n.gestureEvent,pinchX:n.pinchX,pinchY:n.pinchY,pinchScale:n.pinchScale,wheelDelta:n.zrDelta,zrByTouch:n.zrByTouch,which:n.which,stop:Ct}}function Ct(){Ad(this.event)}function kt(){}function Dt(t,e,n){if(t[t.rectHover?"rectContain":"contain"](e,n)){for(var i,r=t;r;){if(r.clipPath&&!r.clipPath.contain(e,n))return!1;r.silent&&(i=!0),r=r.parent}return!i||kd}return!1}function Ot(){var t=new Pd(6);return Pt(t),t}function Pt(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t}function Lt(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t}function Et(t,e,n){var i=e[0]*n[0]+e[2]*n[1],r=e[1]*n[0]+e[3]*n[1],o=e[0]*n[2]+e[2]*n[3],a=e[1]*n[2]+e[3]*n[3],s=e[0]*n[4]+e[2]*n[5]+e[4],l=e[1]*n[4]+e[3]*n[5]+e[5];return t[0]=i,t[1]=r,t[2]=o,t[3]=a,t[4]=s,t[5]=l,t}function Nt(t,e,n){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4]+n[0],t[5]=e[5]+n[1],t}function Bt(t,e,n){var i=e[0],r=e[2],o=e[4],a=e[1],s=e[3],l=e[5],u=Math.sin(n),c=Math.cos(n);return t[0]=i*c+a*u,t[1]=-i*u+a*c,t[2]=r*c+s*u,t[3]=-r*u+c*s,t[4]=c*o+u*l,t[5]=c*l-u*o,t}function zt(t,e,n){var i=n[0],r=n[1];return t[0]=e[0]*i,t[1]=e[1]*r,t[2]=e[2]*i,t[3]=e[3]*r,t[4]=e[4]*i,t[5]=e[5]*r,t}function Rt(t,e){var n=e[0],i=e[2],r=e[4],o=e[1],a=e[3],s=e[5],l=n*a-o*i;return l?(l=1/l,t[0]=a*l,t[1]=-o*l,t[2]=-i*l,t[3]=n*l,t[4]=(i*s-a*r)*l,t[5]=(o*r-n*s)*l,t):null}function Ft(t){var e=Ot();return Lt(e,t),e}function Vt(t){return t>Nd||-Nd>t}function $t(t){this._target=t.target,this._life=t.life||1e3,this._delay=t.delay||0,this._initialized=!1,this.loop=null!=t.loop&&t.loop,this.gap=t.gap||0,this.easing=t.easing||"Linear",this.onframe=t.onframe,this.ondestroy=t.ondestroy,this.onrestart=t.onrestart,this._pausedTime=0,this._paused=!1}function jt(t){return t=Math.round(t),0>t?0:t>255?255:t}function Ht(t){return t=Math.round(t),0>t?0:t>360?360:t}function Wt(t){return 0>t?0:t>1?1:t}function Gt(t){return jt(t.length&&"%"===t.charAt(t.length-1)?parseFloat(t)/100*255:parseInt(t,10))}function Ut(t){return Wt(t.length&&"%"===t.charAt(t.length-1)?parseFloat(t)/100:parseFloat(t))}function Zt(t,e,n){return 0>n?n+=1:n>1&&(n-=1),1>6*n?t+(e-t)*n*6:1>2*n?e:2>3*n?t+(e-t)*(2/3-n)*6:t}function Xt(t,e,n){return t+(e-t)*n}function Yt(t,e,n,i,r){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t}function qt(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function Kt(t,e){Yd&&qt(Yd,e),Yd=Xd.put(t,Yd||e.slice())}function Jt(t,e){if(t){e=e||[];var n=Xd.get(t);if(n)return qt(e,n);t+="";var i=t.replace(/ /g,"").toLowerCase();if(i in Zd)return qt(e,Zd[i]),Kt(t,e),e;if("#"!==i.charAt(0)){var r=i.indexOf("("),o=i.indexOf(")");if(-1!==r&&o+1===i.length){var a=i.substr(0,r),s=i.substr(r+1,o-(r+1)).split(","),l=1;switch(a){case"rgba":if(4!==s.length)return void Yt(e,0,0,0,1);l=Ut(s.pop());case"rgb":return 3!==s.length?void Yt(e,0,0,0,1):(Yt(e,Gt(s[0]),Gt(s[1]),Gt(s[2]),l),Kt(t,e),e);case"hsla":return 4!==s.length?void Yt(e,0,0,0,1):(s[3]=Ut(s[3]),Qt(s,e),Kt(t,e),e);case"hsl":return 3!==s.length?void Yt(e,0,0,0,1):(Qt(s,e),Kt(t,e),e);default:return}}Yt(e,0,0,0,1)}else{if(4===i.length){var u=parseInt(i.substr(1),16);return u>=0&&4095>=u?(Yt(e,(3840&u)>>4|(3840&u)>>8,240&u|(240&u)>>4,15&u|(15&u)<<4,1),Kt(t,e),e):void Yt(e,0,0,0,1)}if(7===i.length){u=parseInt(i.substr(1),16);return u>=0&&16777215>=u?(Yt(e,(16711680&u)>>16,(65280&u)>>8,255&u,1),Kt(t,e),e):void Yt(e,0,0,0,1)}}}}function Qt(t,e){var n=(parseFloat(t[0])%360+360)%360/360,i=Ut(t[1]),r=Ut(t[2]),o=.5>=r?r*(i+1):r+i-r*i,a=2*r-o;return e=e||[],Yt(e,jt(255*Zt(a,o,n+1/3)),jt(255*Zt(a,o,n)),jt(255*Zt(a,o,n-1/3)),1),4===t.length&&(e[3]=t[3]),e}function te(t){if(t){var e,n,i=t[0]/255,r=t[1]/255,o=t[2]/255,a=Math.min(i,r,o),s=Math.max(i,r,o),l=s-a,u=(s+a)/2;if(0===l)e=0,n=0;else{n=.5>u?l/(s+a):l/(2-s-a);var c=((s-i)/6+l/2)/l,h=((s-r)/6+l/2)/l,f=((s-o)/6+l/2)/l;i===s?e=f-h:r===s?e=1/3+c-f:o===s&&(e=2/3+h-c),0>e&&(e+=1),e>1&&(e-=1)}var d=[360*e,n,u];return null!=t[3]&&d.push(t[3]),d}}function ee(t,e){var n=Jt(t);if(n){for(var i=0;3>i;i++)n[i]=0>e?n[i]*(1-e)|0:(255-n[i])*e+n[i]|0,n[i]>255?n[i]=255:t[i]<0&&(n[i]=0);return se(n,4===n.length?"rgba":"rgb")}}function ne(t){var e=Jt(t);return e?((1<<24)+(e[0]<<16)+(e[1]<<8)+ +e[2]).toString(16).slice(1):void 0}function ie(t,e,n){if(e&&e.length&&t>=0&&1>=t){n=n||[];var i=t*(e.length-1),r=Math.floor(i),o=Math.ceil(i),a=e[r],s=e[o],l=i-r;return n[0]=jt(Xt(a[0],s[0],l)),n[1]=jt(Xt(a[1],s[1],l)),n[2]=jt(Xt(a[2],s[2],l)),n[3]=Wt(Xt(a[3],s[3],l)),n}}function re(t,e,n){if(e&&e.length&&t>=0&&1>=t){var i=t*(e.length-1),r=Math.floor(i),o=Math.ceil(i),a=Jt(e[r]),s=Jt(e[o]),l=i-r,u=se([jt(Xt(a[0],s[0],l)),jt(Xt(a[1],s[1],l)),jt(Xt(a[2],s[2],l)),Wt(Xt(a[3],s[3],l))],"rgba");return n?{color:u,leftIndex:r,rightIndex:o,value:i}:u}}function oe(t,e,n,i){return t=Jt(t),t?(t=te(t),null!=e&&(t[0]=Ht(e)),null!=n&&(t[1]=Ut(n)),null!=i&&(t[2]=Ut(i)),se(Qt(t),"rgba")):void 0}function ae(t,e){return t=Jt(t),t&&null!=e?(t[3]=Wt(e),se(t,"rgba")):void 0}function se(t,e){if(t&&t.length){var n=t[0]+","+t[1]+","+t[2];return("rgba"===e||"hsva"===e||"hsla"===e)&&(n+=","+t[3]),e+"("+n+")"}}function le(t,e){return t[e]}function ue(t,e,n){t[e]=n}function ce(t,e,n){return(e-t)*n+t}function he(t,e,n){return n>.5?e:t}function fe(t,e,n,i,r){var o=t.length;if(1===r)for(var a=0;o>a;a++)i[a]=ce(t[a],e[a],n);else{var s=o&&t[0].length;for(a=0;o>a;a++)for(var l=0;s>l;l++)i[a][l]=ce(t[a][l],e[a][l],n)}}function de(t,e,n){var i=t.length,r=e.length;if(i!==r){var o=i>r;if(o)t.length=r;else for(var a=i;r>a;a++)t.push(1===n?e[a]:Qd.call(e[a]))}var s=t[0]&&t[0].length;for(a=0;a<t.length;a++)if(1===n)isNaN(t[a])&&(t[a]=e[a]);else for(var l=0;s>l;l++)isNaN(t[a][l])&&(t[a][l]=e[a][l])}function pe(t,e,n){if(t===e)return!0;var i=t.length;if(i!==e.length)return!1;if(1===n){for(var r=0;i>r;r++)if(t[r]!==e[r])return!1}else{var o=t[0].length;for(r=0;i>r;r++)for(var a=0;o>a;a++)if(t[r][a]!==e[r][a])return!1}return!0}function ge(t,e,n,i,r,o,a,s,l){var u=t.length;if(1===l)for(var c=0;u>c;c++)s[c]=ve(t[c],e[c],n[c],i[c],r,o,a);else{var h=t[0].length;for(c=0;u>c;c++)for(var f=0;h>f;f++)s[c][f]=ve(t[c][f],e[c][f],n[c][f],i[c][f],r,o,a)}}function ve(t,e,n,i,r,o,a){var s=.5*(n-t),l=.5*(i-e);return(2*(e-n)+s+l)*a+(-3*(e-n)-2*s-l)*o+s*r+e}function me(t){if(g(t)){var e=t.length;if(g(t[0])){for(var n=[],i=0;e>i;i++)n.push(Qd.call(t[i]));return n}return Qd.call(t)}return t}function ye(t){return t[0]=Math.floor(t[0]),t[1]=Math.floor(t[1]),t[2]=Math.floor(t[2]),"rgba("+t.join(",")+")"}function _e(t){var e=t[t.length-1].value;return g(e&&e[0])?2:1}function xe(t,e,n,i,r,o){var a=t._getter,s=t._setter,l="spline"===e,u=i.length;if(u){var c,h=i[0].value,f=g(h),d=!1,p=!1,v=f?_e(i):0;i.sort(function(t,e){return t.time-e.time}),c=i[u-1].time;for(var m=[],y=[],_=i[0].value,x=!0,w=0;u>w;w++){m.push(i[w].time/c);var b=i[w].value;if(f&&pe(b,_,v)||!f&&b===_||(x=!1),_=b,"string"==typeof b){var S=Jt(b);S?(b=S,d=!0):p=!0}y.push(b)}if(o||!x){var M=y[u-1];for(w=0;u-1>w;w++)f?de(y[w],M,v):!isNaN(y[w])||isNaN(M)||p||d||(y[w]=M);f&&de(a(t._target,r),M,v);var I,A,T,C,k,D,O=0,P=0;if(d)var L=[0,0,0,0];var E=function(t,e){var n;if(0>e)n=0;else if(P>e){for(I=Math.min(O+1,u-1),n=I;n>=0&&!(m[n]<=e);n--);n=Math.min(n,u-2)}else{for(n=O;u>n&&!(m[n]>e);n++);n=Math.min(n-1,u-2)}O=n,P=e;var i=m[n+1]-m[n];if(0!==i)if(A=(e-m[n])/i,l)if(C=y[n],T=y[0===n?n:n-1],k=y[n>u-2?u-1:n+1],D=y[n>u-3?u-1:n+2],f)ge(T,C,k,D,A,A*A,A*A*A,a(t,r),v);else{if(d)o=ge(T,C,k,D,A,A*A,A*A*A,L,1),o=ye(L);else{if(p)return he(C,k,A);o=ve(T,C,k,D,A,A*A,A*A*A)}s(t,r,o)}else if(f)fe(y[n],y[n+1],A,a(t,r),v);else{var o;if(d)fe(y[n],y[n+1],A,L,1),o=ye(L);else{if(p)return he(y[n],y[n+1],A);o=ce(y[n],y[n+1],A)}s(t,r,o)}},N=new $t({target:t._target,life:c,loop:t._loop,delay:t._delay,onframe:E,ondestroy:n});return e&&"spline"!==e&&(N.easing=e),N}}}function we(t,e,n,i,r,o,a,s){function l(){c--,c||o&&o()}I(i)?(o=r,r=i,i=0):M(r)?(o=r,r="linear",i=0):M(i)?(o=i,i=0):M(n)?(o=n,n=500):n||(n=500),t.stopAnimation(),be(t,"",t,e,n,i,s);var u=t.animators.slice(),c=u.length;c||o&&o();for(var h=0;h<u.length;h++)u[h].done(l).start(r,a)}function be(t,e,n,i,r,o,a){var s={},l=0;for(var u in i)i.hasOwnProperty(u)&&(null!=n[u]?A(i[u])&&!g(i[u])?be(t,e?e+"."+u:u,n[u],i[u],r,o,a):(a?(s[u]=n[u],Se(t,e,u,i[u])):s[u]=i[u],l++):null==i[u]||a||Se(t,e,u,i[u]));l>0&&t.animate(e,!1).when(null==r?500:r,s).delay(o||0)}function Se(t,e,n,i){if(e){var r={};r[e]={},r[e][n]=i,t.attr(r)}else t.attr(n,i)}function Me(t,e,n,i){0>n&&(t+=n,n=-n),0>i&&(e+=i,i=-i),this.x=t,this.y=e,this.width=n,this.height=i}function Ie(t){for(var e=0;t>=fp;)e|=1&t,t>>=1;return t+e}function Ae(t,e,n,i){var r=e+1;if(r===n)return 1;if(i(t[r++],t[e])<0){for(;n>r&&i(t[r],t[r-1])<0;)r++;Te(t,e,r)}else for(;n>r&&i(t[r],t[r-1])>=0;)r++;return r-e}function Te(t,e,n){for(n--;n>e;){var i=t[e];t[e++]=t[n],t[n--]=i}}function Ce(t,e,n,i,r){for(i===e&&i++;n>i;i++){for(var o,a=t[i],s=e,l=i;l>s;)o=s+l>>>1,r(a,t[o])<0?l=o:s=o+1;var u=i-s;switch(u){case 3:t[s+3]=t[s+2];case 2:t[s+2]=t[s+1];case 1:t[s+1]=t[s];break;default:for(;u>0;)t[s+u]=t[s+u-1],u--}t[s]=a}}function ke(t,e,n,i,r,o){var a=0,s=0,l=1;if(o(t,e[n+r])>0){for(s=i-r;s>l&&o(t,e[n+r+l])>0;)a=l,l=1+(l<<1),0>=l&&(l=s);l>s&&(l=s),a+=r,l+=r}else{for(s=r+1;s>l&&o(t,e[n+r-l])<=0;)a=l,l=1+(l<<1),0>=l&&(l=s);l>s&&(l=s);var u=a;a=r-l,l=r-u}for(a++;l>a;){var c=a+(l-a>>>1);o(t,e[n+c])>0?a=c+1:l=c}return l}function De(t,e,n,i,r,o){var a=0,s=0,l=1;if(o(t,e[n+r])<0){for(s=r+1;s>l&&o(t,e[n+r-l])<0;)a=l,l=1+(l<<1),0>=l&&(l=s);l>s&&(l=s);var u=a;a=r-l,l=r-u}else{for(s=i-r;s>l&&o(t,e[n+r+l])>=0;)a=l,l=1+(l<<1),0>=l&&(l=s);l>s&&(l=s),a+=r,l+=r}for(a++;l>a;){var c=a+(l-a>>>1);o(t,e[n+c])<0?l=c:a=c+1}return l}function Oe(t,e){function n(t,e){l[h]=t,u[h]=e,h+=1}function i(){for(;h>1;){var t=h-2;if(t>=1&&u[t-1]<=u[t]+u[t+1]||t>=2&&u[t-2]<=u[t]+u[t-1])u[t-1]<u[t+1]&&t--;else if(u[t]>u[t+1])break;o(t)}}function r(){for(;h>1;){var t=h-2;t>0&&u[t-1]<u[t+1]&&t--,o(t)}}function o(n){var i=l[n],r=u[n],o=l[n+1],c=u[n+1];u[n]=r+c,n===h-3&&(l[n+1]=l[n+2],u[n+1]=u[n+2]),h--;var f=De(t[o],t,i,r,0,e);i+=f,r-=f,0!==r&&(c=ke(t[i+r-1],t,o,c,c-1,e),0!==c&&(c>=r?a(i,r,o,c):s(i,r,o,c)))}function a(n,i,r,o){var a=0;for(a=0;i>a;a++)f[a]=t[n+a];var s=0,l=r,u=n;if(t[u++]=t[l++],0!==--o){if(1===i){for(a=0;o>a;a++)t[u+a]=t[l+a];return void(t[u+o]=f[s])}for(var h,d,p,g=c;;){h=0,d=0,p=!1;do{if(e(t[l],f[s])<0){if(t[u++]=t[l++],d++,h=0,0===--o){p=!0;break}}else if(t[u++]=f[s++],h++,d=0,1===--i){p=!0;break}}while(g>(h|d));if(p)break;do{if(h=De(t[l],f,s,i,0,e),0!==h){for(a=0;h>a;a++)t[u+a]=f[s+a];if(u+=h,s+=h,i-=h,1>=i){p=!0;break}}if(t[u++]=t[l++],0===--o){p=!0;break}if(d=ke(f[s],t,l,o,0,e),0!==d){for(a=0;d>a;a++)t[u+a]=t[l+a];if(u+=d,l+=d,o-=d,0===o){p=!0;break}}if(t[u++]=f[s++],1===--i){p=!0;break}g--}while(h>=dp||d>=dp);if(p)break;0>g&&(g=0),g+=2}if(c=g,1>c&&(c=1),1===i){for(a=0;o>a;a++)t[u+a]=t[l+a];t[u+o]=f[s]}else{if(0===i)throw new Error;for(a=0;i>a;a++)t[u+a]=f[s+a]}}else for(a=0;i>a;a++)t[u+a]=f[s+a]}function s(n,i,r,o){var a=0;for(a=0;o>a;a++)f[a]=t[r+a];var s=n+i-1,l=o-1,u=r+o-1,h=0,d=0;if(t[u--]=t[s--],0!==--i){if(1===o){for(u-=i,s-=i,d=u+1,h=s+1,a=i-1;a>=0;a--)t[d+a]=t[h+a];return void(t[u]=f[l])}for(var p=c;;){var g=0,v=0,m=!1;do{if(e(f[l],t[s])<0){if(t[u--]=t[s--],g++,v=0,0===--i){m=!0;break}}else if(t[u--]=f[l--],v++,g=0,1===--o){m=!0;break}}while(p>(g|v));if(m)break;do{if(g=i-De(f[l],t,n,i,i-1,e),0!==g){for(u-=g,s-=g,i-=g,d=u+1,h=s+1,a=g-1;a>=0;a--)t[d+a]=t[h+a];if(0===i){m=!0;break}}if(t[u--]=f[l--],1===--o){m=!0;break}if(v=o-ke(t[s],f,0,o,o-1,e),0!==v){for(u-=v,l-=v,o-=v,d=u+1,h=l+1,a=0;v>a;a++)t[d+a]=f[h+a];if(1>=o){m=!0;break}}if(t[u--]=t[s--],0===--i){m=!0;break}p--}while(g>=dp||v>=dp);if(m)break;0>p&&(p=0),p+=2}if(c=p,1>c&&(c=1),1===o){for(u-=i,s-=i,d=u+1,h=s+1,a=i-1;a>=0;a--)t[d+a]=t[h+a];t[u]=f[l]}else{if(0===o)throw new Error;for(h=u-(o-1),a=0;o>a;a++)t[h+a]=f[a]}}else for(h=u-(o-1),a=0;o>a;a++)t[h+a]=f[a]}var l,u,c=dp,h=0,f=[];l=[],u=[],this.mergeRuns=i,this.forceMergeRuns=r,this.pushRun=n}function Pe(t,e,n,i){n||(n=0),i||(i=t.length);var r=i-n;if(!(2>r)){var o=0;if(fp>r)return o=Ae(t,n,i,e),void Ce(t,n,i,n+o,e);var a=new Oe(t,e),s=Ie(r);do{if(o=Ae(t,n,i,e),s>o){var l=r;l>s&&(l=s),Ce(t,n,n+l,n+o,e),o=l}a.pushRun(n,o),a.mergeRuns(),r-=o,n+=o}while(0!==r);a.forceMergeRuns()}}function Le(t,e){return t.zlevel===e.zlevel?t.z===e.z?t.z2-e.z2:t.z-e.z:t.zlevel-e.zlevel}function Ee(t,e,n){var i=null==e.x?0:e.x,r=null==e.x2?1:e.x2,o=null==e.y?0:e.y,a=null==e.y2?0:e.y2;e.global||(i=i*n.width+n.x,r=r*n.width+n.x,o=o*n.height+n.y,a=a*n.height+n.y),i=isNaN(i)?0:i,r=isNaN(r)?1:r,o=isNaN(o)?0:o,a=isNaN(a)?0:a;var s=t.createLinearGradient(i,o,r,a);return s}function Ne(t,e,n){var i=n.width,r=n.height,o=Math.min(i,r),a=null==e.x?.5:e.x,s=null==e.y?.5:e.y,l=null==e.r?.5:e.r;e.global||(a=a*i+n.x,s=s*r+n.y,l*=o);var u=t.createRadialGradient(a,s,0,a,s,l);return u}function Be(){return!1}function ze(t,e,n){var i=ud(),r=e.getWidth(),o=e.getHeight(),a=i.style;return a&&(a.position="absolute",a.left=0,a.top=0,a.width=r+"px",a.height=o+"px",i.setAttribute("data-zr-dom-id",t)),i.width=r*n,i.height=o*n,i}function Re(t){if("string"==typeof t){var e=Tp.get(t);return e&&e.image}return t}function Fe(t,e,n,i,r){if(t){if("string"==typeof t){if(e&&e.__zrImageSrc===t||!n)return e;var o=Tp.get(t),a={hostEl:n,cb:i,cbPayload:r};return o?(e=o.image,!$e(e)&&o.pending.push(a)):(e=new Image,e.onload=e.onerror=Ve,Tp.put(t,e.__cachedImgObj={image:e,pending:[a]}),e.src=e.__zrImageSrc=t),e}return t}return e}function Ve(){var t=this.__cachedImgObj;this.onload=this.onerror=this.__cachedImgObj=null;for(var e=0;e<t.pending.length;e++){var n=t.pending[e],i=n.cb;i&&i(this,n.cbPayload),n.hostEl.dirty()}t.pending.length=0}function $e(t){return t&&t.width&&t.height}function je(t,e){e=e||Pp;var n=t+":"+e;if(Cp[n])return Cp[n];for(var i=(t+"").split("\n"),r=0,o=0,a=i.length;a>o;o++)r=Math.max(tn(i[o],e).width,r);return kp>Dp&&(kp=0,Cp={}),kp++,Cp[n]=r,r}function He(t,e,n,i,r,o,a,s){return a?Ge(t,e,n,i,r,o,a,s):We(t,e,n,i,r,o,s)}function We(t,e,n,i,r,o,a){var s=en(t,e,r,o,a),l=je(t,e);r&&(l+=r[1]+r[3]);var u=s.outerHeight,c=Ue(0,l,n),h=Ze(0,u,i),f=new Me(c,h,l,u);return f.lineHeight=s.lineHeight,f}function Ge(t,e,n,i,r,o,a,s){var l=nn(t,{rich:a,truncate:s,font:e,textAlign:n,textPadding:r,textLineHeight:o}),u=l.outerWidth,c=l.outerHeight,h=Ue(0,u,n),f=Ze(0,c,i);return new Me(h,f,u,c)}function Ue(t,e,n){return"right"===n?t-=e:"center"===n&&(t-=e/2),t}function Ze(t,e,n){return"middle"===n?t-=e/2:"bottom"===n&&(t-=e),t}function Xe(t,e,n){var i=e.textPosition,r=e.textDistance,o=n.x,a=n.y,s=n.height,l=n.width,u=s/2,c="left",h="top";switch(i){case"left":o-=r,a+=u,c="right",h="middle";break;case"right":o+=r+l,a+=u,h="middle";break;case"top":o+=l/2,a-=r,c="center",h="bottom";break;case"bottom":o+=l/2,a+=s+r,c="center";break;case"inside":o+=l/2,a+=u,c="center",h="middle";break;case"insideLeft":o+=r,a+=u,h="middle";break;case"insideRight":o+=l-r,a+=u,c="right",h="middle";break;case"insideTop":o+=l/2,a+=r,c="center";break;case"insideBottom":o+=l/2,a+=s-r,c="center",h="bottom";break;case"insideTopLeft":o+=r,a+=r;break;case"insideTopRight":o+=l-r,a+=r,c="right";break;case"insideBottomLeft":o+=r,a+=s-r,h="bottom";break;case"insideBottomRight":o+=l-r,a+=s-r,c="right",h="bottom"}return t=t||{},t.x=o,t.y=a,t.textAlign=c,t.textVerticalAlign=h,t}function Ye(t,e,n,i,r){if(!e)return"";var o=(t+"").split("\n");r=qe(e,n,i,r);for(var a=0,s=o.length;s>a;a++)o[a]=Ke(o[a],r);return o.join("\n")}function qe(t,e,n,i){i=u({},i),i.font=e;n=P(n,"...");i.maxIterations=P(i.maxIterations,2);var r=i.minChar=P(i.minChar,0);i.cnCharWidth=je("国",e);var o=i.ascCharWidth=je("a",e);i.placeholder=P(i.placeholder,"");for(var a=t=Math.max(0,t-1),s=0;r>s&&a>=o;s++)a-=o;var l=je(n,e);return l>a&&(n="",l=0),a=t-l,i.ellipsis=n,i.ellipsisWidth=l,i.contentWidth=a,i.containerWidth=t,i}function Ke(t,e){var n=e.containerWidth,i=e.font,r=e.contentWidth;if(!n)return"";var o=je(t,i);if(n>=o)return t;for(var a=0;;a++){if(r>=o||a>=e.maxIterations){t+=e.ellipsis;break}var s=0===a?Je(t,r,e.ascCharWidth,e.cnCharWidth):o>0?Math.floor(t.length*r/o):0;t=t.substr(0,s),o=je(t,i)}return""===t&&(t=e.placeholder),t}function Je(t,e,n,i){for(var r=0,o=0,a=t.length;a>o&&e>r;o++){var s=t.charCodeAt(o);r+=s>=0&&127>=s?n:i}return o}function Qe(t){return je("国",t)}function tn(t,e){return Lp.measureText(t,e)}function en(t,e,n,i,r){null!=t&&(t+="");var o=P(i,Qe(e)),a=t?t.split("\n"):[],s=a.length*o,l=s;if(n&&(l+=n[0]+n[2]),t&&r){var u=r.outerHeight,c=r.outerWidth;if(null!=u&&l>u)t="",a=[];else if(null!=c)for(var h=qe(c-(n?n[1]+n[3]:0),e,r.ellipsis,{minChar:r.minChar,placeholder:r.placeholder}),f=0,d=a.length;d>f;f++)a[f]=Ke(a[f],h)}return{lines:a,height:s,outerHeight:l,lineHeight:o}}function nn(t,e){var n={lines:[],width:0,height:0};if(null!=t&&(t+=""),!t)return n;for(var i,r=Op.lastIndex=0;null!=(i=Op.exec(t));){var o=i.index;o>r&&rn(n,t.substring(r,o)),rn(n,i[2],i[1]),r=Op.lastIndex}r<t.length&&rn(n,t.substring(r,t.length));var a=n.lines,s=0,l=0,u=[],c=e.textPadding,h=e.truncate,f=h&&h.outerWidth,d=h&&h.outerHeight;c&&(null!=f&&(f-=c[1]+c[3]),null!=d&&(d-=c[0]+c[2]));for(var p=0;p<a.length;p++){for(var g=a[p],v=0,m=0,y=0;y<g.tokens.length;y++){var _=g.tokens[y],x=_.styleName&&e.rich[_.styleName]||{},w=_.textPadding=x.textPadding,b=_.font=x.font||e.font,S=_.textHeight=P(x.textHeight,Qe(b));if(w&&(S+=w[0]+w[2]),_.height=S,_.lineHeight=L(x.textLineHeight,e.textLineHeight,S),_.textAlign=x&&x.textAlign||e.textAlign,_.textVerticalAlign=x&&x.textVerticalAlign||"middle",null!=d&&s+_.lineHeight>d)return{lines:[],width:0,height:0};_.textWidth=je(_.text,b);var M=x.textWidth,I=null==M||"auto"===M;if("string"==typeof M&&"%"===M.charAt(M.length-1))_.percentWidth=M,u.push(_),M=0;else{if(I){M=_.textWidth;var A=x.textBackgroundColor,T=A&&A.image;T&&(T=Re(T),$e(T)&&(M=Math.max(M,T.width*S/T.height)))}var C=w?w[1]+w[3]:0;M+=C;var k=null!=f?f-m:null;null!=k&&M>k&&(!I||C>k?(_.text="",_.textWidth=M=0):(_.text=Ye(_.text,k-C,b,h.ellipsis,{minChar:h.minChar}),_.textWidth=je(_.text,b),M=_.textWidth+C))}m+=_.width=M,x&&(v=Math.max(v,_.lineHeight))}g.width=m,g.lineHeight=v,s+=v,l=Math.max(l,m)}n.outerWidth=n.width=P(e.textWidth,l),n.outerHeight=n.height=P(e.textHeight,s),c&&(n.outerWidth+=c[1]+c[3],n.outerHeight+=c[0]+c[2]);for(p=0;p<u.length;p++){_=u[p];var D=_.percentWidth;_.width=parseInt(D,10)/100*l}return n}function rn(t,e,n){for(var i=""===e,r=e.split("\n"),o=t.lines,a=0;a<r.length;a++){var s=r[a],l={styleName:n,text:s,isLineHolder:!s&&!i};if(a)o.push({tokens:[l]});else{var u=(o[o.length-1]||(o[0]={tokens:[]})).tokens,c=u.length;1===c&&u[0].isLineHolder?u[0]=l:(s||!c||i)&&u.push(l)}}}function on(t){var e=(t.fontSize||t.fontFamily)&&[t.fontStyle,t.fontWeight,(t.fontSize||12)+"px",t.fontFamily||"sans-serif"].join(" ");return e&&z(e)||t.textFont||t.font}function an(t,e){var n,i,r,o,a,s=e.x,l=e.y,u=e.width,c=e.height,h=e.r;0>u&&(s+=u,u=-u),0>c&&(l+=c,c=-c),"number"==typeof h?n=i=r=o=h:h instanceof Array?1===h.length?n=i=r=o=h[0]:2===h.length?(n=r=h[0],i=o=h[1]):3===h.length?(n=h[0],i=o=h[1],r=h[2]):(n=h[0],i=h[1],r=h[2],o=h[3]):n=i=r=o=0,n+i>u&&(a=n+i,n*=u/a,i*=u/a),r+o>u&&(a=r+o,r*=u/a,o*=u/a),i+r>c&&(a=i+r,i*=c/a,r*=c/a),n+o>c&&(a=n+o,n*=c/a,o*=c/a),t.moveTo(s+n,l),t.lineTo(s+u-i,l),0!==i&&t.arc(s+u-i,l+i,i,-Math.PI/2,0),t.lineTo(s+u,l+c-r),0!==r&&t.arc(s+u-r,l+c-r,r,0,Math.PI/2),t.lineTo(s+o,l+c),0!==o&&t.arc(s+o,l+c-o,o,Math.PI/2,Math.PI),t.lineTo(s,l+n),0!==n&&t.arc(s+n,l+n,n,Math.PI,1.5*Math.PI)}function sn(t){return ln(t),v(t.rich,ln),t}function ln(t){if(t){t.font=on(t);var e=t.textAlign;"middle"===e&&(e="center"),t.textAlign=null==e||Np[e]?e:"left";var n=t.textVerticalAlign||t.textBaseline;"center"===n&&(n="middle"),t.textVerticalAlign=null==n||Bp[n]?n:"top";var i=t.textPadding;i&&(t.textPadding=N(t.textPadding))}}function un(t,e,n,i,r,o){i.rich?hn(t,e,n,i,r,o):cn(t,e,n,i,r,o)}function cn(t,e,n,i,r,o){var a,s=gn(i),l=!1,u=e.__attrCachedBy===mp.PLAIN_TEXT;o!==yp?(o&&(a=o.style,l=!s&&u&&a),e.__attrCachedBy=s?mp.NONE:mp.PLAIN_TEXT):u&&(e.__attrCachedBy=mp.NONE);var c=i.font||Ep;l&&c===(a.font||Ep)||(e.font=c);var h=t.__computedFont;t.__styleFont!==c&&(t.__styleFont=c,h=t.__computedFont=e.font);var f=i.textPadding,d=i.textLineHeight,p=t.__textCotentBlock;(!p||t.__dirtyText)&&(p=t.__textCotentBlock=en(n,h,f,d,i.truncate));var g=p.outerHeight,v=p.lines,m=p.lineHeight,y=yn(Fp,t,i,r),_=y.baseX,x=y.baseY,w=y.textAlign||"left",b=y.textVerticalAlign;dn(e,i,r,_,x);var S=Ze(x,g,b),M=_,I=S;if(s||f){var A=je(n,h),T=A;f&&(T+=f[1]+f[3]);var C=Ue(_,T,w);s&&vn(t,e,i,C,S,T,g),f&&(M=Sn(_,w,f),I+=f[0])}e.textAlign=w,e.textBaseline="middle",e.globalAlpha=i.opacity||1;for(var k=0;k<zp.length;k++){var D=zp[k],O=D[0],P=D[1],L=i[O];l&&L===a[O]||(e[P]=vp(e,P,L||D[2]))}I+=m/2;var E=i.textStrokeWidth,N=l?a.textStrokeWidth:null,B=!l||E!==N,z=!l||B||i.textStroke!==a.textStroke,R=xn(i.textStroke,E),F=wn(i.textFill);if(R&&(B&&(e.lineWidth=E),z&&(e.strokeStyle=R)),F&&(l&&i.textFill===a.textFill||(e.fillStyle=F)),1===v.length)R&&e.strokeText(v[0],M,I),F&&e.fillText(v[0],M,I);else for(k=0;k<v.length;k++)R&&e.strokeText(v[k],M,I),F&&e.fillText(v[k],M,I),I+=m}function hn(t,e,n,i,r,o){o!==yp&&(e.__attrCachedBy=mp.NONE);var a=t.__textCotentBlock;(!a||t.__dirtyText)&&(a=t.__textCotentBlock=nn(n,i)),fn(t,e,a,i,r)}function fn(t,e,n,i,r){var o=n.width,a=n.outerWidth,s=n.outerHeight,l=i.textPadding,u=yn(Fp,t,i,r),c=u.baseX,h=u.baseY,f=u.textAlign,d=u.textVerticalAlign;dn(e,i,r,c,h);var p=Ue(c,a,f),g=Ze(h,s,d),v=p,m=g;l&&(v+=l[3],m+=l[0]);var y=v+o;gn(i)&&vn(t,e,i,p,g,a,s);for(var _=0;_<n.lines.length;_++){for(var x,w=n.lines[_],b=w.tokens,S=b.length,M=w.lineHeight,I=w.width,A=0,T=v,C=y,k=S-1;S>A&&(x=b[A],!x.textAlign||"left"===x.textAlign);)pn(t,e,x,i,M,m,T,"left"),I-=x.width,T+=x.width,A++;for(;k>=0&&(x=b[k],"right"===x.textAlign);)pn(t,e,x,i,M,m,C,"right"),I-=x.width,C-=x.width,k--;for(T+=(o-(T-v)-(y-C)-I)/2;k>=A;)x=b[A],pn(t,e,x,i,M,m,T+x.width/2,"center"),T+=x.width,A++;m+=M}}function dn(t,e,n,i,r){if(n&&e.textRotation){var o=e.textOrigin;"center"===o?(i=n.width/2+n.x,r=n.height/2+n.y):o&&(i=o[0]+n.x,r=o[1]+n.y),t.translate(i,r),t.rotate(-e.textRotation),t.translate(-i,-r)}}function pn(t,e,n,i,r,o,a,s){var l=i.rich[n.styleName]||{};l.text=n.text;var u=n.textVerticalAlign,c=o+r/2;"top"===u?c=o+n.height/2:"bottom"===u&&(c=o+r-n.height/2),!n.isLineHolder&&gn(l)&&vn(t,e,l,"right"===s?a-n.width:"center"===s?a-n.width/2:a,c-n.height/2,n.width,n.height);var h=n.textPadding;h&&(a=Sn(a,s,h),c-=n.height/2-h[2]-n.textHeight/2),_n(e,"shadowBlur",L(l.textShadowBlur,i.textShadowBlur,0)),_n(e,"shadowColor",l.textShadowColor||i.textShadowColor||"transparent"),_n(e,"shadowOffsetX",L(l.textShadowOffsetX,i.textShadowOffsetX,0)),_n(e,"shadowOffsetY",L(l.textShadowOffsetY,i.textShadowOffsetY,0)),_n(e,"textAlign",s),_n(e,"textBaseline","middle"),_n(e,"font",n.font||Ep);var f=xn(l.textStroke||i.textStroke,p),d=wn(l.textFill||i.textFill),p=P(l.textStrokeWidth,i.textStrokeWidth);f&&(_n(e,"lineWidth",p),_n(e,"strokeStyle",f),e.strokeText(n.text,a,c)),d&&(_n(e,"fillStyle",d),e.fillText(n.text,a,c))}function gn(t){return!!(t.textBackgroundColor||t.textBorderWidth&&t.textBorderColor)}function vn(t,e,n,i,r,o,a){var s=n.textBackgroundColor,l=n.textBorderWidth,u=n.textBorderColor,c=I(s);if(_n(e,"shadowBlur",n.textBoxShadowBlur||0),_n(e,"shadowColor",n.textBoxShadowColor||"transparent"),_n(e,"shadowOffsetX",n.textBoxShadowOffsetX||0),_n(e,"shadowOffsetY",n.textBoxShadowOffsetY||0),c||l&&u){e.beginPath();var h=n.textBorderRadius;h?an(e,{x:i,y:r,width:o,height:a,r:h}):e.rect(i,r,o,a),e.closePath()}if(c)if(_n(e,"fillStyle",s),null!=n.fillOpacity){var f=e.globalAlpha;e.globalAlpha=n.fillOpacity*n.opacity,e.fill(),e.globalAlpha=f}else e.fill();else if(A(s)){var d=s.image;d=Fe(d,null,t,mn,s),d&&$e(d)&&e.drawImage(d,i,r,o,a)}if(l&&u)if(_n(e,"lineWidth",l),_n(e,"strokeStyle",u),null!=n.strokeOpacity){f=e.globalAlpha;e.globalAlpha=n.strokeOpacity*n.opacity,e.stroke(),e.globalAlpha=f}else e.stroke()}function mn(t,e){e.image=t}function yn(t,e,n,i){var r=n.x||0,o=n.y||0,a=n.textAlign,s=n.textVerticalAlign;if(i){var l=n.textPosition;if(l instanceof Array)r=i.x+bn(l[0],i.width),o=i.y+bn(l[1],i.height);else{var u=e&&e.calculateTextPosition?e.calculateTextPosition(Rp,n,i):Xe(Rp,n,i);r=u.x,o=u.y,a=a||u.textAlign,s=s||u.textVerticalAlign}var c=n.textOffset;c&&(r+=c[0],o+=c[1])}return t=t||{},t.baseX=r,t.baseY=o,t.textAlign=a,t.textVerticalAlign=s,t}function _n(t,e,n){return t[e]=vp(t,e,n),t[e]}function xn(t,e){return null==t||0>=e||"transparent"===t||"none"===t?null:t.image||t.colorStops?"#000":t}function wn(t){return null==t||"none"===t?null:t.image||t.colorStops?"#000":t}function bn(t,e){return"string"==typeof t?t.lastIndexOf("%")>=0?parseFloat(t)/100*e:parseFloat(t):t}function Sn(t,e,n){return"right"===e?t-n[1]:"center"===e?t+n[3]/2-n[1]/2:t+n[3]}function Mn(t,e){return null!=t&&(t||e.textBackgroundColor||e.textBorderWidth&&e.textBorderColor||e.textPadding)}function In(t){for(var e in t=t||{},sp.call(this,t),t)t.hasOwnProperty(e)&&"style"!==e&&(this[e]=t[e]);this.style=new xp(t.style,this),this._rect=null,this.__clipPaths=null}function An(t){In.call(this,t)}function Tn(t){return parseInt(t,10)}function Cn(t){return!!t&&(!!t.__builtin__||"function"==typeof t.resize&&"function"==typeof t.refresh)}function kn(t,e,n){return Up.copy(t.getBoundingRect()),t.transform&&Up.applyTransform(t.transform),Zp.width=e,Zp.height=n,!Up.intersect(Zp)}function Dn(t,e){if(t===e)return!1;if(!t||!e||t.length!==e.length)return!0;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!0;return!1}function On(t,e){for(var n=0;n<t.length;n++){var i=t[n];i.setTransform(e),e.beginPath(),i.buildPath(e,i.shape),e.clip(),i.restoreTransform(e)}}function Pn(t,e){var n=i.createElement("div");return n.style.cssText=["position:relative","overflow:hidden","width:"+t+"px","height:"+e+"px","padding:0","margin:0","border-width:0"].join(";")+";",n}function Ln(t){return"mousewheel"===t&&Jf.browser.firefox?"DOMMouseScroll":t}function En(t){t._touching=!0,clearTimeout(t._touchTimer),t._touchTimer=setTimeout(function(){t._touching=!1},700)}function Nn(t){var e=t.pointerType;return"pen"===e||"touch"===e}function Bn(t){function e(t,e){return function(){return e._touching?void 0:t.apply(e,arguments)}}v(Jp,function(e){t._handlers[e]=w(eg[e],t)}),v(tg,function(e){t._handlers[e]=w(eg[e],t)}),v(Kp,function(n){t._handlers[n]=e(eg[n],t)})}function zn(t){function e(e,n){v(e,function(e){bt(t,Ln(e),n._handlers[e])},n)}xd.call(this),this.dom=t,this._touching=!1,this._touchTimer,this._handlers={},Bn(this),Jf.pointerEventsSupported?e(tg,this):(Jf.touchEventsSupported&&e(Jp,this),e(Kp,this))}function Rn(t,e){var n=new sg(qf(),t,e);return og[n.id]=n,n}function Fn(t){if(t)t.dispose();else{for(var e in og)og.hasOwnProperty(e)&&og[e].dispose();og={}}return this}function Vn(t){return og[t]}function $n(t,e){rg[t]=e}function jn(t){delete og[t]}function Hn(t){return t instanceof Array?t:null==t?[]:[t]}function Wn(t,e,n){if(t){t[e]=t[e]||{},t.emphasis=t.emphasis||{},t.emphasis[e]=t.emphasis[e]||{};for(var i=0,r=n.length;r>i;i++){var o=n[i];!t.emphasis[e].hasOwnProperty(o)&&t[e].hasOwnProperty(o)&&(t.emphasis[e][o]=t[e][o])}}}function Gn(t){return!cg(t)||hg(t)||t instanceof Date?t:t.value}function Un(t){return cg(t)&&!(t instanceof Array)}function Zn(t,e){e=(e||[]).slice();var n=m(t||[],function(t){return{exist:t}});return ug(e,function(t,i){if(cg(t)){for(var r=0;r<n.length;r++)if(!n[r].option&&null!=t.id&&n[r].exist.id===t.id+"")return n[r].option=t,void(e[i]=null);for(r=0;r<n.length;r++){var o=n[r].exist;if(!(n[r].option||null!=o.id&&null!=t.id||null==t.name||qn(t)||qn(o)||o.name!==t.name+""))return n[r].option=t,void(e[i]=null)}}}),ug(e,function(t){if(cg(t)){for(var e=0;e<n.length;e++){var i=n[e].exist;if(!n[e].option&&!qn(i)&&null==t.id){n[e].option=t;break}}e>=n.length&&n.push({option:t})}}),n}function Xn(t){var e=$();ug(t,function(t){var n=t.exist;n&&e.set(n.id,t)}),ug(t,function(t){var n=t.option;B(!n||null==n.id||!e.get(n.id)||e.get(n.id)===t,"id duplicates: "+(n&&n.id)),n&&null!=n.id&&e.set(n.id,t),!t.keyInfo&&(t.keyInfo={})}),ug(t,function(t,n){var i=t.exist,r=t.option,o=t.keyInfo;if(cg(r)){if(o.name=null!=r.name?r.name+"":i?i.name:fg+n,i)o.id=i.id;else if(null!=r.id)o.id=r.id+"";else{var a=0;do{o.id="\0"+o.name+"\0"+a++}while(e.get(o.id))}e.set(o.id,t)}})}function Yn(t){var e=t.name;return!(!e||!e.indexOf(fg))}function qn(t){return cg(t)&&t.id&&0===(t.id+"").indexOf("\0_ec_\0")}function Kn(t,e){return null!=e.dataIndexInside?e.dataIndexInside:null!=e.dataIndex?S(e.dataIndex)?m(e.dataIndex,function(e){return t.indexOfRawIndex(e)}):t.indexOfRawIndex(e.dataIndex):null!=e.name?S(e.name)?m(e.name,function(e){return t.indexOfName(e)}):t.indexOfName(e.name):void 0}function Jn(){var t="__\0ec_inner_"+pg+++"_"+Math.random().toFixed(5);return function(e){return e[t]||(e[t]={})}}function Qn(t,e,n){if(I(e)){var i={};i[e+"Index"]=0,e=i}var r=n&&n.defaultMainType;!r||ti(e,r+"Index")||ti(e,r+"Id")||ti(e,r+"Name")||(e[r+"Index"]=0);var o={};return ug(e,function(i,r){i=e[r];if("dataIndex"!==r&&"dataIndexInside"!==r){var a=r.match(/^(\w+)(Index|Id|Name)$/)||[],s=a[1],l=(a[2]||"").toLowerCase();if(!(!s||!l||null==i||"index"===l&&"none"===i||n&&n.includeMainTypes&&f(n.includeMainTypes,s)<0)){var u={mainType:s};("index"!==l||"all"!==i)&&(u[l]=i);var c=t.queryComponents(u);o[s+"Models"]=c,o[s+"Model"]=c[0]}}else o[r]=i}),o}function ti(t,e){return t&&t.hasOwnProperty(e)}function ei(t,e,n){t.setAttribute?t.setAttribute(e,n):t[e]=n}function ni(t,e){return t.getAttribute?t.getAttribute(e):t[e]}function ii(t){return"auto"===t?Jf.domSupported?"html":"richText":t||"html"}function ri(t){var e={main:"",sub:""};return t&&(t=t.split(gg),e.main=t[0]||"",e.sub=t[1]||""),e}function oi(t){B(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t),'componentType "'+t+'" illegal')}function ai(t){t.$constructor=t,t.extend=function(t){var e=this,n=function(){t.$constructor?t.$constructor.apply(this,arguments):e.apply(this,arguments)};return u(n.prototype,t),n.extend=this.extend,n.superCall=li,n.superApply=ui,d(n,this),n.superClass=e,n}}function si(t){var e=["__\0is_clz",mg++,Math.random().toFixed(3)].join("_");t.prototype[e]=!0,t.isInstance=function(t){return!(!t||!t[e])}}function li(t,e){var n=E(arguments,2);return this.superClass.prototype[e].apply(t,n)}function ui(t,e,n){return this.superClass.prototype[e].apply(t,n)}function ci(t,e){function n(t){var e=i[t.main];return e&&e[vg]||(e=i[t.main]={},e[vg]=!0),e}e=e||{};var i={};if(t.registerClass=function(t,e){if(e)if(oi(e),e=ri(e),e.sub){if(e.sub!==vg){var r=n(e);r[e.sub]=t}}else i[e.main]=t;return t},t.getClass=function(t,e,n){var r=i[t];if(r&&r[vg]&&(r=e?r[e]:null),n&&!r)throw new Error(e?"Component "+t+"."+(e||"")+" not exists. Load it first.":t+".type should be specified.");return r},t.getClassesByMainType=function(t){t=ri(t);var e=[],n=i[t.main];return n&&n[vg]?v(n,function(t,n){n!==vg&&e.push(t)}):e.push(n),e},t.hasClass=function(t){return t=ri(t),!!i[t.main]},t.getAllClassMainTypes=function(){var t=[];return v(i,function(e,n){t.push(n)}),t},t.hasSubTypes=function(t){t=ri(t);var e=i[t.main];return e&&e[vg]},t.parseClassType=ri,e.registerWhenExtend){var r=t.extend;r&&(t.extend=function(e){var n=r.call(this,e);return t.registerClass(n,e.type)})}return t}function hi(t){return t>-Ig&&Ig>t}function fi(t){return t>Ig||-Ig>t}function di(t,e,n,i,r){var o=1-r;return o*o*(o*t+3*r*e)+r*r*(r*i+3*o*n)}function pi(t,e,n,i,r){var o=1-r;return 3*(((e-t)*o+2*(n-e)*r)*o+(i-n)*r*r)}function gi(t,e,n,i,r,o){var a=i+3*(e-n)-t,s=3*(n-2*e+t),l=3*(e-t),u=t-r,c=s*s-3*a*l,h=s*l-9*a*u,f=l*l-3*s*u,d=0;if(hi(c)&&hi(h))if(hi(s))o[0]=0;else{var p=-l/s;p>=0&&1>=p&&(o[d++]=p)}else{var g=h*h-4*c*f;if(hi(g)){var v=h/c,m=(p=-s/a+v,-v/2);p>=0&&1>=p&&(o[d++]=p),m>=0&&1>=m&&(o[d++]=m)}else if(g>0){var y=Mg(g),_=c*s+1.5*a*(-h+y),x=c*s+1.5*a*(-h-y);_=0>_?-Sg(-_,Cg):Sg(_,Cg),x=0>x?-Sg(-x,Cg):Sg(x,Cg);p=(-s-(_+x))/(3*a);p>=0&&1>=p&&(o[d++]=p)}else{var w=(2*c*s-3*a*h)/(2*Mg(c*c*c)),b=Math.acos(w)/3,S=Mg(c),M=Math.cos(b),I=(p=(-s-2*S*M)/(3*a),m=(-s+S*(M+Tg*Math.sin(b)))/(3*a),(-s+S*(M-Tg*Math.sin(b)))/(3*a));p>=0&&1>=p&&(o[d++]=p),m>=0&&1>=m&&(o[d++]=m),I>=0&&1>=I&&(o[d++]=I)}}return d}function vi(t,e,n,i,r){var o=6*n-12*e+6*t,a=9*e+3*i-3*t-9*n,s=3*e-3*t,l=0;if(hi(a)){if(fi(o)){var u=-s/o;u>=0&&1>=u&&(r[l++]=u)}}else{var c=o*o-4*a*s;if(hi(c))r[0]=-o/(2*a);else if(c>0){var h=Mg(c),f=(u=(-o+h)/(2*a),(-o-h)/(2*a));u>=0&&1>=u&&(r[l++]=u),f>=0&&1>=f&&(r[l++]=f)}}return l}function mi(t,e,n,i,r,o){var a=(e-t)*r+t,s=(n-e)*r+e,l=(i-n)*r+n,u=(s-a)*r+a,c=(l-s)*r+s,h=(c-u)*r+u;o[0]=t,o[1]=a,o[2]=u,o[3]=h,o[4]=h,o[5]=c,o[6]=l,o[7]=i}function yi(t,e,n,i,r,o,a,s,l,u,c){var h,f,d,p,g,v=.005,m=1/0;kg[0]=l,kg[1]=u;for(var y=0;1>y;y+=.05)Dg[0]=di(t,n,r,a,y),Dg[1]=di(e,i,o,s,y),p=md(kg,Dg),m>p&&(h=y,m=p);m=1/0;for(var _=0;32>_&&!(Ag>v);_++)f=h-v,d=h+v,Dg[0]=di(t,n,r,a,f),Dg[1]=di(e,i,o,s,f),p=md(Dg,kg),f>=0&&m>p?(h=f,m=p):(Og[0]=di(t,n,r,a,d),Og[1]=di(e,i,o,s,d),g=md(Og,kg),1>=d&&m>g?(h=d,m=g):v*=.5);return c&&(c[0]=di(t,n,r,a,h),c[1]=di(e,i,o,s,h)),Mg(m)}function _i(t,e,n,i){var r=1-i;return r*(r*t+2*i*e)+i*i*n}function xi(t,e,n,i){return 2*((1-i)*(e-t)+i*(n-e))}function wi(t,e,n,i,r){var o=t-2*e+n,a=2*(e-t),s=t-i,l=0;if(hi(o)){if(fi(a)){var u=-s/a;u>=0&&1>=u&&(r[l++]=u)}}else{var c=a*a-4*o*s;if(hi(c)){u=-a/(2*o);u>=0&&1>=u&&(r[l++]=u)}else if(c>0){var h=Mg(c),f=(u=(-a+h)/(2*o),(-a-h)/(2*o));u>=0&&1>=u&&(r[l++]=u),f>=0&&1>=f&&(r[l++]=f)}}return l}function bi(t,e,n){var i=t+n-2*e;return 0===i?.5:(t-e)/i}function Si(t,e,n,i,r){var o=(e-t)*i+t,a=(n-e)*i+e,s=(a-o)*i+o;r[0]=t,r[1]=o,r[2]=s,r[3]=s,r[4]=a,r[5]=n}function Mi(t,e,n,i,r,o,a,s,l){var u,c=.005,h=1/0;kg[0]=a,kg[1]=s;for(var f=0;1>f;f+=.05){Dg[0]=_i(t,n,r,f),Dg[1]=_i(e,i,o,f);var d=md(kg,Dg);h>d&&(u=f,h=d)}h=1/0;for(var p=0;32>p&&!(Ag>c);p++){var g=u-c,v=u+c;Dg[0]=_i(t,n,r,g),Dg[1]=_i(e,i,o,g);d=md(Dg,kg);if(g>=0&&h>d)u=g,h=d;else{Og[0]=_i(t,n,r,v),Og[1]=_i(e,i,o,v);var m=md(Og,kg);1>=v&&h>m?(u=v,h=m):c*=.5}}return l&&(l[0]=_i(t,n,r,u),l[1]=_i(e,i,o,u)),Mg(h)}function Ii(t,e,n){if(0!==t.length){var i,r=t[0],o=r[0],a=r[0],s=r[1],l=r[1];for(i=1;i<t.length;i++)r=t[i],o=Pg(o,r[0]),a=Lg(a,r[0]),s=Pg(s,r[1]),l=Lg(l,r[1]);e[0]=o,e[1]=s,n[0]=a,n[1]=l}}function Ai(t,e,n,i,r,o){r[0]=Pg(t,n),r[1]=Pg(e,i),o[0]=Lg(t,n),o[1]=Lg(e,i)}function Ti(t,e,n,i,r,o,a,s,l,u){var c,h=vi,f=di,d=h(t,n,r,a,Vg);for(l[0]=1/0,l[1]=1/0,u[0]=-1/0,u[1]=-1/0,c=0;d>c;c++){var p=f(t,n,r,a,Vg[c]);l[0]=Pg(p,l[0]),u[0]=Lg(p,u[0])}for(d=h(e,i,o,s,$g),c=0;d>c;c++){var g=f(e,i,o,s,$g[c]);l[1]=Pg(g,l[1]),u[1]=Lg(g,u[1])}l[0]=Pg(t,l[0]),u[0]=Lg(t,u[0]),l[0]=Pg(a,l[0]),u[0]=Lg(a,u[0]),l[1]=Pg(e,l[1]),u[1]=Lg(e,u[1]),l[1]=Pg(s,l[1]),u[1]=Lg(s,u[1])}function Ci(t,e,n,i,r,o,a,s){var l=bi,u=_i,c=Lg(Pg(l(t,n,r),1),0),h=Lg(Pg(l(e,i,o),1),0),f=u(t,n,r,c),d=u(e,i,o,h);a[0]=Pg(t,r,f),a[1]=Pg(e,o,d),s[0]=Lg(t,r,f),s[1]=Lg(e,o,d)}function ki(t,e,n,i,r,o,a,s,l){var u=ut,c=ct,h=Math.abs(r-o);if(1e-4>h%Bg&&h>1e-4)return s[0]=t-n,s[1]=e-i,l[0]=t+n,void(l[1]=e+i);if(zg[0]=Ng(r)*n+t,zg[1]=Eg(r)*i+e,Rg[0]=Ng(o)*n+t,Rg[1]=Eg(o)*i+e,u(s,zg,Rg),c(l,zg,Rg),r%=Bg,0>r&&(r+=Bg),o%=Bg,0>o&&(o+=Bg),r>o&&!a?o+=Bg:o>r&&a&&(r+=Bg),a){var f=o;o=r,r=f}for(var d=0;o>d;d+=Math.PI/2)d>r&&(Fg[0]=Ng(d)*n+t,Fg[1]=Eg(d)*i+e,u(s,Fg,s),c(l,Fg,l))}function Di(t,e,n,i,r,o,a){if(0===r)return!1;var s=r,l=0,u=t;if(a>e+s&&a>i+s||e-s>a&&i-s>a||o>t+s&&o>n+s||t-s>o&&n-s>o)return!1;if(t===n)return Math.abs(o-t)<=s/2;l=(e-i)/(t-n),u=(t*i-n*e)/(t-n);var c=l*o-a+u,h=c*c/(l*l+1);return s/2*s/2>=h}function Oi(t,e,n,i,r,o,a,s,l,u,c){if(0===l)return!1;var h=l;if(c>e+h&&c>i+h&&c>o+h&&c>s+h||e-h>c&&i-h>c&&o-h>c&&s-h>c||u>t+h&&u>n+h&&u>r+h&&u>a+h||t-h>u&&n-h>u&&r-h>u&&a-h>u)return!1;var f=yi(t,e,n,i,r,o,a,s,u,c,null);return h/2>=f}function Pi(t,e,n,i,r,o,a,s,l){if(0===a)return!1;var u=a;if(l>e+u&&l>i+u&&l>o+u||e-u>l&&i-u>l&&o-u>l||s>t+u&&s>n+u&&s>r+u||t-u>s&&n-u>s&&r-u>s)return!1;var c=Mi(t,e,n,i,r,o,s,l,null);return u/2>=c}function Li(t){return t%=ev,0>t&&(t+=ev),t}function Ei(t,e,n,i,r,o,a,s,l){if(0===a)return!1;var u=a;s-=t,l-=e;var c=Math.sqrt(s*s+l*l);if(c-u>n||n>c+u)return!1;if(Math.abs(i-r)%nv<1e-4)return!0;if(o){var h=i;i=Li(r),r=Li(h)}else i=Li(i),r=Li(r);i>r&&(r+=nv);var f=Math.atan2(l,s);return 0>f&&(f+=nv),f>=i&&r>=f||f+nv>=i&&r>=f+nv}function Ni(t,e,n,i,r,o){if(o>e&&o>i||e>o&&i>o)return 0;if(i===e)return 0;var a=e>i?1:-1,s=(o-e)/(i-e);(1===s||0===s)&&(a=e>i?.5:-.5);var l=s*(n-t)+t;return l===r?1/0:l>r?a:0}function Bi(t,e){return Math.abs(t-e)<ov}function zi(){var t=sv[0];sv[0]=sv[1],sv[1]=t}function Ri(t,e,n,i,r,o,a,s,l,u){if(u>e&&u>i&&u>o&&u>s||e>u&&i>u&&o>u&&s>u)return 0;var c=gi(e,i,o,s,u,av);if(0===c)return 0;for(var h,f,d=0,p=-1,g=0;c>g;g++){var v=av[g],m=0===v||1===v?.5:1,y=di(t,n,r,a,v);l>y||(0>p&&(p=vi(e,i,o,s,sv),sv[1]<sv[0]&&p>1&&zi(),h=di(e,i,o,s,sv[0]),p>1&&(f=di(e,i,o,s,sv[1]))),d+=2===p?v<sv[0]?e>h?m:-m:v<sv[1]?h>f?m:-m:f>s?m:-m:v<sv[0]?e>h?m:-m:h>s?m:-m)}return d}function Fi(t,e,n,i,r,o,a,s){if(s>e&&s>i&&s>o||e>s&&i>s&&o>s)return 0;var l=wi(e,i,o,s,av);if(0===l)return 0;var u=bi(e,i,o);if(u>=0&&1>=u){for(var c=0,h=_i(e,i,o,u),f=0;l>f;f++){var d=0===av[f]||1===av[f]?.5:1,p=_i(t,n,r,av[f]);a>p||(c+=av[f]<u?e>h?d:-d:h>o?d:-d)}return c}d=0===av[0]||1===av[0]?.5:1,p=_i(t,n,r,av[0]);return a>p?0:e>o?d:-d}function Vi(t,e,n,i,r,o,a,s){if(s-=e,s>n||-n>s)return 0;var l=Math.sqrt(n*n-s*s);av[0]=-l,av[1]=l;var u=Math.abs(i-r);if(1e-4>u)return 0;if(1e-4>u%rv){i=0,r=rv;var c=o?1:-1;return a>=av[0]+t&&a<=av[1]+t?c:0}if(o){l=i;i=Li(r),r=Li(l)}else i=Li(i),r=Li(r);i>r&&(r+=rv);for(var h=0,f=0;2>f;f++){var d=av[f];if(d+t>a){var p=Math.atan2(s,d);c=o?1:-1;0>p&&(p=rv+p),(p>=i&&r>=p||p+rv>=i&&r>=p+rv)&&(p>Math.PI/2&&p<1.5*Math.PI&&(c=-c),h+=c)}}return h}function $i(t,e,n,i,r){for(var o=0,a=0,s=0,l=0,u=0,c=0;c<t.length;){var h=t[c++];switch(h===iv.M&&c>1&&(n||(o+=Ni(a,s,l,u,i,r))),1===c&&(a=t[c],s=t[c+1],l=a,u=s),h){case iv.M:l=t[c++],u=t[c++],a=l,s=u;break;case iv.L:if(n){if(Di(a,s,t[c],t[c+1],e,i,r))return!0}else o+=Ni(a,s,t[c],t[c+1],i,r)||0;a=t[c++],s=t[c++];break;case iv.C:if(n){if(Oi(a,s,t[c++],t[c++],t[c++],t[c++],t[c],t[c+1],e,i,r))return!0}else o+=Ri(a,s,t[c++],t[c++],t[c++],t[c++],t[c],t[c+1],i,r)||0;a=t[c++],s=t[c++];break;case iv.Q:if(n){if(Pi(a,s,t[c++],t[c++],t[c],t[c+1],e,i,r))return!0}else o+=Fi(a,s,t[c++],t[c++],t[c],t[c+1],i,r)||0;a=t[c++],s=t[c++];break;case iv.A:var f=t[c++],d=t[c++],p=t[c++],g=t[c++],v=t[c++],m=t[c++];c+=1;var y=1-t[c++],_=Math.cos(v)*p+f,x=Math.sin(v)*g+d;c>1?o+=Ni(a,s,_,x,i,r):(l=_,u=x);var w=(i-f)*g/p+f;if(n){if(Ei(f,d,g,v,v+m,y,e,w,r))return!0}else o+=Vi(f,d,g,v,v+m,y,w,r);a=Math.cos(v+m)*p+f,s=Math.sin(v+m)*g+d;break;case iv.R:l=a=t[c++],u=s=t[c++];var b=t[c++],S=t[c++];_=l+b,x=u+S;if(n){if(Di(l,u,_,u,e,i,r)||Di(_,u,_,x,e,i,r)||Di(_,x,l,x,e,i,r)||Di(l,x,l,u,e,i,r))return!0}else o+=Ni(_,u,_,x,i,r),o+=Ni(l,x,l,u,i,r);break;case iv.Z:if(n){if(Di(a,s,l,u,e,i,r))return!0}else o+=Ni(a,s,l,u,i,r);a=l,s=u}}return n||Bi(s,u)||(o+=Ni(a,s,l,u,i,r)||0),0!==o}function ji(t,e,n){return $i(t,0,!1,e,n)}function Hi(t,e,n,i){return $i(t,e,!0,n,i)}function Wi(t){In.call(this,t),this.path=null}function Gi(t,e,n,i,r,o,a,s,l,u,c){var h=l*(_v/180),f=yv(h)*(t-n)/2+mv(h)*(e-i)/2,d=-1*mv(h)*(t-n)/2+yv(h)*(e-i)/2,p=f*f/(a*a)+d*d/(s*s);p>1&&(a*=vv(p),s*=vv(p));var g=(r===o?-1:1)*vv((a*a*s*s-a*a*d*d-s*s*f*f)/(a*a*d*d+s*s*f*f))||0,v=g*a*d/s,m=g*-s*f/a,y=(t+n)/2+yv(h)*v-mv(h)*m,_=(e+i)/2+mv(h)*v+yv(h)*m,x=bv([1,0],[(f-v)/a,(d-m)/s]),w=[(f-v)/a,(d-m)/s],b=[(-1*f-v)/a,(-1*d-m)/s],S=bv(w,b);wv(w,b)<=-1&&(S=_v),wv(w,b)>=1&&(S=0),0===o&&S>0&&(S-=2*_v),1===o&&0>S&&(S+=2*_v),c.addData(u,y,_,a,s,x,S,h,o)}function Ui(t){if(!t)return new tv;for(var e,n=0,i=0,r=n,o=i,a=new tv,s=tv.CMD,l=t.match(Sv),u=0;u<l.length;u++){for(var c,h=l[u],f=h.charAt(0),d=h.match(Mv)||[],p=d.length,g=0;p>g;g++)d[g]=parseFloat(d[g]);for(var v=0;p>v;){var m,y,_,x,w,b,S,M=n,I=i;switch(f){case"l":n+=d[v++],i+=d[v++],c=s.L,a.addData(c,n,i);break;case"L":n=d[v++],i=d[v++],c=s.L,a.addData(c,n,i);break;case"m":n+=d[v++],i+=d[v++],c=s.M,a.addData(c,n,i),r=n,o=i,f="l";break;case"M":n=d[v++],i=d[v++],c=s.M,a.addData(c,n,i),r=n,o=i,f="L";break;case"h":n+=d[v++],c=s.L,a.addData(c,n,i);break;case"H":n=d[v++],c=s.L,a.addData(c,n,i);break;case"v":i+=d[v++],c=s.L,a.addData(c,n,i);break;case"V":i=d[v++],c=s.L,a.addData(c,n,i);break;case"C":c=s.C,a.addData(c,d[v++],d[v++],d[v++],d[v++],d[v++],d[v++]),n=d[v-2],i=d[v-1];break;case"c":c=s.C,a.addData(c,d[v++]+n,d[v++]+i,d[v++]+n,d[v++]+i,d[v++]+n,d[v++]+i),n+=d[v-2],i+=d[v-1];break;case"S":m=n,y=i;var A=a.len(),T=a.data;e===s.C&&(m+=n-T[A-4],y+=i-T[A-3]),c=s.C,M=d[v++],I=d[v++],n=d[v++],i=d[v++],a.addData(c,m,y,M,I,n,i);break;case"s":m=n,y=i;A=a.len(),T=a.data;e===s.C&&(m+=n-T[A-4],y+=i-T[A-3]),c=s.C,M=n+d[v++],I=i+d[v++],n+=d[v++],i+=d[v++],a.addData(c,m,y,M,I,n,i);break;case"Q":M=d[v++],I=d[v++],n=d[v++],i=d[v++],c=s.Q,a.addData(c,M,I,n,i);break;case"q":M=d[v++]+n,I=d[v++]+i,n+=d[v++],i+=d[v++],c=s.Q,a.addData(c,M,I,n,i);break;case"T":m=n,y=i;A=a.len(),T=a.data;e===s.Q&&(m+=n-T[A-4],y+=i-T[A-3]),n=d[v++],i=d[v++],c=s.Q,a.addData(c,m,y,n,i);break;case"t":m=n,y=i;A=a.len(),T=a.data;e===s.Q&&(m+=n-T[A-4],y+=i-T[A-3]),n+=d[v++],i+=d[v++],c=s.Q,a.addData(c,m,y,n,i);break;case"A":_=d[v++],x=d[v++],w=d[v++],b=d[v++],S=d[v++],M=n,I=i,n=d[v++],i=d[v++],c=s.A,Gi(M,I,n,i,b,S,_,x,w,c,a);break;case"a":_=d[v++],x=d[v++],w=d[v++],b=d[v++],S=d[v++],M=n,I=i,n+=d[v++],i+=d[v++],c=s.A,Gi(M,I,n,i,b,S,_,x,w,c,a)}}("z"===f||"Z"===f)&&(c=s.Z,a.addData(c),n=r,i=o),e=c}return a.toStatic(),a}function Zi(t,e){var n=Ui(t);return e=e||{},e.buildPath=function(t){if(t.setData){t.setData(n.data);var e=t.getContext();e&&t.rebuildPath(e)}else{e=t;n.rebuildPath(e)}},e.applyTransform=function(t){gv(n,t),this.dirty(!0)},e}function Xi(t,e){return new Wi(Zi(t,e))}function Yi(t,e){return Wi.extend(Zi(t,e))}function qi(t,e){for(var n=[],i=t.length,r=0;i>r;r++){var o=t[r];o.path||o.createPathProxy(),o.__dirtyPath&&o.buildPath(o.path,o.shape,!0),n.push(o.path)}var a=new Wi(e);return a.createPathProxy(),a.buildPath=function(t){t.appendPath(n);var e=t.getContext();e&&t.rebuildPath(e)},a}function Ki(t,e,n,i,r,o,a){var s=.5*(n-t),l=.5*(i-e);return(2*(e-n)+s+l)*a+(-3*(e-n)-2*s-l)*o+s*r+e}function Ji(t,e,n){var i=e.points,r=e.smooth;if(i&&i.length>=2){if(r&&"spline"!==r){var o=Pv(i,r,n,e.smoothConstraint);t.moveTo(i[0][0],i[0][1]);for(var a=i.length,s=0;(n?a:a-1)>s;s++){var l=o[2*s],u=o[2*s+1],c=i[(s+1)%a];t.bezierCurveTo(l[0],l[1],u[0],u[1],c[0],c[1])}}else{"spline"===r&&(i=Ov(i,n)),t.moveTo(i[0][0],i[0][1]);s=1;for(var h=i.length;h>s;s++)t.lineTo(i[s][0],i[s][1])}n&&t.closePath()}}function Qi(t,e,n){var i=n&&n.lineWidth;if(e&&i){var r=e.x1,o=e.x2,a=e.y1,s=e.y2;Nv(2*r)===Nv(2*o)?t.x1=t.x2=er(r,i,!0):(t.x1=r,t.x2=o),Nv(2*a)===Nv(2*s)?t.y1=t.y2=er(a,i,!0):(t.y1=a,t.y2=s)}}function tr(t,e,n){var i=n&&n.lineWidth;if(e&&i){var r=e.x,o=e.y,a=e.width,s=e.height;t.x=er(r,i,!0),t.y=er(o,i,!0),t.width=Math.max(er(r+a,i,!1)-t.x,0===a?0:1),t.height=Math.max(er(o+s,i,!1)-t.y,0===s?0:1)}}function er(t,e,n){var i=Nv(2*t);return(i+Nv(e))%2===0?i/2:(i+(n?1:-1))/2}function nr(t,e,n){var i=t.cpx2,r=t.cpy2;return null===i||null===r?[(n?pi:di)(t.x1,t.cpx1,t.cpx2,t.x2,e),(n?pi:di)(t.y1,t.cpy1,t.cpy2,t.y2,e)]:[(n?xi:_i)(t.x1,t.cpx1,t.x2,e),(n?xi:_i)(t.y1,t.cpy1,t.y2,e)]}function ir(t){In.call(this,t),this._displayables=[],this._temporaryDisplayables=[],this._cursor=0,this.notClear=!0}function rr(t){return Wi.extend(t)}function or(t,e){return Yi(t,e)}function ar(t,e,n,i){var r=Xi(t,e);return n&&("center"===i&&(n=lr(n,r.getBoundingRect())),ur(r,n)),r}function sr(t,e,n){var i=new An({style:{image:t,x:e.x,y:e.y,width:e.width,height:e.height},onload:function(t){if("center"===n){var r={width:t.width,height:t.height};i.setStyle(lr(e,r))}}});return i}function lr(t,e){var n,i=e.width/e.height,r=t.height*i;r<=t.width?n=t.height:(r=t.width,n=r/i);var o=t.x+t.width/2,a=t.y+t.height/2;return{x:o-r/2,y:a-n/2,width:r,height:n}}function ur(t,e){if(t.applyTransform){var n=t.getBoundingRect(),i=n.calculateTransform(e);t.applyTransform(i)}}function cr(t){return Qi(t.shape,t.shape,t.style),t}function hr(t){return tr(t.shape,t.shape,t.style),t}function fr(t){return null!=t&&"none"!==t}function dr(t){if("string"!=typeof t)return t;var e=om.get(t);return e||(e=ee(t,-.1),1e4>am&&(om.set(t,e),am++)),e}function pr(t){if(t.__hoverStlDirty){t.__hoverStlDirty=!1;var e=t.__hoverStl;if(!e)return void(t.__cachedNormalStl=t.__cachedNormalZ2=null);var n=t.__cachedNormalStl={};t.__cachedNormalZ2=t.z2;var i=t.style;for(var r in e)null!=e[r]&&(n[r]=i[r]);n.fill=i.fill,n.stroke=i.stroke}}function gr(t){var e=t.__hoverStl;if(e&&!t.__highlighted){var n=t.useHoverLayer;t.__highlighted=n?"layer":"plain";var i=t.__zr;if(!(t.isGroup||!i&&n)){var r=t,o=t.style;n&&(r=i.addHover(t),o=r.style),Rr(o),n||pr(r),o.extendFrom(e),vr(o,e,"fill"),vr(o,e,"stroke"),zr(o),n||(t.dirty(!1),t.z2+=Kv)}}}function vr(t,e,n){!fr(e[n])&&fr(t[n])&&(t[n]=dr(t[n]))}function mr(t){var e=t.__highlighted;if(e&&(t.__highlighted=!1,!t.isGroup))if("layer"===e)t.__zr&&t.__zr.removeHover(t);else{var n=t.style,i=t.__cachedNormalStl;i&&(Rr(n),t.setStyle(i),zr(n));var r=t.__cachedNormalZ2;null!=r&&t.z2-r===Kv&&(t.z2=r)}}function yr(t,e,n){var i,r=tm,o=tm;t.__highlighted&&(r=Qv,i=!0),e(t,n),t.__highlighted&&(o=Qv,i=!0),t.isGroup&&t.traverse(function(t){!t.isGroup&&e(t,n)}),i&&t.__highDownOnUpdate&&t.__highDownOnUpdate(r,o)}function _r(t,e){e=t.__hoverStl=!1!==e&&(t.hoverStyle||e||{}),t.__hoverStlDirty=!0,t.__highlighted&&(t.__cachedNormalStl=null,mr(t),gr(t))}function xr(t){!Mr(this,t)&&!this.__highByOuter&&yr(this,gr)}function wr(t){!Mr(this,t)&&!this.__highByOuter&&yr(this,mr)}function br(t){this.__highByOuter|=1<<(t||0),yr(this,gr)}function Sr(t){!(this.__highByOuter&=~(1<<(t||0)))&&yr(this,mr)}function Mr(t,e){return t.__highDownSilentOnTouch&&e.zrByTouch}function Ir(t,e){Ar(t,!0),yr(t,_r,e)}function Ar(t,e){var n=!1===e;if(t.__highDownSilentOnTouch=t.highDownSilentOnTouch,t.__highDownOnUpdate=t.highDownOnUpdate,!n||t.__highDownDispatcher){var i=n?"off":"on";t[i]("mouseover",xr)[i]("mouseout",wr),t[i]("emphasis",br)[i]("normal",Sr),t.__highByOuter=t.__highByOuter||0,t.__highDownDispatcher=!n}}function Tr(t){return!(!t||!t.__highDownDispatcher)}function Cr(t){var e=nm[t];return null==e&&32>=em&&(e=nm[t]=em++),e}function kr(t,e,n,i,r,o,a){r=r||qv;var s,l=r.labelFetcher,u=r.labelDataIndex,c=r.labelDimIndex,h=n.getShallow("show"),f=i.getShallow("show");(h||f)&&(l&&(s=l.getFormattedLabel(u,"normal",null,c)),null==s&&(s=M(r.defaultText)?r.defaultText(u,r):r.defaultText));var d=h?s:null,p=f?P(l?l.getFormattedLabel(u,"emphasis",null,c):null,s):null;(null!=d||null!=p)&&(Or(t,n,o,r),Or(e,i,a,r,!0)),t.text=d,e.text=p}function Dr(t,e,n){var i=t.style;e&&(Rr(i),t.setStyle(e),zr(i)),i=t.__hoverStl,n&&i&&(Rr(i),u(i,n),zr(i))}function Or(t,e,n,i,r){return Lr(t,e,i,r),n&&u(t,n),t}function Pr(t,e,n){var i,r={isRectText:!0};!1===n?i=!0:r.autoColor=n,Lr(t,e,r,i)}function Lr(t,e,n,i){if(n=n||qv,n.isRectText){var r=e.getShallow("position")||(i?null:"inside");"outside"===r&&(r="top"),t.textPosition=r,t.textOffset=e.getShallow("offset");var o=e.getShallow("rotate");null!=o&&(o*=Math.PI/180),t.textRotation=o,t.textDistance=P(e.getShallow("distance"),i?null:5)}var a,s=e.ecModel,l=s&&s.option.textStyle,u=Er(e);if(u)for(var c in a={},u)if(u.hasOwnProperty(c)){var h=e.getModel(["rich",c]);Nr(a[c]={},h,l,n,i)}return t.rich=a,Nr(t,e,l,n,i,!0),n.forceRich&&!n.textStyle&&(n.textStyle={}),t}function Er(t){for(var e;t&&t!==t.ecModel;){var n=(t.option||qv).rich;if(n)for(var i in e=e||{},n)n.hasOwnProperty(i)&&(e[i]=1);t=t.parentModel}return e}function Nr(t,e,n,i,r,o){n=!r&&n||qv,t.textFill=Br(e.getShallow("color"),i)||n.color,t.textStroke=Br(e.getShallow("textBorderColor"),i)||n.textBorderColor,t.textStrokeWidth=P(e.getShallow("textBorderWidth"),n.textBorderWidth),r||(o&&(t.insideRollbackOpt=i,zr(t)),null==t.textFill&&(t.textFill=i.autoColor)),t.fontStyle=e.getShallow("fontStyle")||n.fontStyle,t.fontWeight=e.getShallow("fontWeight")||n.fontWeight,t.fontSize=e.getShallow("fontSize")||n.fontSize,t.fontFamily=e.getShallow("fontFamily")||n.fontFamily,t.textAlign=e.getShallow("align"),t.textVerticalAlign=e.getShallow("verticalAlign")||e.getShallow("baseline"),t.textLineHeight=e.getShallow("lineHeight"),t.textWidth=e.getShallow("width"),t.textHeight=e.getShallow("height"),t.textTag=e.getShallow("tag"),o&&i.disableBox||(t.textBackgroundColor=Br(e.getShallow("backgroundColor"),i),t.textPadding=e.getShallow("padding"),t.textBorderColor=Br(e.getShallow("borderColor"),i),t.textBorderWidth=e.getShallow("borderWidth"),t.textBorderRadius=e.getShallow("borderRadius"),t.textBoxShadowColor=e.getShallow("shadowColor"),t.textBoxShadowBlur=e.getShallow("shadowBlur"),t.textBoxShadowOffsetX=e.getShallow("shadowOffsetX"),t.textBoxShadowOffsetY=e.getShallow("shadowOffsetY")),t.textShadowColor=e.getShallow("textShadowColor")||n.textShadowColor,t.textShadowBlur=e.getShallow("textShadowBlur")||n.textShadowBlur,t.textShadowOffsetX=e.getShallow("textShadowOffsetX")||n.textShadowOffsetX,t.textShadowOffsetY=e.getShallow("textShadowOffsetY")||n.textShadowOffsetY}function Br(t,e){return"auto"!==t?t:e&&e.autoColor?e.autoColor:null}function zr(t){var e,n=t.textPosition,i=t.insideRollbackOpt;if(i&&null==t.textFill){var r=i.autoColor,o=i.isRectText,a=i.useInsideStyle,s=!1!==a&&(!0===a||o&&n&&"string"==typeof n&&n.indexOf("inside")>=0),l=!s&&null!=r;(s||l)&&(e={textFill:t.textFill,textStroke:t.textStroke,textStrokeWidth:t.textStrokeWidth}),s&&(t.textFill="#fff",null==t.textStroke&&(t.textStroke=r,null==t.textStrokeWidth&&(t.textStrokeWidth=2))),l&&(t.textFill=r)}t.insideRollback=e}function Rr(t){var e=t.insideRollback;e&&(t.textFill=e.textFill,t.textStroke=e.textStroke,t.textStrokeWidth=e.textStrokeWidth,t.insideRollback=null)}function Fr(t,e){var n=e||e.getModel("textStyle");return z([t.fontStyle||n&&n.getShallow("fontStyle")||"",t.fontWeight||n&&n.getShallow("fontWeight")||"",(t.fontSize||n&&n.getShallow("fontSize")||12)+"px",t.fontFamily||n&&n.getShallow("fontFamily")||"sans-serif"].join(" "))}function Vr(t,e,n,i,r,o){"function"==typeof r&&(o=r,r=null);var a=i&&i.isAnimationEnabled();if(a){var s=t?"Update":"",l=i.getShallow("animationDuration"+s),u=i.getShallow("animationEasing"+s),c=i.getShallow("animationDelay"+s);"function"==typeof c&&(c=c(r,i.getAnimationDelayParams?i.getAnimationDelayParams(e,r):null)),"function"==typeof l&&(l=l(r)),l>0?e.animateTo(n,l,c||0,u,o,!!o):(e.stopAnimation(),e.attr(n),o&&o())}else e.stopAnimation(),e.attr(n),o&&o()}function $r(t,e,n,i,r){Vr(!0,t,e,n,i,r)}function jr(t,e,n,i,r){Vr(!1,t,e,n,i,r)}function Hr(t,e){for(var n=Pt([]);t&&t!==e;)Et(n,t.getLocalTransform(),n),t=t.parent;return n}function Wr(t,e,n){return e&&!g(e)&&(e=Bd.getLocalTransform(e)),n&&(e=Rt([],e)),lt([],t,e)}function Gr(t,e,n){var i=0===e[4]||0===e[5]||0===e[0]?1:Math.abs(2*e[4]/e[0]),r=0===e[4]||0===e[5]||0===e[2]?1:Math.abs(2*e[4]/e[2]),o=["left"===t?-i:"right"===t?i:0,"top"===t?-r:"bottom"===t?r:0];return o=Wr(o,e,n),Math.abs(o[0])>Math.abs(o[1])?o[0]>0?"right":"left":o[1]>0?"bottom":"top"}function Ur(t,e,n){function i(t){var e={};return t.traverse(function(t){!t.isGroup&&t.anid&&(e[t.anid]=t)}),e}function r(t){var e={position:U(t.position),rotation:t.rotation};return t.shape&&(e.shape=u({},t.shape)),e}if(t&&e){var o=i(t);e.traverse(function(t){if(!t.isGroup&&t.anid){var e=o[t.anid];if(e){var i=r(t);t.attr(r(e)),$r(t,i,n,t.dataIndex)}}})}}function Zr(t,e){return m(t,function(t){var n=t[0];n=Xv(n,e.x),n=Yv(n,e.x+e.width);var i=t[1];return i=Xv(i,e.y),i=Yv(i,e.y+e.height),[n,i]})}function Xr(t,e){var n=Xv(t.x,e.x),i=Yv(t.x+t.width,e.x+e.width),r=Xv(t.y,e.y),o=Yv(t.y+t.height,e.y+e.height);return i>=n&&o>=r?{x:n,y:r,width:i-n,height:o-r}:void 0}function Yr(t,e,n){e=u({rectHover:!0},e);var i=e.style={strokeNoScale:!0};return n=n||{x:-1,y:-1,width:2,height:2},t?0===t.indexOf("image://")?(i.image=t.slice(8),c(i,n),new An(e)):ar(t.replace("path://",""),e,n,"center"):void 0}function qr(t,e,n){this.parentModel=e,this.ecModel=n,this.option=t}function Kr(t,e,n){for(var i=0;i<e.length&&(!e[i]||(t=t&&"object"==typeof t?t[e[i]]:null,null!=t));i++);return null==t&&n&&(t=n.get(e)),t}function Jr(t,e){var n=dm(t).getParent;return n?n.call(t,e):t.parentModel}function Qr(t){return[t||"",pm++,Math.random().toFixed(5)].join("_")}function to(t){var e={};return t.registerSubTypeDefaulter=function(t,n){t=ri(t),e[t.main]=n},t.determineSubType=function(n,i){var r=i.type;if(!r){var o=ri(n).main;t.hasSubTypes(n)&&e[o]&&(r=e[o](i))}return r},t}function eo(t,e){function n(t){var n={},o=[];return v(t,function(a){var s=i(n,a),l=s.originalDeps=e(a),u=r(l,t);s.entryCount=u.length,0===s.entryCount&&o.push(a),v(u,function(t){f(s.predecessor,t)<0&&s.predecessor.push(t);var e=i(n,t);f(e.successor,t)<0&&e.successor.push(a)})}),{graph:n,noEntryList:o}}function i(t,e){return t[e]||(t[e]={predecessor:[],successor:[]}),t[e]}function r(t,e){var n=[];return v(t,function(t){f(e,t)>=0&&n.push(t)}),n}t.topologicalTravel=function(t,e,i,r){function o(t){l[t].entryCount--,0===l[t].entryCount&&u.push(t)}function a(t){c[t]=!0,o(t)}if(t.length){var s=n(e),l=s.graph,u=s.noEntryList,c={};for(v(t,function(t){c[t]=!0});u.length;){var h=u.pop(),f=l[h],d=!!c[h];d&&(i.call(r,h,f.originalDeps.slice()),delete c[h]),v(f.successor,d?a:o)}v(c,function(){throw new Error("Circle dependency may exists")})}}}function no(t){return t.replace(/^\s+/,"").replace(/\s+$/,"")}function io(t,e,n,i){var r=e[1]-e[0],o=n[1]-n[0];if(0===r)return 0===o?n[0]:(n[0]+n[1])/2;if(i)if(r>0){if(t<=e[0])return n[0];if(t>=e[1])return n[1]}else{if(t>=e[0])return n[0];if(t<=e[1])return n[1]}else{if(t===e[0])return n[0];if(t===e[1])return n[1]}return(t-e[0])/r*o+n[0]}function ro(t,e){switch(t){case"center":case"middle":t="50%";break;case"left":case"top":t="0%";break;case"right":case"bottom":t="100%"}return"string"==typeof t?no(t).match(/%$/)?parseFloat(t)/100*e:parseFloat(t):null==t?NaN:+t}function oo(t,e,n){return null==e&&(e=10),e=Math.min(Math.max(0,e),20),t=(+t).toFixed(e),n?t:+t}function ao(t){return t.sort(function(t,e){return t-e}),t}function so(t){if(t=+t,isNaN(t))return 0;for(var e=1,n=0;Math.round(t*e)/e!==t;)e*=10,n++;return n}function lo(t){var e=t.toString(),n=e.indexOf("e");if(n>0){var i=+e.slice(n+1);return 0>i?-i:0}var r=e.indexOf(".");return 0>r?0:e.length-1-r}function uo(t,e){var n=Math.log,i=Math.LN10,r=Math.floor(n(t[1]-t[0])/i),o=Math.round(n(Math.abs(e[1]-e[0]))/i),a=Math.min(Math.max(-r+o,0),20);return isFinite(a)?a:20}function co(t,e,n){if(!t[e])return 0;var i=y(t,function(t,e){return t+(isNaN(e)?0:e)},0);if(0===i)return 0;for(var r=Math.pow(10,n),o=m(t,function(t){return(isNaN(t)?0:t)/i*r*100}),a=100*r,s=m(o,function(t){return Math.floor(t)}),l=y(s,function(t,e){return t+e},0),u=m(o,function(t,e){return t-s[e]});a>l;){for(var c=Number.NEGATIVE_INFINITY,h=null,f=0,d=u.length;d>f;++f)u[f]>c&&(c=u[f],h=f);++s[h],u[h]=0,++l}return s[e]/r}function ho(t){var e=2*Math.PI;return(t%e+e)%e}function fo(t){return t>-gm&&gm>t}function po(t){if(t instanceof Date)return t;if("string"==typeof t){var e=mm.exec(t);if(!e)return new Date(NaN);if(e[8]){var n=+e[4]||0;return"Z"!==e[8].toUpperCase()&&(n-=e[8].slice(0,3)),new Date(Date.UTC(+e[1],+(e[2]||1)-1,+e[3]||1,n,+(e[5]||0),+e[6]||0,+e[7]||0))}return new Date(+e[1],+(e[2]||1)-1,+e[3]||1,+e[4]||0,+(e[5]||0),+e[6]||0,+e[7]||0)}return new Date(null==t?NaN:Math.round(t))}function go(t){return Math.pow(10,vo(t))}function vo(t){return Math.floor(Math.log(t)/Math.LN10)}function mo(t,e){var n,i=vo(t),r=Math.pow(10,i),o=t/r;return n=e?1.5>o?1:2.5>o?2:4>o?3:7>o?5:10:1>o?1:2>o?2:3>o?3:5>o?5:10,t=n*r,i>=-20?+t.toFixed(0>i?-i:0):t}function yo(t,e){var n=(t.length-1)*e+1,i=Math.floor(n),r=+t[i-1],o=n-i;return o?r+o*(t[i]-r):r}function _o(t){function e(t,n,i){return t.interval[i]<n.interval[i]||t.interval[i]===n.interval[i]&&(t.close[i]-n.close[i]===(i?-1:1)||!i&&e(t,n,1))}t.sort(function(t,n){return e(t,n,0)?-1:1});for(var n=-1/0,i=1,r=0;r<t.length;){for(var o=t[r].interval,a=t[r].close,s=0;2>s;s++)o[s]<=n&&(o[s]=n,a[s]=s?1:1-i),n=o[s],i=a[s];o[0]===o[1]&&a[0]*a[1]!==1?t.splice(r,1):r++}return t}function xo(t){return t-parseFloat(t)>=0}function wo(t){return isNaN(t)?"-":(t=(t+"").split("."),t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g,"$1,")+(t.length>1?"."+t[1]:""))}function bo(t,e){return t=(t||"").toLowerCase().replace(/-(.)/g,function(t,e){return e.toUpperCase()}),e&&t&&(t=t.charAt(0).toUpperCase()+t.slice(1)),t}function So(t){return null==t?"":(t+"").replace(xm,function(t,e){return wm[e]})}function Mo(t,e,n){S(e)||(e=[e]);var i=e.length;if(!i)return"";for(var r=e[0].$vars||[],o=0;o<r.length;o++){var a=bm[o];t=t.replace(Sm(a),Sm(a,0))}for(var s=0;i>s;s++)for(var l=0;l<r.length;l++){var u=e[s][r[l]];t=t.replace(Sm(bm[l],s),n?So(u):u)}return t}function Io(t,e,n){return v(e,function(e,i){t=t.replace("{"+i+"}",n?So(e):e)}),t}function Ao(t,e){t=I(t)?{color:t,extraCssText:e}:t||{};var n=t.color,i=t.type,r=(e=t.extraCssText,t.renderMode||"html"),o=t.markerId||"X";return n?"html"===r?"subItem"===i?'<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:'+So(n)+";"+(e||"")+'"></span>':'<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'+So(n)+";"+(e||"")+'"></span>':{renderMode:r,content:"{marker"+o+"|}  ",style:{color:n}}:""}function To(t,e){return t+="","0000".substr(0,e-t.length)+t}function Co(t,e,n){("week"===t||"month"===t||"quarter"===t||"half-year"===t||"year"===t)&&(t="MM-dd\nyyyy");var i=po(e),r=n?"UTC":"",o=i["get"+r+"FullYear"](),a=i["get"+r+"Month"]()+1,s=i["get"+r+"Date"](),l=i["get"+r+"Hours"](),u=i["get"+r+"Minutes"](),c=i["get"+r+"Seconds"](),h=i["get"+r+"Milliseconds"]();return t.replace("MM",To(a,2)).replace("M",a).replace("yyyy",o).replace("yy",o%100).replace("dd",To(s,2)).replace("d",s).replace("hh",To(l,2)).replace("h",l).replace("mm",To(u,2)).replace("m",u).replace("ss",To(c,2)).replace("s",c).replace("SSS",To(h,3))}function ko(t){return t?t.charAt(0).toUpperCase()+t.substr(1):t}function Do(t){return He(t.text,t.font,t.textAlign,t.textVerticalAlign,t.textPadding,t.textLineHeight,t.rich,t.truncate)}function Oo(t,e,n,i,r,o,a,s){return He(t,e,n,i,r,s,o,a)}function Po(t,e,n,i,r){var o=0,a=0;null==i&&(i=1/0),null==r&&(r=1/0);var s=0;e.eachChild(function(l,u){var c,h,f=l.position,d=l.getBoundingRect(),p=e.childAt(u+1),g=p&&p.getBoundingRect();if("horizontal"===t){var v=d.width+(g?-g.x+d.x:0);c=o+v,c>i||l.newline?(o=0,c=v,a+=s+n,s=d.height):s=Math.max(s,d.height)}else{var m=d.height+(g?-g.y+d.y:0);h=a+m,h>r||l.newline?(o+=s+n,a=0,h=m,s=d.width):s=Math.max(s,d.width)}l.newline||(f[0]=o,f[1]=a,"horizontal"===t?o=c+n:a=h+n)})}function Lo(t,e,n){n=_m(n||0);var i=e.width,r=e.height,o=ro(t.left,i),a=ro(t.top,r),s=ro(t.right,i),l=ro(t.bottom,r),u=ro(t.width,i),c=ro(t.height,r),h=n[2]+n[0],f=n[1]+n[3],d=t.aspect;switch(isNaN(u)&&(u=i-s-f-o),isNaN(c)&&(c=r-l-h-a),null!=d&&(isNaN(u)&&isNaN(c)&&(d>i/r?u=.8*i:c=.8*r),isNaN(u)&&(u=d*c),isNaN(c)&&(c=u/d)),isNaN(o)&&(o=i-s-u-f),isNaN(a)&&(a=r-l-c-h),t.left||t.right){case"center":o=i/2-u/2-n[3];break;case"right":o=i-u-f}switch(t.top||t.bottom){case"middle":case"center":a=r/2-c/2-n[0];break;case"bottom":a=r-c-h}o=o||0,a=a||0,isNaN(u)&&(u=i-f-o-(s||0)),isNaN(c)&&(c=r-h-a-(l||0));var p=new Me(o+n[3],a+n[0],u,c);return p.margin=n,p}function Eo(t,e,n){function i(n,i){var a={},l=0,u={},c=0,h=2;if(Am(n,function(e){u[e]=t[e]}),Am(n,function(t){r(e,t)&&(a[t]=u[t]=e[t]),o(a,t)&&l++,o(u,t)&&c++}),s[i])return o(e,n[1])?u[n[2]]=null:o(e,n[2])&&(u[n[1]]=null),u;if(c!==h&&l){if(l>=h)return a;for(var f=0;f<n.length;f++){var d=n[f];if(!r(a,d)&&r(t,d)){a[d]=t[d];break}}return a}return u}function r(t,e){return t.hasOwnProperty(e)}function o(t,e){return null!=t[e]&&"auto"!==t[e]}function a(t,e,n){Am(t,function(t){e[t]=n[t]})}!A(n)&&(n={});var s=n.ignoreSize;!S(s)&&(s=[s,s]);var l=i(Cm[0],0),u=i(Cm[1],1);a(Cm[0],t,l),a(Cm[1],t,u)}function No(t){return Bo({},t)}function Bo(t,e){return e&&t&&Am(Tm,function(n){e.hasOwnProperty(n)&&(t[n]=e[n])}),t}function zo(t){var e=[];return v(Pm.getClassesByMainType(t),function(t){e=e.concat(t.prototype.dependencies||[])}),e=m(e,function(t){return ri(t).main}),"dataset"!==t&&f(e,"dataset")<=0&&e.unshift("dataset"),e}function Ro(t,e){for(var n=t.length,i=0;n>i;i++)if(t[i].length>e)return t[i];return t[n-1]}function Fo(t){var e=t.get("coordinateSystem"),n={coordSysName:e,coordSysDims:[],axisMap:$(),categoryAxisMap:$()},i=zm[e];return i?(i(t,n,n.axisMap,n.categoryAxisMap),n):void 0}function Vo(t){return"category"===t.get("type")}function $o(t){this.fromDataset=t.fromDataset,this.data=t.data||(t.sourceFormat===$m?{}:[]),this.sourceFormat=t.sourceFormat||jm,this.seriesLayoutBy=t.seriesLayoutBy||Wm,this.dimensionsDefine=t.dimensionsDefine,this.encodeDefine=t.encodeDefine&&$(t.encodeDefine),this.startIndex=t.startIndex||0,this.dimensionsDetectCount=t.dimensionsDetectCount}function jo(t){var e=t.option.source,n=jm;if(C(e))n=Hm;else if(S(e)){0===e.length&&(n=Fm);for(var i=0,r=e.length;r>i;i++){var o=e[i];if(null!=o){if(S(o)){n=Fm;break}if(A(o)){n=Vm;break}}}}else if(A(e)){for(var a in e)if(e.hasOwnProperty(a)&&g(e[a])){n=$m;break}}else if(null!=e)throw new Error("Invalid data");Um(t).sourceFormat=n}function Ho(t){return Um(t).source}function Wo(t){Um(t).datasetMap=$()}function Go(t){var e=t.option,n=e.data,i=C(n)?Hm:Rm,r=!1,o=e.seriesLayoutBy,a=e.sourceHeader,s=e.dimensions,l=Ko(t);if(l){var u=l.option;n=u.source,i=Um(l).sourceFormat,r=!0,o=o||u.seriesLayoutBy,null==a&&(a=u.sourceHeader),s=s||u.dimensions}var c=Uo(n,i,o,a,s),h=e.encode;!h&&l&&(h=qo(t,l,n,i,o,c)),Um(t).source=new $o({data:n,fromDataset:r,seriesLayoutBy:o,sourceFormat:i,dimensionsDefine:c.dimensionsDefine,startIndex:c.startIndex,dimensionsDetectCount:c.dimensionsDetectCount,encodeDefine:h})}function Uo(t,e,n,i,r){if(!t)return{dimensionsDefine:Zo(r)};var o,a,s,l;if(e===Fm)"auto"===i||null==i?Xo(function(t){null!=t&&"-"!==t&&(I(t)?null==a&&(a=1):a=0)},n,t,10):a=i?1:0,r||1!==a||(r=[],Xo(function(t,e){r[e]=null!=t?t:""},n,t)),o=r?r.length:n===Gm?t.length:t[0]?t[0].length:null;else if(e===Vm)r||(r=Yo(t),s=!0);else if(e===$m)r||(r=[],s=!0,v(t,function(t,e){r.push(e)}));else if(e===Rm){var u=Gn(t[0]);o=S(u)&&u.length||1}return s&&v(r,function(t,e){"name"===(A(t)?t.name:t)&&(l=e)}),{startIndex:a,dimensionsDefine:Zo(r),dimensionsDetectCount:o,potentialNameDimIndex:l}}function Zo(t){if(t){var e=$();return m(t,function(t){if(t=u({},A(t)?t:{name:t}),null==t.name)return t;t.name+="",null==t.displayName&&(t.displayName=t.name);var n=e.get(t.name);return n?t.name+="-"+n.count++:e.set(t.name,{count:1}),t})}}function Xo(t,e,n,i){if(null==i&&(i=1/0),e===Gm)for(var r=0;r<n.length&&i>r;r++)t(n[r]?n[r][0]:null,r);else{var o=n[0]||[];for(r=0;r<o.length&&i>r;r++)t(o[r],r)}}function Yo(t){for(var e,n=0;n<t.length&&!(e=t[n++]););if(e){var i=[];return v(e,function(t,e){i.push(e)}),i}}function qo(t,e,n,i,r,o){var a=Fo(t),s={},l=[],u=[],c=t.subType,h=$(["pie","map","funnel"]),f=$(["line","bar","pictorialBar","scatter","effectScatter","candlestick","boxplot"]);if(a&&null!=f.get(c)){var d=t.ecModel,p=Um(d).datasetMap,g=e.uid+"_"+r,m=p.get(g)||p.set(g,{categoryWayDim:1,valueWayDim:0});v(a.coordSysDims,function(t){if(null==a.firstCategoryDimIndex){var e=m.valueWayDim++;s[t]=e,u.push(e)}else if(a.categoryAxisMap.get(t))s[t]=0,l.push(0);else{e=m.categoryWayDim++;s[t]=e,u.push(e)}})}else if(null!=h.get(c)){for(var y,_=0;5>_&&null==y;_++)Qo(n,i,r,o.dimensionsDefine,o.startIndex,_)||(y=_);if(null!=y){s.value=y;var x=o.potentialNameDimIndex||Math.max(y-1,0);u.push(x),l.push(x)}}return l.length&&(s.itemName=l),u.length&&(s.seriesName=u),s}function Ko(t){var e=t.option,n=e.data;return n?void 0:t.ecModel.getComponent("dataset",e.datasetIndex||0)}function Jo(t,e){return Qo(t.data,t.sourceFormat,t.seriesLayoutBy,t.dimensionsDefine,t.startIndex,e)}function Qo(t,e,n,i,r,o){function a(t){return(null==t||!isFinite(t)||""===t)&&(!(!I(t)||"-"===t)||void 0)}var s,l,u=5;if(C(t))return!1;if(i&&(l=i[o],l=A(l)?l.name:l),e===Fm)if(n===Gm){for(var c=t[o],h=0;h<(c||[]).length&&u>h;h++)if(null!=(s=a(c[r+h])))return s}else for(h=0;h<t.length&&u>h;h++){var f=t[r+h];if(f&&null!=(s=a(f[o])))return s}else if(e===Vm){if(!l)return;for(h=0;h<t.length&&u>h;h++){var d=t[h];if(d&&null!=(s=a(d[l])))return s}}else if(e===$m){if(!l)return;c=t[l];if(!c||C(c))return!1;for(h=0;h<c.length&&u>h;h++)if(null!=(s=a(c[h])))return s}else if(e===Rm)for(h=0;h<t.length&&u>h;h++){d=t[h];var p=Gn(d);if(!S(p))return!1;if(null!=(s=a(p[o])))return s}return!1}function ta(t,e){if(e){var n=e.seiresIndex,i=e.seriesId,r=e.seriesName;return null!=n&&t.componentIndex!==n||null!=i&&t.id!==i||null!=r&&t.name!==r}}function ea(t,e){var n=t.color&&!t.colorLayer;v(e,function(e,i){"colorLayer"===i&&n||Pm.hasClass(i)||("object"==typeof e?t[i]=t[i]?s(t[i],e,!1):a(e):null==t[i]&&(t[i]=e))})}function na(t){t=t,this.option={},this.option[Zm]=1,this._componentsMap=$({series:[]}),this._seriesIndices,this._seriesIndicesMap,ea(t,this._theme.option),s(t,Em,!1),this.mergeOption(t)}function ia(t,e){S(e)||(e=e?[e]:[]);var n={};return v(e,function(e){n[e]=(t.get(e)||[]).slice()}),n}function ra(t,e,n){var i=e.type?e.type:n?n.subType:Pm.determineSubType(t,e);return i}function oa(t,e){t._seriesIndicesMap=$(t._seriesIndices=m(e,function(t){return t.componentIndex})||[])}function aa(t,e){return e.hasOwnProperty("subType")?_(t,function(t){return t.subType===e.subType}):t}function sa(t){v(Ym,function(e){this[e]=w(t[e],t)},this)}function la(){this._coordinateSystems=[]}function ua(t){this._api=t,this._timelineOptions=[],this._mediaList=[],this._mediaDefault,this._currentMediaIndices=[],this._optionBackup,this._newBaseOption}function ca(t,e,n){var i,r,o=[],a=[],s=t.timeline;if(t.baseOption&&(r=t.baseOption),(s||t.options)&&(r=r||{},o=(t.options||[]).slice()),t.media){r=r||{};var l=t.media;Km(l,function(t){t&&t.option&&(t.query?a.push(t):i||(i=t))})}return r||(r=t),r.timeline||(r.timeline=s),Km([r].concat(o).concat(m(a,function(t){return t.option})),function(t){Km(e,function(e){e(t,n)})}),{baseOption:r,timelineOptions:o,mediaDefault:i,mediaList:a}}function ha(t,e,n){var i={width:e,height:n,aspectratio:e/n},r=!0;return v(t,function(t,e){var n=e.match(ey);if(n&&n[1]&&n[2]){var o=n[1],a=n[2].toLowerCase();fa(i[a],t,o)||(r=!1)}}),r}function fa(t,e,n){return"min"===n?t>=e:"max"===n?e>=t:t===e}function da(t,e){return t.join(",")===e.join(",")}function pa(t,e){e=e||{},Km(e,function(e,n){if(null!=e){var i=t[n];if(Pm.hasClass(n)){e=Hn(e),i=Hn(i);var r=Zn(i,e);t[n]=Qm(r,function(t){return t.option&&t.exist?ty(t.exist,t.option,!0):t.exist||t.option})}else t[n]=ty(i,e,!0)}})}function ga(t){var e=t&&t.itemStyle;if(e)for(var n=0,i=ry.length;i>n;n++){var r=ry[n],o=e.normal,a=e.emphasis;o&&o[r]&&(t[r]=t[r]||{},t[r].normal?s(t[r].normal,o[r]):t[r].normal=o[r],o[r]=null),a&&a[r]&&(t[r]=t[r]||{},t[r].emphasis?s(t[r].emphasis,a[r]):t[r].emphasis=a[r],a[r]=null)}}function va(t,e,n){if(t&&t[e]&&(t[e].normal||t[e].emphasis)){var i=t[e].normal,r=t[e].emphasis;i&&(n?(t[e].normal=t[e].emphasis=null,c(t[e],i)):t[e]=i),r&&(t.emphasis=t.emphasis||{},t.emphasis[e]=r)}}function ma(t){va(t,"itemStyle"),va(t,"lineStyle"),va(t,"areaStyle"),va(t,"label"),va(t,"labelLine"),va(t,"upperLabel"),va(t,"edgeLabel")}function ya(t,e){var n=iy(t)&&t[e],i=iy(n)&&n.textStyle;if(i)for(var r=0,o=dg.length;o>r;r++){e=dg[r];i.hasOwnProperty(e)&&(n[e]=i[e])}}function _a(t){t&&(ma(t),ya(t,"label"),t.emphasis&&ya(t.emphasis,"label"))}function xa(t){if(iy(t)){ga(t),ma(t),ya(t,"label"),ya(t,"upperLabel"),ya(t,"edgeLabel"),t.emphasis&&(ya(t.emphasis,"label"),ya(t.emphasis,"upperLabel"),ya(t.emphasis,"edgeLabel"));var e=t.markPoint;e&&(ga(e),_a(e));var n=t.markLine;n&&(ga(n),_a(n));var i=t.markArea;i&&_a(i);var r=t.data;if("graph"===t.type){r=r||t.nodes;var o=t.links||t.edges;if(o&&!C(o))for(var a=0;a<o.length;a++)_a(o[a]);v(t.categories,function(t){ma(t)})}if(r&&!C(r))for(a=0;a<r.length;a++)_a(r[a]);e=t.markPoint;if(e&&e.data){var s=e.data;for(a=0;a<s.length;a++)_a(s[a])}n=t.markLine;if(n&&n.data){var l=n.data;for(a=0;a<l.length;a++)S(l[a])?(_a(l[a][0]),_a(l[a][1])):_a(l[a])}"gauge"===t.type?(ya(t,"axisLabel"),ya(t,"title"),ya(t,"detail")):"treemap"===t.type?(va(t.breadcrumb,"itemStyle"),v(t.levels,function(t){ma(t)})):"tree"===t.type&&ma(t.leaves)}}function wa(t){return S(t)?t:t?[t]:[]}function ba(t){return(S(t)?t[0]:t)||{}}function Sa(t,e){e=e.split(",");for(var n=t,i=0;i<e.length&&(n=n&&n[e[i]],null!=n);i++);return n}function Ma(t,e,n,i){e=e.split(",");for(var r,o=t,a=0;a<e.length-1;a++)r=e[a],null==o[r]&&(o[r]={}),o=o[r];(i||null==o[e[a]])&&(o[e[a]]=n)}function Ia(t){v(ay,function(e){e[0]in t&&!(e[1]in t)&&(t[e[1]]=t[e[0]])})}function Aa(t){v(t,function(e,n){var i=[],r=[NaN,NaN],o=[e.stackResultDimension,e.stackedOverDimension],a=e.data,s=e.isStackedByIndex,l=a.map(o,function(o,l,u){var c,h,f=a.get(e.stackedDimension,u);if(isNaN(f))return r;s?h=a.getRawIndex(u):c=a.get(e.stackedByDimension,u);for(var d=NaN,p=n-1;p>=0;p--){var g=t[p];if(s||(h=g.data.rawIndexOf(g.stackedByDimension,c)),h>=0){var v=g.data.getByRawIndex(g.stackResultDimension,h);if(f>=0&&v>0||0>=f&&0>v){f+=v,d=v;break}}}return i[0]=f,i[1]=d,i});a.hostModel.setData(l),e.data=l})}function Ta(t,e){$o.isInstance(t)||(t=$o.seriesDataToSource(t)),this._source=t;var n=this._data=t.data,i=t.sourceFormat;i===Hm&&(this._offset=0,this._dimSize=e,this._data=n);var r=hy[i===Fm?i+"_"+t.seriesLayoutBy:i];u(this,r)}function Ca(){return this._data.length}function ka(t){return this._data[t]}function Da(t){for(var e=0;e<t.length;e++)this._data.push(t[e])}function Oa(t,e,n){return null!=n?t[n]:t}function Pa(t,e,n,i){return La(t[i],this._dimensionInfos[e])}function La(t,e){var n=e&&e.type;if("ordinal"===n){var i=e&&e.ordinalMeta;return i?i.parseAndCollect(t):t}return"time"===n&&"number"!=typeof t&&null!=t&&"-"!==t&&(t=+po(t)),null==t||""===t?NaN:+t}function Ea(t,e,n){if(t){var i=t.getRawDataItem(e);if(null!=i){var r,o,a=t.getProvider().getSource().sourceFormat,s=t.getDimensionInfo(n);return s&&(r=s.name,o=s.index),fy[a](i,e,o,r)}}}function Na(t,e,n){if(t){var i=t.getProvider().getSource().sourceFormat;if(i===Rm||i===Vm){var r=t.getRawDataItem(e);return i!==Rm||A(r)||(r=null),r?r[n]:void 0}}}function Ba(t){return new za(t)}function za(t){t=t||{},this._reset=t.reset,this._plan=t.plan,this._count=t.count,this._onDirty=t.onDirty,this._dirty=!0,this.context}function Ra(t,e,n,i,r,o){my.reset(n,i,r,o),t._callingProgress=e,t._callingProgress({start:n,end:i,count:i-n,next:my.next},t.context)}function Fa(t,e){var n,i;t._dueIndex=t._outputDueEnd=t._dueEnd=0,t._settedOutputEnd=null,!e&&t._reset&&(n=t._reset(t.context),n&&n.progress&&(i=n.forceFirstProgress,n=n.progress),S(n)&&!n.length&&(n=null)),t._progress=n,t._modBy=t._modDataCount=null;var r=t._downstream;return r&&r.dirty(),i}function Va(t){var e=t.name;Yn(t)||(t.name=$a(t)||e)}function $a(t){var e=t.getRawData(),n=e.mapDimension("seriesName",!0),i=[];return v(n,function(t){var n=e.getDimensionInfo(t);n.displayName&&i.push(n.displayName)}),i.join(" ")}function ja(t){return t.model.getRawData().count()}function Ha(t){var e=t.model;return e.setData(e.getRawData().cloneShallow()),Wa}function Wa(t,e){t.end>e.outputData.count()&&e.model.getRawData().cloneShallow(e.outputData)}function Ga(t,e){v(t.CHANGABLE_METHODS,function(n){t.wrapMethod(n,b(Ua,e))})}function Ua(t){var e=Za(t);e&&e.setOutputEnd(this.count())}function Za(t){var e=(t.ecModel||{}).scheduler,n=e&&e.getPipeline(t.uid);if(n){var i=n.currentTask;if(i){var r=i.agentStubMap;r&&(i=r.get(t.uid))}return i}}function Xa(){this.group=new hp,this.uid=Qr("viewChart"),this.renderTask=Ba({plan:Ka,reset:Ja}),this.renderTask.context={view:this}}function Ya(t,e,n){if(t&&(t.trigger(e,n),t.isGroup&&!Tr(t)))for(var i=0,r=t.childCount();r>i;i++)Ya(t.childAt(i),e,n)}function qa(t,e,n){var i=Kn(t,e),r=e&&null!=e.highlightKey?Cr(e.highlightKey):null;null!=i?v(Hn(i),function(e){Ya(t.getItemGraphicEl(e),n,r)}):t.eachItemGraphicEl(function(t){Ya(t,n,r)})}function Ka(t){return My(t.model)}function Ja(t){var e=t.model,n=t.ecModel,i=t.api,r=t.payload,o=e.pipelineContext.progressiveRender,a=t.view,s=r&&Sy(r).updateMethod,l=o?"incrementalPrepareRender":s&&a[s]?s:"render";return"render"!==l&&a[l](e,n,i,r),Ay[l]}function Qa(t,e,n){function i(){c=(new Date).getTime(),h=null,t.apply(a,s||[])}var r,o,a,s,l,u=0,c=0,h=null;e=e||0;var f=function(){r=(new Date).getTime(),a=this,s=arguments;var t=l||e,f=l||n;l=null,o=r-(f?u:c)-t,clearTimeout(h),f?h=setTimeout(i,t):o>=0?i():h=setTimeout(i,-o),u=r};return f.clear=function(){h&&(clearTimeout(h),h=null)},f.debounceNextCall=function(t){l=t},f}function ts(t,e,n,i){var r=t[e];if(r){var o=r[Ty]||r,a=r[ky],s=r[Cy];if(s!==n||a!==i){if(null==n||!i)return t[e]=o;r=t[e]=Qa(o,n,"debounce"===i),r[Ty]=o,r[ky]=i,r[Cy]=n}return r}}function es(t,e){var n=t[e];n&&n[Ty]&&(t[e]=n[Ty])}function ns(t,e,n,i){this.ecInstance=t,this.api=e,this.unfinished;n=this._dataProcessorHandlers=n.slice(),i=this._visualHandlers=i.slice();this._allHandlers=n.concat(i),this._stageTaskMap=$()}function is(t,e,n,i,r){function o(t,e){return t.setDirty&&(!t.dirtyMap||t.dirtyMap.get(e.__pipeline.id))}var a;r=r||{},v(e,function(e){if(!r.visualType||r.visualType===e.visualType){var s=t._stageTaskMap.get(e.uid),l=s.seriesTaskMap,u=s.overallTask;if(u){var c,h=u.agentStubMap;h.each(function(t){o(r,t)&&(t.dirty(),c=!0)}),c&&u.dirty(),By(u,i);var f=t.getPerformArgs(u,r.block);h.each(function(t){t.perform(f)}),a|=u.perform(f)}else l&&l.each(function(s){o(r,s)&&s.dirty();var l=t.getPerformArgs(s,r.block);l.skip=!e.performRawSeries&&n.isSeriesFiltered(s.context.model),By(s,i),a|=s.perform(l)})}}),t.unfinished|=a}function rs(t,e,n,i,r){function o(n){var o=n.uid,s=a.get(o)||a.set(o,Ba({plan:cs,reset:hs,count:ds}));s.context={model:n,ecModel:i,api:r,useClearVisual:e.isVisual&&!e.isLayout,plan:e.plan,reset:e.reset,scheduler:t},ps(t,n,s)}var a=n.seriesTaskMap||(n.seriesTaskMap=$()),s=e.seriesType,l=e.getTargetSeries;e.createOnAllSeries?i.eachRawSeries(o):s?i.eachRawSeriesByType(s,o):l&&l(i,r).each(o);var u=t._pipelineMap;a.each(function(t,e){u.get(e)||(t.dispose(),a.removeKey(e))})}function os(t,e,n,i,r){function o(e){var n=e.uid,i=s.get(n);i||(i=s.set(n,Ba({reset:ss,onDirty:us})),a.dirty()),i.context={model:e,overallProgress:c,modifyOutputEnd:h},i.agent=a,i.__block=c,ps(t,e,i)}var a=n.overallTask=n.overallTask||Ba({reset:as});a.context={ecModel:i,api:r,overallReset:e.overallReset,scheduler:t};var s=a.agentStubMap=a.agentStubMap||$(),l=e.seriesType,u=e.getTargetSeries,c=!0,h=e.modifyOutputEnd;l?i.eachRawSeriesByType(l,o):u?u(i,r).each(o):(c=!1,v(i.getSeries(),o));var f=t._pipelineMap;s.each(function(t,e){f.get(e)||(t.dispose(),a.dirty(),s.removeKey(e))})}function as(t){t.overallReset(t.ecModel,t.api,t.payload)}function ss(t){return t.overallProgress&&ls}function ls(){this.agent.dirty(),this.getDownstream().dirty()}function us(){this.agent&&this.agent.dirty()}function cs(t){return t.plan&&t.plan(t.model,t.ecModel,t.api,t.payload)}function hs(t){t.useClearVisual&&t.data.clearAllVisual();var e=t.resetDefines=Hn(t.reset(t.model,t.ecModel,t.api,t.payload));return e.length>1?m(e,function(t,e){return fs(e)}):zy}function fs(t){return function(e,n){var i=n.data,r=n.resetDefines[t];if(r&&r.dataEach)for(var o=e.start;o<e.end;o++)r.dataEach(i,o);else r&&r.progress&&r.progress(e,i)}}function ds(t){return t.data.count()}function ps(t,e,n){var i=e.uid,r=t._pipelineMap.get(i);!r.head&&(r.head=n),r.tail&&r.tail.pipe(n),r.tail=n,n.__idxInPipeline=r.count++,n.__pipeline=r}function gs(t){Ry=null;try{t(Fy,Vy)}catch(r){}return Ry}function vs(t,e){for(var n in e.prototype)t[n]=H}function ms(t){if(I(t)){var e=new DOMParser;t=e.parseFromString(t,"text/xml")}for(9===t.nodeType&&(t=t.firstChild);"svg"!==t.nodeName.toLowerCase()||1!==t.nodeType;)t=t.nextSibling;return t}function ys(){this._defs={},this._root=null,this._isDefine=!1,this._isText=!1}function _s(t,e){for(var n=t.firstChild;n;){if(1===n.nodeType){var i=n.getAttribute("offset");i=i.indexOf("%")>0?parseInt(i,10)/100:i?parseFloat(i):0;var r=n.getAttribute("stop-color")||"#000000";e.addColorStop(i,r)}n=n.nextSibling}}function xs(t,e){t&&t.__inheritedStyle&&(e.__inheritedStyle||(e.__inheritedStyle={}),c(e.__inheritedStyle,t.__inheritedStyle))}function ws(t){for(var e=z(t).split(Xy),n=[],i=0;i<e.length;i+=2){var r=parseFloat(e[i]),o=parseFloat(e[i+1]);n.push([r,o])}return n}function bs(t,e,n,i){var r=e.__inheritedStyle||{},o="text"===e.type;if(1===t.nodeType&&(Ms(t,e),u(r,Is(t)),!i))for(var a in Ky)if(Ky.hasOwnProperty(a)){var s=t.getAttribute(a);null!=s&&(r[Ky[a]]=s)}var l=o?"textFill":"fill",c=o?"textStroke":"stroke";e.style=e.style||new xp;var h=e.style;null!=r.fill&&h.set(l,Ss(r.fill,n)),null!=r.stroke&&h.set(c,Ss(r.stroke,n)),v(["lineWidth","opacity","fillOpacity","strokeOpacity","miterLimit","fontSize"],function(t){var e="lineWidth"===t&&o?"textStrokeWidth":t;null!=r[t]&&h.set(e,parseFloat(r[t]))}),r.textBaseline&&"auto"!==r.textBaseline||(r.textBaseline="alphabetic"),"alphabetic"===r.textBaseline&&(r.textBaseline="bottom"),"start"===r.textAlign&&(r.textAlign="left"),"end"===r.textAlign&&(r.textAlign="right"),v(["lineDashOffset","lineCap","lineJoin","fontWeight","fontFamily","fontStyle","textAlign","textBaseline"],function(t){null!=r[t]&&h.set(t,r[t])}),r.lineDash&&(e.style.lineDash=z(r.lineDash).split(Xy)),h[c]&&"none"!==h[c]&&(e[c]=!0),e.__inheritedStyle=r}function Ss(t,e){var n=e&&t&&t.match(Jy);if(n){var i=z(n[1]),r=e[i];return r}return t}function Ms(e,n){var i=e.getAttribute("transform");if(i){i=i.replace(/,/g," ");var r=null,o=[];i.replace(Qy,function(t,e,n){o.push(e,n)});for(var a=o.length-1;a>0;a-=2){var s=o[a],l=o[a-1];switch(r=r||Ot(),l){case"translate":s=z(s).split(Xy),Nt(r,r,[parseFloat(s[0]),parseFloat(s[1]||0)]);break;case"scale":s=z(s).split(Xy),zt(r,r,[parseFloat(s[0]),parseFloat(s[1]||s[0])]);break;case"rotate":s=z(s).split(Xy),Bt(r,r,parseFloat(s[0]));break;case"skew":s=z(s).split(Xy),console.warn(t("Skew transform is not supported yet"," at components/echarts/echarts.min.js:3"));break;case"matrix":s=z(s).split(Xy);r[0]=parseFloat(s[0]),r[1]=parseFloat(s[1]),r[2]=parseFloat(s[2]),r[3]=parseFloat(s[3]),r[4]=parseFloat(s[4]),r[5]=parseFloat(s[5])}}n.setLocalTransform(r)}}function Is(t){var e=t.getAttribute("style"),n={};if(!e)return n;var i,r={};for(t_.lastIndex=0;null!=(i=t_.exec(e));)r[i[1]]=i[2];for(var o in Ky)Ky.hasOwnProperty(o)&&null!=r[o]&&(n[Ky[o]]=r[o]);return n}function As(t,e,n){var i=e/t.width,r=n/t.height,o=Math.min(i,r),a=[o,o],s=[-(t.x+t.width/2)*o+e/2,-(t.y+t.height/2)*o+n/2];return{scale:a,position:s}}function Ts(t){return function(e,n,i){e=e&&e.toLowerCase(),xd.prototype[t].call(this,e,n,i)}}function Cs(){xd.call(this)}function ks(t,e,n){function i(t,e){return t.__prio-e.__prio}n=n||{},"string"==typeof e&&(e=E_[e]),this.id,this.group,this._dom=t;var r="canvas",o=this._zr=Rn(t,{renderer:n.renderer||r,devicePixelRatio:n.devicePixelRatio,width:n.width,height:n.height});this._throttledZrFlush=Qa(w(o.flush,o),17);e=a(e);e&&ly(e,!0),this._theme=e,this._chartsViews=[],this._chartsMap={},this._componentsViews=[],this._componentsMap={},this._coordSysMgr=new la;var s=this._api=Zs(this);Pe(L_,i),Pe(D_,i),this._scheduler=new ns(this,s,D_,L_),xd.call(this,this._ecEventProcessor=new Xs),this._messageCenter=new Cs,this._initEvents(),this.resize=w(this.resize,this),this._pendingActions=[],o.animation.on("frame",this._onframe,this),zs(o,this),R(this)}function Ds(t,e,n){var i,r=this._model,o=this._coordSysMgr.getCoordinateSystems();e=Qn(r,e);for(var a=0;a<o.length;a++){var s=o[a];if(s[t]&&null!=(i=s[t](r,e,n)))return i}}function Os(t){var e=t._model,n=t._scheduler;n.restorePipelines(e),n.prepareStageTasks(),Rs(t,"component",e,n),Rs(t,"chart",e,n),n.plan()}function Ps(t,e,n,i,r){function o(i){i&&i.__alive&&i[e]&&i[e](i.__model,a,t._api,n)}var a=t._model;if(i){var s={};s[i+"Id"]=n[i+"Id"],s[i+"Index"]=n[i+"Index"],s[i+"Name"]=n[i+"Name"];var l={mainType:i,query:s};r&&(l.subType=r);var u=n.excludeSeriesId;null!=u&&(u=$(Hn(u))),a&&a.eachComponent(l,function(e){u&&null!=u.get(e.id)||o(t["series"===i?"_chartsMap":"_componentsMap"][e.__viewId])},t)}else o_(t._componentsViews.concat(t._chartsViews),o)}function Ls(t,e){var n=t._chartsMap,i=t._scheduler;e.eachSeries(function(t){i.updateStreamModes(t,n[t.__viewId])})}function Es(t,e){var n=t.type,i=t.escapeConnect,r=C_[n],o=r.actionInfo,a=(o.update||"update").split(":"),s=a.pop();a=null!=a[0]&&l_(a[0]),this[b_]=!0;var l=[t],h=!1;t.batch&&(h=!0,l=m(t.batch,function(e){return e=c(u({},e),t),e.batch=null,e}));var f,d=[],p="highlight"===n||"downplay"===n;o_(l,function(t){f=r.action(t,this._model,this._api),f=f||u({},t),f.type=o.event||f.type,d.push(f),p?Ps(this,s,t,"series"):a&&Ps(this,s,t,a.main,a.sub)},this),"none"===s||p||a||(this[S_]?(Os(this),A_.update.call(this,t),this[S_]=!1):A_[s].call(this,t)),f=h?{type:o.event||n,escapeConnect:i,batch:d}:d[0],this[b_]=!1,!e&&this._messageCenter.trigger(f.type,f)}function Ns(t){for(var e=this._pendingActions;e.length;){var n=e.shift();Es.call(this,n,t)}}function Bs(t){!t&&this.trigger("updated")}function zs(t,e){t.on("rendered",function(){e.trigger("rendered"),!t.animation.isFinished()||e[S_]||e._scheduler.unfinished||e._pendingActions.length||e.trigger("finished")})}function Rs(t,e,n,i){function r(t){var e="_ec_"+t.id+"_"+t.type,r=s[e];if(!r){var c=l_(t.type),h=o?xy.getClass(c.main,c.sub):Xa.getClass(c.sub);r=new h,r.init(n,u),s[e]=r,a.push(r),l.add(r.group)}t.__viewId=r.__id=e,r.__alive=!0,r.__model=t,r.group.__ecComponentInfo={mainType:t.mainType,index:t.componentIndex},!o&&i.prepareView(r,t,n,u)}for(var o="component"===e,a=o?t._componentsViews:t._chartsViews,s=o?t._componentsMap:t._chartsMap,l=t._zr,u=t._api,c=0;c<a.length;c++)a[c].__alive=!1;o?n.eachComponent(function(t,e){"series"!==t&&r(e)}):n.eachSeries(r);for(c=0;c<a.length;){var h=a[c];h.__alive?c++:(!o&&h.renderTask.dispose(),l.remove(h.group),h.dispose(n,u),a.splice(c,1),delete s[h.__id],h.__id=h.group.__ecComponentInfo=null)}}function Fs(t){t.clearColorPalette(),t.eachSeries(function(t){t.clearColorPalette()})}function Vs(t,e,n,i){$s(t,e,n,i),o_(t._chartsViews,function(t){t.__alive=!1}),js(t,e,n,i),o_(t._chartsViews,function(t){t.__alive||t.remove(e,n)})}function $s(t,e,n,i,r){o_(r||t._componentsViews,function(t){var r=t.__model;t.render(r,e,n,i),Us(r,t)})}function js(t,e,n,i,r){var o,a=t._scheduler;e.eachSeries(function(e){var n=t._chartsMap[e.__viewId];n.__alive=!0;var s=n.renderTask;a.updatePayload(s,i),r&&r.get(e.uid)&&s.dirty(),o|=s.perform(a.getPerformArgs(s)),n.group.silent=!!e.get("silent"),Us(e,n),Gs(e,n)}),a.unfinished|=o,Ws(t,e),Py(t._zr.dom,e)}function Hs(t,e){o_(P_,function(n){n(t,e)})}function Ws(t,e){var n=t._zr,i=n.storage,r=0;i.traverse(function(){r++}),r>e.get("hoverLayerThreshold")&&!Jf.node&&e.eachSeries(function(e){if(!e.preventUsingHoverLayer){var n=t._chartsMap[e.__viewId];n.__alive&&n.group.traverse(function(t){t.useHoverLayer=!0})}})}function Gs(t,e){var n=t.get("blendMode")||null;e.group.traverse(function(t){t.isGroup||t.style.blend!==n&&t.setStyle("blend",n),t.eachPendingDisplayable&&t.eachPendingDisplayable(function(t){t.setStyle("blend",n)})})}function Us(t,e){var n=t.get("z"),i=t.get("zlevel");e.group.traverse(function(t){"group"!==t.type&&(null!=n&&(t.z=n),null!=i&&(t.zlevel=i))})}function Zs(t){var e=t._coordSysMgr;return u(new sa(t),{getCoordinateSystems:w(e.getCoordinateSystems,e),getComponentByElement:function(e){for(;e;){var n=e.__ecComponentInfo;if(null!=n)return t._model.getComponent(n.mainType,n.index);e=e.parent}}})}function Xs(){this.eventInfo}function Ys(t){function e(t,e){for(var n=0;n<t.length;n++){var i=t[n];i[o]=e}}var n=0,i=1,r=2,o="__connectUpdateStatus";o_(k_,function(a,s){t._messageCenter.on(s,function(a){if(z_[t.group]&&t[o]!==n){if(a&&a.escapeConnect)return;var s=t.makeActionFromEvent(a),l=[];o_(B_,function(e){e!==t&&e.group===t.group&&l.push(e)}),e(l,n),o_(l,function(t){t[o]!==i&&t.dispatchAction(s)}),e(l,r)}})})}function qs(t,e,n){var i=tl(t);if(i)return i;var r=new ks(t,e,n);return r.id="ec_"+R_++,B_[r.id]=r,ei(t,V_,r.id),Ys(r),r}function Ks(t){if(S(t)){var e=t;t=null,o_(e,function(e){null!=e.group&&(t=e.group)}),t=t||"g_"+F_++,o_(e,function(e){e.group=t})}return z_[t]=!0,t}function Js(t){z_[t]=!1}function Qs(t){"string"==typeof t?t=B_[t]:t instanceof ks||(t=tl(t)),t instanceof ks&&!t.isDisposed()&&t.dispose()}function tl(t){return B_[ni(t,V_)]}function el(t){return B_[t]}function nl(t,e){E_[t]=e}function il(t){O_.push(t)}function rl(t,e){hl(D_,t,e,f_)}function ol(t){P_.push(t)}function al(t,e,n){"function"==typeof e&&(n=e,e="");var i=s_(t)?t.type:[t,t={event:e}][0];t.event=(t.event||i).toLowerCase(),e=t.event,r_(M_.test(i)&&M_.test(e)),C_[i]||(C_[i]={action:n,actionInfo:t}),k_[e]=i}function sl(t,e){la.register(t,e)}function ll(t){var e=la.get(t);return e?e.getDimensionsInfo?e.getDimensionsInfo():e.dimensions.slice():void 0}function ul(t,e){hl(L_,t,e,p_,"layout")}function cl(t,e){hl(L_,t,e,m_,"visual")}function hl(t,e,n,i,r){(a_(e)||s_(e))&&(n=e,e=i);var o=ns.wrapStageHandler(n,r);return o.__prio=e,o.__raw=n,t.push(o),o}function fl(t,e){N_[t]=e}function dl(t){return Pm.extend(t)}function pl(t){return xy.extend(t)}function gl(t){return _y.extend(t)}function vl(t){return Xa.extend(t)}function ml(t){o("createCanvas",t)}function yl(t,e,n){n_.registerMap(t,e,n)}function _l(t){var e=n_.retrieveMap(t);return e&&e[0]&&{geoJson:e[0].geoJSON,specialAreas:e[0].specialAreas}}function xl(t){return t}function wl(t,e,n,i,r){this._old=t,this._new=e,this._oldKeyGetter=n||xl,this._newKeyGetter=i||xl,this.context=r}function bl(t,e,n,i,r){for(var o=0;o<t.length;o++){var a="_ec_"+r[i](t[o],o),s=e[a];null==s?(n.push(a),e[a]=o):(s.length||(e[a]=s=[s]),s.push(o))}}function Sl(t){var e={},n=e.encode={},i=$(),r=[],o=[],a=e.userOutput={dimensionNames:t.dimensions.slice(),encode:{}};v(t.dimensions,function(e){var s=t.getDimensionInfo(e),l=s.coordDim;if(l){var u=s.coordDimIndex;Ml(n,l)[u]=e,s.isExtraCoord||(i.set(l,1),Al(s.type)&&(r[0]=e),Ml(a.encode,l)[u]=s.index),s.defaultTooltip&&o.push(e)}H_.each(function(t,e){var i=Ml(n,e),r=s.otherDims[e];null!=r&&!1!==r&&(i[r]=s.name)})});var s=[],l={};i.each(function(t,e){var i=n[e];l[e]=i[0],s=s.concat(i)}),e.dataDimsOnCoord=s,e.encodeFirstDimNotExtra=l;var u=n.label;u&&u.length&&(r=u.slice());var c=n.tooltip;return c&&c.length?o=c.slice():o.length||(o=r.slice()),n.defaultedLabel=r,n.defaultedTooltip=o,e}function Ml(t,e){return t.hasOwnProperty(e)||(t[e]=[]),t[e]}function Il(t){return"category"===t?"ordinal":"time"===t?"time":"float"}function Al(t){return!("ordinal"===t||"time"===t)}function Tl(t){return t._rawCount>65535?Y_:K_}function Cl(t){var e=t.constructor;return e===Array?t.slice():new e(t)}function kl(t,e){v(J_.concat(e.__wrappedMethods||[]),function(n){e.hasOwnProperty(n)&&(t[n]=e[n])}),t.__wrappedMethods=e.__wrappedMethods,v(Q_,function(n){t[n]=a(e[n])}),t._calculationInfo=u(e._calculationInfo)}function Dl(t,e,n,i,r){var o=X_[e.type],a=i-1,s=e.name,l=t[s][a];if(l&&l.length<n){for(var u=new o(Math.min(r-a*n,n)),c=0;c<l.length;c++)u[c]=l[c];t[s][a]=u}for(var h=i*n;r>h;h+=n)t[s].push(new o(Math.min(r-h,n)))}function Ol(t){var e=t._invertedIndicesMap;v(e,function(n,i){var r=t._dimensionInfos[i],o=r.ordinalMeta;if(o){n=e[i]=new q_(o.categories.length);for(var a=0;a<n.length;a++)n[a]=U_;for(a=0;a<t._count;a++)n[t.get(i,a)]=a}})}function Pl(t,e,n){var i;if(null!=e){var r=t._chunkSize,o=Math.floor(n/r),a=n%r,s=t.dimensions[e],l=t._storage[s][o];if(l){i=l[a];var u=t._dimensionInfos[s].ordinalMeta;u&&u.categories.length&&(i=u.categories[i])}}return i}function Ll(t){return t}function El(t){return t<this._count&&t>=0?this._indices[t]:-1}function Nl(t,e){var n=t._idList[e];return null==n&&(n=Pl(t,t._idDimIdx,e)),null==n&&(n=Z_+e),n}function Bl(t){return S(t)||(t=[t]),t}function zl(t,e){var n=t.dimensions,i=new tx(m(n,t.getDimensionInfo,t),t.hostModel);kl(i,t);for(var r=i._storage={},o=t._storage,a=0;a<n.length;a++){var s=n[a];o[s]&&(f(e,s)>=0?(r[s]=Rl(o[s]),i._rawExtent[s]=Fl(),i._extent[s]=null):r[s]=o[s])}return i}function Rl(t){for(var e=new Array(t.length),n=0;n<t.length;n++)e[n]=Cl(t[n]);return e}function Fl(){return[1/0,-1/0]}function Vl(t,e,n){function i(t,e,n){null!=H_.get(e)?t.otherDims[e]=n:(t.coordDim=e,t.coordDimIndex=n,l.set(e,!0))}$o.isInstance(e)||(e=$o.seriesDataToSource(e)),n=n||{},t=(t||[]).slice();for(var r=(n.dimsDef||[]).slice(),o=$(n.encodeDef),s=$(),l=$(),h=[],f=$l(e,t,r,n.dimCount),d=0;f>d;d++){var p=r[d]=u({},A(r[d])?r[d]:{name:r[d]}),g=p.name,m=h[d]={otherDims:{}};null!=g&&null==s.get(g)&&(m.name=m.displayName=g,s.set(g,d)),null!=p.type&&(m.type=p.type),null!=p.displayName&&(m.displayName=p.displayName)}o.each(function(t,e){if(t=Hn(t).slice(),1===t.length&&!I(t[0])&&t[0]<0)o.set(e,!1);else{var n=o.set(e,[]);v(t,function(t,r){I(t)&&(t=s.get(t)),null!=t&&f>t&&(n[r]=t,i(h[t],e,r))})}});var y=0;v(t,function(t){var e,n,r;if(I(t))e=t,t={};else{e=t.name;var s=t.ordinalMeta;t.ordinalMeta=null,t=a(t),t.ordinalMeta=s,n=t.dimsDef,r=t.otherDims,t.name=t.coordDim=t.coordDimIndex=t.dimsDef=t.otherDims=null}var l=o.get(e);if(!1!==l){l=Hn(l);if(!l.length)for(var u=0;u<(n&&n.length||1);u++){for(;y<h.length&&null!=h[y].coordDim;)y++;y<h.length&&l.push(y++)}v(l,function(o,a){var s=h[o];if(i(c(s,t),e,a),null==s.name&&n){var l=n[a];!A(l)&&(l={name:l}),s.name=s.displayName=l.name,s.defaultTooltip=l.defaultTooltip}r&&c(s.otherDims,r)})}});var _=n.generateCoord,x=n.generateCoordCount,w=null!=x;x=_?x||1:0;for(var b=_||"value",S=0;f>S;S++){m=h[S]=h[S]||{};var M=m.coordDim;null==M&&(m.coordDim=jl(b,l,w),m.coordDimIndex=0,(!_||0>=x)&&(m.isExtraCoord=!0),x--),null==m.name&&(m.name=jl(m.coordDim,s)),null==m.type&&Jo(e,S,m.name)&&(m.type="ordinal")}return h}function $l(t,e,n,i){var r=Math.max(t.dimensionsDetectCount||1,e.length,n.length,i||0);return v(e,function(t){var e=t.dimsDef;e&&(r=Math.max(r,e.length))}),r}function jl(t,e,n){if(n||null!=e.get(t)){for(var i=0;null!=e.get(t+i);)i++;t+=i}return e.set(t,!0),t}function Hl(t,e,n){n=n||{};var i,r,o,a,s=n.byIndex,l=n.stackedCoordDimension,u=!(!t||!t.get("stack"));if(v(e,function(t,n){I(t)&&(e[n]=t={name:t}),u&&!t.isExtraCoord&&(s||i||!t.ordinalMeta||(i=t),r||"ordinal"===t.type||"time"===t.type||l&&l!==t.coordDim||(r=t))}),!r||s||i||(s=!0),r){o="__\0ecstackresult",a="__\0ecstackedover",i&&(i.createInvertedIndices=!0);var c=r.coordDim,h=r.type,f=0;v(e,function(t){t.coordDim===c&&f++}),e.push({name:o,coordDim:c,coordDimIndex:f,type:h,isExtraCoord:!0,isCalculationCoord:!0}),f++,e.push({name:a,coordDim:a,coordDimIndex:f,type:h,isExtraCoord:!0,isCalculationCoord:!0})}return{stackedDimension:r&&r.name,stackedByDimension:i&&i.name,isStackedByIndex:s,stackedOverDimension:a,stackResultDimension:o}}function Wl(t,e){return!!e&&e===t.getCalculationInfo("stackedDimension")}function Gl(t,e){return Wl(t,e)?t.getCalculationInfo("stackResultDimension"):e}function Ul(t,e,n){n=n||{},$o.isInstance(t)||(t=$o.seriesDataToSource(t));var i,r=e.get("coordinateSystem"),o=la.get(r),a=Fo(e);a&&(i=m(a.coordSysDims,function(t){var e={name:t},n=a.axisMap.get(t);if(n){var i=n.get("type");e.type=Il(i)}return e})),i||(i=o&&(o.getDimensionsInfo?o.getDimensionsInfo():o.dimensions.slice())||["x","y"]);var s,l,u=ix(t,{coordDimensions:i,generateCoord:n.generateCoord});a&&v(u,function(t,e){var n=t.coordDim,i=a.categoryAxisMap.get(n);i&&(null==s&&(s=e),t.ordinalMeta=i.getOrdinalMeta()),null!=t.otherDims.itemName&&(l=!0)}),l||null==s||(u[s].otherDims.itemName=0);var c=Hl(e,u),h=new tx(u,e);h.setCalculationInfo(c);var f=null!=s&&Zl(t)?function(t,e,n,i){return i===s?n:this.defaultDimValueGetter(t,e,n,i)}:null;return h.hasItemOption=!1,h.initData(t,null,f),h}function Zl(t){if(t.sourceFormat===Rm){var e=Xl(t.data||[]);return null!=e&&!S(Gn(e))}}function Xl(t){for(var e=0;e<t.length&&null==t[e];)e++;return t[e]}function Yl(t){this._setting=t||{},this._extent=[1/0,-1/0],this._interval=0,this.init&&this.init.apply(this,arguments)}function ql(t){this.categories=t.categories||[],this._needCollect=t.needCollect,this._deduplication=t.deduplication,this._map}function Kl(t){return t._map||(t._map=$(t.categories))}function Jl(t){return A(t)&&null!=t.value?t.value:t+""}function Ql(t,e,n,i){var r={},o=t[1]-t[0],a=r.interval=mo(o/e,!0);null!=n&&n>a&&(a=r.interval=n),null!=i&&a>i&&(a=r.interval=i);var s=r.intervalPrecision=tu(a),l=r.niceTickExtent=[sx(Math.ceil(t[0]/a)*a,s),sx(Math.floor(t[1]/a)*a,s)];return nu(l,t),r}function tu(t){return lo(t)+2}function eu(t,e,n){t[e]=Math.max(Math.min(t[e],n[1]),n[0])}function nu(t,e){!isFinite(t[0])&&(t[0]=e[0]),!isFinite(t[1])&&(t[1]=e[1]),eu(t,0,e),eu(t,1,e),t[0]>t[1]&&(t[0]=t[1])}function iu(t,e,n,i){var r=[];if(!t)return r;var o=1e4;e[0]<n[0]&&r.push(e[0]);for(var a=n[0];a<=n[1]&&(r.push(a),a=sx(a+t,i),a!==r[r.length-1]);)if(r.length>o)return[];return e[1]>(r.length?r[r.length-1]:n[1])&&r.push(e[1]),r}function ru(t){return t.get("stack")||cx+t.seriesIndex}function ou(t){return t.dim+t.index}function au(t,e){var n=[];return e.eachSeriesByType(t,function(t){hu(t)&&!fu(t)&&n.push(t)}),n}function su(t){var e=[];return v(t,function(t){var n=t.getData(),i=t.coordinateSystem,r=i.getBaseAxis(),o=r.getExtent(),a="category"===r.type?r.getBandWidth():Math.abs(o[1]-o[0])/n.count(),s=ro(t.get("barWidth"),a),l=ro(t.get("barMaxWidth"),a),u=t.get("barGap"),c=t.get("barCategoryGap");e.push({bandWidth:a,barWidth:s,barMaxWidth:l,barGap:u,barCategoryGap:c,axisKey:ou(r),stackId:ru(t)})}),lu(e)}function lu(t){var e={};v(t,function(t){var n=t.axisKey,i=t.bandWidth,r=e[n]||{bandWidth:i,remainedWidth:i,autoWidthCount:0,categoryGap:"20%",gap:"30%",stacks:{}},o=r.stacks;e[n]=r;var a=t.stackId;o[a]||r.autoWidthCount++,o[a]=o[a]||{width:0,maxWidth:0};var s=t.barWidth;s&&!o[a].width&&(o[a].width=s,s=Math.min(r.remainedWidth,s),r.remainedWidth-=s);var l=t.barMaxWidth;l&&(o[a].maxWidth=l);var u=t.barGap;null!=u&&(r.gap=u);var c=t.barCategoryGap;null!=c&&(r.categoryGap=c)});var n={};return v(e,function(t,e){n[e]={};var i=t.stacks,r=t.bandWidth,o=ro(t.categoryGap,r),a=ro(t.gap,1),s=t.remainedWidth,l=t.autoWidthCount,u=(s-o)/(l+(l-1)*a);u=Math.max(u,0),v(i,function(t){var e=t.maxWidth;e&&u>e&&(e=Math.min(e,s),t.width&&(e=Math.min(e,t.width)),s-=e,t.width=e,l--)}),u=(s-o)/(l+(l-1)*a),u=Math.max(u,0);var c,h=0;v(i,function(t){t.width||(t.width=u),c=t,h+=t.width*(1+a)}),c&&(h-=c.width*a);var f=-h/2;v(i,function(t,i){n[e][i]=n[e][i]||{offset:f,width:t.width},f+=t.width*(1+a)})}),n}function uu(t,e,n){if(t&&e){var i=t[ou(e)];return null!=i&&null!=n&&(i=i[ru(n)]),i}}function cu(t,e){var n=au(t,e),i=su(n),r={};v(n,function(t){var e=t.getData(),n=t.coordinateSystem,o=n.getBaseAxis(),a=ru(t),s=i[ou(o)][a],l=s.offset,u=s.width,c=n.getOtherAxis(o),h=t.get("barMinHeight")||0;r[a]=r[a]||[],e.setLayout({offset:l,size:u});for(var f=e.mapDimension(c.dim),d=e.mapDimension(o.dim),p=Wl(e,f),g=c.isHorizontal(),v=du(o,c,p),m=0,y=e.count();y>m;m++){var _=e.get(f,m),x=e.get(d,m);if(!isNaN(_)&&!isNaN(x)){var w,b,S,M,I=_>=0?"p":"n",A=v;if(p&&(r[a][x]||(r[a][x]={p:v,n:v}),A=r[a][x][I]),g){var T=n.dataToPoint([_,x]);w=A,b=T[1]+l,S=T[0]-v,M=u,Math.abs(S)<h&&(S=(0>S?-1:1)*h),p&&(r[a][x][I]+=S)}else{T=n.dataToPoint([x,_]);w=T[0]+l,b=A,S=u,M=T[1]-v,Math.abs(M)<h&&(M=(0>=M?-1:1)*h),p&&(r[a][x][I]+=M)}e.setItemLayout(m,{x:w,y:b,width:S,height:M})}}},this)}function hu(t){return t.coordinateSystem&&"cartesian2d"===t.coordinateSystem.type}function fu(t){return t.pipelineContext&&t.pipelineContext.large}function du(t,e){var n,i,r=e.getGlobalExtent();r[0]>r[1]?(n=r[1],i=r[0]):(n=r[0],i=r[1]);var o=e.toGlobalCoord(e.dataToCoord(0));return n>o&&(o=n),o>i&&(o=i),o}function pu(t,e){return Cx(t,Tx(e))}function gu(t,e){var n,i,r,o=t.type,a=e.getMin(),s=e.getMax(),l=null!=a,u=null!=s,c=t.getExtent();"ordinal"===o?n=e.getCategories().length:(i=e.get("boundaryGap"),S(i)||(i=[i||0,i||0]),"boolean"==typeof i[0]&&(i=[0,0]),i[0]=ro(i[0],1),i[1]=ro(i[1],1),r=c[1]-c[0]||Math.abs(c[0])),null==a&&(a="ordinal"===o?n?0:NaN:c[0]-i[0]*r),null==s&&(s="ordinal"===o?n?n-1:NaN:c[1]+i[1]*r),"dataMin"===a?a=c[0]:"function"==typeof a&&(a=a({min:c[0],max:c[1]})),"dataMax"===s?s=c[1]:"function"==typeof s&&(s=s({min:c[0],max:c[1]})),(null==a||!isFinite(a))&&(a=NaN),(null==s||!isFinite(s))&&(s=NaN),t.setBlank(D(a)||D(s)||"ordinal"===o&&!t.getOrdinalMeta().categories.length),e.getNeedCrossZero()&&(a>0&&s>0&&!l&&(a=0),0>a&&0>s&&!u&&(s=0));var h=e.ecModel;if(h&&"time"===o){var f,d=au("bar",h);if(v(d,function(t){f|=t.getBaseAxis()===e.axis}),f){var p=su(d),g=vu(a,s,e,p);a=g.min,s=g.max}}return[a,s]}function vu(t,e,n,i){var r=n.axis.getExtent(),o=r[1]-r[0],a=uu(i,n.axis);if(void 0===a)return{min:t,max:e};var s=1/0;v(a,function(t){s=Math.min(t.offset,s)});var l=-1/0;v(a,function(t){l=Math.max(t.offset+t.width,l)}),s=Math.abs(s),l=Math.abs(l);var u=s+l,c=e-t,h=1-(s+l)/o,f=c/h-c;return e+=f*(l/u),t-=f*(s/u),{min:t,max:e}}function mu(t,e){var n=gu(t,e),i=null!=e.getMin(),r=null!=e.getMax(),o=e.get("splitNumber");"log"===t.type&&(t.base=e.get("logBase"));var a=t.type;t.setExtent(n[0],n[1]),t.niceExtent({splitNumber:o,fixMin:i,fixMax:r,minInterval:"interval"===a||"time"===a?e.get("minInterval"):null,maxInterval:"interval"===a||"time"===a?e.get("maxInterval"):null});var s=e.get("interval");null!=s&&t.setInterval&&t.setInterval(s)}function yu(t,e){if(e=e||t.get("type"))switch(e){case"category":return new ax(t.getOrdinalMeta?t.getOrdinalMeta():t.getCategories(),[1/0,-1/0]);case"value":return new ux;default:return(Yl.getClass(e)||ux).create(t)}}function _u(t){var e=t.scale.getExtent(),n=e[0],i=e[1];return!(n>0&&i>0||0>n&&0>i)}function xu(t){var e=t.getLabelModel().get("formatter"),n="category"===t.type?t.scale.getExtent()[0]:null;return"string"==typeof e?e=function(e){return function(n){return n=t.scale.getLabel(n),e.replace("{value}",null!=n?n:"")}}(e):"function"==typeof e?function(i,r){return null!=n&&(r=i-n),e(wu(t,i),r)}:function(e){return t.scale.getLabel(e)}}function wu(t,e){return"category"===t.type?t.scale.getLabel(e):e}function bu(t){var e=t.model,n=t.scale;if(e.get("axisLabel.show")&&!n.isBlank()){var i,r,o="category"===t.type,a=n.getExtent();o?r=n.count():(i=n.getTicks(),r=i.length);var s,l=t.getLabelModel(),u=xu(t),c=1;r>40&&(c=Math.ceil(r/40));for(var h=0;r>h;h+=c){var f=i?i[h]:a[0]+h,d=u(f),p=l.getTextRect(d),g=Su(p,l.get("rotate")||0);s?s.union(g):s=g}return s}}function Su(t,e){var n=e*Math.PI/180,i=t.plain(),r=i.width,o=i.height,a=r*Math.cos(n)+o*Math.sin(n),s=r*Math.sin(n)+o*Math.cos(n),l=new Me(i.x,i.y,a,s);return l}function Mu(t){var e=t.get("interval");return null==e?"auto":e}function Iu(t){return"category"===t.type&&0===Mu(t.getLabelModel())}function Au(t,e){if("image"!==this.type){var n=this.style,i=this.shape;i&&"line"===i.symbolType?n.stroke=t:this.__isEmptyBrush?(n.stroke=t,n.fill=e||"#fff"):(n.fill&&(n.fill=t),n.stroke&&(n.stroke=t)),this.dirty(!1)}}function Tu(t,e,n,i,r,o,a){var s,l=0===t.indexOf("empty");return l&&(t=t.substr(5,1).toLowerCase()+t.substr(6)),s=0===t.indexOf("image://")?sr(t.slice(8),new Me(e,n,i,r),a?"center":"cover"):0===t.indexOf("path://")?ar(t.slice(7),{},new Me(e,n,i,r),a?"center":"cover"):new jx({shape:{symbolType:t,x:e,y:n,width:i,height:r}}),s.__isEmptyBrush=l,s.setColor=Au,s.setColor(o),s}function Cu(t){return Ul(t.getSource(),t)}function ku(t,e){var n=e;qr.isInstance(e)||(n=new qr(e),p(n,Ex));var i=yu(n);return i.setExtent(t[0],t[1]),mu(i,n),i}function Du(t){p(t,Ex)}function Ou(t,e){return Math.abs(t-e)<Gx}function Pu(t,e,n){var i=0,r=t[0];if(!r)return!1;for(var o=1;o<t.length;o++){var a=t[o];i+=Ni(r[0],r[1],a[0],a[1],e,n),r=a}var s=t[0];return Ou(r[0],s[0])&&Ou(r[1],s[1])||(i+=Ni(r[0],r[1],s[0],s[1],e,n)),0!==i}function Lu(t,e,n){if(this.name=t,this.geometries=e,n)n=[n[0],n[1]];else{var i=this.getBoundingRect();n=[i.x+i.width/2,i.y+i.height/2]}this.center=n}function Eu(t){if(!t.UTF8Encoding)return t;var e=t.UTF8Scale;null==e&&(e=1024);for(var n=t.features,i=0;i<n.length;i++)for(var r=n[i],o=r.geometry,a=o.coordinates,s=o.encodeOffsets,l=0;l<a.length;l++){var u=a[l];if("Polygon"===o.type)a[l]=Nu(u,s[l],e);else if("MultiPolygon"===o.type)for(var c=0;c<u.length;c++){var h=u[c];u[c]=Nu(h,s[l][c],e)}}return t.UTF8Encoding=!1,t}function Nu(t,e,n){for(var i=[],r=e[0],o=e[1],a=0;a<t.length;a+=2){var s=t.charCodeAt(a)-64,l=t.charCodeAt(a+1)-64;s=s>>1^-(1&s),l=l>>1^-(1&l),s+=r,l+=o,r=s,o=l,i.push([s/n,l/n])}return i}function Bu(t){return"category"===t.type?Ru(t):$u(t)}function zu(t,e){return"category"===t.type?Vu(t,e):{ticks:t.scale.getTicks()}}function Ru(t){var e=t.getLabelModel(),n=Fu(t,e);return!e.get("show")||t.scale.isBlank()?{labels:[],labelCategoryInterval:n.labelCategoryInterval}:n}function Fu(t,e){var n,i,r=ju(t,"labels"),o=Mu(e),a=Hu(r,o);return a||(M(o)?n=Yu(t,o):(i="auto"===o?Gu(t):o,n=Xu(t,i)),Wu(r,o,{labels:n,labelCategoryInterval:i}))}function Vu(t,e){var n,i,r=ju(t,"ticks"),o=Mu(e),a=Hu(r,o);if(a)return a;if((!e.get("show")||t.scale.isBlank())&&(n=[]),M(o))n=Yu(t,o,!0);else if("auto"===o){var s=Fu(t,t.getLabelModel());i=s.labelCategoryInterval,n=m(s.labels,function(t){return t.tickValue})}else i=o,n=Xu(t,i,!0);return Wu(r,o,{ticks:n,tickCategoryInterval:i})}function $u(t){var e=t.scale.getTicks(),n=xu(t);return{labels:m(e,function(e,i){return{formattedLabel:n(e,i),rawLabel:t.scale.getLabel(e),tickValue:e}})}}function ju(t,e){return Zx(t)[e]||(Zx(t)[e]=[])}function Hu(t,e){for(var n=0;n<t.length;n++)if(t[n].key===e)return t[n].value}function Wu(t,e,n){return t.push({key:e,value:n}),n}function Gu(t){var e=Zx(t).autoInterval;return null!=e?e:Zx(t).autoInterval=t.calculateCategoryInterval()}function Uu(t){var e=Zu(t),n=xu(t),i=(e.axisRotate-e.labelRotate)/180*Math.PI,r=t.scale,o=r.getExtent(),a=r.count();if(o[1]-o[0]<1)return 0;var s=1;a>40&&(s=Math.max(1,Math.floor(a/40)));for(var l=o[0],u=t.dataToCoord(l+1)-t.dataToCoord(l),c=Math.abs(u*Math.cos(i)),h=Math.abs(u*Math.sin(i)),f=0,d=0;l<=o[1];l+=s){var p=0,g=0,v=He(n(l),e.font,"center","top");p=1.3*v.width,g=1.3*v.height,f=Math.max(f,p,7),d=Math.max(d,g,7)}var m=f/c,y=d/h;isNaN(m)&&(m=1/0),isNaN(y)&&(y=1/0);var _=Math.max(0,Math.floor(Math.min(m,y))),x=Zx(t.model),w=x.lastAutoInterval,b=x.lastTickCount;return null!=w&&null!=b&&Math.abs(w-_)<=1&&Math.abs(b-a)<=1&&w>_?_=w:(x.lastTickCount=a,x.lastAutoInterval=_),_}function Zu(t){var e=t.getLabelModel();return{axisRotate:t.getRotate?t.getRotate():t.isHorizontal&&!t.isHorizontal()?90:0,labelRotate:e.get("rotate")||0,font:e.getFont()}}function Xu(t,e,n){function i(t){l.push(n?t:{formattedLabel:r(t),rawLabel:o.getLabel(t),tickValue:t})}var r=xu(t),o=t.scale,a=o.getExtent(),s=t.getLabelModel(),l=[],u=Math.max((e||0)+1,1),c=a[0],h=o.count();0!==c&&u>1&&h/u>2&&(c=Math.round(Math.ceil(c/u)*u));var f=Iu(t),d=s.get("showMinLabel")||f,p=s.get("showMaxLabel")||f;d&&c!==a[0]&&i(a[0]);for(var g=c;g<=a[1];g+=u)i(g);return p&&g-u!==a[1]&&i(a[1]),l}function Yu(t,e,n){var i=t.scale,r=xu(t),o=[];return v(i.getTicks(),function(t){var a=i.getLabel(t);e(t,a)&&o.push(n?t:{formattedLabel:r(t),rawLabel:a,tickValue:t})}),o}function qu(t,e){var n=t[1]-t[0],i=e,r=n/i/2;t[0]+=r,t[1]-=r}function Ku(t,e,n,i,r){function o(t,e){return c?t>e:e>t}var a=e.length;if(t.onBand&&!i&&a){var s,l=t.getExtent();if(1===a)e[0].coord=l[0],s=e[1]={coord:l[0]};else{var u=e[1].coord-e[0].coord;v(e,function(t){t.coord-=u/2;var e=e||0;e%2>0&&(t.coord-=u/(2*(e+1)))}),s={coord:e[a-1].coord+u},e.push(s)}var c=l[0]>l[1];o(e[0].coord,l[0])&&(r?e[0].coord=l[0]:e.shift()),r&&o(l[0],e[0].coord)&&e.unshift({coord:l[0]}),o(l[1],s.coord)&&(r?s.coord=l[1]:e.pop()),r&&o(s.coord,l[1])&&e.push({coord:l[1]})}}function Ju(t){return this._axes[t]}function Qu(t){Qx.call(this,t)}function tc(t,e){return e.type||(e.data?"category":"value")}function ec(t,e){return t.getCoordSysModel()===e}function nc(t,e,n){this._coordsMap={},this._coordsList=[],this._axesMap={},this._axesList=[],this._initCartesian(t,e,n),this.model=t}function ic(t,e,n,i){function r(t){return t.dim+"_"+t.index}n.getAxesOnZeroOf=function(){return o?[o]:[]};var o,a=t[e],s=n.model,l=s.get("axisLine.onZero"),u=s.get("axisLine.onZeroAxisIndex");if(l){if(null!=u)rc(a[u])&&(o=a[u]);else for(var c in a)if(a.hasOwnProperty(c)&&rc(a[c])&&!i[r(a[c])]){o=a[c];break}o&&(i[r(o)]=!0)}}function rc(t){return t&&"category"!==t.type&&"time"!==t.type&&_u(t)}function oc(t,e){var n=t.getExtent(),i=n[0]+n[1];t.toGlobalCoord="x"===t.dim?function(t){return t+e}:function(t){return i-t+e},t.toLocalCoord="x"===t.dim?function(t){return t-e}:function(t){return i-t+e}}function ac(t){return m(lw,function(e){var n=t.getReferringComponents(e)[0];return n})}function sc(t){return"cartesian2d"===t.get("coordinateSystem")}function lc(t,e){var n=t.mapDimension("defaultedLabel",!0),i=n.length;if(1===i)return Ea(t,e,n[0]);if(i){for(var r=[],o=0;o<n.length;o++){var a=Ea(t,e,n[o]);r.push(a)}return r.join(" ")}}function uc(t,e,n,i,r,o){var a=n.getModel("label"),s=n.getModel("emphasis.label");kr(t,e,a,s,{labelFetcher:r,labelDataIndex:o,defaultText:lc(r.getData(),o),isRectText:!0,autoColor:i}),cc(t),cc(e)}function cc(t,e){"outside"===t.textPosition&&(t.textPosition=e)}function hc(t,e,n){n.style.text=null,$r(n,{shape:{width:0}},e,t,function(){n.parent&&n.parent.remove(n)})}function fc(t,e,n){n.style.text=null,$r(n,{shape:{r:n.shape.r0}},e,t,function(){n.parent&&n.parent.remove(n)})}function dc(t,e,n,i,r,o,a,s){var l=e.getItemVisual(n,"color"),u=e.getItemVisual(n,"opacity"),h=i.getModel("itemStyle"),f=i.getModel("emphasis.itemStyle").getBarItemStyle();s||t.setShape("r",h.get("barBorderRadius")||0),t.useStyle(c({fill:l,opacity:u},h.getBarItemStyle()));var d=i.getShallow("cursor");d&&t.attr("cursor",d);var p=a?r.height>0?"bottom":"top":r.width>0?"left":"right";s||uc(t.style,f,i,l,o,n,p),Ir(t,f)}function pc(t,e){var n=t.get(fw)||0;return Math.min(n,Math.abs(e.width),Math.abs(e.height))}function gc(t,e,n){var i=t.getData(),r=[],o=i.getLayout("valueAxisHorizontal")?1:0;r[1-o]=i.getLayout("valueAxisStart");var a=new vw({shape:{points:i.getLayout("largePoints")},incremental:!!n,__startPoint:r,__baseDimIdx:o,__largeDataIndices:i.getLayout("largeDataIndices"),__barWidth:i.getLayout("barWidth")});e.add(a),mc(a,t,i),a.seriesIndex=t.seriesIndex,t.get("silent")||(a.on("mousedown",mw),a.on("mousemove",mw))}function vc(t,e,n){var i=t.__baseDimIdx,r=1-i,o=t.shape.points,a=t.__largeDataIndices,s=Math.abs(t.__barWidth/2),l=t.__startPoint[r];dw[0]=e,dw[1]=n;for(var u=dw[i],c=dw[1-i],h=u-s,f=u+s,d=0,p=o.length/2;p>d;d++){var g=2*d,v=o[g+i],m=o[g+r];if(v>=h&&f>=v&&(m>=l?c>=l&&m>=c:c>=m&&l>=c))return a[d]}return-1}function mc(t,e,n){var i=n.getVisual("borderColor")||n.getVisual("color"),r=e.getModel("itemStyle").getItemStyle(["color","borderColor"]);t.useStyle(r),t.style.fill=null,t.style.stroke=i,t.style.lineWidth=n.getLayout("barWidth")}function yc(t,e,n,i){var r,o,a=ho(n-t.rotation),s=i[0]>i[1],l="start"===e&&!s||"start"!==e&&s;return fo(a-yw/2)?(o=l?"bottom":"top",r="center"):fo(a-1.5*yw)?(o=l?"top":"bottom",r="center"):(o="middle",r=1.5*yw>a&&a>yw/2?l?"left":"right":l?"right":"left"),{rotation:a,textAlign:r,textVerticalAlign:o}}function _c(t,e,n){if(!Iu(t.axis)){var i=t.get("axisLabel.showMinLabel"),r=t.get("axisLabel.showMaxLabel");e=e||[],n=n||[];var o=e[0],a=e[1],s=e[e.length-1],l=e[e.length-2],u=n[0],c=n[1],h=n[n.length-1],f=n[n.length-2];!1===i?(xc(o),xc(u)):wc(o,a)&&(i?(xc(a),xc(c)):(xc(o),xc(u))),!1===r?(xc(s),xc(h)):wc(l,s)&&(r?(xc(l),xc(f)):(xc(s),xc(h)))}}function xc(t){t&&(t.ignore=!0)}function wc(t,e){var n=t&&t.getBoundingRect().clone(),i=e&&e.getBoundingRect().clone();if(n&&i){var r=Pt([]);return Bt(r,r,-t.rotation),n.applyTransform(Et([],r,t.getLocalTransform())),i.applyTransform(Et([],r,e.getLocalTransform())),n.intersect(i)}}function bc(t){return"middle"===t||"center"===t}function Sc(t,e,n){var i=e.axis;if(e.get("axisTick.show")&&!i.scale.isBlank()){for(var r=e.getModel("axisTick"),o=r.getModel("lineStyle"),a=r.get("length"),s=i.getTicksCoords(),l=[],u=[],h=t._transform,f=[],d=0;d<s.length;d++){var p=s[d].coord;l[0]=p,l[1]=0,u[0]=p,u[1]=n.tickDirection*a,h&&(lt(l,l,h),lt(u,u,h));var g=new Fv({anid:"tick_"+s[d].tickValue,subPixelOptimize:!0,shape:{x1:l[0],y1:l[1],x2:u[0],y2:u[1]},style:c(o.getLineStyle(),{stroke:e.get("axisLine.lineStyle.color")}),z2:2,silent:!0});t.group.add(g),f.push(g)}return f}}function Mc(t,e,n){var i=e.axis,r=O(n.axisLabelShow,e.get("axisLabel.show"));if(r&&!i.scale.isBlank()){var o=e.getModel("axisLabel"),a=o.get("margin"),s=i.getViewLabels(),l=(O(n.labelRotate,o.get("rotate"))||0)*yw/180,u=bw(n.rotation,l,n.labelDirection),c=e.getCategories&&e.getCategories(!0),h=[],f=Sw(e),d=e.get("triggerEvent");return v(s,function(r,s){var l=r.tickValue,p=r.formattedLabel,g=r.rawLabel,v=o;c&&c[l]&&c[l].textStyle&&(v=new qr(c[l].textStyle,o,e.ecModel));var m=v.getTextColor()||e.get("axisLine.lineStyle.color"),y=i.dataToCoord(l),_=[y,n.labelOffset+n.labelDirection*a],x=new Iv({anid:"label_"+l,position:_,rotation:u.rotation,silent:f,z2:10});Or(x.style,v,{text:p,textAlign:v.getShallow("align",!0)||u.textAlign,textVerticalAlign:v.getShallow("verticalAlign",!0)||v.getShallow("baseline",!0)||u.textVerticalAlign,textFill:"function"==typeof m?m("category"===i.type?g:"value"===i.type?l+"":l,s):m}),d&&(x.eventData=ww(e),x.eventData.targetType="axisLabel",x.eventData.value=g),t._dumbGroup.add(x),x.updateTransform(),h.push(x),t.group.add(x),x.decomposeTransform()}),h}}function Ic(t,e){var n={axesInfo:{},seriesInvolved:!1,coordSysAxesInfo:{},coordSysMap:{}};return Ac(n,t,e),n.seriesInvolved&&Cc(n,t),n}function Ac(t,e,n){var i=e.getComponent("tooltip"),r=e.getComponent("axisPointer"),o=r.get("link",!0)||[],a=[];Mw(n.getCoordinateSystems(),function(n){function s(i,s,l){var c=l.model.getModel("axisPointer",r),f=c.get("show");if(f&&("auto"!==f||i||Ec(c))){null==s&&(s=c.get("triggerTooltip")),c=i?Tc(l,h,r,e,i,s):c;var d=c.get("snap"),p=Nc(l.model),g=s||d||"category"===l.type,v=t.axesInfo[p]={key:p,axis:l,coordSys:n,axisPointerModel:c,triggerTooltip:s,involveSeries:g,snap:d,useHandle:Ec(c),seriesModels:[]};u[p]=v,t.seriesInvolved|=g;var m=kc(o,l);if(null!=m){var y=a[m]||(a[m]={axesInfo:{}});y.axesInfo[p]=v,y.mapper=o[m].mapper,v.linkGroup=y}}}if(n.axisPointerEnabled){var l=Nc(n.model),u=t.coordSysAxesInfo[l]={};t.coordSysMap[l]=n;var c=n.model,h=c.getModel("tooltip",i);if(Mw(n.getAxes(),Iw(s,!1,null)),n.getTooltipAxes&&i&&h.get("show")){var f="axis"===h.get("trigger"),d="cross"===h.get("axisPointer.type"),p=n.getTooltipAxes(h.get("axisPointer.axis"));(f||d)&&Mw(p.baseAxes,Iw(s,!d||"cross",f)),d&&Mw(p.otherAxes,Iw(s,"cross",!1))}}})}function Tc(t,e,n,i,r,o){var s=e.getModel("axisPointer"),l={};Mw(["type","snap","lineStyle","shadowStyle","label","animation","animationDurationUpdate","animationEasingUpdate","z"],function(t){l[t]=a(s.get(t))}),l.snap="category"!==t.type&&!!o,"cross"===s.get("type")&&(l.type="line");var u=l.label||(l.label={});if(null==u.show&&(u.show=!1),"cross"===r){var h=s.get("label.show");if(u.show=null==h||h,!o){var f=l.lineStyle=s.get("crossStyle");f&&c(u,f.textStyle)}}return t.model.getModel("axisPointer",new qr(l,n,i))}function Cc(t,e){e.eachSeries(function(e){var n=e.coordinateSystem,i=e.get("tooltip.trigger",!0),r=e.get("tooltip.show",!0);n&&"none"!==i&&!1!==i&&"item"!==i&&!1!==r&&!1!==e.get("axisPointer.show",!0)&&Mw(t.coordSysAxesInfo[Nc(n.model)],function(t){var i=t.axis;n.getAxis(i.dim)===i&&(t.seriesModels.push(e),null==t.seriesDataCount&&(t.seriesDataCount=0),t.seriesDataCount+=e.getData().count())})},this)}function kc(t,e){for(var n=e.model,i=e.dim,r=0;r<t.length;r++){var o=t[r]||{};if(Dc(o[i+"AxisId"],n.id)||Dc(o[i+"AxisIndex"],n.componentIndex)||Dc(o[i+"AxisName"],n.name))return r}}function Dc(t,e){return"all"===t||S(t)&&f(t,e)>=0||t===e}function Oc(t){var e=Pc(t);if(e){var n=e.axisPointerModel,i=e.axis.scale,r=n.option,o=n.get("status"),a=n.get("value");null!=a&&(a=i.parse(a));var s=Ec(n);null==o&&(r.status=s?"show":"hide");var l=i.getExtent().slice();l[0]>l[1]&&l.reverse(),(null==a||a>l[1])&&(a=l[1]),a<l[0]&&(a=l[0]),r.value=a,s&&(r.status=e.axis.scale.isBlank()?"hide":"show")}}function Pc(t){var e=(t.ecModel.getComponent("axisPointer")||{}).coordSysAxesInfo;return e&&e.axesInfo[Nc(t)]}function Lc(t){var e=Pc(t);return e&&e.axisPointerModel}function Ec(t){return!!t.get("handle.show")}function Nc(t){return t.type+"||"+t.id}function Bc(t,e,n,i,r,o){var a=Aw.getAxisPointerClass(t.axisPointerClass);if(a){var s=Lc(e);s?(t._axisPointer||(t._axisPointer=new a)).render(e,s,i,o):zc(t,i)}}function zc(t,e,n){var i=t._axisPointer;i&&i.dispose(e,n),t._axisPointer=null}function Rc(t,e,n){n=n||{};var i=t.coordinateSystem,r=e.axis,o={},a=r.getAxesOnZeroOf()[0],s=r.position,l=a?"onZero":s,u=r.dim,c=i.getRect(),h=[c.x,c.x+c.width,c.y,c.y+c.height],f={left:0,right:1,top:0,bottom:1,onZero:2},d=e.get("offset")||0,p="x"===u?[h[2]-d,h[3]+d]:[h[0]-d,h[1]+d];if(a){var g=a.toGlobalCoord(a.dataToCoord(0));p[f.onZero]=Math.max(Math.min(g,p[1]),p[0])}o.position=["y"===u?p[f[l]]:h[0],"x"===u?p[f[l]]:h[3]],o.rotation=Math.PI/2*("x"===u?0:1);var v={top:-1,bottom:1,left:-1,right:1};o.labelDirection=o.tickDirection=o.nameDirection=v[s],o.labelOffset=a?p[f[s]]-p[f.onZero]:0,e.get("axisTick.inside")&&(o.tickDirection=-o.tickDirection),O(n.labelInside,e.get("axisLabel.inside"))&&(o.labelDirection=-o.labelDirection);var m=e.get("axisLabel.rotate");return o.labelRotate="top"===l?-m:m,o.z2=1,o}function Fc(t,e,n){hp.call(this),this.updateData(t,e,n)}function Vc(t){return[t[0]/2,t[1]/2]}function $c(t,e){this.parent.drift(t,e)}function jc(t,e){if(!this.incremental&&!this.useHoverLayer)if("emphasis"===e){var n=this.__symbolOriginalScale,i=n[1]/n[0],r={scale:[Math.max(1.1*n[0],n[0]+3),Math.max(1.1*n[1],n[1]+3*i)]};this.animateTo(r,400,"elasticOut")}else"normal"===e&&this.animateTo({scale:this.__symbolOriginalScale},400,"elasticOut")}function Hc(t){this.group=new hp,this._symbolCtor=t||Fc}function Wc(t,e,n,i){return!(!e||isNaN(e[0])||isNaN(e[1])||i.isIgnore&&i.isIgnore(n)||i.clipShape&&!i.clipShape.contain(e[0],e[1])||"none"===t.getItemVisual(n,"symbol"))}function Gc(t){return null==t||A(t)||(t={isIgnore:t}),t||{}}function Uc(t){var e=t.hostModel;return{itemStyle:e.getModel("itemStyle").getItemStyle(["color"]),hoverItemStyle:e.getModel("emphasis.itemStyle").getItemStyle(),symbolRotate:e.get("symbolRotate"),symbolOffset:e.get("symbolOffset"),hoverAnimation:e.get("hoverAnimation"),labelModel:e.getModel("label"),hoverLabelModel:e.getModel("emphasis.label"),cursorStyle:e.get("cursor")}}function Zc(t,e,n){var i,r=t.getBaseAxis(),o=t.getOtherAxis(r),a=Xc(o,n),s=r.dim,l=o.dim,u=e.mapDimension(l),c=e.mapDimension(s),h="x"===l||"radius"===l?1:0,f=m(t.dimensions,function(t){return e.mapDimension(t)}),d=e.getCalculationInfo("stackResultDimension");return(i|=Wl(e,f[0]))&&(f[0]=d),(i|=Wl(e,f[1]))&&(f[1]=d),{dataDimsForPoint:f,valueStart:a,valueAxisDim:l,baseAxisDim:s,stacked:!!i,valueDim:u,baseDim:c,baseDataOffset:h,stackedOverDimension:e.getCalculationInfo("stackedOverDimension")}}function Xc(t,e){var n=0,i=t.scale.getExtent();return"start"===e?n=i[0]:"end"===e?n=i[1]:i[0]>0?n=i[0]:i[1]<0&&(n=i[1]),n}function Yc(t,e,n,i){var r=NaN;t.stacked&&(r=n.get(n.getCalculationInfo("stackedOverDimension"),i)),isNaN(r)&&(r=t.valueStart);var o=t.baseDataOffset,a=[];return a[o]=n.get(t.baseDim,i),a[1-o]=r,e.dataToPoint(a)}function qc(t,e){var n=[];return e.diff(t).add(function(t){n.push({cmd:"+",idx:t})}).update(function(t,e){n.push({cmd:"=",idx:e,idx1:t})}).remove(function(t){n.push({cmd:"-",idx:t})}).execute(),n}function Kc(t){return isNaN(t[0])||isNaN(t[1])}function Jc(t,e,n,i,r,o,a,s,l,u){return"none"!==u&&u?Qc.apply(this,arguments):th.apply(this,arguments)}function Qc(t,e,n,i,r,o,a,s,l,u,c){for(var h=0,f=n,d=0;i>d;d++){var p=e[f];if(f>=r||0>f)break;if(Kc(p)){if(c){f+=o;continue}break}if(f===n)t[o>0?"moveTo":"lineTo"](p[0],p[1]);else if(l>0){var g=e[h],v="y"===u?1:0,m=(p[v]-g[v])*l;jw(Ww,g),Ww[v]=g[v]+m,jw(Gw,p),Gw[v]=p[v]-m,t.bezierCurveTo(Ww[0],Ww[1],Gw[0],Gw[1],p[0],p[1])}else t.lineTo(p[0],p[1]);h=f,f+=o}return d}function th(t,e,n,i,r,o,a,s,l,u,c){for(var h=0,f=n,d=0;i>d;d++){var p=e[f];if(f>=r||0>f)break;if(Kc(p)){if(c){f+=o;continue}break}if(f===n)t[o>0?"moveTo":"lineTo"](p[0],p[1]),jw(Ww,p);else if(l>0){var g=f+o,v=e[g];if(c)for(;v&&Kc(e[g]);)g+=o,v=e[g];var m=.5,y=e[h];v=e[g];if(!v||Kc(v))jw(Gw,p);else{var _,x;if(Kc(v)&&!c&&(v=p),q(Hw,v,y),"x"===u||"y"===u){var w="x"===u?0:1;_=Math.abs(p[w]-y[w]),x=Math.abs(p[w]-v[w])}else _=vd(p,y),x=vd(p,v);m=x/(x+_),$w(Gw,p,Hw,-l*(1-m))}Fw(Ww,Ww,s),Vw(Ww,Ww,a),Fw(Gw,Gw,s),Vw(Gw,Gw,a),t.bezierCurveTo(Ww[0],Ww[1],Gw[0],Gw[1],p[0],p[1]),$w(Ww,p,Hw,l*m)}else t.lineTo(p[0],p[1]);h=f,f+=o}return d}function eh(t,e){var n=[1/0,1/0],i=[-1/0,-1/0];if(e)for(var r=0;r<t.length;r++){var o=t[r];o[0]<n[0]&&(n[0]=o[0]),o[1]<n[1]&&(n[1]=o[1]),o[0]>i[0]&&(i[0]=o[0]),o[1]>i[1]&&(i[1]=o[1])}return{min:e?n:i,max:e?i:n}}function nh(t,e){if(t.length===e.length){for(var n=0;n<t.length;n++){var i=t[n],r=e[n];if(i[0]!==r[0]||i[1]!==r[1])return}return!0}}function ih(t){return"number"==typeof t?t:t?.5:0}function rh(t){var e=t.getGlobalExtent();if(t.onBand){var n=t.getBandWidth()/2-1,i=e[1]>e[0]?1:-1;e[0]+=i*n,e[1]-=i*n}return e}function oh(t,e,n){if(!n.valueDim)return[];for(var i=[],r=0,o=e.count();o>r;r++)i.push(Yc(n,t,e,r));return i}function ah(t,e,n,i){var r=rh(t.getAxis("x")),o=rh(t.getAxis("y")),a=t.getBaseAxis().isHorizontal(),s=Math.min(r[0],r[1]),l=Math.min(o[0],o[1]),u=Math.max(r[0],r[1])-s,c=Math.max(o[0],o[1])-l;if(n)s-=.5,u+=.5,l-=.5,c+=.5;else{var h=i.get("lineStyle.width")||2,f=i.get("clipOverflow")?h/2:Math.max(u,c);a?(l-=f,c+=2*f):(s-=f,u+=2*f)}var d=new zv({shape:{x:s,y:l,width:u,height:c}});return e&&(d.shape[a?"width":"height"]=0,jr(d,{shape:{width:u,height:c}},i)),d}function sh(t,e,n,i){var r=t.getAngleAxis(),o=t.getRadiusAxis(),a=o.getExtent().slice();a[0]>a[1]&&a.reverse();var s=r.getExtent(),l=Math.PI/180;n&&(a[0]-=.5,a[1]+=.5);var u=new kv({shape:{cx:oo(t.cx,1),cy:oo(t.cy,1),r0:oo(a[0],1),r:oo(a[1],1),startAngle:-s[0]*l,endAngle:-s[1]*l,clockwise:r.inverse}});return e&&(u.shape.endAngle=-s[0]*l,jr(u,{shape:{endAngle:-s[1]*l}},i)),u}function lh(t,e,n,i){return"polar"===t.type?sh(t,e,n,i):ah(t,e,n,i)}function uh(t,e,n){for(var i=e.getBaseAxis(),r="x"===i.dim||"radius"===i.dim?0:1,o=[],a=0;a<t.length-1;a++){var s=t[a+1],l=t[a];o.push(l);var u=[];switch(n){case"end":u[r]=s[r],u[1-r]=l[1-r],o.push(u);break;case"middle":var c=(l[r]+s[r])/2,h=[];u[r]=h[r]=c,u[1-r]=l[1-r],h[1-r]=s[1-r],o.push(u),o.push(h);break;default:u[r]=l[r],u[1-r]=s[1-r],o.push(u)}}return t[a]&&o.push(t[a]),o}function ch(t,e){var n=t.getVisual("visualMeta");if(n&&n.length&&t.count()&&"cartesian2d"===e.type){for(var i,r,o=n.length-1;o>=0;o--){var a=n[o].dimension,s=t.dimensions[a],l=t.getDimensionInfo(s);if(i=l&&l.coordDim,"x"===i||"y"===i){r=n[o];break}}if(r){var u=e.getAxis(i),c=m(r.stops,function(t){return{coord:u.toGlobalCoord(u.dataToCoord(t.value)),color:t.color}}),h=c.length,f=r.outerColors.slice();h&&c[0].coord>c[h-1].coord&&(c.reverse(),f.reverse());var d=10,p=c[0].coord-d,g=c[h-1].coord+d,y=g-p;if(.001>y)return"transparent";v(c,function(t){t.offset=(t.coord-p)/y}),c.push({offset:h?c[h-1].offset:.5,color:f[1]||"transparent"}),c.unshift({offset:h?c[0].offset:.5,color:f[0]||"transparent"});var _=new Gv(0,0,0,0,c,!0);return _[i]=p,_[i+"2"]=g,_}}}function hh(t,e,n){var i=t.get("showAllSymbol"),r="auto"===i;if(!i||r){var o=n.getAxesByScale("ordinal")[0];if(o&&(!r||!fh(o,e))){var a=e.mapDimension(o.dim),s={};return v(o.getViewLabels(),function(t){s[t.tickValue]=1}),function(t){return!s.hasOwnProperty(e.get(a,t))}}}}function fh(t,e){var n=t.getExtent(),i=Math.abs(n[1]-n[0])/t.scale.count();isNaN(i)&&(i=0);for(var r=e.count(),o=Math.max(1,Math.round(r/5)),a=0;r>a;a+=o)if(1.5*Fc.getSymbolSize(e,a)[t.isHorizontal()?1:0]>i)return!1;return!0}function dh(t,e,n,i){var r=e.getData(),o=this.dataIndex,a=r.getName(o),s=e.get("selectedOffset");i.dispatchAction({type:"pieToggleSelect",from:t,name:a,seriesId:e.id}),r.each(function(t){ph(r.getItemGraphicEl(t),r.getItemLayout(t),e.isSelected(r.getName(t)),s,n)})}function ph(t,e,n,i,r){var o=(e.startAngle+e.endAngle)/2,a=Math.cos(o),s=Math.sin(o),l=n?i:0,u=[a*l,s*l];r?t.animate().when(200,{position:u}).start("bounceOut"):t.attr("position",u)}function gh(t,e){hp.call(this);var n=new kv({z2:2}),i=new Ev,r=new Iv;this.add(n),this.add(i),this.add(r),this.updateData(t,e,!0)}function vh(t,e,n,i,r,o,a){function s(e,n,i){for(var r=e;n>r;r++)if(t[r].y+=i,r>e&&n>r+1&&t[r+1].y>t[r].y+t[r].height)return void l(r,i/2);l(n-1,i/2)}function l(e,n){for(var i=e;i>=0&&(t[i].y-=n,!(i>0&&t[i].y>t[i-1].y+t[i-1].height));i--);}function u(t,e,n,i,r,o){for(var a=e?Number.MAX_VALUE:0,s=0,l=t.length;l>s;s++){var u=Math.abs(t[s].y-i),c=t[s].len,h=t[s].len2,f=r+c>u?Math.sqrt((r+c+h)*(r+c+h)-u*u):Math.abs(t[s].x-n);e&&f>=a&&(f=a-10),!e&&a>=f&&(f=a+10),t[s].x=n+f*o,a=f}}t.sort(function(t,e){return t.y-e.y});for(var c,h=0,f=t.length,d=[],p=[],g=0;f>g;g++)c=t[g].y-h,0>c&&s(g,f,-c,r),h=t[g].y+t[g].height;0>a-h&&l(f-1,h-a);for(g=0;f>g;g++)t[g].y>=n?p.push(t[g]):d.push(t[g]);u(d,!1,e,n,i,r),u(p,!0,e,n,i,r)}function mh(t,e,n,i,r,o){for(var a=[],s=[],l=0;l<t.length;l++)yh(t[l])||(t[l].x<e?a.push(t[l]):s.push(t[l]));vh(s,e,n,i,1,r,o),vh(a,e,n,i,-1,r,o);for(l=0;l<t.length;l++)if(!yh(t[l])){var u=t[l].linePoints;if(u){var c=u[1][0]-u[2][0];u[2][0]=t[l].x<e?t[l].x+3:t[l].x-3,u[1][1]=u[2][1]=t[l].y,u[1][0]=u[2][0]+c}}}function yh(t){return"center"===t.position}function _h(t,e,n){var i,r={},o="toggleSelected"===t;return n.eachComponent("legend",function(n){o&&null!=i?n[i?"select":"unSelect"](e.name):(n[t](e.name),i=n.isSelected(e.name));var a=n.getData();v(a,function(t){var e=t.get("name");if("\n"!==e&&""!==e){var i=n.isSelected(e);r[e]=r.hasOwnProperty(e)?r[e]&&i:i}})}),{name:e.name,selected:r}}function xh(t,e){var n=_m(e.get("padding")),i=e.getItemStyle(["color","opacity"]);i.fill=e.get("backgroundColor");t=new zv({shape:{x:t.x-n[3],y:t.y-n[0],width:t.width+n[1]+n[3],height:t.height+n[0]+n[2],r:e.get("borderRadius")},style:i,silent:!0,z2:-1});return t}function wh(t,e){e.dispatchAction({type:"legendToggleSelect",name:t})}function bh(t,e,n,i){var r=n.getZr().storage.getDisplayList()[0];r&&r.useHoverLayer||n.dispatchAction({type:"highlight",seriesName:t,name:e,excludeSeriesId:i})}function Sh(t,e,n,i){var r=n.getZr().storage.getDisplayList()[0];r&&r.useHoverLayer||n.dispatchAction({type:"downplay",seriesName:t,name:e,excludeSeriesId:i})}function Mh(t,e,n){var i=t.getOrient(),r=[1,1];r[i.index]=0,Eo(e,n,{type:"box",ignoreSize:r})}function Ih(t,e,n,i,r){var o=t.axis;if(!o.scale.isBlank()&&o.containData(e)){if(!t.involveSeries)return void n.showPointer(t,e);var a=Ah(e,t),s=a.payloadBatch,l=a.snapToValue;s[0]&&null==r.seriesIndex&&u(r,s[0]),!i&&t.snap&&o.containData(l)&&null!=l&&(e=l),n.showPointer(t,e,s,r),n.showTooltip(t,a,l)}}function Ah(t,e){var n=e.axis,i=n.dim,r=t,o=[],a=Number.MAX_VALUE,s=-1;return Sb(e.seriesModels,function(e){var l,u,c=e.getData().mapDimension(i,!0);if(e.getAxisTooltipData){var h=e.getAxisTooltipData(c,t,n);u=h.dataIndices,l=h.nestestValue}else{if(u=e.getData().indicesOfNearest(c[0],t,"category"===n.type?.5:null),!u.length)return;l=e.getData().get(c[0],u[0])}if(null!=l&&isFinite(l)){var f=t-l,d=Math.abs(f);a>=d&&((a>d||f>=0&&0>s)&&(a=d,s=f,r=l,o.length=0),Sb(u,function(t){o.push({seriesIndex:e.seriesIndex,dataIndexInside:t,dataIndex:e.getData().getRawIndex(t)})}))}}),{payloadBatch:o,snapToValue:r}}function Th(t,e,n,i){t[e.key]={value:n,payloadBatch:i}}function Ch(t,e,n,i){var r=n.payloadBatch,o=e.axis,a=o.model,s=e.axisPointerModel;if(e.triggerTooltip&&r.length){var l=e.coordSys.model,u=Nc(l),c=t.map[u];c||(c=t.map[u]={coordSysId:l.id,coordSysIndex:l.componentIndex,coordSysType:l.type,coordSysMainType:l.mainType,dataByAxis:[]},t.list.push(c)),c.dataByAxis.push({axisDim:o.dim,axisIndex:a.componentIndex,axisType:a.type,axisId:a.id,value:i,valueLabelOpt:{precision:s.get("label.precision"),formatter:s.get("label.formatter")},seriesDataIndices:r.slice()})}}function kh(t,e,n){var i=n.axesInfo=[];Sb(e,function(e,n){var r=e.axisPointerModel.option,o=t[n];o?(!e.useHandle&&(r.status="show"),r.value=o.value,r.seriesDataIndices=(o.payloadBatch||[]).slice()):!e.useHandle&&(r.status="hide"),"show"===r.status&&i.push({axisDim:e.axis.dim,axisIndex:e.axis.model.componentIndex,value:r.value})})}function Dh(t,e,n,i){if(!Eh(e)&&t.list.length){var r=((t.list[0].dataByAxis[0]||{}).seriesDataIndices||[])[0]||{};i({type:"showTip",escapeConnect:!0,x:e[0],y:e[1],tooltipOption:n.tooltipOption,position:n.position,dataIndexInside:r.dataIndexInside,dataIndex:r.dataIndex,seriesIndex:r.seriesIndex,dataByCoordSys:t.list})}else i({type:"hideTip"})}function Oh(t,e,n){var i=n.getZr(),r="axisPointerLastHighlights",o=Ib(i)[r]||{},a=Ib(i)[r]={};Sb(t,function(t){var e=t.axisPointerModel.option;"show"===e.status&&Sb(e.seriesDataIndices,function(t){var e=t.seriesIndex+" | "+t.dataIndex;a[e]=t})});var s=[],l=[];v(o,function(t,e){!a[e]&&l.push(t)}),v(a,function(t,e){!o[e]&&s.push(t)}),l.length&&n.dispatchAction({type:"downplay",escapeConnect:!0,batch:l}),s.length&&n.dispatchAction({type:"highlight",escapeConnect:!0,batch:s})}function Ph(t,e){for(var n=0;n<(t||[]).length;n++){var i=t[n];if(e.axis.dim===i.axisDim&&e.axis.model.componentIndex===i.axisIndex)return i}}function Lh(t){var e=t.axis.model,n={},i=n.axisDim=t.axis.dim;return n.axisIndex=n[i+"AxisIndex"]=e.componentIndex,n.axisName=n[i+"AxisName"]=e.name,n.axisId=n[i+"AxisId"]=e.id,n}function Eh(t){return!t||null==t[0]||isNaN(t[0])||null==t[1]||isNaN(t[1])}function Nh(t,e,n){if(!Jf.node){var i=e.getZr();Tb(i).records||(Tb(i).records={}),Bh(i,e);var r=Tb(i).records[t]||(Tb(i).records[t]={});r.handler=n}}function Bh(t,e){function n(n,i){t.on(n,function(n){var r=Vh(e);Cb(Tb(t).records,function(t){t&&i(t,n,r.dispatchAction)}),zh(r.pendings,e)})}Tb(t).initialized||(Tb(t).initialized=!0,n("click",b(Fh,"click")),n("mousemove",b(Fh,"mousemove")),n("globalout",Rh))}function zh(t,e){var n,i=t.showTip.length,r=t.hideTip.length;i?n=t.showTip[i-1]:r&&(n=t.hideTip[r-1]),n&&(n.dispatchAction=null,e.dispatchAction(n))}function Rh(t,e,n){t.handler("leave",null,n)}function Fh(t,e,n,i){e.handler(t,n,i)}function Vh(t){var e={showTip:[],hideTip:[]},n=function n(i){var r=e[i.type];r?r.push(i):(i.dispatchAction=n,t.dispatchAction(i))};return{dispatchAction:n,pendings:e}}function $h(t,e){if(!Jf.node){var n=e.getZr(),i=(Tb(n).records||{})[t];i&&(Tb(n).records[t]=null)}}function jh(){}function Hh(t,e,n,i){Wh(Db(n).lastProp,i)||(Db(n).lastProp=i,e?$r(n,i,t):(n.stopAnimation(),n.attr(i)))}function Wh(t,e){if(A(t)&&A(e)){var n=!0;return v(e,function(e,i){n=n&&Wh(t[i],e)}),!!n}return t===e}function Gh(t,e){t[e.get("label.show")?"show":"hide"]()}function Uh(t){return{position:t.position.slice(),rotation:t.rotation||0}}function Zh(t,e,n){var i=e.get("z"),r=e.get("zlevel");t&&t.traverse(function(t){"group"!==t.type&&(null!=i&&(t.z=i),null!=r&&(t.zlevel=r),t.silent=n)})}function Xh(t){var e,n=t.get("type"),i=t.getModel(n+"Style");return"line"===n?(e=i.getLineStyle(),e.fill=null):"shadow"===n&&(e=i.getAreaStyle(),e.stroke=null),e}function Yh(t,e,n,i,r){var o=n.get("value"),a=Kh(o,e.axis,e.ecModel,n.get("seriesDataIndices"),{precision:n.get("label.precision"),formatter:n.get("label.formatter")}),s=n.getModel("label"),l=_m(s.get("padding")||0),u=s.getFont(),c=He(a,u),h=r.position,f=c.width+l[1]+l[3],d=c.height+l[0]+l[2],p=r.align;"right"===p&&(h[0]-=f),"center"===p&&(h[0]-=f/2);var g=r.verticalAlign;"bottom"===g&&(h[1]-=d),"middle"===g&&(h[1]-=d/2),qh(h,f,d,i);var v=s.get("backgroundColor");v&&"auto"!==v||(v=e.get("axisLine.lineStyle.color")),t.label={shape:{x:0,y:0,width:f,height:d,r:s.get("borderRadius")},position:h.slice(),style:{text:a,textFont:u,textFill:s.getTextColor(),textPosition:"inside",textPadding:l,fill:v,stroke:s.get("borderColor")||"transparent",lineWidth:s.get("borderWidth")||0,shadowBlur:s.get("shadowBlur"),shadowColor:s.get("shadowColor"),shadowOffsetX:s.get("shadowOffsetX"),shadowOffsetY:s.get("shadowOffsetY")},z2:10}}function qh(t,e,n,i){var r=i.getWidth(),o=i.getHeight();t[0]=Math.min(t[0]+e,r)-e,t[1]=Math.min(t[1]+n,o)-n,t[0]=Math.max(t[0],0),t[1]=Math.max(t[1],0)}function Kh(t,e,n,i,r){t=e.scale.parse(t);var o=e.scale.getLabel(t,{precision:r.precision}),a=r.formatter;if(a){var s={value:wu(e,t),axisDimension:e.dim,axisIndex:e.index,seriesData:[]};v(i,function(t){var e=n.getSeriesByIndex(t.seriesIndex),i=t.dataIndexInside,r=e&&e.getDataParams(i);r&&s.seriesData.push(r)}),I(a)?o=a.replace("{value}",o):M(a)&&(o=a(s))}return o}function Jh(t,e,n){var i=Ot();return Bt(i,i,n.rotation),Nt(i,i,n.position),Wr([t.dataToCoord(e),(n.labelOffset||0)+(n.labelDirection||1)*(n.labelMargin||0)],i)}function Qh(t,e,n,i,r,o){var a=_w.innerTextLayout(n.rotation,0,n.labelDirection);n.labelMargin=r.get("label.margin"),Yh(e,i,r,o,{position:Jh(i.axis,t,n),align:a.textAlign,verticalAlign:a.textVerticalAlign})}function tf(t,e,n){return n=n||0,{x1:t[n],y1:t[1-n],x2:e[n],y2:e[1-n]}}function ef(t,e,n){return n=n||0,{x:t[n],y:t[1-n],width:e[n],height:e[1-n]}}function nf(t,e){var n={};return n[e.dim+"AxisIndex"]=e.index,t.getCartesian(n)}function rf(t){return"x"===t.dim?0:1}function of(t){var e="cubic-bezier(0.23, 1, 0.32, 1)",n="left "+t+"s "+e+",top "+t+"s "+e;return m(zb,function(t){return t+"transition:"+n}).join(";")}function af(t){var e=[],n=t.get("fontSize"),i=t.getTextColor();return i&&e.push("color:"+i),e.push("font:"+t.getFont()),n&&e.push("line-height:"+Math.round(3*n/2)+"px"),Nb(["decoration","align"],function(n){var i=t.get(n);i&&e.push("text-"+n+":"+i)}),e.join(";")}function sf(t){var e=[],n=t.get("transitionDuration"),i=t.get("backgroundColor"),r=t.getModel("textStyle"),o=t.get("padding");return n&&e.push(of(n)),i&&(Jf.canvasSupported?e.push("background-Color:"+i):(e.push("background-Color:#"+ne(i)),e.push("filter:alpha(opacity=70)"))),Nb(["width","color","radius"],function(n){var i="border-"+n,r=Bb(i),o=t.get(r);null!=o&&e.push(i+":"+o+("color"===n?"":"px"))}),e.push(af(r)),null!=o&&e.push("padding:"+_m(o).join("px ")+"px"),e.join(";")+";"}function lf(t,e){if(Jf.wxa)return null;var r=i.createElement("div"),o=this._zr=e.getZr();this.el=r,this._x=e.getWidth()/2,this._y=e.getHeight()/2,t.appendChild(r),this._container=t,this._show=!1,this._hideTimeout;var a=this;r.onmouseenter=function(){a._enterable&&(clearTimeout(a._hideTimeout),a._show=!0),a._inContent=!0},r.onmousemove=function(e){if(e=e||n.event,!a._enterable){var i=o.handler;wt(t,e,!0),i.dispatch("mousemove",e)}},r.onmouseleave=function(){a._enterable&&a._show&&a.hideLater(a._hideDelay),a._inContent=!1}}function uf(t){this._zr=t.getZr(),this._show=!1,this._hideTimeout}function cf(t){for(var e=t.pop();t.length;){var n=t.pop();n&&(qr.isInstance(n)&&(n=n.get("tooltip",!0)),"string"==typeof n&&(n={formatter:n}),e=new qr(n,e,e.ecModel))}return e}function hf(t,e){return t.dispatchAction||w(e.dispatchAction,e)}function ff(t,e,n,i,r,o,a){var s=n.getOuterSize(),l=s.width,u=s.height;return null!=o&&(t+l+o>i?t-=l+o:t+=o),null!=a&&(e+u+a>r?e-=u+a:e+=a),[t,e]}function df(t,e,n,i,r){var o=n.getOuterSize(),a=o.width,s=o.height;return t=Math.min(t+a,i)-a,e=Math.min(e+s,r)-s,t=Math.max(t,0),e=Math.max(e,0),[t,e]}function pf(t,e,n){var i=n[0],r=n[1],o=5,a=0,s=0,l=e.width,u=e.height;switch(t){case"inside":a=e.x+l/2-i/2,s=e.y+u/2-r/2;break;case"top":a=e.x+l/2-i/2,s=e.y-r-o;break;case"bottom":a=e.x+l/2-i/2,s=e.y+u+o;break;case"left":a=e.x-i-o,s=e.y+u/2-r/2;break;case"right":a=e.x+l+o,s=e.y+u/2-r/2}return[a,s]}function gf(t){return"center"===t||"middle"===t}function vf(t){return f(Wb,t)>=0}function mf(t,e){t=t.slice();var n=m(t,ko);e=(e||[]).slice();var i=m(e,ko);return function(r,o){v(t,function(t,a){for(var s={name:t,capital:n[a]},l=0;l<e.length;l++)s[e[l]]=t+i[l];r.call(o,s)})}}function yf(t,e,n){function i(t,e){return f(e.nodes,t)>=0}function r(t,i){var r=!1;return e(function(e){v(n(t,e)||[],function(t){i.records[e.name][t]&&(r=!0)})}),r}function o(t,i){i.nodes.push(t),e(function(e){v(n(t,e)||[],function(t){i.records[e.name][t]=!0})})}return function(n){function a(t){!i(t,l)&&r(t,l)&&(o(t,l),s=!0)}var s,l={nodes:[],records:{}};if(e(function(t){l.records[t.name]={}}),!n)return l;o(n,l);do{s=!1,t(a)}while(s);return l}}function _f(t,e){var n=t[e]-t[1-e];return{span:Math.abs(n),sign:n>0?-1:0>n?1:e?-1:1}}function xf(t,e){return Math.min(null!=e[1]?e[1]:1/0,Math.max(null!=e[0]?e[0]:-1/0,t))}function wf(t,e,n){var i=[1/0,-1/0];return Zb(n,function(t){var n=t.getData();n&&Zb(n.mapDimension(e,!0),function(t){var e=n.getApproximateExtent(t);e[0]<i[0]&&(i[0]=e[0]),e[1]>i[1]&&(i[1]=e[1])})}),i[1]<i[0]&&(i=[NaN,NaN]),bf(t,i),i}function bf(t,e){var n=t.getAxisModel(),i=n.getMin(!0),r="category"===n.get("type"),o=r&&n.getCategories().length;null!=i&&"dataMin"!==i&&"function"!=typeof i?e[0]=i:r&&(e[0]=o>0?0:NaN);var a=n.getMax(!0);return null!=a&&"dataMax"!==a&&"function"!=typeof a?e[1]=a:r&&(e[1]=o>0?o-1:NaN),n.get("scale",!0)||(e[0]>0&&(e[0]=0),e[1]<0&&(e[1]=0)),e}function Sf(t,e){var n=t.getAxisModel(),i=t._percentWindow,r=t._valueWindow;if(i){var o=uo(r,[0,500]);o=Math.min(o,20);var a=e||0===i[0]&&100===i[1];n.setRange(a?null:+r[0].toFixed(o),a?null:+r[1].toFixed(o))}}function Mf(t){var e=t._minMaxSpan={},n=t._dataZoomModel,i=t._dataExtent;Zb(["min","max"],function(r){var o=n.get(r+"Span"),a=n.get(r+"ValueSpan");null!=a&&(a=t.getAxisModel().axis.scale.parse(a)),null!=a?o=io(i[0]+a,i,[0,100],!0):null!=o&&(a=io(o,[0,100],i,!0)-i[0]),e[r+"Span"]=o,e[r+"ValueSpan"]=a})}function If(t){var e={};return qb(["start","end","startValue","endValue","throttle"],function(n){t.hasOwnProperty(n)&&(e[n]=t[n])}),e}function Af(t,e){var n=t._rangePropMode,i=t.get("rangeMode");qb([["start","startValue"],["end","endValue"]],function(t,r){var o=null!=e[t[0]],a=null!=e[t[1]];o&&!a?n[r]="percent":!o&&a?n[r]="value":i?n[r]=i[r]:o&&(n[r]="percent")})}function Tf(t){var e={x:"y",y:"x",radius:"angle",angle:"radius"};return e[t]}function Cf(t){return"vertical"===t?"ns-resize":"ew-resize"}function kf(t,e){return!!Df(t)[e]}function Df(t){return t[dS]||(t[dS]={})}function Of(t){this.pointerChecker,this._zr=t,this._opt={};var e=w,n=e(Pf,this),i=e(Lf,this),r=e(Ef,this),o=e(Nf,this),s=e(Bf,this);xd.call(this),this.setPointerChecker=function(t){this.pointerChecker=t},this.enable=function(e,l){this.disable(),this._opt=c(a(l)||{},{zoomOnMouseWheel:!0,moveOnMouseMove:!0,moveOnMouseWheel:!1,preventDefaultMouseMove:!0}),null==e&&(e=!0),(!0===e||"move"===e||"pan"===e)&&(t.on("mousedown",n),t.on("mousemove",i),t.on("mouseup",r)),(!0===e||"scale"===e||"zoom"===e)&&(t.on("mousewheel",o),t.on("pinch",s))},this.disable=function(){t.off("mousedown",n),t.off("mousemove",i),t.off("mouseup",r),t.off("mousewheel",o),t.off("pinch",s)},this.dispose=this.disable,this.isDragging=function(){return this._dragging},this.isPinching=function(){return this._pinching}}function Pf(t){if(!(Mt(t)||t.target&&t.target.draggable)){var e=t.offsetX,n=t.offsetY;this.pointerChecker&&this.pointerChecker(t,e,n)&&(this._x=e,this._y=n,this._dragging=!0)}}function Lf(t){if(this._dragging&&Ff("moveOnMouseMove",t,this._opt)&&"pinch"!==t.gestureEvent&&!kf(this._zr,"globalPan")){var e=t.offsetX,n=t.offsetY,i=this._x,r=this._y,o=e-i,a=n-r;this._x=e,this._y=n,this._opt.preventDefaultMouseMove&&Ad(t.event),Rf(this,"pan","moveOnMouseMove",t,{dx:o,dy:a,oldX:i,oldY:r,newX:e,newY:n})}}function Ef(t){Mt(t)||(this._dragging=!1)}function Nf(t){var e=Ff("zoomOnMouseWheel",t,this._opt),n=Ff("moveOnMouseWheel",t,this._opt),i=t.wheelDelta,r=Math.abs(i),o=t.offsetX,a=t.offsetY;if(0!==i&&(e||n)){if(e){var s=r>3?1.4:r>1?1.2:1.1,l=i>0?s:1/s;zf(this,"zoom","zoomOnMouseWheel",t,{scale:l,originX:o,originY:a})}if(n){var u=Math.abs(i),c=(i>0?1:-1)*(u>3?.4:u>1?.15:.05);zf(this,"scrollMove","moveOnMouseWheel",t,{scrollDelta:c,originX:o,originY:a})}}}function Bf(t){if(!kf(this._zr,"globalPan")){var e=t.pinchScale>1?1.1:1/1.1;zf(this,"zoom",null,t,{scale:e,originX:t.pinchX,originY:t.pinchY})}}function zf(t,e,n,i,r){t.pointerChecker&&t.pointerChecker(i,r.originX,r.originY)&&(Ad(i.event),Rf(t,e,n,i,r))}function Rf(t,e,n,i,r){r.isAvailableBehavior=w(Ff,null,n,i),t.trigger(e,r)}function Ff(t,e,n){var i=n[t];return!t||i&&(!I(i)||e.event[i+"Key"])}function Vf(t,e){var n=Hf(t),i=e.dataZoomId,r=e.coordId;v(n,function(t){var n=t.dataZoomInfos;n[i]&&f(e.allCoordIds,r)<0&&(delete n[i],t.count--)}),Gf(n);var o=n[r];o||(o=n[r]={coordId:r,dataZoomInfos:{},count:0},o.controller=Wf(t,o),o.dispatchAction=b(Uf,t)),!o.dataZoomInfos[i]&&o.count++,o.dataZoomInfos[i]=e;var a=Zf(o.dataZoomInfos);o.controller.enable(a.controlType,a.opt),o.controller.setPointerChecker(e.containsPoint),ts(o,"dispatchAction",e.dataZoomModel.get("throttle",!0),"fixRate")}function $f(t,e){var n=Hf(t);v(n,function(t){t.controller.dispose();var n=t.dataZoomInfos;n[e]&&(delete n[e],t.count--)}),Gf(n)}function jf(t){return t.type+"\0_"+t.id}function Hf(t){var e=t.getZr();return e[pS]||(e[pS]={})}function Wf(t,e){var n=new Of(t.getZr());return v(["pan","zoom","scrollMove"],function(t){n.on(t,function(n){var i=[];v(e.dataZoomInfos,function(r){if(n.isAvailableBehavior(r.dataZoomModel.option)){var o=(r.getRange||{})[t],a=o&&o(e.controller,n);!r.dataZoomModel.get("disabled",!0)&&a&&i.push({dataZoomId:r.dataZoomId,start:a[0],end:a[1]})}}),i.length&&e.dispatchAction(i)})}),n}function Gf(t){v(t,function(e,n){e.count||(e.controller.dispose(),delete t[n])})}function Uf(t,e){t.dispatchAction({type:"dataZoom",batch:e})}function Zf(t){var e,n="type_",i={type_true:2,type_move:1,type_false:0,type_undefined:-1},r=!0;return v(t,function(t){var o=t.dataZoomModel,a=!o.get("disabled",!0)&&(!o.get("zoomLock",!0)||"move");i[n+a]>i[n+e]&&(e=a),r&=o.get("preventDefaultMouseMove",!0)}),{controlType:e,opt:{zoomOnMouseWheel:!0,moveOnMouseMove:!0,moveOnMouseWheel:!0,preventDefaultMouseMove:!!r}}}function Xf(t){return function(e,n,i,r){var o=this._range,a=o.slice(),s=e.axisModels[0];if(s){var l=t(a,s,e,n,i,r);return Ub(l,a,[0,100],"all"),this._range=a,o[0]!==a[0]||o[1]!==a[1]?a:void 0}}}var Yf=2311,qf=function(){return Yf++},Kf={};Kf="object"==typeof wx&&"function"==typeof wx.getSystemInfoSync?{browser:{},os:{},node:!1,wxa:!0,canvasSupported:!0,svgSupported:!1,touchEventsSupported:!0,domSupported:!1}:"undefined"==typeof i&&"undefined"!=typeof self?{browser:{},os:{},node:!1,worker:!0,canvasSupported:!0,domSupported:!1}:"undefined"==typeof navigator?{browser:{},os:{},node:!0,worker:!1,canvasSupported:!0,svgSupported:!0,domSupported:!1}:r(navigator.userAgent);var Jf=Kf,Qf={"[object Function]":1,"[object RegExp]":1,"[object Date]":1,"[object Error]":1,"[object CanvasGradient]":1,"[object CanvasPattern]":1,"[object Image]":1,"[object Canvas]":1},td={"[object Int8Array]":1,"[object Uint8Array]":1,"[object Uint8ClampedArray]":1,"[object Int16Array]":1,"[object Uint16Array]":1,"[object Int32Array]":1,"[object Uint32Array]":1,"[object Float32Array]":1,"[object Float64Array]":1},ed=Object.prototype.toString,nd=Array.prototype,id=nd.forEach,rd=nd.filter,od=nd.slice,ad=nd.map,sd=nd.reduce,ld={},ud=function(){return ld.createCanvas()};ld.createCanvas=function(){return i.createElement("canvas")};var cd,hd="__ec_primitive__";V.prototype={constructor:V,get:function(t){return this.data.hasOwnProperty(t)?this.data[t]:null},set:function(t,e){return this.data[t]=e},each:function(t,e){for(var n in void 0!==e&&(t=w(t,e)),this.data)this.data.hasOwnProperty(n)&&t(this.data[n],n)},removeKey:function(t){delete this.data[t]}};var fd=(Object.freeze||Object)({$override:o,clone:a,merge:s,mergeAll:l,extend:u,defaults:c,createCanvas:ud,getContext:h,indexOf:f,inherits:d,mixin:p,isArrayLike:g,each:v,map:m,reduce:y,filter:_,find:x,bind:w,curry:b,isArray:S,isFunction:M,isString:I,isObject:A,isBuiltInObject:T,isTypedArray:C,isDom:k,eqNaN:D,retrieve:O,retrieve2:P,retrieve3:L,slice:E,normalizeCssArray:N,assert:B,trim:z,setAsPrimitive:R,isPrimitive:F,createHashMap:$,concatArray:j,noop:H}),dd="undefined"==typeof Float32Array?Array:Float32Array,pd=K,gd=J,vd=rt,md=ot,yd=(Object.freeze||Object)({create:W,copy:G,clone:U,set:Z,add:X,scaleAndAdd:Y,sub:q,len:K,length:pd,lenSquare:J,lengthSquare:gd,mul:Q,div:tt,dot:et,scale:nt,normalize:it,distance:rt,dist:vd,distanceSquare:ot,distSquare:md,negate:at,lerp:st,applyTransform:lt,min:ut,max:ct});ht.prototype={constructor:ht,_dragStart:function(t){var e=t.target;e&&e.draggable&&(this._draggingTarget=e,e.dragging=!0,this._x=t.offsetX,this._y=t.offsetY,this.dispatchToElement(ft(e,t),"dragstart",t.event))},_drag:function(t){var e=this._draggingTarget;if(e){var n=t.offsetX,i=t.offsetY,r=n-this._x,o=i-this._y;this._x=n,this._y=i,e.drift(r,o,t),this.dispatchToElement(ft(e,t),"drag",t.event);var a=this.findHover(n,i,e).target,s=this._dropTarget;this._dropTarget=a,e!==a&&(s&&a!==s&&this.dispatchToElement(ft(s,t),"dragleave",t.event),a&&a!==s&&this.dispatchToElement(ft(a,t),"dragenter",t.event))}},_dragEnd:function(t){var e=this._draggingTarget;e&&(e.dragging=!1),this.dispatchToElement(ft(e,t),"dragend",t.event),this._dropTarget&&this.dispatchToElement(ft(this._dropTarget,t),"drop",t.event),this._draggingTarget=null,this._dropTarget=null}};var _d=Array.prototype.slice,xd=function(t){this._$handlers={},this._$eventProcessor=t};xd.prototype={constructor:xd,one:function(t,e,n,i){return pt(this,t,e,n,i,!0)},on:function(t,e,n,i){return pt(this,t,e,n,i,!1)},isSilent:function(t){var e=this._$handlers;return!e[t]||!e[t].length},off:function(t,e){var n=this._$handlers;if(!t)return this._$handlers={},this;if(e){if(n[t]){for(var i=[],r=0,o=n[t].length;o>r;r++)n[t][r].h!==e&&i.push(n[t][r]);n[t]=i}n[t]&&0===n[t].length&&delete n[t]}else delete n[t];return this},trigger:function(t){var e=this._$handlers[t],n=this._$eventProcessor;if(e){var i=arguments,r=i.length;r>3&&(i=_d.call(i,1));for(var o=e.length,a=0;o>a;){var s=e[a];if(n&&n.filter&&null!=s.query&&!n.filter(t,s.query))a++;else{switch(r){case 1:s.h.call(s.ctx);break;case 2:s.h.call(s.ctx,i[1]);break;case 3:s.h.call(s.ctx,i[1],i[2]);break;default:s.h.apply(s.ctx,i)}s.one?(e.splice(a,1),o--):a++}}}return n&&n.afterTrigger&&n.afterTrigger(t),this},triggerWithContext:function(t){var e=this._$handlers[t],n=this._$eventProcessor;if(e){var i=arguments,r=i.length;r>4&&(i=_d.call(i,1,i.length-1));for(var o=i[i.length-1],a=e.length,s=0;a>s;){var l=e[s];if(n&&n.filter&&null!=l.query&&!n.filter(t,l.query))s++;else{switch(r){case 1:l.h.call(o);break;case 2:l.h.call(o,i[1]);break;case 3:l.h.call(o,i[1],i[2]);break;default:l.h.apply(o,i)}l.one?(e.splice(s,1),a--):s++}}}return n&&n.afterTrigger&&n.afterTrigger(t),this}};var wd=Math.log(2),bd="undefined"!=typeof n&&!!n.addEventListener,Sd=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Md="___zrEVENTSAVED",Id=[],Ad=bd?function(t){t.preventDefault(),t.stopPropagation(),t.cancelBubble=!0}:function(t){t.returnValue=!1,t.cancelBubble=!0},Td=function(){this._track=[]};Td.prototype={constructor:Td,recognize:function(t,e,n){return this._doTrack(t,e,n),this._recognize(t)},clear:function(){return this._track.length=0,this},_doTrack:function(t,e,n){var i=t.touches;if(i){for(var r={points:[],touches:[],target:e,event:t},o=0,a=i.length;a>o;o++){var s=i[o],l=mt(n,s,{});r.points.push([l.zrX,l.zrY]),r.touches.push(s)}this._track.push(r)}},_recognize:function(t){for(var e in Cd)if(Cd.hasOwnProperty(e)){var n=Cd[e](this._track,t);if(n)return n}}};var Cd={pinch:function(t,e){var n=t.length;if(n){var i=(t[n-1]||{}).points,r=(t[n-2]||{}).points||i;if(r&&r.length>1&&i&&i.length>1){var o=It(i)/It(r);!isFinite(o)&&(o=1),e.pinchScale=o;var a=At(i);return e.pinchX=a[0],e.pinchY=a[1],{type:"pinch",target:t[0].target,event:e}}}}},kd="silent";kt.prototype.dispose=function(){};var Dd=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],Od=function(t,e,n,i){xd.call(this),this.storage=t,this.painter=e,this.painterRoot=i,n=n||new kt,this.proxy=null,this._hovered={},this._lastTouchMoment,this._lastX,this._lastY,this._gestureMgr,ht.call(this),this.setHandlerProxy(n)};Od.prototype={constructor:Od,setHandlerProxy:function(t){this.proxy&&this.proxy.dispose(),t&&(v(Dd,function(e){t.on&&t.on(e,this[e],this)},this),t.handler=this),this.proxy=t},mousemove:function(t){var e=t.zrX,n=t.zrY,i=this._hovered,r=i.target;r&&!r.__zr&&(i=this.findHover(i.x,i.y),r=i.target);var o=this._hovered=this.findHover(e,n),a=o.target,s=this.proxy;s.setCursor&&s.setCursor(a?a.cursor:"default"),r&&a!==r&&this.dispatchToElement(i,"mouseout",t),this.dispatchToElement(o,"mousemove",t),a&&a!==r&&this.dispatchToElement(o,"mouseover",t)},mouseout:function(t){this.dispatchToElement(this._hovered,"mouseout",t);var e,n=t.toElement||t.relatedTarget;do{n=n&&n.parentNode}while(n&&9!==n.nodeType&&!(e=n===this.painterRoot));!e&&this.trigger("globalout",{event:t})},resize:function(){this._hovered={}},dispatch:function(t,e){var n=this[t];n&&n.call(this,e)},dispose:function(){this.proxy.dispose(),this.storage=this.proxy=this.painter=null},setCursorStyle:function(t){var e=this.proxy;e.setCursor&&e.setCursor(t)},dispatchToElement:function(t,e,n){t=t||{};var i=t.target;if(!i||!i.silent){for(var r="on"+e,o=Tt(e,t,n);i&&(i[r]&&(o.cancelBubble=i[r].call(i,o)),i.trigger(e,o),i=i.parent,!o.cancelBubble););o.cancelBubble||(this.trigger(e,o),this.painter&&this.painter.eachOtherLayer(function(t){"function"==typeof t[r]&&t[r].call(t,o),t.trigger&&t.trigger(e,o)}))}},findHover:function(t,e,n){for(var i=this.storage.getDisplayList(),r={x:t,y:e},o=i.length-1;o>=0;o--){var a;if(i[o]!==n&&!i[o].ignore&&(a=Dt(i[o],t,e))&&(!r.topTarget&&(r.topTarget=i[o]),a!==kd)){r.target=i[o];break}}return r},processGesture:function(t,e){this._gestureMgr||(this._gestureMgr=new Td);var n=this._gestureMgr;"start"===e&&n.clear();var i=n.recognize(t,this.findHover(t.zrX,t.zrY,null).target,this.proxy.dom);if("end"===e&&n.clear(),i){var r=i.type;t.gestureEvent=r,this.dispatchToElement({target:i.target},r,i.event)}}},v(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],function(t){Od.prototype[t]=function(e){var n=this.findHover(e.zrX,e.zrY),i=n.target;if("mousedown"===t)this._downEl=i,this._downPoint=[e.zrX,e.zrY],this._upEl=i;else if("mouseup"===t)this._upEl=i;else if("click"===t){if(this._downEl!==this._upEl||!this._downPoint||vd(this._downPoint,[e.zrX,e.zrY])>4)return;this._downPoint=null}this.dispatchToElement(n,t,e)}}),p(Od,xd),p(Od,ht);var Pd="undefined"==typeof Float32Array?Array:Float32Array,Ld=(Object.freeze||Object)({create:Ot,identity:Pt,copy:Lt,mul:Et,translate:Nt,rotate:Bt,scale:zt,invert:Rt,clone:Ft}),Ed=Pt,Nd=5e-5,Bd=function(t){t=t||{},t.position||(this.position=[0,0]),null==t.rotation&&(this.rotation=0),t.scale||(this.scale=[1,1]),this.origin=this.origin||null},zd=Bd.prototype;zd.transform=null,zd.needLocalTransform=function(){return Vt(this.rotation)||Vt(this.position[0])||Vt(this.position[1])||Vt(this.scale[0]-1)||Vt(this.scale[1]-1)};var Rd=[];zd.updateTransform=function(){var t=this.parent,e=t&&t.transform,n=this.needLocalTransform(),i=this.transform;if(n||e){i=i||Ot(),n?this.getLocalTransform(i):Ed(i),e&&(n?Et(i,t.transform,i):Lt(i,t.transform)),this.transform=i;var r=this.globalScaleRatio;if(null!=r&&1!==r){this.getGlobalScale(Rd);var o=Rd[0]<0?-1:1,a=Rd[1]<0?-1:1,s=((Rd[0]-o)*r+o)/Rd[0]||0,l=((Rd[1]-a)*r+a)/Rd[1]||0;i[0]*=s,i[1]*=s,i[2]*=l,i[3]*=l}this.invTransform=this.invTransform||Ot(),Rt(this.invTransform,i)}else i&&Ed(i)},zd.getLocalTransform=function(t){return Bd.getLocalTransform(this,t)},zd.setTransform=function(t){var e=this.transform,n=t.dpr||1;e?t.setTransform(n*e[0],n*e[1],n*e[2],n*e[3],n*e[4],n*e[5]):t.setTransform(n,0,0,n,0,0)},zd.restoreTransform=function(t){var e=t.dpr||1;t.setTransform(e,0,0,e,0,0)};var Fd=[],Vd=Ot();zd.setLocalTransform=function(t){if(t){var e=t[0]*t[0]+t[1]*t[1],n=t[2]*t[2]+t[3]*t[3],i=this.position,r=this.scale;Vt(e-1)&&(e=Math.sqrt(e)),Vt(n-1)&&(n=Math.sqrt(n)),t[0]<0&&(e=-e),t[3]<0&&(n=-n),i[0]=t[4],i[1]=t[5],r[0]=e,r[1]=n,this.rotation=Math.atan2(-t[1]/n,t[0]/e)}},zd.decomposeTransform=function(){if(this.transform){var t=this.parent,e=this.transform;t&&t.transform&&(Et(Fd,t.invTransform,e),e=Fd);var n=this.origin;n&&(n[0]||n[1])&&(Vd[4]=n[0],Vd[5]=n[1],Et(Fd,e,Vd),Fd[4]-=n[0],Fd[5]-=n[1],e=Fd),this.setLocalTransform(e)}},zd.getGlobalScale=function(t){var e=this.transform;return t=t||[],e?(t[0]=Math.sqrt(e[0]*e[0]+e[1]*e[1]),t[1]=Math.sqrt(e[2]*e[2]+e[3]*e[3]),e[0]<0&&(t[0]=-t[0]),e[3]<0&&(t[1]=-t[1]),t):(t[0]=1,t[1]=1,t)},zd.transformCoordToLocal=function(t,e){var n=[t,e],i=this.invTransform;return i&&lt(n,n,i),n},zd.transformCoordToGlobal=function(t,e){var n=[t,e],i=this.transform;return i&&lt(n,n,i),n},Bd.getLocalTransform=function(t,e){e=e||[],Ed(e);var n=t.origin,i=t.scale||[1,1],r=t.rotation||0,o=t.position||[0,0];return n&&(e[4]-=n[0],e[5]-=n[1]),zt(e,e,i),r&&Bt(e,e,r),n&&(e[4]+=n[0],e[5]+=n[1]),e[4]+=o[0],e[5]+=o[1],e};var $d={linear:function(t){return t},quadraticIn:function(t){return t*t},quadraticOut:function(t){return t*(2-t)},quadraticInOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},cubicIn:function(t){return t*t*t},cubicOut:function(t){return--t*t*t+1},cubicInOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},quarticIn:function(t){return t*t*t*t},quarticOut:function(t){return 1- --t*t*t*t},quarticInOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},quinticIn:function(t){return t*t*t*t*t},quinticOut:function(t){return--t*t*t*t*t+1},quinticInOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},sinusoidalIn:function(t){return 1-Math.cos(t*Math.PI/2)},sinusoidalOut:function(t){return Math.sin(t*Math.PI/2)},sinusoidalInOut:function(t){return.5*(1-Math.cos(Math.PI*t))},exponentialIn:function(t){return 0===t?0:Math.pow(1024,t-1)},exponentialOut:function(t){return 1===t?1:1-Math.pow(2,-10*t)},exponentialInOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},circularIn:function(t){return 1-Math.sqrt(1-t*t)},circularOut:function(t){return Math.sqrt(1- --t*t)},circularInOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},elasticIn:function(t){var e,n=.1,i=.4;return 0===t?0:1===t?1:(!n||1>n?(n=1,e=i/4):e=i*Math.asin(1/n)/(2*Math.PI),-n*Math.pow(2,10*(t-=1))*Math.sin(2*(t-e)*Math.PI/i))},elasticOut:function(t){var e,n=.1,i=.4;return 0===t?0:1===t?1:(!n||1>n?(n=1,e=i/4):e=i*Math.asin(1/n)/(2*Math.PI),n*Math.pow(2,-10*t)*Math.sin(2*(t-e)*Math.PI/i)+1)},elasticInOut:function(t){var e,n=.1,i=.4;return 0===t?0:1===t?1:(!n||1>n?(n=1,e=i/4):e=i*Math.asin(1/n)/(2*Math.PI),(t*=2)<1?-.5*n*Math.pow(2,10*(t-=1))*Math.sin(2*(t-e)*Math.PI/i):n*Math.pow(2,-10*(t-=1))*Math.sin(2*(t-e)*Math.PI/i)*.5+1)},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},backInOut:function(t){var e=2.5949095;return(t*=2)<1?.5*t*t*((e+1)*t-e):.5*((t-=2)*t*((e+1)*t+e)+2)},bounceIn:function(t){return 1-$d.bounceOut(1-t)},bounceOut:function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bounceInOut:function(t){return.5>t?.5*$d.bounceIn(2*t):.5*$d.bounceOut(2*t-1)+.5}};$t.prototype={constructor:$t,step:function(t,e){if(this._initialized||(this._startTime=t+this._delay,this._initialized=!0),this._paused)this._pausedTime+=e;else{var n=(t-this._startTime-this._pausedTime)/this._life;if(!(0>n)){n=Math.min(n,1);var i=this.easing,r="string"==typeof i?$d[i]:i,o="function"==typeof r?r(n):n;return this.fire("frame",o),1===n?this.loop?(this.restart(t),"restart"):(this._needsRemove=!0,"destroy"):null}}},restart:function(t){var e=(t-this._startTime-this._pausedTime)%this._life;this._startTime=t-e+this.gap,this._pausedTime=0,this._needsRemove=!1},fire:function(t,e){t="on"+t,this[t]&&this[t](this._target,e)},pause:function(){this._paused=!0},resume:function(){this._paused=!1}};var jd=function(){this.head=null,this.tail=null,this._len=0},Hd=jd.prototype;Hd.insert=function(t){var e=new Wd(t);return this.insertEntry(e),e},Hd.insertEntry=function(t){this.head?(this.tail.next=t,t.prev=this.tail,t.next=null,this.tail=t):this.head=this.tail=t,this._len++},Hd.remove=function(t){var e=t.prev,n=t.next;e?e.next=n:this.head=n,n?n.prev=e:this.tail=e,t.next=t.prev=null,this._len--},Hd.len=function(){return this._len},Hd.clear=function(){this.head=this.tail=null,this._len=0};var Wd=function(t){this.value=t,this.next,this.prev},Gd=function(t){this._list=new jd,this._map={},this._maxSize=t||10,this._lastRemovedEntry=null},Ud=Gd.prototype;Ud.put=function(t,e){var n=this._list,i=this._map,r=null;if(null==i[t]){var o=n.len(),a=this._lastRemovedEntry;if(o>=this._maxSize&&o>0){var s=n.head;n.remove(s),delete i[s.key],r=s.value,this._lastRemovedEntry=s}a?a.value=e:a=new Wd(e),a.key=t,n.insertEntry(a),i[t]=a}return r},Ud.get=function(t){var e=this._map[t],n=this._list;return null!=e?(e!==n.tail&&(n.remove(e),n.insertEntry(e)),e.value):void 0},Ud.clear=function(){this._list.clear(),this._map={}};var Zd={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]},Xd=new Gd(20),Yd=null,qd=ie,Kd=re,Jd=(Object.freeze||Object)({parse:Jt,lift:ee,toHex:ne,fastLerp:ie,fastMapToColor:qd,lerp:re,mapToColor:Kd,modifyHSL:oe,modifyAlpha:ae,stringify:se}),Qd=Array.prototype.slice,tp=function(t,e,n,i){this._tracks={},this._target=t,this._loop=e||!1,this._getter=n||le,this._setter=i||ue,this._clipCount=0,this._delay=0,this._doneList=[],this._onframeList=[],this._clipList=[]};tp.prototype={when:function(t,e){var n=this._tracks;for(var i in e)if(e.hasOwnProperty(i)){if(!n[i]){n[i]=[];var r=this._getter(this._target,i);if(null==r)continue;0!==t&&n[i].push({time:0,value:me(r)})}n[i].push({time:t,value:e[i]})}return this},during:function(t){return this._onframeList.push(t),this},pause:function(){for(var t=0;t<this._clipList.length;t++)this._clipList[t].pause();this._paused=!0},resume:function(){for(var t=0;t<this._clipList.length;t++)this._clipList[t].resume();this._paused=!1},isPaused:function(){return!!this._paused},_doneCallback:function(){this._tracks={},this._clipList.length=0;for(var t=this._doneList,e=t.length,n=0;e>n;n++)t[n].call(this)},start:function(t,e){var n,i=this,r=0,o=function(){r--,r||i._doneCallback()};for(var a in this._tracks)if(this._tracks.hasOwnProperty(a)){var s=xe(this,t,o,this._tracks[a],a,e);s&&(this._clipList.push(s),r++,this.animation&&this.animation.addClip(s),n=s)}if(n){var l=n.onframe;n.onframe=function(t,e){l(t,e);for(var n=0;n<i._onframeList.length;n++)i._onframeList[n](t,e)}}return r||this._doneCallback(),this},stop:function(t){for(var e=this._clipList,n=this.animation,i=0;i<e.length;i++){var r=e[i];t&&r.onframe(this._target,1),n&&n.removeClip(r)}e.length=0},delay:function(t){return this._delay=t,this},done:function(t){return t&&this._doneList.push(t),this},getClips:function(){return this._clipList}};var ep=1;"undefined"!=typeof n&&(ep=Math.max(n.devicePixelRatio||1,1));var np=0,ip=ep,rp=function(){};1===np?rp=function(){for(var t in arguments)throw new Error(arguments[t])}:np>1&&(rp=function(){for(var e in arguments)console.log(t(arguments[e]," at components/echarts/echarts.min.js:6"))});var op=rp,ap=function(){this.animators=[]};ap.prototype={constructor:ap,animate:function(t,e){var n,i=!1,r=this,o=this.__zr;if(t){var a=t.split("."),s=r;i="shape"===a[0];for(var l=0,u=a.length;u>l;l++)s&&(s=s[a[l]]);s&&(n=s)}else n=r;if(n){var c=r.animators,h=new tp(n,e);return h.during(function(){r.dirty(i)}).done(function(){c.splice(f(c,h),1)}),c.push(h),o&&o.animation.addAnimator(h),h}op('Property "'+t+'" is not existed in element '+r.id)},stopAnimation:function(t){for(var e=this.animators,n=e.length,i=0;n>i;i++)e[i].stop(t);return e.length=0,this},animateTo:function(t,e,n,i,r,o){we(this,t,e,n,i,r,o)},animateFrom:function(t,e,n,i,r,o){we(this,t,e,n,i,r,o,!0)}};var sp=function(t){Bd.call(this,t),xd.call(this,t),ap.call(this,t),this.id=t.id||qf()};sp.prototype={type:"element",name:"",__zr:null,ignore:!1,clipPath:null,isGroup:!1,drift:function(t,e){switch(this.draggable){case"horizontal":e=0;break;case"vertical":t=0}var n=this.transform;n||(n=this.transform=[1,0,0,1,0,0]),n[4]+=t,n[5]+=e,this.decomposeTransform(),this.dirty(!1)},beforeUpdate:function(){},afterUpdate:function(){},update:function(){this.updateTransform()},traverse:function(){},attrKV:function(t,e){if("position"===t||"scale"===t||"origin"===t){if(e){var n=this[t];n||(n=this[t]=[]),n[0]=e[0],n[1]=e[1]}}else this[t]=e},hide:function(){this.ignore=!0,this.__zr&&this.__zr.refresh()},show:function(){this.ignore=!1,this.__zr&&this.__zr.refresh()},attr:function(t,e){if("string"==typeof t)this.attrKV(t,e);else if(A(t))for(var n in t)t.hasOwnProperty(n)&&this.attrKV(n,t[n]);return this.dirty(!1),this},setClipPath:function(t){var e=this.__zr;e&&t.addSelfToZr(e),this.clipPath&&this.clipPath!==t&&this.removeClipPath(),this.clipPath=t,t.__zr=e,t.__clipTarget=this,this.dirty(!1)},removeClipPath:function(){var t=this.clipPath;t&&(t.__zr&&t.removeSelfFromZr(t.__zr),t.__zr=null,t.__clipTarget=null,this.clipPath=null,this.dirty(!1))},addSelfToZr:function(t){this.__zr=t;var e=this.animators;if(e)for(var n=0;n<e.length;n++)t.animation.addAnimator(e[n]);this.clipPath&&this.clipPath.addSelfToZr(t)},removeSelfFromZr:function(t){this.__zr=null;var e=this.animators;if(e)for(var n=0;n<e.length;n++)t.animation.removeAnimator(e[n]);this.clipPath&&this.clipPath.removeSelfFromZr(t)}},p(sp,ap),p(sp,Bd),p(sp,xd);var lp=lt,up=Math.min,cp=Math.max;Me.prototype={constructor:Me,union:function(t){var e=up(t.x,this.x),n=up(t.y,this.y);this.width=cp(t.x+t.width,this.x+this.width)-e,this.height=cp(t.y+t.height,this.y+this.height)-n,this.x=e,this.y=n},applyTransform:function(){var t=[],e=[],n=[],i=[];return function(r){if(r){t[0]=n[0]=this.x,t[1]=i[1]=this.y,e[0]=i[0]=this.x+this.width,e[1]=n[1]=this.y+this.height,lp(t,t,r),lp(e,e,r),lp(n,n,r),lp(i,i,r),this.x=up(t[0],e[0],n[0],i[0]),this.y=up(t[1],e[1],n[1],i[1]);var o=cp(t[0],e[0],n[0],i[0]),a=cp(t[1],e[1],n[1],i[1]);this.width=o-this.x,this.height=a-this.y}}}(),calculateTransform:function(t){var e=this,n=t.width/e.width,i=t.height/e.height,r=Ot();return Nt(r,r,[-e.x,-e.y]),zt(r,r,[n,i]),Nt(r,r,[t.x,t.y]),r},intersect:function(t){if(!t)return!1;t instanceof Me||(t=Me.create(t));var e=this,n=e.x,i=e.x+e.width,r=e.y,o=e.y+e.height,a=t.x,s=t.x+t.width,l=t.y,u=t.y+t.height;return!(a>i||n>s||l>o||r>u)},contain:function(t,e){var n=this;return t>=n.x&&t<=n.x+n.width&&e>=n.y&&e<=n.y+n.height},clone:function(){return new Me(this.x,this.y,this.width,this.height)},copy:function(t){this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height},plain:function(){return{x:this.x,y:this.y,width:this.width,height:this.height}}},Me.create=function(t){return new Me(t.x,t.y,t.width,t.height)};var hp=function(t){for(var e in t=t||{},sp.call(this,t),t)t.hasOwnProperty(e)&&(this[e]=t[e]);this._children=[],this.__storage=null,this.__dirty=!0};hp.prototype={constructor:hp,isGroup:!0,type:"group",silent:!1,children:function(){return this._children.slice()},childAt:function(t){return this._children[t]},childOfName:function(t){for(var e=this._children,n=0;n<e.length;n++)if(e[n].name===t)return e[n]},childCount:function(){return this._children.length},add:function(t){return t&&t!==this&&t.parent!==this&&(this._children.push(t),this._doAdd(t)),this},addBefore:function(t,e){if(t&&t!==this&&t.parent!==this&&e&&e.parent===this){var n=this._children,i=n.indexOf(e);i>=0&&(n.splice(i,0,t),this._doAdd(t))}return this},_doAdd:function(t){t.parent&&t.parent.remove(t),t.parent=this;var e=this.__storage,n=this.__zr;e&&e!==t.__storage&&(e.addToStorage(t),t instanceof hp&&t.addChildrenToStorage(e)),n&&n.refresh()},remove:function(t){var e=this.__zr,n=this.__storage,i=this._children,r=f(i,t);return 0>r?this:(i.splice(r,1),t.parent=null,n&&(n.delFromStorage(t),t instanceof hp&&t.delChildrenFromStorage(n)),e&&e.refresh(),this)},removeAll:function(){var t,e,n=this._children,i=this.__storage;for(e=0;e<n.length;e++)t=n[e],i&&(i.delFromStorage(t),t instanceof hp&&t.delChildrenFromStorage(i)),t.parent=null;return n.length=0,this},eachChild:function(t,e){for(var n=this._children,i=0;i<n.length;i++){var r=n[i];t.call(e,r,i)}return this},traverse:function(t,e){for(var n=0;n<this._children.length;n++){var i=this._children[n];t.call(e,i),"group"===i.type&&i.traverse(t,e)}return this},addChildrenToStorage:function(t){for(var e=0;e<this._children.length;e++){var n=this._children[e];t.addToStorage(n),n instanceof hp&&n.addChildrenToStorage(t)}},delChildrenFromStorage:function(t){for(var e=0;e<this._children.length;e++){var n=this._children[e];t.delFromStorage(n),n instanceof hp&&n.delChildrenFromStorage(t)}},dirty:function(){return this.__dirty=!0,this.__zr&&this.__zr.refresh(),this},getBoundingRect:function(t){for(var e=null,n=new Me(0,0,0,0),i=t||this._children,r=[],o=0;o<i.length;o++){var a=i[o];if(!a.ignore&&!a.invisible){var s=a.getBoundingRect(),l=a.getLocalTransform(r);l?(n.copy(s),n.applyTransform(l),e=e||n.clone(),e.union(n)):(e=e||s.clone(),e.union(s))}}return e||n}},d(hp,sp);var fp=32,dp=7,pp=function(){this._roots=[],this._displayList=[],this._displayListLen=0};pp.prototype={constructor:pp,traverse:function(t,e){for(var n=0;n<this._roots.length;n++)this._roots[n].traverse(t,e)},getDisplayList:function(t,e){return e=e||!1,t&&this.updateDisplayList(e),this._displayList},updateDisplayList:function(t){this._displayListLen=0;for(var e=this._roots,n=this._displayList,i=0,r=e.length;r>i;i++)this._updateAndAddDisplayable(e[i],null,t);n.length=this._displayListLen,Jf.canvasSupported&&Pe(n,Le)},_updateAndAddDisplayable:function(t,e,n){if(!t.ignore||n){t.beforeUpdate(),t.__dirty&&t.update(),t.afterUpdate();var i=t.clipPath;if(i){e=e?e.slice():[];for(var r=i,o=t;r;)r.parent=o,r.updateTransform(),e.push(r),o=r,r=r.clipPath}if(t.isGroup){for(var a=t._children,s=0;s<a.length;s++){var l=a[s];t.__dirty&&(l.__dirty=!0),this._updateAndAddDisplayable(l,e,n)}t.__dirty=!1}else t.__clipPaths=e,this._displayList[this._displayListLen++]=t}},addRoot:function(t){t.__storage!==this&&(t instanceof hp&&t.addChildrenToStorage(this),this.addToStorage(t),this._roots.push(t))},delRoot:function(t){if(null==t){for(var e=0;e<this._roots.length;e++){var n=this._roots[e];n instanceof hp&&n.delChildrenFromStorage(this)}return this._roots=[],this._displayList=[],void(this._displayListLen=0)}if(t instanceof Array){e=0;for(var i=t.length;i>e;e++)this.delRoot(t[e])}else{var r=f(this._roots,t);r>=0&&(this.delFromStorage(t),this._roots.splice(r,1),t instanceof hp&&t.delChildrenFromStorage(this))}},addToStorage:function(t){return t&&(t.__storage=this,t.dirty(!1)),this},delFromStorage:function(t){return t&&(t.__storage=null),this},dispose:function(){this._renderList=this._roots=null},displayableSortFunc:Le};var gp={shadowBlur:1,shadowOffsetX:1,shadowOffsetY:1,textShadowBlur:1,textShadowOffsetX:1,textShadowOffsetY:1,textBoxShadowBlur:1,textBoxShadowOffsetX:1,textBoxShadowOffsetY:1},vp=function(t,e,n){return gp.hasOwnProperty(e)?n*=t.dpr:n},mp={NONE:0,STYLE_BIND:1,PLAIN_TEXT:2},yp=9,_p=[["shadowBlur",0],["shadowOffsetX",0],["shadowOffsetY",0],["shadowColor","#000"],["lineCap","butt"],["lineJoin","miter"],["miterLimit",10]],xp=function(t){this.extendFrom(t,!1)};xp.prototype={constructor:xp,fill:"#000",stroke:null,opacity:1,fillOpacity:null,strokeOpacity:null,lineDash:null,lineDashOffset:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,lineWidth:1,strokeNoScale:!1,text:null,font:null,textFont:null,fontStyle:null,fontWeight:null,fontSize:null,fontFamily:null,textTag:null,textFill:"#000",textStroke:null,textWidth:null,textHeight:null,textStrokeWidth:0,textLineHeight:null,textPosition:"inside",textRect:null,textOffset:null,textAlign:null,textVerticalAlign:null,textDistance:5,textShadowColor:"transparent",textShadowBlur:0,textShadowOffsetX:0,textShadowOffsetY:0,textBoxShadowColor:"transparent",textBoxShadowBlur:0,textBoxShadowOffsetX:0,textBoxShadowOffsetY:0,transformText:!1,textRotation:0,textOrigin:null,textBackgroundColor:null,textBorderColor:null,textBorderWidth:0,textBorderRadius:0,textPadding:null,rich:null,truncate:null,blend:null,bind:function(t,e,n){var i=this,r=n&&n.style,o=!r||t.__attrCachedBy!==mp.STYLE_BIND;t.__attrCachedBy=mp.STYLE_BIND;for(var a=0;a<_p.length;a++){var s=_p[a],l=s[0];(o||i[l]!==r[l])&&(t[l]=vp(t,l,i[l]||s[1]))}if((o||i.fill!==r.fill)&&(t.fillStyle=i.fill),(o||i.stroke!==r.stroke)&&(t.strokeStyle=i.stroke),(o||i.opacity!==r.opacity)&&(t.globalAlpha=null==i.opacity?1:i.opacity),(o||i.blend!==r.blend)&&(t.globalCompositeOperation=i.blend||"source-over"),this.hasStroke()){var u=i.lineWidth;t.lineWidth=u/(this.strokeNoScale&&e&&e.getLineScale?e.getLineScale():1)}},hasFill:function(){var t=this.fill;return null!=t&&"none"!==t},hasStroke:function(){var t=this.stroke;return null!=t&&"none"!==t&&this.lineWidth>0},extendFrom:function(t,e){if(t)for(var n in t)!t.hasOwnProperty(n)||!0!==e&&(!1===e?this.hasOwnProperty(n):null==t[n])||(this[n]=t[n])},set:function(t,e){"string"==typeof t?this[t]=e:this.extendFrom(t,!0)},clone:function(){var t=new this.constructor;return t.extendFrom(this,!0),t},getGradient:function(t,e,n){for(var i="radial"===e.type?Ne:Ee,r=i(t,e,n),o=e.colorStops,a=0;a<o.length;a++)r.addColorStop(o[a].offset,o[a].color);return r}};for(var wp=xp.prototype,bp=0;bp<_p.length;bp++){var Sp=_p[bp];Sp[0]in wp||(wp[Sp[0]]=Sp[1])}xp.getGradient=wp.getGradient;var Mp=function(t,e){this.image=t,this.repeat=e,this.type="pattern"};Mp.prototype.getCanvasPattern=function(t){return t.createPattern(this.image,this.repeat||"repeat")};var Ip=function(t,e,n){var i;n=n||ip,"string"==typeof t?i=ze(t,e,n):A(t)&&(i=t,t=i.id),this.id=t,this.dom=i;var r=i.style;r&&(i.onselectstart=Be,r["-webkit-user-select"]="none",r["user-select"]="none",r["-webkit-touch-callout"]="none",r["-webkit-tap-highlight-color"]="rgba(0,0,0,0)",r.padding=0,r.margin=0,r["border-width"]=0),this.domBack=null,this.ctxBack=null,this.painter=e,this.config=null,this.clearColor=0,this.motionBlur=!1,this.lastFrameAlpha=.7,this.dpr=n};Ip.prototype={constructor:Ip,__dirty:!0,__used:!1,__drawIndex:0,__startIndex:0,__endIndex:0,incremental:!1,getElementCount:function(){return this.__endIndex-this.__startIndex},initContext:function(){this.ctx=this.dom.getContext("2d"),this.ctx.dpr=this.dpr},createBackBuffer:function(){var t=this.dpr;this.domBack=ze("back-"+this.id,this.painter,t),this.ctxBack=this.domBack.getContext("2d"),1!==t&&this.ctxBack.scale(t,t)},resize:function(t,e){var n=this.dpr,i=this.dom,r=i.style,o=this.domBack;r&&(r.width=t+"px",r.height=e+"px"),i.width=t*n,i.height=e*n,o&&(o.width=t*n,o.height=e*n,1!==n&&this.ctxBack.scale(n,n))},clear:function(t,e){var n,i=this.dom,r=this.ctx,o=i.width,a=i.height,s=(e=e||this.clearColor,this.motionBlur&&!t),l=this.lastFrameAlpha,u=this.dpr;(s&&(this.domBack||this.createBackBuffer(),this.ctxBack.globalCompositeOperation="copy",this.ctxBack.drawImage(i,0,0,o/u,a/u)),r.clearRect(0,0,o,a),e&&"transparent"!==e)&&(e.colorStops?(n=e.__canvasGradient||xp.getGradient(r,e,{x:0,y:0,width:o,height:a}),e.__canvasGradient=n):e.image&&(n=Mp.prototype.getCanvasPattern.call(e,r)),r.save(),r.fillStyle=n||e,r.fillRect(0,0,o,a),r.restore());if(s){var c=this.domBack;r.save(),r.globalAlpha=l,r.drawImage(c,0,0,o,a),r.restore()}}};var Ap="undefined"!=typeof n&&(n.requestAnimationFrame&&n.requestAnimationFrame.bind(n)||n.msRequestAnimationFrame&&n.msRequestAnimationFrame.bind(n)||n.mozRequestAnimationFrame||n.webkitRequestAnimationFrame)||function(t){setTimeout(t,16)},Tp=new Gd(50),Cp={},kp=0,Dp=5e3,Op=/\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,Pp="12px sans-serif",Lp={measureText:function(t,e){var n=h();return n.font=e||Pp,n.measureText(t)}},Ep=Pp,Np={left:1,right:1,center:1},Bp={top:1,bottom:1,middle:1},zp=[["textShadowBlur","shadowBlur",0],["textShadowOffsetX","shadowOffsetX",0],["textShadowOffsetY","shadowOffsetY",0],["textShadowColor","shadowColor","transparent"]],Rp={},Fp={},Vp=new Me,$p=function(){};$p.prototype={constructor:$p,drawRectText:function(t,e){var n=this.style;e=n.textRect||e,this.__dirty&&sn(n,!0);var i=n.text;if(null!=i&&(i+=""),Mn(i,n)){t.save();var r=this.transform;n.transformText?this.setTransform(t):r&&(Vp.copy(e),Vp.applyTransform(r),e=Vp),un(this,t,i,n,e,yp),t.restore()}}},In.prototype={constructor:In,type:"displayable",__dirty:!0,invisible:!1,z:0,z2:0,zlevel:0,draggable:!1,dragging:!1,silent:!1,culling:!1,cursor:"pointer",rectHover:!1,progressive:!1,incremental:!1,globalScaleRatio:1,beforeBrush:function(){},afterBrush:function(){},brush:function(){},getBoundingRect:function(){},contain:function(t,e){return this.rectContain(t,e)},traverse:function(t,e){t.call(e,this)},rectContain:function(t,e){var n=this.transformCoordToLocal(t,e),i=this.getBoundingRect();return i.contain(n[0],n[1])},dirty:function(){this.__dirty=this.__dirtyText=!0,this._rect=null,this.__zr&&this.__zr.refresh()},animateStyle:function(t){return this.animate("style",t)},attrKV:function(t,e){"style"!==t?sp.prototype.attrKV.call(this,t,e):this.style.set(e)},setStyle:function(t,e){return this.style.set(t,e),this.dirty(!1),this},useStyle:function(t){return this.style=new xp(t,this),this.dirty(!1),this},calculateTextPosition:null},d(In,sp),p(In,$p),An.prototype={constructor:An,type:"image",brush:function(t,e){var n=this.style,i=n.image;n.bind(t,this,e);var r=this._image=Fe(i,this._image,this,this.onload);if(r&&$e(r)){var o=n.x||0,a=n.y||0,s=n.width,l=n.height,u=r.width/r.height;if(null==s&&null!=l?s=l*u:null==l&&null!=s?l=s/u:null==s&&null==l&&(s=r.width,l=r.height),this.setTransform(t),n.sWidth&&n.sHeight){var c=n.sx||0,h=n.sy||0;t.drawImage(r,c,h,n.sWidth,n.sHeight,o,a,s,l)}else if(n.sx&&n.sy){c=n.sx,h=n.sy;var f=s-c,d=l-h;t.drawImage(r,c,h,f,d,o,a,s,l)}else t.drawImage(r,o,a,s,l);null!=n.text&&(this.restoreTransform(t),this.drawRectText(t,this.getBoundingRect()))}},getBoundingRect:function(){var t=this.style;return this._rect||(this._rect=new Me(t.x||0,t.y||0,t.width||0,t.height||0)),this._rect}},d(An,In);var jp=1e5,Hp=314159,Wp=.01,Gp=.001,Up=new Me(0,0,0,0),Zp=new Me(0,0,0,0),Xp=function(t,e,n){this.type="canvas";var i=!t.nodeName||"CANVAS"===t.nodeName.toUpperCase();this._opts=n=u({},n||{}),this.dpr=n.devicePixelRatio||ip,this._singleCanvas=i,this.root=t;var r=t.style;r&&(r["-webkit-tap-highlight-color"]="transparent",r["-webkit-user-select"]=r["user-select"]=r["-webkit-touch-callout"]="none",t.innerHTML=""),this.storage=e;var o=this._zlevelList=[],a=this._layers={};if(this._layerConfig={},this._needsManuallyCompositing=!1,i){var s=t.width,l=t.height;null!=n.width&&(s=n.width),null!=n.height&&(l=n.height),this.dpr=n.devicePixelRatio||1,t.width=s*this.dpr,t.height=l*this.dpr,this._width=s,this._height=l;var c=new Ip(t,this,this.dpr);c.__builtin__=!0,c.initContext(),a[Hp]=c,c.zlevel=Hp,o.push(Hp),this._domRoot=t}else{this._width=this._getSize(0),this._height=this._getSize(1);var h=this._domRoot=Pn(this._width,this._height);t.appendChild(h)}this._hoverlayer=null,this._hoverElements=[]};Xp.prototype={constructor:Xp,getType:function(){return"canvas"},isSingleCanvas:function(){return this._singleCanvas},getViewportRoot:function(){return this._domRoot},getViewportRootOffset:function(){var t=this.getViewportRoot();return t?{offsetLeft:t.offsetLeft||0,offsetTop:t.offsetTop||0}:void 0},refresh:function(t){var e=this.storage.getDisplayList(!0),n=this._zlevelList;this._redrawId=Math.random(),this._paintList(e,t,this._redrawId);for(var i=0;i<n.length;i++){var r=n[i],o=this._layers[r];if(!o.__builtin__&&o.refresh){var a=0===i?this._backgroundColor:null;o.refresh(a)}}return this.refreshHover(),this},addHover:function(t,e){if(!t.__hoverMir){var n=new t.constructor({style:t.style,shape:t.shape,z:t.z,z2:t.z2,silent:t.silent});return n.__from=t,t.__hoverMir=n,e&&n.setStyle(e),this._hoverElements.push(n),n}},removeHover:function(t){var e=t.__hoverMir,n=this._hoverElements,i=f(n,e);i>=0&&n.splice(i,1),t.__hoverMir=null},clearHover:function(){for(var t=this._hoverElements,e=0;e<t.length;e++){var n=t[e].__from;n&&(n.__hoverMir=null)}t.length=0},refreshHover:function(){var t=this._hoverElements,e=t.length,n=this._hoverlayer;if(n&&n.clear(),e){Pe(t,this.storage.displayableSortFunc),n||(n=this._hoverlayer=this.getLayer(jp));var i={};n.ctx.save();for(var r=0;e>r;){var o=t[r],a=o.__from;a&&a.__zr?(r++,a.invisible||(o.transform=a.transform,o.invTransform=a.invTransform,o.__clipPaths=a.__clipPaths,this._doPaintEl(o,n,!0,i))):(t.splice(r,1),a.__hoverMir=null,e--)}n.ctx.restore()}},getHoverLayer:function(){return this.getLayer(jp)},_paintList:function(t,e,n){if(this._redrawId===n){e=e||!1,this._updateLayerStatus(t);var i=this._doPaintList(t,e);if(this._needsManuallyCompositing&&this._compositeManually(),!i){var r=this;Ap(function(){r._paintList(t,e,n)})}}},_compositeManually:function(){var t=this.getLayer(Hp).ctx,e=this._domRoot.width,n=this._domRoot.height;t.clearRect(0,0,e,n),this.eachBuiltinLayer(function(i){i.virtual&&t.drawImage(i.dom,0,0,e,n)})},_doPaintList:function(e,n){for(var i=[],r=0;r<this._zlevelList.length;r++){var o=this._zlevelList[r],a=this._layers[o];a.__builtin__&&a!==this._hoverlayer&&(a.__dirty||n)&&i.push(a)}for(var s=!0,l=0;l<i.length;l++){a=i[l];var u=a.ctx,c={};u.save();var h=n?a.__startIndex:a.__drawIndex,f=!n&&a.incremental&&Date.now,d=f&&Date.now(),p=a.zlevel===this._zlevelList[0]?this._backgroundColor:null;if(a.__startIndex===a.__endIndex)a.clear(!1,p);else if(h===a.__startIndex){var g=e[h];g.incremental&&g.notClear&&!n||a.clear(!1,p)}-1===h&&(console.error(t("For some unknown reason. drawIndex is -1"," at components/echarts/echarts.min.js:6")),h=a.__startIndex);for(var m=h;m<a.__endIndex;m++){var y=e[m];if(this._doPaintEl(y,a,n,c),y.__dirty=y.__dirtyText=!1,f){var _=Date.now()-d;if(_>15)break}}a.__drawIndex=m,a.__drawIndex<a.__endIndex&&(s=!1),c.prevElClipPaths&&u.restore(),u.restore()}return Jf.wxa&&v(this._layers,function(t){t&&t.ctx&&t.ctx.draw&&t.ctx.draw()}),s},_doPaintEl:function(t,e,n,i){var r=e.ctx,o=t.transform;if(!(!e.__dirty&&!n||t.invisible||0===t.style.opacity||o&&!o[0]&&!o[3]||t.culling&&kn(t,this._width,this._height))){var a=t.__clipPaths,s=i.prevElClipPaths;(!s||Dn(a,s))&&(s&&(r.restore(),i.prevElClipPaths=null,i.prevEl=null),a&&(r.save(),On(a,r),i.prevElClipPaths=a)),t.beforeBrush&&t.beforeBrush(r),t.brush(r,i.prevEl||null),i.prevEl=t,t.afterBrush&&t.afterBrush(r)}},getLayer:function(t,e){this._singleCanvas&&!this._needsManuallyCompositing&&(t=Hp);var n=this._layers[t];return n||(n=new Ip("zr_"+t,this,this.dpr),n.zlevel=t,n.__builtin__=!0,this._layerConfig[t]&&s(n,this._layerConfig[t],!0),e&&(n.virtual=e),this.insertLayer(t,n),n.initContext()),n},insertLayer:function(t,e){var n=this._layers,i=this._zlevelList,r=i.length,o=null,a=-1,s=this._domRoot;if(n[t])op("ZLevel "+t+" has been used already");else if(Cn(e)){if(r>0&&t>i[0]){for(a=0;r-1>a&&!(i[a]<t&&i[a+1]>t);a++);o=n[i[a]]}if(i.splice(a+1,0,t),n[t]=e,!e.virtual)if(o){var l=o.dom;l.nextSibling?s.insertBefore(e.dom,l.nextSibling):s.appendChild(e.dom)}else s.firstChild?s.insertBefore(e.dom,s.firstChild):s.appendChild(e.dom)}else op("Layer of zlevel "+t+" is not valid")},eachLayer:function(t,e){var n,i,r=this._zlevelList;for(i=0;i<r.length;i++)n=r[i],t.call(e,this._layers[n],n)},eachBuiltinLayer:function(t,e){var n,i,r,o=this._zlevelList;for(r=0;r<o.length;r++)i=o[r],n=this._layers[i],n.__builtin__&&t.call(e,n,i)},eachOtherLayer:function(t,e){var n,i,r,o=this._zlevelList;for(r=0;r<o.length;r++)i=o[r],n=this._layers[i],n.__builtin__||t.call(e,n,i)},getLayers:function(){return this._layers},_updateLayerStatus:function(t){function e(t){r&&(r.__endIndex!==t&&(r.__dirty=!0),r.__endIndex=t)}if(this.eachBuiltinLayer(function(t){t.__dirty=t.__used=!1}),this._singleCanvas)for(var n=1;n<t.length;n++){var i=t[n];if(i.zlevel!==t[n-1].zlevel||i.incremental){this._needsManuallyCompositing=!0;break}}var r=null,o=0;for(n=0;n<t.length;n++){i=t[n];var a,s=i.zlevel;i.incremental?(a=this.getLayer(s+Gp,this._needsManuallyCompositing),a.incremental=!0,o=1):a=this.getLayer(s+(o>0?Wp:0),this._needsManuallyCompositing),a.__builtin__||op("ZLevel "+s+" has been used by unkown layer "+a.id),a!==r&&(a.__used=!0,a.__startIndex!==n&&(a.__dirty=!0),a.__startIndex=n,a.__drawIndex=a.incremental?-1:n,e(n),r=a),i.__dirty&&(a.__dirty=!0,a.incremental&&a.__drawIndex<0&&(a.__drawIndex=n))}e(n),this.eachBuiltinLayer(function(t){!t.__used&&t.getElementCount()>0&&(t.__dirty=!0,t.__startIndex=t.__endIndex=t.__drawIndex=0),t.__dirty&&t.__drawIndex<0&&(t.__drawIndex=t.__startIndex)})},clear:function(){return this.eachBuiltinLayer(this._clearLayer),this},_clearLayer:function(t){t.clear()},setBackgroundColor:function(t){this._backgroundColor=t},configLayer:function(t,e){if(e){var n=this._layerConfig;n[t]?s(n[t],e,!0):n[t]=e;for(var i=0;i<this._zlevelList.length;i++){var r=this._zlevelList[i];if(r===t||r===t+Wp){var o=this._layers[r];s(o,n[t],!0)}}}},delLayer:function(t){var e=this._layers,n=this._zlevelList,i=e[t];i&&(i.dom.parentNode.removeChild(i.dom),delete e[t],n.splice(f(n,t),1))},resize:function(t,e){if(this._domRoot.style){var n=this._domRoot;n.style.display="none";var i=this._opts;if(null!=t&&(i.width=t),null!=e&&(i.height=e),t=this._getSize(0),e=this._getSize(1),n.style.display="",this._width!==t||e!==this._height){for(var r in n.style.width=t+"px",n.style.height=e+"px",this._layers)this._layers.hasOwnProperty(r)&&this._layers[r].resize(t,e);v(this._progressiveLayers,function(n){n.resize(t,e)}),this.refresh(!0)}this._width=t,this._height=e}else{if(null==t||null==e)return;this._width=t,this._height=e,this.getLayer(Hp).resize(t,e)}return this},clearLayer:function(t){var e=this._layers[t];e&&e.clear()},dispose:function(){this.root.innerHTML="",this.root=this.storage=this._domRoot=this._layers=null},getRenderedCanvas:function(t){if(t=t||{},this._singleCanvas&&!this._compositeManually)return this._layers[Hp].dom;var e=new Ip("image",this,t.pixelRatio||this.dpr);if(e.initContext(),e.clear(!1,t.backgroundColor||this._backgroundColor),t.pixelRatio<=this.dpr){this.refresh();var n=e.dom.width,i=e.dom.height,r=e.ctx;this.eachLayer(function(t){t.__builtin__?r.drawImage(t.dom,0,0,n,i):t.renderToCanvas&&(e.ctx.save(),t.renderToCanvas(e.ctx),e.ctx.restore())})}else for(var o={},a=this.storage.getDisplayList(!0),s=0;s<a.length;s++){var l=a[s];this._doPaintEl(l,e,!0,o)}return e.dom},getWidth:function(){return this._width},getHeight:function(){return this._height},_getSize:function(t){var e=this._opts,n=["width","height"][t],r=["clientWidth","clientHeight"][t],o=["paddingLeft","paddingTop"][t],a=["paddingRight","paddingBottom"][t];if(null!=e[n]&&"auto"!==e[n])return parseFloat(e[n]);var s=this.root,l=i.defaultView.getComputedStyle(s);return(s[r]||Tn(l[n])||Tn(s.style[n]))-(Tn(l[o])||0)-(Tn(l[a])||0)|0},pathToImage:function(t,e){e=e||this.dpr;var n=i.createElement("canvas"),r=n.getContext("2d"),o=t.getBoundingRect(),a=t.style,s=a.shadowBlur*e,l=a.shadowOffsetX*e,u=a.shadowOffsetY*e,c=a.hasStroke()?a.lineWidth:0,h=Math.max(c/2,-l+s),f=Math.max(c/2,l+s),d=Math.max(c/2,-u+s),p=Math.max(c/2,u+s),g=o.width+h+f,v=o.height+d+p;n.width=g*e,n.height=v*e,r.scale(e,e),r.clearRect(0,0,g,v),r.dpr=e;var m={position:t.position,rotation:t.rotation,scale:t.scale};t.position=[h-o.x,d-o.y],t.rotation=0,t.scale=[1,1],t.updateTransform(),t&&t.brush(r);var y=An,_=new y({style:{x:0,y:0,image:n}});return null!=m.position&&(_.position=t.position=m.position),null!=m.rotation&&(_.rotation=t.rotation=m.rotation),null!=m.scale&&(_.scale=t.scale=m.scale),_}};var Yp=function(t){t=t||{},this.stage=t.stage||{},this.onframe=t.onframe||function(){},this._clips=[],this._running=!1,this._time,this._pausedTime,this._pauseStart,this._paused=!1,xd.call(this)};Yp.prototype={constructor:Yp,addClip:function(t){this._clips.push(t)},addAnimator:function(t){t.animation=this;for(var e=t.getClips(),n=0;n<e.length;n++)this.addClip(e[n])},removeClip:function(t){var e=f(this._clips,t);e>=0&&this._clips.splice(e,1)},removeAnimator:function(t){for(var e=t.getClips(),n=0;n<e.length;n++)this.removeClip(e[n]);t.animation=null},_update:function(){for(var t=(new Date).getTime()-this._pausedTime,e=t-this._time,n=this._clips,i=n.length,r=[],o=[],a=0;i>a;a++){var s=n[a],l=s.step(t,e);l&&(r.push(l),o.push(s))}for(a=0;i>a;)n[a]._needsRemove?(n[a]=n[i-1],n.pop(),i--):a++;i=r.length;for(a=0;i>a;a++)o[a].fire(r[a]);this._time=t,this.onframe(e),this.trigger("frame",e),this.stage.update&&this.stage.update()},_startLoop:function(){function t(){e._running&&(Ap(t),!e._paused&&e._update())}var e=this;this._running=!0,Ap(t)},start:function(){this._time=(new Date).getTime(),this._pausedTime=0,this._startLoop()},stop:function(){this._running=!1},pause:function(){this._paused||(this._pauseStart=(new Date).getTime(),this._paused=!0)},resume:function(){this._paused&&(this._pausedTime+=(new Date).getTime()-this._pauseStart,this._paused=!1)},clear:function(){this._clips=[]},isFinished:function(){return!this._clips.length},animate:function(t,e){e=e||{};var n=new tp(t,e.loop,e.getter,e.setter);return this.addAnimator(n),n}},p(Yp,xd);var qp=300,Kp=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],Jp=["touchstart","touchend","touchmove"],Qp={pointerdown:1,pointerup:1,pointermove:1,pointerout:1},tg=m(Kp,function(t){var e=t.replace("mouse","pointer");return Qp[e]?e:t}),eg={mousemove:function(t){t=wt(this.dom,t),this.trigger("mousemove",t)},mouseout:function(t){t=wt(this.dom,t);var e=t.toElement||t.relatedTarget;if(e!==this.dom)for(;e&&9!==e.nodeType;){if(e===this.dom)return;e=e.parentNode}this.trigger("mouseout",t)},touchstart:function(t){t=wt(this.dom,t),t.zrByTouch=!0,this._lastTouchMoment=new Date,this.handler.processGesture(this,t,"start"),eg.mousemove.call(this,t),eg.mousedown.call(this,t),En(this)},touchmove:function(t){t=wt(this.dom,t),t.zrByTouch=!0,this.handler.processGesture(this,t,"change"),eg.mousemove.call(this,t),En(this)},touchend:function(t){t=wt(this.dom,t),t.zrByTouch=!0,this.handler.processGesture(this,t,"end"),eg.mouseup.call(this,t),+new Date-this._lastTouchMoment<qp&&eg.click.call(this,t),En(this)},pointerdown:function(t){eg.mousedown.call(this,t)},pointermove:function(t){Nn(t)||eg.mousemove.call(this,t)},pointerup:function(t){eg.mouseup.call(this,t)},pointerout:function(t){Nn(t)||eg.mouseout.call(this,t)}};v(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],function(t){eg[t]=function(e){e=wt(this.dom,e),this.trigger(t,e)}});var ng=zn.prototype;ng.dispose=function(){for(var t=Kp.concat(Jp),e=0;e<t.length;e++){var n=t[e];St(this.dom,Ln(n),this._handlers[n])}},ng.setCursor=function(t){this.dom.style&&(this.dom.style.cursor=t||"default")},p(zn,xd);var ig=!Jf.canvasSupported,rg={canvas:Xp},og={},ag="4.1.0",sg=function(t,e,n){n=n||{},this.dom=e,this.id=t;var i=this,r=new pp,o=n.renderer;if(ig){if(!rg.vml)throw new Error("You need to require 'zrender/vml/vml' to support IE8");o="vml"}else o&&rg[o]||(o="canvas");var a=new rg[o](e,r,n,t);this.storage=r,this.painter=a;var s=Jf.node||Jf.worker?null:new zn(a.getViewportRoot());this.handler=new Od(r,a,s,a.root),this.animation=new Yp({stage:{update:w(this.flush,this)}}),this.animation.start(),this._needsRefresh;var l=r.delFromStorage,u=r.addToStorage;r.delFromStorage=function(t){l.call(r,t),t&&t.removeSelfFromZr(i)},r.addToStorage=function(t){u.call(r,t),t.addSelfToZr(i)}};sg.prototype={constructor:sg,getId:function(){return this.id},add:function(t){this.storage.addRoot(t),this._needsRefresh=!0},remove:function(t){this.storage.delRoot(t),this._needsRefresh=!0},configLayer:function(t,e){this.painter.configLayer&&this.painter.configLayer(t,e),this._needsRefresh=!0},setBackgroundColor:function(t){this.painter.setBackgroundColor&&this.painter.setBackgroundColor(t),this._needsRefresh=!0},refreshImmediately:function(){this._needsRefresh=this._needsRefreshHover=!1,this.painter.refresh(),this._needsRefresh=this._needsRefreshHover=!1},refresh:function(){this._needsRefresh=!0},flush:function(){var t;this._needsRefresh&&(t=!0,this.refreshImmediately()),this._needsRefreshHover&&(t=!0,this.refreshHoverImmediately()),t&&this.trigger("rendered")},addHover:function(t,e){if(this.painter.addHover){var n=this.painter.addHover(t,e);return this.refreshHover(),n}},removeHover:function(t){this.painter.removeHover&&(this.painter.removeHover(t),this.refreshHover())},clearHover:function(){this.painter.clearHover&&(this.painter.clearHover(),this.refreshHover())},refreshHover:function(){this._needsRefreshHover=!0},refreshHoverImmediately:function(){this._needsRefreshHover=!1,this.painter.refreshHover&&this.painter.refreshHover()},resize:function(t){t=t||{},this.painter.resize(t.width,t.height),this.handler.resize()},clearAnimation:function(){this.animation.clear()},getWidth:function(){return this.painter.getWidth()},getHeight:function(){return this.painter.getHeight()},pathToImage:function(t,e){return this.painter.pathToImage(t,e)},setCursorStyle:function(t){this.handler.setCursorStyle(t)},findHover:function(t,e){return this.handler.findHover(t,e)},on:function(t,e,n){this.handler.on(t,e,n)},off:function(t,e){this.handler.off(t,e)},trigger:function(t,e){this.handler.trigger(t,e)},clear:function(){this.storage.delRoot(),this.painter.clear()},dispose:function(){this.animation.stop(),this.clear(),this.storage.dispose(),this.painter.dispose(),this.handler.dispose(),this.animation=this.storage=this.painter=this.handler=null,jn(this.id)}};var lg=(Object.freeze||Object)({version:ag,init:Rn,dispose:Fn,getInstance:Vn,registerPainter:$n}),ug=v,cg=A,hg=S,fg="series\0",dg=["fontStyle","fontWeight","fontSize","fontFamily","rich","tag","color","textBorderColor","textBorderWidth","width","height","lineHeight","align","verticalAlign","baseline","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY","textShadowColor","textShadowBlur","textShadowOffsetX","textShadowOffsetY","backgroundColor","borderColor","borderWidth","borderRadius","padding"],pg=0,gg=".",vg="___EC__COMPONENT__CONTAINER___",mg=0,yg=function(t){for(var e=0;e<t.length;e++)t[e][1]||(t[e][1]=t[e][0]);return function(e,n,i){for(var r={},o=0;o<t.length;o++){var a=t[o][1];if(!(n&&f(n,a)>=0||i&&f(i,a)<0)){var s=e.getShallow(a);null!=s&&(r[t[o][0]]=s)}}return r}},_g=yg([["lineWidth","width"],["stroke","color"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),xg={getLineStyle:function(t){var e=_g(this,t);return e.lineDash=this.getLineDash(e.lineWidth),e},getLineDash:function(t){null==t&&(t=1);var e=this.get("type"),n=Math.max(t,2),i=4*t;return"solid"!==e&&null!=e&&("dashed"===e?[i,i]:[n,n])}},wg=yg([["fill","color"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["opacity"],["shadowColor"]]),bg={getAreaStyle:function(t,e){return wg(this,t,e)}},Sg=Math.pow,Mg=Math.sqrt,Ig=1e-8,Ag=1e-4,Tg=Mg(3),Cg=1/3,kg=W(),Dg=W(),Og=W(),Pg=Math.min,Lg=Math.max,Eg=Math.sin,Ng=Math.cos,Bg=2*Math.PI,zg=W(),Rg=W(),Fg=W(),Vg=[],$g=[],jg={M:1,L:2,C:3,Q:4,A:5,Z:6,R:7},Hg=[],Wg=[],Gg=[],Ug=[],Zg=Math.min,Xg=Math.max,Yg=Math.cos,qg=Math.sin,Kg=Math.sqrt,Jg=Math.abs,Qg="undefined"!=typeof Float32Array,tv=function(t){this._saveData=!t,this._saveData&&(this.data=[]),this._ctx=null};tv.prototype={constructor:tv,_xi:0,_yi:0,_x0:0,_y0:0,_ux:0,_uy:0,_len:0,_lineDash:null,_dashOffset:0,_dashIdx:0,_dashSum:0,setScale:function(t,e,n){n=n||0,this._ux=Jg(n/ip/t)||0,this._uy=Jg(n/ip/e)||0},getContext:function(){return this._ctx},beginPath:function(t){return this._ctx=t,t&&t.beginPath(),t&&(this.dpr=t.dpr),this._saveData&&(this._len=0),this._lineDash&&(this._lineDash=null,this._dashOffset=0),this},moveTo:function(t,e){return this.addData(jg.M,t,e),this._ctx&&this._ctx.moveTo(t,e),this._x0=t,this._y0=e,this._xi=t,this._yi=e,this},lineTo:function(t,e){var n=Jg(t-this._xi)>this._ux||Jg(e-this._yi)>this._uy||this._len<5;return this.addData(jg.L,t,e),this._ctx&&n&&(this._needsDash()?this._dashedLineTo(t,e):this._ctx.lineTo(t,e)),n&&(this._xi=t,this._yi=e),this},bezierCurveTo:function(t,e,n,i,r,o){return this.addData(jg.C,t,e,n,i,r,o),this._ctx&&(this._needsDash()?this._dashedBezierTo(t,e,n,i,r,o):this._ctx.bezierCurveTo(t,e,n,i,r,o)),this._xi=r,this._yi=o,this},quadraticCurveTo:function(t,e,n,i){return this.addData(jg.Q,t,e,n,i),this._ctx&&(this._needsDash()?this._dashedQuadraticTo(t,e,n,i):this._ctx.quadraticCurveTo(t,e,n,i)),this._xi=n,this._yi=i,this},arc:function(t,e,n,i,r,o){return this.addData(jg.A,t,e,n,n,i,r-i,0,o?0:1),this._ctx&&this._ctx.arc(t,e,n,i,r,o),this._xi=Yg(r)*n+t,this._yi=qg(r)*n+e,this},arcTo:function(t,e,n,i,r){return this._ctx&&this._ctx.arcTo(t,e,n,i,r),this},rect:function(t,e,n,i){return this._ctx&&this._ctx.rect(t,e,n,i),this.addData(jg.R,t,e,n,i),this},closePath:function(){this.addData(jg.Z);var t=this._ctx,e=this._x0,n=this._y0;return t&&(this._needsDash()&&this._dashedLineTo(e,n),t.closePath()),this._xi=e,this._yi=n,this},fill:function(t){t&&t.fill(),this.toStatic()},stroke:function(t){t&&t.stroke(),this.toStatic()},setLineDash:function(t){if(t instanceof Array){this._lineDash=t,this._dashIdx=0;for(var e=0,n=0;n<t.length;n++)e+=t[n];this._dashSum=e}return this},setLineDashOffset:function(t){return this._dashOffset=t,this},len:function(){return this._len},setData:function(t){var e=t.length;this.data&&this.data.length===e||!Qg||(this.data=new Float32Array(e));for(var n=0;e>n;n++)this.data[n]=t[n];this._len=e},appendPath:function(t){t instanceof Array||(t=[t]);for(var e=t.length,n=0,i=this._len,r=0;e>r;r++)n+=t[r].len();Qg&&this.data instanceof Float32Array&&(this.data=new Float32Array(i+n));for(r=0;e>r;r++)for(var o=t[r].data,a=0;a<o.length;a++)this.data[i++]=o[a];this._len=i},addData:function(t){if(this._saveData){var e=this.data;this._len+arguments.length>e.length&&(this._expandData(),e=this.data);for(var n=0;n<arguments.length;n++)e[this._len++]=arguments[n];this._prevCmd=t}},_expandData:function(){if(!(this.data instanceof Array)){for(var t=[],e=0;e<this._len;e++)t[e]=this.data[e];this.data=t}},_needsDash:function(){return this._lineDash},_dashedLineTo:function(t,e){var n,i,r=this._dashSum,o=this._dashOffset,a=this._lineDash,s=this._ctx,l=this._xi,u=this._yi,c=t-l,h=e-u,f=Kg(c*c+h*h),d=l,p=u,g=a.length;for(c/=f,h/=f,0>o&&(o=r+o),o%=r,d-=o*c,p-=o*h;c>0&&t>=d||0>c&&d>=t||0===c&&(h>0&&e>=p||0>h&&p>=e);)i=this._dashIdx,n=a[i],d+=c*n,p+=h*n,this._dashIdx=(i+1)%g,c>0&&l>d||0>c&&d>l||h>0&&u>p||0>h&&p>u||s[i%2?"moveTo":"lineTo"](c>=0?Zg(d,t):Xg(d,t),h>=0?Zg(p,e):Xg(p,e));c=d-t,h=p-e,this._dashOffset=-Kg(c*c+h*h)},_dashedBezierTo:function(t,e,n,i,r,o){var a,s,l,u,c,h=this._dashSum,f=this._dashOffset,d=this._lineDash,p=this._ctx,g=this._xi,v=this._yi,m=di,y=0,_=this._dashIdx,x=d.length,w=0;for(0>f&&(f=h+f),f%=h,a=0;1>a;a+=.1)s=m(g,t,n,r,a+.1)-m(g,t,n,r,a),l=m(v,e,i,o,a+.1)-m(v,e,i,o,a),y+=Kg(s*s+l*l);for(;x>_&&(w+=d[_],!(w>f));_++);for(a=(w-f)/y;1>=a;)u=m(g,t,n,r,a),c=m(v,e,i,o,a),_%2?p.moveTo(u,c):p.lineTo(u,c),a+=d[_]/y,_=(_+1)%x;_%2!==0&&p.lineTo(r,o),s=r-u,l=o-c,this._dashOffset=-Kg(s*s+l*l)},_dashedQuadraticTo:function(t,e,n,i){var r=n,o=i;n=(n+2*t)/3,i=(i+2*e)/3,t=(this._xi+2*t)/3,e=(this._yi+2*e)/3,this._dashedBezierTo(t,e,n,i,r,o)},toStatic:function(){var t=this.data;t instanceof Array&&(t.length=this._len,Qg&&(this.data=new Float32Array(t)))},getBoundingRect:function(){Hg[0]=Hg[1]=Gg[0]=Gg[1]=Number.MAX_VALUE,Wg[0]=Wg[1]=Ug[0]=Ug[1]=-Number.MAX_VALUE;for(var t=this.data,e=0,n=0,i=0,r=0,o=0;o<t.length;){var a=t[o++];switch(1===o&&(e=t[o],n=t[o+1],i=e,r=n),a){case jg.M:i=t[o++],r=t[o++],e=i,n=r,Gg[0]=i,Gg[1]=r,Ug[0]=i,Ug[1]=r;break;case jg.L:Ai(e,n,t[o],t[o+1],Gg,Ug),e=t[o++],n=t[o++];break;case jg.C:Ti(e,n,t[o++],t[o++],t[o++],t[o++],t[o],t[o+1],Gg,Ug),e=t[o++],n=t[o++];break;case jg.Q:Ci(e,n,t[o++],t[o++],t[o],t[o+1],Gg,Ug),e=t[o++],n=t[o++];break;case jg.A:var s=t[o++],l=t[o++],u=t[o++],c=t[o++],h=t[o++],f=t[o++]+h;o+=1;var d=1-t[o++];1===o&&(i=Yg(h)*u+s,r=qg(h)*c+l),ki(s,l,u,c,h,f,d,Gg,Ug),e=Yg(f)*u+s,n=qg(f)*c+l;break;case jg.R:i=e=t[o++],r=n=t[o++];var p=t[o++],g=t[o++];Ai(i,r,i+p,r+g,Gg,Ug);break;case jg.Z:e=i,n=r}ut(Hg,Hg,Gg),ct(Wg,Wg,Ug)}return 0===o&&(Hg[0]=Hg[1]=Wg[0]=Wg[1]=0),new Me(Hg[0],Hg[1],Wg[0]-Hg[0],Wg[1]-Hg[1])},rebuildPath:function(t){for(var e,n,i,r,o,a,s=this.data,l=this._ux,u=this._uy,c=this._len,h=0;c>h;){var f=s[h++];switch(1===h&&(i=s[h],r=s[h+1],e=i,n=r),f){case jg.M:e=i=s[h++],n=r=s[h++],t.moveTo(i,r);break;case jg.L:o=s[h++],a=s[h++],(Jg(o-i)>l||Jg(a-r)>u||h===c-1)&&(t.lineTo(o,a),i=o,r=a);break;case jg.C:t.bezierCurveTo(s[h++],s[h++],s[h++],s[h++],s[h++],s[h++]),i=s[h-2],r=s[h-1];break;case jg.Q:t.quadraticCurveTo(s[h++],s[h++],s[h++],s[h++]),i=s[h-2],r=s[h-1];break;case jg.A:var d=s[h++],p=s[h++],g=s[h++],v=s[h++],m=s[h++],y=s[h++],_=s[h++],x=s[h++],w=g>v?g:v,b=g>v?1:g/v,S=g>v?v/g:1,M=Math.abs(g-v)>.001,I=m+y;M?(t.translate(d,p),t.rotate(_),t.scale(b,S),t.arc(0,0,w,m,I,1-x),t.scale(1/b,1/S),t.rotate(-_),t.translate(-d,-p)):t.arc(d,p,w,m,I,1-x),1===h&&(e=Yg(m)*g+d,n=qg(m)*v+p),i=Yg(I)*g+d,r=qg(I)*v+p;break;case jg.R:e=i=s[h],n=r=s[h+1],t.rect(s[h++],s[h++],s[h++],s[h++]);break;case jg.Z:t.closePath(),i=e,r=n}}}},tv.CMD=jg;var ev=2*Math.PI,nv=2*Math.PI,iv=tv.CMD,rv=2*Math.PI,ov=1e-4,av=[-1,-1,-1],sv=[-1,-1],lv=Mp.prototype.getCanvasPattern,uv=Math.abs,cv=new tv(!0);Wi.prototype={constructor:Wi,type:"path",__dirtyPath:!0,strokeContainThreshold:5,segmentIgnoreThreshold:0,subPixelOptimize:!1,brush:function(t,e){var n,i=this.style,r=this.path||cv,o=i.hasStroke(),a=i.hasFill(),s=i.fill,l=i.stroke,u=a&&!!s.colorStops,c=o&&!!l.colorStops,h=a&&!!s.image,f=o&&!!l.image;(i.bind(t,this,e),this.setTransform(t),this.__dirty)&&(u&&(n=n||this.getBoundingRect(),this._fillGradient=i.getGradient(t,s,n)),c&&(n=n||this.getBoundingRect(),this._strokeGradient=i.getGradient(t,l,n)));u?t.fillStyle=this._fillGradient:h&&(t.fillStyle=lv.call(s,t)),c?t.strokeStyle=this._strokeGradient:f&&(t.strokeStyle=lv.call(l,t));var d=i.lineDash,p=i.lineDashOffset,g=!!t.setLineDash,v=this.getGlobalScale();if(r.setScale(v[0],v[1],this.segmentIgnoreThreshold),this.__dirtyPath||d&&!g&&o?(r.beginPath(t),d&&!g&&(r.setLineDash(d),r.setLineDashOffset(p)),this.buildPath(r,this.shape,!1),this.path&&(this.__dirtyPath=!1)):(t.beginPath(),this.path.rebuildPath(t)),a)if(null!=i.fillOpacity){var m=t.globalAlpha;t.globalAlpha=i.fillOpacity*i.opacity,r.fill(t),t.globalAlpha=m}else r.fill(t);if(d&&g&&(t.setLineDash(d),t.lineDashOffset=p),o)if(null!=i.strokeOpacity){m=t.globalAlpha;t.globalAlpha=i.strokeOpacity*i.opacity,r.stroke(t),t.globalAlpha=m}else r.stroke(t);d&&g&&t.setLineDash([]),null!=i.text&&(this.restoreTransform(t),this.drawRectText(t,this.getBoundingRect()))},buildPath:function(){},createPathProxy:function(){this.path=new tv},getBoundingRect:function(){var t=this._rect,e=this.style,n=!t;if(n){var i=this.path;i||(i=this.path=new tv),this.__dirtyPath&&(i.beginPath(),this.buildPath(i,this.shape,!1)),t=i.getBoundingRect()}if(this._rect=t,e.hasStroke()){var r=this._rectWithStroke||(this._rectWithStroke=t.clone());if(this.__dirty||n){r.copy(t);var o=e.lineWidth,a=e.strokeNoScale?this.getLineScale():1;e.hasFill()||(o=Math.max(o,this.strokeContainThreshold||4)),a>1e-10&&(r.width+=o/a,r.height+=o/a,r.x-=o/a/2,r.y-=o/a/2)}return r}return t},contain:function(t,e){var n=this.transformCoordToLocal(t,e),i=this.getBoundingRect(),r=this.style;if(t=n[0],e=n[1],i.contain(t,e)){var o=this.path.data;if(r.hasStroke()){var a=r.lineWidth,s=r.strokeNoScale?this.getLineScale():1;if(s>1e-10&&(r.hasFill()||(a=Math.max(a,this.strokeContainThreshold)),Hi(o,a/s,t,e)))return!0}if(r.hasFill())return ji(o,t,e)}return!1},dirty:function(t){null==t&&(t=!0),t&&(this.__dirtyPath=t,this._rect=null),this.__dirty=this.__dirtyText=!0,this.__zr&&this.__zr.refresh(),this.__clipTarget&&this.__clipTarget.dirty()},animateShape:function(t){return this.animate("shape",t)},attrKV:function(t,e){"shape"===t?(this.setShape(e),this.__dirtyPath=!0,this._rect=null):In.prototype.attrKV.call(this,t,e)},setShape:function(t,e){var n=this.shape;if(n){if(A(t))for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);else n[t]=e;this.dirty(!0)}return this},getLineScale:function(){var t=this.transform;return t&&uv(t[0]-1)>1e-10&&uv(t[3]-1)>1e-10?Math.sqrt(uv(t[0]*t[3]-t[2]*t[1])):1}},Wi.extend=function(t){var e=function(e){Wi.call(this,e),t.style&&this.style.extendFrom(t.style,!1);var n=t.shape;if(n){this.shape=this.shape||{};var i=this.shape;for(var r in n)!i.hasOwnProperty(r)&&n.hasOwnProperty(r)&&(i[r]=n[r])}t.init&&t.init.call(this,e)};for(var n in d(e,Wi),t)"style"!==n&&"shape"!==n&&(e.prototype[n]=t[n]);return e},d(Wi,In);var hv=tv.CMD,fv=[[],[],[]],dv=Math.sqrt,pv=Math.atan2,gv=function(t,e){var n,i,r,o,a,s=t.data,l=hv.M,u=hv.C,c=hv.L,h=hv.R,f=hv.A,d=hv.Q;for(r=0,o=0;r<s.length;){switch(n=s[r++],o=r,i=0,n){case l:i=1;break;case c:i=1;break;case u:i=3;break;case d:i=2;break;case f:var p=e[4],g=e[5],v=dv(e[0]*e[0]+e[1]*e[1]),m=dv(e[2]*e[2]+e[3]*e[3]),y=pv(-e[1]/m,e[0]/v);s[r]*=v,s[r++]+=p,s[r]*=m,s[r++]+=g,s[r++]*=v,s[r++]*=m,s[r++]+=y,s[r++]+=y,r+=2,o=r;break;case h:_[0]=s[r++],_[1]=s[r++],lt(_,_,e),s[o++]=_[0],s[o++]=_[1],_[0]+=s[r++],_[1]+=s[r++],lt(_,_,e),s[o++]=_[0],s[o++]=_[1]}for(a=0;i>a;a++){var _=fv[a];_[0]=s[r++],_[1]=s[r++],lt(_,_,e),s[o++]=_[0],s[o++]=_[1]}}},vv=Math.sqrt,mv=Math.sin,yv=Math.cos,_v=Math.PI,xv=function(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])},wv=function(t,e){return(t[0]*e[0]+t[1]*e[1])/(xv(t)*xv(e))},bv=function(t,e){return(t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(wv(t,e))},Sv=/([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi,Mv=/-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g,Iv=function(t){In.call(this,t)};Iv.prototype={constructor:Iv,type:"text",brush:function(t,e){var n=this.style;this.__dirty&&sn(n,!0),n.fill=n.stroke=n.shadowBlur=n.shadowColor=n.shadowOffsetX=n.shadowOffsetY=null;var i=n.text;return null!=i&&(i+=""),Mn(i,n)?(this.setTransform(t),un(this,t,i,n,null,e),void this.restoreTransform(t)):void(t.__attrCachedBy=mp.NONE)},getBoundingRect:function(){var t=this.style;if(this.__dirty&&sn(t,!0),!this._rect){var e=t.text;null!=e?e+="":e="";var n=He(t.text+"",t.font,t.textAlign,t.textVerticalAlign,t.textPadding,t.textLineHeight,t.rich);if(n.x+=t.x||0,n.y+=t.y||0,xn(t.textStroke,t.textStrokeWidth)){var i=t.textStrokeWidth;n.x-=i/2,n.y-=i/2,n.width+=i,n.height+=i}this._rect=n}return this._rect}},d(Iv,In);var Av=Wi.extend({type:"circle",shape:{cx:0,cy:0,r:0},buildPath:function(t,e,n){n&&t.moveTo(e.cx+e.r,e.cy),t.arc(e.cx,e.cy,e.r,0,2*Math.PI,!0)}}),Tv=[["shadowBlur",0],["shadowColor","#000"],["shadowOffsetX",0],["shadowOffsetY",0]],Cv=function(t){return Jf.browser.ie&&Jf.browser.version>=11?function(){var e,n=this.__clipPaths,i=this.style;if(n)for(var r=0;r<n.length;r++){var o=n[r],a=o&&o.shape,s=o&&o.type;if(a&&("sector"===s&&a.startAngle===a.endAngle||"rect"===s&&(!a.width||!a.height))){for(var l=0;l<Tv.length;l++)Tv[l][2]=i[Tv[l][0]],i[Tv[l][0]]=Tv[l][1];e=!0;break}}if(t.apply(this,arguments),e)for(l=0;l<Tv.length;l++)i[Tv[l][0]]=Tv[l][2]}:t},kv=Wi.extend({type:"sector",shape:{cx:0,cy:0,r0:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},brush:Cv(Wi.prototype.brush),buildPath:function(t,e){var n=e.cx,i=e.cy,r=Math.max(e.r0||0,0),o=Math.max(e.r,0),a=e.startAngle,s=e.endAngle,l=e.clockwise,u=Math.cos(a),c=Math.sin(a);t.moveTo(u*r+n,c*r+i),t.lineTo(u*o+n,c*o+i),t.arc(n,i,o,a,s,!l),t.lineTo(Math.cos(s)*r+n,Math.sin(s)*r+i),0!==r&&t.arc(n,i,r,s,a,l),t.closePath()}}),Dv=Wi.extend({type:"ring",shape:{cx:0,cy:0,r:0,r0:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=2*Math.PI;t.moveTo(n+e.r,i),t.arc(n,i,e.r,0,r,!1),t.moveTo(n+e.r0,i),t.arc(n,i,e.r0,0,r,!0)}}),Ov=function(t,e){for(var n=t.length,i=[],r=0,o=1;n>o;o++)r+=rt(t[o-1],t[o]);var a=r/2;a=n>a?n:a;for(o=0;a>o;o++){var s,l,u,c=o/(a-1)*(e?n:n-1),h=Math.floor(c),f=c-h,d=t[h%n];e?(s=t[(h-1+n)%n],l=t[(h+1)%n],u=t[(h+2)%n]):(s=t[0===h?h:h-1],l=t[h>n-2?n-1:h+1],u=t[h>n-3?n-1:h+2]);var p=f*f,g=f*p;i.push([Ki(s[0],d[0],l[0],u[0],f,p,g),Ki(s[1],d[1],l[1],u[1],f,p,g)])}return i},Pv=function(t,e,n,i){var r,o,a,s,l=[],u=[],c=[],h=[];if(i){a=[1/0,1/0],s=[-1/0,-1/0];for(var f=0,d=t.length;d>f;f++)ut(a,a,t[f]),ct(s,s,t[f]);ut(a,a,i[0]),ct(s,s,i[1])}for(f=0,d=t.length;d>f;f++){var p=t[f];if(n)r=t[f?f-1:d-1],o=t[(f+1)%d];else{if(0===f||f===d-1){l.push(U(t[f]));continue}r=t[f-1],o=t[f+1]}q(u,o,r),nt(u,u,e);var g=rt(p,r),v=rt(p,o),m=g+v;0!==m&&(g/=m,v/=m),nt(c,u,-g),nt(h,u,v);var y=X([],p,c),_=X([],p,h);i&&(ct(y,y,a),ut(y,y,s),ct(_,_,a),ut(_,_,s)),l.push(y),l.push(_)}return n&&l.push(l.shift()),l},Lv=Wi.extend({type:"polygon",shape:{points:null,smooth:!1,smoothConstraint:null},buildPath:function(t,e){Ji(t,e,!0)}}),Ev=Wi.extend({type:"polyline",shape:{points:null,smooth:!1,smoothConstraint:null},style:{stroke:"#000",fill:null},buildPath:function(t,e){Ji(t,e,!1)}}),Nv=Math.round,Bv={},zv=Wi.extend({type:"rect",shape:{r:0,x:0,y:0,width:0,height:0},buildPath:function(t,e){var n,i,r,o;this.subPixelOptimize?(tr(Bv,e,this.style),n=Bv.x,i=Bv.y,r=Bv.width,o=Bv.height,Bv.r=e.r,e=Bv):(n=e.x,i=e.y,r=e.width,o=e.height),e.r?an(t,e):t.rect(n,i,r,o),t.closePath()}}),Rv={},Fv=Wi.extend({type:"line",shape:{x1:0,y1:0,x2:0,y2:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n,i,r,o;this.subPixelOptimize?(Qi(Rv,e,this.style),n=Rv.x1,i=Rv.y1,r=Rv.x2,o=Rv.y2):(n=e.x1,i=e.y1,r=e.x2,o=e.y2);var a=e.percent;0!==a&&(t.moveTo(n,i),1>a&&(r=n*(1-a)+r*a,o=i*(1-a)+o*a),t.lineTo(r,o))},pointAt:function(t){var e=this.shape;return[e.x1*(1-t)+e.x2*t,e.y1*(1-t)+e.y2*t]}}),Vv=[],$v=Wi.extend({type:"bezier-curve",shape:{x1:0,y1:0,x2:0,y2:0,cpx1:0,cpy1:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.x1,i=e.y1,r=e.x2,o=e.y2,a=e.cpx1,s=e.cpy1,l=e.cpx2,u=e.cpy2,c=e.percent;0!==c&&(t.moveTo(n,i),null==l||null==u?(1>c&&(Si(n,a,r,c,Vv),a=Vv[1],r=Vv[2],Si(i,s,o,c,Vv),s=Vv[1],o=Vv[2]),t.quadraticCurveTo(a,s,r,o)):(1>c&&(mi(n,a,l,r,c,Vv),a=Vv[1],l=Vv[2],r=Vv[3],mi(i,s,u,o,c,Vv),s=Vv[1],u=Vv[2],o=Vv[3]),t.bezierCurveTo(a,s,l,u,r,o)))},pointAt:function(t){return nr(this.shape,t,!1)},tangentAt:function(t){var e=nr(this.shape,t,!0);return it(e,e)}}),jv=Wi.extend({type:"arc",shape:{cx:0,cy:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.cx,i=e.cy,r=Math.max(e.r,0),o=e.startAngle,a=e.endAngle,s=e.clockwise,l=Math.cos(o),u=Math.sin(o);t.moveTo(l*r+n,u*r+i),t.arc(n,i,r,o,a,!s)}}),Hv=Wi.extend({type:"compound",shape:{paths:null},_updatePathDirty:function(){for(var t=this.__dirtyPath,e=this.shape.paths,n=0;n<e.length;n++)t=t||e[n].__dirtyPath;this.__dirtyPath=t,this.__dirty=this.__dirty||t},beforeBrush:function(){this._updatePathDirty();for(var t=this.shape.paths||[],e=this.getGlobalScale(),n=0;n<t.length;n++)t[n].path||t[n].createPathProxy(),t[n].path.setScale(e[0],e[1],t[n].segmentIgnoreThreshold)},buildPath:function(t,e){for(var n=e.paths||[],i=0;i<n.length;i++)n[i].buildPath(t,n[i].shape,!0)},afterBrush:function(){for(var t=this.shape.paths||[],e=0;e<t.length;e++)t[e].__dirtyPath=!1},getBoundingRect:function(){return this._updatePathDirty(),Wi.prototype.getBoundingRect.call(this)}}),Wv=function(t){this.colorStops=t||[]};Wv.prototype={constructor:Wv,addColorStop:function(t,e){this.colorStops.push({offset:t,color:e})}};var Gv=function(t,e,n,i,r,o){this.x=null==t?0:t,this.y=null==e?0:e,this.x2=null==n?1:n,this.y2=null==i?0:i,this.type="linear",this.global=o||!1,Wv.call(this,r)};Gv.prototype={constructor:Gv},d(Gv,Wv);var Uv=function(t,e,n,i,r){this.x=null==t?.5:t,this.y=null==e?.5:e,this.r=null==n?.5:n,this.type="radial",this.global=r||!1,Wv.call(this,i)};Uv.prototype={constructor:Uv},d(Uv,Wv),ir.prototype.incremental=!0,ir.prototype.clearDisplaybles=function(){this._displayables=[],this._temporaryDisplayables=[],this._cursor=0,this.dirty(),this.notClear=!1},ir.prototype.addDisplayable=function(t,e){e?this._temporaryDisplayables.push(t):this._displayables.push(t),this.dirty()},ir.prototype.addDisplayables=function(t,e){e=e||!1;for(var n=0;n<t.length;n++)this.addDisplayable(t[n],e)},ir.prototype.eachPendingDisplayable=function(t){for(var e=this._cursor;e<this._displayables.length;e++)t&&t(this._displayables[e]);for(e=0;e<this._temporaryDisplayables.length;e++)t&&t(this._temporaryDisplayables[e])},ir.prototype.update=function(){this.updateTransform();for(var t=this._cursor;t<this._displayables.length;t++){var e=this._displayables[t];e.parent=this,e.update(),e.parent=null}for(t=0;t<this._temporaryDisplayables.length;t++){e=this._temporaryDisplayables[t];e.parent=this,e.update(),e.parent=null}},ir.prototype.brush=function(t){for(var e=this._cursor;e<this._displayables.length;e++){var n=this._displayables[e];n.beforeBrush&&n.beforeBrush(t),n.brush(t,e===this._cursor?null:this._displayables[e-1]),n.afterBrush&&n.afterBrush(t)}this._cursor=e;for(e=0;e<this._temporaryDisplayables.length;e++){n=this._temporaryDisplayables[e];n.beforeBrush&&n.beforeBrush(t),n.brush(t,0===e?null:this._temporaryDisplayables[e-1]),n.afterBrush&&n.afterBrush(t)}this._temporaryDisplayables=[],this.notClear=!0};var Zv=[];ir.prototype.getBoundingRect=function(){if(!this._rect){for(var t=new Me(1/0,1/0,-1/0,-1/0),e=0;e<this._displayables.length;e++){var n=this._displayables[e],i=n.getBoundingRect().clone();n.needLocalTransform()&&i.applyTransform(n.getLocalTransform(Zv)),t.union(i)}this._rect=t}return this._rect},ir.prototype.contain=function(t,e){var n=this.transformCoordToLocal(t,e),i=this.getBoundingRect();if(i.contain(n[0],n[1]))for(var r=0;r<this._displayables.length;r++){var o=this._displayables[r];if(o.contain(t,e))return!0}return!1},d(ir,In);var Xv=Math.max,Yv=Math.min,qv={},Kv=1,Jv={color:"textFill",textBorderColor:"textStroke",textBorderWidth:"textStrokeWidth"},Qv="emphasis",tm="normal",em=1,nm={},im=qi,rm=er,om=$(),am=0,sm=(Object.freeze||Object)({Z2_EMPHASIS_LIFT:Kv,CACHED_LABEL_STYLE_PROPERTIES:Jv,extendShape:rr,extendPath:or,makePath:ar,makeImage:sr,mergePath:im,resizePath:ur,subPixelOptimizeLine:cr,subPixelOptimizeRect:hr,subPixelOptimize:rm,setElementHoverStyle:_r,setHoverStyle:Ir,setAsHighDownDispatcher:Ar,isHighDownDispatcher:Tr,getHighlightDigit:Cr,setLabelStyle:kr,modifyLabelStyle:Dr,setTextStyle:Or,setText:Pr,getFont:Fr,updateProps:$r,initProps:jr,getTransform:Hr,applyTransform:Wr,transformDirection:Gr,groupTransition:Ur,clipPointsByRect:Zr,clipRectByRect:Xr,createIcon:Yr,Group:hp,Image:An,Text:Iv,Circle:Av,Sector:kv,Ring:Dv,Polygon:Lv,Polyline:Ev,Rect:zv,Line:Fv,BezierCurve:$v,Arc:jv,IncrementalDisplayable:ir,CompoundPath:Hv,LinearGradient:Gv,RadialGradient:Uv,BoundingRect:Me}),lm=["textStyle","color"],um={getTextColor:function(t){var e=this.ecModel;return this.getShallow("color")||(!t&&e?e.get(lm):null)},getFont:function(){return Fr({fontStyle:this.getShallow("fontStyle"),fontWeight:this.getShallow("fontWeight"),fontSize:this.getShallow("fontSize"),fontFamily:this.getShallow("fontFamily")},this.ecModel)},getTextRect:function(t){return He(t,this.getFont(),this.getShallow("align"),this.getShallow("verticalAlign")||this.getShallow("baseline"),this.getShallow("padding"),this.getShallow("lineHeight"),this.getShallow("rich"),this.getShallow("truncateText"))}},cm=yg([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"],["textPosition"],["textAlign"]]),hm={getItemStyle:function(t,e){var n=cm(this,t,e),i=this.getBorderLineDash();return i&&(n.lineDash=i),n},getBorderLineDash:function(){var t=this.get("borderType");return"solid"===t||null==t?null:"dashed"===t?[5,5]:[1,1]}},fm=p,dm=Jn();qr.prototype={constructor:qr,init:null,mergeOption:function(t){s(this.option,t,!0)},get:function(t,e){return null==t?this.option:Kr(this.option,this.parsePath(t),!e&&Jr(this,t))},getShallow:function(t,e){var n=this.option,i=null==n?n:n[t],r=!e&&Jr(this,t);return null==i&&r&&(i=r.getShallow(t)),i},getModel:function(t,e){var n,i=null==t?this.option:Kr(this.option,t=this.parsePath(t));return e=e||(n=Jr(this,t))&&n.getModel(t),new qr(i,e,this.ecModel)},isEmpty:function(){return null==this.option},restoreData:function(){},clone:function(){var t=this.constructor;return new t(a(this.option))},setReadOnly:function(){},parsePath:function(t){return"string"==typeof t&&(t=t.split(".")),t},customizeGetParent:function(t){dm(this).getParent=t},isAnimationEnabled:function(){if(!Jf.node){if(null!=this.option.animation)return!!this.option.animation;if(this.parentModel)return this.parentModel.isAnimationEnabled()}}},ai(qr),si(qr),fm(qr,xg),fm(qr,bg),fm(qr,um),fm(qr,hm);var pm=0,gm=1e-4,vm=9007199254740991,mm=/^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,ym=(Object.freeze||Object)({linearMap:io,parsePercent:ro,round:oo,asc:ao,getPrecision:so,getPrecisionSafe:lo,getPixelPrecision:uo,getPercentWithPrecision:co,MAX_SAFE_INTEGER:vm,remRadian:ho,isRadianAroundZero:fo,parseDate:po,quantity:go,nice:mo,quantile:yo,reformIntervals:_o,isNumeric:xo}),_m=N,xm=/([&<>"'])/g,wm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},bm=["a","b","c","d","e","f","g"],Sm=function(t,e){return"{"+t+(null==e?"":e)+"}"},Mm=Ye,Im=(Object.freeze||Object)({addCommas:wo,toCamelCase:bo,normalizeCssArray:_m,encodeHTML:So,formatTpl:Mo,formatTplSimple:Io,getTooltipMarker:Ao,formatTime:Co,capitalFirst:ko,truncateText:Mm,getTextBoundingRect:Do,getTextRect:Oo}),Am=v,Tm=["left","right","top","bottom","width","height"],Cm=[["width","left","right"],["height","top","bottom"]],km=Po,Dm=(b(Po,"vertical"),b(Po,"horizontal"),{getBoxLayoutParams:function(){return{left:this.get("left"),top:this.get("top"),right:this.get("right"),bottom:this.get("bottom"),width:this.get("width"),height:this.get("height")}}}),Om=Jn(),Pm=qr.extend({type:"component",id:"",name:"",mainType:"",subType:"",componentIndex:0,defaultOption:null,ecModel:null,dependentModels:[],uid:null,layoutMode:null,$constructor:function(t,e,n,i){qr.call(this,t,e,n,i),this.uid=Qr("ec_cpt_model")},init:function(t,e,n){this.mergeDefaultAndTheme(t,n)},mergeDefaultAndTheme:function(t,e){var n=this.layoutMode,i=n?No(t):{},r=e.getTheme();s(t,r.get(this.mainType)),s(t,this.getDefaultOption()),n&&Eo(t,i,n)},mergeOption:function(t){s(this.option,t,!0);var e=this.layoutMode;e&&Eo(this.option,t,e)},optionUpdated:function(){},getDefaultOption:function(){var t=Om(this);if(!t.defaultOption){for(var e=[],n=this.constructor;n;){var i=n.prototype.defaultOption;i&&e.push(i),n=n.superClass}for(var r={},o=e.length-1;o>=0;o--)r=s(r,e[o],!0);t.defaultOption=r}return t.defaultOption},getReferringComponents:function(t){return this.ecModel.queryComponents({mainType:t,index:this.get(t+"Index",!0),id:this.get(t+"Id",!0)})}});ci(Pm,{registerWhenExtend:!0}),to(Pm),eo(Pm,zo),p(Pm,Dm);var Lm="";"undefined"!=typeof navigator&&(Lm=navigator.platform||"");var Em={color:["#c23531","#2f4554","#61a0a8","#d48265","#91c7ae","#749f83","#ca8622","#bda29a","#6e7074","#546570","#c4ccd3"],gradientColor:["#f6efa6","#d88273","#bf444c"],textStyle:{fontFamily:Lm.match(/^Win/)?"Microsoft YaHei":"sans-serif",fontSize:12,fontStyle:"normal",fontWeight:"normal"},blendMode:null,animation:"auto",animationDuration:1e3,animationDurationUpdate:300,animationEasing:"exponentialOut",animationEasingUpdate:"cubicOut",animationThreshold:2e3,progressiveThreshold:3e3,progressive:400,hoverLayerThreshold:3e3,useUTC:!1},Nm=Jn(),Bm={clearColorPalette:function(){Nm(this).colorIdx=0,Nm(this).colorNameMap={}},getColorFromPalette:function(t,e,n){e=e||this;var i=Nm(e),r=i.colorIdx||0,o=i.colorNameMap=i.colorNameMap||{};if(o.hasOwnProperty(t))return o[t];var a=Hn(this.get("color",!0)),s=this.get("colorLayer",!0),l=null!=n&&s?Ro(s,n):a;if(l=l||a,l&&l.length){var u=l[r];return t&&(o[t]=u),i.colorIdx=(r+1)%l.length,u}}},zm={cartesian2d:function(t,e,n,i){var r=t.getReferringComponents("xAxis")[0],o=t.getReferringComponents("yAxis")[0];e.coordSysDims=["x","y"],n.set("x",r),n.set("y",o),Vo(r)&&(i.set("x",r),e.firstCategoryDimIndex=0),Vo(o)&&(i.set("y",o),e.firstCategoryDimIndex=1)},singleAxis:function(t,e,n,i){var r=t.getReferringComponents("singleAxis")[0];e.coordSysDims=["single"],n.set("single",r),Vo(r)&&(i.set("single",r),e.firstCategoryDimIndex=0)},polar:function(t,e,n,i){var r=t.getReferringComponents("polar")[0],o=r.findAxisModel("radiusAxis"),a=r.findAxisModel("angleAxis");e.coordSysDims=["radius","angle"],n.set("radius",o),n.set("angle",a),Vo(o)&&(i.set("radius",o),e.firstCategoryDimIndex=0),Vo(a)&&(i.set("angle",a),e.firstCategoryDimIndex=1)},geo:function(t,e){e.coordSysDims=["lng","lat"]},parallel:function(t,e,n,i){var r=t.ecModel,o=r.getComponent("parallel",t.get("parallelIndex")),a=e.coordSysDims=o.dimensions.slice();v(o.parallelAxisIndex,function(t,o){var s=r.getComponent("parallelAxis",t),l=a[o];n.set(l,s),Vo(s)&&null==e.firstCategoryDimIndex&&(i.set(l,s),e.firstCategoryDimIndex=o)})}},Rm="original",Fm="arrayRows",Vm="objectRows",$m="keyedColumns",jm="unknown",Hm="typedArray",Wm="column",Gm="row";$o.seriesDataToSource=function(t){return new $o({data:t,sourceFormat:C(t)?Hm:Rm,fromDataset:!1})},si($o);var Um=Jn(),Zm="\0_ec_inner",Xm=qr.extend({init:function(t,e,n,i){n=n||{},this.option=null,this._theme=new qr(n),this._optionManager=i},setOption:function(t,e){B(!(Zm in t),"please use chart.getOption()"),this._optionManager.setOption(t,e),this.resetOption(null)},resetOption:function(t){var e=!1,n=this._optionManager;if(!t||"recreate"===t){var i=n.mountOption("recreate"===t);this.option&&"recreate"!==t?(this.restoreData(),this.mergeOption(i)):na.call(this,i),e=!0}if(("timeline"===t||"media"===t)&&this.restoreData(),!t||"recreate"===t||"timeline"===t){var r=n.getTimelineOption(this);r&&(this.mergeOption(r),e=!0)}if(!t||"recreate"===t||"media"===t){var o=n.getMediaOption(this,this._api);o.length&&v(o,function(t){this.mergeOption(t,e=!0)},this)}return e},mergeOption:function(t){function e(e,r){var o=Hn(t[e]),a=Zn(i.get(e),o);Xn(a),v(a,function(t){var n=t.option;A(n)&&(t.keyInfo.mainType=e,t.keyInfo.subType=ra(e,n,t.exist))});var s=ia(i,r);n[e]=[],i.set(e,[]),v(a,function(t,r){var o=t.exist,a=t.option;if(B(A(a)||o,"Empty component definition"),a){var l=Pm.getClass(e,t.keyInfo.subType,!0);if(o&&o instanceof l)o.name=t.keyInfo.name,o.mergeOption(a,this),o.optionUpdated(a,!1);else{var c=u({dependentModels:s,componentIndex:r},t.keyInfo);o=new l(a,this,this,c),u(o,c),o.init(a,this,this,c),o.optionUpdated(null,!0)}}else o.mergeOption({},this),o.optionUpdated({},!1);i.get(e)[r]=o,n[e][r]=o.option},this),"series"===e&&oa(this,i.get("series"))}var n=this.option,i=this._componentsMap,r=[];Wo(this),v(t,function(t,e){null!=t&&(Pm.hasClass(e)?e&&r.push(e):n[e]=null==n[e]?a(t):s(n[e],t,!0))}),Pm.topologicalTravel(r,Pm.getAllClassMainTypes(),e,this),this._seriesIndicesMap=$(this._seriesIndices=this._seriesIndices||[])},getOption:function(){var t=a(this.option);return v(t,function(e,n){if(Pm.hasClass(n)){e=Hn(e);for(var i=e.length-1;i>=0;i--)qn(e[i])&&e.splice(i,1);t[n]=e}}),delete t[Zm],t},getTheme:function(){return this._theme},getComponent:function(t,e){var n=this._componentsMap.get(t);return n?n[e||0]:void 0},queryComponents:function(t){var e=t.mainType;if(!e)return[];var n,i=t.index,r=t.id,o=t.name,a=this._componentsMap.get(e);if(!a||!a.length)return[];if(null!=i)S(i)||(i=[i]),n=_(m(i,function(t){return a[t]}),function(t){return!!t});else if(null!=r){var s=S(r);n=_(a,function(t){return s&&f(r,t.id)>=0||!s&&t.id===r})}else if(null!=o){var l=S(o);n=_(a,function(t){return l&&f(o,t.name)>=0||!l&&t.name===o})}else n=a.slice();return aa(n,t)},findComponents:function(t){function e(t){var e=r+"Index",n=r+"Id",i=r+"Name";return!t||null==t[e]&&null==t[n]&&null==t[i]?null:{mainType:r,index:t[e],id:t[n],name:t[i]}}function n(e){return t.filter?_(e,t.filter):e}var i=t.query,r=t.mainType,o=e(i),a=o?this.queryComponents(o):this._componentsMap.get(r);return n(aa(a,t))},eachComponent:function(t,e,n){var i=this._componentsMap;if("function"==typeof t)n=e,e=t,i.each(function(t,i){v(t,function(t,r){e.call(n,i,t,r)})});else if(I(t))v(i.get(t),e,n);else if(A(t)){var r=this.findComponents(t);v(r,e,n)}},getSeriesByName:function(t){var e=this._componentsMap.get("series");return _(e,function(e){return e.name===t})},getSeriesByIndex:function(t){return this._componentsMap.get("series")[t]},getSeriesByType:function(t){var e=this._componentsMap.get("series");return _(e,function(e){return e.subType===t})},getSeries:function(){return this._componentsMap.get("series").slice()},getSeriesCount:function(){return this._componentsMap.get("series").length},eachSeries:function(t,e){v(this._seriesIndices,function(n){var i=this._componentsMap.get("series")[n];t.call(e,i,n)},this)},eachRawSeries:function(t,e){v(this._componentsMap.get("series"),t,e)},eachSeriesByType:function(t,e,n){v(this._seriesIndices,function(i){var r=this._componentsMap.get("series")[i];r.subType===t&&e.call(n,r,i)},this)},eachRawSeriesByType:function(t,e,n){return v(this.getSeriesByType(t),e,n)},isSeriesFiltered:function(t){return null==this._seriesIndicesMap.get(t.componentIndex)},getCurrentSeriesIndices:function(){return(this._seriesIndices||[]).slice()},filterSeries:function(t,e){var n=_(this._componentsMap.get("series"),t,e);oa(this,n)},restoreData:function(t){var e=this._componentsMap;oa(this,e.get("series"));var n=[];e.each(function(t,e){n.push(e)}),Pm.topologicalTravel(n,Pm.getAllClassMainTypes(),function(n){v(e.get(n),function(e){("series"!==n||!ta(e,t))&&e.restoreData()})})}});p(Xm,Bm);var Ym=["getDom","getZr","getWidth","getHeight","getDevicePixelRatio","dispatchAction","isDisposed","on","off","getDataURL","getConnectedDataURL","getModel","getOption","getViewOfComponentModel","getViewOfSeriesModel"],qm={};la.prototype={constructor:la,create:function(t,e){var n=[];v(qm,function(i){var r=i.create(t,e);n=n.concat(r||[])}),this._coordinateSystems=n},update:function(t,e){v(this._coordinateSystems,function(n){n.update&&n.update(t,e)})},getCoordinateSystems:function(){return this._coordinateSystems.slice()}},la.register=function(t,e){qm[t]=e},la.get=function(t){return qm[t]};var Km=v,Jm=a,Qm=m,ty=s,ey=/^(min|max)?(.+)$/;ua.prototype={constructor:ua,setOption:function(t,e){t&&v(Hn(t.series),function(t){t&&t.data&&C(t.data)&&R(t.data)}),t=Jm(t);var n=this._optionBackup,i=ca.call(this,t,e,!n);this._newBaseOption=i.baseOption,n?(pa(n.baseOption,i.baseOption),i.timelineOptions.length&&(n.timelineOptions=i.timelineOptions),i.mediaList.length&&(n.mediaList=i.mediaList),i.mediaDefault&&(n.mediaDefault=i.mediaDefault)):this._optionBackup=i},mountOption:function(t){var e=this._optionBackup;return this._timelineOptions=Qm(e.timelineOptions,Jm),this._mediaList=Qm(e.mediaList,Jm),this._mediaDefault=Jm(e.mediaDefault),this._currentMediaIndices=[],Jm(t?e.baseOption:this._newBaseOption)},getTimelineOption:function(t){var e,n=this._timelineOptions;if(n.length){var i=t.getComponent("timeline");i&&(e=Jm(n[i.getCurrentIndex()],!0))}return e},getMediaOption:function(){var t=this._api.getWidth(),e=this._api.getHeight(),n=this._mediaList,i=this._mediaDefault,r=[],o=[];if(!n.length&&!i)return o;for(var a=0,s=n.length;s>a;a++)ha(n[a].query,t,e)&&r.push(a);return!r.length&&i&&(r=[-1]),r.length&&!da(r,this._currentMediaIndices)&&(o=Qm(r,function(t){return Jm(-1===t?i.option:n[t].option)})),this._currentMediaIndices=r,o}};var ny=v,iy=A,ry=["areaStyle","lineStyle","nodeStyle","linkStyle","chordStyle","label","labelLine"],oy=function(t,e){ny(wa(t.series),function(t){iy(t)&&xa(t)});var n=["xAxis","yAxis","radiusAxis","angleAxis","singleAxis","parallelAxis","radar"];e&&n.push("valueAxis","categoryAxis","logAxis","timeAxis"),ny(n,function(e){ny(wa(t[e]),function(t){t&&(ya(t,"axisLabel"),ya(t.axisPointer,"label"))})}),ny(wa(t.parallel),function(t){var e=t&&t.parallelAxisDefault;ya(e,"axisLabel"),ya(e&&e.axisPointer,"label")}),ny(wa(t.calendar),function(t){va(t,"itemStyle"),ya(t,"dayLabel"),ya(t,"monthLabel"),ya(t,"yearLabel")}),ny(wa(t.radar),function(t){ya(t,"name")}),ny(wa(t.geo),function(t){iy(t)&&(_a(t),ny(wa(t.regions),function(t){_a(t)}))}),ny(wa(t.timeline),function(t){_a(t),va(t,"label"),va(t,"itemStyle"),va(t,"controlStyle",!0);var e=t.data;S(e)&&v(e,function(t){A(t)&&(va(t,"label"),va(t,"itemStyle"))})}),ny(wa(t.toolbox),function(t){va(t,"iconStyle"),ny(t.feature,function(t){va(t,"iconStyle")})}),ya(ba(t.axisPointer),"label"),ya(ba(t.tooltip).axisPointer,"label")},ay=[["x","left"],["y","top"],["x2","right"],["y2","bottom"]],sy=["grid","geo","parallel","legend","toolbox","title","visualMap","dataZoom","timeline"],ly=function(t,e){oy(t,e),t.series=Hn(t.series),v(t.series,function(t){if(A(t)){var e=t.type;if(("pie"===e||"gauge"===e)&&null!=t.clockWise&&(t.clockwise=t.clockWise),"gauge"===e){var n=Sa(t,"pointer.color");null!=n&&Ma(t,"itemStyle.color",n)}Ia(t)}}),t.dataRange&&(t.visualMap=t.dataRange),v(sy,function(e){var n=t[e];n&&(S(n)||(n=[n]),v(n,function(t){Ia(t)}))})},uy=function(t){var e=$();t.eachSeries(function(t){var n=t.get("stack");if(n){var i=e.get(n)||e.set(n,[]),r=t.getData(),o={stackResultDimension:r.getCalculationInfo("stackResultDimension"),stackedOverDimension:r.getCalculationInfo("stackedOverDimension"),stackedDimension:r.getCalculationInfo("stackedDimension"),stackedByDimension:r.getCalculationInfo("stackedByDimension"),isStackedByIndex:r.getCalculationInfo("isStackedByIndex"),data:r,seriesModel:t};if(!o.stackedDimension||!o.isStackedByIndex&&!o.stackedByDimension)return;i.length&&r.setCalculationInfo("stackedOnSeries",i[i.length-1].seriesModel),i.push(o)}}),e.each(Aa)},cy=Ta.prototype;cy.pure=!1,cy.persistent=!0,cy.getSource=function(){return this._source};var hy={arrayRows_column:{pure:!0,count:function(){return Math.max(0,this._data.length-this._source.startIndex)},getItem:function(t){return this._data[t+this._source.startIndex]},appendData:Da},arrayRows_row:{pure:!0,count:function(){var t=this._data[0];return t?Math.max(0,t.length-this._source.startIndex):0},getItem:function(t){t+=this._source.startIndex;for(var e=[],n=this._data,i=0;i<n.length;i++){var r=n[i];e.push(r?r[t]:null)}return e},appendData:function(){throw new Error('Do not support appendData when set seriesLayoutBy: "row".')}},objectRows:{pure:!0,count:Ca,getItem:ka,appendData:Da},keyedColumns:{pure:!0,count:function(){var t=this._source.dimensionsDefine[0].name,e=this._data[t];return e?e.length:0},getItem:function(t){for(var e=[],n=this._source.dimensionsDefine,i=0;i<n.length;i++){var r=this._data[n[i].name];e.push(r?r[t]:null)}return e},appendData:function(t){var e=this._data;v(t,function(t,n){for(var i=e[n]||(e[n]=[]),r=0;r<(t||[]).length;r++)i.push(t[r])})}},original:{count:Ca,getItem:ka,appendData:Da},typedArray:{persistent:!1,pure:!0,count:function(){return this._data?this._data.length/this._dimSize:0},getItem:function(t,e){t-=this._offset,e=e||[];for(var n=this._dimSize*t,i=0;i<this._dimSize;i++)e[i]=this._data[n+i];return e},appendData:function(t){this._data=t},clean:function(){this._offset+=this.count(),this._data=null}}},fy={arrayRows:Oa,objectRows:function(t,e,n,i){return null!=n?t[i]:t},keyedColumns:Oa,original:function(t,e,n){var i=Gn(t);return null!=n&&i instanceof Array?i[n]:i},typedArray:Oa},dy={arrayRows:Pa,objectRows:function(t,e){return La(t[e],this._dimensionInfos[e])},keyedColumns:Pa,original:function(t,e,n,i){var r=t&&(null==t.value?t:t.value);return!this._rawData.pure&&Un(t)&&(this.hasItemOption=!0),La(r instanceof Array?r[i]:r,this._dimensionInfos[e])},typedArray:function(t,e,n,i){return t[i]}},py=/\{@(.+?)\}/g,gy={getDataParams:function(t,e){var n=this.getData(e),i=this.getRawValue(t,e),r=n.getRawIndex(t),o=n.getName(t),a=n.getRawDataItem(t),s=n.getItemVisual(t,"color"),l=this.ecModel.getComponent("tooltip"),u=l&&l.get("renderMode"),c=ii(u),h=this.mainType,f="series"===h,d=n.userOutput;return{componentType:h,componentSubType:this.subType,componentIndex:this.componentIndex,seriesType:f?this.subType:null,seriesIndex:this.seriesIndex,seriesId:f?this.id:null,seriesName:f?this.name:null,name:o,dataIndex:r,data:a,dataType:e,value:i,color:s,dimensionNames:d?d.dimensionNames:null,encode:d?d.encode:null,marker:Ao({color:s,renderMode:c}),$vars:["seriesName","name","value"]}},getFormattedLabel:function(t,e,n,i,r){e=e||"normal";var o=this.getData(n),a=o.getItemModel(t),s=this.getDataParams(t,n);null!=i&&s.value instanceof Array&&(s.value=s.value[i]);var l=a.get("normal"===e?[r||"label","formatter"]:[e,r||"label","formatter"]);if("function"==typeof l)return s.status=e,s.dimensionIndex=i,l(s);if("string"==typeof l){var u=Mo(l,s);return u.replace(py,function(e,n){var i=n.length;return"["===n.charAt(0)&&"]"===n.charAt(i-1)&&(n=+n.slice(1,i-1)),Ea(o,t,n)})}},getRawValue:function(t,e){return Ea(this.getData(e),t)},formatTooltip:function(){}},vy=za.prototype;vy.perform=function(t){function e(t){return!(t>=1)&&(t=1),t}var n,i=this._upstream,r=t&&t.skip;if(this._dirty&&i){var o=this.context;o.data=o.outputData=i.context.outputData}this.__pipeline&&(this.__pipeline.currentTask=this),this._plan&&!r&&(n=this._plan(this.context));var a,s=e(this._modBy),l=this._modDataCount||0,u=e(t&&t.modBy),c=t&&t.modDataCount||0;(s!==u||l!==c)&&(n="reset"),(this._dirty||"reset"===n)&&(this._dirty=!1,a=Fa(this,r)),this._modBy=u,this._modDataCount=c;var h=t&&t.step;if(this._dueEnd=i?i._outputDueEnd:this._count?this._count(this.context):1/0,this._progress){var f=this._dueIndex,d=Math.min(null!=h?this._dueIndex+h:1/0,this._dueEnd);if(!r&&(a||d>f)){var p=this._progress;if(S(p))for(var g=0;g<p.length;g++)Ra(this,p[g],f,d,u,c);else Ra(this,p,f,d,u,c)}this._dueIndex=d;var v=null!=this._settedOutputEnd?this._settedOutputEnd:d;this._outputDueEnd=v}else this._dueIndex=this._outputDueEnd=null!=this._settedOutputEnd?this._settedOutputEnd:this._dueEnd;return this.unfinished()};var my=function(){function t(){return n>i?i++:null}function e(){var t=i%a*r+Math.ceil(i/a),e=i>=n?null:o>t?t:i;return i++,e}var n,i,r,o,a,s={reset:function(l,u,c,h){i=l,n=u,r=c,o=h,a=Math.ceil(o/r),s.next=r>1&&o>0?e:t}};return s}();vy.dirty=function(){this._dirty=!0,this._onDirty&&this._onDirty(this.context)},vy.unfinished=function(){return this._progress&&this._dueIndex<this._dueEnd},vy.pipe=function(t){(this._downstream!==t||this._dirty)&&(this._downstream=t,t._upstream=this,t.dirty())},vy.dispose=function(){this._disposed||(this._upstream&&(this._upstream._downstream=null),this._downstream&&(this._downstream._upstream=null),this._dirty=!1,this._disposed=!0)},vy.getUpstream=function(){return this._upstream},vy.getDownstream=function(){return this._downstream},vy.setOutputEnd=function(t){this._outputDueEnd=this._settedOutputEnd=t};var yy=Jn(),_y=Pm.extend({type:"series.__base__",seriesIndex:0,coordinateSystem:null,defaultOption:null,legendDataProvider:null,visualColorAccessPath:"itemStyle.color",layoutMode:null,init:function(t,e,n){this.seriesIndex=this.componentIndex,this.dataTask=Ba({count:ja,reset:Ha}),this.dataTask.context={model:this},this.mergeDefaultAndTheme(t,n),Go(this);var i=this.getInitialData(t,n);Ga(i,this),this.dataTask.context.data=i,yy(this).dataBeforeProcessed=i,Va(this)},mergeDefaultAndTheme:function(t,e){var n=this.layoutMode,i=n?No(t):{},r=this.subType;Pm.hasClass(r)&&(r+="Series"),s(t,e.getTheme().get(this.subType)),s(t,this.getDefaultOption()),Wn(t,"label",["show"]),this.fillDataTextStyle(t.data),n&&Eo(t,i,n)},mergeOption:function(t,e){t=s(this.option,t,!0),this.fillDataTextStyle(t.data);var n=this.layoutMode;n&&Eo(this.option,t,n),Go(this);var i=this.getInitialData(t,e);Ga(i,this),this.dataTask.dirty(),this.dataTask.context.data=i,yy(this).dataBeforeProcessed=i,Va(this)},fillDataTextStyle:function(t){if(t&&!C(t))for(var e=["show"],n=0;n<t.length;n++)t[n]&&t[n].label&&Wn(t[n],"label",e)},getInitialData:function(){},appendData:function(t){var e=this.getRawData();e.appendData(t.data)},getData:function(t){var e=Za(this);if(e){var n=e.context.data;return null==t?n:n.getLinkedData(t)}return yy(this).data},setData:function(t){var e=Za(this);if(e){var n=e.context;n.data!==t&&e.modifyOutputEnd&&e.setOutputEnd(t.count()),n.outputData=t,e!==this.dataTask&&(n.data=t)}yy(this).data=t},getSource:function(){return Ho(this)},getRawData:function(){return yy(this).dataBeforeProcessed},getBaseAxis:function(){var t=this.coordinateSystem;return t&&t.getBaseAxis&&t.getBaseAxis()},formatTooltip:function(t,e,n,i){function r(n){function r(t,n){var r=h.getDimensionInfo(n);if(r&&!1!==r.otherDims.tooltip){var f=r.type,d="sub"+a.seriesIndex+"at"+c,p=Ao({color:m,type:"subItem",renderMode:i,markerId:d}),g="string"==typeof p?p:p.content,v=(o?g+So(r.displayName||"-")+": ":"")+So("ordinal"===f?t+"":"time"===f?e?"":Co("yyyy/MM/dd hh:mm:ss",t):wo(t));v&&s.push(v),l&&(u[d]=m,++c)}}var o=y(n,function(t,e,n){var i=h.getDimensionInfo(n);return t|(i&&!1!==i.tooltip&&null!=i.displayName)},0),s=[];f.length?v(f,function(e){r(Ea(h,t,e),e)}):v(n,r);var d=o?l?"\n":"<br/>":"",p=d+s.join(d||", ");return{renderMode:i,content:p,style:u}}function o(t){return{renderMode:i,content:So(wo(t)),style:u}}var a=this;i=i||"html";var s="html"===i?"<br/>":"\n",l="richText"===i,u={},c=0,h=this.getData(),f=h.mapDimension("defaultedTooltip",!0),d=f.length,p=this.getRawValue(t),g=S(p),m=h.getItemVisual(t,"color");A(m)&&m.colorStops&&(m=(m.colorStops[0]||{}).color),m=m||"transparent";var _=d>1||g&&!d?r(p):o(d?Ea(h,t,f[0]):g?p[0]:p),x=_.content,w=a.seriesIndex+"at"+c,b=Ao({color:m,type:"item",renderMode:i,markerId:w});u[w]=m,++c;var M=h.getName(t),I=this.name;Yn(this)||(I=""),I=I?So(I)+(e?": ":s):"";var T="string"==typeof b?b:b.content,C=e?T+I+x:I+T+(M?So(M)+": "+x:x);return{html:C,markers:u}},isAnimationEnabled:function(){if(Jf.node)return!1;var t=this.getShallow("animation");return t&&this.getData().count()>this.getShallow("animationThreshold")&&(t=!1),t},restoreData:function(){this.dataTask.dirty()},getColorFromPalette:function(t,e,n){var i=this.ecModel,r=Bm.getColorFromPalette.call(this,t,e,n);return r||(r=i.getColorFromPalette(t,e,n)),r},coordDimToDataDim:function(t){return this.getRawData().mapDimension(t,!0)},getProgressive:function(){return this.get("progressive")},getProgressiveThreshold:function(){return this.get("progressiveThreshold")},getAxisTooltipData:null,getTooltipPosition:null,pipeTask:null,preventIncremental:null,pipelineContext:null});p(_y,gy),p(_y,Bm);var xy=function(){this.group=new hp,this.uid=Qr("viewComponent")};xy.prototype={constructor:xy,init:function(){},render:function(){},dispose:function(){},filterForExposedEvent:null};var wy=xy.prototype;wy.updateView=wy.updateLayout=wy.updateVisual=function(){},ai(xy),ci(xy,{registerWhenExtend:!0});var by=function(){var t=Jn();return function(e){var n=t(e),i=e.pipelineContext,r=n.large,o=n.progressiveRender,a=n.large=i.large,s=n.progressiveRender=i.progressiveRender;return!!(r^a||o^s)&&"reset"}},Sy=Jn(),My=by();Xa.prototype={type:"chart",init:function(){},render:function(){},highlight:function(t,e,n,i){qa(t.getData(),i,"emphasis")},downplay:function(t,e,n,i){qa(t.getData(),i,"normal")},remove:function(){this.group.removeAll()},dispose:function(){},incrementalPrepareRender:null,incrementalRender:null,updateTransform:null,filterForExposedEvent:null};var Iy=Xa.prototype;Iy.updateView=Iy.updateLayout=Iy.updateVisual=function(t,e,n,i){this.render(t,e,n,i)},ai(Xa,["dispose"]),ci(Xa,{registerWhenExtend:!0}),Xa.markUpdateMethod=function(t,e){Sy(t).updateMethod=e};var Ay={incrementalPrepareRender:{progress:function(t,e){e.view.incrementalRender(t,e.model,e.ecModel,e.api,e.payload)}},render:{forceFirstProgress:!0,progress:function(t,e){e.view.render(e.model,e.ecModel,e.api,e.payload)}}},Ty="\0__throttleOriginMethod",Cy="\0__throttleRate",ky="\0__throttleType",Dy={createOnAllSeries:!0,performRawSeries:!0,reset:function(t,e){var n=t.getData(),i=(t.visualColorAccessPath||"itemStyle.color").split("."),r=t.get(i)||t.getColorFromPalette(t.name,null,e.getSeriesCount());if(n.setVisual("color",r),!e.isSeriesFiltered(t)){"function"!=typeof r||r instanceof Wv||n.each(function(e){n.setItemVisual(e,"color",r(t.getDataParams(e)))});var o=function(t,e){var n=t.getItemModel(e),r=n.get(i,!0);null!=r&&t.setItemVisual(e,"color",r)};return{dataEach:n.hasItemOption?o:null}}}},Oy={toolbox:{brush:{title:{rect:"矩形选择",polygon:"圈选",lineX:"横向选择",lineY:"纵向选择",keep:"保持选择",clear:"清除选择"}},dataView:{title:"数据视图",lang:["数据视图","关闭","刷新"]},dataZoom:{title:{zoom:"区域缩放",back:"区域缩放还原"}},magicType:{title:{line:"切换为折线图",bar:"切换为柱状图",stack:"切换为堆叠",tiled:"切换为平铺"}},restore:{title:"还原"},saveAsImage:{title:"保存为图片",lang:["右键另存为图片"]}},series:{typeNames:{pie:"饼图",bar:"柱状图",line:"折线图",scatter:"散点图",effectScatter:"涟漪散点图",radar:"雷达图",tree:"树图",treemap:"矩形树图",boxplot:"箱型图",candlestick:"K线图",k:"K线图",heatmap:"热力图",map:"地图",parallel:"平行坐标图",lines:"线图",graph:"关系图",sankey:"桑基图",funnel:"漏斗图",gauge:"仪表盘图",pictorialBar:"象形柱图",themeRiver:"主题河流图",sunburst:"旭日图"}},aria:{general:{withTitle:"这是一个关于“{title}”的图表。",withoutTitle:"这是一个图表，"},series:{single:{prefix:"",withName:"图表类型是{seriesType}，表示{seriesName}。",withoutName:"图表类型是{seriesType}。"},multiple:{prefix:"它由{seriesCount}个图表系列组成。",withName:"第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",withoutName:"第{seriesId}个系列是一个{seriesType}，",separator:{middle:"；",end:"。"}}},data:{allData:"其数据是——",partialData:"其中，前{displayCnt}项是——",withName:"{name}的数据是{value}",withoutName:"{value}",separator:{middle:"，",end:""}}}},Py=function(t,e){function i(t,e){if("string"!=typeof t)return t;var n=t;return v(e,function(t,e){n=n.replace(new RegExp("\\{\\s*"+e+"\\s*\\}","g"),t)}),n}function r(t){var e=s.get(t);if(null==e){for(var n=t.split("."),i=Oy.aria,r=0;r<n.length;++r)i=i[n[r]];return i}return e}function o(){var t=e.getModel("title").option;return t&&t.length&&(t=t[0]),t&&t.text}function a(t){return Oy.series.typeNames[t]||"自定义图"}var s=e.getModel("aria");if(s.get("show")){if(s.get("description"))return void t.setAttribute("aria-label",s.get("description"));var l=0;e.eachSeries(function(){++l},this);var u,c=s.get("data.maxCount")||10,h=s.get("series.maxCount")||10,f=Math.min(l,h);if(!(1>l)){var d=o();u=d?i(r("general.withTitle"),{title:d}):r("general.withoutTitle");var p=[],g=l>1?"series.multiple.prefix":"series.single.prefix";u+=i(r(g),{seriesCount:l}),e.eachSeries(function(t,e){if(f>e){var o,s=t.get("name"),u="series."+(l>1?"multiple":"single")+".";o=r(s?u+"withName":u+"withoutName"),o=i(o,{seriesId:t.seriesIndex,seriesName:t.get("name"),seriesType:a(t.subType)});var h=t.getData();n.data=h,o+=h.count()>c?i(r("data.partialData"),{displayCnt:c}):r("data.allData");for(var d=[],g=0;g<h.count();g++)if(c>g){var v=h.getName(g),m=Ea(h,g);d.push(i(r(v?"data.withName":"data.withoutName"),{name:v,value:m}))}o+=d.join(r("data.separator.middle"))+r("data.separator.end"),p.push(o)}}),u+=p.join(r("series.multiple.separator.middle"))+r("series.multiple.separator.end"),t.setAttribute("aria-label",u)}}},Ly=Math.PI,Ey=function(t,e){e=e||{},c(e,{text:"loading",color:"#c23531",textColor:"#000",maskColor:"rgba(255, 255, 255, 0.8)",zlevel:0});var n=new zv({style:{fill:e.maskColor},zlevel:e.zlevel,z:1e4}),i=new jv({shape:{startAngle:-Ly/2,endAngle:-Ly/2+.1,r:10},style:{stroke:e.color,lineCap:"round",lineWidth:5},zlevel:e.zlevel,z:10001}),r=new zv({style:{fill:"none",text:e.text,textPosition:"right",textDistance:10,textFill:e.textColor},zlevel:e.zlevel,z:10001});i.animateShape(!0).when(1e3,{endAngle:3*Ly/2}).start("circularInOut"),i.animateShape(!0).when(1e3,{startAngle:3*Ly/2}).delay(300).start("circularInOut");var o=new hp;return o.add(i),o.add(r),o.add(n),o.resize=function(){var e=t.getWidth()/2,o=t.getHeight()/2;i.setShape({cx:e,cy:o});var a=i.shape.r;r.setShape({x:e-a,y:o-a,width:2*a,height:2*a}),n.setShape({x:0,y:0,width:t.getWidth(),height:t.getHeight()})},o.resize(),o},Ny=ns.prototype;Ny.restoreData=function(t,e){t.restoreData(e),this._stageTaskMap.each(function(t){var e=t.overallTask;e&&e.dirty()})},Ny.getPerformArgs=function(t,e){if(t.__pipeline){var n=this._pipelineMap.get(t.__pipeline.id),i=n.context,r=!e&&n.progressiveEnabled&&(!i||i.progressiveRender)&&t.__idxInPipeline>n.blockIndex,o=r?n.step:null,a=i&&i.modDataCount,s=null!=a?Math.ceil(a/o):null;return{step:o,modBy:s,modDataCount:a}}},Ny.getPipeline=function(t){return this._pipelineMap.get(t)},Ny.updateStreamModes=function(t,e){var n=this._pipelineMap.get(t.uid),i=t.getData(),r=i.count(),o=n.progressiveEnabled&&e.incrementalPrepareRender&&r>=n.threshold,a=t.get("large")&&r>=t.get("largeThreshold"),s="mod"===t.get("progressiveChunkMode")?r:null;t.pipelineContext=n.context={progressiveRender:o,modDataCount:s,large:a}},Ny.restorePipelines=function(t){var e=this,n=e._pipelineMap=$();t.eachSeries(function(t){var i=t.getProgressive(),r=t.uid;n.set(r,{id:r,head:null,tail:null,threshold:t.getProgressiveThreshold(),progressiveEnabled:i&&!(t.preventIncremental&&t.preventIncremental()),blockIndex:-1,step:Math.round(i||700),count:0}),ps(e,t,t.dataTask)})},Ny.prepareStageTasks=function(){var t=this._stageTaskMap,e=this.ecInstance.getModel(),n=this.api;v(this._allHandlers,function(i){var r=t.get(i.uid)||t.set(i.uid,[]);i.reset&&rs(this,i,r,e,n),i.overallReset&&os(this,i,r,e,n)},this)},Ny.prepareView=function(t,e,n,i){var r=t.renderTask,o=r.context;o.model=e,o.ecModel=n,o.api=i,r.__block=!t.incrementalPrepareRender,ps(this,e,r)},Ny.performDataProcessorTasks=function(t,e){is(this,this._dataProcessorHandlers,t,e,{block:!0})},Ny.performVisualTasks=function(t,e,n){is(this,this._visualHandlers,t,e,n)},Ny.performSeriesTasks=function(t){var e;t.eachSeries(function(t){e|=t.dataTask.perform()}),this.unfinished|=e},Ny.plan=function(){this._pipelineMap.each(function(t){var e=t.tail;do{if(e.__block){t.blockIndex=e.__idxInPipeline;break}e=e.getUpstream()}while(e)})};var By=Ny.updatePayload=function(t,e){"remain"!==e&&(t.context.payload=e)},zy=fs(0);ns.wrapStageHandler=function(t,e){return M(t)&&(t={overallReset:t,seriesType:gs(t)}),t.uid=Qr("stageHandler"),e&&(t.visualType=e),t};var Ry,Fy={},Vy={};vs(Fy,Xm),vs(Vy,sa),Fy.eachSeriesByType=Fy.eachRawSeriesByType=function(t){Ry=t},Fy.eachComponent=function(t){"series"===t.mainType&&t.subType&&(Ry=t.subType)};var $y=["#37A2DA","#32C5E9","#67E0E3","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#E062AE","#E690D1","#e7bcf3","#9d96f5","#8378EA","#96BFFF"],jy={color:$y,colorLayer:[["#37A2DA","#ffd85c","#fd7b5f"],["#37A2DA","#67E0E3","#FFDB5C","#ff9f7f","#E062AE","#9d96f5"],["#37A2DA","#32C5E9","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#e7bcf3","#8378EA","#96BFFF"],$y]},Hy="#eee",Wy=function(){return{axisLine:{lineStyle:{color:Hy}},axisTick:{lineStyle:{color:Hy}},axisLabel:{textStyle:{color:Hy}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:Hy}}}},Gy=["#dd6b66","#759aa0","#e69d87","#8dc1a9","#ea7e53","#eedd78","#73a373","#73b9bc","#7289ab","#91ca8c","#f49f42"],Uy={color:Gy,backgroundColor:"#333",tooltip:{axisPointer:{lineStyle:{color:Hy},crossStyle:{color:Hy}}},legend:{textStyle:{color:Hy}},textStyle:{color:Hy},title:{textStyle:{color:Hy}},toolbox:{iconStyle:{normal:{borderColor:Hy}}},dataZoom:{textStyle:{color:Hy}},visualMap:{textStyle:{color:Hy}},timeline:{lineStyle:{color:Hy},itemStyle:{normal:{color:Gy[1]}},label:{normal:{textStyle:{color:Hy}}},controlStyle:{normal:{color:Hy,borderColor:Hy}}},timeAxis:Wy(),logAxis:Wy(),valueAxis:Wy(),categoryAxis:Wy(),line:{symbol:"circle"},graph:{color:Gy},gauge:{title:{textStyle:{color:Hy}}},candlestick:{itemStyle:{normal:{color:"#FD1050",color0:"#0CF49B",borderColor:"#FD1050",borderColor0:"#0CF49B"}}}};Uy.categoryAxis.splitLine.show=!1,Pm.extend({type:"dataset",defaultOption:{seriesLayoutBy:Wm,sourceHeader:null,dimensions:null,source:null},optionUpdated:function(){jo(this)}}),xy.extend({type:"dataset"});var Zy=Wi.extend({type:"ellipse",shape:{cx:0,cy:0,rx:0,ry:0},buildPath:function(t,e){var n=.5522848,i=e.cx,r=e.cy,o=e.rx,a=e.ry,s=o*n,l=a*n;t.moveTo(i-o,r),t.bezierCurveTo(i-o,r-l,i-s,r-a,i,r-a),t.bezierCurveTo(i+s,r-a,i+o,r-l,i+o,r),t.bezierCurveTo(i+o,r+l,i+s,r+a,i,r+a),t.bezierCurveTo(i-s,r+a,i-o,r+l,i-o,r),t.closePath()}}),Xy=/[\s,]+/;ys.prototype.parse=function(t,e){e=e||{};var n=ms(t);if(!n)throw new Error("Illegal svg");var i=new hp;this._root=i;var r,o,a=n.getAttribute("viewBox")||"",s=parseFloat(n.getAttribute("width")||e.width),l=parseFloat(n.getAttribute("height")||e.height);isNaN(s)&&(s=null),isNaN(l)&&(l=null),bs(n,i,null,!0);for(var u=n.firstChild;u;)this._parseNode(u,i),u=u.nextSibling;if(a){var c=z(a).split(Xy);c.length>=4&&(r={x:parseFloat(c[0]||0),y:parseFloat(c[1]||0),width:parseFloat(c[2]),height:parseFloat(c[3])})}if(r&&null!=s&&null!=l&&(o=As(r,s,l),!e.ignoreViewBox)){var h=i;i=new hp,i.add(h),h.scale=o.scale.slice(),h.position=o.position.slice()}return e.ignoreRootClip||null==s||null==l||i.setClipPath(new zv({shape:{x:0,y:0,width:s,height:l}})),{root:i,width:s,height:l,viewBoxRect:r,viewBoxTransform:o}},ys.prototype._parseNode=function(t,e){var n,i=t.nodeName.toLowerCase();if("defs"===i?this._isDefine=!0:"text"===i&&(this._isText=!0),this._isDefine){var r=qy[i];if(r){var o=r.call(this,t),a=t.getAttribute("id");a&&(this._defs[a]=o)}}else{r=Yy[i];r&&(n=r.call(this,t,e),e.add(n))}for(var s=t.firstChild;s;)1===s.nodeType&&this._parseNode(s,n),3===s.nodeType&&this._isText&&this._parseText(s,n),s=s.nextSibling;"defs"===i?this._isDefine=!1:"text"===i&&(this._isText=!1)},ys.prototype._parseText=function(t,e){if(1===t.nodeType){var n=t.getAttribute("dx")||0,i=t.getAttribute("dy")||0;this._textX+=parseFloat(n),this._textY+=parseFloat(i)}var r=new Iv({style:{text:t.textContent,transformText:!0},position:[this._textX||0,this._textY||0]});xs(e,r),bs(t,r,this._defs);var o=r.style.fontSize;o&&9>o&&(r.style.fontSize=9,r.scale=r.scale||[1,1],r.scale[0]*=o/9,r.scale[1]*=o/9);var a=r.getBoundingRect();return this._textX+=a.width,e.add(r),r};var Yy={g:function(t,e){var n=new hp;return xs(e,n),bs(t,n,this._defs),n},rect:function(t,e){var n=new zv;return xs(e,n),bs(t,n,this._defs),n.setShape({x:parseFloat(t.getAttribute("x")||0),y:parseFloat(t.getAttribute("y")||0),width:parseFloat(t.getAttribute("width")||0),height:parseFloat(t.getAttribute("height")||0)}),n},circle:function(t,e){var n=new Av;return xs(e,n),bs(t,n,this._defs),n.setShape({cx:parseFloat(t.getAttribute("cx")||0),cy:parseFloat(t.getAttribute("cy")||0),r:parseFloat(t.getAttribute("r")||0)}),n},line:function(t,e){var n=new Fv;return xs(e,n),bs(t,n,this._defs),n.setShape({x1:parseFloat(t.getAttribute("x1")||0),y1:parseFloat(t.getAttribute("y1")||0),x2:parseFloat(t.getAttribute("x2")||0),y2:parseFloat(t.getAttribute("y2")||0)}),n},ellipse:function(t,e){var n=new Zy;return xs(e,n),bs(t,n,this._defs),n.setShape({cx:parseFloat(t.getAttribute("cx")||0),cy:parseFloat(t.getAttribute("cy")||0),rx:parseFloat(t.getAttribute("rx")||0),ry:parseFloat(t.getAttribute("ry")||0)}),n},polygon:function(t,e){var n=t.getAttribute("points");n&&(n=ws(n));var i=new Lv({shape:{points:n||[]}});return xs(e,i),bs(t,i,this._defs),i},polyline:function(t,e){var n=new Wi;xs(e,n),bs(t,n,this._defs);var i=t.getAttribute("points");i&&(i=ws(i));var r=new Ev({shape:{points:i||[]}});return r},image:function(t,e){var n=new An;return xs(e,n),bs(t,n,this._defs),n.setStyle({image:t.getAttribute("xlink:href"),x:t.getAttribute("x"),y:t.getAttribute("y"),width:t.getAttribute("width"),height:t.getAttribute("height")}),n},text:function(t,e){var n=t.getAttribute("x")||0,i=t.getAttribute("y")||0,r=t.getAttribute("dx")||0,o=t.getAttribute("dy")||0;this._textX=parseFloat(n)+parseFloat(r),this._textY=parseFloat(i)+parseFloat(o);var a=new hp;return xs(e,a),bs(t,a,this._defs),a},tspan:function(t,e){var n=t.getAttribute("x"),i=t.getAttribute("y");null!=n&&(this._textX=parseFloat(n)),null!=i&&(this._textY=parseFloat(i));var r=t.getAttribute("dx")||0,o=t.getAttribute("dy")||0,a=new hp;return xs(e,a),bs(t,a,this._defs),this._textX+=r,this._textY+=o,a},path:function(t,e){var n=t.getAttribute("d")||"",i=Xi(n);return xs(e,i),bs(t,i,this._defs),i}},qy={lineargradient:function(t){var e=parseInt(t.getAttribute("x1")||0,10),n=parseInt(t.getAttribute("y1")||0,10),i=parseInt(t.getAttribute("x2")||10,10),r=parseInt(t.getAttribute("y2")||0,10),o=new Gv(e,n,i,r);return _s(t,o),o},radialgradient:function(){}},Ky={fill:"fill",stroke:"stroke","stroke-width":"lineWidth",opacity:"opacity","fill-opacity":"fillOpacity","stroke-opacity":"strokeOpacity","stroke-dasharray":"lineDash","stroke-dashoffset":"lineDashOffset","stroke-linecap":"lineCap","stroke-linejoin":"lineJoin","stroke-miterlimit":"miterLimit","font-family":"fontFamily","font-size":"fontSize","font-style":"fontStyle","font-weight":"fontWeight","text-align":"textAlign","alignment-baseline":"textBaseline"},Jy=/url\(\s*#(.*?)\)/,Qy=/(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.e,]*)\)/g,t_=/([^\s:;]+)\s*:\s*([^:;]+)/g,e_=$(),n_={registerMap:function(t,e,n){var i;return S(e)?i=e:e.svg?i=[{type:"svg",source:e.svg,specialAreas:e.specialAreas}]:(e.geoJson&&!e.features&&(n=e.specialAreas,e=e.geoJson),i=[{type:"geoJSON",source:e,specialAreas:n}]),v(i,function(t){var e=t.type;"geoJson"===e&&(e=t.type="geoJSON");var n=i_[e];n(t)}),e_.set(t,i)},retrieveMap:function(t){return e_.get(t)}},i_={geoJSON:function(t){var e=t.source;t.geoJSON=I(e)?"undefined"!=typeof JSON&&JSON.parse?JSON.parse(e):new Function("return ("+e+");")():e},svg:function(t){t.svgXML=ms(t.source)}},r_=B,o_=v,a_=M,s_=A,l_=Pm.parseClassType,u_="4.3.0",c_={zrender:"4.1.0"},h_=1,f_=1e3,d_=5e3,p_=1e3,g_=1100,v_=2e3,m_=3e3,y_=3500,__=4e3,x_=5e3,w_={PROCESSOR:{FILTER:f_,STATISTIC:d_},VISUAL:{LAYOUT:p_,PROGRESSIVE_LAYOUT:g_,GLOBAL:v_,CHART:m_,POST_CHART_LAYOUT:y_,COMPONENT:__,BRUSH:x_}},b_="__flagInMainProcess",S_="__optionUpdated",M_=/^[a-zA-Z0-9_]+$/;Cs.prototype.on=Ts("on"),Cs.prototype.off=Ts("off"),Cs.prototype.one=Ts("one"),p(Cs,xd);var I_=ks.prototype;I_._onframe=function(){if(!this._disposed){var t=this._scheduler;if(this[S_]){var e=this[S_].silent;this[b_]=!0,Os(this),A_.update.call(this),this[b_]=!1,this[S_]=!1,Ns.call(this,e),Bs.call(this,e)}else if(t.unfinished){var n=h_,i=this._model,r=this._api;t.unfinished=!1;do{var o=+new Date;t.performSeriesTasks(i),t.performDataProcessorTasks(i),Ls(this,i),t.performVisualTasks(i),js(this,this._model,r,"remain"),n-=+new Date-o}while(n>0&&t.unfinished);t.unfinished||this._zr.flush()}}},I_.getDom=function(){return this._dom},I_.getZr=function(){return this._zr},I_.setOption=function(t,e,n){var i;if(s_(e)&&(n=e.lazyUpdate,i=e.silent,e=e.notMerge),this[b_]=!0,!this._model||e){var r=new ua(this._api),o=this._theme,a=this._model=new Xm;a.scheduler=this._scheduler,a.init(null,null,o,r)}this._model.setOption(t,O_),n?(this[S_]={silent:i},this[b_]=!1):(Os(this),A_.update.call(this),this._zr.flush(),this[S_]=!1,this[b_]=!1,Ns.call(this,i),Bs.call(this,i))},I_.setTheme=function(){console.error(t("ECharts#setTheme() is DEPRECATED in ECharts 3.0"," at components/echarts/echarts.min.js:9"))},I_.getModel=function(){return this._model},I_.getOption=function(){return this._model&&this._model.getOption()},I_.getWidth=function(){return this._zr.getWidth()},I_.getHeight=function(){return this._zr.getHeight()},I_.getDevicePixelRatio=function(){return this._zr.painter.dpr||n.devicePixelRatio||1},I_.getRenderedCanvas=function(t){if(Jf.canvasSupported){t=t||{},t.pixelRatio=t.pixelRatio||1,t.backgroundColor=t.backgroundColor||this._model.get("backgroundColor");var e=this._zr;return e.painter.getRenderedCanvas(t)}},I_.getSvgDataUrl=function(){if(Jf.svgSupported){var t=this._zr,e=t.storage.getDisplayList();return v(e,function(t){t.stopAnimation(!0)}),t.painter.pathToDataUrl()}},I_.getDataURL=function(t){t=t||{};var e=t.excludeComponents,n=this._model,i=[],r=this;o_(e,function(t){n.eachComponent({mainType:t},function(t){var e=r._componentsMap[t.__viewId];e.group.ignore||(i.push(e),e.group.ignore=!0)})});var o="svg"===this._zr.painter.getType()?this.getSvgDataUrl():this.getRenderedCanvas(t).toDataURL("image/"+(t&&t.type||"png"));return o_(i,function(t){t.group.ignore=!1}),o},I_.getConnectedDataURL=function(t){if(Jf.canvasSupported){var e=this.group,n=Math.min,i=Math.max,r=1/0;if(z_[e]){var o=r,s=r,l=-r,u=-r,c=[],h=t&&t.pixelRatio||1;v(B_,function(r){if(r.group===e){var h=r.getRenderedCanvas(a(t)),f=r.getDom().getBoundingClientRect();o=n(f.left,o),s=n(f.top,s),l=i(f.right,l),u=i(f.bottom,u),c.push({dom:h,left:f.left,top:f.top})}}),o*=h,s*=h,l*=h,u*=h;var f=l-o,d=u-s,p=ud();p.width=f,p.height=d;var g=Rn(p);return t.connectedBackgroundColor&&g.add(new zv({shape:{x:0,y:0,width:f,height:d},style:{fill:t.connectedBackgroundColor}})),o_(c,function(t){var e=new An({style:{x:t.left*h-o,y:t.top*h-s,image:t.dom}});g.add(e)}),g.refreshImmediately(),p.toDataURL("image/"+(t&&t.type||"png"))}return this.getDataURL(t)}},I_.convertToPixel=b(Ds,"convertToPixel"),I_.convertFromPixel=b(Ds,"convertFromPixel"),I_.containPixel=function(t,e){var n,i=this._model;return t=Qn(i,t),v(t,function(t,i){i.indexOf("Models")>=0&&v(t,function(t){var r=t.coordinateSystem;if(r&&r.containPoint)n|=!!r.containPoint(e);else if("seriesModels"===i){var o=this._chartsMap[t.__viewId];o&&o.containPoint&&(n|=o.containPoint(e,t))}},this)},this),!!n},I_.getVisual=function(t,e){var n=this._model;t=Qn(n,t,{defaultMainType:"series"});var i=t.seriesModel,r=i.getData(),o=t.hasOwnProperty("dataIndexInside")?t.dataIndexInside:t.hasOwnProperty("dataIndex")?r.indexOfRawIndex(t.dataIndex):null;return null!=o?r.getItemVisual(o,e):r.getVisual(e)},I_.getViewOfComponentModel=function(t){return this._componentsMap[t.__viewId]},I_.getViewOfSeriesModel=function(t){return this._chartsMap[t.__viewId]};var A_={prepareAndUpdate:function(t){Os(this),A_.update.call(this,t)},update:function(t){var e=this._model,n=this._api,i=this._zr,r=this._coordSysMgr,o=this._scheduler;if(e){o.restoreData(e,t),o.performSeriesTasks(e),r.create(e,n),o.performDataProcessorTasks(e,t),Ls(this,e),r.update(e,n),Fs(e),o.performVisualTasks(e,t),Vs(this,e,n,t);var a=e.get("backgroundColor")||"transparent";if(Jf.canvasSupported)i.setBackgroundColor(a);else{var s=Jt(a);a=se(s,"rgb"),0===s[3]&&(a="transparent")}Hs(e,n)}},updateTransform:function(t){var e=this._model,n=this,i=this._api;if(e){var r=[];e.eachComponent(function(o,a){var s=n.getViewOfComponentModel(a);if(s&&s.__alive)if(s.updateTransform){var l=s.updateTransform(a,e,i,t);l&&l.update&&r.push(s)}else r.push(s)});var o=$();e.eachSeries(function(r){var a=n._chartsMap[r.__viewId];if(a.updateTransform){var s=a.updateTransform(r,e,i,t);s&&s.update&&o.set(r.uid,1)}else o.set(r.uid,1)}),Fs(e),this._scheduler.performVisualTasks(e,t,{setDirty:!0,dirtyMap:o}),js(n,e,i,t,o),Hs(e,this._api)}},updateView:function(t){var e=this._model;e&&(Xa.markUpdateMethod(t,"updateView"),Fs(e),this._scheduler.performVisualTasks(e,t,{setDirty:!0}),Vs(this,this._model,this._api,t),Hs(e,this._api))},updateVisual:function(t){A_.update.call(this,t)},updateLayout:function(t){A_.update.call(this,t)}};I_.resize=function(t){this._zr.resize(t);var e=this._model;if(this._loadingFX&&this._loadingFX.resize(),e){var n=e.resetOption("media"),i=t&&t.silent;this[b_]=!0,n&&Os(this),A_.update.call(this),this[b_]=!1,Ns.call(this,i),Bs.call(this,i)}},I_.showLoading=function(t,e){if(s_(t)&&(e=t,t=""),t=t||"default",this.hideLoading(),N_[t]){var n=N_[t](this._api,e),i=this._zr;this._loadingFX=n,i.add(n)}},I_.hideLoading=function(){this._loadingFX&&this._zr.remove(this._loadingFX),this._loadingFX=null},I_.makeActionFromEvent=function(t){var e=u({},t);return e.type=k_[t.type],e},I_.dispatchAction=function(t,e){if(s_(e)||(e={silent:!!e}),C_[t.type]&&this._model){if(this[b_])return void this._pendingActions.push(t);Es.call(this,t,e.silent),e.flush?this._zr.flush(!0):!1!==e.flush&&Jf.browser.weChat&&this._throttledZrFlush(),Ns.call(this,e.silent),Bs.call(this,e.silent)}},I_.appendData=function(t){var e=t.seriesIndex,n=this.getModel(),i=n.getSeriesByIndex(e);i.appendData(t),this._scheduler.unfinished=!0},I_.on=Ts("on"),I_.off=Ts("off"),I_.one=Ts("one");var T_=["click","dblclick","mouseover","mouseout","mousemove","mousedown","mouseup","globalout","contextmenu"];I_._initEvents=function(){o_(T_,function(t){var e=function(e){var n,i=this.getModel(),r=e.target,o="globalout"===t;if(o)n={};else if(r&&null!=r.dataIndex){var a=r.dataModel||i.getSeriesByIndex(r.seriesIndex);n=a&&a.getDataParams(r.dataIndex,r.dataType,r)||{}}else r&&r.eventData&&(n=u({},r.eventData));if(n){var s=n.componentType,l=n.componentIndex;("markLine"===s||"markPoint"===s||"markArea"===s)&&(s="series",l=n.seriesIndex);var c=s&&null!=l&&i.getComponent(s,l),h=c&&this["series"===c.mainType?"_chartsMap":"_componentsMap"][c.__viewId];n.event=e,n.type=t,this._ecEventProcessor.eventInfo={targetEl:r,packedEvent:n,model:c,view:h},this.trigger(t,n)}};e.zrEventfulCallAtLast=!0,this._zr.on(t,e,this)},this),o_(k_,function(t,e){this._messageCenter.on(e,function(t){this.trigger(e,t)},this)},this)},I_.isDisposed=function(){return this._disposed},I_.clear=function(){this.setOption({series:[]},!0)},I_.dispose=function(){if(!this._disposed){this._disposed=!0,ei(this.getDom(),V_,"");var t=this._api,e=this._model;o_(this._componentsViews,function(n){n.dispose(e,t)}),o_(this._chartsViews,function(n){n.dispose(e,t)}),this._zr.dispose(),delete B_[this.id]}},p(ks,xd),Xs.prototype={constructor:Xs,normalizeQuery:function(t){var e={},n={},i={};if(I(t)){var r=l_(t);e.mainType=r.main||null,e.subType=r.sub||null}else{var o=["Index","Name","Id"],a={name:1,dataIndex:1,dataType:1};v(t,function(t,r){for(var s=!1,l=0;l<o.length;l++){var u=o[l],c=r.lastIndexOf(u);if(c>0&&c===r.length-u.length){var h=r.slice(0,c);"data"!==h&&(e.mainType=h,e[u.toLowerCase()]=t,s=!0)}}a.hasOwnProperty(r)&&(n[r]=t,s=!0),s||(i[r]=t)})}return{cptQuery:e,dataQuery:n,otherQuery:i}},filter:function(t,e){function n(t,e,n,i){return null==t[n]||e[i||n]===t[n]}var i=this.eventInfo;if(!i)return!0;var r=i.targetEl,o=i.packedEvent,a=i.model,s=i.view;if(!a||!s)return!0;var l=e.cptQuery,u=e.dataQuery;return n(l,a,"mainType")&&n(l,a,"subType")&&n(l,a,"index","componentIndex")&&n(l,a,"name")&&n(l,a,"id")&&n(u,o,"name")&&n(u,o,"dataIndex")&&n(u,o,"dataType")&&(!s.filterForExposedEvent||s.filterForExposedEvent(t,e.otherQuery,r,o))},afterTrigger:function(){this.eventInfo=null}};var C_={},k_={},D_=[],O_=[],P_=[],L_=[],E_={},N_={},B_={},z_={},R_=new Date-0,F_=new Date-0,V_="_echarts_instance_",$_=Js;cl(v_,Dy),il(ly),rl(d_,uy),fl("default",Ey),al({type:"highlight",event:"highlight",update:"highlight"},H),al({type:"downplay",event:"downplay",update:"downplay"},H),nl("light",jy),nl("dark",Uy);var j_={};wl.prototype={constructor:wl,add:function(t){return this._add=t,this},update:function(t){return this._update=t,this},remove:function(t){return this._remove=t,this},execute:function(){var t=this._old,e=this._new,n={},i={},r=[],o=[];for(bl(t,n,r,"_oldKeyGetter",this),bl(e,i,o,"_newKeyGetter",this),u=0;u<t.length;u++){var a=r[u],s=i[a];if(null!=s){var l=s.length;l?(1===l&&(i[a]=null),s=s.unshift()):i[a]=null,this._update&&this._update(s,u)}else this._remove&&this._remove(u)}for(var u=0;u<o.length;u++){a=o[u];if(i.hasOwnProperty(a)){s=i[a];if(null==s)continue;if(s.length){var c=0;for(l=s.length;l>c;c++)this._add&&this._add(s[c])}else this._add&&this._add(s)}}}};var H_=$(["tooltip","label","itemName","itemId","seriesName"]),W_=A,G_="undefined",U_=-1,Z_="e\0\0",X_={float:typeof Float64Array===G_?Array:Float64Array,int:typeof Int32Array===G_?Array:Int32Array,ordinal:Array,number:Array,time:Array},Y_=typeof Uint32Array===G_?Array:Uint32Array,q_=typeof Int32Array===G_?Array:Int32Array,K_=typeof Uint16Array===G_?Array:Uint16Array,J_=["hasItemOption","_nameList","_idList","_invertedIndicesMap","_rawData","_chunkSize","_chunkCount","_dimValueGetter","_count","_rawCount","_nameDimIdx","_idDimIdx"],Q_=["_extent","_approximateExtent","_rawExtent"],tx=function(t,e){t=t||["x","y"];for(var n={},i=[],r={},o=0;o<t.length;o++){var a=t[o];I(a)&&(a={name:a});var s=a.name;a.type=a.type||"float",a.coordDim||(a.coordDim=s,a.coordDimIndex=0),a.otherDims=a.otherDims||{},i.push(s),n[s]=a,a.index=o,a.createInvertedIndices&&(r[s]=[])}this.dimensions=i,this._dimensionInfos=n,this.hostModel=e,this.dataType,this._indices=null,this._count=0,this._rawCount=0,this._storage={},this._nameList=[],this._idList=[],this._optionModels=[],this._visual={},this._layout={},this._itemVisuals=[],this.hasItemVisual={},this._itemLayouts=[],this._graphicEls=[],this._chunkSize=1e5,this._chunkCount=0,this._rawData,this._rawExtent={},this._extent={},this._approximateExtent={},this._dimensionsSummary=Sl(this),this._invertedIndicesMap=r,this._calculationInfo={},this.userOutput=this._dimensionsSummary.userOutput},ex=tx.prototype;ex.type="list",ex.hasItemOption=!0,ex.getDimension=function(t){return("number"==typeof t||!isNaN(t)&&!this._dimensionInfos.hasOwnProperty(t))&&(t=this.dimensions[t]),t},ex.getDimensionInfo=function(t){return this._dimensionInfos[this.getDimension(t)]},ex.getDimensionsOnCoord=function(){return this._dimensionsSummary.dataDimsOnCoord.slice()},ex.mapDimension=function(t,e){var n=this._dimensionsSummary;if(null==e)return n.encodeFirstDimNotExtra[t];var i=n.encode[t];return!0===e?(i||[]).slice():i&&i[e]},ex.initData=function(t,e,n){var i=$o.isInstance(t)||g(t);i&&(t=new Ta(t,this.dimensions.length)),this._rawData=t,this._storage={},this._indices=null,this._nameList=e||[],this._idList=[],this._nameRepeatCount={},n||(this.hasItemOption=!1),this.defaultDimValueGetter=dy[this._rawData.getSource().sourceFormat],this._dimValueGetter=n=n||this.defaultDimValueGetter,this._dimValueGetterArrayRows=dy.arrayRows,this._rawExtent={},this._initDataFromProvider(0,t.count()),t.pure&&(this.hasItemOption=!1)},ex.getProvider=function(){return this._rawData},ex.appendData=function(t){var e=this._rawData,n=this.count();e.appendData(t);var i=e.count();e.persistent||(i+=n),this._initDataFromProvider(n,i)},ex.appendValues=function(t,e){for(var n=this._chunkSize,i=this._storage,r=this.dimensions,o=r.length,a=this._rawExtent,s=this.count(),l=s+Math.max(t.length,e?e.length:0),u=this._chunkCount,c=0;o>c;c++){var h=r[c];a[h]||(a[h]=Fl()),i[h]||(i[h]=[]),Dl(i,this._dimensionInfos[h],n,u,l),this._chunkCount=i[h].length}for(var f=new Array(o),d=s;l>d;d++){for(var p=d-s,g=Math.floor(d/n),v=d%n,m=0;o>m;m++){h=r[m];var y=this._dimValueGetterArrayRows(t[p]||f,h,p,m);i[h][g][v]=y;var _=a[h];y<_[0]&&(_[0]=y),y>_[1]&&(_[1]=y)}e&&(this._nameList[d]=e[p])}this._rawCount=this._count=l,this._extent={},Ol(this)},ex._initDataFromProvider=function(t,e){if(!(t>=e)){for(var n,i=this._chunkSize,r=this._rawData,o=this._storage,a=this.dimensions,s=a.length,l=this._dimensionInfos,u=this._nameList,c=this._idList,h=this._rawExtent,f=this._nameRepeatCount={},d=this._chunkCount,p=0;s>p;p++){var g=a[p];h[g]||(h[g]=Fl());var v=l[g];0===v.otherDims.itemName&&(n=this._nameDimIdx=p),0===v.otherDims.itemId&&(this._idDimIdx=p),o[g]||(o[g]=[]),Dl(o,v,i,d,e),this._chunkCount=o[g].length}for(var m=new Array(s),y=t;e>y;y++){m=r.getItem(y,m);for(var _=Math.floor(y/i),x=y%i,w=0;s>w;w++){g=a[w];var b=o[g][_],S=this._dimValueGetter(m,g,y,w);b[x]=S;var M=h[g];S<M[0]&&(M[0]=S),S>M[1]&&(M[1]=S)}if(!r.pure){var I=u[y];if(m&&null==I)if(null!=m.name)u[y]=I=m.name;else if(null!=n){var A=a[n],T=o[A][_];if(T){I=T[x];var C=l[A].ordinalMeta;C&&C.categories.length&&(I=C.categories[I])}}var k=null==m?null:m.id;null==k&&null!=I&&(f[I]=f[I]||0,k=I,f[I]>0&&(k+="__ec__"+f[I]),f[I]++),null!=k&&(c[y]=k)}}!r.persistent&&r.clean&&r.clean(),this._rawCount=this._count=e,this._extent={},Ol(this)}},ex.count=function(){return this._count},ex.getIndices=function(){var t=this._indices;if(t){var e=t.constructor,n=this._count;if(e===Array){r=new e(n);for(var i=0;n>i;i++)r[i]=t[i]}else r=new e(t.buffer,0,n)}else{e=Tl(this);var r=new e(this.count());for(i=0;i<r.length;i++)r[i]=i}return r},ex.get=function(t,e){if(!(e>=0&&e<this._count))return NaN;var n=this._storage;if(!n[t])return NaN;e=this.getRawIndex(e);var i=Math.floor(e/this._chunkSize),r=e%this._chunkSize,o=n[t][i],a=o[r];return a},ex.getByRawIndex=function(t,e){if(!(e>=0&&e<this._rawCount))return NaN;var n=this._storage[t];if(!n)return NaN;var i=Math.floor(e/this._chunkSize),r=e%this._chunkSize,o=n[i];return o[r]},ex._getFast=function(t,e){var n=Math.floor(e/this._chunkSize),i=e%this._chunkSize,r=this._storage[t][n];return r[i]},ex.getValues=function(t,e){var n=[];S(t)||(e=t,t=this.dimensions);for(var i=0,r=t.length;r>i;i++)n.push(this.get(t[i],e));return n},ex.hasValue=function(t){for(var e=this._dimensionsSummary.dataDimsOnCoord,n=0,i=e.length;i>n;n++)if(isNaN(this.get(e[n],t)))return!1;return!0},ex.getDataExtent=function(t){t=this.getDimension(t);var e=this._storage[t],n=Fl();if(!e)return n;var i,r=this.count(),o=!this._indices;if(o)return this._rawExtent[t].slice();if(i=this._extent[t])return i.slice();i=n;for(var a=i[0],s=i[1],l=0;r>l;l++){var u=this._getFast(t,this.getRawIndex(l));a>u&&(a=u),u>s&&(s=u)}return i=[a,s],this._extent[t]=i,i},ex.getApproximateExtent=function(t){return t=this.getDimension(t),this._approximateExtent[t]||this.getDataExtent(t)},ex.setApproximateExtent=function(t,e){e=this.getDimension(e),this._approximateExtent[e]=t.slice()},ex.getCalculationInfo=function(t){return this._calculationInfo[t]},ex.setCalculationInfo=function(t,e){W_(t)?u(this._calculationInfo,t):this._calculationInfo[t]=e},ex.getSum=function(t){var e=this._storage[t],n=0;if(e)for(var i=0,r=this.count();r>i;i++){var o=this.get(t,i);isNaN(o)||(n+=o)}return n},ex.getMedian=function(t){var e=[];this.each(t,function(t){isNaN(t)||e.push(t)});var n=[].concat(e).sort(function(t,e){return t-e}),i=this.count();return 0===i?0:i%2===1?n[(i-1)/2]:(n[i/2]+n[i/2-1])/2},ex.rawIndexOf=function(t,e){var n=t&&this._invertedIndicesMap[t],i=n[e];return null==i||isNaN(i)?U_:i},ex.indexOfName=function(t){for(var e=0,n=this.count();n>e;e++)if(this.getName(e)===t)return e;return-1},ex.indexOfRawIndex=function(t){if(!this._indices)return t;if(t>=this._rawCount||0>t)return-1;var e=this._indices,n=e[t];if(null!=n&&n<this._count&&n===t)return t;for(var i=0,r=this._count-1;r>=i;){var o=(i+r)/2|0;if(e[o]<t)i=o+1;else{if(!(e[o]>t))return o;r=o-1}}return-1},ex.indicesOfNearest=function(t,e,n){var i=this._storage,r=i[t],o=[];if(!r)return o;null==n&&(n=1/0);for(var a=Number.MAX_VALUE,s=-1,l=0,u=this.count();u>l;l++){var c=e-this.get(t,l),h=Math.abs(c);n>=c&&a>=h&&((a>h||c>=0&&0>s)&&(a=h,s=c,o.length=0),o.push(l))}return o},ex.getRawIndex=Ll,ex.getRawDataItem=function(t){if(this._rawData.persistent)return this._rawData.getItem(this.getRawIndex(t));for(var e=[],n=0;n<this.dimensions.length;n++){var i=this.dimensions[n];e.push(this.get(i,t))}return e},ex.getName=function(t){var e=this.getRawIndex(t);return this._nameList[e]||Pl(this,this._nameDimIdx,e)||""},ex.getId=function(t){return Nl(this,this.getRawIndex(t))},ex.each=function(t,e,n,i){if(this._count){"function"==typeof t&&(i=n,n=e,e=t,t=[]),n=n||i||this,t=m(Bl(t),this.getDimension,this);for(var r=t.length,o=0;o<this.count();o++)switch(r){case 0:e.call(n,o);break;case 1:e.call(n,this.get(t[0],o),o);break;case 2:e.call(n,this.get(t[0],o),this.get(t[1],o),o);break;default:for(var a=0,s=[];r>a;a++)s[a]=this.get(t[a],o);s[a]=o,e.apply(n,s)}}},ex.filterSelf=function(t,e,n,i){if(this._count){"function"==typeof t&&(i=n,n=e,e=t,t=[]),n=n||i||this,t=m(Bl(t),this.getDimension,this);for(var r=this.count(),o=Tl(this),a=new o(r),s=[],l=t.length,u=0,c=t[0],h=0;r>h;h++){var f,d=this.getRawIndex(h);if(0===l)f=e.call(n,h);else if(1===l){var p=this._getFast(c,d);f=e.call(n,p,h)}else{for(var g=0;l>g;g++)s[g]=this._getFast(c,d);s[g]=h,f=e.apply(n,s)}f&&(a[u++]=d)}return r>u&&(this._indices=a),this._count=u,this._extent={},this.getRawIndex=this._indices?El:Ll,this}},ex.selectRange=function(t){if(this._count){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);var i=e.length;if(i){var r=this.count(),o=Tl(this),a=new o(r),s=0,l=e[0],u=t[l][0],c=t[l][1],h=!1;if(!this._indices){var f=0;if(1===i){for(var d=this._storage[e[0]],p=0;p<this._chunkCount;p++)for(var g=d[p],v=Math.min(this._count-p*this._chunkSize,this._chunkSize),m=0;v>m;m++){var y=g[m];(y>=u&&c>=y||isNaN(y))&&(a[s++]=f),f++}h=!0}else if(2===i){d=this._storage[l];var _=this._storage[e[1]],x=t[e[1]][0],w=t[e[1]][1];for(p=0;p<this._chunkCount;p++){g=d[p];var b=_[p];for(v=Math.min(this._count-p*this._chunkSize,this._chunkSize),m=0;v>m;m++){y=g[m];var S=b[m];(y>=u&&c>=y||isNaN(y))&&(S>=x&&w>=S||isNaN(S))&&(a[s++]=f),f++}}h=!0}}if(!h)if(1===i)for(m=0;r>m;m++){var M=this.getRawIndex(m);y=this._getFast(l,M);(y>=u&&c>=y||isNaN(y))&&(a[s++]=M)}else for(m=0;r>m;m++){var I=!0;for(M=this.getRawIndex(m),p=0;i>p;p++){var A=e[p];y=this._getFast(n,M);(y<t[A][0]||y>t[A][1])&&(I=!1)}I&&(a[s++]=this.getRawIndex(m))}return r>s&&(this._indices=a),this._count=s,this._extent={},this.getRawIndex=this._indices?El:Ll,this}}},ex.mapArray=function(t,e,n,i){"function"==typeof t&&(i=n,n=e,e=t,t=[]),n=n||i||this;var r=[];return this.each(t,function(){r.push(e&&e.apply(this,arguments))},n),r},ex.map=function(t,e,n,i){n=n||i||this,t=m(Bl(t),this.getDimension,this);var r=zl(this,t);r._indices=this._indices,r.getRawIndex=r._indices?El:Ll;for(var o=r._storage,a=[],s=this._chunkSize,l=t.length,u=this.count(),c=[],h=r._rawExtent,f=0;u>f;f++){for(var d=0;l>d;d++)c[d]=this.get(t[d],f);c[l]=f;var p=e&&e.apply(n,c);if(null!=p){"object"!=typeof p&&(a[0]=p,p=a);for(var g=this.getRawIndex(f),v=Math.floor(g/s),y=g%s,_=0;_<p.length;_++){var x=t[_],w=p[_],b=h[x],S=o[x];S&&(S[v][y]=w),w<b[0]&&(b[0]=w),w>b[1]&&(b[1]=w)}}}return r},ex.downSample=function(t,e,n,i){for(var r=zl(this,[t]),o=r._storage,a=[],s=Math.floor(1/e),l=o[t],u=this.count(),c=this._chunkSize,h=r._rawExtent[t],f=new(Tl(this))(u),d=0,p=0;u>p;p+=s){s>u-p&&(s=u-p,a.length=s);for(var g=0;s>g;g++){var v=this.getRawIndex(p+g),m=Math.floor(v/c),y=v%c;a[g]=l[m][y]}var _=n(a),x=this.getRawIndex(Math.min(p+i(a,_)||0,u-1)),w=Math.floor(x/c),b=x%c;l[w][b]=_,_<h[0]&&(h[0]=_),_>h[1]&&(h[1]=_),f[d++]=x}return r._count=d,r._indices=f,r.getRawIndex=El,r},ex.getItemModel=function(t){var e=this.hostModel;return new qr(this.getRawDataItem(t),e,e&&e.ecModel)},ex.diff=function(t){var e=this;return new wl(t?t.getIndices():[],this.getIndices(),function(e){return Nl(t,e)},function(t){return Nl(e,t)})},ex.getVisual=function(t){var e=this._visual;return e&&e[t]},ex.setVisual=function(t,e){if(W_(t))for(var n in t)t.hasOwnProperty(n)&&this.setVisual(n,t[n]);else this._visual=this._visual||{},this._visual[t]=e},ex.setLayout=function(t,e){if(W_(t))for(var n in t)t.hasOwnProperty(n)&&this.setLayout(n,t[n]);else this._layout[t]=e},ex.getLayout=function(t){return this._layout[t]},ex.getItemLayout=function(t){return this._itemLayouts[t]},ex.setItemLayout=function(t,e,n){this._itemLayouts[t]=n?u(this._itemLayouts[t]||{},e):e},ex.clearItemLayouts=function(){this._itemLayouts.length=0},ex.getItemVisual=function(t,e,n){var i=this._itemVisuals[t],r=i&&i[e];return null!=r||n?r:this.getVisual(e)},ex.setItemVisual=function(t,e,n){var i=this._itemVisuals[t]||{},r=this.hasItemVisual;if(this._itemVisuals[t]=i,W_(e))for(var o in e)e.hasOwnProperty(o)&&(i[o]=e[o],r[o]=!0);else i[e]=n,r[e]=!0},ex.clearAllVisual=function(){this._visual={},this._itemVisuals=[],this.hasItemVisual={}};var nx=function(t){t.seriesIndex=this.seriesIndex,t.dataIndex=this.dataIndex,t.dataType=this.dataType};ex.setItemGraphicEl=function(t,e){var n=this.hostModel;e&&(e.dataIndex=t,e.dataType=this.dataType,e.seriesIndex=n&&n.seriesIndex,"group"===e.type&&e.traverse(nx,e)),this._graphicEls[t]=e},ex.getItemGraphicEl=function(t){return this._graphicEls[t]},ex.eachItemGraphicEl=function(t,e){v(this._graphicEls,function(n,i){n&&t&&t.call(e,n,i)})},ex.cloneShallow=function(t){if(!t){var e=m(this.dimensions,this.getDimensionInfo,this);t=new tx(e,this.hostModel)}if(t._storage=this._storage,kl(t,this),this._indices){var n=this._indices.constructor;t._indices=new n(this._indices)}else t._indices=null;return t.getRawIndex=t._indices?El:Ll,t},ex.wrapMethod=function(t,e){var n=this[t];"function"==typeof n&&(this.__wrappedMethods=this.__wrappedMethods||[],this.__wrappedMethods.push(t),this[t]=function(){var t=n.apply(this,arguments);return e.apply(this,[t].concat(E(arguments)))})},ex.TRANSFERABLE_METHODS=["cloneShallow","downSample","map"],ex.CHANGABLE_METHODS=["filterSelf","selectRange"];var ix=function(t,e){return e=e||{},Vl(e.coordDimensions||[],t,{dimsDef:e.dimensionsDefine||t.dimensionsDefine,encodeDef:e.encodeDefine||t.encodeDefine,dimCount:e.dimensionsCount,generateCoord:e.generateCoord,generateCoordCount:e.generateCoordCount})};Yl.prototype.parse=function(t){return t},Yl.prototype.getSetting=function(t){return this._setting[t]},Yl.prototype.contain=function(t){var e=this._extent;return t>=e[0]&&t<=e[1]},Yl.prototype.normalize=function(t){var e=this._extent;return e[1]===e[0]?.5:(t-e[0])/(e[1]-e[0])},Yl.prototype.scale=function(t){var e=this._extent;return t*(e[1]-e[0])+e[0]},Yl.prototype.unionExtent=function(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1])},Yl.prototype.unionExtentFromData=function(t,e){this.unionExtent(t.getApproximateExtent(e))},Yl.prototype.getExtent=function(){return this._extent.slice()},Yl.prototype.setExtent=function(t,e){var n=this._extent;isNaN(t)||(n[0]=t),isNaN(e)||(n[1]=e)},Yl.prototype.isBlank=function(){return this._isBlank},Yl.prototype.setBlank=function(t){this._isBlank=t},Yl.prototype.getLabel=null,ai(Yl),ci(Yl,{registerWhenExtend:!0}),ql.createByAxisModel=function(t){var e=t.option,n=e.data,i=n&&m(n,Jl);return new ql({categories:i,needCollect:!i,deduplication:!1!==e.dedplication})};var rx=ql.prototype;rx.getOrdinal=function(t){return Kl(this).get(t)},rx.parseAndCollect=function(t){var e,n=this._needCollect;if("string"!=typeof t&&!n)return t;if(n&&!this._deduplication)return e=this.categories.length,this.categories[e]=t,e;var i=Kl(this);return e=i.get(t),null==e&&(n?(e=this.categories.length,this.categories[e]=t,i.set(t,e)):e=NaN),e};var ox=Yl.prototype,ax=Yl.extend({type:"ordinal",init:function(t,e){(!t||S(t))&&(t=new ql({categories:t})),this._ordinalMeta=t,this._extent=e||[0,t.categories.length-1]},parse:function(t){return"string"==typeof t?this._ordinalMeta.getOrdinal(t):Math.round(t)},contain:function(t){return t=this.parse(t),ox.contain.call(this,t)&&null!=this._ordinalMeta.categories[t]},normalize:function(t){return ox.normalize.call(this,this.parse(t))},scale:function(t){return Math.round(ox.scale.call(this,t))},getTicks:function(){for(var t=[],e=this._extent,n=e[0];n<=e[1];)t.push(n),n++;return t},getLabel:function(t){return this.isBlank()?void 0:this._ordinalMeta.categories[t]},count:function(){return this._extent[1]-this._extent[0]+1},unionExtentFromData:function(t,e){this.unionExtent(t.getApproximateExtent(e))},getOrdinalMeta:function(){return this._ordinalMeta},niceTicks:H,niceExtent:H});ax.create=function(){return new ax};var sx=oo,lx=oo,ux=Yl.extend({type:"interval",_interval:0,_intervalPrecision:2,setExtent:function(t,e){var n=this._extent;isNaN(t)||(n[0]=parseFloat(t)),isNaN(e)||(n[1]=parseFloat(e))},unionExtent:function(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1]),ux.prototype.setExtent.call(this,e[0],e[1])},getInterval:function(){return this._interval},setInterval:function(t){this._interval=t,this._niceExtent=this._extent.slice(),this._intervalPrecision=tu(t)},getTicks:function(){return iu(this._interval,this._extent,this._niceExtent,this._intervalPrecision)},getLabel:function(t,e){if(null==t)return"";var n=e&&e.precision;return null==n?n=lo(t)||0:"auto"===n&&(n=this._intervalPrecision),t=lx(t,n,!0),wo(t)},niceTicks:function(t,e,n){t=t||5;var i=this._extent,r=i[1]-i[0];if(isFinite(r)){0>r&&(r=-r,i.reverse());var o=Ql(i,t,e,n);this._intervalPrecision=o.intervalPrecision,this._interval=o.interval,this._niceExtent=o.niceTickExtent}},niceExtent:function(t){var e=this._extent;if(e[0]===e[1])if(0!==e[0]){var n=e[0];t.fixMax?e[0]-=n/2:(e[1]+=n/2,e[0]-=n/2)}else e[1]=1;var i=e[1]-e[0];isFinite(i)||(e[0]=0,e[1]=1),this.niceTicks(t.splitNumber,t.minInterval,t.maxInterval);var r=this._interval;t.fixMin||(e[0]=lx(Math.floor(e[0]/r)*r)),t.fixMax||(e[1]=lx(Math.ceil(e[1]/r)*r))}});ux.create=function(){return new ux};var cx="__ec_stack_",hx=.5,fx="undefined"!=typeof Float32Array?Float32Array:Array,dx={seriesType:"bar",plan:by(),reset:function(t){function e(t,e){for(var n,h=t.count,f=new fx(2*h),d=new fx(h),p=[],g=[],v=0,m=0;null!=(n=t.next());)g[u]=e.get(a,n),g[1-u]=e.get(s,n),p=i.dataToPoint(g,null,p),f[v++]=p[0],f[v++]=p[1],d[m++]=n;e.setLayout({largePoints:f,largeDataIndices:d,barWidth:c,valueAxisStart:du(r,o,!1),valueAxisHorizontal:l})}if(hu(t)&&fu(t)){var n=t.getData(),i=t.coordinateSystem,r=i.getBaseAxis(),o=i.getOtherAxis(r),a=n.mapDimension(o.dim),s=n.mapDimension(r.dim),l=o.isHorizontal(),u=l?0:1,c=uu(su([t]),r,t).width;return c>hx||(c=hx),{progress:e}}}},px=ux.prototype,gx=Math.ceil,vx=Math.floor,mx=1e3,yx=60*mx,_x=60*yx,xx=24*_x,bx=function(t,e,n,i){for(;i>n;){var r=n+i>>>1;t[r][1]<e?n=r+1:i=r}return n},Sx=ux.extend({type:"time",getLabel:function(t){var e=this._stepLvl,n=new Date(t);return Co(e[0],n,this.getSetting("useUTC"))},niceExtent:function(t){var e=this._extent;if(e[0]===e[1]&&(e[0]-=xx,e[1]+=xx),e[1]===-1/0&&1/0===e[0]){var n=new Date;e[1]=+new Date(n.getFullYear(),n.getMonth(),n.getDate()),e[0]=e[1]-xx}this.niceTicks(t.splitNumber,t.minInterval,t.maxInterval);var i=this._interval;t.fixMin||(e[0]=oo(vx(e[0]/i)*i)),t.fixMax||(e[1]=oo(gx(e[1]/i)*i))},niceTicks:function(t,e,n){t=t||10;var i=this._extent,r=i[1]-i[0],o=r/t;null!=e&&e>o&&(o=e),null!=n&&o>n&&(o=n);var a=Mx.length,s=bx(Mx,o,0,a),l=Mx[Math.min(s,a-1)],u=l[1];if("year"===l[0]){var c=r/u,h=mo(c/t,!0);u*=h}var f=this.getSetting("useUTC")?0:60*new Date(+i[0]||+i[1]).getTimezoneOffset()*1e3,d=[Math.round(gx((i[0]-f)/u)*u+f),Math.round(vx((i[1]-f)/u)*u+f)];nu(d,i),this._stepLvl=l,this._interval=u,this._niceExtent=d},parse:function(t){return+po(t)}});v(["contain","normalize"],function(t){Sx.prototype[t]=function(e){return px[t].call(this,this.parse(e))}});var Mx=[["hh:mm:ss",mx],["hh:mm:ss",5*mx],["hh:mm:ss",10*mx],["hh:mm:ss",15*mx],["hh:mm:ss",30*mx],["hh:mm\nMM-dd",yx],["hh:mm\nMM-dd",5*yx],["hh:mm\nMM-dd",10*yx],["hh:mm\nMM-dd",15*yx],["hh:mm\nMM-dd",30*yx],["hh:mm\nMM-dd",_x],["hh:mm\nMM-dd",2*_x],["hh:mm\nMM-dd",6*_x],["hh:mm\nMM-dd",12*_x],["MM-dd\nyyyy",xx],["MM-dd\nyyyy",2*xx],["MM-dd\nyyyy",3*xx],["MM-dd\nyyyy",4*xx],["MM-dd\nyyyy",5*xx],["MM-dd\nyyyy",6*xx],["week",7*xx],["MM-dd\nyyyy",10*xx],["week",14*xx],["week",21*xx],["month",31*xx],["week",42*xx],["month",62*xx],["week",70*xx],["quarter",95*xx],["month",31*xx*4],["month",31*xx*5],["half-year",380*xx/2],["month",31*xx*8],["month",31*xx*10],["year",380*xx]];Sx.create=function(t){return new Sx({useUTC:t.ecModel.get("useUTC")})};var Ix=Yl.prototype,Ax=ux.prototype,Tx=lo,Cx=oo,kx=Math.floor,Dx=Math.ceil,Ox=Math.pow,Px=Math.log,Lx=Yl.extend({type:"log",base:10,$constructor:function(){Yl.apply(this,arguments),this._originalScale=new ux},getTicks:function(){var t=this._originalScale,e=this._extent,n=t.getExtent();return m(Ax.getTicks.call(this),function(i){var r=oo(Ox(this.base,i));return r=i===e[0]&&t.__fixMin?pu(r,n[0]):r,i===e[1]&&t.__fixMax?pu(r,n[1]):r},this)},getLabel:Ax.getLabel,scale:function(t){return t=Ix.scale.call(this,t),Ox(this.base,t)},setExtent:function(t,e){var n=this.base;t=Px(t)/Px(n),e=Px(e)/Px(n),Ax.setExtent.call(this,t,e)},getExtent:function(){var t=this.base,e=Ix.getExtent.call(this);e[0]=Ox(t,e[0]),e[1]=Ox(t,e[1]);var n=this._originalScale,i=n.getExtent();return n.__fixMin&&(e[0]=pu(e[0],i[0])),n.__fixMax&&(e[1]=pu(e[1],i[1])),e},unionExtent:function(t){this._originalScale.unionExtent(t);var e=this.base;t[0]=Px(t[0])/Px(e),t[1]=Px(t[1])/Px(e),Ix.unionExtent.call(this,t)},unionExtentFromData:function(t,e){this.unionExtent(t.getApproximateExtent(e))},niceTicks:function(t){t=t||10;var e=this._extent,n=e[1]-e[0];if(!(1/0===n||0>=n)){var i=go(n),r=t/n*i;for(.5>=r&&(i*=10);!isNaN(i)&&Math.abs(i)<1&&Math.abs(i)>0;)i*=10;var o=[oo(Dx(e[0]/i)*i),oo(kx(e[1]/i)*i)];this._interval=i,this._niceExtent=o}},niceExtent:function(t){Ax.niceExtent.call(this,t);var e=this._originalScale;e.__fixMin=t.fixMin,e.__fixMax=t.fixMax}});v(["contain","normalize"],function(t){Lx.prototype[t]=function(e){return e=Px(e)/Px(this.base),Ix[t].call(this,e)}}),Lx.create=function(){return new Lx};var Ex={getMin:function(t){var e=this.option,n=t||null==e.rangeStart?e.min:e.rangeStart;return this.axis&&null!=n&&"dataMin"!==n&&"function"!=typeof n&&!D(n)&&(n=this.axis.scale.parse(n)),n},getMax:function(t){var e=this.option,n=t||null==e.rangeEnd?e.max:e.rangeEnd;return this.axis&&null!=n&&"dataMax"!==n&&"function"!=typeof n&&!D(n)&&(n=this.axis.scale.parse(n)),n},getNeedCrossZero:function(){var t=this.option;return null==t.rangeStart&&null==t.rangeEnd&&!t.scale},getCoordSysModel:H,setRange:function(t,e){this.option.rangeStart=t,this.option.rangeEnd=e},resetRange:function(){this.option.rangeStart=this.option.rangeEnd=null}},Nx=rr({type:"triangle",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=e.width/2,o=e.height/2;t.moveTo(n,i-o),t.lineTo(n+r,i+o),t.lineTo(n-r,i+o),t.closePath()}}),Bx=rr({type:"diamond",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=e.width/2,o=e.height/2;t.moveTo(n,i-o),t.lineTo(n+r,i),t.lineTo(n,i+o),t.lineTo(n-r,i),t.closePath()}}),zx=rr({type:"pin",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.x,i=e.y,r=e.width/5*3,o=Math.max(r,e.height),a=r/2,s=a*a/(o-a),l=i-o+a+s,u=Math.asin(s/a),c=Math.cos(u)*a,h=Math.sin(u),f=Math.cos(u),d=.6*a,p=.7*a;t.moveTo(n-c,l+s),t.arc(n,l,a,Math.PI-u,2*Math.PI+u),t.bezierCurveTo(n+c-h*d,l+s+f*d,n,i-p,n,i),t.bezierCurveTo(n,i-p,n-c+h*d,l+s+f*d,n-c,l+s),t.closePath()}}),Rx=rr({type:"arrow",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.height,i=e.width,r=e.x,o=e.y,a=i/3*2;t.moveTo(r,o),t.lineTo(r+a,o+n),t.lineTo(r,o+n/4*3),t.lineTo(r-a,o+n),t.lineTo(r,o),t.closePath()}}),Fx={line:Fv,rect:zv,roundRect:zv,square:zv,circle:Av,diamond:Bx,pin:zx,arrow:Rx,triangle:Nx},Vx={line:function(t,e,n,i,r){r.x1=t,r.y1=e+i/2,r.x2=t+n,r.y2=e+i/2},rect:function(t,e,n,i,r){r.x=t,r.y=e,r.width=n,r.height=i},roundRect:function(t,e,n,i,r){r.x=t,r.y=e,r.width=n,r.height=i,r.r=Math.min(n,i)/4},square:function(t,e,n,i,r){var o=Math.min(n,i);r.x=t,r.y=e,r.width=o,r.height=o},circle:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.r=Math.min(n,i)/2},diamond:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.width=n,r.height=i},pin:function(t,e,n,i,r){r.x=t+n/2,r.y=e+i/2,r.width=n,r.height=i},arrow:function(t,e,n,i,r){r.x=t+n/2,r.y=e+i/2,r.width=n,r.height=i},triangle:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.width=n,r.height=i}},$x={};v(Fx,function(t,e){$x[e]=new t});var jx=rr({type:"symbol",shape:{symbolType:"",x:0,y:0,width:0,height:0},calculateTextPosition:function(t,e,n){var i=Xe(t,e,n),r=this.shape;return r&&"pin"===r.symbolType&&"inside"===e.textPosition&&(i.y=n.y+.4*n.height),i},buildPath:function(t,e,n){var i=e.symbolType;if("none"!==i){var r=$x[i];r||(i="rect",r=$x[i]),Vx[i](e.x,e.y,e.width,e.height,r.shape),r.buildPath(t,r.shape,n)}}}),Hx={isDimensionStacked:Wl,enableDataStack:Hl,getStackedDimension:Gl},Wx=(Object.freeze||Object)({createList:Cu,getLayoutRect:Lo,dataStack:Hx,createScale:ku,mixinAxisModelCommonMethods:Du,completeDimensions:Vl,createDimensions:ix,createSymbol:Tu}),Gx=1e-8;Lu.prototype={constructor:Lu,properties:null,getBoundingRect:function(){var t=this._rect;if(t)return t;for(var e=Number.MAX_VALUE,n=[e,e],i=[-e,-e],r=[],o=[],a=this.geometries,s=0;s<a.length;s++)if("polygon"===a[s].type){var l=a[s].exterior;Ii(l,r,o),ut(n,n,r),ct(i,i,o)}return 0===s&&(n[0]=n[1]=i[0]=i[1]=0),this._rect=new Me(n[0],n[1],i[0]-n[0],i[1]-n[1])},contain:function(t){var e=this.getBoundingRect(),n=this.geometries;if(!e.contain(t[0],t[1]))return!1;t:for(var i=0,r=n.length;r>i;i++)if("polygon"===n[i].type){var o=n[i].exterior,a=n[i].interiors;if(Pu(o,t[0],t[1])){for(var s=0;s<(a?a.length:0);s++)if(Pu(a[s]))continue t;return!0}}return!1},transformTo:function(t,e,n,i){var r=this.getBoundingRect(),o=r.width/r.height;n?i||(i=n/o):n=o*i;for(var a=new Me(t,e,n,i),s=r.calculateTransform(a),l=this.geometries,u=0;u<l.length;u++)if("polygon"===l[u].type){for(var c=l[u].exterior,h=l[u].interiors,f=0;f<c.length;f++)lt(c[f],c[f],s);for(var d=0;d<(h?h.length:0);d++)for(f=0;f<h[d].length;f++)lt(h[d][f],h[d][f],s)}r=this._rect,r.copy(a),this.center=[r.x+r.width/2,r.y+r.height/2]},cloneShallow:function(t){null==t&&(t=this.name);var e=new Lu(t,this.geometries,this.center);return e._rect=this._rect,e.transformTo=null,e}};var Ux=function(t){return Eu(t),m(_(t.features,function(t){return t.geometry&&t.properties&&t.geometry.coordinates.length>0}),function(t){var e=t.properties,n=t.geometry,i=n.coordinates,r=[];"Polygon"===n.type&&r.push({type:"polygon",exterior:i[0],interiors:i.slice(1)}),"MultiPolygon"===n.type&&v(i,function(t){t[0]&&r.push({type:"polygon",exterior:t[0],interiors:t.slice(1)})});var o=new Lu(e.name,r,e.cp);return o.properties=e,o})},Zx=Jn(),Xx=[0,1],Yx=function(t,e,n){this.dim=t,this.scale=e,this._extent=n||[0,0],this.inverse=!1,this.onBand=!1};Yx.prototype={constructor:Yx,contain:function(t){var e=this._extent,n=Math.min(e[0],e[1]),i=Math.max(e[0],e[1]);return t>=n&&i>=t},containData:function(t){return this.contain(this.dataToCoord(t))},getExtent:function(){return this._extent.slice()},getPixelPrecision:function(t){return uo(t||this.scale.getExtent(),this._extent)},setExtent:function(t,e){var n=this._extent;n[0]=t,n[1]=e},dataToCoord:function(t,e){var n=this._extent,i=this.scale;return t=i.normalize(t),this.onBand&&"ordinal"===i.type&&(n=n.slice(),qu(n,i.count())),io(t,Xx,n,e)},coordToData:function(t,e){var n=this._extent,i=this.scale;this.onBand&&"ordinal"===i.type&&(n=n.slice(),qu(n,i.count()));var r=io(t,n,Xx,e);return this.scale.scale(r)},pointToData:function(){},getTicksCoords:function(t){t=t||{};var e=t.tickModel||this.getTickModel(),n=zu(this,e),i=n.ticks,r=m(i,function(t){return{coord:this.dataToCoord(t),tickValue:t}},this),o=e.get("alignWithLabel");return Ku(this,r,n.tickCategoryInterval,o,t.clamp),r},getViewLabels:function(){return Bu(this).labels},getLabelModel:function(){return this.model.getModel("axisLabel")},getTickModel:function(){return this.model.getModel("axisTick")},getBandWidth:function(){var t=this._extent,e=this.scale.getExtent(),n=e[1]-e[0]+(this.onBand?1:0);0===n&&(n=1);var i=Math.abs(t[1]-t[0]);return Math.abs(i)/n},isHorizontal:null,getRotate:null,calculateCategoryInterval:function(){return Uu(this)}};var qx=Ux,Kx={};v(["map","each","filter","indexOf","inherits","reduce","filter","bind","curry","isArray","isString","isObject","isFunction","extend","defaults","clone","merge"],function(t){Kx[t]=fd[t]});var Jx={};v(["extendShape","extendPath","makePath","makeImage","mergePath","resizePath","createIcon","setHoverStyle","setLabelStyle","setTextStyle","setText","getFont","updateProps","initProps","getTransform","clipPointsByRect","clipRectByRect","Group","Image","Text","Circle","Sector","Ring","Polygon","Polyline","Rect","Line","BezierCurve","Arc","IncrementalDisplayable","CompoundPath","LinearGradient","RadialGradient","BoundingRect"],function(t){Jx[t]=sm[t]});var Qx=function(t){this._axes={},this._dimList=[],this.name=t||""};Qx.prototype={constructor:Qx,type:"cartesian",getAxis:function(t){return this._axes[t]},getAxes:function(){return m(this._dimList,Ju,this)},getAxesByScale:function(t){return t=t.toLowerCase(),_(this.getAxes(),function(e){return e.scale.type===t})},addAxis:function(t){var e=t.dim;this._axes[e]=t,this._dimList.push(e)},dataToCoord:function(t){return this._dataCoordConvert(t,"dataToCoord")},coordToData:function(t){return this._dataCoordConvert(t,"coordToData")},_dataCoordConvert:function(t,e){for(var n=this._dimList,i=t instanceof Array?[]:{},r=0;r<n.length;r++){var o=n[r],a=this._axes[o];i[o]=a[e](t[o])}return i}},Qu.prototype={constructor:Qu,type:"cartesian2d",dimensions:["x","y"],getBaseAxis:function(){return this.getAxesByScale("ordinal")[0]||this.getAxesByScale("time")[0]||this.getAxis("x")},containPoint:function(t){var e=this.getAxis("x"),n=this.getAxis("y");return e.contain(e.toLocalCoord(t[0]))&&n.contain(n.toLocalCoord(t[1]))},containData:function(t){return this.getAxis("x").containData(t[0])&&this.getAxis("y").containData(t[1])},dataToPoint:function(t,e,n){var i=this.getAxis("x"),r=this.getAxis("y");return n=n||[],n[0]=i.toGlobalCoord(i.dataToCoord(t[0])),n[1]=r.toGlobalCoord(r.dataToCoord(t[1])),n},clampData:function(t,e){var n=this.getAxis("x").scale,i=this.getAxis("y").scale,r=n.getExtent(),o=i.getExtent(),a=n.parse(t[0]),s=i.parse(t[1]);return e=e||[],e[0]=Math.min(Math.max(Math.min(r[0],r[1]),a),Math.max(r[0],r[1])),e[1]=Math.min(Math.max(Math.min(o[0],o[1]),s),Math.max(o[0],o[1])),e},pointToData:function(t,e){var n=this.getAxis("x"),i=this.getAxis("y");return e=e||[],e[0]=n.coordToData(n.toLocalCoord(t[0])),e[1]=i.coordToData(i.toLocalCoord(t[1])),e},getOtherAxis:function(t){return this.getAxis("x"===t.dim?"y":"x")}},d(Qu,Qx);var tw=function(t,e,n,i,r){Yx.call(this,t,e,n),this.type=i||"value",this.position=r||"bottom"};tw.prototype={constructor:tw,index:0,getAxesOnZeroOf:null,model:null,isHorizontal:function(){var t=this.position;return"top"===t||"bottom"===t},getGlobalExtent:function(t){var e=this.getExtent();return e[0]=this.toGlobalCoord(e[0]),e[1]=this.toGlobalCoord(e[1]),t&&e[0]>e[1]&&e.reverse(),e},getOtherAxis:function(){this.grid.getOtherAxis()},pointToData:function(t,e){return this.coordToData(this.toLocalCoord(t["x"===this.dim?0:1]),e)},toLocalCoord:null,toGlobalCoord:null},d(tw,Yx);var ew={show:!0,zlevel:0,z:0,inverse:!1,name:"",nameLocation:"end",nameRotate:null,nameTruncate:{maxWidth:null,ellipsis:"...",placeholder:"."},nameTextStyle:{},nameGap:15,silent:!1,triggerEvent:!1,tooltip:{show:!1},axisPointer:{},axisLine:{show:!0,onZero:!0,onZeroAxisIndex:null,lineStyle:{color:"#333",width:1,type:"solid"},symbol:["none","none"],symbolSize:[10,15]},axisTick:{show:!0,inside:!1,length:5,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,showMinLabel:null,showMaxLabel:null,margin:8,fontSize:12},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},nw={};nw.categoryAxis=s({boundaryGap:!0,deduplication:null,splitLine:{show:!1},axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"}},ew),nw.valueAxis=s({boundaryGap:[0,0],splitNumber:5},ew),nw.timeAxis=c({scale:!0,min:"dataMin",max:"dataMax"},nw.valueAxis),nw.logAxis=c({scale:!0,logBase:10},nw.valueAxis);var iw=["value","category","time","log"],rw=function(t,e,n,i){v(iw,function(r){e.extend({type:t+"Axis."+r,mergeDefaultAndTheme:function(e,i){var o=this.layoutMode,a=o?No(e):{},l=i.getTheme();s(e,l.get(r+"Axis")),s(e,this.getDefaultOption()),e.type=n(t,e),o&&Eo(e,a,o)},optionUpdated:function(){var t=this.option;"category"===t.type&&(this.__ordinalMeta=ql.createByAxisModel(this))},getCategories:function(t){var e=this.option;return"category"===e.type?t?e.data:this.__ordinalMeta.categories:void 0},getOrdinalMeta:function(){return this.__ordinalMeta},defaultOption:l([{},nw[r+"Axis"],i],!0)})}),Pm.registerSubTypeDefaulter(t+"Axis",b(n,t))},ow=Pm.extend({type:"cartesian2dAxis",axis:null,init:function(){ow.superApply(this,"init",arguments),this.resetRange()},mergeOption:function(){ow.superApply(this,"mergeOption",arguments),this.resetRange()},restoreData:function(){ow.superApply(this,"restoreData",arguments),this.resetRange()},getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"grid",index:this.option.gridIndex,id:this.option.gridId})[0]}});s(ow.prototype,Ex);var aw={offset:0};rw("x",ow,tc,aw),rw("y",ow,tc,aw),Pm.extend({type:"grid",dependencies:["xAxis","yAxis"],layoutMode:"box",coordinateSystem:null,defaultOption:{show:!1,zlevel:0,z:0,left:"10%",top:60,right:"10%",bottom:60,containLabel:!1,backgroundColor:"rgba(0,0,0,0)",borderWidth:1,borderColor:"#ccc"}});var sw=nc.prototype;sw.type="grid",sw.axisPointerEnabled=!0,sw.getRect=function(){return this._rect},sw.update=function(t,e){var n=this._axesMap;this._updateScale(t,this.model),v(n.x,function(t){mu(t.scale,t.model)}),v(n.y,function(t){mu(t.scale,t.model)});var i={};v(n.x,function(t){ic(n,"y",t,i)}),v(n.y,function(t){ic(n,"x",t,i)}),this.resize(this.model,e)},sw.resize=function(t,e,n){function i(){v(o,function(t){var e=t.isHorizontal(),n=e?[0,r.width]:[0,r.height],i=t.inverse?1:0;t.setExtent(n[i],n[1-i]),oc(t,e?r.x:r.y)})}var r=Lo(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()});this._rect=r;var o=this._axesList;i(),!n&&t.get("containLabel")&&(v(o,function(t){if(!t.model.get("axisLabel.inside")){var e=bu(t);if(e){var n=t.isHorizontal()?"height":"width",i=t.model.get("axisLabel.margin");r[n]-=e[n]+i,"top"===t.position?r.y+=e.height+i:"left"===t.position&&(r.x+=e.width+i)}}}),i())},sw.getAxis=function(t,e){var n=this._axesMap[t];if(null!=n){if(null==e)for(var i in n)if(n.hasOwnProperty(i))return n[i];return n[e]}},sw.getAxes=function(){return this._axesList.slice()},sw.getCartesian=function(t,e){if(null!=t&&null!=e){var n="x"+t+"y"+e;return this._coordsMap[n]}A(t)&&(e=t.yAxisIndex,t=t.xAxisIndex);for(var i=0,r=this._coordsList;i<r.length;i++)if(r[i].getAxis("x").index===t||r[i].getAxis("y").index===e)return r[i]},sw.getCartesians=function(){return this._coordsList.slice()},sw.convertToPixel=function(t,e,n){var i=this._findConvertTarget(t,e);return i.cartesian?i.cartesian.dataToPoint(n):i.axis?i.axis.toGlobalCoord(i.axis.dataToCoord(n)):null},sw.convertFromPixel=function(t,e,n){var i=this._findConvertTarget(t,e);return i.cartesian?i.cartesian.pointToData(n):i.axis?i.axis.coordToData(i.axis.toLocalCoord(n)):null},sw._findConvertTarget=function(t,e){var n,i,r=e.seriesModel,o=e.xAxisModel||r&&r.getReferringComponents("xAxis")[0],a=e.yAxisModel||r&&r.getReferringComponents("yAxis")[0],s=e.gridModel,l=this._coordsList;if(r)n=r.coordinateSystem,f(l,n)<0&&(n=null);else if(o&&a)n=this.getCartesian(o.componentIndex,a.componentIndex);else if(o)i=this.getAxis("x",o.componentIndex);else if(a)i=this.getAxis("y",a.componentIndex);else if(s){var u=s.coordinateSystem;u===this&&(n=this._coordsList[0])}return{cartesian:n,axis:i}},sw.containPoint=function(t){var e=this._coordsList[0];return e?e.containPoint(t):void 0},sw._initCartesian=function(t,e){function n(n){return function(a,s){if(ec(a,t,e)){var l=a.get("position");"x"===n?"top"!==l&&"bottom"!==l&&(l=i.bottom?"top":"bottom"):"left"!==l&&"right"!==l&&(l=i.left?"right":"left"),i[l]=!0;var u=new tw(n,yu(a),[0,0],a.get("type"),l),c="category"===u.type;u.onBand=c&&a.get("boundaryGap"),u.inverse=a.get("inverse"),a.axis=u,u.model=a,u.grid=this,u.index=s,this._axesList.push(u),r[n][s]=u,o[n]++}}}var i={left:!1,right:!1,top:!1,bottom:!1},r={x:{},y:{}},o={x:0,y:0};return e.eachComponent("xAxis",n("x"),this),e.eachComponent("yAxis",n("y"),this),o.x&&o.y?(this._axesMap=r,void v(r.x,function(e,n){v(r.y,function(i,r){var o="x"+n+"y"+r,a=new Qu(o);a.grid=this,a.model=t,this._coordsMap[o]=a,this._coordsList.push(a),a.addAxis(e),a.addAxis(i)},this)},this)):(this._axesMap={},void(this._axesList=[]))},sw._updateScale=function(t,e){function n(t,e){v(t.mapDimension(e.dim,!0),function(n){e.scale.unionExtentFromData(t,Gl(t,n))})}v(this._axesList,function(t){t.scale.setExtent(1/0,-1/0)}),t.eachSeries(function(i){if(sc(i)){var r=ac(i,t),o=r[0],a=r[1];if(!ec(o,e,t)||!ec(a,e,t))return;var s=this.getCartesian(o.componentIndex,a.componentIndex),l=i.getData(),u=s.getAxis("x"),c=s.getAxis("y");"list"===l.type&&(n(l,u,i),n(l,c,i))}},this)},sw.getTooltipAxes=function(t){var e=[],n=[];return v(this.getCartesians(),function(i){var r=null!=t&&"auto"!==t?i.getAxis(t):i.getBaseAxis(),o=i.getOtherAxis(r);f(e,r)<0&&e.push(r),f(n,o)<0&&n.push(o)}),{baseAxes:e,otherAxes:n}};var lw=["xAxis","yAxis"];nc.create=function(t,e){var n=[];return t.eachComponent("grid",function(i,r){var o=new nc(i,t,e);o.name="grid_"+r,o.resize(i,e,!0),i.coordinateSystem=o,n.push(o)}),t.eachSeries(function(e){if(sc(e)){var n=ac(e,t),i=n[0],r=n[1],o=i.getCoordSysModel(),a=o.coordinateSystem;e.coordinateSystem=a.getCartesian(i.componentIndex,r.componentIndex)}}),n},nc.dimensions=nc.prototype.dimensions=Qu.prototype.dimensions,la.register("cartesian2d",nc);var uw=_y.extend({type:"series.__base_bar__",getInitialData:function(){return Ul(this.getSource(),this)},getMarkerPosition:function(t){var e=this.coordinateSystem;if(e){var n=e.dataToPoint(e.clampData(t)),i=this.getData(),r=i.getLayout("offset"),o=i.getLayout("size"),a=e.getBaseAxis().isHorizontal()?0:1;return n[a]+=r+o/2,n}return[NaN,NaN]},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,barMinHeight:0,barMinAngle:0,large:!1,largeThreshold:400,progressive:3e3,progressiveChunkMode:"mod",itemStyle:{},emphasis:{}}});uw.extend({type:"series.bar",dependencies:["grid","polar"],brushSelector:"rect",getProgressive:function(){return!!this.get("large")&&this.get("progressive")},getProgressiveThreshold:function(){var t=this.get("progressiveThreshold"),e=this.get("largeThreshold");return e>t&&(t=e),t}});var cw=yg([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["stroke","barBorderColor"],["lineWidth","barBorderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),hw={getBarItemStyle:function(t){var e=cw(this,t);if(this.getBorderLineDash){var n=this.getBorderLineDash();n&&(e.lineDash=n)}return e}},fw=["itemStyle","barBorderWidth"],dw=[0,0];u(qr.prototype,hw),vl({type:"bar",render:function(t,e,n){this._updateDrawMode(t);var i=t.get("coordinateSystem");return("cartesian2d"===i||"polar"===i)&&(this._isLargeDraw?this._renderLarge(t,e,n):this._renderNormal(t,e,n)),this.group},incrementalPrepareRender:function(t){this._clear(),this._updateDrawMode(t)},incrementalRender:function(t,e){this._incrementalRenderLarge(t,e)},_updateDrawMode:function(t){var e=t.pipelineContext.large;(null==this._isLargeDraw||e^this._isLargeDraw)&&(this._isLargeDraw=e,this._clear())},_renderNormal:function(t){var e,n=this.group,i=t.getData(),r=this._data,o=t.coordinateSystem,a=o.getBaseAxis();"cartesian2d"===o.type?e=a.isHorizontal():"polar"===o.type&&(e="angle"===a.dim);var s=t.isAnimationEnabled()?t:null;i.diff(r).add(function(r){if(i.hasValue(r)){var a=i.getItemModel(r),l=gw[o.type](i,r,a),u=pw[o.type](i,r,a,l,e,s);i.setItemGraphicEl(r,u),n.add(u),dc(u,i,r,a,l,t,e,"polar"===o.type)}}).update(function(a,l){var u=r.getItemGraphicEl(l);if(i.hasValue(a)){var c=i.getItemModel(a),h=gw[o.type](i,a,c);u?$r(u,{shape:h},s,a):u=pw[o.type](i,a,c,h,e,s,!0),i.setItemGraphicEl(a,u),n.add(u),dc(u,i,a,c,h,t,e,"polar"===o.type)}else n.remove(u)}).remove(function(t){var e=r.getItemGraphicEl(t);"cartesian2d"===o.type?e&&hc(t,s,e):e&&fc(t,s,e)}).execute(),this._data=i},_renderLarge:function(t){this._clear(),gc(t,this.group)},_incrementalRenderLarge:function(t,e){gc(e,this.group,!0)},dispose:H,remove:function(t){this._clear(t)},_clear:function(t){var e=this.group,n=this._data;t&&t.get("animation")&&n&&!this._isLargeDraw?n.eachItemGraphicEl(function(e){"sector"===e.type?fc(e.dataIndex,t,e):hc(e.dataIndex,t,e)}):e.removeAll(),this._data=null}});var pw={cartesian2d:function(t,e,n,i,r,o,a){var s=new zv({shape:u({},i)});if(o){var l=s.shape,c=r?"height":"width",h={};l[c]=0,h[c]=i[c],sm[a?"updateProps":"initProps"](s,{shape:h},o,e)}return s},polar:function(t,e,n,i,r,o,a){var s=i.startAngle<i.endAngle,l=new kv({shape:c({clockwise:s},i)});if(o){var u=l.shape,h=r?"r":"endAngle",f={};u[h]=r?0:i.startAngle,f[h]=i[h],sm[a?"updateProps":"initProps"](l,{shape:f},o,e)}return l}},gw={cartesian2d:function(t,e,n){var i=t.getItemLayout(e),r=pc(n,i),o=i.width>0?1:-1,a=i.height>0?1:-1;return{x:i.x+o*r/2,y:i.y+a*r/2,width:i.width-o*r,height:i.height-a*r}},polar:function(t,e){var n=t.getItemLayout(e);return{cx:n.cx,cy:n.cy,r0:n.r0,r:n.r,startAngle:n.startAngle,endAngle:n.endAngle}}},vw=Wi.extend({type:"largeBar",shape:{points:[]},buildPath:function(t,e){for(var n=e.points,i=this.__startPoint,r=this.__baseDimIdx,o=0;o<n.length;o+=2)i[r]=n[o+r],t.moveTo(i[0],i[1]),t.lineTo(n[o],n[o+1])}}),mw=Qa(function(t){var e=this,n=vc(e,t.offsetX,t.offsetY);e.dataIndex=n>=0?n:null},30,!1),yw=Math.PI,_w=function(t,e){this.opt=e,this.axisModel=t,c(e,{labelOffset:0,nameDirection:1,tickDirection:1,labelDirection:1,silent:!0}),this.group=new hp;var n=new hp({position:e.position.slice(),rotation:e.rotation});n.updateTransform(),this._transform=n.transform,this._dumbGroup=n};_w.prototype={constructor:_w,hasBuilder:function(t){return!!xw[t]},add:function(t){xw[t].call(this)},getGroup:function(){return this.group}};var xw={axisLine:function(){var t=this.opt,e=this.axisModel;if(e.get("axisLine.show")){var n=this.axisModel.axis.getExtent(),i=this._transform,r=[n[0],0],o=[n[1],0];i&&(lt(r,r,i),lt(o,o,i));var a=u({lineCap:"round"},e.getModel("axisLine.lineStyle").getLineStyle());this.group.add(new Fv({anid:"line",subPixelOptimize:!0,shape:{x1:r[0],y1:r[1],x2:o[0],y2:o[1]},style:a,strokeContainThreshold:t.strokeContainThreshold||5,silent:!0,z2:1}));var s=e.get("axisLine.symbol"),l=e.get("axisLine.symbolSize"),c=e.get("axisLine.symbolOffset")||0;if("number"==typeof c&&(c=[c,c]),null!=s){"string"==typeof s&&(s=[s,s]),("string"==typeof l||"number"==typeof l)&&(l=[l,l]);var h=l[0],f=l[1];v([{rotate:t.rotation+Math.PI/2,offset:c[0],r:0},{rotate:t.rotation-Math.PI/2,offset:c[1],r:Math.sqrt((r[0]-o[0])*(r[0]-o[0])+(r[1]-o[1])*(r[1]-o[1]))}],function(e,n){if("none"!==s[n]&&null!=s[n]){var i=Tu(s[n],-h/2,-f/2,h,f,a.stroke,!0),o=e.r+e.offset,l=[r[0]+o*Math.cos(t.rotation),r[1]-o*Math.sin(t.rotation)];i.attr({rotation:e.rotate,position:l,silent:!0,z2:11}),this.group.add(i)}},this)}}},axisTickLabel:function(){var t=this.axisModel,e=this.opt,n=Sc(this,t,e),i=Mc(this,t,e);_c(t,i,n)},axisName:function(){var t=this.opt,e=this.axisModel,n=O(t.axisName,e.get("name"));if(n){var i,r,o=e.get("nameLocation"),a=t.nameDirection,s=e.getModel("nameTextStyle"),l=e.get("nameGap")||0,c=this.axisModel.axis.getExtent(),h=c[0]>c[1]?-1:1,f=["start"===o?c[0]-h*l:"end"===o?c[1]+h*l:(c[0]+c[1])/2,bc(o)?t.labelOffset+a*l:0],d=e.get("nameRotate");null!=d&&(d=d*yw/180),bc(o)?i=bw(t.rotation,null!=d?d:t.rotation,a):(i=yc(t,o,d||0,c),r=t.axisNameAvailableWidth,null!=r&&(r=Math.abs(r/Math.sin(i.rotation)),!isFinite(r)&&(r=null)));var p=s.getFont(),g=e.get("nameTruncate",!0)||{},v=g.ellipsis,m=O(t.nameTruncateMaxWidth,g.maxWidth,r),y=null!=v&&null!=m?Mm(n,m,p,v,{minChar:2,placeholder:g.placeholder}):n,_=e.get("tooltip",!0),x=e.mainType,w={componentType:x,name:n,$vars:["name"]};w[x+"Index"]=e.componentIndex;var b=new Iv({anid:"name",__fullText:n,__truncatedText:y,position:f,rotation:i.rotation,silent:Sw(e),z2:1,tooltip:_&&_.show?u({content:n,formatter:function(){return n},formatterParams:w},_):null});Or(b.style,s,{text:y,textFont:p,textFill:s.getTextColor()||e.get("axisLine.lineStyle.color"),textAlign:s.get("align")||i.textAlign,textVerticalAlign:s.get("verticalAlign")||i.textVerticalAlign}),e.get("triggerEvent")&&(b.eventData=ww(e),b.eventData.targetType="axisName",b.eventData.name=n),this._dumbGroup.add(b),b.updateTransform(),this.group.add(b),b.decomposeTransform()}}},ww=_w.makeAxisEventDataBase=function(t){var e={componentType:t.mainType,componentIndex:t.componentIndex};return e[t.mainType+"Index"]=t.componentIndex,e},bw=_w.innerTextLayout=function(t,e,n){var i,r,o=ho(e-t);return fo(o)?(r=n>0?"top":"bottom",i="center"):fo(o-yw)?(r=n>0?"bottom":"top",i="center"):(r="middle",i=o>0&&yw>o?n>0?"right":"left":n>0?"left":"right"),{rotation:o,textAlign:i,textVerticalAlign:r}},Sw=_w.isLabelSilent=function(t){var e=t.get("tooltip");return t.get("silent")||!(t.get("triggerEvent")||e&&e.show)},Mw=v,Iw=b,Aw=pl({type:"axis",_axisPointer:null,axisPointerClass:null,render:function(t,e,n,i){this.axisPointerClass&&Oc(t),Aw.superApply(this,"render",arguments),Bc(this,t,e,n,i,!0)},updateAxisPointer:function(t,e,n,i){Bc(this,t,e,n,i,!1)},remove:function(t,e){var n=this._axisPointer;n&&n.remove(e),Aw.superApply(this,"remove",arguments)},dispose:function(t,e){zc(this,e),Aw.superApply(this,"dispose",arguments)}}),Tw=[];Aw.registerAxisPointerClass=function(t,e){Tw[t]=e},Aw.getAxisPointerClass=function(t){return t&&Tw[t]};var Cw=["axisLine","axisTickLabel","axisName"],kw=["splitArea","splitLine"],Dw=Aw.extend({type:"cartesianAxis",axisPointerClass:"CartesianAxisPointer",render:function(t,e,n,i){this.group.removeAll();var r=this._axisGroup;if(this._axisGroup=new hp,this.group.add(this._axisGroup),t.get("show")){var o=t.getCoordSysModel(),a=Rc(o,t),s=new _w(t,a);v(Cw,s.add,s),this._axisGroup.add(s.getGroup()),v(kw,function(e){t.get(e+".show")&&this["_"+e](t,o)},this),Ur(r,this._axisGroup,t),Dw.superCall(this,"render",t,e,n,i)}},remove:function(){this._splitAreaColors=null},_splitLine:function(t,e){var n=t.axis;if(!n.scale.isBlank()){var i=t.getModel("splitLine"),r=i.getModel("lineStyle"),o=r.get("color");o=S(o)?o:[o];for(var a=e.coordinateSystem.getRect(),s=n.isHorizontal(),l=0,u=n.getTicksCoords({tickModel:i}),h=[],f=[],d=r.getLineStyle(),p=0;p<u.length;p++){var g=n.toGlobalCoord(u[p].coord);s?(h[0]=g,h[1]=a.y,f[0]=g,f[1]=a.y+a.height):(h[0]=a.x,h[1]=g,f[0]=a.x+a.width,f[1]=g);var v=l++%o.length,m=u[p].tickValue;this._axisGroup.add(new Fv({anid:null!=m?"line_"+u[p].tickValue:null,subPixelOptimize:!0,shape:{x1:h[0],y1:h[1],x2:f[0],y2:f[1]},style:c({stroke:o[v]},d),silent:!0}))}}},_splitArea:function(t,e){var n=t.axis;if(!n.scale.isBlank()){var i=t.getModel("splitArea"),r=i.getModel("areaStyle"),o=r.get("color"),a=e.coordinateSystem.getRect(),s=n.getTicksCoords({tickModel:i,clamp:!0});if(s.length){var l=o.length,u=this._splitAreaColors,h=$(),f=0;if(u)for(var d=0;d<s.length;d++){var p=u.get(s[d].tickValue);if(null!=p){f=(p+(l-1)*d)%l;break}}var g=n.toGlobalCoord(s[0].coord),v=r.getAreaStyle();o=S(o)?o:[o];for(d=1;d<s.length;d++){var m,y,_,x,w=n.toGlobalCoord(s[d].coord);n.isHorizontal()?(m=g,y=a.y,_=w-m,x=a.height,g=m+_):(m=a.x,y=g,_=a.width,x=w-y,g=y+x);var b=s[d-1].tickValue;null!=b&&h.set(b,f),this._axisGroup.add(new zv({anid:null!=b?"area_"+b:null,shape:{x:m,y:y,width:_,height:x},style:c({fill:o[f]},v),silent:!0})),f=(f+1)%l}this._splitAreaColors=h}}}});Dw.extend({type:"xAxis"}),Dw.extend({type:"yAxis"}),pl({type:"grid",render:function(t){this.group.removeAll(),t.get("show")&&this.group.add(new zv({shape:t.coordinateSystem.getRect(),style:c({fill:t.get("backgroundColor")},t.getItemStyle()),silent:!0,z2:-1}))}}),il(function(t){t.xAxis&&t.yAxis&&!t.grid&&(t.grid={})}),ul(w_.VISUAL.LAYOUT,b(cu,"bar")),ul(w_.VISUAL.PROGRESSIVE_LAYOUT,dx),cl({seriesType:"bar",reset:function(t){t.getData().setVisual("legendSymbol","roundRect")}}),_y.extend({type:"series.line",dependencies:["grid","polar"],getInitialData:function(){return Ul(this.getSource(),this)},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,hoverAnimation:!0,clipOverflow:!0,label:{position:"top"},lineStyle:{width:2,type:"solid"},step:!1,smooth:!1,smoothMonotone:null,symbol:"emptyCircle",symbolSize:4,symbolRotate:null,showSymbol:!0,showAllSymbol:"auto",connectNulls:!1,sampling:"none",animationEasing:"linear",progressive:0,hoverLayerThreshold:1/0}});var Ow=Fc.prototype,Pw=Fc.getSymbolSize=function(t,e){var n=t.getItemVisual(e,"symbolSize");return n instanceof Array?n.slice():[+n,+n]};Ow._createSymbol=function(t,e,n,i,r){this.removeAll();var o=e.getItemVisual(n,"color"),a=Tu(t,-1,-1,2,2,o,r);a.attr({z2:100,culling:!0,scale:Vc(i)}),a.drift=$c,this._symbolType=t,this.add(a)},Ow.stopSymbolAnimation=function(t){this.childAt(0).stopAnimation(t)},Ow.getSymbolPath=function(){return this.childAt(0)},Ow.getScale=function(){return this.childAt(0).scale},Ow.highlight=function(){this.childAt(0).trigger("emphasis")},Ow.downplay=function(){this.childAt(0).trigger("normal")},Ow.setZ=function(t,e){var n=this.childAt(0);n.zlevel=t,n.z=e},Ow.setDraggable=function(t){var e=this.childAt(0);e.draggable=t,e.cursor=t?"move":e.cursor},Ow.updateData=function(t,e,n){this.silent=!1;var i=t.getItemVisual(e,"symbol")||"circle",r=t.hostModel,o=Pw(t,e),a=i!==this._symbolType;if(a){var s=t.getItemVisual(e,"symbolKeepAspect");this._createSymbol(i,t,e,o,s)}else{var l=this.childAt(0);l.silent=!1,$r(l,{scale:Vc(o)},r,e)}if(this._updateCommon(t,e,o,n),a){l=this.childAt(0);var u=n&&n.fadeIn,c={scale:l.scale.slice()};u&&(c.style={opacity:l.style.opacity}),l.scale=[0,0],u&&(l.style.opacity=0),jr(l,c,r,e)}this._seriesModel=r};var Lw=["itemStyle"],Ew=["emphasis","itemStyle"],Nw=["label"],Bw=["emphasis","label"];Ow._updateCommon=function(t,e,n,i){function r(e){return b?t.getName(e):lc(t,e)}var o=this.childAt(0),a=t.hostModel,s=t.getItemVisual(e,"color");"image"!==o.type&&o.useStyle({strokeNoScale:!0});var l=i&&i.itemStyle,c=i&&i.hoverItemStyle,h=i&&i.symbolRotate,f=i&&i.symbolOffset,d=i&&i.labelModel,p=i&&i.hoverLabelModel,g=i&&i.hoverAnimation,v=i&&i.cursorStyle;if(!i||t.hasItemOption){var m=i&&i.itemModel?i.itemModel:t.getItemModel(e);l=m.getModel(Lw).getItemStyle(["color"]),c=m.getModel(Ew).getItemStyle(),h=m.getShallow("symbolRotate"),f=m.getShallow("symbolOffset"),d=m.getModel(Nw),p=m.getModel(Bw),g=m.getShallow("hoverAnimation"),v=m.getShallow("cursor")}else c=u({},c);var y=o.style;o.attr("rotation",(h||0)*Math.PI/180||0),f&&o.attr("position",[ro(f[0],n[0]),ro(f[1],n[1])]),v&&o.attr("cursor",v),o.setColor(s,i&&i.symbolInnerColor),o.setStyle(l);var _=t.getItemVisual(e,"opacity");null!=_&&(y.opacity=_);var x=t.getItemVisual(e,"liftZ"),w=o.__z2Origin;null!=x?null==w&&(o.__z2Origin=o.z2,o.z2+=x):null!=w&&(o.z2=w,o.__z2Origin=null);var b=i&&i.useNameLabel;kr(y,c,d,p,{labelFetcher:a,labelDataIndex:e,defaultText:r,isRectText:!0,autoColor:s}),o.__symbolOriginalScale=Vc(n),o.hoverStyle=c,o.highDownOnUpdate=g&&a.isAnimationEnabled()?jc:null,Ir(o)},Ow.fadeOut=function(t,e){var n=this.childAt(0);this.silent=n.silent=!0,!(e&&e.keepLabel)&&(n.style.text=null),$r(n,{style:{opacity:0},scale:[0,0]},this._seriesModel,this.dataIndex,t)},d(Fc,hp);var zw=Hc.prototype;zw.updateData=function(t,e){e=Gc(e);var n=this.group,i=t.hostModel,r=this._data,o=this._symbolCtor,a=Uc(t);r||n.removeAll(),t.diff(r).add(function(i){var r=t.getItemLayout(i);if(Wc(t,r,i,e)){var s=new o(t,i,a);s.attr("position",r),t.setItemGraphicEl(i,s),n.add(s)}}).update(function(s,l){var u=r.getItemGraphicEl(l),c=t.getItemLayout(s);return Wc(t,c,s,e)?(u?(u.updateData(t,s,a),$r(u,{position:c},i)):(u=new o(t,s),u.attr("position",c)),n.add(u),void t.setItemGraphicEl(s,u)):void n.remove(u)}).remove(function(t){var e=r.getItemGraphicEl(t);e&&e.fadeOut(function(){n.remove(e)})}).execute(),this._data=t},zw.isPersistent=function(){return!0},zw.updateLayout=function(){var t=this._data;t&&t.eachItemGraphicEl(function(e,n){var i=t.getItemLayout(n);e.attr("position",i)})},zw.incrementalPrepareUpdate=function(t){this._seriesScope=Uc(t),this._data=null,this.group.removeAll()},zw.incrementalUpdate=function(t,e,n){function i(t){t.isGroup||(t.incremental=t.useHoverLayer=!0)}n=Gc(n);for(var r=t.start;r<t.end;r++){var o=e.getItemLayout(r);if(Wc(e,o,r,n)){var a=new this._symbolCtor(e,r,this._seriesScope);a.traverse(i),a.attr("position",o),this.group.add(a),e.setItemGraphicEl(r,a)}}},zw.remove=function(t){var e=this.group,n=this._data;n&&t?n.eachItemGraphicEl(function(t){t.fadeOut(function(){e.remove(t)})}):e.removeAll()};var Rw=function(t,e,n,i,r,o,a,s){for(var l=qc(t,e),u=[],c=[],h=[],f=[],d=[],p=[],g=[],v=Zc(r,e,a),m=Zc(o,t,s),y=0;y<l.length;y++){var _=l[y],x=!0;switch(_.cmd){case"=":var w=t.getItemLayout(_.idx),b=e.getItemLayout(_.idx1);(isNaN(w[0])||isNaN(w[1]))&&(w=b.slice()),u.push(w),c.push(b),h.push(n[_.idx]),f.push(i[_.idx1]),g.push(e.getRawIndex(_.idx1));break;case"+":var S=_.idx;u.push(r.dataToPoint([e.get(v.dataDimsForPoint[0],S),e.get(v.dataDimsForPoint[1],S)])),c.push(e.getItemLayout(S).slice()),h.push(Yc(v,r,e,S)),f.push(i[S]),g.push(e.getRawIndex(S));break;case"-":S=_.idx;var M=t.getRawIndex(S);M!==S?(u.push(t.getItemLayout(S)),c.push(o.dataToPoint([t.get(m.dataDimsForPoint[0],S),t.get(m.dataDimsForPoint[1],S)])),h.push(n[S]),f.push(Yc(m,o,t,S)),g.push(M)):x=!1}x&&(d.push(_),p.push(p.length))}p.sort(function(t,e){return g[t]-g[e]});var I=[],A=[],T=[],C=[],k=[];for(y=0;y<p.length;y++){S=p[y];I[y]=u[S],A[y]=c[S],T[y]=h[S],C[y]=f[S],k[y]=d[S]}return{current:I,next:A,stackedOnCurrent:T,stackedOnNext:C,status:k}},Fw=ut,Vw=ct,$w=Y,jw=G,Hw=[],Ww=[],Gw=[],Uw=Wi.extend({type:"ec-polyline",shape:{points:[],smooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},style:{fill:null,stroke:"#000"},brush:Cv(Wi.prototype.brush),buildPath:function(t,e){var n=e.points,i=0,r=n.length,o=eh(n,e.smoothConstraint);if(e.connectNulls){for(;r>0&&Kc(n[r-1]);r--);for(;r>i&&Kc(n[i]);i++);}for(;r>i;)i+=Jc(t,n,i,r,r,1,o.min,o.max,e.smooth,e.smoothMonotone,e.connectNulls)+1}}),Zw=Wi.extend({type:"ec-polygon",shape:{points:[],stackedOnPoints:[],smooth:0,stackedOnSmooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},brush:Cv(Wi.prototype.brush),buildPath:function(t,e){var n=e.points,i=e.stackedOnPoints,r=0,o=n.length,a=e.smoothMonotone,s=eh(n,e.smoothConstraint),l=eh(i,e.smoothConstraint);if(e.connectNulls){for(;o>0&&Kc(n[o-1]);o--);for(;o>r&&Kc(n[r]);r++);}for(;o>r;){var u=Jc(t,n,r,o,o,1,s.min,s.max,e.smooth,a,e.connectNulls);Jc(t,i,r+u-1,u,o,-1,l.min,l.max,e.stackedOnSmooth,a,e.connectNulls),r+=u+1,t.closePath()}}});Xa.extend({type:"line",init:function(){var t=new hp,e=new Hc;this.group.add(e.group),this._symbolDraw=e,this._lineGroup=t},render:function(t,e,n){var i=t.coordinateSystem,r=this.group,o=t.getData(),a=t.getModel("lineStyle"),s=t.getModel("areaStyle"),l=o.mapArray(o.getItemLayout),u="polar"===i.type,h=this._coordSys,f=this._symbolDraw,d=this._polyline,p=this._polygon,g=this._lineGroup,v=t.get("animation"),m=!s.isEmpty(),y=s.get("origin"),_=Zc(i,o,y),x=oh(i,o,_),w=t.get("showSymbol"),b=w&&!u&&hh(t,o,i),S=this._data;S&&S.eachItemGraphicEl(function(t,e){t.__temp&&(r.remove(t),S.setItemGraphicEl(e,null))}),w||f.remove(),r.add(g);var M=!u&&t.get("step");d&&h.type===i.type&&M===this._step?(m&&!p?p=this._newPolygon(l,x,i,v):p&&!m&&(g.remove(p),p=this._polygon=null),g.setClipPath(lh(i,!1,!1,t)),w&&f.updateData(o,{isIgnore:b,clipShape:lh(i,!1,!0,t)}),o.eachItemGraphicEl(function(t){t.stopAnimation(!0)}),nh(this._stackedOnPoints,x)&&nh(this._points,l)||(v?this._updateAnimation(o,x,i,n,M,y):(M&&(l=uh(l,i,M),x=uh(x,i,M)),d.setShape({points:l}),p&&p.setShape({points:l,stackedOnPoints:x})))):(w&&f.updateData(o,{isIgnore:b,clipShape:lh(i,!1,!0,t)}),M&&(l=uh(l,i,M),x=uh(x,i,M)),d=this._newPolyline(l,i,v),m&&(p=this._newPolygon(l,x,i,v)),g.setClipPath(lh(i,!0,!1,t)));var I=ch(o,i)||o.getVisual("color");d.useStyle(c(a.getLineStyle(),{fill:"none",stroke:I,lineJoin:"bevel"}));var A=t.get("smooth");if(A=ih(t.get("smooth")),d.setShape({smooth:A,smoothMonotone:t.get("smoothMonotone"),connectNulls:t.get("connectNulls")}),p){var T=o.getCalculationInfo("stackedOnSeries"),C=0;p.useStyle(c(s.getAreaStyle(),{fill:I,opacity:.7,lineJoin:"bevel"})),T&&(C=ih(T.get("smooth"))),p.setShape({smooth:A,stackedOnSmooth:C,smoothMonotone:t.get("smoothMonotone"),connectNulls:t.get("connectNulls")})}this._data=o,this._coordSys=i,this._stackedOnPoints=x,this._points=l,this._step=M,this._valueOrigin=y},dispose:function(){},highlight:function(t,e,n,i){var r=t.getData(),o=Kn(r,i);if(!(o instanceof Array)&&null!=o&&o>=0){var a=r.getItemGraphicEl(o);if(!a){var s=r.getItemLayout(o);if(!s)return;a=new Fc(r,o),a.position=s,a.setZ(t.get("zlevel"),t.get("z")),a.ignore=isNaN(s[0])||isNaN(s[1]),a.__temp=!0,r.setItemGraphicEl(o,a),a.stopSymbolAnimation(!0),this.group.add(a)}a.highlight()}else Xa.prototype.highlight.call(this,t,e,n,i)},downplay:function(t,e,n,i){var r=t.getData(),o=Kn(r,i);if(null!=o&&o>=0){var a=r.getItemGraphicEl(o);a&&(a.__temp?(r.setItemGraphicEl(o,null),this.group.remove(a)):a.downplay())}else Xa.prototype.downplay.call(this,t,e,n,i)},_newPolyline:function(t){var e=this._polyline;return e&&this._lineGroup.remove(e),e=new Uw({shape:{points:t},silent:!0,z2:10}),this._lineGroup.add(e),this._polyline=e,e},_newPolygon:function(t,e){var n=this._polygon;return n&&this._lineGroup.remove(n),n=new Zw({shape:{points:t,stackedOnPoints:e},silent:!0}),this._lineGroup.add(n),this._polygon=n,n},_updateAnimation:function(t,e,n,i,r,o){var a=this._polyline,s=this._polygon,l=t.hostModel,u=Rw(this._data,t,this._stackedOnPoints,e,this._coordSys,n,this._valueOrigin,o),c=u.current,h=u.stackedOnCurrent,f=u.next,d=u.stackedOnNext;r&&(c=uh(u.current,n,r),h=uh(u.stackedOnCurrent,n,r),f=uh(u.next,n,r),d=uh(u.stackedOnNext,n,r)),a.shape.__points=u.current,a.shape.points=c,$r(a,{shape:{points:f}},l),s&&(s.setShape({points:c,stackedOnPoints:h}),$r(s,{shape:{points:f,stackedOnPoints:d}},l));for(var p=[],g=u.status,v=0;v<g.length;v++){var m=g[v].cmd;if("="===m){var y=t.getItemGraphicEl(g[v].idx1);y&&p.push({el:y,ptIdx:v})}}a.animators&&a.animators.length&&a.animators[0].during(function(){for(var t=0;t<p.length;t++){var e=p[t].el;e.attr("position",a.shape.__points[p[t].ptIdx])}})},remove:function(){var t=this.group,e=this._data;this._lineGroup.removeAll(),this._symbolDraw.remove(!0),e&&e.eachItemGraphicEl(function(n,i){n.__temp&&(t.remove(n),e.setItemGraphicEl(i,null))}),this._polyline=this._polygon=this._coordSys=this._points=this._stackedOnPoints=this._data=null}});var Xw=function(t,e,n){return{seriesType:t,performRawSeries:!0,reset:function(t,i){function r(e,n){if(h){var i=t.getRawValue(n),r=t.getDataParams(n);u&&e.setItemVisual(n,"symbol",a(i,r)),c&&e.setItemVisual(n,"symbolSize",s(i,r))}if(e.hasItemOption){var o=e.getItemModel(n),l=o.getShallow("symbol",!0),f=o.getShallow("symbolSize",!0),d=o.getShallow("symbolKeepAspect",!0);null!=l&&e.setItemVisual(n,"symbol",l),null!=f&&e.setItemVisual(n,"symbolSize",f),null!=d&&e.setItemVisual(n,"symbolKeepAspect",d)}}var o=t.getData(),a=t.get("symbol"),s=t.get("symbolSize"),l=t.get("symbolKeepAspect"),u=M(a),c=M(s),h=u||c,f=!u&&a?a:e,d=c?null:s;return o.setVisual({legendSymbol:n||f,symbol:f,symbolSize:d,symbolKeepAspect:l}),i.isSeriesFiltered(t)?void 0:{dataEach:o.hasItemOption||h?r:null}}}},Yw=function(t){return{seriesType:t,plan:by(),reset:function(t){function e(t,e){for(var n=t.end-t.start,r=o&&new Float32Array(n*s),l=t.start,u=0,c=[],h=[];l<t.end;l++){var f;if(1===s){var d=e.get(a[0],l);f=!isNaN(d)&&i.dataToPoint(d,null,h)}else{d=c[0]=e.get(a[0],l);var p=c[1]=e.get(a[1],l);f=!isNaN(d)&&!isNaN(p)&&i.dataToPoint(c,null,h)}o?(r[u++]=f?f[0]:NaN,r[u++]=f?f[1]:NaN):e.setItemLayout(l,f&&f.slice()||[NaN,NaN])}o&&e.setLayout("symbolPoints",r)}var n=t.getData(),i=t.coordinateSystem,r=t.pipelineContext,o=r.large;if(i){var a=m(i.dimensions,function(t){return n.mapDimension(t)}).slice(0,2),s=a.length,l=n.getCalculationInfo("stackResultDimension");return Wl(n,a[0])&&(a[0]=l),Wl(n,a[1])&&(a[1]=l),s&&{progress:e}}}}},qw={average:function(t){for(var e=0,n=0,i=0;i<t.length;i++)isNaN(t[i])||(e+=t[i],n++);return 0===n?NaN:e/n},sum:function(t){for(var e=0,n=0;n<t.length;n++)e+=t[n]||0;return e},max:function(t){for(var e=-1/0,n=0;n<t.length;n++)t[n]>e&&(e=t[n]);return isFinite(e)?e:NaN},min:function(t){for(var e=1/0,n=0;n<t.length;n++)t[n]<e&&(e=t[n]);return isFinite(e)?e:NaN},nearest:function(t){return t[0]}},Kw=function(t){return Math.round(t.length/2)},Jw=function(t){return{seriesType:t,modifyOutputEnd:!0,reset:function(t){var e=t.getData(),n=t.get("sampling"),i=t.coordinateSystem;if("cartesian2d"===i.type&&n){var r,o=i.getBaseAxis(),a=i.getOtherAxis(o),s=o.getExtent(),l=s[1]-s[0],u=Math.round(e.count()/l);if(u>1)"string"==typeof n?r=qw[n]:"function"==typeof n&&(r=n),r&&t.setData(e.downSample(e.mapDimension(a.dim),1/u,r,Kw))}}}};cl(Xw("line","circle","line")),ul(Yw("line")),rl(w_.PROCESSOR.STATISTIC,Jw("line"));var Qw=function(t,e,n){e=S(e)&&{coordDimensions:e}||u({},e);var i=t.getSource(),r=ix(i,e),o=new tx(r,t);return o.initData(i,n),o},tb={updateSelectedMap:function(t){this._targetList=S(t)?t.slice():[],this._selectTargetMap=y(t||[],function(t,e){return t.set(e.name,e),t},$())},select:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t),i=this.get("selectedMode");"single"===i&&this._selectTargetMap.each(function(t){t.selected=!1}),n&&(n.selected=!0)},unSelect:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);n&&(n.selected=!1)},toggleSelected:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);return null!=n?(this[n.selected?"unSelect":"select"](t,e),n.selected):void 0},isSelected:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);return n&&n.selected}},eb=gl({type:"series.pie",init:function(t){eb.superApply(this,"init",arguments),this.legendDataProvider=function(){return this.getRawData()},this.updateSelectedMap(this._createSelectableList()),this._defaultLabelLine(t)},mergeOption:function(t){eb.superCall(this,"mergeOption",t),this.updateSelectedMap(this._createSelectableList())},getInitialData:function(){return Qw(this,["value"])},_createSelectableList:function(){for(var t=this.getRawData(),e=t.mapDimension("value"),n=[],i=0,r=t.count();r>i;i++)n.push({name:t.getName(i),value:t.get(e,i),selected:Na(t,i,"selected")});return n},getDataParams:function(t){var e=this.getData(),n=eb.superCall(this,"getDataParams",t),i=[];return e.each(e.mapDimension("value"),function(t){i.push(t)}),n.percent=co(i,t,e.hostModel.get("percentPrecision")),n.$vars.push("percent"),n},_defaultLabelLine:function(t){Wn(t,"labelLine",["show"]);var e=t.labelLine,n=t.emphasis.labelLine;e.show=e.show&&t.label.show,n.show=n.show&&t.emphasis.label.show},defaultOption:{zlevel:0,z:2,legendHoverLink:!0,hoverAnimation:!0,center:["50%","50%"],radius:[0,"75%"],clockwise:!0,startAngle:90,minAngle:0,minShowLabelAngle:0,selectedOffset:10,hoverOffset:10,avoidLabelOverlap:!0,percentPrecision:2,stillShowZeroSum:!0,label:{rotate:!1,show:!0,position:"outer"},labelLine:{show:!0,length:15,length2:15,smooth:!1,lineStyle:{width:1,type:"solid"}},itemStyle:{borderWidth:1},animationType:"expansion",animationEasing:"cubicOut"}});p(eb,tb);var nb=gh.prototype;nb.updateData=function(t,e,n){var i=this.childAt(0),r=this.childAt(1),o=this.childAt(2),a=t.hostModel,s=t.getItemModel(e),l=t.getItemLayout(e),h=u({},l);if(h.label=null,n){i.setShape(h);var f=a.getShallow("animationType");"scale"===f?(i.shape.r=l.r0,jr(i,{shape:{r:l.r}},a,e)):(i.shape.endAngle=l.startAngle,$r(i,{shape:{endAngle:l.endAngle}},a,e))}else $r(i,{shape:h},a,e);var d=t.getItemVisual(e,"color");i.useStyle(c({lineJoin:"bevel",fill:d},s.getModel("itemStyle").getItemStyle())),i.hoverStyle=s.getModel("emphasis.itemStyle").getItemStyle();var p=s.getShallow("cursor");p&&i.attr("cursor",p),ph(this,t.getItemLayout(e),a.isSelected(null,e),a.get("selectedOffset"),a.get("animation")),this._updateLabel(t,e),this.highDownOnUpdate=s.get("hoverAnimation")&&a.isAnimationEnabled()?function(t,e){"emphasis"===e?(r.ignore=r.hoverIgnore,o.ignore=o.hoverIgnore,i.stopAnimation(!0),i.animateTo({shape:{r:l.r+a.get("hoverOffset")}},300,"elasticOut")):(r.ignore=r.normalIgnore,o.ignore=o.normalIgnore,i.stopAnimation(!0),i.animateTo({shape:{r:l.r}},300,"elasticOut"))}:null,Ir(this)},nb._updateLabel=function(t,e){var n=this.childAt(1),i=this.childAt(2),r=t.hostModel,o=t.getItemModel(e),a=t.getItemLayout(e),s=a.label,l=t.getItemVisual(e,"color");if(!s||isNaN(s.x)||isNaN(s.y))i.ignore=i.normalIgnore=i.hoverIgnore=n.ignore=n.normalIgnore=n.hoverIgnore=!0;else{$r(n,{shape:{points:s.linePoints||[[s.x,s.y],[s.x,s.y],[s.x,s.y]]}},r,e),$r(i,{style:{x:s.x,y:s.y}},r,e),i.attr({rotation:s.rotation,origin:[s.x,s.y],z2:10});var u=o.getModel("label"),c=o.getModel("emphasis.label"),h=o.getModel("labelLine"),f=o.getModel("emphasis.labelLine");l=t.getItemVisual(e,"color");kr(i.style,i.hoverStyle={},u,c,{labelFetcher:t.hostModel,labelDataIndex:e,defaultText:t.getName(e),autoColor:l,useInsideStyle:!!s.inside},{textAlign:s.textAlign,textVerticalAlign:s.verticalAlign,opacity:t.getItemVisual(e,"opacity")}),i.ignore=i.normalIgnore=!u.get("show"),i.hoverIgnore=!c.get("show"),n.ignore=n.normalIgnore=!h.get("show"),n.hoverIgnore=!f.get("show"),n.setStyle({stroke:l,opacity:t.getItemVisual(e,"opacity")}),n.setStyle(h.getModel("lineStyle").getLineStyle()),n.hoverStyle=f.getModel("lineStyle").getLineStyle();var d=h.get("smooth");d&&!0===d&&(d=.4),n.setShape({smooth:d})}},d(gh,hp);var ib=(Xa.extend({type:"pie",init:function(){var t=new hp;this._sectorGroup=t},render:function(t,e,n,i){if(!i||i.from!==this.uid){var r=t.getData(),o=this._data,a=this.group,s=e.get("animation"),l=!o,u=t.get("animationType"),c=b(dh,this.uid,t,s,n),h=t.get("selectedMode");if(r.diff(o).add(function(t){var e=new gh(r,t);l&&"scale"!==u&&e.eachChild(function(t){t.stopAnimation(!0)}),h&&e.on("click",c),r.setItemGraphicEl(t,e),a.add(e)}).update(function(t,e){var n=o.getItemGraphicEl(e);n.updateData(r,t),n.off("click"),h&&n.on("click",c),a.add(n),r.setItemGraphicEl(t,n)}).remove(function(t){var e=o.getItemGraphicEl(t);a.remove(e)}).execute(),s&&l&&r.count()>0&&"scale"!==u){for(var f=r.getItemLayout(0),d=1;isNaN(f.startAngle)&&d<r.count();++d)f=r.getItemLayout(d);var p=Math.max(n.getWidth(),n.getHeight())/2,g=w(a.removeClipPath,a);a.setClipPath(this._createClipPath(f.cx,f.cy,p,f.startAngle,f.clockwise,g,t))}else a.removeClipPath();this._data=r}},dispose:function(){},_createClipPath:function(t,e,n,i,r,o,a){var s=new kv({shape:{cx:t,cy:e,r0:0,r:n,startAngle:i,endAngle:i,clockwise:r}});return jr(s,{shape:{endAngle:i+(r?1:-1)*Math.PI*2}},a,o),s},containPoint:function(t,e){var n=e.getData(),i=n.getItemLayout(0);if(i){var r=t[0]-i.cx,o=t[1]-i.cy,a=Math.sqrt(r*r+o*o);return a<=i.r&&a>=i.r0}}}),function(t,e){v(e,function(e){e.update="updateView",al(e,function(n,i){var r={};return i.eachComponent({mainType:"series",subType:t,query:n},function(t){t[e.method]&&t[e.method](n.name,n.dataIndex);var i=t.getData();i.each(function(e){var n=i.getName(e);r[n]=t.isSelected(n)||!1})}),{name:n.name,selected:r,seriesId:n.seriesId}})})}),rb=function(t){return{getTargetSeries:function(e){var n={},i=$();return e.eachSeriesByType(t,function(t){t.__paletteScope=n,i.set(t.uid,t)}),i},reset:function(t){var e=t.getRawData(),n={},i=t.getData();i.each(function(t){var e=i.getRawIndex(t);n[e]=t}),e.each(function(r){var o=n[r],a=null!=o&&i.getItemVisual(o,"color",!0);if(a)e.setItemVisual(r,"color",a);else{var s=e.getItemModel(r),l=s.get("itemStyle.color")||t.getColorFromPalette(e.getName(r)||r+"",t.__paletteScope,e.count());e.setItemVisual(r,"color",l),null!=o&&i.setItemVisual(o,"color",l)}})}}},ob=Math.PI/180,ab=function(t,e,n,i){var r,o,a=t.getData(),s=[],l=!1,u=(t.get("minShowLabelAngle")||0)*ob;a.each(function(n){var i=a.getItemLayout(n),c=a.getItemModel(n),h=c.getModel("label"),f=h.get("position")||c.get("emphasis.label.position"),d=c.getModel("labelLine"),p=d.get("length"),g=d.get("length2");if(!(i.angle<u)){var v,m,y,_,x=(i.startAngle+i.endAngle)/2,w=Math.cos(x),b=Math.sin(x);r=i.cx,o=i.cy;var S="inside"===f||"inner"===f;if("center"===f)v=i.cx,m=i.cy,_="center";else{var M=(S?(i.r+i.r0)/2*w:i.r*w)+r,I=(S?(i.r+i.r0)/2*b:i.r*b)+o;if(v=M+3*w,m=I+3*b,!S){var A=M+w*(p+e-i.r),T=I+b*(p+e-i.r),C=A+(0>w?-1:1)*g,k=T;v=C+(0>w?-5:5),m=k,y=[[M,I],[A,T],[C,k]]}_=S?"center":w>0?"left":"right"}var D,O=h.getFont(),P=h.get("rotate");D="number"==typeof P?P*(Math.PI/180):P?0>w?-x+Math.PI:-x:0;var L=t.getFormattedLabel(n,"normal")||a.getName(n),E=He(L,O,_,"top");l=!!D,i.label={x:v,y:m,position:f,height:E.height,len:p,len2:g,linePoints:y,textAlign:_,verticalAlign:"middle",rotation:D,inside:S},S||s.push(i.label)}}),!l&&t.get("avoidLabelOverlap")&&mh(s,r,o,e,n,i)},sb=2*Math.PI,lb=Math.PI/180,ub=function(t,e,n){e.eachSeriesByType(t,function(t){var e=t.getData(),i=e.mapDimension("value"),r=t.get("center"),o=t.get("radius");S(o)||(o=[0,o]),S(r)||(r=[r,r]);var a=n.getWidth(),s=n.getHeight(),l=Math.min(a,s),u=ro(r[0],a),c=ro(r[1],s),h=ro(o[0],l/2),f=ro(o[1],l/2),d=-t.get("startAngle")*lb,p=t.get("minAngle")*lb,g=0;e.each(i,function(t){!isNaN(t)&&g++});var v=e.getSum(i),m=Math.PI/(v||g)*2,y=t.get("clockwise"),_=t.get("roseType"),x=t.get("stillShowZeroSum"),w=e.getDataExtent(i);w[0]=0;var b=sb,M=0,I=d,A=y?1:-1;if(e.each(i,function(t,n){var i;if(isNaN(t))e.setItemLayout(n,{angle:NaN,startAngle:NaN,endAngle:NaN,clockwise:y,cx:u,cy:c,r0:h,r:_?NaN:f});else{i="area"!==_?0===v&&x?m:t*m:sb/g,p>i?(i=p,b-=p):M+=t;var r=I+A*i;e.setItemLayout(n,{angle:i,startAngle:I,endAngle:r,clockwise:y,cx:u,cy:c,r0:h,r:_?io(t,w,[h,f]):f}),I=r}}),sb>b&&g)if(.001>=b){var T=sb/g;e.each(i,function(t,n){if(!isNaN(t)){var i=e.getItemLayout(n);i.angle=T,i.startAngle=d+A*n*T,i.endAngle=d+A*(n+1)*T}})}else m=b/M,I=d,e.each(i,function(t,n){if(!isNaN(t)){var i=e.getItemLayout(n),r=i.angle===p?p:t*m;i.startAngle=I,i.endAngle=I+A*r,I+=A*r}});ab(t,f,a,s)})},cb=function(t){return{seriesType:t,reset:function(t,e){var n=e.findComponents({mainType:"legend"});if(n&&n.length){var i=t.getData();i.filterSelf(function(t){for(var e=i.getName(t),r=0;r<n.length;r++)if(!n[r].isSelected(e))return!1;return!0})}}}};ib("pie",[{type:"pieToggleSelect",event:"pieselectchanged",method:"toggleSelected"},{type:"pieSelect",event:"pieselected",method:"select"},{type:"pieUnSelect",event:"pieunselected",method:"unSelect"}]),cl(rb("pie")),ul(b(ub,"pie")),rl(cb("pie")),dl({type:"title",layoutMode:{type:"box",ignoreSize:!0},defaultOption:{zlevel:0,z:6,show:!0,text:"",target:"blank",subtext:"",subtarget:"blank",left:0,top:0,backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderWidth:0,padding:5,itemGap:10,textStyle:{fontSize:18,fontWeight:"bolder",color:"#333"},subtextStyle:{color:"#aaa"}}}),pl({type:"title",render:function(t,e,i){if(this.group.removeAll(),t.get("show")){var r=this.group,o=t.getModel("textStyle"),a=t.getModel("subtextStyle"),s=t.get("textAlign"),l=P(t.get("textBaseline"),t.get("textVerticalAlign")),u=new Iv({style:Or({},o,{text:t.get("text"),textFill:o.getTextColor()},{disableBox:!0}),z2:10}),c=u.getBoundingRect(),h=t.get("subtext"),f=new Iv({style:Or({},a,{text:h,textFill:a.getTextColor(),y:c.height+t.get("itemGap"),textVerticalAlign:"top"},{disableBox:!0}),z2:10}),d=t.get("link"),p=t.get("sublink"),g=t.get("triggerEvent",!0);u.silent=!d&&!g,f.silent=!p&&!g,d&&u.on("click",function(){n.open(d,"_"+t.get("target"))}),p&&f.on("click",function(){n.open(p,"_"+t.get("subtarget"))}),u.eventData=f.eventData=g?{componentType:"title",componentIndex:t.componentIndex}:null,r.add(u),h&&r.add(f);var v=r.getBoundingRect(),m=t.getBoxLayoutParams();m.width=v.width,m.height=v.height;var y=Lo(m,{width:i.getWidth(),height:i.getHeight()},t.get("padding"));s||(s=t.get("left")||t.get("right"),"middle"===s&&(s="center"),"right"===s?y.x+=y.width:"center"===s&&(y.x+=y.width/2)),l||(l=t.get("top")||t.get("bottom"),"center"===l&&(l="middle"),"bottom"===l?y.y+=y.height:"middle"===l&&(y.y+=y.height/2),l=l||"top"),r.attr("position",[y.x,y.y]);var _={textAlign:s,textVerticalAlign:l};u.setStyle(_),f.setStyle(_),v=r.getBoundingRect();var x=y.margin,w=t.getItemStyle(["color","opacity"]);w.fill=t.get("backgroundColor");var b=new zv({shape:{x:v.x-x[3],y:v.y-x[0],width:v.width+x[1]+x[3],height:v.height+x[0]+x[2],r:t.get("borderRadius")},style:w,subPixelOptimize:!0,silent:!0});r.add(b)}}});var hb=dl({type:"legend.plain",dependencies:["series"],layoutMode:{type:"box",ignoreSize:!0},init:function(t,e,n){this.mergeDefaultAndTheme(t,n),t.selected=t.selected||{}},mergeOption:function(t){hb.superCall(this,"mergeOption",t)},optionUpdated:function(){this._updateData(this.ecModel);var t=this._data;if(t[0]&&"single"===this.get("selectedMode")){for(var e=!1,n=0;n<t.length;n++){var i=t[n].get("name");if(this.isSelected(i)){this.select(i),e=!0;break}}!e&&this.select(t[0].get("name"))}},_updateData:function(t){var e=[],n=[];t.eachRawSeries(function(i){var r,o=i.name;if(n.push(o),i.legendDataProvider){var a=i.legendDataProvider(),s=a.mapArray(a.getName);t.isSeriesFiltered(i)||(n=n.concat(s)),s.length?e=e.concat(s):r=!0}else r=!0;r&&Yn(i)&&e.push(i.name)}),this._availableNames=n;var i=this.get("data")||e,r=m(i,function(t){return("string"==typeof t||"number"==typeof t)&&(t={name:t}),new qr(t,this,this.ecModel)},this);this._data=r},getData:function(){return this._data},select:function(t){var e=this.option.selected,n=this.get("selectedMode");if("single"===n){var i=this._data;v(i,function(t){e[t.get("name")]=!1})}e[t]=!0},unSelect:function(t){"single"!==this.get("selectedMode")&&(this.option.selected[t]=!1)},toggleSelected:function(t){var e=this.option.selected;e.hasOwnProperty(t)||(e[t]=!0),this[e[t]?"unSelect":"select"](t)},isSelected:function(t){var e=this.option.selected;return!(e.hasOwnProperty(t)&&!e[t])&&f(this._availableNames,t)>=0},defaultOption:{zlevel:0,z:4,show:!0,orient:"horizontal",left:"center",top:0,align:"auto",backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderRadius:0,borderWidth:0,padding:5,itemGap:10,itemWidth:25,itemHeight:14,inactiveColor:"#ccc",textStyle:{color:"#333"},selectedMode:!0,tooltip:{show:!1}}});al("legendToggleSelect","legendselectchanged",b(_h,"toggleSelected")),al("legendSelect","legendselected",b(_h,"select")),al("legendUnSelect","legendunselected",b(_h,"unSelect"));var fb=b,db=v,pb=hp,gb=pl({type:"legend.plain",newlineDisabled:!1,init:function(){this.group.add(this._contentGroup=new pb),this._backgroundEl,this._isFirstRender=!0},getContentGroup:function(){return this._contentGroup},render:function(t,e,n){var i=this._isFirstRender;if(this._isFirstRender=!1,this.resetInner(),t.get("show",!0)){var r=t.get("align");r&&"auto"!==r||(r="right"===t.get("left")&&"vertical"===t.get("orient")?"right":"left"),this.renderInner(r,t,e,n);var o=t.getBoxLayoutParams(),a={width:n.getWidth(),height:n.getHeight()},s=t.get("padding"),l=Lo(o,a,s),u=this.layoutInner(t,r,l,i),h=Lo(c({width:u.width,height:u.height},o),a,s);this.group.attr("position",[h.x-u.x,h.y-u.y]),this.group.add(this._backgroundEl=xh(u,t))}},resetInner:function(){this.getContentGroup().removeAll(),this._backgroundEl&&this.group.remove(this._backgroundEl)},renderInner:function(t,e,n,i){var r=this.getContentGroup(),o=$(),a=e.get("selectedMode"),s=[];n.eachRawSeries(function(t){!t.get("legendHoverLink")&&s.push(t.id)}),db(e.getData(),function(l,u){var c=l.get("name");if(this.newlineDisabled||""!==c&&"\n"!==c){var h=n.getSeriesByName(c)[0];if(!o.get(c))if(h){var f=h.getData(),d=f.getVisual("color");"function"==typeof d&&(d=d(h.getDataParams(0)));var p=f.getVisual("legendSymbol")||"roundRect",g=f.getVisual("symbol"),v=this._createItem(c,u,l,e,p,g,t,d,a);v.on("click",fb(wh,c,i)).on("mouseover",fb(bh,h.name,null,i,s)).on("mouseout",fb(Sh,h.name,null,i,s)),o.set(c,!0)}else n.eachRawSeries(function(n){if(!o.get(c)&&n.legendDataProvider){var r=n.legendDataProvider(),h=r.indexOfName(c);if(0>h)return;var f=r.getItemVisual(h,"color"),d="roundRect",p=this._createItem(c,u,l,e,d,null,t,f,a);p.on("click",fb(wh,c,i)).on("mouseover",fb(bh,null,c,i,s)).on("mouseout",fb(Sh,null,c,i,s)),o.set(c,!0)}},this)}else r.add(new pb({newline:!0}))},this)},_createItem:function(t,e,n,i,r,o,a,s,l){var c=i.get("itemWidth"),h=i.get("itemHeight"),f=i.get("inactiveColor"),d=i.get("symbolKeepAspect"),p=i.isSelected(t),g=new pb,v=n.getModel("textStyle"),m=n.get("icon"),y=n.getModel("tooltip"),_=y.parentModel;if(r=m||r,g.add(Tu(r,0,0,c,h,p?s:f,null==d||d)),!m&&o&&(o!==r||"none"===o)){var x=.8*h;"none"===o&&(o="circle"),g.add(Tu(o,(c-x)/2,(h-x)/2,x,x,p?s:f,null==d||d))}var w="left"===a?c+5:-5,b=a,S=i.get("formatter"),M=t;"string"==typeof S&&S?M=S.replace("{name}",null!=t?t:""):"function"==typeof S&&(M=S(t)),g.add(new Iv({style:Or({},v,{text:M,x:w,y:h/2,textFill:p?v.getTextColor():f,textAlign:b,textVerticalAlign:"middle"})}));var I=new zv({shape:g.getBoundingRect(),invisible:!0,tooltip:y.get("show")?u({content:t,formatter:_.get("formatter",!0)||function(){return t},formatterParams:{componentType:"legend",legendIndex:i.componentIndex,name:t,$vars:["name"]}},y.option):null});return g.add(I),g.eachChild(function(t){t.silent=!0}),I.silent=!l,this.getContentGroup().add(g),Ir(g),g.__legendDataIndex=e,g},layoutInner:function(t,e,n){var i=this.getContentGroup();km(t.get("orient"),i,t.get("itemGap"),n.width,n.height);var r=i.getBoundingRect();return i.attr("position",[-r.x,-r.y]),this.group.getBoundingRect()},remove:function(){this.getContentGroup().removeAll(),this._isFirstRender=!0}}),vb=function(t){var e=t.findComponents({mainType:"legend"});e&&e.length&&t.filterSeries(function(t){for(var n=0;n<e.length;n++)if(!e[n].isSelected(t.name))return!1;return!0})};rl(vb),Pm.registerSubTypeDefaulter("legend",function(){return"plain"});var mb=hb.extend({type:"legend.scroll",setScrollDataIndex:function(t){this.option.scrollDataIndex=t},defaultOption:{scrollDataIndex:0,pageButtonItemGap:5,pageButtonGap:null,pageButtonPosition:"end",pageFormatter:"{current}/{total}",pageIcons:{horizontal:["M0,0L12,-10L12,10z","M0,0L-12,-10L-12,10z"],vertical:["M0,0L20,0L10,-20z","M0,0L20,0L10,20z"]},pageIconColor:"#2f4554",pageIconInactiveColor:"#aaa",pageIconSize:15,pageTextStyle:{color:"#333"},animationDurationUpdate:800},init:function(t,e,n,i){var r=No(t);mb.superCall(this,"init",t,e,n,i),Mh(this,t,r)},mergeOption:function(t,e){mb.superCall(this,"mergeOption",t,e),Mh(this,this.option,t)},getOrient:function(){return"vertical"===this.get("orient")?{index:1,name:"vertical"}:{index:0,name:"horizontal"}}}),yb=hp,_b=["width","height"],xb=["x","y"],wb=gb.extend({type:"legend.scroll",newlineDisabled:!0,init:function(){wb.superCall(this,"init"),this._currentIndex=0,this.group.add(this._containerGroup=new yb),this._containerGroup.add(this.getContentGroup()),this.group.add(this._controllerGroup=new yb),this._showController},resetInner:function(){wb.superCall(this,"resetInner"),this._controllerGroup.removeAll(),this._containerGroup.removeClipPath(),this._containerGroup.__rectSize=null},renderInner:function(t,e,n,i){function r(t,n){var r=t+"DataIndex",l=Yr(e.get("pageIcons",!0)[e.getOrient().name][n],{onclick:w(o._pageGo,o,r,e,i)},{x:-s[0]/2,y:-s[1]/2,width:s[0],height:s[1]});l.name=t,a.add(l)}var o=this;wb.superCall(this,"renderInner",t,e,n,i);var a=this._controllerGroup,s=e.get("pageIconSize",!0);S(s)||(s=[s,s]),r("pagePrev",0);var l=e.getModel("pageTextStyle");a.add(new Iv({name:"pageText",style:{textFill:l.getTextColor(),font:l.getFont(),textVerticalAlign:"middle",textAlign:"center"},silent:!0})),r("pageNext",1)},layoutInner:function(t,e,n,i){var r=this.getContentGroup(),o=this._containerGroup,a=this._controllerGroup,s=t.getOrient().index,l=_b[s],u=_b[1-s],c=xb[1-s];km(t.get("orient"),r,t.get("itemGap"),s?n.width:null,s?null:n.height),km("horizontal",a,t.get("pageButtonItemGap",!0));var h=r.getBoundingRect(),f=a.getBoundingRect(),d=this._showController=h[l]>n[l],p=[-h.x,-h.y];i||(p[s]=r.position[s]);var g=[0,0],v=[-f.x,-f.y],m=P(t.get("pageButtonGap",!0),t.get("itemGap",!0));if(d){var y=t.get("pageButtonPosition",!0);"end"===y?v[s]+=n[l]-f[l]:g[s]+=f[l]+m}v[1-s]+=h[u]/2-f[u]/2,r.attr("position",p),o.attr("position",g),a.attr("position",v);var _=this.group.getBoundingRect();_={x:0,y:0};if(_[l]=d?n[l]:h[l],_[u]=Math.max(h[u],f[u]),_[c]=Math.min(0,f[c]+v[1-s]),o.__rectSize=n[l],d){var x={x:0,y:0};x[l]=Math.max(n[l]-f[l]-m,0),x[u]=_[u],o.setClipPath(new zv({shape:x})),o.__rectSize=x[l]}else a.eachChild(function(t){t.attr({invisible:!0,silent:!0})});var w=this._getPageInfo(t);return null!=w.pageIndex&&$r(r,{position:w.contentPosition},!!d&&t),this._updatePageInfoView(t,w),_},_pageGo:function(t,e,n){var i=this._getPageInfo(e)[t];null!=i&&n.dispatchAction({type:"legendScroll",scrollDataIndex:i,legendId:e.id})},_updatePageInfoView:function(t,e){var n=this._controllerGroup;v(["pagePrev","pageNext"],function(i){var r=null!=e[i+"DataIndex"],o=n.childOfName(i);o&&(o.setStyle("fill",r?t.get("pageIconColor",!0):t.get("pageIconInactiveColor",!0)),o.cursor=r?"pointer":"default")});var i=n.childOfName("pageText"),r=t.get("pageFormatter"),o=e.pageIndex,a=null!=o?o+1:0,s=e.pageCount;i&&r&&i.setStyle("text",I(r)?r.replace("{current}",a).replace("{total}",s):r({current:a,total:s}))},_getPageInfo:function(t){function e(t){if(t){var e=t.getBoundingRect(),n=e[l]+t.position[a];return{s:n,e:n+e[s],i:t.__legendDataIndex}}}function n(t,e){return t.e>=e&&t.s<=e+o}var i=t.get("scrollDataIndex",!0),r=this.getContentGroup(),o=this._containerGroup.__rectSize,a=t.getOrient().index,s=_b[a],l=xb[a],u=this._findTargetItemIndex(i),c=r.children(),h=c[u],f=c.length,d=f?1:0,p={contentPosition:r.position.slice(),pageCount:d,pageIndex:d-1,pagePrevDataIndex:null,pageNextDataIndex:null};if(!h)return p;var g=e(h);p.contentPosition[a]=-g.s;for(var v=u+1,m=g,y=g,_=null;f>=v;++v)_=e(c[v]),(!_&&y.e>m.s+o||_&&!n(_,m.s))&&(m=y.i>m.i?y:_,m&&(null==p.pageNextDataIndex&&(p.pageNextDataIndex=m.i),++p.pageCount)),y=_;for(v=u-1,m=g,y=g,_=null;v>=-1;--v)_=e(c[v]),_&&n(y,_.s)||!(m.i<y.i)||(y=m,null==p.pagePrevDataIndex&&(p.pagePrevDataIndex=m.i),++p.pageCount,++p.pageIndex),m=_;return p},_findTargetItemIndex:function(t){var e,n,i=this.getContentGroup();return this._showController&&i.eachChild(function(i,r){var o=i.__legendDataIndex;null==n&&null!=o&&(n=r),o===t&&(e=r)}),null!=e?e:n}});al("legendScroll","legendscroll",function(t,e){var n=t.scrollDataIndex;null!=n&&e.eachComponent({mainType:"legend",subType:"scroll",query:t},function(t){t.setScrollDataIndex(n)})});var bb=function(t,e){var n,i=[],r=t.seriesIndex;if(null==r||!(n=e.getSeriesByIndex(r)))return{point:[]};var o=n.getData(),a=Kn(o,t);if(null==a||0>a||S(a))return{point:[]};var s=o.getItemGraphicEl(a),l=n.coordinateSystem;if(n.getTooltipPosition)i=n.getTooltipPosition(a)||[];else if(l&&l.dataToPoint)i=l.dataToPoint(o.getValues(m(l.dimensions,function(t){return o.mapDimension(t)}),a,!0))||[];else if(s){var u=s.getBoundingRect().clone();u.applyTransform(s.transform),i=[u.x+u.width/2,u.y+u.height/2]}return{point:i,el:s}},Sb=v,Mb=b,Ib=Jn(),Ab=function(t,e,n){var i=t.currTrigger,r=[t.x,t.y],o=t,a=t.dispatchAction||w(n.dispatchAction,n),s=e.getComponent("axisPointer").coordSysAxesInfo;if(s){Eh(r)&&(r=bb({seriesIndex:o.seriesIndex,dataIndex:o.dataIndex},e).point);var l=Eh(r),u=o.axesInfo,c=s.axesInfo,h="leave"===i||Eh(r),f={},d={},p={list:[],map:{}},g={showPointer:Mb(Th,d),showTooltip:Mb(Ch,p)};Sb(s.coordSysMap,function(t,e){var n=l||t.containPoint(r);Sb(s.coordSysAxesInfo[e],function(t){var e=t.axis,i=Ph(u,t);if(!h&&n&&(!u||i)){var o=i&&i.value;null!=o||l||(o=e.pointToData(r)),null!=o&&Ih(t,o,g,!1,f)}})});var v={};return Sb(c,function(t,e){var n=t.linkGroup;n&&!d[e]&&Sb(n.axesInfo,function(e,i){var r=d[i];if(e!==t&&r){var o=r.value;n.mapper&&(o=t.axis.scale.parse(n.mapper(o,Lh(e),Lh(t)))),v[t.key]=o}})}),Sb(v,function(t,e){Ih(c[e],t,g,!0,f)}),kh(d,c,f),Dh(p,r,t,a),Oh(c,a,n),f}},Tb=(dl({type:"axisPointer",coordSysAxesInfo:null,defaultOption:{show:"auto",triggerOn:null,zlevel:0,z:50,type:"line",snap:!1,triggerTooltip:!0,value:null,status:null,link:[],animation:null,animationDurationUpdate:200,lineStyle:{color:"#aaa",width:1,type:"solid"},shadowStyle:{color:"rgba(150,150,150,0.3)"},label:{show:!0,formatter:null,precision:"auto",margin:3,color:"#fff",padding:[5,7,5,7],backgroundColor:"auto",borderColor:null,borderWidth:0,shadowBlur:3,shadowColor:"#aaa"},handle:{show:!1,icon:"M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",size:45,margin:50,color:"#333",shadowBlur:3,shadowColor:"#aaa",shadowOffsetX:0,shadowOffsetY:2,throttle:40}}}),Jn()),Cb=v,kb=pl({type:"axisPointer",render:function(t,e,n){var i=e.getComponent("tooltip"),r=t.get("triggerOn")||i&&i.get("triggerOn")||"mousemove|click";Nh("axisPointer",n,function(t,e,n){"none"!==r&&("leave"===t||r.indexOf(t)>=0)&&n({type:"updateAxisPointer",currTrigger:t,x:e&&e.offsetX,y:e&&e.offsetY})})},remove:function(t,e){$h(e.getZr(),"axisPointer"),kb.superApply(this._model,"remove",arguments)},dispose:function(t,e){$h("axisPointer",e),kb.superApply(this._model,"dispose",arguments)}}),Db=Jn(),Ob=a,Pb=w;jh.prototype={_group:null,_lastGraphicKey:null,_handle:null,_dragging:!1,_lastValue:null,_lastStatus:null,_payloadInfo:null,animationThreshold:15,render:function(t,e,n,i){var r=e.get("value"),o=e.get("status");if(this._axisModel=t,this._axisPointerModel=e,this._api=n,i||this._lastValue!==r||this._lastStatus!==o){this._lastValue=r,this._lastStatus=o;var a=this._group,s=this._handle;if(!o||"hide"===o)return a&&a.hide(),void(s&&s.hide());a&&a.show(),s&&s.show();var l={};this.makeElOption(l,r,t,e,n);var u=l.graphicKey;u!==this._lastGraphicKey&&this.clear(n),this._lastGraphicKey=u;var c=this._moveAnimation=this.determineAnimation(t,e);if(a){var h=b(Hh,e,c);this.updatePointerEl(a,l,h,e),this.updateLabelEl(a,l,h,e)}else a=this._group=new hp,this.createPointerEl(a,l,t,e),this.createLabelEl(a,l,t,e),n.getZr().add(a);Zh(a,e,!0),this._renderHandle(r)}},remove:function(t){this.clear(t)},dispose:function(t){this.clear(t)},determineAnimation:function(t,e){var n=e.get("animation"),i=t.axis,r="category"===i.type,o=e.get("snap");if(!o&&!r)return!1;if("auto"===n||null==n){var a=this.animationThreshold;if(r&&i.getBandWidth()>a)return!0;if(o){var s=Pc(t).seriesDataCount,l=i.getExtent();return Math.abs(l[0]-l[1])/s>a}return!1}return!0===n},makeElOption:function(){},createPointerEl:function(t,e){var n=e.pointer;if(n){var i=Db(t).pointerEl=new sm[n.type](Ob(e.pointer));t.add(i)}},createLabelEl:function(t,e,n,i){if(e.label){var r=Db(t).labelEl=new zv(Ob(e.label));t.add(r),Gh(r,i)}},updatePointerEl:function(t,e,n){var i=Db(t).pointerEl;i&&e.pointer&&(i.setStyle(e.pointer.style),n(i,{shape:e.pointer.shape}))},updateLabelEl:function(t,e,n,i){var r=Db(t).labelEl;r&&(r.setStyle(e.label.style),n(r,{shape:e.label.shape,position:e.label.position}),Gh(r,i))},_renderHandle:function(t){if(!this._dragging&&this.updateHandleTransform){var e,n=this._axisPointerModel,i=this._api.getZr(),r=this._handle,o=n.getModel("handle"),a=n.get("status");if(!o.get("show")||!a||"hide"===a)return r&&i.remove(r),void(this._handle=null);this._handle||(e=!0,r=this._handle=Yr(o.get("icon"),{cursor:"move",draggable:!0,onmousemove:function(t){Ad(t.event)},onmousedown:Pb(this._onHandleDragMove,this,0,0),drift:Pb(this._onHandleDragMove,this),ondragend:Pb(this._onHandleDragEnd,this)}),i.add(r)),Zh(r,n,!1);var s=["color","borderColor","borderWidth","opacity","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY"];r.setStyle(o.getItemStyle(null,s));var l=o.get("size");S(l)||(l=[l,l]),r.attr("scale",[l[0]/2,l[1]/2]),ts(this,"_doDispatchAxisPointer",o.get("throttle")||0,"fixRate"),this._moveHandleToValue(t,e)}},_moveHandleToValue:function(t,e){Hh(this._axisPointerModel,!e&&this._moveAnimation,this._handle,Uh(this.getHandleTransform(t,this._axisModel,this._axisPointerModel)))},_onHandleDragMove:function(t,e){var n=this._handle;if(n){this._dragging=!0;var i=this.updateHandleTransform(Uh(n),[t,e],this._axisModel,this._axisPointerModel);this._payloadInfo=i,n.stopAnimation(),n.attr(Uh(i)),Db(n).lastProp=null,this._doDispatchAxisPointer()}},_doDispatchAxisPointer:function(){var t=this._handle;if(t){var e=this._payloadInfo,n=this._axisModel;this._api.dispatchAction({type:"updateAxisPointer",x:e.cursorPoint[0],y:e.cursorPoint[1],tooltipOption:e.tooltipOption,axesInfo:[{axisDim:n.axis.dim,axisIndex:n.componentIndex}]})}},_onHandleDragEnd:function(){this._dragging=!1;var t=this._handle;if(t){var e=this._axisPointerModel.get("value");this._moveHandleToValue(e),this._api.dispatchAction({type:"hideTip"})}},getHandleTransform:null,updateHandleTransform:null,clear:function(t){this._lastValue=null,this._lastStatus=null;var e=t.getZr(),n=this._group,i=this._handle;e&&n&&(this._lastGraphicKey=null,n&&e.remove(n),i&&e.remove(i),this._group=null,this._handle=null,this._payloadInfo=null)},doClear:function(){},buildLabel:function(t,e,n){return n=n||0,{x:t[n],y:t[1-n],width:e[n],height:e[1-n]}}},jh.prototype.constructor=jh,ai(jh);var Lb=jh.extend({makeElOption:function(t,e,n,i,r){var o=n.axis,a=o.grid,s=i.get("type"),l=nf(a,o).getOtherAxis(o).getGlobalExtent(),u=o.toGlobalCoord(o.dataToCoord(e,!0));if(s&&"none"!==s){var c=Xh(i),h=Eb[s](o,u,l);h.style=c,t.graphicKey=h.type,t.pointer=h}var f=Rc(a.model,n);Qh(e,t,f,n,i,r)},getHandleTransform:function(t,e,n){var i=Rc(e.axis.grid.model,e,{labelInside:!1});return i.labelMargin=n.get("handle.margin"),{position:Jh(e.axis,t,i),rotation:i.rotation+(i.labelDirection<0?Math.PI:0)}},updateHandleTransform:function(t,e,n){var i=n.axis,r=i.grid,o=i.getGlobalExtent(!0),a=nf(r,i).getOtherAxis(i).getGlobalExtent(),s="x"===i.dim?0:1,l=t.position;l[s]+=e[s],l[s]=Math.min(o[1],l[s]),l[s]=Math.max(o[0],l[s]);var u=(a[1]+a[0])/2,c=[u,u];c[s]=l[s];var h=[{verticalAlign:"middle"},{align:"center"}];return{position:l,rotation:t.rotation,cursorPoint:c,tooltipOption:h[s]}}}),Eb={line:function(t,e,n){var i=tf([e,n[0]],[e,n[1]],rf(t));return{type:"Line",subPixelOptimize:!0,shape:i}},shadow:function(t,e,n){var i=Math.max(1,t.getBandWidth()),r=n[1]-n[0];return{type:"Rect",shape:ef([e-i/2,n[0]],[i,r],rf(t))}}};Aw.registerAxisPointerClass("CartesianAxisPointer",Lb),il(function(t){if(t){(!t.axisPointer||0===t.axisPointer.length)&&(t.axisPointer={});var e=t.axisPointer.link;e&&!S(e)&&(t.axisPointer.link=[e])}}),rl(w_.PROCESSOR.STATISTIC,function(t,e){t.getComponent("axisPointer").coordSysAxesInfo=Ic(t,e)}),al({type:"updateAxisPointer",event:"updateAxisPointer",update:":updateAxisPointer"},Ab),dl({type:"tooltip",dependencies:["axisPointer"],defaultOption:{zlevel:0,z:60,show:!0,showContent:!0,trigger:"item",triggerOn:"mousemove|click",alwaysShowContent:!1,displayMode:"single",renderMode:"auto",confine:!1,showDelay:0,hideDelay:100,transitionDuration:.4,enterable:!1,backgroundColor:"rgba(50,50,50,0.7)",borderColor:"#333",borderRadius:4,borderWidth:0,padding:5,extraCssText:"",axisPointer:{type:"line",axis:"auto",animation:"auto",animationDurationUpdate:200,animationEasingUpdate:"exponentialOut",crossStyle:{color:"#999",width:1,type:"dashed",textStyle:{}}},textStyle:{color:"#fff",fontSize:14}}});var Nb=v,Bb=bo,zb=["","-webkit-","-moz-","-o-"],Rb="position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;";lf.prototype={constructor:lf,_enterable:!0,update:function(){var t=this._container,e=t.currentStyle||i.defaultView.getComputedStyle(t),n=t.style;"absolute"!==n.position&&"absolute"!==e.position&&(n.position="relative")},show:function(t){clearTimeout(this._hideTimeout);var e=this.el;e.style.cssText=Rb+sf(t)+";left:"+this._x+"px;top:"+this._y+"px;"+(t.get("extraCssText")||""),e.style.display=e.innerHTML?"block":"none",e.style.pointerEvents=this._enterable?"auto":"none",this._show=!0},setContent:function(t){this.el.innerHTML=null==t?"":t},setEnterable:function(t){this._enterable=t},getSize:function(){var t=this.el;return[t.clientWidth,t.clientHeight]},moveTo:function(t,e){var n,i=this._zr;i&&i.painter&&(n=i.painter.getViewportRootOffset())&&(t+=n.offsetLeft,e+=n.offsetTop);var r=this.el.style;r.left=t+"px",r.top=e+"px",this._x=t,this._y=e},hide:function(){this.el.style.display="none",this._show=!1},hideLater:function(t){!this._show||this._inContent&&this._enterable||(t?(this._hideDelay=t,this._show=!1,this._hideTimeout=setTimeout(w(this.hide,this),t)):this.hide())},isShow:function(){return this._show},getOuterSize:function(){var t=this.el.clientWidth,e=this.el.clientHeight;if(i.defaultView&&i.defaultView.getComputedStyle){var n=i.defaultView.getComputedStyle(this.el);n&&(t+=parseInt(n.borderLeftWidth,10)+parseInt(n.borderRightWidth,10),e+=parseInt(n.borderTopWidth,10)+parseInt(n.borderBottomWidth,10))}return{width:t,height:e}}},uf.prototype={constructor:uf,_enterable:!0,update:function(){},show:function(){this._hideTimeout&&clearTimeout(this._hideTimeout),this.el.attr("show",!0),this._show=!0},setContent:function(t,e,n){this.el&&this._zr.remove(this.el);for(var i={},r=t,o="{marker",a="|}",s=r.indexOf(o);s>=0;){var l=r.indexOf(a),u=r.substr(s+o.length,l-s-o.length);i["marker"+u]=u.indexOf("sub")>-1?{textWidth:4,textHeight:4,textBorderRadius:2,textBackgroundColor:e[u],textOffset:[3,0]}:{textWidth:10,textHeight:10,textBorderRadius:5,textBackgroundColor:e[u]},r=r.substr(l+1),s=r.indexOf("{marker")}this.el=new Iv({style:{rich:i,text:t,textLineHeight:20,textBackgroundColor:n.get("backgroundColor"),textBorderRadius:n.get("borderRadius"),textFill:n.get("textStyle.color"),textPadding:n.get("padding")},z:n.get("z")}),this._zr.add(this.el);var c=this;this.el.on("mouseover",function(){c._enterable&&(clearTimeout(c._hideTimeout),c._show=!0),c._inContent=!0}),this.el.on("mouseout",function(){c._enterable&&c._show&&c.hideLater(c._hideDelay),c._inContent=!1})},setEnterable:function(t){this._enterable=t},getSize:function(){var t=this.el.getBoundingRect();return[t.width,t.height]},moveTo:function(t,e){this.el&&this.el.attr("position",[t,e])},hide:function(){this.el&&this.el.hide(),this._show=!1},hideLater:function(t){!this._show||this._inContent&&this._enterable||(t?(this._hideDelay=t,this._show=!1,this._hideTimeout=setTimeout(w(this.hide,this),t)):this.hide())},isShow:function(){return this._show},getOuterSize:function(){var t=this.getSize();return{width:t[0],height:t[1]}}};var Fb=w,Vb=v,$b=ro,jb=new zv({shape:{x:-1,y:-1,width:2,height:2}});pl({type:"tooltip",init:function(t,e){if(!Jf.node){var n,i=t.getComponent("tooltip"),r=i.get("renderMode");this._renderMode=ii(r),"html"===this._renderMode?(n=new lf(e.getDom(),e),this._newLine="<br/>"):(n=new uf(e),this._newLine="\n"),this._tooltipContent=n}},render:function(t,e,n){if(!Jf.node){this.group.removeAll(),this._tooltipModel=t,this._ecModel=e,this._api=n,this._lastDataByCoordSys=null,this._alwaysShowContent=t.get("alwaysShowContent");var i=this._tooltipContent;i.update(),i.setEnterable(t.get("enterable")),this._initGlobalListener(),this._keepShow()}},_initGlobalListener:function(){var t=this._tooltipModel,e=t.get("triggerOn");Nh("itemTooltip",this._api,Fb(function(t,n,i){"none"!==e&&(e.indexOf(t)>=0?this._tryShow(n,i):"leave"===t&&this._hide(i))},this))},_keepShow:function(){var t=this._tooltipModel,e=this._ecModel,n=this._api;if(null!=this._lastX&&null!=this._lastY&&"none"!==t.get("triggerOn")){var i=this;clearTimeout(this._refreshUpdateTimeout),this._refreshUpdateTimeout=setTimeout(function(){!n.isDisposed()&&i.manuallyShowTip(t,e,n,{x:i._lastX,y:i._lastY})})}},manuallyShowTip:function(t,e,n,i){if(i.from!==this.uid&&!Jf.node){var r=hf(i,n);this._ticket="";var o=i.dataByCoordSys;if(i.tooltip&&null!=i.x&&null!=i.y){var a=jb;a.position=[i.x,i.y],a.update(),a.tooltip=i.tooltip,this._tryShow({offsetX:i.x,offsetY:i.y,target:a},r)}else if(o)this._tryShow({offsetX:i.x,offsetY:i.y,position:i.position,event:{},dataByCoordSys:i.dataByCoordSys,tooltipOption:i.tooltipOption},r);else if(null!=i.seriesIndex){if(this._manuallyAxisShowTip(t,e,n,i))return;var s=bb(i,e),l=s.point[0],u=s.point[1];null!=l&&null!=u&&this._tryShow({offsetX:l,offsetY:u,position:i.position,target:s.el,event:{}},r)}else null!=i.x&&null!=i.y&&(n.dispatchAction({type:"updateAxisPointer",x:i.x,y:i.y}),this._tryShow({offsetX:i.x,offsetY:i.y,position:i.position,target:n.getZr().findHover(i.x,i.y).target,event:{}},r))}},manuallyHideTip:function(t,e,n,i){var r=this._tooltipContent;!this._alwaysShowContent&&this._tooltipModel&&r.hideLater(this._tooltipModel.get("hideDelay")),this._lastX=this._lastY=null,i.from!==this.uid&&this._hide(hf(i,n))},_manuallyAxisShowTip:function(t,e,n,i){var r=i.seriesIndex,o=i.dataIndex,a=e.getComponent("axisPointer").coordSysAxesInfo;if(null!=r&&null!=o&&null!=a){var s=e.getSeriesByIndex(r);if(s){var l=s.getData();t=cf([l.getItemModel(o),s,(s.coordinateSystem||{}).model,t]);if("axis"===t.get("trigger"))return n.dispatchAction({type:"updateAxisPointer",seriesIndex:r,dataIndex:o,position:i.position}),!0}}},_tryShow:function(t,e){var n=t.target,i=this._tooltipModel;if(i){this._lastX=t.offsetX,this._lastY=t.offsetY;var r=t.dataByCoordSys;r&&r.length?this._showAxisTooltip(r,t):n&&null!=n.dataIndex?(this._lastDataByCoordSys=null,this._showSeriesItemTooltip(t,n,e)):n&&n.tooltip?(this._lastDataByCoordSys=null,this._showComponentItemTooltip(t,n,e)):(this._lastDataByCoordSys=null,this._hide(e))}},_showOrMove:function(t,e){var n=t.get("showDelay");e=w(e,this),clearTimeout(this._showTimout),n>0?this._showTimout=setTimeout(e,n):e()},_showAxisTooltip:function(t,e){var n=this._ecModel,i=this._tooltipModel,r=[e.offsetX,e.offsetY],o=[],a=[],l=cf([e.tooltipOption,i]),u=this._renderMode,c=this._newLine,h={};Vb(t,function(t){Vb(t.dataByAxis,function(t){var e=n.getComponent(t.axisDim+"Axis",t.axisIndex),i=t.value,r=[];if(e&&null!=i){var l=Kh(i,e.axis,n,t.seriesDataIndices,t.valueLabelOpt);v(t.seriesDataIndices,function(o){var c=n.getSeriesByIndex(o.seriesIndex),f=o.dataIndexInside,d=c&&c.getDataParams(f);if(d.axisDim=t.axisDim,d.axisIndex=t.axisIndex,d.axisType=t.axisType,d.axisId=t.axisId,d.axisValue=wu(e.axis,i),d.axisValueLabel=l,d){a.push(d);var p,g=c.formatTooltip(f,!0,null,u);if(A(g)){p=g.html;var v=g.markers;s(h,v)}else p=g;r.push(p)}});var f=l;o.push("html"!==u?r.join(c):(f?So(f)+c:"")+r.join(c))}})},this),o.reverse(),o=o.join(this._newLine+this._newLine);var f=e.position;this._showOrMove(l,function(){this._updateContentNotChangedOnAxis(t)?this._updatePosition(l,f,r[0],r[1],this._tooltipContent,a):this._showTooltipContent(l,o,a,Math.random(),r[0],r[1],f,void 0,h)})},_showSeriesItemTooltip:function(t,e,n){var i=this._ecModel,r=e.seriesIndex,o=i.getSeriesByIndex(r),a=e.dataModel||o,s=e.dataIndex,l=e.dataType,u=a.getData(),c=cf([u.getItemModel(s),a,o&&(o.coordinateSystem||{}).model,this._tooltipModel]),h=c.get("trigger");if(null==h||"item"===h){var f,d,p=a.getDataParams(s,l),g=a.formatTooltip(s,!1,l,this._renderMode);A(g)?(f=g.html,d=g.markers):(f=g,d=null);var v="item_"+a.name+"_"+s;this._showOrMove(c,function(){this._showTooltipContent(c,f,p,v,t.offsetX,t.offsetY,t.position,t.target,d)}),n({type:"showTip",dataIndexInside:s,dataIndex:u.getRawIndex(s),seriesIndex:r,from:this.uid})}},_showComponentItemTooltip:function(t,e,n){var i=e.tooltip;if("string"==typeof i){var r=i;i={content:r,formatter:r}}var o=new qr(i,this._tooltipModel,this._ecModel),a=o.get("content"),s=Math.random();this._showOrMove(o,function(){this._showTooltipContent(o,a,o.get("formatterParams")||{},s,t.offsetX,t.offsetY,t.position,e)}),n({type:"showTip",from:this.uid})},_showTooltipContent:function(t,e,n,i,r,o,a,s,l){if(this._ticket="",t.get("showContent")&&t.get("show")){var u=this._tooltipContent,c=t.get("formatter");a=a||t.get("position");var h=e;if(c&&"string"==typeof c)h=Mo(c,n,!0);else if("function"==typeof c){var f=Fb(function(e,i){e===this._ticket&&(u.setContent(i,l,t),this._updatePosition(t,a,r,o,u,n,s))},this);this._ticket=i,h=c(n,i,f)}u.setContent(h,l,t),u.show(t),this._updatePosition(t,a,r,o,u,n,s)}},_updatePosition:function(t,e,n,i,r,o,a){var s=this._api.getWidth(),l=this._api.getHeight();e=e||t.get("position");var u=r.getSize(),c=t.get("align"),h=t.get("verticalAlign"),f=a&&a.getBoundingRect().clone();if(a&&f.applyTransform(a.transform),"function"==typeof e&&(e=e([n,i],o,r.el,f,{viewSize:[s,l],contentSize:u.slice()})),S(e))n=$b(e[0],s),i=$b(e[1],l);else if(A(e)){e.width=u[0],e.height=u[1];var d=Lo(e,{width:s,height:l});n=d.x,i=d.y,c=null,h=null}else if("string"==typeof e&&a){var p=pf(e,f,u);n=p[0],i=p[1]}else{p=ff(n,i,r,s,l,c?null:20,h?null:20);n=p[0],i=p[1]}if(c&&(n-=gf(c)?u[0]/2:"right"===c?u[0]:0),h&&(i-=gf(h)?u[1]/2:"bottom"===h?u[1]:0),t.get("confine")){p=df(n,i,r,s,l);n=p[0],i=p[1]}r.moveTo(n,i)},_updateContentNotChangedOnAxis:function(t){var e=this._lastDataByCoordSys,n=!!e&&e.length===t.length;return n&&Vb(e,function(e,i){var r=e.dataByAxis||{},o=t[i]||{},a=o.dataByAxis||[];n&=r.length===a.length,n&&Vb(r,function(t,e){var i=a[e]||{},r=t.seriesDataIndices||[],o=i.seriesDataIndices||[];n&=t.value===i.value&&t.axisType===i.axisType&&t.axisId===i.axisId&&r.length===o.length,n&&Vb(r,function(t,e){var i=o[e];n&=t.seriesIndex===i.seriesIndex&&t.dataIndex===i.dataIndex})})}),this._lastDataByCoordSys=t,!!n},_hide:function(t){this._lastDataByCoordSys=null,t({type:"hideTip",from:this.uid})},dispose:function(t,e){Jf.node||(this._tooltipContent.hide(),$h("itemTooltip",e))}}),al({type:"showTip",event:"showTip",update:"tooltip:manuallyShowTip"},function(){}),al({type:"hideTip",event:"hideTip",update:"tooltip:manuallyHideTip"},function(){}),Pm.registerSubTypeDefaulter("dataZoom",function(){return"slider"});var Hb=["x","y","z","radius","angle","single"],Wb=["cartesian2d","polar","singleAxis"],Gb=mf(Hb,["axisIndex","axis","index","id"]),Ub=function(t,e,n,i,r,o){t=t||0;var a=n[1]-n[0];if(null!=r&&(r=xf(r,[0,a])),null!=o&&(o=Math.max(o,null!=r?r:0)),"all"===i){var s=Math.abs(e[1]-e[0]);s=xf(s,[0,a]),r=o=xf(s,[r,o]),i=0}e[0]=xf(e[0],n),e[1]=xf(e[1],n);var l=_f(e,i);e[i]+=t;var u=r||0,c=n.slice();l.sign<0?c[0]+=u:c[1]-=u,e[i]=xf(e[i],c);var h=_f(e,i);null!=r&&(h.sign!==l.sign||h.span<r)&&(e[1-i]=e[i]+l.sign*r);h=_f(e,i);return null!=o&&h.span>o&&(e[1-i]=e[i]+h.sign*o),e},Zb=v,Xb=ao,Yb=function(t,e,n,i){this._dimName=t,this._axisIndex=e,this._valueWindow,this._percentWindow,this._dataExtent,this._minMaxSpan,this.ecModel=i,this._dataZoomModel=n};Yb.prototype={constructor:Yb,hostedBy:function(t){return this._dataZoomModel===t},getDataValueWindow:function(){return this._valueWindow.slice()},getDataPercentWindow:function(){return this._percentWindow.slice()},getTargetSeriesModels:function(){var t=[],e=this.ecModel;return e.eachSeries(function(n){if(vf(n.get("coordinateSystem"))){var i=this._dimName,r=e.queryComponents({mainType:i+"Axis",index:n.get(i+"AxisIndex"),id:n.get(i+"AxisId")})[0];this._axisIndex===(r&&r.componentIndex)&&t.push(n)}},this),t},getAxisModel:function(){return this.ecModel.getComponent(this._dimName+"Axis",this._axisIndex)},getOtherAxisModel:function(){var t,e,n,i=this._dimName,r=this.ecModel,o=this.getAxisModel(),a="x"===i||"y"===i;return a?(e="gridIndex",t="x"===i?"y":"x"):(e="polarIndex",t="angle"===i?"radius":"angle"),r.eachComponent(t+"Axis",function(t){(t.get(e)||0)===(o.get(e)||0)&&(n=t)}),n},getMinMaxSpan:function(){return a(this._minMaxSpan)},calculateDataWindow:function(t){function e(t,e,n,i,r){var a=r?"Span":"ValueSpan";Ub(0,t,n,"all",c["min"+a],c["max"+a]);for(var s=0;2>s;s++)e[s]=io(t[s],n,i,!0),r&&(e[s]=o.parse(e[s]))}var n,i=this._dataExtent,r=this.getAxisModel(),o=r.axis.scale,a=this._dataZoomModel.getRangePropMode(),s=[0,100],l=[],u=[];Zb(["start","end"],function(e,r){var c=t[e],h=t[e+"Value"];"percent"===a[r]?(null==c&&(c=s[r]),h=o.parse(io(c,s,i))):(n=!0,h=null==h?i[r]:o.parse(h),c=io(h,i,s)),u[r]=h,l[r]=c}),Xb(u),Xb(l);var c=this._minMaxSpan;return n?e(u,l,i,s,!1):e(l,u,s,i,!0),{valueWindow:u,percentWindow:l}},reset:function(t){if(t===this._dataZoomModel){var e=this.getTargetSeriesModels();this._dataExtent=wf(this,this._dimName,e),Mf(this);var n=this.calculateDataWindow(t.option);this._valueWindow=n.valueWindow,this._percentWindow=n.percentWindow,Sf(this)}},restore:function(t){t===this._dataZoomModel&&(this._valueWindow=this._percentWindow=null,Sf(this,!0))},filterData:function(t){function e(t){return t>=o[0]&&t<=o[1]}if(t===this._dataZoomModel){var n=this._dimName,i=this.getTargetSeriesModels(),r=t.get("filterMode"),o=this._valueWindow;"none"!==r&&Zb(i,function(t){var i=t.getData(),a=i.mapDimension(n,!0);a.length&&("weakFilter"===r?i.filterSelf(function(t){for(var e,n,r,s=0;s<a.length;s++){var l=i.get(a[s],t),u=!isNaN(l),c=l<o[0],h=l>o[1];if(u&&!c&&!h)return!0;u&&(r=!0),c&&(e=!0),h&&(n=!0)}return r&&e&&n}):Zb(a,function(n){if("empty"===r)t.setData(i=i.map(n,function(t){return e(t)?t:NaN}));else{var a={};a[n]=o,i.selectRange(a)}}),Zb(a,function(t){i.setApproximateExtent(o,t)}))})}}};var qb=v,Kb=Gb,Jb=dl({type:"dataZoom",dependencies:["xAxis","yAxis","zAxis","radiusAxis","angleAxis","singleAxis","series"],defaultOption:{zlevel:0,z:4,orient:null,xAxisIndex:null,yAxisIndex:null,filterMode:"filter",throttle:null,start:0,end:100,startValue:null,endValue:null,minSpan:null,maxSpan:null,minValueSpan:null,maxValueSpan:null,rangeMode:null},init:function(t,e,n){this._dataIntervalByAxis={},this._dataInfo={},this._axisProxies={},this.textStyleModel,this._autoThrottle=!0,this._rangePropMode=["percent","percent"];var i=If(t);this.mergeDefaultAndTheme(t,n),this.doInit(i)},mergeOption:function(t){var e=If(t);s(this.option,t,!0),this.doInit(e)},doInit:function(t){var e=this.option;Jf.canvasSupported||(e.realtime=!1),this._setDefaultThrottle(t),Af(this,t),qb([["start","startValue"],["end","endValue"]],function(t,n){"value"===this._rangePropMode[n]&&(e[t[0]]=null)},this),this.textStyleModel=this.getModel("textStyle"),this._resetTarget(),this._giveAxisProxies()},_giveAxisProxies:function(){var t=this._axisProxies;this.eachTargetAxis(function(e,n,i,r){var o=this.dependentModels[e.axis][n],a=o.__dzAxisProxy||(o.__dzAxisProxy=new Yb(e.name,n,this,r));t[e.name+"_"+n]=a},this)},_resetTarget:function(){var t=this.option,e=this._judgeAutoMode();Kb(function(e){var n=e.axisIndex;t[n]=Hn(t[n])},this),"axisIndex"===e?this._autoSetAxisIndex():"orient"===e&&this._autoSetOrient()},_judgeAutoMode:function(){var t=this.option,e=!1;Kb(function(n){null!=t[n.axisIndex]&&(e=!0)},this);var n=t.orient;return null==n&&e?"orient":e?void 0:(null==n&&(t.orient="horizontal"),"axisIndex")},_autoSetAxisIndex:function(){var t=!0,e=this.get("orient",!0),n=this.option,i=this.dependentModels;if(t){var r="vertical"===e?"y":"x";i[r+"Axis"].length?(n[r+"AxisIndex"]=[0],t=!1):qb(i.singleAxis,function(i){t&&i.get("orient",!0)===e&&(n.singleAxisIndex=[i.componentIndex],t=!1)})}t&&Kb(function(e){if(t){var i=[],r=this.dependentModels[e.axis];if(r.length&&!i.length)for(var o=0,a=r.length;a>o;o++)"category"===r[o].get("type")&&i.push(o);n[e.axisIndex]=i,i.length&&(t=!1)}},this),t&&this.ecModel.eachSeries(function(t){this._isSeriesHasAllAxesTypeOf(t,"value")&&Kb(function(e){var i=n[e.axisIndex],r=t.get(e.axisIndex),o=t.get(e.axisId),a=t.ecModel.queryComponents({mainType:e.axis,index:r,id:o})[0];r=a.componentIndex,f(i,r)<0&&i.push(r)})},this)},_autoSetOrient:function(){var t;this.eachTargetAxis(function(e){!t&&(t=e.name)},this),this.option.orient="y"===t?"vertical":"horizontal"},_isSeriesHasAllAxesTypeOf:function(t,e){var n=!0;return Kb(function(i){var r=t.get(i.axisIndex),o=this.dependentModels[i.axis][r];o&&o.get("type")===e||(n=!1)},this),n},_setDefaultThrottle:function(t){if(t.hasOwnProperty("throttle")&&(this._autoThrottle=!1),this._autoThrottle){var e=this.ecModel.option;this.option.throttle=e.animation&&e.animationDurationUpdate>0?100:20}},getFirstTargetAxisModel:function(){var t;return Kb(function(e){if(null==t){var n=this.get(e.axisIndex);n.length&&(t=this.dependentModels[e.axis][n[0]])}},this),t},eachTargetAxis:function(t,e){var n=this.ecModel;Kb(function(i){qb(this.get(i.axisIndex),function(r){t.call(e,i,r,this,n)},this)},this)},getAxisProxy:function(t,e){return this._axisProxies[t+"_"+e]},getAxisModel:function(t,e){var n=this.getAxisProxy(t,e);return n&&n.getAxisModel()},setRawRange:function(t,e){var n=this.option;qb([["start","startValue"],["end","endValue"]],function(e){(null!=t[e[0]]||null!=t[e[1]])&&(n[e[0]]=t[e[0]],n[e[1]]=t[e[1]])},this),!e&&Af(this,t)},getPercentRange:function(){var t=this.findRepresentativeAxisProxy();return t?t.getDataPercentWindow():void 0},getValueRange:function(t,e){if(null!=t||null!=e)return this.getAxisProxy(t,e).getDataValueWindow();var n=this.findRepresentativeAxisProxy();return n?n.getDataValueWindow():void 0},findRepresentativeAxisProxy:function(t){if(t)return t.__dzAxisProxy;var e=this._axisProxies;for(var n in e)if(e.hasOwnProperty(n)&&e[n].hostedBy(this))return e[n];for(var n in e)if(e.hasOwnProperty(n)&&!e[n].hostedBy(this))return e[n]},getRangePropMode:function(){return this._rangePropMode.slice()}}),Qb=xy.extend({type:"dataZoom",render:function(t,e,n){this.dataZoomModel=t,this.ecModel=e,this.api=n},getTargetCoordInfo:function(){function t(t,e,n,i){for(var r,o=0;o<n.length;o++)if(n[o].model===t){r=n[o];break}r||n.push(r={model:t,axisModels:[],coordIndex:i}),r.axisModels.push(e)}var e=this.dataZoomModel,n=this.ecModel,i={};return e.eachTargetAxis(function(e,r){var o=n.getComponent(e.axis,r);if(o){var a=o.getCoordSysModel();a&&t(a,o,i[a.mainType]||(i[a.mainType]=[]),a.componentIndex)}},this),i}}),tS=(Jb.extend({type:"dataZoom.slider",layoutMode:"box",defaultOption:{show:!0,right:"ph",top:"ph",width:"ph",height:"ph",left:null,bottom:null,backgroundColor:"rgba(47,69,84,0)",dataBackground:{lineStyle:{color:"#2f4554",width:.5,opacity:.3},areaStyle:{color:"rgba(47,69,84,0.3)",opacity:.3}},borderColor:"#ddd",fillerColor:"rgba(167,183,204,0.4)",handleIcon:"M8.2,13.6V3.9H6.3v9.7H3.1v14.9h3.3v9.7h1.8v-9.7h3.3V13.6H8.2z M9.7,24.4H4.8v-1.4h4.9V24.4z M9.7,19.1H4.8v-1.4h4.9V19.1z",handleSize:"100%",handleStyle:{color:"#a7b7cc"},labelPrecision:null,labelFormatter:null,showDetail:!0,showDataShadow:"auto",realtime:!0,zoomLock:!1,textStyle:{color:"#333"}}}),zv),eS=io,nS=ao,iS=w,rS=v,oS=7,aS=1,sS=30,lS="horizontal",uS="vertical",cS=5,hS=["line","bar","candlestick","scatter"],fS=Qb.extend({type:"dataZoom.slider",init:function(t,e){this._displayables={},this._orient,this._range,this._handleEnds,this._size,this._handleWidth,this._handleHeight,this._location,this._dragging,this._dataShadowInfo,this.api=e},render:function(t,e,n,i){return fS.superApply(this,"render",arguments),ts(this,"_dispatchZoomAction",this.dataZoomModel.get("throttle"),"fixRate"),this._orient=t.get("orient"),!1===this.dataZoomModel.get("show")?void this.group.removeAll():(i&&"dataZoom"===i.type&&i.from===this.uid||this._buildView(),void this._updateView())},remove:function(){fS.superApply(this,"remove",arguments),es(this,"_dispatchZoomAction")},dispose:function(){fS.superApply(this,"dispose",arguments),es(this,"_dispatchZoomAction")},_buildView:function(){var t=this.group;t.removeAll(),this._resetLocation(),this._resetInterval();var e=this._displayables.barGroup=new hp;this._renderBackground(),this._renderHandle(),this._renderDataShadow(),t.add(e),this._positionGroup()},_resetLocation:function(){var t=this.dataZoomModel,e=this.api,n=this._findCoordRect(),i={width:e.getWidth(),height:e.getHeight()},r=this._orient===lS?{right:i.width-n.x-n.width,top:i.height-sS-oS,width:n.width,height:sS}:{right:oS,top:n.y,width:sS,height:n.height},o=No(t.option);v(["right","top","width","height"],function(t){"ph"===o[t]&&(o[t]=r[t])});var a=Lo(o,i,t.padding);this._location={x:a.x,y:a.y},this._size=[a.width,a.height],this._orient===uS&&this._size.reverse()},_positionGroup:function(){var t=this.group,e=this._location,n=this._orient,i=this.dataZoomModel.getFirstTargetAxisModel(),r=i&&i.get("inverse"),o=this._displayables.barGroup,a=(this._dataShadowInfo||{}).otherAxisInverse;o.attr(n!==lS||r?n===lS&&r?{scale:a?[-1,1]:[-1,-1]}:n!==uS||r?{scale:a?[-1,-1]:[-1,1],rotation:Math.PI/2}:{scale:a?[1,-1]:[1,1],rotation:Math.PI/2}:{scale:a?[1,1]:[1,-1]});var s=t.getBoundingRect([o]);t.attr("position",[e.x-s.x,e.y-s.y])},_getViewExtent:function(){return[0,this._size[0]]},_renderBackground:function(){var t=this.dataZoomModel,e=this._size,n=this._displayables.barGroup;n.add(new tS({silent:!0,shape:{x:0,y:0,width:e[0],height:e[1]},style:{fill:t.get("backgroundColor")},z2:-40})),n.add(new tS({shape:{x:0,y:0,width:e[0],height:e[1]},style:{fill:"transparent"},z2:0,onclick:w(this._onClickPanelClick,this)}))},_renderDataShadow:function(){var t=this._dataShadowInfo=this._prepareDataShadowInfo();if(t){var e=this._size,n=t.series,i=n.getRawData(),r=n.getShadowDim?n.getShadowDim():t.otherDim;if(null!=r){var o=i.getDataExtent(r),a=.3*(o[1]-o[0]);o=[o[0]-a,o[1]+a];var s,l=[0,e[1]],u=[0,e[0]],h=[[e[0],0],[0,0]],f=[],d=u[1]/(i.count()-1),p=0,g=Math.round(i.count()/e[0]);i.each([r],function(t,e){if(g>0&&e%g)p+=d;else{var n=null==t||isNaN(t)||""===t,i=n?0:eS(t,o,l,!0);n&&!s&&e?(h.push([h[h.length-1][0],0]),f.push([f[f.length-1][0],0])):!n&&s&&(h.push([p,0]),f.push([p,0])),h.push([p,i]),f.push([p,i]),p+=d,s=n}});var v=this.dataZoomModel;this._displayables.barGroup.add(new Lv({shape:{points:h},style:c({fill:v.get("dataBackgroundColor")},v.getModel("dataBackground.areaStyle").getAreaStyle()),silent:!0,z2:-20})),this._displayables.barGroup.add(new Ev({shape:{points:f},style:v.getModel("dataBackground.lineStyle").getLineStyle(),silent:!0,z2:-19}))}}},_prepareDataShadowInfo:function(){var t=this.dataZoomModel,e=t.get("showDataShadow");if(!1!==e){var n,i=this.ecModel;return t.eachTargetAxis(function(r,o){var a=t.getAxisProxy(r.name,o).getTargetSeriesModels();v(a,function(t){if(!(n||!0!==e&&f(hS,t.get("type"))<0)){var a,s=i.getComponent(r.axis,o).axis,l=Tf(r.name),u=t.coordinateSystem;null!=l&&u.getOtherAxis&&(a=u.getOtherAxis(s).inverse),l=t.getData().mapDimension(l),n={thisAxis:s,series:t,thisDim:r.name,otherDim:l,otherAxisInverse:a}}},this)},this),n}},_renderHandle:function(){var t=this._displayables,e=t.handles=[],n=t.handleLabels=[],i=this._displayables.barGroup,r=this._size,o=this.dataZoomModel;i.add(t.filler=new tS({draggable:!0,cursor:Cf(this._orient),drift:iS(this._onDragMove,this,"all"),onmousemove:function(t){Ad(t.event)},ondragstart:iS(this._showDataInfo,this,!0),ondragend:iS(this._onDragEnd,this),onmouseover:iS(this._showDataInfo,this,!0),onmouseout:iS(this._showDataInfo,this,!1),style:{fill:o.get("fillerColor"),textPosition:"inside"}})),i.add(new tS({silent:!0,subPixelOptimize:!0,shape:{x:0,y:0,width:r[0],height:r[1]},style:{stroke:o.get("dataBackgroundColor")||o.get("borderColor"),lineWidth:aS,fill:"rgba(0,0,0,0)"}})),rS([0,1],function(t){var r=Yr(o.get("handleIcon"),{cursor:Cf(this._orient),draggable:!0,drift:iS(this._onDragMove,this,t),onmousemove:function(t){Ad(t.event)},ondragend:iS(this._onDragEnd,this),onmouseover:iS(this._showDataInfo,this,!0),onmouseout:iS(this._showDataInfo,this,!1)},{x:-1,y:0,width:2,height:2}),a=r.getBoundingRect();this._handleHeight=ro(o.get("handleSize"),this._size[1]),this._handleWidth=a.width/a.height*this._handleHeight,r.setStyle(o.getModel("handleStyle").getItemStyle());var s=o.get("handleColor");null!=s&&(r.style.fill=s),i.add(e[t]=r);var l=o.textStyleModel;this.group.add(n[t]=new Iv({silent:!0,invisible:!0,style:{x:0,y:0,text:"",textVerticalAlign:"middle",textAlign:"center",textFill:l.getTextColor(),textFont:l.getFont()},z2:10}))},this)},_resetInterval:function(){var t=this._range=this.dataZoomModel.getPercentRange(),e=this._getViewExtent();this._handleEnds=[eS(t[0],[0,100],e,!0),eS(t[1],[0,100],e,!0)]},_updateInterval:function(t,e){var n=this.dataZoomModel,i=this._handleEnds,r=this._getViewExtent(),o=n.findRepresentativeAxisProxy().getMinMaxSpan(),a=[0,100];Ub(e,i,r,n.get("zoomLock")?"all":t,null!=o.minSpan?eS(o.minSpan,a,r,!0):null,null!=o.maxSpan?eS(o.maxSpan,a,r,!0):null);var s=this._range,l=this._range=nS([eS(i[0],r,a,!0),eS(i[1],r,a,!0)]);return!s||s[0]!==l[0]||s[1]!==l[1]},_updateView:function(t){var e=this._displayables,n=this._handleEnds,i=nS(n.slice()),r=this._size;rS([0,1],function(t){var i=e.handles[t],o=this._handleHeight;i.attr({scale:[o/2,o/2],position:[n[t],r[1]/2-o/2]})},this),e.filler.setShape({x:i[0],y:0,width:i[1]-i[0],height:r[1]}),this._updateDataInfo(t)},_updateDataInfo:function(t){function e(t){var e=Hr(i.handles[t].parent,this.group),n=Gr(0===t?"right":"left",e),s=this._handleWidth/2+cS,l=Wr([h[t]+(0===t?-s:s),this._size[1]/2],e);r[t].setStyle({x:l[0],y:l[1],textVerticalAlign:o===lS?"middle":n,textAlign:o===lS?n:"center",text:a[t]})}var n=this.dataZoomModel,i=this._displayables,r=i.handleLabels,o=this._orient,a=["",""];if(n.get("showDetail")){var s=n.findRepresentativeAxisProxy();if(s){var l=s.getAxisModel().axis,u=this._range,c=t?s.calculateDataWindow({start:u[0],end:u[1]}).valueWindow:s.getDataValueWindow();a=[this._formatLabel(c[0],l),this._formatLabel(c[1],l)]}}var h=nS(this._handleEnds.slice());e.call(this,0),e.call(this,1)},_formatLabel:function(t,e){var n=this.dataZoomModel,i=n.get("labelFormatter"),r=n.get("labelPrecision");(null==r||"auto"===r)&&(r=e.getPixelPrecision());var o=null==t||isNaN(t)?"":"category"===e.type||"time"===e.type?e.scale.getLabel(Math.round(t)):t.toFixed(Math.min(r,20));return M(i)?i(t,o):I(i)?i.replace("{value}",o):o},_showDataInfo:function(t){t=this._dragging||t;var e=this._displayables.handleLabels;e[0].attr("invisible",!t),e[1].attr("invisible",!t)},_onDragMove:function(t,e,n){this._dragging=!0;var i=this._displayables.barGroup.getLocalTransform(),r=Wr([e,n],i,!0),o=this._updateInterval(t,r[0]),a=this.dataZoomModel.get("realtime");this._updateView(!a),o&&a&&this._dispatchZoomAction()},_onDragEnd:function(){this._dragging=!1,this._showDataInfo(!1);var t=this.dataZoomModel.get("realtime");!t&&this._dispatchZoomAction()},_onClickPanelClick:function(t){var e=this._size,n=this._displayables.barGroup.transformCoordToLocal(t.offsetX,t.offsetY);if(!(n[0]<0||n[0]>e[0]||n[1]<0||n[1]>e[1])){var i=this._handleEnds,r=(i[0]+i[1])/2,o=this._updateInterval("all",n[0]-r);this._updateView(),o&&this._dispatchZoomAction()}},_dispatchZoomAction:function(){var t=this._range;this.api.dispatchAction({type:"dataZoom",from:this.uid,dataZoomId:this.dataZoomModel.id,start:t[0],end:t[1]})},_findCoordRect:function(){var t;if(rS(this.getTargetCoordInfo(),function(e){if(!t&&e.length){var n=e[0].model.coordinateSystem;t=n.getRect&&n.getRect()}}),!t){var e=this.api.getWidth(),n=this.api.getHeight();t={x:.2*e,y:.2*n,width:.6*e,height:.6*n}}return t}});rl({getTargetSeries:function(t){var e=$();return t.eachComponent("dataZoom",function(t){t.eachTargetAxis(function(t,n,i){var r=i.getAxisProxy(t.name,n);v(r.getTargetSeriesModels(),function(t){e.set(t.uid,t)})})}),e},modifyOutputEnd:!0,overallReset:function(t,e){t.eachComponent("dataZoom",function(t){t.eachTargetAxis(function(t,n,i){i.getAxisProxy(t.name,n).reset(i,e)}),t.eachTargetAxis(function(t,n,i){i.getAxisProxy(t.name,n).filterData(i,e)})}),t.eachComponent("dataZoom",function(t){var e=t.findRepresentativeAxisProxy(),n=e.getDataPercentWindow(),i=e.getDataValueWindow();t.setRawRange({start:n[0],end:n[1],startValue:i[0],endValue:i[1]},!0)})}}),al("dataZoom",function(t,e){var n=yf(w(e.eachComponent,e,"dataZoom"),Gb,function(t,e){return t.get(e.axisIndex)}),i=[];e.eachComponent({mainType:"dataZoom",query:t},function(t){i.push.apply(i,n(t).nodes)}),v(i,function(e){e.setRawRange({start:t.start,end:t.end,startValue:t.startValue,endValue:t.endValue})})}),Jb.extend({type:"dataZoom.inside",defaultOption:{disabled:!1,zoomLock:!1,zoomOnMouseWheel:!0,moveOnMouseMove:!0,moveOnMouseWheel:!1,preventDefaultMouseMove:!0}});var dS="\0_ec_interaction_mutex";al({type:"takeGlobalCursor",event:"globalCursorTaken",update:"update"},function(){}),p(Of,xd);var pS="\0_ec_dataZoom_roams",gS=w,vS=Qb.extend({type:"dataZoom.inside",init:function(){this._range},render:function(t,e,n){vS.superApply(this,"render",arguments),this._range=t.getPercentRange(),v(this.getTargetCoordInfo(),function(e,i){var r=m(e,function(t){return jf(t.model)});v(e,function(e){var o=e.model,a={};v(["pan","zoom","scrollMove"],function(t){a[t]=gS(mS[t],this,e,i)},this),Vf(n,{coordId:jf(o),allCoordIds:r,containsPoint:function(t,e,n){return o.coordinateSystem.containPoint([e,n])},dataZoomId:t.id,dataZoomModel:t,getRange:a})},this)},this)},dispose:function(){$f(this.api,this.dataZoomModel.id),vS.superApply(this,"dispose",arguments),this._range=null}}),mS={zoom:function(t,e,n,i){var r=this._range,o=r.slice(),a=t.axisModels[0];if(a){var s=yS[e](null,[i.originX,i.originY],a,n,t),l=(s.signal>0?s.pixelStart+s.pixelLength-s.pixel:s.pixel-s.pixelStart)/s.pixelLength*(o[1]-o[0])+o[0],u=Math.max(1/i.scale,0);o[0]=(o[0]-l)*u+l,o[1]=(o[1]-l)*u+l;var c=this.dataZoomModel.findRepresentativeAxisProxy().getMinMaxSpan();return Ub(0,o,[0,100],0,c.minSpan,c.maxSpan),this._range=o,r[0]!==o[0]||r[1]!==o[1]?o:void 0}},pan:Xf(function(t,e,n,i,r,o){var a=yS[i]([o.oldX,o.oldY],[o.newX,o.newY],e,r,n);return a.signal*(t[1]-t[0])*a.pixel/a.pixelLength}),scrollMove:Xf(function(t,e,n,i,r,o){var a=yS[i]([0,0],[o.scrollDelta,o.scrollDelta],e,r,n);return a.signal*(t[1]-t[0])*o.scrollDelta})},yS={grid:function(t,e,n,i,r){var o=n.axis,a={},s=r.model.coordinateSystem.getRect();return t=t||[0,0],"x"===o.dim?(a.pixel=e[0]-t[0],a.pixelLength=s.width,a.pixelStart=s.x,a.signal=o.inverse?1:-1):(a.pixel=e[1]-t[1],a.pixelLength=s.height,a.pixelStart=s.y,a.signal=o.inverse?-1:1),a},polar:function(t,e,n,i,r){var o=n.axis,a={},s=r.model.coordinateSystem,l=s.getRadiusAxis().getExtent(),u=s.getAngleAxis().getExtent();return t=t?s.pointToCoord(t):[0,0],e=s.pointToCoord(e),"radiusAxis"===n.mainType?(a.pixel=e[0]-t[0],a.pixelLength=l[1]-l[0],a.pixelStart=l[0],a.signal=o.inverse?1:-1):(a.pixel=e[1]-t[1],a.pixelLength=u[1]-u[0],a.pixelStart=u[0],a.signal=o.inverse?-1:1),a},singleAxis:function(t,e,n,i,r){var o=n.axis,a=r.model.coordinateSystem.getRect(),s={};return t=t||[0,0],"horizontal"===o.orient?(s.pixel=e[0]-t[0],s.pixelLength=a.width,s.pixelStart=a.x,s.signal=o.inverse?1:-1):(s.pixel=e[1]-t[1],s.pixelLength=a.height,s.pixelStart=a.y,s.signal=o.inverse?-1:1),s}};e.version=u_,e.dependencies=c_,e.PRIORITY=w_,e.init=qs,e.connect=Ks,e.disConnect=Js,e.disconnect=$_,e.dispose=Qs,e.getInstanceByDom=tl,e.getInstanceById=el,e.registerTheme=nl,e.registerPreprocessor=il,e.registerProcessor=rl,e.registerPostUpdate=ol,e.registerAction=al,e.registerCoordinateSystem=sl,e.getCoordinateSystemDimensions=ll,e.registerLayout=ul,e.registerVisual=cl,e.registerLoading=fl,e.extendComponentModel=dl,e.extendComponentView=pl,e.extendSeriesModel=gl,e.extendChartView=vl,e.setCanvasCreator=ml,e.registerMap=yl,e.getMap=_l,e.dataTool=j_,e.zrender=lg,e.number=ym,e.format=Im,e.throttle=Qa,e.helper=Wx,e.matrix=Ld,e.vector=yd,e.color=Jd,e.parseGeoJSON=Ux,e.parseGeoJson=qx,e.util=Kx,e.graphic=Jx,e.List=tx,e.Model=qr,e.Axis=Yx,e.env=Jf})}).call(this,n("0de9")["default"])},"3c47":function(t,e,n){"use strict";(function(t){n("894e");i(n("66fd"));var e=i(n("d50e"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"44f3":function(t,e,n){"use strict";(function(t){n("894e");i(n("66fd"));var e=i(n("a42d"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"4e26":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("a34a")),r=o(n("4f2f"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,i,r,o,a){try{var s=t[o](a),l=s.value}catch(u){return void n(u)}s.done?e(l):Promise.resolve(l).then(i,r)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(i,r){var o=t.apply(e,n);function s(t){a(o,i,r,s,l,"next",t)}function l(t){a(o,i,r,s,l,"throw",t)}s(void 0)})}}var l={findUserByToken:function(){var t=s(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.get("/myuser/findUserByToken",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),findDepartmentByOrgId:function(){var t=s(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.get("/myuser/findDepartmentByOrgId",{orgId:e.orgId});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),alterPassword:function(){var t=s(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.post("/myuser/alterPassword",{formerPassword:e.formerPassword,password:e.password,userName:e.userName});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()};e.default=l},"4f2f":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return l(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done);i=!0)if(n.push(a.value),e&&n.length===e)break}catch(l){r=!0,o=l}finally{try{i||null==s["return"]||s["return"]()}finally{if(r)throw o}}return n}function l(t){if(Array.isArray(t))return t}function u(t,e,n,i,r,o,a){try{var s=t[o](a),l=s.value}catch(u){return void n(u)}s.done?e(l):Promise.resolve(l).then(i,r)}function c(t){return function(){var e=this,n=arguments;return new Promise(function(i,r){var o=t.apply(e,n);function a(t){u(o,i,r,a,s,"next",t)}function s(t){u(o,i,r,a,s,"throw",t)}a(void 0)})}}var h="http://39.97.111.250:8181",f=!1,d={baseUrl:h,getHeader:function(){var e=t.getStorageSync("userInfo");return{userToken:e.token}},post:function(){var e=c(i.default.mark(function e(n,r){var a,s,l;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.request({url:"".concat(h).concat(n),method:"POST",header:this.getHeader(),data:r});case 2:return a=e.sent,s=o(a,2),s[0],l=s[1],this.returnLogin(l),e.abrupt("return",l.data);case 8:case"end":return e.stop()}},e,this)}));function n(t,n){return e.apply(this,arguments)}return n}(),get:function(){var e=c(i.default.mark(function e(n,r){var a,s,l;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.request({url:"".concat(h).concat(n),method:"GET",header:this.getHeader(),data:r});case 2:return a=e.sent,s=o(a,2),s[0],l=s[1],this.returnLogin(l),e.abrupt("return",l.data);case 8:case"end":return e.stop()}},e,this)}));function n(t,n){return e.apply(this,arguments)}return n}(),returnLogin:function(e){var n=e.data.code;300!==n&&200!==n||f||(t.showModal({content:e.data.msg,showCancel:!1,success:function(){f=!1,t.setStorageSync("userInfo",{password:"",userName:"",keep:!1}),t.redirectTo({url:"/pages/login/index"})}}),f=!0)}};e.default=d}).call(this,n("6e42")["default"])},"514b":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("a34a")),r=o(n("4f2f"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e){return u(t)||l(t,e)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function l(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done);i=!0)if(n.push(a.value),e&&n.length===e)break}catch(l){r=!0,o=l}finally{try{i||null==s["return"]||s["return"]()}finally{if(r)throw o}}return n}function u(t){if(Array.isArray(t))return t}function c(t,e,n,i,r,o,a){try{var s=t[o](a),l=s.value}catch(u){return void n(u)}s.done?e(l):Promise.resolve(l).then(i,r)}function h(t){return function(){var e=this,n=arguments;return new Promise(function(i,r){var o=t.apply(e,n);function a(t){c(o,i,r,a,s,"next",t)}function s(t){c(o,i,r,a,s,"throw",t)}a(void 0)})}}var f={ftpfileUpload:function(){var e=h(i.default.mark(function e(n){var o,s,l;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.uploadFile({url:"".concat(r.default.baseUrl,"/schedule/ftpfileUpload"),filePath:n.imageSrc,header:r.default.getHeader(),fileType:"image",name:"file"});case 2:return o=e.sent,s=a(o,2),s[0],l=s[1],e.abrupt("return",l);case 7:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}(),addSchedule:function(){var t=h(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.post("/schedule/addSchedule",{latitude:e.latitude,longitude:e.longitude,scheduleDate:e.scheduleDate,scheduleExplain:e.scheduleExplain,scheduleId:"null",scheduleStatic:e.scheduleStatic,url:e.url,userId:e.userId});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()};e.default=f}).call(this,n("6e42")["default"])},"554b":function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){function t(e,n){i(this,t),this.ctx=e,this.canvasId=n,this.chart=null,t.initStyle(e),this.initEvent()}return o(t,[{key:"getContext",value:function(t){return"2d"===t?this.ctx:null}},{key:"setChart",value:function(t){this.chart=t}},{key:"attachEvent",value:function(){}},{key:"detachEvent",value:function(){}},{key:"initEvent",value:function(){var t=this;this.event={};var e=[{wxName:"touchStart",ecName:"mousedown"},{wxName:"touchMove",ecName:"mousemove"},{wxName:"touchEnd",ecName:"mouseup"},{wxName:"touchEnd",ecName:"click"}];e.forEach(function(e){t.event[e.wxName]=function(n){var i=n.mp.touches[0];t.chart._zr.handler.dispatch(e.ecName,{zrX:"tap"===e.wxName?i.clientX:i.x,zrY:"tap"===e.wxName?i.clientY:i.y})}})}}],[{key:"initStyle",value:function(t){var e=arguments,n=["fillStyle","strokeStyle","globalAlpha","textAlign","textBaseAlign","shadow","lineWidth","lineCap","lineJoin","lineDash","miterLimit","fontSize"];n.forEach(function(e){Object.defineProperty(t,e,{set:function(n){("fillStyle"!==e&&"strokeStyle"!==e||"none"!==n&&null!==n)&&t["set".concat(e.charAt(0).toUpperCase()).concat(e.slice(1))](n)}})}),t.createRadialGradient=function(){return t.createCircularGradient(e)}}}]),t}();e.default=a},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function i(t){return void 0===t||null===t}function r(t){return void 0!==t&&null!==t}function o(t){return!0===t}function a(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function l(t){return null!==t&&"object"===typeof t}var u=Object.prototype.toString;function c(t){return"[object Object]"===u.call(t)}function h(t){return"[object RegExp]"===u.call(t)}function f(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function d(t){return r(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function p(t){return null==t?"":Array.isArray(t)||c(t)&&t.toString===u?JSON.stringify(t,null,2):String(t)}function g(t){var e=parseFloat(t);return isNaN(e)?t:e}function v(t,e){for(var n=Object.create(null),i=t.split(","),r=0;r<i.length;r++)n[i[r]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}v("slot,component",!0);var m=v("key,ref,slot,slot-scope,is");function y(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var _=Object.prototype.hasOwnProperty;function x(t,e){return _.call(t,e)}function w(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var b=/-(\w)/g,S=w(function(t){return t.replace(b,function(t,e){return e?e.toUpperCase():""})}),M=w(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),I=/\B([A-Z])/g,A=w(function(t){return t.replace(I,"-$1").toLowerCase()});function T(t,e){function n(n){var i=arguments.length;return i?i>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function C(t,e){return t.bind(e)}var k=Function.prototype.bind?C:T;function D(t,e){e=e||0;var n=t.length-e,i=new Array(n);while(n--)i[n]=t[n+e];return i}function O(t,e){for(var n in e)t[n]=e[n];return t}function P(t){for(var e={},n=0;n<t.length;n++)t[n]&&O(e,t[n]);return e}function L(t,e,n){}var E=function(t,e,n){return!1},N=function(t){return t};function B(t,e){if(t===e)return!0;var n=l(t),i=l(e);if(!n||!i)return!n&&!i&&String(t)===String(e);try{var r=Array.isArray(t),o=Array.isArray(e);if(r&&o)return t.length===e.length&&t.every(function(t,n){return B(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(r||o)return!1;var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every(function(n){return B(t[n],e[n])})}catch(u){return!1}}function z(t,e){for(var n=0;n<t.length;n++)if(B(t[n],e))return n;return-1}function R(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var F=["component","directive","filter"],V=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],$={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:E,isReservedAttr:E,isUnknownElement:E,getTagNamespace:L,parsePlatformTagName:N,mustUseProp:E,async:!0,_lifecycleHooks:V},j=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function H(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function W(t,e,n,i){Object.defineProperty(t,e,{value:n,enumerable:!!i,writable:!0,configurable:!0})}var G=new RegExp("[^"+j.source+".$_\\d]");function U(t){if(!G.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var Z,X="__proto__"in{},Y="undefined"!==typeof window,q="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,K=q&&WXEnvironment.platform.toLowerCase(),J=Y&&window.navigator.userAgent.toLowerCase(),Q=J&&/msie|trident/.test(J),tt=(J&&J.indexOf("msie 9.0"),J&&J.indexOf("edge/")>0),et=(J&&J.indexOf("android"),J&&/iphone|ipad|ipod|ios/.test(J)||"ios"===K),nt=(J&&/chrome\/\d+/.test(J),J&&/phantomjs/.test(J),J&&J.match(/firefox\/(\d+)/),{}.watch);if(Y)try{var it={};Object.defineProperty(it,"passive",{get:function(){}}),window.addEventListener("test-passive",null,it)}catch(nr){}var rt=function(){return void 0===Z&&(Z=!Y&&!q&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),Z},ot=Y&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,lt="undefined"!==typeof Symbol&&at(Symbol)&&"undefined"!==typeof Reflect&&at(Reflect.ownKeys);st="undefined"!==typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ut=L,ct=0,ht=function(){this.id=ct++,this.subs=[]};ht.prototype.addSub=function(t){this.subs.push(t)},ht.prototype.removeSub=function(t){y(this.subs,t)},ht.prototype.depend=function(){ht.target&&ht.target.addDep(this)},ht.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},ht.target=null;var ft=[];function dt(t){ft.push(t),ht.target=t}function pt(){ft.pop(),ht.target=ft[ft.length-1]}var gt=function(t,e,n,i,r,o,a,s){this.tag=t,this.data=e,this.children=n,this.text=i,this.elm=r,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},vt={child:{configurable:!0}};vt.child.get=function(){return this.componentInstance},Object.defineProperties(gt.prototype,vt);var mt=function(t){void 0===t&&(t="");var e=new gt;return e.text=t,e.isComment=!0,e};function yt(t){return new gt(void 0,void 0,void 0,String(t))}function _t(t){var e=new gt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var xt=Array.prototype,wt=Object.create(xt),bt=["push","pop","shift","unshift","splice","sort","reverse"];bt.forEach(function(t){var e=xt[t];W(wt,t,function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];var r,o=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":r=n;break;case"splice":r=n.slice(2);break}return r&&a.observeArray(r),a.dep.notify(),o})});var St=Object.getOwnPropertyNames(wt),Mt=!0;function It(t){Mt=t}var At=function(t){this.value=t,this.dep=new ht,this.vmCount=0,W(t,"__ob__",this),Array.isArray(t)?(X?Tt(t,wt):Ct(t,wt,St),this.observeArray(t)):this.walk(t)};function Tt(t,e){t.__proto__=e}function Ct(t,e,n){for(var i=0,r=n.length;i<r;i++){var o=n[i];W(t,o,e[o])}}function kt(t,e){var n;if(l(t)&&!(t instanceof gt))return x(t,"__ob__")&&t.__ob__ instanceof At?n=t.__ob__:Mt&&!rt()&&(Array.isArray(t)||c(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new At(t)),e&&n&&n.vmCount++,n}function Dt(t,e,n,i,r){var o=new ht,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,l=a&&a.set;s&&!l||2!==arguments.length||(n=t[e]);var u=!r&&kt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ht.target&&(o.depend(),u&&(u.dep.depend(),Array.isArray(e)&&Lt(e))),e},set:function(e){var i=s?s.call(t):n;e===i||e!==e&&i!==i||s&&!l||(l?l.call(t,e):n=e,u=!r&&kt(e),o.notify())}})}}function Ot(t,e,n){if(Array.isArray(t)&&f(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var i=t.__ob__;return t._isVue||i&&i.vmCount?n:i?(Dt(i.value,e,n),i.dep.notify(),n):(t[e]=n,n)}function Pt(t,e){if(Array.isArray(t)&&f(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||x(t,e)&&(delete t[e],n&&n.dep.notify())}}function Lt(t){for(var e=void 0,n=0,i=t.length;n<i;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Lt(e)}At.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Dt(t,e[n])},At.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)kt(t[e])};var Et=$.optionMergeStrategies;function Nt(t,e){if(!e)return t;for(var n,i,r,o=lt?Reflect.ownKeys(e):Object.keys(e),a=0;a<o.length;a++)n=o[a],"__ob__"!==n&&(i=t[n],r=e[n],x(t,n)?i!==r&&c(i)&&c(r)&&Nt(i,r):Ot(t,n,r));return t}function Bt(t,e,n){return n?function(){var i="function"===typeof e?e.call(n,n):e,r="function"===typeof t?t.call(n,n):t;return i?Nt(i,r):r}:e?t?function(){return Nt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function zt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Rt(n):n}function Rt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Ft(t,e,n,i){var r=Object.create(t||null);return e?O(r,e):r}Et.data=function(t,e,n){return n?Bt(t,e,n):e&&"function"!==typeof e?t:Bt(t,e)},V.forEach(function(t){Et[t]=zt}),F.forEach(function(t){Et[t+"s"]=Ft}),Et.watch=function(t,e,n,i){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var r={};for(var o in O(r,t),e){var a=r[o],s=e[o];a&&!Array.isArray(a)&&(a=[a]),r[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return r},Et.props=Et.methods=Et.inject=Et.computed=function(t,e,n,i){if(!t)return e;var r=Object.create(null);return O(r,t),e&&O(r,e),r},Et.provide=Bt;var Vt=function(t,e){return void 0===e?t:e};function $t(t,e){var n=t.props;if(n){var i,r,o,a={};if(Array.isArray(n)){i=n.length;while(i--)r=n[i],"string"===typeof r&&(o=S(r),a[o]={type:null})}else if(c(n))for(var s in n)r=n[s],o=S(s),a[o]=c(r)?r:{type:r};else 0;t.props=a}}function jt(t,e){var n=t.inject;if(n){var i=t.inject={};if(Array.isArray(n))for(var r=0;r<n.length;r++)i[n[r]]={from:n[r]};else if(c(n))for(var o in n){var a=n[o];i[o]=c(a)?O({from:o},a):{from:a}}else 0}}function Ht(t){var e=t.directives;if(e)for(var n in e){var i=e[n];"function"===typeof i&&(e[n]={bind:i,update:i})}}function Wt(t,e,n){if("function"===typeof e&&(e=e.options),$t(e,n),jt(e,n),Ht(e),!e._base&&(e.extends&&(t=Wt(t,e.extends,n)),e.mixins))for(var i=0,r=e.mixins.length;i<r;i++)t=Wt(t,e.mixins[i],n);var o,a={};for(o in t)s(o);for(o in e)x(t,o)||s(o);function s(i){var r=Et[i]||Vt;a[i]=r(t[i],e[i],n,i)}return a}function Gt(t,e,n,i){if("string"===typeof n){var r=t[e];if(x(r,n))return r[n];var o=S(n);if(x(r,o))return r[o];var a=M(o);if(x(r,a))return r[a];var s=r[n]||r[o]||r[a];return s}}function Ut(t,e,n,i){var r=e[t],o=!x(n,t),a=n[t],s=qt(Boolean,r.type);if(s>-1)if(o&&!x(r,"default"))a=!1;else if(""===a||a===A(t)){var l=qt(String,r.type);(l<0||s<l)&&(a=!0)}if(void 0===a){a=Zt(i,r,t);var u=Mt;It(!0),kt(a),It(u)}return a}function Zt(t,e,n){if(x(e,"default")){var i=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof i&&"Function"!==Xt(e.type)?i.call(t):i}}function Xt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Yt(t,e){return Xt(t)===Xt(e)}function qt(t,e){if(!Array.isArray(e))return Yt(e,t)?0:-1;for(var n=0,i=e.length;n<i;n++)if(Yt(e[n],t))return n;return-1}function Kt(t,e,n){dt();try{if(e){var i=e;while(i=i.$parent){var r=i.$options.errorCaptured;if(r)for(var o=0;o<r.length;o++)try{var a=!1===r[o].call(i,t,e,n);if(a)return}catch(nr){Qt(nr,i,"errorCaptured hook")}}}Qt(t,e,n)}finally{pt()}}function Jt(t,e,n,i,r){var o;try{o=n?t.apply(e,n):t.call(e),o&&!o._isVue&&d(o)&&!o._handled&&(o.catch(function(t){return Kt(t,i,r+" (Promise/async)")}),o._handled=!0)}catch(nr){Kt(nr,i,r)}return o}function Qt(t,e,n){if($.errorHandler)try{return $.errorHandler.call(null,t,e,n)}catch(nr){nr!==t&&te(nr,null,"config.errorHandler")}te(t,e,n)}function te(t,e,n){if(!Y&&!q||"undefined"===typeof console)throw t;console.error(t)}var ee,ne=[],ie=!1;function re(){ie=!1;var t=ne.slice(0);ne.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&at(Promise)){var oe=Promise.resolve();ee=function(){oe.then(re),et&&setTimeout(L)}}else if(Q||"undefined"===typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ee="undefined"!==typeof setImmediate&&at(setImmediate)?function(){setImmediate(re)}:function(){setTimeout(re,0)};else{var ae=1,se=new MutationObserver(re),le=document.createTextNode(String(ae));se.observe(le,{characterData:!0}),ee=function(){ae=(ae+1)%2,le.data=String(ae)}}function ue(t,e){var n;if(ne.push(function(){if(t)try{t.call(e)}catch(nr){Kt(nr,e,"nextTick")}else n&&n(e)}),ie||(ie=!0,ee()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var ce=new st;function he(t){fe(t,ce),ce.clear()}function fe(t,e){var n,i,r=Array.isArray(t);if(!(!r&&!l(t)||Object.isFrozen(t)||t instanceof gt)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(r){n=t.length;while(n--)fe(t[n],e)}else{i=Object.keys(t),n=i.length;while(n--)fe(t[i[n]],e)}}}var de=w(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var i="!"===t.charAt(0);return t=i?t.slice(1):t,{name:t,once:n,capture:i,passive:e}});function pe(t,e){function n(){var t=arguments,i=n.fns;if(!Array.isArray(i))return Jt(i,null,arguments,e,"v-on handler");for(var r=i.slice(),o=0;o<r.length;o++)Jt(r[o],null,t,e,"v-on handler")}return n.fns=t,n}function ge(t,e,n,r,a,s){var l,u,c,h;for(l in t)u=t[l],c=e[l],h=de(l),i(u)||(i(c)?(i(u.fns)&&(u=t[l]=pe(u,s)),o(h.once)&&(u=t[l]=a(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==c&&(c.fns=u,t[l]=c));for(l in e)i(t[l])&&(h=de(l),r(h.name,e[l],h.capture))}function ve(t,e,n){var o=e.options.props;if(!i(o)){var a={},s=t.attrs,l=t.props;if(r(s)||r(l))for(var u in o){var c=A(u);me(a,l,u,c,!0)||me(a,s,u,c,!1)}return a}}function me(t,e,n,i,o){if(r(e)){if(x(e,n))return t[n]=e[n],o||delete e[n],!0;if(x(e,i))return t[n]=e[i],o||delete e[i],!0}return!1}function ye(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function _e(t){return s(t)?[yt(t)]:Array.isArray(t)?we(t):void 0}function xe(t){return r(t)&&r(t.text)&&a(t.isComment)}function we(t,e){var n,a,l,u,c=[];for(n=0;n<t.length;n++)a=t[n],i(a)||"boolean"===typeof a||(l=c.length-1,u=c[l],Array.isArray(a)?a.length>0&&(a=we(a,(e||"")+"_"+n),xe(a[0])&&xe(u)&&(c[l]=yt(u.text+a[0].text),a.shift()),c.push.apply(c,a)):s(a)?xe(u)?c[l]=yt(u.text+a):""!==a&&c.push(yt(a)):xe(a)&&xe(u)?c[l]=yt(u.text+a.text):(o(t._isVList)&&r(a.tag)&&i(a.key)&&r(e)&&(a.key="__vlist"+e+"_"+n+"__"),c.push(a)));return c}function be(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Se(t){var e=Me(t.$options.inject,t);e&&(It(!1),Object.keys(e).forEach(function(n){Dt(t,n,e[n])}),It(!0))}function Me(t,e){if(t){for(var n=Object.create(null),i=lt?Reflect.ownKeys(t):Object.keys(t),r=0;r<i.length;r++){var o=i[r];if("__ob__"!==o){var a=t[o].from,s=e;while(s){if(s._provided&&x(s._provided,a)){n[o]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[o]){var l=t[o].default;n[o]="function"===typeof l?l.call(e):l}else 0}}return n}}function Ie(t,e){if(!t||!t.length)return{};for(var n={},i=0,r=t.length;i<r;i++){var o=t[i],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==e&&o.fnContext!==e||!a||null==a.slot)(n.default||(n.default=[])).push(o);else{var s=a.slot,l=n[s]||(n[s]=[]);"template"===o.tag?l.push.apply(l,o.children||[]):l.push(o)}}for(var u in n)n[u].every(Ae)&&delete n[u];return n}function Ae(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Te(t,e,i){var r,o=Object.keys(e).length>0,a=t?!!t.$stable:!o,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&i&&i!==n&&s===i.$key&&!o&&!i.$hasNormal)return i;for(var l in r={},t)t[l]&&"$"!==l[0]&&(r[l]=Ce(e,l,t[l]))}else r={};for(var u in e)u in r||(r[u]=ke(e,u));return t&&Object.isExtensible(t)&&(t._normalized=r),W(r,"$stable",a),W(r,"$key",s),W(r,"$hasNormal",o),r}function Ce(t,e,n){var i=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:_e(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:i,enumerable:!0,configurable:!0}),i}function ke(t,e){return function(){return t[e]}}function De(t,e){var n,i,o,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),i=0,o=t.length;i<o;i++)n[i]=e(t[i],i);else if("number"===typeof t)for(n=new Array(t),i=0;i<t;i++)n[i]=e(i+1,i);else if(l(t))if(lt&&t[Symbol.iterator]){n=[];var u=t[Symbol.iterator](),c=u.next();while(!c.done)n.push(e(c.value,n.length)),c=u.next()}else for(a=Object.keys(t),n=new Array(a.length),i=0,o=a.length;i<o;i++)s=a[i],n[i]=e(t[s],s,i);return r(n)||(n=[]),n._isVList=!0,n}function Oe(t,e,n,i){var r,o=this.$scopedSlots[t];o?(n=n||{},i&&(n=O(O({},i),n)),r=o(n)||e):r=this.$slots[t]||e;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},r):r}function Pe(t){return Gt(this.$options,"filters",t,!0)||N}function Le(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Ee(t,e,n,i,r){var o=$.keyCodes[e]||n;return r&&i&&!$.keyCodes[e]?Le(r,i):o?Le(o,t):i?A(i)!==e:void 0}function Ne(t,e,n,i,r){if(n)if(l(n)){var o;Array.isArray(n)&&(n=P(n));var a=function(a){if("class"===a||"style"===a||m(a))o=t;else{var s=t.attrs&&t.attrs.type;o=i||$.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var l=S(a),u=A(a);if(!(l in o)&&!(u in o)&&(o[a]=n[a],r)){var c=t.on||(t.on={});c["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function Be(t,e){var n=this._staticTrees||(this._staticTrees=[]),i=n[t];return i&&!e?i:(i=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Re(i,"__static__"+t,!1),i)}function ze(t,e,n){return Re(t,"__once__"+e+(n?"_"+n:""),!0),t}function Re(t,e,n){if(Array.isArray(t))for(var i=0;i<t.length;i++)t[i]&&"string"!==typeof t[i]&&Fe(t[i],e+"_"+i,n);else Fe(t,e,n)}function Fe(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ve(t,e){if(e)if(c(e)){var n=t.on=t.on?O({},t.on):{};for(var i in e){var r=n[i],o=e[i];n[i]=r?[].concat(r,o):o}}else;return t}function $e(t,e,n,i){e=e||{$stable:!n};for(var r=0;r<t.length;r++){var o=t[r];Array.isArray(o)?$e(o,e,n):o&&(o.proxy&&(o.fn.proxy=!0),e[o.key]=o.fn)}return i&&(e.$key=i),e}function je(t,e){for(var n=0;n<e.length;n+=2){var i=e[n];"string"===typeof i&&i&&(t[e[n]]=e[n+1])}return t}function He(t,e){return"string"===typeof t?e+t:t}function We(t){t._o=ze,t._n=g,t._s=p,t._l=De,t._t=Oe,t._q=B,t._i=z,t._m=Be,t._f=Pe,t._k=Ee,t._b=Ne,t._v=yt,t._e=mt,t._u=$e,t._g=Ve,t._d=je,t._p=He}function Ge(t,e,i,r,a){var s,l=this,u=a.options;x(r,"_uid")?(s=Object.create(r),s._original=r):(s=r,r=r._original);var c=o(u._compiled),h=!c;this.data=t,this.props=e,this.children=i,this.parent=r,this.listeners=t.on||n,this.injections=Me(u.inject,r),this.slots=function(){return l.$slots||Te(t.scopedSlots,l.$slots=Ie(i,r)),l.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Te(t.scopedSlots,this.slots())}}),c&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Te(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,i){var o=on(s,t,e,n,i,h);return o&&!Array.isArray(o)&&(o.fnScopeId=u._scopeId,o.fnContext=r),o}:this._c=function(t,e,n,i){return on(s,t,e,n,i,h)}}function Ue(t,e,i,o,a){var s=t.options,l={},u=s.props;if(r(u))for(var c in u)l[c]=Ut(c,u,e||n);else r(i.attrs)&&Xe(l,i.attrs),r(i.props)&&Xe(l,i.props);var h=new Ge(i,l,a,o,t),f=s.render.call(null,h._c,h);if(f instanceof gt)return Ze(f,i,h.parent,s,h);if(Array.isArray(f)){for(var d=_e(f)||[],p=new Array(d.length),g=0;g<d.length;g++)p[g]=Ze(d[g],i,h.parent,s,h);return p}}function Ze(t,e,n,i,r){var o=_t(t);return o.fnContext=n,o.fnOptions=i,e.slot&&((o.data||(o.data={})).slot=e.slot),o}function Xe(t,e){for(var n in e)t[S(n)]=e[n]}We(Ge.prototype);var Ye={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Ye.prepatch(n,n)}else{var i=t.componentInstance=Je(t,Mn);i.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,i=e.componentInstance=t.componentInstance;Cn(i,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Pn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Wn(n):Dn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?On(e,!0):e.$destroy())}},qe=Object.keys(Ye);function Ke(t,e,n,a,s){if(!i(t)){var u=n.$options._base;if(l(t)&&(t=u.extend(t)),"function"===typeof t){var c;if(i(t.cid)&&(c=t,t=gn(c,u),void 0===t))return pn(c,e,n,a,s);e=e||{},di(t),r(e.model)&&en(t.options,e);var h=ve(e,t,s);if(o(t.options.functional))return Ue(t,h,e,n,a);var f=e.on;if(e.on=e.nativeOn,o(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}Qe(e);var p=t.options.name||s,g=new gt("vue-component-"+t.cid+(p?"-"+p:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:f,tag:s,children:a},c);return g}}}function Je(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},i=t.data.inlineTemplate;return r(i)&&(n.render=i.render,n.staticRenderFns=i.staticRenderFns),new t.componentOptions.Ctor(n)}function Qe(t){for(var e=t.hook||(t.hook={}),n=0;n<qe.length;n++){var i=qe[n],r=e[i],o=Ye[i];r===o||r&&r._merged||(e[i]=r?tn(o,r):o)}}function tn(t,e){var n=function(n,i){t(n,i),e(n,i)};return n._merged=!0,n}function en(t,e){var n=t.model&&t.model.prop||"value",i=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var o=e.on||(e.on={}),a=o[i],s=e.model.callback;r(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(o[i]=[s].concat(a)):o[i]=s}var nn=1,rn=2;function on(t,e,n,i,r,a){return(Array.isArray(n)||s(n))&&(r=i,i=n,n=void 0),o(a)&&(r=rn),an(t,e,n,i,r)}function an(t,e,n,i,o){if(r(n)&&r(n.__ob__))return mt();if(r(n)&&r(n.is)&&(e=n.is),!e)return mt();var a,s,l;(Array.isArray(i)&&"function"===typeof i[0]&&(n=n||{},n.scopedSlots={default:i[0]},i.length=0),o===rn?i=_e(i):o===nn&&(i=ye(i)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||$.getTagNamespace(e),a=$.isReservedTag(e)?new gt($.parsePlatformTagName(e),n,i,void 0,void 0,t):n&&n.pre||!r(l=Gt(t.$options,"components",e))?new gt(e,n,i,void 0,void 0,t):Ke(l,n,t,i,e)):a=Ke(e,n,t,i);return Array.isArray(a)?a:r(a)?(r(s)&&sn(a,s),r(n)&&ln(n),a):mt()}function sn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),r(t.children))for(var a=0,s=t.children.length;a<s;a++){var l=t.children[a];r(l.tag)&&(i(l.ns)||o(n)&&"svg"!==l.tag)&&sn(l,e,n)}}function ln(t){l(t.style)&&he(t.style),l(t.class)&&he(t.class)}function un(t){t._vnode=null,t._staticTrees=null;var e=t.$options,i=t.$vnode=e._parentVnode,r=i&&i.context;t.$slots=Ie(e._renderChildren,r),t.$scopedSlots=n,t._c=function(e,n,i,r){return on(t,e,n,i,r,!1)},t.$createElement=function(e,n,i,r){return on(t,e,n,i,r,!0)};var o=i&&i.data;Dt(t,"$attrs",o&&o.attrs||n,null,!0),Dt(t,"$listeners",e._parentListeners||n,null,!0)}var cn,hn=null;function fn(t){We(t.prototype),t.prototype.$nextTick=function(t){return ue(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,i=n.render,r=n._parentVnode;r&&(e.$scopedSlots=Te(r.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=r;try{hn=e,t=i.call(e._renderProxy,e.$createElement)}catch(nr){Kt(nr,e,"render"),t=e._vnode}finally{hn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof gt||(t=mt()),t.parent=r,t}}function dn(t,e){return(t.__esModule||lt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),l(t)?e.extend(t):t}function pn(t,e,n,i,r){var o=mt();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:i,tag:r},o}function gn(t,e){if(o(t.error)&&r(t.errorComp))return t.errorComp;if(r(t.resolved))return t.resolved;var n=hn;if(n&&r(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),o(t.loading)&&r(t.loadingComp))return t.loadingComp;if(n&&!r(t.owners)){var a=t.owners=[n],s=!0,u=null,c=null;n.$on("hook:destroyed",function(){return y(a,n)});var h=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==u&&(clearTimeout(u),u=null),null!==c&&(clearTimeout(c),c=null))},f=R(function(n){t.resolved=dn(n,e),s?a.length=0:h(!0)}),p=R(function(e){r(t.errorComp)&&(t.error=!0,h(!0))}),g=t(f,p);return l(g)&&(d(g)?i(t.resolved)&&g.then(f,p):d(g.component)&&(g.component.then(f,p),r(g.error)&&(t.errorComp=dn(g.error,e)),r(g.loading)&&(t.loadingComp=dn(g.loading,e),0===g.delay?t.loading=!0:u=setTimeout(function(){u=null,i(t.resolved)&&i(t.error)&&(t.loading=!0,h(!1))},g.delay||200)),r(g.timeout)&&(c=setTimeout(function(){c=null,i(t.resolved)&&p(null)},g.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function vn(t){return t.isComment&&t.asyncFactory}function mn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(r(n)&&(r(n.componentOptions)||vn(n)))return n}}function yn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&bn(t,e)}function _n(t,e){cn.$on(t,e)}function xn(t,e){cn.$off(t,e)}function wn(t,e){var n=cn;return function i(){var r=e.apply(null,arguments);null!==r&&n.$off(t,i)}}function bn(t,e,n){cn=t,ge(e,n||{},_n,xn,wn,t),cn=void 0}function Sn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var i=this;if(Array.isArray(t))for(var r=0,o=t.length;r<o;r++)i.$on(t[r],n);else(i._events[t]||(i._events[t]=[])).push(n),e.test(t)&&(i._hasHookEvent=!0);return i},t.prototype.$once=function(t,e){var n=this;function i(){n.$off(t,i),e.apply(n,arguments)}return i.fn=e,n.$on(t,i),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var i=0,r=t.length;i<r;i++)n.$off(t[i],e);return n}var o,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var s=a.length;while(s--)if(o=a[s],o===e||o.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?D(n):n;for(var i=D(arguments,1),r='event handler for "'+t+'"',o=0,a=n.length;o<a;o++)Jt(n[o],e,i,e,r)}return e}}var Mn=null;function In(t){var e=Mn;return Mn=t,function(){Mn=e}}function An(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Tn(t){t.prototype._update=function(t,e){var n=this,i=n.$el,r=n._vnode,o=In(n);n._vnode=t,n.$el=r?n.__patch__(r,t):n.__patch__(n.$el,t,e,!1),o(),i&&(i.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Pn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||y(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Pn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Cn(t,e,i,r,o){var a=r.data.scopedSlots,s=t.$scopedSlots,l=!!(a&&!a.$stable||s!==n&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key),u=!!(o||t.$options._renderChildren||l);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=o,t.$attrs=r.data.attrs||n,t.$listeners=i||n,e&&t.$options.props){It(!1);for(var c=t._props,h=t.$options._propKeys||[],f=0;f<h.length;f++){var d=h[f],p=t.$options.props;c[d]=Ut(d,p,e,t)}It(!0),t.$options.propsData=e}i=i||n;var g=t.$options._parentListeners;t.$options._parentListeners=i,bn(t,i,g),u&&(t.$slots=Ie(o,r.context),t.$forceUpdate())}function kn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Dn(t,e){if(e){if(t._directInactive=!1,kn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Dn(t.$children[n]);Pn(t,"activated")}}function On(t,e){if((!e||(t._directInactive=!0,!kn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)On(t.$children[n]);Pn(t,"deactivated")}}function Pn(t,e){dt();var n=t.$options[e],i=e+" hook";if(n)for(var r=0,o=n.length;r<o;r++)Jt(n[r],t,null,t,i);t._hasHookEvent&&t.$emit("hook:"+e),pt()}var Ln=[],En=[],Nn={},Bn=!1,zn=!1,Rn=0;function Fn(){Rn=Ln.length=En.length=0,Nn={},Bn=zn=!1}var Vn=Date.now;if(Y&&!Q){var $n=window.performance;$n&&"function"===typeof $n.now&&Vn()>document.createEvent("Event").timeStamp&&(Vn=function(){return $n.now()})}function jn(){var t,e;for(Vn(),zn=!0,Ln.sort(function(t,e){return t.id-e.id}),Rn=0;Rn<Ln.length;Rn++)t=Ln[Rn],t.before&&t.before(),e=t.id,Nn[e]=null,t.run();var n=En.slice(),i=Ln.slice();Fn(),Gn(n),Hn(i),ot&&$.devtools&&ot.emit("flush")}function Hn(t){var e=t.length;while(e--){var n=t[e],i=n.vm;i._watcher===n&&i._isMounted&&!i._isDestroyed&&Pn(i,"updated")}}function Wn(t){t._inactive=!1,En.push(t)}function Gn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Dn(t[e],!0)}function Un(t){var e=t.id;if(null==Nn[e]){if(Nn[e]=!0,zn){var n=Ln.length-1;while(n>Rn&&Ln[n].id>t.id)n--;Ln.splice(n+1,0,t)}else Ln.push(t);Bn||(Bn=!0,ue(jn))}}var Zn=0,Xn=function(t,e,n,i,r){this.vm=t,r&&(t._watcher=this),t._watchers.push(this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Zn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=U(e),this.getter||(this.getter=L)),this.value=this.lazy?void 0:this.get()};Xn.prototype.get=function(){var t;dt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(nr){if(!this.user)throw nr;Kt(nr,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&he(t),pt(),this.cleanupDeps()}return t},Xn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Xn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Xn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Un(this)},Xn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||l(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(nr){Kt(nr,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Xn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Xn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Xn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Yn={enumerable:!0,configurable:!0,get:L,set:L};function qn(t,e,n){Yn.get=function(){return this[e][n]},Yn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Yn)}function Kn(t){t._watchers=[];var e=t.$options;e.props&&Jn(t,e.props),e.methods&&ai(t,e.methods),e.data?Qn(t):kt(t._data={},!0),e.computed&&ni(t,e.computed),e.watch&&e.watch!==nt&&si(t,e.watch)}function Jn(t,e){var n=t.$options.propsData||{},i=t._props={},r=t.$options._propKeys=[],o=!t.$parent;o||It(!1);var a=function(o){r.push(o);var a=Ut(o,e,n,t);Dt(i,o,a),o in t||qn(t,"_props",o)};for(var s in e)a(s);It(!0)}function Qn(t){var e=t.$options.data;e=t._data="function"===typeof e?ti(e,t):e||{},c(e)||(e={});var n=Object.keys(e),i=t.$options.props,r=(t.$options.methods,n.length);while(r--){var o=n[r];0,i&&x(i,o)||H(o)||qn(t,"_data",o)}kt(e,!0)}function ti(t,e){dt();try{return t.call(e,e)}catch(nr){return Kt(nr,e,"data()"),{}}finally{pt()}}var ei={lazy:!0};function ni(t,e){var n=t._computedWatchers=Object.create(null),i=rt();for(var r in e){var o=e[r],a="function"===typeof o?o:o.get;0,i||(n[r]=new Xn(t,a||L,L,ei)),r in t||ii(t,r,o)}}function ii(t,e,n){var i=!rt();"function"===typeof n?(Yn.get=i?ri(e):oi(n),Yn.set=L):(Yn.get=n.get?i&&!1!==n.cache?ri(e):oi(n.get):L,Yn.set=n.set||L),Object.defineProperty(t,e,Yn)}function ri(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ht.target&&e.depend(),e.value}}function oi(t){return function(){return t.call(this,this)}}function ai(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?L:k(e[n],t)}function si(t,e){for(var n in e){var i=e[n];if(Array.isArray(i))for(var r=0;r<i.length;r++)li(t,n,i[r]);else li(t,n,i)}}function li(t,e,n,i){return c(n)&&(i=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,i)}function ui(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Ot,t.prototype.$delete=Pt,t.prototype.$watch=function(t,e,n){var i=this;if(c(e))return li(i,t,e,n);n=n||{},n.user=!0;var r=new Xn(i,t,e,n);if(n.immediate)try{e.call(i,r.value)}catch(o){Kt(o,i,'callback for immediate watcher "'+r.expression+'"')}return function(){r.teardown()}}}var ci=0;function hi(t){t.prototype._init=function(t){var e=this;e._uid=ci++,e._isVue=!0,t&&t._isComponent?fi(e,t):e.$options=Wt(di(e.constructor),t||{},e),e._renderProxy=e,e._self=e,An(e),yn(e),un(e),Pn(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&Se(e),Kn(e),"mp-toutiao"!==e.mpHost&&be(e),"mp-toutiao"!==e.mpHost&&Pn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function fi(t,e){var n=t.$options=Object.create(t.constructor.options),i=e._parentVnode;n.parent=e.parent,n._parentVnode=i;var r=i.componentOptions;n.propsData=r.propsData,n._parentListeners=r.listeners,n._renderChildren=r.children,n._componentTag=r.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function di(t){var e=t.options;if(t.super){var n=di(t.super),i=t.superOptions;if(n!==i){t.superOptions=n;var r=pi(t);r&&O(t.extendOptions,r),e=t.options=Wt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function pi(t){var e,n=t.options,i=t.sealedOptions;for(var r in n)n[r]!==i[r]&&(e||(e={}),e[r]=n[r]);return e}function gi(t){this._init(t)}function vi(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=D(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function mi(t){t.mixin=function(t){return this.options=Wt(this.options,t),this}}function yi(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,i=n.cid,r=t._Ctor||(t._Ctor={});if(r[i])return r[i];var o=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Wt(n.options,t),a["super"]=n,a.options.props&&_i(a),a.options.computed&&xi(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,F.forEach(function(t){a[t]=n[t]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=O({},a.options),r[i]=a,a}}function _i(t){var e=t.options.props;for(var n in e)qn(t.prototype,"_props",n)}function xi(t){var e=t.options.computed;for(var n in e)ii(t.prototype,n,e[n])}function wi(t){F.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&c(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function bi(t){return t&&(t.Ctor.options.name||t.tag)}function Si(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!h(t)&&t.test(e)}function Mi(t,e){var n=t.cache,i=t.keys,r=t._vnode;for(var o in n){var a=n[o];if(a){var s=bi(a.componentOptions);s&&!e(s)&&Ii(n,o,i,r)}}}function Ii(t,e,n,i){var r=t[e];!r||i&&r.tag===i.tag||r.componentInstance.$destroy(),t[e]=null,y(n,e)}hi(gi),ui(gi),Sn(gi),Tn(gi),fn(gi);var Ai=[String,RegExp,Array],Ti={name:"keep-alive",abstract:!0,props:{include:Ai,exclude:Ai,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Ii(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){Mi(t,function(t){return Si(e,t)})}),this.$watch("exclude",function(e){Mi(t,function(t){return!Si(e,t)})})},render:function(){var t=this.$slots.default,e=mn(t),n=e&&e.componentOptions;if(n){var i=bi(n),r=this,o=r.include,a=r.exclude;if(o&&(!i||!Si(o,i))||a&&i&&Si(a,i))return e;var s=this,l=s.cache,u=s.keys,c=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;l[c]?(e.componentInstance=l[c].componentInstance,y(u,c),u.push(c)):(l[c]=e,u.push(c),this.max&&u.length>parseInt(this.max)&&Ii(l,u[0],u,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},Ci={KeepAlive:Ti};function ki(t){var e={get:function(){return $}};Object.defineProperty(t,"config",e),t.util={warn:ut,extend:O,mergeOptions:Wt,defineReactive:Dt},t.set=Ot,t.delete=Pt,t.nextTick=ue,t.observable=function(t){return kt(t),t},t.options=Object.create(null),F.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,O(t.options.components,Ci),vi(t),mi(t),yi(t),wi(t)}ki(gi),Object.defineProperty(gi.prototype,"$isServer",{get:rt}),Object.defineProperty(gi.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(gi,"FunctionalRenderContext",{value:Ge}),gi.version="2.6.10";var Di="[object Array]",Oi="[object Object]";function Pi(t,e){var n={};return Li(t,e),Ei(t,e,"",n),n}function Li(t,e){if(t!==e){var n=Bi(t),i=Bi(e);if(n==Oi&&i==Oi){if(Object.keys(t).length>=Object.keys(e).length)for(var r in e){var o=t[r];void 0===o?t[r]=null:Li(o,e[r])}}else n==Di&&i==Di&&t.length>=e.length&&e.forEach(function(e,n){Li(t[n],e)})}}function Ei(t,e,n,i){if(t!==e){var r=Bi(t),o=Bi(e);if(r==Oi)if(o!=Oi||Object.keys(t).length<Object.keys(e).length)Ni(i,n,t);else{var a=function(r){var o=t[r],a=e[r],s=Bi(o),l=Bi(a);if(s!=Di&&s!=Oi)o!=e[r]&&Ni(i,(""==n?"":n+".")+r,o);else if(s==Di)l!=Di?Ni(i,(""==n?"":n+".")+r,o):o.length<a.length?Ni(i,(""==n?"":n+".")+r,o):o.forEach(function(t,e){Ei(t,a[e],(""==n?"":n+".")+r+"["+e+"]",i)});else if(s==Oi)if(l!=Oi||Object.keys(o).length<Object.keys(a).length)Ni(i,(""==n?"":n+".")+r,o);else for(var u in o)Ei(o[u],a[u],(""==n?"":n+".")+r+"."+u,i)};for(var s in t)a(s)}else r==Di?o!=Di?Ni(i,n,t):t.length<e.length?Ni(i,n,t):t.forEach(function(t,r){Ei(t,e[r],n+"["+r+"]",i)}):Ni(i,n,t)}}function Ni(t,e,n){t[e]=n}function Bi(t){return Object.prototype.toString.call(t)}function zi(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var i=0;i<n.length;i++)n[i]()}}function Ri(t){return Ln.find(function(e){return t._watcher===e})}function Fi(t,e){if(!t.__next_tick_pending&&!Ri(t)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return ue(e,t)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var i=t.$scope;console.log("["+ +new Date+"]["+(i.is||i.route)+"]["+t._uid+"]:nextMPTick")}var r;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(nr){Kt(nr,t,"nextTick")}else r&&r(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){r=t})}function Vi(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var $i=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var i=this.$scope,r=Object.create(null);try{r=Vi(this)}catch(s){console.error(s)}r.__webviewId__=i.data.__webviewId__;var o=Object.create(null);Object.keys(r).forEach(function(t){o[t]=i.data[t]});var a=Pi(r,o);Object.keys(a).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(i.is||i.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,i.setData(a,function(){n.__next_tick_pending=!1,zi(n)})):zi(this)}};function ji(){}function Hi(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=ji),t.$options.render||(t.$options.render=ji),"mp-toutiao"!==t.mpHost&&Pn(t,"beforeMount");var i=function(){t._update(t._render(),n)};return new Xn(t,i,L,{before:function(){t._isMounted&&!t._isDestroyed&&Pn(t,"beforeUpdate")}},!0),n=!1,t}function Wi(t,e){return r(t)||r(e)?Gi(t,Ui(e)):""}function Gi(t,e){return t?e?t+" "+e:t:e||""}function Ui(t){return Array.isArray(t)?Zi(t):l(t)?Xi(t):"string"===typeof t?t:""}function Zi(t){for(var e,n="",i=0,o=t.length;i<o;i++)r(e=Ui(t[i]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Xi(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Yi=w(function(t){var e={},n=/;(?![^(]*\))/g,i=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(i);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function qi(t){return Array.isArray(t)?P(t):"string"===typeof t?Yi(t):t}var Ki=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Ji(t,e){var n=e.split("."),i=n[0];return 0===i.indexOf("__$n")&&(i=parseInt(i.replace("__$n",""))),1===n.length?t[i]:Ji(t[i],n.slice(1).join("."))}function Qi(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:D(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Fi(this,t)},Ki.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=be,t.prototype.__init_injections=Se,t.prototype.__call_hook=function(t,e){var n=this;dt();var i,r=n.$options[t],o=t+" hook";if(r)for(var a=0,s=r.length;a<s;a++)i=Jt(r[a],n,e?[e]:null,n,o);return n._hasHookEvent&&n.$emit("hook:"+t),pt(),i},t.prototype.__set_model=function(t,e,n,i){Array.isArray(i)&&(-1!==i.indexOf("trim")&&(n=n.trim()),-1!==i.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return c(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Ji(e||this,t)},t.prototype.__get_class=function(t,e){return Wi(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=qi(t),i=e?O(e,n):n;return Object.keys(i).map(function(t){return A(t)+":"+i[t]}).join(";")},t.prototype.__map=function(t,e){var n,i,r,o,a;if(Array.isArray(t)){for(n=new Array(t.length),i=0,r=t.length;i<r;i++)n[i]=e(t[i],i);return n}if(l(t)){for(o=Object.keys(t),n=Object.create(null),i=0,r=o.length;i<r;i++)a=o[i],n[a]=e(t[a],a,i);return n}return[]}}var tr=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function er(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==tr.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,i=n.created;tr.forEach(function(t){n[t]=i}),t.prototype.__lifecycle_hooks__=tr}gi.prototype.__patch__=$i,gi.prototype.$mount=function(t,e){return Hi(this,t,e)},er(gi),Qi(gi),e["default"]=gi}.call(this,n("c8ba"))},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=pe,e.createComponent=Me,e.createPage=Se,e.default=void 0;var i=r(n("66fd"));function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return l(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done);i=!0)if(n.push(a.value),e&&n.length===e)break}catch(l){r=!0,o=l}finally{try{i||null==s["return"]||s["return"]()}finally{if(r)throw o}}return n}function l(t){if(Array.isArray(t))return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t){return d(t)||f(t)||h()}function h(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function d(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var p=Object.prototype.toString,g=Object.prototype.hasOwnProperty;function v(t){return"function"===typeof t}function m(t){return"string"===typeof t}function y(t){return"[object Object]"===p.call(t)}function _(t,e){return g.call(t,e)}function x(){}function w(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var b=/-(\w)/g,S=w(function(t){return t.replace(b,function(t,e){return e?e.toUpperCase():""})}),M=["invoke","success","fail","complete","returnValue"],I={},A={};function T(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?C(n):n}function C(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function k(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function D(t,e){Object.keys(e).forEach(function(n){-1!==M.indexOf(n)&&v(e[n])&&(t[n]=T(t[n],e[n]))})}function O(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==M.indexOf(n)&&v(e[n])&&k(t[n],e[n])})}function P(t,e){"string"===typeof t&&y(e)?D(A[t]||(A[t]={}),e):y(t)&&D(I,t)}function L(t,e){"string"===typeof t?y(e)?O(A[t],e):delete A[t]:y(t)&&O(I,t)}function E(t){return function(e){return t(e)||e}}function N(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function B(t,e){for(var n=!1,i=0;i<t.length;i++){var r=t[i];if(n)n=Promise.then(E(r));else{var o=r(e);if(N(o)&&(n=Promise.resolve(o)),!1===o)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function z(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var i=e[n];e[n]=function(e){B(t[n],e).then(function(t){return v(i)&&i(t)||t})}}}),e}function R(t,e){var n=[];Array.isArray(I.returnValue)&&n.push.apply(n,c(I.returnValue));var i=A[t];return i&&Array.isArray(i.returnValue)&&n.push.apply(n,c(i.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function F(t){var e=Object.create(null);Object.keys(I).forEach(function(t){"returnValue"!==t&&(e[t]=I[t].slice())});var n=A[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function V(t,e,n){for(var i=arguments.length,r=new Array(i>3?i-3:0),o=3;o<i;o++)r[o-3]=arguments[o];var a=F(t);if(a&&Object.keys(a).length){if(Array.isArray(a.invoke)){var s=B(a.invoke,n);return s.then(function(t){return e.apply(void 0,[z(a,t)].concat(r))})}return e.apply(void 0,[z(a,n)].concat(r))}return e.apply(void 0,[n].concat(r))}var $={returnValue:function(t){return N(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},j=/^\$|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,H=/^create|Manager$/,W=/^on/;function G(t){return H.test(t)}function U(t){return j.test(t)}function Z(t){return W.test(t)}function X(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function Y(t){return!(G(t)||U(t)||Z(t))}function q(t,e){return Y(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];return v(n.success)||v(n.fail)||v(n.complete)?R(t,V.apply(void 0,[t,e,n].concat(r))):R(t,X(new Promise(function(i,o){V.apply(void 0,[t,e,Object.assign({},n,{success:i,fail:o})].concat(r)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var K=1e-4,J=750,Q=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,i=t.windowWidth;tt=i,et=n,Q="ios"===e}function it(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/J*(e||tt);return n<0&&(n=-n),n=Math.floor(n+K),0===n?1!==et&&Q?.5:1:t<0?-n:n}var rt={promiseInterceptor:$},ot=Object.freeze({upx2px:it,interceptors:rt,addInterceptor:P,removeInterceptor:L}),at={},st=[],lt=[],ut=["success","fail","cancel","complete"];function ct(t,e,n){return function(i){return e(ft(t,i,n))}}function ht(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(y(e)){var o=!0===r?e:{};for(var a in v(n)&&(n=n(e,o)||{}),e)if(_(n,a)){var s=n[a];v(s)&&(s=s(e[a],e,o)),s?m(s)?o[s]=e[a]:y(s)&&(o[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==ut.indexOf(a)?o[a]=ct(t,e[a],i):r||(o[a]=e[a]);return o}return v(e)&&(e=ct(t,e,i)),e}function ft(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return v(at.returnValue)&&(e=at.returnValue(t,e)),ht(t,e,n,{},i)}function dt(t,e){if(_(at,t)){var n=at[t];return n?function(e,i){var r=n;v(n)&&(r=n(e)),e=ht(t,e,r.args,r.returnValue);var o=[e];"undefined"!==typeof i&&o.push(i);var a=wx[r.name||t].apply(wx,o);return U(t)?ft(t,a,r.returnValue,G(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var pt=Object.create(null),gt=["subscribePush","unsubscribePush","onPush","offPush","share"];function vt(t){return function(e){var n=e.fail,i=e.complete,r={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};v(n)&&n(r),v(i)&&i(r)}}gt.forEach(function(t){pt[t]=vt(t)});var mt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new i.default),t};var t}();function yt(t,e,n){return t[e].apply(t,n)}function _t(){return yt(mt(),"$on",Array.prototype.slice.call(arguments))}function xt(){return yt(mt(),"$off",Array.prototype.slice.call(arguments))}function wt(){return yt(mt(),"$once",Array.prototype.slice.call(arguments))}function bt(){return yt(mt(),"$emit",Array.prototype.slice.call(arguments))}var St=Object.freeze({$on:_t,$off:xt,$once:wt,$emit:bt});function Mt(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,i=plus.webview.getWebviewById(t.__uniapp_mask_id);i=i.parent()||i;var r=t.show,o=t.hide,a=t.close,s=function(){i.setStyle({mask:n})},l=function(){i.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return r.apply(t,n)},t.hide=function(){l();for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return o.apply(t,n)},t.close=function(){l(),e=[];for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return a.apply(t,i)}}}function It(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&Mt(e),e}function At(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}var Tt=Object.freeze({requireNativePlugin:At,getSubNVueById:It}),Ct=Page,kt=Component,Dt=/:/g,Ot=w(function(t){return S(t.replace(Dt,"-"))});function Pt(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];return e.apply(t,[Ot(n)].concat(r))}}}function Lt(t,e){var n=e[t];e[t]=n?function(){Pt(this);for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return n.apply(this,e)}:function(){Pt(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Lt("onLoad",t),Ct(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Lt("created",t),kt(t)};var Et=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Nt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){_(n,e)&&(t[e]=n[e])})}function Bt(t,e){if(!e)return!0;if(i.default.options&&Array.isArray(i.default.options[t]))return!0;if(e=e.default||e,v(e))return!!v(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(v(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return Bt(t,e)}):void 0}function zt(t,e,n){e.forEach(function(e){Bt(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function Rt(t,e){var n;return e=e.default||e,v(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Ft(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function Vt(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function $t(t,e){var n=t.data||{},i=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(r){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(r){}return y(n)||(n={}),Object.keys(i).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||_(n,t)||(n[t]=i[t])}),n}var jt=[String,Number,Boolean,Object,Array,null];function Ht(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function Wt(t,e){var n=t["behaviors"],i=t["extends"],r=t["mixins"],o=t["props"];o||(t["props"]=o=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(o)?(o.push("name"),o.push("value")):(o["name"]={type:String,default:""},o["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),y(i)&&i.props&&a.push(e({properties:Ut(i.props,!0)})),Array.isArray(r)&&r.forEach(function(t){y(t)&&t.props&&a.push(e({properties:Ut(t.props,!0)}))}),a}function Gt(t,e,n,i){return Array.isArray(e)&&1===e.length?e[0]:e}function Ut(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:Ht(t)}}):y(t)&&Object.keys(t).forEach(function(e){var i=t[e];if(y(i)){var r=i["default"];v(r)&&(r=r()),i.type=Gt(e,i.type),n[e]={type:-1!==jt.indexOf(i.type)?i.type:null,value:r,observer:Ht(e)}}else{var o=Gt(e,i);n[e]={type:-1!==jt.indexOf(o)?o:null,observer:Ht(e)}}}),n}function Zt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=x,t.preventDefault=x,t.target=t.target||{},_(t,"detail")||(t.detail={}),y(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Xt(t,e){var n=t;return e.forEach(function(e){var i=e[0],r=e[2];if(i||"undefined"!==typeof r){var o=e[1],a=e[3],s=i?t.__get_value(i,n):n;Number.isInteger(s)?n=r:o?Array.isArray(s)?n=s.find(function(e){return t.__get_value(o,e)===r}):y(s)?n=Object.keys(s).find(function(e){return t.__get_value(o,s[e])===r}):console.error("v-for 暂不支持循环数据：",s):n=s[r],a&&(n=t.__get_value(a,n))}}),n}function Yt(t,e,n){var i={};return Array.isArray(e)&&e.length&&e.forEach(function(e,r){"string"===typeof e?e?"$event"===e?i["$"+r]=n:0===e.indexOf("$event.")?i["$"+r]=t.__get_value(e.replace("$event.",""),n):i["$"+r]=t.__get_value(e):i["$"+r]=t:i["$"+r]=Xt(t,e)}),i}function qt(t){for(var e={},n=1;n<t.length;n++){var i=t[n];e[i[0]]=i[1]}return e}function Kt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,a=!1;if(r&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=Yt(t,i,e),l=[];return n.forEach(function(t){"$event"===t?"__set_model"!==o||r?r&&!a?l.push(e.detail.__args__[0]):l.push(e):l.push(e.target.value):Array.isArray(t)&&"o"===t[0]?l.push(qt(t)):"string"===typeof t&&_(s,t)?l.push(s[t]):l.push(t)}),l}var Jt="~",Qt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=Zt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var i=n.eventOpts||n["event-opts"];if(!i)return console.warn("事件信息不存在");var r=t.type,o=[];return i.forEach(function(n){var i=n[0],a=n[1],s=i.charAt(0)===Qt;i=s?i.slice(1):i;var l=i.charAt(0)===Jt;i=l?i.slice(1):i,a&&te(r,i)&&a.forEach(function(n){var i=n[0];if(i){var r=e.$vm;r.$options.generic&&r.$parent&&r.$parent.$parent&&(r=r.$parent.$parent);var a=r[i];if(!v(a))throw new Error(" _vm.".concat(i," is not a function"));if(l){if(a.once)return;a.once=!0}o.push(a.apply(r,Kt(e.$vm,t,n[1],n[2],s,i)))}})}),"input"===r&&1===o.length&&"undefined"!==typeof o[0]?o[0]:void 0}var ne=["onShow","onHide","onError","onPageNotFound"];function ie(t,e){var n=e.mocks,r=e.initRefs;i.default.prototype.mpHost="app-plus",i.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=u({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(r(this),Nt(this,n)))}});var o={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};return o.globalData=t.$options.globalData||{},zt(o,ne),o}var re=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function oe(t,e){var n=t.$children,i=n.find(function(t){return t.$scope._$vueId===e});if(i)return i;for(var r=n.length-1;r>=0;r--)if(i=oe(n[r],e),i)return i}function ae(t){return Behavior(t)}function se(){return!!this.route}function le(t){this.triggerEvent("__l",t)}function ue(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var i=e.selectAllComponents(".vue-ref-in-for");return i.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function ce(t){var e,n=t.detail||t.value,i=n.vuePid,r=n.vueOptions;i&&(e=oe(this.$vm,i)),e||(e=this.$vm),r.parent=e}function he(t){return ie(t,{mocks:re,initRefs:ue})}var fe=["onUniNViewMessage"];function de(t){var e=he(t);return zt(e,fe),e}function pe(t){return App(de(t)),t}function ge(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,r=e.initRelation,a=Rt(i.default,t),s=o(a,2),l=s[0],u=s[1],c={options:{multipleSlots:!0,addGlobalClass:!0},data:$t(u,i.default.prototype),behaviors:Wt(u,ae),properties:Ut(u.props,!1,u.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};Vt(t.vueId,this),r.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new l(e),Ft(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:ce,__e:ee}};return n?c:[c,l]}function ve(t){return ge(t,{isPage:se,initRelation:le})}function me(t){var e=ve(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var ye=["onShow","onHide","onUnload"];function _e(t,e){e.isPage,e.initRelation;var n=me(t);return zt(n.methods,ye,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function xe(t){return _e(t,{isPage:se,initRelation:le})}ye.push.apply(ye,Et);var we=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function be(t){var e=xe(t);return zt(e.methods,we),e}function Se(t){return Component(be(t))}function Me(t){return Component(me(t))}st.forEach(function(t){at[t]=!1}),lt.forEach(function(t){var e=at[t]&&at[t].name?at[t].name:t;wx.canIUse(e)||(at[t]=!1)});var Ie={};Object.keys(ot).forEach(function(t){Ie[t]=ot[t]}),Object.keys(St).forEach(function(t){Ie[t]=St[t]}),Object.keys(Tt).forEach(function(t){Ie[t]=q(t,Tt[t])}),Object.keys(wx).forEach(function(t){(_(wx,t)||_(at,t))&&(Ie[t]=q(t,dt(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=Ie,t.UniEmitter=St),wx.createApp=pe,wx.createPage=Se,wx.createComponent=Me;var Ae=Ie,Te=Ae;e.default=Te}).call(this,n("c8ba"))},"71c0":function(t,e,n){"use strict";(function(t){n("894e");i(n("66fd"));var e=i(n("2993"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},7476:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("a34a")),r=o(n("4f2f"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,i,r,o,a){try{var s=t[o](a),l=s.value}catch(u){return void n(u)}s.done?e(l):Promise.resolve(l).then(i,r)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(i,r){var o=t.apply(e,n);function s(t){a(o,i,r,s,l,"next",t)}function l(t){a(o,i,r,s,l,"throw",t)}s(void 0)})}}var l={login:function(){var t=s(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.post("/login/login",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),yangan:function(){var t=s(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.post("/cnsmogsensor/cnSmogSensorList",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()};e.default=l},"799e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("a34a")),r=o(n("4f2f"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,i,r,o,a){try{var s=t[o](a),l=s.value}catch(u){return void n(u)}s.done?e(l):Promise.resolve(l).then(i,r)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(i,r){var o=t.apply(e,n);function s(t){a(o,i,r,s,l,"next",t)}function l(t){a(o,i,r,s,l,"throw",t)}s(void 0)})}}var l={addTerminalrepair:function(){var t=s(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.get("/scancode/addTerminalrepair",{termCode:e.termCode});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),findTermTypeAll:function(){var t=s(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.get("/scancode/findTermTypeAll");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()};e.default=l},"7a64":function(t,e,n){"use strict";(function(t){n("894e");var e=o(n("66fd")),i=o(n("54e0")),r=o(n("d049"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){s(t,e,n[e])})}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.default.config.productionTip=!1,e.default.prototype.$service=r.default,i.default.mpType="app";var l=new e.default(a({},i.default));t(l).$mount()}).call(this,n("6e42")["createApp"])},"894e":function(t,e,n){},9335:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("a34a")),r=o(n("4f2f"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,i,r,o,a){try{var s=t[o](a),l=s.value}catch(u){return void n(u)}s.done?e(l):Promise.resolve(l).then(i,r)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(i,r){var o=t.apply(e,n);function s(t){a(o,i,r,s,l,"next",t)}function l(t){a(o,i,r,s,l,"throw",t)}s(void 0)})}}var l={cnSmogSensorList:function(){var t=s(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.post("/cnsmogsensor/cnSmogSensorList",{crossSectionId:e.crossSectionId,orgId:e.orgId,projectId:e.projectId,strucunitId:e.strucunitId,termComstatus:e.termComstatus});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),cnSmogSensorNumber:function(){var t=s(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.post("/cnsmogsensor/cnSmogSensorNumber",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),findCNSmogSensor:function(){var t=s(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.post("/cnsmogsensor/findCNSmogSensor",{ids:e.ids,strs:e.strs});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),findProjectSelect:function(){var t=s(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.get("/cnsmogsensor/findProjectSelect",{orgId:e.orgId});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),findStrucunitSelect:function(){var t=s(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.get("/cnsmogsensor/findStrucunitSelect",{projectId:e.projectId});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),findCrosssectionSelect:function(){var t=s(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.get("/cnsmogsensor/findCrosssectionSelect",{strucunitId:e.strucunitId});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()};e.default=l},"96cf":function(t,e){!function(e){"use strict";var n,i=Object.prototype,r=i.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag",u="object"===typeof t,c=e.regeneratorRuntime;if(c)u&&(t.exports=c);else{c=e.regeneratorRuntime=u?t.exports:{},c.wrap=x;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",g={},v={};v[a]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(P([])));y&&y!==i&&r.call(y,a)&&(v=y);var _=M.prototype=b.prototype=Object.create(v);S.prototype=_.constructor=M,M.constructor=S,M[l]=S.displayName="GeneratorFunction",c.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===S||"GeneratorFunction"===(e.displayName||e.name))},c.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,M):(t.__proto__=M,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(_),t},c.awrap=function(t){return{__await:t}},I(A.prototype),A.prototype[s]=function(){return this},c.AsyncIterator=A,c.async=function(t,e,n,i){var r=new A(x(t,e,n,i));return c.isGeneratorFunction(e)?r:r.next().then(function(t){return t.done?t.value:r.next()})},I(_),_[l]="Generator",_[a]=function(){return this},_.toString=function(){return"[object Generator]"},c.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},c.values=P,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(D),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(i,r){return s.type="throw",s.arg=t,e.next=i,r&&(e.method="next",e.arg=n),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),D(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;D(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:P(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=n),g}}}function x(t,e,n,i){var r=e&&e.prototype instanceof b?e:b,o=Object.create(r.prototype),a=new O(i||[]);return o._invoke=T(t,n,a),o}function w(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(i){return{type:"throw",arg:i}}}function b(){}function S(){}function M(){}function I(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function A(t){function e(n,i,o,a){var s=w(t[n],t,i);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"===typeof u&&r.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(u).then(function(t){l.value=t,o(l)},function(t){return e("throw",t,o,a)})}a(s.arg)}var n;function i(t,i){function r(){return new Promise(function(n,r){e(t,i,n,r)})}return n=n?n.then(r,r):r()}this._invoke=i}function T(t,e,n){var i=h;return function(r,o){if(i===d)throw new Error("Generator is already running");if(i===p){if("throw"===r)throw o;return L()}n.method=r,n.arg=o;while(1){var a=n.delegate;if(a){var s=C(a,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===h)throw i=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=d;var l=w(t,e,n);if("normal"===l.type){if(i=n.done?p:f,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(i=p,n.method="throw",n.arg=l.arg)}}}function C(t,e){var i=t.iterator[e.method];if(i===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,C(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var r=w(i,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,g;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,g):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function D(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function P(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function e(){while(++i<t.length)if(r.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a34a:function(t,e,n){t.exports=n("bbdd")},bbdd:function(t,e,n){var i=function(){return this||"object"===typeof self&&self}()||Function("return this")(),r=i.regeneratorRuntime&&Object.getOwnPropertyNames(i).indexOf("regeneratorRuntime")>=0,o=r&&i.regeneratorRuntime;if(i.regeneratorRuntime=void 0,t.exports=n("96cf"),r)i.regeneratorRuntime=o;else try{delete i.regeneratorRuntime}catch(a){i.regeneratorRuntime=void 0}},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"===typeof window&&(n=window)}t.exports=n},ca4a:function(t,e,n){"use strict";(function(t){n("894e");i(n("66fd"));var e=i(n("fe55"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},d049:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=l(n("7476")),r=l(n("4e26")),o=l(n("9335")),a=l(n("514b")),s=l(n("799e"));function l(t){return t&&t.__esModule?t:{default:t}}var u={login:i.default,myuser:r.default,cnsmogsensor:o.default,schedule:a.default,qrCode:s.default};e.default=u},e077:function(t,e,n){"use strict";(function(t){n("894e");i(n("66fd"));var e=i(n("8f22"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},fc52:function(t,e,n){"use strict";(function(t){n("894e");i(n("66fd"));var e=i(n("79af"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}}]);
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

    (function (t, i) {
      function e(t) {
        return u(t) || o(t) || r();
      }

      function r() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }

      function o(t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
      }

      function u(t) {
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
      var c = {
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
            this.multiArray[0] = [this.all[0]].concat(e(n));
            var i = t.map(function (t) {
              return t.projectId;
            });
            this.multiValue[0] = [null].concat(e(i));
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
            this.multiArray.splice(1, 1, [this.all[1]].concat(e(n)));
            var i = t.map(function (t) {
              return t.strucunitId;
            });
            this.multiIndex[1] = 0, this.multiIndex[2] = 0, this.multiValue[1] = [null].concat(e(i));
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
            this.multiArray.splice(2, 1, [this.all[2]].concat(e(n)));
            var i = t.map(function (t) {
              return t.crossSectionId;
            });
            this.multiIndex[2] = 0, this.multiValue[2] = [null].concat(e(i));
          },
          bindMultiPickerColumnChange: function bindMultiPickerColumnChange(t) {
            console.log(i("修改的列为：" + t.detail.column + "，值为：" + t.detail.value, " at pages/qrCode/checkLocation.vue:109")), this.multiIndex.splice(t.detail.column, 1, t.detail.value);
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
      n.default = c;
    }).call(this, i("6e42")["default"], i("0de9")["default"]);
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
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/index"],{"17d3":function(e,o,t){"use strict";var n=t("f96d"),s=t.n(n);s.a},6119:function(e,o,t){"use strict";t.r(o);var n=t("da73"),s=t.n(n);for(var a in n)"default"!==a&&function(e){t.d(o,e,function(){return n[e]})}(a);o["default"]=s.a},da73:function(e,o,t){"use strict";(function(e,t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n={data:function(){return{userName:"",password:"",keep:!1}},onReady:function(){var o=this;e.getStorage({key:"userInfo",success:function(e){var n=e.data;o.userName=n.userName,o.password=n.password,o.keep=n.keep,console.log(t(e," at pages/login/index.vue:43"))}}),e.showModal({content:"测试蓝牙",showCancel:!0}),e.showModal({content:plus,showCancel:!0}),e.showModal({content:plus.bluetooth,showCancel:!0}),plus.bluetooth.getBluetoothAdapterState({success:function(o){e.showModal({content:"state success: "+JSON.stringify(o),showCancel:!0})},fail:function(o){e.showModal({content:"state error: "+JSON.stringify(o),showCancel:!0})}}),plus.bluetooth.openBluetoothAdapter({success:function(o){console.log(t("open success: "+JSON.stringify(o)," at pages/login/index.vue:74")),plus.bluetooth.startBluetoothDevicesDiscovery({success:function(o){console.log(t("start discovery success: "+JSON.stringify(o)," at pages/login/index.vue:77")),e.showModal({content:"start discovery success: "+JSON.stringify(o),showCancel:!0})},fail:function(o){console.log(t("start discovery failed: "+JSON.stringify(o)," at pages/login/index.vue:84")),e.showModal({content:"start discovery failed: "+JSON.stringify(o),showCancel:!0})}})},fail:function(e){console.log(t("open failed: "+JSON.stringify(e)," at pages/login/index.vue:93"))}}),setTimeout(function(){e.showModal({content:"定时器20s",showCancel:!0}),plus.bluetooth.getBluetoothDevices({success:function(o){o.devices;e.showModal({content:"获取成功",showCancel:!0}),e.showModal({content:JSON.stringify(o.devices),showCancel:!0})},fail:function(o){e.showModal({content:"get devices failed: "+JSON.stringify(o),showCancel:!0})}})},2e4),plus.bluetooth.getBluetoothDevices({success:function(o){o.devices;e.showModal({content:"获取成功",showCancel:!0}),e.showModal({content:JSON.stringify(o.devices),showCancel:!0})},fail:function(o){e.showModal({content:"get devices failed: "+JSON.stringify(o),showCancel:!0})}})},methods:{changeKeep:function(e){this.keep=e.detail.value.length>0},login:function(){if(console.log(t(this.keep," at pages/login/index.vue:148")),""!==this.userName)if(""!==this.password){var o=this;this.$service.login.login({password:this.password,userName:this.userName}).then(function(t){0===t.code?o.setUserInfo(t.msg):(o.keep=!1,e.showModal({content:"账号或密码错误",showCancel:!1}))})}else e.showModal({content:"请输入登录密码",showCancel:!1});else e.showModal({content:"请输入登录账号",showCancel:!1})},setUserInfo:function(o){var t=this,n=this;e.setStorageSync("userInfo",{token:o}),this.$service.myuser.findUserByToken({token:o}).then(function(s){t.$service.myuser.findDepartmentByOrgId({orgId:s.msg.user.orgId}).then(function(t){e.setStorageSync("userInfo",{user:s.msg.user,token:o,depInfo:t.msg.department,keep:n.keep,password:n.password,userName:n.userName}),e.switchTab({url:"/pages/index/index"})})})}}};o.default=n}).call(this,t("6e42")["default"],t("0de9")["default"])},f22e:function(e,o,t){"use strict";var n=function(){var e=this,o=e.$createElement;e._self._c},s=[];t.d(o,"a",function(){return n}),t.d(o,"b",function(){return s})},f96d:function(e,o,t){},fe55:function(e,o,t){"use strict";t.r(o);var n=t("f22e"),s=t("6119");for(var a in s)"default"!==a&&function(e){t.d(o,e,function(){return s[e]})}(a);t("17d3");var i=t("2877"),c=Object(i["a"])(s["default"],n["a"],n["b"],!1,null,null,null);o["default"]=c.exports}},[["ca4a","common/runtime","common/vendor"]]]);
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
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qrCode/qrCode"],{"2a67":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("137b"));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(){return Promise.all([n.e("common/vendor"),n.e("pages/qrCode/checkLocation")]).then(n.bind(null,"d2a8"))},r={components:{checkLocation:i},data:function(){return{radioValue:"1",termCode:"",index:1,date:"",disabled:!1,code:"",name:"",info:"",array:["类型1","类型2","类型3"],advIndex:0,optAdvType:[]}},methods:{onShow:function(){this.radioValue="1",this.termCode="",this.index=1,this.disabled=!1,this.code="",this.info="",this.name="",this.advIndex=0,this.date=a.default.dateUtils.formatNowDate(),this.$refs.checkLocation1&&(this.$refs.checkLocation1.init(),this.$refs.checkLocation2.init()),this.scanCode(),this.getAdvType()},advChange:function(e){this.advIndex=e.target.value},bindDateChange:function(e){this.date=e.target.value},radioChange:function(e){this.radioValue=e.target.value},getAdvType:function(){var e=this;this.$service.qrCode.findTermTypeAll().then(function(t){e.optAdvType=[],t.msg.forEach(function(t){t.termTypeName&&e.optAdvType.push(t.termTypeName)})})},scanCode:function(){var t=this;e.scanCode({success:function(e){t.disabled=!0,t.termCode=e.result}})},enter:function(){this.$service.qrCode.addTerminalrepair({termCode:this.termCode}).then(function(t){e.showModal({content:t.msg,showCancel:!1})})}}};t.default=r}).call(this,n("6e42")["default"])},3488:function(e,t,n){},"794c":function(e,t,n){"use strict";n.r(t);var a=n("7da6"),o=n("b352");for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);n("fa8b");var r=n("2877"),d=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,null,null);t["default"]=d.exports},"7da6":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})},b352:function(e,t,n){"use strict";n.r(t);var a=n("2a67"),o=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);t["default"]=o.a},fa8b:function(e,t,n){"use strict";var a=n("3488"),o=n.n(a);o.a}},[["2dbc","common/runtime","common/vendor"]]]);
});
require('pages/qrCode/qrCode.js');
__wxRoute = 'pages/index/yangan/yangan';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/yangan/yangan.js';

define('pages/index/yangan/yangan.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/yangan/yangan"],{"55c0":function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return i}),e.d(t,"b",function(){return u})},7881:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){return e.e("components/uni-popup-i/uni-popup").then(e.bind(null,"272a"))},u=function(){return e.e("components/uni-icon/uni-icon").then(e.bind(null,"7e5b"))},o=function(){return e.e("components/uni-list/uni-list").then(e.bind(null,"c50d"))},c=function(){return e.e("components/uni-list-item/uni-list-item").then(e.bind(null,"f0fd"))},a=function(){return e.e("pages/index/yangan/selects").then(e.bind(null,"931e"))},s=function(){return Promise.all([e.e("common/vendor"),e.e("pages/qrCode/checkLocation")]).then(e.bind(null,"d2a8"))},r={name:"yangan",components:{uniPopup:i,vUniIcon:u,uniList:o,uniListItem:c,selects:a,checkLocation:s},data:function(){return{list:[],termComstatus:null,optStatus:[{name:"全部状态",value:null},{name:"正常",value:"1"},{name:"报警",value:"2"},{name:"故障",value:"3"}],optDevice:[{name:"全部设备",value:null}],multiValue:[null,null,null]}},computed:{orgId:function(){var t=n.getStorageSync("userInfo");return t.depInfo.orgId},opt:function(){return{orgId:this.orgId,projectId:this.multiValue[0],strucunitId:this.multiValue[1],crossSectionId:this.multiValue[2],termComstatus:this.termComstatus}}},mounted:function(){this.getDevice()},methods:{changeStatus:function(n){this.termComstatus=n,this.getList()},onShow:function(){this.getList()},changeSelect:function(){},getDevice:function(){var n=this;this.$service.qrCode.findTermTypeAll().then(function(t){t.msg.forEach(function(t){t.termTypeName&&t.termtypeId&&n.optDevice.push({name:t.termTypeName,value:t.termtypeId})})})},pickerChange:function(n){this.multiValue=n,this.getList()},opanDetail:function(t){n.navigateBack({url:"./detail?item=".concat(JSON.stringify(t),"&opt= ").concat(JSON.stringify(this.opt))}),n.setStorageSync("yangan",{item:t,opt:this.opt})},getList:function(){var n=this;this.$service.cnsmogsensor.cnSmogSensorList(this.opt).then(function(t){n.list=t.msg.terminals})}}};t.default=r}).call(this,e("6e42")["default"])},8875:function(n,t,e){"use strict";e.r(t);var i=e("55c0"),u=e("fce3");for(var o in u)"default"!==o&&function(n){e.d(t,n,function(){return u[n]})}(o);e("d4b6");var c=e("2877"),a=Object(c["a"])(u["default"],i["a"],i["b"],!1,null,null,null);t["default"]=a.exports},d4b6:function(n,t,e){"use strict";var i=e("eff7"),u=e.n(i);u.a},eff7:function(n,t,e){},fce3:function(n,t,e){"use strict";e.r(t);var i=e("7881"),u=e.n(i);for(var o in i)"default"!==o&&function(n){e.d(t,n,function(){return i[n]})}(o);t["default"]=u.a}},[["0f54","common/runtime","common/vendor"]]]);
});
require('pages/index/yangan/yangan.js');
__wxRoute = 'pages/index/yangan/detail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/yangan/detail.js';

define('pages/index/yangan/detail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/yangan/detail"],{"11ae":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(e("33e8"));function o(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,e):{};r.get||r.set?Object.defineProperty(n,e,r):n[e]=t[e]}return n.default=t,n}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.forEach(function(n){i(t,n,e[n])})}return t}function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}for(var s=function(){return Promise.all([e.e("common/vendor"),e.e("components/mpvue-echarts/src/echarts")]).then(e.bind(null,"72e6"))},u=+new Date(1968,9,3),c=864e5,l=[],f=[3*Math.random()],d=1;d<2e4;d++){var m=new Date(u+=c);l.push([m.getFullYear(),m.getMonth()+1,m.getDate()].join("/")),f.push(Math.round(2*(Math.random()-.1)+f[d-1]))}var g={tooltip:{trigger:"axis",position:function(t){return[t[0],"10%"]}},title:{left:"center",text:"大数据量面积图"},toolbox:{feature:{dataZoom:{yAxisIndex:"none"},restore:{},saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:l},yAxis:{type:"value",boundaryGap:[0,"100%"]},dataZoom:[{type:"inside",start:0,end:10},{start:0,end:10,handleIcon:"M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",handleSize:"80%",handleStyle:{color:"#fff",shadowBlur:3,shadowColor:"rgba(0, 0, 0, 0.6)",shadowOffsetX:2,shadowOffsetY:2}}],series:[{name:"模拟数据",type:"line",smooth:!0,symbol:"none",sampling:"average",itemStyle:{color:"rgb(255, 70, 131)"},data:f}]},h={data:function(){return{tabs:["烟雾报警","电压","烟雾浓度"],activeTab:1,normal:0,warning:0,malfunction:0,opt:{orgId:this.orgId,projectId:null,strucunitId:null,crossSectionId:null,termComstatus:null},updateStatus:!1,item:{name:""}}},computed:{orgId:function(){var n=t.getStorageSync("userInfo");return n.depInfo.orgId},count:function(){return this.normal+this.warning+this.malfunction}},methods:{clickTab:function(t){this.activeTab=t},onNavigationBarButtonTap:function(){t.navigateTo({url:"./yangan"})},onShow:function(t){var n=this;this.$service.cnsmogsensor.cnSmogSensorList({orgId:this.orgId,projectId:null,termComstatus:null}).then(function(t){n.$service.cnsmogsensor.findCNSmogSensor({ids:t.msg.ids,strs:t.msg.names}).then(function(t){n.format(t.msg[0].value)})}),this.getNumber()},getNumber:function(){var n=this,e=t.getStorageSync("yangan");e&&(this.opt=e.opt),this.$service.cnsmogsensor.cnSmogSensorNumber(a({},this.opt,{orgId:this.orgId})).then(function(t){n.normal=t.msg.normal,n.malfunction=t.msg.malfunction,n.warning=t.msg.warning})},format:function(t){},lineInit:function(t){var n=t.width,e=t.height,o=this.$refs.lineChart.canvas;r.setCanvasCreator(function(){return o});var a=r.init(o,null,{width:n,height:e});o.setChart(a),a.setOption(g)}},components:{mpvueEcharts:s}};n.default=h}).call(this,e("6e42")["default"])},"4e33":function(t,n,e){},7215:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return r}),e.d(n,"b",function(){return o})},"876f":function(t,n,e){"use strict";e.r(n);var r=e("11ae"),o=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,function(){return r[t]})}(a);n["default"]=o.a},d50e:function(t,n,e){"use strict";e.r(n);var r=e("7215"),o=e("876f");for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);e("ea66");var i=e("2877"),s=Object(i["a"])(o["default"],r["a"],r["b"],!1,null,null,null);n["default"]=s.exports},ea66:function(t,n,e){"use strict";var r=e("4e33"),o=e.n(r);o.a}},[["3c47","common/runtime","common/vendor"]]]);
});
require('pages/index/yangan/detail.js');
__wxRoute = 'pages/user/editPassword/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/editPassword/index.js';

define('pages/user/editPassword/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/editPassword/index"],{"0d95":function(e,s,n){"use strict";var o=n("5eef"),t=n.n(o);t.a},"11b9":function(e,s,n){"use strict";(function(e){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var n={data:function(){return{oldPassword:"",newPassword:"",newPasswordAgain:""}},methods:{enter:function(){if(""!==this.oldPassword)if(""!==this.newPassword)if(""!==this.newPasswordAgain)if(this.newPasswordAgain===this.newPassword){var s=e.getStorageSync("userInfo");s.password===this.oldPassword?this.oldPassword!==this.newPassword?this.$service.myuser.alterPassword({formerPassword:this.oldPassword,password:this.newPassword,userName:s.userName}).then(function(s){e.setStorageSync("userInfo",{password:"",userName:"",keep:!1}),e.reLaunch({url:"/pages/login/index"})}):e.showModal({content:"当前密码和新密码相同",showCancel:!1}):e.showModal({content:"当前密码错误",showCancel:!1})}else e.showModal({content:"两次输入的密码不一致",showCancel:!1});else e.showModal({content:"请再次确认密码",showCancel:!1});else e.showModal({content:"请输入新密码",showCancel:!1});else e.showModal({content:"请输入当前密码",showCancel:!1})}}};s.default=n}).call(this,n("6e42")["default"])},"5eef":function(e,s,n){},"79af":function(e,s,n){"use strict";n.r(s);var o=n("9945"),t=n("9de4");for(var a in t)"default"!==a&&function(e){n.d(s,e,function(){return t[e]})}(a);n("0d95");var r=n("2877"),d=Object(r["a"])(t["default"],o["a"],o["b"],!1,null,null,null);s["default"]=d.exports},9945:function(e,s,n){"use strict";var o=function(){var e=this,s=e.$createElement;e._self._c},t=[];n.d(s,"a",function(){return o}),n.d(s,"b",function(){return t})},"9de4":function(e,s,n){"use strict";n.r(s);var o=n("11b9"),t=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(s,e,function(){return o[e]})}(a);s["default"]=t.a}},[["fc52","common/runtime","common/vendor"]]]);
});
require('pages/user/editPassword/index.js');
__wxRoute = 'pages/clockIn/clockIn';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/clockIn/clockIn.js';

define('pages/clockIn/clockIn.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/clockIn/clockIn"],{"004b":function(t,e,n){},2993:function(t,e,n){"use strict";n.r(e);var o=n("ac54"),a=n("f26f");for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);n("8aff");var u=n("2877"),i=Object(u["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=i.exports},5908:function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=c(n("137b"));function c(t){return t&&t.__esModule?t:{default:t}}var u={data:function(){return{imageSrc:"",text:"",url:"",locationName:"当前位置",title:"map",latitude:30.52,longitude:114.31}},computed:{userId:function(){var e=t.getStorageSync("userInfo");return e.user.userId},scheduleDate:function(){return a.default.dateUtils.formatNow()},scheduleStatic:function(){var t=new Date;return t.getHours()<12?1:2},covers:function(){return[{latitude:this.latitude,longitude:this.longitude,iconPath:"../../static/home/location.png"}]}},methods:{onShow:function(){this.imageSrc="",this.text="",this.getLocation()},enter:function(){""!==this.url?(t.showLoading({title:"加载中"}),this.$service.schedule.addSchedule({latitude:this.latitude,longitude:this.longitude,scheduleDate:null,scheduleExplain:this.text,scheduleId:null,scheduleStatic:this.scheduleStatic,url:this.url,userId:this.userId}).then(function(e){t.hideLoading(),200===e.statusCode?t.showModal({content:"打卡成功",showCancel:!1}):t.showModal({content:e.msg,showCancel:!1})})):t.showModal({content:"请上传图片",showCancel:!1})},getLocation:function(){var e=this;t.showLoading({title:"加载中"}),t.getLocation({type:"gcj02",geocode:!0,success:function(n){t.hideLoading();var o=t.createMapContext("map",e.$refs.map);o.moveToLocation(),e.longitude=n.longitude+1e-5,e.latitude=n.latitude;var a=t.getSystemInfoSync(),c="ios"===a.platform?n.address.streetNum:n.address.poiName;c||(c=""),e.locationName=n.address.city+" "+n.address.district+" "+n.address.street+" "+c}})},chooseImage:function(){var e=this;t.chooseImage({count:1,success:function(n){console.log(o("chooseImage success, temp path is",n.tempFilePaths[0]," at pages/clockIn/clockIn.vue:138"));var a=n.tempFilePaths[0];e.imageSrc=a,e.$service.schedule.ftpfileUpload({imageSrc:a}).then(function(n){200===n.statusCode?e.url=n.data:t.showModal({content:"上传失败",showCancel:!1})})},fail:function(t){console.log(o("chooseImage fail",t," at pages/clockIn/clockIn.vue:156"))}})}}};e.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])},"8aff":function(t,e,n){"use strict";var o=n("004b"),a=n.n(o);a.a},ac54:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},f26f:function(t,e,n){"use strict";n.r(e);var o=n("5908"),a=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e["default"]=a.a}},[["71c0","common/runtime","common/vendor"]]]);
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

