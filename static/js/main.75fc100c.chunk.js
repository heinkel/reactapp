(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},19:function(e,t,a){e.exports=a.p+"static/media/no-image.af879c88.jpg"},24:function(e,t,a){e.exports=a.p+"static/media/noprofile.2222a1cb.png"},30:function(e,t,a){e.exports=a(40)},35:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),i=a(17),o=a.n(i),n=(a(35),a(2)),l=a(3),c=a(6),m=a(4),d=a(5),u=(a(13),a(7)),h=a.n(u),p=a(19),v=a.n(p),f=a(15),b=a(9),y=(a(22),a(18)),g=a(41),E=a(42),k=a(43),N=function(e){function t(){var e,a;Object(n.a)(this,t);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={size:70,value:0,strokewidth:4},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=10*this.props.value,t=.5*this.state.size,a=t-.5*this.state.strokewidth,s=2*Math.PI*a,i=e*s/100+" "+s,o={strokeWidth:this.state.strokewidth},n={strokeWidth:this.state.strokewidth,strokeDasharray:i},l="rotate(-90 "+t+","+t+")";return r.a.createElement(g.a,{className:"card-2",key:"donutchart",style:{border:"none"}},r.a.createElement(E.a,{style:{padding:"0"}},r.a.createElement("svg",{width:80,height:80,className:"donutchart"},r.a.createElement("circle",{r:a,cx:t,cy:t,transform:l,style:o,className:"donutchart-track"}),r.a.createElement("circle",{r:a,cx:t,cy:t,transform:l,style:n,className:"donutchart-indicator"}),r.a.createElement("text",{className:"donutchart-text",style:{textAnchor:"middle"}},r.a.createElement("tspan",{className:"donutchart-text-val",x:t-5,y:43},e+""),r.a.createElement("tspan",{className:"donutchart-text-percent",x:t+14,y:t-6},"%"))),r.a.createElement(k.a,{className:"chart-text"},"User Score")))}}]),t}(s.Component),w=a(14),O=a(44),j=function(e){function t(e){var a;Object(n.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={recomd:[],title:[]};var s="https://api.themoviedb.org/3/collection/"+a.props.collectionid.id+"?api_key=3f65479b1b805e16f59869747d8ef2bf";return h.a.ajax({url:s,success:function(e,t,s){var r=[],i=[],o=!0,n=!1,l=void 0;try{for(var c,m=e.parts.entries()[Symbol.iterator]();!(o=(c=m.next()).done);o=!0){var d=c.value,u=Object(w.a)(d,2),h=u[0],p=u[1];r[h]=p.poster_path,i[h]=p.title}}catch(v){n=!0,l=v}finally{try{o||null==m.return||m.return()}finally{if(n)throw l}}a.setState({recomd:r}),a.setState({title:i})},error:function(e,t,a){console.error("Failed to fetch data")}}),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=[],t=!0,a=!1,s=void 0;try{for(var i,o=this.state.title.entries()[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var n=i.value,l=Object(w.a)(n,2),c=l[0],m=l[1];null!=this.state.recomd[c]&&e.push(r.a.createElement(g.a,{className:"card-1",key:c,style:{border:"none",backgroundColor:"#3c4665"}},r.a.createElement(O.a,{width:"100%",src:"https://image.tmdb.org/t/p/w185"+this.state.recomd[c],alt:m,style:{borderRadius:"0px"}}),r.a.createElement(E.a,{style:{padding:"0"}},r.a.createElement(k.a,{className:"chart-text-1"},m))))}}catch(d){a=!0,s=d}finally{try{t||null==o.return||o.return()}finally{if(a)throw s}}return r.a.createElement(r.a.Fragment,null,e)}}]),t}(s.Component),S=a(45),x=a(24),_=a.n(x),M=function(e){function t(e){var a;Object(n.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={character:[],name:[],profile_path:[]};var s="https://api.themoviedb.org/3/movie/"+a.props.movieid+"/credits?api_key=3f65479b1b805e16f59869747d8ef2bf";return h.a.ajax({url:s,success:function(e,t,s){var r=[],i=[],o=[],n=e.cast.slice(0,5),l=!0,c=!1,m=void 0;try{for(var d,u=n.entries()[Symbol.iterator]();!(l=(d=u.next()).done);l=!0){var h=d.value,p=Object(w.a)(h,2),v=p[0],f=p[1];r[v]=null===f.character||void 0===f.character?"":f.character,i[v]=null===f.name||void 0===f.name?"":f.name,o[v]=null===f.profile_path||void 0===f.profile_path?"":f.profile_path}}catch(b){c=!0,m=b}finally{try{l||null==u.return||u.return()}finally{if(c)throw m}}a.setState({character:r}),a.setState({name:i}),a.setState({profile_path:o})},error:function(e,t,a){console.error("Failed to fetch data")}}),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=[],t=!0,a=!1,s=void 0;try{for(var i,o=this.state.profile_path.entries()[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var n=i.value,l=Object(w.a)(n,2),c=l[0],m=l[1],d=""===m?_.a:"https://image.tmdb.org/t/p/w185"+m;e.push(r.a.createElement(g.a,{className:"cast-img",key:c,style:{border:"none",marginRight:"1em"}},r.a.createElement(O.a,{src:d,alt:m,style:{borderRadius:"0px"}}),r.a.createElement(E.a,{style:{padding:"0"}},r.a.createElement(k.a,{className:"cast-title"},this.state.name[c]),r.a.createElement(S.a,{className:"cast-title cast-sub"},this.state.character[c]))))}}catch(u){a=!0,s=u}finally{try{t||null==o.return||o.return()}finally{if(a)throw s}}return r.a.createElement(r.a.Fragment,null,e)}}]),t}(s.Component),C=function(e){function t(e){var a;Object(n.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={director:[],story:[],writer:[]};var s="https://api.themoviedb.org/3/movie/"+a.props.movieid+"/credits?api_key=3f65479b1b805e16f59869747d8ef2bf";return h.a.ajax({url:s,success:function(e,t,s){var r=e.crew,i=[],o=[],n=[];r.forEach(function(e){"Director"===e.job?i.push(e.name):"Writer"===e.job?n.push(e.name):"Story"===e.job&&o.push(e.name)}),i=i.splice(0,1),n=n.splice(0,3),o=o.splice(0,1),a.setState({director:i}),a.setState({writer:n}),a.setState({story:o})},error:function(e,t,a){console.error("Failed to fetch data")}}),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"crew"},this.state.director.map(function(e){return r.a.createElement("div",{className:"col-6",key:e+"-director"},r.a.createElement("div",{className:"crew-job"},"Director"),r.a.createElement("div",{className:"crew-name"},e))}),this.state.writer.map(function(e){return r.a.createElement("div",{className:"col-6",key:e+"-writer"},r.a.createElement("div",{className:"crew-job"},"Writer"),r.a.createElement("div",{className:"crew-name"},e))}),this.state.story.map(function(e){return r.a.createElement("div",{className:"col-6",key:e+" story"},r.a.createElement("div",{className:"crew-job"},"Story"),r.a.createElement("div",{className:"crew-name"},e))}))}}]),t}(s.Component),L=function(e){function t(e){var a;Object(n.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={images:[]};var s="https://api.themoviedb.org/3/movie/"+a.props.movieid+"/images?api_key=3f65479b1b805e16f59869747d8ef2bf";return h.a.ajax({url:s,success:function(e,t,s){var r=e.backdrops.slice(0,4),i=[],o=!0,n=!1,l=void 0;try{for(var c,m=r.entries()[Symbol.iterator]();!(o=(c=m.next()).done);o=!0){var d=c.value,u=Object(w.a)(d,2),h=u[0],p=u[1];i[h]=p.file_path}}catch(v){n=!0,l=v}finally{try{o||null==m.return||m.return()}finally{if(n)throw l}}a.setState({images:i})},error:function(e,t,a){console.error("Failed to fetch data")}}),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=[],t=!0,a=!1,s=void 0;try{for(var i,o=this.state.images.entries()[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var n=i.value,l=Object(w.a)(n,2),c=l[0],m=l[1];e.push(r.a.createElement(g.a,{className:"card-3",key:c,style:{border:"none",backgroundColor:"#3C4665"}},r.a.createElement(O.a,{width:"100%",src:"https://image.tmdb.org/t/p/original"+m,alt:m})))}}catch(d){a=!0,s=d}finally{try{t||null==o.return||o.return()}finally{if(a)throw s}}return r.a.createElement(r.a.Fragment,null,e)}}]),t}(s.Component),W=a(28),F=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={isOpen:!1},a.closeModal=a.closeModal.bind(Object(b.a)(Object(b.a)(a))),a.updateFocus=a.updateFocus.bind(Object(b.a)(Object(b.a)(a))),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"openModal",value:function(){this.setState({isOpen:!0})}},{key:"closeModal",value:function(){this.setState({isOpen:!1}),"function"===typeof this.props.onClose&&this.props.onClose()}},{key:"keydownHandler",value:function(e){27===e.keyCode&&this.closeModal()}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keydownHandler.bind(this),!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keydownHandler)}},{key:"componentWillReceiveProps",value:function(e){this.setState({isOpen:e.isOpen})}},{key:"componentDidUpdate",value:function(){this.state.isOpen&&this.modal&&this.modal.focus()}},{key:"updateFocus",value:function(e){9===e.keyCode&&(e.preventDefault(),e.stopPropagation(),this.modal===document.activeElement?this.modalbtn.focus():this.modal.focus())}},{key:"getQueryString",value:function(e){var t="";for(var a in e)e.hasOwnProperty(a)&&null!==e[a]&&(t+=a+"="+e[a]+"&");return t.substr(0,t.length-1)}},{key:"getYoutubeUrl",value:function(e,t){return"//www.youtube.com/embed/"+t+"?"+this.getQueryString(e)}},{key:"getVimeoUrl",value:function(e,t){return"//player.vimeo.com/video/"+t+"?"+this.getQueryString(e)}},{key:"getYoukuUrl",value:function(e,t){return"//player.youku.com/embed/"+t+"?"+this.getQueryString(e)}},{key:"getVideoUrl",value:function(e,t){return"youtube"===e.channel?this.getYoutubeUrl(e.youtube,t):"vimeo"===e.channel?this.getVimeoUrl(e.vimeo,t):"youku"===e.channel?this.getYoukuUrl(e.youku,t):void 0}},{key:"getPadding",value:function(e){var t=e.split(":"),a=Number(t[0]);return 100*Number(t[1])/a+"%"}},{key:"render",value:function(){var e=this,t={paddingBottom:this.getPadding(this.props.ratio)};return r.a.createElement(W.a,{classNames:this.props.classNames.modalVideoEffect,timeout:this.props.animationSpeed},function(){return e.state.isOpen?r.a.createElement("div",{className:e.props.classNames.modalVideo,tabIndex:"-1",role:"dialog","aria-label":e.props.aria.openMessage,onClick:e.closeModal,ref:function(t){e.modal=t},onKeyDown:e.updateFocus},r.a.createElement("div",{className:e.props.classNames.modalVideoBody},r.a.createElement("div",{className:e.props.classNames.modalVideoInner},r.a.createElement("div",{className:e.props.classNames.modalVideoIframeWrap,style:t},r.a.createElement("button",{className:e.props.classNames.modalVideoCloseBtn,"aria-label":e.props.aria.dismissBtnMessage,ref:function(t){e.modalbtn=t},onKeyDown:e.updateFocus}),r.a.createElement("iframe",{src:e.getVideoUrl(e.props,e.props.videoId),frameBorder:"0",allowFullScreen:e.props.allowFullScreen,tabIndex:"-1",title:e.props.title}))))):null})}}]),t}(r.a.Component);F.defaultProps={channel:"youtube",isOpen:!1,youtube:{autoplay:1,cc_load_policy:1,color:null,controls:1,disablekb:0,enablejsapi:0,end:null,fs:1,h1:null,iv_load_policy:1,list:null,listType:null,loop:0,modestbranding:null,origin:null,playlist:null,playsinline:null,rel:0,showinfo:1,start:0,wmode:"transparent",theme:"dark"},ratio:"16:9",vimeo:{api:!1,autopause:!0,autoplay:!0,byline:!0,callback:null,color:null,height:null,loop:!1,maxheight:null,maxwidth:null,player_id:null,portrait:!0,title:!0,width:null,xhtml:!1},youku:{autoplay:1,show_related:0},allowFullScreen:!0,animationSpeed:300,classNames:{modalVideoEffect:"modal-video-effect",modalVideo:"modal-video",modalVideoClose:"modal-video-close",modalVideoBody:"modal-video-body",modalVideoInner:"modal-video-inner",modalVideoIframeWrap:"modal-video-movie-wrap",modalVideoCloseBtn:"modal-video-close-btn"},aria:{openMessage:"You just openned the modal video",dismissBtnMessage:"Close the modal by clicking here"}};var I=function(e){function t(e){var a;Object(n.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={isOpen:!1},a.openModal=a.openModal.bind(Object(b.a)(Object(b.a)(a)));var s=a.props.movieid,r=[],i=[],o="https://api.themoviedb.org/3/movie/"+s+"/videos?api_key=3f65479b1b805e16f59869747d8ef2bf&language=en-US";return h.a.ajax({url:o,success:function(e,t,s){e.results.forEach(function(e){"Trailer"===e.type&&(r.push(e.key),i.push(e.site.toLowerCase()))}),r=r.splice(0,1),i=i.splice(0,1),a.setState({trailer:r}),a.setState({channel:i})},error:function(e,t,a){console.error("Failed to fetch data")}}),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"openModal",value:function(){this.setState({isOpen:!0})}},{key:"render",value:function(){var e=this;return r.a.createElement(g.a,{className:"card-2",key:"trailer",style:{border:"none"}},r.a.createElement(F,{channel:this.state.channel+"",isOpen:this.state.isOpen,videoId:this.state.trailer,onClose:function(){return e.setState({isOpen:!1})},title:this.state.trailer}),r.a.createElement(E.a,{className:"trailer",style:{padding:"0"}},r.a.createElement("svg",{onClick:this.openModal,width:"70",height:"70"},r.a.createElement("circle",{cx:"35",cy:"35",r:"30",className:"circle"}),r.a.createElement("polygon",{className:"polygon",points:"28,18 47,35 28,52"})),r.a.createElement(k.a,{className:"trailer-text",style:{marginBottom:"0"}},"Play Trailer")))}}]),t}(s.Component),U=function(e){function t(e){var a;Object(n.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={apiKey:"3f65479b1b805e16f59869747d8ef2bf",detail:{},runtime:"",watchlist:!1};var s="https://api.themoviedb.org/3/movie/"+a.props.movieid+"?api_key=3f65479b1b805e16f59869747d8ef2bf&language=en-US";return h.a.ajax({url:s,success:function(e,t,s){a.setState({detail:e});var r=a.state.detail.runtime,i=Math.floor(r/60),o=r%60;a.setState({runtime:i+"h "+o+"m"})},error:function(e,t,a){console.error("Failed to fetch data")}}),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.existInWatchList()}},{key:"existInWatchList",value:function(){}},{key:"addWatchlist",value:function(){var e=localStorage.getItem("watchlist"),t=[];if(e){(t=JSON.parse(e)).push(this.state.detail),t=this.distinctWatchList(t,"id");var a=new Set(t);t=Array.from(a),localStorage.setItem("watchlist",JSON.stringify(t))}else t.push(this.state.detail),localStorage.setItem("watchlist",JSON.stringify(t));this.setState({watchlist:!0})}},{key:"distinctWatchList",value:function(e,t){return e.map(function(e){return e[t]}).map(function(e,t,a){return a.indexOf(e)===t&&t}).filter(function(t){return e[t]}).map(function(t){return e[t]})}},{key:"removeWatchList",value:function(){var e=localStorage.getItem("watchlist");e=JSON.parse(e),this.deleteWatchList(e,this.props.movieid),this.setState({watchlist:!1})}},{key:"deleteWatchList",value:function(e,t){var a=[];return localStorage.clear("watchlist"),e.forEach(function(e){e.id!==t&&a.push(e)}),localStorage.setItem("watchlist",JSON.stringify(a)),a}},{key:"render",value:function(){return r.a.createElement("div",{className:"popup-main"},r.a.createElement("div",{className:"popup-body"},r.a.createElement("div",{className:"left-section col-4",style:{padding:"0"}},r.a.createElement("div",{className:"detail-img"},r.a.createElement("button",{className:"backlist",onClick:this.props.close},r.a.createElement("svg",{height:"20",width:"20"},r.a.createElement("circle",{cx:"10",cy:"10",r:"8",stroke:"#50e3c2",strokeWidth:"1",fill:"transparent"}),r.a.createElement("polyline",{points:"12,6 7,10 12,14",style:{fill:"transparent",stroke:"#50e3c2",strokeWidth:"1"}})),"\xa0\xa0Back to the list"),r.a.createElement("img",{width:"100%",src:"https://image.tmdb.org/t/p/original"+this.state.detail.poster_path,alt:this.state.detail.title}),r.a.createElement("div",{className:"bookmark"},r.a.createElement("span",{className:"bookmark-icon"},r.a.createElement(f.b,null)),r.a.createElement("span",{className:"bookmark-text"},"Bookmark")),r.a.createElement("div",{className:"add-watchlist",onClick:!1===this.state.watchlist?this.addWatchlist.bind(this):this.removeWatchList.bind(this)},r.a.createElement("span",{className:"addwatch-icon"},r.a.createElement(f.d,{style:!0===this.state.watchlist?{color:"orange"}:{color:"white"}})),r.a.createElement("span",{className:"addwatch-text"},"Add Watchlist"))),r.a.createElement("h6",{className:"sub-header",style:{paddingLeft:"2em"}},null!=this.state.detail.belongs_to_collection&&"Related Movies"),r.a.createElement("div",{className:"container-fluid",style:{paddingLeft:"2em"}},r.a.createElement("div",{className:"row"},null!=this.state.detail.belongs_to_collection&&r.a.createElement(j,{collectionid:this.state.detail.belongs_to_collection})))),r.a.createElement("div",{className:"right-section"},r.a.createElement("h3",{className:"detail-header"},this.state.detail.title),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{style:{width:"100px"}},r.a.createElement(N,{value:this.state.detail.vote_average})),r.a.createElement("div",{style:{width:"100px"}},r.a.createElement(I,{movieid:this.props.movieid})),r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"textstyle-1"},"Genres"),r.a.createElement("td",{className:"textstyle-1 textstyle-2"},this.props.genre)),r.a.createElement("tr",null,r.a.createElement("td",{className:"textstyle-1"},"Release Year"),r.a.createElement("td",{className:"textstyle-1 textstyle-2"},this.props.release_date)),r.a.createElement("tr",null,r.a.createElement("td",{className:"textstyle-1"},"Duration"),r.a.createElement("td",{className:"textstyle-1 textstyle-2"},this.state.runtime))))))),r.a.createElement("hr",{className:"line-1"}),r.a.createElement("h6",{className:"sub-header"},"Overview"),r.a.createElement("div",{className:"overview"},r.a.createElement("p",null,this.state.detail.overview)),r.a.createElement("h6",{className:"sub-header"},"Feature Crew"),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement(C,{movieid:this.props.movieid}))),r.a.createElement("hr",{className:"line-1"}),r.a.createElement("h6",{className:"sub-header",style:{paddingTop:"2em"}},"Top Billed Cast"),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement(M,{movieid:this.props.movieid}))),r.a.createElement("hr",{className:"line-1"}),r.a.createElement("h6",{className:"sub-header",style:{paddingBottom:"1em"}},"Backgrounds"),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement(L,{movieid:this.props.movieid}))))))}}]),t}(s.Component),H=a(46),B=a(47),V=function(e){function t(e){var a;Object(n.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={genre:"",open:!1};var s="https://api.themoviedb.org/3/movie/"+a.props.movie.id+"?api_key=3f65479b1b805e16f59869747d8ef2bf&language=en-US";return h.a.ajax({url:s,success:function(e,t,s){var r=e.genres,i=[];r.forEach(function(e){i.push(e.name)}),a.setState({genre:i.join()})},error:function(e,t,a){console.error("Failed to fetch data")}}),a.openModal=a.openModal.bind(Object(b.a)(Object(b.a)(a))),a.closeModal=a.closeModal.bind(Object(b.a)(Object(b.a)(a))),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"openModal",value:function(){this.setState({open:!0})}},{key:"closeModal",value:function(){this.setState({open:!1})}},{key:"render",value:function(){return r.a.createElement(g.a,{className:"card-4",key:this.props.movie.id,style:{border:"none",backgroundColor:"#2b3247"}},r.a.createElement("div",{className:"cardoverlay"},r.a.createElement(O.a,{style:{borderRadius:"0px"},src:this.props.movie.poster_src,alt:this.props.movie.poster_src,width:"210px",height:"315px"}),r.a.createElement(H.a,{className:"overlay",onClick:this.openModal},r.a.createElement(k.a,{className:"overlay-title"},this.props.movie.title),r.a.createElement(B.a,{className:"overlay-text"},this.props.movie.overview))),r.a.createElement(E.a,{className:"cardbody-1",style:{padding:"0"}},r.a.createElement(k.a,{className:"cardtitle-1"},this.props.movie.title),r.a.createElement("div",{className:"cardsub-1"},"Genres:\xa0",r.a.createElement("span",{className:"cardsub-3"},this.state.genre)),r.a.createElement("div",{className:"cardsub-2"},"Year:\xa0",r.a.createElement("span",{className:"cardsub-3"},this.props.movie.release_date))),r.a.createElement("div",{className:"footer-vote"},this.props.movie.vote_average),r.a.createElement(y.a,{modal:!0,open:this.state.open,closeOnDocumentClick:!0,onClose:this.closeModal,lockScroll:!0},r.a.createElement(U,{movieid:this.props.movie.id,close:this.closeModal,genre:this.state.genre,release_date:this.props.movie.release_date})))}}]),t}(s.Component),P=function(e){function t(e){var a;Object(n.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={genre:"",open:!1,remove:!1};var s="https://api.themoviedb.org/3/movie/"+a.props.movie.id+"?api_key=3f65479b1b805e16f59869747d8ef2bf&language=en-US";return h.a.ajax({url:s,success:function(e,t,s){var r=e.genres,i=[];r.forEach(function(e){i.push(e.name)}),a.setState({genre:i.join()})},error:function(e,t,a){console.error("Failed to fetch data")}}),a.openModal=a.openModal.bind(Object(b.a)(Object(b.a)(a))),a.closeModal=a.closeModal.bind(Object(b.a)(Object(b.a)(a))),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"openModal",value:function(){this.setState({open:!0})}},{key:"closeModal",value:function(){this.setState({open:!1})}},{key:"removeWatchList",value:function(){var e=localStorage.getItem("watchlist");e=JSON.parse(e),this.distinctWatchList(e,this.props.movie.id),this.setState({remove:!0})}},{key:"distinctWatchList",value:function(e,t){var a=[];return localStorage.clear("watchlist"),e.forEach(function(e){e.id!==t&&a.push(e)}),localStorage.setItem("watchlist",JSON.stringify(a)),a}},{key:"render",value:function(){return r.a.createElement(g.a,{className:"card-4",key:this.props.movie.id,style:!1===this.state.remove?{border:"none",backgroundColor:"#2b3247"}:{border:"none",backgroundColor:"#2b3247",display:"none"}},r.a.createElement("div",{className:"cardoverlay"},r.a.createElement(O.a,{style:{borderRadius:"0px"},src:this.props.movie.poster_src,alt:this.props.movie.poster_src,width:"210px",height:"315px"}),r.a.createElement(H.a,{className:"overlay",onClick:this.openModal},r.a.createElement(k.a,{className:"overlay-title"},this.props.movie.title),r.a.createElement(B.a,{className:"overlay-text"},this.props.movie.overview))),r.a.createElement(E.a,{className:"cardbody-1",style:{padding:"0"}},r.a.createElement(k.a,{className:"cardtitle-1"},this.props.movie.title),r.a.createElement("div",{className:"cardsub-1"},"Genres:\xa0",r.a.createElement("span",{className:"cardsub-3"},this.state.genre)),r.a.createElement("div",{className:"cardsub-2"},"Year:\xa0",r.a.createElement("span",{className:"cardsub-3"},this.props.movie.release_date))),r.a.createElement("div",{className:"footer-vote"},this.props.movie.vote_average),r.a.createElement("div",{className:"footer-remove",onClick:this.removeWatchList.bind(this)},"Remove"),r.a.createElement(y.a,{modal:!0,open:this.state.open,closeOnDocumentClick:!0,onClose:this.closeModal,lockScroll:!0},r.a.createElement(U,{movieid:this.props.movie.id,close:this.closeModal,genre:this.state.genre,release_date:this.props.movie.release_date})))}}]),t}(s.Component),D=function(e){function t(){var e,a;Object(n.a)(this,t);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={movies:{},movieactive:"popular",tabactive:"movie",rows:[]},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){"movie"===this.state.tabactive?this.getPopularHandler():this.state.tabactive}},{key:"getPopularHandler",value:function(){var e=this;h.a.ajax({url:"https://api.themoviedb.org/3/movie/popular?api_key=3f65479b1b805e16f59869747d8ef2bf&language=en-US",success:function(t,a,s){var r=t.results;e.setMoviesList(r),e.getMoviesList(r)},error:function(e,t,a){console.error("Failed to fetch data")}}),this.setState({movieactive:"popular"})}},{key:"getTopRatedHandler",value:function(){var e=this;h.a.ajax({url:"https://api.themoviedb.org/3/movie/top_rated?api_key=3f65479b1b805e16f59869747d8ef2bf&language=en-US",success:function(t,a,s){var r=t.results;e.setMoviesList(r),e.getMoviesList(r)},error:function(e,t,a){console.error("Failed to fetch data")}}),this.setState({movieactive:"top-rated"})}},{key:"getUpcomingHandler",value:function(){var e=this;h.a.ajax({url:"https://api.themoviedb.org/3/movie/upcoming?api_key=3f65479b1b805e16f59869747d8ef2bf&language=en-US",success:function(t,a,s){var r=t.results;e.setMoviesList(r),e.getMoviesList(r)},error:function(e,t,a){console.error("Failed to fetch data")}}),this.setState({movieactive:"upcoming"})}},{key:"getNowPlayHandler",value:function(){var e=this;h.a.ajax({url:"https://api.themoviedb.org/3/movie/now_playing?api_key=3f65479b1b805e16f59869747d8ef2bf&language=en-US",success:function(t,a,s){var r=t.results;e.setMoviesList(r),e.getMoviesList(r)},error:function(e,t,a){console.error("Failed to fetch data")}}),this.setState({movieactive:"now-play"})}},{key:"setMoviesList",value:function(e){null!=e?(e.forEach(function(e){var t=e.release_date;e.release_date=t.substring(0,4)}),this.setState({movies:e})):this.setState({movies:{}})}},{key:"getMoviesList",value:function(e){var t=[];null!=e&&e.forEach(function(e){e.poster_src=null===e.poster_path?v.a:"https://image.tmdb.org/t/p/w500"+e.poster_path;var a=r.a.createElement(V,{key:e.id,movie:e});t.push(a)}),this.setState({rows:t})}},{key:"getWatchList",value:function(e){var t=[];null!=e&&e.forEach(function(e){e.poster_src=null===e.poster_path?v.a:"https://image.tmdb.org/t/p/w500"+e.poster_path;var a=r.a.createElement(P,{key:e.id,movie:e});t.push(a)}),this.setState({rows:t})}},{key:"openMovie",value:function(e){this.setState({tabactive:"movie"}),this.getPopularHandler()}},{key:"openWatchlist",value:function(e){this.setState({tabactive:"watchlist"});var t=[];(t=localStorage.getItem("watchlist"))&&(t=JSON.parse(t)),this.setMoviesList(t),this.getWatchList(t)}},{key:"searchWatchlistHandler",value:function(e){var t=e.target.value,a=[];a=localStorage.getItem("watchlist");var s=[];a&&(a=JSON.parse(a),""!==t&&(a.forEach(function(e){e.original_title.toLocaleLowerCase().indexOf(t)>=0&&s.push(e)}),a=s)),this.setMoviesList(a),this.getWatchList(a)}},{key:"searchMovieHandler",value:function(e){var t=this,a=e.target.value;if(""===a)this.getPopularHandler();else{var s="https://api.themoviedb.org/3/search/movie?api_key=3f65479b1b805e16f59869747d8ef2bf&query="+a;h.a.ajax({url:s,success:function(e){var a=e.results;t.setMoviesList(a),t.getMoviesList(a)},error:function(e,t,a){console.error("Failed to fetch data")}})}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"tab"},r.a.createElement("button",{className:"movie"===this.state.tabactive?"tablinks active":"tablinks",onClick:function(t){return e.openMovie(t)}},r.a.createElement(f.a,{className:"bars"})),r.a.createElement("button",{className:"watchlist"===this.state.tabactive?"tablinks active":"tablinks",onClick:function(t){return e.openWatchlist(t)}},r.a.createElement(f.d,{className:"stars"}))),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"header"},"movie"===this.state.tabactive?"All Movies":"WatchList",r.a.createElement("br",null),r.a.createElement("hr",{className:"line-2"})),r.a.createElement("div",{className:"search"},r.a.createElement(f.c,{className:"search-icon"}),r.a.createElement("input",{className:"searchBox",onChange:"movie"===this.state.tabactive?this.searchMovieHandler.bind(this):this.searchWatchlistHandler.bind(this),placeholder:"Search..."}))),r.a.createElement("div",{id:"movie",className:"tabcontent",style:"movie"===this.state.tabactive?{display:"block"}:{display:"none"}},r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:this.getPopularHandler.bind(this),className:"popular"===this.state.movieactive?"popular active":"popular"},"popular"),r.a.createElement("button",{onClick:this.getTopRatedHandler.bind(this),className:"top-rated"===this.state.movieactive?"top-rated active":"top-rated"},"top rated"),r.a.createElement("button",{onClick:this.getUpcomingHandler.bind(this),className:"upcoming"===this.state.movieactive?"upcoming active":"upcoming"},"upcoming"),r.a.createElement("button",{onClick:this.getNowPlayHandler.bind(this),className:"now-play"===this.state.movieactive?"now-play active":"now-play"},"now playing")),r.a.createElement("div",{className:"body container-fluid",style:{paddingTop:"20px"}},r.a.createElement("div",{className:"row"},this.state.rows))),r.a.createElement("div",{id:"watchlist",className:"tabcontent",style:"watchlist"===this.state.tabactive?{display:"block"}:{display:"none"}},r.a.createElement("div",{className:"body container-fluid",style:{paddingTop:"20px"}},r.a.createElement("div",{className:"row"},this.state.rows))))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.75fc100c.chunk.js.map