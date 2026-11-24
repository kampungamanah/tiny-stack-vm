import{mkdirSync as A,readdirSync as B,readFileSync as F,writeFileSync as W}from'node:fs';
const T=new TextEncoder(),S="0Aq46:;?!!!!!!!!999999959995999!999!!!!!!!!!!!!!PTTP0!!!!!!!!!!!58!!!!!!!!!!!!!!4414";
let O=new Uint8Array(65536),L=0;
function R(p,q){
const n=p.length,D=new Int32Array(256);let s=0;const C=new Int32Array(64);let c=0;const M=new Int32Array(256);let i=0,pc=0,t=0;
L=0;
for(;;){
if(t===1e6)return 10;
if(pc<0||pc>=n)return 9;
const b=p[pc],v=S.charCodeAt(b)-48;
if(!(v>=0&&v<=65))return 5;
const m=v>>4,u=(v>>2)&3,y=v&3;
if(pc+m>=n)return 9;
t++;
const g=pc+1+m;
if(s<u)return 2;
if(s-u+y>256)return 3;
pc=g;
switch(b){
case 0:return 0;
case 1:D[s++]=(p[g-1]<<24)>>24;break;
case 2:D[s++]=p[g-4]|p[g-3]<<8|p[g-2]<<16|p[g-1]<<24;break;
case 3:s--;break;
case 4:D[s]=D[s-1];s++;break;
case 5:{const z=D[s-1];D[s-1]=D[s-2];D[s-2]=z;break;}
case 6:D[s]=D[s-2];s++;break;
case 7:{const a=D[s-3];D[s-3]=D[s-2];D[s-2]=D[s-1];D[s-1]=a;break;}
case 23:D[s-1]=-D[s-1]|0;break;
case 27:D[s-1]=~D[s-1];break;
case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:case 26:case 28:case 29:case 30:case 32:case 33:case 34:{
const z=D[s-1],a=D[s-2];let r;
if(b==16)r=(a+z)|0;
else if(b==17)r=(a-z)|0;
else if(b==18)r=Math.imul(a,z);
else if(b==19){if(!z)return 4;r=a==-2147483648&&z==-1?a:(a/z)|0;}
else if(b==20){if(!z)return 4;r=z==-1?0:(a%z)|0;}
else if(b==21){if(!z)return 4;r=Math.floor((a>>>0)/(z>>>0))|0;}
else if(b==22){if(!z)return 4;r=((a>>>0)%(z>>>0))|0;}
else if(b==24)r=a&z;
else if(b==25)r=a|z;
else if(b==26)r=a^z;
else if(b==28)r=a<<(z&31);
else if(b==29)r=a>>(z&31);
else if(b==30)r=(a>>>(z&31))|0;
else if(b==32)r=a==z?1:0;
else if(b==33)r=a<z?1:0;
else r=a>>>0<z>>>0?1:0;
s-=2;D[s++]=r;break;
}
case 48:case 49:case 50:{
const e=((p[g-2]|p[g-1]<<8)<<16)>>16;let k=1;
if(b!=48){const z=D[--s];k=b==49?z==0:z!=0;}
if(k)pc=g+e;break;
}
case 51:if(c==64)return 7;C[c++]=g;pc=p[g-2]|p[g-1]<<8;break;
case 52:if(!c)return 8;pc=C[--c];break;
case 64:{const a=D[s-1];if(a<0||a>255)return 6;D[s-1]=M[a];break;}
case 65:{const a=D[s-1],z=D[s-2];if(a<0||a>255)return 6;s-=2;M[a]=z;break;}
case 80:{const z=T.encode(String(D[s-1]));if(L+z.length>65536)return 11;s--;O.set(z,L);L+=z.length;break;}
case 81:if(L+1>65536)return 11;O[L++]=D[--s]&255;break;
case 82:D[s++]=i<q.length?q[i++]:-1;break;
case 83:return D[--s]&255;
}
}
}
const E=process.env,I=E.MAKEFUN_INPUT_DIR??'/input',P=E.MAKEFUN_OUTPUT_DIR??'/output';
for(const d of B(I).sort()){
const e=R(F(I+'/'+d+'/program.bin'),F(I+'/'+d+'/input.bin'));
A(P+'/'+d,{recursive:true});
W(P+'/'+d+'/stdout.bin',O.slice(0,L));
W(P+'/'+d+'/exit.txt',e+'\n');
}
