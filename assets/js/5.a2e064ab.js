(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{167:function(t,e,a){"use strict";var n=a(7),r=a(23),i=a(66);n(n.P+n.F*a(4)(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{toJSON:function(t){var e=r(this),a=i(e);return"number"!=typeof a||isFinite(a)?e.toISOString():null}})},34:function(t,e,a){"use strict";a.r(e);a(167);var n={props:["date","endDate","time","endTime"],data:function(){return{dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"]}},computed:{datetime:function(){var t=this.date||this.$page.frontmatter.date;t=new Date(t);var e=this.dayNames[t.getUTCDay()],a=this.monthNames[t.getUTCMonth()],n="".concat(e,", ").concat(t.getUTCDate()," ").concat(a),r=this.endDate||this.$page.frontmatter.endDate;r&&(r=new Date(r)).toJSON()!==t.toJSON()&&(e=this.dayNames[r.getUTCDay()],n+=" - ".concat(e,", ").concat(r.getUTCDate()," ").concat(a));var i=this.time||this.$page.frontmatter.time;i&&(n+=" @ ".concat(i));var o=this.endTime||this.$page.frontmatter.endTime;return o&&i&&o!==i&&(n+="-".concat(o)),n}}},r=a(0),i=Object(r.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("p",{staticClass:"datetime"},[this._v("\n  "+this._s(this.datetime)+"\n  "),this._t("default")],2)},[],!1,null,null,null);e.default=i.exports}}]);