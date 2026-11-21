// One serve on the opening point; one retry for service faults on later points.
class ServeRules {
 constructor(server,pointsPlayed){this.server=server;this.attempt=1;this.limit=pointsPlayed===0?1:2;this.cleared=false;}
 observe(world){const receiver=1-this.server;const crossed=this.server===0?world.ball.x>520:world.ball.x<480;if(world.touchCounts[receiver]>0||world.events?.some(e=>e.type==='hit'&&e.player===receiver)||(world.touchCounts[this.server]>0&&crossed))this.cleared=true;}
 retry(winner){if(winner===this.server||this.cleared||this.attempt>=this.limit)return false;this.attempt++;this.cleared=false;return true;}
}
if(typeof module!=='undefined')module.exports=ServeRules;
