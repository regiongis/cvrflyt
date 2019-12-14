(window.webpackJsonpcvr_flyt_app=window.webpackJsonpcvr_flyt_app||[]).push([[0],{378:function(e,t){},438:function(e,t,a){e.exports=a(683)},443:function(e,t,a){},569:function(e,t,a){},597:function(e,t){},599:function(e,t){},634:function(e,t){},635:function(e,t){},679:function(e,t){},680:function(e,t){},683:function(e,t,a){"use strict";a.r(t);var n,r,o=a(0),l=a.n(o),i=a(17),s=a.n(i),c=(a(443),a(198)),u=a(11),m=a(34),d=a(32),p=a(42),h=a(43),f=a(49),v=a(44),g=a(760),k=a(191),y=a(183),b=a(6),E=a(770),O=a(766),D=a(83),w=a(404),C=a.n(w),j=a(102),S=a(174),N=a(384),T=a(98),x=a.n(T),F=(a(451),a(326)),M=a(765),Y=a(267),_=a.n(Y),L=a(405),P=a.n(L),H=a(406),V=a.n(H),B=a(407),A=a.n(B),J=a(268),K=a(48),R=a(769),U=a(64),I=a.n(U),W={width:"100%",height:"600px"},q=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={data:{}},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"renderMap",value:function(){var e=I.a.tileLayer.wms("https://services.kortforsyningen.dk/topo_skaermkort",{layers:"dtk_skaermkort_daempet",token:"d12107f70a3ee93153f313c7c502169a",format:"image/png",attribution:'&copy; <a target="_blank" href="https://download.kortforsyningen.dk/content/vilk%C3%A5r-og-betingelser">Styrelsen for Dataforsyning og Effektivisering</a>'});r=I.a.map("map",{center:[55.2,12.2],zoom:8,layers:[e]});var t=I.a.control({position:"bottomleft"});t.onAdd=function(e){var t=I.a.DomUtil.create("div","legend");return t.innerHTML+="<h4>Signaturforklaring</h4>",t.innerHTML+='<i style="background:#0020d7"></i><span>NyStartet</span><br>',t.innerHTML+='<i style="background:#d79700"></i><span>Fraflyttet</span><br>',t.innerHTML+='<i style="background:#298b30"></i><span>Tilflyttet</span><br>',t.innerHTML+='<i style="background:#c10a0a"></i><span>Oph\xf8rt</span><br>',t},t.addTo(r),I.a.control.scale().addTo(r)}},{key:"renderFeatures",value:function(e){var t=function(e){return I.a.icon({iconUrl:function(e){switch(e){case"Tilflytter":return"img/t.png";case"Fraflytter":return"img/f.png";case"Nystartet":return"img/n.png";case"Oph\xf8rt":return"img/o.png"}}(e),shadowUrl:"img/shadow.png",iconAnchor:[16,37],shadowAnchor:[20,35],popupAnchor:[0,-30]})};void 0!==n&&r.removeLayer(n),n=I.a.geoJSON(e,{onEachFeature:function(e,t){t.bindPopup("<strong>"+e.properties.status+"</strong></br><hr>"+e.properties.navn+'</br><a href="https://datacvr.virk.dk/data/visenhed?enhedstype=produktionsenhed&id='+e.properties["p-nummer"]+'" target="_blank">Se mere her</a>')},pointToLayer:function(e,a){return I.a.marker(a,{icon:t(e.properties.status)})}}).addTo(r);var a=function(e){var t=e.filter((function(e){return["Nystartet",""].includes(e.properties.status)}));return 0===t.length?null:t[0].geometry.coordinates}(e);a?r.setView([a[1],a[0]]):r.fitBounds(n.getBounds())}},{key:"componentDidMount",value:function(){this.renderMap(),this.props.data.length>0&&this.renderFeatures(this.props.data)}},{key:"componentDidUpdate",value:function(){console.log("componentdidupdate"),this.props.data.length>0?this.renderFeatures(this.props.data):console.log("props empty")}},{key:"renderMarkers",value:function(e){var t=function(e){return I.a.icon({iconUrl:function(e){switch(e){case"Tilflytter":return"img/t.png";case"Fraflytter":return"img/f.png";case"Nystartet":return"img/n.png";case"Oph\xf8rt":return"img/o.png"}}(e),shadowUrl:"img/shadow.png",iconAnchor:[16,37],shadowAnchor:[20,35],popupAnchor:[0,-30]})};void 0!==n&&r.removeLayer(n),n=I.a.geoJSON(e,{onEachFeature:function(e,t){t.bindPopup("<strong>"+e.properties.status+"</strong></br><hr>"+e.properties.navn+'</br><a href="https://datacvr.virk.dk/data/visenhed?enhedstype=produktionsenhed&id='+e.properties["p-nummer"]+'" target="_blank">Se mere her</a>')},pointToLayer:function(e,a){return I.a.marker(a,{icon:t(e.properties.status)})}}).addTo(r)}},{key:"render",value:function(){return l.a.createElement("div",{id:"map",style:W})}}]),t}(l.a.Component),G=a(149),z=a(14),X=a(133),$=function(e){var t,a=e.value,n="Fraflytter"===(t=a)?"orange":"Tilflytter"===t?"green":"Nystartet"===t?"blue":"Oph\xf8rt"===t?"red":"blue";return l.a.createElement("b",{style:{color:n}},a)},Q=function(e){return l.a.createElement(z.b,Object.assign({formatterComponent:$},e))},Z=function(e){var t=e.value,a="https://datacvr.virk.dk/data/visenhed?enhedstype=produktionsenhed&id=".concat(t);return l.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},t)},ee=function(e){return l.a.createElement(z.b,Object.assign({formatterComponent:Z},e))},te=function(e){return e.keyIndex},ae=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={rows:[],data:[],sorting:[{columnName:"hovedbranche",direction:"desc"}],statusColumns:["status"],pcols:["p-nummer"],grouping:[{columnName:"status"}]},a.changeSorting=function(e){return a.setState({sorting:e})},a.changeGrouping=function(e){return a.setState({grouping:e})},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this.state.statusColumns,t=this.state.pcols,a=this.props.data.map((function(e,t){return e.properties.keyIndex=t,[81,230,235,245,250].includes(e.properties.virksomhedsform)&&console.log(e.properties.virksomhedsform,": ",e.properties.navn),e.properties}));return l.a.createElement(G.a,{style:{height:"600px"}},l.a.createElement(X.a,{rows:a,columns:[{name:"status",title:"Status"},{name:"cvr-nummer",title:"CVR nummer"},{name:"p-nummer",title:"P nummer"},{name:"hovedbranche",title:"Branche"},{name:"navn",title:"Virksomhedsnavn"},{name:"fuldt ansvarlige deltagere",title:"Kontaktperson"},{name:"kommunekode",title:"Kommunekode"},{name:"vejnavn",title:"Vejnavn"},{name:"husnummer",title:"Husnummer"},{name:"postnummer",title:"Postnummer"},{name:"postdistrikt",title:"By"},{name:"emailadresse",title:"Email"},{name:"indl\xe6st dato",title:"Indl\xe6st dato"}],getRowId:te,style:{height:"100%"}},l.a.createElement(z.d,{defaultFilters:[]}),l.a.createElement(z.g,null),l.a.createElement(z.k,{defaultSorting:[{columnName:"status",direction:"desc"}]}),l.a.createElement(z.h,null),l.a.createElement(Q,{for:e}),l.a.createElement(ee,{for:t}),l.a.createElement(X.e,{height:"auto"}),l.a.createElement(X.b,{defaultColumnWidths:[{columnName:"status",width:120},{columnName:"cvr-nummer",width:120},{columnName:"p-nummer",width:120},{columnName:"hovedbranche",width:150},{columnName:"navn",width:150},{columnName:"fuldt ansvarlige deltagere",width:120},{columnName:"kommunekode",width:120},{columnName:"vejnavn",width:120},{columnName:"husnummer",width:120},{columnName:"postnummer",width:120},{columnName:"postdistrikt",width:120},{columnName:"emailadresse",width:120},{columnName:"indl\xe6st dato",width:120}]}),l.a.createElement(X.d,{showSortingControls:!0}),l.a.createElement(X.c,null)))}}]),t}(l.a.PureComponent),ne=a(768),re=a(772),oe=a(775),le=a(408),ie=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).state={clicked:!1,style:{data:{fill:"tomato"}}},e}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=function(e){var t=e.map((function(e){return e.properties})),a=t.filter((function(e){return"Tilflytter"===e.status})).length;return[{x:"Fraflytter",y:t.filter((function(e){return"Fraflytter"===e.status})).length},{x:"Tilflytter",y:a},{x:"Oph\xf8rt",y:t.filter((function(e){return"Oph\xf8rt"===e.status})).length},{x:"Nystartet",y:t.filter((function(e){return"Nystartet"===e.status})).length}]}(this.props.data);return l.a.createElement("div",null,l.a.createElement(G.a,{style:{height:"600px"}},l.a.createElement(ne.a,{height:200,width:200,domainPadding:{x:50,y:[0,20]},theme:re.a.material},l.a.createElement(oe.a,{dataComponent:l.a.createElement(le.a,{events:{onMouseOver:function(){var t=e.state.clicked?"blue":"tomato",a=!e.state.clicked;e.setState({clicked:a,style:{data:{fill:t}}})}}}),style:{data:{fill:function(e){return"Fraflytter"===e.x?"orange":"Tilflytter"===e.x?"green":"Oph\xf8rt"===e.x?"red":"Nystartet"===e.x?"blue":void 0}}},data:t,labels:function(e){return e.y}}))))}}]),t}(l.a.Component),se=a(403),ce=a.n(se),ue=["Name","Company","City","State"],me=[["Joe James","Test Corp","Yonkers","NY"],["John Walsh","Test Corp","Hartford","CT"],["Bob Herm","Test Corp","Tampa","FL"],["James Houston","Test Corp","Dallas","TX"]],de=(l.a.PureComponent,a(569),a(15)),pe=a.n(de),he=a(205),fe=a.n(he),ve=a(273),ge=a.n(ve);x.a.locale("da");var ke=fe.a.ExcelFile,ye=fe.a.ExcelFile.ExcelSheet,be=fe.a.ExcelFile.ExcelColumn,Ee=Object(S.a)({typography:{useNextVariants:!0,suppressDeprecationWarnings:!0}});function Oe(e){return l.a.createElement("div",null,e.children)}var De=function(e){function t(e){var a;return Object(m.a)(this,t),a=Object(p.a)(this,Object(h.a)(t).call(this,e)),console.log("komrn ",a.props.komnr),a.state={value:0,startDate:x()().subtract(1,"months").startOf("month").format("YYYY-MM-DD"),endDate:x()().subtract(1,"months").endOf("month").format("YYYY-MM-DD"),data:[],filteredData:[],kommuner:[],komkode:a.props.komnr,Fraflytter:!0,Tilflytter:!0,"Oph\xf8rt":!0,Nystartet:!0,csvData:[],loading:!0,completed:0,canSendRequest:!1},a.theData={},a.handleChange=a.handleChange.bind(Object(f.a)(a)),a.handleStart=a.handleStart.bind(Object(f.a)(a)),a.handleEnd=a.handleEnd.bind(Object(f.a)(a)),a.handleSelect=a.handleSelect.bind(Object(f.a)(a)),a.handleChecked=a.handleChecked.bind(Object(f.a)(a)),a.progress=a.progress.bind(Object(f.a)(a)),a.handleDoneClick=a.handleDoneClick.bind(Object(f.a)(a)),a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"progress",value:function(){var e=this.state.completed;this.setState({completed:e>=100?0:e+1})}},{key:"getCsv",value:function(){return this.state.data.map((function(e){var t=e.properties["fuldt ansvarlige deltagere"];return null!==t&&t.length>0&&(e.properties["fuldt ansvarlige deltagere"]=t.replace(/"/g,"")),e.properties}))}},{key:"filterData",value:function(e){var t=this.state,a=t.Fraflytter,n=t.Tilflytter,r=t.Oph\u00f8rt,o=t.Nystartet,l=[];return a&&l.push("Fraflytter"),n&&l.push("Tilflytter"),r&&l.push("Oph\xf8rt"),o&&l.push("Nystartet"),l.indexOf(e.properties.status)>-1}},{key:"getKommuner",value:function(){var e=this;ge.a.ajax({url:"https://drayton.mapcentia.com/api/v1/sql/ballerup?q=select right(komkode, 3)::int komkode, komnavn from data.kommune group by komkode, komnavn order by komnavn",type:"GET",dataType:"jsonp",success:function(t){var a=t.features.map((function(e){return e.properties}));e.setState((function(e){return{kommuner:a}}))}})}},{key:"getData",value:function(e,t,a){this.setState((function(e){return{csvData:[],loading:!0}}));var n=this;if(e){var r="https://drayton.mapcentia.com/api/v1/sql/ballerup?q=SELECT * FROM cvr.flyt_fad_dev("+e+",'2019-08-01','2019-08-31')&srs=4326";console.log(r),ge.a.ajax({url:r,type:"GET",dataType:"jsonp",success:function(e){n.setState((function(t){return{data:e.features}}));var t=e.features.map((function(e){return e.properties}));n.setState((function(e){return{csvData:t,loading:!1}}))}})}else this.setState({loading:!1})}},{key:"handleChecked",value:function(e){var t=this;e.persist();var a=this.state,n=a.data,r=a.Fraflytter,o=a.Tilflytter,l=a.Oph\u00f8rt,i=a.Nystartet;this.setState((function(t){return Object(u.a)({},e.target.value,e.target.checked)}),(function(){r=t.state.Fraflytter,o=t.state.Tilflytter,l=t.state.Oph\u00f8rt,i=t.state.Nystartet}));var s=[];r&&s.push("Fraflytter"),o&&s.push("Tilflytter"),l&&s.push("Oph\xf8rt"),i&&s.push("Nystartet");var c=n.filter((function(e){return s.indexOf(e.properties.status)>-1}));this.setState({data:c})}},{key:"handleSelect",value:function(e){e.persist(),this.setState((function(t){return{komkode:e.target.value}}))}},{key:"componentDidMount",value:function(){var e=this.state,t=e.komkode,a=e.startDate,n=e.endDate;this.getData(t,a,n),this.getKommuner()}},{key:"componentWillUnmount",value:function(){}},{key:"handleChange",value:function(e,t){this.setState({value:t})}},{key:"handleDoneClick",value:function(){var e=this.state,t=e.komkode,a=e.startDate,n=e.endDate;this.getData(t,a,n),console.log("before navigating"),Object(c.b)("/".concat(t))}},{key:"handleStart",value:function(e){this.setState({startDate:e.format("YYYY-MM-DD")})}},{key:"handleEnd",value:function(e){this.setState({endDate:e.format("YYYY-MM-DD")})}},{key:"render",value:function(){var e=this;console.log("props from router => ",this.props.komnr);var t=this.state,a=t.value,n=t.startDate,r=t.endDate,o=t.kommuner,i=t.komkode;return l.a.createElement(N.a,{theme:Ee},l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:this.state.loading?"loading":""}),l.a.createElement("div",{className:""},l.a.createElement(g.a,{position:"static",color:"default"},l.a.createElement(k.a,null,l.a.createElement(M.a,{container:!0},l.a.createElement(M.a,{item:!0,xs:2},l.a.createElement(j.a,{variant:"h6",color:"inherit"},"CVR Flyttem\xf8nster")),l.a.createElement(M.a,{item:!0,xs:2},l.a.createElement("form",{className:pe.a.container,noValidate:!0,autoComplete:"off"},l.a.createElement(F.a,{id:"standard-select",select:!0,label:"Kommune",placeholder:"Placeholder",className:pe.a.textField,value:this.state.komkode||"",onChange:this.handleSelect,SelectProps:{native:!0},helperText:"",InputLabelProps:{shrink:!0}},o.map((function(t){return e.state.komkode===t.komkode&&"selected"&&console.log(t.komnavn),l.a.createElement("option",{key:t.komkode,value:t.komkode},t.komnavn)}))))),l.a.createElement(M.a,{item:!0,xs:2},l.a.createElement(K.a,{utils:J.a,locale:"da",moment:x.a},l.a.createElement(R.a,{value:n,label:"Startdato",format:"DD MMM YYYY",onChange:this.handleStart}))),l.a.createElement(M.a,{item:!0,xs:2},l.a.createElement(K.a,{utils:J.a},l.a.createElement(R.a,{value:r,label:"Slutdato",format:"DD MMM YYYY",onChange:this.handleEnd}))),l.a.createElement(M.a,{item:!0,xs:2},l.a.createElement(D.a,{"arial-label":"Done",onClick:this.handleDoneClick},l.a.createElement(C.a,null))),l.a.createElement(M.a,{item:!0,xs:2},this.state.csvData.length>0&&l.a.createElement(ke,{element:l.a.createElement(D.a,{"arial-label":"Excel"},l.a.createElement(_.a,null)),filename:"export_"+i+"_"+n+"_"+r},l.a.createElement(ye,{data:this.state.csvData,name:"CVR"},l.a.createElement(be,{label:"Status",value:"status"}),l.a.createElement(be,{label:"CVR nummer",value:"cvr-nummer"}),l.a.createElement(be,{label:"P nummer",value:"p-nummer"}),l.a.createElement(be,{label:"Branche",value:"hovedbranche"}),l.a.createElement(be,{label:"Virksomhedsnavn",value:"navn"}),l.a.createElement(be,{label:"Kontaktperson",value:"fuldt ansvarlige deltagere"}),l.a.createElement(be,{label:"Kommunekode",value:"kommunekode"}),l.a.createElement(be,{label:"vejnavn",value:"vejnavn"}),l.a.createElement(be,{label:"Husnummer",value:"husnummer"}),l.a.createElement(be,{label:"Postnummer",value:"postnummer"}),l.a.createElement(be,{label:"By",value:"postdistrikt"}),l.a.createElement(be,{label:"Email",value:"emailadresse"}),l.a.createElement(be,{label:"Indl\xe6st dato",value:"indl\xe6st dato"}))))))),l.a.createElement(E.a,{value:a,onChange:this.handleChange,centered:!0},l.a.createElement(O.a,{icon:l.a.createElement(y.a,{title:"Kort"},l.a.createElement(P.a,null))}),l.a.createElement(O.a,{icon:l.a.createElement(y.a,{title:"Tabel"},l.a.createElement(V.a,null)),"aria-label":"Tabel"}),l.a.createElement(O.a,{icon:l.a.createElement(y.a,{title:"Grapher"},l.a.createElement(A.a,null))})),0===a&&l.a.createElement(Oe,null,l.a.createElement(q,{data:this.state.data})),1===a&&l.a.createElement(Oe,null,l.a.createElement(ae,{data:this.state.data})),2===a&&l.a.createElement(Oe,null,l.a.createElement(ie,{data:this.state.data})))))}}]),t}(o.Component),we=Object(b.a)((function(e){return{root:{flexGrow:1},container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},dense:{marginTop:19},menu:{width:300},progress:{margin:2*e.spacing(1)}}}))(De),Ce=function(){return l.a.createElement(c.a,null,l.a.createElement(we,{path:"/"}),l.a.createElement(we,{path:"/:komnr"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(Ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[438,1,2]]]);
//# sourceMappingURL=main.99cac610.chunk.js.map