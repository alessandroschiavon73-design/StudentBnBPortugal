window.STUDENTBNB_CONFIG = {
  brandLine: "Base & Belong",
  countryCode: "PT", countryName: "Portugal", locale: "pt-PT", currency: "EUR", domain: "studentbnb.pt",
  apiBaseUrl: "/api/v1", apiEnabled: false, analyticsEnabled: false,
  routes: { city:"cidade.html", listing:"anuncio.html", publish:"publicar.html", request:"procuro.html", students:"estudantes.html", solidarity:"casa-solidaria.html", privacy:"privacidade.html", confirm:"confirmar-email.html" },
  networkSites: [
    {code:"IT",label:"Italia",flag:"🇮🇹",url:"https://studentbnb.it/"},
    {code:"ES",label:"España",flag:"🇪🇸",url:"https://studentbnb.es/"},
    {code:"PT",label:"Portugal",flag:"🇵🇹",url:"https://studentbnb.pt/"},
    {code:"FR",label:"France",flag:"🇫🇷",url:"https://studentbnb.fr/"},
    {code:"DE",label:"Deutschland",flag:"🇩🇪",url:"https://student-bnb.de/"},
    {code:"PL",label:"Polska",flag:"🇵🇱",url:"https://studentbnb.pl/"}
  ],
  ui: {
    select:"Selecionar", allCities:"Todas as cidades", allZones:"Todas as zonas", domainPending:"Domínio alemão por definir",
    checkEmail:"Consulta o teu email para concluir a verificação.", demoVerification:"Modo de demonstração: usa o botão abaixo para simular o link recebido por email.", genericError:"Não foi possível concluir a operação.", login:"Entrar", verifiedEmail:"Email verificado", monthShort:"mês", expensesIncluded:"Despesas incluídas", expensesExcluded:"Despesas à parte", expensesIncludedLong:"Despesas incluídas na renda.", expensesExcludedLong:"Despesas estimadas à parte:", favorite:"Guardar favorito", offersFound:"ofertas encontradas", noOffers:"Ainda não há ofertas compatíveis", noOffersHelp:"Publica a tua procura para seres contactado por proprietários.", publishRequest:"Publicar procura", contactProtected:"Pedido registado. Os contactos são protegidos para utilizadores verificados.", contactStudent:"Contactar estudante", profilesFound:"perfis encontrados", invalidLinkTitle:"Ligação inválida ou expirada", invalidLinkMessage:"Pede uma nova ligação de verificação e tenta novamente.", emailConfirmedTitle:"Email confirmado", emailConfirmedPublished:"O registo foi guardado e aguarda moderação antes da publicação.", emailConfirmedLogin:"A conta foi verificada neste dispositivo."
  }
};

(function(){
 const cfg=window.STUDENTBNB_CONFIG, sites=cfg.networkSites;
 function meta(k,v,c){let e=document.head.querySelector(`meta[${k}="${v}"]`);if(!e){e=document.createElement("meta");e.setAttribute(k,v);document.head.appendChild(e)}e.content=c}
 function link(rel,href,lang){let s=`link[rel="${rel}"]${lang?`[hreflang="${lang}"]`:""}`,e=document.head.querySelector(s);if(!e){e=document.createElement("link");e.rel=rel;if(lang)e.hreflang=lang;document.head.appendChild(e)}e.href=href}
 function apply(){
  document.querySelectorAll(".brand small").forEach(e=>{e.textContent="Base & Belong";e.style.fontStyle="italic"});
  const p=location.pathname.endsWith("/")?"":location.pathname.split("/").pop(), u=`https://${cfg.domain}/${p||""}`; link("canonical",u); meta("name","robots","index,follow,max-image-preview:large"); meta("property","og:site_name","StudentBnB — Base & Belong"); meta("property","og:title",document.title); meta("property","og:description",document.head.querySelector('meta[name="description"]')?.content||"Alojamento universitário na Europa."); meta("property","og:url",u); meta("name","twitter:card","summary_large_image");
  if(!p||p==="index.html"){sites.forEach(s=>link("alternate",s.url,s.code.toLowerCase()));link("alternate","https://studentbnb.eu/","x-default")}
  const b=document.querySelector(".footer-international .footer-country-links");if(b)b.innerHTML=sites.map(s=>`<a href="${s.url}"${s.code===cfg.countryCode?' aria-current="page"':' target="_blank" rel="noopener"'}><span aria-hidden="true">${s.flag}</span> ${s.label}</a>`).join("")+'<a href="https://studentbnb.eu/" target="_blank" rel="noopener">🇪🇺 Europa</a>';
  const i=document.querySelector(".footer-international");if(i&&!i.querySelector(".europe-contact")){const x=document.createElement("p");x.className="europe-contact";x.innerHTML='<a href="mailto:contact@studentbnb.eu">contact@studentbnb.eu</a> · <em>Base & Belong</em>';i.appendChild(x)}
 }
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",apply);else apply();
})();
