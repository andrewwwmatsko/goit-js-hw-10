import{i as b}from"./assets/error-icon-805dd091.js";import{f as p,i as g}from"./assets/vendor-77e16229.js";const u=document.querySelector("#datetime-picker"),o=document.querySelector("button[data-start]");o.setAttribute("disabled",!0);const S=document.querySelector("[data-days]"),C=document.querySelector("[data-hours]"),M=document.querySelector("[data-minutes]"),D=document.querySelector("[data-seconds]");let d,i=0,c=1e3;const l=new Date,q={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<l?g.show({title:"Error",titleColor:"#fff",message:"Please choose a date in the future",messageColor:"#fff",backgroundColor:"#EF4040",position:"topCenter",messageLineHeight:"24px",messageSize:"16px",iconUrl:b,theme:"dark"}):(o.removeAttribute("disabled"),d=t[0])}};p(u,q);o.addEventListener("click",T);function x(t){const m=Math.floor(t/864e5),f=Math.floor(t%864e5/36e5),h=Math.floor(t%864e5%36e5/6e4),y=Math.floor(t%864e5%36e5%6e4/1e3);return{days:m,hours:f,minutes:h,seconds:y}}function e(t){return t.toString().padStart(2,"0")}function T(){o.setAttribute("disabled",!0),u.setAttribute("disabled",!0),i=setInterval(()=>{let t=d.getTime()-l.getTime()-c;c+=1e3,t<1e3&&clearInterval(i);const{days:n,hours:r,minutes:s,seconds:a}=x(t);S.textContent=e(n),C.textContent=e(r),M.textContent=e(s),D.textContent=e(a)},1e3)}
//# sourceMappingURL=commonHelpers.js.map
