(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(32)},,,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n,c=a(0),r=a.n(c),s=a(8),i=a.n(s),o=(a(18),a(2)),l=a(3),u=a(5),h=a(4),m=a(6),p=a(1),d=(a(20),a(22),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={term:""},a.search=a.search.bind(Object(p.a)(Object(p.a)(a))),a.handleTermChange=a.handleTermChange.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"search",value:function(){this.props.onSearch(this.state.term)}},{key:"handleTermChange",value:function(e){this.setState({term:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{className:"SearchBar"},r.a.createElement("input",{placeholder:"Enter A Song, Album, or Artist",onChange:this.handleTermChange}),r.a.createElement("button",{className:"SearchButton",onClick:this.search},"SEARCH"))}}]),t}(r.a.Component)),f=(a(24),a(26),a(28),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).addTrack=a.addTrack.bind(Object(p.a)(Object(p.a)(a))),a.removeTrack=a.removeTrack.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderAction",value:function(){return this.props.isRemoval?r.a.createElement("button",{className:"Track-action",onClick:this.removeTrack},"-"):r.a.createElement("button",{className:"Track-action",onClick:this.addTrack},"+")}},{key:"addTrack",value:function(){this.props.onAdd(this.props.track)}},{key:"removeTrack",value:function(){this.props.onRemove(this.props.track)}},{key:"render",value:function(){return r.a.createElement("div",{className:"Track"},r.a.createElement("div",{className:"Track-information"},r.a.createElement("h3",null,this.props.track.name),r.a.createElement("p",null,this.props.track.artist," | ",this.props.track.album)),this.renderAction())}}]),t}(r.a.Component)),b=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"TrackList"},this.props.tracks.map(function(t){return r.a.createElement(f,{track:t,key:t.id,onAdd:e.props.onAdd,onRemove:e.props.onRemove,isRemoval:e.props.isRemoval})}))}}]),t}(r.a.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"SearchResults"},r.a.createElement("h2",null,"Results"),r.a.createElement(b,{tracks:this.props.searchResults,onAdd:this.props.onAdd,isRemoval:!1}))}}]),t}(r.a.Component),k=(a(30),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleNameChange=a.handleNameChange.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleNameChange",value:function(e){this.props.onNameChange(e.target.value)}},{key:"render",value:function(){return r.a.createElement("div",{className:"Playlist"},r.a.createElement("input",{defaultValue:"New Playlist",onChange:this.handleNameChange}),r.a.createElement(b,{tracks:this.props.playlistTracks,onRemove:this.props.onRemove,isRemoval:!0}),r.a.createElement("button",{className:"Playlist-save",onClick:this.props.onSave},"SAVE TO SPOTIFY"))}}]),t}(r.a.Component)),y={getAccessToken:function(){if(n)return n;var e=window.location.href.match(/access_token=([^&]*)/),t=window.location.href.match(/expires_in=([^&]*)/);if(e&&t){n=e[1];var a=Number(t[1]);return window.setTimeout(function(){return n=""},1e3*a),window.history.pushState("Access Token",null,"/"),n}var c="https://accounts.spotify.com/authorize?client_id=".concat("f70aff13e5bb434d802c8b3a29c1360e","&response_type=token&scope=playlist-modify-public&redirect_uri=").concat("https://scottpickering31.github.io/scottify-app/");window.location=c},search:function(e){var t=y.getAccessToken();return fetch("https://api.spotify.com/v1/search?type=track&q=".concat(e),{headers:{Authorization:"Bearer ".concat(t)}}).then(function(e){return e.json()}).then(function(e){return e.tracks?e.tracks.items.map(function(e){return{id:e.id,name:e.name,artist:e.artists[0].name,album:e.album.name,uri:e.uri}}):[]})},savePlaylist:function(e,t){if(e&&t.length){var a,n=y.getAccessToken(),c={Authorization:"Bearer ".concat(n)};return fetch("https://api.spotify.com/v1/me",{headers:c}).then(function(e){return e.json()}).then(function(n){return a=n.id,fetch("https://api.spotify.com/v1/users/".concat(a,"/playlists"),{headers:c,method:"POST",body:JSON.stringify({name:e})}).then(function(e){return e.json()}).then(function(e){var n=e.id;return fetch("https://api.spotify.com/v1/users/".concat(a,"/playlists/").concat(n,"/tracks"),{headers:c,method:"POST",body:JSON.stringify({uris:t})})})})}}},O=y,j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={searchResults:[],playlistName:"My Playlist",playlistTracks:[]},a.addTrack=a.addTrack.bind(Object(p.a)(Object(p.a)(a))),a.removeTrack=a.removeTrack.bind(Object(p.a)(Object(p.a)(a))),a.updatePlaylistName=a.updatePlaylistName.bind(Object(p.a)(Object(p.a)(a))),a.savePlaylist=a.savePlaylist.bind(Object(p.a)(Object(p.a)(a))),a.search=a.search.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"addTrack",value:function(e){var t=this.state.playlistTracks;t.find(function(t){return t.id===e.id})||(t.push(e),this.setState({playlistTracks:t}))}},{key:"removeTrack",value:function(e){var t=this.state.playlistTracks;t=t.filter(function(t){return t.id!==e.id}),this.setState({playlistTracks:t})}},{key:"updatePlaylistName",value:function(e){this.setState({playlistName:e})}},{key:"savePlaylist",value:function(){var e=this,t=this.state.playlistTracks.map(function(e){return e.uri});O.savePlaylist(this.state.playlistName,t).then(function(){e.setState({playlistName:"New Playlist",playlistTracks:[]})})}},{key:"search",value:function(e){var t=this;O.search(e).then(function(e){t.setState({searchResults:e})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"SC",r.a.createElement("span",{className:"highlight"},"OTT"),"IFY"),r.a.createElement("div",{className:"App"},r.a.createElement(d,{onSearch:this.search}),r.a.createElement("div",{className:"App-playlist"},r.a.createElement(v,{searchResults:this.state.searchResults,onAdd:this.addTrack}),r.a.createElement(k,{playlistName:this.state.playlistName,playlistTracks:this.state.playlistTracks,onRemove:this.removeTrack,onNameChange:this.updatePlaylistName,onSave:this.savePlaylist}))))}}]),t}(r.a.Component),T=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,33)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)})};i.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null))),T()}],[[9,3,2]]]);
//# sourceMappingURL=main.2f9a6d0d.chunk.js.map