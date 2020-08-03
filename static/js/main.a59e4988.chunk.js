(this["webpackJsonpexplore-met-museum"]=this["webpackJsonpexplore-met-museum"]||[]).push([[0],{50:function(e,t,a){e.exports=a(64)},55:function(e,t,a){},56:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(23),i=a.n(r),l=a(7),s=(a(55),a(9)),c=a(10),u=a(12),m=a(11),p=(a(56),a(57),a(49)),d=a(66),h=a(43),f=a(38),E=a(5),y=a(19),g=a(6),b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).inputChange=function(e){n.setState({input:e.target.value})},n.dropdownChange=function(e){n.setState({dropdown:e.target.value})},n.submitForm=function(e){e.preventDefault(),""!==n.state.dropdown&&""!==n.state.input?(n.props.sendInput(n.state),n.props.history.push("/objects/".concat(n.state.dropdown,"/").concat(n.state.input))):alert("Please select an area from the dropdown and enter the name of the section you would like to search.")},n.state={input:"",dropdown:""},n}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement(E.a,{inline:!0,onSubmit:this.submitForm},o.a.createElement(E.a.Control,{style:{margin:10},size:"sm",as:"select",title:"Select an area to search",id:"basic-nav-dropdown",onChange:this.dropdownChange},o.a.createElement("option",null,"Select an area to Search"),o.a.createElement("option",{value:"id"},"Object ID"),o.a.createElement("option",{value:"department"},"Departments"),o.a.createElement("option",{value:"medium"},"Media"),o.a.createElement("option",{value:"category"},"Categories"),o.a.createElement("option",{value:"culture"},"Cultures")),o.a.createElement(E.a.Control,{style:{margin:5},size:"sm",type:"input",onChange:this.inputChange}),o.a.createElement(y.a,{style:{margin:10,backgroundColor:"#f5eba5",color:"#000000",border:"none"},size:"sm",type:"submit"},"Search"))}}]),a}(n.Component),C=Object(g.e)(b);var v=function(e){return o.a.createElement(f.a,{style:{backgroundColor:"#B85954",height:"100%"},className:"justify-content-between"},o.a.createElement(f.a.Brand,{as:l.b,to:"/",style:{padding:20,color:"#f5eba5"}},o.a.createElement("h1",null,"Metropolitan Museum of Art")),o.a.createElement(C,{sendInput:e.sendInput}))},j=a(18);var S=function(e){return o.a.createElement(j.a,{style:{paddingLeft:10,paddingRight:10,backgroundColor:"#B85954",height:"100%"}},o.a.createElement(j.a.Item,null,o.a.createElement("h4",{style:{textDecoration:"underline"}},"Browse Collection"),o.a.createElement(j.a.Link,{as:l.b,to:"/objects/random",onClick:function(){return e.setId()}},"Random Object"),o.a.createElement(j.a.Link,{as:l.b,to:"/objects/department/list",onClick:function(){return e.selectList("department")}},"Departments"),o.a.createElement(j.a.Link,{as:l.b,to:"/objects/medium/list",onClick:function(){return e.selectList("medium")}},"Media"),o.a.createElement(j.a.Link,{as:l.b,to:"/objects/category/list",onClick:function(){return e.selectList("category")}},"Categories"),o.a.createElement(j.a.Link,{as:l.b,to:"/objects/culture/list",onClick:function(){return e.selectList("culture")}},"Cultures"),o.a.createElement("h4",{style:{textDecoration:"underline"}},"Advanced"),o.a.createElement(j.a.Link,{as:l.b,to:"/new/"},"Add New Object or Artist"),o.a.createElement(j.a.Link,{as:l.b,to:"/update"},"Update an Object or Artist"),o.a.createElement(j.a.Link,{as:l.b,to:"/delete"},"Delete an Object or Artist")))},I=a(67),w=a(68),k=a(69),D=a(30);function O(e){var t=e.images.map((function(e,t){return o.a.createElement(D.a,{style:{maxHeight:"400px",maxWidth:"300px",margin:10},thumbnail:!0,key:t,src:e})}));return o.a.createElement("div",null,t)}var T=function(e){a(u.a)(a,e);var t=a(m.a)(a);function a(e){var n;return a(s.a)(this,a),(n=t.call(this,e)).fetchObject=function(e){fetch("".concat(n.props.url,"/objects/id/").concat(e)).then((function(e){return e.json()})).then((function(e){n.mounted&&n.setState({id:e._id,featured:e.featured,yearAcquired:e.yearAcquired,isPublicDomain:e.isPublicDomain,primaryImage:e.primaryImage,primaryImageSmall:e.primaryImageSmall,additionalImages:e.additionalImages,department:e.department,objectType:e.objectType,title:e.title,culture:e.culture,period:e.period,artist:e.artist,dateCreated:e.dateCreated,medium:e.medium,dimensions:e.dimensions,country:e.country,category:e.category,rights:e.rights,infoLink:e.infoLink,ready:!0})}))},n.fetchArtistInfo=function(){return fetch("".concat(n.props.url,"/artists/name/").concat(n.state.artist)).then((function(e){return e.json()})).then((function(e){void 0!==e[0]&&n.mounted&&n.setState({artistBio:e[0].bio,artistNationality:e[0].nationality,artistBirthDate:e[0].birthDate,artistDeathDate:e[0].deathDate,artistGender:e[0].gender,artistReady:!0})})),!0===n.state.artistReady?o.a.createElement("div",null,""!==n.state.artistGender?o.a.createElement("p",null,"Gender: ",n.state.artistGender):null,""!==n.state.artistNationality?o.a.createElement("p",null,"Nationality: ",n.state.artistNationality):null,""!==n.state.artistBirthDate||null!==n.state.artistBirthDate?o.a.createElement("p",null,"DOB: ",n.state.artistBirthDate):null,""!==n.state.artistDeathDate||null!==n.state.artistDeathDate?o.a.createElement("p",null,"DOD: ",n.state.artistDeathDate):null,""!==n.state.artistBio?o.a.createElement("p",null,n.state.artistBio):null):null},n.componentDidMount=function(){n.mounted=!0;var e="";e=""!==n.props.id?n.props.id:localStorage.getItem("objectId"),n.fetchObject(e),localStorage.setItem("objectId","".concat(n.props.id)),localStorage.setItem("dropdown","id")},n.componentDidUpdate=function(e){e.id!==n.props.id&&(n.fetchObject(n.props.id),localStorage.setItem("objectId","".concat(n.props.id)),localStorage.setItem("dropdown","id"))},n.componentWillUnmount=function(){n.mounted=!1},n.state={},n.mounted=!1,n}return a(c.a)(a,[{key:"render",value:function(){return!0===this.state.ready?o.a.createElement(p.a,{className:"justify-content-center",style:{marginTop:20,marginLeft:20}},o.a.createElement(d.a,{className:"justify-content-center"},o.a.createElement(h.a,null,o.a.createElement(d.a,{className:"justify-content-center"},o.a.createElement("h6",null,"Object ID: ",this.state.id)),o.a.createElement(d.a,{className:"justify-content-center"},o.a.createElement("h3",null,this.state.title)),o.a.createElement(d.a,{className:"justify-content-center"},!0===this.state.isPublicDomain?o.a.createElement("h4",null,o.a.createElement(I.a,{variant:"primary"},"  Public Domain")):null,!0===this.state.featured?o.a.createElement("h5",null,o.a.createElement(I.a,{variant:"primary"},"  Featured")):null),o.a.createElement(d.a,null,o.a.createElement(h.a,{xs:"4"}),o.a.createElement(h.a,null,o.a.createElement(D.a,{fluid:!0,src:this.state.primaryImage})),o.a.createElement(h.a,{xs:"4"})),o.a.createElement(d.a,{className:"justify-content-center"},""!==this.state.dimensions&&void 0!==this.state.dimensions?o.a.createElement("h5",null,"Dimensions: ",this.state.dimensions):null),o.a.createElement(d.a,{className:"justify-content-center"},""!==this.state.culture&&void 0!==this.state.culture?o.a.createElement("h4",null,"Culture: ",this.state.culture):null),o.a.createElement(d.a,{className:"justify-content-center"},""!==this.state.department&&void 0!==this.state.department?o.a.createElement("h4",null,"Department: ",this.state.department):null),o.a.createElement(d.a,{className:"justify-content-center"},""!==this.state.medium&&void 0!==this.state.medium?o.a.createElement("h4",null,"Medium: ",this.state.medium):null),o.a.createElement(d.a,{className:"justify-content-center"},""!==this.state.category&&void 0!==this.state.category?o.a.createElement("h4",null,"Category: ",this.state.category):null),o.a.createElement(d.a,{className:"justify-content-center"},""!==this.state.dateCreated&&void 0!==this.state.dateCreated?o.a.createElement("h5",null,"Date Created: ",this.state.dateCreated):null,""!==this.state.period&&void 0!==this.state.period?o.a.createElement("h5",null,"Period: ",this.state.period):null,""!==this.state.country&&void 0!==this.state.country?o.a.createElement("h5",null,"Country of Origin: ",this.state.country):null),o.a.createElement(d.a,{className:"justfiy-content-center"},""!==this.state.additionalImages&&void 0!==this.state.additionalImages?o.a.createElement(O,{images:this.state.additionalImages}):null)),o.a.createElement(h.a,{xs:"4"},o.a.createElement(d.a,{className:"justify-content-center"},""!==this.state.artist&&void 0!==this.state.artist?o.a.createElement(w.a,null,o.a.createElement(k.a,{style:{backgroundColor:"#B85954"}},o.a.createElement(k.a.Header,null,o.a.createElement(w.a.Toggle,{style:{backgroundColor:"#f5eba5"},as:k.a.Header,variant:"link",eventKey:"0"},o.a.createElement("h5",null,"Artist: ",this.state.artist))),o.a.createElement(w.a.Collapse,{eventKey:"0"},o.a.createElement(k.a.Body,{style:{color:"#f5eba5"}},this.fetchArtistInfo())))):null)))):null}}]),a}(n.Component);var N=function(){return o.a.createElement(p.a,{className:"justify-content-center",style:{marginTop:20}},o.a.createElement("h1",{style:{textAlign:"center",marginTop:20}},"Welcome to The Met Online"),o.a.createElement("br",null),o.a.createElement("h2",null,"To search for a specific item, use the dropdown menu in the header."),o.a.createElement("br",null),o.a.createElement("h2",null,"Not sure what you're looking for? Click one of the area links to the left to browse the collection. Once you find the right area, you can use the dropdown menu to search for items in that area."),o.a.createElement("h6",{style:{position:"fixed",bottom:10}},"Metropolitan Museum of Art \u2022 1000 5th Ave, New York, NY 10028 \u2022 ",o.a.createElement("a",{href:"https://metmuseum.org",style:{color:"#000000"}},"metmuseum.org")))},L=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={listName:n.props.listName,items:[]},n.url=n.props.url,n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="";t=""!==this.props.listName?this.props.listName:localStorage.getItem("listName"),fetch("".concat(this.url,"/objects/").concat(t)).then((function(e){return e.json()})).then((function(t){e.setState({items:t})})),localStorage.setItem("listName","".concat(this.props.listName))}},{key:"componentDidUpdate",value:function(e){var t=this;e.listName!==this.props.listName&&(fetch("".concat(this.url,"/objects/").concat(this.props.listName)).then((function(e){return e.json()})).then((function(e){t.setState({items:e})})),localStorage.setItem("listName","".concat(this.props.listName)))}},{key:"setList",value:function(){return this.state.items.map((function(e,t){var a;return""!==e&&(a=o.a.createElement("li",{key:t},e)),a}))}},{key:"render",value:function(){return o.a.createElement("div",{style:{overflow:"scroll",paddingLeft:20}},o.a.createElement("ul",{style:{listStyle:"none",fontSize:"20px",paddingTop:20}},this.setList()))}}]),a}(n.Component),P=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).fetchData=function(){fetch("".concat(n.props.url,"/objects/").concat(n.dropdown,"/").concat(n.input)).then((function(e){return e.json()})).then((function(e){n.setState({objects:e,ready:!0})}))},n.displayObjectList=function(){return n.state.objects.map((function(e,t){return o.a.createElement(l.b,{key:t,to:"/objects/id/".concat(e._id)},o.a.createElement("li",{onClick:function(){return n.props.setId(e._id,"id")}},e.title))}))},n.componentDidMount=function(){""!==n.props.input?(n.input=n.props.input,n.dropdown=n.props.dropdown):(n.input=localStorage.getItem("formInput"),n.dropdown=localStorage.getItem("dropdown")),n.fetchData(),localStorage.setItem("formInput","".concat(n.props.input)),localStorage.setItem("dropdown","".concat(n.props.dropdown))},n.componentDidUpdate=function(e){e.input!==n.props.input&&(n.fetchData(),localStorage.setItem("formInput","".concat(n.props.id)),localStorage.setItem("dropdown","".concat(n.props.dropdown)))},n.state={objects:[],ready:!1},n.input="",n.dropdown="",n}return Object(c.a)(a,[{key:"render",value:function(){return!0===this.state.ready?o.a.createElement("div",null,o.a.createElement("ul",{style:{listStyle:"none",fontSize:"20px",paddingTop:20}},this.displayObjectList())):null}}]),a}(n.Component),z=a(24),F=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).setType=function(){return"POST"===n.props.method?o.a.createElement("h4",null,"Please enter the details of the item to add?"):"PUT"===n.props.method?o.a.createElement("div",null," ",o.a.createElement("h4",null,"Please enter the details of the item to update?"),o.a.createElement(E.a.Control,{type:"input",placeholder:"ID (required)",name:"_id",onChange:n.inputChange})):"DELETE"===n.props.method?o.a.createElement("div",null," ",o.a.createElement("h4",null,"Please enter the ID of the item to delete?"),o.a.createElement(E.a.Control,{type:"input",placeholder:"ID (required)",name:"_id",onChange:n.inputChange})):void 0},n.setForm=function(){if("DELETE"!==n.props.method)return o.a.createElement("div",null,o.a.createElement(E.a.Control,{size:"sm",type:"input",placeholder:"Title",name:"title",onChange:n.inputChange}),o.a.createElement("h5",null,"Is this item in the public domain?"),o.a.createElement(E.a.Check,{inline:!0,size:"sm",type:"radio",name:"isPublicDomain",label:"Yes",onClick:function(){return n.setCheckbox("isPublicDomain",!0)}}),o.a.createElement(E.a.Check,{inline:!0,size:"sm",type:"radio",name:"isPublicDomain",label:"No",onClick:function(){return n.setCheckbox("isPublicDomain",!1)}}),o.a.createElement("h5",null,"Should this item be featured?"),o.a.createElement(E.a.Check,{inline:!0,size:"sm",type:"radio",name:"featured",label:"Yes",onClick:function(){return n.setCheckbox("featured",!0)}}),o.a.createElement(E.a.Check,{inline:!0,size:"sm",type:"radio",name:"featured",label:"No",onClick:function(){return n.setCheckbox("featured",!1)}}),o.a.createElement(E.a.Control,{size:"sm",type:"input",placeholder:"Primary Image URL",name:"primaryImage",onChange:n.inputChange}),o.a.createElement(E.a.Control,{size:"sm",type:"input",placeholder:"Dimensions",name:"dimensions",onChange:n.inputChange}),o.a.createElement(E.a.Control,{size:"sm",type:"input",placeholder:"Culture",name:"culture",onChange:n.inputChange}),o.a.createElement(E.a.Control,{size:"sm",type:"input",placeholder:"Department",name:"department",onChange:n.inputChange}),o.a.createElement(E.a.Control,{size:"sm",type:"input",placeholder:"Medium",name:"medium",onChange:n.inputChange}),o.a.createElement(E.a.Control,{size:"sm",type:"input",placeholder:"Category",name:"category",onChange:n.inputChange}),o.a.createElement(E.a.Control,{size:"sm",type:"input",placeholder:"Date Created",name:"dateCreated",onChange:n.inputChange}),o.a.createElement(E.a.Control,{size:"sm",type:"input",placeholder:"Period",name:"period",onChange:n.inputChange}),o.a.createElement(E.a.Control,{size:"sm",type:"input",placeholder:"Country",name:"country",onChange:n.inputChange}),o.a.createElement(E.a.Control,{size:"sm",type:"input",placeholder:"Additional Image URLS (separate by comma)",name:"additionalImages",onChange:n.inputChange}),o.a.createElement(E.a.Control,{size:"sm",type:"input",placeholder:"Artist",name:"artist",onChange:n.inputChange}))},n.inputChange=function(e){n.setState(Object(z.a)({},e.target.name,e.target.value))},n.setCheckbox=function(e,t){n.setState(Object(z.a)({},e,t))},n.checkImages=function(e){if(e.preventDefault(),n.state.additionalImages){var t=n.state.additionalImages.split(",").map((function(e){return e.trim()}));n.setState({additionalImages:t},(function(){n.submitForm(e)}))}else n.submitForm(e)},n.submitForm=function(e){var t="";t="POST"===n.props.method?"https://met-museum-api.herokuapp.com/".concat(n.props.type,"/"):"https://met-museum-api.herokuapp.com/".concat(n.props.type,"/").concat(n.state._id);var a={method:n.props.method,headers:{"Content-Type":"application/json"},body:JSON.stringify(n.state)};fetch(t,a).then((function(e){return e.json()})).then((function(e){n.props.onSuccess({newId:e._id,success:!0})}))},n.state={},n}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement(E.a,{onSubmit:this.checkImages},this.setType(),this.setForm(),o.a.createElement(y.a,{style:{marginTop:20,backgroundColor:"#B85954",border:"none"},type:"submit"},"Submit"))}}]),a}(n.Component),x=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).setType=function(){return"POST"===n.props.method?o.a.createElement("h4",null,"Please enter the details of the item to add?"):"PUT"===n.props.method?o.a.createElement("div",null," ",o.a.createElement("h4",null,"Please enter the details of the item to update?"),o.a.createElement(E.a.Control,{type:"input",placeholder:"ID (required)",name:"_id",onChange:n.inputChange})):"DELETE"===n.props.method?o.a.createElement("div",null," ",o.a.createElement("h4",null,"Please enter the ID of the item to delete?"),o.a.createElement(E.a.Control,{type:"input",placeholder:"ID (required)",name:"_id",onChange:n.inputChange})):void 0},n.setForm=function(){if("DELETE"!==n.props.method)return o.a.createElement("div",null,o.a.createElement(E.a.Control,{size:"sm",type:"input",placeholder:"Name",name:"name",onChange:n.inputChange}),o.a.createElement(E.a.Control,{size:"sm",type:"input",placeholder:"Gender",name:"gender",onChange:n.inputChange}),o.a.createElement(E.a.Control,{size:"sm",type:"input",placeholder:"Nationality",name:"nationality",onChange:n.inputChange}),o.a.createElement(E.a.Control,{size:"sm",type:"input",placeholder:"Birth Date",name:"birthDate",onChange:n.inputChange}),o.a.createElement(E.a.Control,{size:"sm",type:"input",placeholder:"Death Date",name:"deathDate",onChange:n.inputChange}),o.a.createElement(E.a.Control,{size:"sm",type:"input",placeholder:"Bio",name:"bio",onChange:n.inputChange}))},n.inputChange=function(e){n.setState(Object(z.a)({},e.target.name,e.target.value))},n.submitForm=function(e){var t="";t="POST"===n.props.method?"https://met-museum-api.herokuapp.com/".concat(n.props.type,"/"):"https://met-museum-api.herokuapp.com/".concat(n.props.type,"/").concat(n.state._id),e.preventDefault();var a={method:n.props.method,headers:{"Content-Type":"application/json"},body:JSON.stringify(n.state)};fetch(t,a).then((function(e){return e.json()})).then((function(e){n.props.onSuccess({newId:e._id,success:!0})}))},n.state={},n}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement(E.a,{onSubmit:this.submitForm},this.setType(),this.setForm(),o.a.createElement(y.a,{style:{marginTop:20,backgroundColor:"#B85954",border:"none"},type:"submit"},"Submit"))}}]),a}(n.Component),B=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onSuccess=function(e){console.log("success fired"),n.setState({success:e.success,newId:e.newId})},n.successDisplay=function(){return"POST"===n.props.method?o.a.createElement("div",{style:{margin:20}},o.a.createElement("h3",null,"Success! The new item ID is ",n.state.newId),o.a.createElement(y.a,{style:{marginTop:20,backgroundColor:"#B85954",border:"none"},type:"button",onClick:n.resetPage},"Submit Another New Item")):"PUT"===n.props.method?o.a.createElement("div",{style:{margin:20}},o.a.createElement("h3",null,"Success! Item ",n.state.newId," has been updated."),o.a.createElement(y.a,{style:{marginTop:20,backgroundColor:"#B85954",border:"none"},type:"button",onClick:n.resetPage},"Submit Another Update")):"DELETE"===n.props.method?o.a.createElement("div",{style:{margin:20}},o.a.createElement("h3",null,"Success! Item ",n.state.newId," has been deleted."),o.a.createElement(y.a,{style:{marginTop:20,backgroundColor:"#B85954",border:"none"},type:"button",onClick:n.resetPage},"Delete Another Item")):void 0},n.setFormType=function(e){e.preventDefault(),n.setState({type:e.target.value})},n.resetPage=function(){console.log("fired"),n.setState(n.baseState)},n.formType=function(){return"POST"===n.props.method?o.a.createElement("h3",null,"What type of item would you like to add?"):"PUT"===n.props.method?o.a.createElement("h3",null,"What type of item would you like to update?"):"DELETE"===n.props.method?o.a.createElement("h3",null,"What type of item would you like to delete?"):void 0},n.displayForm=function(){return"objects"===n.state.type?o.a.createElement(F,{type:n.state.type,method:n.state.method,onSuccess:n.onSuccess}):"artists"===n.state.type?o.a.createElement(x,{type:n.state.type,method:n.state.method,onSuccess:n.onSuccess}):null},n.state={newId:"",success:"",type:"",method:n.props.method},n.baseState={newId:"",success:"",type:"",method:n.state.method},n}return Object(c.a)(a,[{key:"render",value:function(){return!0!==this.state.success?o.a.createElement("div",{style:{width:"60%",marginLeft:20}},this.formType(),o.a.createElement(E.a,null,o.a.createElement(E.a.Control,{size:"sm",as:"select",id:"basic-nav-dropdown",name:"type",onChange:this.setFormType},o.a.createElement("option",null,"Select One"),o.a.createElement("option",{value:"objects"},"Object"),o.a.createElement("option",{value:"artists"},"Artist"))),this.displayForm()):this.successDisplay()}}]),a}(n.Component),A="https://met-museum-api.herokuapp.com",U=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).setStateFromUrl=function(){var t=e.path.split("/");"random"===(t=t.filter((function(e){return""!==e})))[1]&&e.fetchRandomId(),"list"===t[2]&&e.setState({browseSelection:t[1]}),"id"===t[1]&&e.setState({dropdownSelection:"id",formInput:t[2]})},e.componentDidMount=function(){e.setStateFromUrl()},e.selectList=function(t){e.setState({browseSelection:t})},e.setDropdown=function(t){e.setState({dropdownSelection:t})},e.setFormSelection=function(t,a){void 0!==t.input?e.setState({dropdownSelection:t.dropdown,formInput:t.input}):e.setState({formInput:t,dropdownSelection:a})},e.fetchRandomId=function(){fetch("".concat(A,"/objects/random")).then((function(e){return e.json()})).then((function(t){e.setState({objectId:t._id})}))},e.state={browseSelection:"",dropdownSelection:"",formInput:"",objectId:""},e.path=window.location.pathname,e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement(p.a,{fluid:!0,style:{padding:0}},o.a.createElement(d.a,{style:{height:"15%"},noGutters:!0,className:"row-bottom-margin"},o.a.createElement(h.a,{"row-bottom-margin":"true"},o.a.createElement(v,{dropdownSelection:this.setDropdown,sendInput:this.setFormSelection}))),o.a.createElement(d.a,{style:{height:"85%"},noGutters:!0},o.a.createElement(h.a,{xs:"2"},o.a.createElement(S,{selectList:this.selectList,setId:this.fetchRandomId})),o.a.createElement(h.a,{style:{height:"100%",overflow:"scroll",borderTop:"12px groove #b63d37",borderLeft:"12px ridge #b63d37",outlineTop:"#FFFFFF"}},o.a.createElement(g.a,{path:"/",component:N,exact:!0}),o.a.createElement(g.a,{path:"/objects/".concat(this.state.browseSelection,"/list"),render:function(){return o.a.createElement(L,{listName:e.state.browseSelection,url:A})}}),o.a.createElement(g.a,{path:"/objects/random",render:function(){return o.a.createElement(T,{url:A,id:e.state.objectId})},exact:!0}),o.a.createElement(g.a,{path:"/objects/".concat(this.state.dropdownSelection,"/").concat(this.state.formInput),render:function(){return"id"===e.state.dropdownSelection?o.a.createElement(T,{url:A,id:e.state.formInput}):o.a.createElement(P,{url:A,dropdown:e.state.dropdownSelection,input:e.state.formInput,setId:e.setFormSelection})}}),o.a.createElement(g.a,{path:"/new",render:function(){return o.a.createElement(B,{method:"POST"})}}),o.a.createElement(g.a,{path:"/update",render:function(){return o.a.createElement(B,{method:"PUT"})}}),o.a.createElement(g.a,{path:"/delete",render:function(){return o.a.createElement(B,{method:"DELETE"})}}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(l.a,null,o.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.a59e4988.chunk.js.map