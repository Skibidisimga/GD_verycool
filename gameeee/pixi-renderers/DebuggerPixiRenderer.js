var gdjs;(function(g){class R{constructor(d){this._debugDraw=null;this._debugDrawContainer=null;this._instanceContainer=d,this._debugDrawRenderedObjectsPoints={},this._debugDraw=null}getRendererObject(){return this._debugDrawContainer}renderDebugDraw(d,h,P,_){const p=this._instanceContainer.getRenderer().getRendererObject();(!this._debugDraw||!this._debugDrawContainer)&&(this._debugDrawContainer=new PIXI.Container,this._debugDraw=new PIXI.Graphics,this._debugDrawContainer.addChild(this._debugDraw),p&&p.addChild(this._debugDrawContainer));const t=this._debugDraw;for(let r in this._debugDrawRenderedObjectsPoints)this._debugDrawRenderedObjectsPoints[r].wasRendered=!1;const u=(r,e,n,c,i)=>{t.line.color=n,t.fill.color=n,t.drawCircle(c,i,3),P&&(r[e]||(r[e]=new PIXI.Text(e,{fill:n,fontSize:12}),this._debugDrawContainer.addChild(r[e])),r[e].position.set(c,i))};t.clear(),t.beginFill(),t.alpha=.8,t.lineStyle(2,255,1);const l=[0,0];for(let r=0;r<d.length;r++){const e=d[r],n=this._instanceContainer.getLayer(e.getLayer());if((!e.isVisible()||!n.isVisible())&&!h||!e.getRendererObject())continue;const i=e.getAABB();t.fill.alpha=.2,t.line.color=7835368,t.fill.color=7835368;const o=[];o.push.apply(o,n.applyLayerTransformation(i.min[0],i.min[1],0,l)),o.push.apply(o,n.applyLayerTransformation(i.max[0],i.min[1],0,l)),o.push.apply(o,n.applyLayerTransformation(i.max[0],i.max[1],0,l)),o.push.apply(o,n.applyLayerTransformation(i.min[0],i.max[1],0,l)),t.drawPolygon(o)}for(let r=0;r<d.length;r++){const e=d[r],n=this._instanceContainer.getLayer(e.getLayer());if((!e.isVisible()||!n.isVisible())&&!h||!e.getRendererObject())continue;const i=e.id;this._debugDrawRenderedObjectsPoints[i]||(this._debugDrawRenderedObjectsPoints[i]={wasRendered:!0,points:{}});const o=this._debugDrawRenderedObjectsPoints[i];o.wasRendered=!0;const w=e.getHitBoxes();for(let a=0;a<w.length;a++){const b=[];w[a].vertices.forEach(s=>{s=n.applyLayerTransformation(s[0],s[1],0,l),b.push(s[0]),b.push(s[1])}),t.fill.alpha=0,t.line.alpha=.5,t.line.color=16711680,t.drawPolygon(b)}t.fill.alpha=.3;const D=n.applyLayerTransformation(e.getCenterXInScene(),e.getCenterYInScene(),0,l);u(o.points,"Center",16776960,D[0],D[1]);const f=n.applyLayerTransformation(e.getX(),e.getY(),0,l);if(u(o.points,"Position",16711680,f[0],f[1]),e instanceof g.SpriteRuntimeObject){let a=e.getPointPosition("origin");(Math.abs(a[0]-f[0])>=1||Math.abs(a[1]-f[1])>=1)&&(a=n.applyLayerTransformation(a[0],a[1],0,l),u(o.points,"Origin",16711680,a[0],a[1]))}if(_&&e instanceof g.SpriteRuntimeObject){const a=e._animator.getCurrentFrame();if(!a)continue;for(const b in a.points.items){let s=e.getPointPosition(b);s=n.applyLayerTransformation(s[0],s[1],0,l),u(o.points,b,255,s[0],s[1])}}}for(const r in this._debugDrawRenderedObjectsPoints){const e=this._debugDrawRenderedObjectsPoints[r];if(e.wasRendered)continue;const n=e.points;for(const c in n)this._debugDrawContainer.removeChild(n[c])}t.endFill()}clearDebugDraw(){if(this._debugDraw&&this._debugDraw.clear(),this._debugDrawContainer){this._debugDrawContainer.destroy({children:!0});const d=this._instanceContainer.getRenderer().getRendererObject();d&&d.removeChild(this._debugDrawContainer)}this._debugDraw=null,this._debugDrawContainer=null,this._debugDrawRenderedObjectsPoints={}}}g.DebuggerPixiRenderer=R,g.DebuggerRenderer=g.DebuggerPixiRenderer})(gdjs||(gdjs={}));
//# sourceMappingURL=DebuggerPixiRenderer.js.map
