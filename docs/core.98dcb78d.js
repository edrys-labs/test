!function(e,t,r,a,o,i,n){var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s="function"==typeof l[a]&&l[a],p=s.i||{},u=s.cache||{},d="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(t,r){if(!u[t]){if(!e[t]){var o="function"==typeof l[a]&&l[a];if(!r&&o)return o(t,!0);if(s)return s(t,!0);if(d&&"string"==typeof t)return d(t);var i=Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}p.resolve=function(r){var a=e[t][1][r];return null!=a?a:r},p.cache={};var n=u[t]=new c.Module(t);e[t][0].call(n.exports,p,n,n.exports,l)}return u[t].exports;function p(e){var t=p.resolve(e);return!1===t?{}:c(t)}}c.isParcelRequire=!0,c.Module=function(e){this.id=e,this.bundle=c,this.require=d,this.exports={}},c.modules=e,c.cache=u,c.parent=s,c.distDir=void 0,c.publicUrl=void 0,c.devServer=void 0,c.i=p,c.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},Object.defineProperty(c,"root",{get:function(){return l[a]}}),l[a]=c;for(var f=0;f<t.length;f++)c(t[f])}({gVnUe:[function(e,t,r,a){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r);var i=e("./lib/export/core.js");o.exportAll(i,r)},{"./lib/export/core.js":"jcGh8","@parcel/transformer-js/src/esmodule-helpers.js":"j9EeU"}],jcGh8:[function(e,t,r,a){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r);var i=e("../core/echarts.js");o.exportAll(i,r);var n=e("./api.js");o.exportAll(n,r);var l=e("../extension.js"),s=e("../label/installLabelLayout.js");(0,l.use)(s.installLabelLayout)},{"../core/echarts.js":"l2neA","./api.js":"5kBno","../extension.js":"2mlY2","../label/installLabelLayout.js":"kO9EI","@parcel/transformer-js/src/esmodule-helpers.js":"j9EeU"}],"5kBno":[function(e,t,r,a){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"throttle",()=>y.throttle),o.export(r,"use",()=>L.use),o.export(r,"setPlatformAPI",()=>S.setPlatformAPI),o.export(r,"parseGeoJSON",()=>C.default),o.export(r,"parseGeoJson",()=>C.default),o.export(r,"env",()=>E.default),o.export(r,"Model",()=>k.default),o.export(r,"Axis",()=>w.default),o.export(r,"innerDrawElementOnCanvas",()=>_.brushSingle),o.export(r,"zrender",()=>m),o.export(r,"matrix",()=>j),o.export(r,"vector",()=>g),o.export(r,"zrUtil",()=>h),o.export(r,"color",()=>b),o.export(r,"helper",()=>v),o.export(r,"number",()=>T),o.export(r,"time",()=>M),o.export(r,"graphic",()=>I),o.export(r,"format",()=>D),o.export(r,"util",()=>z),o.export(r,"List",()=>x.default),o.export(r,"ComponentModel",()=>n.default),o.export(r,"ComponentView",()=>s.default),o.export(r,"SeriesModel",()=>u.default),o.export(r,"ChartView",()=>c.default),o.export(r,"extendComponentModel",()=>U),o.export(r,"extendComponentView",()=>G),o.export(r,"extendSeriesModel",()=>B),o.export(r,"extendChartView",()=>F);var i=e("../model/Component.js"),n=o.interopDefault(i),l=e("../view/Component.js"),s=o.interopDefault(l),p=e("../model/Series.js"),u=o.interopDefault(p),d=e("../view/Chart.js"),c=o.interopDefault(d),f=e("../data/SeriesData.js"),x=o.interopDefault(f),m=e("zrender/lib/zrender.js"),j=e("zrender/lib/core/matrix.js"),g=e("zrender/lib/core/vector.js"),h=e("zrender/lib/core/util.js"),b=e("zrender/lib/tool/color.js"),y=e("../util/throttle.js"),v=e("./api/helper.js"),L=e("../extension.js"),S=e("zrender/lib/core/platform.js"),P=e("../coord/geo/parseGeoJson.js"),C=o.interopDefault(P),T=e("./api/number.js"),M=e("./api/time.js"),I=e("./api/graphic.js"),D=e("./api/format.js"),z=e("./api/util.js"),R=e("zrender/lib/core/env.js"),E=o.interopDefault(R),O=e("../model/Model.js"),k=o.interopDefault(O),A=e("../coord/Axis.js"),w=o.interopDefault(A),_=e("zrender/lib/canvas/graphic.js");function U(e){var t=n.default.extend(e);return n.default.registerClass(t),t}function G(e){var t=s.default.extend(e);return s.default.registerClass(t),t}function B(e){var t=u.default.extend(e);return u.default.registerClass(t),t}function F(e){var t=c.default.extend(e);return c.default.registerClass(t),t}},{"../model/Component.js":"DaBV0","../view/Component.js":"8Yre7","../model/Series.js":"83Z5Q","../view/Chart.js":"i2uv8","../data/SeriesData.js":"9yJ0G","zrender/lib/zrender.js":"38BbQ","zrender/lib/core/matrix.js":"kkznC","zrender/lib/core/vector.js":"hp0CZ","zrender/lib/core/util.js":"ko4fs","zrender/lib/tool/color.js":"2sDMg","../util/throttle.js":"edXSp","./api/helper.js":"gbj9B","../extension.js":"2mlY2","zrender/lib/core/platform.js":"fjgUw","../coord/geo/parseGeoJson.js":"8MJuq","./api/number.js":"6yOd3","./api/time.js":"6B9w7","./api/graphic.js":"2dSdc","./api/format.js":"8SOUi","./api/util.js":"b3q5k","zrender/lib/core/env.js":"cy68L","../model/Model.js":"aMGjh","../coord/Axis.js":"cfHlx","zrender/lib/canvas/graphic.js":"iWAJB","@parcel/transformer-js/src/esmodule-helpers.js":"j9EeU"}],gbj9B:[function(e,t,r,a){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"createDimensions",()=>j.createDimensions),o.export(r,"createSymbol",()=>g.createSymbol),o.export(r,"enableHoverEmphasis",()=>h.enableHoverEmphasis),o.export(r,"createList",()=>b),o.export(r,"getLayoutRect",()=>c.getLayoutRect),o.export(r,"dataStack",()=>y),o.export(r,"createScale",()=>v),o.export(r,"mixinAxisModelCommonMethods",()=>L),o.export(r,"getECData",()=>x.getECData),o.export(r,"createTextStyle",()=>S);var i=e("zrender/lib/core/util.js"),n=e("../../chart/helper/createSeriesData.js"),l=o.interopDefault(n),s=e("../../coord/axisHelper.js"),p=e("../../coord/axisModelCommonMixin.js"),u=e("../../model/Model.js"),d=o.interopDefault(u),c=e("../../util/layout.js"),f=e("../../data/helper/dataStackHelper.js"),x=e("../../util/innerStore.js"),m=e("../../label/labelStyle.js"),j=e("../../data/helper/createDimensions.js"),g=e("../../util/symbol.js"),h=e("../../util/states.js");function b(e){return(0,l.default)(null,e)}var y={isDimensionStacked:f.isDimensionStacked,enableDataStack:f.enableDataStack,getStackedDimension:f.getStackedDimension};function v(e,t){var r=t;t instanceof d.default||(r=new(0,d.default)(t));var a=s.createScaleByModel(r);return a.setExtent(e[0],e[1]),s.niceScaleExtent(a,r),a}function L(e){i.mixin(e,p.AxisModelCommonMixin)}function S(e,t){return t=t||{},(0,m.createTextStyle)(e,null,null,"normal"!==t.state)}},{"zrender/lib/core/util.js":"ko4fs","../../chart/helper/createSeriesData.js":"jp4ri","../../coord/axisHelper.js":"3NQCu","../../coord/axisModelCommonMixin.js":"aSpgR","../../model/Model.js":"aMGjh","../../util/layout.js":"4bcYI","../../data/helper/dataStackHelper.js":"8KXdU","../../util/innerStore.js":"eG3z9","../../label/labelStyle.js":"bUlXb","../../data/helper/createDimensions.js":"kcdlB","../../util/symbol.js":"dXHIv","../../util/states.js":"1CMjO","@parcel/transformer-js/src/esmodule-helpers.js":"j9EeU"}],"6yOd3":[function(e,t,r,a){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"linearMap",()=>i.linearMap),o.export(r,"round",()=>i.round),o.export(r,"asc",()=>i.asc),o.export(r,"getPrecision",()=>i.getPrecision),o.export(r,"getPrecisionSafe",()=>i.getPrecisionSafe),o.export(r,"getPixelPrecision",()=>i.getPixelPrecision),o.export(r,"getPercentWithPrecision",()=>i.getPercentWithPrecision),o.export(r,"MAX_SAFE_INTEGER",()=>i.MAX_SAFE_INTEGER),o.export(r,"remRadian",()=>i.remRadian),o.export(r,"isRadianAroundZero",()=>i.isRadianAroundZero),o.export(r,"parseDate",()=>i.parseDate),o.export(r,"quantity",()=>i.quantity),o.export(r,"quantityExponent",()=>i.quantityExponent),o.export(r,"nice",()=>i.nice),o.export(r,"quantile",()=>i.quantile),o.export(r,"reformIntervals",()=>i.reformIntervals),o.export(r,"isNumeric",()=>i.isNumeric),o.export(r,"numericToNumber",()=>i.numericToNumber);var i=e("../../util/number.js")},{"../../util/number.js":"1LgPR","@parcel/transformer-js/src/esmodule-helpers.js":"j9EeU"}],"6B9w7":[function(e,t,r,a){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"parse",()=>i.parseDate),o.export(r,"format",()=>n.format);var i=e("../../util/number.js"),n=e("../../util/time.js")},{"../../util/number.js":"1LgPR","../../util/time.js":"gzayA","@parcel/transformer-js/src/esmodule-helpers.js":"j9EeU"}],"2dSdc":[function(e,t,r,a){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"extendShape",()=>i.extendShape),o.export(r,"extendPath",()=>i.extendPath),o.export(r,"makePath",()=>i.makePath),o.export(r,"makeImage",()=>i.makeImage),o.export(r,"mergePath",()=>i.mergePath),o.export(r,"resizePath",()=>i.resizePath),o.export(r,"createIcon",()=>i.createIcon),o.export(r,"updateProps",()=>i.updateProps),o.export(r,"initProps",()=>i.initProps),o.export(r,"getTransform",()=>i.getTransform),o.export(r,"clipPointsByRect",()=>i.clipPointsByRect),o.export(r,"clipRectByRect",()=>i.clipRectByRect),o.export(r,"registerShape",()=>i.registerShape),o.export(r,"getShapeClass",()=>i.getShapeClass),o.export(r,"Group",()=>i.Group),o.export(r,"Image",()=>i.Image),o.export(r,"Text",()=>i.Text),o.export(r,"Circle",()=>i.Circle),o.export(r,"Ellipse",()=>i.Ellipse),o.export(r,"Sector",()=>i.Sector),o.export(r,"Ring",()=>i.Ring),o.export(r,"Polygon",()=>i.Polygon),o.export(r,"Polyline",()=>i.Polyline),o.export(r,"Rect",()=>i.Rect),o.export(r,"Line",()=>i.Line),o.export(r,"BezierCurve",()=>i.BezierCurve),o.export(r,"Arc",()=>i.Arc),o.export(r,"IncrementalDisplayable",()=>i.IncrementalDisplayable),o.export(r,"CompoundPath",()=>i.CompoundPath),o.export(r,"LinearGradient",()=>i.LinearGradient),o.export(r,"RadialGradient",()=>i.RadialGradient),o.export(r,"BoundingRect",()=>i.BoundingRect);var i=e("../../util/graphic.js")},{"../../util/graphic.js":"8P0f6","@parcel/transformer-js/src/esmodule-helpers.js":"j9EeU"}],"8SOUi":[function(e,t,r,a){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"addCommas",()=>i.addCommas),o.export(r,"toCamelCase",()=>i.toCamelCase),o.export(r,"normalizeCssArray",()=>i.normalizeCssArray),o.export(r,"encodeHTML",()=>i.encodeHTML),o.export(r,"formatTpl",()=>i.formatTpl),o.export(r,"getTooltipMarker",()=>i.getTooltipMarker),o.export(r,"formatTime",()=>i.formatTime),o.export(r,"capitalFirst",()=>i.capitalFirst),o.export(r,"truncateText",()=>i.truncateText),o.export(r,"getTextRect",()=>i.getTextRect);var i=e("../../util/format.js")},{"../../util/format.js":"8zRkm","@parcel/transformer-js/src/esmodule-helpers.js":"j9EeU"}],b3q5k:[function(e,t,r,a){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"map",()=>i.map),o.export(r,"each",()=>i.each),o.export(r,"indexOf",()=>i.indexOf),o.export(r,"inherits",()=>i.inherits),o.export(r,"reduce",()=>i.reduce),o.export(r,"filter",()=>i.filter),o.export(r,"bind",()=>i.bind),o.export(r,"curry",()=>i.curry),o.export(r,"isArray",()=>i.isArray),o.export(r,"isString",()=>i.isString),o.export(r,"isObject",()=>i.isObject),o.export(r,"isFunction",()=>i.isFunction),o.export(r,"extend",()=>i.extend),o.export(r,"defaults",()=>i.defaults),o.export(r,"clone",()=>i.clone),o.export(r,"merge",()=>i.merge);var i=e("zrender/lib/core/util.js")},{"zrender/lib/core/util.js":"ko4fs","@parcel/transformer-js/src/esmodule-helpers.js":"j9EeU"}],kO9EI:[function(e,t,r,a){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"installLabelLayout",()=>p);var i=e("../util/model.js"),n=e("./LabelManager.js"),l=o.interopDefault(n),s=(0,i.makeInner)();function p(e){e.registerUpdateLifecycle("series:beforeupdate",function(e,t,r){var a=s(t).labelManager;a||(a=s(t).labelManager=new(0,l.default)),a.clearLabels()}),e.registerUpdateLifecycle("series:layoutlabels",function(e,t,r){var a=s(t).labelManager;r.updatedSeries.forEach(function(e){a.addLabelsOfSeries(t.getViewOfSeriesModel(e))}),a.updateLayoutConfig(t),a.layout(t),a.processLabelsOverall()})}},{"../util/model.js":"kpSaL","./LabelManager.js":"7rtoT","@parcel/transformer-js/src/esmodule-helpers.js":"j9EeU"}],"7rtoT":[function(e,t,r,a){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r);var i=e("../util/graphic.js"),n=e("../util/innerStore.js"),l=e("../util/number.js"),s=e("zrender/lib/core/Transformable.js"),p=o.interopDefault(s),u=e("./labelGuideHelper.js"),d=e("../util/model.js"),c=e("zrender/lib/core/util.js"),f=e("./labelLayoutHelper.js"),x=e("./labelStyle.js"),m=e("zrender/lib/contain/util.js"),j=["align","verticalAlign","width","height","fontSize"],g=new(0,p.default),h=(0,d.makeInner)(),b=(0,d.makeInner)();function y(e,t,r){for(var a=0;a<r.length;a++){var o=r[a];null!=t[o]&&(e[o]=t[o])}}var v=["x","y","rotation"];r.default=function(){function e(){this._labelList=[],this._chartViewList=[]}return e.prototype.clearLabels=function(){this._labelList=[],this._chartViewList=[]},e.prototype._addLabel=function(e,t,r,a,o){var n,l=a.style,s=a.__hostTarget.textConfig||{},p=a.getComputedTransform(),u=a.getBoundingRect().plain();i.BoundingRect.applyTransform(u,u,p),p?g.setLocalTransform(p):(g.x=g.y=g.rotation=g.originX=g.originY=0,g.scaleX=g.scaleY=1),g.rotation=(0,m.normalizeRadian)(g.rotation);var d=a.__hostTarget;if(d){n=d.getBoundingRect().plain();var c=d.getComputedTransform();i.BoundingRect.applyTransform(n,n,c)}var f=n&&d.getTextGuideLine();this._labelList.push({label:a,labelLine:f,seriesModel:r,dataIndex:e,dataType:t,layoutOption:o,computedLayoutOption:null,rect:u,hostRect:n,priority:n?n.width*n.height:0,defaultAttr:{ignore:a.ignore,labelGuideIgnore:f&&f.ignore,x:g.x,y:g.y,scaleX:g.scaleX,scaleY:g.scaleY,rotation:g.rotation,style:{x:l.x,y:l.y,align:l.align,verticalAlign:l.verticalAlign,width:l.width,height:l.height,fontSize:l.fontSize},cursor:a.cursor,attachedPos:s.position,attachedRot:s.rotation}})},e.prototype.addLabelsOfSeries=function(e){var t=this;this._chartViewList.push(e);var r=e.__model,a=r.get("labelLayout");((0,c.isFunction)(a)||(0,c.keys)(a).length)&&e.group.traverse(function(e){if(e.ignore)return!0;var o=e.getTextContent(),i=(0,n.getECData)(e);o&&!o.disableLabelLayout&&t._addLabel(i.dataIndex,i.dataType,r,o,a)})},e.prototype.updateLayoutConfig=function(e){for(var t=e.getWidth(),r=e.getHeight(),a=0;a<this._labelList.length;a++){var o=this._labelList[a],i=o.label,n=i.__hostTarget,s=o.defaultAttr,p=void 0;p=(p=(0,c.isFunction)(o.layoutOption)?o.layoutOption(function(e,t){var r=e.label,a=t&&t.getTextGuideLine();return{dataIndex:e.dataIndex,dataType:e.dataType,seriesIndex:e.seriesModel.seriesIndex,text:e.label.style.text,rect:e.hostRect,labelRect:e.rect,align:r.style.align,verticalAlign:r.style.verticalAlign,labelLinePoints:function(e){if(e){for(var t=[],r=0;r<e.length;r++)t.push(e[r].slice());return t}}(a&&a.shape.points)}}(o,n)):o.layoutOption)||{},o.computedLayoutOption=p;var d=Math.PI/180;n&&n.setTextConfig({local:!1,position:null!=p.x||null!=p.y?null:s.attachedPos,rotation:null!=p.rotate?p.rotate*d:s.attachedRot,offset:[p.dx||0,p.dy||0]});var f=!1;if(null!=p.x?(i.x=(0,l.parsePercent)(p.x,t),i.setStyle("x",0),f=!0):(i.x=s.x,i.setStyle("x",s.style.x)),null!=p.y?(i.y=(0,l.parsePercent)(p.y,r),i.setStyle("y",0),f=!0):(i.y=s.y,i.setStyle("y",s.style.y)),p.labelLinePoints){var x=n.getTextGuideLine();x&&(x.setShape({points:p.labelLinePoints}),f=!1)}h(i).needsUpdateLabelLine=f,i.rotation=null!=p.rotate?p.rotate*d:s.rotation,i.scaleX=s.scaleX,i.scaleY=s.scaleY;for(var m=0;m<j.length;m++){var g=j[m];i.setStyle(g,null!=p[g]?p[g]:s.style[g])}if(p.draggable){if(i.draggable=!0,i.cursor="move",n){var b=o.seriesModel;null!=o.dataIndex&&(b=o.seriesModel.getData(o.dataType).getItemModel(o.dataIndex)),i.on("drag",function(e,t){return function(){(0,u.updateLabelLinePoints)(e,t)}}(n,b.getModel("labelLine")))}}else i.off("drag"),i.cursor=s.cursor}},e.prototype.layout=function(e){var t=e.getWidth(),r=e.getHeight(),a=(0,f.prepareLayoutList)(this._labelList),o=(0,c.filter)(a,function(e){return"shiftX"===e.layoutOption.moveOverlap}),i=(0,c.filter)(a,function(e){return"shiftY"===e.layoutOption.moveOverlap});(0,f.shiftLayoutOnX)(o,0,t),(0,f.shiftLayoutOnY)(i,0,r);var n=(0,c.filter)(a,function(e){return e.layoutOption.hideOverlap});(0,f.hideOverlap)(n)},e.prototype.processLabelsOverall=function(){var e=this;(0,c.each)(this._chartViewList,function(t){var r=t.__model,a=t.ignoreLabelLineUpdate,o=r.isAnimationEnabled();t.group.traverse(function(t){if(t.ignore&&!t.forceLabelAnimation)return!0;var i=!a,n=t.getTextContent();!i&&n&&(i=h(n).needsUpdateLabelLine),i&&e._updateLabelLine(t,r),o&&e._animateLabels(t,r)})})},e.prototype._updateLabelLine=function(e,t){var r=e.getTextContent(),a=(0,n.getECData)(e),o=a.dataIndex;if(r&&null!=o){var i=t.getData(a.dataType),l=i.getItemModel(o),s={},p=i.getItemVisual(o,"style");p&&(s.stroke=p[i.getVisual("drawType")]);var d=l.getModel("labelLine");(0,u.setLabelLineStyle)(e,(0,u.getLabelLineStatesModels)(l),s),(0,u.updateLabelLinePoints)(e,d)}},e.prototype._animateLabels=function(e,t){var r=e.getTextContent(),a=e.getTextGuideLine();if(r&&(e.forceLabelAnimation||!r.ignore&&!r.invisible&&!e.disableLabelAnimation&&!(0,i.isElementRemoved)(e))){var o=h(r),l=o.oldLayout,s=(0,n.getECData)(e),p=s.dataIndex,u={x:r.x,y:r.y,rotation:r.rotation},d=t.getData(s.dataType);if(l){r.attr(l);var f=e.prevStates;f&&((0,c.indexOf)(f,"select")>=0&&r.attr(o.oldLayoutSelect),(0,c.indexOf)(f,"emphasis")>=0&&r.attr(o.oldLayoutEmphasis)),(0,i.updateProps)(r,u,t,p)}else if(r.attr(u),!(0,x.labelInner)(r).valueAnimation){var m=(0,c.retrieve2)(r.style.opacity,1);r.style.opacity=0,(0,i.initProps)(r,{style:{opacity:m}},t,p)}if(o.oldLayout=u,r.states.select){var j=o.oldLayoutSelect={};y(j,u,v),y(j,r.states.select,v)}if(r.states.emphasis){var g=o.oldLayoutEmphasis={};y(g,u,v),y(g,r.states.emphasis,v)}(0,x.animateLabelValue)(r,p,d,t,t)}if(a&&!a.ignore&&!a.invisible){var o=b(a),l=o.oldLayout,L={points:a.shape.points};l?(a.attr({shape:l}),(0,i.updateProps)(a,{shape:L},t)):(a.setShape(L),a.style.strokePercent=0,(0,i.initProps)(a,{style:{strokePercent:1}},t)),o.oldLayout=L}},e}()},{"../util/graphic.js":"8P0f6","../util/innerStore.js":"eG3z9","../util/number.js":"1LgPR","zrender/lib/core/Transformable.js":"b756y","./labelGuideHelper.js":"hqeK4","../util/model.js":"kpSaL","zrender/lib/core/util.js":"ko4fs","./labelLayoutHelper.js":"bh0w8","./labelStyle.js":"bUlXb","zrender/lib/contain/util.js":"g3iVj","@parcel/transformer-js/src/esmodule-helpers.js":"j9EeU"}]},[],0,"parcelRequiredcf9");