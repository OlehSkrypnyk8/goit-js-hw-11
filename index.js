import{a as f,S as y,i as l}from"./assets/vendor-CYMld6vM.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();function h(a){return f.get("https://pixabay.com/api/",{params:{key:"52810941-a867c2a4f7105994d43c555c3",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits).catch(r=>(console.log(r),[]))}document.querySelector(".form");const d=document.querySelector(".loader"),p=document.querySelector(".gallery"),m=new y(".gallery a",{captionsData:"alt",captionDelay:250});function g(a){const r=a.map(t=>`
        <li class="gallery-item">
            <div>
                <a class="gallery-link" href="${t.largeImageURL}">
                <img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}" loading="lazy" width=450 height=300 />
                <div class="gallery-info">
                    <p class="gallery-text"> <span class ="span-text">Likes</span> ${t.likes}</p>
                    <p class="gallery-text"> <span class ="span-text">Views</span> ${t.views}</p>
                    <p class="gallery-text"> <span class ="span-text">Comments</span> ${t.comments}</p>
                    <p class="gallery-text"> <span class ="span-text">Downloads</span> ${t.downloads}</p>
                </div>
            </div>
        </li>
    `).join("");p.insertAdjacentHTML("beforeend",r),m.refresh()}function L(){p.innerHTML=""}function x(){d.classList.remove("hidden")}function u(){d.classList.add("hidden")}const i=document.querySelector(".form"),o=i.elements["search-text"],v=o.placeholder;i.addEventListener("submit",b);function b(a){a.preventDefault(),x();const r=i.elements["search-text"].value.trim();if(L(),!r){l.error({title:"Error",message:"Please enter a search query."}),u();return}o.placeholder="",h(r).then(t=>{if(!t||t.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t)}).catch(t=>{l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).finally(()=>{u(),o.value="",o.placeholder=v})}
//# sourceMappingURL=index.js.map
