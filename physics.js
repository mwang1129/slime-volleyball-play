// Normal-mode physics matched against the current public oneslime.net script.
// Checked 2026-11-08; custom ducking remains a separate extension.
// Reference: https://github.com/mmkal/slimejs/blob/master/processed/ts/oneslime-one.ts
class ClassicPhysics {
 constructor(server=0){this.ballGravity=1;this.players=[{x:200,y:0,vx:0,vy:0},{x:800,y:0,vx:0,vy:0}];this.ball={x:server?800:200,y:400,vx:0,vy:0};this.touches=0;this.lastTouch=null;this.touchCounts=[0,0]}
 tick(inputs){this.events=[];
  for(let i=0;i<2;i++){const p=this.players[i],k=inputs[i];p.duck=!!k.duck;const radius=(p.diameter||100)/2;p.vx=(Number(k.right)-Number(k.left))*(p.speed||8);if(k.jump&&p.y===0)p.vy=p.jump||31;p.x=Math.max(i?505+radius:radius,Math.min(i?1000-radius:495-radius,p.x+p.vx));if(p.vy!==0){p.vy-=p.gravity||2;p.y+=p.vy;if(p.y<0){p.y=0;p.vy=0}}}
  const b=this.ball;b.vy--;b.y+=b.vy;b.x+=b.vx;
  for(const p of this.players)this.hit(p);
  if(b.x<15){this.events.push({type:"wall",side:0});b.x=15;b.vx=-b.vx}if(b.x>985){this.events.push({type:"wall",side:1});b.x=985;b.vx=-b.vx}
  if(b.x>480&&b.x<520&&b.y<140){this.events.push({type:"net"});if(b.vy<0&&b.y>130){b.vy=-b.vy;b.y=130}else if(b.x<500){b.x=480;b.vx=-Math.abs(b.vx)}else{b.x=520;b.vx=Math.abs(b.vx)}}
  return b.y<35?(b.x<500?1:0):null;
 }
 recordHit(p,before){this.events??=[];this.events.push({type:"hit",player:this.players.indexOf(p),pose:{...p},before,after:{...this.ball}})}
 hitDuck(p){const before={...this.ball};const b=this.ball,dx=b.x-p.x,dy=b.y-p.y,rx=(p.diameter||100)/2+12.5,ry=(p.diameter||100)*.5+25;const distance=Math.hypot(dx/rx,dy/ry);if(dy<=0||distance>=1||distance<.001)return;b.x=p.x+dx/distance;b.y=p.y+dy/distance;let nx=dx/(rx*rx),ny=dy/(ry*ry),n=Math.hypot(nx,ny);nx/=n;ny/=n;const approach=(b.vx-p.vx)*nx+(b.vy-p.vy)*ny;if(approach<0){b.vx=Math.max(-15,Math.min(15,b.vx+p.vx-2*approach*nx));b.vy=Math.max(-22,Math.min(22,b.vy+p.vy-2*approach*ny));this.touches++;this.lastTouch=this.players.indexOf(p);this.touchCounts[this.lastTouch]++;this.recordHit(p,before)}}
 hit(p){const before={...this.ball};if(p.duck){this.hitDuck(p);return}const b=this.ball,dx=2*(b.x-p.x),dy=b.y-p.y,d=Math.trunc(Math.hypot(dx,dy));const reach=(p.diameter||100)+25;if(dy<=0||d>=reach||d<=5)return;const approach=Math.trunc((dx*(b.vx-p.vx)+dy*(b.vy-p.vy))/d);b.x=p.x+Math.trunc((reach/2)*dx/d);b.y=p.y+Math.trunc(reach*dy/d);if(approach<=0){b.vx=Math.max(-15,Math.min(15,b.vx+p.vx-Math.trunc(2*dx*approach/d)));b.vy=Math.max(-22,Math.min(22,b.vy+p.vy-Math.trunc(2*dy*approach/d)));this.touches++;this.lastTouch=this.players.indexOf(p);this.touchCounts[this.lastTouch]++;this.recordHit(p,before)}}
}
if(typeof module!=='undefined')module.exports=ClassicPhysics;






