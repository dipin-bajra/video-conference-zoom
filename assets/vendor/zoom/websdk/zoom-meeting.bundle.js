"use strict";(self.webpackChunkvideo_conferencing_with_zoom_api=self.webpackChunkvideo_conferencing_with_zoom_api||[]).push([[721],{631:(e,n,t)=>{var o=t(898);const i={meetingID:atob(zvc_ajx.meeting_id),redirectTo:zvc_ajx.redirect_page,password:!1!==zvc_ajx.meeting_pwd&&atob(zvc_ajx.meeting_pwd),infoContainer:document.querySelector(".vczapi-zoom-browser-meeting--info__browser"),init:function(){this.initSDK(),this.eventHandlers(),"yes"===zvc_ajx.enable_direct_join_via_browser&&this.handleJoinOnInit()},initSDK:function(){o.ZoomMtg.setZoomJSLib("https://source.zoom.us/"+zvc_ajx.sdk_version+"/lib","/av"),o.ZoomMtg.preLoadWasm(),o.ZoomMtg.prepareWebSDK()},eventHandlers:function(){let e=document.getElementById("vczapi-zoom-browser-meeting-join-mtg");null!=e&&(e.onclick=this.handleJoinMeetingButton.bind(this))},handleJoinOnInit:function(){const e=zvc_ajx.user_name,n=zvc_ajx.user_mail,t=this.password;this.handleJoinMeeting(e,t,n)},loader:function(){const e=document.createElement("span");return e.id="zvc-cover",e},generateSignature:async function(){const e=new FormData;return e.append("action","get_auth"),e.append("noncce",zvc_ajx.zvc_security),e.append("meeting_id",parseInt(this.meetingID)),(await fetch(zvc_ajx.ajaxurl,{method:"POST",body:e})).json()},removeLoader:function(){null!==document.getElementById("zvc-cover")&&document.getElementById("zvc-cover").remove()},handleJoinMeeting:function(e,n,t){null==this.meetingID&&""===this.meetingID||this.generateSignature().then((o=>{if(o.success){document.getElementById("zmmtg-root").style.display="block",this.removeLoader();const i={name:null!==e?e:"",password:null!==n?n:"",email:null!==t?t:""};this.prepBeforeJoin(o,i)}}))},handleJoinMeetingButton:function(e){e.preventDefault(),document.body.appendChild(this.loader());const n=document.getElementById("vczapi-jvb-display-name"),t=document.getElementById("vczapi-jvb-email"),o=document.getElementById("meeting_password");if(null!==n&&(null===n.value||""===n.value))return this.infoContainer.innerHTML="Name is a Required field!",this.infoContainer.style.color="red",this.removeLoader(),!1;if(null!==t&&(null===t.value||""===t.value))return this.infoContainer.innerHTML="Email is a Required field!",this.infoContainer.style.color="red",this.removeLoader(),!1;if(null!==o&&(null===o.value||""===o.value))return this.infoContainer.innerHTML="Validation: Password is Required!",this.infoContainer.style.color="red",this.removeLoader(),!1;const i=null!==n?n.value:"",a=null!==o?o.value:"",r=null!==t?t.value:"";this.handleJoinMeeting(i,a,r)},prepBeforeJoin:function(e,n){const t=e.data.key,o=e.data.sig,i=e.data.type,a=document.getElementById("vczapi-zoom-browser-meeting");null!==a&&a.remove();const r=document.getElementById("meeting_lang"),s={lang:null!==r?r.value:"en-US",leaveUrl:this.redirectTo};let l={meetingNumber:parseInt(this.meetingID,10),userName:n.name,signature:o,userEmail:n.email,passWord:n.password?n.password:this.password,success:function(e){console.log("Join Meeting Success")},error:function(e){console.log(e)}};const c=new URLSearchParams(window.location.search),d=Object.fromEntries(c.entries());null!==d.tk&&(l.tk=d.tk),window.location!==window.parent.location&&(s.leaveUrl=window.location.href),"jwt"===i?l.apiKey=t:"sdk"===i&&(l.sdkKey=t),this.joinMeeting(s,l)},joinMeeting:function(e,n){o.ZoomMtg.init({leaveUrl:e.leaveUrl,isSupportAV:!0,meetingInfo:zvc_ajx.meetingInfo,disableInvite:zvc_ajx.disableInvite,disableRecord:zvc_ajx.disableRecord,disableJoinAudio:zvc_ajx.disableJoinAudio,isSupportChat:zvc_ajx.isSupportChat,isSupportQA:zvc_ajx.isSupportQA,isSupportBreakout:zvc_ajx.isSupportBreakout,isSupportCC:zvc_ajx.isSupportCC,screenShare:zvc_ajx.screenShare,success:function(){o.ZoomMtg.i18n.load(e.lang),o.ZoomMtg.i18n.reload(e.lang),o.ZoomMtg.join(n)},error:function(e){console.log(e)}})}};document.addEventListener("DOMContentLoaded",i.init())}},e=>{e(e.s=631)}]);