import{a as p,S as f,i}from"./assets/vendor-CYMld6vM.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function h(o){return p.get("https://pixabay.com/api/",{params:{key:"52810941-a867c2a4f7105994d43c555c3",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits).catch(t=>(console.log(t),[]))}const c=document.querySelector(".form"),d=document.querySelector(".loader"),u=document.querySelector(".gallery");function y(o){const t=o.map(a=>`
        <li class="gallery-item">
            <div>
                <a class="gallery-link" href="${a.largeImageURL}">
                <img class="gallery-img" src="${a.webformatURL}" alt="${a.tags}" loading="lazy" width=450 height=300 />
                <div class="gallery-info">
                    <p class="gallery-text"> <span class ="span-text">Likes</span> ${a.likes}</p>
                    <p class="gallery-text"> <span class ="span-text">Views</span> ${a.views}</p>
                    <p class="gallery-text"> <span class ="span-text">Comments</span> ${a.comments}</p>
                    <p class="gallery-text"> <span class ="span-text">Downloads</span> ${a.downloads}</p>
                </div>
            </div>
        </li>
    `).join("");u.insertAdjacentHTML("beforeend",t),new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function m(){u.innerHTML=" "}function g(){document.querySelector(".loader")&&d.classList.remove("hidden")}function L(){document.querySelector(".loader")&&d.classList.add("hidden")}const n=c.elements["search-text"],x=n.placeholder;c.addEventListener("submit",v);function v(o){o.preventDefault(),g();const t=c.elements["search-text"].value.trim();if(!t){i.error({title:"Error",message:"Please enter a search query."}),L();return}n.placeholder="",h(t).then(s=>{if(m(),!s||s.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(s)}).catch(s=>{i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).finally(()=>{d.classList.add("hidden"),n.value="",n.placeholder=x})}
//# sourceMappingURL=index.js.map
