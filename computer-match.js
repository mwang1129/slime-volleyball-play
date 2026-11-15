// Live spectator matches use exactly the same physics and AI as playable matches.
class ComputerMatch {
 constructor(left=0,right=2){this.levels=[left,right].map(n=>Math.max(0,Math.min(4,Number(n)||0)));this.scores=[0,0];this.server=0;this.phase='ready';this.elapsed=0;this.pointDelay=0;this.lastWinner=null;this.newRally();}
 newRally(){this.world=new ClassicPhysics(this.server);this.controllers=this.levels.map(n=>new OriginalSlimeBot(n));this.world.players.forEach((p,i)=>{if(this.levels[i]===3)Object.assign(p,{speed:16,jump:45,gravity:4});if(this.levels[i]===4)p.diameter=150;});}
 start(){if(this.phase==='ready')this.phase='playing';}
 pause(){if(['playing','point'].includes(this.phase)){this.beforePause=this.phase;this.phase='paused';}}
 resume(){if(this.phase==='paused')this.phase=this.beforePause;}
 step(dt=.016){if(this.phase==='point'){this.pointDelay-=dt;if(this.pointDelay<=0){this.newRally();this.phase='playing';}return null;}if(this.phase!=='playing')return null;
 const mirror=p=>({...p,x:1000-p.x,vx:-p.vx});const w=this.world;const mirrored={players:[mirror(w.players[1]),mirror(w.players[0])],ball:mirror(w.ball),touchCounts:[w.touchCounts[1],w.touchCounts[0]],ballGravity:w.ballGravity};const left=this.controllers[0].input(mirrored),right=this.controllers[1].input(w);const controls=[{left:left.right,right:left.left,jump:left.jump,duck:false},right];this.elapsed+=dt;const winner=w.tick(controls);if(winner!==null){this.scores[winner]++;this.server=winner;this.lastWinner=winner;this.phase=this.scores[winner]>=6?'finished':'point';this.pointDelay=.65;}return {controls,winner};}
}
if(typeof module!=='undefined')module.exports=ComputerMatch;
