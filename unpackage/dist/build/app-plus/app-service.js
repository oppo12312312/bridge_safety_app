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
Z([3,'__l'])
Z([3,'__e'])
Z([3,'line'])
Z([3,'ec-canvas vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^onInit']],[[4],[[5],[[4],[[5],[1,'lineInit']]]]]]]]])
Z([3,'lineChart'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'yangan'])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'popup'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^hidePopup']],[[4],[[5],[[4],[[5],[1,'hidePopup']]]]]]]]])
Z([3,'fixed'])
Z([3,'top'])
Z([[7],[3,'popup']])
Z(z[6])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z(z[1])
Z([3,'2'])
Z(z[10])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[14])
Z(z[1])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'opanDetail']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'list']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'name']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'3-'],[[7],[3,'index']]],[1,',']],[1,'2']])
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
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/mpvue-echarts/src/echarts.wxml','./components/uni-badge/uni-badge.wxml','./components/uni-collapse-item/uni-collapse-item.wxml','./components/uni-collapse/uni-collapse.wxml','./components/uni-icon/uni-icon.wxml','./components/uni-list-item/uni-list-item.wxml','./components/uni-list/uni-list.wxml','./components/uni-popup-i/uni-popup.wxml','./pages/index/index.wxml','./pages/index/yangan/detail.wxml','./pages/index/yangan/yangan.wxml','./pages/login/index.wxml','./pages/qrCode/qrCode.wxml','./pages/user/editPassword/index.wxml','./pages/user/user.wxml'];d_[x[0]]={}
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
var o0=_mz(z,'mpvue-echarts',['bind:__l',0,'bind:onInit',1,'canvasId',1,'class',2,'data-event-opts',3,'data-ref',4,'vueId',5],[],e,s,gg)
_(r,o0)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var oBB=_n('view')
_rz(z,oBB,'class',0,e,s,gg)
var lCB=_mz(z,'uni-popup',['bind:__l',1,'bind:hidePopup',1,'class',2,'data-event-opts',3,'mode',4,'position',5,'show',6,'type',7,'vueId',8,'vueSlots',9],[],e,s,gg)
_(oBB,lCB)
var aDB=_mz(z,'uni-list',['bind:__l',11,'vueId',1,'vueSlots',2],[],e,s,gg)
var tEB=_v()
_(aDB,tEB)
var eFB=function(oHB,bGB,xIB,gg){
var fKB=_mz(z,'uni-list-item',['bind:__l',18,'bind:click',1,'data-event-opts',2,'title',3,'vueId',4],[],oHB,bGB,gg)
_(xIB,fKB)
return xIB
}
tEB.wxXCkey=4
_2z(z,16,eFB,e,s,gg,tEB,'item','index','index')
_(oBB,aDB)
_(r,oBB)
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
var oPB=_mz(z,'uni-collapse',['accordion',0,'bind:__l',1,'vueId',1,'vueSlots',2],[],e,s,gg)
var lQB=_mz(z,'uni-collapse-item',['bind:__l',4,'title',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(oPB,lQB)
var aRB=_mz(z,'uni-collapse-item',['bind:__l',8,'title',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(oPB,aRB)
_(r,oPB)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
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



__wxAppCode__['app.json']={"pages":["pages/login/index","pages/index/index","pages/user/user","pages/qrCode/qrCode","pages/index/yangan/yangan","pages/index/yangan/detail","pages/user/editPassword/index"],"subPackages":[],"window":{"navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"black","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#7A7E83","selectedColor":"#007AFF","borderStyle":"black","backgroundColor":"#F8F8F8","list":[{"pagePath":"pages/index/index","iconPath":"static/home/home.png","selectedIconPath":"static/home/home1.png","text":"主页"},{"pagePath":"pages/qrCode/qrCode","iconPath":"static/home/shaoma.png","selectedIconPath":"static/home/shaoma1.png","text":"扫码"},{"pagePath":"pages/user/user","iconPath":"static/home/user.png","selectedIconPath":"static/home/user1.png","text":"用户"}]},"nvueCompiler":"weex","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"uni-sj","compilerVersion":"2.0.1","usingComponents":{}};
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

__wxAppCode__['pages/index/index.json']={"navigationBarTitleText":"主页","usingComponents":{}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/index/yangan/detail.json']={"navigationBarTitleText":"NB烟感详情","usingComponents":{"mpvue-echarts":"/components/mpvue-echarts/src/echarts"}};
__wxAppCode__['pages/index/yangan/detail.wxml']=$gwx('./pages/index/yangan/detail.wxml');

__wxAppCode__['pages/index/yangan/yangan.json']={"navigationBarTitleText":"NB烟感列表","usingComponents":{"uni-popup":"/components/uni-popup-i/uni-popup","v-uni-icon":"/components/uni-icon/uni-icon","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item"}};
__wxAppCode__['pages/index/yangan/yangan.wxml']=$gwx('./pages/index/yangan/yangan.wxml');

__wxAppCode__['pages/login/index.json']={"navigationBarTitleText":"登录","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#FFFFFF","usingComponents":{}};
__wxAppCode__['pages/login/index.wxml']=$gwx('./pages/login/index.wxml');

__wxAppCode__['pages/qrCode/qrCode.json']={"navigationBarTitleText":"扫码","usingComponents":{}};
__wxAppCode__['pages/qrCode/qrCode.wxml']=$gwx('./pages/qrCode/qrCode.wxml');

__wxAppCode__['pages/user/editPassword/index.json']={"navigationBarTitleText":"修改密码","usingComponents":{}};
__wxAppCode__['pages/user/editPassword/index.wxml']=$gwx('./pages/user/editPassword/index.wxml');

__wxAppCode__['pages/user/user.json']={"navigationBarTitleText":"用户管理","usingComponents":{"uni-collapse":"/components/uni-collapse/uni-collapse","uni-collapse-item":"/components/uni-collapse-item/uni-collapse-item"}};
__wxAppCode__['pages/user/user.wxml']=$gwx('./pages/user/user.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"54e0":function(n,o,e){"use strict";e.r(o);var t=e("8a5e");for(var u in t)"default"!==u&&function(n){e.d(o,n,function(){return t[n]})}(u);e("71e3");var a,c,l=e("2877"),i=Object(l["a"])(t["default"],a,c,!1,null,null,null);o["default"]=i.exports},"71e3":function(n,o,e){"use strict";var t=e("ba19"),u=e.n(t);u.a},"8a5e":function(n,o,e){"use strict";e.r(o);var t=e("d63b"),u=e.n(t);for(var a in t)"default"!==a&&function(n){e.d(o,n,function(){return t[n]})}(a);o["default"]=u.a},ba19:function(n,o,e){},d63b:function(n,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t={onLaunch:function(){console.log("App Launch"," at App.vue:4")},onShow:function(){console.log("App Show"," at App.vue:7")},onHide:function(){console.log("App Hide"," at App.vue:10")}};o.default=t}},[["7a64","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function n(n) {
    for (var o, r, c = n[0], s = n[1], l = n[2], p = 0, a = []; p < c.length; p++) {
      r = c[p], i[r] && a.push(i[r][0]), i[r] = 0;
    }

    for (o in s) {
      Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o]);
    }

    m && m(n);

    while (a.length) {
      a.shift()();
    }

    return u.push.apply(u, l || []), t();
  }

  function t() {
    for (var e, n = 0; n < u.length; n++) {
      for (var t = u[n], o = !0, r = 1; r < t.length; r++) {
        var c = t[r];
        0 !== i[c] && (o = !1);
      }

      o && (u.splice(n--, 1), e = s(s.s = t[0]));
    }

    return e;
  }

  var o = {},
      r = {
    "common/runtime": 0
  },
      i = {
    "common/runtime": 0
  },
      u = [];

  function c(e) {
    return s.p + "" + e + ".js";
  }

  function s(n) {
    if (o[n]) return o[n].exports;
    var t = o[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(t.exports, t, t.exports, s), t.l = !0, t.exports;
  }

  s.e = function (e) {
    var n = [],
        t = {
      "components/uni-collapse-item/uni-collapse-item": 1,
      "components/uni-collapse/uni-collapse": 1,
      "components/uni-icon/uni-icon": 1,
      "components/uni-list-item/uni-list-item": 1,
      "components/uni-list/uni-list": 1,
      "components/uni-popup-i/uni-popup": 1,
      "components/mpvue-echarts/src/echarts": 1,
      "components/uni-badge/uni-badge": 1
    };
    r[e] ? n.push(r[e]) : 0 !== r[e] && t[e] && n.push(r[e] = new Promise(function (n, t) {
      for (var o = ({
        "components/uni-collapse-item/uni-collapse-item": "components/uni-collapse-item/uni-collapse-item",
        "components/uni-collapse/uni-collapse": "components/uni-collapse/uni-collapse",
        "components/uni-icon/uni-icon": "components/uni-icon/uni-icon",
        "components/uni-list-item/uni-list-item": "components/uni-list-item/uni-list-item",
        "components/uni-list/uni-list": "components/uni-list/uni-list",
        "components/uni-popup-i/uni-popup": "components/uni-popup-i/uni-popup",
        "components/mpvue-echarts/src/echarts": "components/mpvue-echarts/src/echarts",
        "components/uni-badge/uni-badge": "components/uni-badge/uni-badge"
      }[e] || e) + ".wxss", i = s.p + o, u = document.getElementsByTagName("link"), c = 0; c < u.length; c++) {
        var l = u[c],
            p = l.getAttribute("data-href") || l.getAttribute("href");
        if ("stylesheet" === l.rel && (p === o || p === i)) return n();
      }

      var a = document.getElementsByTagName("style");

      for (c = 0; c < a.length; c++) {
        l = a[c], p = l.getAttribute("data-href");
        if (p === o || p === i) return n();
      }

      var m = document.createElement("link");
      m.rel = "stylesheet", m.type = "text/css", m.onload = n, m.onerror = function (n) {
        var o = n && n.target && n.target.src || i,
            u = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
        u.request = o, delete r[e], m.parentNode.removeChild(m), t(u);
      }, m.href = i;
      var f = document.getElementsByTagName("head")[0];
      f.appendChild(m);
    }).then(function () {
      r[e] = 0;
    }));
    var o = i[e];
    if (0 !== o) if (o) n.push(o[2]);else {
      var u = new Promise(function (n, t) {
        o = i[e] = [n, t];
      });
      n.push(o[2] = u);
      var l,
          p = document.createElement("script");
      p.charset = "utf-8", p.timeout = 120, s.nc && p.setAttribute("nonce", s.nc), p.src = c(e), l = function l(n) {
        p.onerror = p.onload = null, clearTimeout(a);
        var t = i[e];

        if (0 !== t) {
          if (t) {
            var o = n && ("load" === n.type ? "missing" : n.type),
                r = n && n.target && n.target.src,
                u = new Error("Loading chunk " + e + " failed.\n(" + o + ": " + r + ")");
            u.type = o, u.request = r, t[1](u);
          }

          i[e] = void 0;
        }
      };
      var a = setTimeout(function () {
        l({
          type: "timeout",
          target: p
        });
      }, 12e4);
      p.onerror = p.onload = l, document.head.appendChild(p);
    }
    return Promise.all(n);
  }, s.m = e, s.c = o, s.d = function (e, n, t) {
    s.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: t
    });
  }, s.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, s.t = function (e, n) {
    if (1 & n && (e = s(e)), 8 & n) return e;
    if (4 & n && "object" === typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (s.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var o in e) {
      s.d(t, o, function (n) {
        return e[n];
      }.bind(null, o));
    }
    return t;
  }, s.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return s.d(n, "a", n), n;
  }, s.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, s.p = "/", s.oe = function (e) {
    throw console.error(e), e;
  };
  var l = global["webpackJsonp"] = global["webpackJsonp"] || [],
      p = l.push.bind(l);
  l.push = n, l = l.slice();

  for (var a = 0; a < l.length; a++) {
    n(l[a]);
  }

  var m = p;
  t();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0f54":function(t,e,n){"use strict";(function(t){n("894e");i(n("66fd"));var e=i(n("8875"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},2877:function(t,e,n){"use strict";function i(t,e,n,i,r,o,a,s){var l,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),i&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),a?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=l):r&&(l=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(t,e){return l.call(e),c(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,l):[l]}return{exports:t,options:u}}n.d(e,"a",function(){return i})},"2dbc":function(t,e,n){"use strict";(function(t){n("894e");i(n("66fd"));var e=i(n("794c"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"3c47":function(t,e,n){"use strict";(function(t){n("894e");i(n("66fd"));var e=i(n("d50e"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"44f3":function(t,e,n){"use strict";(function(t){n("894e");i(n("66fd"));var e=i(n("a42d"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"4e26":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("a34a")),r=o(n("4f2f"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,i,r,o,a){try{var s=t[o](a),l=s.value}catch(u){return void n(u)}s.done?e(l):Promise.resolve(l).then(i,r)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(i,r){var o=t.apply(e,n);function s(t){a(o,i,r,s,l,"next",t)}function l(t){a(o,i,r,s,l,"throw",t)}s(void 0)})}}var l={findUserByToken:function(){var t=s(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.get("/myuser/findUserByToken",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),findDepartmentByOrgId:function(){var t=s(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.get("/myuser/findDepartmentByOrgId",{orgId:e.orgId});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),alterPassword:function(){var t=s(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.post("/myuser/alterPassword",{formerPassword:e.formerPassword,password:e.password,userName:e.userName});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()};e.default=l},"4f2f":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return l(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done);i=!0)if(n.push(a.value),e&&n.length===e)break}catch(l){r=!0,o=l}finally{try{i||null==s["return"]||s["return"]()}finally{if(r)throw o}}return n}function l(t){if(Array.isArray(t))return t}function u(t,e,n,i,r,o,a){try{var s=t[o](a),l=s.value}catch(u){return void n(u)}s.done?e(l):Promise.resolve(l).then(i,r)}function c(t){return function(){var e=this,n=arguments;return new Promise(function(i,r){var o=t.apply(e,n);function a(t){u(o,i,r,a,s,"next",t)}function s(t){u(o,i,r,a,s,"throw",t)}a(void 0)})}}var h="http://39.97.111.250:8181",f={getHeader:function(){var e=t.getStorageSync("userInfo");return{userToken:e.token}},post:function(){var e=c(i.default.mark(function e(n,r){var a,s,l;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.request({url:"".concat(h).concat(n),method:"POST",header:this.getHeader(),data:r});case 2:return a=e.sent,s=o(a,2),s[0],l=s[1],e.abrupt("return",l.data);case 7:case"end":return e.stop()}},e,this)}));function n(t,n){return e.apply(this,arguments)}return n}(),get:function(){var e=c(i.default.mark(function e(n,r){var a,s,l;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.request({url:"".concat(h).concat(n),method:"GET",header:this.getHeader(),data:r});case 2:return a=e.sent,s=o(a,2),s[0],l=s[1],e.abrupt("return",l.data);case 7:case"end":return e.stop()}},e,this)}));function n(t,n){return e.apply(this,arguments)}return n}()};e.default=f}).call(this,n("6e42")["default"])},"554b":function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){function t(e,n){i(this,t),this.ctx=e,this.canvasId=n,this.chart=null,t.initStyle(e),this.initEvent()}return o(t,[{key:"getContext",value:function(t){return"2d"===t?this.ctx:null}},{key:"setChart",value:function(t){this.chart=t}},{key:"attachEvent",value:function(){}},{key:"detachEvent",value:function(){}},{key:"initEvent",value:function(){var t=this;this.event={};var e=[{wxName:"touchStart",ecName:"mousedown"},{wxName:"touchMove",ecName:"mousemove"},{wxName:"touchEnd",ecName:"mouseup"},{wxName:"touchEnd",ecName:"click"}];e.forEach(function(e){t.event[e.wxName]=function(n){var i=n.mp.touches[0];t.chart._zr.handler.dispatch(e.ecName,{zrX:"tap"===e.wxName?i.clientX:i.x,zrY:"tap"===e.wxName?i.clientY:i.y})}})}}],[{key:"initStyle",value:function(t){var e=arguments,n=["fillStyle","strokeStyle","globalAlpha","textAlign","textBaseAlign","shadow","lineWidth","lineCap","lineJoin","lineDash","miterLimit","fontSize"];n.forEach(function(e){Object.defineProperty(t,e,{set:function(n){("fillStyle"!==e&&"strokeStyle"!==e||"none"!==n&&null!==n)&&t["set".concat(e.charAt(0).toUpperCase()).concat(e.slice(1))](n)}})}),t.createRadialGradient=function(){return t.createCircularGradient(e)}}}]),t}();e.default=a},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function i(t){return void 0===t||null===t}function r(t){return void 0!==t&&null!==t}function o(t){return!0===t}function a(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function l(t){return null!==t&&"object"===typeof t}var u=Object.prototype.toString;function c(t){return"[object Object]"===u.call(t)}function h(t){return"[object RegExp]"===u.call(t)}function f(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function d(t){return r(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function p(t){return null==t?"":Array.isArray(t)||c(t)&&t.toString===u?JSON.stringify(t,null,2):String(t)}function g(t){var e=parseFloat(t);return isNaN(e)?t:e}function v(t,e){for(var n=Object.create(null),i=t.split(","),r=0;r<i.length;r++)n[i[r]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}v("slot,component",!0);var m=v("key,ref,slot,slot-scope,is");function y(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var _=Object.prototype.hasOwnProperty;function x(t,e){return _.call(t,e)}function w(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var b=/-(\w)/g,S=w(function(t){return t.replace(b,function(t,e){return e?e.toUpperCase():""})}),M=w(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),k=/\B([A-Z])/g,C=w(function(t){return t.replace(k,"-$1").toLowerCase()});function I(t,e){function n(n){var i=arguments.length;return i?i>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function A(t,e){return t.bind(e)}var T=Function.prototype.bind?A:I;function D(t,e){e=e||0;var n=t.length-e,i=new Array(n);while(n--)i[n]=t[n+e];return i}function O(t,e){for(var n in e)t[n]=e[n];return t}function P(t){for(var e={},n=0;n<t.length;n++)t[n]&&O(e,t[n]);return e}function L(t,e,n){}var E=function(t,e,n){return!1},N=function(t){return t};function R(t,e){if(t===e)return!0;var n=l(t),i=l(e);if(!n||!i)return!n&&!i&&String(t)===String(e);try{var r=Array.isArray(t),o=Array.isArray(e);if(r&&o)return t.length===e.length&&t.every(function(t,n){return R(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(r||o)return!1;var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every(function(n){return R(t[n],e[n])})}catch(u){return!1}}function B(t,e){for(var n=0;n<t.length;n++)if(R(t[n],e))return n;return-1}function z(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var $=["component","directive","filter"],F=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],V={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:E,isReservedAttr:E,isUnknownElement:E,getTagNamespace:L,parsePlatformTagName:N,mustUseProp:E,async:!0,_lifecycleHooks:F},j=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function H(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function W(t,e,n,i){Object.defineProperty(t,e,{value:n,enumerable:!!i,writable:!0,configurable:!0})}var G=new RegExp("[^"+j.source+".$_\\d]");function U(t){if(!G.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var q,X="__proto__"in{},Y="undefined"!==typeof window,Z="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,K=Z&&WXEnvironment.platform.toLowerCase(),J=Y&&window.navigator.userAgent.toLowerCase(),Q=J&&/msie|trident/.test(J),tt=(J&&J.indexOf("msie 9.0"),J&&J.indexOf("edge/")>0),et=(J&&J.indexOf("android"),J&&/iphone|ipad|ipod|ios/.test(J)||"ios"===K),nt=(J&&/chrome\/\d+/.test(J),J&&/phantomjs/.test(J),J&&J.match(/firefox\/(\d+)/),{}.watch);if(Y)try{var it={};Object.defineProperty(it,"passive",{get:function(){}}),window.addEventListener("test-passive",null,it)}catch(nr){}var rt=function(){return void 0===q&&(q=!Y&&!Z&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),q},ot=Y&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,lt="undefined"!==typeof Symbol&&at(Symbol)&&"undefined"!==typeof Reflect&&at(Reflect.ownKeys);st="undefined"!==typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ut=L,ct=0,ht=function(){this.id=ct++,this.subs=[]};ht.prototype.addSub=function(t){this.subs.push(t)},ht.prototype.removeSub=function(t){y(this.subs,t)},ht.prototype.depend=function(){ht.target&&ht.target.addDep(this)},ht.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},ht.target=null;var ft=[];function dt(t){ft.push(t),ht.target=t}function pt(){ft.pop(),ht.target=ft[ft.length-1]}var gt=function(t,e,n,i,r,o,a,s){this.tag=t,this.data=e,this.children=n,this.text=i,this.elm=r,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},vt={child:{configurable:!0}};vt.child.get=function(){return this.componentInstance},Object.defineProperties(gt.prototype,vt);var mt=function(t){void 0===t&&(t="");var e=new gt;return e.text=t,e.isComment=!0,e};function yt(t){return new gt(void 0,void 0,void 0,String(t))}function _t(t){var e=new gt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var xt=Array.prototype,wt=Object.create(xt),bt=["push","pop","shift","unshift","splice","sort","reverse"];bt.forEach(function(t){var e=xt[t];W(wt,t,function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];var r,o=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":r=n;break;case"splice":r=n.slice(2);break}return r&&a.observeArray(r),a.dep.notify(),o})});var St=Object.getOwnPropertyNames(wt),Mt=!0;function kt(t){Mt=t}var Ct=function(t){this.value=t,this.dep=new ht,this.vmCount=0,W(t,"__ob__",this),Array.isArray(t)?(X?It(t,wt):At(t,wt,St),this.observeArray(t)):this.walk(t)};function It(t,e){t.__proto__=e}function At(t,e,n){for(var i=0,r=n.length;i<r;i++){var o=n[i];W(t,o,e[o])}}function Tt(t,e){var n;if(l(t)&&!(t instanceof gt))return x(t,"__ob__")&&t.__ob__ instanceof Ct?n=t.__ob__:Mt&&!rt()&&(Array.isArray(t)||c(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Ct(t)),e&&n&&n.vmCount++,n}function Dt(t,e,n,i,r){var o=new ht,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,l=a&&a.set;s&&!l||2!==arguments.length||(n=t[e]);var u=!r&&Tt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ht.target&&(o.depend(),u&&(u.dep.depend(),Array.isArray(e)&&Lt(e))),e},set:function(e){var i=s?s.call(t):n;e===i||e!==e&&i!==i||s&&!l||(l?l.call(t,e):n=e,u=!r&&Tt(e),o.notify())}})}}function Ot(t,e,n){if(Array.isArray(t)&&f(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var i=t.__ob__;return t._isVue||i&&i.vmCount?n:i?(Dt(i.value,e,n),i.dep.notify(),n):(t[e]=n,n)}function Pt(t,e){if(Array.isArray(t)&&f(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||x(t,e)&&(delete t[e],n&&n.dep.notify())}}function Lt(t){for(var e=void 0,n=0,i=t.length;n<i;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Lt(e)}Ct.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Dt(t,e[n])},Ct.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Tt(t[e])};var Et=V.optionMergeStrategies;function Nt(t,e){if(!e)return t;for(var n,i,r,o=lt?Reflect.ownKeys(e):Object.keys(e),a=0;a<o.length;a++)n=o[a],"__ob__"!==n&&(i=t[n],r=e[n],x(t,n)?i!==r&&c(i)&&c(r)&&Nt(i,r):Ot(t,n,r));return t}function Rt(t,e,n){return n?function(){var i="function"===typeof e?e.call(n,n):e,r="function"===typeof t?t.call(n,n):t;return i?Nt(i,r):r}:e?t?function(){return Nt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Bt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?zt(n):n}function zt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function $t(t,e,n,i){var r=Object.create(t||null);return e?O(r,e):r}Et.data=function(t,e,n){return n?Rt(t,e,n):e&&"function"!==typeof e?t:Rt(t,e)},F.forEach(function(t){Et[t]=Bt}),$.forEach(function(t){Et[t+"s"]=$t}),Et.watch=function(t,e,n,i){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var r={};for(var o in O(r,t),e){var a=r[o],s=e[o];a&&!Array.isArray(a)&&(a=[a]),r[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return r},Et.props=Et.methods=Et.inject=Et.computed=function(t,e,n,i){if(!t)return e;var r=Object.create(null);return O(r,t),e&&O(r,e),r},Et.provide=Rt;var Ft=function(t,e){return void 0===e?t:e};function Vt(t,e){var n=t.props;if(n){var i,r,o,a={};if(Array.isArray(n)){i=n.length;while(i--)r=n[i],"string"===typeof r&&(o=S(r),a[o]={type:null})}else if(c(n))for(var s in n)r=n[s],o=S(s),a[o]=c(r)?r:{type:r};else 0;t.props=a}}function jt(t,e){var n=t.inject;if(n){var i=t.inject={};if(Array.isArray(n))for(var r=0;r<n.length;r++)i[n[r]]={from:n[r]};else if(c(n))for(var o in n){var a=n[o];i[o]=c(a)?O({from:o},a):{from:a}}else 0}}function Ht(t){var e=t.directives;if(e)for(var n in e){var i=e[n];"function"===typeof i&&(e[n]={bind:i,update:i})}}function Wt(t,e,n){if("function"===typeof e&&(e=e.options),Vt(e,n),jt(e,n),Ht(e),!e._base&&(e.extends&&(t=Wt(t,e.extends,n)),e.mixins))for(var i=0,r=e.mixins.length;i<r;i++)t=Wt(t,e.mixins[i],n);var o,a={};for(o in t)s(o);for(o in e)x(t,o)||s(o);function s(i){var r=Et[i]||Ft;a[i]=r(t[i],e[i],n,i)}return a}function Gt(t,e,n,i){if("string"===typeof n){var r=t[e];if(x(r,n))return r[n];var o=S(n);if(x(r,o))return r[o];var a=M(o);if(x(r,a))return r[a];var s=r[n]||r[o]||r[a];return s}}function Ut(t,e,n,i){var r=e[t],o=!x(n,t),a=n[t],s=Zt(Boolean,r.type);if(s>-1)if(o&&!x(r,"default"))a=!1;else if(""===a||a===C(t)){var l=Zt(String,r.type);(l<0||s<l)&&(a=!0)}if(void 0===a){a=qt(i,r,t);var u=Mt;kt(!0),Tt(a),kt(u)}return a}function qt(t,e,n){if(x(e,"default")){var i=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof i&&"Function"!==Xt(e.type)?i.call(t):i}}function Xt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Yt(t,e){return Xt(t)===Xt(e)}function Zt(t,e){if(!Array.isArray(e))return Yt(e,t)?0:-1;for(var n=0,i=e.length;n<i;n++)if(Yt(e[n],t))return n;return-1}function Kt(t,e,n){dt();try{if(e){var i=e;while(i=i.$parent){var r=i.$options.errorCaptured;if(r)for(var o=0;o<r.length;o++)try{var a=!1===r[o].call(i,t,e,n);if(a)return}catch(nr){Qt(nr,i,"errorCaptured hook")}}}Qt(t,e,n)}finally{pt()}}function Jt(t,e,n,i,r){var o;try{o=n?t.apply(e,n):t.call(e),o&&!o._isVue&&d(o)&&!o._handled&&(o.catch(function(t){return Kt(t,i,r+" (Promise/async)")}),o._handled=!0)}catch(nr){Kt(nr,i,r)}return o}function Qt(t,e,n){if(V.errorHandler)try{return V.errorHandler.call(null,t,e,n)}catch(nr){nr!==t&&te(nr,null,"config.errorHandler")}te(t,e,n)}function te(t,e,n){if(!Y&&!Z||"undefined"===typeof console)throw t;console.error(t)}var ee,ne=[],ie=!1;function re(){ie=!1;var t=ne.slice(0);ne.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&at(Promise)){var oe=Promise.resolve();ee=function(){oe.then(re),et&&setTimeout(L)}}else if(Q||"undefined"===typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ee="undefined"!==typeof setImmediate&&at(setImmediate)?function(){setImmediate(re)}:function(){setTimeout(re,0)};else{var ae=1,se=new MutationObserver(re),le=document.createTextNode(String(ae));se.observe(le,{characterData:!0}),ee=function(){ae=(ae+1)%2,le.data=String(ae)}}function ue(t,e){var n;if(ne.push(function(){if(t)try{t.call(e)}catch(nr){Kt(nr,e,"nextTick")}else n&&n(e)}),ie||(ie=!0,ee()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var ce=new st;function he(t){fe(t,ce),ce.clear()}function fe(t,e){var n,i,r=Array.isArray(t);if(!(!r&&!l(t)||Object.isFrozen(t)||t instanceof gt)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(r){n=t.length;while(n--)fe(t[n],e)}else{i=Object.keys(t),n=i.length;while(n--)fe(t[i[n]],e)}}}var de=w(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var i="!"===t.charAt(0);return t=i?t.slice(1):t,{name:t,once:n,capture:i,passive:e}});function pe(t,e){function n(){var t=arguments,i=n.fns;if(!Array.isArray(i))return Jt(i,null,arguments,e,"v-on handler");for(var r=i.slice(),o=0;o<r.length;o++)Jt(r[o],null,t,e,"v-on handler")}return n.fns=t,n}function ge(t,e,n,r,a,s){var l,u,c,h;for(l in t)u=t[l],c=e[l],h=de(l),i(u)||(i(c)?(i(u.fns)&&(u=t[l]=pe(u,s)),o(h.once)&&(u=t[l]=a(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==c&&(c.fns=u,t[l]=c));for(l in e)i(t[l])&&(h=de(l),r(h.name,e[l],h.capture))}function ve(t,e,n){var o=e.options.props;if(!i(o)){var a={},s=t.attrs,l=t.props;if(r(s)||r(l))for(var u in o){var c=C(u);me(a,l,u,c,!0)||me(a,s,u,c,!1)}return a}}function me(t,e,n,i,o){if(r(e)){if(x(e,n))return t[n]=e[n],o||delete e[n],!0;if(x(e,i))return t[n]=e[i],o||delete e[i],!0}return!1}function ye(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function _e(t){return s(t)?[yt(t)]:Array.isArray(t)?we(t):void 0}function xe(t){return r(t)&&r(t.text)&&a(t.isComment)}function we(t,e){var n,a,l,u,c=[];for(n=0;n<t.length;n++)a=t[n],i(a)||"boolean"===typeof a||(l=c.length-1,u=c[l],Array.isArray(a)?a.length>0&&(a=we(a,(e||"")+"_"+n),xe(a[0])&&xe(u)&&(c[l]=yt(u.text+a[0].text),a.shift()),c.push.apply(c,a)):s(a)?xe(u)?c[l]=yt(u.text+a):""!==a&&c.push(yt(a)):xe(a)&&xe(u)?c[l]=yt(u.text+a.text):(o(t._isVList)&&r(a.tag)&&i(a.key)&&r(e)&&(a.key="__vlist"+e+"_"+n+"__"),c.push(a)));return c}function be(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Se(t){var e=Me(t.$options.inject,t);e&&(kt(!1),Object.keys(e).forEach(function(n){Dt(t,n,e[n])}),kt(!0))}function Me(t,e){if(t){for(var n=Object.create(null),i=lt?Reflect.ownKeys(t):Object.keys(t),r=0;r<i.length;r++){var o=i[r];if("__ob__"!==o){var a=t[o].from,s=e;while(s){if(s._provided&&x(s._provided,a)){n[o]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[o]){var l=t[o].default;n[o]="function"===typeof l?l.call(e):l}else 0}}return n}}function ke(t,e){if(!t||!t.length)return{};for(var n={},i=0,r=t.length;i<r;i++){var o=t[i],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==e&&o.fnContext!==e||!a||null==a.slot)(n.default||(n.default=[])).push(o);else{var s=a.slot,l=n[s]||(n[s]=[]);"template"===o.tag?l.push.apply(l,o.children||[]):l.push(o)}}for(var u in n)n[u].every(Ce)&&delete n[u];return n}function Ce(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Ie(t,e,i){var r,o=Object.keys(e).length>0,a=t?!!t.$stable:!o,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&i&&i!==n&&s===i.$key&&!o&&!i.$hasNormal)return i;for(var l in r={},t)t[l]&&"$"!==l[0]&&(r[l]=Ae(e,l,t[l]))}else r={};for(var u in e)u in r||(r[u]=Te(e,u));return t&&Object.isExtensible(t)&&(t._normalized=r),W(r,"$stable",a),W(r,"$key",s),W(r,"$hasNormal",o),r}function Ae(t,e,n){var i=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:_e(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:i,enumerable:!0,configurable:!0}),i}function Te(t,e){return function(){return t[e]}}function De(t,e){var n,i,o,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),i=0,o=t.length;i<o;i++)n[i]=e(t[i],i);else if("number"===typeof t)for(n=new Array(t),i=0;i<t;i++)n[i]=e(i+1,i);else if(l(t))if(lt&&t[Symbol.iterator]){n=[];var u=t[Symbol.iterator](),c=u.next();while(!c.done)n.push(e(c.value,n.length)),c=u.next()}else for(a=Object.keys(t),n=new Array(a.length),i=0,o=a.length;i<o;i++)s=a[i],n[i]=e(t[s],s,i);return r(n)||(n=[]),n._isVList=!0,n}function Oe(t,e,n,i){var r,o=this.$scopedSlots[t];o?(n=n||{},i&&(n=O(O({},i),n)),r=o(n)||e):r=this.$slots[t]||e;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},r):r}function Pe(t){return Gt(this.$options,"filters",t,!0)||N}function Le(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Ee(t,e,n,i,r){var o=V.keyCodes[e]||n;return r&&i&&!V.keyCodes[e]?Le(r,i):o?Le(o,t):i?C(i)!==e:void 0}function Ne(t,e,n,i,r){if(n)if(l(n)){var o;Array.isArray(n)&&(n=P(n));var a=function(a){if("class"===a||"style"===a||m(a))o=t;else{var s=t.attrs&&t.attrs.type;o=i||V.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var l=S(a),u=C(a);if(!(l in o)&&!(u in o)&&(o[a]=n[a],r)){var c=t.on||(t.on={});c["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function Re(t,e){var n=this._staticTrees||(this._staticTrees=[]),i=n[t];return i&&!e?i:(i=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),ze(i,"__static__"+t,!1),i)}function Be(t,e,n){return ze(t,"__once__"+e+(n?"_"+n:""),!0),t}function ze(t,e,n){if(Array.isArray(t))for(var i=0;i<t.length;i++)t[i]&&"string"!==typeof t[i]&&$e(t[i],e+"_"+i,n);else $e(t,e,n)}function $e(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Fe(t,e){if(e)if(c(e)){var n=t.on=t.on?O({},t.on):{};for(var i in e){var r=n[i],o=e[i];n[i]=r?[].concat(r,o):o}}else;return t}function Ve(t,e,n,i){e=e||{$stable:!n};for(var r=0;r<t.length;r++){var o=t[r];Array.isArray(o)?Ve(o,e,n):o&&(o.proxy&&(o.fn.proxy=!0),e[o.key]=o.fn)}return i&&(e.$key=i),e}function je(t,e){for(var n=0;n<e.length;n+=2){var i=e[n];"string"===typeof i&&i&&(t[e[n]]=e[n+1])}return t}function He(t,e){return"string"===typeof t?e+t:t}function We(t){t._o=Be,t._n=g,t._s=p,t._l=De,t._t=Oe,t._q=R,t._i=B,t._m=Re,t._f=Pe,t._k=Ee,t._b=Ne,t._v=yt,t._e=mt,t._u=Ve,t._g=Fe,t._d=je,t._p=He}function Ge(t,e,i,r,a){var s,l=this,u=a.options;x(r,"_uid")?(s=Object.create(r),s._original=r):(s=r,r=r._original);var c=o(u._compiled),h=!c;this.data=t,this.props=e,this.children=i,this.parent=r,this.listeners=t.on||n,this.injections=Me(u.inject,r),this.slots=function(){return l.$slots||Ie(t.scopedSlots,l.$slots=ke(i,r)),l.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Ie(t.scopedSlots,this.slots())}}),c&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Ie(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,i){var o=on(s,t,e,n,i,h);return o&&!Array.isArray(o)&&(o.fnScopeId=u._scopeId,o.fnContext=r),o}:this._c=function(t,e,n,i){return on(s,t,e,n,i,h)}}function Ue(t,e,i,o,a){var s=t.options,l={},u=s.props;if(r(u))for(var c in u)l[c]=Ut(c,u,e||n);else r(i.attrs)&&Xe(l,i.attrs),r(i.props)&&Xe(l,i.props);var h=new Ge(i,l,a,o,t),f=s.render.call(null,h._c,h);if(f instanceof gt)return qe(f,i,h.parent,s,h);if(Array.isArray(f)){for(var d=_e(f)||[],p=new Array(d.length),g=0;g<d.length;g++)p[g]=qe(d[g],i,h.parent,s,h);return p}}function qe(t,e,n,i,r){var o=_t(t);return o.fnContext=n,o.fnOptions=i,e.slot&&((o.data||(o.data={})).slot=e.slot),o}function Xe(t,e){for(var n in e)t[S(n)]=e[n]}We(Ge.prototype);var Ye={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Ye.prepatch(n,n)}else{var i=t.componentInstance=Je(t,Mn);i.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,i=e.componentInstance=t.componentInstance;An(i,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Pn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Wn(n):Dn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?On(e,!0):e.$destroy())}},Ze=Object.keys(Ye);function Ke(t,e,n,a,s){if(!i(t)){var u=n.$options._base;if(l(t)&&(t=u.extend(t)),"function"===typeof t){var c;if(i(t.cid)&&(c=t,t=gn(c,u),void 0===t))return pn(c,e,n,a,s);e=e||{},di(t),r(e.model)&&en(t.options,e);var h=ve(e,t,s);if(o(t.options.functional))return Ue(t,h,e,n,a);var f=e.on;if(e.on=e.nativeOn,o(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}Qe(e);var p=t.options.name||s,g=new gt("vue-component-"+t.cid+(p?"-"+p:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:f,tag:s,children:a},c);return g}}}function Je(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},i=t.data.inlineTemplate;return r(i)&&(n.render=i.render,n.staticRenderFns=i.staticRenderFns),new t.componentOptions.Ctor(n)}function Qe(t){for(var e=t.hook||(t.hook={}),n=0;n<Ze.length;n++){var i=Ze[n],r=e[i],o=Ye[i];r===o||r&&r._merged||(e[i]=r?tn(o,r):o)}}function tn(t,e){var n=function(n,i){t(n,i),e(n,i)};return n._merged=!0,n}function en(t,e){var n=t.model&&t.model.prop||"value",i=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var o=e.on||(e.on={}),a=o[i],s=e.model.callback;r(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(o[i]=[s].concat(a)):o[i]=s}var nn=1,rn=2;function on(t,e,n,i,r,a){return(Array.isArray(n)||s(n))&&(r=i,i=n,n=void 0),o(a)&&(r=rn),an(t,e,n,i,r)}function an(t,e,n,i,o){if(r(n)&&r(n.__ob__))return mt();if(r(n)&&r(n.is)&&(e=n.is),!e)return mt();var a,s,l;(Array.isArray(i)&&"function"===typeof i[0]&&(n=n||{},n.scopedSlots={default:i[0]},i.length=0),o===rn?i=_e(i):o===nn&&(i=ye(i)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||V.getTagNamespace(e),a=V.isReservedTag(e)?new gt(V.parsePlatformTagName(e),n,i,void 0,void 0,t):n&&n.pre||!r(l=Gt(t.$options,"components",e))?new gt(e,n,i,void 0,void 0,t):Ke(l,n,t,i,e)):a=Ke(e,n,t,i);return Array.isArray(a)?a:r(a)?(r(s)&&sn(a,s),r(n)&&ln(n),a):mt()}function sn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),r(t.children))for(var a=0,s=t.children.length;a<s;a++){var l=t.children[a];r(l.tag)&&(i(l.ns)||o(n)&&"svg"!==l.tag)&&sn(l,e,n)}}function ln(t){l(t.style)&&he(t.style),l(t.class)&&he(t.class)}function un(t){t._vnode=null,t._staticTrees=null;var e=t.$options,i=t.$vnode=e._parentVnode,r=i&&i.context;t.$slots=ke(e._renderChildren,r),t.$scopedSlots=n,t._c=function(e,n,i,r){return on(t,e,n,i,r,!1)},t.$createElement=function(e,n,i,r){return on(t,e,n,i,r,!0)};var o=i&&i.data;Dt(t,"$attrs",o&&o.attrs||n,null,!0),Dt(t,"$listeners",e._parentListeners||n,null,!0)}var cn,hn=null;function fn(t){We(t.prototype),t.prototype.$nextTick=function(t){return ue(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,i=n.render,r=n._parentVnode;r&&(e.$scopedSlots=Ie(r.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=r;try{hn=e,t=i.call(e._renderProxy,e.$createElement)}catch(nr){Kt(nr,e,"render"),t=e._vnode}finally{hn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof gt||(t=mt()),t.parent=r,t}}function dn(t,e){return(t.__esModule||lt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),l(t)?e.extend(t):t}function pn(t,e,n,i,r){var o=mt();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:i,tag:r},o}function gn(t,e){if(o(t.error)&&r(t.errorComp))return t.errorComp;if(r(t.resolved))return t.resolved;var n=hn;if(n&&r(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),o(t.loading)&&r(t.loadingComp))return t.loadingComp;if(n&&!r(t.owners)){var a=t.owners=[n],s=!0,u=null,c=null;n.$on("hook:destroyed",function(){return y(a,n)});var h=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==u&&(clearTimeout(u),u=null),null!==c&&(clearTimeout(c),c=null))},f=z(function(n){t.resolved=dn(n,e),s?a.length=0:h(!0)}),p=z(function(e){r(t.errorComp)&&(t.error=!0,h(!0))}),g=t(f,p);return l(g)&&(d(g)?i(t.resolved)&&g.then(f,p):d(g.component)&&(g.component.then(f,p),r(g.error)&&(t.errorComp=dn(g.error,e)),r(g.loading)&&(t.loadingComp=dn(g.loading,e),0===g.delay?t.loading=!0:u=setTimeout(function(){u=null,i(t.resolved)&&i(t.error)&&(t.loading=!0,h(!1))},g.delay||200)),r(g.timeout)&&(c=setTimeout(function(){c=null,i(t.resolved)&&p(null)},g.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function vn(t){return t.isComment&&t.asyncFactory}function mn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(r(n)&&(r(n.componentOptions)||vn(n)))return n}}function yn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&bn(t,e)}function _n(t,e){cn.$on(t,e)}function xn(t,e){cn.$off(t,e)}function wn(t,e){var n=cn;return function i(){var r=e.apply(null,arguments);null!==r&&n.$off(t,i)}}function bn(t,e,n){cn=t,ge(e,n||{},_n,xn,wn,t),cn=void 0}function Sn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var i=this;if(Array.isArray(t))for(var r=0,o=t.length;r<o;r++)i.$on(t[r],n);else(i._events[t]||(i._events[t]=[])).push(n),e.test(t)&&(i._hasHookEvent=!0);return i},t.prototype.$once=function(t,e){var n=this;function i(){n.$off(t,i),e.apply(n,arguments)}return i.fn=e,n.$on(t,i),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var i=0,r=t.length;i<r;i++)n.$off(t[i],e);return n}var o,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var s=a.length;while(s--)if(o=a[s],o===e||o.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?D(n):n;for(var i=D(arguments,1),r='event handler for "'+t+'"',o=0,a=n.length;o<a;o++)Jt(n[o],e,i,e,r)}return e}}var Mn=null;function kn(t){var e=Mn;return Mn=t,function(){Mn=e}}function Cn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function In(t){t.prototype._update=function(t,e){var n=this,i=n.$el,r=n._vnode,o=kn(n);n._vnode=t,n.$el=r?n.__patch__(r,t):n.__patch__(n.$el,t,e,!1),o(),i&&(i.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Pn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||y(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Pn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function An(t,e,i,r,o){var a=r.data.scopedSlots,s=t.$scopedSlots,l=!!(a&&!a.$stable||s!==n&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key),u=!!(o||t.$options._renderChildren||l);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=o,t.$attrs=r.data.attrs||n,t.$listeners=i||n,e&&t.$options.props){kt(!1);for(var c=t._props,h=t.$options._propKeys||[],f=0;f<h.length;f++){var d=h[f],p=t.$options.props;c[d]=Ut(d,p,e,t)}kt(!0),t.$options.propsData=e}i=i||n;var g=t.$options._parentListeners;t.$options._parentListeners=i,bn(t,i,g),u&&(t.$slots=ke(o,r.context),t.$forceUpdate())}function Tn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Dn(t,e){if(e){if(t._directInactive=!1,Tn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Dn(t.$children[n]);Pn(t,"activated")}}function On(t,e){if((!e||(t._directInactive=!0,!Tn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)On(t.$children[n]);Pn(t,"deactivated")}}function Pn(t,e){dt();var n=t.$options[e],i=e+" hook";if(n)for(var r=0,o=n.length;r<o;r++)Jt(n[r],t,null,t,i);t._hasHookEvent&&t.$emit("hook:"+e),pt()}var Ln=[],En=[],Nn={},Rn=!1,Bn=!1,zn=0;function $n(){zn=Ln.length=En.length=0,Nn={},Rn=Bn=!1}var Fn=Date.now;if(Y&&!Q){var Vn=window.performance;Vn&&"function"===typeof Vn.now&&Fn()>document.createEvent("Event").timeStamp&&(Fn=function(){return Vn.now()})}function jn(){var t,e;for(Fn(),Bn=!0,Ln.sort(function(t,e){return t.id-e.id}),zn=0;zn<Ln.length;zn++)t=Ln[zn],t.before&&t.before(),e=t.id,Nn[e]=null,t.run();var n=En.slice(),i=Ln.slice();$n(),Gn(n),Hn(i),ot&&V.devtools&&ot.emit("flush")}function Hn(t){var e=t.length;while(e--){var n=t[e],i=n.vm;i._watcher===n&&i._isMounted&&!i._isDestroyed&&Pn(i,"updated")}}function Wn(t){t._inactive=!1,En.push(t)}function Gn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Dn(t[e],!0)}function Un(t){var e=t.id;if(null==Nn[e]){if(Nn[e]=!0,Bn){var n=Ln.length-1;while(n>zn&&Ln[n].id>t.id)n--;Ln.splice(n+1,0,t)}else Ln.push(t);Rn||(Rn=!0,ue(jn))}}var qn=0,Xn=function(t,e,n,i,r){this.vm=t,r&&(t._watcher=this),t._watchers.push(this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++qn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=U(e),this.getter||(this.getter=L)),this.value=this.lazy?void 0:this.get()};Xn.prototype.get=function(){var t;dt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(nr){if(!this.user)throw nr;Kt(nr,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&he(t),pt(),this.cleanupDeps()}return t},Xn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Xn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Xn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Un(this)},Xn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||l(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(nr){Kt(nr,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Xn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Xn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Xn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Yn={enumerable:!0,configurable:!0,get:L,set:L};function Zn(t,e,n){Yn.get=function(){return this[e][n]},Yn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Yn)}function Kn(t){t._watchers=[];var e=t.$options;e.props&&Jn(t,e.props),e.methods&&ai(t,e.methods),e.data?Qn(t):Tt(t._data={},!0),e.computed&&ni(t,e.computed),e.watch&&e.watch!==nt&&si(t,e.watch)}function Jn(t,e){var n=t.$options.propsData||{},i=t._props={},r=t.$options._propKeys=[],o=!t.$parent;o||kt(!1);var a=function(o){r.push(o);var a=Ut(o,e,n,t);Dt(i,o,a),o in t||Zn(t,"_props",o)};for(var s in e)a(s);kt(!0)}function Qn(t){var e=t.$options.data;e=t._data="function"===typeof e?ti(e,t):e||{},c(e)||(e={});var n=Object.keys(e),i=t.$options.props,r=(t.$options.methods,n.length);while(r--){var o=n[r];0,i&&x(i,o)||H(o)||Zn(t,"_data",o)}Tt(e,!0)}function ti(t,e){dt();try{return t.call(e,e)}catch(nr){return Kt(nr,e,"data()"),{}}finally{pt()}}var ei={lazy:!0};function ni(t,e){var n=t._computedWatchers=Object.create(null),i=rt();for(var r in e){var o=e[r],a="function"===typeof o?o:o.get;0,i||(n[r]=new Xn(t,a||L,L,ei)),r in t||ii(t,r,o)}}function ii(t,e,n){var i=!rt();"function"===typeof n?(Yn.get=i?ri(e):oi(n),Yn.set=L):(Yn.get=n.get?i&&!1!==n.cache?ri(e):oi(n.get):L,Yn.set=n.set||L),Object.defineProperty(t,e,Yn)}function ri(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ht.target&&e.depend(),e.value}}function oi(t){return function(){return t.call(this,this)}}function ai(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?L:T(e[n],t)}function si(t,e){for(var n in e){var i=e[n];if(Array.isArray(i))for(var r=0;r<i.length;r++)li(t,n,i[r]);else li(t,n,i)}}function li(t,e,n,i){return c(n)&&(i=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,i)}function ui(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Ot,t.prototype.$delete=Pt,t.prototype.$watch=function(t,e,n){var i=this;if(c(e))return li(i,t,e,n);n=n||{},n.user=!0;var r=new Xn(i,t,e,n);if(n.immediate)try{e.call(i,r.value)}catch(o){Kt(o,i,'callback for immediate watcher "'+r.expression+'"')}return function(){r.teardown()}}}var ci=0;function hi(t){t.prototype._init=function(t){var e=this;e._uid=ci++,e._isVue=!0,t&&t._isComponent?fi(e,t):e.$options=Wt(di(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Cn(e),yn(e),un(e),Pn(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&Se(e),Kn(e),"mp-toutiao"!==e.mpHost&&be(e),"mp-toutiao"!==e.mpHost&&Pn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function fi(t,e){var n=t.$options=Object.create(t.constructor.options),i=e._parentVnode;n.parent=e.parent,n._parentVnode=i;var r=i.componentOptions;n.propsData=r.propsData,n._parentListeners=r.listeners,n._renderChildren=r.children,n._componentTag=r.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function di(t){var e=t.options;if(t.super){var n=di(t.super),i=t.superOptions;if(n!==i){t.superOptions=n;var r=pi(t);r&&O(t.extendOptions,r),e=t.options=Wt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function pi(t){var e,n=t.options,i=t.sealedOptions;for(var r in n)n[r]!==i[r]&&(e||(e={}),e[r]=n[r]);return e}function gi(t){this._init(t)}function vi(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=D(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function mi(t){t.mixin=function(t){return this.options=Wt(this.options,t),this}}function yi(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,i=n.cid,r=t._Ctor||(t._Ctor={});if(r[i])return r[i];var o=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Wt(n.options,t),a["super"]=n,a.options.props&&_i(a),a.options.computed&&xi(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,$.forEach(function(t){a[t]=n[t]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=O({},a.options),r[i]=a,a}}function _i(t){var e=t.options.props;for(var n in e)Zn(t.prototype,"_props",n)}function xi(t){var e=t.options.computed;for(var n in e)ii(t.prototype,n,e[n])}function wi(t){$.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&c(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function bi(t){return t&&(t.Ctor.options.name||t.tag)}function Si(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!h(t)&&t.test(e)}function Mi(t,e){var n=t.cache,i=t.keys,r=t._vnode;for(var o in n){var a=n[o];if(a){var s=bi(a.componentOptions);s&&!e(s)&&ki(n,o,i,r)}}}function ki(t,e,n,i){var r=t[e];!r||i&&r.tag===i.tag||r.componentInstance.$destroy(),t[e]=null,y(n,e)}hi(gi),ui(gi),Sn(gi),In(gi),fn(gi);var Ci=[String,RegExp,Array],Ii={name:"keep-alive",abstract:!0,props:{include:Ci,exclude:Ci,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)ki(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){Mi(t,function(t){return Si(e,t)})}),this.$watch("exclude",function(e){Mi(t,function(t){return!Si(e,t)})})},render:function(){var t=this.$slots.default,e=mn(t),n=e&&e.componentOptions;if(n){var i=bi(n),r=this,o=r.include,a=r.exclude;if(o&&(!i||!Si(o,i))||a&&i&&Si(a,i))return e;var s=this,l=s.cache,u=s.keys,c=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;l[c]?(e.componentInstance=l[c].componentInstance,y(u,c),u.push(c)):(l[c]=e,u.push(c),this.max&&u.length>parseInt(this.max)&&ki(l,u[0],u,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},Ai={KeepAlive:Ii};function Ti(t){var e={get:function(){return V}};Object.defineProperty(t,"config",e),t.util={warn:ut,extend:O,mergeOptions:Wt,defineReactive:Dt},t.set=Ot,t.delete=Pt,t.nextTick=ue,t.observable=function(t){return Tt(t),t},t.options=Object.create(null),$.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,O(t.options.components,Ai),vi(t),mi(t),yi(t),wi(t)}Ti(gi),Object.defineProperty(gi.prototype,"$isServer",{get:rt}),Object.defineProperty(gi.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(gi,"FunctionalRenderContext",{value:Ge}),gi.version="2.6.10";var Di="[object Array]",Oi="[object Object]";function Pi(t,e){var n={};return Li(t,e),Ei(t,e,"",n),n}function Li(t,e){if(t!==e){var n=Ri(t),i=Ri(e);if(n==Oi&&i==Oi){if(Object.keys(t).length>=Object.keys(e).length)for(var r in e){var o=t[r];void 0===o?t[r]=null:Li(o,e[r])}}else n==Di&&i==Di&&t.length>=e.length&&e.forEach(function(e,n){Li(t[n],e)})}}function Ei(t,e,n,i){if(t!==e){var r=Ri(t),o=Ri(e);if(r==Oi)if(o!=Oi||Object.keys(t).length<Object.keys(e).length)Ni(i,n,t);else{var a=function(r){var o=t[r],a=e[r],s=Ri(o),l=Ri(a);if(s!=Di&&s!=Oi)o!=e[r]&&Ni(i,(""==n?"":n+".")+r,o);else if(s==Di)l!=Di?Ni(i,(""==n?"":n+".")+r,o):o.length<a.length?Ni(i,(""==n?"":n+".")+r,o):o.forEach(function(t,e){Ei(t,a[e],(""==n?"":n+".")+r+"["+e+"]",i)});else if(s==Oi)if(l!=Oi||Object.keys(o).length<Object.keys(a).length)Ni(i,(""==n?"":n+".")+r,o);else for(var u in o)Ei(o[u],a[u],(""==n?"":n+".")+r+"."+u,i)};for(var s in t)a(s)}else r==Di?o!=Di?Ni(i,n,t):t.length<e.length?Ni(i,n,t):t.forEach(function(t,r){Ei(t,e[r],n+"["+r+"]",i)}):Ni(i,n,t)}}function Ni(t,e,n){t[e]=n}function Ri(t){return Object.prototype.toString.call(t)}function Bi(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var i=0;i<n.length;i++)n[i]()}}function zi(t){return Ln.find(function(e){return t._watcher===e})}function $i(t,e){if(!t.__next_tick_pending&&!zi(t)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return ue(e,t)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var i=t.$scope;console.log("["+ +new Date+"]["+(i.is||i.route)+"]["+t._uid+"]:nextMPTick")}var r;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(nr){Kt(nr,t,"nextTick")}else r&&r(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){r=t})}function Fi(t){var e=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{})),n=e.reduce(function(e,n){return e[n]=t[n],e},Object.create(null));return Object.assign(n,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(n["name"]=t.name,n["value"]=t.value),JSON.parse(JSON.stringify(n))}var Vi=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var i=this.$scope,r=Fi(this);r.__webviewId__=i.data.__webviewId__;var o=Object.create(null);Object.keys(r).forEach(function(t){o[t]=i.data[t]});var a=Pi(r,o);Object.keys(a).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(i.is||i.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,i.setData(a,function(){n.__next_tick_pending=!1,Bi(n)})):Bi(this)}};function ji(){}function Hi(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=ji),t.$options.render||(t.$options.render=ji),"mp-toutiao"!==t.mpHost&&Pn(t,"beforeMount");var i=function(){t._update(t._render(),n)};return new Xn(t,i,L,{before:function(){t._isMounted&&!t._isDestroyed&&Pn(t,"beforeUpdate")}},!0),n=!1,t}function Wi(t,e){return r(t)||r(e)?Gi(t,Ui(e)):""}function Gi(t,e){return t?e?t+" "+e:t:e||""}function Ui(t){return Array.isArray(t)?qi(t):l(t)?Xi(t):"string"===typeof t?t:""}function qi(t){for(var e,n="",i=0,o=t.length;i<o;i++)r(e=Ui(t[i]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Xi(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Yi=w(function(t){var e={},n=/;(?![^(]*\))/g,i=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(i);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Zi(t){return Array.isArray(t)?P(t):"string"===typeof t?Yi(t):t}var Ki=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Ji(t,e){var n=e.split("."),i=n[0];return 0===i.indexOf("__$n")&&(i=parseInt(i.replace("__$n",""))),1===n.length?t[i]:Ji(t[i],n.slice(1).join("."))}function Qi(t){var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:D(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return $i(this,t)},Ki.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=be,t.prototype.__init_injections=Se,t.prototype.__call_hook=function(t,e){var n=this;dt();var i,r=n.$options[t],o=t+" hook";if(r)for(var a=0,s=r.length;a<s;a++)i=Jt(r[a],n,e?[e]:null,n,o);return n._hasHookEvent&&n.$emit("hook:"+t),pt(),i},t.prototype.__set_model=function(t,e,n,i){Array.isArray(i)&&(-1!==i.indexOf("trim")&&(n=n.trim()),-1!==i.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return c(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Ji(e||this,t)},t.prototype.__get_class=function(t,e){return Wi(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Zi(t),i=e?O(e,n):n;return Object.keys(i).map(function(t){return C(t)+":"+i[t]}).join(";")}}var tr=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function er(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==tr.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,i=n.created;tr.forEach(function(t){n[t]=i}),t.prototype.__lifecycle_hooks__=tr}gi.prototype.__patch__=Vi,gi.prototype.$mount=function(t,e){return Hi(this,t,e)},er(gi),Qi(gi),e["default"]=gi}.call(this,n("c8ba"))},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=Ht,e.createPage=Jt,e.createComponent=Qt,e.default=void 0;var i=r(n("66fd"));function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return l(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done);i=!0)if(n.push(a.value),e&&n.length===e)break}catch(l){r=!0,o=l}finally{try{i||null==s["return"]||s["return"]()}finally{if(r)throw o}}return n}function l(t){if(Array.isArray(t))return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=Object.prototype.toString,h=Object.prototype.hasOwnProperty;function f(t){return"function"===typeof t}function d(t){return"string"===typeof t}function p(t){return"[object Object]"===c.call(t)}function g(t,e){return h.call(t,e)}function v(){}function m(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var y=/-(\w)/g,_=m(function(t){return t.replace(y,function(t,e){return e?e.toUpperCase():""})}),x=/^\$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,w=/^create|Manager$/,b=/^on/;function S(t){return w.test(t)}function M(t){return x.test(t)}function k(t){return b.test(t)}function C(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function I(t){return!(S(t)||M(t)||k(t))}function A(t,e){return I(t)?function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];return f(t.success)||f(t.fail)||f(t.complete)?e.apply(void 0,[t].concat(i)):C(new Promise(function(n,r){e.apply(void 0,[Object.assign({},t,{success:n,fail:r})].concat(i)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})}))}:e}var T=1e-4,D=750,O=!1,P=0,L=0;function E(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,i=t.windowWidth;P=i,L=n,O="ios"===e}function N(t,e){if(0===P&&E(),t=Number(t),0===t)return 0;var n=t/D*(e||P);return n<0&&(n=-n),n=Math.floor(n+T),0===n?1!==L&&O?.5:1:t<0?-n:n}var R={},B=[],z=[],$=["success","fail","cancel","complete"];function F(t,e,n){return function(i){return e(j(t,i,n))}}function V(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(p(e)){var o=!0===r?e:{};for(var a in f(n)&&(n=n(e,o)||{}),e)if(g(n,a)){var s=n[a];f(s)&&(s=s(e[a],e,o)),s?d(s)?o[s]=e[a]:p(s)&&(o[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==$.indexOf(a)?o[a]=F(t,e[a],i):r||(o[a]=e[a]);return o}return f(e)&&(e=F(t,e,i)),e}function j(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return f(R.returnValue)&&(e=R.returnValue(t,e)),V(t,e,n,{},i)}function H(t,e){if(g(R,t)){var n=R[t];return n?function(e,i){var r=n;f(n)&&(r=n(e)),e=V(t,e,r.args,r.returnValue);var o=[e];"undefined"!==typeof i&&o.push(i);var a=wx[r.name||t].apply(wx,o);return M(t)?j(t,a,r.returnValue,S(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var W=Object.create(null),G=["subscribePush","unsubscribePush","onPush","offPush","share"];function U(t){return function(e){var n=e.fail,i=e.complete,r={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};f(n)&&n(r),f(i)&&i(r)}}G.forEach(function(t){W[t]=U(t)});var q=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new i.default),t};var t}();function X(t,e,n){return t[e].apply(t,n)}function Y(){return X(q(),"$on",Array.prototype.slice.call(arguments))}function Z(){return X(q(),"$off",Array.prototype.slice.call(arguments))}function K(){return X(q(),"$once",Array.prototype.slice.call(arguments))}function J(){return X(q(),"$emit",Array.prototype.slice.call(arguments))}var Q=Object.freeze({$on:Y,$off:Z,$once:K,$emit:J});function tt(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,i=plus.webview.getWebviewById(t.__uniapp_mask_id);i=i.parent()||i;var r=t.show,o=t.hide,a=t.close,s=function(){i.setStyle({mask:n})},l=function(){i.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return r.apply(t,n)},t.hide=function(){l();for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return o.apply(t,n)},t.close=function(){l(),e=[];for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return a.apply(t,i)}}}function et(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&tt(e),e}function nt(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}var it=Object.freeze({requireNativePlugin:nt,getSubNVueById:et}),rt=Page,ot=Component,at=/:/g,st=m(function(t){return _(t.replace(at,"-"))});function lt(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];return e.apply(t,[st(n)].concat(r))}}}function ut(t,e){var n=e[t];e[t]=n?function(){lt(this);for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return n.apply(this,e)}:function(){lt(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return ut("onLoad",t),rt(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return ut("created",t),ot(t)};var ct=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function ht(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){g(n,e)&&(t[e]=n[e])})}function ft(t,e){e.forEach(function(e){t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)}})}function dt(t,e){var n;return e=e.default||e,f(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function pt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function gt(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function vt(t,e){var n=t.data||{},i=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(r){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(r){}return p(n)||(n={}),Object.keys(i).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||g(n,t)||(n[t]=i[t])}),n}var mt=[String,Number,Boolean,Object,Array,null];function yt(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function _t(t,e){var n=t["behaviors"],i=t["extends"],r=t["mixins"],o=t["props"];o||(t["props"]=o=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(o)?(o.push("name"),o.push("value")):(o["name"]=String,o["value"]=null))}),p(i)&&i.props&&a.push(e({properties:wt(i.props,!0)})),Array.isArray(r)&&r.forEach(function(t){p(t)&&t.props&&a.push(e({properties:wt(t.props,!0)}))}),a}function xt(t,e,n,i){return Array.isArray(e)&&1===e.length?e[0]:e}function wt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i={};return e||(i.vueId={type:String,value:""},i.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){i[t]={type:null,observer:yt(t)}}):p(t)&&Object.keys(t).forEach(function(e){var r=t[e];if(p(r)){var o=r["default"];f(o)&&(o=o()),r.type=xt(e,r.type,o,n),i[e]={type:-1!==mt.indexOf(r.type)?r.type:null,value:o,observer:yt(e)}}else{var a=xt(e,r,null,n);i[e]={type:-1!==mt.indexOf(a)?a:null,observer:yt(e)}}}),i}function bt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=v,t.preventDefault=v,t.target=t.target||{},g(t,"detail")||(t.detail={}),p(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function St(t,e){var n=t;return e.forEach(function(e){var i=e[0],r=e[2];if(i||"undefined"!==typeof r){var o=e[1],a=e[3],s=i?t.__get_value(i,n):n;Number.isInteger(s)?n=r:o?Array.isArray(s)?n=s.find(function(e){return t.__get_value(o,e)===r}):p(s)?n=Object.keys(s).find(function(e){return t.__get_value(o,s[e])===r}):console.error("v-for 暂不支持循环数据：",s):n=s[r],a&&(n=t.__get_value(a,n))}}),n}function Mt(t,e,n){var i={};return Array.isArray(e)&&e.length&&e.forEach(function(e,r){"string"===typeof e?e?"$event"===e?i["$"+r]=n:0===e.indexOf("$event.")?i["$"+r]=t.__get_value(e.replace("$event.",""),n):i["$"+r]=t.__get_value(e):i["$"+r]=t:i["$"+r]=St(t,e)}),i}function kt(t){for(var e={},n=1;n<t.length;n++){var i=t[n];e[i[0]]=i[1]}return e}function Ct(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,a=!1;if(r&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=Mt(t,i,e),l=[];return n.forEach(function(t){"$event"===t?"__set_model"!==o||r?r&&!a?l.push(e.detail.__args__[0]):l.push(e):l.push(e.target.value):Array.isArray(t)&&"o"===t[0]?l.push(kt(t)):"string"===typeof t&&g(s,t)?l.push(s[t]):l.push(t)}),l}var It="~",At="^";function Tt(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function Dt(t){var e=this;t=bt(t);var n=(t.currentTarget||t.target).dataset.eventOpts;if(!n)return console.warn("事件信息不存在");var i=t.type;n.forEach(function(n){var r=n[0],o=n[1],a=r.charAt(0)===At;r=a?r.slice(1):r;var s=r.charAt(0)===It;r=s?r.slice(1):r,o&&Tt(i,r)&&o.forEach(function(n){var i=n[0];if(i){var r=e.$vm;r.$options.generic&&r.$parent&&r.$parent.$parent&&(r=r.$parent.$parent);var o=r[i];if(!f(o))throw new Error(" _vm.".concat(i," is not a function"));if(s){if(o.once)return;o.once=!0}o.apply(r,Ct(e.$vm,t,n[1],n[2],a,i))}})})}var Ot=["onShow","onHide","onError","onPageNotFound"];function Pt(t,e){var n=e.mocks,r=e.initRefs;i.default.prototype.mpHost="app-plus",i.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=u({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(r(this),ht(this,n)))}});var o={onLaunch:function(e){this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e)}};return o.globalData=t.$options.globalData||{},ft(o,Ot),o}var Lt=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function Et(t,e){var n=t.$children,i=n.find(function(t){return t.$scope._$vueId===e});if(i)return i;for(var r=n.length-1;r>=0;r--)if(i=Et(n[r],e),i)return i}function Nt(t){return Behavior(t)}function Rt(){return!!this.route}function Bt(t){this.triggerEvent("__l",t)}function zt(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var i=e.selectAllComponents(".vue-ref-in-for");return i.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function $t(t){var e,n=t.detail||t.value,i=n.vuePid,r=n.vueOptions;i&&(e=Et(this.$vm,i)),e||(e=this.$vm),r.parent=e}function Ft(t){return Pt(t,{mocks:Lt,initRefs:zt})}var Vt=["onUniNViewMessage"];function jt(t){var e=Ft(t);return ft(e,Vt),e}function Ht(t){return App(jt(t)),t}function Wt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,r=e.initRelation,a=dt(i.default,t),s=o(a,2),l=s[0],u=s[1],c={options:{multipleSlots:!0,addGlobalClass:!0},data:vt(u,i.default.prototype),behaviors:_t(u,Nt),properties:wt(u.props,!1,u.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};gt(t.vueId,this),r.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new l(e),pt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:$t,__e:Dt}};return n?c:[c,l]}function Gt(t){return Wt(t,{isPage:Rt,initRelation:Bt})}function Ut(t){var e=Gt(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var qt=["onShow","onHide","onUnload"];function Xt(t,e){var n=e.isPage,i=e.initRelation,r=Ut(t,{isPage:n,initRelation:i});return ft(r.methods,qt),r.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},r}function Yt(t){return Xt(t,{isPage:Rt,initRelation:Bt})}qt.push.apply(qt,ct);var Zt=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function Kt(t){var e=Yt(t);return ft(e.methods,Zt),e}function Jt(t){return Component(Kt(t))}function Qt(t){return Component(Ut(t))}B.forEach(function(t){R[t]=!1}),z.forEach(function(t){var e=R[t]&&R[t].name?R[t].name:t;wx.canIUse(e)||(R[t]=!1)});var te={};"undefined"!==typeof Proxy?te=new Proxy({},{get:function(t,e){return"upx2px"===e?N:it[e]?A(e,it[e]):Q[e]?Q[e]:g(wx,e)||g(R,e)?A(e,H(e,wx[e])):void 0}}):(te.upx2px=N,Object.keys(Q).forEach(function(t){te[t]=Q[t]}),Object.keys(it).forEach(function(t){te[t]=A(t,it[t])}),Object.keys(wx).forEach(function(t){(g(wx,t)||g(R,t))&&(te[t]=A(t,H(t,wx[t])))})),"undefined"!==typeof t&&(t.UniEmitter=Q),wx.createApp=Ht,wx.createPage=Jt,wx.createComponent=Qt;var ee=te,ne=ee;e.default=ne}).call(this,n("c8ba"))},7476:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("a34a")),r=o(n("4f2f"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,i,r,o,a){try{var s=t[o](a),l=s.value}catch(u){return void n(u)}s.done?e(l):Promise.resolve(l).then(i,r)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(i,r){var o=t.apply(e,n);function s(t){a(o,i,r,s,l,"next",t)}function l(t){a(o,i,r,s,l,"throw",t)}s(void 0)})}}var l={login:function(){var t=s(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.post("/login/login",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),yangan:function(){var t=s(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.post("/cnsmogsensor/cnSmogSensorList",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()};e.default=l},"7a64":function(t,e,n){"use strict";(function(t){n("894e");var e=o(n("66fd")),i=o(n("54e0")),r=o(n("d049"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){s(t,e,n[e])})}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.default.config.productionTip=!1,e.default.prototype.$service=r.default,i.default.mpType="app";var l=new e.default(a({},i.default));t(l).$mount()}).call(this,n("6e42")["createApp"])},"80dc":function(t,e,n){"use strict";!function(t,n){n(e)}(0,function(t,e,n){function i(t,e){"createCanvas"===t&&(Pu=null),Du[t]=e}function r(t){if(null==t||"object"!=typeof t)return t;var e=t,n=Su.call(t);if("[object Array]"===n){if(!R(t)){e=[];for(var i=0,o=t.length;i<o;i++)e[i]=r(t[i])}}else if(bu[n]){if(!R(t)){var a=t.constructor;if(t.constructor.from)e=a.from(t);else{e=new a(t.length);for(i=0,o=t.length;i<o;i++)e[i]=r(t[i])}}}else if(!wu[n]&&!R(t)&&!C(t))for(var s in e={},t)t.hasOwnProperty(s)&&(e[s]=r(t[s]));return e}function o(t,e,n){if(!S(e)||!S(t))return n?r(e):t;for(var i in e)if(e.hasOwnProperty(i)){var a=t[i],s=e[i];!S(s)||!S(a)||x(s)||x(a)||C(s)||C(a)||M(s)||M(a)||R(s)||R(a)?!n&&i in t||(t[i]=r(e[i],!0)):o(a,s,n)}return t}function a(t,e){for(var n=t[0],i=1,r=t.length;i<r;i++)n=o(n,t[i],e);return n}function s(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function l(t,e,n){for(var i in e)e.hasOwnProperty(i)&&(n?null!=e[i]:null==t[i])&&(t[i]=e[i]);return t}function u(){return Pu||(Pu=Ou().getContext("2d")),Pu}function c(t,e){if(t){if(t.indexOf)return t.indexOf(e);for(var n=0,i=t.length;n<i;n++)if(t[n]===e)return n}return-1}function h(t,e){function n(){}var i=t.prototype;for(var r in n.prototype=e.prototype,t.prototype=new n,i)t.prototype[r]=i[r];t.prototype.constructor=t,t.superClass=e}function f(t,e,n){l(t="prototype"in t?t.prototype:t,e="prototype"in e?e.prototype:e,n)}function d(t){if(t)return"string"!=typeof t&&"number"==typeof t.length}function p(t,e,n){if(t&&e)if(t.forEach&&t.forEach===ku)t.forEach(e,n);else if(t.length===+t.length)for(var i=0,r=t.length;i<r;i++)e.call(n,t[i],i,t);else for(var o in t)t.hasOwnProperty(o)&&e.call(n,t[o],o,t)}function g(t,e,n){if(t&&e){if(t.map&&t.map===Au)return t.map(e,n);for(var i=[],r=0,o=t.length;r<o;r++)i.push(e.call(n,t[r],r,t));return i}}function v(t,e,n,i){if(t&&e){if(t.reduce&&t.reduce===Tu)return t.reduce(e,n,i);for(var r=0,o=t.length;r<o;r++)n=e.call(i,n,t[r],r,t);return n}}function m(t,e,n){if(t&&e){if(t.filter&&t.filter===Cu)return t.filter(e,n);for(var i=[],r=0,o=t.length;r<o;r++)e.call(n,t[r],r,t)&&i.push(t[r]);return i}}function y(t,e){var n=Iu.call(arguments,2);return function(){return t.apply(e,n.concat(Iu.call(arguments)))}}function _(t){var e=Iu.call(arguments,1);return function(){return t.apply(this,e.concat(Iu.call(arguments)))}}function x(t){return"[object Array]"===Su.call(t)}function w(t){return"function"==typeof t}function b(t){return"[object String]"===Su.call(t)}function S(t){var e=typeof t;return"function"===e||!!t&&"object"==e}function M(t){return!!wu[Su.call(t)]}function k(t){return!!bu[Su.call(t)]}function C(t){return"object"==typeof t&&"number"==typeof t.nodeType&&"object"==typeof t.ownerDocument}function I(t){return t!==t}function A(t){for(var e=0,n=arguments.length;e<n;e++)if(null!=arguments[e])return arguments[e]}function T(t,e){return null!=t?t:e}function D(t,e,n){return null!=t?t:null!=e?e:n}function O(){return Function.call.apply(Iu,arguments)}function P(t){if("number"==typeof t)return[t,t,t,t];var e=t.length;return 2===e?[t[0],t[1],t[0],t[1]]:3===e?[t[0],t[1],t[2],t[1]]:t}function L(t,e){if(!t)throw new Error(e)}function E(t){return null==t?null:"function"==typeof t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}function N(t){t[Lu]=!0}function R(t){return t[Lu]}function B(t){function e(t,e){n?i.set(t,e):i.set(e,t)}var n=x(t),i=this;t instanceof B?t.each(e):t&&p(t,e)}function z(t){return new B(t)}function $(){}function F(t,e){var n=new Eu(2);return null==t&&(t=0),null==e&&(e=0),n[0]=t,n[1]=e,n}function V(t){var e=new Eu(2);return e[0]=t[0],e[1]=t[1],e}function j(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t}function H(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t}function W(t){return Math.sqrt(G(t))}function G(t){return t[0]*t[0]+t[1]*t[1]}function U(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t}function q(t,e){var n=W(e);return 0===n?(t[0]=0,t[1]=0):(t[0]=e[0]/n,t[1]=e[1]/n),t}function X(t,e){return Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1]))}function Y(t,e,n){var i=e[0],r=e[1];return t[0]=n[0]*i+n[2]*r+n[4],t[1]=n[1]*i+n[3]*r+n[5],t}function Z(t,e,n){return t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t}function K(t,e,n){return t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t}function J(){this.on("mousedown",this._dragStart,this),this.on("mousemove",this._drag,this),this.on("mouseup",this._dragEnd,this),this.on("globalout",this._dragEnd,this)}function Q(t,e){return{target:t,topTarget:e&&e.topTarget}}function tt(t,e,n){return{type:t,event:n,target:e.target,topTarget:e.topTarget,cancelBubble:!1,offsetX:n.zrX,offsetY:n.zrY,gestureEvent:n.gestureEvent,pinchX:n.pinchX,pinchY:n.pinchY,pinchScale:n.pinchScale,wheelDelta:n.zrDelta,zrByTouch:n.zrByTouch,which:n.which}}function et(){}function nt(t,e,n){if(t[t.rectHover?"rectContain":"contain"](e,n)){for(var i,r=t;r;){if(r.clipPath&&!r.clipPath.contain(e,n))return!1;r.silent&&(i=!0),r=r.parent}return!i||$u}return!1}function it(){var t=new ju(6);return rt(t),t}function rt(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t}function ot(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t}function at(t,e,n){var i=e[0]*n[0]+e[2]*n[1],r=e[1]*n[0]+e[3]*n[1],o=e[0]*n[2]+e[2]*n[3],a=e[1]*n[2]+e[3]*n[3],s=e[0]*n[4]+e[2]*n[5]+e[4],l=e[1]*n[4]+e[3]*n[5]+e[5];return t[0]=i,t[1]=r,t[2]=o,t[3]=a,t[4]=s,t[5]=l,t}function st(t,e,n){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4]+n[0],t[5]=e[5]+n[1],t}function lt(t,e,n){var i=e[0],r=e[2],o=e[4],a=e[1],s=e[3],l=e[5],u=Math.sin(n),c=Math.cos(n);return t[0]=i*c+a*u,t[1]=-i*u+a*c,t[2]=r*c+s*u,t[3]=-r*u+c*s,t[4]=c*o+u*l,t[5]=c*l-u*o,t}function ut(t,e,n){var i=n[0],r=n[1];return t[0]=e[0]*i,t[1]=e[1]*r,t[2]=e[2]*i,t[3]=e[3]*r,t[4]=e[4]*i,t[5]=e[5]*r,t}function ct(t,e){var n=e[0],i=e[2],r=e[4],o=e[1],a=e[3],s=e[5],l=n*a-o*i;return l?(l=1/l,t[0]=a*l,t[1]=-o*l,t[2]=-i*l,t[3]=n*l,t[4]=(i*s-a*r)*l,t[5]=(o*r-n*s)*l,t):null}function ht(t){return t>Wu||t<-Wu}function ft(t){this._target=t.target,this._life=t.life||1e3,this._delay=t.delay||0,this._initialized=!1,this.loop=null!=t.loop&&t.loop,this.gap=t.gap||0,this.easing=t.easing||"Linear",this.onframe=t.onframe,this.ondestroy=t.ondestroy,this.onrestart=t.onrestart,this._pausedTime=0,this._paused=!1}function dt(t){return(t=Math.round(t))<0?0:t>255?255:t}function pt(t){return t<0?0:t>1?1:t}function gt(t){return dt(t.length&&"%"===t.charAt(t.length-1)?parseFloat(t)/100*255:parseInt(t,10))}function vt(t){return pt(t.length&&"%"===t.charAt(t.length-1)?parseFloat(t)/100:parseFloat(t))}function mt(t,e,n){return n<0?n+=1:n>1&&(n-=1),6*n<1?t+(e-t)*n*6:2*n<1?e:3*n<2?t+(e-t)*(2/3-n)*6:t}function yt(t,e,n,i,r){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t}function _t(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function xt(t,e){nc&&_t(nc,e),nc=ec.put(t,nc||e.slice())}function wt(t,e){if(t){e=e||[];var n=ec.get(t);if(n)return _t(e,n);var i=(t+="").replace(/ /g,"").toLowerCase();if(i in tc)return _t(e,tc[i]),xt(t,e),e;if("#"!==i.charAt(0)){var r=i.indexOf("("),o=i.indexOf(")");if(-1!==r&&o+1===i.length){var a=i.substr(0,r),s=i.substr(r+1,o-(r+1)).split(","),l=1;switch(a){case"rgba":if(4!==s.length)return void yt(e,0,0,0,1);l=vt(s.pop());case"rgb":return 3!==s.length?void yt(e,0,0,0,1):(yt(e,gt(s[0]),gt(s[1]),gt(s[2]),l),xt(t,e),e);case"hsla":return 4!==s.length?void yt(e,0,0,0,1):(s[3]=vt(s[3]),bt(s,e),xt(t,e),e);case"hsl":return 3!==s.length?void yt(e,0,0,0,1):(bt(s,e),xt(t,e),e);default:return}}yt(e,0,0,0,1)}else{if(4===i.length)return(u=parseInt(i.substr(1),16))>=0&&u<=4095?(yt(e,(3840&u)>>4|(3840&u)>>8,240&u|(240&u)>>4,15&u|(15&u)<<4,1),xt(t,e),e):void yt(e,0,0,0,1);if(7===i.length){var u=parseInt(i.substr(1),16);return u>=0&&u<=16777215?(yt(e,(16711680&u)>>16,(65280&u)>>8,255&u,1),xt(t,e),e):void yt(e,0,0,0,1)}}}}function bt(t,e){var n=(parseFloat(t[0])%360+360)%360/360,i=vt(t[1]),r=vt(t[2]),o=r<=.5?r*(i+1):r+i-r*i,a=2*r-o;return e=e||[],yt(e,dt(255*mt(a,o,n+1/3)),dt(255*mt(a,o,n)),dt(255*mt(a,o,n-1/3)),1),4===t.length&&(e[3]=t[3]),e}function St(t,e){var n=wt(t);if(n){for(var i=0;i<3;i++)n[i]=e<0?n[i]*(1-e)|0:(255-n[i])*e+n[i]|0,n[i]>255?n[i]=255:t[i]<0&&(n[i]=0);return Mt(n,4===n.length?"rgba":"rgb")}}function Mt(t,e){if(t&&t.length){var n=t[0]+","+t[1]+","+t[2];return"rgba"!==e&&"hsva"!==e&&"hsla"!==e||(n+=","+t[3]),e+"("+n+")"}}function kt(t,e){return t[e]}function Ct(t,e,n){t[e]=n}function It(t,e,n){return(e-t)*n+t}function At(t,e,n){return n>.5?e:t}function Tt(t,e,n,i,r){var o=t.length;if(1==r)for(s=0;s<o;s++)i[s]=It(t[s],e[s],n);else for(var a=o&&t[0].length,s=0;s<o;s++)for(var l=0;l<a;l++)i[s][l]=It(t[s][l],e[s][l],n)}function Dt(t,e,n){var i=t.length,r=e.length;if(i!==r)if(i>r)t.length=r;else for(a=i;a<r;a++)t.push(1===n?e[a]:ic.call(e[a]));for(var o=t[0]&&t[0].length,a=0;a<t.length;a++)if(1===n)isNaN(t[a])&&(t[a]=e[a]);else for(var s=0;s<o;s++)isNaN(t[a][s])&&(t[a][s]=e[a][s])}function Ot(t,e,n){if(t===e)return!0;var i=t.length;if(i!==e.length)return!1;if(1===n){for(o=0;o<i;o++)if(t[o]!==e[o])return!1}else for(var r=t[0].length,o=0;o<i;o++)for(var a=0;a<r;a++)if(t[o][a]!==e[o][a])return!1;return!0}function Pt(t,e,n,i,r,o,a,s,l){var u=t.length;if(1==l)for(h=0;h<u;h++)s[h]=Lt(t[h],e[h],n[h],i[h],r,o,a);else for(var c=t[0].length,h=0;h<u;h++)for(var f=0;f<c;f++)s[h][f]=Lt(t[h][f],e[h][f],n[h][f],i[h][f],r,o,a)}function Lt(t,e,n,i,r,o,a){var s=.5*(n-t),l=.5*(i-e);return(2*(e-n)+s+l)*a+(-3*(e-n)-2*s-l)*o+s*r+e}function Et(t){if(d(t)){var e=t.length;if(d(t[0])){for(var n=[],i=0;i<e;i++)n.push(ic.call(t[i]));return n}return ic.call(t)}return t}function Nt(t){return t[0]=Math.floor(t[0]),t[1]=Math.floor(t[1]),t[2]=Math.floor(t[2]),"rgba("+t.join(",")+")"}function Rt(t){var e=t[t.length-1].value;return d(e&&e[0])?2:1}function Bt(t,e,n,i,r,o){var a=t._getter,s=t._setter,l="spline"===e,u=i.length;if(u){var c,h=d(i[0].value),f=!1,p=!1,g=h?Rt(i):0;i.sort(function(t,e){return t.time-e.time}),c=i[u-1].time;for(var v=[],m=[],y=i[0].value,_=!0,x=0;x<u;x++){v.push(i[x].time/c);var w=i[x].value;if(h&&Ot(w,y,g)||!h&&w===y||(_=!1),y=w,"string"==typeof w){var b=wt(w);b?(w=b,f=!0):p=!0}m.push(w)}if(o||!_){var S=m[u-1];for(x=0;x<u-1;x++)h?Dt(m[x],S,g):!isNaN(m[x])||isNaN(S)||p||f||(m[x]=S);h&&Dt(a(t._target,r),S,g);var M,k,C,I,A,T=0,D=0;if(f)var O=[0,0,0,0];var P=new ft({target:t._target,life:c,loop:t._loop,delay:t._delay,onframe:function(t,e){var n;if(e<0)n=0;else if(e<D){for(n=Math.min(T+1,u-1);n>=0&&!(v[n]<=e);n--);n=Math.min(n,u-2)}else{for(n=T;n<u&&!(v[n]>e);n++);n=Math.min(n-1,u-2)}T=n,D=e;var i=v[n+1]-v[n];if(0!==i)if(M=(e-v[n])/i,l)if(C=m[n],k=m[0===n?n:n-1],I=m[n>u-2?u-1:n+1],A=m[n>u-3?u-1:n+2],h)Pt(k,C,I,A,M,M*M,M*M*M,a(t,r),g);else{if(f)o=Pt(k,C,I,A,M,M*M,M*M*M,O,1),o=Nt(O);else{if(p)return At(C,I,M);o=Lt(k,C,I,A,M,M*M,M*M*M)}s(t,r,o)}else if(h)Tt(m[n],m[n+1],M,a(t,r),g);else{var o;if(f)Tt(m[n],m[n+1],M,O,1),o=Nt(O);else{if(p)return At(m[n],m[n+1],M);o=It(m[n],m[n+1],M)}s(t,r,o)}},ondestroy:n});return e&&"spline"!==e&&(P.easing=e),P}}}function zt(t,e,n,i){n<0&&(t+=n,n=-n),i<0&&(e+=i,i=-i),this.x=t,this.y=e,this.width=n,this.height=i}function $t(t){for(var e=0;t>=gc;)e|=1&t,t>>=1;return t+e}function Ft(t,e,n,i){var r=e+1;if(r===n)return 1;if(i(t[r++],t[e])<0){for(;r<n&&i(t[r],t[r-1])<0;)r++;Vt(t,e,r)}else for(;r<n&&i(t[r],t[r-1])>=0;)r++;return r-e}function Vt(t,e,n){for(n--;e<n;){var i=t[e];t[e++]=t[n],t[n--]=i}}function jt(t,e,n,i,r){for(i===e&&i++;i<n;i++){for(var o,a=t[i],s=e,l=i;s<l;)r(a,t[o=s+l>>>1])<0?l=o:s=o+1;var u=i-s;switch(u){case 3:t[s+3]=t[s+2];case 2:t[s+2]=t[s+1];case 1:t[s+1]=t[s];break;default:for(;u>0;)t[s+u]=t[s+u-1],u--}t[s]=a}}function Ht(t,e,n,i,r,o){var a=0,s=0,l=1;if(o(t,e[n+r])>0){for(s=i-r;l<s&&o(t,e[n+r+l])>0;)a=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s),a+=r,l+=r}else{for(s=r+1;l<s&&o(t,e[n+r-l])<=0;)a=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s);var u=a;a=r-l,l=r-u}for(a++;a<l;){var c=a+(l-a>>>1);o(t,e[n+c])>0?a=c+1:l=c}return l}function Wt(t,e,n,i,r,o){var a=0,s=0,l=1;if(o(t,e[n+r])<0){for(s=r+1;l<s&&o(t,e[n+r-l])<0;)a=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s);var u=a;a=r-l,l=r-u}else{for(s=i-r;l<s&&o(t,e[n+r+l])>=0;)a=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s),a+=r,l+=r}for(a++;a<l;){var c=a+(l-a>>>1);o(t,e[n+c])<0?l=c:a=c+1}return l}function Gt(t,e){function n(n){var s=o[n],u=a[n],c=o[n+1],h=a[n+1];a[n]=u+h,n===l-3&&(o[n+1]=o[n+2],a[n+1]=a[n+2]),l--;var f=Wt(t[c],t,s,u,0,e);s+=f,0!==(u-=f)&&0!==(h=Ht(t[s+u-1],t,c,h,h-1,e))&&(u<=h?i(s,u,c,h):r(s,u,c,h))}function i(n,i,r,o){var a=0;for(a=0;a<i;a++)u[a]=t[n+a];var l=0,c=r,h=n;if(t[h++]=t[c++],0!=--o)if(1!==i){for(var f,d,p,g=s;;){f=0,d=0,p=!1;do{if(e(t[c],u[l])<0){if(t[h++]=t[c++],d++,f=0,0==--o){p=!0;break}}else if(t[h++]=u[l++],f++,d=0,1==--i){p=!0;break}}while((f|d)<g);if(p)break;do{if(0!==(f=Wt(t[c],u,l,i,0,e))){for(a=0;a<f;a++)t[h+a]=u[l+a];if(h+=f,l+=f,(i-=f)<=1){p=!0;break}}if(t[h++]=t[c++],0==--o){p=!0;break}if(0!==(d=Ht(u[l],t,c,o,0,e))){for(a=0;a<d;a++)t[h+a]=t[c+a];if(h+=d,c+=d,0===(o-=d)){p=!0;break}}if(t[h++]=u[l++],1==--i){p=!0;break}g--}while(f>=vc||d>=vc);if(p)break;g<0&&(g=0),g+=2}if((s=g)<1&&(s=1),1===i){for(a=0;a<o;a++)t[h+a]=t[c+a];t[h+o]=u[l]}else{if(0===i)throw new Error;for(a=0;a<i;a++)t[h+a]=u[l+a]}}else{for(a=0;a<o;a++)t[h+a]=t[c+a];t[h+o]=u[l]}else for(a=0;a<i;a++)t[h+a]=u[l+a]}function r(n,i,r,o){var a=0;for(a=0;a<o;a++)u[a]=t[r+a];var l=n+i-1,c=o-1,h=r+o-1,f=0,d=0;if(t[h--]=t[l--],0!=--i)if(1!==o){for(var p=s;;){var g=0,v=0,m=!1;do{if(e(u[c],t[l])<0){if(t[h--]=t[l--],g++,v=0,0==--i){m=!0;break}}else if(t[h--]=u[c--],v++,g=0,1==--o){m=!0;break}}while((g|v)<p);if(m)break;do{if(0!=(g=i-Wt(u[c],t,n,i,i-1,e))){for(i-=g,d=1+(h-=g),f=1+(l-=g),a=g-1;a>=0;a--)t[d+a]=t[f+a];if(0===i){m=!0;break}}if(t[h--]=u[c--],1==--o){m=!0;break}if(0!=(v=o-Ht(t[l],u,0,o,o-1,e))){for(o-=v,d=1+(h-=v),f=1+(c-=v),a=0;a<v;a++)t[d+a]=u[f+a];if(o<=1){m=!0;break}}if(t[h--]=t[l--],0==--i){m=!0;break}p--}while(g>=vc||v>=vc);if(m)break;p<0&&(p=0),p+=2}if((s=p)<1&&(s=1),1===o){for(d=1+(h-=i),f=1+(l-=i),a=i-1;a>=0;a--)t[d+a]=t[f+a];t[h]=u[c]}else{if(0===o)throw new Error;for(f=h-(o-1),a=0;a<o;a++)t[f+a]=u[a]}}else{for(d=1+(h-=i),f=1+(l-=i),a=i-1;a>=0;a--)t[d+a]=t[f+a];t[h]=u[c]}else for(f=h-(o-1),a=0;a<o;a++)t[f+a]=u[a]}var o,a,s=vc,l=0,u=[];o=[],a=[],this.mergeRuns=function(){for(;l>1;){var t=l-2;if(t>=1&&a[t-1]<=a[t]+a[t+1]||t>=2&&a[t-2]<=a[t]+a[t-1])a[t-1]<a[t+1]&&t--;else if(a[t]>a[t+1])break;n(t)}},this.forceMergeRuns=function(){for(;l>1;){var t=l-2;t>0&&a[t-1]<a[t+1]&&t--,n(t)}},this.pushRun=function(t,e){o[l]=t,a[l]=e,l+=1}}function Ut(t,e,n,i){n||(n=0),i||(i=t.length);var r=i-n;if(!(r<2)){var o=0;if(r<gc)return o=Ft(t,n,i,e),void jt(t,n,i,n+o,e);var a=new Gt(t,e),s=$t(r);do{if((o=Ft(t,n,i,e))<s){var l=r;l>s&&(l=s),jt(t,n,n+l,n+o,e),o=l}a.pushRun(n,o),a.mergeRuns(),r-=o,n+=o}while(0!==r);a.forceMergeRuns()}}function qt(t,e){return t.zlevel===e.zlevel?t.z===e.z?t.z2-e.z2:t.z-e.z:t.zlevel-e.zlevel}function Xt(t,e,n){var i=null==e.x?0:e.x,r=null==e.x2?1:e.x2,o=null==e.y?0:e.y,a=null==e.y2?0:e.y2;return e.global||(i=i*n.width+n.x,r=r*n.width+n.x,o=o*n.height+n.y,a=a*n.height+n.y),i=isNaN(i)?0:i,r=isNaN(r)?1:r,o=isNaN(o)?0:o,a=isNaN(a)?0:a,t.createLinearGradient(i,o,r,a)}function Yt(t,e,n){var i=n.width,r=n.height,o=Math.min(i,r),a=null==e.x?.5:e.x,s=null==e.y?.5:e.y,l=null==e.r?.5:e.r;return e.global||(a=a*i+n.x,s=s*r+n.y,l*=o),t.createRadialGradient(a,s,0,a,s,l)}function Zt(){return!1}function Kt(t,e,n){var i=Ou(),r=e.getWidth(),o=e.getHeight(),a=i.style;return a&&(a.position="absolute",a.left=0,a.top=0,a.width=r+"px",a.height=o+"px",i.setAttribute("data-zr-dom-id",t)),i.width=r*n,i.height=o*n,i}function Jt(t){if("string"==typeof t){var e=Ac.get(t);return e&&e.image}return t}function Qt(t,e,n,i,r){if(t){if("string"==typeof t){if(e&&e.__zrImageSrc===t||!n)return e;var o=Ac.get(t),a={hostEl:n,cb:i,cbPayload:r};return o?!ee(e=o.image)&&o.pending.push(a):(!e&&(e=new Image),e.onload=te,Ac.put(t,e.__cachedImgObj={image:e,pending:[a]}),e.src=e.__zrImageSrc=t),e}return t}return e}function te(){var t=this.__cachedImgObj;this.onload=this.__cachedImgObj=null;for(var e=0;e<t.pending.length;e++){var n=t.pending[e],i=n.cb;i&&i(this,n.cbPayload),n.hostEl.dirty()}t.pending.length=0}function ee(t){return t&&t.width&&t.height}function ne(t,e){var n=t+":"+(e=e||Lc);if(Tc[n])return Tc[n];for(var i=(t+"").split("\n"),r=0,o=0,a=i.length;o<a;o++)r=Math.max(pe(i[o],e).width,r);return Dc>Oc&&(Dc=0,Tc={}),Dc++,Tc[n]=r,r}function ie(t,e,n,i,r,o,a){return o?oe(t,e,n,i,r,o,a):re(t,e,n,i,r,a)}function re(t,e,n,i,r,o){var a=ge(t,e,r,o),s=ne(t,e);r&&(s+=r[1]+r[3]);var l=a.outerHeight,u=new zt(ae(0,s,n),se(0,l,i),s,l);return u.lineHeight=a.lineHeight,u}function oe(t,e,n,i,r,o,a){var s=ve(t,{rich:o,truncate:a,font:e,textAlign:n,textPadding:r}),l=s.outerWidth,u=s.outerHeight;return new zt(ae(0,l,n),se(0,u,i),l,u)}function ae(t,e,n){return"right"===n?t-=e:"center"===n&&(t-=e/2),t}function se(t,e,n){return"middle"===n?t-=e/2:"bottom"===n&&(t-=e),t}function le(t,e,n){var i=e.x,r=e.y,o=e.height,a=e.width,s=o/2,l="left",u="top";switch(t){case"left":i-=n,r+=s,l="right",u="middle";break;case"right":i+=n+a,r+=s,u="middle";break;case"top":i+=a/2,r-=n,l="center",u="bottom";break;case"bottom":i+=a/2,r+=o+n,l="center";break;case"inside":i+=a/2,r+=s,l="center",u="middle";break;case"insideLeft":i+=n,r+=s,u="middle";break;case"insideRight":i+=a-n,r+=s,l="right",u="middle";break;case"insideTop":i+=a/2,r+=n,l="center";break;case"insideBottom":i+=a/2,r+=o-n,l="center",u="bottom";break;case"insideTopLeft":i+=n,r+=n;break;case"insideTopRight":i+=a-n,r+=n,l="right";break;case"insideBottomLeft":i+=n,r+=o-n,u="bottom";break;case"insideBottomRight":i+=a-n,r+=o-n,l="right",u="bottom"}return{x:i,y:r,textAlign:l,textVerticalAlign:u}}function ue(t,e,n,i,r){if(!e)return"";var o=(t+"").split("\n");r=ce(e,n,i,r);for(var a=0,s=o.length;a<s;a++)o[a]=he(o[a],r);return o.join("\n")}function ce(t,e,n,i){(i=s({},i)).font=e;n=T(n,"...");i.maxIterations=T(i.maxIterations,2);var r=i.minChar=T(i.minChar,0);i.cnCharWidth=ne("国",e);var o=i.ascCharWidth=ne("a",e);i.placeholder=T(i.placeholder,"");for(var a=t=Math.max(0,t-1),l=0;l<r&&a>=o;l++)a-=o;var u=ne(n);return u>a&&(n="",u=0),a=t-u,i.ellipsis=n,i.ellipsisWidth=u,i.contentWidth=a,i.containerWidth=t,i}function he(t,e){var n=e.containerWidth,i=e.font,r=e.contentWidth;if(!n)return"";var o=ne(t,i);if(o<=n)return t;for(var a=0;;a++){if(o<=r||a>=e.maxIterations){t+=e.ellipsis;break}var s=0===a?fe(t,r,e.ascCharWidth,e.cnCharWidth):o>0?Math.floor(t.length*r/o):0;o=ne(t=t.substr(0,s),i)}return""===t&&(t=e.placeholder),t}function fe(t,e,n,i){for(var r=0,o=0,a=t.length;o<a&&r<e;o++){var s=t.charCodeAt(o);r+=0<=s&&s<=127?n:i}return o}function de(t){return ne("国",t)}function pe(t,e){return Ec.measureText(t,e)}function ge(t,e,n,i){null!=t&&(t+="");var r=de(e),o=t?t.split("\n"):[],a=o.length*r,s=a;if(n&&(s+=n[0]+n[2]),t&&i){var l=i.outerHeight,u=i.outerWidth;if(null!=l&&s>l)t="",o=[];else if(null!=u)for(var c=ce(u-(n?n[1]+n[3]:0),e,i.ellipsis,{minChar:i.minChar,placeholder:i.placeholder}),h=0,f=o.length;h<f;h++)o[h]=he(o[h],c)}return{lines:o,height:a,outerHeight:s,lineHeight:r}}function ve(t,e){var n={lines:[],width:0,height:0};if(null!=t&&(t+=""),!t)return n;for(var i,r=Pc.lastIndex=0;null!=(i=Pc.exec(t));){var o=i.index;o>r&&me(n,t.substring(r,o)),me(n,i[2],i[1]),r=Pc.lastIndex}r<t.length&&me(n,t.substring(r,t.length));var a=n.lines,s=0,l=0,u=[],c=e.textPadding,h=e.truncate,f=h&&h.outerWidth,d=h&&h.outerHeight;for(c&&(null!=f&&(f-=c[1]+c[3]),null!=d&&(d-=c[0]+c[2])),A=0;A<a.length;A++){for(var p=a[A],g=0,v=0,m=0;m<p.tokens.length;m++){var y=(O=p.tokens[m]).styleName&&e.rich[O.styleName]||{},_=O.textPadding=y.textPadding,x=O.font=y.font||e.font,w=O.textHeight=T(y.textHeight,de(x));if(_&&(w+=_[0]+_[2]),O.height=w,O.lineHeight=D(y.textLineHeight,e.textLineHeight,w),O.textAlign=y&&y.textAlign||e.textAlign,O.textVerticalAlign=y&&y.textVerticalAlign||"middle",null!=d&&s+O.lineHeight>d)return{lines:[],width:0,height:0};O.textWidth=ne(O.text,x);var b=y.textWidth,S=null==b||"auto"===b;if("string"==typeof b&&"%"===b.charAt(b.length-1))O.percentWidth=b,u.push(O),b=0;else{if(S){b=O.textWidth;var M=y.textBackgroundColor,k=M&&M.image;k&&ee(k=Jt(k))&&(b=Math.max(b,k.width*w/k.height))}var C=_?_[1]+_[3]:0;b+=C;var I=null!=f?f-v:null;null!=I&&I<b&&(!S||I<C?(O.text="",O.textWidth=b=0):(O.text=ue(O.text,I-C,x,h.ellipsis,{minChar:h.minChar}),O.textWidth=ne(O.text,x),b=O.textWidth+C))}v+=O.width=b,y&&(g=Math.max(g,O.lineHeight))}p.width=v,p.lineHeight=g,s+=g,l=Math.max(l,v)}n.outerWidth=n.width=T(e.textWidth,l),n.outerHeight=n.height=T(e.textHeight,s),c&&(n.outerWidth+=c[1]+c[3],n.outerHeight+=c[0]+c[2]);for(var A=0;A<u.length;A++){var O=u[A],P=O.percentWidth;O.width=parseInt(P,10)/100*l}return n}function me(t,e,n){for(var i=""===e,r=e.split("\n"),o=t.lines,a=0;a<r.length;a++){var s=r[a],l={styleName:n,text:s,isLineHolder:!s&&!i};if(a)o.push({tokens:[l]});else{var u=(o[o.length-1]||(o[0]={tokens:[]})).tokens,c=u.length;1===c&&u[0].isLineHolder?u[0]=l:(s||!c||i)&&u.push(l)}}}function ye(t){var e=(t.fontSize||t.fontFamily)&&[t.fontStyle,t.fontWeight,(t.fontSize||12)+"px",t.fontFamily||"sans-serif"].join(" ");return e&&E(e)||t.textFont||t.font}function _e(t,e){var n,i,r,o,a,s=e.x,l=e.y,u=e.width,c=e.height,h=e.r;u<0&&(s+=u,u=-u),c<0&&(l+=c,c=-c),"number"==typeof h?n=i=r=o=h:h instanceof Array?1===h.length?n=i=r=o=h[0]:2===h.length?(n=r=h[0],i=o=h[1]):3===h.length?(n=h[0],i=o=h[1],r=h[2]):(n=h[0],i=h[1],r=h[2],o=h[3]):n=i=r=o=0,n+i>u&&(n*=u/(a=n+i),i*=u/a),r+o>u&&(r*=u/(a=r+o),o*=u/a),i+r>c&&(i*=c/(a=i+r),r*=c/a),n+o>c&&(n*=c/(a=n+o),o*=c/a),t.moveTo(s+n,l),t.lineTo(s+u-i,l),0!==i&&t.arc(s+u-i,l+i,i,-Math.PI/2,0),t.lineTo(s+u,l+c-r),0!==r&&t.arc(s+u-r,l+c-r,r,0,Math.PI/2),t.lineTo(s+o,l+c),0!==o&&t.arc(s+o,l+c-o,o,Math.PI/2,Math.PI),t.lineTo(s,l+n),0!==n&&t.arc(s+n,l+n,n,Math.PI,1.5*Math.PI)}function xe(t){return we(t),p(t.rich,we),t}function we(t){if(t){t.font=ye(t);var e=t.textAlign;"middle"===e&&(e="center"),t.textAlign=null==e||Nc[e]?e:"left";var n=t.textVerticalAlign||t.textBaseline;"center"===n&&(n="middle"),t.textVerticalAlign=null==n||Rc[n]?n:"top",t.textPadding&&(t.textPadding=P(t.textPadding))}}function be(t,e,n,i,r){i.rich?Me(t,e,n,i,r):Se(t,e,n,i,r)}function Se(t,e,n,i,r){var o=Pe(e,"font",i.font||Lc),a=i.textPadding,s=t.__textCotentBlock;s&&!t.__dirty||(s=t.__textCotentBlock=ge(n,o,a,i.truncate));var l=s.outerHeight,u=s.lines,c=s.lineHeight,h=Oe(l,i,r),f=h.baseX,d=h.baseY,p=h.textAlign,g=h.textVerticalAlign;Ce(e,i,r,f,d);var v=se(d,l,g),m=f,y=v,_=Ae(i);if(_||a){var x=ne(n,o);a&&(x+=a[1]+a[3]);var w=ae(f,x,p);_&&Te(t,e,i,w,v,x,l),a&&(m=Re(f,p,a),y+=a[0])}Pe(e,"textAlign",p||"left"),Pe(e,"textBaseline","middle"),Pe(e,"shadowBlur",i.textShadowBlur||0),Pe(e,"shadowColor",i.textShadowColor||"transparent"),Pe(e,"shadowOffsetX",i.textShadowOffsetX||0),Pe(e,"shadowOffsetY",i.textShadowOffsetY||0),y+=c/2;var b=i.textStrokeWidth,S=Le(i.textStroke,b),M=Ee(i.textFill);S&&(Pe(e,"lineWidth",b),Pe(e,"strokeStyle",S)),M&&Pe(e,"fillStyle",M);for(var k=0;k<u.length;k++)S&&e.strokeText(u[k],m,y),M&&e.fillText(u[k],m,y),y+=c}function Me(t,e,n,i,r){var o=t.__textCotentBlock;o&&!t.__dirty||(o=t.__textCotentBlock=ve(n,i)),ke(t,e,o,i,r)}function ke(t,e,n,i,r){var o=n.width,a=n.outerWidth,s=n.outerHeight,l=i.textPadding,u=Oe(s,i,r),c=u.baseX,h=u.baseY,f=u.textAlign,d=u.textVerticalAlign;Ce(e,i,r,c,h);var p=ae(c,a,f),g=se(h,s,d),v=p,m=g;l&&(v+=l[3],m+=l[0]);var y=v+o;Ae(i)&&Te(t,e,i,p,g,a,s);for(var _=0;_<n.lines.length;_++){for(var x,w=n.lines[_],b=w.tokens,S=b.length,M=w.lineHeight,k=w.width,C=0,I=v,A=y,T=S-1;C<S&&(!(x=b[C]).textAlign||"left"===x.textAlign);)Ie(t,e,x,i,M,m,I,"left"),k-=x.width,I+=x.width,C++;for(;T>=0&&"right"===(x=b[T]).textAlign;)Ie(t,e,x,i,M,m,A,"right"),k-=x.width,A-=x.width,T--;for(I+=(o-(I-v)-(y-A)-k)/2;C<=T;)Ie(t,e,x=b[C],i,M,m,I+x.width/2,"center"),I+=x.width,C++;m+=M}}function Ce(t,e,n,i,r){if(n&&e.textRotation){var o=e.textOrigin;"center"===o?(i=n.width/2+n.x,r=n.height/2+n.y):o&&(i=o[0]+n.x,r=o[1]+n.y),t.translate(i,r),t.rotate(-e.textRotation),t.translate(-i,-r)}}function Ie(t,e,n,i,r,o,a,s){var l=i.rich[n.styleName]||{},u=n.textVerticalAlign,c=o+r/2;"top"===u?c=o+n.height/2:"bottom"===u&&(c=o+r-n.height/2),!n.isLineHolder&&Ae(l)&&Te(t,e,l,"right"===s?a-n.width:"center"===s?a-n.width/2:a,c-n.height/2,n.width,n.height);var h=n.textPadding;h&&(a=Re(a,s,h),c-=n.height/2-h[2]-n.textHeight/2),Pe(e,"shadowBlur",D(l.textShadowBlur,i.textShadowBlur,0)),Pe(e,"shadowColor",l.textShadowColor||i.textShadowColor||"transparent"),Pe(e,"shadowOffsetX",D(l.textShadowOffsetX,i.textShadowOffsetX,0)),Pe(e,"shadowOffsetY",D(l.textShadowOffsetY,i.textShadowOffsetY,0)),Pe(e,"textAlign",s),Pe(e,"textBaseline","middle"),Pe(e,"font",n.font||Lc);var f=Le(l.textStroke||i.textStroke,p),d=Ee(l.textFill||i.textFill),p=T(l.textStrokeWidth,i.textStrokeWidth);f&&(Pe(e,"lineWidth",p),Pe(e,"strokeStyle",f),e.strokeText(n.text,a,c)),d&&(Pe(e,"fillStyle",d),e.fillText(n.text,a,c))}function Ae(t){return t.textBackgroundColor||t.textBorderWidth&&t.textBorderColor}function Te(t,e,n,i,r,o,a){var s=n.textBackgroundColor,l=n.textBorderWidth,u=n.textBorderColor,c=b(s);if(Pe(e,"shadowBlur",n.textBoxShadowBlur||0),Pe(e,"shadowColor",n.textBoxShadowColor||"transparent"),Pe(e,"shadowOffsetX",n.textBoxShadowOffsetX||0),Pe(e,"shadowOffsetY",n.textBoxShadowOffsetY||0),c||l&&u){e.beginPath();var h=n.textBorderRadius;h?_e(e,{x:i,y:r,width:o,height:a,r:h}):e.rect(i,r,o,a),e.closePath()}if(c)Pe(e,"fillStyle",s),e.fill();else if(S(s)){var f=s.image;(f=Qt(f,null,t,De,s))&&ee(f)&&e.drawImage(f,i,r,o,a)}l&&u&&(Pe(e,"lineWidth",l),Pe(e,"strokeStyle",u),e.stroke())}function De(t,e){e.image=t}function Oe(t,e,n){var i=e.x||0,r=e.y||0,o=e.textAlign,a=e.textVerticalAlign;if(n){var s=e.textPosition;if(s instanceof Array)i=n.x+Ne(s[0],n.width),r=n.y+Ne(s[1],n.height);else{var l=le(s,n,e.textDistance);i=l.x,r=l.y,o=o||l.textAlign,a=a||l.textVerticalAlign}var u=e.textOffset;u&&(i+=u[0],r+=u[1])}return{baseX:i,baseY:r,textAlign:o,textVerticalAlign:a}}function Pe(t,e,n){return t[e]=_c(t,e,n),t[e]}function Le(t,e){return null==t||e<=0||"transparent"===t||"none"===t?null:t.image||t.colorStops?"#000":t}function Ee(t){return null==t||"none"===t?null:t.image||t.colorStops?"#000":t}function Ne(t,e){return"string"==typeof t?t.lastIndexOf("%")>=0?parseFloat(t)/100*e:parseFloat(t):t}function Re(t,e,n){return"right"===e?t-n[1]:"center"===e?t+n[3]/2-n[1]/2:t+n[3]}function Be(t,e){return null!=t&&(t||e.textBackgroundColor||e.textBorderWidth&&e.textBorderColor||e.textPadding)}function ze(t){for(var e in t=t||{},cc.call(this,t),t)t.hasOwnProperty(e)&&"style"!==e&&(this[e]=t[e]);this.style=new wc(t.style,this),this._rect=null,this.__clipPaths=[]}function $e(t){ze.call(this,t)}function Fe(t){return parseInt(t,10)}function Ve(t){return!!t&&(!!t.__builtin__||"function"==typeof t.resize&&"function"==typeof t.refresh)}function je(t,e,n){return $c.copy(t.getBoundingRect()),t.transform&&$c.applyTransform(t.transform),Fc.width=e,Fc.height=n,!$c.intersect(Fc)}function He(t,e){if(t==e)return!1;if(!t||!e||t.length!==e.length)return!0;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!0}function We(t,e){for(var n=0;n<t.length;n++){var i=t[n];i.setTransform(e),e.beginPath(),i.buildPath(e,i.shape),e.clip(),i.restoreTransform(e)}}function Ge(t,e){var i=n.createElement("div");return i.style.cssText=["position:relative","overflow:hidden","width:"+t+"px","height:"+e+"px","padding:0","margin:0","border-width:0"].join(";")+";",i}function Ue(t){return t.getBoundingClientRect?t.getBoundingClientRect():{left:0,top:0}}function qe(t,e,n,i){return n=n||{},i||!xu.canvasSupported?Xe(t,e,n):xu.browser.firefox&&null!=e.layerX&&e.layerX!==e.offsetX?(n.zrX=e.layerX,n.zrY=e.layerY):null!=e.offsetX?(n.zrX=e.offsetX,n.zrY=e.offsetY):Xe(t,e,n),n}function Xe(t,e,n){var i=Ue(t);n.zrX=e.clientX-i.left,n.zrY=e.clientY-i.top}function Ye(t,n,i){if(null!=(n=n||e.event).zrX)return n;var r=n.type;if(r&&r.indexOf("touch")>=0){var o="touchend"!=r?n.targetTouches[0]:n.changedTouches[0];o&&qe(t,o,n,i)}else qe(t,n,n,i),n.zrDelta=n.wheelDelta?n.wheelDelta/120:-(n.detail||0)/3;var a=n.button;return null==n.which&&void 0!==a&&Hc.test(n.type)&&(n.which=1&a?1:2&a?3:4&a?2:0),n}function Ze(t,e,n){jc?t.addEventListener(e,n):t.attachEvent("on"+e,n)}function Ke(t,e,n){jc?t.removeEventListener(e,n):t.detachEvent("on"+e,n)}function Je(t){var e=t[1][0]-t[0][0],n=t[1][1]-t[0][1];return Math.sqrt(e*e+n*n)}function Qe(t){return[(t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2]}function tn(t){return"mousewheel"===t&&xu.browser.firefox?"DOMMouseScroll":t}function en(t,e,n){var i=t._gestureMgr;"start"===n&&i.clear();var r=i.recognize(e,t.handler.findHover(e.zrX,e.zrY,null).target,t.dom);if("end"===n&&i.clear(),r){var o=r.type;e.gestureEvent=o,t.handler.dispatchToElement({target:r.target},o,r.event)}}function nn(t){t._touching=!0,clearTimeout(t._touchTimer),t._touchTimer=setTimeout(function(){t._touching=!1},700)}function rn(t){var e=t.pointerType;return"pen"===e||"touch"===e}function on(t){function e(t,e){return function(){if(!e._touching)return t.apply(e,arguments)}}p(Xc,function(e){t._handlers[e]=y(Kc[e],t)}),p(Zc,function(e){t._handlers[e]=y(Kc[e],t)}),p(qc,function(n){t._handlers[n]=e(Kc[n],t)})}function an(t){function e(e,n){p(e,function(e){Ze(t,tn(e),n._handlers[e])},n)}zu.call(this),this.dom=t,this._touching=!1,this._touchTimer,this._gestureMgr=new Gc,this._handlers={},on(this),xu.pointerEventsSupported?e(Zc,this):(xu.touchEventsSupported&&e(Xc,this),e(qc,this))}function sn(t,e){return new eh(_u(),t,e)}function ln(t){return t instanceof Array?t:null==t?[]:[t]}function un(t,e,n){if(t){t[e]=t[e]||{},t.emphasis=t.emphasis||{},t.emphasis[e]=t.emphasis[e]||{};for(var i=0,r=n.length;i<r;i++){var o=n[i];!t.emphasis[e].hasOwnProperty(o)&&t[e].hasOwnProperty(o)&&(t.emphasis[e][o]=t[e][o])}}}function cn(t){return!ih(t)||rh(t)||t instanceof Date?t:t.value}function hn(t){return ih(t)&&!(t instanceof Array)}function fn(t,e){e=(e||[]).slice();var n=g(t||[],function(t,e){return{exist:t}});return nh(e,function(t,i){if(ih(t)){for(r=0;r<n.length;r++)if(!n[r].option&&null!=t.id&&n[r].exist.id===t.id+"")return n[r].option=t,void(e[i]=null);for(var r=0;r<n.length;r++){var o=n[r].exist;if(!(n[r].option||null!=o.id&&null!=t.id||null==t.name||gn(t)||gn(o)||o.name!==t.name+""))return n[r].option=t,void(e[i]=null)}}}),nh(e,function(t,e){if(ih(t)){for(var i=0;i<n.length;i++){var r=n[i].exist;if(!n[i].option&&!gn(r)&&null==t.id){n[i].option=t;break}}i>=n.length&&n.push({option:t})}}),n}function dn(t){var e=z();nh(t,function(t,n){var i=t.exist;i&&e.set(i.id,t)}),nh(t,function(t,n){var i=t.option;L(!i||null==i.id||!e.get(i.id)||e.get(i.id)===t,"id duplicates: "+(i&&i.id)),i&&null!=i.id&&e.set(i.id,t),!t.keyInfo&&(t.keyInfo={})}),nh(t,function(t,n){var i=t.exist,r=t.option,o=t.keyInfo;if(ih(r)){if(o.name=null!=r.name?r.name+"":i?i.name:oh+n,i)o.id=i.id;else if(null!=r.id)o.id=r.id+"";else{var a=0;do{o.id="\0"+o.name+"\0"+a++}while(e.get(o.id))}e.set(o.id,t)}})}function pn(t){var e=t.name;return!(!e||!e.indexOf(oh))}function gn(t){return ih(t)&&t.id&&0===(t.id+"").indexOf("\0_ec_\0")}function vn(t,e){return null!=e.dataIndexInside?e.dataIndexInside:null!=e.dataIndex?x(e.dataIndex)?g(e.dataIndex,function(e){return t.indexOfRawIndex(e)}):t.indexOfRawIndex(e.dataIndex):null!=e.name?x(e.name)?g(e.name,function(e){return t.indexOfName(e)}):t.indexOfName(e.name):void 0}function mn(){var t="__\0ec_inner_"+sh+++"_"+Math.random().toFixed(5);return function(e){return e[t]||(e[t]={})}}function yn(t,e,n){if(b(e)){var i={};i[e+"Index"]=0,e=i}var r=n&&n.defaultMainType;!r||_n(e,r+"Index")||_n(e,r+"Id")||_n(e,r+"Name")||(e[r+"Index"]=0);var o={};return nh(e,function(i,r){i=e[r];if("dataIndex"!==r&&"dataIndexInside"!==r){var a=r.match(/^(\w+)(Index|Id|Name)$/)||[],s=a[1],l=(a[2]||"").toLowerCase();if(!(!s||!l||null==i||"index"===l&&"none"===i||n&&n.includeMainTypes&&c(n.includeMainTypes,s)<0)){var u={mainType:s};"index"===l&&"all"===i||(u[l]=i);var h=t.queryComponents(u);o[s+"Models"]=h,o[s+"Model"]=h[0]}}else o[r]=i}),o}function _n(t,e){return t&&t.hasOwnProperty(e)}function xn(t,e,n){t.setAttribute?t.setAttribute(e,n):t[e]=n}function wn(t,e){return t.getAttribute?t.getAttribute(e):t[e]}function bn(t){var e={main:"",sub:""};return t&&(t=t.split(lh),e.main=t[0]||"",e.sub=t[1]||""),e}function Sn(t){L(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t),'componentType "'+t+'" illegal')}function Mn(t,e){t.$constructor=t,t.extend=function(t){var e=this,n=function(){t.$constructor?t.$constructor.apply(this,arguments):e.apply(this,arguments)};return s(n.prototype,t),n.extend=this.extend,n.superCall=Cn,n.superApply=In,h(n,this),n.superClass=e,n}}function kn(t){var e=["__\0is_clz",ch++,Math.random().toFixed(3)].join("_");t.prototype[e]=!0,t.isInstance=function(t){return!(!t||!t[e])}}function Cn(t,e){var n=O(arguments,2);return this.superClass.prototype[e].apply(t,n)}function In(t,e,n){return this.superClass.prototype[e].apply(t,n)}function An(t,e){function n(t){var e=i[t.main];return e&&e[uh]||((e=i[t.main]={})[uh]=!0),e}e=e||{};var i={};if(t.registerClass=function(t,e){return e&&(Sn(e),(e=bn(e)).sub?e.sub!==uh&&(n(e)[e.sub]=t):i[e.main]=t),t},t.getClass=function(t,e,n){var r=i[t];if(r&&r[uh]&&(r=e?r[e]:null),n&&!r)throw new Error(e?"Component "+t+"."+(e||"")+" not exists. Load it first.":t+".type should be specified.");return r},t.getClassesByMainType=function(t){t=bn(t);var e=[],n=i[t.main];return n&&n[uh]?p(n,function(t,n){n!==uh&&e.push(t)}):e.push(n),e},t.hasClass=function(t){return t=bn(t),!!i[t.main]},t.getAllClassMainTypes=function(){var t=[];return p(i,function(e,n){t.push(n)}),t},t.hasSubTypes=function(t){t=bn(t);var e=i[t.main];return e&&e[uh]},t.parseClassType=bn,e.registerWhenExtend){var r=t.extend;r&&(t.extend=function(e){var n=r.call(this,e);return t.registerClass(n,e.type)})}return t}function Tn(t){return t>-yh&&t<yh}function Dn(t){return t>yh||t<-yh}function On(t,e,n,i,r){var o=1-r;return o*o*(o*t+3*r*e)+r*r*(r*i+3*o*n)}function Pn(t,e,n,i,r){var o=1-r;return 3*(((e-t)*o+2*(n-e)*r)*o+(i-n)*r*r)}function Ln(t,e,n,i,r,o){var a=i+3*(e-n)-t,s=3*(n-2*e+t),l=3*(e-t),u=t-r,c=s*s-3*a*l,h=s*l-9*a*u,f=l*l-3*s*u,d=0;if(Tn(c)&&Tn(h))Tn(s)?o[0]=0:(M=-l/s)>=0&&M<=1&&(o[d++]=M);else{var p=h*h-4*c*f;if(Tn(p)){var g=h/c,v=-g/2;(M=-s/a+g)>=0&&M<=1&&(o[d++]=M),v>=0&&v<=1&&(o[d++]=v)}else if(p>0){var m=mh(p),y=c*s+1.5*a*(-h+m),_=c*s+1.5*a*(-h-m);(M=(-s-((y=y<0?-vh(-y,wh):vh(y,wh))+(_=_<0?-vh(-_,wh):vh(_,wh))))/(3*a))>=0&&M<=1&&(o[d++]=M)}else{var x=(2*c*s-3*a*h)/(2*mh(c*c*c)),w=Math.acos(x)/3,b=mh(c),S=Math.cos(w),M=(-s-2*b*S)/(3*a),k=(v=(-s+b*(S+xh*Math.sin(w)))/(3*a),(-s+b*(S-xh*Math.sin(w)))/(3*a));M>=0&&M<=1&&(o[d++]=M),v>=0&&v<=1&&(o[d++]=v),k>=0&&k<=1&&(o[d++]=k)}}return d}function En(t,e,n,i,r){var o=6*n-12*e+6*t,a=9*e+3*i-3*t-9*n,s=3*e-3*t,l=0;if(Tn(a))Dn(o)&&(h=-s/o)>=0&&h<=1&&(r[l++]=h);else{var u=o*o-4*a*s;if(Tn(u))r[0]=-o/(2*a);else if(u>0){var c=mh(u),h=(-o+c)/(2*a),f=(-o-c)/(2*a);h>=0&&h<=1&&(r[l++]=h),f>=0&&f<=1&&(r[l++]=f)}}return l}function Nn(t,e,n,i,r,o){var a=(e-t)*r+t,s=(n-e)*r+e,l=(i-n)*r+n,u=(s-a)*r+a,c=(l-s)*r+s,h=(c-u)*r+u;o[0]=t,o[1]=a,o[2]=u,o[3]=h,o[4]=h,o[5]=c,o[6]=l,o[7]=i}function Rn(t,e,n,i,r,o,a,s,l,u,c){var h,f,d,p,g,v=.005,m=1/0;bh[0]=l,bh[1]=u;for(var y=0;y<1;y+=.05)Sh[0]=On(t,n,r,a,y),Sh[1]=On(e,i,o,s,y),(p=Ru(bh,Sh))<m&&(h=y,m=p);m=1/0;for(var _=0;_<32&&!(v<_h);_++)f=h-v,d=h+v,Sh[0]=On(t,n,r,a,f),Sh[1]=On(e,i,o,s,f),p=Ru(Sh,bh),f>=0&&p<m?(h=f,m=p):(Mh[0]=On(t,n,r,a,d),Mh[1]=On(e,i,o,s,d),g=Ru(Mh,bh),d<=1&&g<m?(h=d,m=g):v*=.5);return c&&(c[0]=On(t,n,r,a,h),c[1]=On(e,i,o,s,h)),mh(m)}function Bn(t,e,n,i){var r=1-i;return r*(r*t+2*i*e)+i*i*n}function zn(t,e,n,i){return 2*((1-i)*(e-t)+i*(n-e))}function $n(t,e,n,i,r){var o=t-2*e+n,a=2*(e-t),s=t-i,l=0;if(Tn(o))Dn(a)&&(h=-s/a)>=0&&h<=1&&(r[l++]=h);else{var u=a*a-4*o*s;if(Tn(u))(h=-a/(2*o))>=0&&h<=1&&(r[l++]=h);else if(u>0){var c=mh(u),h=(-a+c)/(2*o),f=(-a-c)/(2*o);h>=0&&h<=1&&(r[l++]=h),f>=0&&f<=1&&(r[l++]=f)}}return l}function Fn(t,e,n){var i=t+n-2*e;return 0===i?.5:(t-e)/i}function Vn(t,e,n,i,r){var o=(e-t)*i+t,a=(n-e)*i+e,s=(a-o)*i+o;r[0]=t,r[1]=o,r[2]=s,r[3]=s,r[4]=a,r[5]=n}function jn(t,e,n,i,r,o,a,s,l){var u,c=.005,h=1/0;bh[0]=a,bh[1]=s;for(var f=0;f<1;f+=.05)Sh[0]=Bn(t,n,r,f),Sh[1]=Bn(e,i,o,f),(v=Ru(bh,Sh))<h&&(u=f,h=v);h=1/0;for(var d=0;d<32&&!(c<_h);d++){var p=u-c,g=u+c;Sh[0]=Bn(t,n,r,p),Sh[1]=Bn(e,i,o,p);var v=Ru(Sh,bh);if(p>=0&&v<h)u=p,h=v;else{Mh[0]=Bn(t,n,r,g),Mh[1]=Bn(e,i,o,g);var m=Ru(Mh,bh);g<=1&&m<h?(u=g,h=m):c*=.5}}return l&&(l[0]=Bn(t,n,r,u),l[1]=Bn(e,i,o,u)),mh(h)}function Hn(t,e,n,i,r,o){r[0]=kh(t,n),r[1]=kh(e,i),o[0]=Ch(t,n),o[1]=Ch(e,i)}function Wn(t,e,n,i,r,o,a,s,l,u){var c,h=En,f=On,d=h(t,n,r,a,Lh);for(l[0]=1/0,l[1]=1/0,u[0]=-1/0,u[1]=-1/0,c=0;c<d;c++){var p=f(t,n,r,a,Lh[c]);l[0]=kh(p,l[0]),u[0]=Ch(p,u[0])}for(d=h(e,i,o,s,Eh),c=0;c<d;c++){var g=f(e,i,o,s,Eh[c]);l[1]=kh(g,l[1]),u[1]=Ch(g,u[1])}l[0]=kh(t,l[0]),u[0]=Ch(t,u[0]),l[0]=kh(a,l[0]),u[0]=Ch(a,u[0]),l[1]=kh(e,l[1]),u[1]=Ch(e,u[1]),l[1]=kh(s,l[1]),u[1]=Ch(s,u[1])}function Gn(t,e,n,i,r,o,a,s){var l=Fn,u=Bn,c=Ch(kh(l(t,n,r),1),0),h=Ch(kh(l(e,i,o),1),0),f=u(t,n,r,c),d=u(e,i,o,h);a[0]=kh(t,r,f),a[1]=kh(e,o,d),s[0]=Ch(t,r,f),s[1]=Ch(e,o,d)}function Un(t,e,n,i,r,o,a,s,l){var u=Z,c=K,h=Math.abs(r-o);if(h%Th<1e-4&&h>1e-4)return s[0]=t-n,s[1]=e-i,l[0]=t+n,void(l[1]=e+i);if(Dh[0]=Ah(r)*n+t,Dh[1]=Ih(r)*i+e,Oh[0]=Ah(o)*n+t,Oh[1]=Ih(o)*i+e,u(s,Dh,Oh),c(l,Dh,Oh),(r%=Th)<0&&(r+=Th),(o%=Th)<0&&(o+=Th),r>o&&!a?o+=Th:r<o&&a&&(r+=Th),a){var f=o;o=r,r=f}for(var d=0;d<o;d+=Math.PI/2)d>r&&(Ph[0]=Ah(d)*n+t,Ph[1]=Ih(d)*i+e,u(s,Ph,s),c(l,Ph,l))}function qn(t,e,n,i,r,o,a){if(0===r)return!1;var s=r,l=0;if(a>e+s&&a>i+s||a<e-s&&a<i-s||o>t+s&&o>n+s||o<t-s&&o<n-s)return!1;if(t===n)return Math.abs(o-t)<=s/2;var u=(l=(e-i)/(t-n))*o-a+(t*i-n*e)/(t-n);return u*u/(l*l+1)<=s/2*s/2}function Xn(t,e,n,i,r,o,a,s,l,u,c){if(0===l)return!1;var h=l;return!(c>e+h&&c>i+h&&c>o+h&&c>s+h||c<e-h&&c<i-h&&c<o-h&&c<s-h||u>t+h&&u>n+h&&u>r+h&&u>a+h||u<t-h&&u<n-h&&u<r-h&&u<a-h)&&Rn(t,e,n,i,r,o,a,s,u,c,null)<=h/2}function Yn(t,e,n,i,r,o,a,s,l){if(0===a)return!1;var u=a;return!(l>e+u&&l>i+u&&l>o+u||l<e-u&&l<i-u&&l<o-u||s>t+u&&s>n+u&&s>r+u||s<t-u&&s<n-u&&s<r-u)&&jn(t,e,n,i,r,o,s,l,null)<=u/2}function Zn(t){return(t%=Xh)<0&&(t+=Xh),t}function Kn(t,e,n,i,r,o,a,s,l){if(0===a)return!1;var u=a;s-=t,l-=e;var c=Math.sqrt(s*s+l*l);if(c-u>n||c+u<n)return!1;if(Math.abs(i-r)%Yh<1e-4)return!0;if(o){var h=i;i=Zn(r),r=Zn(h)}else i=Zn(i),r=Zn(r);i>r&&(r+=Yh);var f=Math.atan2(l,s);return f<0&&(f+=Yh),f>=i&&f<=r||f+Yh>=i&&f+Yh<=r}function Jn(t,e,n,i,r,o){if(o>e&&o>i||o<e&&o<i)return 0;if(i===e)return 0;var a=i<e?1:-1,s=(o-e)/(i-e);1!==s&&0!==s||(a=i<e?.5:-.5);var l=s*(n-t)+t;return l===r?1/0:l>r?a:0}function Qn(t,e){return Math.abs(t-e)<Jh}function ti(){var t=tf[0];tf[0]=tf[1],tf[1]=t}function ei(t,e,n,i,r,o,a,s,l,u){if(u>e&&u>i&&u>o&&u>s||u<e&&u<i&&u<o&&u<s)return 0;var c=Ln(e,i,o,s,u,Qh);if(0===c)return 0;for(var h,f,d=0,p=-1,g=0;g<c;g++){var v=Qh[g],m=0===v||1===v?.5:1;On(t,n,r,a,v)<l||(p<0&&(p=En(e,i,o,s,tf),tf[1]<tf[0]&&p>1&&ti(),h=On(e,i,o,s,tf[0]),p>1&&(f=On(e,i,o,s,tf[1]))),2==p?v<tf[0]?d+=h<e?m:-m:v<tf[1]?d+=f<h?m:-m:d+=s<f?m:-m:v<tf[0]?d+=h<e?m:-m:d+=s<h?m:-m)}return d}function ni(t,e,n,i,r,o,a,s){if(s>e&&s>i&&s>o||s<e&&s<i&&s<o)return 0;var l=$n(e,i,o,s,Qh);if(0===l)return 0;var u=Fn(e,i,o);if(u>=0&&u<=1){for(var c=0,h=Bn(e,i,o,u),f=0;f<l;f++)d=0===Qh[f]||1===Qh[f]?.5:1,(p=Bn(t,n,r,Qh[f]))<a||(Qh[f]<u?c+=h<e?d:-d:c+=o<h?d:-d);return c}var d=0===Qh[0]||1===Qh[0]?.5:1,p=Bn(t,n,r,Qh[0]);return p<a?0:o<e?d:-d}function ii(t,e,n,i,r,o,a,s){if((s-=e)>n||s<-n)return 0;u=Math.sqrt(n*n-s*s),Qh[0]=-u,Qh[1]=u;var l=Math.abs(i-r);if(l<1e-4)return 0;if(l%Kh<1e-4)return i=0,r=Kh,p=o?1:-1,a>=Qh[0]+t&&a<=Qh[1]+t?p:0;if(o){var u=i;i=Zn(r),r=Zn(u)}else i=Zn(i),r=Zn(r);i>r&&(r+=Kh);for(var c=0,h=0;h<2;h++){var f=Qh[h];if(f+t>a){var d=Math.atan2(s,f),p=o?1:-1;d<0&&(d=Kh+d),(d>=i&&d<=r||d+Kh>=i&&d+Kh<=r)&&(d>Math.PI/2&&d<1.5*Math.PI&&(p=-p),c+=p)}}return c}function ri(t,e,n,i,r){for(var o=0,a=0,s=0,l=0,u=0,c=0;c<t.length;){var h=t[c++];switch(h===Zh.M&&c>1&&(n||(o+=Jn(a,s,l,u,i,r))),1==c&&(l=a=t[c],u=s=t[c+1]),h){case Zh.M:a=l=t[c++],s=u=t[c++];break;case Zh.L:if(n){if(qn(a,s,t[c],t[c+1],e,i,r))return!0}else o+=Jn(a,s,t[c],t[c+1],i,r)||0;a=t[c++],s=t[c++];break;case Zh.C:if(n){if(Xn(a,s,t[c++],t[c++],t[c++],t[c++],t[c],t[c+1],e,i,r))return!0}else o+=ei(a,s,t[c++],t[c++],t[c++],t[c++],t[c],t[c+1],i,r)||0;a=t[c++],s=t[c++];break;case Zh.Q:if(n){if(Yn(a,s,t[c++],t[c++],t[c],t[c+1],e,i,r))return!0}else o+=ni(a,s,t[c++],t[c++],t[c],t[c+1],i,r)||0;a=t[c++],s=t[c++];break;case Zh.A:var f=t[c++],d=t[c++],p=t[c++],g=t[c++],v=t[c++],m=t[c++],y=(t[c++],1-t[c++]),_=Math.cos(v)*p+f,x=Math.sin(v)*g+d;c>1?o+=Jn(a,s,_,x,i,r):(l=_,u=x);var w=(i-f)*g/p+f;if(n){if(Kn(f,d,g,v,v+m,y,e,w,r))return!0}else o+=ii(f,d,g,v,v+m,y,w,r);a=Math.cos(v+m)*p+f,s=Math.sin(v+m)*g+d;break;case Zh.R:l=a=t[c++],u=s=t[c++];_=l+t[c++],x=u+t[c++];if(n){if(qn(l,u,_,u,e,i,r)||qn(_,u,_,x,e,i,r)||qn(_,x,l,x,e,i,r)||qn(l,x,l,u,e,i,r))return!0}else o+=Jn(_,u,_,x,i,r),o+=Jn(l,x,l,u,i,r);break;case Zh.Z:if(n){if(qn(a,s,l,u,e,i,r))return!0}else o+=Jn(a,s,l,u,i,r);a=l,s=u}}return n||Qn(s,u)||(o+=Jn(a,s,l,u,i,r)||0),0!==o}function oi(t,e,n){return ri(t,0,!1,e,n)}function ai(t,e,n,i){return ri(t,e,!0,n,i)}function si(t){ze.call(this,t),this.path=null}function li(t,e,n,i,r,o,a,s,l,u,c){var h=l*(pf/180),f=df(h)*(t-n)/2+ff(h)*(e-i)/2,d=-1*ff(h)*(t-n)/2+df(h)*(e-i)/2,p=f*f/(a*a)+d*d/(s*s);p>1&&(a*=hf(p),s*=hf(p));var g=(r===o?-1:1)*hf((a*a*(s*s)-a*a*(d*d)-s*s*(f*f))/(a*a*(d*d)+s*s*(f*f)))||0,v=g*a*d/s,m=g*-s*f/a,y=(t+n)/2+df(h)*v-ff(h)*m,_=(e+i)/2+ff(h)*v+df(h)*m,x=mf([1,0],[(f-v)/a,(d-m)/s]),w=[(f-v)/a,(d-m)/s],b=[(-1*f-v)/a,(-1*d-m)/s],S=mf(w,b);vf(w,b)<=-1&&(S=pf),vf(w,b)>=1&&(S=0),0===o&&S>0&&(S-=2*pf),1===o&&S<0&&(S+=2*pf),c.addData(u,y,_,a,s,x,S,h,o)}function ui(t){if(!t)return[];var e,n=t.replace(/-/g," -").replace(/  /g," ").replace(/ /g,",").replace(/,,/g,",");for(e=0;e<cf.length;e++)n=n.replace(new RegExp(cf[e],"g"),"|"+cf[e]);var i,r=n.split("|"),o=0,a=0,s=new qh,l=qh.CMD;for(e=1;e<r.length;e++){var u,c=r[e],h=c.charAt(0),f=0,d=c.slice(1).replace(/e,-/g,"e-").split(",");d.length>0&&""===d[0]&&d.shift();for(var p=0;p<d.length;p++)d[p]=parseFloat(d[p]);for(;f<d.length&&!isNaN(d[f])&&!isNaN(d[0]);){var g,v,m,y,_,x,w,b=o,S=a;switch(h){case"l":o+=d[f++],a+=d[f++],u=l.L,s.addData(u,o,a);break;case"L":o=d[f++],a=d[f++],u=l.L,s.addData(u,o,a);break;case"m":o+=d[f++],a+=d[f++],u=l.M,s.addData(u,o,a),h="l";break;case"M":o=d[f++],a=d[f++],u=l.M,s.addData(u,o,a),h="L";break;case"h":o+=d[f++],u=l.L,s.addData(u,o,a);break;case"H":o=d[f++],u=l.L,s.addData(u,o,a);break;case"v":a+=d[f++],u=l.L,s.addData(u,o,a);break;case"V":a=d[f++],u=l.L,s.addData(u,o,a);break;case"C":u=l.C,s.addData(u,d[f++],d[f++],d[f++],d[f++],d[f++],d[f++]),o=d[f-2],a=d[f-1];break;case"c":u=l.C,s.addData(u,d[f++]+o,d[f++]+a,d[f++]+o,d[f++]+a,d[f++]+o,d[f++]+a),o+=d[f-2],a+=d[f-1];break;case"S":g=o,v=a;var M=s.len(),k=s.data;i===l.C&&(g+=o-k[M-4],v+=a-k[M-3]),u=l.C,b=d[f++],S=d[f++],o=d[f++],a=d[f++],s.addData(u,g,v,b,S,o,a);break;case"s":g=o,v=a;M=s.len(),k=s.data;i===l.C&&(g+=o-k[M-4],v+=a-k[M-3]),u=l.C,b=o+d[f++],S=a+d[f++],o+=d[f++],a+=d[f++],s.addData(u,g,v,b,S,o,a);break;case"Q":b=d[f++],S=d[f++],o=d[f++],a=d[f++],u=l.Q,s.addData(u,b,S,o,a);break;case"q":b=d[f++]+o,S=d[f++]+a,o+=d[f++],a+=d[f++],u=l.Q,s.addData(u,b,S,o,a);break;case"T":g=o,v=a;M=s.len(),k=s.data;i===l.Q&&(g+=o-k[M-4],v+=a-k[M-3]),o=d[f++],a=d[f++],u=l.Q,s.addData(u,g,v,o,a);break;case"t":g=o,v=a;M=s.len(),k=s.data;i===l.Q&&(g+=o-k[M-4],v+=a-k[M-3]),o+=d[f++],a+=d[f++],u=l.Q,s.addData(u,g,v,o,a);break;case"A":m=d[f++],y=d[f++],_=d[f++],x=d[f++],w=d[f++],li(b=o,S=a,o=d[f++],a=d[f++],x,w,m,y,_,u=l.A,s);break;case"a":m=d[f++],y=d[f++],_=d[f++],x=d[f++],w=d[f++],li(b=o,S=a,o+=d[f++],a+=d[f++],x,w,m,y,_,u=l.A,s)}}"z"!==h&&"Z"!==h||(u=l.Z,s.addData(u)),i=u}return s.toStatic(),s}function ci(t,e){var n=ui(t);return e=e||{},e.buildPath=function(t){if(t.setData)t.setData(n.data),(e=t.getContext())&&t.rebuildPath(e);else{var e=t;n.rebuildPath(e)}},e.applyTransform=function(t){uf(n,t),this.dirty(!0)},e}function hi(t,e){return new si(ci(t,e))}function fi(t,e){return si.extend(ci(t,e))}function di(t,e,n,i,r,o,a){var s=.5*(n-t),l=.5*(i-e);return(2*(e-n)+s+l)*a+(-3*(e-n)-2*s-l)*o+s*r+e}function pi(t,e,n){var i=e.points,r=e.smooth;if(i&&i.length>=2){if(r&&"spline"!==r){var o=kf(i,r,n,e.smoothConstraint);t.moveTo(i[0][0],i[0][1]);for(var a=i.length,s=0;s<(n?a:a-1);s++){var l=o[2*s],u=o[2*s+1],c=i[(s+1)%a];t.bezierCurveTo(l[0],l[1],u[0],u[1],c[0],c[1])}}else{"spline"===r&&(i=Mf(i,n)),t.moveTo(i[0][0],i[0][1]);s=1;for(var h=i.length;s<h;s++)t.lineTo(i[s][0],i[s][1])}n&&t.closePath()}}function gi(t,e,n){var i=t.cpx2,r=t.cpy2;return null===i||null===r?[(n?Pn:On)(t.x1,t.cpx1,t.cpx2,t.x2,e),(n?Pn:On)(t.y1,t.cpy1,t.cpy2,t.y2,e)]:[(n?zn:Bn)(t.x1,t.cpx1,t.x2,e),(n?zn:Bn)(t.y1,t.cpy1,t.y2,e)]}function vi(t){ze.call(this,t),this._displayables=[],this._temporaryDisplayables=[],this._cursor=0,this.notClear=!0}function mi(t){return si.extend(t)}function yi(t,e,n,i){var r=hi(t,e),o=r.getBoundingRect();return n&&("center"===i&&(n=xi(n,o)),wi(r,n)),r}function _i(t,e,n){var i=new $e({style:{image:t,x:e.x,y:e.y,width:e.width,height:e.height},onload:function(t){if("center"===n){var r={width:t.width,height:t.height};i.setStyle(xi(e,r))}}});return i}function xi(t,e){var n,i=e.width/e.height,r=t.height*i;return n=r<=t.width?t.height:(r=t.width)/i,{x:t.x+t.width/2-r/2,y:t.y+t.height/2-n/2,width:r,height:n}}function wi(t,e){if(t.applyTransform){var n=t.getBoundingRect().calculateTransform(e);t.applyTransform(n)}}function bi(t){var e=t.shape,n=t.style.lineWidth;return zf(2*e.x1)===zf(2*e.x2)&&(e.x1=e.x2=Si(e.x1,n,!0)),zf(2*e.y1)===zf(2*e.y2)&&(e.y1=e.y2=Si(e.y1,n,!0)),t}function Si(t,e,n){var i=zf(2*t);return(i+zf(e))%2==0?i/2:(i+(n?1:-1))/2}function Mi(t){return null!=t&&"none"!=t}function ki(t){return"string"==typeof t?St(t,-.1):t}function Ci(t){if(t.__hoverStlDirty){var e=t.style.stroke,n=t.style.fill,i=t.__hoverStl;i.fill=i.fill||(Mi(n)?ki(n):null),i.stroke=i.stroke||(Mi(e)?ki(e):null);var r={};for(var o in i)null!=i[o]&&(r[o]=t.style[o]);t.__normalStl=r,t.__hoverStlDirty=!1}}function Ii(t){if(!t.__isHover){if(Ci(t),t.useHoverLayer)t.__zr&&t.__zr.addHover(t,t.__hoverStl);else{var e=t.style,n=e.insideRollbackOpt;n&&Wi(e),e.extendFrom(t.__hoverStl),n&&(Hi(e,e.insideOriginalTextPosition,n),null==e.textFill&&(e.textFill=n.autoColor)),t.dirty(!1),t.z2+=1}t.__isHover=!0}}function Ai(t){if(t.__isHover){var e=t.__normalStl;t.useHoverLayer?t.__zr&&t.__zr.removeHover(t):(e&&t.setStyle(e),t.z2-=1),t.__isHover=!1}}function Ti(t){"group"===t.type?t.traverse(function(t){"group"!==t.type&&Ii(t)}):Ii(t)}function Di(t){"group"===t.type?t.traverse(function(t){"group"!==t.type&&Ai(t)}):Ai(t)}function Oi(t,e){t.__hoverStl=t.hoverStyle||e||{},t.__hoverStlDirty=!0,t.__isHover&&Ci(t)}function Pi(t){this.__hoverSilentOnTouch&&t.zrByTouch||!this.__isEmphasis&&Ti(this)}function Li(t){this.__hoverSilentOnTouch&&t.zrByTouch||!this.__isEmphasis&&Di(this)}function Ei(){this.__isEmphasis=!0,Ti(this)}function Ni(){this.__isEmphasis=!1,Di(this)}function Ri(t,e,n){t.__hoverSilentOnTouch=n&&n.hoverSilentOnTouch,"group"===t.type?t.traverse(function(t){"group"!==t.type&&Oi(t,e)}):Oi(t,e),t.on("mouseover",Pi).on("mouseout",Li),t.on("emphasis",Ei).on("normal",Ni)}function Bi(t,e,n,i,r,o,a){var s,l=(r=r||Vf).labelFetcher,u=r.labelDataIndex,c=r.labelDimIndex,h=n.getShallow("show"),f=i.getShallow("show");(h||f)&&(l&&(s=l.getFormattedLabel(u,"normal",null,c)),null==s&&(s=w(r.defaultText)?r.defaultText(u,r):r.defaultText));var d=h?s:null,p=f?T(l?l.getFormattedLabel(u,"emphasis",null,c):null,s):null;null==d&&null==p||(zi(t,n,o,r),zi(e,i,a,r,!0)),t.text=d,e.text=p}function zi(t,e,n,i,r){return $i(t,e,i,r),n&&s(t,n),t.host&&t.host.dirty&&t.host.dirty(!1),t}function $i(t,e,n,i){if((n=n||Vf).isRectText){var r=e.getShallow("position")||(i?null:"inside");"outside"===r&&(r="top"),t.textPosition=r,t.textOffset=e.getShallow("offset");var o=e.getShallow("rotate");null!=o&&(o*=Math.PI/180),t.textRotation=o,t.textDistance=T(e.getShallow("distance"),i?null:5)}var a,s=e.ecModel,l=s&&s.option.textStyle,u=Fi(e);if(u)for(var c in a={},u)if(u.hasOwnProperty(c)){var h=e.getModel(["rich",c]);Vi(a[c]={},h,l,n,i)}return t.rich=a,Vi(t,e,l,n,i,!0),n.forceRich&&!n.textStyle&&(n.textStyle={}),t}function Fi(t){for(var e;t&&t!==t.ecModel;){var n=(t.option||Vf).rich;if(n)for(var i in e=e||{},n)n.hasOwnProperty(i)&&(e[i]=1);t=t.parentModel}return e}function Vi(t,e,n,i,r,o){if(n=!r&&n||Vf,t.textFill=ji(e.getShallow("color"),i)||n.color,t.textStroke=ji(e.getShallow("textBorderColor"),i)||n.textBorderColor,t.textStrokeWidth=T(e.getShallow("textBorderWidth"),n.textBorderWidth),!r){if(o){var a=t.textPosition;t.insideRollback=Hi(t,a,i),t.insideOriginalTextPosition=a,t.insideRollbackOpt=i}null==t.textFill&&(t.textFill=i.autoColor)}t.fontStyle=e.getShallow("fontStyle")||n.fontStyle,t.fontWeight=e.getShallow("fontWeight")||n.fontWeight,t.fontSize=e.getShallow("fontSize")||n.fontSize,t.fontFamily=e.getShallow("fontFamily")||n.fontFamily,t.textAlign=e.getShallow("align"),t.textVerticalAlign=e.getShallow("verticalAlign")||e.getShallow("baseline"),t.textLineHeight=e.getShallow("lineHeight"),t.textWidth=e.getShallow("width"),t.textHeight=e.getShallow("height"),t.textTag=e.getShallow("tag"),o&&i.disableBox||(t.textBackgroundColor=ji(e.getShallow("backgroundColor"),i),t.textPadding=e.getShallow("padding"),t.textBorderColor=ji(e.getShallow("borderColor"),i),t.textBorderWidth=e.getShallow("borderWidth"),t.textBorderRadius=e.getShallow("borderRadius"),t.textBoxShadowColor=e.getShallow("shadowColor"),t.textBoxShadowBlur=e.getShallow("shadowBlur"),t.textBoxShadowOffsetX=e.getShallow("shadowOffsetX"),t.textBoxShadowOffsetY=e.getShallow("shadowOffsetY")),t.textShadowColor=e.getShallow("textShadowColor")||n.textShadowColor,t.textShadowBlur=e.getShallow("textShadowBlur")||n.textShadowBlur,t.textShadowOffsetX=e.getShallow("textShadowOffsetX")||n.textShadowOffsetX,t.textShadowOffsetY=e.getShallow("textShadowOffsetY")||n.textShadowOffsetY}function ji(t,e){return"auto"!==t?t:e&&e.autoColor?e.autoColor:null}function Hi(t,e,n){var i,r=n.useInsideStyle;return null==t.textFill&&!1!==r&&(!0===r||n.isRectText&&e&&"string"==typeof e&&e.indexOf("inside")>=0)&&(i={textFill:null,textStroke:t.textStroke,textStrokeWidth:t.textStrokeWidth},t.textFill="#fff",null==t.textStroke&&(t.textStroke=n.autoColor,null==t.textStrokeWidth&&(t.textStrokeWidth=2))),i}function Wi(t){var e=t.insideRollback;e&&(t.textFill=e.textFill,t.textStroke=e.textStroke,t.textStrokeWidth=e.textStrokeWidth)}function Gi(t,e){var n=e||e.getModel("textStyle");return E([t.fontStyle||n&&n.getShallow("fontStyle")||"",t.fontWeight||n&&n.getShallow("fontWeight")||"",(t.fontSize||n&&n.getShallow("fontSize")||12)+"px",t.fontFamily||n&&n.getShallow("fontFamily")||"sans-serif"].join(" "))}function Ui(t,e,n,i,r,o){if("function"==typeof r&&(o=r,r=null),i&&i.isAnimationEnabled()){var a=t?"Update":"",s=i.getShallow("animationDuration"+a),l=i.getShallow("animationEasing"+a),u=i.getShallow("animationDelay"+a);"function"==typeof u&&(u=u(r,i.getAnimationDelayParams?i.getAnimationDelayParams(e,r):null)),"function"==typeof s&&(s=s(r)),s>0?e.animateTo(n,s,u||0,l,o,!!o):(e.stopAnimation(),e.attr(n),o&&o())}else e.stopAnimation(),e.attr(n),o&&o()}function qi(t,e,n,i,r){Ui(!0,t,e,n,i,r)}function Xi(t,e,n,i,r){Ui(!1,t,e,n,i,r)}function Yi(t,e,n){return e&&!d(e)&&(e=Gu.getLocalTransform(e)),n&&(e=ct([],e)),Y([],t,e)}function Zi(t,e,n,i){function r(t){var e={position:V(t.position),rotation:t.rotation};return t.shape&&(e.shape=s({},t.shape)),e}if(t&&e){var o=function(t){var e={};return t.traverse(function(t){!t.isGroup&&t.anid&&(e[t.anid]=t)}),e}(t);e.traverse(function(t){if(!t.isGroup&&t.anid){var e=o[t.anid];if(e){var i=r(t);t.attr(r(e)),qi(t,i,n,t.dataIndex)}}})}}function Ki(t,e,n){this.parentModel=e,this.ecModel=n,this.option=t}function Ji(t,e,n){for(var i=0;i<e.length&&(!e[i]||null!=(t=t&&"object"==typeof t?t[e[i]]:null));i++);return null==t&&n&&(t=n.get(e)),t}function Qi(t,e){var n=Xf(t).getParent;return n?n.call(t,e):t.parentModel}function tr(t){return[t||"",Yf++,Math.random().toFixed(5)].join("_")}function er(t){return t.replace(/^\s+/,"").replace(/\s+$/,"")}function nr(t,e,n,i){var r=e[1]-e[0],o=n[1]-n[0];if(0===r)return 0===o?n[0]:(n[0]+n[1])/2;if(i)if(r>0){if(t<=e[0])return n[0];if(t>=e[1])return n[1]}else{if(t>=e[0])return n[0];if(t<=e[1])return n[1]}else{if(t===e[0])return n[0];if(t===e[1])return n[1]}return(t-e[0])/r*o+n[0]}function ir(t,e){switch(t){case"center":case"middle":t="50%";break;case"left":case"top":t="0%";break;case"right":case"bottom":t="100%"}return"string"==typeof t?er(t).match(/%$/)?parseFloat(t)/100*e:parseFloat(t):null==t?NaN:+t}function rr(t,e,n){return null==e&&(e=10),e=Math.min(Math.max(0,e),20),t=(+t).toFixed(e),n?t:+t}function or(t){var e=t.toString(),n=e.indexOf("e");if(n>0){var i=+e.slice(n+1);return i<0?-i:0}var r=e.indexOf(".");return r<0?0:e.length-1-r}function ar(t,e){var n=Math.log,i=Math.LN10,r=Math.floor(n(t[1]-t[0])/i),o=Math.round(n(Math.abs(e[1]-e[0]))/i),a=Math.min(Math.max(-r+o,0),20);return isFinite(a)?a:20}function sr(t,e,n){if(!t[e])return 0;var i=v(t,function(t,e){return t+(isNaN(e)?0:e)},0);if(0===i)return 0;for(var r=Math.pow(10,n),o=g(t,function(t){return(isNaN(t)?0:t)/i*r*100}),a=100*r,s=g(o,function(t){return Math.floor(t)}),l=v(s,function(t,e){return t+e},0),u=g(o,function(t,e){return t-s[e]});l<a;){for(var c=Number.NEGATIVE_INFINITY,h=null,f=0,d=u.length;f<d;++f)u[f]>c&&(c=u[f],h=f);++s[h],u[h]=0,++l}return s[e]/r}function lr(t){var e=2*Math.PI;return(t%e+e)%e}function ur(t){return t>-Zf&&t<Zf}function cr(t){if(t instanceof Date)return t;if("string"==typeof t){var e=Kf.exec(t);if(!e)return new Date(NaN);if(e[8]){var n=+e[4]||0;return"Z"!==e[8].toUpperCase()&&(n-=e[8].slice(0,3)),new Date(Date.UTC(+e[1],+(e[2]||1)-1,+e[3]||1,n,+(e[5]||0),+e[6]||0,+e[7]||0))}return new Date(+e[1],+(e[2]||1)-1,+e[3]||1,+e[4]||0,+(e[5]||0),+e[6]||0,+e[7]||0)}return null==t?new Date(NaN):new Date(Math.round(t))}function hr(t){return Math.pow(10,fr(t))}function fr(t){return Math.floor(Math.log(t)/Math.LN10)}function dr(t,e){var n,i=fr(t),r=Math.pow(10,i),o=t/r;return n=e?o<1.5?1:o<2.5?2:o<4?3:o<7?5:10:o<1?1:o<2?2:o<3?3:o<5?5:10,t=n*r,i>=-20?+t.toFixed(i<0?-i:0):t}function pr(t){return isNaN(t)?"-":(t=(t+"").split("."))[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g,"$1,")+(t.length>1?"."+t[1]:"")}function gr(t){return null==t?"":(t+"").replace(Qf,function(t,e){return td[e]})}function vr(t,e,n){x(e)||(e=[e]);var i=e.length;if(!i)return"";for(var r=e[0].$vars||[],o=0;o<r.length;o++){var a=ed[o];t=t.replace(nd(a),nd(a,0))}for(var s=0;s<i;s++)for(var l=0;l<r.length;l++){var u=e[s][r[l]];t=t.replace(nd(ed[l],s),n?gr(u):u)}return t}function mr(t,e){var n=(t=b(t)?{color:t,extraCssText:e}:t||{}).color,i=t.type;e=t.extraCssText;return n?"subItem"===i?'<span style="display:inline-block;vertical-align:middle;margin-right:8upx;margin-left:3upx;border-radius:4upx;width:4upx;height:4upx;background-color:'+gr(n)+";"+(e||"")+'"></span>':'<span style="display:inline-block;margin-right:5upx;border-radius:10upx;width:10upx;height:10upx;background-color:'+gr(n)+";"+(e||"")+'"></span>':""}function yr(t,e){return t+="","0000".substr(0,e-t.length)+t}function _r(t,e,n){"week"!==t&&"month"!==t&&"quarter"!==t&&"half-year"!==t&&"year"!==t||(t="MM-dd\nyyyy");var i=cr(e),r=n?"UTC":"",o=i["get"+r+"FullYear"](),a=i["get"+r+"Month"]()+1,s=i["get"+r+"Date"](),l=i["get"+r+"Hours"](),u=i["get"+r+"Minutes"](),c=i["get"+r+"Seconds"](),h=i["get"+r+"Milliseconds"]();return t.replace("MM",yr(a,2)).replace("M",a).replace("yyyy",o).replace("yy",o%100).replace("dd",yr(s,2)).replace("d",s).replace("hh",yr(l,2)).replace("h",l).replace("mm",yr(u,2)).replace("m",u).replace("ss",yr(c,2)).replace("s",c).replace("SSS",yr(h,3))}function xr(t,e,n,i,r){var o=0,a=0;null==i&&(i=1/0),null==r&&(r=1/0);var s=0;e.eachChild(function(l,u){var c,h,f=l.position,d=l.getBoundingRect(),p=e.childAt(u+1),g=p&&p.getBoundingRect();if("horizontal"===t){var v=d.width+(g?-g.x+d.x:0);(c=o+v)>i||l.newline?(o=0,c=v,a+=s+n,s=d.height):s=Math.max(s,d.height)}else{var m=d.height+(g?-g.y+d.y:0);(h=a+m)>r||l.newline?(o+=s+n,a=0,h=m,s=d.width):s=Math.max(s,d.width)}l.newline||(f[0]=o,f[1]=a,"horizontal"===t?o=c+n:a=h+n)})}function wr(t,e,n){n=Jf(n||0);var i=e.width,r=e.height,o=ir(t.left,i),a=ir(t.top,r),s=ir(t.right,i),l=ir(t.bottom,r),u=ir(t.width,i),c=ir(t.height,r),h=n[2]+n[0],f=n[1]+n[3],d=t.aspect;switch(isNaN(u)&&(u=i-s-f-o),isNaN(c)&&(c=r-l-h-a),null!=d&&(isNaN(u)&&isNaN(c)&&(d>i/r?u=.8*i:c=.8*r),isNaN(u)&&(u=d*c),isNaN(c)&&(c=u/d)),isNaN(o)&&(o=i-s-u-f),isNaN(a)&&(a=r-l-c-h),t.left||t.right){case"center":o=i/2-u/2-n[3];break;case"right":o=i-u-f}switch(t.top||t.bottom){case"middle":case"center":a=r/2-c/2-n[0];break;case"bottom":a=r-c-h}o=o||0,a=a||0,isNaN(u)&&(u=i-f-o-(s||0)),isNaN(c)&&(c=r-h-a-(l||0));var p=new zt(o+n[3],a+n[0],u,c);return p.margin=n,p}function br(t,e,n){function i(n,i){var a={},l=0,u={},c=0;if(rd(n,function(e){u[e]=t[e]}),rd(n,function(t){r(e,t)&&(a[t]=u[t]=e[t]),o(a,t)&&l++,o(u,t)&&c++}),s[i])return o(e,n[1])?u[n[2]]=null:o(e,n[2])&&(u[n[1]]=null),u;if(2!==c&&l){if(l>=2)return a;for(var h=0;h<n.length;h++){var f=n[h];if(!r(a,f)&&r(t,f)){a[f]=t[f];break}}return a}return u}function r(t,e){return t.hasOwnProperty(e)}function o(t,e){return null!=t[e]&&"auto"!==t[e]}function a(t,e,n){rd(t,function(t){e[t]=n[t]})}!S(n)&&(n={});var s=n.ignoreSize;!x(s)&&(s=[s,s]);var l=i(ad[0],0),u=i(ad[1],1);a(ad[0],t,l),a(ad[1],t,u)}function Sr(t){return Mr({},t)}function Mr(t,e){return e&&t&&rd(od,function(n){e.hasOwnProperty(n)&&(t[n]=e[n])}),t}function kr(t,e){for(var n=t.length,i=0;i<n;i++)if(t[i].length>e)return t[i];return t[n-1]}function Cr(t){var e=t.get("coordinateSystem"),n={coordSysName:e,coordSysDims:[],axisMap:z(),categoryAxisMap:z()},i=pd[e];if(i)return i(t,n,n.axisMap,n.categoryAxisMap),n}function Ir(t){return"category"===t.get("type")}function Ar(t){this.fromDataset=t.fromDataset,this.data=t.data||(t.sourceFormat===yd?{}:[]),this.sourceFormat=t.sourceFormat||_d,this.seriesLayoutBy=t.seriesLayoutBy||wd,this.dimensionsDefine=t.dimensionsDefine,this.encodeDefine=t.encodeDefine&&z(t.encodeDefine),this.startIndex=t.startIndex||0,this.dimensionsDetectCount=t.dimensionsDetectCount}function Tr(t){var e=t.option.source,n=_d;if(k(e))n=xd;else if(x(e))for(var i=0,r=e.length;i<r;i++){var o=e[i];if(null!=o){if(x(o)){n=vd;break}if(S(o)){n=md;break}}}else if(S(e)){for(var a in e)if(e.hasOwnProperty(a)&&d(e[a])){n=yd;break}}else if(null!=e)throw new Error("Invalid data");Sd(t).sourceFormat=n}function Dr(t){return Sd(t).source}function Or(t){Sd(t).datasetMap=z()}function Pr(t){var e=t.option,n=e.data,i=k(n)?xd:gd,r=!1,o=e.seriesLayoutBy,a=e.sourceHeader,s=e.dimensions,l=zr(t);if(l){var u=l.option;n=u.source,i=Sd(l).sourceFormat,r=!0,o=o||u.seriesLayoutBy,null==a&&(a=u.sourceHeader),s=s||u.dimensions}var c=Lr(n,i,o,a,s),h=e.encode;!h&&l&&(h=Br(t,l,n,i,o,c)),Sd(t).source=new Ar({data:n,fromDataset:r,seriesLayoutBy:o,sourceFormat:i,dimensionsDefine:c.dimensionsDefine,startIndex:c.startIndex,dimensionsDetectCount:c.dimensionsDetectCount,encodeDefine:h})}function Lr(t,e,n,i,r){if(!t)return{dimensionsDefine:Er(r)};var o,a,s,l;if(e===vd)"auto"===i||null==i?Nr(function(t){null!=t&&"-"!==t&&(b(t)?null==a&&(a=1):a=0)},n,t,10):a=i?1:0,r||1!==a||(r=[],Nr(function(t,e){r[e]=null!=t?t:""},n,t)),o=r?r.length:n===bd?t.length:t[0]?t[0].length:null;else if(e===md)r||(r=Rr(t),s=!0);else if(e===yd)r||(r=[],s=!0,p(t,function(t,e){r.push(e)}));else if(e===gd){var u=cn(t[0]);o=x(u)&&u.length||1}return s&&p(r,function(t,e){"name"===(S(t)?t.name:t)&&(l=e)}),{startIndex:a,dimensionsDefine:Er(r),dimensionsDetectCount:o,potentialNameDimIndex:l}}function Er(t){if(t){var e=z();return g(t,function(t,n){if(null==(t=s({},S(t)?t:{name:t})).name)return t;t.name+="",null==t.displayName&&(t.displayName=t.name);var i=e.get(t.name);return i?t.name+="-"+i.count++:e.set(t.name,{count:1}),t})}}function Nr(t,e,n,i){if(null==i&&(i=1/0),e===bd)for(o=0;o<n.length&&o<i;o++)t(n[o]?n[o][0]:null,o);else for(var r=n[0]||[],o=0;o<r.length&&o<i;o++)t(r[o],o)}function Rr(t){for(var e,n=0;n<t.length&&!(e=t[n++]););if(e){var i=[];return p(e,function(t,e){i.push(e)}),i}}function Br(t,e,n,i,r,o){var a=Cr(t),s={},l=[],u=[],c=t.subType,h=z(["pie","map","funnel"]),f=z(["line","bar","pictorialBar","scatter","effectScatter","candlestick","boxplot"]);if(a&&null!=f.get(c)){var d=t.ecModel,g=Sd(d).datasetMap,v=e.uid+"_"+r,m=g.get(v)||g.set(v,{categoryWayDim:1,valueWayDim:0});p(a.coordSysDims,function(t){if(null==a.firstCategoryDimIndex)e=m.valueWayDim++,s[t]=e,u.push(e);else if(a.categoryAxisMap.get(t))s[t]=0,l.push(0);else{var e=m.categoryWayDim++;s[t]=e,u.push(e)}})}else if(null!=h.get(c)){for(var y,_=0;_<5&&null==y;_++)Fr(n,i,r,o.dimensionsDefine,o.startIndex,_)||(y=_);if(null!=y){s.value=y;var x=o.potentialNameDimIndex||Math.max(y-1,0);u.push(x),l.push(x)}}return l.length&&(s.itemName=l),u.length&&(s.seriesName=u),s}function zr(t){var e=t.option;if(!e.data)return t.ecModel.getComponent("dataset",e.datasetIndex||0)}function $r(t,e){return Fr(t.data,t.sourceFormat,t.seriesLayoutBy,t.dimensionsDefine,t.startIndex,e)}function Fr(t,e,n,i,r,o){function a(t){return(null==t||!isFinite(t)||""===t)&&(!(!b(t)||"-"===t)||void 0)}var s,l;if(k(t))return!1;if(i&&(l=S(l=i[o])?l.name:l),e===vd)if(n===bd){for(var u=t[o],c=0;c<(u||[]).length&&c<5;c++)if(null!=(s=a(u[r+c])))return s}else for(c=0;c<t.length&&c<5;c++){var h=t[r+c];if(h&&null!=(s=a(h[o])))return s}else if(e===md){if(!l)return;for(c=0;c<t.length&&c<5;c++)if((f=t[c])&&null!=(s=a(f[l])))return s}else if(e===yd){if(!l)return;if(!(u=t[l])||k(u))return!1;for(c=0;c<u.length&&c<5;c++)if(null!=(s=a(u[c])))return s}else if(e===gd)for(c=0;c<t.length&&c<5;c++){var f=t[c],d=cn(f);if(!x(d))return!1;if(null!=(s=a(d[o])))return s}return!1}function Vr(t,e){if(e){var n=e.seiresIndex,i=e.seriesId,r=e.seriesName;return null!=n&&t.componentIndex!==n||null!=i&&t.id!==i||null!=r&&t.name!==r}}function jr(t,e){var n=t.color&&!t.colorLayer;p(e,function(e,i){"colorLayer"===i&&n||ud.hasClass(i)||("object"==typeof e?t[i]=t[i]?o(t[i],e,!1):r(e):null==t[i]&&(t[i]=e))})}function Hr(t){t=t,this.option={},this.option[Md]=1,this._componentsMap=z({series:[]}),this._seriesIndices,this._seriesIndicesMap,jr(t,this._theme.option),o(t,hd,!1),this.mergeOption(t)}function Wr(t,e){x(e)||(e=e?[e]:[]);var n={};return p(e,function(e){n[e]=(t.get(e)||[]).slice()}),n}function Gr(t,e,n){return e.type?e.type:n?n.subType:ud.determineSubType(t,e)}function Ur(t,e){t._seriesIndicesMap=z(t._seriesIndices=g(e,function(t){return t.componentIndex})||[])}function qr(t,e){return e.hasOwnProperty("subType")?m(t,function(t){return t.subType===e.subType}):t}function Xr(t){p(Cd,function(e){this[e]=y(t[e],t)},this)}function Yr(){this._coordinateSystems=[]}function Zr(t){this._api=t,this._timelineOptions=[],this._mediaList=[],this._mediaDefault,this._currentMediaIndices=[],this._optionBackup,this._newBaseOption}function Kr(t,e,n){var i,r,o=[],a=[],s=t.timeline;if(t.baseOption&&(r=t.baseOption),(s||t.options)&&(r=r||{},o=(t.options||[]).slice()),t.media){r=r||{};var l=t.media;Ad(l,function(t){t&&t.option&&(t.query?a.push(t):i||(i=t))})}return r||(r=t),r.timeline||(r.timeline=s),Ad([r].concat(o).concat(g(a,function(t){return t.option})),function(t){Ad(e,function(e){e(t,n)})}),{baseOption:r,timelineOptions:o,mediaDefault:i,mediaList:a}}function Jr(t,e,n){var i={width:e,height:n,aspectratio:e/n},r=!0;return p(t,function(t,e){var n=e.match(Pd);if(n&&n[1]&&n[2]){var o=n[1],a=n[2].toLowerCase();Qr(i[a],t,o)||(r=!1)}}),r}function Qr(t,e,n){return"min"===n?t>=e:"max"===n?t<=e:t===e}function to(t,e){return t.join(",")===e.join(",")}function eo(t,e){Ad(e=e||{},function(e,n){if(null!=e){var i=t[n];if(ud.hasClass(n)){e=ln(e);var r=fn(i=ln(i),e);t[n]=Dd(r,function(t){return t.option&&t.exist?Od(t.exist,t.option,!0):t.exist||t.option})}else t[n]=Od(i,e,!0)}})}function no(t){var e=t&&t.itemStyle;if(e)for(var n=0,i=Nd.length;n<i;n++){var r=Nd[n],a=e.normal,s=e.emphasis;a&&a[r]&&(t[r]=t[r]||{},t[r].normal?o(t[r].normal,a[r]):t[r].normal=a[r],a[r]=null),s&&s[r]&&(t[r]=t[r]||{},t[r].emphasis?o(t[r].emphasis,s[r]):t[r].emphasis=s[r],s[r]=null)}}function io(t,e,n){if(t&&t[e]&&(t[e].normal||t[e].emphasis)){var i=t[e].normal,r=t[e].emphasis;i&&(n?(t[e].normal=t[e].emphasis=null,l(t[e],i)):t[e]=i),r&&(t.emphasis=t.emphasis||{},t.emphasis[e]=r)}}function ro(t){io(t,"itemStyle"),io(t,"lineStyle"),io(t,"areaStyle"),io(t,"label"),io(t,"labelLine"),io(t,"upperLabel"),io(t,"edgeLabel")}function oo(t,e){var n=Ed(t)&&t[e],i=Ed(n)&&n.textStyle;if(i)for(var r=0,o=ah.length;r<o;r++){e=ah[r];i.hasOwnProperty(e)&&(n[e]=i[e])}}function ao(t){t&&(ro(t),oo(t,"label"),t.emphasis&&oo(t.emphasis,"label"))}function so(t){if(Ed(t)){no(t),ro(t),oo(t,"label"),oo(t,"upperLabel"),oo(t,"edgeLabel"),t.emphasis&&(oo(t.emphasis,"label"),oo(t.emphasis,"upperLabel"),oo(t.emphasis,"edgeLabel"));var e=t.markPoint;e&&(no(e),ao(e));var n=t.markLine;n&&(no(n),ao(n));var i=t.markArea;i&&ao(i);var r=t.data;if("graph"===t.type){r=r||t.nodes;var o=t.links||t.edges;if(o&&!k(o))for(s=0;s<o.length;s++)ao(o[s]);p(t.categories,function(t){ro(t)})}if(r&&!k(r))for(s=0;s<r.length;s++)ao(r[s]);if((e=t.markPoint)&&e.data)for(var a=e.data,s=0;s<a.length;s++)ao(a[s]);if((n=t.markLine)&&n.data){var l=n.data;for(s=0;s<l.length;s++)x(l[s])?(ao(l[s][0]),ao(l[s][1])):ao(l[s])}"gauge"===t.type?(oo(t,"axisLabel"),oo(t,"title"),oo(t,"detail")):"treemap"===t.type?(io(t.breadcrumb,"itemStyle"),p(t.levels,function(t){ro(t)})):"tree"===t.type&&ro(t.leaves)}}function lo(t){return x(t)?t:t?[t]:[]}function uo(t){return(x(t)?t[0]:t)||{}}function co(t,e){e=e.split(",");for(var n=t,i=0;i<e.length&&null!=(n=n&&n[e[i]]);i++);return n}function ho(t,e,n,i){e=e.split(",");for(var r,o=t,a=0;a<e.length-1;a++)null==o[r=e[a]]&&(o[r]={}),o=o[r];(i||null==o[e[a]])&&(o[e[a]]=n)}function fo(t){p(Bd,function(e){e[0]in t&&!(e[1]in t)&&(t[e[1]]=t[e[0]])})}function po(t){p(t,function(e,n){var i=[],r=[NaN,NaN],o=[e.stackResultDimension,e.stackedOverDimension],a=e.data,s=e.isStackedByIndex,l=a.map(o,function(o,l,u){var c,h,f=a.get(e.stackedDimension,u);if(isNaN(f))return r;s?h=a.getRawIndex(u):c=a.get(e.stackedByDimension,u);for(var d=NaN,p=n-1;p>=0;p--){var g=t[p];if(s||(h=g.data.rawIndexOf(g.stackedByDimension,c)),h>=0){var v=g.data.getByRawIndex(g.stackResultDimension,h);if(f>=0&&v>0||f<=0&&v<0){f+=v,d=v;break}}}return i[0]=f,i[1]=d,i});a.hostModel.setData(l),e.data=l})}function go(t,e){Ar.isInstance(t)||(t=Ar.seriesDataToSource(t)),this._source=t;var n=this._data=t.data,i=t.sourceFormat;i===xd&&(this._offset=0,this._dimSize=e,this._data=n),s(this,Vd[i===vd?i+"_"+t.seriesLayoutBy:i])}function vo(){return this._data.length}function mo(t){return this._data[t]}function yo(t){for(var e=0;e<t.length;e++)this._data.push(t[e])}function _o(t,e,n,i){return null!=n?t[n]:t}function xo(t,e,n,i){return wo(t[i],this._dimensionInfos[e])}function wo(t,e){var n=e&&e.type;if("ordinal"===n){var i=e&&e.ordinalMeta;return i?i.parseAndCollect(t):t}return"time"===n&&"number"!=typeof t&&null!=t&&"-"!==t&&(t=+cr(t)),null==t||""===t?NaN:+t}function bo(t,e,n){if(t){var i=t.getRawDataItem(e);if(null!=i){var r,o,a=t.getProvider().getSource().sourceFormat,s=t.getDimensionInfo(n);return s&&(r=s.name,o=s.index),jd[a](i,e,o,r)}}}function So(t,e,n){if(t){var i=t.getProvider().getSource().sourceFormat;if(i===gd||i===md){var r=t.getRawDataItem(e);return i!==gd||S(r)||(r=null),r?r[n]:void 0}}}function Mo(t){return new ko(t)}function ko(t){t=t||{},this._reset=t.reset,this._plan=t.plan,this._count=t.count,this._onDirty=t.onDirty,this._dirty=!0,this.context}function Co(t,e,n,i,r,o){qd.reset(n,i,r,o),t._callingProgress=e,t._callingProgress({start:n,end:i,count:i-n,next:qd.next},t.context)}function Io(t,e){var n,i;t._dueIndex=t._outputDueEnd=t._dueEnd=0,t._settedOutputEnd=null,!e&&t._reset&&((n=t._reset(t.context))&&n.progress&&(i=n.forceFirstProgress,n=n.progress),x(n)&&!n.length&&(n=null)),t._progress=n,t._modBy=t._modDataCount=null;var r=t._downstream;return r&&r.dirty(),i}function Ao(t){var e=t.name;pn(t)||(t.name=To(t)||e)}function To(t){var e=t.getRawData(),n=[];return p(e.mapDimension("seriesName",!0),function(t){var i=e.getDimensionInfo(t);i.displayName&&n.push(i.displayName)}),n.join(" ")}function Do(t){return t.model.getRawData().count()}function Oo(t){var e=t.model;return e.setData(e.getRawData().cloneShallow()),Po}function Po(t,e){t.end>e.outputData.count()&&e.model.getRawData().cloneShallow(e.outputData)}function Lo(t,e){p(t.CHANGABLE_METHODS,function(n){t.wrapMethod(n,_(Eo,e))})}function Eo(t){var e=No(t);e&&e.setOutputEnd(this.count())}function No(t){var e=(t.ecModel||{}).scheduler,n=e&&e.getPipeline(t.uid);if(n){var i=n.currentTask;if(i){var r=i.agentStubMap;r&&(i=r.get(t.uid))}return i}}function Ro(){this.group=new pc,this.uid=tr("viewChart"),this.renderTask=Mo({plan:$o,reset:Fo}),this.renderTask.context={view:this}}function Bo(t,e){if(t&&(t.trigger(e),"group"===t.type))for(var n=0;n<t.childCount();n++)Bo(t.childAt(n),e)}function zo(t,e,n){var i=vn(t,e);null!=i?p(ln(i),function(e){Bo(t.getItemGraphicEl(e),n)}):t.eachItemGraphicEl(function(t){Bo(t,n)})}function $o(t){return tp(t.model)}function Fo(t){var e=t.model,n=t.ecModel,i=t.api,r=t.payload,o=e.pipelineContext.progressiveRender,a=t.view,s=r&&Qd(r).updateMethod,l=o?"incrementalPrepareRender":s&&a[s]?s:"render";return"render"!==l&&a[l](e,n,i,r),np[l]}function Vo(t,e,n){function i(){c=(new Date).getTime(),h=null,t.apply(a,s||[])}var r,o,a,s,l,u=0,c=0,h=null;e=e||0;var f=function(){r=(new Date).getTime(),a=this,s=arguments;var t=l||e,f=l||n;l=null,o=r-(f?u:c)-t,clearTimeout(h),f?h=setTimeout(i,t):o>=0?i():h=setTimeout(i,-o),u=r};return f.clear=function(){h&&(clearTimeout(h),h=null)},f.debounceNextCall=function(t){l=t},f}function jo(t,e,n,i){this.ecInstance=t,this.api=e,this.unfinished;n=this._dataProcessorHandlers=n.slice(),i=this._visualHandlers=i.slice();this._allHandlers=n.concat(i),this._stageTaskMap=z()}function Ho(t,e,n,i,r){function o(t,e){return t.setDirty&&(!t.dirtyMap||t.dirtyMap.get(e.__pipeline.id))}var a;r=r||{},p(e,function(e,s){if(!r.visualType||r.visualType===e.visualType){var l=t._stageTaskMap.get(e.uid),u=l.seriesTaskMap,c=l.overallTask;if(c){var h,f=c.agentStubMap;f.each(function(t){o(r,t)&&(t.dirty(),h=!0)}),h&&c.dirty(),lp(c,i);var d=t.getPerformArgs(c,r.block);f.each(function(t){t.perform(d)}),a|=c.perform(d)}else u&&u.each(function(s,l){o(r,s)&&s.dirty();var u=t.getPerformArgs(s,r.block);u.skip=!e.performRawSeries&&n.isSeriesFiltered(s.context.model),lp(s,i),a|=s.perform(u)})}}),t.unfinished|=a}function Wo(t,e,n,i,r){function o(n){var o=n.uid,s=a.get(o)||a.set(o,Mo({plan:Zo,reset:Ko,count:Qo}));s.context={model:n,ecModel:i,api:r,useClearVisual:e.isVisual&&!e.isLayout,plan:e.plan,reset:e.reset,scheduler:t},ta(t,n,s)}var a=n.seriesTaskMap||(n.seriesTaskMap=z()),s=e.seriesType,l=e.getTargetSeries;e.createOnAllSeries?i.eachRawSeries(o):s?i.eachRawSeriesByType(s,o):l&&l(i,r).each(o);var u=t._pipelineMap;a.each(function(t,e){u.get(e)||(t.dispose(),a.removeKey(e))})}function Go(t,e,n,i,r){function o(e){var n=e.uid,i=s.get(n);i||(i=s.set(n,Mo({reset:qo,onDirty:Yo})),a.dirty()),i.context={model:e,overallProgress:c,modifyOutputEnd:h},i.agent=a,i.__block=c,ta(t,e,i)}var a=n.overallTask=n.overallTask||Mo({reset:Uo});a.context={ecModel:i,api:r,overallReset:e.overallReset,scheduler:t};var s=a.agentStubMap=a.agentStubMap||z(),l=e.seriesType,u=e.getTargetSeries,c=!0,h=e.modifyOutputEnd;l?i.eachRawSeriesByType(l,o):u?u(i,r).each(o):(c=!1,p(i.getSeries(),o));var f=t._pipelineMap;s.each(function(t,e){f.get(e)||(t.dispose(),a.dirty(),s.removeKey(e))})}function Uo(t){t.overallReset(t.ecModel,t.api,t.payload)}function qo(t,e){return t.overallProgress&&Xo}function Xo(){this.agent.dirty(),this.getDownstream().dirty()}function Yo(){this.agent&&this.agent.dirty()}function Zo(t){return t.plan&&t.plan(t.model,t.ecModel,t.api,t.payload)}function Ko(t){t.useClearVisual&&t.data.clearAllVisual();var e=t.resetDefines=ln(t.reset(t.model,t.ecModel,t.api,t.payload));return e.length>1?g(e,function(t,e){return Jo(e)}):up}function Jo(t){return function(e,n){var i=n.data,r=n.resetDefines[t];if(r&&r.dataEach)for(var o=e.start;o<e.end;o++)r.dataEach(i,o);else r&&r.progress&&r.progress(e,i)}}function Qo(t){return t.data.count()}function ta(t,e,n){var i=e.uid,r=t._pipelineMap.get(i);!r.head&&(r.head=n),r.tail&&r.tail.pipe(n),r.tail=n,n.__idxInPipeline=r.count++,n.__pipeline=r}function ea(t){cp=null;try{t(hp,fp)}catch(t){}return cp}function na(t,e){for(var n in e.prototype)t[n]=$}function ia(t){return function(e,n,i){e=e&&e.toLowerCase(),zu.prototype[t].call(this,e,n,i)}}function ra(){zu.call(this)}function oa(t,e,n){function i(t,e){return t.__prio-e.__prio}n=n||{},"string"==typeof e&&(e=$p[e]),this.id,this.group,this._dom=t;var o=this._zr=sn(t,{renderer:n.renderer||"canvas",devicePixelRatio:n.devicePixelRatio,width:n.width,height:n.height});this._throttledZrFlush=Vo(y(o.flush,o),17),(e=r(e))&&$d(e,!0),this._theme=e,this._chartsViews=[],this._chartsMap={},this._componentsViews=[],this._componentsMap={},this._coordSysMgr=new Yr;var a=this._api=Sa(this);Ut(zp,i),Ut(Np,i),this._scheduler=new jo(this,a,Np,zp),zu.call(this),this._messageCenter=new ra,this._initEvents(),this.resize=y(this.resize,this),this._pendingActions=[],o.animation.on("frame",this._onframe,this),da(o,this),N(this)}function aa(t,e,n){var i,r=this._model,o=this._coordSysMgr.getCoordinateSystems();e=yn(r,e);for(var a=0;a<o.length;a++){var s=o[a];if(s[t]&&null!=(i=s[t](r,e,n)))return i}}function sa(t){var e=t._model,n=t._scheduler;n.restorePipelines(e),n.prepareStageTasks(),pa(t,"component",e,n),pa(t,"chart",e,n),n.plan()}function la(t,e,n,i,r){function o(i){i&&i.__alive&&i[e]&&i[e](i.__model,a,t._api,n)}var a=t._model;if(i){var s={};s[i+"Id"]=n[i+"Id"],s[i+"Index"]=n[i+"Index"],s[i+"Name"]=n[i+"Name"];var l={mainType:i,query:s};r&&(l.subType=r);var u=n.excludeSeriesId;null!=u&&(u=z(ln(u))),a&&a.eachComponent(l,function(e){u&&null!=u.get(e.id)||o(t["series"===i?"_chartsMap":"_componentsMap"][e.__viewId])},t)}else yp(t._componentsViews.concat(t._chartsViews),o)}function ua(t,e){var n=t._chartsMap,i=t._scheduler;e.eachSeries(function(t){i.updateStreamModes(t,n[t.__viewId])})}function ca(t,e){var n=t.type,i=t.escapeConnect,r=Lp[n],o=r.actionInfo,a=(o.update||"update").split(":"),u=a.pop();a=null!=a[0]&&wp(a[0]),this[Ip]=!0;var c=[t],h=!1;t.batch&&(h=!0,c=g(t.batch,function(e){return e=l(s({},e),t),e.batch=null,e}));var f,d=[],p="highlight"===n||"downplay"===n;yp(c,function(t){f=r.action(t,this._model,this._api),(f=f||s({},t)).type=o.event||f.type,d.push(f),p?la(this,u,t,"series"):a&&la(this,u,t,a.main,a.sub)},this),"none"===u||p||a||(this[Ap]?(sa(this),Op.update.call(this,t),this[Ap]=!1):Op[u].call(this,t)),f=h?{type:o.event||n,escapeConnect:i,batch:d}:d[0],this[Ip]=!1,!e&&this._messageCenter.trigger(f.type,f)}function ha(t){for(var e=this._pendingActions;e.length;){var n=e.shift();ca.call(this,n,t)}}function fa(t){!t&&this.trigger("updated")}function da(t,e){t.on("rendered",function(){e.trigger("rendered"),!t.animation.isFinished()||e[Ap]||e._scheduler.unfinished||e._pendingActions.length||e.trigger("finished")})}function pa(t,e,n,i){function r(t){var e="_ec_"+t.id+"_"+t.type,r=s[e];if(!r){var c=wp(t.type);(r=new(o?Zd.getClass(c.main,c.sub):Ro.getClass(c.sub))).init(n,u),s[e]=r,a.push(r),l.add(r.group)}t.__viewId=r.__id=e,r.__alive=!0,r.__model=t,r.group.__ecComponentInfo={mainType:t.mainType,index:t.componentIndex},!o&&i.prepareView(r,t,n,u)}for(var o="component"===e,a=o?t._componentsViews:t._chartsViews,s=o?t._componentsMap:t._chartsMap,l=t._zr,u=t._api,c=0;c<a.length;c++)a[c].__alive=!1;for(o?n.eachComponent(function(t,e){"series"!==t&&r(e)}):n.eachSeries(r),c=0;c<a.length;){var h=a[c];h.__alive?c++:(!o&&h.renderTask.dispose(),l.remove(h.group),h.dispose(n,u),a.splice(c,1),delete s[h.__id],h.__id=h.group.__ecComponentInfo=null)}}function ga(t){t.clearColorPalette(),t.eachSeries(function(t){t.clearColorPalette()})}function va(t,e,n,i){ma(t,e,n,i),yp(t._chartsViews,function(t){t.__alive=!1}),ya(t,e,n,i),yp(t._chartsViews,function(t){t.__alive||t.remove(e,n)})}function ma(t,e,n,i,r){yp(r||t._componentsViews,function(t){var r=t.__model;t.render(r,e,n,i),ba(r,t)})}function ya(t,e,n,i,r){var o,a=t._scheduler;e.eachSeries(function(e){var n=t._chartsMap[e.__viewId];n.__alive=!0;var s=n.renderTask;a.updatePayload(s,i),r&&r.get(e.uid)&&s.dirty(),o|=s.perform(a.getPerformArgs(s)),n.group.silent=!!e.get("silent"),ba(e,n),wa(e,n)}),a.unfinished|=o,xa(t._zr,e),op(t._zr.dom,e)}function _a(t,e){yp(Bp,function(n){n(t,e)})}function xa(t,e){var n=t.storage,i=0;n.traverse(function(t){t.isGroup||i++}),i>e.get("hoverLayerThreshold")&&!xu.node&&n.traverse(function(t){t.isGroup||(t.useHoverLayer=!0)})}function wa(t,e){var n=t.get("blendMode")||null;e.group.traverse(function(t){t.isGroup||t.style.blend!==n&&t.setStyle("blend",n),t.eachPendingDisplayable&&t.eachPendingDisplayable(function(t){t.setStyle("blend",n)})})}function ba(t,e){var n=t.get("z"),i=t.get("zlevel");e.group.traverse(function(t){"group"!==t.type&&(null!=n&&(t.z=n),null!=i&&(t.zlevel=i))})}function Sa(t){var e=t._coordSysMgr;return s(new Xr(t),{getCoordinateSystems:y(e.getCoordinateSystems,e),getComponentByElement:function(e){for(;e;){var n=e.__ecComponentInfo;if(null!=n)return t._model.getComponent(n.mainType,n.index);e=e.parent}}})}function Ma(t){function e(t,e){for(var i=0;i<t.length;i++)t[i][n]=e}var n="__connectUpdateStatus";yp(Ep,function(i,r){t._messageCenter.on(r,function(i){if(jp[t.group]&&0!==t[n]){if(i&&i.escapeConnect)return;var r=t.makeActionFromEvent(i),o=[];yp(Vp,function(e){e!==t&&e.group===t.group&&o.push(e)}),e(o,0),yp(o,function(t){1!==t[n]&&t.dispatchAction(r)}),e(o,2)}})})}function ka(t){jp[t]=!1}function Ca(t){return Vp[wn(t,Gp)]}function Ia(t,e){$p[t]=e}function Aa(t){Rp.push(t)}function Ta(t,e){La(Np,t,e,Sp)}function Da(t,e,n){"function"==typeof e&&(n=e,e="");var i=xp(t)?t.type:[t,t={event:e}][0];t.event=(t.event||i).toLowerCase(),e=t.event,mp(Tp.test(i)&&Tp.test(e)),Lp[i]||(Lp[i]={action:n,actionInfo:t}),Ep[e]=i}function Oa(t,e){La(zp,t,e,Mp,"layout")}function Pa(t,e){La(zp,t,e,kp,"visual")}function La(t,e,n,i,r){(_p(e)||xp(e))&&(n=e,e=i);var o=jo.wrapStageHandler(n,r);return o.__prio=e,o.__raw=n,t.push(o),o}function Ea(t,e){Fp[t]=e}function Na(t){return Zd.extend(t)}function Ra(t){return Yd.extend(t)}function Ba(t){return Ro.extend(t)}function za(t){return t}function $a(t,e,n,i,r){this._old=t,this._new=e,this._oldKeyGetter=n||za,this._newKeyGetter=i||za,this.context=r}function Fa(t,e,n,i,r){for(var o=0;o<t.length;o++){var a="_ec_"+r[i](t[o],o),s=e[a];null==s?(n.push(a),e[a]=o):(s.length||(e[a]=s=[s]),s.push(o))}}function Va(t){var e={},n=e.encode={},i=z(),r=[],o=[];p(t.dimensions,function(e){var a=t.getDimensionInfo(e),s=a.coordDim;if(s){var l=n[s];n.hasOwnProperty(s)||(l=n[s]=[]),l[a.coordDimIndex]=e,a.isExtraCoord||(i.set(s,1),Ha(a.type)&&(r[0]=e)),a.defaultTooltip&&o.push(e)}Yp.each(function(t,e){var i=n[e];n.hasOwnProperty(e)||(i=n[e]=[]);var r=a.otherDims[e];null!=r&&!1!==r&&(i[r]=a.name)})});var a=[],s={};i.each(function(t,e){var i=n[e];s[e]=i[0],a=a.concat(i)}),e.dataDimsOnCoord=a,e.encodeFirstDimNotExtra=s;var l=n.label;l&&l.length&&(r=l.slice());var u=n.tooltip;return u&&u.length?o=u.slice():o.length||(o=r.slice()),n.defaultedLabel=r,n.defaultedTooltip=o,e}function ja(t){return"category"===t?"ordinal":"time"===t?"time":"float"}function Ha(t){return!("ordinal"===t||"time"===t)}function Wa(t){return t._rawCount>65535?Qp:tg}function Ga(t){var e=t.constructor;return e===Array?t.slice():new e(t)}function Ua(t,e){p(eg.concat(e.__wrappedMethods||[]),function(n){e.hasOwnProperty(n)&&(t[n]=e[n])}),t.__wrappedMethods=e.__wrappedMethods,p(ng,function(n){t[n]=r(e[n])}),t._calculationInfo=s(e._calculationInfo)}function qa(t){var e=t._invertedIndicesMap;p(e,function(n,i){var r=t._dimensionInfos[i].ordinalMeta;if(r){for(n=e[i]=new Qp(r.categories.length),o=0;o<n.length;o++)n[o]=NaN;for(var o=0;o<t._count;o++)n[t.get(i,o)]=o}})}function Xa(t,e,n){var i;if(null!=e){var r=t._chunkSize,o=Math.floor(n/r),a=n%r,s=t.dimensions[e],l=t._storage[s][o];if(l){i=l[a];var u=t._dimensionInfos[s].ordinalMeta;u&&u.categories.length&&(i=u.categories[i])}}return i}function Ya(t){return t}function Za(t){return t<this._count&&t>=0?this._indices[t]:-1}function Ka(t,e){var n=t._idList[e];return null==n&&(n=Xa(t,t._idDimIdx,e)),null==n&&(n=Kp+e),n}function Ja(t){return x(t)||(t=[t]),t}function Qa(t,e){var n=t.dimensions,i=new ig(g(n,t.getDimensionInfo,t),t.hostModel);Ua(i,t);for(var r=i._storage={},o=t._storage,a=0;a<n.length;a++){var s=n[a];o[s]&&(c(e,s)>=0?(r[s]=ts(o[s]),i._rawExtent[s]=es(),i._extent[s]=null):r[s]=o[s])}return i}function ts(t){for(var e=new Array(t.length),n=0;n<t.length;n++)e[n]=Ga(t[n]);return e}function es(){return[1/0,-1/0]}function ns(t,e,n){function i(t,e,n){null!=Yp.get(e)?t.otherDims[e]=n:(t.coordDim=e,t.coordDimIndex=n,c.set(e,!0))}Ar.isInstance(e)||(e=Ar.seriesDataToSource(e)),n=n||{},t=(t||[]).slice();for(var o=(n.dimsDef||[]).slice(),a=z(n.encodeDef),u=z(),c=z(),h=[],f=is(e,t,o,n.dimCount),d=0;d<f;d++){var g=o[d]=s({},S(o[d])?o[d]:{name:o[d]}),v=g.name,m=h[d]={otherDims:{}};null!=v&&null==u.get(v)&&(m.name=m.displayName=v,u.set(v,d)),null!=g.type&&(m.type=g.type),null!=g.displayName&&(m.displayName=g.displayName)}a.each(function(t,e){t=ln(t).slice();var n=a.set(e,[]);p(t,function(t,r){b(t)&&(t=u.get(t)),null!=t&&t<f&&(n[r]=t,i(h[t],e,r))})});var y=0;p(t,function(t,e){var n,o,s;if(b(t))n=t,t={};else{n=t.name;var u=t.ordinalMeta;t.ordinalMeta=null,(t=r(t)).ordinalMeta=u,o=t.dimsDef,s=t.otherDims,t.name=t.coordDim=t.coordDimIndex=t.dimsDef=t.otherDims=null}var c=ln(a.get(n));if(!c.length)for(var f=0;f<(o&&o.length||1);f++){for(;y<h.length&&null!=h[y].coordDim;)y++;y<h.length&&c.push(y++)}p(c,function(e,r){var a=h[e];if(i(l(a,t),n,r),null==a.name&&o){var u=o[r];!S(u)&&(u={name:u}),a.name=a.displayName=u.name,a.defaultTooltip=u.defaultTooltip}s&&l(a.otherDims,s)})});var _=n.generateCoord,x=n.generateCoordCount,w=null!=x;x=_?x||1:0;for(var M=_||"value",k=0;k<f;k++)null==(m=h[k]=h[k]||{}).coordDim&&(m.coordDim=rs(M,c,w),m.coordDimIndex=0,(!_||x<=0)&&(m.isExtraCoord=!0),x--),null==m.name&&(m.name=rs(m.coordDim,u)),null==m.type&&$r(e,k,m.name)&&(m.type="ordinal");return h}function is(t,e,n,i){var r=Math.max(t.dimensionsDetectCount||1,e.length,n.length,i||0);return p(e,function(t){var e=t.dimsDef;e&&(r=Math.max(r,e.length))}),r}function rs(t,e,n){if(n||null!=e.get(t)){for(var i=0;null!=e.get(t+i);)i++;t+=i}return e.set(t,!0),t}function os(t,e,n){var i,r,o,a,s=(n=n||{}).byIndex,l=n.stackedCoordDimension,u=!(!t||!t.get("stack"));if(p(e,function(t,n){b(t)&&(e[n]=t={name:t}),u&&!t.isExtraCoord&&(s||i||!t.ordinalMeta||(i=t),r||"ordinal"===t.type||"time"===t.type||l&&l!==t.coordDim||(r=t))}),!r||s||i||(s=!0),r){o="__\0ecstackresult",a="__\0ecstackedover",i&&(i.createInvertedIndices=!0);var c=r.coordDim,h=r.type,f=0;p(e,function(t){t.coordDim===c&&f++}),e.push({name:o,coordDim:c,coordDimIndex:f,type:h,isExtraCoord:!0,isCalculationCoord:!0}),f++,e.push({name:a,coordDim:a,coordDimIndex:f,type:h,isExtraCoord:!0,isCalculationCoord:!0})}return{stackedDimension:r&&r.name,stackedByDimension:i&&i.name,isStackedByIndex:s,stackedOverDimension:a,stackResultDimension:o}}function as(t,e){return!!e&&e===t.getCalculationInfo("stackedDimension")}function ss(t,e){return as(t,e)?t.getCalculationInfo("stackResultDimension"):e}function ls(t,e,n){n=n||{},Ar.isInstance(t)||(t=Ar.seriesDataToSource(t));var i,r=e.get("coordinateSystem"),o=Yr.get(r),a=Cr(e);a&&(i=g(a.coordSysDims,function(t){var e={name:t},n=a.axisMap.get(t);if(n){var i=n.get("type");e.type=ja(i)}return e})),i||(i=o&&(o.getDimensionsInfo?o.getDimensionsInfo():o.dimensions.slice())||["x","y"]);var s,l,u=ag(t,{coordDimensions:i,generateCoord:n.generateCoord});a&&p(u,function(t,e){var n=t.coordDim,i=a.categoryAxisMap.get(n);i&&(null==s&&(s=e),t.ordinalMeta=i.getOrdinalMeta()),null!=t.otherDims.itemName&&(l=!0)}),l||null==s||(u[s].otherDims.itemName=0);var c=os(e,u),h=new ig(u,e);h.setCalculationInfo(c);var f=null!=s&&us(t)?function(t,e,n,i){return i===s?n:this.defaultDimValueGetter(t,e,n,i)}:null;return h.hasItemOption=!1,h.initData(t,null,f),h}function us(t){if(t.sourceFormat===gd){var e=cs(t.data||[]);return null!=e&&!x(cn(e))}}function cs(t){for(var e=0;e<t.length&&null==t[e];)e++;return t[e]}function hs(t,e){if("image"!==this.type){var n=this.style,i=this.shape;i&&"line"===i.symbolType?n.stroke=t:this.__isEmptyBrush?(n.stroke=t,n.fill=e||"#fff"):(n.fill&&(n.fill=t),n.stroke&&(n.stroke=t)),this.dirty(!1)}}function fs(t,e,n,i,r,o,a){var s,l=0===t.indexOf("empty");return l&&(t=t.substr(5,1).toLowerCase()+t.substr(6)),s=0===t.indexOf("image://")?_i(t.slice(8),new zt(e,n,i,r),a?"center":"cover"):0===t.indexOf("path://")?yi(t.slice(7),{},new zt(e,n,i,r),a?"center":"cover"):new dg({shape:{symbolType:t,x:e,y:n,width:i,height:r}}),s.__isEmptyBrush=l,s.setColor=hs,s.setColor(o),s}function ds(t,e){var n=t.mapDimension("defaultedLabel",!0),i=n.length;if(1===i)return bo(t,e,n[0]);if(i){for(var r=[],o=0;o<n.length;o++){var a=bo(t,e,n[o]);r.push(a)}return r.join(" ")}}function ps(t,e,n){pc.call(this),this.updateData(t,e,n)}function gs(t){return[t[0]/2,t[1]/2]}function vs(t,e){this.parent.drift(t,e)}function ms(t){this.group=new pc,this._symbolCtor=t||ps}function ys(t,e,n,i){return e&&!isNaN(e[0])&&!isNaN(e[1])&&!(i.isIgnore&&i.isIgnore(n))&&!(i.clipShape&&!i.clipShape.contain(e[0],e[1]))&&"none"!==t.getItemVisual(n,"symbol")}function _s(t){return null==t||S(t)||(t={isIgnore:t}),t||{}}function xs(t){var e=t.hostModel;return{itemStyle:e.getModel("itemStyle").getItemStyle(["color"]),hoverItemStyle:e.getModel("emphasis.itemStyle").getItemStyle(),symbolRotate:e.get("symbolRotate"),symbolOffset:e.get("symbolOffset"),hoverAnimation:e.get("hoverAnimation"),labelModel:e.getModel("label"),hoverLabelModel:e.getModel("emphasis.label"),cursorStyle:e.get("cursor")}}function ws(t,e,n){var i,r=t.getBaseAxis(),o=t.getOtherAxis(r),a=bs(o,n),s=r.dim,l=o.dim,u=e.mapDimension(l),c=e.mapDimension(s),h="x"===l||"radius"===l?1:0,f=g(t.dimensions,function(t){return e.mapDimension(t)}),d=e.getCalculationInfo("stackResultDimension");return(i|=as(e,f[0]))&&(f[0]=d),(i|=as(e,f[1]))&&(f[1]=d),{dataDimsForPoint:f,valueStart:a,valueAxisDim:l,baseAxisDim:s,stacked:!!i,valueDim:u,baseDim:c,baseDataOffset:h,stackedOverDimension:e.getCalculationInfo("stackedOverDimension")}}function bs(t,e){var n=0,i=t.scale.getExtent();return"start"===e?n=i[0]:"end"===e?n=i[1]:i[0]>0?n=i[0]:i[1]<0&&(n=i[1]),n}function Ss(t,e,n,i){var r=NaN;t.stacked&&(r=n.get(n.getCalculationInfo("stackedOverDimension"),i)),isNaN(r)&&(r=t.valueStart);var o=t.baseDataOffset,a=[];return a[o]=n.get(t.baseDim,i),a[1-o]=r,e.dataToPoint(a)}function Ms(t,e){var n=[];return e.diff(t).add(function(t){n.push({cmd:"+",idx:t})}).update(function(t,e){n.push({cmd:"=",idx:e,idx1:t})}).remove(function(t){n.push({cmd:"-",idx:t})}).execute(),n}function ks(t){return isNaN(t[0])||isNaN(t[1])}function Cs(t,e,n,i,r,o,a,s,l,u,c){return"none"!==u&&u?Is.apply(this,arguments):As.apply(this,arguments)}function Is(t,e,n,i,r,o,a,s,l,u,c){for(var h=0,f=n,d=0;d<i;d++){var p=e[f];if(f>=r||f<0)break;if(ks(p)){if(c){f+=o;continue}break}if(f===n)t[o>0?"moveTo":"lineTo"](p[0],p[1]);else if(l>0){var g=e[h],v="y"===u?1:0,m=(p[v]-g[v])*l;kg(Ig,g),Ig[v]=g[v]+m,kg(Ag,p),Ag[v]=p[v]-m,t.bezierCurveTo(Ig[0],Ig[1],Ag[0],Ag[1],p[0],p[1])}else t.lineTo(p[0],p[1]);h=f,f+=o}return d}function As(t,e,n,i,r,o,a,s,l,u,c){for(var h=0,f=n,d=0;d<i;d++){var p=e[f];if(f>=r||f<0)break;if(ks(p)){if(c){f+=o;continue}break}if(f===n)t[o>0?"moveTo":"lineTo"](p[0],p[1]),kg(Ig,p);else if(l>0){var g=f+o,v=e[g];if(c)for(;v&&ks(e[g]);)v=e[g+=o];var m=.5,y=e[h];if(!(v=e[g])||ks(v))kg(Ag,p);else{var _,x;if(ks(v)&&!c&&(v=p),H(Cg,v,y),"x"===u||"y"===u){var w="x"===u?0:1;_=Math.abs(p[w]-y[w]),x=Math.abs(p[w]-v[w])}else _=Nu(p,y),x=Nu(p,v);Mg(Ag,p,Cg,-l*(1-(m=x/(x+_))))}bg(Ig,Ig,s),Sg(Ig,Ig,a),bg(Ag,Ag,s),Sg(Ag,Ag,a),t.bezierCurveTo(Ig[0],Ig[1],Ag[0],Ag[1],p[0],p[1]),Mg(Ig,p,Cg,l*m)}else t.lineTo(p[0],p[1]);h=f,f+=o}return d}function Ts(t,e){var n=[1/0,1/0],i=[-1/0,-1/0];if(e)for(var r=0;r<t.length;r++){var o=t[r];o[0]<n[0]&&(n[0]=o[0]),o[1]<n[1]&&(n[1]=o[1]),o[0]>i[0]&&(i[0]=o[0]),o[1]>i[1]&&(i[1]=o[1])}return{min:e?n:i,max:e?i:n}}function Ds(t,e){if(t.length===e.length){for(var n=0;n<t.length;n++){var i=t[n],r=e[n];if(i[0]!==r[0]||i[1]!==r[1])return}return!0}}function Os(t){return"number"==typeof t?t:t?.5:0}function Ps(t){var e=t.getGlobalExtent();if(t.onBand){var n=t.getBandWidth()/2-1,i=e[1]>e[0]?1:-1;e[0]+=i*n,e[1]-=i*n}return e}function Ls(t,e,n){if(!n.valueDim)return[];for(var i=[],r=0,o=e.count();r<o;r++)i.push(Ss(n,t,e,r));return i}function Es(t,e,n,i){var r=Ps(t.getAxis("x")),o=Ps(t.getAxis("y")),a=t.getBaseAxis().isHorizontal(),s=Math.min(r[0],r[1]),l=Math.min(o[0],o[1]),u=Math.max(r[0],r[1])-s,c=Math.max(o[0],o[1])-l;if(n)s-=.5,u+=.5,l-=.5,c+=.5;else{var h=i.get("lineStyle.width")||2,f=i.get("clipOverflow")?h/2:Math.max(u,c);a?(l-=f,c+=2*f):(s-=f,u+=2*f)}var d=new Af({shape:{x:s,y:l,width:u,height:c}});return e&&(d.shape[a?"width":"height"]=0,Xi(d,{shape:{width:u,height:c}},i)),d}function Ns(t,e,n,i){var r=t.getAngleAxis(),o=t.getRadiusAxis().getExtent().slice();o[0]>o[1]&&o.reverse();var a=r.getExtent(),s=Math.PI/180;n&&(o[0]-=.5,o[1]+=.5);var l=new bf({shape:{cx:rr(t.cx,1),cy:rr(t.cy,1),r0:rr(o[0],1),r:rr(o[1],1),startAngle:-a[0]*s,endAngle:-a[1]*s,clockwise:r.inverse}});return e&&(l.shape.endAngle=-a[0]*s,Xi(l,{shape:{endAngle:-a[1]*s}},i)),l}function Rs(t,e,n,i){return"polar"===t.type?Ns(t,e,n,i):Es(t,e,n,i)}function Bs(t,e,n){for(var i=e.getBaseAxis(),r="x"===i.dim||"radius"===i.dim?0:1,o=[],a=0;a<t.length-1;a++){var s=t[a+1],l=t[a];o.push(l);var u=[];switch(n){case"end":u[r]=s[r],u[1-r]=l[1-r],o.push(u);break;case"middle":var c=(l[r]+s[r])/2,h=[];u[r]=h[r]=c,u[1-r]=l[1-r],h[1-r]=s[1-r],o.push(u),o.push(h);break;default:u[r]=l[r],u[1-r]=s[1-r],o.push(u)}}return t[a]&&o.push(t[a]),o}function zs(t,e){var n=t.getVisual("visualMeta");if(n&&n.length&&t.count()&&"cartesian2d"===e.type){for(var i,r,o=n.length-1;o>=0;o--){var a=n[o].dimension,s=t.dimensions[a],l=t.getDimensionInfo(s);if("x"===(i=l&&l.coordDim)||"y"===i){r=n[o];break}}if(r){var u=e.getAxis(i),c=g(r.stops,function(t){return{coord:u.toGlobalCoord(u.dataToCoord(t.value)),color:t.color}}),h=c.length,f=r.outerColors.slice();h&&c[0].coord>c[h-1].coord&&(c.reverse(),f.reverse());var d=c[0].coord-10,v=c[h-1].coord+10,m=v-d;if(m<.001)return"transparent";p(c,function(t){t.offset=(t.coord-d)/m}),c.push({offset:h?c[h-1].offset:.5,color:f[1]||"transparent"}),c.unshift({offset:h?c[0].offset:.5,color:f[0]||"transparent"});var y=new Nf(0,0,0,0,c,!0);return y[i]=d,y[i+"2"]=v,y}}}function $s(t,e,n){var i=t.get("showAllSymbol"),r="auto"===i;if(!i||r){var o=n.getAxesByScale("ordinal")[0];if(o&&(!r||!Fs(o,e))){var a=e.mapDimension(o.dim),s={};return p(o.getViewLabels(),function(t){s[t.tickValue]=1}),function(t){return!s.hasOwnProperty(e.get(a,t))}}}}function Fs(t,e){var n=t.getExtent(),i=Math.abs(n[1]-n[0])/t.scale.count();isNaN(i)&&(i=0);for(var r=e.count(),o=Math.max(1,Math.round(r/5)),a=0;a<r;a+=o)if(1.5*ps.getSymbolSize(e,a)[t.isHorizontal()?1:0]>i)return!1;return!0}function Vs(t){this._setting=t||{},this._extent=[1/0,-1/0],this._interval=0,this.init&&this.init.apply(this,arguments)}function js(t){this.categories=t.categories||[],this._needCollect=t.needCollect,this._deduplication=t.deduplication,this._map}function Hs(t){return t._map||(t._map=z(t.categories))}function Ws(t){return S(t)&&null!=t.value?t.value:t+""}function Gs(t,e,n,i){var r={},o=t[1]-t[0],a=r.interval=dr(o/e,!0);null!=n&&a<n&&(a=r.interval=n),null!=i&&a>i&&(a=r.interval=i);var s=r.intervalPrecision=Us(a);return Xs(r.niceTickExtent=[Rg(Math.ceil(t[0]/a)*a,s),Rg(Math.floor(t[1]/a)*a,s)],t),r}function Us(t){return or(t)+2}function qs(t,e,n){t[e]=Math.max(Math.min(t[e],n[1]),n[0])}function Xs(t,e){!isFinite(t[0])&&(t[0]=e[0]),!isFinite(t[1])&&(t[1]=e[1]),qs(t,0,e),qs(t,1,e),t[0]>t[1]&&(t[0]=t[1])}function Ys(t,e,n,i){var r=[];if(!t)return r;e[0]<n[0]&&r.push(e[0]);for(var o=n[0];o<=n[1]&&(r.push(o),(o=Rg(o+t,i))!==r[r.length-1]);)if(r.length>1e4)return[];return e[1]>(r.length?r[r.length-1]:n[1])&&r.push(e[1]),r}function Zs(t){return t.get("stack")||$g+t.seriesIndex}function Ks(t){return t.dim+t.index}function Js(t,e){var n=[];return e.eachSeriesByType(t,function(t){nl(t)&&!il(t)&&n.push(t)}),n}function Qs(t){var e=[];return p(t,function(t){var n=t.getData(),i=t.coordinateSystem.getBaseAxis(),r=i.getExtent(),o="category"===i.type?i.getBandWidth():Math.abs(r[1]-r[0])/n.count(),a=ir(t.get("barWidth"),o),s=ir(t.get("barMaxWidth"),o),l=t.get("barGap"),u=t.get("barCategoryGap");e.push({bandWidth:o,barWidth:a,barMaxWidth:s,barGap:l,barCategoryGap:u,axisKey:Ks(i),stackId:Zs(t)})}),tl(e)}function tl(t){var e={};p(t,function(t,n){var i=t.axisKey,r=t.bandWidth,o=e[i]||{bandWidth:r,remainedWidth:r,autoWidthCount:0,categoryGap:"20%",gap:"30%",stacks:{}},a=o.stacks;e[i]=o;var s=t.stackId;a[s]||o.autoWidthCount++,a[s]=a[s]||{width:0,maxWidth:0};var l=t.barWidth;l&&!a[s].width&&(a[s].width=l,l=Math.min(o.remainedWidth,l),o.remainedWidth-=l);var u=t.barMaxWidth;u&&(a[s].maxWidth=u);var c=t.barGap;null!=c&&(o.gap=c);var h=t.barCategoryGap;null!=h&&(o.categoryGap=h)});var n={};return p(e,function(t,e){n[e]={};var i=t.stacks,r=t.bandWidth,o=ir(t.categoryGap,r),a=ir(t.gap,1),s=t.remainedWidth,l=t.autoWidthCount,u=(s-o)/(l+(l-1)*a);u=Math.max(u,0),p(i,function(t,e){var n=t.maxWidth;n&&n<u&&(n=Math.min(n,s),t.width&&(n=Math.min(n,t.width)),s-=n,t.width=n,l--)}),u=(s-o)/(l+(l-1)*a),u=Math.max(u,0);var c,h=0;p(i,function(t,e){t.width||(t.width=u),c=t,h+=t.width*(1+a)}),c&&(h-=c.width*a);var f=-h/2;p(i,function(t,i){n[e][i]=n[e][i]||{offset:f,width:t.width},f+=t.width*(1+a)})}),n}function el(t,e,n){if(t&&e){var i=t[Ks(e)];return null!=i&&null!=n&&(i=i[Zs(n)]),i}}function nl(t){return t.coordinateSystem&&"cartesian2d"===t.coordinateSystem.type}function il(t){return t.pipelineContext&&t.pipelineContext.large}function rl(t,e,n){return c(t.getAxesOnZeroOf(),e)>=0||n?e.toGlobalCoord(e.dataToCoord(0)):e.getGlobalExtent()[0]}function ol(t,e){return Kg(t,Zg(e))}function al(t,e){var n,i,r,o=t.type,a=e.getMin(),s=e.getMax(),l=null!=a,u=null!=s,c=t.getExtent();"ordinal"===o?n=e.getCategories().length:(x(i=e.get("boundaryGap"))||(i=[i||0,i||0]),"boolean"==typeof i[0]&&(i=[0,0]),i[0]=ir(i[0],1),i[1]=ir(i[1],1),r=c[1]-c[0]||Math.abs(c[0])),null==a&&(a="ordinal"===o?n?0:NaN:c[0]-i[0]*r),null==s&&(s="ordinal"===o?n?n-1:NaN:c[1]+i[1]*r),"dataMin"===a?a=c[0]:"function"==typeof a&&(a=a({min:c[0],max:c[1]})),"dataMax"===s?s=c[1]:"function"==typeof s&&(s=s({min:c[0],max:c[1]})),(null==a||!isFinite(a))&&(a=NaN),(null==s||!isFinite(s))&&(s=NaN),t.setBlank(I(a)||I(s)||"ordinal"===o&&!t.getOrdinalMeta().categories.length),e.getNeedCrossZero()&&(a>0&&s>0&&!l&&(a=0),a<0&&s<0&&!u&&(s=0));var h=e.ecModel;if(h&&"time"===o){var f,d=Js("bar",h);if(p(d,function(t){f|=t.getBaseAxis()===e.axis}),f){var g=Qs(d),v=sl(a,s,e,g);a=v.min,s=v.max}}return[a,s]}function sl(t,e,n,i){var r=n.axis.getExtent(),o=r[1]-r[0],a=el(i,n.axis);if(void 0===a)return{min:t,max:e};var s=1/0;p(a,function(t){s=Math.min(t.offset,s)});var l=-1/0;p(a,function(t){l=Math.max(t.offset+t.width,l)}),s=Math.abs(s),l=Math.abs(l);var u=s+l,c=e-t,h=c/(1-(s+l)/o)-c;return e+=h*(l/u),t-=h*(s/u),{min:t,max:e}}function ll(t,e){var n=al(t,e),i=null!=e.getMin(),r=null!=e.getMax(),o=e.get("splitNumber");"log"===t.type&&(t.base=e.get("logBase"));var a=t.type;t.setExtent(n[0],n[1]),t.niceExtent({splitNumber:o,fixMin:i,fixMax:r,minInterval:"interval"===a||"time"===a?e.get("minInterval"):null,maxInterval:"interval"===a||"time"===a?e.get("maxInterval"):null});var s=e.get("interval");null!=s&&t.setInterval&&t.setInterval(s)}function ul(t,e){if(e=e||t.get("type"))switch(e){case"category":return new Ng(t.getOrdinalMeta?t.getOrdinalMeta():t.getCategories(),[1/0,-1/0]);case"value":return new zg;default:return(Vs.getClass(e)||zg).create(t)}}function cl(t){var e=t.scale.getExtent(),n=e[0],i=e[1];return!(n>0&&i>0||n<0&&i<0)}function hl(t){var e=t.getLabelModel().get("formatter"),n="category"===t.type?t.scale.getExtent()[0]:null;return"string"==typeof e?e=function(t){return function(e){return t.replace("{value}",null!=e?e:"")}}(e):"function"==typeof e?function(i,r){return null!=n&&(r=i-n),e(fl(t,i),r)}:function(e){return t.scale.getLabel(e)}}function fl(t,e){return"category"===t.type?t.scale.getLabel(e):e}function dl(t){var e=t.model,n=t.scale;if(e.get("axisLabel.show")&&!n.isBlank()){var i,r,o="category"===t.type,a=n.getExtent();r=o?n.count():(i=n.getTicks()).length;var s,l=t.getLabelModel(),u=hl(t),c=1;r>40&&(c=Math.ceil(r/40));for(var h=0;h<r;h+=c){var f=u(i?i[h]:a[0]+h),d=pl(l.getTextRect(f),l.get("rotate")||0);s?s.union(d):s=d}return s}}function pl(t,e){var n=e*Math.PI/180,i=t.plain(),r=i.width,o=i.height,a=r*Math.cos(n)+o*Math.sin(n),s=r*Math.sin(n)+o*Math.cos(n);return new zt(i.x,i.y,a,s)}function gl(t){return this._axes[t]}function vl(t){iv.call(this,t)}function ml(t){return"category"===t.type?_l(t):bl(t)}function yl(t,e){return"category"===t.type?wl(t,e):{ticks:t.scale.getTicks()}}function _l(t){var e=t.getLabelModel(),n=xl(t,e);return!e.get("show")||t.scale.isBlank()?{labels:[],labelCategoryInterval:n.labelCategoryInterval}:n}function xl(t,e){var n,i,r=Sl(t,"labels"),o=Ol(e),a=Ml(r,o);return a||(n=w(o)?Dl(t,o):Tl(t,i="auto"===o?Cl(t):o),kl(r,o,{labels:n,labelCategoryInterval:i}))}function wl(t,e){var n,i,r=Sl(t,"ticks"),o=Ol(e),a=Ml(r,o);if(a)return a;if(e.get("show")&&!t.scale.isBlank()||(n=[]),w(o))n=Dl(t,o,!0);else if("auto"===o){var s=xl(t,t.getLabelModel());i=s.labelCategoryInterval,n=g(s.labels,function(t){return t.tickValue})}else n=Tl(t,i=o,!0);return kl(r,o,{ticks:n,tickCategoryInterval:i})}function bl(t){var e=t.scale.getTicks(),n=hl(t);return{labels:g(e,function(e,i){return{formattedLabel:n(e,i),rawLabel:t.scale.getLabel(e),tickValue:e}})}}function Sl(t,e){return rv(t)[e]||(rv(t)[e]=[])}function Ml(t,e){for(var n=0;n<t.length;n++)if(t[n].key===e)return t[n].value}function kl(t,e,n){return t.push({key:e,value:n}),n}function Cl(t){var e=rv(t).autoInterval;return null!=e?e:rv(t).autoInterval=t.calculateCategoryInterval()}function Il(t){var e=Al(t),n=hl(t),i=(e.axisRotate-e.labelRotate)/180*Math.PI,r=t.scale,o=r.getExtent(),a=r.count();if(o[1]-o[0]<1)return 0;var s=1;a>40&&(s=Math.max(1,Math.floor(a/40)));for(var l=o[0],u=t.dataToCoord(l+1)-t.dataToCoord(l),c=Math.abs(u*Math.cos(i)),h=Math.abs(u*Math.sin(i)),f=0,d=0;l<=o[1];l+=s){var p=0,g=0,v=ie(n(l),e.font,"center","top");p=1.3*v.width,g=1.3*v.height,f=Math.max(f,p,7),d=Math.max(d,g,7)}var m=f/c,y=d/h;isNaN(m)&&(m=1/0),isNaN(y)&&(y=1/0);var _=Math.max(0,Math.floor(Math.min(m,y))),x=rv(t.model),w=x.lastAutoInterval,b=x.lastTickCount;return null!=w&&null!=b&&Math.abs(w-_)<=1&&Math.abs(b-a)<=1&&w>_?_=w:(x.lastTickCount=a,x.lastAutoInterval=_),_}function Al(t){var e=t.getLabelModel();return{axisRotate:t.getRotate?t.getRotate():t.isHorizontal&&!t.isHorizontal()?90:0,labelRotate:e.get("rotate")||0,font:e.getFont()}}function Tl(t,e,n){function i(t){l.push(n?t:{formattedLabel:r(t),rawLabel:o.getLabel(t),tickValue:t})}var r=hl(t),o=t.scale,a=o.getExtent(),s=t.getLabelModel(),l=[],u=Math.max((e||0)+1,1),c=a[0],h=o.count();0!==c&&u>1&&h/u>2&&(c=Math.round(Math.ceil(c/u)*u));var f={min:s.get("showMinLabel"),max:s.get("showMaxLabel")};f.min&&c!==a[0]&&i(a[0]);for(var d=c;d<=a[1];d+=u)i(d);return f.max&&d!==a[1]&&i(a[1]),l}function Dl(t,e,n){var i=t.scale,r=hl(t),o=[];return p(i.getTicks(),function(t){var a=i.getLabel(t);e(t,a)&&o.push(n?t:{formattedLabel:r(t),rawLabel:a,tickValue:t})}),o}function Ol(t){var e=t.get("interval");return null==e?"auto":e}function Pl(t,e){var n=(t[1]-t[0])/e/2;t[0]+=n,t[1]-=n}function Ll(t,e,n,i,r){function o(t,e){return c?t>e:t<e}var a=e.length;if(t.onBand&&!i&&a){var s,l=t.getExtent();if(1===a)e[0].coord=l[0],s=e[1]={coord:l[0]};else{var u=e[1].coord-e[0].coord;p(e,function(t){t.coord-=u/2;var e=e||0;e%2>0&&(t.coord-=u/(2*(e+1)))}),s={coord:e[a-1].coord+u},e.push(s)}var c=l[0]>l[1];o(e[0].coord,l[0])&&(r?e[0].coord=l[0]:e.shift()),r&&o(l[0],e[0].coord)&&e.unshift({coord:l[0]}),o(l[1],s.coord)&&(r?s.coord=l[1]:e.pop()),r&&o(s.coord,l[1])&&e.push({coord:l[1]})}}function El(t,e){return e.type||(e.data?"category":"value")}function Nl(t,e,n){return t.getCoordSysModel()===e}function Rl(t,e,n){this._coordsMap={},this._coordsList=[],this._axesMap={},this._axesList=[],this._initCartesian(t,e,n),this.model=t}function Bl(t,e,n){n.getAxesOnZeroOf=function(){return i?[i]:[]};var i,r=t[e],o=n.model,a=o.get("axisLine.onZero"),s=o.get("axisLine.onZeroAxisIndex");if(a)if(null==s){for(var l in r)if(r.hasOwnProperty(l)&&zl(r[l])){i=r[l];break}}else zl(r[s])&&(i=r[s])}function zl(t){return t&&"category"!==t.type&&"time"!==t.type&&cl(t)}function $l(t,e){var n=t.getExtent(),i=n[0]+n[1];t.toGlobalCoord="x"===t.dim?function(t){return t+e}:function(t){return i-t+e},t.toLocalCoord="x"===t.dim?function(t){return t-e}:function(t){return i-t+e}}function Fl(t,e){return g(vv,function(e){return t.getReferringComponents(e)[0]})}function Vl(t){return"cartesian2d"===t.get("coordinateSystem")}function jl(t){var e={componentType:t.mainType};return e[t.mainType+"Index"]=t.componentIndex,e}function Hl(t,e,n,i){var r,o,a=lr(n-t.rotation),s=i[0]>i[1],l="start"===e&&!s||"start"!==e&&s;return ur(a-mv/2)?(o=l?"bottom":"top",r="center"):ur(a-1.5*mv)?(o=l?"top":"bottom",r="center"):(o="middle",r=a<1.5*mv&&a>mv/2?l?"left":"right":l?"right":"left"),{rotation:a,textAlign:r,textVerticalAlign:o}}function Wl(t){var e=t.get("tooltip");return t.get("silent")||!(t.get("triggerEvent")||e&&e.show)}function Gl(t,e,n){var i=t.get("axisLabel.showMinLabel"),r=t.get("axisLabel.showMaxLabel");e=e||[],n=n||[];var o=e[0],a=e[1],s=e[e.length-1],l=e[e.length-2],u=n[0],c=n[1],h=n[n.length-1],f=n[n.length-2];!1===i?(Ul(o),Ul(u)):ql(o,a)&&(i?(Ul(a),Ul(c)):(Ul(o),Ul(u))),!1===r?(Ul(s),Ul(h)):ql(l,s)&&(r?(Ul(l),Ul(f)):(Ul(s),Ul(h)))}function Ul(t){t&&(t.ignore=!0)}function ql(t,e,n){var i=t&&t.getBoundingRect().clone(),r=e&&e.getBoundingRect().clone();if(i&&r){var o=rt([]);return lt(o,o,-t.rotation),i.applyTransform(at([],o,t.getLocalTransform())),r.applyTransform(at([],o,e.getLocalTransform())),i.intersect(r)}}function Xl(t){return"middle"===t||"center"===t}function Yl(t,e,n){var i=e.axis;if(e.get("axisTick.show")&&!i.scale.isBlank()){for(var r=e.getModel("axisTick"),o=r.getModel("lineStyle"),a=r.get("length"),s=i.getTicksCoords(),u=[],c=[],h=t._transform,f=[],d=0;d<s.length;d++){var p=s[d].coord;u[0]=p,u[1]=0,c[0]=p,c[1]=n.tickDirection*a,h&&(Y(u,u,h),Y(c,c,h));var g=new Tf(bi({anid:"tick_"+s[d].tickValue,shape:{x1:u[0],y1:u[1],x2:c[0],y2:c[1]},style:l(o.getLineStyle(),{stroke:e.get("axisLine.lineStyle.color")}),z2:2,silent:!0}));t.group.add(g),f.push(g)}return f}}function Zl(t,e,n){var i=e.axis;if(A(n.axisLabelShow,e.get("axisLabel.show"))&&!i.scale.isBlank()){var r=e.getModel("axisLabel"),o=r.get("margin"),a=i.getViewLabels(),s=(A(n.labelRotate,r.get("rotate"))||0)*mv/180,l=xv(n.rotation,s,n.labelDirection),u=e.getCategories(!0),c=[],h=Wl(e),f=e.get("triggerEvent");return p(a,function(a,s){var d=a.tickValue,p=a.formattedLabel,g=a.rawLabel,v=r;u&&u[d]&&u[d].textStyle&&(v=new Ki(u[d].textStyle,r,e.ecModel));var m=v.getTextColor()||e.get("axisLine.lineStyle.color"),y=[i.dataToCoord(d),n.labelOffset+n.labelDirection*o],_=new yf({anid:"label_"+d,position:y,rotation:l.rotation,silent:h,z2:10});zi(_.style,v,{text:p,textAlign:v.getShallow("align",!0)||l.textAlign,textVerticalAlign:v.getShallow("verticalAlign",!0)||v.getShallow("baseline",!0)||l.textVerticalAlign,textFill:"function"==typeof m?m("category"===i.type?g:"value"===i.type?d+"":d,s):m}),f&&(_.eventData=jl(e),_.eventData.targetType="axisLabel",_.eventData.value=g),t._dumbGroup.add(_),_.updateTransform(),c.push(_),t.group.add(_),_.decomposeTransform()}),c}}function Kl(t){var e=Jl(t);if(e){var n=e.axisPointerModel,i=e.axis.scale,r=n.option,o=n.get("status"),a=n.get("value");null!=a&&(a=i.parse(a));var s=tu(n);null==o&&(r.status=s?"show":"hide");var l=i.getExtent().slice();l[0]>l[1]&&l.reverse(),(null==a||a>l[1])&&(a=l[1]),a<l[0]&&(a=l[0]),r.value=a,s&&(r.status=e.axis.scale.isBlank()?"hide":"show")}}function Jl(t){var e=(t.ecModel.getComponent("axisPointer")||{}).coordSysAxesInfo;return e&&e.axesInfo[eu(t)]}function Ql(t){var e=Jl(t);return e&&e.axisPointerModel}function tu(t){return!!t.get("handle.show")}function eu(t){return t.type+"||"+t.id}function nu(t,e,n,i,r,o){var a=wv.getAxisPointerClass(t.axisPointerClass);if(a){var s=Ql(e);s?(t._axisPointer||(t._axisPointer=new a)).render(e,s,i,o):iu(t,i)}}function iu(t,e,n){var i=t._axisPointer;i&&i.dispose(e,n),t._axisPointer=null}function ru(t,e,n){n=n||{};var i=t.coordinateSystem,r=e.axis,o={},a=r.getAxesOnZeroOf()[0],s=r.position,l=a?"onZero":s,u=r.dim,c=i.getRect(),h=[c.x,c.x+c.width,c.y,c.y+c.height],f={left:0,right:1,top:0,bottom:1,onZero:2},d=e.get("offset")||0,p="x"===u?[h[2]-d,h[3]+d]:[h[0]-d,h[1]+d];if(a){var g=a.toGlobalCoord(a.dataToCoord(0));p[f.onZero]=Math.max(Math.min(g,p[1]),p[0])}o.position=["y"===u?p[f[l]]:h[0],"x"===u?p[f[l]]:h[3]],o.rotation=Math.PI/2*("x"===u?0:1);var v={top:-1,bottom:1,left:-1,right:1};o.labelDirection=o.tickDirection=o.nameDirection=v[s],o.labelOffset=a?p[f[s]]-p[f.onZero]:0,e.get("axisTick.inside")&&(o.tickDirection=-o.tickDirection),A(n.labelInside,e.get("axisLabel.inside"))&&(o.labelDirection=-o.labelDirection);var m=e.get("axisLabel.rotate");return o.labelRotate="top"===l?-m:m,o.z2=1,o}function ou(t,e,n,i,r,o,a){Bi(t,e,n.getModel("label"),n.getModel("emphasis.label"),{labelFetcher:r,labelDataIndex:o,defaultText:ds(r.getData(),o),isRectText:!0,autoColor:i}),au(t),au(e)}function au(t,e){"outside"===t.textPosition&&(t.textPosition=e)}function su(t,e,n){n.style.text=null,qi(n,{shape:{width:0}},e,t,function(){n.parent&&n.parent.remove(n)})}function lu(t,e,n){n.style.text=null,qi(n,{shape:{r:n.shape.r0}},e,t,function(){n.parent&&n.parent.remove(n)})}function uu(t,e,n,i,r,o,a,s){var u=e.getItemVisual(n,"color"),c=e.getItemVisual(n,"opacity"),h=i.getModel("itemStyle"),f=i.getModel("emphasis.itemStyle").getBarItemStyle();s||t.setShape("r",h.get("barBorderRadius")||0),t.useStyle(l({fill:u,opacity:c},h.getBarItemStyle()));var d=i.getShallow("cursor");d&&t.attr("cursor",d);var p=a?r.height>0?"bottom":"top":r.width>0?"left":"right";s||ou(t.style,f,i,u,o,n,p),Ri(t,f)}function cu(t,e){var n=t.get(Av)||0;return Math.min(n,Math.abs(e.width),Math.abs(e.height))}function hu(t,e,n){var i=t.getData(),r=[],o=i.getLayout("valueAxisHorizontal")?1:0;r[1-o]=i.getLayout("valueAxisStart");var a=new Ov({shape:{points:i.getLayout("largePoints")},incremental:!!n,__startPoint:r,__valueIdx:o});e.add(a),fu(a,t,i)}function fu(t,e,n){var i=n.getVisual("borderColor")||n.getVisual("color"),r=e.getModel("itemStyle").getItemStyle(["color","borderColor"]);t.useStyle(r),t.style.fill=null,t.style.stroke=i,t.style.lineWidth=n.getLayout("barWidth")}function du(t,e,n,i){var r=e.getData(),o=this.dataIndex,a=r.getName(o),s=e.get("selectedOffset");i.dispatchAction({type:"pieToggleSelect",from:t,name:a,seriesId:e.id}),r.each(function(t){pu(r.getItemGraphicEl(t),r.getItemLayout(t),e.isSelected(r.getName(t)),s,n)})}function pu(t,e,n,i,r){var o=(e.startAngle+e.endAngle)/2,a=Math.cos(o),s=Math.sin(o),l=n?i:0,u=[a*l,s*l];r?t.animate().when(200,{position:u}).start("bounceOut"):t.attr("position",u)}function gu(t,e){function n(){o.ignore=o.hoverIgnore,a.ignore=a.hoverIgnore}function i(){o.ignore=o.normalIgnore,a.ignore=a.normalIgnore}pc.call(this);var r=new bf({z2:2}),o=new If,a=new yf;this.add(r),this.add(o),this.add(a),this.updateData(t,e,!0),this.on("emphasis",n).on("normal",i).on("mouseover",n).on("mouseout",i)}function vu(t,e,n,i,r,o,a){function s(e,n){for(var i=e;i>=0&&(t[i].y-=n,!(i>0&&t[i].y>t[i-1].y+t[i-1].height));i--);}function l(t,e,n,i,r,o){for(var a=e?Number.MAX_VALUE:0,s=0,l=t.length;s<l;s++)if("center"!==t[s].position){var u=Math.abs(t[s].y-i),c=t[s].len,h=t[s].len2,f=u<r+c?Math.sqrt((r+c+h)*(r+c+h)-u*u):Math.abs(t[s].x-n);e&&f>=a&&(f=a-10),!e&&f<=a&&(f=a+10),t[s].x=n+f*o,a=f}}t.sort(function(t,e){return t.y-e.y});for(var u,c=0,h=t.length,f=[],d=[],p=0;p<h;p++)(u=t[p].y-c)<0&&function(e,n,i,r){for(var o=e;o<n;o++)if(t[o].y+=i,o>e&&o+1<n&&t[o+1].y>t[o].y+t[o].height)return void s(o,i/2);s(n-1,i/2)}(p,h,-u),c=t[p].y+t[p].height;for(a-c<0&&s(h-1,c-a),p=0;p<h;p++)t[p].y>=n?d.push(t[p]):f.push(t[p]);l(f,!1,e,n,i,r),l(d,!0,e,n,i,r)}function mu(t,e,n,i,r,o){for(var a=[],s=[],l=0;l<t.length;l++)t[l].x<e?a.push(t[l]):s.push(t[l]);for(vu(s,e,n,i,1,r,o),vu(a,e,n,i,-1,r,o),l=0;l<t.length;l++){var u=t[l].linePoints;if(u){var c=u[1][0]-u[2][0];t[l].x<e?u[2][0]=t[l].x+3:u[2][0]=t[l].x-3,u[1][1]=u[2][1]=t[l].y,u[1][0]=u[2][0]+c}}}var yu=2311,_u=function(){return yu++},xu="object"==typeof wx&&"function"==typeof wx.getSystemInfoSync?{browser:{},os:{},node:!1,wxa:!0,canvasSupported:!0,svgSupported:!1,touchEventsSupported:!0}:"undefined"==typeof n&&"undefined"!=typeof self?{browser:{},os:{},node:!1,worker:!0,canvasSupported:!0}:"undefined"==typeof navigator?{browser:{},os:{},node:!0,worker:!1,canvasSupported:!0,svgSupported:!0}:function(t){var i={},r={},o=t.match(/Firefox\/([\d.]+)/),a=t.match(/MSIE\s([\d.]+)/)||t.match(/Trident\/.+?rv:(([\d.]+))/),s=t.match(/Edge\/([\d.]+)/),l=/micromessenger/i.test(t);return o&&(r.firefox=!0,r.version=o[1]),a&&(r.ie=!0,r.version=a[1]),s&&(r.edge=!0,r.version=s[1]),l&&(r.weChat=!0),{browser:r,os:i,node:!1,canvasSupported:!!n.createElement("canvas").getContext,svgSupported:"undefined"!=typeof SVGRect,touchEventsSupported:"ontouchstart"in e&&!r.ie&&!r.edge,pointerEventsSupported:"onpointerdown"in e&&(r.edge||r.ie&&r.version>=11)}}(navigator.userAgent),wu={"[object Function]":1,"[object RegExp]":1,"[object Date]":1,"[object Error]":1,"[object CanvasGradient]":1,"[object CanvasPattern]":1,"[object Image]":1,"[object Canvas]":1},bu={"[object Int8Array]":1,"[object Uint8Array]":1,"[object Uint8ClampedArray]":1,"[object Int16Array]":1,"[object Uint16Array]":1,"[object Int32Array]":1,"[object Uint32Array]":1,"[object Float32Array]":1,"[object Float64Array]":1},Su=Object.prototype.toString,Mu=Array.prototype,ku=Mu.forEach,Cu=Mu.filter,Iu=Mu.slice,Au=Mu.map,Tu=Mu.reduce,Du={},Ou=function(){return Du.createCanvas()};Du.createCanvas=function(){return n.createElement("canvas")};var Pu,Lu="__ec_primitive__";B.prototype={constructor:B,get:function(t){return this.hasOwnProperty(t)?this[t]:null},set:function(t,e){return this[t]=e},each:function(t,e){for(var n in void 0!==e&&(t=y(t,e)),this)this.hasOwnProperty(n)&&t(this[n],n)},removeKey:function(t){delete this[t]}};var Eu="undefined"==typeof Float32Array?Array:Float32Array,Nu=X,Ru=function(t,e){return(t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1])};J.prototype={constructor:J,_dragStart:function(t){var e=t.target;e&&e.draggable&&(this._draggingTarget=e,e.dragging=!0,this._x=t.offsetX,this._y=t.offsetY,this.dispatchToElement(Q(e,t),"dragstart",t.event))},_drag:function(t){var e=this._draggingTarget;if(e){var n=t.offsetX,i=t.offsetY,r=n-this._x,o=i-this._y;this._x=n,this._y=i,e.drift(r,o,t),this.dispatchToElement(Q(e,t),"drag",t.event);var a=this.findHover(n,i,e).target,s=this._dropTarget;this._dropTarget=a,e!==a&&(s&&a!==s&&this.dispatchToElement(Q(s,t),"dragleave",t.event),a&&a!==s&&this.dispatchToElement(Q(a,t),"dragenter",t.event))}},_dragEnd:function(t){var e=this._draggingTarget;e&&(e.dragging=!1),this.dispatchToElement(Q(e,t),"dragend",t.event),this._dropTarget&&this.dispatchToElement(Q(this._dropTarget,t),"drop",t.event),this._draggingTarget=null,this._dropTarget=null}};var Bu=Array.prototype.slice,zu=function(){this._$handlers={}};zu.prototype={constructor:zu,one:function(t,e,n){var i=this._$handlers;if(!e||!t)return this;i[t]||(i[t]=[]);for(var r=0;r<i[t].length;r++)if(i[t][r].h===e)return this;return i[t].push({h:e,one:!0,ctx:n||this}),this},on:function(t,e,n){var i=this._$handlers;if(!e||!t)return this;i[t]||(i[t]=[]);for(var r=0;r<i[t].length;r++)if(i[t][r].h===e)return this;return i[t].push({h:e,one:!1,ctx:n||this}),this},isSilent:function(t){var e=this._$handlers;return e[t]&&e[t].length},off:function(t,e){var n=this._$handlers;if(!t)return this._$handlers={},this;if(e){if(n[t]){for(var i=[],r=0,o=n[t].length;r<o;r++)n[t][r].h!=e&&i.push(n[t][r]);n[t]=i}n[t]&&0===n[t].length&&delete n[t]}else delete n[t];return this},trigger:function(t){if(this._$handlers[t]){var e=arguments,n=e.length;n>3&&(e=Bu.call(e,1));for(var i=this._$handlers[t],r=i.length,o=0;o<r;){switch(n){case 1:i[o].h.call(i[o].ctx);break;case 2:i[o].h.call(i[o].ctx,e[1]);break;case 3:i[o].h.call(i[o].ctx,e[1],e[2]);break;default:i[o].h.apply(i[o].ctx,e)}i[o].one?(i.splice(o,1),r--):o++}}return this},triggerWithContext:function(t){if(this._$handlers[t]){var e=arguments,n=e.length;n>4&&(e=Bu.call(e,1,e.length-1));for(var i=e[e.length-1],r=this._$handlers[t],o=r.length,a=0;a<o;){switch(n){case 1:r[a].h.call(i);break;case 2:r[a].h.call(i,e[1]);break;case 3:r[a].h.call(i,e[1],e[2]);break;default:r[a].h.apply(i,e)}r[a].one?(r.splice(a,1),o--):a++}}return this}};var $u="silent";et.prototype.dispose=function(){};var Fu=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],Vu=function(t,e,n,i){zu.call(this),this.storage=t,this.painter=e,this.painterRoot=i,n=n||new et,this.proxy=null,this._hovered={},this._lastTouchMoment,this._lastX,this._lastY,J.call(this),this.setHandlerProxy(n)};Vu.prototype={constructor:Vu,setHandlerProxy:function(t){this.proxy&&this.proxy.dispose(),t&&(p(Fu,function(e){t.on&&t.on(e,this[e],this)},this),t.handler=this),this.proxy=t},mousemove:function(t){var e=t.zrX,n=t.zrY,i=this._hovered,r=i.target;r&&!r.__zr&&(r=(i=this.findHover(i.x,i.y)).target);var o=this._hovered=this.findHover(e,n),a=o.target,s=this.proxy;s.setCursor&&s.setCursor(a?a.cursor:"default"),r&&a!==r&&this.dispatchToElement(i,"mouseout",t),this.dispatchToElement(o,"mousemove",t),a&&a!==r&&this.dispatchToElement(o,"mouseover",t)},mouseout:function(t){this.dispatchToElement(this._hovered,"mouseout",t);var e,n=t.toElement||t.relatedTarget;do{n=n&&n.parentNode}while(n&&9!=n.nodeType&&!(e=n===this.painterRoot));!e&&this.trigger("globalout",{event:t})},resize:function(t){this._hovered={}},dispatch:function(t,e){var n=this[t];n&&n.call(this,e)},dispose:function(){this.proxy.dispose(),this.storage=this.proxy=this.painter=null},setCursorStyle:function(t){var e=this.proxy;e.setCursor&&e.setCursor(t)},dispatchToElement:function(t,e,n){var i=(t=t||{}).target;if(!i||!i.silent){for(var r="on"+e,o=tt(e,t,n);i&&(i[r]&&(o.cancelBubble=i[r].call(i,o)),i.trigger(e,o),i=i.parent,!o.cancelBubble););o.cancelBubble||(this.trigger(e,o),this.painter&&this.painter.eachOtherLayer(function(t){"function"==typeof t[r]&&t[r].call(t,o),t.trigger&&t.trigger(e,o)}))}},findHover:function(t,e,n){for(var i=this.storage.getDisplayList(),r={x:t,y:e},o=i.length-1;o>=0;o--){var a;if(i[o]!==n&&!i[o].ignore&&(a=nt(i[o],t,e))&&(!r.topTarget&&(r.topTarget=i[o]),a!==$u)){r.target=i[o];break}}return r}},p(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],function(t){Vu.prototype[t]=function(e){var n=this.findHover(e.zrX,e.zrY),i=n.target;if("mousedown"===t)this._downEl=i,this._downPoint=[e.zrX,e.zrY],this._upEl=i;else if("mouseup"===t)this._upEl=i;else if("click"===t){if(this._downEl!==this._upEl||!this._downPoint||Nu(this._downPoint,[e.zrX,e.zrY])>4)return;this._downPoint=null}this.dispatchToElement(n,t,e)}}),f(Vu,zu),f(Vu,J);var ju="undefined"==typeof Float32Array?Array:Float32Array,Hu=rt,Wu=5e-5,Gu=function(t){(t=t||{}).position||(this.position=[0,0]),null==t.rotation&&(this.rotation=0),t.scale||(this.scale=[1,1]),this.origin=this.origin||null},Uu=Gu.prototype;Uu.transform=null,Uu.needLocalTransform=function(){return ht(this.rotation)||ht(this.position[0])||ht(this.position[1])||ht(this.scale[0]-1)||ht(this.scale[1]-1)},Uu.updateTransform=function(){var t=this.parent,e=t&&t.transform,n=this.needLocalTransform(),i=this.transform;n||e?(i=i||it(),n?this.getLocalTransform(i):Hu(i),e&&(n?at(i,t.transform,i):ot(i,t.transform)),this.transform=i,this.invTransform=this.invTransform||it(),ct(this.invTransform,i)):i&&Hu(i)},Uu.getLocalTransform=function(t){return Gu.getLocalTransform(this,t)},Uu.setTransform=function(t){var e=this.transform,n=t.dpr||1;e?t.setTransform(n*e[0],n*e[1],n*e[2],n*e[3],n*e[4],n*e[5]):t.setTransform(n,0,0,n,0,0)},Uu.restoreTransform=function(t){var e=t.dpr||1;t.setTransform(e,0,0,e,0,0)};var qu=[];Uu.decomposeTransform=function(){if(this.transform){var t=this.parent,e=this.transform;t&&t.transform&&(at(qu,t.invTransform,e),e=qu);var n=e[0]*e[0]+e[1]*e[1],i=e[2]*e[2]+e[3]*e[3],r=this.position,o=this.scale;ht(n-1)&&(n=Math.sqrt(n)),ht(i-1)&&(i=Math.sqrt(i)),e[0]<0&&(n=-n),e[3]<0&&(i=-i),r[0]=e[4],r[1]=e[5],o[0]=n,o[1]=i,this.rotation=Math.atan2(-e[1]/i,e[0]/n)}},Uu.getGlobalScale=function(){var t=this.transform;if(!t)return[1,1];var e=Math.sqrt(t[0]*t[0]+t[1]*t[1]),n=Math.sqrt(t[2]*t[2]+t[3]*t[3]);return t[0]<0&&(e=-e),t[3]<0&&(n=-n),[e,n]},Uu.transformCoordToLocal=function(t,e){var n=[t,e],i=this.invTransform;return i&&Y(n,n,i),n},Uu.transformCoordToGlobal=function(t,e){var n=[t,e],i=this.transform;return i&&Y(n,n,i),n},Gu.getLocalTransform=function(t,e){Hu(e=e||[]);var n=t.origin,i=t.scale||[1,1],r=t.rotation||0,o=t.position||[0,0];return n&&(e[4]-=n[0],e[5]-=n[1]),ut(e,e,i),r&&lt(e,e,r),n&&(e[4]+=n[0],e[5]+=n[1]),e[4]+=o[0],e[5]+=o[1],e};var Xu={linear:function(t){return t},quadraticIn:function(t){return t*t},quadraticOut:function(t){return t*(2-t)},quadraticInOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},cubicIn:function(t){return t*t*t},cubicOut:function(t){return--t*t*t+1},cubicInOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},quarticIn:function(t){return t*t*t*t},quarticOut:function(t){return 1- --t*t*t*t},quarticInOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},quinticIn:function(t){return t*t*t*t*t},quinticOut:function(t){return--t*t*t*t*t+1},quinticInOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},sinusoidalIn:function(t){return 1-Math.cos(t*Math.PI/2)},sinusoidalOut:function(t){return Math.sin(t*Math.PI/2)},sinusoidalInOut:function(t){return.5*(1-Math.cos(Math.PI*t))},exponentialIn:function(t){return 0===t?0:Math.pow(1024,t-1)},exponentialOut:function(t){return 1===t?1:1-Math.pow(2,-10*t)},exponentialInOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},circularIn:function(t){return 1-Math.sqrt(1-t*t)},circularOut:function(t){return Math.sqrt(1- --t*t)},circularInOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},elasticIn:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),-n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4))},elasticOut:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),n*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/.4)+1)},elasticInOut:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),(t*=2)<1?n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*-.5:n*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*.5+1)},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},backInOut:function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)},bounceIn:function(t){return 1-Xu.bounceOut(1-t)},bounceOut:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bounceInOut:function(t){return t<.5?.5*Xu.bounceIn(2*t):.5*Xu.bounceOut(2*t-1)+.5}};ft.prototype={constructor:ft,step:function(t,e){if(this._initialized||(this._startTime=t+this._delay,this._initialized=!0),this._paused)this._pausedTime+=e;else{var n=(t-this._startTime-this._pausedTime)/this._life;if(!(n<0)){n=Math.min(n,1);var i=this.easing,r="string"==typeof i?Xu[i]:i,o="function"==typeof r?r(n):n;return this.fire("frame",o),1==n?this.loop?(this.restart(t),"restart"):(this._needsRemove=!0,"destroy"):null}}},restart:function(t){var e=(t-this._startTime-this._pausedTime)%this._life;this._startTime=t-e+this.gap,this._pausedTime=0,this._needsRemove=!1},fire:function(t,e){this[t="on"+t]&&this[t](this._target,e)},pause:function(){this._paused=!0},resume:function(){this._paused=!1}};var Yu=function(){this.head=null,this.tail=null,this._len=0},Zu=Yu.prototype;Zu.insert=function(t){var e=new Ku(t);return this.insertEntry(e),e},Zu.insertEntry=function(t){this.head?(this.tail.next=t,t.prev=this.tail,t.next=null,this.tail=t):this.head=this.tail=t,this._len++},Zu.remove=function(t){var e=t.prev,n=t.next;e?e.next=n:this.head=n,n?n.prev=e:this.tail=e,t.next=t.prev=null,this._len--},Zu.len=function(){return this._len},Zu.clear=function(){this.head=this.tail=null,this._len=0};var Ku=function(t){this.value=t,this.next,this.prev},Ju=function(t){this._list=new Yu,this._map={},this._maxSize=t||10,this._lastRemovedEntry=null},Qu=Ju.prototype;Qu.put=function(t,e){var n=this._list,i=this._map,r=null;if(null==i[t]){var o=n.len(),a=this._lastRemovedEntry;if(o>=this._maxSize&&o>0){var s=n.head;n.remove(s),delete i[s.key],r=s.value,this._lastRemovedEntry=s}a?a.value=e:a=new Ku(e),a.key=t,n.insertEntry(a),i[t]=a}return r},Qu.get=function(t){var e=this._map[t],n=this._list;if(null!=e)return e!==n.tail&&(n.remove(e),n.insertEntry(e)),e.value},Qu.clear=function(){this._list.clear(),this._map={}};var tc={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]},ec=new Ju(20),nc=null,ic=Array.prototype.slice,rc=function(t,e,n,i){this._tracks={},this._target=t,this._loop=e||!1,this._getter=n||kt,this._setter=i||Ct,this._clipCount=0,this._delay=0,this._doneList=[],this._onframeList=[],this._clipList=[]};rc.prototype={when:function(t,e){var n=this._tracks;for(var i in e)if(e.hasOwnProperty(i)){if(!n[i]){n[i]=[];var r=this._getter(this._target,i);if(null==r)continue;0!==t&&n[i].push({time:0,value:Et(r)})}n[i].push({time:t,value:e[i]})}return this},during:function(t){return this._onframeList.push(t),this},pause:function(){for(var t=0;t<this._clipList.length;t++)this._clipList[t].pause();this._paused=!0},resume:function(){for(var t=0;t<this._clipList.length;t++)this._clipList[t].resume();this._paused=!1},isPaused:function(){return!!this._paused},_doneCallback:function(){this._tracks={},this._clipList.length=0;for(var t=this._doneList,e=t.length,n=0;n<e;n++)t[n].call(this)},start:function(t,e){var n,i=this,r=0;for(var o in this._tracks)if(this._tracks.hasOwnProperty(o)){var a=Bt(this,t,function(){--r||i._doneCallback()},this._tracks[o],o,e);a&&(this._clipList.push(a),r++,this.animation&&this.animation.addClip(a),n=a)}if(n){var s=n.onframe;n.onframe=function(t,e){s(t,e);for(var n=0;n<i._onframeList.length;n++)i._onframeList[n](t,e)}}return r||this._doneCallback(),this},stop:function(t){for(var e=this._clipList,n=this.animation,i=0;i<e.length;i++){var r=e[i];t&&r.onframe(this._target,1),n&&n.removeClip(r)}e.length=0},delay:function(t){return this._delay=t,this},done:function(t){return t&&this._doneList.push(t),this},getClips:function(){return this._clipList}};var oc=1;"undefined"!=typeof e&&(oc=Math.max(e.devicePixelRatio||1,1));var ac=oc,sc=function(){},lc=sc,uc=function(){this.animators=[]};uc.prototype={constructor:uc,animate:function(t,e){var n,i=!1,r=this,o=this.__zr;if(t){var a=t.split("."),s=r;i="shape"===a[0];for(var l=0,u=a.length;l<u;l++)s&&(s=s[a[l]]);s&&(n=s)}else n=r;if(n){var h=r.animators,f=new rc(n,e);return f.during(function(t){r.dirty(i)}).done(function(){h.splice(c(h,f),1)}),h.push(f),o&&o.animation.addAnimator(f),f}lc('Property "'+t+'" is not existed in element '+r.id)},stopAnimation:function(t){for(var e=this.animators,n=e.length,i=0;i<n;i++)e[i].stop(t);return e.length=0,this},animateTo:function(t,e,n,i,r,o){b(n)?(r=i,i=n,n=0):w(i)?(r=i,i="linear",n=0):w(n)?(r=n,n=0):w(e)?(r=e,e=500):e||(e=500),this.stopAnimation(),this._animateToShallow("",this,t,e,n);var a=this.animators.slice(),s=a.length;s||r&&r();for(var l=0;l<a.length;l++)a[l].done(function(){--s||r&&r()}).start(i,o)},_animateToShallow:function(t,e,n,i,r){var o={},a=0;for(var s in n)if(n.hasOwnProperty(s))if(null!=e[s])S(n[s])&&!d(n[s])?this._animateToShallow(t?t+"."+s:s,e[s],n[s],i,r):(o[s]=n[s],a++);else if(null!=n[s])if(t){var l={};l[t]={},l[t][s]=n[s],this.attr(l)}else this.attr(s,n[s]);return a>0&&this.animate(t,!1).when(null==i?500:i,o).delay(r||0),this}};var cc=function(t){Gu.call(this,t),zu.call(this,t),uc.call(this,t),this.id=t.id||_u()};cc.prototype={type:"element",name:"",__zr:null,ignore:!1,clipPath:null,isGroup:!1,drift:function(t,e){switch(this.draggable){case"horizontal":e=0;break;case"vertical":t=0}var n=this.transform;n||(n=this.transform=[1,0,0,1,0,0]),n[4]+=t,n[5]+=e,this.decomposeTransform(),this.dirty(!1)},beforeUpdate:function(){},afterUpdate:function(){},update:function(){this.updateTransform()},traverse:function(t,e){},attrKV:function(t,e){if("position"===t||"scale"===t||"origin"===t){if(e){var n=this[t];n||(n=this[t]=[]),n[0]=e[0],n[1]=e[1]}}else this[t]=e},hide:function(){this.ignore=!0,this.__zr&&this.__zr.refresh()},show:function(){this.ignore=!1,this.__zr&&this.__zr.refresh()},attr:function(t,e){if("string"==typeof t)this.attrKV(t,e);else if(S(t))for(var n in t)t.hasOwnProperty(n)&&this.attrKV(n,t[n]);return this.dirty(!1),this},setClipPath:function(t){var e=this.__zr;e&&t.addSelfToZr(e),this.clipPath&&this.clipPath!==t&&this.removeClipPath(),this.clipPath=t,t.__zr=e,t.__clipTarget=this,this.dirty(!1)},removeClipPath:function(){var t=this.clipPath;t&&(t.__zr&&t.removeSelfFromZr(t.__zr),t.__zr=null,t.__clipTarget=null,this.clipPath=null,this.dirty(!1))},addSelfToZr:function(t){this.__zr=t;var e=this.animators;if(e)for(var n=0;n<e.length;n++)t.animation.addAnimator(e[n]);this.clipPath&&this.clipPath.addSelfToZr(t)},removeSelfFromZr:function(t){this.__zr=null;var e=this.animators;if(e)for(var n=0;n<e.length;n++)t.animation.removeAnimator(e[n]);this.clipPath&&this.clipPath.removeSelfFromZr(t)}},f(cc,uc),f(cc,Gu),f(cc,zu);var hc=Y,fc=Math.min,dc=Math.max;zt.prototype={constructor:zt,union:function(t){var e=fc(t.x,this.x),n=fc(t.y,this.y);this.width=dc(t.x+t.width,this.x+this.width)-e,this.height=dc(t.y+t.height,this.y+this.height)-n,this.x=e,this.y=n},applyTransform:function(){var t=[],e=[],n=[],i=[];return function(r){if(r){t[0]=n[0]=this.x,t[1]=i[1]=this.y,e[0]=i[0]=this.x+this.width,e[1]=n[1]=this.y+this.height,hc(t,t,r),hc(e,e,r),hc(n,n,r),hc(i,i,r),this.x=fc(t[0],e[0],n[0],i[0]),this.y=fc(t[1],e[1],n[1],i[1]);var o=dc(t[0],e[0],n[0],i[0]),a=dc(t[1],e[1],n[1],i[1]);this.width=o-this.x,this.height=a-this.y}}}(),calculateTransform:function(t){var e=this,n=t.width/e.width,i=t.height/e.height,r=it();return st(r,r,[-e.x,-e.y]),ut(r,r,[n,i]),st(r,r,[t.x,t.y]),r},intersect:function(t){if(!t)return!1;t instanceof zt||(t=zt.create(t));var e=this,n=e.x,i=e.x+e.width,r=e.y,o=e.y+e.height,a=t.x,s=t.x+t.width,l=t.y,u=t.y+t.height;return!(i<a||s<n||o<l||u<r)},contain:function(t,e){var n=this;return t>=n.x&&t<=n.x+n.width&&e>=n.y&&e<=n.y+n.height},clone:function(){return new zt(this.x,this.y,this.width,this.height)},copy:function(t){this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height},plain:function(){return{x:this.x,y:this.y,width:this.width,height:this.height}}},zt.create=function(t){return new zt(t.x,t.y,t.width,t.height)};var pc=function(t){for(var e in t=t||{},cc.call(this,t),t)t.hasOwnProperty(e)&&(this[e]=t[e]);this._children=[],this.__storage=null,this.__dirty=!0};pc.prototype={constructor:pc,isGroup:!0,type:"group",silent:!1,children:function(){return this._children.slice()},childAt:function(t){return this._children[t]},childOfName:function(t){for(var e=this._children,n=0;n<e.length;n++)if(e[n].name===t)return e[n]},childCount:function(){return this._children.length},add:function(t){return t&&t!==this&&t.parent!==this&&(this._children.push(t),this._doAdd(t)),this},addBefore:function(t,e){if(t&&t!==this&&t.parent!==this&&e&&e.parent===this){var n=this._children,i=n.indexOf(e);i>=0&&(n.splice(i,0,t),this._doAdd(t))}return this},_doAdd:function(t){t.parent&&t.parent.remove(t),t.parent=this;var e=this.__storage,n=this.__zr;e&&e!==t.__storage&&(e.addToStorage(t),t instanceof pc&&t.addChildrenToStorage(e)),n&&n.refresh()},remove:function(t){var e=this.__zr,n=this.__storage,i=this._children,r=c(i,t);return r<0?this:(i.splice(r,1),t.parent=null,n&&(n.delFromStorage(t),t instanceof pc&&t.delChildrenFromStorage(n)),e&&e.refresh(),this)},removeAll:function(){var t,e,n=this._children,i=this.__storage;for(e=0;e<n.length;e++)t=n[e],i&&(i.delFromStorage(t),t instanceof pc&&t.delChildrenFromStorage(i)),t.parent=null;return n.length=0,this},eachChild:function(t,e){for(var n=this._children,i=0;i<n.length;i++){var r=n[i];t.call(e,r,i)}return this},traverse:function(t,e){for(var n=0;n<this._children.length;n++){var i=this._children[n];t.call(e,i),"group"===i.type&&i.traverse(t,e)}return this},addChildrenToStorage:function(t){for(var e=0;e<this._children.length;e++){var n=this._children[e];t.addToStorage(n),n instanceof pc&&n.addChildrenToStorage(t)}},delChildrenFromStorage:function(t){for(var e=0;e<this._children.length;e++){var n=this._children[e];t.delFromStorage(n),n instanceof pc&&n.delChildrenFromStorage(t)}},dirty:function(){return this.__dirty=!0,this.__zr&&this.__zr.refresh(),this},getBoundingRect:function(t){for(var e=null,n=new zt(0,0,0,0),i=t||this._children,r=[],o=0;o<i.length;o++){var a=i[o];if(!a.ignore&&!a.invisible){var s=a.getBoundingRect(),l=a.getLocalTransform(r);l?(n.copy(s),n.applyTransform(l),(e=e||n.clone()).union(n)):(e=e||s.clone()).union(s)}}return e||n}},h(pc,cc);var gc=32,vc=7,mc=function(){this._roots=[],this._displayList=[],this._displayListLen=0};mc.prototype={constructor:mc,traverse:function(t,e){for(var n=0;n<this._roots.length;n++)this._roots[n].traverse(t,e)},getDisplayList:function(t,e){return e=e||!1,t&&this.updateDisplayList(e),this._displayList},updateDisplayList:function(t){this._displayListLen=0;for(var e=this._roots,n=this._displayList,i=0,r=e.length;i<r;i++)this._updateAndAddDisplayable(e[i],null,t);n.length=this._displayListLen,xu.canvasSupported&&Ut(n,qt)},_updateAndAddDisplayable:function(t,e,n){if(!t.ignore||n){t.beforeUpdate(),t.__dirty&&t.update(),t.afterUpdate();var i=t.clipPath;if(i){e=e?e.slice():[];for(var r=i,o=t;r;)r.parent=o,r.updateTransform(),e.push(r),o=r,r=r.clipPath}if(t.isGroup){for(var a=t._children,s=0;s<a.length;s++){var l=a[s];t.__dirty&&(l.__dirty=!0),this._updateAndAddDisplayable(l,e,n)}t.__dirty=!1}else t.__clipPaths=e,this._displayList[this._displayListLen++]=t}},addRoot:function(t){t.__storage!==this&&(t instanceof pc&&t.addChildrenToStorage(this),this.addToStorage(t),this._roots.push(t))},delRoot:function(t){if(null==t){for(n=0;n<this._roots.length;n++){var e=this._roots[n];e instanceof pc&&e.delChildrenFromStorage(this)}return this._roots=[],this._displayList=[],void(this._displayListLen=0)}if(t instanceof Array)for(var n=0,i=t.length;n<i;n++)this.delRoot(t[n]);else{var r=c(this._roots,t);r>=0&&(this.delFromStorage(t),this._roots.splice(r,1),t instanceof pc&&t.delChildrenFromStorage(this))}},addToStorage:function(t){return t&&(t.__storage=this,t.dirty(!1)),this},delFromStorage:function(t){return t&&(t.__storage=null),this},dispose:function(){this._renderList=this._roots=null},displayableSortFunc:qt};var yc={shadowBlur:1,shadowOffsetX:1,shadowOffsetY:1,textShadowBlur:1,textShadowOffsetX:1,textShadowOffsetY:1,textBoxShadowBlur:1,textBoxShadowOffsetX:1,textBoxShadowOffsetY:1},_c=function(t,e,n){return yc.hasOwnProperty(e)?n*=t.dpr:n},xc=[["shadowBlur",0],["shadowOffsetX",0],["shadowOffsetY",0],["shadowColor","#000"],["lineCap","butt"],["lineJoin","miter"],["miterLimit",10]],wc=function(t,e){this.extendFrom(t,!1),this.host=e};wc.prototype={constructor:wc,host:null,fill:"#000",stroke:null,opacity:1,lineDash:null,lineDashOffset:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,lineWidth:1,strokeNoScale:!1,text:null,font:null,textFont:null,fontStyle:null,fontWeight:null,fontSize:null,fontFamily:null,textTag:null,textFill:"#000",textStroke:null,textWidth:null,textHeight:null,textStrokeWidth:0,textLineHeight:null,textPosition:"inside",textRect:null,textOffset:null,textAlign:null,textVerticalAlign:null,textDistance:5,textShadowColor:"transparent",textShadowBlur:0,textShadowOffsetX:0,textShadowOffsetY:0,textBoxShadowColor:"transparent",textBoxShadowBlur:0,textBoxShadowOffsetX:0,textBoxShadowOffsetY:0,transformText:!1,textRotation:0,textOrigin:null,textBackgroundColor:null,textBorderColor:null,textBorderWidth:0,textBorderRadius:0,textPadding:null,rich:null,truncate:null,blend:null,bind:function(t,e,n){for(var i=this,r=n&&n.style,o=!r,a=0;a<xc.length;a++){var s=xc[a],l=s[0];(o||i[l]!==r[l])&&(t[l]=_c(t,l,i[l]||s[1]))}if((o||i.fill!==r.fill)&&(t.fillStyle=i.fill),(o||i.stroke!==r.stroke)&&(t.strokeStyle=i.stroke),(o||i.opacity!==r.opacity)&&(t.globalAlpha=null==i.opacity?1:i.opacity),(o||i.blend!==r.blend)&&(t.globalCompositeOperation=i.blend||"source-over"),this.hasStroke()){var u=i.lineWidth;t.lineWidth=u/(this.strokeNoScale&&e&&e.getLineScale?e.getLineScale():1)}},hasFill:function(){var t=this.fill;return null!=t&&"none"!==t},hasStroke:function(){var t=this.stroke;return null!=t&&"none"!==t&&this.lineWidth>0},extendFrom:function(t,e){if(t)for(var n in t)!t.hasOwnProperty(n)||!0!==e&&(!1===e?this.hasOwnProperty(n):null==t[n])||(this[n]=t[n])},set:function(t,e){"string"==typeof t?this[t]=e:this.extendFrom(t,!0)},clone:function(){var t=new this.constructor;return t.extendFrom(this,!0),t},getGradient:function(t,e,n){for(var i=("radial"===e.type?Yt:Xt)(t,e,n),r=e.colorStops,o=0;o<r.length;o++)i.addColorStop(r[o].offset,r[o].color);return i}};for(var bc=wc.prototype,Sc=0;Sc<xc.length;Sc++){var Mc=xc[Sc];Mc[0]in bc||(bc[Mc[0]]=Mc[1])}wc.getGradient=bc.getGradient;var kc=function(t,e){this.image=t,this.repeat=e,this.type="pattern"};kc.prototype.getCanvasPattern=function(t){return t.createPattern(this.image,this.repeat||"repeat")};var Cc=function(t,e,n){var i;n=n||ac,"string"==typeof t?i=Kt(t,e,n):S(t)&&(t=(i=t).id),this.id=t,this.dom=i;var r=i.style;r&&(i.onselectstart=Zt,r["-webkit-user-select"]="none",r["user-select"]="none",r["-webkit-touch-callout"]="none",r["-webkit-tap-highlight-color"]="rgba(0,0,0,0)",r.padding=0,r.margin=0,r["border-width"]=0),this.domBack=null,this.ctxBack=null,this.painter=e,this.config=null,this.clearColor=0,this.motionBlur=!1,this.lastFrameAlpha=.7,this.dpr=n};Cc.prototype={constructor:Cc,__dirty:!0,__used:!1,__drawIndex:0,__startIndex:0,__endIndex:0,incremental:!1,getElementCount:function(){return this.__endIndex-this.__startIndex},initContext:function(){this.ctx=this.dom.getContext("2d"),this.ctx.dpr=this.dpr},createBackBuffer:function(){var t=this.dpr;this.domBack=Kt("back-"+this.id,this.painter,t),this.ctxBack=this.domBack.getContext("2d"),1!=t&&this.ctxBack.scale(t,t)},resize:function(t,e){var n=this.dpr,i=this.dom,r=i.style,o=this.domBack;r&&(r.width=t+"px",r.height=e+"px"),i.width=t*n,i.height=e*n,o&&(o.width=t*n,o.height=e*n,1!=n&&this.ctxBack.scale(n,n))},clear:function(t,e){var n,i=this.dom,r=this.ctx,o=i.width,a=i.height,s=(e=e||this.clearColor,this.motionBlur&&!t),l=this.lastFrameAlpha,u=this.dpr;(s&&(this.domBack||this.createBackBuffer(),this.ctxBack.globalCompositeOperation="copy",this.ctxBack.drawImage(i,0,0,o/u,a/u)),r.clearRect(0,0,o,a),e&&"transparent"!==e)&&(e.colorStops?(n=e.__canvasGradient||wc.getGradient(r,e,{x:0,y:0,width:o,height:a}),e.__canvasGradient=n):e.image&&(n=kc.prototype.getCanvasPattern.call(e,r)),r.save(),r.fillStyle=n||e,r.fillRect(0,0,o,a),r.restore());if(s){var c=this.domBack;r.save(),r.globalAlpha=l,r.drawImage(c,0,0,o,a),r.restore()}}};var Ic="undefined"!=typeof e&&(e.requestAnimationFrame&&e.requestAnimationFrame.bind(e)||e.msRequestAnimationFrame&&e.msRequestAnimationFrame.bind(e)||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame)||function(t){setTimeout(t,16)},Ac=new Ju(50),Tc={},Dc=0,Oc=5e3,Pc=/\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,Lc="12px sans-serif",Ec={measureText:function(t,e){var n=u();return n.font=e||Lc,n.measureText(t)}},Nc={left:1,right:1,center:1},Rc={top:1,bottom:1,middle:1},Bc=new zt,zc=function(){};zc.prototype={constructor:zc,drawRectText:function(t,e){var n=this.style;e=n.textRect||e,this.__dirty&&xe(n);var i=n.text;if(null!=i&&(i+=""),Be(i,n)){t.save();var r=this.transform;n.transformText?this.setTransform(t):r&&(Bc.copy(e),Bc.applyTransform(r),e=Bc),be(this,t,i,n,e),t.restore()}}},ze.prototype={constructor:ze,type:"displayable",__dirty:!0,invisible:!1,z:0,z2:0,zlevel:0,draggable:!1,dragging:!1,silent:!1,culling:!1,cursor:"pointer",rectHover:!1,progressive:!1,incremental:!1,inplace:!1,beforeBrush:function(t){},afterBrush:function(t){},brush:function(t,e){},getBoundingRect:function(){},contain:function(t,e){return this.rectContain(t,e)},traverse:function(t,e){t.call(e,this)},rectContain:function(t,e){var n=this.transformCoordToLocal(t,e);return this.getBoundingRect().contain(n[0],n[1])},dirty:function(){this.__dirty=!0,this._rect=null,this.__zr&&this.__zr.refresh()},animateStyle:function(t){return this.animate("style",t)},attrKV:function(t,e){"style"!==t?cc.prototype.attrKV.call(this,t,e):this.style.set(e)},setStyle:function(t,e){return this.style.set(t,e),this.dirty(!1),this},useStyle:function(t){return this.style=new wc(t,this),this.dirty(!1),this}},h(ze,cc),f(ze,zc),$e.prototype={constructor:$e,type:"image",brush:function(t,e){var n=this.style,i=n.image;n.bind(t,this,e);var r=this._image=Qt(i,this._image,this,this.onload);if(r&&ee(r)){var o=n.x||0,a=n.y||0,s=n.width,l=n.height,u=r.width/r.height;if(null==s&&null!=l?s=l*u:null==l&&null!=s?l=s/u:null==s&&null==l&&(s=r.width,l=r.height),this.setTransform(t),n.sWidth&&n.sHeight){var c=n.sx||0,h=n.sy||0;t.drawImage(r,c,h,n.sWidth,n.sHeight,o,a,s,l)}else if(n.sx&&n.sy){var f=s-(c=n.sx),d=l-(h=n.sy);t.drawImage(r,c,h,f,d,o,a,s,l)}else t.drawImage(r,o,a,s,l);null!=n.text&&(this.restoreTransform(t),this.drawRectText(t,this.getBoundingRect()))}},getBoundingRect:function(){var t=this.style;return this._rect||(this._rect=new zt(t.x||0,t.y||0,t.width||0,t.height||0)),this._rect}},h($e,ze);var $c=new zt(0,0,0,0),Fc=new zt(0,0,0,0),Vc=function(t,e,n){this.type="canvas";var i=!t.nodeName||"CANVAS"===t.nodeName.toUpperCase();this._opts=n=s({},n||{}),this.dpr=n.devicePixelRatio||ac,this._singleCanvas=i,this.root=t;var r=t.style;r&&(r["-webkit-tap-highlight-color"]="transparent",r["-webkit-user-select"]=r["user-select"]=r["-webkit-touch-callout"]="none",t.innerHTML=""),this.storage=e;var o=this._zlevelList=[],a=this._layers={};if(this._layerConfig={},this._needsManuallyCompositing=!1,i){var l=t.width,u=t.height;null!=n.width&&(l=n.width),null!=n.height&&(u=n.height),this.dpr=n.devicePixelRatio||1,t.width=l*this.dpr,t.height=u*this.dpr,this._width=l,this._height=u;var c=new Cc(t,this,this.dpr);c.__builtin__=!0,c.initContext(),a[314159]=c,c.zlevel=314159,o.push(314159),this._domRoot=t}else{this._width=this._getSize(0),this._height=this._getSize(1);var h=this._domRoot=Ge(this._width,this._height);t.appendChild(h)}this._hoverlayer=null,this._hoverElements=[]};Vc.prototype={constructor:Vc,getType:function(){return"canvas"},isSingleCanvas:function(){return this._singleCanvas},getViewportRoot:function(){return this._domRoot},getViewportRootOffset:function(){var t=this.getViewportRoot();if(t)return{offsetLeft:t.offsetLeft||0,offsetTop:t.offsetTop||0}},refresh:function(t){var e=this.storage.getDisplayList(!0),n=this._zlevelList;this._redrawId=Math.random(),this._paintList(e,t,this._redrawId);for(var i=0;i<n.length;i++){var r=n[i],o=this._layers[r];if(!o.__builtin__&&o.refresh){var a=0===i?this._backgroundColor:null;o.refresh(a)}}return this.refreshHover(),this},addHover:function(t,e){if(!t.__hoverMir){var n=new t.constructor({style:t.style,shape:t.shape});n.__from=t,t.__hoverMir=n,n.setStyle(e),this._hoverElements.push(n)}},removeHover:function(t){var e=t.__hoverMir,n=this._hoverElements,i=c(n,e);i>=0&&n.splice(i,1),t.__hoverMir=null},clearHover:function(t){for(var e=this._hoverElements,n=0;n<e.length;n++){var i=e[n].__from;i&&(i.__hoverMir=null)}e.length=0},refreshHover:function(){var t=this._hoverElements,e=t.length,n=this._hoverlayer;if(n&&n.clear(),e){Ut(t,this.storage.displayableSortFunc),n||(n=this._hoverlayer=this.getLayer(1e5));var i={};n.ctx.save();for(var r=0;r<e;){var o=t[r],a=o.__from;a&&a.__zr?(r++,a.invisible||(o.transform=a.transform,o.invTransform=a.invTransform,o.__clipPaths=a.__clipPaths,this._doPaintEl(o,n,!0,i))):(t.splice(r,1),a.__hoverMir=null,e--)}n.ctx.restore()}},getHoverLayer:function(){return this.getLayer(1e5)},_paintList:function(t,e,n){if(this._redrawId===n){e=e||!1,this._updateLayerStatus(t);var i=this._doPaintList(t,e);if(this._needsManuallyCompositing&&this._compositeManually(),!i){var r=this;Ic(function(){r._paintList(t,e,n)})}}},_compositeManually:function(){var t=this.getLayer(314159).ctx,e=this._domRoot.width,n=this._domRoot.height;t.clearRect(0,0,e,n),this.eachBuiltinLayer(function(i){i.virtual&&t.drawImage(i.dom,0,0,e,n)})},_doPaintList:function(t,e){for(var n=[],i=0;i<this._zlevelList.length;i++){var r=this._zlevelList[i];(s=this._layers[r]).__builtin__&&s!==this._hoverlayer&&(s.__dirty||e)&&n.push(s)}for(var o=!0,a=0;a<n.length;a++){var s=n[a],l=s.ctx,u={};l.save();var c=e?s.__startIndex:s.__drawIndex,h=!e&&s.incremental&&Date.now,f=h&&Date.now(),d=s.zlevel===this._zlevelList[0]?this._backgroundColor:null;if(s.__startIndex===s.__endIndex)s.clear(!1,d);else if(c===s.__startIndex){var g=t[c];g.incremental&&g.notClear&&!e||s.clear(!1,d)}-1===c&&(console.error("For some unknown reason. drawIndex is -1"," at components/echarts/echarts.simple.min.js:22"),c=s.__startIndex);for(var v=c;v<s.__endIndex;v++){var m=t[v];if(this._doPaintEl(m,s,e,u),m.__dirty=!1,h&&Date.now()-f>15)break}s.__drawIndex=v,s.__drawIndex<s.__endIndex&&(o=!1),u.prevElClipPaths&&l.restore(),l.restore()}return xu.wxa&&p(this._layers,function(t){t&&t.ctx&&t.ctx.draw&&t.ctx.draw()}),o},_doPaintEl:function(t,e,n,i){var r=e.ctx,o=t.transform;if((e.__dirty||n)&&!t.invisible&&0!==t.style.opacity&&(!o||o[0]||o[3])&&(!t.culling||!je(t,this._width,this._height))){var a=t.__clipPaths;i.prevElClipPaths&&!He(a,i.prevElClipPaths)||(i.prevElClipPaths&&(e.ctx.restore(),i.prevElClipPaths=null,i.prevEl=null),a&&(r.save(),We(a,r),i.prevElClipPaths=a)),t.beforeBrush&&t.beforeBrush(r),t.brush(r,i.prevEl||null),i.prevEl=t,t.afterBrush&&t.afterBrush(r)}},getLayer:function(t,e){this._singleCanvas&&!this._needsManuallyCompositing&&(t=314159);var n=this._layers[t];return n||((n=new Cc("zr_"+t,this,this.dpr)).zlevel=t,n.__builtin__=!0,this._layerConfig[t]&&o(n,this._layerConfig[t],!0),e&&(n.virtual=e),this.insertLayer(t,n),n.initContext()),n},insertLayer:function(t,e){var n=this._layers,i=this._zlevelList,r=i.length,o=null,a=-1,s=this._domRoot;if(n[t])lc("ZLevel "+t+" has been used already");else if(Ve(e)){if(r>0&&t>i[0]){for(a=0;a<r-1&&!(i[a]<t&&i[a+1]>t);a++);o=n[i[a]]}if(i.splice(a+1,0,t),n[t]=e,!e.virtual)if(o){var l=o.dom;l.nextSibling?s.insertBefore(e.dom,l.nextSibling):s.appendChild(e.dom)}else s.firstChild?s.insertBefore(e.dom,s.firstChild):s.appendChild(e.dom)}else lc("Layer of zlevel "+t+" is not valid")},eachLayer:function(t,e){var n,i,r=this._zlevelList;for(i=0;i<r.length;i++)n=r[i],t.call(e,this._layers[n],n)},eachBuiltinLayer:function(t,e){var n,i,r,o=this._zlevelList;for(r=0;r<o.length;r++)i=o[r],(n=this._layers[i]).__builtin__&&t.call(e,n,i)},eachOtherLayer:function(t,e){var n,i,r,o=this._zlevelList;for(r=0;r<o.length;r++)i=o[r],(n=this._layers[i]).__builtin__||t.call(e,n,i)},getLayers:function(){return this._layers},_updateLayerStatus:function(t){function e(t){n&&(n.__endIndex!==t&&(n.__dirty=!0),n.__endIndex=t)}if(this.eachBuiltinLayer(function(t,e){t.__dirty=t.__used=!1}),this._singleCanvas)for(r=1;r<t.length;r++)if((a=t[r]).zlevel!==t[r-1].zlevel||a.incremental){this._needsManuallyCompositing=!0;break}for(var n=null,i=0,r=0;r<t.length;r++){var o,a=t[r],s=a.zlevel;a.incremental?((o=this.getLayer(s+.001,this._needsManuallyCompositing)).incremental=!0,i=1):o=this.getLayer(s+(i>0?.01:0),this._needsManuallyCompositing),o.__builtin__||lc("ZLevel "+s+" has been used by unkown layer "+o.id),o!==n&&(o.__used=!0,o.__startIndex!==r&&(o.__dirty=!0),o.__startIndex=r,o.incremental?o.__drawIndex=-1:o.__drawIndex=r,e(r),n=o),a.__dirty&&(o.__dirty=!0,o.incremental&&o.__drawIndex<0&&(o.__drawIndex=r))}e(r),this.eachBuiltinLayer(function(t,e){!t.__used&&t.getElementCount()>0&&(t.__dirty=!0,t.__startIndex=t.__endIndex=t.__drawIndex=0),t.__dirty&&t.__drawIndex<0&&(t.__drawIndex=t.__startIndex)})},clear:function(){return this.eachBuiltinLayer(this._clearLayer),this},_clearLayer:function(t){t.clear()},setBackgroundColor:function(t){this._backgroundColor=t},configLayer:function(t,e){if(e){var n=this._layerConfig;n[t]?o(n[t],e,!0):n[t]=e;for(var i=0;i<this._zlevelList.length;i++){var r=this._zlevelList[i];r!==t&&r!==t+.01||o(this._layers[r],n[t],!0)}}},delLayer:function(t){var e=this._layers,n=this._zlevelList,i=e[t];i&&(i.dom.parentNode.removeChild(i.dom),delete e[t],n.splice(c(n,t),1))},resize:function(t,e){if(this._domRoot.style){var n=this._domRoot;n.style.display="none";var i=this._opts;if(null!=t&&(i.width=t),null!=e&&(i.height=e),t=this._getSize(0),e=this._getSize(1),n.style.display="",this._width!=t||e!=this._height){for(var r in n.style.width=t+"px",n.style.height=e+"px",this._layers)this._layers.hasOwnProperty(r)&&this._layers[r].resize(t,e);p(this._progressiveLayers,function(n){n.resize(t,e)}),this.refresh(!0)}this._width=t,this._height=e}else{if(null==t||null==e)return;this._width=t,this._height=e,this.getLayer(314159).resize(t,e)}return this},clearLayer:function(t){var e=this._layers[t];e&&e.clear()},dispose:function(){this.root.innerHTML="",this.root=this.storage=this._domRoot=this._layers=null},getRenderedCanvas:function(t){if(t=t||{},this._singleCanvas&&!this._compositeManually)return this._layers[314159].dom;var e=new Cc("image",this,t.pixelRatio||this.dpr);if(e.initContext(),e.clear(!1,t.backgroundColor||this._backgroundColor),t.pixelRatio<=this.dpr){this.refresh();var n=e.dom.width,i=e.dom.height,r=e.ctx;this.eachLayer(function(t){t.__builtin__?r.drawImage(t.dom,0,0,n,i):t.renderToCanvas&&(e.ctx.save(),t.renderToCanvas(e.ctx),e.ctx.restore())})}else for(var o={},a=this.storage.getDisplayList(!0),s=0;s<a.length;s++){var l=a[s];this._doPaintEl(l,e,!0,o)}return e.dom},getWidth:function(){return this._width},getHeight:function(){return this._height},_getSize:function(t){var e=this._opts,i=["width","height"][t],r=["clientWidth","clientHeight"][t],o=["paddingLeft","paddingTop"][t],a=["paddingRight","paddingBottom"][t];if(null!=e[i]&&"auto"!==e[i])return parseFloat(e[i]);var s=this.root,l=n.defaultView.getComputedStyle(s);return(s[r]||Fe(l[i])||Fe(s.style[i]))-(Fe(l[o])||0)-(Fe(l[a])||0)|0},pathToImage:function(t,e){e=e||this.dpr;var i=n.createElement("canvas"),r=i.getContext("2d"),o=t.getBoundingRect(),a=t.style,s=a.shadowBlur*e,l=a.shadowOffsetX*e,u=a.shadowOffsetY*e,c=a.hasStroke()?a.lineWidth:0,h=Math.max(c/2,-l+s),f=Math.max(c/2,l+s),d=Math.max(c/2,-u+s),p=Math.max(c/2,u+s),g=o.width+h+f,v=o.height+d+p;i.width=g*e,i.height=v*e,r.scale(e,e),r.clearRect(0,0,g,v),r.dpr=e;var m={position:t.position,rotation:t.rotation,scale:t.scale};t.position=[h-o.x,d-o.y],t.rotation=0,t.scale=[1,1],t.updateTransform(),t&&t.brush(r);var y=new $e({style:{x:0,y:0,image:i}});return null!=m.position&&(y.position=t.position=m.position),null!=m.rotation&&(y.rotation=t.rotation=m.rotation),null!=m.scale&&(y.scale=t.scale=m.scale),y}};var jc="undefined"!=typeof e&&!!e.addEventListener,Hc=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Wc=function(t){t=t||{},this.stage=t.stage||{},this.onframe=t.onframe||function(){},this._clips=[],this._running=!1,this._time,this._pausedTime,this._pauseStart,this._paused=!1,zu.call(this)};Wc.prototype={constructor:Wc,addClip:function(t){this._clips.push(t)},addAnimator:function(t){t.animation=this;for(var e=t.getClips(),n=0;n<e.length;n++)this.addClip(e[n])},removeClip:function(t){var e=c(this._clips,t);e>=0&&this._clips.splice(e,1)},removeAnimator:function(t){for(var e=t.getClips(),n=0;n<e.length;n++)this.removeClip(e[n]);t.animation=null},_update:function(){for(var t=(new Date).getTime()-this._pausedTime,e=t-this._time,n=this._clips,i=n.length,r=[],o=[],a=0;a<i;a++){var s=n[a],l=s.step(t,e);l&&(r.push(l),o.push(s))}for(a=0;a<i;)n[a]._needsRemove?(n[a]=n[i-1],n.pop(),i--):a++;for(i=r.length,a=0;a<i;a++)o[a].fire(r[a]);this._time=t,this.onframe(e),this.trigger("frame",e),this.stage.update&&this.stage.update()},_startLoop:function(){function t(){e._running&&(Ic(t),!e._paused&&e._update())}var e=this;this._running=!0,Ic(t)},start:function(){this._time=(new Date).getTime(),this._pausedTime=0,this._startLoop()},stop:function(){this._running=!1},pause:function(){this._paused||(this._pauseStart=(new Date).getTime(),this._paused=!0)},resume:function(){this._paused&&(this._pausedTime+=(new Date).getTime()-this._pauseStart,this._paused=!1)},clear:function(){this._clips=[]},isFinished:function(){return!this._clips.length},animate:function(t,e){var n=new rc(t,(e=e||{}).loop,e.getter,e.setter);return this.addAnimator(n),n}},f(Wc,zu);var Gc=function(){this._track=[]};Gc.prototype={constructor:Gc,recognize:function(t,e,n){return this._doTrack(t,e,n),this._recognize(t)},clear:function(){return this._track.length=0,this},_doTrack:function(t,e,n){var i=t.touches;if(i){for(var r={points:[],touches:[],target:e,event:t},o=0,a=i.length;o<a;o++){var s=i[o],l=qe(n,s,{});r.points.push([l.zrX,l.zrY]),r.touches.push(s)}this._track.push(r)}},_recognize:function(t){for(var e in Uc)if(Uc.hasOwnProperty(e)){var n=Uc[e](this._track,t);if(n)return n}}};var Uc={pinch:function(t,e){var n=t.length;if(n){var i=(t[n-1]||{}).points,r=(t[n-2]||{}).points||i;if(r&&r.length>1&&i&&i.length>1){var o=Je(i)/Je(r);!isFinite(o)&&(o=1),e.pinchScale=o;var a=Qe(i);return e.pinchX=a[0],e.pinchY=a[1],{type:"pinch",target:t[0].target,event:e}}}}},qc=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],Xc=["touchstart","touchend","touchmove"],Yc={pointerdown:1,pointerup:1,pointermove:1,pointerout:1},Zc=g(qc,function(t){var e=t.replace("mouse","pointer");return Yc[e]?e:t}),Kc={mousemove:function(t){t=Ye(this.dom,t),this.trigger("mousemove",t)},mouseout:function(t){var e=(t=Ye(this.dom,t)).toElement||t.relatedTarget;if(e!=this.dom)for(;e&&9!=e.nodeType;){if(e===this.dom)return;e=e.parentNode}this.trigger("mouseout",t)},touchstart:function(t){(t=Ye(this.dom,t)).zrByTouch=!0,this._lastTouchMoment=new Date,en(this,t,"start"),Kc.mousemove.call(this,t),Kc.mousedown.call(this,t),nn(this)},touchmove:function(t){(t=Ye(this.dom,t)).zrByTouch=!0,en(this,t,"change"),Kc.mousemove.call(this,t),nn(this)},touchend:function(t){(t=Ye(this.dom,t)).zrByTouch=!0,en(this,t,"end"),Kc.mouseup.call(this,t),+new Date-this._lastTouchMoment<300&&Kc.click.call(this,t),nn(this)},pointerdown:function(t){Kc.mousedown.call(this,t)},pointermove:function(t){rn(t)||Kc.mousemove.call(this,t)},pointerup:function(t){Kc.mouseup.call(this,t)},pointerout:function(t){rn(t)||Kc.mouseout.call(this,t)}};p(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],function(t){Kc[t]=function(e){e=Ye(this.dom,e),this.trigger(t,e)}});var Jc=an.prototype;Jc.dispose=function(){for(var t=qc.concat(Xc),e=0;e<t.length;e++){var n=t[e];Ke(this.dom,tn(n),this._handlers[n])}},Jc.setCursor=function(t){this.dom.style&&(this.dom.style.cursor=t||"default")},f(an,zu);var Qc=!xu.canvasSupported,th={canvas:Vc},eh=function(t,e,n){n=n||{},this.dom=e,this.id=t;var i=this,r=new mc,o=n.renderer;if(Qc){if(!th.vml)throw new Error("You need to require 'zrender/vml/vml' to support IE8");o="vml"}else o&&th[o]||(o="canvas");var a=new th[o](e,r,n,t);this.storage=r,this.painter=a;var s=xu.node||xu.worker?null:new an(a.getViewportRoot());this.handler=new Vu(r,a,s,a.root),this.animation=new Wc({stage:{update:y(this.flush,this)}}),this.animation.start(),this._needsRefresh;var l=r.delFromStorage,u=r.addToStorage;r.delFromStorage=function(t){l.call(r,t),t&&t.removeSelfFromZr(i)},r.addToStorage=function(t){u.call(r,t),t.addSelfToZr(i)}};eh.prototype={constructor:eh,getId:function(){return this.id},add:function(t){this.storage.addRoot(t),this._needsRefresh=!0},remove:function(t){this.storage.delRoot(t),this._needsRefresh=!0},configLayer:function(t,e){this.painter.configLayer&&this.painter.configLayer(t,e),this._needsRefresh=!0},setBackgroundColor:function(t){this.painter.setBackgroundColor&&this.painter.setBackgroundColor(t),this._needsRefresh=!0},refreshImmediately:function(){this._needsRefresh=!1,this.painter.refresh(),this._needsRefresh=!1},refresh:function(){this._needsRefresh=!0},flush:function(){var t;this._needsRefresh&&(t=!0,this.refreshImmediately()),this._needsRefreshHover&&(t=!0,this.refreshHoverImmediately()),t&&this.trigger("rendered")},addHover:function(t,e){this.painter.addHover&&(this.painter.addHover(t,e),this.refreshHover())},removeHover:function(t){this.painter.removeHover&&(this.painter.removeHover(t),this.refreshHover())},clearHover:function(){this.painter.clearHover&&(this.painter.clearHover(),this.refreshHover())},refreshHover:function(){this._needsRefreshHover=!0},refreshHoverImmediately:function(){this._needsRefreshHover=!1,this.painter.refreshHover&&this.painter.refreshHover()},resize:function(t){t=t||{},this.painter.resize(t.width,t.height),this.handler.resize()},clearAnimation:function(){this.animation.clear()},getWidth:function(){return this.painter.getWidth()},getHeight:function(){return this.painter.getHeight()},pathToImage:function(t,e){return this.painter.pathToImage(t,e)},setCursorStyle:function(t){this.handler.setCursorStyle(t)},findHover:function(t,e){return this.handler.findHover(t,e)},on:function(t,e,n){this.handler.on(t,e,n)},off:function(t,e){this.handler.off(t,e)},trigger:function(t,e){this.handler.trigger(t,e)},clear:function(){this.storage.delRoot(),this.painter.clear()},dispose:function(){this.animation.stop(),this.clear(),this.storage.dispose(),this.painter.dispose(),this.handler.dispose(),this.animation=this.storage=this.painter=this.handler=null}};var nh=p,ih=S,rh=x,oh="series\0",ah=["fontStyle","fontWeight","fontSize","fontFamily","rich","tag","color","textBorderColor","textBorderWidth","width","height","lineHeight","align","verticalAlign","baseline","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY","textShadowColor","textShadowBlur","textShadowOffsetX","textShadowOffsetY","backgroundColor","borderColor","borderWidth","borderRadius","padding"],sh=0,lh=".",uh="___EC__COMPONENT__CONTAINER___",ch=0,hh=function(t){for(var e=0;e<t.length;e++)t[e][1]||(t[e][1]=t[e][0]);return function(e,n,i){for(var r={},o=0;o<t.length;o++){var a=t[o][1];if(!(n&&c(n,a)>=0||i&&c(i,a)<0)){var s=e.getShallow(a);null!=s&&(r[t[o][0]]=s)}}return r}},fh=hh([["lineWidth","width"],["stroke","color"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),dh={getLineStyle:function(t){var e=fh(this,t),n=this.getLineDash(e.lineWidth);return n&&(e.lineDash=n),e},getLineDash:function(t){null==t&&(t=1);var e=this.get("type"),n=Math.max(t,2),i=4*t;return"solid"===e||null==e?null:"dashed"===e?[i,i]:[n,n]}},ph=hh([["fill","color"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["opacity"],["shadowColor"]]),gh={getAreaStyle:function(t,e){return ph(this,t,e)}},vh=Math.pow,mh=Math.sqrt,yh=1e-8,_h=1e-4,xh=mh(3),wh=1/3,bh=F(),Sh=F(),Mh=F(),kh=Math.min,Ch=Math.max,Ih=Math.sin,Ah=Math.cos,Th=2*Math.PI,Dh=F(),Oh=F(),Ph=F(),Lh=[],Eh=[],Nh={M:1,L:2,C:3,Q:4,A:5,Z:6,R:7},Rh=[],Bh=[],zh=[],$h=[],Fh=Math.min,Vh=Math.max,jh=Math.cos,Hh=Math.sin,Wh=Math.sqrt,Gh=Math.abs,Uh="undefined"!=typeof Float32Array,qh=function(t){this._saveData=!t,this._saveData&&(this.data=[]),this._ctx=null};qh.prototype={constructor:qh,_xi:0,_yi:0,_x0:0,_y0:0,_ux:0,_uy:0,_len:0,_lineDash:null,_dashOffset:0,_dashIdx:0,_dashSum:0,setScale:function(t,e){this._ux=Gh(1/ac/t)||0,this._uy=Gh(1/ac/e)||0},getContext:function(){return this._ctx},beginPath:function(t){return this._ctx=t,t&&t.beginPath(),t&&(this.dpr=t.dpr),this._saveData&&(this._len=0),this._lineDash&&(this._lineDash=null,this._dashOffset=0),this},moveTo:function(t,e){return this.addData(Nh.M,t,e),this._ctx&&this._ctx.moveTo(t,e),this._x0=t,this._y0=e,this._xi=t,this._yi=e,this},lineTo:function(t,e){var n=Gh(t-this._xi)>this._ux||Gh(e-this._yi)>this._uy||this._len<5;return this.addData(Nh.L,t,e),this._ctx&&n&&(this._needsDash()?this._dashedLineTo(t,e):this._ctx.lineTo(t,e)),n&&(this._xi=t,this._yi=e),this},bezierCurveTo:function(t,e,n,i,r,o){return this.addData(Nh.C,t,e,n,i,r,o),this._ctx&&(this._needsDash()?this._dashedBezierTo(t,e,n,i,r,o):this._ctx.bezierCurveTo(t,e,n,i,r,o)),this._xi=r,this._yi=o,this},quadraticCurveTo:function(t,e,n,i){return this.addData(Nh.Q,t,e,n,i),this._ctx&&(this._needsDash()?this._dashedQuadraticTo(t,e,n,i):this._ctx.quadraticCurveTo(t,e,n,i)),this._xi=n,this._yi=i,this},arc:function(t,e,n,i,r,o){return this.addData(Nh.A,t,e,n,n,i,r-i,0,o?0:1),this._ctx&&this._ctx.arc(t,e,n,i,r,o),this._xi=jh(r)*n+t,this._yi=Hh(r)*n+t,this},arcTo:function(t,e,n,i,r){return this._ctx&&this._ctx.arcTo(t,e,n,i,r),this},rect:function(t,e,n,i){return this._ctx&&this._ctx.rect(t,e,n,i),this.addData(Nh.R,t,e,n,i),this},closePath:function(){this.addData(Nh.Z);var t=this._ctx,e=this._x0,n=this._y0;return t&&(this._needsDash()&&this._dashedLineTo(e,n),t.closePath()),this._xi=e,this._yi=n,this},fill:function(t){t&&t.fill(),this.toStatic()},stroke:function(t){t&&t.stroke(),this.toStatic()},setLineDash:function(t){if(t instanceof Array){this._lineDash=t,this._dashIdx=0;for(var e=0,n=0;n<t.length;n++)e+=t[n];this._dashSum=e}return this},setLineDashOffset:function(t){return this._dashOffset=t,this},len:function(){return this._len},setData:function(t){var e=t.length;this.data&&this.data.length==e||!Uh||(this.data=new Float32Array(e));for(var n=0;n<e;n++)this.data[n]=t[n];this._len=e},appendPath:function(t){t instanceof Array||(t=[t]);for(var e=t.length,n=0,i=this._len,r=0;r<e;r++)n+=t[r].len();for(Uh&&this.data instanceof Float32Array&&(this.data=new Float32Array(i+n)),r=0;r<e;r++)for(var o=t[r].data,a=0;a<o.length;a++)this.data[i++]=o[a];this._len=i},addData:function(t){if(this._saveData){var e=this.data;this._len+arguments.length>e.length&&(this._expandData(),e=this.data);for(var n=0;n<arguments.length;n++)e[this._len++]=arguments[n];this._prevCmd=t}},_expandData:function(){if(!(this.data instanceof Array)){for(var t=[],e=0;e<this._len;e++)t[e]=this.data[e];this.data=t}},_needsDash:function(){return this._lineDash},_dashedLineTo:function(t,e){var n,i,r=this._dashSum,o=this._dashOffset,a=this._lineDash,s=this._ctx,l=this._xi,u=this._yi,c=t-l,h=e-u,f=Wh(c*c+h*h),d=l,p=u,g=a.length;for(c/=f,h/=f,o<0&&(o=r+o),d-=(o%=r)*c,p-=o*h;c>0&&d<=t||c<0&&d>=t||0==c&&(h>0&&p<=e||h<0&&p>=e);)d+=c*(n=a[i=this._dashIdx]),p+=h*n,this._dashIdx=(i+1)%g,c>0&&d<l||c<0&&d>l||h>0&&p<u||h<0&&p>u||s[i%2?"moveTo":"lineTo"](c>=0?Fh(d,t):Vh(d,t),h>=0?Fh(p,e):Vh(p,e));c=d-t,h=p-e,this._dashOffset=-Wh(c*c+h*h)},_dashedBezierTo:function(t,e,n,i,r,o){var a,s,l,u,c,h=this._dashSum,f=this._dashOffset,d=this._lineDash,p=this._ctx,g=this._xi,v=this._yi,m=On,y=0,_=this._dashIdx,x=d.length,w=0;for(f<0&&(f=h+f),f%=h,a=0;a<1;a+=.1)s=m(g,t,n,r,a+.1)-m(g,t,n,r,a),l=m(v,e,i,o,a+.1)-m(v,e,i,o,a),y+=Wh(s*s+l*l);for(;_<x&&!((w+=d[_])>f);_++);for(a=(w-f)/y;a<=1;)u=m(g,t,n,r,a),c=m(v,e,i,o,a),_%2?p.moveTo(u,c):p.lineTo(u,c),a+=d[_]/y,_=(_+1)%x;_%2!=0&&p.lineTo(r,o),s=r-u,l=o-c,this._dashOffset=-Wh(s*s+l*l)},_dashedQuadraticTo:function(t,e,n,i){var r=n,o=i;n=(n+2*t)/3,i=(i+2*e)/3,t=(this._xi+2*t)/3,e=(this._yi+2*e)/3,this._dashedBezierTo(t,e,n,i,r,o)},toStatic:function(){var t=this.data;t instanceof Array&&(t.length=this._len,Uh&&(this.data=new Float32Array(t)))},getBoundingRect:function(){Rh[0]=Rh[1]=zh[0]=zh[1]=Number.MAX_VALUE,Bh[0]=Bh[1]=$h[0]=$h[1]=-Number.MAX_VALUE;for(var t=this.data,e=0,n=0,i=0,r=0,o=0;o<t.length;){var a=t[o++];switch(1==o&&(i=e=t[o],r=n=t[o+1]),a){case Nh.M:e=i=t[o++],n=r=t[o++],zh[0]=i,zh[1]=r,$h[0]=i,$h[1]=r;break;case Nh.L:Hn(e,n,t[o],t[o+1],zh,$h),e=t[o++],n=t[o++];break;case Nh.C:Wn(e,n,t[o++],t[o++],t[o++],t[o++],t[o],t[o+1],zh,$h),e=t[o++],n=t[o++];break;case Nh.Q:Gn(e,n,t[o++],t[o++],t[o],t[o+1],zh,$h),e=t[o++],n=t[o++];break;case Nh.A:var s=t[o++],l=t[o++],u=t[o++],c=t[o++],h=t[o++],f=t[o++]+h,d=(t[o++],1-t[o++]);1==o&&(i=jh(h)*u+s,r=Hh(h)*c+l),Un(s,l,u,c,h,f,d,zh,$h),e=jh(f)*u+s,n=Hh(f)*c+l;break;case Nh.R:Hn(i=e=t[o++],r=n=t[o++],i+t[o++],r+t[o++],zh,$h);break;case Nh.Z:e=i,n=r}Z(Rh,Rh,zh),K(Bh,Bh,$h)}return 0===o&&(Rh[0]=Rh[1]=Bh[0]=Bh[1]=0),new zt(Rh[0],Rh[1],Bh[0]-Rh[0],Bh[1]-Rh[1])},rebuildPath:function(t){for(var e,n,i,r,o,a,s=this.data,l=this._ux,u=this._uy,c=this._len,h=0;h<c;){var f=s[h++];switch(1==h&&(e=i=s[h],n=r=s[h+1]),f){case Nh.M:e=i=s[h++],n=r=s[h++],t.moveTo(i,r);break;case Nh.L:o=s[h++],a=s[h++],(Gh(o-i)>l||Gh(a-r)>u||h===c-1)&&(t.lineTo(o,a),i=o,r=a);break;case Nh.C:t.bezierCurveTo(s[h++],s[h++],s[h++],s[h++],s[h++],s[h++]),i=s[h-2],r=s[h-1];break;case Nh.Q:t.quadraticCurveTo(s[h++],s[h++],s[h++],s[h++]),i=s[h-2],r=s[h-1];break;case Nh.A:var d=s[h++],p=s[h++],g=s[h++],v=s[h++],m=s[h++],y=s[h++],_=s[h++],x=s[h++],w=g>v?g:v,b=g>v?1:g/v,S=g>v?v/g:1,M=m+y;Math.abs(g-v)>.001?(t.translate(d,p),t.rotate(_),t.scale(b,S),t.arc(0,0,w,m,M,1-x),t.scale(1/b,1/S),t.rotate(-_),t.translate(-d,-p)):t.arc(d,p,w,m,M,1-x),1==h&&(e=jh(m)*g+d,n=Hh(m)*v+p),i=jh(M)*g+d,r=Hh(M)*v+p;break;case Nh.R:e=i=s[h],n=r=s[h+1],t.rect(s[h++],s[h++],s[h++],s[h++]);break;case Nh.Z:t.closePath(),i=e,r=n}}}},qh.CMD=Nh;var Xh=2*Math.PI,Yh=2*Math.PI,Zh=qh.CMD,Kh=2*Math.PI,Jh=1e-4,Qh=[-1,-1,-1],tf=[-1,-1],ef=kc.prototype.getCanvasPattern,nf=Math.abs,rf=new qh(!0);si.prototype={constructor:si,type:"path",__dirtyPath:!0,strokeContainThreshold:5,brush:function(t,e){var n,i=this.style,r=this.path||rf,o=i.hasStroke(),a=i.hasFill(),s=i.fill,l=i.stroke,u=a&&!!s.colorStops,c=o&&!!l.colorStops,h=a&&!!s.image,f=o&&!!l.image;(i.bind(t,this,e),this.setTransform(t),this.__dirty)&&(u&&(n=n||this.getBoundingRect(),this._fillGradient=i.getGradient(t,s,n)),c&&(n=n||this.getBoundingRect(),this._strokeGradient=i.getGradient(t,l,n)));u?t.fillStyle=this._fillGradient:h&&(t.fillStyle=ef.call(s,t)),c?t.strokeStyle=this._strokeGradient:f&&(t.strokeStyle=ef.call(l,t));var d=i.lineDash,p=i.lineDashOffset,g=!!t.setLineDash,v=this.getGlobalScale();r.setScale(v[0],v[1]),this.__dirtyPath||d&&!g&&o?(r.beginPath(t),d&&!g&&(r.setLineDash(d),r.setLineDashOffset(p)),this.buildPath(r,this.shape,!1),this.path&&(this.__dirtyPath=!1)):(t.beginPath(),this.path.rebuildPath(t)),a&&r.fill(t),d&&g&&(t.setLineDash(d),t.lineDashOffset=p),o&&r.stroke(t),d&&g&&t.setLineDash([]),null!=i.text&&(this.restoreTransform(t),this.drawRectText(t,this.getBoundingRect()))},buildPath:function(t,e,n){},createPathProxy:function(){this.path=new qh},getBoundingRect:function(){var t=this._rect,e=this.style,n=!t;if(n){var i=this.path;i||(i=this.path=new qh),this.__dirtyPath&&(i.beginPath(),this.buildPath(i,this.shape,!1)),t=i.getBoundingRect()}if(this._rect=t,e.hasStroke()){var r=this._rectWithStroke||(this._rectWithStroke=t.clone());if(this.__dirty||n){r.copy(t);var o=e.lineWidth,a=e.strokeNoScale?this.getLineScale():1;e.hasFill()||(o=Math.max(o,this.strokeContainThreshold||4)),a>1e-10&&(r.width+=o/a,r.height+=o/a,r.x-=o/a/2,r.y-=o/a/2)}return r}return t},contain:function(t,e){var n=this.transformCoordToLocal(t,e),i=this.getBoundingRect(),r=this.style;if(t=n[0],e=n[1],i.contain(t,e)){var o=this.path.data;if(r.hasStroke()){var a=r.lineWidth,s=r.strokeNoScale?this.getLineScale():1;if(s>1e-10&&(r.hasFill()||(a=Math.max(a,this.strokeContainThreshold)),ai(o,a/s,t,e)))return!0}if(r.hasFill())return oi(o,t,e)}return!1},dirty:function(t){null==t&&(t=!0),t&&(this.__dirtyPath=t,this._rect=null),this.__dirty=!0,this.__zr&&this.__zr.refresh(),this.__clipTarget&&this.__clipTarget.dirty()},animateShape:function(t){return this.animate("shape",t)},attrKV:function(t,e){"shape"===t?(this.setShape(e),this.__dirtyPath=!0,this._rect=null):ze.prototype.attrKV.call(this,t,e)},setShape:function(t,e){var n=this.shape;if(n){if(S(t))for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);else n[t]=e;this.dirty(!0)}return this},getLineScale:function(){var t=this.transform;return t&&nf(t[0]-1)>1e-10&&nf(t[3]-1)>1e-10?Math.sqrt(nf(t[0]*t[3]-t[2]*t[1])):1}},si.extend=function(t){var e=function(e){si.call(this,e),t.style&&this.style.extendFrom(t.style,!1);var n=t.shape;if(n){this.shape=this.shape||{};var i=this.shape;for(var r in n)!i.hasOwnProperty(r)&&n.hasOwnProperty(r)&&(i[r]=n[r])}t.init&&t.init.call(this,e)};for(var n in h(e,si),t)"style"!==n&&"shape"!==n&&(e.prototype[n]=t[n]);return e},h(si,ze);var of=qh.CMD,af=[[],[],[]],sf=Math.sqrt,lf=Math.atan2,uf=function(t,e){var n,i,r,o,a,s,l=t.data,u=of.M,c=of.C,h=of.L,f=of.R,d=of.A,p=of.Q;for(r=0,o=0;r<l.length;){switch(n=l[r++],o=r,i=0,n){case u:case h:i=1;break;case c:i=3;break;case p:i=2;break;case d:var g=e[4],v=e[5],m=sf(e[0]*e[0]+e[1]*e[1]),y=sf(e[2]*e[2]+e[3]*e[3]),_=lf(-e[1]/y,e[0]/m);l[r]*=m,l[r++]+=g,l[r]*=y,l[r++]+=v,l[r++]*=m,l[r++]*=y,l[r++]+=_,l[r++]+=_,o=r+=2;break;case f:s[0]=l[r++],s[1]=l[r++],Y(s,s,e),l[o++]=s[0],l[o++]=s[1],s[0]+=l[r++],s[1]+=l[r++],Y(s,s,e),l[o++]=s[0],l[o++]=s[1]}for(a=0;a<i;a++)(s=af[a])[0]=l[r++],s[1]=l[r++],Y(s,s,e),l[o++]=s[0],l[o++]=s[1]}},cf=["m","M","l","L","v","V","h","H","z","Z","c","C","q","Q","t","T","s","S","a","A"],hf=Math.sqrt,ff=Math.sin,df=Math.cos,pf=Math.PI,gf=function(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])},vf=function(t,e){return(t[0]*e[0]+t[1]*e[1])/(gf(t)*gf(e))},mf=function(t,e){return(t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(vf(t,e))},yf=function(t){ze.call(this,t)};yf.prototype={constructor:yf,type:"text",brush:function(t,e){var n=this.style;this.__dirty&&xe(n),n.fill=n.stroke=n.shadowBlur=n.shadowColor=n.shadowOffsetX=n.shadowOffsetY=null;var i=n.text;null!=i&&(i+=""),n.bind(t,this,e),Be(i,n)&&(this.setTransform(t),be(this,t,i,n),this.restoreTransform(t))},getBoundingRect:function(){var t=this.style;if(this.__dirty&&xe(t),!this._rect){var e=t.text;null!=e?e+="":e="";var n=ie(t.text+"",t.font,t.textAlign,t.textVerticalAlign,t.textPadding,t.rich);if(n.x+=t.x||0,n.y+=t.y||0,Le(t.textStroke,t.textStrokeWidth)){var i=t.textStrokeWidth;n.x-=i/2,n.y-=i/2,n.width+=i,n.height+=i}this._rect=n}return this._rect}},h(yf,ze);var _f=si.extend({type:"circle",shape:{cx:0,cy:0,r:0},buildPath:function(t,e,n){n&&t.moveTo(e.cx+e.r,e.cy),t.arc(e.cx,e.cy,e.r,0,2*Math.PI,!0)}}),xf=[["shadowBlur",0],["shadowColor","#000"],["shadowOffsetX",0],["shadowOffsetY",0]],wf=function(t){return xu.browser.ie&&xu.browser.version>=11?function(){var e,n=this.__clipPaths,i=this.style;if(n)for(var r=0;r<n.length;r++){var o=n[r],a=o&&o.shape,s=o&&o.type;if(a&&("sector"===s&&a.startAngle===a.endAngle||"rect"===s&&(!a.width||!a.height))){for(l=0;l<xf.length;l++)xf[l][2]=i[xf[l][0]],i[xf[l][0]]=xf[l][1];e=!0;break}}if(t.apply(this,arguments),e)for(var l=0;l<xf.length;l++)i[xf[l][0]]=xf[l][2]}:t},bf=si.extend({type:"sector",shape:{cx:0,cy:0,r0:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},brush:wf(si.prototype.brush),buildPath:function(t,e){var n=e.cx,i=e.cy,r=Math.max(e.r0||0,0),o=Math.max(e.r,0),a=e.startAngle,s=e.endAngle,l=e.clockwise,u=Math.cos(a),c=Math.sin(a);t.moveTo(u*r+n,c*r+i),t.lineTo(u*o+n,c*o+i),t.arc(n,i,o,a,s,!l),t.lineTo(Math.cos(s)*r+n,Math.sin(s)*r+i),0!==r&&t.arc(n,i,r,s,a,l),t.closePath()}}),Sf=si.extend({type:"ring",shape:{cx:0,cy:0,r:0,r0:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=2*Math.PI;t.moveTo(n+e.r,i),t.arc(n,i,e.r,0,r,!1),t.moveTo(n+e.r0,i),t.arc(n,i,e.r0,0,r,!0)}}),Mf=function(t,e){for(var n=t.length,i=[],r=0,o=1;o<n;o++)r+=X(t[o-1],t[o]);var a=r/2;for(a=a<n?n:a,o=0;o<a;o++){var s,l,u,c=o/(a-1)*(e?n:n-1),h=Math.floor(c),f=c-h,d=t[h%n];e?(s=t[(h-1+n)%n],l=t[(h+1)%n],u=t[(h+2)%n]):(s=t[0===h?h:h-1],l=t[h>n-2?n-1:h+1],u=t[h>n-3?n-1:h+2]);var p=f*f,g=f*p;i.push([di(s[0],d[0],l[0],u[0],f,p,g),di(s[1],d[1],l[1],u[1],f,p,g)])}return i},kf=function(t,e,n,i){var r,o,a,s,l=[],u=[],c=[],h=[];if(i){a=[1/0,1/0],s=[-1/0,-1/0];for(var f=0,d=t.length;f<d;f++)Z(a,a,t[f]),K(s,s,t[f]);Z(a,a,i[0]),K(s,s,i[1])}for(f=0,d=t.length;f<d;f++){var p=t[f];if(n)r=t[f?f-1:d-1],o=t[(f+1)%d];else{if(0===f||f===d-1){l.push(V(t[f]));continue}r=t[f-1],o=t[f+1]}H(u,o,r),U(u,u,e);var g=X(p,r),v=X(p,o),m=g+v;0!==m&&(g/=m,v/=m),U(c,u,-g),U(h,u,v);var y=j([],p,c),_=j([],p,h);i&&(K(y,y,a),Z(y,y,s),K(_,_,a),Z(_,_,s)),l.push(y),l.push(_)}return n&&l.push(l.shift()),l},Cf=si.extend({type:"polygon",shape:{points:null,smooth:!1,smoothConstraint:null},buildPath:function(t,e){pi(t,e,!0)}}),If=si.extend({type:"polyline",shape:{points:null,smooth:!1,smoothConstraint:null},style:{stroke:"#000",fill:null},buildPath:function(t,e){pi(t,e,!1)}}),Af=si.extend({type:"rect",shape:{r:0,x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.x,i=e.y,r=e.width,o=e.height;e.r?_e(t,e):t.rect(n,i,r,o),t.closePath()}}),Tf=si.extend({type:"line",shape:{x1:0,y1:0,x2:0,y2:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.x1,i=e.y1,r=e.x2,o=e.y2,a=e.percent;0!==a&&(t.moveTo(n,i),a<1&&(r=n*(1-a)+r*a,o=i*(1-a)+o*a),t.lineTo(r,o))},pointAt:function(t){var e=this.shape;return[e.x1*(1-t)+e.x2*t,e.y1*(1-t)+e.y2*t]}}),Df=[],Of=si.extend({type:"bezier-curve",shape:{x1:0,y1:0,x2:0,y2:0,cpx1:0,cpy1:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.x1,i=e.y1,r=e.x2,o=e.y2,a=e.cpx1,s=e.cpy1,l=e.cpx2,u=e.cpy2,c=e.percent;0!==c&&(t.moveTo(n,i),null==l||null==u?(c<1&&(Vn(n,a,r,c,Df),a=Df[1],r=Df[2],Vn(i,s,o,c,Df),s=Df[1],o=Df[2]),t.quadraticCurveTo(a,s,r,o)):(c<1&&(Nn(n,a,l,r,c,Df),a=Df[1],l=Df[2],r=Df[3],Nn(i,s,u,o,c,Df),s=Df[1],u=Df[2],o=Df[3]),t.bezierCurveTo(a,s,l,u,r,o)))},pointAt:function(t){return gi(this.shape,t,!1)},tangentAt:function(t){var e=gi(this.shape,t,!0);return q(e,e)}}),Pf=si.extend({type:"arc",shape:{cx:0,cy:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.cx,i=e.cy,r=Math.max(e.r,0),o=e.startAngle,a=e.endAngle,s=e.clockwise,l=Math.cos(o),u=Math.sin(o);t.moveTo(l*r+n,u*r+i),t.arc(n,i,r,o,a,!s)}}),Lf=si.extend({type:"compound",shape:{paths:null},_updatePathDirty:function(){for(var t=this.__dirtyPath,e=this.shape.paths,n=0;n<e.length;n++)t=t||e[n].__dirtyPath;this.__dirtyPath=t,this.__dirty=this.__dirty||t},beforeBrush:function(){this._updatePathDirty();for(var t=this.shape.paths||[],e=this.getGlobalScale(),n=0;n<t.length;n++)t[n].path||t[n].createPathProxy(),t[n].path.setScale(e[0],e[1])},buildPath:function(t,e){for(var n=e.paths||[],i=0;i<n.length;i++)n[i].buildPath(t,n[i].shape,!0)},afterBrush:function(){for(var t=this.shape.paths||[],e=0;e<t.length;e++)t[e].__dirtyPath=!1},getBoundingRect:function(){return this._updatePathDirty(),si.prototype.getBoundingRect.call(this)}}),Ef=function(t){this.colorStops=t||[]};Ef.prototype={constructor:Ef,addColorStop:function(t,e){this.colorStops.push({offset:t,color:e})}};var Nf=function(t,e,n,i,r,o){this.x=null==t?0:t,this.y=null==e?0:e,this.x2=null==n?1:n,this.y2=null==i?0:i,this.type="linear",this.global=o||!1,Ef.call(this,r)};Nf.prototype={constructor:Nf},h(Nf,Ef);var Rf=function(t,e,n,i,r){this.x=null==t?.5:t,this.y=null==e?.5:e,this.r=null==n?.5:n,this.type="radial",this.global=r||!1,Ef.call(this,i)};Rf.prototype={constructor:Rf},h(Rf,Ef),vi.prototype.incremental=!0,vi.prototype.clearDisplaybles=function(){this._displayables=[],this._temporaryDisplayables=[],this._cursor=0,this.dirty(),this.notClear=!1},vi.prototype.addDisplayable=function(t,e){e?this._temporaryDisplayables.push(t):this._displayables.push(t),this.dirty()},vi.prototype.addDisplayables=function(t,e){e=e||!1;for(var n=0;n<t.length;n++)this.addDisplayable(t[n],e)},vi.prototype.eachPendingDisplayable=function(t){for(e=this._cursor;e<this._displayables.length;e++)t&&t(this._displayables[e]);for(var e=0;e<this._temporaryDisplayables.length;e++)t&&t(this._temporaryDisplayables[e])},vi.prototype.update=function(){for(this.updateTransform(),t=this._cursor;t<this._displayables.length;t++)(e=this._displayables[t]).parent=this,e.update(),e.parent=null;for(var t=0;t<this._temporaryDisplayables.length;t++){var e=this._temporaryDisplayables[t];e.parent=this,e.update(),e.parent=null}},vi.prototype.brush=function(t,e){for(n=this._cursor;n<this._displayables.length;n++)(i=this._displayables[n]).beforeBrush&&i.beforeBrush(t),i.brush(t,n===this._cursor?null:this._displayables[n-1]),i.afterBrush&&i.afterBrush(t);this._cursor=n;for(var n=0;n<this._temporaryDisplayables.length;n++){var i=this._temporaryDisplayables[n];i.beforeBrush&&i.beforeBrush(t),i.brush(t,0===n?null:this._temporaryDisplayables[n-1]),i.afterBrush&&i.afterBrush(t)}this._temporaryDisplayables=[],this.notClear=!0};var Bf=[];vi.prototype.getBoundingRect=function(){if(!this._rect){for(var t=new zt(1/0,1/0,-1/0,-1/0),e=0;e<this._displayables.length;e++){var n=this._displayables[e],i=n.getBoundingRect().clone();n.needLocalTransform()&&i.applyTransform(n.getLocalTransform(Bf)),t.union(i)}this._rect=t}return this._rect},vi.prototype.contain=function(t,e){var n=this.transformCoordToLocal(t,e);if(this.getBoundingRect().contain(n[0],n[1]))for(var i=0;i<this._displayables.length;i++)if(this._displayables[i].contain(t,e))return!0;return!1},h(vi,ze);var zf=Math.round,$f=Math.max,Ff=Math.min,Vf={},jf=(Object.freeze||Object)({extendShape:mi,extendPath:function(t,e){return fi(t,e)},makePath:yi,makeImage:_i,mergePath:function(t,e){for(var n=[],i=t.length,r=0;r<i;r++){var o=t[r];o.path||o.createPathProxy(),o.__dirtyPath&&o.buildPath(o.path,o.shape,!0),n.push(o.path)}var a=new si(e);return a.createPathProxy(),a.buildPath=function(t){t.appendPath(n);var e=t.getContext();e&&t.rebuildPath(e)},a},resizePath:wi,subPixelOptimizeLine:bi,subPixelOptimizeRect:function(t){var e=t.shape,n=t.style.lineWidth,i=e.x,r=e.y,o=e.width,a=e.height;return e.x=Si(e.x,n,!0),e.y=Si(e.y,n,!0),e.width=Math.max(Si(i+o,n,!1)-e.x,0===o?0:1),e.height=Math.max(Si(r+a,n,!1)-e.y,0===a?0:1),t},subPixelOptimize:Si,setHoverStyle:Ri,setLabelStyle:Bi,setTextStyle:zi,setText:function(t,e,n){var i,r={isRectText:!0};!1===n?i=!0:r.autoColor=n,$i(t,e,r,i),t.host&&t.host.dirty&&t.host.dirty(!1)},getFont:Gi,updateProps:qi,initProps:Xi,getTransform:function(t,e){for(var n=rt([]);t&&t!==e;)at(n,t.getLocalTransform(),n),t=t.parent;return n},applyTransform:Yi,transformDirection:function(t,e,n){var i=0===e[4]||0===e[5]||0===e[0]?1:Math.abs(2*e[4]/e[0]),r=0===e[4]||0===e[5]||0===e[2]?1:Math.abs(2*e[4]/e[2]),o=["left"===t?-i:"right"===t?i:0,"top"===t?-r:"bottom"===t?r:0];return o=Yi(o,e,n),Math.abs(o[0])>Math.abs(o[1])?o[0]>0?"right":"left":o[1]>0?"bottom":"top"},groupTransition:Zi,clipPointsByRect:function(t,e){return g(t,function(t){var n=t[0];n=$f(n,e.x),n=Ff(n,e.x+e.width);var i=t[1];return i=$f(i,e.y),i=Ff(i,e.y+e.height),[n,i]})},clipRectByRect:function(t,e){var n=$f(t.x,e.x),i=Ff(t.x+t.width,e.x+e.width),r=$f(t.y,e.y),o=Ff(t.y+t.height,e.y+e.height);if(i>=n&&o>=r)return{x:n,y:r,width:i-n,height:o-r}},createIcon:function(t,e,n){var i=(e=s({rectHover:!0},e)).style={strokeNoScale:!0};if(n=n||{x:-1,y:-1,width:2,height:2},t)return 0===t.indexOf("image://")?(i.image=t.slice(8),l(i,n),new $e(e)):yi(t.replace("path://",""),e,n,"center")},Group:pc,Image:$e,Text:yf,Circle:_f,Sector:bf,Ring:Sf,Polygon:Cf,Polyline:If,Rect:Af,Line:Tf,BezierCurve:Of,Arc:Pf,IncrementalDisplayable:vi,CompoundPath:Lf,LinearGradient:Nf,RadialGradient:Rf,BoundingRect:zt}),Hf=["textStyle","color"],Wf={getTextColor:function(t){var e=this.ecModel;return this.getShallow("color")||(!t&&e?e.get(Hf):null)},getFont:function(){return Gi({fontStyle:this.getShallow("fontStyle"),fontWeight:this.getShallow("fontWeight"),fontSize:this.getShallow("fontSize"),fontFamily:this.getShallow("fontFamily")},this.ecModel)},getTextRect:function(t){return ie(t,this.getFont(),this.getShallow("align"),this.getShallow("verticalAlign")||this.getShallow("baseline"),this.getShallow("padding"),this.getShallow("rich"),this.getShallow("truncateText"))}},Gf=hh([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"],["textPosition"],["textAlign"]]),Uf={getItemStyle:function(t,e){var n=Gf(this,t,e),i=this.getBorderLineDash();return i&&(n.lineDash=i),n},getBorderLineDash:function(){var t=this.get("borderType");return"solid"===t||null==t?null:"dashed"===t?[5,5]:[1,1]}},qf=f,Xf=mn();Ki.prototype={constructor:Ki,init:null,mergeOption:function(t){o(this.option,t,!0)},get:function(t,e){return null==t?this.option:Ji(this.option,this.parsePath(t),!e&&Qi(this,t))},getShallow:function(t,e){var n=this.option,i=null==n?n:n[t],r=!e&&Qi(this,t);return null==i&&r&&(i=r.getShallow(t)),i},getModel:function(t,e){var n,i=null==t?this.option:Ji(this.option,t=this.parsePath(t));return e=e||(n=Qi(this,t))&&n.getModel(t),new Ki(i,e,this.ecModel)},isEmpty:function(){return null==this.option},restoreData:function(){},clone:function(){return new(0,this.constructor)(r(this.option))},setReadOnly:function(t){},parsePath:function(t){return"string"==typeof t&&(t=t.split(".")),t},customizeGetParent:function(t){Xf(this).getParent=t},isAnimationEnabled:function(){if(!xu.node){if(null!=this.option.animation)return!!this.option.animation;if(this.parentModel)return this.parentModel.isAnimationEnabled()}}},Mn(Ki),kn(Ki),qf(Ki,dh),qf(Ki,gh),qf(Ki,Wf),qf(Ki,Uf);var Yf=0,Zf=1e-4,Kf=/^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,Jf=P,Qf=/([&<>"'])/g,td={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ed=["a","b","c","d","e","f","g"],nd=function(t,e){return"{"+t+(null==e?"":e)+"}"},id=ue,rd=p,od=["left","right","top","bottom","width","height"],ad=[["width","left","right"],["height","top","bottom"]],sd=(_(xr,"vertical"),_(xr,"horizontal"),{getBoxLayoutParams:function(){return{left:this.get("left"),top:this.get("top"),right:this.get("right"),bottom:this.get("bottom"),width:this.get("width"),height:this.get("height")}}}),ld=mn(),ud=Ki.extend({type:"component",id:"",name:"",mainType:"",subType:"",componentIndex:0,defaultOption:null,ecModel:null,dependentModels:[],uid:null,layoutMode:null,$constructor:function(t,e,n,i){Ki.call(this,t,e,n,i),this.uid=tr("ec_cpt_model")},init:function(t,e,n,i){this.mergeDefaultAndTheme(t,n)},mergeDefaultAndTheme:function(t,e){var n=this.layoutMode,i=n?Sr(t):{};o(t,e.getTheme().get(this.mainType)),o(t,this.getDefaultOption()),n&&br(t,i,n)},mergeOption:function(t,e){o(this.option,t,!0);var n=this.layoutMode;n&&br(this.option,t,n)},optionUpdated:function(t,e){},getDefaultOption:function(){var t=ld(this);if(!t.defaultOption){for(var e=[],n=this.constructor;n;){var i=n.prototype.defaultOption;i&&e.push(i),n=n.superClass}for(var r={},a=e.length-1;a>=0;a--)r=o(r,e[a],!0);t.defaultOption=r}return t.defaultOption},getReferringComponents:function(t){return this.ecModel.queryComponents({mainType:t,index:this.get(t+"Index",!0),id:this.get(t+"Id",!0)})}});An(ud,{registerWhenExtend:!0}),function(t){var e={};t.registerSubTypeDefaulter=function(t,n){t=bn(t),e[t.main]=n},t.determineSubType=function(n,i){var r=i.type;if(!r){var o=bn(n).main;t.hasSubTypes(n)&&e[o]&&(r=e[o](i))}return r}}(ud),function(t,e){function n(t){var n={},o=[];return p(t,function(a){var s=i(n,a),l=r(s.originalDeps=e(a),t);s.entryCount=l.length,0===s.entryCount&&o.push(a),p(l,function(t){c(s.predecessor,t)<0&&s.predecessor.push(t);var e=i(n,t);c(e.successor,t)<0&&e.successor.push(a)})}),{graph:n,noEntryList:o}}function i(t,e){return t[e]||(t[e]={predecessor:[],successor:[]}),t[e]}function r(t,e){var n=[];return p(t,function(t){c(e,t)>=0&&n.push(t)}),n}t.topologicalTravel=function(t,e,i,r){function o(t){s[t].entryCount--,0===s[t].entryCount&&l.push(t)}if(t.length){var a=n(e),s=a.graph,l=a.noEntryList,u={};for(p(t,function(t){u[t]=!0});l.length;){var c=l.pop(),h=s[c],f=!!u[c];f&&(i.call(r,c,h.originalDeps.slice()),delete u[c]),p(h.successor,f?function(t){u[t]=!0,o(t)}:o)}p(u,function(){throw new Error("Circle dependency may exists")})}}}(ud,function(t){var e=[];return p(ud.getClassesByMainType(t),function(t){e=e.concat(t.prototype.dependencies||[])}),e=g(e,function(t){return bn(t).main}),"dataset"!==t&&c(e,"dataset")<=0&&e.unshift("dataset"),e}),f(ud,sd);var cd="";"undefined"!=typeof navigator&&(cd=navigator.platform||"");var hd={color:["#c23531","#2f4554","#61a0a8","#d48265","#91c7ae","#749f83","#ca8622","#bda29a","#6e7074","#546570","#c4ccd3"],gradientColor:["#f6efa6","#d88273","#bf444c"],textStyle:{fontFamily:cd.match(/^Win/)?"Microsoft YaHei":"sans-serif",fontSize:12,fontStyle:"normal",fontWeight:"normal"},blendMode:null,animation:"auto",animationDuration:1e3,animationDurationUpdate:300,animationEasing:"exponentialOut",animationEasingUpdate:"cubicOut",animationThreshold:2e3,progressiveThreshold:3e3,progressive:400,hoverLayerThreshold:3e3,useUTC:!1},fd=mn(),dd={clearColorPalette:function(){fd(this).colorIdx=0,fd(this).colorNameMap={}},getColorFromPalette:function(t,e,n){var i=fd(e=e||this),r=i.colorIdx||0,o=i.colorNameMap=i.colorNameMap||{};if(o.hasOwnProperty(t))return o[t];var a=ln(this.get("color",!0)),s=this.get("colorLayer",!0),l=null!=n&&s?kr(s,n):a;if((l=l||a)&&l.length){var u=l[r];return t&&(o[t]=u),i.colorIdx=(r+1)%l.length,u}}},pd={cartesian2d:function(t,e,n,i){var r=t.getReferringComponents("xAxis")[0],o=t.getReferringComponents("yAxis")[0];e.coordSysDims=["x","y"],n.set("x",r),n.set("y",o),Ir(r)&&(i.set("x",r),e.firstCategoryDimIndex=0),Ir(o)&&(i.set("y",o),e.firstCategoryDimIndex=1)},singleAxis:function(t,e,n,i){var r=t.getReferringComponents("singleAxis")[0];e.coordSysDims=["single"],n.set("single",r),Ir(r)&&(i.set("single",r),e.firstCategoryDimIndex=0)},polar:function(t,e,n,i){var r=t.getReferringComponents("polar")[0],o=r.findAxisModel("radiusAxis"),a=r.findAxisModel("angleAxis");e.coordSysDims=["radius","angle"],n.set("radius",o),n.set("angle",a),Ir(o)&&(i.set("radius",o),e.firstCategoryDimIndex=0),Ir(a)&&(i.set("angle",a),e.firstCategoryDimIndex=1)},geo:function(t,e,n,i){e.coordSysDims=["lng","lat"]},parallel:function(t,e,n,i){var r=t.ecModel,o=r.getComponent("parallel",t.get("parallelIndex")),a=e.coordSysDims=o.dimensions.slice();p(o.parallelAxisIndex,function(t,o){var s=r.getComponent("parallelAxis",t),l=a[o];n.set(l,s),Ir(s)&&null==e.firstCategoryDimIndex&&(i.set(l,s),e.firstCategoryDimIndex=o)})}},gd="original",vd="arrayRows",md="objectRows",yd="keyedColumns",_d="unknown",xd="typedArray",wd="column",bd="row";Ar.seriesDataToSource=function(t){return new Ar({data:t,sourceFormat:k(t)?xd:gd,fromDataset:!1})},kn(Ar);var Sd=mn(),Md="\0_ec_inner",kd=Ki.extend({init:function(t,e,n,i){n=n||{},this.option=null,this._theme=new Ki(n),this._optionManager=i},setOption:function(t,e){L(!(Md in t),"please use chart.getOption()"),this._optionManager.setOption(t,e),this.resetOption(null)},resetOption:function(t){var e=!1,n=this._optionManager;if(!t||"recreate"===t){var i=n.mountOption("recreate"===t);this.option&&"recreate"!==t?(this.restoreData(),this.mergeOption(i)):Hr.call(this,i),e=!0}if("timeline"!==t&&"media"!==t||this.restoreData(),!t||"recreate"===t||"timeline"===t){var r=n.getTimelineOption(this);r&&(this.mergeOption(r),e=!0)}if(!t||"recreate"===t||"media"===t){var o=n.getMediaOption(this,this._api);o.length&&p(o,function(t){this.mergeOption(t,e=!0)},this)}return e},mergeOption:function(t){var e=this.option,n=this._componentsMap,i=[];Or(this),p(t,function(t,n){null!=t&&(ud.hasClass(n)?n&&i.push(n):e[n]=null==e[n]?r(t):o(e[n],t,!0))}),ud.topologicalTravel(i,ud.getAllClassMainTypes(),function(i,r){var o=ln(t[i]),a=fn(n.get(i),o);dn(a),p(a,function(t,e){var n=t.option;S(n)&&(t.keyInfo.mainType=i,t.keyInfo.subType=Gr(i,n,t.exist))});var l=Wr(n,r);e[i]=[],n.set(i,[]),p(a,function(t,r){var o=t.exist,a=t.option;if(L(S(a)||o,"Empty component definition"),a){var u=ud.getClass(i,t.keyInfo.subType,!0);if(o&&o instanceof u)o.name=t.keyInfo.name,o.mergeOption(a,this),o.optionUpdated(a,!1);else{var c=s({dependentModels:l,componentIndex:r},t.keyInfo);s(o=new u(a,this,this,c),c),o.init(a,this,this,c),o.optionUpdated(null,!0)}}else o.mergeOption({},this),o.optionUpdated({},!1);n.get(i)[r]=o,e[i][r]=o.option},this),"series"===i&&Ur(this,n.get("series"))},this),this._seriesIndicesMap=z(this._seriesIndices=this._seriesIndices||[])},getOption:function(){var t=r(this.option);return p(t,function(e,n){if(ud.hasClass(n)){for(var i=(e=ln(e)).length-1;i>=0;i--)gn(e[i])&&e.splice(i,1);t[n]=e}}),delete t[Md],t},getTheme:function(){return this._theme},getComponent:function(t,e){var n=this._componentsMap.get(t);if(n)return n[e||0]},queryComponents:function(t){var e=t.mainType;if(!e)return[];var n,i=t.index,r=t.id,o=t.name,a=this._componentsMap.get(e);if(!a||!a.length)return[];if(null!=i)x(i)||(i=[i]),n=m(g(i,function(t){return a[t]}),function(t){return!!t});else if(null!=r){var s=x(r);n=m(a,function(t){return s&&c(r,t.id)>=0||!s&&t.id===r})}else if(null!=o){var l=x(o);n=m(a,function(t){return l&&c(o,t.name)>=0||!l&&t.name===o})}else n=a.slice();return qr(n,t)},findComponents:function(t){var e=t.query,n=t.mainType,i=function(t){var e=n+"Index",i=n+"Id",r=n+"Name";return!t||null==t[e]&&null==t[i]&&null==t[r]?null:{mainType:n,index:t[e],id:t[i],name:t[r]}}(e);return function(e){return t.filter?m(e,t.filter):e}(qr(i?this.queryComponents(i):this._componentsMap.get(n),t))},eachComponent:function(t,e,n){var i=this._componentsMap;"function"==typeof t?(n=e,e=t,i.each(function(t,i){p(t,function(t,r){e.call(n,i,t,r)})})):b(t)?p(i.get(t),e,n):S(t)&&p(this.findComponents(t),e,n)},getSeriesByName:function(t){return m(this._componentsMap.get("series"),function(e){return e.name===t})},getSeriesByIndex:function(t){return this._componentsMap.get("series")[t]},getSeriesByType:function(t){return m(this._componentsMap.get("series"),function(e){return e.subType===t})},getSeries:function(){return this._componentsMap.get("series").slice()},getSeriesCount:function(){return this._componentsMap.get("series").length},eachSeries:function(t,e){p(this._seriesIndices,function(n){var i=this._componentsMap.get("series")[n];t.call(e,i,n)},this)},eachRawSeries:function(t,e){p(this._componentsMap.get("series"),t,e)},eachSeriesByType:function(t,e,n){p(this._seriesIndices,function(i){var r=this._componentsMap.get("series")[i];r.subType===t&&e.call(n,r,i)},this)},eachRawSeriesByType:function(t,e,n){return p(this.getSeriesByType(t),e,n)},isSeriesFiltered:function(t){return null==this._seriesIndicesMap.get(t.componentIndex)},getCurrentSeriesIndices:function(){return(this._seriesIndices||[]).slice()},filterSeries:function(t,e){Ur(this,m(this._componentsMap.get("series"),t,e))},restoreData:function(t){var e=this._componentsMap;Ur(this,e.get("series"));var n=[];e.each(function(t,e){n.push(e)}),ud.topologicalTravel(n,ud.getAllClassMainTypes(),function(n,i){p(e.get(n),function(e){("series"!==n||!Vr(e,t))&&e.restoreData()})})}});f(kd,dd);var Cd=["getDom","getZr","getWidth","getHeight","getDevicePixelRatio","dispatchAction","isDisposed","on","off","getDataURL","getConnectedDataURL","getModel","getOption","getViewOfComponentModel","getViewOfSeriesModel"],Id={};Yr.prototype={constructor:Yr,create:function(t,e){var n=[];p(Id,function(i,r){var o=i.create(t,e);n=n.concat(o||[])}),this._coordinateSystems=n},update:function(t,e){p(this._coordinateSystems,function(n){n.update&&n.update(t,e)})},getCoordinateSystems:function(){return this._coordinateSystems.slice()}},Yr.register=function(t,e){Id[t]=e},Yr.get=function(t){return Id[t]};var Ad=p,Td=r,Dd=g,Od=o,Pd=/^(min|max)?(.+)$/;Zr.prototype={constructor:Zr,setOption:function(t,e){t&&p(ln(t.series),function(t){t&&t.data&&k(t.data)&&N(t.data)}),t=Td(t,!0);var n=this._optionBackup,i=Kr.call(this,t,e,!n);this._newBaseOption=i.baseOption,n?(eo(n.baseOption,i.baseOption),i.timelineOptions.length&&(n.timelineOptions=i.timelineOptions),i.mediaList.length&&(n.mediaList=i.mediaList),i.mediaDefault&&(n.mediaDefault=i.mediaDefault)):this._optionBackup=i},mountOption:function(t){var e=this._optionBackup;return this._timelineOptions=Dd(e.timelineOptions,Td),this._mediaList=Dd(e.mediaList,Td),this._mediaDefault=Td(e.mediaDefault),this._currentMediaIndices=[],Td(t?e.baseOption:this._newBaseOption)},getTimelineOption:function(t){var e,n=this._timelineOptions;if(n.length){var i=t.getComponent("timeline");i&&(e=Td(n[i.getCurrentIndex()],!0))}return e},getMediaOption:function(t){var e=this._api.getWidth(),n=this._api.getHeight(),i=this._mediaList,r=this._mediaDefault,o=[],a=[];if(!i.length&&!r)return a;for(var s=0,l=i.length;s<l;s++)Jr(i[s].query,e,n)&&o.push(s);return!o.length&&r&&(o=[-1]),o.length&&!to(o,this._currentMediaIndices)&&(a=Dd(o,function(t){return Td(-1===t?r.option:i[t].option)})),this._currentMediaIndices=o,a}};var Ld=p,Ed=S,Nd=["areaStyle","lineStyle","nodeStyle","linkStyle","chordStyle","label","labelLine"],Rd=function(t,e){Ld(lo(t.series),function(t){Ed(t)&&so(t)});var n=["xAxis","yAxis","radiusAxis","angleAxis","singleAxis","parallelAxis","radar"];e&&n.push("valueAxis","categoryAxis","logAxis","timeAxis"),Ld(n,function(e){Ld(lo(t[e]),function(t){t&&(oo(t,"axisLabel"),oo(t.axisPointer,"label"))})}),Ld(lo(t.parallel),function(t){var e=t&&t.parallelAxisDefault;oo(e,"axisLabel"),oo(e&&e.axisPointer,"label")}),Ld(lo(t.calendar),function(t){io(t,"itemStyle"),oo(t,"dayLabel"),oo(t,"monthLabel"),oo(t,"yearLabel")}),Ld(lo(t.radar),function(t){oo(t,"name")}),Ld(lo(t.geo),function(t){Ed(t)&&(ao(t),Ld(lo(t.regions),function(t){ao(t)}))}),Ld(lo(t.timeline),function(t){ao(t),io(t,"label"),io(t,"itemStyle"),io(t,"controlStyle",!0);var e=t.data;x(e)&&p(e,function(t){S(t)&&(io(t,"label"),io(t,"itemStyle"))})}),Ld(lo(t.toolbox),function(t){io(t,"iconStyle"),Ld(t.feature,function(t){io(t,"iconStyle")})}),oo(uo(t.axisPointer),"label"),oo(uo(t.tooltip).axisPointer,"label")},Bd=[["x","left"],["y","top"],["x2","right"],["y2","bottom"]],zd=["grid","geo","parallel","legend","toolbox","title","visualMap","dataZoom","timeline"],$d=function(t,e){Rd(t,e),t.series=ln(t.series),p(t.series,function(t){if(S(t)){var e=t.type;if("pie"!==e&&"gauge"!==e||null!=t.clockWise&&(t.clockwise=t.clockWise),"gauge"===e){var n=co(t,"pointer.color");null!=n&&ho(t,"itemStyle.normal.color",n)}fo(t)}}),t.dataRange&&(t.visualMap=t.dataRange),p(zd,function(e){var n=t[e];n&&(x(n)||(n=[n]),p(n,function(t){fo(t)}))})},Fd=go.prototype;Fd.pure=!1,Fd.persistent=!0,Fd.getSource=function(){return this._source};var Vd={arrayRows_column:{pure:!0,count:function(){return Math.max(0,this._data.length-this._source.startIndex)},getItem:function(t){return this._data[t+this._source.startIndex]},appendData:yo},arrayRows_row:{pure:!0,count:function(){var t=this._data[0];return t?Math.max(0,t.length-this._source.startIndex):0},getItem:function(t){t+=this._source.startIndex;for(var e=[],n=this._data,i=0;i<n.length;i++){var r=n[i];e.push(r?r[t]:null)}return e},appendData:function(){throw new Error('Do not support appendData when set seriesLayoutBy: "row".')}},objectRows:{pure:!0,count:vo,getItem:mo,appendData:yo},keyedColumns:{pure:!0,count:function(){var t=this._source.dimensionsDefine[0].name,e=this._data[t];return e?e.length:0},getItem:function(t){for(var e=[],n=this._source.dimensionsDefine,i=0;i<n.length;i++){var r=this._data[n[i].name];e.push(r?r[t]:null)}return e},appendData:function(t){var e=this._data;p(t,function(t,n){for(var i=e[n]||(e[n]=[]),r=0;r<(t||[]).length;r++)i.push(t[r])})}},original:{count:vo,getItem:mo,appendData:yo},typedArray:{persistent:!1,pure:!0,count:function(){return this._data?this._data.length/this._dimSize:0},getItem:function(t,e){t-=this._offset,e=e||[];for(var n=this._dimSize*t,i=0;i<this._dimSize;i++)e[i]=this._data[n+i];return e},appendData:function(t){this._data=t},clean:function(){this._offset+=this.count(),this._data=null}}},jd={arrayRows:_o,objectRows:function(t,e,n,i){return null!=n?t[i]:t},keyedColumns:_o,original:function(t,e,n,i){var r=cn(t);return null!=n&&r instanceof Array?r[n]:r},typedArray:_o},Hd={arrayRows:xo,objectRows:function(t,e,n,i){return wo(t[e],this._dimensionInfos[e])},keyedColumns:xo,original:function(t,e,n,i){var r=t&&(null==t.value?t:t.value);return!this._rawData.pure&&hn(t)&&(this.hasItemOption=!0),wo(r instanceof Array?r[i]:r,this._dimensionInfos[e])},typedArray:function(t,e,n,i){return t[i]}},Wd=/\{@(.+?)\}/g,Gd={getDataParams:function(t,e){var n=this.getData(e),i=this.getRawValue(t,e),r=n.getRawIndex(t),o=n.getName(t),a=n.getRawDataItem(t),s=n.getItemVisual(t,"color");return{componentType:this.mainType,componentSubType:this.subType,seriesType:"series"===this.mainType?this.subType:null,seriesIndex:this.seriesIndex,seriesId:this.id,seriesName:this.name,name:o,dataIndex:r,data:a,dataType:e,value:i,color:s,marker:mr(s),$vars:["seriesName","name","value"]}},getFormattedLabel:function(t,e,n,i,r){e=e||"normal";var o=this.getData(n),a=o.getItemModel(t),s=this.getDataParams(t,n);null!=i&&s.value instanceof Array&&(s.value=s.value[i]);var l=a.get("normal"===e?[r||"label","formatter"]:[e,r||"label","formatter"]);return"function"==typeof l?(s.status=e,l(s)):"string"==typeof l?vr(l,s).replace(Wd,function(e,n){var i=n.length;return"["===n.charAt(0)&&"]"===n.charAt(i-1)&&(n=+n.slice(1,i-1)),bo(o,t,n)}):void 0},getRawValue:function(t,e){return bo(this.getData(e),t)},formatTooltip:function(){}},Ud=ko.prototype;Ud.perform=function(t){function e(t){return!(t>=1)&&(t=1),t}var n,i=this._upstream,r=t&&t.skip;if(this._dirty&&i){var o=this.context;o.data=o.outputData=i.context.outputData}this.__pipeline&&(this.__pipeline.currentTask=this),this._plan&&!r&&(n=this._plan(this.context));var a,s=e(this._modBy),l=this._modDataCount||0,u=e(t&&t.modBy),c=t&&t.modDataCount||0;s===u&&l===c||(n="reset"),(this._dirty||"reset"===n)&&(this._dirty=!1,a=Io(this,r)),this._modBy=u,this._modDataCount=c;var h=t&&t.step;if(this._dueEnd=i?i._outputDueEnd:this._count?this._count(this.context):1/0,this._progress){var f=this._dueIndex,d=Math.min(null!=h?this._dueIndex+h:1/0,this._dueEnd);if(!r&&(a||f<d)){var p=this._progress;if(x(p))for(var g=0;g<p.length;g++)Co(this,p[g],f,d,u,c);else Co(this,p,f,d,u,c)}this._dueIndex=d;var v=null!=this._settedOutputEnd?this._settedOutputEnd:d;this._outputDueEnd=v}else this._dueIndex=this._outputDueEnd=null!=this._settedOutputEnd?this._settedOutputEnd:this._dueEnd;return this.unfinished()};var qd=function(){function t(){return i<n?i++:null}function e(){var t=i%a*r+Math.ceil(i/a),e=i>=n?null:t<o?t:i;return i++,e}var n,i,r,o,a,s={reset:function(l,u,c,h){i=l,n=u,r=c,o=h,a=Math.ceil(o/r),s.next=r>1&&o>0?e:t}};return s}();Ud.dirty=function(){this._dirty=!0,this._onDirty&&this._onDirty(this.context)},Ud.unfinished=function(){return this._progress&&this._dueIndex<this._dueEnd},Ud.pipe=function(t){(this._downstream!==t||this._dirty)&&(this._downstream=t,t._upstream=this,t.dirty())},Ud.dispose=function(){this._disposed||(this._upstream&&(this._upstream._downstream=null),this._downstream&&(this._downstream._upstream=null),this._dirty=!1,this._disposed=!0)},Ud.getUpstream=function(){return this._upstream},Ud.getDownstream=function(){return this._downstream},Ud.setOutputEnd=function(t){this._outputDueEnd=this._settedOutputEnd=t};var Xd=mn(),Yd=ud.extend({type:"series.__base__",seriesIndex:0,coordinateSystem:null,defaultOption:null,legendDataProvider:null,visualColorAccessPath:"itemStyle.color",layoutMode:null,init:function(t,e,n,i){this.seriesIndex=this.componentIndex,this.dataTask=Mo({count:Do,reset:Oo}),this.dataTask.context={model:this},this.mergeDefaultAndTheme(t,n),Pr(this);var r=this.getInitialData(t,n);Lo(r,this),this.dataTask.context.data=r,Xd(this).dataBeforeProcessed=r,Ao(this)},mergeDefaultAndTheme:function(t,e){var n=this.layoutMode,i=n?Sr(t):{},r=this.subType;ud.hasClass(r)&&(r+="Series"),o(t,e.getTheme().get(this.subType)),o(t,this.getDefaultOption()),un(t,"label",["show"]),this.fillDataTextStyle(t.data),n&&br(t,i,n)},mergeOption:function(t,e){t=o(this.option,t,!0),this.fillDataTextStyle(t.data);var n=this.layoutMode;n&&br(this.option,t,n),Pr(this);var i=this.getInitialData(t,e);Lo(i,this),this.dataTask.dirty(),this.dataTask.context.data=i,Xd(this).dataBeforeProcessed=i,Ao(this)},fillDataTextStyle:function(t){if(t&&!k(t))for(var e=["show"],n=0;n<t.length;n++)t[n]&&t[n].label&&un(t[n],"label",e)},getInitialData:function(){},appendData:function(t){this.getRawData().appendData(t.data)},getData:function(t){var e=No(this);if(e){var n=e.context.data;return null==t?n:n.getLinkedData(t)}return Xd(this).data},setData:function(t){var e=No(this);if(e){var n=e.context;n.data!==t&&e.modifyOutputEnd&&e.setOutputEnd(t.count()),n.outputData=t,e!==this.dataTask&&(n.data=t)}Xd(this).data=t},getSource:function(){return Dr(this)},getRawData:function(){return Xd(this).dataBeforeProcessed},getBaseAxis:function(){var t=this.coordinateSystem;return t&&t.getBaseAxis&&t.getBaseAxis()},formatTooltip:function(t,e,n){function i(t){return gr(pr(t))}var r=this.getData(),o=r.mapDimension("defaultedTooltip",!0),a=o.length,s=this.getRawValue(t),l=x(s),u=r.getItemVisual(t,"color");S(u)&&u.colorStops&&(u=(u.colorStops[0]||{}).color),u=u||"transparent";var c=a>1||l&&!a?function(n){function i(t,n){var i=r.getDimensionInfo(n);if(i&&!1!==i.otherDims.tooltip){var o=i.type,l=mr({color:u,type:"subItem"}),c=(a?l+gr(i.displayName||"-")+": ":"")+gr("ordinal"===o?t+"":"time"===o?e?"":_r("yyyy/MM/dd hh:mm:ss",t):pr(t));c&&s.push(c)}}var a=v(n,function(t,e,n){var i=r.getDimensionInfo(n);return t|(i&&!1!==i.tooltip&&null!=i.displayName)},0),s=[];return o.length?p(o,function(e){i(bo(r,t,e),e)}):p(n,i),(a?"<br/>":"")+s.join(a?"<br/>":", ")}(s):i(a?bo(r,t,o[0]):l?s[0]:s),h=mr(u),f=r.getName(t),d=this.name;return pn(this)||(d=""),d=d?gr(d)+(e?": ":"<br/>"):"",e?h+d+c:d+h+(f?gr(f)+": "+c:c)},isAnimationEnabled:function(){if(xu.node)return!1;var t=this.getShallow("animation");return t&&this.getData().count()>this.getShallow("animationThreshold")&&(t=!1),t},restoreData:function(){this.dataTask.dirty()},getColorFromPalette:function(t,e,n){var i=this.ecModel,r=dd.getColorFromPalette.call(this,t,e,n);return r||(r=i.getColorFromPalette(t,e,n)),r},coordDimToDataDim:function(t){return this.getRawData().mapDimension(t,!0)},getProgressive:function(){return this.get("progressive")},getProgressiveThreshold:function(){return this.get("progressiveThreshold")},getAxisTooltipData:null,getTooltipPosition:null,pipeTask:null,preventIncremental:null,pipelineContext:null});f(Yd,Gd),f(Yd,dd);var Zd=function(){this.group=new pc,this.uid=tr("viewComponent")};Zd.prototype={constructor:Zd,init:function(t,e){},render:function(t,e,n,i){},dispose:function(){}};var Kd=Zd.prototype;Kd.updateView=Kd.updateLayout=Kd.updateVisual=function(t,e,n,i){},Mn(Zd),An(Zd,{registerWhenExtend:!0});var Jd=function(){var t=mn();return function(e){var n=t(e),i=e.pipelineContext,r=n.large,o=n.progressiveRender,a=n.large=i.large,s=n.progressiveRender=i.progressiveRender;return!!(r^a||o^s)&&"reset"}},Qd=mn(),tp=Jd();Ro.prototype={type:"chart",init:function(t,e){},render:function(t,e,n,i){},highlight:function(t,e,n,i){zo(t.getData(),i,"emphasis")},downplay:function(t,e,n,i){zo(t.getData(),i,"normal")},remove:function(t,e){this.group.removeAll()},dispose:function(){},incrementalPrepareRender:null,incrementalRender:null,updateTransform:null};var ep=Ro.prototype;ep.updateView=ep.updateLayout=ep.updateVisual=function(t,e,n,i){this.render(t,e,n,i)},Mn(Ro),An(Ro,{registerWhenExtend:!0}),Ro.markUpdateMethod=function(t,e){Qd(t).updateMethod=e};var np={incrementalPrepareRender:{progress:function(t,e){e.view.incrementalRender(t,e.model,e.ecModel,e.api,e.payload)}},render:{forceFirstProgress:!0,progress:function(t,e){e.view.render(e.model,e.ecModel,e.api,e.payload)}}},ip={createOnAllSeries:!0,performRawSeries:!0,reset:function(t,e){var n=t.getData(),i=(t.visualColorAccessPath||"itemStyle.color").split("."),r=t.get(i)||t.getColorFromPalette(t.name,null,e.getSeriesCount());if(n.setVisual("color",r),!e.isSeriesFiltered(t))return"function"!=typeof r||r instanceof Ef||n.each(function(e){n.setItemVisual(e,"color",r(t.getDataParams(e)))}),{dataEach:n.hasItemOption?function(t,e){var n=t.getItemModel(e).get(i,!0);null!=n&&t.setItemVisual(e,"color",n)}:null}}},rp={toolbox:{brush:{title:{rect:"矩形选择",polygon:"圈选",lineX:"横向选择",lineY:"纵向选择",keep:"保持选择",clear:"清除选择"}},dataView:{title:"数据视图",lang:["数据视图","关闭","刷新"]},dataZoom:{title:{zoom:"区域缩放",back:"区域缩放还原"}},magicType:{title:{line:"切换为折线图",bar:"切换为柱状图",stack:"切换为堆叠",tiled:"切换为平铺"}},restore:{title:"还原"},saveAsImage:{title:"保存为图片",lang:["右键另存为图片"]}},series:{typeNames:{pie:"饼图",bar:"柱状图",line:"折线图",scatter:"散点图",effectScatter:"涟漪散点图",radar:"雷达图",tree:"树图",treemap:"矩形树图",boxplot:"箱型图",candlestick:"K线图",k:"K线图",heatmap:"热力图",map:"地图",parallel:"平行坐标图",lines:"线图",graph:"关系图",sankey:"桑基图",funnel:"漏斗图",gauge:"仪表盘图",pictorialBar:"象形柱图",themeRiver:"主题河流图",sunburst:"旭日图"}},aria:{general:{withTitle:"这是一个关于“{title}”的图表。",withoutTitle:"这是一个图表，"},series:{single:{prefix:"",withName:"图表类型是{seriesType}，表示{seriesName}。",withoutName:"图表类型是{seriesType}。"},multiple:{prefix:"它由{seriesCount}个图表系列组成。",withName:"第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",withoutName:"第{seriesId}个系列是一个{seriesType}，",separator:{middle:"；",end:"。"}}},data:{allData:"其数据是——",partialData:"其中，前{displayCnt}项是——",withName:"{name}的数据是{value}",withoutName:"{value}",separator:{middle:"，",end:""}}}},op=function(t,n){function i(t,e){if("string"!=typeof t)return t;var n=t;return p(e,function(t,e){n=n.replace(new RegExp("\\{\\s*"+e+"\\s*\\}","g"),t)}),n}function r(t){var e=a.get(t);if(null==e){for(var n=t.split("."),i=rp.aria,r=0;r<n.length;++r)i=i[n[r]];return i}return e}function o(t){return rp.series.typeNames[t]||"自定义图"}var a=n.getModel("aria");if(a.get("show"))if(a.get("description"))t.setAttribute("aria-label",a.get("description"));else{var s=0;n.eachSeries(function(t,e){++s},this);var l,u=a.get("data.maxCount")||10,c=a.get("series.maxCount")||10,h=Math.min(s,c);if(!(s<1)){var f=function(){var t=n.getModel("title").option;return t&&t.length&&(t=t[0]),t&&t.text}();l=f?i(r("general.withTitle"),{title:f}):r("general.withoutTitle");var d=[];l+=i(r(s>1?"series.multiple.prefix":"series.single.prefix"),{seriesCount:s}),n.eachSeries(function(t,n){if(n<h){var a,l=t.get("name"),c="series."+(s>1?"multiple":"single")+".";a=i(a=r(l?c+"withName":c+"withoutName"),{seriesId:t.seriesIndex,seriesName:t.get("name"),seriesType:o(t.subType)});var f=t.getData();e.data=f,f.count()>u?a+=i(r("data.partialData"),{displayCnt:u}):a+=r("data.allData");for(var p=[],g=0;g<f.count();g++)if(g<u){var v=f.getName(g),m=bo(f,g);p.push(i(r(v?"data.withName":"data.withoutName"),{name:v,value:m}))}a+=p.join(r("data.separator.middle"))+r("data.separator.end"),d.push(a)}}),l+=d.join(r("series.multiple.separator.middle"))+r("series.multiple.separator.end"),t.setAttribute("aria-label",l)}}},ap=Math.PI,sp=jo.prototype;sp.restoreData=function(t,e){t.restoreData(e),this._stageTaskMap.each(function(t){var e=t.overallTask;e&&e.dirty()})},sp.getPerformArgs=function(t,e){if(t.__pipeline){var n=this._pipelineMap.get(t.__pipeline.id),i=n.context,r=!e&&n.progressiveEnabled&&(!i||i.progressiveRender)&&t.__idxInPipeline>n.blockIndex?n.step:null,o=i&&i.modDataCount;return{step:r,modBy:null!=o?Math.ceil(o/r):null,modDataCount:o}}},sp.getPipeline=function(t){return this._pipelineMap.get(t)},sp.updateStreamModes=function(t,e){var n=this._pipelineMap.get(t.uid),i=t.getData().count(),r=n.progressiveEnabled&&e.incrementalPrepareRender&&i>=n.threshold,o=t.get("large")&&i>=t.get("largeThreshold"),a="mod"===t.get("progressiveChunkMode")?i:null;t.pipelineContext=n.context={progressiveRender:r,modDataCount:a,large:o}},sp.restorePipelines=function(t){var e=this,n=e._pipelineMap=z();t.eachSeries(function(t){var i=t.getProgressive(),r=t.uid;n.set(r,{id:r,head:null,tail:null,threshold:t.getProgressiveThreshold(),progressiveEnabled:i&&!(t.preventIncremental&&t.preventIncremental()),blockIndex:-1,step:Math.round(i||700),count:0}),ta(e,t,t.dataTask)})},sp.prepareStageTasks=function(){var t=this._stageTaskMap,e=this.ecInstance.getModel(),n=this.api;p(this._allHandlers,function(i){var r=t.get(i.uid)||t.set(i.uid,[]);i.reset&&Wo(this,i,r,e,n),i.overallReset&&Go(this,i,r,e,n)},this)},sp.prepareView=function(t,e,n,i){var r=t.renderTask,o=r.context;o.model=e,o.ecModel=n,o.api=i,r.__block=!t.incrementalPrepareRender,ta(this,e,r)},sp.performDataProcessorTasks=function(t,e){Ho(this,this._dataProcessorHandlers,t,e,{block:!0})},sp.performVisualTasks=function(t,e,n){Ho(this,this._visualHandlers,t,e,n)},sp.performSeriesTasks=function(t){var e;t.eachSeries(function(t){e|=t.dataTask.perform()}),this.unfinished|=e},sp.plan=function(){this._pipelineMap.each(function(t){var e=t.tail;do{if(e.__block){t.blockIndex=e.__idxInPipeline;break}e=e.getUpstream()}while(e)})};var lp=sp.updatePayload=function(t,e){"remain"!==e&&(t.context.payload=e)},up=Jo(0);jo.wrapStageHandler=function(t,e){return w(t)&&(t={overallReset:t,seriesType:ea(t)}),t.uid=tr("stageHandler"),e&&(t.visualType=e),t};var cp,hp={},fp={};na(hp,kd),na(fp,Xr),hp.eachSeriesByType=hp.eachRawSeriesByType=function(t){cp=t},hp.eachComponent=function(t){"series"===t.mainType&&t.subType&&(cp=t.subType)};var dp=["#37A2DA","#32C5E9","#67E0E3","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#E062AE","#E690D1","#e7bcf3","#9d96f5","#8378EA","#96BFFF"],pp={color:dp,colorLayer:[["#37A2DA","#ffd85c","#fd7b5f"],["#37A2DA","#67E0E3","#FFDB5C","#ff9f7f","#E062AE","#9d96f5"],["#37A2DA","#32C5E9","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#e7bcf3","#8378EA","#96BFFF"],dp]},gp=["#dd6b66","#759aa0","#e69d87","#8dc1a9","#ea7e53","#eedd78","#73a373","#73b9bc","#7289ab","#91ca8c","#f49f42"],vp={color:gp,backgroundColor:"#333",tooltip:{axisPointer:{lineStyle:{color:"#eee"},crossStyle:{color:"#eee"}}},legend:{textStyle:{color:"#eee"}},textStyle:{color:"#eee"},title:{textStyle:{color:"#eee"}},toolbox:{iconStyle:{normal:{borderColor:"#eee"}}},dataZoom:{textStyle:{color:"#eee"}},visualMap:{textStyle:{color:"#eee"}},timeline:{lineStyle:{color:"#eee"},itemStyle:{normal:{color:gp[1]}},label:{normal:{textStyle:{color:"#eee"}}},controlStyle:{normal:{color:"#eee",borderColor:"#eee"}}},timeAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},logAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},valueAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},categoryAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},line:{symbol:"circle"},graph:{color:gp},gauge:{title:{textStyle:{color:"#eee"}}},candlestick:{itemStyle:{normal:{color:"#FD1050",color0:"#0CF49B",borderColor:"#FD1050",borderColor0:"#0CF49B"}}}};vp.categoryAxis.splitLine.show=!1,ud.extend({type:"dataset",defaultOption:{seriesLayoutBy:wd,sourceHeader:null,dimensions:null,source:null},optionUpdated:function(){Tr(this)}}),Zd.extend({type:"dataset"});var mp=L,yp=p,_p=w,xp=S,wp=ud.parseClassType,bp={zrender:"4.0.4"},Sp=1e3,Mp=1e3,kp=3e3,Cp={PROCESSOR:{FILTER:Sp,STATISTIC:5e3},VISUAL:{LAYOUT:Mp,GLOBAL:2e3,CHART:kp,COMPONENT:4e3,BRUSH:5e3}},Ip="__flagInMainProcess",Ap="__optionUpdated",Tp=/^[a-zA-Z0-9_]+$/;ra.prototype.on=ia("on"),ra.prototype.off=ia("off"),ra.prototype.one=ia("one"),f(ra,zu);var Dp=oa.prototype;Dp._onframe=function(){if(!this._disposed){var t=this._scheduler;if(this[Ap]){var e=this[Ap].silent;this[Ip]=!0,sa(this),Op.update.call(this),this[Ip]=!1,this[Ap]=!1,ha.call(this,e),fa.call(this,e)}else if(t.unfinished){var n=1,i=this._model;this._api,t.unfinished=!1;do{var r=+new Date;t.performSeriesTasks(i),t.performDataProcessorTasks(i),ua(this,i),t.performVisualTasks(i),ya(this,this._model,0,"remain"),n-=+new Date-r}while(n>0&&t.unfinished);t.unfinished||this._zr.flush()}}},Dp.getDom=function(){return this._dom},Dp.getZr=function(){return this._zr},Dp.setOption=function(t,e,n){var i;if(xp(e)&&(n=e.lazyUpdate,i=e.silent,e=e.notMerge),this[Ip]=!0,!this._model||e){var r=new Zr(this._api),o=this._theme,a=this._model=new kd(null,null,o,r);a.scheduler=this._scheduler,a.init(null,null,o,r)}this._model.setOption(t,Rp),n?(this[Ap]={silent:i},this[Ip]=!1):(sa(this),Op.update.call(this),this._zr.flush(),this[Ap]=!1,this[Ip]=!1,ha.call(this,i),fa.call(this,i))},Dp.setTheme=function(){console.log("ECharts#setTheme() is DEPRECATED in ECharts 3.0"," at components/echarts/echarts.simple.min.js:22")},Dp.getModel=function(){return this._model},Dp.getOption=function(){return this._model&&this._model.getOption()},Dp.getWidth=function(){return this._zr.getWidth()},Dp.getHeight=function(){return this._zr.getHeight()},Dp.getDevicePixelRatio=function(){return this._zr.painter.dpr||e.devicePixelRatio||1},Dp.getRenderedCanvas=function(t){if(xu.canvasSupported)return(t=t||{}).pixelRatio=t.pixelRatio||1,t.backgroundColor=t.backgroundColor||this._model.get("backgroundColor"),this._zr.painter.getRenderedCanvas(t)},Dp.getSvgDataUrl=function(){if(xu.svgSupported){var t=this._zr;return p(t.storage.getDisplayList(),function(t){t.stopAnimation(!0)}),t.painter.pathToDataUrl()}},Dp.getDataURL=function(t){var e=(t=t||{}).excludeComponents,n=this._model,i=[],r=this;yp(e,function(t){n.eachComponent({mainType:t},function(t){var e=r._componentsMap[t.__viewId];e.group.ignore||(i.push(e),e.group.ignore=!0)})});var o="svg"===this._zr.painter.getType()?this.getSvgDataUrl():this.getRenderedCanvas(t).toDataURL("image/"+(t&&t.type||"png"));return yp(i,function(t){t.group.ignore=!1}),o},Dp.getConnectedDataURL=function(t){if(xu.canvasSupported){var e=this.group,n=Math.min,i=Math.max;if(jp[e]){var o=1/0,a=1/0,s=-1/0,l=-1/0,u=[],c=t&&t.pixelRatio||1;p(Vp,function(c,h){if(c.group===e){var f=c.getRenderedCanvas(r(t)),d=c.getDom().getBoundingClientRect();o=n(d.left,o),a=n(d.top,a),s=i(d.right,s),l=i(d.bottom,l),u.push({dom:f,left:d.left,top:d.top})}});var h=(s*=c)-(o*=c),f=(l*=c)-(a*=c),d=Ou();d.width=h,d.height=f;var g=sn(d);return yp(u,function(t){var e=new $e({style:{x:t.left*c-o,y:t.top*c-a,image:t.dom}});g.add(e)}),g.refreshImmediately(),d.toDataURL("image/"+(t&&t.type||"png"))}return this.getDataURL(t)}},Dp.convertToPixel=_(aa,"convertToPixel"),Dp.convertFromPixel=_(aa,"convertFromPixel"),Dp.containPixel=function(t,e){var n;return t=yn(this._model,t),p(t,function(t,i){i.indexOf("Models")>=0&&p(t,function(t){var r=t.coordinateSystem;if(r&&r.containPoint)n|=!!r.containPoint(e);else if("seriesModels"===i){var o=this._chartsMap[t.__viewId];o&&o.containPoint&&(n|=o.containPoint(e,t))}},this)},this),!!n},Dp.getVisual=function(t,e){var n=(t=yn(this._model,t,{defaultMainType:"series"})).seriesModel.getData(),i=t.hasOwnProperty("dataIndexInside")?t.dataIndexInside:t.hasOwnProperty("dataIndex")?n.indexOfRawIndex(t.dataIndex):null;return null!=i?n.getItemVisual(i,e):n.getVisual(e)},Dp.getViewOfComponentModel=function(t){return this._componentsMap[t.__viewId]},Dp.getViewOfSeriesModel=function(t){return this._chartsMap[t.__viewId]};var Op={prepareAndUpdate:function(t){sa(this),Op.update.call(this,t)},update:function(t){var e=this._model,n=this._api,i=this._zr,r=this._coordSysMgr,o=this._scheduler;if(e){o.restoreData(e,t),o.performSeriesTasks(e),r.create(e,n),o.performDataProcessorTasks(e,t),ua(this,e),r.update(e,n),ga(e),o.performVisualTasks(e,t),va(this,e,n,t);var a=e.get("backgroundColor")||"transparent";if(xu.canvasSupported)i.setBackgroundColor(a);else{var s=wt(a);a=Mt(s,"rgb"),0===s[3]&&(a="transparent")}_a(e,n)}},updateTransform:function(t){var e=this._model,n=this,i=this._api;if(e){var r=[];e.eachComponent(function(o,a){var s=n.getViewOfComponentModel(a);if(s&&s.__alive)if(s.updateTransform){var l=s.updateTransform(a,e,i,t);l&&l.update&&r.push(s)}else r.push(s)});var o=z();e.eachSeries(function(r){var a=n._chartsMap[r.__viewId];if(a.updateTransform){var s=a.updateTransform(r,e,i,t);s&&s.update&&o.set(r.uid,1)}else o.set(r.uid,1)}),ga(e),this._scheduler.performVisualTasks(e,t,{setDirty:!0,dirtyMap:o}),ya(n,e,0,t,o),_a(e,this._api)}},updateView:function(t){var e=this._model;e&&(Ro.markUpdateMethod(t,"updateView"),ga(e),this._scheduler.performVisualTasks(e,t,{setDirty:!0}),va(this,this._model,this._api,t),_a(e,this._api))},updateVisual:function(t){Op.update.call(this,t)},updateLayout:function(t){Op.update.call(this,t)}};Dp.resize=function(t){this._zr.resize(t);var e=this._model;if(this._loadingFX&&this._loadingFX.resize(),e){var n=e.resetOption("media"),i=t&&t.silent;this[Ip]=!0,n&&sa(this),Op.update.call(this),this[Ip]=!1,ha.call(this,i),fa.call(this,i)}},Dp.showLoading=function(t,e){if(xp(t)&&(e=t,t=""),t=t||"default",this.hideLoading(),Fp[t]){var n=Fp[t](this._api,e),i=this._zr;this._loadingFX=n,i.add(n)}},Dp.hideLoading=function(){this._loadingFX&&this._zr.remove(this._loadingFX),this._loadingFX=null},Dp.makeActionFromEvent=function(t){var e=s({},t);return e.type=Ep[t.type],e},Dp.dispatchAction=function(t,e){xp(e)||(e={silent:!!e}),Lp[t.type]&&this._model&&(this[Ip]?this._pendingActions.push(t):(ca.call(this,t,e.silent),e.flush?this._zr.flush(!0):!1!==e.flush&&xu.browser.weChat&&this._throttledZrFlush(),ha.call(this,e.silent),fa.call(this,e.silent)))},Dp.appendData=function(t){var e=t.seriesIndex;this.getModel().getSeriesByIndex(e).appendData(t),this._scheduler.unfinished=!0},Dp.on=ia("on"),Dp.off=ia("off"),Dp.one=ia("one");var Pp=["click","dblclick","mouseover","mouseout","mousemove","mousedown","mouseup","globalout","contextmenu"];Dp._initEvents=function(){yp(Pp,function(t){this._zr.on(t,function(e){var n,i=this.getModel(),r=e.target;if("globalout"===t)n={};else if(r&&null!=r.dataIndex){var o=r.dataModel||i.getSeriesByIndex(r.seriesIndex);n=o&&o.getDataParams(r.dataIndex,r.dataType)||{}}else r&&r.eventData&&(n=s({},r.eventData));n&&(n.event=e,n.type=t,this.trigger(t,n))},this)},this),yp(Ep,function(t,e){this._messageCenter.on(e,function(t){this.trigger(e,t)},this)},this)},Dp.isDisposed=function(){return this._disposed},Dp.clear=function(){this.setOption({series:[]},!0)},Dp.dispose=function(){if(!this._disposed){this._disposed=!0,xn(this.getDom(),Gp,"");var t=this._api,e=this._model;yp(this._componentsViews,function(n){n.dispose(e,t)}),yp(this._chartsViews,function(n){n.dispose(e,t)}),this._zr.dispose(),delete Vp[this.id]}},f(oa,zu);var Lp={},Ep={},Np=[],Rp=[],Bp=[],zp=[],$p={},Fp={},Vp={},jp={},Hp=new Date-0,Wp=new Date-0,Gp="_echarts_instance_",Up={},qp=ka;Pa(2e3,ip),Aa($d),Ta(5e3,function(t){var e=z();t.eachSeries(function(t){var n=t.get("stack");if(n){var i=e.get(n)||e.set(n,[]),r=t.getData(),o={stackResultDimension:r.getCalculationInfo("stackResultDimension"),stackedOverDimension:r.getCalculationInfo("stackedOverDimension"),stackedDimension:r.getCalculationInfo("stackedDimension"),stackedByDimension:r.getCalculationInfo("stackedByDimension"),isStackedByIndex:r.getCalculationInfo("isStackedByIndex"),data:r,seriesModel:t};if(!o.stackedDimension||!o.isStackedByIndex&&!o.stackedByDimension)return;i.length&&r.setCalculationInfo("stackedOnSeries",i[i.length-1].seriesModel),i.push(o)}}),e.each(po)}),Ea("default",function(t,e){l(e=e||{},{text:"loading",color:"#c23531",textColor:"#000",maskColor:"rgba(255, 255, 255, 0.8)",zlevel:0});var n=new Af({style:{fill:e.maskColor},zlevel:e.zlevel,z:1e4}),i=new Pf({shape:{startAngle:-ap/2,endAngle:-ap/2+.1,r:10},style:{stroke:e.color,lineCap:"round",lineWidth:5},zlevel:e.zlevel,z:10001}),r=new Af({style:{fill:"none",text:e.text,textPosition:"right",textDistance:10,textFill:e.textColor},zlevel:e.zlevel,z:10001});i.animateShape(!0).when(1e3,{endAngle:3*ap/2}).start("circularInOut"),i.animateShape(!0).when(1e3,{startAngle:3*ap/2}).delay(300).start("circularInOut");var o=new pc;return o.add(i),o.add(r),o.add(n),o.resize=function(){var e=t.getWidth()/2,o=t.getHeight()/2;i.setShape({cx:e,cy:o});var a=i.shape.r;r.setShape({x:e-a,y:o-a,width:2*a,height:2*a}),n.setShape({x:0,y:0,width:t.getWidth(),height:t.getHeight()})},o.resize(),o}),Da({type:"highlight",event:"highlight",update:"highlight"},$),Da({type:"downplay",event:"downplay",update:"downplay"},$),Ia("light",pp),Ia("dark",vp);var Xp={};$a.prototype={constructor:$a,add:function(t){return this._add=t,this},update:function(t){return this._update=t,this},remove:function(t){return this._remove=t,this},execute:function(){var t=this._old,e=this._new,n={},i=[],r=[];for(Fa(t,{},i,"_oldKeyGetter",this),Fa(e,n,r,"_newKeyGetter",this),o=0;o<t.length;o++)null!=(s=n[a=i[o]])?((u=s.length)?(1===u&&(n[a]=null),s=s.unshift()):n[a]=null,this._update&&this._update(s,o)):this._remove&&this._remove(o);for(var o=0;o<r.length;o++){var a=r[o];if(n.hasOwnProperty(a)){var s=n[a];if(null==s)continue;if(s.length)for(var l=0,u=s.length;l<u;l++)this._add&&this._add(s[l]);else this._add&&this._add(s)}}}};var Yp=z(["tooltip","label","itemName","itemId","seriesName"]),Zp=S,Kp="e\0\0",Jp={float:"undefined"==typeof Float64Array?Array:Float64Array,int:"undefined"==typeof Int32Array?Array:Int32Array,ordinal:Array,number:Array,time:Array},Qp="undefined"==typeof Uint32Array?Array:Uint32Array,tg="undefined"==typeof Uint16Array?Array:Uint16Array,eg=["hasItemOption","_nameList","_idList","_invertedIndicesMap","_rawData","_chunkSize","_chunkCount","_dimValueGetter","_count","_rawCount","_nameDimIdx","_idDimIdx"],ng=["_extent","_approximateExtent","_rawExtent"],ig=function(t,e){t=t||["x","y"];for(var n={},i=[],r={},o=0;o<t.length;o++){var a=t[o];b(a)&&(a={name:a});var s=a.name;a.type=a.type||"float",a.coordDim||(a.coordDim=s,a.coordDimIndex=0),a.otherDims=a.otherDims||{},i.push(s),n[s]=a,a.index=o,a.createInvertedIndices&&(r[s]=[])}this.dimensions=i,this._dimensionInfos=n,this.hostModel=e,this.dataType,this._indices=null,this._count=0,this._rawCount=0,this._storage={},this._nameList=[],this._idList=[],this._optionModels=[],this._visual={},this._layout={},this._itemVisuals=[],this.hasItemVisual={},this._itemLayouts=[],this._graphicEls=[],this._chunkSize=1e5,this._chunkCount=0,this._rawData,this._rawExtent={},this._extent={},this._approximateExtent={},this._dimensionsSummary=Va(this),this._invertedIndicesMap=r,this._calculationInfo={}},rg=ig.prototype;rg.type="list",rg.hasItemOption=!0,rg.getDimension=function(t){return isNaN(t)||(t=this.dimensions[t]||t),t},rg.getDimensionInfo=function(t){return this._dimensionInfos[this.getDimension(t)]},rg.getDimensionsOnCoord=function(){return this._dimensionsSummary.dataDimsOnCoord.slice()},rg.mapDimension=function(t,e){var n=this._dimensionsSummary;if(null==e)return n.encodeFirstDimNotExtra[t];var i=n.encode[t];return!0===e?(i||[]).slice():i&&i[e]},rg.initData=function(t,e,n){(Ar.isInstance(t)||d(t))&&(t=new go(t,this.dimensions.length)),this._rawData=t,this._storage={},this._indices=null,this._nameList=e||[],this._idList=[],this._nameRepeatCount={},n||(this.hasItemOption=!1),this.defaultDimValueGetter=Hd[this._rawData.getSource().sourceFormat],this._dimValueGetter=n=n||this.defaultDimValueGetter,this._rawExtent={},this._initDataFromProvider(0,t.count()),t.pure&&(this.hasItemOption=!1)},rg.getProvider=function(){return this._rawData},rg.appendData=function(t){var e=this._rawData,n=this.count();e.appendData(t);var i=e.count();e.persistent||(i+=n),this._initDataFromProvider(n,i)},rg._initDataFromProvider=function(t,e){if(!(t>=e)){for(var n,i=this._chunkSize,r=this._rawData,o=this._storage,a=this.dimensions,s=a.length,l=this._dimensionInfos,u=this._nameList,c=this._idList,h=this._rawExtent,f=this._nameRepeatCount={},d=this._chunkCount,p=d-1,g=0;g<s;g++){h[C=a[g]]||(h[C]=[1/0,-1/0]);var v=l[C];0===v.otherDims.itemName&&(n=this._nameDimIdx=g),0===v.otherDims.itemId&&(this._idDimIdx=g);var m=Jp[v.type];o[C]||(o[C]=[]);var y=o[C][p];if(y&&y.length<i){for(var _=new m(Math.min(e-p*i,i)),x=0;x<y.length;x++)_[x]=y[x];o[C][p]=_}for(k=d*i;k<e;k+=i)o[C].push(new m(Math.min(e-k,i)));this._chunkCount=o[C].length}for(var w=new Array(s),b=t;b<e;b++){w=r.getItem(b,w);for(var S=Math.floor(b/i),M=b%i,k=0;k<s;k++){var C=a[k],I=o[C][S],A=this._dimValueGetter(w,C,b,k);I[M]=A;var T=h[C];A<T[0]&&(T[0]=A),A>T[1]&&(T[1]=A)}if(!r.pure){var D=u[b];if(w&&null==D)if(null!=w.name)u[b]=D=w.name;else if(null!=n){var O=a[n],P=o[O][S];if(P){D=P[M];var L=l[O].ordinalMeta;L&&L.categories.length&&(D=L.categories[D])}}var E=null==w?null:w.id;null==E&&null!=D&&(f[D]=f[D]||0,E=D,f[D]>0&&(E+="__ec__"+f[D]),f[D]++),null!=E&&(c[b]=E)}}!r.persistent&&r.clean&&r.clean(),this._rawCount=this._count=e,this._extent={},qa(this)}},rg.count=function(){return this._count},rg.getIndices=function(){var t=this._indices;if(t){var e=t.constructor,n=this._count;if(e===Array)for(i=new e(n),r=0;r<n;r++)i[r]=t[r];else i=new e(t.buffer,0,n)}else for(var i=new(e=Wa(this))(this.count()),r=0;r<i.length;r++)i[r]=r;return i},rg.get=function(t,e){if(!(e>=0&&e<this._count))return NaN;var n=this._storage;if(!n[t])return NaN;e=this.getRawIndex(e);var i=Math.floor(e/this._chunkSize),r=e%this._chunkSize;return n[t][i][r]},rg.getByRawIndex=function(t,e){if(!(e>=0&&e<this._rawCount))return NaN;var n=this._storage[t];if(!n)return NaN;var i=Math.floor(e/this._chunkSize),r=e%this._chunkSize;return n[i][r]},rg._getFast=function(t,e){var n=Math.floor(e/this._chunkSize),i=e%this._chunkSize;return this._storage[t][n][i]},rg.getValues=function(t,e){var n=[];x(t)||(e=t,t=this.dimensions);for(var i=0,r=t.length;i<r;i++)n.push(this.get(t[i],e));return n},rg.hasValue=function(t){for(var e=this._dimensionsSummary.dataDimsOnCoord,n=this._dimensionInfos,i=0,r=e.length;i<r;i++)if("ordinal"!==n[e[i]].type&&isNaN(this.get(e[i],t)))return!1;return!0},rg.getDataExtent=function(t){t=this.getDimension(t);var e=[1/0,-1/0];if(!this._storage[t])return e;var n,i=this.count();if(!this._indices)return this._rawExtent[t].slice();if(n=this._extent[t])return n.slice();for(var r=(n=e)[0],o=n[1],a=0;a<i;a++){var s=this._getFast(t,this.getRawIndex(a));s<r&&(r=s),s>o&&(o=s)}return n=[r,o],this._extent[t]=n,n},rg.getApproximateExtent=function(t){return t=this.getDimension(t),this._approximateExtent[t]||this.getDataExtent(t)},rg.setApproximateExtent=function(t,e){e=this.getDimension(e),this._approximateExtent[e]=t.slice()},rg.getCalculationInfo=function(t){return this._calculationInfo[t]},rg.setCalculationInfo=function(t,e){Zp(t)?s(this._calculationInfo,t):this._calculationInfo[t]=e},rg.getSum=function(t){var e=0;if(this._storage[t])for(var n=0,i=this.count();n<i;n++){var r=this.get(t,n);isNaN(r)||(e+=r)}return e},rg.getMedian=function(t){var e=[];this.each(t,function(t,n){isNaN(t)||e.push(t)});var n=[].concat(e).sort(function(t,e){return t-e}),i=this.count();return 0===i?0:i%2==1?n[(i-1)/2]:(n[i/2]+n[i/2-1])/2},rg.rawIndexOf=function(t,e){var n=(t&&this._invertedIndicesMap[t])[e];return null==n||isNaN(n)?-1:n},rg.indexOfName=function(t){for(var e=0,n=this.count();e<n;e++)if(this.getName(e)===t)return e;return-1},rg.indexOfRawIndex=function(t){if(!this._indices)return t;if(t>=this._rawCount||t<0)return-1;var e=this._indices,n=e[t];if(null!=n&&n<this._count&&n===t)return t;for(var i=0,r=this._count-1;i<=r;){var o=(i+r)/2|0;if(e[o]<t)i=o+1;else{if(!(e[o]>t))return o;r=o-1}}return-1},rg.indicesOfNearest=function(t,e,n){var i=[];if(!this._storage[t])return i;null==n&&(n=1/0);for(var r=Number.MAX_VALUE,o=-1,a=0,s=this.count();a<s;a++){var l=e-this.get(t,a),u=Math.abs(l);l<=n&&u<=r&&((u<r||l>=0&&o<0)&&(r=u,o=l,i.length=0),i.push(a))}return i},rg.getRawIndex=Ya,rg.getRawDataItem=function(t){if(this._rawData.persistent)return this._rawData.getItem(this.getRawIndex(t));for(var e=[],n=0;n<this.dimensions.length;n++){var i=this.dimensions[n];e.push(this.get(i,t))}return e},rg.getName=function(t){var e=this.getRawIndex(t);return this._nameList[e]||Xa(this,this._nameDimIdx,e)||""},rg.getId=function(t){return Ka(this,this.getRawIndex(t))},rg.each=function(t,e,n,i){if(this._count){"function"==typeof t&&(i=n,n=e,e=t,t=[]),n=n||i||this;for(var r=(t=g(Ja(t),this.getDimension,this)).length,o=0;o<this.count();o++)switch(r){case 0:e.call(n,o);break;case 1:e.call(n,this.get(t[0],o),o);break;case 2:e.call(n,this.get(t[0],o),this.get(t[1],o),o);break;default:for(var a=0,s=[];a<r;a++)s[a]=this.get(t[a],o);s[a]=o,e.apply(n,s)}}},rg.filterSelf=function(t,e,n,i){if(this._count){"function"==typeof t&&(i=n,n=e,e=t,t=[]),n=n||i||this,t=g(Ja(t),this.getDimension,this);for(var r=this.count(),o=new(Wa(this))(r),a=[],s=t.length,l=0,u=t[0],c=0;c<r;c++){var h,f=this.getRawIndex(c);if(0===s)h=e.call(n,c);else if(1===s){var d=this._getFast(u,f);h=e.call(n,d,c)}else{for(var p=0;p<s;p++)a[p]=this._getFast(u,f);a[p]=c,h=e.apply(n,a)}h&&(o[l++]=f)}return l<r&&(this._indices=o),this._count=l,this._extent={},this.getRawIndex=this._indices?Za:Ya,this}},rg.selectRange=function(t){if(this._count){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);var i=e.length;if(i){var r=this.count(),o=new(Wa(this))(r),a=0,s=e[0],l=t[s][0],u=t[s][1],c=!1;if(!this._indices){var h=0;if(1===i){for(var f=this._storage[e[0]],d=0;d<this._chunkCount;d++)for(var p=f[d],g=Math.min(this._count-d*this._chunkSize,this._chunkSize),v=0;v<g;v++)((w=p[v])>=l&&w<=u||isNaN(w))&&(o[a++]=h),h++;c=!0}else if(2===i){f=this._storage[s];var m=this._storage[e[1]],y=t[e[1]][0],_=t[e[1]][1];for(d=0;d<this._chunkCount;d++){p=f[d];var x=m[d];for(g=Math.min(this._count-d*this._chunkSize,this._chunkSize),v=0;v<g;v++){var w=p[v],b=x[v];(w>=l&&w<=u||isNaN(w))&&(b>=y&&b<=_||isNaN(b))&&(o[a++]=h),h++}}c=!0}}if(!c)if(1===i)for(v=0;v<r;v++)M=this.getRawIndex(v),((w=this._getFast(s,M))>=l&&w<=u||isNaN(w))&&(o[a++]=M);else for(v=0;v<r;v++){var S=!0,M=this.getRawIndex(v);for(d=0;d<i;d++){var k=e[d];((w=this._getFast(n,M))<t[k][0]||w>t[k][1])&&(S=!1)}S&&(o[a++]=this.getRawIndex(v))}return a<r&&(this._indices=o),this._count=a,this._extent={},this.getRawIndex=this._indices?Za:Ya,this}}},rg.mapArray=function(t,e,n,i){"function"==typeof t&&(i=n,n=e,e=t,t=[]),n=n||i||this;var r=[];return this.each(t,function(){r.push(e&&e.apply(this,arguments))},n),r},rg.map=function(t,e,n,i){n=n||i||this;var r=Qa(this,t=g(Ja(t),this.getDimension,this));r._indices=this._indices,r.getRawIndex=r._indices?Za:Ya;for(var o=r._storage,a=[],s=this._chunkSize,l=t.length,u=this.count(),c=[],h=r._rawExtent,f=0;f<u;f++){for(var d=0;d<l;d++)c[d]=this.get(t[d],f);c[l]=f;var p=e&&e.apply(n,c);if(null!=p){"object"!=typeof p&&(a[0]=p,p=a);for(var v=this.getRawIndex(f),m=Math.floor(v/s),y=v%s,_=0;_<p.length;_++){var x=t[_],w=p[_],b=h[x],S=o[x];S&&(S[m][y]=w),w<b[0]&&(b[0]=w),w>b[1]&&(b[1]=w)}}}return r},rg.downSample=function(t,e,n,i){for(var r=Qa(this,[t]),o=r._storage,a=[],s=Math.floor(1/e),l=o[t],u=this.count(),c=this._chunkSize,h=r._rawExtent[t],f=new(Wa(this))(u),d=0,p=0;p<u;p+=s){s>u-p&&(s=u-p,a.length=s);for(var g=0;g<s;g++){var v=this.getRawIndex(p+g),m=Math.floor(v/c),y=v%c;a[g]=l[m][y]}var _=n(a),x=this.getRawIndex(Math.min(p+i(a,_)||0,u-1)),w=x%c;l[Math.floor(x/c)][w]=_,_<h[0]&&(h[0]=_),_>h[1]&&(h[1]=_),f[d++]=x}return r._count=d,r._indices=f,r.getRawIndex=Za,r},rg.getItemModel=function(t){var e=this.hostModel;return new Ki(this.getRawDataItem(t),e,e&&e.ecModel)},rg.diff=function(t){var e=this;return new $a(t?t.getIndices():[],this.getIndices(),function(e){return Ka(t,e)},function(t){return Ka(e,t)})},rg.getVisual=function(t){var e=this._visual;return e&&e[t]},rg.setVisual=function(t,e){if(Zp(t))for(var n in t)t.hasOwnProperty(n)&&this.setVisual(n,t[n]);else this._visual=this._visual||{},this._visual[t]=e},rg.setLayout=function(t,e){if(Zp(t))for(var n in t)t.hasOwnProperty(n)&&this.setLayout(n,t[n]);else this._layout[t]=e},rg.getLayout=function(t){return this._layout[t]},rg.getItemLayout=function(t){return this._itemLayouts[t]},rg.setItemLayout=function(t,e,n){this._itemLayouts[t]=n?s(this._itemLayouts[t]||{},e):e},rg.clearItemLayouts=function(){this._itemLayouts.length=0},rg.getItemVisual=function(t,e,n){var i=this._itemVisuals[t],r=i&&i[e];return null!=r||n?r:this.getVisual(e)},rg.setItemVisual=function(t,e,n){var i=this._itemVisuals[t]||{},r=this.hasItemVisual;if(this._itemVisuals[t]=i,Zp(e))for(var o in e)e.hasOwnProperty(o)&&(i[o]=e[o],r[o]=!0);else i[e]=n,r[e]=!0},rg.clearAllVisual=function(){this._visual={},this._itemVisuals=[],this.hasItemVisual={}};var og=function(t){t.seriesIndex=this.seriesIndex,t.dataIndex=this.dataIndex,t.dataType=this.dataType};rg.setItemGraphicEl=function(t,e){var n=this.hostModel;e&&(e.dataIndex=t,e.dataType=this.dataType,e.seriesIndex=n&&n.seriesIndex,"group"===e.type&&e.traverse(og,e)),this._graphicEls[t]=e},rg.getItemGraphicEl=function(t){return this._graphicEls[t]},rg.eachItemGraphicEl=function(t,e){p(this._graphicEls,function(n,i){n&&t&&t.call(e,n,i)})},rg.cloneShallow=function(t){if(!t){var e=g(this.dimensions,this.getDimensionInfo,this);t=new ig(e,this.hostModel)}if(t._storage=this._storage,Ua(t,this),this._indices){var n=this._indices.constructor;t._indices=new n(this._indices)}else t._indices=null;return t.getRawIndex=t._indices?Za:Ya,t},rg.wrapMethod=function(t,e){var n=this[t];"function"==typeof n&&(this.__wrappedMethods=this.__wrappedMethods||[],this.__wrappedMethods.push(t),this[t]=function(){var t=n.apply(this,arguments);return e.apply(this,[t].concat(O(arguments)))})},rg.TRANSFERABLE_METHODS=["cloneShallow","downSample","map"],rg.CHANGABLE_METHODS=["filterSelf","selectRange"];var ag=function(t,e){return e=e||{},ns(e.coordDimensions||[],t,{dimsDef:e.dimensionsDefine||t.dimensionsDefine,encodeDef:e.encodeDefine||t.encodeDefine,dimCount:e.dimensionsCount,generateCoord:e.generateCoord,generateCoordCount:e.generateCoordCount})};Yd.extend({type:"series.line",dependencies:["grid","polar"],getInitialData:function(t,e){return ls(this.getSource(),this)},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,hoverAnimation:!0,clipOverflow:!0,label:{position:"top"},lineStyle:{width:2,type:"solid"},step:!1,smooth:!1,smoothMonotone:null,symbol:"emptyCircle",symbolSize:4,symbolRotate:null,showSymbol:!0,showAllSymbol:"auto",connectNulls:!1,sampling:"none",animationEasing:"linear",progressive:0,hoverLayerThreshold:1/0}});var sg=mi({type:"triangle",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=e.width/2,o=e.height/2;t.moveTo(n,i-o),t.lineTo(n+r,i+o),t.lineTo(n-r,i+o),t.closePath()}}),lg=mi({type:"diamond",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=e.width/2,o=e.height/2;t.moveTo(n,i-o),t.lineTo(n+r,i),t.lineTo(n,i+o),t.lineTo(n-r,i),t.closePath()}}),ug=mi({type:"pin",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.x,i=e.y,r=e.width/5*3,o=Math.max(r,e.height),a=r/2,s=a*a/(o-a),l=i-o+a+s,u=Math.asin(s/a),c=Math.cos(u)*a,h=Math.sin(u),f=Math.cos(u),d=.6*a,p=.7*a;t.moveTo(n-c,l+s),t.arc(n,l,a,Math.PI-u,2*Math.PI+u),t.bezierCurveTo(n+c-h*d,l+s+f*d,n,i-p,n,i),t.bezierCurveTo(n,i-p,n-c+h*d,l+s+f*d,n-c,l+s),t.closePath()}}),cg=mi({type:"arrow",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.height,i=e.width,r=e.x,o=e.y,a=i/3*2;t.moveTo(r,o),t.lineTo(r+a,o+n),t.lineTo(r,o+n/4*3),t.lineTo(r-a,o+n),t.lineTo(r,o),t.closePath()}}),hg={line:function(t,e,n,i,r){r.x1=t,r.y1=e+i/2,r.x2=t+n,r.y2=e+i/2},rect:function(t,e,n,i,r){r.x=t,r.y=e,r.width=n,r.height=i},roundRect:function(t,e,n,i,r){r.x=t,r.y=e,r.width=n,r.height=i,r.r=Math.min(n,i)/4},square:function(t,e,n,i,r){var o=Math.min(n,i);r.x=t,r.y=e,r.width=o,r.height=o},circle:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.r=Math.min(n,i)/2},diamond:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.width=n,r.height=i},pin:function(t,e,n,i,r){r.x=t+n/2,r.y=e+i/2,r.width=n,r.height=i},arrow:function(t,e,n,i,r){r.x=t+n/2,r.y=e+i/2,r.width=n,r.height=i},triangle:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.width=n,r.height=i}},fg={};p({line:Tf,rect:Af,roundRect:Af,square:Af,circle:_f,diamond:lg,pin:ug,arrow:cg,triangle:sg},function(t,e){fg[e]=new t});var dg=mi({type:"symbol",shape:{symbolType:"",x:0,y:0,width:0,height:0},beforeBrush:function(){var t=this.style;"pin"===this.shape.symbolType&&"inside"===t.textPosition&&(t.textPosition=["50%","40%"],t.textAlign="center",t.textVerticalAlign="middle")},buildPath:function(t,e,n){var i=e.symbolType,r=fg[i];"none"!==e.symbolType&&(r||(r=fg[i="rect"]),hg[i](e.x,e.y,e.width,e.height,r.shape),r.buildPath(t,r.shape,n))}}),pg=ps.prototype,gg=ps.getSymbolSize=function(t,e){var n=t.getItemVisual(e,"symbolSize");return n instanceof Array?n.slice():[+n,+n]};pg._createSymbol=function(t,e,n,i,r){this.removeAll();var o=fs(t,-1,-1,2,2,e.getItemVisual(n,"color"),r);o.attr({z2:100,culling:!0,scale:gs(i)}),o.drift=vs,this._symbolType=t,this.add(o)},pg.stopSymbolAnimation=function(t){this.childAt(0).stopAnimation(t)},pg.getSymbolPath=function(){return this.childAt(0)},pg.getScale=function(){return this.childAt(0).scale},pg.highlight=function(){this.childAt(0).trigger("emphasis")},pg.downplay=function(){this.childAt(0).trigger("normal")},pg.setZ=function(t,e){var n=this.childAt(0);n.zlevel=t,n.z=e},pg.setDraggable=function(t){var e=this.childAt(0);e.draggable=t,e.cursor=t?"move":"pointer"},pg.updateData=function(t,e,n){this.silent=!1;var i=t.getItemVisual(e,"symbol")||"circle",r=t.hostModel,o=gg(t,e),a=i!==this._symbolType;if(a){var s=t.getItemVisual(e,"symbolKeepAspect");this._createSymbol(i,t,e,o,s)}else(l=this.childAt(0)).silent=!1,qi(l,{scale:gs(o)},r,e);if(this._updateCommon(t,e,o,n),a){var l=this.childAt(0),u=n&&n.fadeIn,c={scale:l.scale.slice()};u&&(c.style={opacity:l.style.opacity}),l.scale=[0,0],u&&(l.style.opacity=0),Xi(l,c,r,e)}this._seriesModel=r};var vg=["itemStyle"],mg=["emphasis","itemStyle"],yg=["label"],_g=["emphasis","label"];pg._updateCommon=function(t,e,n,i){var r=this.childAt(0),o=t.hostModel,a=t.getItemVisual(e,"color");"image"!==r.type&&r.useStyle({strokeNoScale:!0});var l=i&&i.itemStyle,u=i&&i.hoverItemStyle,c=i&&i.symbolRotate,h=i&&i.symbolOffset,f=i&&i.labelModel,d=i&&i.hoverLabelModel,p=i&&i.hoverAnimation,g=i&&i.cursorStyle;if(!i||t.hasItemOption){var v=i&&i.itemModel?i.itemModel:t.getItemModel(e);l=v.getModel(vg).getItemStyle(["color"]),u=v.getModel(mg).getItemStyle(),c=v.getShallow("symbolRotate"),h=v.getShallow("symbolOffset"),f=v.getModel(yg),d=v.getModel(_g),p=v.getShallow("hoverAnimation"),g=v.getShallow("cursor")}else u=s({},u);var m=r.style;r.attr("rotation",(c||0)*Math.PI/180||0),h&&r.attr("position",[ir(h[0],n[0]),ir(h[1],n[1])]),g&&r.attr("cursor",g),r.setColor(a,i&&i.symbolInnerColor),r.setStyle(l);var y=t.getItemVisual(e,"opacity");null!=y&&(m.opacity=y);var _=t.getItemVisual(e,"liftZ"),x=r.__z2Origin;null!=_?null==x&&(r.__z2Origin=r.z2,r.z2+=_):null!=x&&(r.z2=x,r.__z2Origin=null);var w=i&&i.useNameLabel;Bi(m,u,f,d,{labelFetcher:o,labelDataIndex:e,defaultText:function(e,n){return w?t.getName(e):ds(t,e)},isRectText:!0,autoColor:a}),r.off("mouseover").off("mouseout").off("emphasis").off("normal"),r.hoverStyle=u,Ri(r);var b=gs(n);if(p&&o.isAnimationEnabled()){var S=function(){if(!this.incremental){var t=b[1]/b[0];this.animateTo({scale:[Math.max(1.1*b[0],b[0]+3),Math.max(1.1*b[1],b[1]+3*t)]},400,"elasticOut")}},M=function(){this.incremental||this.animateTo({scale:b},400,"elasticOut")};r.on("mouseover",S).on("mouseout",M).on("emphasis",S).on("normal",M)}},pg.fadeOut=function(t,e){var n=this.childAt(0);this.silent=n.silent=!0,!(e&&e.keepLabel)&&(n.style.text=null),qi(n,{style:{opacity:0},scale:[0,0]},this._seriesModel,this.dataIndex,t)},h(ps,pc);var xg=ms.prototype;xg.updateData=function(t,e){e=_s(e);var n=this.group,i=t.hostModel,r=this._data,o=this._symbolCtor,a=xs(t);r||n.removeAll(),t.diff(r).add(function(i){var r=t.getItemLayout(i);if(ys(t,r,i,e)){var s=new o(t,i,a);s.attr("position",r),t.setItemGraphicEl(i,s),n.add(s)}}).update(function(s,l){var u=r.getItemGraphicEl(l),c=t.getItemLayout(s);ys(t,c,s,e)?(u?(u.updateData(t,s,a),qi(u,{position:c},i)):(u=new o(t,s)).attr("position",c),n.add(u),t.setItemGraphicEl(s,u)):n.remove(u)}).remove(function(t){var e=r.getItemGraphicEl(t);e&&e.fadeOut(function(){n.remove(e)})}).execute(),this._data=t},xg.isPersistent=function(){return!0},xg.updateLayout=function(){var t=this._data;t&&t.eachItemGraphicEl(function(e,n){var i=t.getItemLayout(n);e.attr("position",i)})},xg.incrementalPrepareUpdate=function(t){this._seriesScope=xs(t),this._data=null,this.group.removeAll()},xg.incrementalUpdate=function(t,e,n){n=_s(n);for(var i=t.start;i<t.end;i++){var r=e.getItemLayout(i);if(ys(e,r,i,n)){var o=new this._symbolCtor(e,i,this._seriesScope);o.traverse(function(t){t.isGroup||(t.incremental=t.useHoverLayer=!0)}),o.attr("position",r),this.group.add(o),e.setItemGraphicEl(i,o)}}},xg.remove=function(t){var e=this.group,n=this._data;n&&t?n.eachItemGraphicEl(function(t){t.fadeOut(function(){e.remove(t)})}):e.removeAll()};var wg=function(t,e,n,i,r,o,a,s){for(var l=Ms(t,e),u=[],c=[],h=[],f=[],d=[],p=[],g=[],v=ws(r,e,a),m=ws(o,t,s),y=0;y<l.length;y++){var _=l[y],x=!0;switch(_.cmd){case"=":var w=t.getItemLayout(_.idx),b=e.getItemLayout(_.idx1);(isNaN(w[0])||isNaN(w[1]))&&(w=b.slice()),u.push(w),c.push(b),h.push(n[_.idx]),f.push(i[_.idx1]),g.push(e.getRawIndex(_.idx1));break;case"+":S=_.idx,u.push(r.dataToPoint([e.get(v.dataDimsForPoint[0],S),e.get(v.dataDimsForPoint[1],S)])),c.push(e.getItemLayout(S).slice()),h.push(Ss(v,r,e,S)),f.push(i[S]),g.push(e.getRawIndex(S));break;case"-":var S=_.idx,M=t.getRawIndex(S);M!==S?(u.push(t.getItemLayout(S)),c.push(o.dataToPoint([t.get(m.dataDimsForPoint[0],S),t.get(m.dataDimsForPoint[1],S)])),h.push(n[S]),f.push(Ss(m,o,t,S)),g.push(M)):x=!1}x&&(d.push(_),p.push(p.length))}p.sort(function(t,e){return g[t]-g[e]});var k=[],C=[],I=[],A=[],T=[];for(y=0;y<p.length;y++)S=p[y],k[y]=u[S],C[y]=c[S],I[y]=h[S],A[y]=f[S],T[y]=d[S];return{current:k,next:C,stackedOnCurrent:I,stackedOnNext:A,status:T}},bg=Z,Sg=K,Mg=function(t,e,n,i){return t[0]=e[0]+n[0]*i,t[1]=e[1]+n[1]*i,t},kg=function(t,e){return t[0]=e[0],t[1]=e[1],t},Cg=[],Ig=[],Ag=[],Tg=si.extend({type:"ec-polyline",shape:{points:[],smooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},style:{fill:null,stroke:"#000"},brush:wf(si.prototype.brush),buildPath:function(t,e){var n=e.points,i=0,r=n.length,o=Ts(n,e.smoothConstraint);if(e.connectNulls){for(;r>0&&ks(n[r-1]);r--);for(;i<r&&ks(n[i]);i++);}for(;i<r;)i+=Cs(t,n,i,r,r,1,o.min,o.max,e.smooth,e.smoothMonotone,e.connectNulls)+1}}),Dg=si.extend({type:"ec-polygon",shape:{points:[],stackedOnPoints:[],smooth:0,stackedOnSmooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},brush:wf(si.prototype.brush),buildPath:function(t,e){var n=e.points,i=e.stackedOnPoints,r=0,o=n.length,a=e.smoothMonotone,s=Ts(n,e.smoothConstraint),l=Ts(i,e.smoothConstraint);if(e.connectNulls){for(;o>0&&ks(n[o-1]);o--);for(;r<o&&ks(n[r]);r++);}for(;r<o;){var u=Cs(t,n,r,o,o,1,s.min,s.max,e.smooth,a,e.connectNulls);Cs(t,i,r+u-1,u,o,-1,l.min,l.max,e.stackedOnSmooth,a,e.connectNulls),r+=u+1,t.closePath()}}});Ro.extend({type:"line",init:function(){var t=new pc,e=new ms;this.group.add(e.group),this._symbolDraw=e,this._lineGroup=t},render:function(t,e,n){var i=t.coordinateSystem,r=this.group,o=t.getData(),a=t.getModel("lineStyle"),s=t.getModel("areaStyle"),u=o.mapArray(o.getItemLayout),c="polar"===i.type,h=this._coordSys,f=this._symbolDraw,d=this._polyline,p=this._polygon,g=this._lineGroup,v=t.get("animation"),m=!s.isEmpty(),y=s.get("origin"),_=Ls(i,o,ws(i,o,y)),x=t.get("showSymbol"),w=x&&!c&&$s(t,o,i),b=this._data;b&&b.eachItemGraphicEl(function(t,e){t.__temp&&(r.remove(t),b.setItemGraphicEl(e,null))}),x||f.remove(),r.add(g);var S=!c&&t.get("step");d&&h.type===i.type&&S===this._step?(m&&!p?p=this._newPolygon(u,_,i,v):p&&!m&&(g.remove(p),p=this._polygon=null),g.setClipPath(Rs(i,!1,!1,t)),x&&f.updateData(o,{isIgnore:w,clipShape:Rs(i,!1,!0,t)}),o.eachItemGraphicEl(function(t){t.stopAnimation(!0)}),Ds(this._stackedOnPoints,_)&&Ds(this._points,u)||(v?this._updateAnimation(o,_,i,n,S,y):(S&&(u=Bs(u,i,S),_=Bs(_,i,S)),d.setShape({points:u}),p&&p.setShape({points:u,stackedOnPoints:_})))):(x&&f.updateData(o,{isIgnore:w,clipShape:Rs(i,!1,!0,t)}),S&&(u=Bs(u,i,S),_=Bs(_,i,S)),d=this._newPolyline(u,i,v),m&&(p=this._newPolygon(u,_,i,v)),g.setClipPath(Rs(i,!0,!1,t)));var M=zs(o,i)||o.getVisual("color");d.useStyle(l(a.getLineStyle(),{fill:"none",stroke:M,lineJoin:"bevel"}));var k=t.get("smooth");if(k=Os(t.get("smooth")),d.setShape({smooth:k,smoothMonotone:t.get("smoothMonotone"),connectNulls:t.get("connectNulls")}),p){var C=o.getCalculationInfo("stackedOnSeries"),I=0;p.useStyle(l(s.getAreaStyle(),{fill:M,opacity:.7,lineJoin:"bevel"})),C&&(I=Os(C.get("smooth"))),p.setShape({smooth:k,stackedOnSmooth:I,smoothMonotone:t.get("smoothMonotone"),connectNulls:t.get("connectNulls")})}this._data=o,this._coordSys=i,this._stackedOnPoints=_,this._points=u,this._step=S,this._valueOrigin=y},dispose:function(){},highlight:function(t,e,n,i){var r=t.getData(),o=vn(r,i);if(!(o instanceof Array)&&null!=o&&o>=0){var a=r.getItemGraphicEl(o);if(!a){var s=r.getItemLayout(o);if(!s)return;(a=new ps(r,o)).position=s,a.setZ(t.get("zlevel"),t.get("z")),a.ignore=isNaN(s[0])||isNaN(s[1]),a.__temp=!0,r.setItemGraphicEl(o,a),a.stopSymbolAnimation(!0),this.group.add(a)}a.highlight()}else Ro.prototype.highlight.call(this,t,e,n,i)},downplay:function(t,e,n,i){var r=t.getData(),o=vn(r,i);if(null!=o&&o>=0){var a=r.getItemGraphicEl(o);a&&(a.__temp?(r.setItemGraphicEl(o,null),this.group.remove(a)):a.downplay())}else Ro.prototype.downplay.call(this,t,e,n,i)},_newPolyline:function(t){var e=this._polyline;return e&&this._lineGroup.remove(e),e=new Tg({shape:{points:t},silent:!0,z2:10}),this._lineGroup.add(e),this._polyline=e,e},_newPolygon:function(t,e){var n=this._polygon;return n&&this._lineGroup.remove(n),n=new Dg({shape:{points:t,stackedOnPoints:e},silent:!0}),this._lineGroup.add(n),this._polygon=n,n},_updateAnimation:function(t,e,n,i,r,o){var a=this._polyline,s=this._polygon,l=t.hostModel,u=wg(this._data,t,this._stackedOnPoints,e,this._coordSys,n,this._valueOrigin,o),c=u.current,h=u.stackedOnCurrent,f=u.next,d=u.stackedOnNext;r&&(c=Bs(u.current,n,r),h=Bs(u.stackedOnCurrent,n,r),f=Bs(u.next,n,r),d=Bs(u.stackedOnNext,n,r)),a.shape.__points=u.current,a.shape.points=c,qi(a,{shape:{points:f}},l),s&&(s.setShape({points:c,stackedOnPoints:h}),qi(s,{shape:{points:f,stackedOnPoints:d}},l));for(var p=[],g=u.status,v=0;v<g.length;v++)if("="===g[v].cmd){var m=t.getItemGraphicEl(g[v].idx1);m&&p.push({el:m,ptIdx:v})}a.animators&&a.animators.length&&a.animators[0].during(function(){for(var t=0;t<p.length;t++)p[t].el.attr("position",a.shape.__points[p[t].ptIdx])})},remove:function(t){var e=this.group,n=this._data;this._lineGroup.removeAll(),this._symbolDraw.remove(!0),n&&n.eachItemGraphicEl(function(t,i){t.__temp&&(e.remove(t),n.setItemGraphicEl(i,null))}),this._polyline=this._polygon=this._coordSys=this._points=this._stackedOnPoints=this._data=null}});var Og={average:function(t){for(var e=0,n=0,i=0;i<t.length;i++)isNaN(t[i])||(e+=t[i],n++);return 0===n?NaN:e/n},sum:function(t){for(var e=0,n=0;n<t.length;n++)e+=t[n]||0;return e},max:function(t){for(var e=-1/0,n=0;n<t.length;n++)t[n]>e&&(e=t[n]);return isFinite(e)?e:NaN},min:function(t){for(var e=1/0,n=0;n<t.length;n++)t[n]<e&&(e=t[n]);return isFinite(e)?e:NaN},nearest:function(t){return t[0]}},Pg=function(t,e){return Math.round(t.length/2)};Vs.prototype.parse=function(t){return t},Vs.prototype.getSetting=function(t){return this._setting[t]},Vs.prototype.contain=function(t){var e=this._extent;return t>=e[0]&&t<=e[1]},Vs.prototype.normalize=function(t){var e=this._extent;return e[1]===e[0]?.5:(t-e[0])/(e[1]-e[0])},Vs.prototype.scale=function(t){var e=this._extent;return t*(e[1]-e[0])+e[0]},Vs.prototype.unionExtent=function(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1])},Vs.prototype.unionExtentFromData=function(t,e){this.unionExtent(t.getApproximateExtent(e))},Vs.prototype.getExtent=function(){return this._extent.slice()},Vs.prototype.setExtent=function(t,e){var n=this._extent;isNaN(t)||(n[0]=t),isNaN(e)||(n[1]=e)},Vs.prototype.isBlank=function(){return this._isBlank},Vs.prototype.setBlank=function(t){this._isBlank=t},Vs.prototype.getLabel=null,Mn(Vs),An(Vs,{registerWhenExtend:!0}),js.createByAxisModel=function(t){var e=t.option,n=e.data,i=n&&g(n,Ws);return new js({categories:i,needCollect:!i,deduplication:!1!==e.dedplication})};var Lg=js.prototype;Lg.getOrdinal=function(t){return Hs(this).get(t)},Lg.parseAndCollect=function(t){var e,n=this._needCollect;if("string"!=typeof t&&!n)return t;if(n&&!this._deduplication)return e=this.categories.length,this.categories[e]=t,e;var i=Hs(this);return null==(e=i.get(t))&&(n?(e=this.categories.length,this.categories[e]=t,i.set(t,e)):e=NaN),e};var Eg=Vs.prototype,Ng=Vs.extend({type:"ordinal",init:function(t,e){t&&!x(t)||(t=new js({categories:t})),this._ordinalMeta=t,this._extent=e||[0,t.categories.length-1]},parse:function(t){return"string"==typeof t?this._ordinalMeta.getOrdinal(t):Math.round(t)},contain:function(t){return t=this.parse(t),Eg.contain.call(this,t)&&null!=this._ordinalMeta.categories[t]},normalize:function(t){return Eg.normalize.call(this,this.parse(t))},scale:function(t){return Math.round(Eg.scale.call(this,t))},getTicks:function(){for(var t=[],e=this._extent,n=e[0];n<=e[1];)t.push(n),n++;return t},getLabel:function(t){if(!this.isBlank())return this._ordinalMeta.categories[t]},count:function(){return this._extent[1]-this._extent[0]+1},unionExtentFromData:function(t,e){this.unionExtent(t.getApproximateExtent(e))},getOrdinalMeta:function(){return this._ordinalMeta},niceTicks:$,niceExtent:$});Ng.create=function(){return new Ng};var Rg=rr,Bg=rr,zg=Vs.extend({type:"interval",_interval:0,_intervalPrecision:2,setExtent:function(t,e){var n=this._extent;isNaN(t)||(n[0]=parseFloat(t)),isNaN(e)||(n[1]=parseFloat(e))},unionExtent:function(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1]),zg.prototype.setExtent.call(this,e[0],e[1])},getInterval:function(){return this._interval},setInterval:function(t){this._interval=t,this._niceExtent=this._extent.slice(),this._intervalPrecision=Us(t)},getTicks:function(){return Ys(this._interval,this._extent,this._niceExtent,this._intervalPrecision)},getLabel:function(t,e){if(null==t)return"";var n=e&&e.precision;return null==n?n=or(t)||0:"auto"===n&&(n=this._intervalPrecision),t=Bg(t,n,!0),pr(t)},niceTicks:function(t,e,n){t=t||5;var i=this._extent,r=i[1]-i[0];if(isFinite(r)){r<0&&(r=-r,i.reverse());var o=Gs(i,t,e,n);this._intervalPrecision=o.intervalPrecision,this._interval=o.interval,this._niceExtent=o.niceTickExtent}},niceExtent:function(t){var e=this._extent;if(e[0]===e[1])if(0!==e[0]){var n=e[0];t.fixMax?e[0]-=n/2:(e[1]+=n/2,e[0]-=n/2)}else e[1]=1;var i=e[1]-e[0];isFinite(i)||(e[0]=0,e[1]=1),this.niceTicks(t.splitNumber,t.minInterval,t.maxInterval);var r=this._interval;t.fixMin||(e[0]=Bg(Math.floor(e[0]/r)*r)),t.fixMax||(e[1]=Bg(Math.ceil(e[1]/r)*r))}});zg.create=function(){return new zg};var $g="__ec_stack_",Fg="undefined"!=typeof Float32Array?Float32Array:Array,Vg={seriesType:"bar",plan:Jd(),reset:function(t){if(nl(t)&&il(t)){var e=t.getData(),n=t.coordinateSystem,i=n.getBaseAxis(),r=n.getOtherAxis(i),o=e.mapDimension(r.dim),a=e.mapDimension(i.dim),s=r.isHorizontal(),l=s?0:1,u=el(Qs([t]),i,t).width;return u>.5||(u=.5),{progress:function(t,e){for(var c,h=new Fg(2*t.count),f=[],d=[],p=0;null!=(c=t.next());)d[l]=e.get(o,c),d[1-l]=e.get(a,c),f=n.dataToPoint(d,null,f),h[p++]=f[0],h[p++]=f[1];e.setLayout({largePoints:h,barWidth:u,valueAxisStart:rl(i,r,!1),valueAxisHorizontal:s})}}}}},jg=zg.prototype,Hg=Math.ceil,Wg=Math.floor,Gg=function(t,e,n,i){for(;n<i;){var r=n+i>>>1;t[r][1]<e?n=r+1:i=r}return n},Ug=zg.extend({type:"time",getLabel:function(t){var e=this._stepLvl,n=new Date(t);return _r(e[0],n,this.getSetting("useUTC"))},niceExtent:function(t){var e=this._extent;if(e[0]===e[1]&&(e[0]-=864e5,e[1]+=864e5),e[1]===-1/0&&e[0]===1/0){var n=new Date;e[1]=+new Date(n.getFullYear(),n.getMonth(),n.getDate()),e[0]=e[1]-864e5}this.niceTicks(t.splitNumber,t.minInterval,t.maxInterval);var i=this._interval;t.fixMin||(e[0]=rr(Wg(e[0]/i)*i)),t.fixMax||(e[1]=rr(Hg(e[1]/i)*i))},niceTicks:function(t,e,n){t=t||10;var i=this._extent,r=i[1]-i[0],o=r/t;null!=e&&o<e&&(o=e),null!=n&&o>n&&(o=n);var a=qg.length,s=Gg(qg,o,0,a),l=qg[Math.min(s,a-1)],u=l[1];"year"===l[0]&&(u*=dr(r/u/t,!0));var c=this.getSetting("useUTC")?0:60*new Date(+i[0]||+i[1]).getTimezoneOffset()*1e3,h=[Math.round(Hg((i[0]-c)/u)*u+c),Math.round(Wg((i[1]-c)/u)*u+c)];Xs(h,i),this._stepLvl=l,this._interval=u,this._niceExtent=h},parse:function(t){return+cr(t)}});p(["contain","normalize"],function(t){Ug.prototype[t]=function(e){return jg[t].call(this,this.parse(e))}});var qg=[["hh:mm:ss",1e3],["hh:mm:ss",5e3],["hh:mm:ss",1e4],["hh:mm:ss",15e3],["hh:mm:ss",3e4],["hh:mm\nMM-dd",6e4],["hh:mm\nMM-dd",3e5],["hh:mm\nMM-dd",6e5],["hh:mm\nMM-dd",9e5],["hh:mm\nMM-dd",18e5],["hh:mm\nMM-dd",36e5],["hh:mm\nMM-dd",72e5],["hh:mm\nMM-dd",216e5],["hh:mm\nMM-dd",432e5],["MM-dd\nyyyy",864e5],["MM-dd\nyyyy",1728e5],["MM-dd\nyyyy",2592e5],["MM-dd\nyyyy",3456e5],["MM-dd\nyyyy",432e6],["MM-dd\nyyyy",5184e5],["week",6048e5],["MM-dd\nyyyy",864e6],["week",12096e5],["week",18144e5],["month",26784e5],["week",36288e5],["month",53568e5],["week",36288e5],["quarter",8208e6],["month",107136e5],["month",13392e6],["half-year",16416e6],["month",214272e5],["month",26784e6],["year",32832e6]];Ug.create=function(t){return new Ug({useUTC:t.ecModel.get("useUTC")})};var Xg=Vs.prototype,Yg=zg.prototype,Zg=or,Kg=rr,Jg=Math.floor,Qg=Math.ceil,tv=Math.pow,ev=Math.log,nv=Vs.extend({type:"log",base:10,$constructor:function(){Vs.apply(this,arguments),this._originalScale=new zg},getTicks:function(){var t=this._originalScale,e=this._extent,n=t.getExtent();return g(Yg.getTicks.call(this),function(i){var r=rr(tv(this.base,i));return r=i===e[0]&&t.__fixMin?ol(r,n[0]):r,i===e[1]&&t.__fixMax?ol(r,n[1]):r},this)},getLabel:Yg.getLabel,scale:function(t){return t=Xg.scale.call(this,t),tv(this.base,t)},setExtent:function(t,e){var n=this.base;t=ev(t)/ev(n),e=ev(e)/ev(n),Yg.setExtent.call(this,t,e)},getExtent:function(){var t=this.base,e=Xg.getExtent.call(this);e[0]=tv(t,e[0]),e[1]=tv(t,e[1]);var n=this._originalScale,i=n.getExtent();return n.__fixMin&&(e[0]=ol(e[0],i[0])),n.__fixMax&&(e[1]=ol(e[1],i[1])),e},unionExtent:function(t){this._originalScale.unionExtent(t);var e=this.base;t[0]=ev(t[0])/ev(e),t[1]=ev(t[1])/ev(e),Xg.unionExtent.call(this,t)},unionExtentFromData:function(t,e){this.unionExtent(t.getApproximateExtent(e))},niceTicks:function(t){t=t||10;var e=this._extent,n=e[1]-e[0];if(!(n===1/0||n<=0)){var i=hr(n);for(t/n*i<=.5&&(i*=10);!isNaN(i)&&Math.abs(i)<1&&Math.abs(i)>0;)i*=10;var r=[rr(Qg(e[0]/i)*i),rr(Jg(e[1]/i)*i)];this._interval=i,this._niceExtent=r}},niceExtent:function(t){Yg.niceExtent.call(this,t);var e=this._originalScale;e.__fixMin=t.fixMin,e.__fixMax=t.fixMax}});p(["contain","normalize"],function(t){nv.prototype[t]=function(e){return e=ev(e)/ev(this.base),Xg[t].call(this,e)}}),nv.create=function(){return new nv};var iv=function(t){this._axes={},this._dimList=[],this.name=t||""};iv.prototype={constructor:iv,type:"cartesian",getAxis:function(t){return this._axes[t]},getAxes:function(){return g(this._dimList,gl,this)},getAxesByScale:function(t){return t=t.toLowerCase(),m(this.getAxes(),function(e){return e.scale.type===t})},addAxis:function(t){var e=t.dim;this._axes[e]=t,this._dimList.push(e)},dataToCoord:function(t){return this._dataCoordConvert(t,"dataToCoord")},coordToData:function(t){return this._dataCoordConvert(t,"coordToData")},_dataCoordConvert:function(t,e){for(var n=this._dimList,i=t instanceof Array?[]:{},r=0;r<n.length;r++){var o=n[r],a=this._axes[o];i[o]=a[e](t[o])}return i}},vl.prototype={constructor:vl,type:"cartesian2d",dimensions:["x","y"],getBaseAxis:function(){return this.getAxesByScale("ordinal")[0]||this.getAxesByScale("time")[0]||this.getAxis("x")},containPoint:function(t){var e=this.getAxis("x"),n=this.getAxis("y");return e.contain(e.toLocalCoord(t[0]))&&n.contain(n.toLocalCoord(t[1]))},containData:function(t){return this.getAxis("x").containData(t[0])&&this.getAxis("y").containData(t[1])},dataToPoint:function(t,e,n){var i=this.getAxis("x"),r=this.getAxis("y");return n=n||[],n[0]=i.toGlobalCoord(i.dataToCoord(t[0])),n[1]=r.toGlobalCoord(r.dataToCoord(t[1])),n},clampData:function(t,e){var n=this.getAxis("x").scale,i=this.getAxis("y").scale,r=n.getExtent(),o=i.getExtent(),a=n.parse(t[0]),s=i.parse(t[1]);return e=e||[],e[0]=Math.min(Math.max(Math.min(r[0],r[1]),a),Math.max(r[0],r[1])),e[1]=Math.min(Math.max(Math.min(o[0],o[1]),s),Math.max(o[0],o[1])),e},pointToData:function(t,e){var n=this.getAxis("x"),i=this.getAxis("y");return e=e||[],e[0]=n.coordToData(n.toLocalCoord(t[0])),e[1]=i.coordToData(i.toLocalCoord(t[1])),e},getOtherAxis:function(t){return this.getAxis("x"===t.dim?"y":"x")}},h(vl,iv);var rv=mn(),ov=[0,1],av=function(t,e,n){this.dim=t,this.scale=e,this._extent=n||[0,0],this.inverse=!1,this.onBand=!1};av.prototype={constructor:av,contain:function(t){var e=this._extent,n=Math.min(e[0],e[1]),i=Math.max(e[0],e[1]);return t>=n&&t<=i},containData:function(t){return this.contain(this.dataToCoord(t))},getExtent:function(){return this._extent.slice()},getPixelPrecision:function(t){return ar(t||this.scale.getExtent(),this._extent)},setExtent:function(t,e){var n=this._extent;n[0]=t,n[1]=e},dataToCoord:function(t,e){var n=this._extent,i=this.scale;return t=i.normalize(t),this.onBand&&"ordinal"===i.type&&Pl(n=n.slice(),i.count()),nr(t,ov,n,e)},coordToData:function(t,e){var n=this._extent,i=this.scale;this.onBand&&"ordinal"===i.type&&Pl(n=n.slice(),i.count());var r=nr(t,n,ov,e);return this.scale.scale(r)},pointToData:function(t,e){},getTicksCoords:function(t){var e=(t=t||{}).tickModel||this.getTickModel(),n=yl(this,e),i=g(n.ticks,function(t){return{coord:this.dataToCoord(t),tickValue:t}},this),r=e.get("alignWithLabel");return Ll(this,i,n.tickCategoryInterval,r,t.clamp),i},getViewLabels:function(){return ml(this).labels},getLabelModel:function(){return this.model.getModel("axisLabel")},getTickModel:function(){return this.model.getModel("axisTick")},getBandWidth:function(){var t=this._extent,e=this.scale.getExtent(),n=e[1]-e[0]+(this.onBand?1:0);0===n&&(n=1);var i=Math.abs(t[1]-t[0]);return Math.abs(i)/n},isHorizontal:null,getRotate:null,calculateCategoryInterval:function(){return Il(this)}};var sv=function(t,e,n,i,r){av.call(this,t,e,n),this.type=i||"value",this.position=r||"bottom"};sv.prototype={constructor:sv,index:0,getAxesOnZeroOf:null,model:null,isHorizontal:function(){var t=this.position;return"top"===t||"bottom"===t},getGlobalExtent:function(t){var e=this.getExtent();return e[0]=this.toGlobalCoord(e[0]),e[1]=this.toGlobalCoord(e[1]),t&&e[0]>e[1]&&e.reverse(),e},getOtherAxis:function(){this.grid.getOtherAxis()},pointToData:function(t,e){return this.coordToData(this.toLocalCoord(t["x"===this.dim?0:1]),e)},toLocalCoord:null,toGlobalCoord:null},h(sv,av);var lv={show:!0,zlevel:0,z:0,inverse:!1,name:"",nameLocation:"end",nameRotate:null,nameTruncate:{maxWidth:null,ellipsis:"...",placeholder:"."},nameTextStyle:{},nameGap:15,silent:!1,triggerEvent:!1,tooltip:{show:!1},axisPointer:{},axisLine:{show:!0,onZero:!0,onZeroAxisIndex:null,lineStyle:{color:"#333",width:1,type:"solid"},symbol:["none","none"],symbolSize:[10,15]},axisTick:{show:!0,inside:!1,length:5,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,showMinLabel:null,showMaxLabel:null,margin:8,fontSize:12},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},uv={};uv.categoryAxis=o({boundaryGap:!0,deduplication:null,splitLine:{show:!1},axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"}},lv),uv.valueAxis=o({boundaryGap:[0,0],splitNumber:5},lv),uv.timeAxis=l({scale:!0,min:"dataMin",max:"dataMax"},uv.valueAxis),uv.logAxis=l({scale:!0,logBase:10},uv.valueAxis);var cv=["value","category","time","log"],hv=function(t,e,n,i){p(cv,function(r){e.extend({type:t+"Axis."+r,mergeDefaultAndTheme:function(e,i){var a=this.layoutMode,s=a?Sr(e):{};o(e,i.getTheme().get(r+"Axis")),o(e,this.getDefaultOption()),e.type=n(t,e),a&&br(e,s,a)},optionUpdated:function(){"category"===this.option.type&&(this.__ordinalMeta=js.createByAxisModel(this))},getCategories:function(t){var e=this.option;if("category"===e.type)return t?e.data:this.__ordinalMeta.categories},getOrdinalMeta:function(){return this.__ordinalMeta},defaultOption:a([{},uv[r+"Axis"],i],!0)})}),ud.registerSubTypeDefaulter(t+"Axis",_(n,t))},fv={getMin:function(t){var e=this.option,n=t||null==e.rangeStart?e.min:e.rangeStart;return this.axis&&null!=n&&"dataMin"!==n&&"function"!=typeof n&&!I(n)&&(n=this.axis.scale.parse(n)),n},getMax:function(t){var e=this.option,n=t||null==e.rangeEnd?e.max:e.rangeEnd;return this.axis&&null!=n&&"dataMax"!==n&&"function"!=typeof n&&!I(n)&&(n=this.axis.scale.parse(n)),n},getNeedCrossZero:function(){var t=this.option;return null==t.rangeStart&&null==t.rangeEnd&&!t.scale},getCoordSysModel:$,setRange:function(t,e){this.option.rangeStart=t,this.option.rangeEnd=e},resetRange:function(){this.option.rangeStart=this.option.rangeEnd=null}},dv=ud.extend({type:"cartesian2dAxis",axis:null,init:function(){dv.superApply(this,"init",arguments),this.resetRange()},mergeOption:function(){dv.superApply(this,"mergeOption",arguments),this.resetRange()},restoreData:function(){dv.superApply(this,"restoreData",arguments),this.resetRange()},getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"grid",index:this.option.gridIndex,id:this.option.gridId})[0]}});o(dv.prototype,fv);var pv={offset:0};hv("x",dv,El,pv),hv("y",dv,El,pv),ud.extend({type:"grid",dependencies:["xAxis","yAxis"],layoutMode:"box",coordinateSystem:null,defaultOption:{show:!1,zlevel:0,z:0,left:"10%",top:60,right:"10%",bottom:60,containLabel:!1,backgroundColor:"rgba(0,0,0,0)",borderWidth:1,borderColor:"#ccc"}});var gv=Rl.prototype;gv.type="grid",gv.axisPointerEnabled=!0,gv.getRect=function(){return this._rect},gv.update=function(t,e){var n=this._axesMap;this._updateScale(t,this.model),p(n.x,function(t){ll(t.scale,t.model)}),p(n.y,function(t){ll(t.scale,t.model)}),p(n.x,function(t){Bl(n,"y",t)}),p(n.y,function(t){Bl(n,"x",t)}),this.resize(this.model,e)},gv.resize=function(t,e,n){function i(){p(o,function(t){var e=t.isHorizontal(),n=e?[0,r.width]:[0,r.height],i=t.inverse?1:0;t.setExtent(n[i],n[1-i]),$l(t,e?r.x:r.y)})}var r=wr(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()});this._rect=r;var o=this._axesList;i(),!n&&t.get("containLabel")&&(p(o,function(t){if(!t.model.get("axisLabel.inside")){var e=dl(t);if(e){var n=t.isHorizontal()?"height":"width",i=t.model.get("axisLabel.margin");r[n]-=e[n]+i,"top"===t.position?r.y+=e.height+i:"left"===t.position&&(r.x+=e.width+i)}}}),i())},gv.getAxis=function(t,e){var n=this._axesMap[t];if(null!=n){if(null==e)for(var i in n)if(n.hasOwnProperty(i))return n[i];return n[e]}},gv.getAxes=function(){return this._axesList.slice()},gv.getCartesian=function(t,e){if(null!=t&&null!=e){var n="x"+t+"y"+e;return this._coordsMap[n]}S(t)&&(e=t.yAxisIndex,t=t.xAxisIndex);for(var i=0,r=this._coordsList;i<r.length;i++)if(r[i].getAxis("x").index===t||r[i].getAxis("y").index===e)return r[i]},gv.getCartesians=function(){return this._coordsList.slice()},gv.convertToPixel=function(t,e,n){var i=this._findConvertTarget(t,e);return i.cartesian?i.cartesian.dataToPoint(n):i.axis?i.axis.toGlobalCoord(i.axis.dataToCoord(n)):null},gv.convertFromPixel=function(t,e,n){var i=this._findConvertTarget(t,e);return i.cartesian?i.cartesian.pointToData(n):i.axis?i.axis.coordToData(i.axis.toLocalCoord(n)):null},gv._findConvertTarget=function(t,e){var n,i,r=e.seriesModel,o=e.xAxisModel||r&&r.getReferringComponents("xAxis")[0],a=e.yAxisModel||r&&r.getReferringComponents("yAxis")[0],s=e.gridModel,l=this._coordsList;return r?c(l,n=r.coordinateSystem)<0&&(n=null):o&&a?n=this.getCartesian(o.componentIndex,a.componentIndex):o?i=this.getAxis("x",o.componentIndex):a?i=this.getAxis("y",a.componentIndex):s&&s.coordinateSystem===this&&(n=this._coordsList[0]),{cartesian:n,axis:i}},gv.containPoint=function(t){var e=this._coordsList[0];if(e)return e.containPoint(t)},gv._initCartesian=function(t,e,n){function i(n){return function(i,s){if(Nl(i,t,e)){var l=i.get("position");"x"===n?"top"!==l&&"bottom"!==l&&r[l="bottom"]&&(l="top"===l?"bottom":"top"):"left"!==l&&"right"!==l&&r[l="left"]&&(l="left"===l?"right":"left"),r[l]=!0;var u=new sv(n,ul(i),[0,0],i.get("type"),l),c="category"===u.type;u.onBand=c&&i.get("boundaryGap"),u.inverse=i.get("inverse"),i.axis=u,u.model=i,u.grid=this,u.index=s,this._axesList.push(u),o[n][s]=u,a[n]++}}}var r={left:!1,right:!1,top:!1,bottom:!1},o={x:{},y:{}},a={x:0,y:0};if(e.eachComponent("xAxis",i("x"),this),e.eachComponent("yAxis",i("y"),this),!a.x||!a.y)return this._axesMap={},void(this._axesList=[]);this._axesMap=o,p(o.x,function(e,n){p(o.y,function(i,r){var o="x"+n+"y"+r,a=new vl(o);a.grid=this,a.model=t,this._coordsMap[o]=a,this._coordsList.push(a),a.addAxis(e),a.addAxis(i)},this)},this)},gv._updateScale=function(t,e){function n(t,e,n){p(t.mapDimension(e.dim,!0),function(n){e.scale.unionExtentFromData(t,ss(t,n))})}p(this._axesList,function(t){t.scale.setExtent(1/0,-1/0)}),t.eachSeries(function(i){if(Vl(i)){var r=Fl(i),o=r[0],a=r[1];if(!Nl(o,e,t)||!Nl(a,e,t))return;var s=this.getCartesian(o.componentIndex,a.componentIndex),l=i.getData(),u=s.getAxis("x"),c=s.getAxis("y");"list"===l.type&&(n(l,u),n(l,c))}},this)},gv.getTooltipAxes=function(t){var e=[],n=[];return p(this.getCartesians(),function(i){var r=null!=t&&"auto"!==t?i.getAxis(t):i.getBaseAxis(),o=i.getOtherAxis(r);c(e,r)<0&&e.push(r),c(n,o)<0&&n.push(o)}),{baseAxes:e,otherAxes:n}};var vv=["xAxis","yAxis"];Rl.create=function(t,e){var n=[];return t.eachComponent("grid",function(i,r){var o=new Rl(i,t,e);o.name="grid_"+r,o.resize(i,e,!0),i.coordinateSystem=o,n.push(o)}),t.eachSeries(function(t){if(Vl(t)){var e=Fl(t),n=e[0],i=e[1],r=n.getCoordSysModel().coordinateSystem;t.coordinateSystem=r.getCartesian(n.componentIndex,i.componentIndex)}}),n},Rl.dimensions=Rl.prototype.dimensions=vl.prototype.dimensions,Yr.register("cartesian2d",Rl);var mv=Math.PI,yv=function(t,e){this.opt=e,this.axisModel=t,l(e,{labelOffset:0,nameDirection:1,tickDirection:1,labelDirection:1,silent:!0}),this.group=new pc;var n=new pc({position:e.position.slice(),rotation:e.rotation});n.updateTransform(),this._transform=n.transform,this._dumbGroup=n};yv.prototype={constructor:yv,hasBuilder:function(t){return!!_v[t]},add:function(t){_v[t].call(this)},getGroup:function(){return this.group}};var _v={axisLine:function(){var t=this.opt,e=this.axisModel;if(e.get("axisLine.show")){var n=this.axisModel.axis.getExtent(),i=this._transform,r=[n[0],0],o=[n[1],0];i&&(Y(r,r,i),Y(o,o,i));var a=s({lineCap:"round"},e.getModel("axisLine.lineStyle").getLineStyle());this.group.add(new Tf(bi({anid:"line",shape:{x1:r[0],y1:r[1],x2:o[0],y2:o[1]},style:a,strokeContainThreshold:t.strokeContainThreshold||5,silent:!0,z2:1})));var l=e.get("axisLine.symbol"),u=e.get("axisLine.symbolSize"),c=e.get("axisLine.symbolOffset")||0;if("number"==typeof c&&(c=[c,c]),null!=l){"string"==typeof l&&(l=[l,l]),"string"!=typeof u&&"number"!=typeof u||(u=[u,u]);var h=u[0],f=u[1];p([{rotate:t.rotation+Math.PI/2,offset:c[0],r:0},{rotate:t.rotation-Math.PI/2,offset:c[1],r:Math.sqrt((r[0]-o[0])*(r[0]-o[0])+(r[1]-o[1])*(r[1]-o[1]))}],function(e,n){if("none"!==l[n]&&null!=l[n]){var i=fs(l[n],-h/2,-f/2,h,f,a.stroke,!0),o=e.r+e.offset,s=[r[0]+o*Math.cos(t.rotation),r[1]-o*Math.sin(t.rotation)];i.attr({rotation:e.rotate,position:s,silent:!0}),this.group.add(i)}},this)}}},axisTickLabel:function(){var t=this.axisModel,e=this.opt,n=Yl(this,t,e);Gl(t,Zl(this,t,e),n)},axisName:function(){var t=this.opt,e=this.axisModel,n=A(t.axisName,e.get("name"));if(n){var i,r,o=e.get("nameLocation"),a=t.nameDirection,l=e.getModel("nameTextStyle"),u=e.get("nameGap")||0,c=this.axisModel.axis.getExtent(),h=c[0]>c[1]?-1:1,f=["start"===o?c[0]-h*u:"end"===o?c[1]+h*u:(c[0]+c[1])/2,Xl(o)?t.labelOffset+a*u:0],d=e.get("nameRotate");null!=d&&(d=d*mv/180),Xl(o)?i=xv(t.rotation,null!=d?d:t.rotation,a):(i=Hl(t,o,d||0,c),null!=(r=t.axisNameAvailableWidth)&&(r=Math.abs(r/Math.sin(i.rotation)),!isFinite(r)&&(r=null)));var p=l.getFont(),g=e.get("nameTruncate",!0)||{},v=g.ellipsis,m=A(t.nameTruncateMaxWidth,g.maxWidth,r),y=null!=v&&null!=m?id(n,m,p,v,{minChar:2,placeholder:g.placeholder}):n,_=e.get("tooltip",!0),x=e.mainType,w={componentType:x,name:n,$vars:["name"]};w[x+"Index"]=e.componentIndex;var b=new yf({anid:"name",__fullText:n,__truncatedText:y,position:f,rotation:i.rotation,silent:Wl(e),z2:1,tooltip:_&&_.show?s({content:n,formatter:function(){return n},formatterParams:w},_):null});zi(b.style,l,{text:y,textFont:p,textFill:l.getTextColor()||e.get("axisLine.lineStyle.color"),textAlign:i.textAlign,textVerticalAlign:i.textVerticalAlign}),e.get("triggerEvent")&&(b.eventData=jl(e),b.eventData.targetType="axisName",b.eventData.name=n),this._dumbGroup.add(b),b.updateTransform(),this.group.add(b),b.decomposeTransform()}}},xv=yv.innerTextLayout=function(t,e,n){var i,r,o=lr(e-t);return ur(o)?(r=n>0?"top":"bottom",i="center"):ur(o-mv)?(r=n>0?"bottom":"top",i="center"):(r="middle",i=o>0&&o<mv?n>0?"right":"left":n>0?"left":"right"),{rotation:o,textAlign:i,textVerticalAlign:r}},wv=Na({type:"axis",_axisPointer:null,axisPointerClass:null,render:function(t,e,n,i){this.axisPointerClass&&Kl(t),wv.superApply(this,"render",arguments),nu(this,t,0,n,0,!0)},updateAxisPointer:function(t,e,n,i,r){nu(this,t,0,n,0,!1)},remove:function(t,e){var n=this._axisPointer;n&&n.remove(e),wv.superApply(this,"remove",arguments)},dispose:function(t,e){iu(this,e),wv.superApply(this,"dispose",arguments)}}),bv=[];wv.registerAxisPointerClass=function(t,e){bv[t]=e},wv.getAxisPointerClass=function(t){return t&&bv[t]};var Sv=["axisLine","axisTickLabel","axisName"],Mv=["splitArea","splitLine"],kv=wv.extend({type:"cartesianAxis",axisPointerClass:"CartesianAxisPointer",render:function(t,e,n,i){this.group.removeAll();var r=this._axisGroup;if(this._axisGroup=new pc,this.group.add(this._axisGroup),t.get("show")){var o=t.getCoordSysModel(),a=ru(o,t),s=new yv(t,a);p(Sv,s.add,s),this._axisGroup.add(s.getGroup()),p(Mv,function(e){t.get(e+".show")&&this["_"+e](t,o)},this),Zi(r,this._axisGroup,t),kv.superCall(this,"render",t,e,n,i)}},remove:function(){this._splitAreaColors=null},_splitLine:function(t,e){var n=t.axis;if(!n.scale.isBlank()){var i=t.getModel("splitLine"),r=i.getModel("lineStyle"),o=r.get("color");o=x(o)?o:[o];for(var a=e.coordinateSystem.getRect(),s=n.isHorizontal(),u=0,c=n.getTicksCoords({tickModel:i}),h=[],f=[],d=r.getLineStyle(),p=0;p<c.length;p++){var g=n.toGlobalCoord(c[p].coord);s?(h[0]=g,h[1]=a.y,f[0]=g,f[1]=a.y+a.height):(h[0]=a.x,h[1]=g,f[0]=a.x+a.width,f[1]=g);var v=u++%o.length,m=c[p].tickValue;this._axisGroup.add(new Tf(bi({anid:null!=m?"line_"+c[p].tickValue:null,shape:{x1:h[0],y1:h[1],x2:f[0],y2:f[1]},style:l({stroke:o[v]},d),silent:!0})))}}},_splitArea:function(t,e){var n=t.axis;if(!n.scale.isBlank()){var i=t.getModel("splitArea"),r=i.getModel("areaStyle"),o=r.get("color"),a=e.coordinateSystem.getRect(),s=n.getTicksCoords({tickModel:i,clamp:!0});if(s.length){var u=o.length,c=this._splitAreaColors,h=z(),f=0;if(c)for(v=0;v<s.length;v++){var d=c.get(s[v].tickValue);if(null!=d){f=(d+(u-1)*v)%u;break}}var p=n.toGlobalCoord(s[0].coord),g=r.getAreaStyle();o=x(o)?o:[o];for(var v=1;v<s.length;v++){var m,y,_,w,b=n.toGlobalCoord(s[v].coord);n.isHorizontal()?(m=p,y=a.y,_=b-m,w=a.height,p=m+_):(m=a.x,y=p,_=a.width,p=y+(w=b-y));var S=s[v-1].tickValue;null!=S&&h.set(S,f),this._axisGroup.add(new Af({anid:null!=S?"area_"+S:null,shape:{x:m,y:y,width:_,height:w},style:l({fill:o[f]},g),silent:!0})),f=(f+1)%u}this._splitAreaColors=h}}}});kv.extend({type:"xAxis"}),kv.extend({type:"yAxis"}),Na({type:"grid",render:function(t,e){this.group.removeAll(),t.get("show")&&this.group.add(new Af({shape:t.coordinateSystem.getRect(),style:l({fill:t.get("backgroundColor")},t.getItemStyle()),silent:!0,z2:-1}))}}),Aa(function(t){t.xAxis&&t.yAxis&&!t.grid&&(t.grid={})}),Pa(function(t,e,n){return{seriesType:t,performRawSeries:!0,reset:function(t,i,r){var o=t.getData(),a=t.get("symbol")||e,s=t.get("symbolSize"),l=t.get("symbolKeepAspect");if(o.setVisual({legendSymbol:n||a,symbol:a,symbolSize:s,symbolKeepAspect:l}),!i.isSeriesFiltered(t)){var u="function"==typeof s;return{dataEach:o.hasItemOption||u?function(e,n){if("function"==typeof s){var i=t.getRawValue(n),r=t.getDataParams(n);e.setItemVisual(n,"symbolSize",s(i,r))}if(e.hasItemOption){var o=e.getItemModel(n),a=o.getShallow("symbol",!0),l=o.getShallow("symbolSize",!0),u=o.getShallow("symbolKeepAspect",!0);null!=a&&e.setItemVisual(n,"symbol",a),null!=l&&e.setItemVisual(n,"symbolSize",l),null!=u&&e.setItemVisual(n,"symbolKeepAspect",u)}}:null}}}}}("line","circle","line")),Oa(function(t){return{seriesType:t,plan:Jd(),reset:function(t){var e=t.getData(),n=t.coordinateSystem,i=t.pipelineContext.large;if(n){var r=g(n.dimensions,function(t){return e.mapDimension(t)}).slice(0,2),o=r.length,a=e.getCalculationInfo("stackResultDimension");return as(e,r[0])&&(r[0]=a),as(e,r[1])&&(r[1]=a),o&&{progress:function(t,e){for(var a=t.end-t.start,s=i&&new Float32Array(a*o),l=t.start,u=0,c=[],h=[];l<t.end;l++){var f;if(1===o)d=e.get(r[0],l),f=!isNaN(d)&&n.dataToPoint(d,null,h);else{var d=c[0]=e.get(r[0],l),p=c[1]=e.get(r[1],l);f=!isNaN(d)&&!isNaN(p)&&n.dataToPoint(c,null,h)}i?(s[u++]=f?f[0]:NaN,s[u++]=f?f[1]:NaN):e.setItemLayout(l,f&&f.slice()||[NaN,NaN])}i&&e.setLayout("symbolPoints",s)}}}}}}("line")),Ta(Cp.PROCESSOR.STATISTIC,function(t){return{seriesType:t,modifyOutputEnd:!0,reset:function(t,e,n){var i=t.getData(),r=t.get("sampling"),o=t.coordinateSystem;if("cartesian2d"===o.type&&r){var a,s=o.getBaseAxis(),l=o.getOtherAxis(s),u=s.getExtent(),c=u[1]-u[0],h=Math.round(i.count()/c);if(h>1)"string"==typeof r?a=Og[r]:"function"==typeof r&&(a=r),a&&t.setData(i.downSample(i.mapDimension(l.dim),1/h,a,Pg))}}}}("line")),Yd.extend({type:"series.__base_bar__",getInitialData:function(t,e){return ls(this.getSource(),this)},getMarkerPosition:function(t){var e=this.coordinateSystem;if(e){var n=e.dataToPoint(e.clampData(t)),i=this.getData(),r=i.getLayout("offset"),o=i.getLayout("size");return n[e.getBaseAxis().isHorizontal()?0:1]+=r+o/2,n}return[NaN,NaN]},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,barMinHeight:0,barMinAngle:0,large:!1,largeThreshold:400,progressive:3e3,progressiveChunkMode:"mod",itemStyle:{},emphasis:{}}}).extend({type:"series.bar",dependencies:["grid","polar"],brushSelector:"rect",getProgressive:function(){return!!this.get("large")&&this.get("progressive")},getProgressiveThreshold:function(){var t=this.get("progressiveThreshold"),e=this.get("largeThreshold");return e>t&&(t=e),t}});var Cv=hh([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["stroke","barBorderColor"],["lineWidth","barBorderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),Iv={getBarItemStyle:function(t){var e=Cv(this,t);if(this.getBorderLineDash){var n=this.getBorderLineDash();n&&(e.lineDash=n)}return e}},Av=["itemStyle","barBorderWidth"];s(Ki.prototype,Iv),Ba({type:"bar",render:function(t,e,n){this._updateDrawMode(t);var i=t.get("coordinateSystem");return"cartesian2d"!==i&&"polar"!==i||(this._isLargeDraw?this._renderLarge(t,e,n):this._renderNormal(t,e,n)),this.group},incrementalPrepareRender:function(t,e,n){this._clear(),this._updateDrawMode(t)},incrementalRender:function(t,e,n,i){this._incrementalRenderLarge(t,e)},_updateDrawMode:function(t){var e=t.pipelineContext.large;(null==this._isLargeDraw||e^this._isLargeDraw)&&(this._isLargeDraw=e,this._clear())},_renderNormal:function(t,e,n){var i,r=this.group,o=t.getData(),a=this._data,s=t.coordinateSystem,l=s.getBaseAxis();"cartesian2d"===s.type?i=l.isHorizontal():"polar"===s.type&&(i="angle"===l.dim);var u=t.isAnimationEnabled()?t:null;o.diff(a).add(function(e){if(o.hasValue(e)){var n=o.getItemModel(e),a=Dv[s.type](o,e,n),l=Tv[s.type](o,e,n,a,i,u);o.setItemGraphicEl(e,l),r.add(l),uu(l,o,e,n,a,t,i,"polar"===s.type)}}).update(function(e,n){var l=a.getItemGraphicEl(n);if(o.hasValue(e)){var c=o.getItemModel(e),h=Dv[s.type](o,e,c);l?qi(l,{shape:h},u,e):l=Tv[s.type](o,e,c,h,i,u,!0),o.setItemGraphicEl(e,l),r.add(l),uu(l,o,e,c,h,t,i,"polar"===s.type)}else r.remove(l)}).remove(function(t){var e=a.getItemGraphicEl(t);"cartesian2d"===s.type?e&&su(t,u,e):e&&lu(t,u,e)}).execute(),this._data=o},_renderLarge:function(t,e,n){this._clear(),hu(t,this.group)},_incrementalRenderLarge:function(t,e){hu(e,this.group,!0)},dispose:$,remove:function(t){this._clear(t)},_clear:function(t){var e=this.group,n=this._data;t&&t.get("animation")&&n&&!this._isLargeDraw?n.eachItemGraphicEl(function(e){"sector"===e.type?lu(e.dataIndex,t,e):su(e.dataIndex,t,e)}):e.removeAll(),this._data=null}});var Tv={cartesian2d:function(t,e,n,i,r,o,a){var l=new Af({shape:s({},i)});if(o){var u=l.shape,c=r?"height":"width",h={};u[c]=0,h[c]=i[c],jf[a?"updateProps":"initProps"](l,{shape:h},o,e)}return l},polar:function(t,e,n,i,r,o,a){var s=i.startAngle<i.endAngle,u=new bf({shape:l({clockwise:s},i)});if(o){var c=u.shape,h=r?"r":"endAngle",f={};c[h]=r?0:i.startAngle,f[h]=i[h],jf[a?"updateProps":"initProps"](u,{shape:f},o,e)}return u}},Dv={cartesian2d:function(t,e,n){var i=t.getItemLayout(e),r=cu(n,i),o=i.width>0?1:-1,a=i.height>0?1:-1;return{x:i.x+o*r/2,y:i.y+a*r/2,width:i.width-o*r,height:i.height-a*r}},polar:function(t,e,n){var i=t.getItemLayout(e);return{cx:i.cx,cy:i.cy,r0:i.r0,r:i.r,startAngle:i.startAngle,endAngle:i.endAngle}}},Ov=si.extend({type:"largeBar",shape:{points:[]},buildPath:function(t,e){for(var n=e.points,i=this.__startPoint,r=this.__valueIdx,o=0;o<n.length;o+=2)i[this.__valueIdx]=n[o+r],t.moveTo(i[0],i[1]),t.lineTo(n[o],n[o+1])}});Oa(_(function(t,e){var n=Js(t,e),i=Qs(n),r={};p(n,function(t){var e=t.getData(),n=t.coordinateSystem,o=n.getBaseAxis(),a=Zs(t),s=i[Ks(o)][a],l=s.offset,u=s.width,c=n.getOtherAxis(o),h=t.get("barMinHeight")||0;r[a]=r[a]||[],e.setLayout({offset:l,size:u});for(var f=e.mapDimension(c.dim),d=e.mapDimension(o.dim),p=as(e,f),g=c.isHorizontal(),v=rl(o,c,p),m=0,y=e.count();m<y;m++){var _=e.get(f,m),x=e.get(d,m);if(!isNaN(_)){var w,b,S,M,k=_>=0?"p":"n",C=v;if(p&&(r[a][x]||(r[a][x]={p:v,n:v}),C=r[a][x][k]),g)w=C,b=(I=n.dataToPoint([_,x]))[1]+l,S=I[0]-v,M=u,Math.abs(S)<h&&(S=(S<0?-1:1)*h),p&&(r[a][x][k]+=S);else{var I=n.dataToPoint([x,_]);w=I[0]+l,b=C,S=u,M=I[1]-v,Math.abs(M)<h&&(M=(M<=0?-1:1)*h),p&&(r[a][x][k]+=M)}e.setItemLayout(m,{x:w,y:b,width:S,height:M})}}},this)},"bar")),Oa(Vg),Pa({seriesType:"bar",reset:function(t){t.getData().setVisual("legendSymbol","roundRect")}});var Pv=function(t,e,n){e=x(e)&&{coordDimensions:e}||s({},e);var i=t.getSource(),r=ag(i,e),o=new ig(r,t);return o.initData(i,n),o},Lv={updateSelectedMap:function(t){this._targetList=x(t)?t.slice():[],this._selectTargetMap=v(t||[],function(t,e){return t.set(e.name,e),t},z())},select:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);"single"===this.get("selectedMode")&&this._selectTargetMap.each(function(t){t.selected=!1}),n&&(n.selected=!0)},unSelect:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);n&&(n.selected=!1)},toggleSelected:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);if(null!=n)return this[n.selected?"unSelect":"select"](t,e),n.selected},isSelected:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);return n&&n.selected}},Ev=Ra({type:"series.pie",init:function(t){Ev.superApply(this,"init",arguments),this.legendDataProvider=function(){return this.getRawData()},this.updateSelectedMap(this._createSelectableList()),this._defaultLabelLine(t)},mergeOption:function(t){Ev.superCall(this,"mergeOption",t),this.updateSelectedMap(this._createSelectableList())},getInitialData:function(t,e){return Pv(this,["value"])},_createSelectableList:function(){for(var t=this.getRawData(),e=t.mapDimension("value"),n=[],i=0,r=t.count();i<r;i++)n.push({name:t.getName(i),value:t.get(e,i),selected:So(t,i,"selected")});return n},getDataParams:function(t){var e=this.getData(),n=Ev.superCall(this,"getDataParams",t),i=[];return e.each(e.mapDimension("value"),function(t){i.push(t)}),n.percent=sr(i,t,e.hostModel.get("percentPrecision")),n.$vars.push("percent"),n},_defaultLabelLine:function(t){un(t,"labelLine",["show"]);var e=t.labelLine,n=t.emphasis.labelLine;e.show=e.show&&t.label.show,n.show=n.show&&t.emphasis.label.show},defaultOption:{zlevel:0,z:2,legendHoverLink:!0,hoverAnimation:!0,center:["50%","50%"],radius:[0,"75%"],clockwise:!0,startAngle:90,minAngle:0,selectedOffset:10,hoverOffset:10,avoidLabelOverlap:!0,percentPrecision:2,stillShowZeroSum:!0,label:{rotate:!1,show:!0,position:"outer"},labelLine:{show:!0,length:15,length2:15,smooth:!1,lineStyle:{width:1,type:"solid"}},itemStyle:{borderWidth:1},animationType:"expansion",animationEasing:"cubicOut"}});f(Ev,Lv);var Nv=gu.prototype;Nv.updateData=function(t,e,n){function i(){o.stopAnimation(!0),o.animateTo({shape:{r:c.r+a.get("hoverOffset")}},300,"elasticOut")}function r(){o.stopAnimation(!0),o.animateTo({shape:{r:c.r}},300,"elasticOut")}var o=this.childAt(0),a=t.hostModel,u=t.getItemModel(e),c=t.getItemLayout(e),h=s({},c);h.label=null,n?(o.setShape(h),"scale"===a.getShallow("animationType")?(o.shape.r=c.r0,Xi(o,{shape:{r:c.r}},a,e)):(o.shape.endAngle=c.startAngle,qi(o,{shape:{endAngle:c.endAngle}},a,e))):qi(o,{shape:h},a,e);var f=t.getItemVisual(e,"color");o.useStyle(l({lineJoin:"bevel",fill:f},u.getModel("itemStyle").getItemStyle())),o.hoverStyle=u.getModel("emphasis.itemStyle").getItemStyle();var d=u.getShallow("cursor");d&&o.attr("cursor",d),pu(this,t.getItemLayout(e),a.isSelected(null,e),a.get("selectedOffset"),a.get("animation")),o.off("mouseover").off("mouseout").off("emphasis").off("normal"),u.get("hoverAnimation")&&a.isAnimationEnabled()&&o.on("mouseover",i).on("mouseout",r).on("emphasis",i).on("normal",r),this._updateLabel(t,e),Ri(this)},Nv._updateLabel=function(t,e){var n=this.childAt(1),i=this.childAt(2),r=t.hostModel,o=t.getItemModel(e),a=t.getItemLayout(e).label,s=t.getItemVisual(e,"color");qi(n,{shape:{points:a.linePoints||[[a.x,a.y],[a.x,a.y],[a.x,a.y]]}},r,e),qi(i,{style:{x:a.x,y:a.y}},r,e),i.attr({rotation:a.rotation,origin:[a.x,a.y],z2:10});var l=o.getModel("label"),u=o.getModel("emphasis.label"),c=o.getModel("labelLine"),h=o.getModel("emphasis.labelLine");s=t.getItemVisual(e,"color");Bi(i.style,i.hoverStyle={},l,u,{labelFetcher:t.hostModel,labelDataIndex:e,defaultText:t.getName(e),autoColor:s,useInsideStyle:!!a.inside},{textAlign:a.textAlign,textVerticalAlign:a.verticalAlign,opacity:t.getItemVisual(e,"opacity")}),i.ignore=i.normalIgnore=!l.get("show"),i.hoverIgnore=!u.get("show"),n.ignore=n.normalIgnore=!c.get("show"),n.hoverIgnore=!h.get("show"),n.setStyle({stroke:s,opacity:t.getItemVisual(e,"opacity")}),n.setStyle(c.getModel("lineStyle").getLineStyle()),n.hoverStyle=h.getModel("lineStyle").getLineStyle();var f=c.get("smooth");f&&!0===f&&(f=.4),n.setShape({smooth:f})},h(gu,pc),Ro.extend({type:"pie",init:function(){var t=new pc;this._sectorGroup=t},render:function(t,e,n,i){if(!i||i.from!==this.uid){var r=t.getData(),o=this._data,a=this.group,s=e.get("animation"),l=!o,u=t.get("animationType"),c=_(du,this.uid,t,s,n),h=t.get("selectedMode");if(r.diff(o).add(function(t){var e=new gu(r,t);l&&"scale"!==u&&e.eachChild(function(t){t.stopAnimation(!0)}),h&&e.on("click",c),r.setItemGraphicEl(t,e),a.add(e)}).update(function(t,e){var n=o.getItemGraphicEl(e);n.updateData(r,t),n.off("click"),h&&n.on("click",c),a.add(n),r.setItemGraphicEl(t,n)}).remove(function(t){var e=o.getItemGraphicEl(t);a.remove(e)}).execute(),s&&l&&r.count()>0&&"scale"!==u){var f=r.getItemLayout(0),d=Math.max(n.getWidth(),n.getHeight())/2,p=y(a.removeClipPath,a);a.setClipPath(this._createClipPath(f.cx,f.cy,d,f.startAngle,f.clockwise,p,t))}this._data=r}},dispose:function(){},_createClipPath:function(t,e,n,i,r,o,a){var s=new bf({shape:{cx:t,cy:e,r0:0,r:n,startAngle:i,endAngle:i,clockwise:r}});return Xi(s,{shape:{endAngle:i+(r?1:-1)*Math.PI*2}},a,o),s},containPoint:function(t,e){var n=e.getData().getItemLayout(0);if(n){var i=t[0]-n.cx,r=t[1]-n.cy,o=Math.sqrt(i*i+r*r);return o<=n.r&&o>=n.r0}}});var Rv=function(t,e,n,i){var r,o,a=t.getData(),s=[],l=!1;a.each(function(n){var i,u,c,h,f=a.getItemLayout(n),d=a.getItemModel(n),p=d.getModel("label"),g=p.get("position")||d.get("emphasis.label.position"),v=d.getModel("labelLine"),m=v.get("length"),y=v.get("length2"),_=(f.startAngle+f.endAngle)/2,x=Math.cos(_),w=Math.sin(_);r=f.cx,o=f.cy;var b="inside"===g||"inner"===g;if("center"===g)i=f.cx,u=f.cy,h="center";else{var S=(b?(f.r+f.r0)/2*x:f.r*x)+r,M=(b?(f.r+f.r0)/2*w:f.r*w)+o;if(i=S+3*x,u=M+3*w,!b){var k=S+x*(m+e-f.r),C=M+w*(m+e-f.r),I=k+(x<0?-1:1)*y,A=C;i=I+(x<0?-5:5),u=A,c=[[S,M],[k,C],[I,A]]}h=b?"center":x>0?"left":"right"}var T=p.getFont(),D=p.get("rotate")?x<0?-_+Math.PI:-_:0,O=ie(t.getFormattedLabel(n,"normal")||a.getName(n),T,h,"top");l=!!D,f.label={x:i,y:u,position:g,height:O.height,len:m,len2:y,linePoints:c,textAlign:h,verticalAlign:"middle",rotation:D,inside:b},b||s.push(f.label)}),!l&&t.get("avoidLabelOverlap")&&mu(s,r,o,e,n,i)},Bv=2*Math.PI,zv=Math.PI/180;!function(t,e){p(e,function(e){e.update="updateView",Da(e,function(n,i){var r={};return i.eachComponent({mainType:"series",subType:t,query:n},function(t){t[e.method]&&t[e.method](n.name,n.dataIndex);var i=t.getData();i.each(function(e){var n=i.getName(e);r[n]=t.isSelected(n)||!1})}),{name:n.name,selected:r}})})}("pie",[{type:"pieToggleSelect",event:"pieselectchanged",method:"toggleSelected"},{type:"pieSelect",event:"pieselected",method:"select"},{type:"pieUnSelect",event:"pieunselected",method:"unSelect"}]),Pa(function(t){return{getTargetSeries:function(e){var n={},i=z();return e.eachSeriesByType(t,function(t){t.__paletteScope=n,i.set(t.uid,t)}),i},reset:function(t,e){var n=t.getRawData(),i={},r=t.getData();r.each(function(t){var e=r.getRawIndex(t);i[e]=t}),n.each(function(e){var o=i[e],a=null!=o&&r.getItemVisual(o,"color",!0);if(a)n.setItemVisual(e,"color",a);else{var s=n.getItemModel(e).get("itemStyle.color")||t.getColorFromPalette(n.getName(e)||e+"",t.__paletteScope,n.count());n.setItemVisual(e,"color",s),null!=o&&r.setItemVisual(o,"color",s)}})}}}("pie")),Oa(_(function(t,e,n,i){e.eachSeriesByType(t,function(t){var e=t.getData(),i=e.mapDimension("value"),r=t.get("center"),o=t.get("radius");x(o)||(o=[0,o]),x(r)||(r=[r,r]);var a=n.getWidth(),s=n.getHeight(),l=Math.min(a,s),u=ir(r[0],a),c=ir(r[1],s),h=ir(o[0],l/2),f=ir(o[1],l/2),d=-t.get("startAngle")*zv,p=t.get("minAngle")*zv,g=0;e.each(i,function(t){!isNaN(t)&&g++});var v=e.getSum(i),m=Math.PI/(v||g)*2,y=t.get("clockwise"),_=t.get("roseType"),w=t.get("stillShowZeroSum"),b=e.getDataExtent(i);b[0]=0;var S=Bv,M=0,k=d,C=y?1:-1;if(e.each(i,function(t,n){var i;if(isNaN(t))e.setItemLayout(n,{angle:NaN,startAngle:NaN,endAngle:NaN,clockwise:y,cx:u,cy:c,r0:h,r:_?NaN:f});else{(i="area"!==_?0===v&&w?m:t*m:Bv/g)<p?(i=p,S-=p):M+=t;var r=k+C*i;e.setItemLayout(n,{angle:i,startAngle:k,endAngle:r,clockwise:y,cx:u,cy:c,r0:h,r:_?nr(t,b,[h,f]):f}),k=r}}),S<Bv&&g)if(S<=.001){var I=Bv/g;e.each(i,function(t,n){if(!isNaN(t)){var i=e.getItemLayout(n);i.angle=I,i.startAngle=d+C*n*I,i.endAngle=d+C*(n+1)*I}})}else m=S/M,k=d,e.each(i,function(t,n){if(!isNaN(t)){var i=e.getItemLayout(n),r=i.angle===p?p:t*m;i.startAngle=k,i.endAngle=k+C*r,k+=C*r}});Rv(t,f,a,s)})},"pie")),Ta(function(t){return{seriesType:t,reset:function(t,e){var n=e.findComponents({mainType:"legend"});if(n&&n.length){var i=t.getData();i.filterSelf(function(t){for(var e=i.getName(t),r=0;r<n.length;r++)if(!n[r].isSelected(e))return!1;return!0})}}}}("pie")),t.version="4.1.0",t.dependencies=bp,t.PRIORITY=Cp,t.init=function(t,e,n){var i=Ca(t);if(i)return i;var r=new oa(t,e,n);return r.id="ec_"+Hp++,Vp[r.id]=r,xn(t,Gp,r.id),Ma(r),r},t.connect=function(t){if(x(t)){var e=t;t=null,yp(e,function(e){null!=e.group&&(t=e.group)}),t=t||"g_"+Wp++,yp(e,function(e){e.group=t})}return jp[t]=!0,t},t.disConnect=ka,t.disconnect=qp,t.dispose=function(t){"string"==typeof t?t=Vp[t]:t instanceof oa||(t=Ca(t)),t instanceof oa&&!t.isDisposed()&&t.dispose()},t.getInstanceByDom=Ca,t.getInstanceById=function(t){return Vp[t]},t.registerTheme=Ia,t.registerPreprocessor=Aa,t.registerProcessor=Ta,t.registerPostUpdate=function(t){Bp.push(t)},t.registerAction=Da,t.registerCoordinateSystem=function(t,e){Yr.register(t,e)},t.getCoordinateSystemDimensions=function(t){var e=Yr.get(t);if(e)return e.getDimensionsInfo?e.getDimensionsInfo():e.dimensions.slice()},t.registerLayout=Oa,t.registerVisual=Pa,t.registerLoading=Ea,t.extendComponentModel=function(t){return ud.extend(t)},t.extendComponentView=Na,t.extendSeriesModel=Ra,t.extendChartView=Ba,t.setCanvasCreator=function(t){i("createCanvas",t)},t.registerMap=function(t,e,n){e.geoJson&&!e.features&&(n=e.specialAreas,e=e.geoJson),"string"==typeof e&&(e="undefined"!=typeof JSON&&JSON.parse?JSON.parse(e):new Function("return ("+e+");")()),Up[t]={geoJson:e,specialAreas:n}},t.getMap=function(t){return Up[t]},t.dataTool=Xp})},"894e":function(t,e,n){},9335:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("a34a")),r=o(n("4f2f"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,i,r,o,a){try{var s=t[o](a),l=s.value}catch(u){return void n(u)}s.done?e(l):Promise.resolve(l).then(i,r)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(i,r){var o=t.apply(e,n);function s(t){a(o,i,r,s,l,"next",t)}function l(t){a(o,i,r,s,l,"throw",t)}s(void 0)})}}var l={cnSmogSensorList:function(){var t=s(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.post("/cnsmogsensor/cnSmogSensorList",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),cnSmogSensorNumber:function(){var t=s(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.post("/cnsmogsensor/cnSmogSensorNumber",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),findCNSmogSensor:function(){var t=s(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.post("/cnsmogsensor/findCNSmogSensor",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),findCrosssectionSelect:function(){var t=s(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.get("/cnsmogsensor/findCrosssectionSelect",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),findProjectSelect:function(){var t=s(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.get("/cnsmogsensor/findProjectSelect",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),findStrucunitSelect:function(){var t=s(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.get("/cnsmogsensor/findStrucunitSelect",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()};e.default=l},"96cf":function(t,e){!function(e){"use strict";var n,i=Object.prototype,r=i.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag",u="object"===typeof t,c=e.regeneratorRuntime;if(c)u&&(t.exports=c);else{c=e.regeneratorRuntime=u?t.exports:{},c.wrap=x;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",g={},v={};v[a]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(P([])));y&&y!==i&&r.call(y,a)&&(v=y);var _=M.prototype=b.prototype=Object.create(v);S.prototype=_.constructor=M,M.constructor=S,M[l]=S.displayName="GeneratorFunction",c.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===S||"GeneratorFunction"===(e.displayName||e.name))},c.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,M):(t.__proto__=M,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(_),t},c.awrap=function(t){return{__await:t}},k(C.prototype),C.prototype[s]=function(){return this},c.AsyncIterator=C,c.async=function(t,e,n,i){var r=new C(x(t,e,n,i));return c.isGeneratorFunction(e)?r:r.next().then(function(t){return t.done?t.value:r.next()})},k(_),_[l]="Generator",_[a]=function(){return this},_.toString=function(){return"[object Generator]"},c.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},c.values=P,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(D),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(i,r){return s.type="throw",s.arg=t,e.next=i,r&&(e.method="next",e.arg=n),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),D(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;D(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:P(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=n),g}}}function x(t,e,n,i){var r=e&&e.prototype instanceof b?e:b,o=Object.create(r.prototype),a=new O(i||[]);return o._invoke=I(t,n,a),o}function w(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(i){return{type:"throw",arg:i}}}function b(){}function S(){}function M(){}function k(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function C(t){function e(n,i,o,a){var s=w(t[n],t,i);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"===typeof u&&r.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(u).then(function(t){l.value=t,o(l)},function(t){return e("throw",t,o,a)})}a(s.arg)}var n;function i(t,i){function r(){return new Promise(function(n,r){e(t,i,n,r)})}return n=n?n.then(r,r):r()}this._invoke=i}function I(t,e,n){var i=h;return function(r,o){if(i===d)throw new Error("Generator is already running");if(i===p){if("throw"===r)throw o;return L()}n.method=r,n.arg=o;while(1){var a=n.delegate;if(a){var s=A(a,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===h)throw i=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=d;var l=w(t,e,n);if("normal"===l.type){if(i=n.done?p:f,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(i=p,n.method="throw",n.arg=l.arg)}}}function A(t,e){var i=t.iterator[e.method];if(i===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,A(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var r=w(i,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,g;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,g):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function D(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function P(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function e(){while(++i<t.length)if(r.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a34a:function(t,e,n){t.exports=n("bbdd")},bbdd:function(t,e,n){var i=function(){return this||"object"===typeof self&&self}()||Function("return this")(),r=i.regeneratorRuntime&&Object.getOwnPropertyNames(i).indexOf("regeneratorRuntime")>=0,o=r&&i.regeneratorRuntime;if(i.regeneratorRuntime=void 0,t.exports=n("96cf"),r)i.regeneratorRuntime=o;else try{delete i.regeneratorRuntime}catch(a){i.regeneratorRuntime=void 0}},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"===typeof window&&(n=window)}t.exports=n},ca4a:function(t,e,n){"use strict";(function(t){n("894e");i(n("66fd"));var e=i(n("fe55"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},d049:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("7476")),r=a(n("4e26")),o=a(n("9335"));function a(t){return t&&t.__esModule?t:{default:t}}var s={login:i.default,myuser:r.default,cnsmogsensor:o.default};e.default=s},e077:function(t,e,n){"use strict";(function(t){n("894e");i(n("66fd"));var e=i(n("8f22"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},fc52:function(t,e,n){"use strict";(function(t){n("894e");i(n("66fd"));var e=i(n("79af"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}}]);
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
  "147e": function e(t, _e, n) {
    "use strict";

    var a = n("921b"),
        r = n.n(a);
    r.a;
  },
  "60f0": function f0(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("6e59"),
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
  "6e59": function e59(t, e, n) {
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
  },
  "921b": function b(t, e, n) {}
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
  "2ca9": function ca9(t, e, n) {
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
  "34fc": function fc(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("2ca9"),
        a = n.n(u);

    for (var f in u) {
      "default" !== f && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(f);
    }

    e["default"] = a.a;
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

    for (var f in a) {
      "default" !== f && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(f);
    }

    n("fedf");
    var r = n("2877"),
        i = Object(r["a"])(a["default"], u["a"], u["b"], !1, null, null, null);
    e["default"] = i.exports;
  },
  ef37: function ef37(t, e, n) {},
  fedf: function fedf(t, e, n) {
    "use strict";

    var u = n("ef37"),
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
  "08f3": function f3(n, t, e) {
    "use strict";

    e.r(t);
    var i = e("808d"),
        o = e.n(i);

    for (var l in i) {
      "default" !== l && function (n) {
        e.d(t, n, function () {
          return i[n];
        });
      }(l);
    }

    t["default"] = o.a;
  },
  1140: function _(n, t, e) {
    "use strict";

    var i = function i() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        o = [];

    e.d(t, "a", function () {
      return i;
    }), e.d(t, "b", function () {
      return o;
    });
  },
  "289d": function d(n, t, e) {
    "use strict";

    var i = e("c289"),
        o = e.n(i);
    o.a;
  },
  "438a": function a(n, t, e) {
    "use strict";

    e.r(t);
    var i = e("1140"),
        o = e("08f3");

    for (var l in o) {
      "default" !== l && function (n) {
        e.d(t, n, function () {
          return o[n];
        });
      }(l);
    }

    e("289d");
    var s = e("2877"),
        a = Object(s["a"])(o["default"], i["a"], i["b"], !1, null, null, null);
    t["default"] = a.exports;
  },
  "808d": function d(n, t, e) {
    "use strict";

    (function (n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;

      var i = function i() {
        return e.e("components/uni-icon/uni-icon").then(e.bind(null, "7e5b"));
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
          var n = this.__callback_hook ? "uni_collapse_item" : "Uni_".concat(Math.ceil(1e6 * Math.random()).toString(36));
          return {
            isOpen: !1,
            height: "auto",
            elId: n
          };
        },
        watch: {
          open: function open(n) {
            this.isOpen = n;
          }
        },
        inject: ["collapse"],
        created: function created() {
          if (this.isOpen = this.open, this.nameSync = this.name ? this.name : this.collapse.childrens.length, this.collapse.childrens.push(this), this.collapse.accordion && this.isOpen) {
            var n = this.collapse.childrens[this.collapse.childrens.length - 2];
            n && (this.collapse.childrens[this.collapse.childrens.length - 2].isOpen = !1);
          }
        },
        onReady: function onReady() {
          this.getSize();
        },
        methods: {
          getSize: function getSize() {
            var t = this;
            this.showAnimation && n.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec(function (n) {
              t.height = n[0].height + "px";
            });
          },
          onClick: function onClick() {
            var n = this;
            this.disabled || (this.collapse.accordion && this.collapse.childrens.forEach(function (t) {
              t !== n && (t.isOpen = !1);
            }), this.isOpen = !this.isOpen, this.collapse.onChange && this.collapse.onChange());
          }
        }
      };

      t.default = o;
    }).call(this, e("6e42")["default"]);
  },
  c289: function c289(n, t, e) {}
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
  "32b1": function b1(n, t, e) {},
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

    var a = e("32b1"),
        u = e.n(a);
    u.a;
  },
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
  c17e: function c17e(n, t, e) {
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
  ca93: function ca93(n, t, e) {
    "use strict";

    e.r(t);
    var a = e("c17e"),
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

    var u = e("4d22"),
        i = e.n(u);
    i.a;
  },
  "4d22": function d22(n, t, e) {},
  "7e5b": function e5b(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("36fb"),
        i = e("8fe6");

    for (var f in i) {
      "default" !== f && function (n) {
        e.d(t, n, function () {
          return i[n];
        });
      }(f);
    }

    e("4bce");
    var r = e("2877"),
        c = Object(r["a"])(i["default"], u["a"], u["b"], !1, null, null, null);
    t["default"] = c.exports;
  },
  "7f9f": function f9f(n, t, e) {
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
  },
  "8fe6": function fe6(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("7f9f"),
        i = e.n(u);

    for (var f in u) {
      "default" !== f && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(f);
    }

    t["default"] = i.a;
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
  3384: function _(t, e, n) {
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
  "49ee": function ee(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("3384"),
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

    var u = n("b2af"),
        o = n.n(u);
    o.a;
  },
  b2af: function b2af(t, e, n) {},
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
  }
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
  "5c6d": function c6d(n, t, u) {
    "use strict";

    var e = u("9c0b"),
        a = u.n(e);
    a.a;
  },
  6061: function _(n, t, u) {
    "use strict";

    u.r(t);
    var e = u("88a6"),
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
  "88a6": function a6(n, t, u) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var e = {
      name: "UniList"
    };
    t.default = e;
  },
  "9c0b": function c0b(n, t, u) {},
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
  "146a": function a(t, e, n) {
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
  8338: function _(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("146a"),
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
  "96cd": function cd(t, e, n) {},
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

    var o = n("96cd"),
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

__wxRoute = 'pages/login/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/index.js';

define('pages/login/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/index"],{"17d3":function(e,n,t){"use strict";var s=t("446e"),o=t.n(s);o.a},"446e":function(e,n,t){},6119:function(e,n,t){"use strict";t.r(n);var s=t("d4b3"),o=t.n(s);for(var a in s)"default"!==a&&function(e){t.d(n,e,function(){return s[e]})}(a);n["default"]=o.a},"618c":function(e,n,t){"use strict";var s=function(){var e=this,n=e.$createElement;e._self._c},o=[];t.d(n,"a",function(){return s}),t.d(n,"b",function(){return o})},d4b3:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{userName:"",password:"",keep:!1}},onReady:function(){var n=this;e.getStorage({key:"userInfo",success:function(e){var t=e.data;n.userName=t.userName,n.password=t.password,n.keep=t.keep,console.log(e," at pages/login/index.vue:43")}})},methods:{changeKeep:function(e){this.keep=e.detail.value.length>0},login:function(){if(console.log(this.keep," at pages/login/index.vue:52"),""!==this.userName)if(""!==this.password){var n=this;this.$service.login.login({password:this.password,userName:this.userName}).then(function(t){0===t.code?n.setUserInfo(t.msg):(n.keep=!1,e.showModal({content:"账号或密码错误",showCancel:!1}))})}else e.showModal({content:"请输入登录密码",showCancel:!1});else e.showModal({content:"请输入登录账号",showCancel:!1})},setUserInfo:function(n){var t=this,s=this;e.setStorageSync("userInfo",{token:n}),this.$service.myuser.findUserByToken({token:n}).then(function(o){t.$service.myuser.findDepartmentByOrgId({orgId:o.msg.user.orgId}).then(function(t){e.setStorageSync("userInfo",{user:o.msg.user,token:n,depInfo:t.msg.department,keep:s.keep,password:s.password,userName:s.userName}),e.switchTab({url:"/pages/index/index"})})})}}};n.default=t}).call(this,t("6e42")["default"])},fe55:function(e,n,t){"use strict";t.r(n);var s=t("618c"),o=t("6119");for(var a in o)"default"!==a&&function(e){t.d(n,e,function(){return o[e]})}(a);t("17d3");var r=t("2877"),u=Object(r["a"])(o["default"],s["a"],s["b"],!1,null,null,null);n["default"]=u.exports}},[["ca4a","common/runtime","common/vendor"]]]);
});
require('pages/login/index.js');
__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{4971:function(n,t,e){"use strict";var a=e("6c68"),u=e.n(a);u.a},"5d5e":function(n,t,e){"use strict";e.r(t);var a=e("daf2"),u=e.n(a);for(var i in a)"default"!==i&&function(n){e.d(t,n,function(){return a[n]})}(i);t["default"]=u.a},"6c68":function(n,t,e){},"6ff6":function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return u})},a42d:function(n,t,e){"use strict";e.r(t);var a=e("6ff6"),u=e("5d5e");for(var i in u)"default"!==i&&function(n){e.d(t,n,function(){return u[n]})}(i);e("4971");var c=e("2877"),o=Object(c["a"])(u["default"],a["a"],a["b"],!1,null,null,null);t["default"]=o.exports},daf2:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={name:"home",data:function(){return{title:"Hello",counts:[{name:"消防报警",count:12},{name:"故障报警",count:12},{name:"压力液位",count:12},{name:"烟感报警",count:12},{name:"用电报警",count:12}],menu1:[{image:"../../static/menu/waring.png",text:"报警信息"},{image:"../../static/menu/crt.png",text:"网络CRT"},{image:"../../static/menu/set.png",text:"维保"},{image:"../../static/menu/qian.png",text:"增值服务"},{image:"../../static/menu/yangan.png",path:"yangan/yangan",text:"烟感"}],menu2:[{image:"../../static/menu/yali.png",text:"压力"},{image:"../../static/menu/yeweitu.png",text:"液位"},{image:"../../static/menu/yongdianliang.png",text:"智慧用电"},{image:"../../static/menu/xiaofang.png",text:"消防设备"},{image:"../../static/menu/all.png",text:"全部"}]}},onLoad:function(){},methods:{openPage:function(t){t.path?n.navigateTo({url:t.path}):n.showModal({content:"模块开发中",showCancel:!1})}}};t.default=e}).call(this,e("6e42")["default"])}},[["44f3","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/user/user';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/user.js';

define('pages/user/user.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{"279d":function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement;e._self._c},o=[];t.d(n,"a",function(){return a}),t.d(n,"b",function(){return o})},"3c73":function(e,n,t){"use strict";t.r(n);var a=t("5e0b"),o=t.n(a);for(var u in a)"default"!==u&&function(e){t.d(n,e,function(){return a[e]})}(u);n["default"]=o.a},"5daa":function(e,n,t){},"5e0b":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=function(){return t.e("components/uni-collapse/uni-collapse").then(t.bind(null,"3d1a"))},o=function(){return t.e("components/uni-collapse-item/uni-collapse-item").then(t.bind(null,"438a"))},u={components:{uniCollapse:a,uniCollapseItem:o},data:function(){return{userInfo:{},depInfo:{},users:[{key:"userName",name:"账号名称"},{key:"fullName",name:"用户名称"},{key:"phone",name:"手机号"},{key:"email",name:"邮箱"}],deps:[{key:"orgName",name:"公司名称"},{key:"phone",name:"公司电话"},{key:"site",name:"公司地址"},{key:"orgDescribe",name:"描述"}]}},methods:{editPassword:function(){e.navigateTo({url:"/pages/user/editPassword/index"})},exit:function(){e.setStorageSync("userInfo",{password:"",userName:"",keep:!1}),e.navigateTo({url:"/pages/login/index"})}},onLoad:function(){var n=e.getStorageSync("userInfo");this.userInfo=n.user,this.depInfo=n.depInfo}};n.default=u}).call(this,t("6e42")["default"])},"8f22":function(e,n,t){"use strict";t.r(n);var a=t("279d"),o=t("3c73");for(var u in o)"default"!==u&&function(e){t.d(n,e,function(){return o[e]})}(u);t("a5ef");var r=t("2877"),i=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,null,null);n["default"]=i.exports},a5ef:function(e,n,t){"use strict";var a=t("5daa"),o=t.n(a);o.a}},[["e077","common/runtime","common/vendor"]]]);
});
require('pages/user/user.js');
__wxRoute = 'pages/qrCode/qrCode';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/qrCode/qrCode.js';

define('pages/qrCode/qrCode.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qrCode/qrCode"],{"19de":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{}},methods:{}};t.default=u},"794c":function(n,t,e){"use strict";e.r(t);var u=e("c5a8"),r=e("b352");for(var a in r)"default"!==a&&function(n){e.d(t,n,function(){return r[n]})}(a);var o=e("2877"),c=Object(o["a"])(r["default"],u["a"],u["b"],!1,null,null,null);t["default"]=c.exports},b352:function(n,t,e){"use strict";e.r(t);var u=e("19de"),r=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=r.a},c5a8:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return r})}},[["2dbc","common/runtime","common/vendor"]]]);
});
require('pages/qrCode/qrCode.js');
__wxRoute = 'pages/index/yangan/yangan';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/yangan/yangan.js';

define('pages/index/yangan/yangan.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/yangan/yangan"],{"6ebd":function(n,e,t){"use strict";var i=function(){var n=this,e=n.$createElement;n._self._c},u=[];t.d(e,"a",function(){return i}),t.d(e,"b",function(){return u})},7428:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){return t.e("components/uni-popup-i/uni-popup").then(t.bind(null,"272a"))},u=function(){return t.e("components/uni-icon/uni-icon").then(t.bind(null,"7e5b"))},o=function(){return t.e("components/uni-list/uni-list").then(t.bind(null,"c50d"))},a=function(){return t.e("components/uni-list-item/uni-list-item").then(t.bind(null,"f0fd"))},c={name:"yangan",components:{uniPopup:i,vUniIcon:u,uniList:o,uniListItem:a},data:function(){return{popup:!1,current:"-1",activeName:"project",list:[{name:"查看详情"},{name:"查看详情"}],items:{project:[{name:"全部项目",value:"1"},{name:"项目2",value:"3"}],struct:[{name:"全部位置",value:"1"},{name:"位置2",value:"2"}],location:[{name:"全部结构",value:"1"}]},checked:{project:{name:"全部项目",value:null},struct:{name:"全部结构",value:null},location:{name:"全部位置",value:null}},all:{project:{name:"全部项目",value:null},struct:{name:"全部结构",value:null},location:{name:"全部位置",value:null}}}},methods:{showPopup:function(n){this.activeName=n,this.popup=!this.popup},hidePopup:function(){this.popup=!1},radioChange:function(n){var e=n.detail.value,t=this.items[this.activeName].filter(function(n){return n.value===e});this.checked[this.activeName]=t[0]},opanDetail:function(e){n.navigateTo({url:"./detail?item="+JSON.stringify(this.checked[this.activeName])})},getProject:function(){var e=this,t=n.getStorageSync("userInfo"),i=t.user.orgId;this.$service.cnsmogsensor.findProjectSelect({orgId:i}).then(function(n){e.initProject(n.msg)})},initProject:function(n){n.forEach(function(n){n.value=n.projectId+"",n.name=n.projectName}),n.unshift(this.all.project),this.items.project=n}},onLoad:function(){this.getProject()}};e.default=c}).call(this,t("6e42")["default"])},8875:function(n,e,t){"use strict";t.r(e);var i=t("6ebd"),u=t("fce3");for(var o in u)"default"!==o&&function(n){t.d(e,n,function(){return u[n]})}(o);t("d4b6");var a=t("2877"),c=Object(a["a"])(u["default"],i["a"],i["b"],!1,null,null,null);e["default"]=c.exports},d4b6:function(n,e,t){"use strict";var i=t("e096"),u=t.n(i);u.a},e096:function(n,e,t){},fce3:function(n,e,t){"use strict";t.r(e);var i=t("7428"),u=t.n(i);for(var o in i)"default"!==o&&function(n){t.d(e,n,function(){return i[n]})}(o);e["default"]=u.a}},[["0f54","common/runtime","common/vendor"]]]);
});
require('pages/index/yangan/yangan.js');
__wxRoute = 'pages/index/yangan/detail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/yangan/detail.js';

define('pages/index/yangan/detail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/yangan/detail"],{"20b5":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},"5d1f":function(t,e,n){},"876f":function(t,e,n){"use strict";n.r(e);var r=n("e4c1"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=a.a},9983:function(t,e,n){"use strict";var r=n("5d1f"),a=n.n(r);a.a},d50e:function(t,e,n){"use strict";n.r(e);var r=n("20b5"),a=n("876f");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("9983");var o=n("2877"),u=Object(o["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=u.exports},e4c1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("80dc"));function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};r.get||r.set?Object.defineProperty(e,n,r):e[n]=t[n]}return e.default=t,e}var i=function(){return Promise.all([n.e("common/vendor"),n.e("components/mpvue-echarts/src/echarts")]).then(n.bind(null,"72e6"))},o={animation:!1,color:["#37A2DA","#9FE6B8"],grid:{x:35,x2:10,y:30,y2:25},calculable:!1,xAxis:[{type:"category",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]}],yAxis:[{type:"value",splitArea:{show:!0}}],series:[{name:"蒸发量",type:"line",data:[2,4.9,7,23.2,25.6,76.7,135.6,162.2,32.6,20,6.4,3.3]},{name:"降水量",type:"line",data:[2.6,5.9,9,26.4,28.7,70.7,175.6,182.2,48.7,18.8,6,2.3]}]},u={data:function(){return{updateStatus:!1,item:{name:""}}},onLoad:function(t){this.item=JSON.parse(t.item)},methods:{lineInit:function(t){var e=t.width,n=t.height,a=this.$refs.lineChart.canvas;r.setCanvasCreator(function(){return a});var i=r.init(a,null,{width:e,height:n});a.setChart(i),i.setOption(o),this.$refs.lineChart.setChart(i)}},components:{mpvueEcharts:i}};e.default=u}},[["3c47","common/runtime","common/vendor"]]]);
});
require('pages/index/yangan/detail.js');
__wxRoute = 'pages/user/editPassword/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/editPassword/index.js';

define('pages/user/editPassword/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/editPassword/index"],{"0d95":function(e,s,n){"use strict";var o=n("12fd"),t=n.n(o);t.a},"12fd":function(e,s,n){},"79af":function(e,s,n){"use strict";n.r(s);var o=n("dbb5"),t=n("9de4");for(var a in t)"default"!==a&&function(e){n.d(s,e,function(){return t[e]})}(a);n("0d95");var r=n("2877"),d=Object(r["a"])(t["default"],o["a"],o["b"],!1,null,null,null);s["default"]=d.exports},"9de4":function(e,s,n){"use strict";n.r(s);var o=n("ade8"),t=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(s,e,function(){return o[e]})}(a);s["default"]=t.a},ade8:function(e,s,n){"use strict";(function(e){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var n={data:function(){return{oldPassword:"",newPassword:"",newPasswordAgain:""}},methods:{enter:function(){if(""!==this.oldPassword)if(""!==this.newPassword)if(""!==this.newPasswordAgain)if(this.newPasswordAgain===this.newPassword){var s=e.getStorageSync("userInfo");s.password===this.oldPassword?this.oldPassword!==this.newPassword?this.$service.myuser.alterPassword({formerPassword:this.oldPassword,password:this.newPassword,userName:s.userName}).then(function(s){e.setStorageSync("userInfo",{password:"",userName:"",keep:!1}),e.navigateTo({url:"/pages/login/index"})}):e.showModal({content:"当前密码和新密码相同",showCancel:!1}):e.showModal({content:"当前密码错误",showCancel:!1})}else e.showModal({content:"两次输入的密码不一致",showCancel:!1});else e.showModal({content:"请再次确认密码",showCancel:!1});else e.showModal({content:"请输入新密码",showCancel:!1});else e.showModal({content:"请输入当前密码",showCancel:!1})}}};s.default=n}).call(this,n("6e42")["default"])},dbb5:function(e,s,n){"use strict";var o=function(){var e=this,s=e.$createElement;e._self._c},t=[];n.d(s,"a",function(){return o}),n.d(s,"b",function(){return t})}},[["fc52","common/runtime","common/vendor"]]]);
});
require('pages/user/editPassword/index.js');
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

