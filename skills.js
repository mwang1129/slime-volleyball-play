// Shared visible target and swept ball-overlap test.
const SKIM_CEILING={x:500,bottom:250,halfWidth:2/.75};
const SKIM_TARGET={left:520,right:520+40/.75,bottom:130,top:220};
function skimTargetOverlap(a,b){if(b.x<=a.x||b.x<SKIM_TARGET.left)return false;const start=Math.max(a.x,SKIM_TARGET.left),end=Math.min(b.x,SKIM_TARGET.right+11/.75);if(start>end)return false;const y=x=>a.y+(b.y-a.y)*(x-a.x)/(b.x-a.x);const lo=Math.min(y(start),y(end)),hi=Math.max(y(start),y(end));return hi>=SKIM_TARGET.bottom-11/.375&&lo<=SKIM_TARGET.top+11/.375;}
// This session runs both the practice attempt and the guide replay.
class SkillSession {
 constructor(kind){this.kind=kind;this.physics=new ClassicPhysics(0);this.t=0;this.hits=[];this.wall=false;this.net=false;this.crossing=null;this.result=null;this.reason='';this.duckPass=false;this.history=[];const p=this.physics.players[0],b=this.physics.ball;
 if(['running','flip','wabam'].includes(kind))Object.assign(p,{speed:16,jump:45,gravity:4});
 if(['drop','flip','wabam'].includes(kind)){p.x=420;Object.assign(b,{x:450,y:kind==='drop'?240:230,vx:0,vy:0})}
 if(kind==='running'){p.x=280;Object.assign(b,{x:300,y:120,vx:0,vy:0})}
 if(['block','throw'].includes(kind)){p.x=420;Object.assign(b,{x:680,y:kind==='block'?370:560,vx:-9,vy:0})}
 if(kind==='return'){p.x=300;Object.assign(b,{x:720,y:360,vx:-12,vy:0})}
 if(kind==='spike'){p.x=330;Object.assign(b,{x:390,y:480,vx:0,vy:0})}
 if(kind==='duck'){p.x=280;Object.assign(b,{x:480,y:170,vx:-12,vy:6})}
 this.startX=p.x;this.lastHumanX=p.x;this.movedAfterContact=false;this.contactDrift=0;this.firstContactX=null;this.jumped=false;this.powerLift=false;
 }
 dummy(){const k=this.kind,t=this.t%180;let target=850,jump=false;if(['tip','skim','reverse','deep'].includes(k))target=k==='deep'?610:570;if(['short','drop','flip','running'].includes(k))target=900;if(['fake','wabam'].includes(k)){target=570;jump=t>65&&t<100}if(['block','throw'].includes(k)){target=620;jump=t<35}if(k==='duck')target=760;if(k==='rally'){target=660+110*Math.sin(this.t*.018);jump=t>75&&t<100}const p=this.physics.players[1];return {left:p.x>target+5,right:p.x<target-5,jump,duck:false}}
 tick(input){if(this.result!==null)return this.result;const f=this.physics,old={...f.ball},oldp={...f.players[0]};this.history.push({...input});this.t++;const winner=f.tick([input,this.dummy()]);return this.observe(old,oldp,winner)}
 observe(old,oldp,winner){const f=this.physics,p=f.players[0],b=f.ball,k=this.kind;this.jumped ||=p.y>0;
 if(['skim','reverse','return'].includes(k)){const ceilingBottom=SKIM_CEILING.bottom;const endpoint=(f.events||[]).find(e=>e.type==='hit'&&e.player===1)?.before||b;const contactX=SKIM_CEILING.x-SKIM_CEILING.halfWidth-11/.75;if(endpoint.x>old.x&&old.x<=contactX&&endpoint.x>=contactX){const y=old.y+(endpoint.y-old.y)*(contactX-old.x)/(endpoint.x-old.x);if(y+11/.375>ceilingBottom){b.x=contactX-.01;b.y=y;b.vx=-Math.abs(b.vx);return this.finish(false,'The ball hit the upper practice net. Aim through the opening beneath it.');}}}
 if(this.firstContactX!==null)this.contactDrift=Math.max(this.contactDrift,Math.abs(p.x-this.firstContactX));if(this.hits.length&&p.x!==this.lastHumanX)this.movedAfterContact=true;this.lastHumanX=p.x;
 for(const e of f.events||[]){if(e.type==='wall'&&e.side===0&&this.hits.length)this.wall=true;if(e.type==='net')this.net=true;if(e.type==='hit'&&e.player===0){if(this.firstContactX===null)this.firstContactX=e.pose.x;this.hits.push({...e,t:this.t,wall:this.wall});if(e.after.vy>0&&e.pose.y>0)this.powerLift=true}}
 const last=this.hits.at(-1),n=this.hits.length;
 if(['skim','reverse'].includes(k)){
  // The ball can enter the target and hit the dummy in the same physics tick.
  const dummyHit=(f.events||[]).find(e=>e.type==='hit'&&e.player===1);
  const endpoint=dummyHit?dummyHit.before:b;
  if(n>0&&skimTargetOverlap(old,endpoint))this.skimTargetPassed=true;
  const grounded=this.hits.every(h=>h.pose.y===0);
  if(this.skimTargetPassed&&grounded&&(k==='skim'?this.wall&&n>=2:!this.wall&&n>=1))return this.finish(true,'The serve passed through the visible low target.');
 }

 if(old.x>=520&&b.x<520&&f.lastTouch===1)this.incoming=true;
 if(old.x<=520&&b.x>520&&f.lastTouch===0){const fraction=(520-old.x)/(b.x-old.x);const crossingY=old.y+(b.y-old.y)*fraction;this.crossing={...b,y:crossingY,hit:last};const low=crossingY>=130&&crossingY<=220;
 if(k==='return'&&last&&last.pose.y===0&&low&&!this.net)return this.finish(true,'Grounded return cleared the net below the guide.');
 if(k==='spike'&&last&&last.pose.y>0&&last.after.vy<0&&b.vy<0&&b.y>=140&&b.y<=260&&!this.net)return this.finish(true,'Airborne hit passed downward through the target.');
 if(k==='block'&&last&&last.pose.y>0&&last.pose.x>=390&&last.before.vx<0&&b.vx>0&&!this.net)return this.finish(true,'Incoming attack was blocked in the air near the net.');
 if(k==='throw'&&last&&last.pose.y>0&&last.pose.vy<0&&last.before.vy<0&&Math.abs(last.pose.vy-last.before.vy)<=5&&last.after.vy<0&&b.vy<0&&!this.net)return this.finish(true,'Matched a falling ball and sent it down across the net.');
 
 
 if(k==='fake'&&this.wall&&n===1&&this.jumped&&p.x>=350&&low&&!this.net)return this.finish(true,'Back-wall rebound crossed after a fake jump without a second touch.');
 if(k==='flip'&&last&&last.pose.y>0&&last.before.y<last.pose.y+100&&last.after.vy<0&&b.vy<0&&!this.net)return this.finish(true,'On-fire airborne contact flipped the ball down across.');
 if(k==='wabam'&&n>=2&&this.hits.slice(0,-1).some(h=>h.pose.x>=350&&h.after.vy>0)&&last.pose.y>0&&last.pose.x>=350&&last.after.vy<0&&b.vy<0&&!this.net)return this.finish(true,'A lift was followed by a separate downward hit near the net.');
 }
 if(k==='duck'&&old.x>=oldp.x&&b.x<p.x&&p.duck&&!n&&Math.abs(p.x-this.startX)<=16){const dy=b.y-p.y;if(dy>75&&dy<125)this.duckPass=true}if(k==='duck'&&this.duckPass&&!n&&b.x<p.x-65&&p.duck)return this.finish(true,'The shot passed through standing height while you ducked.');
 if(k==='running'&&n>=3&&!this.jumped&&p.x-this.startX>=100&&this.hits.slice(-3).every(h=>h.pose.vx>0&&Math.abs(h.before.x-h.pose.x)<30&&h.before.y-h.pose.y>90)&&b.x>=p.x-30&&b.x<=p.x+60)return this.finish(true,'Three moving upper-surface contacts carried the ball forward.');
 if(winner!==null){let success=false;if(['deep','short','drop','tip'].includes(k)){const zone=k==='deep'?[780,985]:k==='tip'?[750,985]:k==='drop'?[520,660]:[520,680];success=winner===0&&n>0&&f.lastTouch===0&&this.crossing!==null&&!this.net&&b.x>=zone[0]&&b.x<=zone[1];if(k==='tip')success=success&&this.wall&&n>=2&&last.wall&&last.pose.x>=350;if(k==='drop')success=success&&last.pose.y===0&&this.crossing.y<=200&&this.crossing.vy<0;if(k==='short')success=success&&this.crossing.y<=240;}if(k==='rally')success=winner===0&&n>=2;return this.finish(!!success,success?'The shot completed the required sequence and landed in the target.':this.failureReason());}
 if(this.t>900)return this.finish(false,'Attempt timed out.');return null;
 }
 coaching(){const last=this.hits.at(-1),n=this.hits.length,k=this.kind;const mark=(text,met)=>({text,met:!!met});const crossed=!!this.crossing,air=last?.pose.y>0,down=last?.after.vy<0;
 if(k==='block')return [mark('Contact the incoming ball while airborne.',air&&last.before.vx<0),mark('Make that contact from the near-net takeoff strip.',last?.pose.x>=390),mark('Send the ball back across the net without hitting the net.',crossed&&this.crossing.vx>0&&!this.net)];
 if(k==='return')return [mark('Contact the feed while on the ground.',last&&last.pose.y===0),mark('Clear the regular net without touching it.',crossed&&!this.net),mark('Keep the crossing below the upper height guide.',crossed&&this.crossing.y<=220&&this.crossing.y>=130)];
 if(['spike','flip','wabam','throw'].includes(k)){const checks=[mark('Make an airborne contact.',air),mark('Send the ball downward from that contact.',down),mark('Clear the net on a downward path.',crossed&&this.crossing.vy<0&&!this.net)];if(k==='throw')checks.unshift(mark('Meet the ball while descending at a similar speed.',last&&last.pose.vy<0&&last.before.vy<0&&Math.abs(last.pose.vy-last.before.vy)<=5));if(k==='wabam')checks.unshift(mark('Lift the ball, then make a separate second hit near the net.',n>=2&&this.hits.slice(0,-1).some(h=>h.pose.x>=350&&h.after.vy>0)));return checks;}
 if(['skim','reverse'].includes(k))return [mark('Make grounded contact.',n&&this.hits.every(h=>h.pose.y===0)),mark(k==='skim'?'Bounce off your back wall and touch the ball again.':'Send the ball forward without a back-wall bounce.',k==='skim'?this.wall&&n>=2:n&&!this.wall),mark('Pass through the opening below the upper net.',this.skimTargetPassed)];
 if(k==='tip'||k==='fake')return [mark('Bounce the serve off your back wall.',this.wall),mark(k==='tip'?'Add a second contact near the net.':'Follow toward the net and fake a jump without another touch.',k==='tip'?n>=2&&last?.wall&&last.pose.x>=350:n===1&&this.jumped&&this.physics.players[0].x>=350),mark(k==='tip'?'Land in the deep target.':'Let the first hit cross low.',this.result===true)];
 if(k==='duck')return [mark('Hold duck without hitting the ball.',this.physics.players[0].duck&&!n),mark('Let the shot pass through standing height.',this.duckPass),mark('Keep ducking until it passes behind you.',this.result===true)];
 if(k==='running')return [mark('Stay grounded while moving right.',!this.jumped&&this.physics.players[0].vx>0),mark('Make three upper-surface contacts while moving.',n>=3),mark('Carry the ball at least 100 court units.',this.physics.players[0].x-this.startX>=100)];
 return [mark('Hit the ball toward the other court.',n>0),mark(k==='drop'?'Stay grounded and cross on a low, falling path.':'Clear the net on the intended path.',k==='drop'?last?.pose.y===0&&crossed&&this.crossing.y<=200&&this.crossing.vy<0:crossed&&!this.net),mark('Land the ball inside the marked target.',this.result===true)];
 }
 failureReason(){const k=this.kind,last=this.hits.at(-1),n=this.hits.length;if(!n)return this.jumped?'You jumped, but missed the ball. Try jumping a little later or moving closer to its path.':'The ball missed your slime. Move into the marked position before it arrives.';
 if(['skim','reverse'].includes(k)){if(this.hits.some(h=>h.pose.y!==0))return 'The serve was hit while airborne. Keep your slime grounded for this drill.';if(k==='skim'&&!this.wall)return 'The forward skim needs a rebound off your own back wall before it crosses.';if(k==='skim'&&n<2)return 'The back-wall rebound must touch your slime again before crossing.';if(k==='reverse'&&this.wall)return 'The reverse skim should cross without a back-wall rebound.';return 'The ball did not pass through the marked opening. Adjust your starting position slightly.';}
 if(k==='block'){if(last.pose.y===0)return 'You contacted the ball on the ground. Jump as it enters the dashed contact area above the net.';if(last.pose.x<390)return 'Your contact was too far from the net. Move into the marked takeoff strip before jumping.';if(last.before.vx>=0)return 'That contact was not against the incoming attack. Meet the feed while it is still moving toward you.';if(this.net)return 'The return hit the regular net. Meet the ball higher or slightly earlier in your jump.';return 'The airborne contact did not send the ball back across. Meet it on the front of your slime, toward the net.';}
 if(k==='throw'){if(last.pose.vy>=0)return 'You hit the ball while rising. Jump earlier so you meet it on your way down.';if(Math.abs(last.pose.vy-last.before.vy)>5)return 'Your falling speeds did not match closely enough. Adjust your jump timing before the contact.';}
 if(k==='wabam'&&(n<2||!this.hits.slice(0,-1).some(h=>h.after.vy>0)))return 'The lifting hit was missing. Lift the ball first, then meet it again for the downward hit.';
 if(['spike','flip','wabam','throw'].includes(k)){if(last.pose.y===0)return 'The contact was grounded. Jump to meet the ball in the air.';if(last.after.vy>=0)return 'Your hit sent the ball upward. Meet it later in your jump to produce a downward shot.';if(this.net)return 'The shot struck the regular net. Make contact higher or a little earlier.';return 'The downward shot missed the marked crossing area. Adjust your contact position toward the net.';}
 if(k==='return'&&last.pose.y>0)return 'The return was hit in the air. Stay on the ground and use the side of your slime.';
 if(this.net)return 'The ball hit the regular net. Give the shot more lift or meet it slightly earlier.';
 if(k==='tip'&&!this.wall)return 'The opening back-wall rebound was missing. Send the first hit behind you, then follow it.';
 if(k==='tip'&&(n<2||last.pose.x<350))return 'The second tip near the net was missing. Follow the rebound and add a touch from the near-net strip.';
 if(k==='fake'&&n>1)return 'You added another hit. After the back-wall rebound, fake the jump without touching the ball again.';
 if(k==='duck')return 'The ball touched your slime. Hold duck earlier and remain under the incoming path until it passes.';
 if(k==='running')return 'The ball rolled away before the carry was complete. Keep moving right beneath it without jumping.';
 if(this.crossing){const b=this.physics.ball,zone=k==='deep'?[780,985]:k==='tip'?[750,985]:k==='drop'?[520,660]:[520,680];if(['deep','tip','short','drop'].includes(k)){if(b.x<zone[0])return 'The ball fell short of the landing target. Add more forward motion at contact.';if(b.x>zone[1])return 'The ball travelled beyond the landing target. Use a gentler contact with less forward motion.';}return 'The crossing was outside the marked height band. Keep the ball within the dashed guide.';}
 return 'The ball did not return across the net. Move behind its path and use your forward side to send it right.';}
 finish(ok,reason){this.result=ok;this.reason=reason;return ok}
}
if(typeof module!=='undefined')module.exports=SkillSession;

