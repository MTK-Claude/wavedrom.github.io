var JsonML;if("undefined"===typeof JsonML){JsonML={}}(function(){function r(e,t,n){if("string"===typeof n){n=new Function("event",n)}if("function"!==typeof n){return}e[t]=n}function i(i,s){if(s.name&&document.attachEvent){try{var o=document.createElement("<"+i.tagName+" name='"+s.name+"'>");if(i.tagName===o.tagName){i=o}}catch(u){}}for(var a in s){if(s.hasOwnProperty(a)){var f=s[a];if(a&&f!==null&&"undefined"!==typeof f){a=e[a.toLowerCase()]||a;if(a==="style"){if("undefined"!==typeof i.style.cssText){i.style.cssText=f}else{i.style=f}}else if(a==="class"){i.className=f;i.setAttribute(a,f)}else if(n[a]){r(i,a,f);if(t[a]){r(i,t[a],f)}}else if("string"===typeof f||"number"===typeof f||"boolean"===typeof f){i.setAttribute(a,f);if(t[a]){i.setAttribute(t[a],f)}}else{i[a]=f;if(t[a]){i[t[a]]=f}}}}}return i}function s(e,t){if(t){if(e.tagName&&e.tagName.toLowerCase()==="table"&&e.tBodies){if(!t.tagName){if(t.nodeType===11){while(t.firstChild){s(e,t.removeChild(t.firstChild))}}return}var n=t.tagName.toLowerCase();if(n&&n!=="tbody"&&n!=="thead"){var r=e.tBodies.length>0?e.tBodies[e.tBodies.length-1]:null;if(!r){r=document.createElement(n==="th"?"thead":"tbody");e.appendChild(r)}r.appendChild(t)}else if(e.canHaveChildren!==false){e.appendChild(t)}}else if(e.tagName&&e.tagName.toLowerCase()==="style"&&document.createStyleSheet){e.cssText=t}else if(e.canHaveChildren!==false){e.appendChild(t)}else if(e.tagName&&e.tagName.toLowerCase()==="object"&&t.tagName&&t.tagName.toLowerCase()==="param"){try{e.appendChild(t)}catch(i){}try{if(e.object){e.object[t.name]=t.value}}catch(o){}}}}function o(e){return e&&e.nodeType===3&&(!e.nodeValue||!/\S/.exec(e.nodeValue))}function u(e){if(e){while(o(e.firstChild)){e.removeChild(e.firstChild)}while(o(e.lastChild)){e.removeChild(e.lastChild)}}}function a(e){var t=document.createElement("div");t.innerHTML=e;u(t);if(t.childNodes.length===1){return t.firstChild}var n=document.createDocumentFragment?document.createDocumentFragment():document.createElement("");while(t.firstChild){n.appendChild(t.firstChild)}return n}function f(e){this.value=e}function l(e,t,n){return document.createTextNode("["+e+"]")}function c(e,t,n){for(var r=1;r<t.length;r++){if(t[r]instanceof Array||"string"===typeof t[r]){s(e,JsonML.parse(t[r],n))}else if(t[r]instanceof f){s(e,a(t[r].value))}else if("object"===typeof t[r]&&t[r]!==null&&e.nodeType===1){e=i(e,t[r])}}return e}var e={rowspan:"rowSpan",colspan:"colSpan",cellpadding:"cellPadding",cellspacing:"cellSpacing",tabindex:"tabIndex",accesskey:"accessKey",hidefocus:"hideFocus",usemap:"useMap",maxlength:"maxLength",readonly:"readOnly",contenteditable:"contentEditable"},t={enctype:"encoding",onscroll:"DOMMouseScroll"},n=function(e){var t={};while(e.length){var n=e.shift();t["on"+n.toLowerCase()]=n}return t}("blur,change,click,dblclick,error,focus,keydown,keypress,keyup,load,mousedown,mouseenter,mouseleave,mousemove,mouseout,mouseover,mouseup,resize,scroll,select,submit,unload".split(","));JsonML.onerror=null;JsonML.parse=function(e,t){try{if(!e){return null}if("string"===typeof e){return document.createTextNode(e)}if(e instanceof f){return a(e.value)}if(!JsonML.isElement(e)){throw new SyntaxError("invalid JsonML")}var n=e[0];if(!n){var r=document.createDocumentFragment?document.createDocumentFragment():document.createElement("");for(var i=1;i<e.length;i++){s(r,JsonML.parse(e[i],t))}u(r);if(r.childNodes.length===1){return r.firstChild}return r}if(n.toLowerCase()==="style"&&document.createStyleSheet){JsonML.patch(document.createStyleSheet(),e,t);return null}svgns="http://www.w3.org/2000/svg";var o;o=c(document.createElementNS(svgns,n),e,t);u(o);return o&&"function"===typeof t?t(o):o}catch(h){try{var p="function"===typeof JsonML.onerror?JsonML.onerror:l;return p(h,e,t)}catch(d){return document.createTextNode("["+d+"]")}}};JsonML.isElement=function(e){return e instanceof Array&&"string"===typeof e[0]}})();var WaveDrom={version:"13.02.08",timer:0,lane:{xs:20,ys:20,xg:120,y0:10,yo:30,tgo:-10,ym:15,xlabel:6,xmax:1,scale:1},canvas:{heigth:85},panela:{ys:200},genBrick:function(e,t,n){"use strict";var r,i,s=[];if(e.length===4){for(i=0;i<n;i+=1){s.push(e[0]);for(r=0;r<t;r+=1){s.push(e[1])}s.push(e[2]);for(r=0;r<t;r+=1){s.push(e[3])}}return s}if(e.length===1){e.push(e[0])}s.push(e[0]);for(r=0;r<n*2*(t+1)-1;r+=1){s.push(e[1])}return s},genFirstWaveBrick:function(e,t,n){"use strict";var r,i=[];switch(e){case"p":i=this.genBrick(["pclk","111","nclk","000"],t,n);break;case"n":i=this.genBrick(["nclk","000","pclk","111"],t,n);break;case"P":i=this.genBrick(["Pclk","111","nclk","000"],t,n);break;case"N":i=this.genBrick(["Nclk","000","pclk","111"],t,n);break;case"0":i=this.genBrick(["000"],t,n);break;case"1":i=this.genBrick(["111"],t,n);break;case"=":i=this.genBrick(["vvv-2"],t,n);break;case"2":i=this.genBrick(["vvv-2"],t,n);break;case"3":i=this.genBrick(["vvv-3"],t,n);break;case"4":i=this.genBrick(["vvv-4"],t,n);break;case"5":i=this.genBrick(["vvv-5"],t,n);break;case"d":i=this.genBrick(["ddd"],t,n);break;case"u":i=this.genBrick(["uuu"],t,n);break;case"z":i=this.genBrick(["zzz"],t,n);break;default:i=this.genBrick(["xxx"],t,n);break}for(r=0;r<this.lane.phase;r+=1){i.shift()}return i},genWaveBrick:function(e,t,n){"use strict";var r,i={pp:["pclk","111","nclk","000"],pn:["nclk","000","pclk","111"],pP:["Pclk","111","nclk","000"],pN:["Nclk","000","pclk","111"],p0:["000","000"],p1:["0m1","111"],px:["0mx","xxx"],pd:["0md","ddd"],pu:["0mu","uuu"],pz:["0mz","zzz"],"p=":["0mv-2","vvv-2"],p2:["0mv-2","vvv-2"],p3:["0mv-3","vvv-3"],p4:["0mv-4","vvv-4"],p5:["0mv-5","vvv-5"],np:["pclk","111","nclk","000"],nn:["nclk","000","pclk","111"],nP:["Pclk","111","nclk","000"],nN:["Nclk","000","pclk","111"],n0:["1m0","000"],n1:["111","111"],nx:["1mx","xxx"],nd:["1md","ddd"],nu:["1mu","uuu"],nz:["1mz","zzz"],"n=":["1mv-2","vvv-2"],n2:["1mv-2","vvv-2"],n3:["1mv-3","vvv-3"],n4:["1mv-4","vvv-4"],n5:["1mv-5","vvv-5"],Pp:["pclk","111","nclk","000"],Pn:["nclk","000","pclk","111"],PP:["Pclk","111","nclk","000"],PN:["Nclk","000","pclk","111"],P0:["000","000"],P1:["0m1","111"],Px:["0mx","xxx"],Pd:["0md","ddd"],Pu:["0mu","uuu"],Pz:["0mz","zzz"],"P=":["0mv-2","vvv-2"],P2:["0mv-2","vvv-2"],P3:["0mv-3","vvv-3"],P4:["0mv-4","vvv-4"],P5:["0mv-5","vvv-5"],Np:["pclk","111","nclk","000"],Nn:["nclk","000","pclk","111"],NP:["Pclk","111","nclk","000"],NN:["Nclk","000","pclk","111"],N0:["1m0","000"],N1:["111","111"],Nx:["1mx","xxx"],Nd:["1md","ddd"],Nu:["1mu","uuu"],Nz:["1mz","zzz"],"N=":["1mv-2","vvv-2"],N2:["1mv-2","vvv-2"],N3:["1mv-3","vvv-3"],N4:["1mv-4","vvv-4"],N5:["1mv-5","vvv-5"],"0p":["pclk","111","nclk","000"],"0n":["nclk","000","pclk","111"],"0P":["Pclk","111","nclk","000"],"0N":["Nclk","000","pclk","111"],"00":["0m0","000"],"01":["0m1","111"],"0x":["0mx","xxx"],"0d":["0md","ddd"],"0u":["0mu","uuu"],"0z":["0mz","zzz"],"0=":["0mv-2","vvv-2"],"02":["0mv-2","vvv-2"],"03":["0mv-3","vvv-3"],"04":["0mv-4","vvv-4"],"05":["0mv-5","vvv-5"],"1p":["pclk","111","nclk","000"],"1n":["nclk","000","pclk","111"],"1P":["Pclk","111","nclk","000"],"1N":["Nclk","000","pclk","111"],10:["1m0","000"],11:["1m1","111"],"1x":["1mx","xxx"],"1d":["1md","ddd"],"1u":["1mu","uuu"],"1z":["1mz","zzz"],"1=":["1mv-2","vvv-2"],12:["1mv-2","vvv-2"],13:["1mv-3","vvv-3"],14:["1mv-4","vvv-4"],15:["1mv-5","vvv-5"],xp:["pclk","111","nclk","000"],xn:["nclk","000","pclk","111"],xP:["Pclk","111","nclk","000"],xN:["Nclk","000","pclk","111"],x0:["xm0","000"],x1:["xm1","111"],xx:["xmx","xxx"],xd:["xmd","ddd"],xu:["xmu","uuu"],xz:["xmz","zzz"],"x=":["xmv-2","vvv-2"],x2:["xmv-2","vvv-2"],x3:["xmv-3","vvv-3"],x4:["xmv-4","vvv-4"],x5:["xmv-5","vvv-5"],".p":["pclk","111","nclk","000"],".n":["nclk","000","pclk","111"],".P":["Pclk","111","nclk","000"],".N":["Nclk","000","pclk","111"],".0":["xm0","000"],".1":["xm1","111"],".x":["xmx","xxx"],".d":["xmd","ddd"],".u":["xmu","uuu"],".z":["xmz","zzz"],".=":["xmv-2","vvv-2"],".2":["xmv-2","vvv-2"],".3":["xmv-3","vvv-3"],".4":["xmv-4","vvv-4"],".5":["xmv-5","vvv-5"],dp:["pclk","111","nclk","000"],dn:["nclk","000","pclk","111"],dP:["Pclk","111","nclk","000"],dN:["Nclk","000","pclk","111"],d0:["dm0","000"],d1:["dm1","111"],dx:["dmx","xxx"],dd:["dmd","ddd"],du:["dmu","uuu"],dz:["dmz","zzz"],"d=":["dmv-2","vvv-2"],d2:["dmv-2","vvv-2"],d3:["dmv-3","vvv-3"],d4:["dmv-4","vvv-4"],d5:["dmv-5","vvv-5"],up:["pclk","111","nclk","000"],un:["nclk","000","pclk","111"],uP:["Pclk","111","nclk","000"],uN:["Nclk","000","pclk","111"],u0:["um0","000"],u1:["um1","111"],ux:["umx","xxx"],ud:["umd","ddd"],uu:["umu","uuu"],uz:["umz","zzz"],"u=":["umv-2","vvv-2"],u2:["umv-2","vvv-2"],u3:["umv-3","vvv-3"],u4:["umv-4","vvv-4"],u5:["umv-5","vvv-5"],zp:["pclk","111","nclk","000"],zn:["nclk","000","pclk","111"],zP:["Pclk","111","nclk","000"],zN:["Nclk","000","pclk","111"],z0:["zm0","000"],z1:["zm1","111"],zx:["zmx","xxx"],zd:["zmd","ddd"],zu:["zmu","uuu"],zz:["zmz","zzz"],"z=":["zmv-2","vvv-2"],z2:["zmv-2","vvv-2"],z3:["zmv-3","vvv-3"],z4:["zmv-4","vvv-4"],z5:["zmv-5","vvv-5"],"=p":["pclk","111","nclk","000"],"=n":["nclk","000","pclk","111"],"=P":["Pclk","111","nclk","000"],"=N":["Nclk","000","pclk","111"],"=0":["vm0-2","000"],"=1":["vm1-2","111"],"=x":["vmx-2","xxx"],"=d":["vmd-2","ddd"],"=u":["vmu-2","uuu"],"=z":["vmz-2","zzz"],"==":["vmv-2-2","vvv-2"],"=2":["vmv-2-2","vvv-2"],"=3":["vmv-2-3","vvv-3"],"=4":["vmv-2-4","vvv-4"],"=5":["vmv-2-5","vvv-5"],"2p":["pclk","111","nclk","000"],"2n":["nclk","000","pclk","111"],"2P":["Pclk","111","nclk","000"],"2N":["Nclk","000","pclk","111"],20:["vm0-2","000"],21:["vm1-2","111"],"2x":["vmx-2","xxx"],"2d":["vmd-2","ddd"],"2u":["vmu-2","uuu"],"2z":["vmz-2","zzz"],"2=":["vmv-2-2","vvv-2"],22:["vmv-2-2","vvv-2"],23:["vmv-2-3","vvv-3"],24:["vmv-2-4","vvv-4"],25:["vmv-2-5","vvv-5"],"3p":["pclk","111","nclk","000"],"3n":["nclk","000","pclk","111"],"3P":["Pclk","111","nclk","000"],"3N":["Nclk","000","pclk","111"],30:["vm0-3","000"],31:["vm1-3","111"],"3x":["vmx-3","xxx"],"3d":["vmd-3","ddd"],"3u":["vmu-3","uuu"],"3z":["vmz-3","zzz"],"3=":["vmv-3-2","vvv-2"],32:["vmv-3-2","vvv-2"],33:["vmv-3-3","vvv-3"],34:["vmv-3-4","vvv-4"],35:["vmv-3-5","vvv-5"],"4p":["pclk","111","nclk","000"],"4n":["nclk","000","pclk","111"],"4P":["Pclk","111","nclk","000"],"4N":["Nclk","000","pclk","111"],40:["vm0-4","000"],41:["vm1-4","111"],"4x":["vmx-4","xxx"],"4d":["vmd-4","ddd"],"4u":["vmu-4","uuu"],"4z":["vmz-4","zzz"],"4=":["vmv-4-2","vvv-2"],42:["vmv-4-2","vvv-2"],43:["vmv-4-3","vvv-3"],44:["vmv-4-4","vvv-4"],45:["vmv-4-5","vvv-5"],"5p":["pclk","111","nclk","000"],"5n":["nclk","000","pclk","111"],"5P":["Pclk","111","nclk","000"],"5N":["Nclk","000","pclk","111"],50:["vm0-5","000"],51:["vm1-5","111"],"5x":["vmx-5","xxx"],"5d":["vmd-5","ddd"],"5u":["vmu-5","uuu"],"5z":["vmz-5","zzz"],"5=":["vmv-5-2","vvv-2"],52:["vmv-5-2","vvv-2"],53:["vmv-5-3","vvv-3"],54:["vmv-5-4","vvv-4"],55:["vmv-5-5","vvv-5"]};for(r in i){if(e===r){return this.genBrick(i[r],t,n)}}return this.genBrick(["xxx"],t,n)},parseWaveLane:function(e,t){"use strict";var n,r,i,s=[],o=[];s=e.split("");i=s.shift();n=1;while(s[0]==="."||s[0]==="|"){s.shift();n+=1}o=o.concat(this.genFirstWaveBrick(i,t,n));while(s.length){r=i;i=s.shift();n=1;while(s[0]==="."||s[0]==="|"){s.shift();n+=1}o=o.concat(this.genWaveBrick(r+i,t,n))}return o}};WaveDrom.ViewSVG=function(e){"use strict";var t,n,r;t=document.getElementById(e);n=new XMLSerializer;r='<?xml version="1.0" standalone="no"?>\n'+'<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n'+"<!-- Created with WaveDrom -->\n"+n.serializeToString(t);window.open("data:image/svg+xml;base64,"+window.btoa(r),"_blank")};WaveDrom.ViewSourceSVG=function(e){"use strict";var t,n,r;t=document.getElementById(e);n=new XMLSerializer;r='<?xml version="1.0" standalone="no"?>\n'+'<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n'+"<!-- Created with WaveDrom -->\n"+n.serializeToString(t);window.open("view-source:data:image/svg+xml;base64,"+window.btoa(r),"_blank")};WaveDrom.parseWaveLanes=function(e){"use strict";var t,n=[],r;for(t in e){this.lane.period=e[t].period?e[t].period:1;this.lane.phase=e[t].phase?e[t].phase*2:0;n.push([]);n[n.length-1][0]=e[t].name?e[t].name:null;n[n.length-1][1]=e[t].wave?this.parseWaveLane(e[t].wave,this.lane.period*this.lane.hscale-1):null;r=e[t].data;n[n.length-1][2]=r?typeof r=="string"?r.split(" "):r:null}return n};WaveDrom.FindLaneMarkers=function(e){"use strict";var t,n=0,r=0,i=[];for(t in e){if(e[t]==="vvv-2"|e[t]==="vvv-3"|e[t]==="vvv-4"|e[t]==="vvv-5"){r+=1}else{if(r!==0){i.push(n-(r+1)/2);r=0}}n+=1}if(r!==0){i.push(n-(r+1)/2)}return i};WaveDrom.RenderWaveLane=function(e,t,n){"use strict";var r,i,s,o,u,a,f,l,c,h=[1],p,d,v=0,m=0,g=[],y="http://www.w3.org/2000/svg",b="http://www.w3.org/1999/xlink",w="http://www.w3.org/XML/1998/namespace";for(i=0;i<t.length;i+=1){if(t[i][0]){o=document.createElementNS(y,"g");o.id="wavelane_"+i+"_"+n;o.setAttribute("transform","translate(0,"+(this.lane.y0+i*this.lane.yo)+")");e.insertBefore(o,e.firstChild);l=document.createTextNode(t[i][0]);a=document.createElementNS(y,"text");a.setAttribute("x",this.lane.tgo);a.setAttribute("y",this.lane.ym);a.setAttribute("fill","#0041c4");a.setAttribute("text-anchor","end");a.setAttributeNS(w,"xml:space","preserve");a.appendChild(l);o.insertBefore(a,o.firstChild);d=this.lane.xs*this.lane.hscale*2;g.push(a.getBBox().width);u=document.createElementNS(y,"g");u.id="wavelane_draw_"+i+"_"+n;o.insertBefore(u,o.firstChild);if(t[i][1]){if(t[i][2]&&t[i][2].length){h=this.FindLaneMarkers(t[i][1]);if(h.length!==0){for(s in h){if(t[i][2]&&t[i][2][s]){c=document.createTextNode(t[i][2][s]);a=document.createElementNS(y,"text");a.setAttribute("x",h[s]*this.lane.xs+this.lane.xlabel);a.setAttribute("y",this.lane.ym);a.setAttribute("text-anchor","middle");a.setAttributeNS(w,"xml:space","preserve");a.appendChild(c);u.insertBefore(a,u.firstChild)}}}}for(r=0;r<t[i][1].length;r+=1){f=document.createElementNS(y,"use");f.id="use_"+r+"_"+i+"_"+n;f.setAttributeNS(b,"xlink:href","#"+t[i][1][r]);f.setAttribute("transform","translate("+r*this.lane.xs+")");u.insertBefore(f,u.firstChild)}if(t[i][1].length>v){v=t[i][1].length}}}}this.lane.xmax=v;this.lane.xg=m+20;return g};WaveDrom.RenderMarks=function(e,t,n){"use strict";var r,i,s,o,u,a,f,l,c,h,p="http://www.w3.org/2000/svg",d="http://www.w3.org/XML/1998/namespace";o=2*this.lane.hscale;u=o*this.lane.xs;s=this.lane.xmax/o+1;h=5;c=t.length*this.lane.yo+this.lane.y0+this.lane.ys;i=document.createElementNS(p,"g");i.id="gmarks_"+n;e.insertBefore(i,e.firstChild);for(r=0;r<s;r+=1){a=document.createElementNS(p,"path");a.id="gmark_"+r+"_"+n;a.setAttribute("d","m "+r*u+",5 0,"+(c-2*h));a.setAttribute("style","stroke:#888888;stroke-width:0.5;stroke-dasharray:2, 2");i.insertBefore(a,i.firstChild)}for(r=1;r<s;r+=1){l=document.createTextNode(r);f=document.createElementNS(p,"text");f.setAttribute("x",r*u-u/2);f.setAttribute("y",c-h);f.setAttribute("text-anchor","middle");f.setAttribute("fill","#AAAAAA");f.setAttributeNS(d,"xml:space","preserve");f.appendChild(l);i.insertBefore(f,i.firstChild)}};WaveDrom.RenderGroups=function(e,t,n){"use strict";var r,i,s,o,u,a,f,l="http://www.w3.org/2000/svg",c="http://www.w3.org/XML/1998/namespace";for(i in t){s=document.createElementNS(l,"path");s.id="group_"+i+"_"+n;s.setAttribute("d","m "+t[i].x+","+(t[i].y*this.lane.yo+8)+" c -3,0 -5,2 -5,5 l 0,"+(t[i].height*this.lane.yo-16)+" c 0,3 2,5 5,5");s.setAttribute("style","stroke:#0041c4;stroke-width:1;fill:none");e.insertBefore(s,e.firstChild);if(typeof t[i].name==="string"){o=document.createTextNode(t[i].name);u=document.createElementNS(l,"text");a=t[i].x-10;f=this.lane.yo*(t[i].y+t[i].height/2)+5;u.setAttribute("x",a);u.setAttribute("y",f);u.setAttribute("text-anchor","middle");u.setAttribute("fill","#0041c4");u.setAttribute("transform","rotate(270,"+a+","+f+")");u.setAttributeNS(c,"xml:space","preserve");u.appendChild(o);e.insertBefore(u,e.firstChild)}}};WaveDrom.RenderGaps=function(e,t,n){"use strict";var r,i,s,o,u,a=[],f,l="http://www.w3.org/2000/svg",c="http://www.w3.org/1999/xlink";if(t){i=document.createElementNS(l,"g");i.id="wavegaps_"+n;e.insertBefore(i,e.firstChild);for(r in t){this.lane.period=t[r].period?t[r].period:1;this.lane.phase=t[r].phase?t[r].phase*2:0;s=document.createElementNS(l,"g");s.id="wavegap_"+r+"_"+n;s.setAttribute("transform","translate(0,"+(this.lane.y0+r*this.lane.yo)+")");i.insertBefore(s,i.firstChild);f=t[r].wave;if(f){a=f.split("");u=0;while(a.length){if(a.shift()==="|"){o=document.createElementNS(l,"use");o.id="guse_"+u+"_"+r+"_"+n;o.setAttributeNS(c,"xlink:href","#gap");o.setAttribute("transform","translate("+this.lane.xs*((2*u+1)*this.lane.period*this.lane.hscale-this.lane.phase)+")");s.insertBefore(o,s.firstChild)}u+=1}}}}};WaveDrom.RenderArcs=function(e,t,n,r){"use strict";function E(){y=document.createElementNS(b,"path");y.id="gmark_"+f.from+"_"+f.to;y.setAttribute("d","M "+m.x+","+m.y+" "+g.x+","+g.y);y.setAttribute("style","fill:none;stroke:#0000FF;stroke-width:1");i.insertBefore(y,i.firstChild)}var i,s,o,u,a=[],f={words:[],from:0,shape:"",to:0,label:""},l={},c,h,p,d,v,m,g,y,b="http://www.w3.org/2000/svg",w="http://www.w3.org/XML/1998/namespace";if(t){for(s in t){this.lane.period=t[s].period?t[s].period:1;this.lane.phase=t[s].phase?t[s].phase*2:0;u=t[s].node;if(u){a=u.split("");c=0;while(a.length){h=a.shift();if(h!=="."){l[h]={x:this.lane.xs*(2*c*this.lane.period*this.lane.hscale-this.lane.phase)+this.lane.xlabel,y:s*this.lane.yo+this.lane.y0+this.lane.ys*.5}}c+=1}}}i=document.createElementNS(b,"g");i.id="wavearcs_"+n;e.insertBefore(i,e.firstChild);for(o in l){if(l[o].x>0){p=document.createTextNode(o);d=document.createElementNS(b,"text");d.setAttribute("style","font-size:8px;");d.setAttribute("x",l[o].x);d.setAttribute("y",l[o].y+2);d.setAttribute("text-anchor","middle");d.setAttributeNS(w,"xml:space","preserve");d.appendChild(p);i.insertBefore(d,i.firstChild);v=document.createElementNS(b,"rect");v.setAttribute("x",l[o].x-4);v.setAttribute("y",l[o].y-5);v.setAttribute("width",8);v.setAttribute("height",10);v.setAttribute("style","fill:#FFFFC0;");i.insertBefore(v,i.firstChild)}}if(r.edge){for(s in r.edge){f.words=r.edge[s].split(" ");f.label=r.edge[s].substring(f.words[0].length);f.from=f.words[0].substr(0,1);f.to=f.words[0].substr(-1,1);f.shape=f.words[0].slice(1,-1);m=l[f.from];g=l[f.to];if(f.label){p=document.createTextNode(f.label);d=document.createElementNS(b,"text");d.setAttribute("style","font-size:11px;");d.setAttribute("x",(m.x+g.x)/2);d.setAttribute("y",(m.y+g.y)/2+4);d.setAttribute("text-anchor","middle");d.setAttributeNS(w,"xml:space","preserve");d.appendChild(p);i.insertBefore(d,i.firstChild)}var S=g.x-m.x,x=g.y-m.y;E();switch(f.shape){case"-":{break};case"~":{y.setAttribute("d","M "+m.x+","+m.y+" c "+.7*S+", 0 "+.3*S+", "+x+" "+S+", "+x);break};case"-~":{y.setAttribute("d","M "+m.x+","+m.y+" c "+.7*S+", 0 "+S+", "+x+" "+S+", "+x);if(f.label){d.setAttribute("x",m.x+(g.x-m.x)*.75)}break};case"~-":{y.setAttribute("d","M "+m.x+","+m.y+" c "+0+", 0 "+.3*S+", "+x+" "+S+", "+x);if(f.label){d.setAttribute("x",m.x+(g.x-m.x)*.25)}break};case"-|":{y.setAttribute("d","m "+m.x+","+m.y+" "+S+",0 0,"+x);if(f.label){d.setAttribute("x",g.x)}break};case"|-":{y.setAttribute("d","m "+m.x+","+m.y+" 0,"+x+" "+S+",0");if(f.label){d.setAttribute("x",m.x)}break};case"-|-":{y.setAttribute("d","m "+m.x+","+m.y+" "+S/2+",0 0,"+x+" "+S/2+",0");break};case"->":{y.setAttribute("style","marker-end:url(#arrowhead);stroke:#00ff00;stroke-width:1;fill:none");break};case"~>":{y.setAttribute("style","marker-end:url(#arrowhead);stroke:#00ff00;stroke-width:1;fill:none");y.setAttribute("d","M "+m.x+","+m.y+" "+"c "+.7*S+", 0 "+.3*S+", "+x+" "+S+", "+x);break};case"-~>":{y.setAttribute("style","marker-end:url(#arrowhead);stroke:#00ff00;stroke-width:1;fill:none");y.setAttribute("d","M "+m.x+","+m.y+" "+"c "+.7*S+", 0 "+S+", "+x+" "+S+", "+x);if(f.label){d.setAttribute("x",m.x+(g.x-m.x)*.75)}break};case"~->":{y.setAttribute("style","marker-end:url(#arrowhead);stroke:#00ff00;stroke-width:1;fill:none");y.setAttribute("d","M "+m.x+","+m.y+" "+"c "+0+", 0 "+.3*S+", "+x+" "+S+", "+x);if(f.label){d.setAttribute("x",m.x+(g.x-m.x)*.25)}break};case"-|>":{y.setAttribute("style","marker-end:url(#arrowhead);stroke:#00ff00;stroke-width:1;fill:none");y.setAttribute("d","m "+m.x+","+m.y+" "+S+",0 0,"+x);if(f.label){d.setAttribute("x",g.x)}break};case"|->":{y.setAttribute("style","marker-end:url(#arrowhead);stroke:#00ff00;stroke-width:1;fill:none");y.setAttribute("d","m "+m.x+","+m.y+" 0,"+x+" "+S+",0");if(f.label){d.setAttribute("x",m.x)}break};case"-|->":{y.setAttribute("style","marker-end:url(#arrowhead);stroke:#00ff00;stroke-width:1;fill:none");y.setAttribute("d","m "+m.x+","+m.y+" "+S/2+",0 0,"+x+" "+S/2+",0");break};case"<->":{y.setAttribute("style","marker-end:url(#arrowhead);marker-start:url(#arrowtail);stroke:#00ff00;stroke-width:1;fill:none");break};case"<~>":{y.setAttribute("style","marker-end:url(#arrowhead);marker-start:url(#arrowtail);stroke:#00ff00;stroke-width:1;fill:none");y.setAttribute("d","M "+m.x+","+m.y+" "+"c "+.7*S+", 0 "+.3*S+", "+x+" "+S+", "+x);break};case"<-~>":{y.setAttribute("style","marker-end:url(#arrowhead);marker-start:url(#arrowtail);stroke:#00ff00;stroke-width:1;fill:none");y.setAttribute("d","M "+m.x+","+m.y+" "+"c "+.7*S+", 0 "+S+", "+x+" "+S+", "+x);if(f.label){d.setAttribute("x",m.x+(g.x-m.x)*.75)}break};case"<-|>":{y.setAttribute("style","marker-end:url(#arrowhead);marker-start:url(#arrowtail);stroke:#00ff00;stroke-width:1;fill:none");y.setAttribute("d","m "+m.x+","+m.y+" "+S+",0 0,"+x);if(f.label){d.setAttribute("x",g.x)}break};case"<-|->":{y.setAttribute("style","marker-end:url(#arrowhead);marker-start:url(#arrowtail);stroke:#00ff00;stroke-width:1;fill:none");y.setAttribute("d","m "+m.x+","+m.y+" "+S/2+",0 0,"+x+" "+S/2+",0");break};default:{y.setAttribute("style","fill:none;stroke:#FF0000;stroke-width:1")}}}}}};WaveDrom.parseConfig=function(e){"use strict";this.lane.hscale=1;if(this.lane.hscale0){this.lane.hscale=this.lane.hscale0}if(e.config){if(e.config.hscale){this.lane.hscale=e.config.hscale}}};WaveDrom.rec=function(e,t){"use strict";var n,r,i={},s={x:10};if(typeof e[0]==="string"){r=e[0];s.x=25}t.x+=s.x;for(n in e){if(typeof e[n]==="object"){if(Object.prototype.toString.call(e[n])==="[object Array]"){i.y=t.y;t=this.rec(e[n],t);t.groups.push({x:t.xx,y:i.y,height:t.y-i.y,name:t.name})}else{t.lanes.push(e[n]);t.width.push(t.x);t.y+=1}}}t.xx=t.x;t.x-=s.x;t.name=r;return t};WaveDrom.RenderWaveForm=function(index){"use strict";var root,groups,svgcontent,TheTextBox,content,source,width,height,uwidth,uheight,ret,glengths,xmax=0,i;root=document.getElementById("lanes_"+index);groups=document.getElementById("groups_"+index);svgcontent=document.getElementById("svgcontent_"+index);TheTextBox=document.getElementById("InputJSON_"+index);if(TheTextBox.type&&TheTextBox.type=="textarea"){source=eval("("+TheTextBox.value+")")}else{source=eval("("+TheTextBox.innerHTML+")")}this.parseConfig(source);if(source.signal){ret=this.rec(source.signal,{x:0,y:0,xmax:0,width:[],lanes:[],groups:[]});this.RenderArcs(root,ret.lanes,index,source);this.RenderGaps(root,ret.lanes,index);this.RenderGroups(groups,ret.groups,index);content=this.parseWaveLanes(ret.lanes);glengths=this.RenderWaveLane(root,content,index);for(i in glengths){xmax=Math.max(xmax,glengths[i]+ret.width[i])}this.RenderMarks(root,content,index);this.lane.xg=Math.ceil((xmax-this.lane.tgo)/this.lane.xs)*this.lane.xs}width=this.lane.xg+this.lane.xs*(this.lane.xmax+1);height=content.length*this.lane.yo+this.lane.y0+this.lane.ys;if(this.lane.scale===3){uwidth=window.innerWidth-15;uheight=window.innerHeight-(10+7+16+7+WaveDrom.panela.ys+7+16+7+16+7)}else{uwidth=this.lane.scale*width;uheight=this.lane.scale*height}svgcontent.setAttribute("viewBox","0 0 "+width+" "+height);svgcontent.setAttribute("width",uwidth);svgcontent.setAttribute("height",uheight);root.setAttribute("transform","translate("+this.lane.xg+")")};WaveDrom.InsertSVGTemplate=function(e,t){"use strict";var n,r;r=JsonML.parse(WaveSkin);r.id="svgcontent_"+e;r.setAttribute("height","0");t.insertBefore(r,t.firstChild);n=document.getElementById("waves");n.id="waves_"+e;n=document.getElementById("groups");n.id="groups_"+e;n=document.getElementById("lanes");n.id="lanes_"+e};WaveDrom.ProcessAll=function(){"use strict";var e,t,n,r,i;e=0;t=document.getElementsByTagName("SCRIPT");for(n=t.length-1;n>0;n-=1){if(t.item(n).type&&t.item(n).type=="WaveDrom"){t.item(n).setAttribute("id","InputJSON_"+e);r=document.createElement("div");r.className+="WaveDrom_Display_"+e;t.item(n).parentNode.insertBefore(r,t.item(n));WaveDrom.InsertSVGTemplate(e,r);e+=1}}for(n=0;n<e;n+=1){WaveDrom.RenderWaveForm(n)}};WaveDrom.resize=function(){"use strict";document.getElementById("PanelB").style.height=window.innerHeight-(10+7+16+7+WaveDrom.panela.ys+7+16+7+16+7)+"px";document.getElementById("PanelA").style.height=WaveDrom.panela.ys+"px"};WaveDrom.ClearWaveLane=function(e){"use strict";var t=document.getElementById("lanes_"+e);while(t.childNodes.length){t.removeChild(t.childNodes[0])}var t=document.getElementById("groups_"+e);while(t.childNodes.length){t.removeChild(t.childNodes[0])}};WaveDrom.EditorKeyUp=function(e){"use strict";if(e){switch(e.keyCode){case 16:break;case 17:break;case 18:break;case 33:break;case 34:break;case 35:break;case 36:break;case 37:break;case 38:break;case 39:break;case 40:break;case 91:break;case 93:break;default:{if(WaveDrom.timer){clearTimeout(WaveDrom.timer)}WaveDrom.timer=setTimeout("WaveDrom.EditorRefresh()",750);return}}if(WaveDrom.timer){clearTimeout(WaveDrom.timer);WaveDrom.timer=setTimeout("WaveDrom.EditorRefresh()",750)}}};WaveDrom.EditorRefresh=function(){"use strict";WaveDrom.ClearWaveLane(0);WaveDrom.resize();WaveDrom.RenderWaveForm(0)};WaveDrom.EditorInit=function(){"use strict";var e,t,n,r,i;this.lane.scale=3;e=0;WaveDrom.WaveformLoad();WaveDrom.InsertSVGTemplate(e,document.getElementById("WaveDrom_Display_"+e));WaveDrom.EditorRefresh();WaveDrom.ConfigurationLoad();window.onresize=WaveDrom.EditorRefresh};WaveDrom.ExpandInputWindow=function(){"use strict";if(WaveDrom.panela.ys<.707*window.innerHeight){WaveDrom.panela.ys+=50;WaveDrom.EditorRefresh()}};WaveDrom.ConfigurationLoad=function(){var e=localStorage["color"];if(!e){return}var t=document.getElementById("color");if(!t){return}for(var n=0;n<t.children.length;n++){var r=t.children[n];if(r.value==e){r.selected="true";break}}};WaveDrom.ConfigurationSave=function(){var e=document.getElementById("color");var t=e.children[e.selectedIndex].value;localStorage["color"]=t;var n=document.getElementById("status");n.innerHTML="Options Saved.";setTimeout(function(){n.innerHTML=""},750)};WaveDrom.WaveformLoad=function(){var e=localStorage["waveform"];if(e)document.getElementById("InputJSON_0").value=e};WaveDrom.WaveformSave=function(){var e=document.getElementById("InputJSON_0").value;if(e)WaveDrom.ConfigurationSaveWaveform(e)};WaveDrom.ConfigurationSaveWaveform=function(e){localStorage["waveform"]=e};WaveDrom.CollapseInputWindow=function(){"use strict";if(WaveDrom.panela.ys>100){WaveDrom.panela.ys-=50;WaveDrom.EditorRefresh()}};WaveDrom.SetHScale=function(e){"use strict";WaveDrom.lane.hscale0=parseFloat(e);WaveDrom.EditorRefresh()};WaveDrom.SetScale=function(e){"use strict";WaveDrom.lane.scale=parseFloat(e);WaveDrom.EditorRefresh()};window.onload=WaveDrom.ProcessAll